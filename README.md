# Sugar Rush Social

An entertainment-only game shelf. **No real money is involved anywhere**: there
is nothing to pay for, no money to take out, and no virtual currency either.
Games open in the developer's public demo mode, purely for fun.

The site's own copy deliberately avoids gambling vocabulary — no "bet", "win",
"spin", "casino", "jackpot" or "lobby" — so that wrapping it in a webview app
raises fewer questions during review. Text inside the game frame is the
provider's and cannot be changed from here.

Live: <https://sweet-bonanza.stream> — published from `docs/` via GitHub Pages.
The domain is registered at adm.tools; its A records point at GitHub's Pages IPs
and `docs/CNAME` binds it on GitHub's side. HTTPS is a Let's Encrypt certificate
issued automatically by GitHub.

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
- Seven UI languages (English, Ukrainian, Spanish, Portuguese, German, Polish,
  Turkish) behind a switcher in the header

English is the default on every first visit; an explicit choice is remembered in
`localStorage`. The browser's own language is deliberately not sniffed, so the
landing language does not depend on whose browser opened the link.

The chosen language is also passed to the game at launch. Codes are ISO 639-1 —
Ukrainian is `uk`; the country-style `ua` is accepted but silently renders the
game in English.

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
