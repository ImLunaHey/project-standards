# Rust standard

- Use the stable Rust toolchain unless the project explicitly requires nightly.
- Commit `Cargo.lock` for applications and binaries. Follow Cargo conventions
  for libraries.
- `cargo fmt --check`, `cargo clippy --all-targets --all-features -- -D warnings`,
  `cargo nextest run --all-features`, and `cargo test --doc --all-features`
  form the default CI baseline. Keep ordinary `cargo test` compatible.
- Enable standard Clippy lints with warnings denied. Adopt pedantic lints
  selectively rather than accepting a noisy blanket policy.
- Forbid `unsafe` by default. Permit it only in a narrowly isolated module with
  documented invariants and tests around the safe boundary.
- Libraries and domain layers use typed `thiserror` errors. Use `anyhow` only
  at executable boundaries such as application startup and CLI entry points.
- Avoid `unwrap` and `expect` in recoverable production paths.
- Keep features additive and test meaningful feature combinations.
- Document minimum supported Rust version only when the project intends to
  maintain one.
- Release builds should be reproducible from documented Cargo commands.
- Use `tracing` with readable local output and structured JSON in production.
  Add OpenTelemetry-compatible instrumentation without selecting a monitoring
  vendor by default.
- Pin Rust and supporting tools with Mise.
