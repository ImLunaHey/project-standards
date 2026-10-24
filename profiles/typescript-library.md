# TypeScript library profile

Apply the base, TypeScript, testing, and GitHub standards.

Required outcome:

- small public API with typed exports
- explicit subpath exports or generator-owned aggregate entry points; no
  handwritten barrel files
- Vitest unit tests
- strict type-checking
- ESM package by default; CommonJS only for demonstrated consumers
- validated npm package contents and exports
- Node support policy and runtime smoke tests where module compatibility matters
- README with installation, examples, API, requirements, and release notes
- Changesets and semantic versioning when the package is published
- no publish step without explicit authorization
