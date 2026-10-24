# Rust standard

- Use the stable Rust toolchain unless the project explicitly requires nightly.
- Commit `Cargo.lock` for applications and binaries. Follow Cargo conventions
  for libraries.
- `cargo fmt --check`, `cargo clippy --all-targets --all-features -- -D warnings`,
  and `cargo test --all-features` form the default CI baseline.
- Avoid `unsafe`. When unavoidable, isolate it, document invariants, and test
  the safe boundary.
- Libraries return typed errors; applications may add contextual error wrappers
  at the outer layers.
- Avoid `unwrap` and `expect` in recoverable production paths.
- Keep features additive and test meaningful feature combinations.
- Document minimum supported Rust version only when the project intends to
  maintain one.
- Release builds should be reproducible from documented Cargo commands.
