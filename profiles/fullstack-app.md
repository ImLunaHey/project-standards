# Full-stack application profile

Apply the base, TypeScript, frontend, backend, data, Rust, testing, and GitHub
standards.

Required outcome:

- one monorepo using `apps/web`, `apps/api`, and `packages/*` where applicable
- pnpm and Cargo workspaces coordinated by Turborepo
- Vite/React/TanStack frontend and an Axum/Tokio Rust backend by default
- TanStack Start instead only when the brief requires a TypeScript backend
- REST/OpenAPI contract with an Orval-generated client and Query hooks
- Better Auth compatibility appropriate to the backend language
- PostgreSQL or SQLite chosen from deployment needs rather than habit
- mobile-first WCAG 2.2 AA UI with light and dark themes
- shared native controls, CVA variants, and `cn` using clsx and tailwind-merge
- semantic theme tokens, true-black dark canvas, neutral gray surfaces, and
  restrained product accents for new interfaces; preserve existing visual
  identity during migration unless a redesign is requested
- component states and consuming screens visually checked in both themes at
  phone, tablet, and desktop widths
- Dockerfiles, local Docker Compose dependencies, CI, and complete README

Frontend navigation follows the [frontend standard](../standards/frontend.md):
use slash routes for pages, resource details, and navigable tabs, preserving
direct links, reloads, and history in the production deployment.
