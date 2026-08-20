import AsyncStorage from '@react-native-async-storage/async-storage';
import { GAMES } from './games';

/**
 * Progression is derived entirely from engagement — when the player came back,
 * how long a game stayed open, how many different games they tried.
 *
 * It deliberately does not model wins, balances or outcomes: the games run in
 * the provider's own client and report nothing back to us, so any "winnings"
 * shown here would be invented. Engagement is data we actually hold.
 */
const KEY = 'srs.progress.v1';

export type Progress = {
  firstSeen: number;
  lastVisitDay: string;
  streak: number;
  bestStreak: number;
  totalMs: number;
  sessions: number;
  perGameMs: Record<string, number>;
  unlocked: string[];
  ageConfirmed: boolean;
  haptics: boolean;
  locale: string | null;
};

export const blankProgress = (): Progress => ({
  firstSeen: Date.now(),
  lastVisitDay: '',
  streak: 0,
  bestStreak: 0,
  totalMs: 0,
  sessions: 0,
  perGameMs: {},
  unlocked: [],
  ageConfirmed: false,
  haptics: true,
  locale: null,
});

export async function loadProgress(): Promise<Progress> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (raw) return { ...blankProgress(), ...(JSON.parse(raw) as Partial<Progress>) };
  } catch {
    // Corrupt or unavailable storage starts the player fresh rather than crashing.
  }
  return blankProgress();
}

export async function saveProgress(progress: Progress): Promise<Progress> {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    // Losing a write is survivable; losing the session is not.
  }
  return progress;
}

/** Local calendar day, so a streak follows the player's own midnight. */
const dayKey = (at: number = Date.now()) => {
  const date = new Date(at);
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};

const daysBetween = (from: string, to: string) => {
  const [fy, fm, fd] = from.split('-').map(Number);
  const [ty, tm, td] = to.split('-').map(Number);
  const a = Date.UTC(fy, fm - 1, fd);
  const b = Date.UTC(ty, tm - 1, td);
  return Math.round((b - a) / 86_400_000);
};

/** Call once per launch: extends the streak, or restarts it after a gap. */
export function registerVisit(progress: Progress): Progress {
  const today = dayKey();
  if (progress.lastVisitDay === today) return progress;

  const gap = progress.lastVisitDay ? daysBetween(progress.lastVisitDay, today) : null;
  const streak = gap === 1 ? progress.streak + 1 : 1;

  return {
    ...progress,
    lastVisitDay: today,
    streak,
    bestStreak: Math.max(progress.bestStreak, streak),
  };
}

/** Called when a game screen closes, with how long it stayed open. */
export function recordSession(progress: Progress, gameId: string, elapsedMs: number): Progress {
  // Ignore accidental taps; they would inflate "time played" without meaning it.
  if (elapsedMs < 3_000) return progress;

  return {
    ...progress,
    totalMs: progress.totalMs + elapsedMs,
    sessions: progress.sessions + 1,
    perGameMs: {
      ...progress.perGameMs,
      [gameId]: (progress.perGameMs[gameId] ?? 0) + elapsedMs,
    },
  };
}

export const distinctGames = (progress: Progress) =>
  Object.keys(progress.perGameMs).length;

export const minutesPlayed = (progress: Progress) =>
  Math.floor(progress.totalMs / 60_000);

/**
 * Experience rewards breadth and habit as much as raw time, so that leaving a
 * game open in a pocket is not the fastest way to level up.
 */
export const experience = (progress: Progress) =>
  minutesPlayed(progress) + distinctGames(progress) * 20 + progress.bestStreak * 15;

export const XP_PER_LEVEL = 100;
export const level = (progress: Progress) => 1 + Math.floor(experience(progress) / XP_PER_LEVEL);
export const xpIntoLevel = (progress: Progress) => experience(progress) % XP_PER_LEVEL;

export type Achievement = {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  earned: (progress: Progress) => boolean;
};

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first',     titleKey: 'ach.first.t',     descKey: 'ach.first.d',     icon: '👀', earned: (p) => p.sessions >= 1 },
  { id: 'explorer',  titleKey: 'ach.explorer.t',  descKey: 'ach.explorer.d',  icon: '🧭', earned: (p) => distinctGames(p) >= 5 },
  { id: 'collector', titleKey: 'ach.collector.t', descKey: 'ach.collector.d', icon: '🏅', earned: (p) => distinctGames(p) >= GAMES.length },
  { id: 'streak3',   titleKey: 'ach.streak3.t',   descKey: 'ach.streak3.d',   icon: '🔥', earned: (p) => p.bestStreak >= 3 },
  { id: 'streak7',   titleKey: 'ach.streak7.t',   descKey: 'ach.streak7.d',   icon: '⭐', earned: (p) => p.bestStreak >= 7 },
  { id: 'hour',      titleKey: 'ach.hour.t',      descKey: 'ach.hour.d',      icon: '⏱️', earned: (p) => p.totalMs >= 3_600_000 },
];

/** Returns the updated progress plus whichever achievements just unlocked. */
export function evaluateAchievements(progress: Progress): {
  progress: Progress;
  newlyUnlocked: Achievement[];
} {
  const newlyUnlocked = ACHIEVEMENTS.filter(
    (achievement) => !progress.unlocked.includes(achievement.id) && achievement.earned(progress)
  );
  if (!newlyUnlocked.length) return { progress, newlyUnlocked };

  return {
    progress: {
      ...progress,
      unlocked: [...progress.unlocked, ...newlyUnlocked.map((a) => a.id)],
    },
    newlyUnlocked,
  };
}
