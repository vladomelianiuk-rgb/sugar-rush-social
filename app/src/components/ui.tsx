import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { theme } from '../theme';

export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export function Pill({ children, tone = 'mint' }: { children: React.ReactNode; tone?: 'mint' | 'gold' }) {
  const color = tone === 'mint' ? theme.mint : theme.gold;
  return (
    <View style={[styles.pill, { borderColor: `${color}55`, backgroundColor: `${color}1f` }]}>
      <Text style={[styles.pillText, { color }]}>{children}</Text>
    </View>
  );
}

export function Row({ label, value, onPress }: { label: string; value?: string; onPress?: () => void }) {
  const Wrapper: any = onPress ? Pressable : View;
  return (
    <Wrapper style={styles.row} onPress={onPress}>
      <Text style={styles.rowLabel}>{label}</Text>
      {value ? <Text style={styles.rowValue}>{value}</Text> : null}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.card,
    borderColor: theme.cardLine,
    borderWidth: 1,
    borderRadius: theme.radius,
    padding: 16,
  },
  sectionTitle: {
    color: theme.muted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  stat: { flex: 1 },
  statValue: { color: theme.text, fontSize: 20, fontWeight: '800' },
  statLabel: { color: theme.muted, fontSize: 11, marginTop: 2, textTransform: 'uppercase', letterSpacing: 0.6 },
  pill: { paddingHorizontal: 12, paddingVertical: 5, borderRadius: 999, borderWidth: 1, alignSelf: 'flex-start' },
  pillText: { fontSize: 12, fontWeight: '700' },
  row: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: theme.cardLine,
  },
  rowLabel: { color: theme.text, fontSize: 15 },
  rowValue: { color: theme.muted, fontSize: 14 },
});
