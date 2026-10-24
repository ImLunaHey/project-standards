# Luna's project standards

Agent-ready standards for creating new repositories and migrating existing
ones. The same playbook works in an empty T3 Code directory or inside an
existing checkout.

## Start here

Choose one of the copy-paste prompts:

- [`prompts/auto.md`](prompts/auto.md) detects whether the current directory is
  a new project or an existing repository.
- [`prompts/new-project.md`](prompts/new-project.md) creates a project from
  scratch.
- [`prompts/migrate-project.md`](prompts/migrate-project.md) updates an existing
  repository through a pull request.

All three point the agent at [`AGENT_PLAYBOOK.md`](AGENT_PLAYBOOK.md), which is
the canonical workflow. Standards are split by concern under [`standards/`](standards),
and project-type profiles live under [`profiles/`](profiles).
Adaptable reference configuration lives under [`templates/`](templates).

## Core defaults

- `main` is the default branch.
- Public original work defaults to the MIT license unless the project brief
  requires another license.
- TypeScript tests use Vitest.
- Existing package managers and frameworks are preserved during migrations.
- New projects do not guess consequential framework or deployment choices; the
  agent asks when the brief does not provide them.
- CI uses least privilege and runs the same checks developers run locally.
- Agents open migration PRs but never merge them without explicit approval.

Machine-readable defaults are available in [`standards.json`](standards.json).

## How mass migration works

Open a T3 Code thread in each repository and paste the migration prompt. The
agent performs a gap analysis, applies only relevant standards, validates the
result, and opens one focused PR. Repeat per repository; do not combine
unrelated repositories into one migration branch.

Standards are deliberately versioned in one place so future migration rounds
can reference a commit or release for reproducibility.

## Status

This is a living standards repository. Project-specific requirements override
these defaults, and explicit user instructions override everything here.

## License

MIT
