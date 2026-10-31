# GitHub and CI standard

- Default branch: `main`.
- Never push directly to `main`. Every code or documentation change is
  delivered through a pull request.
- Branch names use `luna/<kebab-case-description>`.
- Commits and PR titles use Conventional Commits. CI must reject a PR title
  that does not comply. Use the [reusable PR-title workflow](../.github/workflows/pr-title.yml),
  pinned to a reviewed full commit SHA, as described below.
- One repository per migration PR.
- CI permissions default to `contents: read`; grant write permissions only to
  the job that requires them.
- Pin official and third-party GitHub Actions to reviewed full commit SHAs.
- CI runs on pull requests and pushes to `main` using the same commands exposed
  locally.
- Use dependency caching supplied by the ecosystem's setup action.
- Add concurrency cancellation for expensive application workflows when it
  materially saves resources.
- Configure Renovate with scheduled, grouped updates, including updates to
  pinned GitHub Action SHAs.
- Every repository installs and uses the shared PR template described below.
  PR descriptions cover summary, rationale, validation, deviations, and
  follow-ups within its three sections.
- Agents do not merge their own PRs without explicit approval.
- Enable squash merging and disable merge commits and rebase merging. Configure
  the squash commit title from the PR title and its body from the PR body.
- Delete merged branches automatically.
- Repository description, topics, homepage, Pages, package, and deployment
  settings are GitHub state, not PR content; change them only with authorization.

## Shared pull request template

The canonical template is
[`templates/github/pull_request_template.md`](../templates/github/pull_request_template.md).
Install it as `.github/pull_request_template.md` in every repository, regardless
of language or profile. Add it when creating a project; add or reconcile it in
the current PR when migrating an existing repository.

Keep the shared sections in this order:

- **Summary:** the concrete problem, resulting behavior, and rationale. Include
  issue links when relevant; one or two sentences can be enough for small changes.
- **Validation:** exact commands or checks and their results, including failures
  and checks not run with reasons. Add visual evidence when it helps review UI
  changes; never pre-check claims or report unrun checks as passing.
- **Risks and follow-ups:** material risks, breaking changes, migration or
  rollback needs, standards deviations, and remaining work. Write `None` when
  there are none. Documenting rollout work does not authorize performing it.

During migration, inspect existing default and selectable PR templates. Carry
forward necessary repository-specific requirements within or after the shared
sections, and consolidate redundant defaults. Any retained selectable template
must include the shared sections. Do not silently discard required checks or
instructions, or retain a different template solely because it already exists.

Fill the sections and remove instructional comments before opening a PR.
Agents must supply the completed body when using CLI/API tools, including for
the PR that installs the template. Keep the description aligned with the final
diff. GitHub's automatic template population becomes available once the file
is on the default branch; a template is not a CI enforcement rule. See
[GitHub's template documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository).

This repository's active template and the skill's bundled asset must match the
canonical file exactly. Update all three together; `pnpm validate` checks for
drift. Other repositories may retain their necessary additional requirements.

## Reusable PR-title check

Add a caller workflow in each repository. Replace the placeholder with a reviewed
full commit SHA from this standards repository; do not use a moving branch.

```yaml
name: PR title
on:
  pull_request:
    types: [opened, edited, synchronize, reopened]
permissions:
  pull-requests: read
jobs:
  conventional-commit:
    uses: ImLunaHey/project-standards/.github/workflows/pr-title.yml@<reviewed-full-commit-sha>
```

The workflow checks the caller's PR title with a SHA-pinned semantic PR action.
It accepts Conventional Commit types such as `fix:` and `feat(scope)!:`,
and fails malformed titles. The `edited` event rechecks title changes. It needs
only PR read access, no checkout, custom secret, or `secrets: inherit`. Keep
it independent of application builds and path filters. Repository rulesets must
require the resulting title check to block merging; adding a workflow alone does
not change repository protection settings. Configure those settings only when
authorized. See [GitHub's reusable workflow reference](https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations).
