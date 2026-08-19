import { GAMES, findGame, launchUrl } from './games.js';
import { loadRecent, pushRecent } from './recent.js';

const $ = (selector) => document.querySelector(selector);

// --- rendering --------------------------------------------------------------

function renderGames() {
  $('[data-games]').innerHTML = GAMES.map((game) => `
    <button class="game-card" data-play="${game.id}" style="--accent:${game.accent}">
      ${game.featured ? '<span class="featured-flag">HOT</span>' : ''}
      <div class="game-thumb">${game.art}</div>
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
        <span class="recent-art">${game.art}</span>
        <span class="recent-name">${game.title}</span>
      </button>
    </li>
  `).join('');
}

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

renderGames();
renderRecent();
