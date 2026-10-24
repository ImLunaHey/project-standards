# Migration checklist

## Discovery

- [ ] Read repository-local instructions.
- [ ] Check worktree status and preserve unrelated changes.
- [ ] Detect languages, profile, framework, package manager, and deployment.
- [ ] Select Rust/Axum by default for backend work; use TanStack Start only for
      an explicitly required TypeScript backend.
- [ ] Record existing check results before editing.
- [ ] Identify published packages or deployed services.

## Repository surface

- [ ] Description, topics, and homepage are accurate.
- [ ] README explains purpose, status, setup, configuration, commands, testing,
      deployment/publishing, and license.
- [ ] License file and package metadata agree.
- [ ] Starter copy, dead assets, and obsolete badges are removed.
- [ ] Secrets are absent; environment examples contain placeholders only.

## Engineering

- [ ] Exactly one lockfile exists per package-manager scope.
- [ ] Format, lint, type-check, test, and build commands are reproducible.
- [ ] TypeScript tests use Vitest.
- [ ] TypeScript uses pnpm and Oxc where migration scope permits.
- [ ] No handwritten barrel files are added; any generated barrel has committed
      generator configuration and is not edited manually.
- [ ] Frontends meet WCAG 2.2 AA, fail accessibility lint, remain mobile-first,
      and use custom Tailwind components without component/headless UI kits.
- [ ] Published package exports and packed files are validated.
- [ ] Rust passes fmt, Clippy with warnings denied, cargo-nextest, and doc tests.
- [ ] CI has least privilege and pins actions to full commit SHAs.
- [ ] Dependency audit results are understood and documented.

## Delivery

- [ ] Diff contains no unrelated changes or generated noise.
- [ ] Migration branch has a focused commit history.
- [ ] Branch matches `luna/<kebab-case-description>`.
- [ ] Commits and PR title follow Conventional Commits.
- [ ] PR explains changes, validation, deviations, and follow-ups.
- [ ] PR is linked to the T3 Code thread when supported.
- [ ] Nothing is merged, published, deployed, archived, or reconfigured without
      explicit approval.
