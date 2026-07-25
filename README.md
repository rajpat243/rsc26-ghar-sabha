# Ghar Sabha Companion

A daily helper that gives you everything you need for ghar sabha (home gathering) today.

## What you are building

A page that, with a click of a button, gives someone a random Swamishri prasang (story) and a suggested kirtan to sing — everything they need to run a meaningful ghar sabha without having to plan it themselves.

## Your MVP (smallest working version)

Get this working first, before anything else:

- A button that, when clicked, shows a random Swamishri prasang.
- Along with the prasang, show a suggested kirtan to sing.

That's it. If clicking the button gives someone a prasang and a kirtan, your MVP is done.

## Stretch goals

Once your MVP works, try adding:

- A niyam checklist people can tick off for puja, cheshta, and ghar sabha.
- A "thought of the day" that shows alongside the prasang.

## Challenge goals

For teams who want to go further (pick one or both):

- A streak counter that remembers how many days in a row someone has used the app, and keeps that count even after they close the browser.
- Date-based selection, so instead of a random prasang, everyone using the app on the same day sees the same one.

## Important: verify every prasang yourself

Any prasang or scriptural reference you use **must** come from a source you trust — the printed book, Anirdesh, or checking with a sadhu. **Do not** take prasangs from an AI tool. AI tools will confidently produce stories and references that sound real but are actually made up.

## Team roles

- **Content** — Collects and writes out the prasangs, kirtans, and niyam list, and verifies every prasang against a real source (see note above).
- **Design** — Decides how the button, prasang, and kirtan are laid out, and how the page feels to use every day.
- **Code** — Builds the button logic, picks the random (or date-based) prasang, and builds the checklist and streak counter for the stretch/challenge goals.
- **Media** — Finds or creates any images or icons that go with the prasangs or niyam checklist.

## Getting started

1. Clone this repo to your computer:
   ```
   git clone <this repo's URL>
   ```
2. Open the `index.html` file in your web browser (just double-click it, or drag it into a browser window) to see the starter page.
3. Make your changes to `index.html`, `style.css`, and `script.js`.
4. Save your work with git, using these four commands as you go:
   ```
   git clone <this repo's URL>
   git add .
   git commit -m "describe what you changed here"
   git push
   ```
   (You only need to `clone` once — after that it's `add`, `commit`, and `push` each time you save progress.)

## A note on tools

This project uses **only plain HTML, CSS, and JavaScript** — no frameworks (like React or Vue) and no build step. If you ask an AI tool for help, **tell it that** explicitly, or it will hand you React code that won't run in this project.
