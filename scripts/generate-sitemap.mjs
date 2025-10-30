import { execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = ["/", "/about", "/services", "/contact"];

const getRepoInfo = () => {
  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    if (owner && repo) {
      return { owner, repo };
    }
  }

  try {
    const remote = execSync("git config --get remote.origin.url", { encoding: "utf-8" }).trim();
    if (remote) {
      if (remote.startsWith("git@")) {
        const cleaned = remote.replace(/^git@[^:]+:/, "").replace(/\.git$/, "");
        const [owner, repo] = cleaned.split("/");
        return { owner, repo };
      }

      const url = new URL(remote);
      const parts = url.pathname.replace(/\.git$/, "").replace(/^\//, "").split("/");
      if (parts.length >= 2) {
        return { owner: parts[0], repo: parts[1] };
      }
    }
  } catch (error) {
    // ignore errors and fallback later
  }

  const repo = process.cwd().split("/").pop() ?? "";
  return { owner: "webgrupobase", repo };
};

const { owner, repo } = getRepoInfo();
const repoSlug = repo ?? "componentes_webgrupobase";

const siteUrl = (process.env.SITE_URL ?? `https://${owner}.github.io/${repoSlug}`).replace(/\/$/, "");

const now = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((path) => `  <url><loc>${siteUrl}${path}</loc><lastmod>${now}</lastmod></url>`)
  .join("\n")}
</urlset>`;

const outputDir = join(__dirname, "..", "dist");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "sitemap.xml"), sitemap, "utf-8");

console.log(`Sitemap gerado em ${join(outputDir, "sitemap.xml")}`);
