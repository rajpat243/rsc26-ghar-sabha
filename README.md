# Daily Ahnik Companion

A daily companion for ahnik and ghar sabha that's genuinely useful to a delegate at home, not just at the gala.

## What you are building

An app someone can open every day to help with their ahnik (daily religious routine) and ghar sabha (home gathering). It combines a simple checklist for daily ahnik items with a button that surfaces a random Swamishri prasang (story) — something a delegate would actually want to open at home, not just during the coding sessions.

## Your MVP (smallest version that actually works)

Get this working first, before anything else:

- A checklist of daily ahnik items — such as aarti, thaal, and cheshta — that a user can check off.
- A button that, when clicked, shows a random Swamishri prasang.

That's it. If someone can check off their ahnik items and get a prasang, your MVP is done.

## Stretch goals

Once your MVP works, try adding:

- Lyrics for each ahnik item (like the aarti lyrics) that show up when the user taps on that item.
- A dedicated ghar sabha companion section with a suggested kirtan for the day.
- A "thought of the day."

## Challenge goals

For teams who want to go further, pick one:

- A streak counter that persists between visits, so it remembers how many days in a row someone has used the app even after they close the browser.
- **OR** date-based selection, so instead of a random prasang, everyone using the app on the same day sees the same one.

## A note on content

This project has more content to gather than the other three — checklist items, prasangs, kirtans, lyrics, and a thought of the day all need to come from somewhere. The **Content** role should start gathering material early, rather than waiting for the Code role to need it.

Any prasang, lyric, or scriptural reference you use **must** come from a source you trust — the printed book, Anirdesh, or checking with a sadhu. **Do not** take any of this content from an AI tool. AI tools will confidently produce stories, lyrics, and references that sound real but are actually made up.

## Team roles

- **Content** — Gathers and writes out the ahnik checklist items, prasangs, kirtans, lyrics, and thought of the day, and verifies every prasang and reference against a real source (see note above). Start early!
- **Design** — Decides how the checklist, prasang button, and ghar sabha section are laid out, and how the app feels to use every day.
- **Code** — Builds the checklist logic, the random (or date-based) prasang picker, and the streak counter for the challenge goal.
- **Media** — Finds or creates any images or icons that go with the checklist items, prasangs, or kirtans.

## Getting started

1. Pull the latest changes so you're starting from the newest version of the project:
   ```
   git pull
   ```
2. Open the `index.html` file in your web browser (double-click it, or drag it into a browser window) to see the current page.
3. Make your changes to `index.html`, `style.css`, and `script.js`.
4. Save your work with git as you go, using these four commands:
   ```
   git add .
   git commit -m "describe what you changed here"
   git push
   git pull
   ```
   Run all four every time you save progress — `pull` again at the end so you're never behind if a teammate pushed while you were working.

## Working as a Team: Branches

Once more than one person is working in the same repo, everyone pushing straight to `main` gets messy fast. Branches let each person work on their own copy of the project without stepping on anyone else's changes. Here's the flow, left to right:

1. **Branch off** — create your own branch to work in:
   ```
   git checkout -b akshar
   ```
2. **Do your work** — make your changes, then save them:
   ```
   git add .
   git commit -m "describe what you changed here"
   ```
3. **Get the latest** — before you push, pull down the newest changes from `main` so you're building on top of everyone else's work, not around it:
   ```
   git pull origin main
   ```
4. **Push & merge** — push your branch up to GitHub, then merge it into `main`:
   ```
   git push origin akshar
   ```

### `git fetch` vs. `git pull`

- `git fetch` — look, don't touch. It checks GitHub for new changes and downloads them, but doesn't change any of the files you're working on.
- `git pull` — fetch **and** merge. It downloads new changes and immediately merges them into the branch you're currently on.

### The golden rule

**Always `pull` before you `push`.** If someone else has changed the project since you last checked, pulling first means you find out (and sort out any conflicts) on your own machine — not in the middle of the group.

## A note on tools

This project uses **only plain HTML, CSS, and JavaScript** — no frameworks (like React or Vue) and no build step. If you ask an AI tool for help, **tell it that** explicitly, or it will hand you React code that won't run in this project.
