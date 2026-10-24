# TypeScript standard

## Compiler and modules

- Enable strict type checking.
- Target the oldest explicitly supported runtime, not `ESNext` by habit.
- Use ESM for new applications and libraries. Add CommonJS output only when
  actual consumers need it.
- Published dual-format packages provide condition-specific JavaScript and
  declaration files and pass an export validation tool such as
  `@arethetypeswrong/cli`.
- Avoid `any`; use `unknown`, validation, and narrowing at boundaries.

## Package management

- Preserve the existing package manager during migrations.
- New projects use the package manager named in the brief. Ask when it affects
  deployment or publishing and is not specified.
- Commit exactly one lockfile for the selected manager.
- Published npm libraries use npm-compatible lifecycle scripts; do not require
  Bun merely to install or pack unless Bun is the declared runtime contract.

## Commands

Expose applicable scripts with predictable names:

- `dev`
- `build`
- `test`
- `typecheck`
- `lint`
- `format` and/or `format:check`
- `check` for the full local validation sequence

Use Vitest for tests. Preserve an established formatter/linter during
migration. For a new project without a stated choice, use Prettier and ESLint
flat configuration; do not install competing tools that perform the same job.

## Libraries

- Declare `files`, `exports`, `types`, `engines`, repository, bugs, homepage,
  keywords, and license metadata.
- Verify packed contents before release.
- Keep runtime dependencies minimal; development-only tools belong in
  `devDependencies`.
- Do not publish from a migration PR unless separately authorized.
