import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const failures = [];

const filesUnder = (directory) =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    if ([join(root, '.git'), join(root, 'node_modules')].includes(path)) return [];
    return statSync(path).isDirectory() ? filesUnder(path) : [path];
  });

const files = filesUnder(root);
const markdownFiles = files.filter((path) => extname(path) === '.md');

for (const file of markdownFiles) {
  const source = readFileSync(file, 'utf8');
  const links = source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g);
  for (const [, target] of links) {
    if (/^(?:https?:|mailto:|#)/.test(target)) continue;
    const path = resolve(dirname(file), target.split('#', 1)[0]);
    if (!existsSync(path)) failures.push(`${file}: missing link target ${target}`);
  }
}

let manifest;
try {
  manifest = JSON.parse(readFileSync(join(root, 'standards.json'), 'utf8'));
} catch (error) {
  failures.push(`standards.json: ${error.message}`);
}

if (manifest) {
  for (const [profile, value] of Object.entries(manifest.profiles ?? {})) {
    if (!existsSync(join(root, 'profiles', `${profile}.md`))) {
      failures.push(`standards.json: profile file missing for ${profile}`);
    }
    for (const standard of value.standards ?? []) {
      if (!existsSync(join(root, 'standards', `${standard}.md`))) {
        failures.push(`standards.json: standard file missing for ${profile}/${standard}`);
      }
    }
  }
}

const canonicalUrl = 'https://github.com/ImLunaHey/project-standards/blob/main/AGENT_PLAYBOOK.md';
const promptContracts = {
  'auto.md': ['Mode: auto-detect', 'Never initialize a nested Git repository', 'luna/*'],
  'new-project.md': ['GitHub remote:', 'luna/*', 'Never push project work to main'],
  'migrate-project.md': ['pull request', 'Vitest', 'Never push to main'],
};
for (const prompt of ['auto.md', 'new-project.md', 'migrate-project.md']) {
  const source = readFileSync(join(root, 'prompts', prompt), 'utf8');
  if (!source.includes(canonicalUrl)) failures.push(`prompts/${prompt}: canonical URL missing`);
  for (const requiredText of promptContracts[prompt]) {
    if (!source.includes(requiredText)) {
      failures.push(`prompts/${prompt}: required contract missing: ${requiredText}`);
    }
  }
}

if (manifest?.defaults?.typescriptTestRunner !== 'vitest') {
  failures.push('standards.json: TypeScript test runner must be Vitest');
}
if (manifest?.defaults?.migrationDelivery !== 'pull-request') {
  failures.push('standards.json: migration delivery must be pull-request');
}
if (manifest?.defaults?.defaultBackend !== 'rust-axum-tokio') {
  failures.push('standards.json: Rust/Axum/Tokio must be the default backend');
}
if (manifest?.defaults?.graphql !== 'forbidden') {
  failures.push('standards.json: GraphQL must be forbidden');
}
if (manifest?.defaults?.componentVariantUtility !== 'class-variance-authority') {
  failures.push('standards.json: component variants must use class-variance-authority');
}
if (manifest?.defaults?.oneVariableDeclarationPerStatement !== true) {
  failures.push('standards.json: TypeScript must use one declaration per statement');
}
if (manifest?.defaults?.handwrittenBarrelFiles !== 'forbidden') {
  failures.push('standards.json: handwritten barrel files must be forbidden');
}
if (manifest?.defaults?.generatedBarrelFiles !== 'allowed') {
  failures.push('standards.json: generated barrel files must remain allowed');
}
if (manifest?.defaults?.reactLintPlugin !== 'oxlint-plugin-react-doctor') {
  failures.push('standards.json: React linting must use oxlint-plugin-react-doctor');
}
if (manifest?.defaults?.standaloneReactDoctorCli !== false) {
  failures.push('standards.json: standalone React Doctor CLI must be disabled');
}
if (!manifest?.requiredValidation?.frontend?.includes('react-doctor-oxlint-rules')) {
  failures.push('standards.json: React validation must include React Doctor Oxlint rules');
}
if (manifest?.defaults?.newTypeScriptFormatter !== 'oxfmt') {
  failures.push('standards.json: TypeScript formatter must be Oxfmt');
}
if (manifest?.defaults?.newTypeScriptLinter !== 'oxlint') {
  failures.push('standards.json: TypeScript linter must be Oxlint');
}
if (manifest?.defaults?.branchPattern !== 'luna/<kebab-case-description>') {
  failures.push('standards.json: branch pattern must use luna/*');
}

const readme = readFileSync(join(root, 'README.md'), 'utf8');
for (const requiredText of ['--global --agent codex --yes', 'PromptScript']) {
  if (!readme.includes(requiredText)) {
    failures.push(`README.md: missing skill installation guidance: ${requiredText}`);
  }
}

const skillRoot = join(root, 'skills', 'luna-project-standards');
const skillSource = readFileSync(join(skillRoot, 'SKILL.md'), 'utf8');
for (const requiredText of [
  'name: luna-project-standards',
  'Never GraphQL',
  'Never push project changes directly to `main`',
]) {
  if (!skillSource.includes(requiredText)) {
    failures.push(`skills/luna-project-standards/SKILL.md: missing ${requiredText}`);
  }
}

for (const reference of ['audit', 'create', 'delivery', 'migrate', 'stack']) {
  if (!existsSync(join(skillRoot, 'references', `${reference}.md`))) {
    failures.push(`skill reference missing: ${reference}.md`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `Validated ${markdownFiles.length} Markdown files, ${Object.keys(manifest.profiles).length} profiles, and all prompt contracts.`,
  );
}
