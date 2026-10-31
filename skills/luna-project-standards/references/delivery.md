# Delivery and validation

## Git and GitHub

- Never push project changes to `main`.
- Use `luna/<kebab-case-description>` branches.
- Every commit and PR title follows Conventional Commits.
- Deliver all changes through PRs. Require CI and explicit user approval before
  merge.
- Prefer squash-only repositories configured to use the PR title as the commit
  title and PR body as the commit body, then delete merged branches.
- Pin GitHub Actions to full commit SHAs and let Renovate update them.

## Pull request template

Install the [bundled template](../assets/pull_request_template.md) at
`.github/pull_request_template.md` in every repository. New projects include it
from the start; migrations add or reconcile it in the current PR. Inspect
existing default and selectable templates, preserve necessary project-specific
requirements within or after the shared sections, and consolidate redundant
defaults. Any retained selectable template must use the shared sections too.

Complete these sections in order:

- **Summary:** the problem, resulting behavior, and rationale; include relevant
  issue links. Keep small changes to one or two sentences when sufficient.
- **Validation:** exact commands/checks and results, failures, and anything not
  run with reasons. Include visual evidence when useful for UI review.
- **Risks and follow-ups:** material risks, breaking changes, migration/rollback
  needs, standards deviations, and remaining work; write `None` if absent.

Remove instructional comments and keep the body aligned with the final diff.
Supply the completed body explicitly for CLI/API-created PRs, including the
initial or migration PR that installs the template; automatic population only
becomes available after the file reaches the default branch. Never claim unrun
checks passed. Describing rollout or follow-up work does not authorize it.

## Validation

Run and report every applicable category:

- formatting and linting
- static type checking
- unit, integration, and end-to-end tests
- accessibility lint and runtime checks for UIs
- visual review of affected shared components and consuming screens in both
  light/dark themes at phone, tablet, and desktop widths, covering applicable
  states, keyboard focus, contrast, text zoom, and overflow
- production builds and packaging/export checks
- dependency, license, and secret audits
- runtime smoke tests when packaging or module formats change

For Rust, the normal CI baseline is `cargo fmt --check`, Clippy with warnings
denied, `cargo nextest run --all-features`, `cargo test --doc --all-features`,
`cargo audit`, and `cargo deny check` where applicable. Keep `cargo test`
compatible.

For TypeScript, expose consistent `format`, `lint`, `typecheck`, `test`,
`build`, and aggregate `check` tasks using pnpm, Oxfmt, Oxlint, and Vitest.
React projects include a pinned `oxlint-plugin-react-doctor` dependency and run
its applicable rule sets through the existing Oxlint command. Do not add a
standalone React Doctor CLI invocation.

Collect coverage and aim for high file, function, and component coverage, but
do not impose or game a universal percentage threshold.
