# Rust service profile

Apply the base, backend, data, Rust, testing, and GitHub standards.

Required outcome:

- validated configuration and secrets loaded from the environment or an
  approved secret store
- Axum on Tokio, with SQLx when relational persistence is required
- REST/JSON, generated OpenAPI, consistent errors, and never GraphQL
- `tracing`, health/readiness behavior, and graceful shutdown
- clear concurrency and failure semantics
- unit and integration tests around service boundaries
- format, Clippy, cargo-nextest, doc-test, audit, and release-build CI
- documented deployment and operational assumptions
