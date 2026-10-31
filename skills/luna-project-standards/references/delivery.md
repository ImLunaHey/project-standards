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
  run with reasons. Every PR with UI work includes labeled Before and After
  screenshots, following the workflow below.
- **Risks and follow-ups:** material risks, breaking changes, migration/rollback
  needs, standards deviations, and remaining work; write `None` if absent.

Remove instructional comments and keep the body aligned with the final diff.
Supply the completed body explicitly for CLI/API-created PRs, including the
initial or migration PR that installs the template; automatic population only
becomes available after the file reaches the default branch. Never claim unrun
checks passed. Describing rollout or follow-up work does not authorize it.

## UI screenshot evidence

Require screenshots for all UI work, including refactors and styling migrations
that preserve appearance. Capture Before from the original revision before
editing, or reconstruct it separately, and After from the final revision.
Refresh After following further UI edits. Match each pair's viewport, theme,
data, and interaction state; identify the route or equivalent flow and the
revisions. Cover affected light/dark and responsive variations. For new UI,
capture the actual predecessor, empty shell, or starter state and label it
honestly. Never fabricate a baseline. Missing captures or uploads are blockers
to completing UI validation; report the missing evidence and reason.

Run `gh --version` and `gh pr create --help` or `gh pr edit --help` for the
command being used. Confirm `--attach` is listed. If absent, upgrade the active
CLI through its package manager or official installer, update any applicable
tool pin, then repeat the version/help checks before uploading.

Prepare the complete PR body file with labeled Before and After image
references under Validation pointing to local files. Pass `--body-file` and
repeat `--attach '<file>#<image alt text>'` for each image on `gh pr create` or
`gh pr edit`; matching image references become uploaded asset URLs. For example,
with the body and images prepared in the working directory and `pr_url` set
to the existing PR URL:

```sh
gh pr edit "$pr_url" --body-file ./pr-body.md \
  --attach './before.png#Before: affected screen' \
  --attach './after.png#After: affected screen'
```

Preserve existing text and successful attachments when editing. Inspect the
resulting PR to verify both images uploaded and are viewable, with no local
image paths left in the body.
A partial upload can still create or edit the PR and return nonzero: inspect
the returned PR before retrying missing attachments; do not create duplicates
or erase successful uploads.

## Validation

Run and report every applicable category:

- formatting and linting
- static type checking
- unit, integration, and end-to-end tests
- accessibility lint and runtime checks for UIs
- visual review of affected shared components and consuming screens in both
  light/dark themes at phone, tablet, and desktop widths, covering applicable
  states, keyboard focus, contrast, text zoom, and overflow
- Before and After screenshots attached to the PR for every UI change
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
