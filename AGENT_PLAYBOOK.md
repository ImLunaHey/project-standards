# Agent playbook

This file is the canonical execution contract for agents applying Luna's
project standards.

## Instruction precedence

Follow instructions in this order:

1. The user's current request and constraints.
2. Instructions already present in the target repository, including
   `AGENTS.md`, `CONTRIBUTING.md`, and documented project commands.
3. The selected profile and standards in this repository.
4. Tool defaults and general conventions.

Never erase a deliberate project choice merely because a default here differs.
Record justified deviations in the final report or PR description.

## Load the standards

Before changing the target, read:

1. [`standards/base.md`](standards/base.md)
2. [`standards/testing.md`](standards/testing.md)
3. [`standards/github.md`](standards/github.md)
4. Every language or platform standard relevant to the detected project
5. One primary profile from [`profiles/`](profiles)

Use `standards.json` for detection and automation, but treat the Markdown files
as the fuller explanation when the two appear ambiguous.

If the canonical files cannot be accessed, stop and ask the user to provide
them. Do not invent a remembered or approximate version of the standards.

## Detect the operating mode

Inspect the current working directory without modifying it.

- **New-project mode:** no `.git` directory/file exists and no parent checkout
  clearly owns the directory.
- **Migration mode:** the directory is inside an existing Git worktree.
- **Ambiguous mode:** files exist but Git ownership or the intended target is
  unclear. Stop and ask before initializing Git or moving files.

Do not initialize a nested repository inside another checkout.

## New-project mode

1. Read the project brief. Identify the product type, primary language,
   runtime, deployment target, visibility, and whether a remote repository is
   requested.
2. If a consequential choice is missing—such as frontend framework, database,
   runtime, or public/private visibility—ask one concise question. Do not ask
   about choices already covered by a profile default.
3. Inspect pre-existing files. Preserve anything outside the new project's
   scope and stop if safe ownership is unclear.
4. Select exactly one primary profile. Add secondary standards only when the
   project genuinely uses them.
5. Scaffold the smallest working vertical slice. Remove generated starter
   copy, placeholder assets, and failing placeholder tests.
6. Add repository essentials: README, license when applicable, `.gitignore`,
   environment example, local quality commands, tests, and CI.
7. Install dependencies using the selected package manager and commit exactly
   one lockfile.
8. Run format, lint, type-check, test, build, and package checks that apply.
9. Run `git init -b main` only after confirming the directory is not inside
   another worktree. Create an initial commit if the user requested a complete
   repository.
10. Create or connect a GitHub remote only when the prompt explicitly
    authorizes it. Never infer public visibility.

## Migration mode

1. Read repository-local instructions and inspect Git status before editing.
   Preserve unrelated user changes.
2. Inventory languages, package managers, frameworks, build commands, tests,
   CI, deployment, release flow, README quality, licensing, and repository
   metadata.
3. Establish a baseline by running the existing safe checks. Distinguish
   pre-existing failures from migration regressions.
4. Produce a short gap list grouped as:
   - **Required:** correctness, security, missing tests/CI, misleading docs, or
     broken package metadata.
   - **Recommended:** maintainability improvements with low migration risk.
   - **Deferred:** major framework/runtime changes or choices needing product
     input.
5. Create a focused branch such as `chore/apply-project-standards` unless the
   user supplied a branch convention.
6. Apply the smallest coherent migration. Preserve the existing framework and
   package manager unless changing them is explicitly requested or required to
   fix a demonstrated problem.
7. Do not mix product features, broad rewrites, or unrelated dependency majors
   into a standards PR.
8. Run the full applicable validation set and inspect the final diff for
   secrets, generated noise, and accidental behavior changes.
9. Commit, push, and open a PR with summary, rationale, validation, known
   deviations, and follow-up work. Link the PR to the active T3 Code thread
   when the tool is available.
10. Never merge, publish a package, deploy, archive, or change repository
    visibility without explicit approval.

## Repository creation and GitHub metadata

For a new remote, set a useful description and relevant topics. Do not enable
GitHub Pages, packages, deployments, branch protection, secrets, or external
integrations unless requested. For migrations, recommend metadata changes in
the PR or report; make out-of-band repository-setting changes only when
explicitly authorized.

## Validation contract

Run every applicable category and report the exact commands:

- formatting check
- linting
- static type checking
- unit/integration tests
- production build
- package/export validation for published libraries
- dependency/security audit appropriate to the ecosystem
- runtime smoke test when packaging or module format changes

If a check cannot run, explain why. Do not describe unrun checks as passing.

## Completion report

End with:

- outcome and repository/PR links
- important decisions and deviations
- validation results
- anything intentionally not changed
- the next decision required from the user
