# Migration prompt

Use this from an existing repository checkout.

```text
Migrate the current repository to Luna's project standards through a focused
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
Use Vitest for TypeScript tests. Run every applicable check, push a branch, and
open/link a PR with validation and deviations. Do not merge, publish, deploy,
archive, or change repository settings.
```
