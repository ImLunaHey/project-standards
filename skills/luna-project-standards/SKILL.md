---
name: luna-project-standards
description: Create, migrate, or audit software repositories using Luna's opinionated Rust, TypeScript, TanStack, testing, accessibility, and pull-request standards. Use for new project scaffolding, bringing an existing repository up to these standards, or assessing compliance; do not use for an unrelated narrow code change unless the user asks to apply the standards.
---

# Luna project standards

Apply these standards without expanding the user's requested scope. Repository
instructions and the user's explicit requirements take precedence, but report
any deviation from an absolute constraint rather than silently substituting a
different stack.

## Select a mode

Inspect the working directory before modifying it.

- If the user asks only for status, review, or compliance, use **audit mode**
  and read [references/audit.md](references/audit.md). It is read-only.
- If no Git worktree owns the directory, use **create mode** and read
  [references/create.md](references/create.md).
- If the directory is in a Git worktree, use **migration mode** and read
  [references/migrate.md](references/migrate.md).
- If ownership is ambiguous, stop and ask before initializing Git or moving
  files. Never initialize a nested repository.

For create or migration work, also read:

- [references/stack.md](references/stack.md) for architecture and tool choices
- [references/delivery.md](references/delivery.md) for validation and PR rules

Load only the mode reference that applies. Preserve unrelated user changes and
never treat this skill as permission to merge, publish, deploy, archive, change
visibility, or mutate unrelated repository settings.

## Non-negotiable defaults

- Rust is the default backend; use TanStack Start only when a TypeScript
  backend is explicitly required.
- REST/OpenAPI only. Never GraphQL.
- Tailwind v4 with custom components only. Upgrade existing Tailwind v3
  workspaces in the current migration PR. Never shadcn/ui, Radix, or another
  component/headless UI kit.
- Never create handwritten barrel files. Generator-owned barrels are allowed
  but must not be edited manually.
- Every user-facing interface is mobile-first and meets WCAG 2.2 AA.
- Every PR with UI work includes labeled Before and After screenshots under
  Validation; follow the delivery reference for capture and GitHub CLI attachment
  capability checks, CLI upgrades when needed, and upload verification.
- Every project change uses a `luna/*` branch, Conventional Commits, and a PR.
  Never push project changes directly to `main`.
- Every repository installs and uses the
  [shared PR template](assets/pull_request_template.md) at
  `.github/pull_request_template.md`, following the delivery reference.

Finish by reporting the outcome, exact validation run, deviations, PR link when
one was created, and the next decision needed from the user.
