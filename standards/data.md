# Data and deployment standard

## Persistence

- Do not add a database until the product needs durable state.
- Use PostgreSQL for hosted or multi-user systems. Use SQLite for local,
  embedded, prototype, or single-node applications.
- Rust accesses relational databases with SQLx. Prefer compile-time checked
  query macros and check in SQLx offline metadata so ordinary CI compilation
  does not require a live database.
- Check SQLx migrations into the repository and run them as an explicit,
  observable deployment step.
- Use UUIDv7 for application records unless an external protocol or library,
  including Better Auth compatibility, requires a different representation.
- Store timestamps in UTC using timezone-aware database types and expose them
  as ISO 8601 values over APIs.

## Files and environments

- Use S3-compatible object storage for persistent uploads. RustFS is the local
  or self-hosted default where object storage is needed; local filesystem
  storage is development-only unless the product is explicitly single-machine.
- Support local, preview, staging, and production configuration when those
  environments apply. Validate configuration at startup.
- Include production-ready Dockerfiles for deployable services and Docker
  Compose for local external dependencies such as PostgreSQL or RustFS.
- Keep provider-specific deployment choices in the project brief or a project
  ADR rather than treating one hosting vendor as universal.
