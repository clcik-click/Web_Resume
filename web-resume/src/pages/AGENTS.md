# AGENTS.md

## Scope
Guidance for route pages in `src/pages`.

## Page Responsibilities
- Compose existing layout and feature components.
- Keep business/content data out of page files when possible.
- Prefer importing from `src/data` for repeated text and structured content.

## Routing
- Keep page exports as default route components.
- If a page pulls large libraries, prefer lazy-loading via `App.tsx`.
