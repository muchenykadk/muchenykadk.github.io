# Muchen Yan — CV website

Open `index.html` in a browser to preview it. Nothing needs installing.

## Updating content
All text, links and images are in **`data.js`**. Edit the entries there; the page builds itself from it.
- `link: ""` → add a URL to make that entry clickable (shows a ↗).
- `image: ""` → put a photo in `assets/img/` (e.g. `arbor.jpg`, ~2000 px wide, under 500 KB) and set `image: "assets/img/arbor.jpg"`.
- Replace `assets/CV_MuchenYan.pdf` to update the downloadable CV. **This file is public** — use the web version without phone number and home address (`../CV_MuchenYan_20261021_web.docx` → Save as PDF).

## Files
- `index.html` – page skeleton
- `style.css` – design (colours at the top, under `:root`)
- `main.js` – builds the page from `data.js`, scroll effects, section index
- `assets/` – CV PDF and images

## Publishing
Live at **https://muchenykadk.github.io** (GitHub Pages, repository `muchenykadk/muchenykadk.github.io`, branch `main`, root folder).
To update: commit and push changes to `main` — the site rebuilds automatically within a minute or two.
Original photos in `assets/img/` (outside `web/`) are git-ignored and not published.
