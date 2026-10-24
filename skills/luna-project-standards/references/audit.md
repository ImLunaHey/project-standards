# Audit mode

Remain read-only. Do not create branches, edit files, open PRs, or mutate GitHub
settings.

Inspect repository-local instructions, status, languages, architecture,
dependencies, tests, CI, releases, README, licensing, security posture, and
repository metadata. Run only safe diagnostic commands.

Compare the repository with the stack reference, but distinguish:

- **Required:** correctness, security, broken CI/builds, absent essential
  tests, misleading documentation, or an explicit non-negotiable constraint.
- **Recommended:** valuable low-risk alignment and maintainability work.
- **Deferred:** product changes, framework migrations, deployment changes, or
  choices needing the user's direction.

Report evidence, current validation failures, migration risk, and a focused PR
scope. Do not claim a check passed unless it ran successfully.
