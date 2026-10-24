import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const failures = [];

const filesUnder = (directory) =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    if (path === join(root, ".git")) return [];
    return statSync(path).isDirectory() ? filesUnder(path) : [path];
  });

const files = filesUnder(root);
const markdownFiles = files.filter((path) => extname(path) === ".md");

for (const file of markdownFiles) {
  const source = readFileSync(file, "utf8");
  const links = source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g);
  for (const [, target] of links) {
    if (/^(?:https?:|mailto:|#)/.test(target)) continue;
    const path = resolve(dirname(file), target.split("#", 1)[0]);
    if (!existsSync(path))
      failures.push(`${file}: missing link target ${target}`);
  }
}

let manifest;
try {
  manifest = JSON.parse(readFileSync(join(root, "standards.json"), "utf8"));
} catch (error) {
  failures.push(`standards.json: ${error.message}`);
}

if (manifest) {
  for (const [profile, value] of Object.entries(manifest.profiles ?? {})) {
    if (!existsSync(join(root, "profiles", `${profile}.md`))) {
      failures.push(`standards.json: profile file missing for ${profile}`);
    }
    for (const standard of value.standards ?? []) {
      if (!existsSync(join(root, "standards", `${standard}.md`))) {
        failures.push(
          `standards.json: standard file missing for ${profile}/${standard}`,
        );
      }
    }
  }
}

const canonicalUrl =
  "https://github.com/ImLunaHey/project-standards/blob/main/AGENT_PLAYBOOK.md";
const promptContracts = {
  "auto.md": ["Mode: auto-detect", "Never initialize a nested Git repository"],
  "new-project.md": ["GitHub remote:", "git init"],
  "migrate-project.md": ["pull request", "Use Vitest"],
};
for (const prompt of ["auto.md", "new-project.md", "migrate-project.md"]) {
  const source = readFileSync(join(root, "prompts", prompt), "utf8");
  if (!source.includes(canonicalUrl))
    failures.push(`prompts/${prompt}: canonical URL missing`);
  for (const requiredText of promptContracts[prompt]) {
    if (!source.includes(requiredText)) {
      failures.push(
        `prompts/${prompt}: required contract missing: ${requiredText}`,
      );
    }
  }
}

if (manifest?.defaults?.typescriptTestRunner !== "vitest") {
  failures.push("standards.json: TypeScript test runner must be Vitest");
}
if (manifest?.defaults?.migrationDelivery !== "pull-request") {
  failures.push("standards.json: migration delivery must be pull-request");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Validated ${markdownFiles.length} Markdown files, ${Object.keys(manifest.profiles).length} profiles, and all prompt contracts.`,
  );
}
