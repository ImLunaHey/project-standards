# Configuration templates

These files are reference inputs for an agent, not a blind overlay. The agent
must adapt paths, package-manager commands, runtime versions, deployment needs,
and existing repository conventions.

- [`typescript/`](typescript) contains strict compiler, ESLint, Prettier, and
  Vitest starting points.
- [`rust/`](rust) contains formatting and Cargo lint defaults.
- [`github/`](github) contains CI and dependency-update examples.

During migration, preserve a working equivalent configuration rather than
replacing it solely to match filenames or formatting choices here.
