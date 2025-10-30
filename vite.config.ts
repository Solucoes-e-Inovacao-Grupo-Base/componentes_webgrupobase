import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getRepoName = (): string => {
  if (process.env.GITHUB_REPOSITORY) {
    const [, repo] = process.env.GITHUB_REPOSITORY.split("/");
    if (repo) {
      return repo;
    }
  }

  try {
    const remoteUrl = execSync("git config --get remote.origin.url", {
      encoding: "utf-8"
    }).trim();
    if (remoteUrl) {
      const cleaned = remoteUrl
        .replace(/^git@[^:]+:/, "")
        .replace(/^https?:\/\//, "")
        .replace(/\.git$/, "");
      const segments = cleaned.split("/");
      return segments[segments.length - 1] ?? "";
    }
  } catch (error) {
    // ignore - fallback handled below
  }

  return path.basename(process.cwd());
};

const repoName = getRepoName();

export default defineConfig({
  base: process.env.GITHUB_PAGES ? `/${repoName}/` : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
