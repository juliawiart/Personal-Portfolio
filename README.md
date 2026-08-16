# Julia Wiart — Portfolio Site

A single-file, static site (`index.html`) — no build step, no dependencies to install. Ready to push straight to GitHub Pages.

## Deploy it

1. Create a new GitHub repository — for a site at `yourusername.github.io/reponame`, any name works. For a site at `yourusername.github.io`, the repo must be named exactly that.
2. Add `index.html` to the repo (root level) and push to the `main` branch.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
6. Wait a minute or two — your site will be live at the URL GitHub shows on that same page.

## Edit the content

Everything lives in `index.html` — open it in any text editor.

- **Placeholder projects**: search for `PLACEHOLDER` (two spots in the Projects section). Replace the title, meta line (role · team size · dates), description, and bullets with a real project, then remove the `placeholder` class from `<div class="project-card placeholder reveal">` so it matches the styling of the other cards.
- **Contact info**: search for `juliawiart2@gmail.com` and the phone number — each appears in two places (hero and contact section).
- **Colors/fonts**: all defined once at the top of the `<style>` block under `:root { ... }` — change a value there and it updates everywhere.
- **Sections**: each part of the page is a `<section>` with a matching `id` (`experience`, `education`, `projects`, `skills`, `contact`) that the nav bar links to — add, remove, or reorder freely as long as the `id`s and nav links stay in sync.

## Optional: custom domain

If you buy a domain later, add a file named `CNAME` (no extension) to the repo root containing just your domain, e.g. `juliawiart.com`, then set it under **Settings → Pages → Custom domain**.
