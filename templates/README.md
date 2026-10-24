# Configuration templates

These files are reference inputs for an agent, not a blind overlay. The agent
must adapt paths, package-manager commands, runtime versions, deployment needs,
and existing repository conventions.

- [`typescript/`](typescript) contains strict compiler, Oxfmt, Oxlint, and
  Vitest starting points.
- [`rust/`](rust) contains formatting, Cargo lint, and cargo-nextest defaults.
- [`github/`](github) contains CI, Renovate, and PR-title validation examples.

During migration, preserve a working equivalent configuration rather than
replacing it solely to match filenames or formatting choices here.

Place `rust/nextest.toml` at `.config/nextest.toml` in a Cargo workspace.
