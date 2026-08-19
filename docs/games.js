/**
 * Catalogue of Pragmatic Play demo builds. Every symbol below was verified
 * against the demo endpoint and resolves to the titled game.
 *
 * Cover art is served from the provider's own CDN. Only two sizes exist:
 * `rec/325` (325x234) and `square/200`.
 */
const DEMO_BASE = 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do';
const ART_BASE = 'https://common-static.ppgames.net/game_pic';

/**
 * Launching with `cur=FUN` makes the game label its balance "FUN" instead of a
 * real currency symbol — the demo client renders whatever currency code it is
 * handed. Nothing inside the frame can be scripted from here, so this launch
 * parameter is the only lever over what the game displays.
 *
 * `lobbyUrl` must be the full page URL, not `location.origin`: the site lives
 * under a path, and the origin alone is a dead link. It points at exit.html so
 * the game's own home button lands somewhere that can close the overlay.
 */
const FUN_CURRENCY = 'FUN';

/** `tag` is an i18n key, resolved at render time. */
export const GAMES = [
  { id: 'sweet-bonanza',      symbol: 'vs20fruitsw',   title: 'Sweet Bonanza',          tag: 'tag.tumbling', art: '🍭', accent: '#ff5fa2', featured: true },
  { id: 'sweet-bonanza-1000', symbol: 'vs20fruitswx',  title: 'Sweet Bonanza 1000',     tag: 'tag.upto1000',         art: '🍬', accent: '#ff7bc4' },
  { id: 'gates-of-olympus',   symbol: 'vs20olympgate', title: 'Gates of Olympus',       tag: 'tag.multipliers',         art: '⚡', accent: '#7c6cff' },
  { id: 'starlight-princess', symbol: 'vs20starlight', title: 'Starlight Princess',     tag: 'tag.payanywhere',  art: '🌟', accent: '#c86bff' },
  { id: 'big-bass-bonanza',   symbol: 'vs10bbbonanza', title: 'Big Bass Bonanza',       tag: 'tag.freespins',         art: '🎣', accent: '#33b6ff' },
  { id: 'the-dog-house',      symbol: 'vs20doghouse',  title: 'The Dog House',          tag: 'tag.stickywilds',     art: '🐕', accent: '#ffb03a' },
  { id: 'dog-house-megaways', symbol: 'vswaysdogs',    title: 'The Dog House Megaways', tag: 'tag.megaways',         art: '🦴', accent: '#ff8a3a' },
  { id: 'panda-fortune',      symbol: 'vs25pandagold', title: 'Panda Fortune',          tag: 'tag.classic',          art: '🐼', accent: '#3ddc97' },
];

export const findGame = (id) => GAMES.find((game) => game.id === id) ?? null;

/** `size` is either 'rec/325' (wide) or 'square/200'. */
export const artUrl = (game, size = 'rec/325') => `${ART_BASE}/${size}/${game.symbol}.png`;

export function launchUrl(game, { language = 'en', currency = FUN_CURRENCY } = {}) {
  const params = new URLSearchParams({
    lang: language,
    cur: currency,
    gameSymbol: game.symbol,
    websiteUrl: 'https://demogamesfree.pragmaticplay.net',
    jurisdictionID: '99',
    lobbyUrl: new URL('exit.html', location.href).href,
  });
  return `${DEMO_BASE}?${params}`;
}
