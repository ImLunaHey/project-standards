# New-project prompt

Use this from a T3 Code directory that is not already a Git repository.

```text
Create a new project in the current directory using Luna's standards.

Canonical playbook:
https://github.com/ImLunaHey/project-standards/blob/main/AGENT_PLAYBOOK.md

Project: [name and one-sentence purpose]
Profile: [typescript-library | node-service | frontend | rust-cli | rust-service]
Required stack: [framework/runtime/database/deployment choices]
GitHub remote: [do not create | create public ImLunaHey/NAME | create private ImLunaHey/NAME]

First confirm this directory is not inside another Git worktree. Read the
playbook and relevant standards before editing. Build the smallest complete
vertical slice, add tests and CI, validate it, run `git init -b main`, and
create an initial commit. Only create the remote if the GitHub remote field
explicitly authorizes it. Do not publish or deploy.
```
