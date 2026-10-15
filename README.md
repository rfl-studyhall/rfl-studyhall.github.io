# Study Hall

A short, timed game about **Environmental Justice in Technology (EJIT)**. You
start as an intern at a tech startup and, scenario by scenario, rise into
positions of power. Each card asks what you would recommend; your answers move
a dial and fill a radar, and the game ends on a short "vision" card where you
write your own.

It is a static site: React + Vite, no server of its own. The shipped game is a
single self-contained `index.html`, so it can be hosted anywhere that serves
files (GitHub Pages, Netlify, an S3 bucket, a USB stick).

This guide is for people who want to **fork it, change how it looks and what it
says, and run it as their own**.

---

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
git clone <your fork's url>
cd studyhall
npm install
cp .env.example .env.local     # turns on Dev Mode locally
npm run dev
```

Then open **http://localhost:5601/dev.html**.

> Open `dev.html`, not `/`. The root `index.html` is the *prebuilt bundle* that
> gets shipped; `dev.html` is the live source entry that hot-reloads as you
> edit.

### Dev Mode

Dev Mode (`VITE_DEV_MODE=true`) shows **Restart** and **Go to results screen**
buttons, plays a short four-card deck instead of the full one, and switches
analytics off, so you can click through the whole game over and over without
polluting anything.

You can also flip it per visit on any build with `?dev=1` (on) or `?dev=0`
(off) at the end of the address.

---

## 2. Make it yours: first things to change

Do these before anything else, so your fork does not point at ours.

| What | Where | Why |
| --- | --- | --- |
| **Analytics key** | `.env` → `VITE_POSTHOG_KEY`, `VITE_POSTHOG_HOST` | `.env` ships with *our* PostHog project. Leave it and your players' runs land in our analytics. Put your own project's key in, or **blank both values** to switch analytics off. |
| **Contact + support email** | `src/components/SetupScreen.jsx` (`info@…` footer), `src/components/SupportSheet.jsx` (`SUPPORT_EMAIL`) | Replies from your players should reach you. |
| **Facilitator sign-up form** | `src/scenarios.js` → `FACILITATOR_FORM_URL` | Points at our Google Form. |
| **Credits** | `src/components/CreditsScreen.jsx` | The "A special thanks" first screen. Replace the name lists with your own people. |
| **Printable cards** | `Study_Hall_Cards.zip`, `Study_Hall_Cards_ES.zip` (repo root) | Linked from the results screen (`CARDS_DOWNLOAD_URL` in `src/scenarios.js`). Swap in your own deck, keeping the same file names, or change the constants. The capitals matter: some hosts are case-sensitive. |
| **Name and tagline** | `src/share.js` (`GAME_NAME`, `GAME_SUBTITLE`), `src/components/PromptScreen.jsx` ("STUDY HALL BY …"), `<title>` in `dev.html` | Used in share text and the page title. |
| **License notice** | footer of `src/components/SetupScreen.jsx` | See [License](#license-and-attribution). |

---

## 3. Look and feel

Everything visual lives in **`src/styles.css`**, with the pixel art in
**`src/pixels.jsx`**.

### Colours and the CRT backdrop

The whole palette is a block of CSS variables at the top of `src/styles.css`:

```css
:root {
  --green: #7CFA6B;     /* the one accent colour */
  --black: #0A0A0A;     /* card surfaces */
  --backdrop-base: …;   /* the CRT desktop behind the cards */
  --backdrop-glow: …;
  --grid-line: …;       /* the wireframe floor */
  --scan-opacity: 0.5;  /* scanlines */
  --win-bg / --win-edge / --cloud-bg …  /* the purple pop-up windows */
  --blue, --red …
}
```

Change `--green` and most of the interface follows. The four `--backdrop-*`
and `--scan-opacity` values dial the CRT effect up or down; set
`--scan-opacity: 0` to drop scanlines entirely.

### Fonts

Two fonts, loaded from Google Fonts in `dev.html`:

- **Press Start 2P** for headings (the `.pixel` class)
- **JetBrains Mono** for everything else

To change them, edit the `<link>` in `dev.html` and the `font-family` lines in
`styles.css` (search for `Press Start 2P` and `JetBrains Mono`).

### Layout and screens

- Info screens (welcome, rules, goals, consent) share one shell,
  `src/components/InfoScreen.jsx`, plus `setup-card` styles. Change the card
  there and every one of them follows.
- The Welcome and Game Setup screens zoom down to fit short windows instead of
  scrolling (`src/useFitToViewport.js`). Delete the hook calls if you would
  rather they scroll.
- The ending illustrations (hamster on a wheel, and so on) are in
  `src/components/EndingArt.jsx`, drawn from the pixel components in
  `src/pixels.jsx`.

### Design system reference

`design-system/` is a standalone style guide extracted from the game: colour
and type tokens (`tokens.css`, `tokens.json`), buttons and components
(`components.css`), and animations. Open `design-system/index.html` in a
browser to see it. It is the quickest way to reuse the look in other pages.

---

## 4. Content: scenarios, scoring and endings

### The cards

`src/scenarios.js` holds the deck, `SCENARIO_DECK`. Each card looks like this:

```js
{
  code: 'S.01',
  titleLines: ['DAY 1 AT', 'TECH FLOW'],
  principle: 'The EJIT principle this card is about…',
  paragraphs: ['The story…', 'The question…'],
  advisors: [ { role: 'Community Leader', quote: '…' }, … ],  // three advisors
  options: [
    { text: '…', align: 'full' | 'partial' | 'non', explanation: '…' },
    …                                                          // five options
  ],
}
```

You only choose `align` for each option. Points are looked up for you (below),
so scores can never drift from the cards.

The advisors' standing positions are `ADVISOR_PROFILES`; `SHOW_ADVISOR_ROLE`
hides the role line without touching the copy.

### Scoring and quadrants

`quadrants.json` is the single source for:

- **`points`**: what `full`, `partial` and `non` are worth (default `5`, `2`,
  `-5`).
- **`quadrants`**: which scenarios feed which of the four radar axes.

The game and the (optional) word-cloud service both read this one file. If you
add or remove cards, update the quadrant lists too. The comment at the top of
the file explains the arithmetic.

### Endings

`src/endings.js` maps where the dial lands to one of four endings and their
captions (`ENDING_CAPTIONS`). Rename them, reword them, or move the thresholds.
Artwork per ending is in `EndingArt.jsx`.

### Reading list

`src/resources.js` is the "Learn more" panel: `GENERAL_RESOURCES` for every
card plus `SCENARIO_RESOURCES` per card. Entries are `{ title, url, domain,
blurb }`.

---

## 5. Languages

Study Hall ships in English and Spanish.

- **English** is the key: the English wording in the code *is* the string
  identifier, so English screens need no dictionary.
- **`src/i18n.es.js`** holds Spanish for the interface, keyed by the exact
  English text. A string with no entry falls back to its English.
- **`src/scenarios.es.js`** and **`src/scenarios.es.debrief.js`** are the
  Spanish cards.
- The language buttons live in `src/components/SetupScreen.jsx` (`STRINGS`).

To add another language, mirror the Spanish files, register the interface
strings and a language code in `src/i18n.js` (`resources` and `CODES`), pick
the translated deck where `App.jsx` and `ResultsCharts.jsx` import
`scenarios.es.js`, and add a button in `SetupScreen`. To drop Spanish, remove
the button and leave the files alone.

If you change any English copy that has a Spanish entry, update the entry's
key too, or that string will quietly fall back to English.

> The credits screen is shown *before* a language is chosen, so it is English
> only.

---

## 6. Build and publish

```bash
npm run bundle
```

This builds with Vite and then inlines the CSS and JS into one self-contained
**`index.html`** at the repo root (`scripts/bundle.mjs`). Commit that file; it
is what the site serves.

| Command | What it does |
| --- | --- |
| `npm run dev` | Hot-reloading dev server on port 5601 (`/dev.html`). |
| `npm run bundle` | Production bundle → `index.html`, analytics on. |
| `npm run bundle:dev` | Dev bundle → `index.dev.html` (git-ignored), analytics blanked. Handy for a private test link. |
| `npm run build` | Plain Vite build into `dist/`. |

### Hosting on GitHub Pages

1. Push your fork.
2. **Settings → Pages**, deploy from the `main` branch, root folder.
3. The `.nojekyll` file is already there so Pages serves files as-is.

Asset paths are relative (`base: './'` in `vite.config.js`), so the same bundle
works at a user-site root (`you.github.io`) and at a project subpath
(`you.github.io/studyhall/`).

**Remember to run `npm run bundle` and commit `index.html` after every
change**; editing `src/` alone does not change what is live.

---

## 7. Optional: the live word cloud

The results screen can show a word cloud of what players picked. It is
optional.

- **Without setup**, it falls back to built-in sample data
  (`word-cloud.example.json` shows the shape).
- **With setup**, `modal_app/word_cloud.py` is a small [Modal](https://modal.com)
  app that reads counts from PostHog and serves them. Deploy it with
  `modal deploy modal_app/word_cloud.py`, then put the URL it prints in
  `.env` as `VITE_WORD_CLOUD_URL`.

Keep your PostHog *personal API key* inside the Modal app only. `.env` ships
inside the public bundle, so nothing secret belongs in it.

---

## 8. Project map

```
dev.html                 live source entry (npm run dev)
index.html               prebuilt, self-contained bundle (what gets served)
quadrants.json           scoring + quadrant mapping, shared with Modal
src/
  App.jsx                the game's flow: which screen comes after which
  styles.css             every style, and the colour variables
  pixels.jsx             pixel art components
  scenarios.js           the deck, advisors, download links
  scenarios.es*.js       Spanish cards
  i18n.js, i18n.es.js    translation setup and Spanish interface strings
  endings.js             dial → ending
  resources.js           "Learn more" reading lists
  share.js               share text and URL
  components/            one file per screen
design-system/           standalone style guide and tokens
promo/, about.html       promo videos and their page
modal_app/               optional word-cloud service
scripts/bundle.mjs       inlines the build into one index.html
legacy/                  an earlier single-page version, kept for reference
```

To reorder or add a screen, edit the `phase` flow in `src/App.jsx`: each phase
is one `setPhase('…')` away from the next.

---

## License and attribution

The game is licensed under
[**CC BY-NC-SA 4.0**](https://creativecommons.org/licenses/by-nc-sa/4.0/);
the full text is in [`LICENSE`](LICENSE) and the same notice is in the
game's footer:

- **Attribution**: credit Study Hall and Rooted Futures Lab, and say what you
  changed.
- **NonCommercial**: no commercial use.
- **ShareAlike**: share your version under the same license.

Keep that notice (or an equivalent one) in your fork. This README is not legal
advice; if you plan something beyond a classroom or community fork, get in
touch with the team first.

## Credits

Study Hall is made by **Rooted Futures Lab**. The full thank-you list is on the
game's first screen (`src/components/CreditsScreen.jsx`).
