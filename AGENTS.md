# GitButler Agent Instructions

GitButler is a Rust/Svelte/React/TypeScript monorepo.

Apply all relevant instruction files. If instructions conflict, resolve them in
this order:

1. Explicit human instructions
2. Nearest nested `AGENTS.md`
3. This file

## Repo Map

- `crates/` - Rust crates.
- `apps/desktop/` - Tauri/Svelte desktop app.
- `apps/web/` - Svelte web app.
- `packages/` - shared TypeScript packages, including the SDK.
- `e2e/` - Playwright, WebdriverIO, and blackbox end-to-end tests.

## Working Style

- Treat questions about the codebase as read-only unless the user asks for changes.
- Make focused, reviewable changes; avoid unrelated rewrites.
- Use the simplest design that solves the actual problem; do not add
  speculative machinery, and remove machinery your change makes unnecessary.
- Inspect nearby code before introducing patterns.
- Prefer existing APIs, tests, and conventions.
- Before declaring shared behavior done, check each applicable surface and contract
  (desktop, web, CLI/TUI, SDK types, and docs) and update it or explicitly
  determine that it is unaffected.
- Run targeted validation for the area touched.
- Before adding new machinery to fix a behavior bug, reproduce the bug in a failing
  test and survey the target file's existing loops and classifications as candidate
  hosts; let the tests, not the diagnosis, set how much implementation the fix needs.
- When a fix calls for a new mechanism (a new module, a new public API, or a parallel
  walk where one already exists), propose the intended shape before building it.

## Scoped Instructions

- For Rust work under `crates/`, follow `crates/AGENTS.md`.
- For desktop work under `apps/desktop/`, follow `apps/desktop/AGENTS.md`.
- For the React component library under `packages/but-ui-react/`, follow
  `packages/but-ui-react/AGENTS.md`.

<!-- BEGIN:storybook-skills -->
<!-- Storybook updates this section on upgrade. Remove both markers to keep your own edits. -->

## Storybook skills

For each of these tasks, invoke its Storybook skill first, before you edit any file, and follow it:

- `ui-workflow`: you create, change, or delete a component, story, style, theme, or design token, or otherwise change how the UI looks; you run or fix story tests; or the user asks to see components or stories. It looks up the components to reuse, updates your stories, runs the tests, and publishes a review of the results.
- `component-docs`: you look for an existing component to reuse instead of building a new one, or the user asks about a component's props, API, or usage. It lists the project's components with their props and usage examples.

<!-- END:storybook-skills -->
