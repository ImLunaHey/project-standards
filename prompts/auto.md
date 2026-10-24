# Auto-detect prompt

Copy everything below into T3 Code and replace the bracketed fields.

```text
Apply Luna's project standards to the current directory.

Canonical standards:
https://github.com/ImLunaHey/project-standards/blob/main/AGENT_PLAYBOOK.md

Mode: auto-detect.
- If the directory is not inside a Git worktree, follow new-project mode.
- If it is an existing Git worktree, follow migration mode and open a PR.
- Never initialize a nested Git repository.

Project brief: [what this project is or should become]
Primary profile: [auto | typescript-library | node-service | frontend | rust-cli | rust-service]
Remote intent: [none | use existing origin | create public repo NAME | create private repo NAME]
Additional constraints: [deployment target, framework, database, compatibility, or none]

Read the canonical playbook and every relevant linked standard before editing.
Preserve explicit repository-local decisions. Run all applicable validation.
Do not merge, publish, deploy, archive, or change visibility without asking.
```
