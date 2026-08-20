import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStore } from '../store';
import { theme } from '../theme';
import { Card } from '../components/ui';
import { minutesPlayed } from '../progress';

/**
 * Placeholder until Game Center / Play Games Services are wired in. Those own
 * the real scores, so this screen deliberately shows only the player's own
 * figure rather than inventing rivals to sit above them.
 */
export default function LeaderboardScreen() {
  const { t, progress } = useStore();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.wrap}>
        <Text style={styles.heading}>{t('board.title')}</Text>
        <Text style={styles.sub}>{t('board.subtitle')}</Text>

        <Card style={styles.you}>
          <Text style={styles.youLabel}>{t('profile.time')}</Text>
          <Text style={styles.youValue}>
            {minutesPlayed(progress)}{t('time.m')}
          </Text>
        </Card>

        <Card style={styles.pending}>
          <Text style={styles.pendingIcon}>🏆</Text>
          <Text style={styles.pendingText}>{t('board.connect')}</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.bg },
  wrap: { padding: 16, gap: 12 },
  heading: { color: theme.text, fontSize: 24, fontWeight: '800' },
  sub: { color: theme.muted, fontSize: 14, marginBottom: 8 },
  you: { alignItems: 'center', paddingVertical: 26 },
  youLabel: { color: theme.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.8 },
  youValue: { color: theme.text, fontSize: 34, fontWeight: '800', marginTop: 6 },
  pending: { alignItems: 'center', gap: 10, paddingVertical: 24 },
  pendingIcon: { fontSize: 30 },
  pendingText: { color: theme.muted, fontSize: 14, textAlign: 'center' },
});
