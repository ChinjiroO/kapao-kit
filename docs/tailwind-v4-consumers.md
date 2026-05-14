# Tailwind CSS v4 and `@kapao-kit/ui`

The published package ships **compiled** components under `dist/*.js`. Tailwind v4 does not scan `node_modules` by default, so class names from the library would be missing unless you register them.

## Recommended setup

In your application stylesheet (after `@import "tailwindcss"`):

```css
@import "tailwindcss";
@import "@kapao-kit/ui/globals.css";

@source "./src/**/*.{ts,tsx}";
```

`@kapao-kit/ui/globals.css` is emitted into `dist/` during the UI build and contains:

```css
@source "./*.js";
```

Paths are resolved **relative to that file inside the installed package**, so consumers do not need fragile `@source` paths into `node_modules`.

## Monorepo / local package development

Point `@source` at the workspace TypeScript sources if you prefer:

```css
@source "../packages/ui/src/**/*.{ts,tsx}";
```

## Tailwind v3

Use `content` globs that include `./node_modules/@kapao-kit/ui/dist/**/*.js` (and optionally `src/**/*.{ts,tsx}`).
