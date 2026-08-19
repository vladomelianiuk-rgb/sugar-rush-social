/**
 * Catalogue of Pragmatic Play demo builds. Every symbol below was verified
 * against the demo endpoint and resolves to the titled game.
 *
 * These load the publicly hosted *demo* client, which keeps its own internal
 * play-money balance. It cannot read or debit the coin balance this app tracks.
 */
const DEMO_BASE = 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do';

export const GAMES = [
  { id: 'sweet-bonanza',      symbol: 'vs20fruitsw',   title: 'Sweet Bonanza',          tag: 'Каскадні виграші', art: '🍭', accent: '#ff5fa2', featured: true },
  { id: 'sweet-bonanza-1000', symbol: 'vs20fruitswx',  title: 'Sweet Bonanza 1000',     tag: 'До 1000x',         art: '🍬', accent: '#ff7bc4' },
  { id: 'gates-of-olympus',   symbol: 'vs20olympgate', title: 'Gates of Olympus',       tag: 'Множники',         art: '⚡', accent: '#7c6cff' },
  { id: 'starlight-princess', symbol: 'vs20starlight', title: 'Starlight Princess',     tag: 'Виплати будь-де',  art: '🌟', accent: '#c86bff' },
  { id: 'big-bass-bonanza',   symbol: 'vs10bbbonanza', title: 'Big Bass Bonanza',       tag: 'Фріспіни',         art: '🎣', accent: '#33b6ff' },
  { id: 'the-dog-house',      symbol: 'vs20doghouse',  title: 'The Dog House',          tag: 'Липкі вайлди',     art: '🐕', accent: '#ffb03a' },
  { id: 'dog-house-megaways', symbol: 'vswaysdogs',    title: 'The Dog House Megaways', tag: 'Megaways',         art: '🦴', accent: '#ff8a3a' },
  { id: 'panda-fortune',      symbol: 'vs25pandagold', title: 'Panda Fortune',          tag: 'Класика',          art: '🐼', accent: '#3ddc97' },
];

export const findGame = (id) => GAMES.find((game) => game.id === id) ?? null;

export function launchUrl(game, { language = 'en', currency = 'EUR' } = {}) {
  const params = new URLSearchParams({
    lang: language,
    cur: currency,
    gameSymbol: game.symbol,
    websiteUrl: 'https://demogamesfree.pragmaticplay.net',
    jurisdictionID: '99',
    lobbyUrl: location.origin,
  });
  return `${DEMO_BASE}?${params}`;
}
