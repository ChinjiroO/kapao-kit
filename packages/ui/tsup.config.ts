import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "next-themes",
    // Externalize all dependencies - they'll be resolved at runtime
    /^@radix-ui\//,
    /^@hookform\//,
    "react-hook-form",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "lucide-react",
    "cmdk",
    "embla-carousel-react",
    "input-otp",
    "react-day-picker",
    "react-resizable-panels",
    "recharts",
    "sonner",
    "vaul",
    "zod",
  ],
  treeshake: true,
  splitting: false,
});
