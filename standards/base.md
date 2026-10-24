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
- No committed build output unless consumers require it, as with bundled
  JavaScript GitHub Actions.

## Code and change quality

- Prefer small modules with clear ownership and explicit error behavior.
- Avoid silent fallbacks that hide broken configuration.
- Validate external input at system boundaries.
- Keep configuration close to the tool that consumes it.
- Comments explain decisions and constraints, not obvious syntax.
- Remove dead starter assets and unused dependencies.
- Use concise conventional commit subjects when the repository has no stronger
  convention.

## Compatibility

- State supported runtime versions.
- Libraries preserve public API compatibility unless a breaking release is
  intentional and documented.
- Applications may update more aggressively, but deployment compatibility must
  be verified.

## Security

- Use least-privilege tokens and CI permissions.
- Pin third-party automation to a reviewed version or commit.
- Treat values committed as API keys or tokens as compromised even if the
  repository is later archived or made private.
- Never print secrets while auditing or migrating a repository.
