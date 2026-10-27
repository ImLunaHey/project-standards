# Base repository standard

Applies to every original project unless a repository-specific requirement
overrides it.

## Required

- A specific repository name and one-sentence GitHub description.
- A root README that explains purpose, status, setup, configuration, common
  commands, testing, deployment or publishing when applicable, and license.
- No untouched generator README, placeholder tests, or misleading badges.
- One primary lockfile per package-manager scope.
- A `.gitignore` appropriate to the stack.
- `.env.example` or equivalent when runtime configuration exists; never commit
  live credentials.
- An explicit license for public reusable work. Default to MIT only when no
  dependency, upstream, or product constraint requires another license.
- Reproducible local commands for all CI checks.
- Tool versions pinned with Mise when the project has development tool
  dependencies beyond the language-native manifest.
- No committed build output unless consumers require it, as with bundled
  JavaScript GitHub Actions.

## Code and change quality

- Prefer small modules with clear ownership and explicit error behavior.
- Avoid silent fallbacks that hide broken configuration.
- Validate external input at system boundaries.
- Keep configuration close to the tool that consumes it.
- Comments explain decisions and constraints, not obvious syntax.
- Remove dead starter assets and unused dependencies.
- Use Conventional Commits for every commit and PR title.
- Record material dependency, storage, security, and architecture choices as
  short ADRs under `docs/decisions/`.

## Compatibility

- State supported runtime versions.
- Backwards compatibility is opt-in. Do not add legacy redirects, shims,
  fallback formats, or dual behavior unless the user explicitly requests it.
- Document breaking changes and their migration impact; this does not imply
  maintaining the old behavior. Verify the supported deployment environment.
- Published projects follow semantic versioning and maintain a changelog. Use
  Changesets for TypeScript packages and release-plz for Rust crates.

## Security

- Use least-privilege tokens and CI permissions.
- Commit lockfiles and pin every GitHub Action to a reviewed full commit SHA.
- Run ecosystem dependency audits, secret scanning, and `cargo deny` where
  applicable. Add CodeQL to public applications and security-sensitive code.
- Treat values committed as API keys or tokens as compromised even if the
  repository is later archived or made private.
- Never print secrets while auditing or migrating a repository.
