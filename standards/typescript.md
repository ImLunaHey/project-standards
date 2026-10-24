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
- Declare one variable per statement. Do not chain declarations with commas;
  use separate `const` lines and descriptive names such as `generatedId`
  instead of `generated` when the value's role is known.
- Never create handwritten barrel files or `index.ts` re-export hubs. Import
  from the module that defines the symbol and use explicit package subpath
  exports when a library exposes multiple entry points. A barrel is allowed
  only when an authoritative tool generates it; keep the generator
  configuration in version control and never edit its output by hand.

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

React projects install `oxlint-plugin-react-doctor`, load it through Oxlint's
`jsPlugins`, and enable its recommended rules plus only the framework presets
that match the project. TanStack projects enable the TanStack Start and/or
TanStack Query rule maps as applicable. Run these rules through the normal
Oxlint `lint` command; do not add the standalone React Doctor CLI or a separate
React Doctor CI workflow.

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
- Prefer explicit package subpath entry points. If a package requires an
  aggregate public entry point, generate it rather than maintaining a barrel by
  hand.
- Verify packed contents before release.
- Keep runtime dependencies minimal; development-only tools belong in
  `devDependencies`.
- Do not publish from a migration PR unless separately authorized.
