# Testing standard

## General

- Tests cover behavior and failure modes, not implementation trivia.
- Every bug fix receives a regression test when practical.
- Prefer deterministic tests with isolated temporary state.
- Mock network, time, randomness, and external services at clear boundaries.
- Avoid broad snapshots; use them only when the serialized output itself is the
  contract.
- Do not weaken assertions merely to make a migration pass.
- Keep unit tests fast and add integration tests where boundaries matter.

## TypeScript and JavaScript

- Use Vitest for unit and integration tests.
- Write tests in TypeScript when the source is TypeScript.
- Colocate unit and component tests with their source. Reserve dedicated
  directories for integration and Playwright end-to-end tests.
- Use Testing Library for component behavior and Playwright for important user
  journeys. Include automated accessibility assertions where applicable.
- Treat React Doctor as a required React validation step alongside Oxlint. Its
  error-level findings fail CI; warnings remain visible for review.
- Prefer `expect` assertions and readable behavior-focused test names.
- Keep Vitest on a security-supported release, even when that means tests run
  on a newer Node version than the published runtime supports.
- Runtime compatibility for older supported Node versions can be verified with
  small ESM/CommonJS smoke tests against built output.

## Rust

- Use cargo-nextest as the CI runner and run documentation tests separately
  with `cargo test --doc`. Keep `cargo test` working for contributors.
- Unit tests live beside internal logic; integration tests live under `tests/`.
- Exercise meaningful SQLx behavior against disposable PostgreSQL instances
  rather than mocking database semantics.
- Use property tests only where they materially improve coverage of a state
  space or parser.

## Coverage

Collect coverage in CI and aim for high file, function, and component coverage.
Do not impose one universal percentage threshold or exclude difficult code to
game the result. A project may adopt a threshold once its meaningful baseline
is stable.
