# Node service profile

Apply the base, TypeScript, testing, and GitHub standards.

Use this profile only when a TypeScript service is explicitly required. For a
web application with a TypeScript backend, prefer TanStack Start. Otherwise the
default backend is the Rust service profile.

Required outcome:

- explicit runtime and package manager
- validated environment configuration with `.env.example`
- Evlog structured logs and wide events without secrets
- health/readiness behavior when deployed as a long-running service
- graceful shutdown and clear startup failures
- Vitest tests for business logic and service boundaries
- documented local run, production build, and deployment
- least-privilege deployment workflow
