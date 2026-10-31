# Stack decisions

## Repository and tooling

- Keep a product's frontend and backend in one repository. Use `apps/web`,
  `apps/api`, and `packages/*` where applicable.
- Use pnpm and Cargo workspaces, with Turborepo for useful cross-package task
  orchestration and caching. Pin Node, pnpm, Rust, and tools with Mise.
- New TypeScript uses Oxfmt and Oxlint. Tests use Vitest and Testing Library;
  Playwright covers important end-to-end flows.
- Declare one variable per statement with descriptive names. Never chain
  declarations with commas; prefer separate `const generatedId = useId()` and
  `const id = children.props.id ?? generatedId` statements.
- Never create handwritten barrel files or `index.ts` re-export hubs. Import
  directly from defining modules and use explicit package subpath exports. A
  generator may own a barrel when its configuration is committed; never edit
  the generated output manually.

## Frontend

- Client-only React uses Vite and TanStack Router. Use TanStack Query for
  server state, TanStack Form with Zod, TanStack Table, and TanStack Charts when
  those capabilities are needed.
- Prefer React state/context; add Zustand only for genuinely complex shared
  client state.
- Use slash pathname routes for pages, resources, and navigable tabs. Query
  parameters are only for state within a route (search, filters, sorting,
  pagination); do not use query/hash routing. Add legacy redirects only when
  explicitly requested. Test direct links, reloads, browser history, and invalid paths.
- Use Tailwind v4 only. Upgrade existing v3 frontend workspaces in the current
  migration PR; do not defer this required work under framework or
  dependency-major preservation rules. Update configuration, plugins, and
  affected styles, preserve visual identity, and validate builds and component
  states. Check workspace dependencies and lockfile resolutions for remaining
  v3 usage.
- Build every component from scratch with accessible web primitives. Do not
  install shadcn/ui, Radix, or another component/headless UI
  kit. Use Lucide icons.
- Use CVA (`class-variance-authority`) for reusable components with named
  variants, sizes, or compound visual states. Keep variant classes and defaults
  in the CVA declaration, derive props with `VariantProps`, and use `cn` to
  merge its result with caller classes instead of branching through class
  strings manually.
- Install the [`cn` package](https://github.com/shadcn-ui/cn) for Tailwind v4
  projects (`pnpm add cn` in new projects). Import `{ cn }` directly from `cn`
  and pass caller classes last. Keep CVA for variants; do not recreate the
  clsx/tailwind-merge wrapper or add a re-export-only helper. The package does
  not require shadcn/ui.
- During migration to v4 and `cn`, inspect custom merge configuration,
  verify affected states, and remove old direct dependencies only when no
  remaining imports require them. Use `cn/config` for custom merge rules when
  needed; do not add build plugins or dependency aliases by default.
- Reuse shared native Button, Input, Select, Textarea, and Field primitives;
  preserve native attributes, events, accessibility, and required ref access.
  Default buttons to `type="button"`. Use links for navigation. Put recurring
  appearances in variants rather than copying recipes or important overrides
  into callers. Extract repeated panel, heading, and status treatments when
  reuse exists; keep one-off feature layouts local.
- Define hover, focus-visible, disabled, and applicable selected, pending,
  invalid, and destructive states with the component. Link labels, hints, and
  errors to controls, and pair status colors with text or another non-color
  cue. Default control minimum height to `2.75rem` (44px at the default root
  size); check any compact exception for accessible targeting in context.
- New interfaces default to a true-black (`#000000`) dark canvas and neutral
  grayscale raised surfaces, without navy, slate-blue, or purple surface tints.
  Support system-aware light/dark themes. Use semantic Tailwind theme tokens
  for surfaces, borders, text, accent, focus, and status; specialist styling
  APIs must reuse those tokens. Keep accents restrained and product-specific;
  orange is not universal and blue can still serve an intentional accent role.
- Build hierarchy through spacing, thin borders, subtle surface differences,
  and modest consistent radii. Keep shadows secondary. Use readable sans-serif
  typography, monospace for technical content, and smaller text for metadata.
  Match density to the task and reuse a project spacing/type scale; do not
  shrink essential text to fit. Keep icons and motion functional, and reflow
  layouts without losing essential content or actions.
- Preserve an existing product's visual identity during migration unless a
  redesign is requested. Check affected components and consuming screens in
  both themes at phone, tablet, and desktop widths, including keyboard focus,
  contrast, text zoom, overflow, and applicable states. Combine visual review,
  behavior tests, and automated accessibility checks.
- Colocate feature components, hooks, schemas, and tests. Put global primitives
  in a shared `components` directory and keep one React component per file.
- Meet WCAG 2.2 AA and fail lint on violations. Support keyboard navigation,
  focus states, labels, reduced motion, system light/dark mode, and phone,
  tablet, and desktop layouts. Never make a user interface desktop-only.
- Use `Intl` and support current plus previous Chrome, Firefox, Safari, and
  Edge. Use Storybook only for component libraries or substantial systems.
- React projects install `oxlint-plugin-react-doctor` and load it through
  Oxlint's `jsPlugins`. Enable its recommended rules and only the matching
  framework presets, including TanStack Start or TanStack Query when used. Run
  them through the existing Oxlint command; never add the standalone React
  Doctor CLI or a separate React Doctor CI workflow.

## Backend and API

- Default to Rust with Axum and Tokio. If a TypeScript backend is explicitly
  required, use TanStack Start.
- Use REST/JSON with OpenAPI and a consistent coded error shape. Never GraphQL.
  Generate TypeScript clients and TanStack Query hooks with Orval.
- Use camelCase externally and idiomatic snake_case Rust via Serde. Validate
  with Serde/Garde in Rust and Zod in TypeScript.
- TypeScript auth uses Better Auth. Rust uses the official Better Auth React
  client with lucid-auth, pinned to its exact compatibility target. Upstream
  missing Rust behavior only when it mirrors official Better Auth behavior.
- Use SSE for one-way updates and WebSockets for true bidirectional flows.
  Keep jobs in-process first, then adopt a PostgreSQL-backed queue for durable
  retries. Avoid Redis without a demonstrated need.
- TypeScript logs with Evlog. Rust uses `tracing` with readable local and JSON
  production output plus OpenTelemetry-compatible instrumentation. Do not add
  a monitoring vendor by default.

## Data and deployment

- Add no database until needed. Use PostgreSQL for hosted/multi-user products
  and SQLite for local, embedded, prototype, or single-node products.
- Rust uses SQLx with compile-time checked queries, checked-in offline metadata,
  and versioned migrations run explicitly during deployment.
- Use UUIDv7 except where a protocol requires another ID. Store timezone-aware
  UTC values and return ISO 8601 timestamps.
- Use S3-compatible storage for persistent files and RustFS locally or for
  self-hosting where needed.
- Validate environment configuration at startup. Maintain secret-free examples
  for local, preview, staging, and production when applicable.
- Deployable services include production Dockerfiles; Docker Compose supplies
  local PostgreSQL, RustFS, or other external dependencies.

## Rust quality and releases

- Forbid unsafe by default. Permit a narrowly documented unsafe module only
  when necessary.
- Use `thiserror` for typed library/domain errors and `anyhow` only at binary
  boundaries. Fail standard Clippy warnings; enable pedantic lints selectively.
- Use cargo-nextest in CI plus separate doc tests and real disposable PostgreSQL
  integration tests where database semantics matter.
- Use Changesets for published TypeScript packages and release-plz for Rust
  crates. Follow semantic versioning and maintain changelogs.
