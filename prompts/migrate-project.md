# Migration prompt

Use this from an existing repository checkout.

```text
Use $luna-project-standards to migrate the current repository through a focused
pull request.

Canonical playbook:
https://github.com/ImLunaHey/project-standards/blob/main/AGENT_PLAYBOOK.md

Profile: auto-detect
Migration scope: repository hygiene, documentation, tests, CI, package/build
metadata, and safe dependency maintenance.
Compatibility constraints: preserve the current product behavior, framework,
package manager, deployment contract, and supported runtime unless a change is
required to fix a demonstrated problem.

Read repository-local instructions and the canonical playbook before editing.
Audit first, record baseline failures, then apply the smallest coherent change.
Apply frontend component rules within scope, including shared native controls,
CVA variants, and semantic theme tokens. Preserve the existing visual identity
unless a redesign is requested; do not recolor the product merely to match the
new-interface true-black default. Check affected components in both themes at
phone, tablet, and desktop widths.
Use a luna/* branch, Conventional Commits, and Vitest for TypeScript tests. Run
every applicable check and open/link a Conventional Commit PR with validation
and deviations. Never push to main. Do not merge, publish, deploy, archive, or
change repository settings.
```
