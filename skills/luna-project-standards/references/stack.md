# Stack decisions

## Repository and tooling

- Keep a product's frontend and backend in one repository. Use `apps/web`,
  `apps/api`, and `packages/*` where applicable.
- Use pnpm and Cargo workspaces, with Turborepo for useful cross-package task
  orchestration and caching. Pin Node, pnpm, Rust, and tools with Mise.
- New TypeScript uses Oxfmt and Oxlint. Tests use Vitest and Testing Library;
  Playwright covers important end-to-end flows.

## Frontend

- Client-only React uses Vite and TanStack Router. Use TanStack Query for
  server state, TanStack Form with Zod, TanStack Table, and TanStack Charts when
  those capabilities are needed.
- Prefer React state/context; add Zustand only for genuinely complex shared
  client state.
- Use Tailwind only. Build every component from scratch with accessible web
  primitives. Do not install shadcn/ui, Radix, or another component/headless UI
  kit. Use Lucide icons.
- Use CVA (`class-variance-authority`) for reusable components with named
  variants, sizes, or compound visual states. Keep variant classes and defaults
  in the CVA declaration, derive props with `VariantProps`, and use `cn` to
  merge its result with caller classes instead of branching through class
  strings manually.
- Colocate feature components, hooks, schemas, and tests. Put global primitives
  in a shared `components` directory and keep one React component per file.
- Meet WCAG 2.2 AA and fail lint on violations. Support keyboard navigation,
  focus states, labels, reduced motion, system light/dark mode, and phone,
  tablet, and desktop layouts. Never make a user interface desktop-only.
- Use `Intl` and support current plus previous Chrome, Firefox, Safari, and
  Edge. Use Storybook only for component libraries or substantial systems.

## Backend and API

- Default to Rust with Axum and Tokio. If a TypeScript backend is explicitly
  required, use TanStack Start.
- Use REST/JSON with OpenAPI and a consistent coded error shape. Never GraphQL.
  Generate TypeScript clients and TanStack Query hooks with Orval.
- Use camelCase externally and idiomatic snake_case Rust via Serde. Validate
  with Serde/Garde in Rust and Zod in TypeScript.
- TypeScript auth uses Better Auth. Rust uses the official Better Auth React
  client with lucid-auth, pinned to its exact compatibility target. Upstream
  missing Rust behavior only when it mirrors official Better Auth behavior.
- Use SSE for one-way updates and WebSockets for true bidirectional flows.
  Keep jobs in-process first, then adopt a PostgreSQL-backed queue for durable
  retries. Avoid Redis without a demonstrated need.
- TypeScript logs with Evlog. Rust uses `tracing` with readable local and JSON
  production output plus OpenTelemetry-compatible instrumentation. Do not add
  a monitoring vendor by default.

## Data and deployment

- Add no database until needed. Use PostgreSQL for hosted/multi-user products
  and SQLite for local, embedded, prototype, or single-node products.
- Rust uses SQLx with compile-time checked queries, checked-in offline metadata,
  and versioned migrations run explicitly during deployment.
- Use UUIDv7 except where a protocol requires another ID. Store timezone-aware
  UTC values and return ISO 8601 timestamps.
- Use S3-compatible storage for persistent files and RustFS locally or for
  self-hosting where needed.
- Validate environment configuration at startup. Maintain secret-free examples
  for local, preview, staging, and production when applicable.
- Deployable services include production Dockerfiles; Docker Compose supplies
  local PostgreSQL, RustFS, or other external dependencies.

## Rust quality and releases

- Forbid unsafe by default. Permit a narrowly documented unsafe module only
  when necessary.
- Use `thiserror` for typed library/domain errors and `anyhow` only at binary
  boundaries. Fail standard Clippy warnings; enable pedantic lints selectively.
- Use cargo-nextest in CI plus separate doc tests and real disposable PostgreSQL
  integration tests where database semantics matter.
- Use Changesets for published TypeScript packages and release-plz for Rust
  crates. Follow semantic versioning and maintain changelogs.
