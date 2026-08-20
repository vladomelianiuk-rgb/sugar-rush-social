import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { findGame, launchUrl } from '../games';
import { gameLanguage } from '../i18n';
import { useStore } from '../store';
import { theme } from '../theme';
import { Pill } from '../components/ui';

/**
 * The game runs in the provider's own client inside a WebView. Nothing inside
 * it is reachable from here, so the only thing this screen records is how long
 * the game stayed open — which is what progression is built on.
 */
export default function GameScreen({ route, navigation }: any) {
  const { t, locale, tap, finishSession } = useStore();
  const game = findGame(route.params?.gameId);
  const [loading, setLoading] = useState(true);
  const openedAt = useRef(Date.now());

  useEffect(() => {
    const startedAt = Date.now();
    openedAt.current = startedAt;
    return () => {
      if (game) finishSession(game.id, Date.now() - startedAt);
    };
    // The session is bound to this screen instance, so it must not re-run.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!game) return null;

  const leave = () => {
    tap();
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.bar}>
        <Text style={styles.title} numberOfLines={1}>{game.title}</Text>
        <Pill>{t('fun.pill')}</Pill>
      </View>

      <View style={styles.frame}>
        <WebView
          source={{ uri: launchUrl(game, gameLanguage(locale)) }}
          onLoadEnd={() => setLoading(false)}
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
          // The game must not be able to navigate the app anywhere else.
          originWhitelist={['https://*.pragmaticplay.net', 'https://*.ppgames.net']}
          style={styles.web}
        />
        {loading ? (
          <View style={styles.loader} pointerEvents="none">
            <ActivityIndicator color={theme.pink} size="large" />
            <Text style={styles.loaderText}>{t('overlay.loading')}</Text>
          </View>
        ) : null}
      </View>

      {/* Docked, never floating: the game fills its frame and puts its own
          controls along the bottom, so an overlay would cover them. */}
      <View style={styles.nav}>
        <Pressable style={styles.navBack} onPress={leave}>
          <Text style={styles.navGlyph}>‹</Text>
        </Pressable>
        <Pressable style={styles.navHome} onPress={leave}>
          <Text style={styles.navHomeText}>⌂  {t('tab.home')}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#090411' },
  bar: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingHorizontal: 16, paddingVertical: 12,
    borderBottomWidth: 1, borderBottomColor: theme.cardLine,
  },
  title: { color: theme.text, fontSize: 16, fontWeight: '800', flexShrink: 1 },
  frame: { flex: 1 },
  web: { flex: 1, backgroundColor: '#000' },
  loader: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    alignItems: 'center', justifyContent: 'center', gap: 12, backgroundColor: '#000',
  },
  loaderText: { color: theme.muted, fontSize: 13 },
  nav: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,
    paddingHorizontal: 12, paddingVertical: 8,
    borderTopWidth: 1, borderTopColor: theme.cardLine,
    backgroundColor: 'rgba(20,10,36,0.82)',
  },
  navBack: {
    width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center',
    backgroundColor: theme.card, borderWidth: 1, borderColor: theme.cardLine,
  },
  navGlyph: { color: theme.text, fontSize: 22, lineHeight: 24, fontWeight: '700' },
  navHome: {
    height: 40, paddingHorizontal: 20, borderRadius: 999, justifyContent: 'center',
    backgroundColor: theme.card, borderWidth: 1, borderColor: theme.cardLine,
  },
  navHomeText: { color: theme.text, fontSize: 14, fontWeight: '700' },
});
