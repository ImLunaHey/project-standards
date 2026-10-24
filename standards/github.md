# GitHub and CI standard

- Default branch: `main`.
- Migration branch: a focused descriptive branch, normally
  `chore/apply-project-standards`.
- One repository per migration PR.
- CI permissions default to `contents: read`; grant write permissions only to
  the job that requires them.
- Official GitHub actions may use maintained major tags. Third-party actions
  should be pinned to a reviewed full commit SHA when practical.
- CI runs on pull requests and pushes to `main` using the same commands exposed
  locally.
- Use dependency caching supplied by the ecosystem's setup action.
- Add concurrency cancellation for expensive application workflows when it
  materially saves resources.
- Configure Dependabot or an equivalent only when someone will review its PRs;
  group low-risk development updates to reduce noise.
- PR descriptions include summary, rationale, validation, deviations, and
  follow-ups.
- Agents do not merge their own PRs without explicit approval.
- Repository description, topics, homepage, Pages, package, and deployment
  settings are GitHub state, not PR content; change them only with authorization.
