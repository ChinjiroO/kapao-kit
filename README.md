# @kapao-kit/ui

[![npm version](https://img.shields.io/npm/v/@kapao-kit/ui.svg)](https://www.npmjs.com/package/@kapao-kit/ui)
[![CI](https://github.com/kapao-kit/ui/actions/workflows/ci.yml/badge.svg)](https://github.com/kapao-kit/ui/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/@kapao-kit/ui.svg)](https://www.npmjs.com/package/@kapao-kit/ui)

A customizable, accessible, and performant UI component library built on top of [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://www.radix-ui.com), and [Tailwind CSS v4](https://tailwindcss.com).

Designed for **React** and **Next.js** applications.

---

## Features

- **40+ Components** — Full set of shadcn/ui components, ready to use out of the box
- **Accessible** — Built on Radix UI primitives with full WAI-ARIA compliance
- **Customizable** — Tailwind CSS v4 styling, easy to theme and extend
- **Tree-shakeable** — Import only what you need, keep your bundle lean
- **TypeScript** — Fully typed with complete type exports
- **Dual Format** — ESM and CJS output for maximum compatibility
- **React 18 & 19** — Supports both React 18 and React 19
- **Next.js Ready** — `"use client"` directives included, works with App Router

---

## Installation

```bash
# pnpm (recommended)
pnpm add @kapao-kit/ui

# npm
npm install @kapao-kit/ui

# yarn
yarn add @kapao-kit/ui

# bun
bun add @kapao-kit/ui
```

### Peer Dependencies

Make sure you have React and Tailwind CSS installed:

```bash
pnpm add react react-dom tailwindcss
```

---

## Quick Start

### 1. Configure Tailwind CSS

Add the library to your Tailwind CSS configuration so it can scan component classes.

**Tailwind CSS v4** (CSS-first config in your `globals.css`):

```css
@import "tailwindcss";
@source "../node_modules/@kapao-kit/ui/src/**/*.{ts,tsx}";
```

**Tailwind CSS v3** (`tailwind.config.ts`):

```ts
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@kapao-kit/ui/src/**/*.{ts,tsx}",
  ],
  // ...
};
```

### 2. Add CSS Variables

Add the following CSS variables to your `globals.css` for theming:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
  }
}
```

### 3. Import and Use Components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@kapao-kit/ui";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Get started with @kapao-kit/ui</p>
        <Button variant="default" size="lg">
          Click me
        </Button>
      </CardContent>
    </Card>
  );
}
```

---

## Components

### Forms

| Component | Description |
| --- | --- |
| `Button` | Versatile button with multiple variants and sizes |
| `Checkbox` | Accessible checkbox with indeterminate state support |
| `Form` | Form components with react-hook-form integration |
| `Input` | Styled text input |
| `InputOTP` | One-time password input with slots |
| `Label` | Accessible label for form controls |
| `RadioGroup` | Radio button group with accessible selection |
| `Select` | Dropdown select with search and multi-select support |
| `Slider` | Range slider input |
| `Switch` | Toggle switch |
| `Textarea` | Multi-line text input |
| `Toggle` | Toggle button with variants |
| `ToggleGroup` | Group of toggle buttons |

### Layout

| Component | Description |
| --- | --- |
| `AspectRatio` | Maintains consistent width-to-height ratio |
| `Card` | Container with header, content, and footer |
| `Resizable` | Resizable panel groups |
| `ScrollArea` | Custom scrollbar area |
| `Separator` | Visual divider |

### Data Display

| Component | Description |
| --- | --- |
| `Avatar` | User avatar with image and fallback |
| `Badge` | Status badge with variants |
| `Calendar` | Date picker calendar |
| `Chart` | Chart components for Recharts integration |
| `Table` | Styled data table |

### Feedback

| Component | Description |
| --- | --- |
| `Alert` | Alert messages with variants |
| `Progress` | Progress bar indicator |
| `Skeleton` | Loading placeholder |
| `Sonner` | Toast notifications (sonner) |
| `Toast` | Toast notifications (radix) |

### Overlay

| Component | Description |
| --- | --- |
| `AlertDialog` | Confirmation dialog |
| `Command` | Command palette / search |
| `ContextMenu` | Right-click context menu |
| `Dialog` | Modal dialog |
| `Drawer` | Slide-out drawer panel |
| `DropdownMenu` | Dropdown menu with items |
| `HoverCard` | Card shown on hover |
| `Menubar` | Application menubar |
| `NavigationMenu` | Site navigation menu |
| `Popover` | Floating popover |
| `Sheet` | Side panel overlay |
| `Tooltip` | Hover tooltip |

### Navigation

| Component | Description |
| --- | --- |
| `Accordion` | Expandable content sections |
| `Breadcrumb` | Navigation breadcrumbs |
| `Carousel` | Content carousel/slider |
| `Collapsible` | Collapsible content |
| `Pagination` | Page navigation |
| `Tabs` | Tabbed content panels |

---

## Performance

### Tree Shaking

`@kapao-kit/ui` is fully tree-shakeable. Only the components you import are included in your final bundle:

```tsx
// Only Button code is included in your bundle
import { Button } from "@kapao-kit/ui";
```

### Bundle Optimization Tips

1. **Import only what you need** — Every component is individually tree-shakeable
2. **Use dynamic imports** for heavy components like `Calendar`, `Chart`, or `Command`:
   ```tsx
   import dynamic from "next/dynamic";

   const Calendar = dynamic(
     () => import("@kapao-kit/ui").then((mod) => ({ default: mod.Calendar })),
     { ssr: false }
   );
   ```
3. **Tailwind CSS v4 purging** — Unused styles are automatically removed
4. **Dual ESM/CJS output** — Modern bundlers use the ESM output for better tree shaking

### Lightweight Dependencies

Built on Radix UI primitives which are individually packaged — you only ship the primitives your components actually use.

---

## Examples

### Button Variants

```tsx
import { Button } from "@kapao-kit/ui";

export function ButtonExample() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
```

### Form with Validation

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Button,
} from "@kapao-kit/ui";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});

export function FormExample() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", name: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### Dialog

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from "@kapao-kit/ui";

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Data Table

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
} from "@kapao-kit/ui";

const data = [
  { id: 1, name: "Widget A", status: "active", price: "$29.99" },
  { id: 2, name: "Widget B", status: "draft", price: "$49.99" },
  { id: 3, name: "Widget C", status: "active", price: "$19.99" },
];

export function TableExample() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>
              <Badge variant={item.status === "active" ? "default" : "secondary"}>
                {item.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

---

## Contributing

We welcome contributions! Here's how to get started:

### Development Setup

1. **Fork and clone** the repository:
   ```bash
   git clone https://github.com/kapao-kit/ui.git
   cd ui
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start development**:
   ```bash
   pnpm dev
   ```
   This starts the UI package in watch mode and the example Next.js app.

4. **Build all packages**:
   ```bash
   pnpm build
   ```

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feat/my-feature
   ```

2. Make your changes in `packages/ui/src/components/`

3. Test your changes in the example app (`apps/example-next/`)

4. **Add a changeset** to document your changes:
   ```bash
   pnpm changeset
   ```
   Follow the prompts to describe your change and select the semver bump type.

5. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: add my feature"
   ```

6. Push and create a Pull Request.

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Code style changes (formatting, no logic change)
- `refactor:` — Code refactoring
- `perf:` — Performance improvements
- `test:` — Adding or updating tests
- `chore:` — Maintenance tasks

### Changeset Workflow

This project uses [Changesets](https://github.com/changesets/changesets) for versioning:

1. Run `pnpm changeset` after making changes
2. Select the package(s) affected
3. Choose the bump type (patch, minor, major)
4. Write a summary of the changes
5. Commit the generated changeset file with your PR

When the PR is merged, a "Version Packages" PR is automatically created. Merging that PR publishes the new version to npm.

### Guidelines

- Follow existing code patterns and naming conventions
- Ensure components are accessible (WAI-ARIA compliant)
- Use `cn()` utility for className merging
- Add proper TypeScript types and exports
- Test in both React and Next.js environments

---

## Roadmap

### v0.x — Foundation

- [x] Core component library (40+ components)
- [x] Turborepo monorepo setup
- [x] Changeset versioning
- [x] GitHub Actions CI/CD
- [x] Example Next.js app
- [ ] Unit tests with Vitest
- [ ] Storybook documentation

### v1.0 — Stable Release

- [ ] Complete test coverage
- [ ] Accessibility audit (axe-core)
- [ ] Animation system (Framer Motion integration)
- [ ] Dark mode utilities
- [ ] Theme presets (multiple color themes)
- [ ] Component playground / documentation site

### v1.x — Enhancements

- [ ] Data table with sorting, filtering, and pagination
- [ ] Date/time picker components
- [ ] File upload component
- [ ] Multi-select combobox
- [ ] Stepper / wizard component
- [ ] Sidebar / layout components

### Future

- [ ] React Native support (shared API)
- [ ] Vue.js port
- [ ] Figma design kit
- [ ] Visual theme builder
- [ ] CLI tool for component scaffolding

---

## License

[MIT](./LICENSE) — Made with ❤️ by [Kapao Kit](https://github.com/kapao-kit)
