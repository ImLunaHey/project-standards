# New-project prompt

Use this from a T3 Code directory that is not already a Git repository.

```text
Use $luna-project-standards to create a new project in the current directory.

Canonical playbook:
https://github.com/ImLunaHey/project-standards/blob/main/AGENT_PLAYBOOK.md

Project: [name and one-sentence purpose]
Profile: [fullstack-app | typescript-library | node-service | frontend | rust-cli | rust-service]
Required stack: [framework/runtime/database/deployment choices]
GitHub remote: [do not create | create public ImLunaHey/NAME | create private ImLunaHey/NAME]

First confirm this directory is not inside another Git worktree. Read the
playbook and relevant standards before editing. Build the smallest complete
vertical slice, add tests and CI, and validate it. Bootstrap an empty main only
as required to create the repository, commit project work on a luna/* branch,
and open a Conventional Commit PR. Only create the remote if the GitHub remote
field explicitly authorizes it. Never push project work to main. Do not merge,
publish, or deploy.
```
