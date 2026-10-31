# Configuration templates

These files are reference inputs for an agent, not a blind overlay. The agent
must adapt paths, package-manager commands, runtime versions, deployment needs,
and existing repository conventions.

- [`typescript/`](typescript) contains strict compiler, Oxfmt, Oxlint, and
  Vitest starting points.
- [`rust/`](rust) contains formatting, Cargo lint, and cargo-nextest defaults.
- [`github/`](github) contains CI, Renovate, and PR-title validation examples,
  plus the [shared PR template](github/pull_request_template.md).

During migration, preserve a working equivalent configuration rather than
replacing it solely to match filenames or formatting choices here.
The shared PR template is required in every repository: install it at
`.github/pull_request_template.md` and reconcile existing templates using the
[GitHub standard](../standards/github.md). Preserve necessary project-specific
requirements within or after its shared sections. This repository's active
template and the skill asset are exact copies of the canonical template;
`pnpm validate` rejects drift between them.
Every PR with UI work includes labeled Before and After screenshots under
Validation, uploaded with `--attach` on `gh pr create` or `gh pr edit` after
checking support; upgrade the CLI first when the flag is missing, as detailed
in the GitHub standard.

Place `rust/nextest.toml` at `.config/nextest.toml` in a Cargo workspace.
For React projects, use `typescript/oxlint-react.config.ts` instead of
`.oxlintrc.json`; Oxlint supports only one discovered configuration file per
directory. Remove framework rule maps that do not match the project.
