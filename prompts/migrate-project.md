# Migration prompt

Use this from an existing repository checkout.

```text
Use $luna-project-standards to migrate the current repository through a focused
pull request.

Canonical playbook:
https://github.com/ImLunaHey/project-standards/blob/main/AGENT_PLAYBOOK.md

Profile: auto-detect
Migration scope: repository hygiene, documentation, tests, CI, package/build
metadata, safe dependency maintenance, and required Tailwind v3-to-v4 upgrades.
Compatibility constraints: preserve the current product behavior, framework,
package manager, deployment contract, and supported runtime unless a change is
required to fix a demonstrated problem.

Read repository-local instructions and the canonical playbook before editing.
Audit first, record baseline failures, then apply the smallest coherent change.
Install or reconcile .github/pull_request_template.md with the shared template
in this PR, retaining necessary repository-specific requirements. Complete its
Summary, Validation, and Risks and follow-ups sections for the PR body,
including when using CLI/API tools.
Apply frontend component rules within scope, including shared native controls,
CVA variants, Tailwind v4, direct cn package imports, and semantic theme tokens.
Upgrade any Tailwind v3 workspaces to v4 in this PR; do not defer the upgrade
under framework or dependency-major preservation rules.
Preserve the existing visual identity unless a redesign is requested. Do not
recolor the product merely to match the new-interface true-black default.
Check affected components in both themes at phone, tablet, and desktop widths.
Every UI PR, including refactors and styling migrations, must include labeled
Before/After screenshots under Validation. Capture the baseline before edits
(or reconstruct the original revision) and the final UI with matching capture
conditions, covering affected themes and responsive layouts. Missing baseline
evidence is not a waiver. Refresh After screenshots after UI edits. Follow the
GitHub standard: check --attach in gh pr create --help or gh pr edit --help for
the intended command, update the active CLI if missing and recheck, then upload
with repeated --attach and verify both images in the PR.
Use a luna/* branch, Conventional Commits, and Vitest for TypeScript tests. Run
every applicable check and open/link a Conventional Commit PR with validation
and deviations. Never push to main. Do not merge, publish, deploy, archive, or
change repository settings.
```
