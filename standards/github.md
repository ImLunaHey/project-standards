# GitHub and CI standard

- Default branch: `main`.
- Never push directly to `main`. Every code or documentation change is
  delivered through a pull request.
- Branch names use `luna/<kebab-case-description>`.
- Commits and PR titles use Conventional Commits. CI must reject a PR title
  that does not comply.
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
- PR descriptions include summary, rationale, validation, deviations, and
  follow-ups.
- Agents do not merge their own PRs without explicit approval.
- Enable squash merging and disable merge commits and rebase merging. Configure
  the squash commit title from the PR title and its body from the PR body.
- Delete merged branches automatically.
- Repository description, topics, homepage, Pages, package, and deployment
  settings are GitHub state, not PR content; change them only with authorization.
