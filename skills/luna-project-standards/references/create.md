# Create mode

1. Confirm no parent Git worktree owns the directory and inspect any existing
   files before writing.
2. Determine the product type, deployment constraints, repository visibility,
   and whether a remote is authorized. Ask only about a consequential choice
   that the stack reference does not already decide.
3. Build the smallest complete vertical slice. Remove generated filler,
   placeholder tests, and unused dependencies.
4. Add a practical README, MIT license for public original work unless
   constrained otherwise, `.gitignore`, secret-free `.env.example`, tests, CI,
   Renovate, local validation commands, and the
   [bundled PR template](../assets/pull_request_template.md) at
   `.github/pull_request_template.md`.
5. Pin tools with Mise, commit the appropriate lockfiles, and include
   production Dockerfiles plus Docker Compose when external local services are
   needed.
6. Validate before Git delivery.

## Git bootstrap

Never put project work directly on `main`. A new remote needs a base before a
PR can exist, so limit the unavoidable bootstrap to an empty root commit:

1. Initialize `main` only after the ownership check.
2. Create an empty bootstrap commit.
3. Create `luna/initial-project` and commit all project files there with
   Conventional Commits.
4. Create a remote only when explicitly authorized, push the base and feature
   branches, then open a PR with the completed template body. Supply the body
   explicitly even before the template reaches `main`. Do not merge it.

If the user did not authorize a remote, leave the validated local branch ready
and explain that a PR cannot exist until a remote is chosen.
