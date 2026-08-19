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
- A webview-style back/home bar floating over the game, so there is always a way out

Games are launched with `cur=FUN`, which makes them label the balance "FUN"
rather than a real currency. Nothing inside the cross-origin frame can be
scripted, so launch parameters are the only lever over what the game shows.

Each game is also handed `exit.html` as its `lobbyUrl`. When a player uses the
game's own home button, that page loads inside the frame and messages the lobby
to close the overlay — otherwise the site would render inside its own iframe.
Passing `location.origin` here is a bug: the site lives under a path, so the
origin alone is a dead link.

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
  exit.html     lands the game's home button back in the lobby
serve.js        local preview server (not used in production)
```
