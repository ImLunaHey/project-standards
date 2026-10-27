# Frontend standard

- New client-only React projects use Vite, React, and TanStack Router.
- Use TanStack Start when a TypeScript backend is explicitly required. Do not
  choose a TypeScript backend merely because the frontend is TypeScript.
- Use TanStack Query for server state, TanStack Form with Zod for forms,
  TanStack Table for tables, and TanStack Charts for charts when those
  capabilities are needed.
- Use React state and context first. Add Zustand only when shared client state
  has become genuinely complex. Keep server state, URL state, and local UI
  state distinct.
- Use slash-separated pathname routes for pages, resource details, and
  navigable tabs: for example, `/repositories/owner/name/standards` and
  `/repositories/owner/name/pulls/42`. Do not select pages, resources, or
  navigable tabs with query parameters such as `?view=`, `?repo=`, or
  `?tab=`, or with hash routes such as `#/repositories`.
- Reserve query parameters for state within the current route, such as search,
  filters, sorting, and pagination. URL fragments may identify anchors within
  a page; they must not act as the application's router. Transient UI state
  such as an open tooltip does not need its own route.
- Route parameters must be validated and encoded by the router. Unknown or
  malformed routes must show an appropriate not-found/error state. Direct
  links, reloads, and browser back/forward navigation must work in production;
  configure SPA fallback or server routing without masking API/asset errors.
- When migrating query/hash navigation, preserve existing bookmarks through
  redirects or a compatibility handler to the canonical slash routes. Preserve
  relevant filters. Existing frameworks and package managers remain in place.
- Add behavior tests for direct entry, reload, tab/detail navigation, history,
  invalid route parameters, retained filters, and legacy-link redirects when
  applicable.
- Use Tailwind CSS exclusively for application styling.
- Never add shadcn/ui, Radix, or another component/headless UI kit. Implement
  components from scratch with semantic platform primitives. Colocate
  feature-specific components; place genuinely global primitives such as
  buttons and inputs in a shared `components` directory.
- Use `cva` from `class-variance-authority` for reusable components with named
  variants, sizes, or compound visual states. Define the Tailwind classes and
  defaults in the CVA configuration, derive prop types with `VariantProps`, and
  use `cn` only to merge the generated classes with a caller's `className`.
  Avoid nested ternaries or manually assembled style strings for component
  variants.
- Keep every React component in its own file. Group feature code by feature,
  colocating its hooks, schemas, components, and tests.
- Use Lucide for icons rather than drawing one-off icon SVGs.
- Remove generator copy and placeholder assets before the initial commit.
- Every user-facing app is mobile-first and usable on phone, tablet, and
  desktop. Do not ship desktop-only interfaces.
- WCAG 2.2 AA is the minimum. Enforce accessibility lint failures and test
  important runtime interactions. Include semantic HTML, complete keyboard
  navigation, visible focus, labels, useful alternative text, and reduced
  motion support.
- Support system-aware light and dark themes.
- Use `Intl` for dates, numbers, and currencies. Keep user-facing formatting
  localization-ready even when the first language is English.
- Support the current and previous major releases of Chrome, Firefox, Safari,
  and Edge. Do not add legacy Internet Explorer support.
- Validate loading, empty, error, and success states for remote data.
- Do not put secrets in client bundles or public environment variables.
- Include at least one behavior-level component or integration test for key
  user flows; use Vitest for TypeScript tests.
- Use Storybook only for a reusable component library or a substantial design
  system, not for every frontend.
- Document the production build and deployment contract.
