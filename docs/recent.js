/**
 * Remembers which games were opened, so the lobby can show a short history.
 * This is the only state the site keeps — there is no balance, no economy and
 * no account.
 */
const KEY = 'srs.recent.v1';
const LIMIT = 6;

export function loadRecent() {
  try {
    const stored = JSON.parse(localStorage.getItem(KEY));
    if (Array.isArray(stored)) return stored.filter((id) => typeof id === 'string');
  } catch { /* corrupt or unavailable storage falls back to an empty history */ }
  return [];
}

/** Moves a game to the front of the history, keeping the list short. */
export function pushRecent(id) {
  const next = [id, ...loadRecent().filter((entry) => entry !== id)].slice(0, LIMIT);
  try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* private mode */ }
  return next;
}
