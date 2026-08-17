# Julia Wiart — Portfolio Site

A multi-page static site — no build step, no dependencies to install. Ready to push straight to GitHub Pages.

## Files

- `index.html` — home page (intro + single-word buttons to the other pages)
- `experience.html` — includes Leadership & Activities at the bottom
- `education.html`
- `projects.html`
- `style.css` — shared styling for all pages
- `script.js` — shared scroll-reveal animation

All pages link to the same `style.css` and `script.js`, so a change to either file updates every page at once.

**Note:** if `skills.html` still exists in your repo from before, delete it — open the repo on GitHub, click into `skills.html`, click the trash-can icon in the top right, and commit. Otherwise it'll just sit there as an orphaned, unlinked page.

## Deploy it / update it

1. Upload all files above to the repo root (not into a subfolder) and commit to the `main` branch.
2. In the repo, go to Settings → Pages, confirm Source is "Deploy from a branch," Branch is `main`, folder is `/ (root)`.
3. Wait a minute or two, then hard refresh your live URL.

## Add your photo

On `index.html`, search for `hero-photo` — you'll find:
```html
<div class="hero-photo" aria-hidden="true">Add your photo</div>
```
Upload a square headshot (roughly 400×400px works well) to the repo root — e.g. name it `profile.jpg` — then replace that whole line with:
```html
<img class="hero-photo-img" src="profile.jpg" alt="Julia Wiart">
```

## Add project photos

On `projects.html`, each project card has a line like:
```html
<div class="project-image" aria-hidden="true">Add project photo</div>
```
Upload your image to the repo root (e.g. `wing-foil.jpg`), then replace that line with:
```html
<img class="project-image" src="wing-foil.jpg" alt="Wing Foil Force Measurement System" style="object-fit:cover;">
```

## Edit the content

- **Placeholder projects**: open `projects.html`, search for `PLACEHOLDER` (two spots). Replace the title, meta line, image, description, and bullets, then remove the word `placeholder` from `<div class="project-card placeholder reveal">`.
- **Contact info**: your email appears in the footer of every page and in the home hero. Search for `juliawiart2@gmail.com` to find every spot.
- **Colors/fonts**: defined once at the top of `style.css` under `:root { ... }` — change a value there and every page updates.
- **Adding a page**: copy any existing page, change its `<title>`, page-hero heading, and main content, save under a new filename, then add a matching `<a href="yourpage.html">Word</a>` to the `<nav class="nav">` block in the header of every page — including a `quick-link-btn` version on `index.html` if you want it there too.

## Optional: custom domain

If you buy a domain later, add a file named `CNAME` (no extension) to the repo root containing just your domain, then set it under Settings → Pages → Custom domain.
