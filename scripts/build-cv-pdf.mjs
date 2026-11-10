// Renders cv-print.html (content from data.js) to assets/CV_MuchenYan.pdf with headless Chrome/Edge.
// Runs automatically on GitHub after every push (see .github/workflows/deploy.yml).
// Local preview: node scripts/build-cv-pdf.mjs
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Never publish private contact details
const data = readFileSync("data.js", "utf8");
if (/\+43|677\s?6189|gasse|techniker/i.test(data)) throw new Error("data.js contains a phone number or address");

const browser = [
  process.env.CHROME_PATH,
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
].filter(Boolean).find((p) => existsSync(p));
if (!browser) throw new Error("No Chrome/Edge found; set CHROME_PATH");

const out = resolve("assets/CV_MuchenYan.pdf");
rmSync(out, { force: true });
const profile = mkdtempSync(join(tmpdir(), "cv-pdf-")); // own profile, so an open browser window does not interfere
try {
  execFileSync(browser, [
    "--headless=new", "--disable-gpu", "--no-sandbox", "--user-data-dir=" + profile,
    "--no-pdf-header-footer", "--virtual-time-budget=5000",
    "--print-to-pdf=" + out,
    pathToFileURL(resolve("cv-print.html")).href
  ], { stdio: "ignore" });
} finally {
  rmSync(profile, { recursive: true, force: true });
}
if (!existsSync(out)) throw new Error("PDF was not written");
console.log("Wrote " + out);
