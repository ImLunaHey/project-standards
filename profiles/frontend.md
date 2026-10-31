# Frontend profile

Apply the base, TypeScript, frontend, testing, and GitHub standards.

Required outcome:

- Vite, React, and TanStack Router for client-only apps; TanStack Start only
  when a TypeScript backend is required
- Tailwind v4 custom components with no UI or headless component kit; upgrade
  existing v3 workspaces to v4 in the current migration PR
- shared native controls, CVA variants, and direct `cn` package imports
- semantic theme tokens, true-black dark canvas, neutral gray surfaces, and
  restrained product accents for new interfaces; preserve existing visual
  identity during migration unless a redesign is requested
- mobile-first, WCAG 2.2 AA first vertical slice with lint failures for
  accessibility violations
- slash routes for pages, resource details, and navigable tabs; query parameters
  only for state within a route, with direct links/reloads/history validated
- explicit environment and API boundary
- loading, empty, failure, and success states
- TanStack libraries used for server state, forms, tables, and charts when
  those capabilities exist
- Vitest and Testing Library behavior tests plus Playwright for important flows
- component states and consuming screens visually checked in light/dark themes
  at phone, tablet, and desktop widths
- labeled Before/After screenshots in every UI PR's Validation section,
  uploaded with `gh pr create` or `gh pr edit` using `--attach` and verified by the
  [GitHub screenshot workflow](../standards/github.md)
- Oxlint with the applicable `oxlint-plugin-react-doctor` rule sets
- production build verified
- README with local development and deployment instructions
