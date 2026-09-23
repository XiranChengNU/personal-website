import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const output = join(process.cwd(), "dist", "client");
const routes = ["about", "painting"];

if (!existsSync(join(output, "index.html"))) {
  throw new Error("The static homepage was not generated.");
}

for (const route of routes) {
  const source = join(output, `${route}.html`);
  if (!existsSync(source)) throw new Error(`The static ${route} page was not generated.`);
}

for (const route of ["", ...routes]) {
  const source = join(output, route ? `${route}.html` : "index.html");
  const target = route ? join(output, route, "index.html") : source;
  let html = readFileSync(source, "utf8");
  html = html.replaceAll('href="/_next/', 'href="/personal-website/_next/');
  html = html.replaceAll('src="/_next/', 'src="/personal-website/_next/');
  html = html.replaceAll('data-rsc-css-href="/_next/', 'data-rsc-css-href="/personal-website/_next/');
  if (route) mkdirSync(join(output, route), { recursive: true });
  writeFileSync(target, html);
}

writeFileSync(join(output, ".nojekyll"), "");

for (const asset of ["unity-1.jpeg", "reveal.js", "favicon.svg", "education/beijing-no8-logo.png"])
  if (!existsSync(join(output, asset))) throw new Error(`Missing public asset: ${asset}`);

console.log("GitHub Pages files are ready in dist/client.");
