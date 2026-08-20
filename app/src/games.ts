/**
 * Catalogue of licensed provider builds. Symbols were verified against the
 * provider's endpoint — each resolves to the titled game.
 *
 * The app does not integrate with the provider's wallet, so nothing that
 * happens inside a game is visible to us. Progression is therefore built on
 * engagement (see src/progress.ts), never on game outcomes.
 */
const LAUNCH_BASE = 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do';
const ART_BASE = 'https://common-static.ppgames.net/game_pic';

/** Labels the in-game balance "FUN" rather than a real currency. */
const FUN_CURRENCY = 'FUN';

export type Game = {
  id: string;
  symbol: string;
  title: string;
  tag: string;
  accent: string;
  featured?: boolean;
};

export const GAMES: Game[] = [
  { id: 'sweet-bonanza',      symbol: 'vs20fruitsw',   title: 'Sweet Bonanza',          tag: 'tag.tumbling',     accent: '#ff5fa2', featured: true },
  { id: 'sweet-bonanza-1000', symbol: 'vs20fruitswx',  title: 'Sweet Bonanza 1000',     tag: 'tag.upto1000',     accent: '#ff7bc4' },
  { id: 'gates-of-olympus',   symbol: 'vs20olympgate', title: 'Gates of Olympus',       tag: 'tag.multipliers',  accent: '#7c6cff' },
  { id: 'starlight-princess', symbol: 'vs20starlight', title: 'Starlight Princess',     tag: 'tag.payanywhere',  accent: '#c86bff' },
  { id: 'big-bass-bonanza',   symbol: 'vs10bbbonanza', title: 'Big Bass Bonanza',       tag: 'tag.freespins',    accent: '#33b6ff' },
  { id: 'the-dog-house',      symbol: 'vs20doghouse',  title: 'The Dog House',          tag: 'tag.stickywilds',  accent: '#ffb03a' },
  { id: 'dog-house-megaways', symbol: 'vswaysdogs',    title: 'The Dog House Megaways', tag: 'tag.megaways',     accent: '#ff8a3a' },
  { id: 'panda-fortune',      symbol: 'vs25pandagold', title: 'Panda Fortune',          tag: 'tag.classic',      accent: '#3ddc97' },
];

export const findGame = (id: string) => GAMES.find((game) => game.id === id) ?? null;

/** `size` is either 'rec/325' (wide) or 'square/200'. */
export const artUrl = (game: Game, size: 'rec/325' | 'square/200' = 'rec/325') =>
  `${ART_BASE}/${size}/${game.symbol}.png`;

export function launchUrl(game: Game, language: string) {
  const params = new URLSearchParams({
    lang: language,
    cur: FUN_CURRENCY,
    gameSymbol: game.symbol,
    websiteUrl: 'https://demogamesfree.pragmaticplay.net',
    jurisdictionID: '99',
  });
  return `${LAUNCH_BASE}?${params.toString()}`;
}
