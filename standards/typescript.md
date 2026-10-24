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
- New projects use pnpm unless an external deployment constraint requires
  something else.
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

Use Vitest for tests. New projects use Oxfmt and Oxlint rather than Prettier or
ESLint. Migrations replace existing tools only when the requested scope permits
it and the resulting rules provide equivalent or stronger coverage.

## Applications and workspaces

- Use Evlog for structured TypeScript logging. Prefer request-scoped wide
  events for operations that accumulate meaningful context, redact sensitive
  fields, and emit readable local output plus JSON in production.
- Validate environment configuration at startup and provide a secret-free
  `.env.example`.
- In mixed monorepos, use a pnpm workspace alongside the Cargo workspace.
  Turborepo coordinates root tasks and caching when more than one app/package
  benefits from it.
- Pin Node, pnpm, and supporting tools with Mise.

## Libraries

- Declare `files`, `exports`, `types`, `engines`, repository, bugs, homepage,
  keywords, and license metadata.
- Verify packed contents before release.
- Keep runtime dependencies minimal; development-only tools belong in
  `devDependencies`.
- Do not publish from a migration PR unless separately authorized.
