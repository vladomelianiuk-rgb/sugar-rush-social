import { GAMES, findGame, launchUrl, artUrl } from './games.js';
import { loadRecent, pushRecent } from './recent.js';

const $ = (selector) => document.querySelector(selector);

// --- rendering --------------------------------------------------------------

function renderGames() {
  $('[data-games]').innerHTML = GAMES.map((game) => `
    <button class="game-card" data-play="${game.id}" style="--accent:${game.accent}">
      ${game.featured ? '<span class="featured-flag">HOT</span>' : ''}
      <div class="game-thumb">
        <img src="${artUrl(game)}" alt="${game.title}" data-fallback="${game.art}"
             width="325" height="234" loading="lazy">
      </div>
      <div class="game-meta">
        <div class="game-name">${game.title}</div>
        <div class="game-tag">${game.tag}</div>
      </div>
    </button>
  `).join('');
}

function renderRecent() {
  const games = loadRecent().map(findGame).filter(Boolean);
  $('[data-recent-empty]').hidden = games.length > 0;
  $('[data-recent]').innerHTML = games.map((game) => `
    <li>
      <button class="recent-item" data-play="${game.id}" style="--accent:${game.accent}">
        <img class="recent-art" src="${artUrl(game, 'square/200')}" alt=""
             data-fallback="${game.art}" width="200" height="200" loading="lazy">
        <span class="recent-name">${game.title}</span>
      </button>
    </li>
  `).join('');
}

function renderHero() {
  const game = findGame('sweet-bonanza');
  $('[data-hero-art]').innerHTML =
    `<img src="${artUrl(game)}" alt="${game.title}" data-fallback="${game.art}" width="325" height="234">`;
}

/**
 * Cover art comes from the provider's CDN, so a missing or blocked image must
 * not leave a hole in the grid. `error` does not bubble, hence the capture.
 */
document.addEventListener('error', (event) => {
  const img = event.target;
  if (img.tagName !== 'IMG' || !img.dataset.fallback) return;
  const fallback = document.createElement('span');
  fallback.className = 'art-fallback';
  fallback.textContent = img.dataset.fallback;
  img.replaceWith(fallback);
}, true);

// --- game overlay -----------------------------------------------------------

function openGame(id) {
  const game = findGame(id);
  if (!game) return;

  const frame = $('[data-game-frame]');
  const loader = $('[data-frame-loader]');

  $('[data-game-title]').textContent = game.title;
  loader.hidden = false;
  $('[data-game-overlay]').hidden = false;
  document.body.style.overflow = 'hidden';

  // The demo client streams assets long after the document fires `load`, and it
  // shows its own branded loader, so ours steps aside shortly after handover.
  frame.addEventListener('load', () => setTimeout(() => { loader.hidden = true; }, 600), { once: true });
  frame.src = launchUrl(game);

  pushRecent(game.id);
  renderRecent();
}

function closeGame() {
  $('[data-game-overlay]').hidden = true;
  $('[data-game-frame]').src = 'about:blank';
  document.body.style.overflow = '';
}

// --- wiring -----------------------------------------------------------------

document.addEventListener('click', (event) => {
  const playTarget = event.target.closest('[data-play]');
  if (playTarget) return openGame(playTarget.dataset.play);

  if (event.target.closest('[data-close-game]')) return closeGame();

  if (event.target.closest('[data-fullscreen]')) {
    if (document.fullscreenElement) document.exitFullscreen();
    else $('.overlay-frame').requestFullscreen?.();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !$('[data-game-overlay]').hidden) closeGame();
});

renderHero();
renderGames();
renderRecent();
