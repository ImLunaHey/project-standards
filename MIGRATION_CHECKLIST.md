# Migration checklist

## Discovery

- [ ] Read repository-local instructions.
- [ ] Check worktree status and preserve unrelated changes.
- [ ] Detect languages, profile, framework, package manager, and deployment.
- [ ] Select Rust/Axum by default for backend work; use TanStack Start only for
      an explicitly required TypeScript backend.
- [ ] Record existing check results before editing.
- [ ] For UI work, capture Before screenshots before editing, or reconstruct
      the original revision. Record routes, states, data, themes, and viewports
      for a matching After capture; an unavailable baseline is missing evidence.
- [ ] Identify published packages or deployed services.

## Repository surface

- [ ] Description, topics, and homepage are accurate.
- [ ] README explains purpose, status, setup, configuration, commands, testing,
      deployment/publishing, and license.
- [ ] License file and package metadata agree.
- [ ] Starter copy, dead assets, and obsolete badges are removed.
- [ ] Secrets are absent; environment examples contain placeholders only.
- [ ] `.github/pull_request_template.md` uses the shared template. Existing
      templates are reconciled without losing necessary project-specific
      requirements; any retained selectable templates use the shared sections.

## Engineering

- [ ] Exactly one lockfile exists per package-manager scope.
- [ ] Format, lint, type-check, test, and build commands are reproducible.
- [ ] TypeScript tests use Vitest.
- [ ] TypeScript uses pnpm and Oxc where migration scope permits.
- [ ] No handwritten barrel files are added; any generated barrel has committed
      generator configuration and is not edited manually.
- [ ] Frontends meet WCAG 2.2 AA, fail accessibility lint, remain mobile-first,
      and use custom Tailwind v4 components without component/headless UI kits.
- [ ] Every frontend workspace uses Tailwind v4. Any v3 usage is upgraded in
      this PR, including affected configuration, plugins, and styles; inspect
      workspace dependencies and lockfile resolutions for remaining v3 usage.
- [ ] Components import `cn` from its installed package. Custom merge rules,
      builds, and affected component states are validated after migration.
- [ ] Pages, resource details, and navigable tabs use slash routes; query/hash
      routing is replaced; add compatibility redirects only when the user explicitly
      requests them. Filters stay in
      query parameters, and direct entry, reload, history, and invalid paths
      are tested against the deployment contract.
- [ ] Published package exports and packed files are validated.
- [ ] Rust passes fmt, Clippy with warnings denied, cargo-nextest, and doc tests.
- [ ] CI has least privilege and pins actions to full commit SHAs.
- [ ] Dependency audit results are understood and documented.

## Delivery

- [ ] Diff contains no unrelated changes or generated noise.
- [ ] Migration branch has a focused commit history.
- [ ] Branch matches `luna/<kebab-case-description>`.
- [ ] Commits and PR title follow Conventional Commits.
- [ ] PR completes the shared Summary, Validation, and Risks and follow-ups
      sections, explaining rationale, exact checks/results, and deviations.
      Instructional comments are removed; no unrun check is claimed as passing.
- [ ] Every UI PR, including refactors and styling migrations, contains labeled
      Before/After screenshots under Validation, covering affected themes and
      responsive layouts. After screenshots reflect the final UI revision.
- [ ] For UI work, verify `--attach` in the intended `gh pr create --help` or
      `gh pr edit --help`; update the active CLI installation if missing and
      recheck. Upload with repeated `--attach` flags and verify both images in
      the PR following the [GitHub standard](standards/github.md).
- [ ] PR is linked to the T3 Code thread when supported.
- [ ] Nothing is merged, published, deployed, archived, or reconfigured without
      explicit approval.
