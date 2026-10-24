# Backend and API standard

## Stack selection

- Rust is the default backend language. Use Axum on Tokio.
- Use TanStack Start only when the product explicitly requires a TypeScript
  backend. A React frontend does not by itself justify a TypeScript backend.
- Keep a frontend and its backend in one repository. Use `apps/web`,
  `apps/api`, and `packages/*` when those scopes exist, with pnpm and Cargo
  workspaces plus Turborepo where task orchestration or caching helps.

## HTTP APIs

- Use REST with JSON and an OpenAPI contract. Never use GraphQL.
- Generate the TypeScript client and TanStack Query hooks from OpenAPI with
  Orval. Do not manually duplicate request or response types.
- External JSON uses camelCase; Rust remains idiomatic snake_case through
  Serde conversion.
- Use a consistent error object containing a stable machine-readable code, a
  human-readable message, and optional field errors.
- Avoid premature `/v1` routing. Introduce explicit versioning before a
  breaking public API change.
- Use Garde with Serde for Rust request validation and Zod at TypeScript input
  boundaries.

## Authentication

- TypeScript backends use Better Auth.
- Rust backends pair the official Better Auth React client with
  [lucid-auth](https://github.com/lucid-softworks/auth). Pin the JavaScript
  client to the exact Better Auth version in lucid-auth's compatibility matrix.
- If lucid-auth lacks needed behavior, an upstream PR may add only behavior
  present in the official Better Auth TypeScript implementation. Do not invent
  a divergent Rust-only authentication surface.

## Runtime behavior

- Start background work in-process. Move it to a PostgreSQL-backed queue when
  durable retries or independent workers are required. Do not add Redis without
  a demonstrated workload need.
- Prefer Server-Sent Events for one-way live updates and WebSockets only for
  genuinely bidirectional interaction.
- Long-running services expose health/readiness behavior and shut down
  gracefully.
