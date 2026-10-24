# Frontend standard

- The product brief must choose a framework when framework choice materially
  affects routing, rendering, or deployment. Do not migrate frameworks as
  repository hygiene.
- New client-only React projects default to Vite when no SSR, server components,
  or framework router is required.
- Remove generator copy and placeholder assets before the initial commit.
- Provide responsive layouts and keyboard-accessible interaction from the
  first vertical slice.
- Use semantic HTML, visible focus states, labels, useful alt text, and reduced
  motion support where animation exists.
- Keep server state, URL state, and local UI state distinct.
- Validate loading, empty, error, and success states for remote data.
- Do not put secrets in client bundles or public environment variables.
- Include at least one behavior-level component or integration test for key
  user flows; use Vitest for TypeScript tests.
- Document the production build and deployment contract.
