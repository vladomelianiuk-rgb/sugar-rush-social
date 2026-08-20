import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { GAMES, Game, artUrl } from '../games';
import { useStore } from '../store';
import { theme } from '../theme';
import { Pill } from '../components/ui';

export default function LobbyScreen({ navigation }: any) {
  const { t, tap } = useStore();

  const open = (game: Game) => {
    tap();
    navigation.navigate('Game', { gameId: game.id });
  };

  const featured = GAMES.find((game) => game.featured) ?? GAMES[0];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <FlatList
        data={GAMES}
        keyExtractor={(game) => game.id}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Text style={styles.brand}>🍭  Sugar Rush Social</Text>
              <Pill>{t('fun.pill')}</Pill>
            </View>

            <Pressable style={styles.hero} onPress={() => open(featured)}>
              <Image source={{ uri: artUrl(featured) }} style={styles.heroArt} />
              <LinearGradient
                colors={['transparent', 'rgba(20,10,36,0.95)']}
                style={styles.heroShade}
              />
              <View style={styles.heroCopy}>
                <Text style={styles.heroKicker}>{t('hero.kicker')}</Text>
                <Text style={styles.heroTitle}>{featured.title}</Text>
                <View style={styles.heroCta}>
                  <Text style={styles.heroCtaText}>{t('hero.cta')}</Text>
                </View>
              </View>
            </Pressable>

            <View style={styles.notice}>
              <Text style={styles.noticeIcon}>🎈</Text>
              <Text style={styles.noticeText}>
                <Text style={styles.noticeStrong}>{t('notice.title')}</Text> {t('notice.body')}
              </Text>
            </View>

            <Text style={styles.section}>{t('section.games')}</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => open(item)}>
            <Image source={{ uri: artUrl(item) }} style={styles.cardArt} />
            <View style={styles.cardMeta}>
              <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.cardTag} numberOfLines={1}>{t(item.tag)}</Text>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.bg },
  list: { padding: 16, paddingBottom: 28 },
  column: { gap: 12 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 },
  brand: { color: theme.text, fontSize: 17, fontWeight: '800' },

  hero: { borderRadius: 22, overflow: 'hidden', height: 200, marginBottom: 14 },
  heroArt: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' },
  heroShade: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  heroCopy: { position: 'absolute', left: 18, right: 18, bottom: 16 },
  heroKicker: { color: theme.pink, fontSize: 11, fontWeight: '800', letterSpacing: 1.2, textTransform: 'uppercase' },
  heroTitle: { color: '#fff', fontSize: 26, fontWeight: '800', marginTop: 4 },
  heroCta: { backgroundColor: theme.pink, borderRadius: 999, paddingVertical: 10, paddingHorizontal: 26, alignSelf: 'flex-start', marginTop: 12 },
  heroCtaText: { color: '#fff', fontWeight: '800', fontSize: 15 },

  notice: {
    flexDirection: 'row', gap: 10, padding: 14, borderRadius: theme.radius,
    backgroundColor: 'rgba(61,220,151,0.09)', borderWidth: 1, borderColor: 'rgba(61,220,151,0.3)',
    marginBottom: 22,
  },
  noticeIcon: { fontSize: 18 },
  noticeText: { flex: 1, color: '#dcf6ea', fontSize: 13, lineHeight: 20 },
  noticeStrong: { color: '#fff', fontWeight: '700' },

  section: { color: theme.muted, fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 },

  card: {
    flex: 1, borderRadius: theme.radius, overflow: 'hidden', marginBottom: 12,
    backgroundColor: theme.card, borderWidth: 1, borderColor: theme.cardLine,
  },
  cardArt: { width: '100%', aspectRatio: 325 / 234 },
  cardMeta: { padding: 10 },
  cardTitle: { color: theme.text, fontSize: 13, fontWeight: '700' },
  cardTag: { color: theme.muted, fontSize: 11, marginTop: 2 },
});
