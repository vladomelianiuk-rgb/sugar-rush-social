# Sugar Rush Social

An entertainment-only game lobby. **There is no real-money play here**: no
wagering, no deposits, no withdrawals, no purchases, and no virtual currency
either. Games open in the developer's public demo mode — you spin purely for fun.

Live: published from `docs/` via GitHub Pages.

## Run locally

```bash
npm start
```

Then open http://localhost:4000

## What it does

- Lobby with 8 Pragmatic Play titles, Sweet Bonanza featured
- Games open in an overlay iframe against Pragmatic Play's public demo build
- A "recently played" list, kept in `localStorage`

That is the whole feature set. There is no balance, no economy, no store and no
account — deliberately, so nothing on the site resembles gambling for money.

## Layout

```
docs/           the site itself — fully static, no backend
  index.html    lobby markup
  styles.css    candy theme
  app.js        lobby logic + game overlay
  games.js      game catalogue + demo launch URLs
  recent.js     localStorage history of opened games
serve.js        local preview server (not used in production)
```
