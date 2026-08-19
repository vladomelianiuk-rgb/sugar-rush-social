# Sugar Rush Social — MVP

Social-casino lobby shell. Virtual coins only: no cash-out, no payment rail, no
real-money wagering.

Live: published from `docs/` via GitHub Pages.

## Run locally

```bash
npm start
```

Then open http://localhost:4000

## What it does

- Lobby with 8 Pragmatic Play titles, Sweet Bonanza featured
- Virtual coin balance, daily bonus, XP/levels, coin-pack store (grants instantly)
- Games open in an overlay iframe against Pragmatic Play's public demo build

## Important limitation

The PP demo client keeps its **own internal play-money balance**. It cannot read
or debit the coin balance this app tracks — there is no API into the demo build.

So the coin economy lives *around* the game, not inside it. To make spins
actually cost profile coins you need one of:

1. **Pragmatic Play seamless-wallet integration** — a commercial agreement,
   `secureLogin` + `secretKey`, and operator-side endpoints (`authenticate` /
   `balance` / `bet` / `result` / `refund`) that PP calls on every money
   movement. This is the path a real operator takes.
2. **Our own slot implementation** — reimplement the 6×5 tumbling-win maths
   in-house, where we control the RNG and the balance end to end.

## Layout

```
docs/           the site itself — fully static, no backend
  index.html    lobby markup
  styles.css    candy theme
  app.js        lobby logic + game overlay
  games.js      game catalogue + demo launch URLs
  store.js      localStorage profile: coins, bonus, levels
serve.js        local preview server (not used in production)
```

Profile state lives in `localStorage`, per browser. There are no accounts and no
server-side state.
