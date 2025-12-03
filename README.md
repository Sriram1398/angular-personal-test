### Angular Sample Test

An Angular 21 sample application bootstrapped with the Angular CLI. It uses the modern standalone component setup (no NgModules) and a minimal router with `login` and `app` routes.

Repository name: `angular-sample-test`

Last updated: 2025-12-03

---

### Overview

- Stack
  - Language: TypeScript
  - Framework: Angular 21 (standalone components, Angular Router)
  - Tooling: Angular CLI 21, Angular Build
  - Tests: Angular unit test builder with Vitest
  - Package manager: npm (`packageManager: npm@11.6.2`)

- Entry point
  - `src/main.ts` bootstraps the root standalone component `App` with `bootstrapApplication(App, appConfig)`.
  - Router configuration is defined in `src/app/app.routes.ts` with routes for `'' → login`, `/login`, and `/app`.

---

### Requirements

- Node.js (LTS compatible with Angular CLI 21) — TODO: confirm exact Node version requirement for this repo runtime.
- npm 11.6.x (repo declares `packageManager: npm@11.6.2`)

Global Angular CLI is optional; all commands can be run via npm scripts.

---

### Setup

Install dependencies:

```bash
npm install
```

---

### Run (development server)

Start the dev server:

```bash
npm start
# or
npm run ng serve
```

Open `http://localhost:4200/`. The app reloads on source changes.

---

### Build

Production build (default configuration):

```bash
npm run build
```

Artifacts output to `dist/` (with output hashing in production). For development builds with watch:

```bash
npm run watch
```

---

### Scripts

Defined in `package.json`:

- `start`: `ng serve`
- `build`: `ng build`
- `watch`: `ng build --watch --configuration development`
- `test`: `ng test`
- `ng`: exposes the Angular CLI locally

You can run any Angular CLI command via `npm run ng -- <command>`.

---

### Testing

Run unit tests (Angular builder with Vitest):

```bash
npm test
```

Notes:
- The project includes `vitest` and `jsdom` in `devDependencies`.
- No explicit e2e setup is included. If you need e2e tests, choose and configure a tool (e.g., Cypress, Playwright). TODO: Decide and document e2e strategy.

---

### Environment variables and configuration

This starter does not define environment-specific files (e.g., `environment.ts`). Angular 17+ projects commonly rely on build-time configuration and application-level constants.

- TODO: Document any environment variables if/when introduced (e.g., API base URLs, feature flags) and how they are injected (file replacement, `define` options, or runtime configuration).

---

### Project structure

High-level layout:

```
.
├─ LICENSE
├─ README.md
├─ angular.json            # Angular workspace and builder configuration
├─ package.json            # Scripts and dependencies
├─ package-lock.json
├─ public/                 # Static assets copied as-is
├─ src/
│  ├─ main.ts             # Application entry point (bootstrapApplication)
│  └─ app/
│     ├─ app.ts           # Root standalone component (selector: app-root)
│     ├─ app.html         # Root component template
│     ├─ app.config.ts    # App-level providers and routing setup
│     ├─ app.routes.ts    # Router routes (''→login, /login, /app)
│     └─ login/
│        ├─ login.ts      # Login component
│        └─ login.html    # Login template
├─ tsconfig.json
├─ tsconfig.app.json
└─ tsconfig.spec.json
```

---

### Code scaffolding (Angular CLI)

Generate a new component:

```bash
npm run ng -- generate component component-name
```

List available schematics:

```bash
npm run ng -- generate --help
```

---

### License

This project is licensed. See the `LICENSE` file for details.

---

### Additional resources

- Angular CLI Overview and Command Reference: https://angular.dev/tools/cli
- Angular documentation: https://angular.dev/
