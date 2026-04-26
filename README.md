# Design System

A modular design system built inside a Vue app futures the following packages:

- `@your-ds/tokens`: CSS variables, themes, base styles, layout utilities
- `@your-ds/vue`: Vue primitives and components
- `@your-ds/docs`: Storybook documentation and examples
- Product apps: app-specific layouts, screens, and feature components

The current implementation lives directly in `src/design-system`, but it is structured so it can be extracted later without rewriting the component API.

## Design Principles

- Dense but calm product UI
- Clear over decorative
- Accessible by default
- Token-driven styling through CSS variables
- Light and dark themes from the start
- Small, composable Vue APIs
- Reka UI for behavior-heavy accessible primitives
- Storybook as the workbench, documentation site, and QA surface

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Storybook
- Reka UI
- CSS variables and component classes

## Project Structure

```txt
src/
  design-system/
    tokens/
      tokens.css        # Primitive tokens: color, type, spacing, radius, motion, layout
      themes.css        # Semantic light/dark theme variables
    styles/
      base.css          # Global reset and base element styles
      utilities.css     # Reusable layout utilities and helpers
      components.css    # Component and primitive class styles
      index.css         # Single stylesheet entry point
    primitives/
      Stack.vue
      Inline.vue
      Grid.vue
      Text.vue
      Heading.vue
      Primitives.stories.ts
    components/
      Button.vue
      IconButton.vue
      Input.vue
      Checkbox.vue
      Dialog/
        Dialog.vue
        Dialog.stories.ts
        index.ts
      Select/
        Select.vue
        Select.stories.ts
        types.ts
        index.ts
      *.stories.ts
    docs/
      Tokens.stories.ts
      Themes.stories.ts
      Compositions.stories.ts
    docs.css
    index.ts            # Public design-system barrel export
```

## Getting Started

Install dependencies:

```sh
pnpm install
```

Run the app:

```sh
pnpm run dev
```

Run Storybook:

```sh
pnpm run storybook
```

Build the app:

```sh
pnpm run build
```

Build Storybook:

```sh
pnpm run build-storybook
```

## Usage

Import the design-system stylesheet once near the app entry point:

```ts
import '@/design-system/styles/index.css';
```

Import components from the barrel file:

```ts
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Dialog,
  Grid,
  Heading,
  IconButton,
  Inline,
  Input,
  Select,
  Stack,
  Text,
} from '@/design-system';
```

Example:

```vue
<script setup lang="ts">
import { Button, Card, Heading, Input, Stack, Text } from '@/design-system';
</script>

<template>
  <Card>
    <template #header>
      <Stack gap="1">
        <Heading :level="3">Workspace</Heading>
        <Text size="sm">Manage shared product settings.</Text>
      </Stack>
    </template>

    <Stack gap="4">
      <Input label="Workspace name" placeholder="Acme" />
      <Button>Save changes</Button>
    </Stack>
  </Card>
</template>
```

## Theming

Themes are controlled with a `data-theme` attribute on the document element.

```html
<html data-theme="light">
  <html data-theme="dark"></html>
</html>
```

Components do not hardcode theme values. They consume semantic variables such as:

```css
--ds-surface-page
--ds-surface-panel
--ds-text-primary
--ds-text-secondary
--ds-border-subtle
--ds-action-primary
--ds-focus-ring
```

Light theme is the default. Storybook includes a theme toolbar that switches `document.documentElement.dataset.theme`.

## Tokens

The token model is layered:

```txt
Primitive tokens -> Semantic tokens -> Component usage
```

Primitive tokens live in `tokens.css`, for example:

```css
--ds-color-neutral-950
--ds-font-size-sm
--ds-space-4
--ds-radius-lg
--ds-duration-fast
```

Semantic tokens live in `themes.css`, for example:

```css
--ds-surface-page
--ds-text-primary
--ds-border-subtle
--ds-action-primary
--ds-state-danger
```

Component styles should consume semantic tokens whenever possible. Raw hex values, spacing values, transitions, and radii should stay in the token layer unless there is a narrow, documented reason.

## Components

### Primitives

- `Stack`: vertical layout with tokenized gaps
- `Inline`: horizontal layout with wrapping and alignment
- `Grid`: fixed or responsive grid layout
- `Text`: body text with size, tone, and weight variants
- `Heading`: semantic heading primitive with controlled visual levels

### Core Components

- `Button`: variants, sizes, disabled and loading states
- `IconButton`: accessible icon-only button with required label
- `Input`: labeled input with hint, error, disabled, and invalid states
- `Checkbox`: Reka-backed checkbox with label, description, and validation
- `Dialog`: Reka-backed modal dialog with trigger, header, body, footer, and close control
- `Select`: Reka-backed select with options, disabled items, validation, and sizing
- `Badge`: neutral, success, warning, danger, and info tones
- `Card`: framed content surface with header, action, body, footer, and interactive mode

## Storybook

Storybook is the design-system workbench. It documents:

- Tokens: colors, spacing, radius, motion, typography
- Themes: light and dark examples
- Primitives: layout and type patterns
- Components: variants, sizes, states, and usage
- Compositions: settings form, toolbar, empty state, card list, dialog flow

Stories live next to the components they document, with cross-component examples under `src/design-system/docs`.

## Accessibility

The system starts from accessible defaults:

- Visible focus states through `--ds-focus-ring`
- Semantic labels for form controls
- Required labels for icon-only buttons
- Disabled and invalid states wired to native attributes where possible
- Reka UI for Dialog, Select, and Checkbox behavior
- Storybook a11y addon included for review

When adding components, prefer native semantics first. Use Reka UI for focus management, keyboard navigation, popovers, portals, roving focus, and other behavior that is easy to get subtly wrong.

## Styling Guidelines

- Use CSS variables as the source of truth
- Prefer component classes over inline styles
- Keep raw values in tokens, not component files
- Keep component props intent-based
- Avoid arbitrary styling props such as `margin`, `color`, `rounded`, or `fontSize`
- Keep APIs small and stable
- Add new tokens only when they create a reusable contract

Good prop examples:

```ts
variant: 'primary' | 'secondary' | 'ghost' | 'danger';
size: 'sm' | 'md' | 'lg';
tone: 'neutral' | 'success' | 'warning' | 'danger';
```

## Adding a Component

1. Add the Vue component under `src/design-system/components`.
2. Style it in `src/design-system/styles/components.css`.
3. Use existing tokens or add focused tokens if needed.
4. Export it from `src/design-system/index.ts`.
5. Add Storybook stories covering variants, states, and a realistic usage example.
6. Run `pnpm run build` and `pnpm run build-storybook`.

For behavior-heavy components, wrap Reka UI instead of exposing raw Reka patterns to product apps.
