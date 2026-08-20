import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStore } from '../store';
import { theme } from '../theme';
import { Card, SectionTitle, Stat } from '../components/ui';
import {
  ACHIEVEMENTS, distinctGames, level, minutesPlayed, xpIntoLevel, XP_PER_LEVEL,
} from '../progress';

export default function ProfileScreen() {
  const { t, progress } = useStore();

  const minutes = minutesPlayed(progress);
  const played = minutes >= 60
    ? `${Math.floor(minutes / 60)}${t('time.h')} ${minutes % 60}${t('time.m')}`
    : `${minutes}${t('time.m')}`;

  const currentLevel = level(progress);
  const intoLevel = xpIntoLevel(progress);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.wrap}>
        <Text style={styles.heading}>{t('profile.title')}</Text>

        <Card style={styles.levelCard}>
          <View style={styles.levelRow}>
            <View style={styles.levelBadge}>
              <Text style={styles.levelNumber}>{currentLevel}</Text>
            </View>
            <View style={styles.levelMeta}>
              <Text style={styles.levelLabel}>{t('profile.level')}</Text>
              <View style={styles.track}>
                <View style={[styles.fill, { width: `${(intoLevel / XP_PER_LEVEL) * 100}%` }]} />
              </View>
              <Text style={styles.levelHint}>{intoLevel} / {XP_PER_LEVEL} XP</Text>
            </View>
          </View>
        </Card>

        <View style={styles.stats}>
          <Stat value={`${progress.streak}`} label={t('profile.streak')} />
          <Stat value={played} label={t('profile.time')} />
        </View>
        <View style={styles.stats}>
          <Stat value={`${distinctGames(progress)}`} label={t('profile.tried')} />
          <Stat value={`${progress.sessions}`} label={t('profile.sessions')} />
        </View>

        <View style={styles.achievements}>
          <SectionTitle>{t('profile.achievements')}</SectionTitle>
          {ACHIEVEMENTS.map((achievement) => {
            const unlocked = progress.unlocked.includes(achievement.id);
            return (
              <View
                key={achievement.id}
                style={[styles.achievement, !unlocked && styles.achievementLocked]}
              >
                <Text style={styles.achievementIcon}>{unlocked ? achievement.icon : '🔒'}</Text>
                <View style={styles.achievementCopy}>
                  <Text style={styles.achievementTitle}>{t(achievement.titleKey)}</Text>
                  <Text style={styles.achievementDesc}>
                    {unlocked ? t(achievement.descKey) : t('profile.locked')}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.bg },
  wrap: { padding: 16, paddingBottom: 32, gap: 12 },
  heading: { color: theme.text, fontSize: 24, fontWeight: '800', marginBottom: 4 },
  levelCard: { paddingVertical: 18 },
  levelRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  levelBadge: {
    width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center',
    backgroundColor: theme.violet,
  },
  levelNumber: { color: '#fff', fontSize: 22, fontWeight: '800' },
  levelMeta: { flex: 1, gap: 6 },
  levelLabel: { color: theme.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.8 },
  track: { height: 8, borderRadius: 99, backgroundColor: 'rgba(255,255,255,0.13)', overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: theme.pink },
  levelHint: { color: theme.muted, fontSize: 11 },
  stats: { flexDirection: 'row', gap: 12 },
  achievements: { marginTop: 14 },
  achievement: {
    flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, marginBottom: 8,
    borderRadius: theme.radius, backgroundColor: theme.card,
    borderWidth: 1, borderColor: theme.cardLine,
  },
  achievementLocked: { opacity: 0.55 },
  achievementIcon: { fontSize: 24 },
  achievementCopy: { flex: 1 },
  achievementTitle: { color: theme.text, fontSize: 15, fontWeight: '700' },
  achievementDesc: { color: theme.muted, fontSize: 12.5, marginTop: 2 },
});
