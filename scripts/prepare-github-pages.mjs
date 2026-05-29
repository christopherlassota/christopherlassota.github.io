import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(rootDir, "dist");
const indexPath = resolve(distDir, "index.html");
const notFoundPath = resolve(distDir, "404.html");
const noJekyllPath = resolve(distDir, ".nojekyll");

await mkdir(distDir, { recursive: true });
await copyFile(indexPath, notFoundPath);
await writeFile(noJekyllPath, "");

console.log("Prepared GitHub Pages fallback files.");
