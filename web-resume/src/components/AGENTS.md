# AGENTS.md

## Scope
Guidance for components in `src/components`.

## Component Design
- Keep components focused and reusable.
- Avoid route-level assumptions inside shared components.
- Prefer prop-driven behavior instead of hardcoded page-specific logic.

## Animation/Media
- Heavy animation logic belongs in dedicated component folders (`story`, `background`, `game`).
- Clean up listeners, observers, and animation frames on unmount.
- Keep interactive performance stable on mobile and desktop.
