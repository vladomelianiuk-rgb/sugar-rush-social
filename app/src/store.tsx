import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import * as Haptics from 'expo-haptics';
import {
  Progress, blankProgress, loadProgress, saveProgress, registerVisit,
  recordSession, evaluateAchievements, Achievement,
} from './progress';
import { DEFAULT_LOCALE, isSupported, translate } from './i18n';

type Store = {
  ready: boolean;
  progress: Progress;
  locale: string;
  t: (key: string) => string;
  setLocale: (code: string) => void;
  confirmAge: () => void;
  setHaptics: (on: boolean) => void;
  finishSession: (gameId: string, elapsedMs: number) => Achievement[];
  reset: () => void;
  tap: () => void;
};

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Progress>(blankProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const loaded = registerVisit(await loadProgress());
      const { progress: evaluated } = evaluateAchievements(loaded);
      setProgress(evaluated);
      await saveProgress(evaluated);
      setReady(true);
    })();
  }, []);

  /** Every mutation goes through here so nothing can change without persisting. */
  const commit = useCallback((next: Progress) => {
    setProgress(next);
    void saveProgress(next);
    return next;
  }, []);

  const locale = progress.locale && isSupported(progress.locale) ? progress.locale : DEFAULT_LOCALE;
  const t = useCallback((key: string) => translate(locale, key), [locale]);

  const tap = useCallback(() => {
    if (progress.haptics) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }, [progress.haptics]);

  const value = useMemo<Store>(() => ({
    ready,
    progress,
    locale,
    t,
    tap,
    setLocale: (code) => commit({ ...progress, locale: code }),
    confirmAge: () => commit({ ...progress, ageConfirmed: true }),
    setHaptics: (on) => commit({ ...progress, haptics: on }),
    reset: () => commit({ ...blankProgress(), ageConfirmed: true, locale: progress.locale }),
    finishSession: (gameId, elapsedMs) => {
      const played = recordSession(progress, gameId, elapsedMs);
      const { progress: next, newlyUnlocked } = evaluateAchievements(played);
      commit(next);
      if (newlyUnlocked.length && progress.haptics) {
        void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
      return newlyUnlocked;
    },
  }), [ready, progress, locale, t, tap, commit]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const store = useContext(StoreContext);
  if (!store) throw new Error('useStore must be used inside StoreProvider');
  return store;
}
