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

## Validation

Run and report every applicable category:

- formatting and linting
- static type checking
- unit, integration, and end-to-end tests
- accessibility lint and runtime checks for UIs
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
