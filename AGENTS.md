# Repository instructions

This repository is the source of truth for Luna's project standards.

- Keep `AGENT_PLAYBOOK.md`, `standards.json`, profiles, and prompts consistent.
- Prefer concise, testable instructions over aspirational prose.
- Do not add a tool as a universal default unless it is documented in the
  relevant standard and machine-readable manifest.
- Preserve the distinction between new-project and migration behavior.
- Prompts must work when pasted into T3 Code from a directory with no Git
  repository and from an existing checkout.
- Migration instructions must default to a PR and must not authorize merging,
  publishing, deployment, archival, or visibility changes.
- Check all relative Markdown links before committing.
