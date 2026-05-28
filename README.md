# APEX Wrestling Alliance — E-Fed Website

A complete, ready-to-host website for an electronic wrestling federation. Five pages, fully responsive, no build tools needed — just open and go.

## Pages
- **index.html** — Home (hero, next show, how-it-works)
- **roster.html** — Wrestler roster cards
- **shows.html** — Events & results timeline
- **titles.html** — Championships
- **join.html** — Character signup form

## How to host it for FREE

### Option 1 — Netlify Drop (easiest, 1 minute)
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. Done — you get a live URL instantly. (Free Netlify account lets you rename it.)

### Option 2 — GitHub Pages (free, custom-friendly)
1. Create a free account at github.com and make a new repository.
2. Upload all these files to it.
3. Repo → Settings → Pages → Source: "main" branch → Save.
4. Your site goes live at `https://yourname.github.io/reponame/`.

### Option 3 — Cloudflare Pages
1. Sign up free at pages.cloudflare.com.
2. Connect your GitHub repo or upload directly.

All three are free forever for static sites like this one.

## Making the JOIN form actually collect submissions
Right now the form just shows a thank-you message (no backend). To receive real applications for free, pick one:

- **Formspree** (formspree.io) — free tier. Sign up, get a form URL, then in `join.html` change the `<form>` tag to:
  `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
  and remove the `onsubmit` attribute.
- **Google Forms** — make a form, then link the "Submit Application" button to it.
- **Discord Webhook** — most e-feds run on Discord; a webhook can post applications straight to a channel.

## Customizing it for YOUR fed
Everything is plain HTML/CSS — no coding experience required to edit text.

- **Fed name / logo:** search-replace `APEX` and `APEXWA` across the `.html` files.
- **Colors:** open `styles.css`, edit the `:root` block at the top (`--red`, `--gold`, `--bg`, etc.).
- **Wrestlers:** copy/paste a `.wrestler` block in `roster.html` and change the name, tag, and stats. The two letters in `.w-img` are initials; classes `w-face` / `w-heel` / `w-tweener` set the card color.
- **Shows:** duplicate a `.show-row` in `shows.html`. Status classes: `st-upcoming`, `st-live`, `st-done`.
- **Titles:** duplicate a `.title-card` in `titles.html`.
- **Stats on homepage:** edit the `data-target` numbers in `index.html`.

## Adding wrestler photos
Replace the initials block:
```html
<div class="w-img w-face">CD</div>
```
with:
```html
<div class="w-img"><img src="images/cole.jpg" style="width:100%;height:100%;object-fit:cover"></div>
```
Put images in an `images/` folder next to the HTML files.

---
Built as a starter kit. It's all yours to rename, recolor, and expand. Have a great season!
