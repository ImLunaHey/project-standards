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
- Do not add legacy redirects or compatibility handlers unless the user
  explicitly requests backwards compatibility. Keep the existing framework
  and package manager unless their replacement is requested.
- Add behavior tests for direct entry, reload, tab/detail navigation, history,
  invalid route parameters, and retained filters. Test legacy-link redirects
  only when the user explicitly requested them.

## Components and styling

- Use Tailwind CSS v4 exclusively for application styling. Tailwind v3 is
  unsupported. Upgrade any v3 frontend workspace to v4 in the current migration
  PR; do not defer it under framework or dependency-major preservation rules.
  Update configuration, plugins, and affected styles, preserve the product's
  visual identity, and validate the build and representative component states.
  Check workspace dependencies and lockfile resolutions for remaining v3 usage.
- Keep shared theme tokens in the Tailwind theme; consume them through
  utilities. When a specialist editor or chart requires its own styling API,
  reuse the same tokens rather than introducing a separate palette.
- Never add shadcn/ui, Radix, or another component/headless UI kit. Implement
  components from scratch with semantic platform primitives. Colocate
  feature-specific components; place genuinely global primitives such as
  buttons and inputs in a shared `components` directory.
- Reuse shared Button, Input, Select, Textarea, and Field primitives when
  present. Build thin wrappers around native elements, preserving their
  attributes, events, accessible names, and required ref access. Default
  buttons to `type="button"`; use links for navigation and buttons for actions.
- Use `cva` from `class-variance-authority` for reusable components with named
  variants, sizes, or compound visual states. Define the Tailwind classes and
  defaults in the CVA configuration, derive prop types with `VariantProps`, and
  use `cn` only to merge the generated classes with a caller's `className`.
  Avoid nested ternaries or manually assembled style strings for component
  variants.
- Install the [`cn` package](https://github.com/shadcn-ui/cn) for Tailwind v4
  projects (`pnpm add cn` in new projects). Import `{ cn }` directly from `cn`;
  do not recreate a `clsx`/`tailwind-merge` wrapper or add a re-export-only
  utility module. This class-merging utility does not require shadcn/ui.
  Keep CVA for variants and pass caller classes last to `cn`.
- During migration to v4 and `cn`, inspect custom merge configuration and
  verify affected component states; remove old direct dependencies only when
  no remaining imports require them. Use `cn/config` for custom merge rules
  when needed; do not add build plugins or dependency aliases by default.
- Use named variants for recurring appearances and `className` for contextual
  layout adjustments. Do not paste a shared control's full style recipe into
  its callers or rely on repeated important overrides to restyle it.
- Extract repeated panel, heading, field, and status treatments into shared
  components or recipes when they recur. Keep one-off feature layouts local;
  do not create a universal component API before there is a reuse case.
- Define hover, focus-visible, disabled, and applicable selected, pending,
  invalid, and destructive states with the component. Associate labels,
  hints, and validation errors with their controls; pair status colors with
  text or another non-color cue. Use a default control minimum height of
  `2.75rem` (44px at the default root size). Any compact exception must retain
  an accessible target and be checked in its actual layout.
- Keep every React component in its own file. Group feature code by feature,
  colocating its hooks, schemas, components, and tests.
- Use Lucide for icons rather than drawing one-off icon SVGs.
- Remove generator copy and placeholder assets before the initial commit.

## Visual design

These are defaults for new interfaces. Explicit product requirements take
precedence. During migration, preserve the existing visual identity unless a
redesign is requested; record proposed visual changes separately.

- The default dark canvas is true black (`#000000`), with neutral grayscale
  raised surfaces. Do not introduce navy, slate-blue, or purple tints into the
  default background/surface palette.
- Define semantic tokens for canvas, surface, raised surface, border, primary
  text, muted text, accent, focus, and status colors. Use these tokens in shared
  components instead of scattering raw hex values or making a palette shade
  carry an undocumented semantic role.
- Keep most chrome neutral. Use a restrained product accent for primary
  actions and selection, and distinct semantic colors for status. Choose the
  accent color for the product; no single hue is required. Blue remains
  available for intentional accents, links, charts, and status.
- Separate content through spacing, thin borders, and small surface-value
  changes. Keep shadows subtle and secondary. On a black canvas, make panel
  boundaries and interactive states discernible without relying on shadows.
- Use modest, consistent corner radii for controls and panels. Reserve fully
  rounded shapes for components whose role calls for them, such as avatars or
  badges. Avoid making every container a prominent card; use rows, dividers,
  and whitespace where they communicate grouping more clearly.
- Use a clear sans-serif hierarchy with restrained heading weights; reserve
  monospace for code, identifiers, and technical values. Keep body text and
  control labels readable, and reserve smaller text for supplementary
  metadata. Do not shrink essential text to make a layout fit.
- Match density to the task: compact operational tables and forms can coexist
  with more generous documentation and marketing layouts. Choose and reuse a
  project spacing and type scale; do not copy arbitrary pixel values from a
  reference screen as universal defaults.
- Use icons to support meaning and label icon-only controls. Keep motion brief
  and functional, and honor reduced-motion preferences. Reflow groups and
  navigation at narrow widths; keep essential content and actions available.

## Accessibility and validation

- Every user-facing app is mobile-first and usable on phone, tablet, and
  desktop. Do not ship desktop-only interfaces.
- WCAG 2.2 AA is the minimum. Enforce accessibility lint failures and test
  important runtime interactions. Include semantic HTML, complete keyboard
  navigation, visible focus, labels, useful alternative text, and reduced
  motion support.
- Support system-aware light and dark themes. Give each theme its own readable
  surfaces and states.
- Inspect changed shared components and representative consuming screens in
  both themes at phone, tablet, and desktop widths. Check keyboard focus,
  contrast, text zoom, overflow, and applicable interaction/data states. Pair
  visual inspection with behavior tests and automated accessibility checks;
  passing an automated scan alone does not establish visual quality.
- Every PR with UI work includes labeled Before and After screenshots under
  Validation, even for refactors or styling migrations intended to preserve
  appearance. Capture the original and final revisions with matched conditions
  and affected theme/responsive variations; follow the
  [screenshot capture and CLI upload workflow](github.md#ui-screenshot-evidence).
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
