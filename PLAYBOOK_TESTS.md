# Playbook acceptance scenarios

Use these scenarios when changing prompts or workflow rules.

## New project in an empty directory

Given a directory with no files and no parent Git worktree, the agent selects a
profile, creates the smallest working project, validates it, bootstraps only an
empty `main`, and delivers project work from `luna/initial-project` through a PR
when the prompt explicitly requests a remote.

## Apparent empty directory inside a checkout

Given an empty subdirectory owned by a parent Git worktree, the agent must not
run `git init`. It treats the parent as the target or asks which directory the
user intended.

## Existing clean repository

The agent audits before editing, selects a profile, records baseline results,
creates a migration branch, applies a focused change, validates it, and opens a
PR without merging it.

## Frontend with a Rust backend

Given a web product that needs a backend without a TypeScript-backend
constraint, the agent creates one monorepo with a Vite/React/TanStack frontend
and an Axum/Tokio backend. It does not choose TanStack Start or GraphQL.

## Explicit TypeScript backend

Given a web product that explicitly needs a TypeScript backend, the agent uses
TanStack Start and Better Auth rather than introducing a separate Node
framework.

## UI implementation

Given a request for a dialog, menu, form, or reusable primitive, the agent
implements an accessible custom Tailwind component. It does not install
shadcn/ui, Radix, or another component/headless UI kit.

Given a reusable component with named variants, sizes, or compound visual
states, the agent defines them with CVA and derives the variant prop types with
`VariantProps`. It does not use nested ternaries to select long Tailwind class
strings.

Given related local values, the agent declares each with its own descriptive
`const` statement rather than using a comma-separated declaration. A React
project loads the matching React Doctor rules into Oxlint and does not add a
separate React Doctor CLI command or workflow.

Given code shared across modules, the agent imports from the defining module
and does not create an `index.ts` re-export hub. If a framework or API generator
owns a barrel, the agent preserves its configuration and does not hand-edit the
generated file.

## Read-only audit

Given an audit request, the agent reports gaps and recommendations without
creating a branch, changing files, mutating GitHub settings, or opening a PR.

## Existing dirty repository

The agent preserves unrelated user changes. If required edits overlap those
changes and cannot be separated safely, it stops and asks rather than resetting
or overwriting them.

## Existing repository without a remote

The agent can prepare and commit a local migration branch, but it does not
invent a remote or GitHub visibility. It reports the missing remote and asks
for authorization before creating one.

## Failing baseline

The agent identifies pre-existing failures, avoids claiming that the baseline
passed, fixes only failures within the authorized migration scope, and reports
anything left unresolved.

## Published or deployed project

The agent treats package publishing and deployment as separate state-changing
actions. A migration PR may update their configuration but never publishes or
deploys without explicit approval.

## Frontend routing

Given a repository dashboard, the agent uses routes such as
`/repositories/owner/name/pulls/42` and
`/repositories/owner/name/standards`, not `/?view=pulls&repo=owner/name`
or `/#/repositories`. A filter such as `?state=open` is allowed on a
route; a fragment such as `#discussion` may target content within the page.

Given an existing query-routed application, the agent migrates navigation
within the current framework, redirects old links to canonical paths, keeps
relevant filters, and tests reloads, direct links, browser back/forward, invalid
paths, and production server routing. It does not rewrite the framework or
introduce a second routing system.
