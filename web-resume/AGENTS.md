# AGENTS.md

## Scope
Applies to the `web-resume` application.

## Architecture Notes
- App entry: `src/App.tsx`
- Shared layout: `src/components/layout`
- Route pages: `src/pages`
- Static content/data: `src/data`
- Public assets: `public`

## Implementation Preferences
- Reuse existing components before adding new abstractions.
- Keep story/game-heavy logic in `src/components/*` and keep pages thin.
- Keep routes lazy-loaded when they pull in heavier animation stacks.

## Validation
- Required after meaningful changes:
  - `npm run lint`
  - `npm run build`
