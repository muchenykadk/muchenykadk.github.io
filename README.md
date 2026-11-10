# Muchen Yan — CV website

Open `index.html` in a browser to preview it. Nothing needs installing.

## Updating content
All text, links and images are in **`data.js`**. Edit the entries there; the page builds itself from it.
- `link: ""` → add a URL to make that entry clickable (shows a ↗).
- `image: ""` → put a photo in `assets/img/` (e.g. `arbor.jpg`, ~2000 px wide, under 500 KB) and set `image: "assets/img/arbor.jpg"`.
- The downloadable CV (`assets/CV_MuchenYan.pdf`) is **generated automatically from `data.js`** on every push, using the print layout in `cv-print.html`. Don't edit the PDF by hand. To preview it locally: `node scripts/build-cv-pdf.mjs` (needs Chrome or Edge). The build stops if `data.js` contains a phone number or home address.

## Files
- `index.html` – page skeleton
- `style.css` – design (colours at the top, under `:root`)
- `main.js` – builds the page from `data.js`, scroll effects, section index
- `cv-print.html` – print layout for the CV PDF
- `scripts/build-cv-pdf.mjs` – renders the CV PDF
- `assets/` – images (and the generated CV PDF)

## Publishing
Live at **https://muchenykadk.github.io** (GitHub Pages, repository `muchenykadk/muchenykadk.github.io`, branch `main`, root folder).
To update: commit and push changes to `main`. The GitHub Action in `.github/workflows/deploy.yml` builds the CV PDF and publishes the site within a couple of minutes (progress: the repository's Actions tab).
Original photos in `assets/img/` (outside `web/`) are git-ignored and not published.
