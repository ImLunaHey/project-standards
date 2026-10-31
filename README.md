# Luna's project standards

Agent-ready standards for creating new repositories and migrating existing
ones. The same playbook works in an empty T3 Code directory or inside an
existing checkout.

## Install the skill

Install it for Codex in the current project:

```sh
npx skills add ImLunaHey/project-standards --skill luna-project-standards --agent codex --yes
```

Install it globally for Codex so it is available across projects:

```sh
npx skills add ImLunaHey/project-standards --skill luna-project-standards --global --agent codex --yes
```

Then ask the agent to use `$luna-project-standards` to create, migrate, or
audit a project. Automatic discovery remains enabled for matching requests.

The `--agent codex` selection matters when other agents are detected. Some,
including PromptScript, do not support global installation; install for those
agents at project scope instead of using `--global`.

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

- Rust with Axum and Tokio is the default backend. TanStack Start is used when
  a TypeScript backend is explicitly required.
- Frontends use React, Tailwind, and relevant TanStack libraries with custom,
  accessible components. GraphQL and component/headless UI kits are forbidden.
- New interfaces use shared native controls, typed CVA variants, and semantic
  theme tokens. Dark mode defaults to true black with neutral gray surfaces
  and restrained product accents; system-aware light mode is also required.
  Migrations preserve existing visual identity unless a redesign is requested.
  See the [component and visual design rules](standards/frontend.md).
- pnpm, Oxfmt, Oxlint, Vitest, Mise, Renovate, and Turborepo are the TypeScript
  and monorepo defaults.
- Public original work defaults to the MIT license unless the project brief
  requires another license.
- Existing package managers and frameworks are preserved during migrations.
- CI uses least privilege and runs the same checks developers run locally.
- All project changes use `luna/*` branches and Conventional Commit PRs. Agents
  never push project changes to `main` or merge without explicit approval.

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
adaptable defaults, but the explicit absolute constraints in the playbook must
be changed deliberately rather than silently ignored. User instructions retain
highest precedence.

## License

MIT
