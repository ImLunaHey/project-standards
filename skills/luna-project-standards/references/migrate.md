# Migration mode

1. Read repository instructions and inspect Git status. Preserve unrelated
   changes; stop if required edits overlap changes that cannot be separated.
2. Inventory languages, frameworks, package managers, tests, CI, deployment,
   releases, documentation, licensing, and repository metadata.
3. Run the existing safe checks to distinguish baseline failures from
   migration regressions.
4. Group gaps as required, recommended, and deferred. Defer framework or
   runtime replacement unless the user requested it. Tailwind v3-to-v4
   upgrades are required in the current PR, not deferred framework changes.
   Inspect every frontend workspace and its lockfile resolutions.
5. Create `luna/<kebab-case-description>` from the intended base.
6. Apply the smallest coherent migration. Do not mix product features or broad
   rewrites into the standards PR. Install or reconcile the
   [bundled PR template](../assets/pull_request_template.md) at
   `.github/pull_request_template.md`, preserving necessary project-specific
   requirements as described in the delivery reference.
7. Run every applicable validation category and inspect the diff for secrets,
   generated noise, and behavior changes.
8. Use Conventional Commits. Push only the feature branch and open a PR with a
   Conventional Commit title and a completed template body covering Summary,
   Validation, and Risks and follow-ups, including rationale and deviations.
   Link it to the active T3 Code thread when supported.

Do not merge, publish, deploy, archive, change visibility, or change unrelated
repository settings without explicit authorization.
