import { GAMES, findGame, launchUrl } from './games.js';
import {
  load, save, view, claimDailyBonus, grantPack, leaderboard, COIN_PACKS,
} from './store.js';

const $ = (selector) => document.querySelector(selector);
const formatCoins = (value) => value.toLocaleString('uk-UA');

const profile = load();
let bonusTimer = null;

// --- rendering --------------------------------------------------------------

function renderProfile() {
  const state = view(profile);
  const coinEl = $('[data-coins]');
  const previous = Number(coinEl.dataset.value ?? 0);

  coinEl.dataset.value = state.coins;
  coinEl.textContent = formatCoins(state.coins);
  if (previous && state.coins !== previous) {
    const chip = $('[data-open-store]');
    chip.classList.remove('bump');
    void chip.offsetWidth; // restart the animation
    chip.classList.add('bump');
  }

  $('[data-level]').textContent = state.level;
  $('[data-xp-fill]').style.width = `${(state.xpIntoLevel / state.xpPerLevel) * 100}%`;
  $('[data-claim-bonus]').hidden = !state.bonus.ready;
  if (!state.bonus.ready) scheduleBonus(state.bonus.availableInMs);

  renderLeaderboard();
}

/** Reveals the bonus button again once the cooldown elapses. */
function scheduleBonus(ms) {
  clearTimeout(bonusTimer);
  bonusTimer = setTimeout(renderProfile, Math.min(ms + 1000, 2 ** 31 - 1));
}

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

function renderLeaderboard() {
  $('[data-leaderboard]').innerHTML = leaderboard(profile).map((entry, index) => `
    <li class="${entry.isYou ? 'you' : ''}">
      <span class="lb-rank">${index + 1}</span>
      <span class="lb-name">${entry.nickname}</span>
      <span class="lb-coins">${formatCoins(entry.coins)}</span>
    </li>
  `).join('');
}

function renderPacks() {
  $('[data-packs]').innerHTML = COIN_PACKS.map((pack) => `
    <button class="pack" data-pack="${pack.id}">
      ${pack.badge ? `<span class="pack-badge">${pack.badge}</span>` : ''}
      <div class="pack-coins">🪙 ${formatCoins(pack.coins)}</div>
      <div class="pack-name">${pack.name}</div>
      <span class="pack-price">${pack.price}</span>
    </button>
  `).join('');
}

function toast(message) {
  const el = $('[data-toast]');
  el.textContent = message;
  el.hidden = false;
  clearTimeout(el.timer);
  el.timer = setTimeout(() => { el.hidden = true; }, 2600);
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
    return;
  }

  if (event.target.closest('[data-open-store]')) { $('[data-store]').hidden = false; return; }
  if (event.target.closest('[data-close-store]')) { $('[data-store]').hidden = true; return; }

  if (event.target.closest('[data-claim-bonus]')) {
    const result = claimDailyBonus(profile);
    if (result.claimed) toast(`+${formatCoins(result.amount)} монет 🎁`);
    renderProfile();
    return;
  }

  const packTarget = event.target.closest('[data-pack]');
  if (packTarget) {
    const result = grantPack(profile, packTarget.dataset.pack);
    if (!result.granted) return;
    renderProfile();
    $('[data-store]').hidden = true;
    toast(`+${formatCoins(result.pack.coins)} монет 🪙`);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (!$('[data-game-overlay]').hidden) closeGame();
  $('[data-store]').hidden = true;
});

save(profile);
renderGames();
renderPacks();
renderProfile();
$('[data-hero]').hidden = false;
