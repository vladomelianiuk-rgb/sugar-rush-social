/**
 * Social-casino state: virtual coins only, no cash-out, no payment rail.
 * Persisted per browser in localStorage — there is no server and no account.
 */
const KEY = 'srs.profile.v1';

export const STARTING_COINS = 25_000;
const DAILY_BONUS = 5_000;
const DAY_MS = 24 * 60 * 60 * 1000;
const LEVEL_STEP = 2_500;

export const COIN_PACKS = [
  { id: 'pack-s', name: 'Candy Bag',   coins: 50_000,    badge: null,          price: '€4.99' },
  { id: 'pack-m', name: 'Candy Jar',   coins: 150_000,   badge: 'ПОПУЛЯРНЕ',   price: '€9.99' },
  { id: 'pack-l', name: 'Candy Chest', coins: 500_000,   badge: '+25% БОНУС',  price: '€24.99' },
  { id: 'pack-x', name: 'Sugar Vault', coins: 1_500_000, badge: 'НАЙВИГІДНІШЕ', price: '€49.99' },
];

const blank = () => ({ coins: STARTING_COINS, xp: 0, lastBonusAt: 0 });

export function load() {
  try {
    const stored = JSON.parse(localStorage.getItem(KEY));
    if (stored && typeof stored.coins === 'number') return { ...blank(), ...stored };
  } catch { /* corrupt or unavailable storage falls back to a fresh profile */ }
  return blank();
}

export function save(profile) {
  try { localStorage.setItem(KEY, JSON.stringify(profile)); } catch { /* private mode */ }
  return profile;
}

export const level = (xp) => Math.floor(xp / LEVEL_STEP) + 1;

export function bonusState(profile) {
  const elapsed = Date.now() - profile.lastBonusAt;
  const ready = elapsed >= DAY_MS;
  return { ready, amount: DAILY_BONUS, availableInMs: ready ? 0 : DAY_MS - elapsed };
}

export function view(profile) {
  return {
    coins: profile.coins,
    level: level(profile.xp),
    xpIntoLevel: profile.xp % LEVEL_STEP,
    xpPerLevel: LEVEL_STEP,
    bonus: bonusState(profile),
  };
}

export function claimDailyBonus(profile) {
  const state = bonusState(profile);
  if (!state.ready) return { claimed: false };
  profile.lastBonusAt = Date.now();
  profile.coins += DAILY_BONUS;
  profile.xp += 100;
  save(profile);
  return { claimed: true, amount: DAILY_BONUS };
}

/** Fake store purchase — no payment rail is wired up. */
export function grantPack(profile, packId) {
  const pack = COIN_PACKS.find((candidate) => candidate.id === packId);
  if (!pack) return { granted: false };
  profile.coins += pack.coins;
  profile.xp += 250;
  save(profile);
  return { granted: true, pack };
}

/** Static rivals plus the local player, so the lobby has a leaderboard. */
export function leaderboard(profile) {
  const bots = [
    { nickname: 'CandyKing', coins: 4_812_000 },
    { nickname: 'TumbleQueen', coins: 3_240_500 },
    { nickname: 'x100Bomb', coins: 2_115_750 },
    { nickname: 'LollipopLuke', coins: 1_760_200 },
    { nickname: 'SugarRush99', coins: 980_400 },
    { nickname: 'BananaSplit', coins: 645_100 },
    { nickname: 'GrapeEscape', coins: 402_800 },
  ];
  return [...bots, { nickname: 'Ти', coins: profile.coins, isYou: true }]
    .sort((a, b) => b.coins - a.coins)
    .slice(0, 8);
}
