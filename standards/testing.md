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
- Prefer `expect` assertions and readable behavior-focused test names.
- Keep Vitest on a security-supported release, even when that means tests run
  on a newer Node version than the published runtime supports.
- Runtime compatibility for older supported Node versions can be verified with
  small ESM/CommonJS smoke tests against built output.

## Rust

- Use built-in `cargo test` as the baseline.
- Unit tests live beside internal logic; integration tests live under `tests/`.
- Use property tests only where they materially improve coverage of a state
  space or parser.

## Coverage

Coverage is a diagnostic, not a target to game. Add thresholds only after the
project has stable, meaningful coverage; never exclude difficult code solely
to raise a percentage.
