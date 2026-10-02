# UofL Capital Markets Club website

Plain HTML and CSS. No build step, no framework, no paid services. Hosted free on GitHub Pages.

## Publish it (once)

1. Sign in to the Club's GitHub account (registered to capitalmarketsclub@uleth.ca, not a person).
2. Create a public repository named `<account-name>.github.io`.
3. Upload everything in this folder (Add file → Upload files), then Commit.
4. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`. The site goes live at `https://<account-name>.github.io` within a few minutes.

## Edit text

Open any `.html` file in GitHub, click the pencil, and change the words between the tags. Every editable block is marked with an `<!-- EDIT: ... -->` comment. Commit, and the site updates in a minute or two.

- **Header and footer** are copied into every page between `HEADER START/END` and `FOOTER START/END` comments. Change all eight `.html` files together.
- **Colours and fonts** live only in the `:root` block at the top of `assets/css/site.css`.
- **Marquee logos:** in `index.html` and `placements.html`, each row has two identical lists. Add or remove a `<li class="firm">` in BOTH lists of the row. Logos are white, transparent PNGs in `assets/firms/` (about 160 px tall). The `--h` value on each `<img>` sets its display height: about 26px for wide wordmarks, up to 52px for compact marks. If a logo file is missing, the firm name shows instead.
- **Team:** one `<article class="person">` per executive in `team.html`; square photos go in `assets/img/team/`. Photos display in greyscale automatically.
- **Alumni spotlight:** `placements.html` holds two SAMPLE profiles (Jane Doe, Jack Doe). Replace them with real alumni only with their written consent, then delete the "Sample profiles" tag.

## Photos

- `assets/img/hero-markin-hall.jpg` is the Home hero (Markin Hall, used with permission from the Dhillon School of Business). Landscape, at least 1400 px wide, under 400 KB. If the file is missing, the hero shows a solid navy background.
- Logo rule: `logo-dark.png` (James Version) on dark backgrounds only; `logo-light.png` (Bill Version) on light backgrounds only. Never use pure black behind the dark logo.

## Every May (about one hour)

- [ ] Transfer GitHub and email credentials to the incoming VP, Operations & External
- [ ] Update Team names, offices, years and headshots
- [ ] Update the footer year and `assets/docs/constitution-2026-2027.pdf` if amended
- [ ] Add newly verified alumni firms to the marquee and Firm directory
- [ ] Click every link and email button once
- [ ] Confirm the site loads over HTTPS

Fonts: Inter and Source Serif 4, SIL Open Font Licence (see `assets/fonts/`).
