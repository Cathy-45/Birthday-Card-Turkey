# A Birthday Page for Aygün

A small interactive birthday card, built as a single page and hosted on GitHub
Pages so it can be opened from a phone anywhere in the world.

**Live:** https://cathy-45.github.io/Birthday-Card-Turkey/

## What it does

- A shimmering card that animates on a gradient background
- Heart confetti on load, and again on the Celebrate button
- A slideshow of photos that advances on its own
- A countdown to the day itself
- A letter hidden behind Open Me, revealed in a modal

## Built with

Plain HTML, CSS and JavaScript. No framework and no build step, so the whole
thing is three files you can open directly in a browser.

Confetti comes from [js-confetti](https://github.com/loonywizard/js-confetti)
via CDN. Everything else is hand written.

## The files

| File | What it holds |
|---|---|
| `index.html` | The card, the message and the letter |
| `styles.css` | The gradient, the shimmer, the modal |
| `script.js` | Countdown, slideshow, confetti, modal |
| `image1-3.jpg` | The photos in the slideshow |

## Editing it

Change the words in `index.html`. Change the countdown target in `script.js`.
Drop in new photos over `image1.jpg` to `image3.jpg`, keeping the same names,
and the slideshow picks them up with no other changes.

Then:

```bash
git add -A && git commit -m "..." && git push
```

GitHub Pages rebuilds within a minute or so.

## A note on the repo

This is public, because GitHub Pages needs a paid plan to serve from a private
repository. Anything written into the card can be read by anyone who finds the
repository, not only by whoever is sent the link.

---

Made with love, from a long way away.
