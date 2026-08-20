import React from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LOCALES } from '../i18n';
import { useStore } from '../store';
import { theme } from '../theme';
import { Card, SectionTitle } from '../components/ui';

const SITE = 'https://sweet-bonanza.stream';

export default function SettingsScreen() {
  const { t, locale, setLocale, progress, setHaptics, reset, tap } = useStore();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.wrap}>
        <Text style={styles.heading}>{t('settings.title')}</Text>

        <SectionTitle>{t('settings.language')}</SectionTitle>
        <Card style={styles.langCard}>
          {LOCALES.map((entry) => {
            const active = entry.code === locale;
            return (
              <Pressable
                key={entry.code}
                style={[styles.lang, active && styles.langActive]}
                onPress={() => { tap(); setLocale(entry.code); }}
              >
                <Text style={[styles.langText, active && styles.langTextActive]}>{entry.label}</Text>
                {active ? <Text style={styles.check}>✓</Text> : null}
              </Pressable>
            );
          })}
        </Card>

        <SectionTitle>{t('settings.title')}</SectionTitle>
        <Card>
          <View style={styles.switchRow}>
            <Text style={styles.rowLabel}>{t('settings.haptics')}</Text>
            <Switch
              value={progress.haptics}
              onValueChange={setHaptics}
              trackColor={{ true: theme.pink, false: 'rgba(255,255,255,0.2)' }}
            />
          </View>
        </Card>

        <SectionTitle>{t('settings.legal')}</SectionTitle>
        <Card>
          <Pressable style={styles.linkRow} onPress={() => Linking.openURL(`${SITE}/privacy.html`)}>
            <Text style={styles.rowLabel}>{t('settings.privacy')}</Text>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
          <Pressable style={[styles.linkRow, styles.last]} onPress={() => Linking.openURL(`${SITE}/terms.html`)}>
            <Text style={styles.rowLabel}>{t('settings.terms')}</Text>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        </Card>

        <Pressable style={styles.reset} onPress={() => { tap(); reset(); }}>
          <Text style={styles.resetText}>{t('settings.reset')}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.bg },
  wrap: { padding: 16, paddingBottom: 32, gap: 8 },
  heading: { color: theme.text, fontSize: 24, fontWeight: '800', marginBottom: 12 },
  langCard: { paddingVertical: 4 },
  lang: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 12,
  },
  langActive: {},
  langText: { color: theme.muted, fontSize: 15 },
  langTextActive: { color: theme.text, fontWeight: '700' },
  check: { color: theme.pink, fontSize: 16, fontWeight: '800' },
  switchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  linkRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: theme.cardLine,
  },
  last: { borderBottomWidth: 0 },
  rowLabel: { color: theme.text, fontSize: 15 },
  chevron: { color: theme.muted, fontSize: 20 },
  reset: { alignItems: 'center', paddingVertical: 18, marginTop: 10 },
  resetText: { color: theme.muted, fontSize: 14, fontWeight: '600' },
});
