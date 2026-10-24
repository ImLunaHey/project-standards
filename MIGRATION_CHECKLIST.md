# Migration checklist

## Discovery

- [ ] Read repository-local instructions.
- [ ] Check worktree status and preserve unrelated changes.
- [ ] Detect languages, profile, framework, package manager, and deployment.
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
- [ ] Published package exports and packed files are validated.
- [ ] Rust passes fmt, Clippy with warnings denied, and tests.
- [ ] CI has least privilege and uses maintained actions.
- [ ] Dependency audit results are understood and documented.

## Delivery

- [ ] Diff contains no unrelated changes or generated noise.
- [ ] Migration branch has a focused commit history.
- [ ] PR explains changes, validation, deviations, and follow-ups.
- [ ] PR is linked to the T3 Code thread when supported.
- [ ] Nothing is merged, published, deployed, archived, or reconfigured without
      explicit approval.
