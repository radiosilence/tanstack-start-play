import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart({
      target: "bun",
    }),
    {
      name: "markdown-loader",
      transform: (code, id) =>
        id.slice(-3) === ".md"
          ? `export default ${JSON.stringify(code)};`
          : undefined,
    },
  ],
});
