# Julia Wiart — Portfolio Site

A multi-page static site — no build step, no dependencies to install. Ready to push straight to GitHub Pages.

## Files

- `index.html` — home page (intro + quick links to the other pages)
- `experience.html`
- `education.html`
- `projects.html`
- `skills.html`
- `style.css` — shared styling for all five pages
- `script.js` — shared scroll-reveal animation

All five pages link to the same `style.css` and `script.js`, so a change to either file updates every page at once.

## Deploy it

1. Create a new GitHub repository — for a site at `yourusername.github.io/reponame`, any name works. For a site at `yourusername.github.io`, the repo must be named exactly that.
2. Upload **all seven files above** to the repo root (not into a subfolder) and commit to the `main` branch.
3. In the repo, go to Settings → Pages.
4. Under Build and deployment → Source, choose Deploy from a branch.
5. Under Branch, choose `main` and `/ (root)`, then Save.
6. Wait a minute or two — your site will be live at the URL GitHub shows on that same page. `index.html` is the homepage; the others are reachable at `yourdomain/experience.html`, `/education.html`, etc., and from the nav bar on every page.

## Edit the content

- **Placeholder projects**: open `projects.html`, search for `PLACEHOLDER` (two spots). Replace the title, meta line (role · team size · dates), description, and bullets with a real project, then remove the word `placeholder` from `<div class="project-card placeholder reveal">` so it matches the styling of the other cards.
- **Contact info**: appears in the footer of every page and in the hero on `index.html`. Search for `juliawiart2@gmail.com` and the phone number across files.
- **Colors/fonts**: all defined once at the top of `style.css` under `:root { ... }` — change a value there and every page updates.
- **Adding a page**: copy any existing page (e.g. `skills.html`), change its `<title>`, page-hero heading, and main content, save it under a new filename, then add a matching `<a href="yourpage.html">Your Page</a>` link to the `<nav class="nav">` block in the header of **every** page (including the new one), and mark it `class="active"` only on the new page's own nav link.

## Optional: custom domain

If you buy a domain later, add a file named `CNAME` (no extension) to the repo root containing just your domain, e.g. `juliawiart.com`, then set it under Settings → Pages → Custom domain.
