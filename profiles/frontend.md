# Frontend profile

Apply the base, TypeScript, frontend, testing, and GitHub standards.

Required outcome:

- Vite, React, and TanStack Router for client-only apps; TanStack Start only
  when a TypeScript backend is required
- Tailwind-only custom components with no UI or headless component kit
- mobile-first, WCAG 2.2 AA first vertical slice with lint failures for
  accessibility violations
- slash routes for pages, resource details, and navigable tabs; query parameters
  only for state within a route, with direct links/reloads/history validated
- explicit environment and API boundary
- loading, empty, failure, and success states
- TanStack libraries used for server state, forms, tables, and charts when
  those capabilities exist
- Vitest and Testing Library behavior tests plus Playwright for important flows
- Oxlint with the applicable `oxlint-plugin-react-doctor` rule sets
- production build verified
- README with local development and deployment instructions
