# AGENTS.md

## Scope
Guidance for all source code in `src`.

## Conventions
- Use TypeScript and keep types explicit when state or props are non-trivial.
- Keep shared UI behavior in `components`, route composition in `pages`, and content in `data`.
- Prefer ASCII-only edits unless the file already contains non-ASCII text.

## Styling
- Respect the existing Tailwind utility style.
- Keep dark-mode classes paired with light-mode classes when touching themed UI.
