import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStore } from '../store';
import { theme } from '../theme';

/**
 * Shown once, before anything else. Simulated-gambling content carries an adult
 * rating on both stores, and the gate is what backs that rating up in review.
 */
export default function AgeGateScreen() {
  const { t, confirmAge, tap } = useStore();
  const [declined, setDeclined] = useState(false);

  if (declined) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.blockedWrap}>
          <Text style={styles.blockedIcon}>🚫</Text>
          <Text style={styles.blocked}>{t('age.blocked')}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.wrap}>
        <Text style={styles.mark}>🍭</Text>
        <Text style={styles.brand}>Sugar Rush Social</Text>
        <Text style={styles.title}>{t('age.title')}</Text>
        <Text style={styles.body}>{t('age.body')}</Text>

        <Pressable
          style={styles.primary}
          onPress={() => { tap(); confirmAge(); }}
        >
          <Text style={styles.primaryText}>{t('age.yes')}</Text>
        </Pressable>

        <Pressable style={styles.secondary} onPress={() => setDeclined(true)}>
          <Text style={styles.secondaryText}>{t('age.no')}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.bg },
  wrap: { flexGrow: 1, justifyContent: 'center', padding: 28, gap: 12 },
  mark: { fontSize: 54, textAlign: 'center' },
  brand: { color: theme.text, fontSize: 20, fontWeight: '800', textAlign: 'center', marginBottom: 18 },
  title: { color: theme.text, fontSize: 26, fontWeight: '800', textAlign: 'center' },
  body: { color: theme.muted, fontSize: 15, lineHeight: 23, textAlign: 'center', marginBottom: 20 },
  primary: {
    backgroundColor: theme.pink, borderRadius: 999, paddingVertical: 16, alignItems: 'center',
  },
  primaryText: { color: '#fff', fontSize: 16, fontWeight: '800' },
  secondary: { paddingVertical: 14, alignItems: 'center' },
  secondaryText: { color: theme.muted, fontSize: 15, fontWeight: '600' },
  blockedWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, gap: 14 },
  blockedIcon: { fontSize: 44 },
  blocked: { color: theme.text, fontSize: 17, textAlign: 'center', lineHeight: 25 },
});
