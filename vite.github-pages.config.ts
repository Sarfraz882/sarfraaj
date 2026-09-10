import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

const repo = process.env.GITHUB_REPOSITORY ?? "";
const isUserPage = repo.toLowerCase().endsWith(".github.io");
const githubPagesBase = isUserPage ? "/" : (process.env.VITE_GITHUB_PAGES_BASE ?? "./");
const githubPagesEntry = fileURLToPath(new URL("./github-pages.html", import.meta.url));

function normalizeBase(base: string | undefined) {
  if (!base || base === "." || base === "./") return "./";
  return `/${base.replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/$/, "/");
}

export default defineConfig({
  base: normalizeBase(githubPagesBase),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
    rollupOptions: {
      input: githubPagesEntry,
    },
  },
});