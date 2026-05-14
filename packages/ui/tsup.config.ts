import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "tsup";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
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
  onSuccess: async () => {
    copyFileSync(
      join(__dirname, "src/globals.css"),
      join(__dirname, "dist/globals.css"),
    );
  },
});
