/**
 * UI translations. English is the default and the fallback for any key a
 * locale has not translated.
 *
 * Locale codes are ISO 639-1 and are handed to the demo client at launch as-is.
 * The provider expects exactly that — Ukrainian is `uk`; the country-style `ua`
 * silently falls back to English — and covers anything it does not ship itself.
 */
const KEY = 'srs.locale.v1';
export const DEFAULT_LOCALE = 'en';

export const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'uk', label: 'Українська' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pl', label: 'Polski' },
  { code: 'tr', label: 'Türkçe' },
];

const STRINGS = {
  en: {
    'fun.pill': 'Just for fun',
    'hero.kicker': 'Game of the week',
    'hero.text': 'A 6×5 grid with cascading combos and multipliers up to 100x. Matching symbols vanish, new ones drop in from above — and the chain keeps going as long as matches appear.',
    'hero.stat.grid': 'Grid',
    'hero.stat.mechanic': 'Mechanic',
    'hero.stat.multipliers': 'Multipliers',
    'hero.stat.cascades': 'Cascades',
    'hero.stat.upto': 'up to 100x',
    'hero.cta': 'Play',
    'notice.title': 'This is a just-for-fun project.',
    'notice.body': 'No real money is involved anywhere here — there is nothing to pay for and no money to take out. The games run in the developer’s demo mode, so you can play as long as you like, purely for entertainment.',
    'section.games': 'All games',
    'section.recent': 'Recently played',
    'recent.empty': 'Games you open will show up here.',
    'nav.back': 'Back home',
    'nav.lobby': 'Home',
    'overlay.loading': 'Loading the game…',
    'overlay.fullscreen': 'Fullscreen',
    'overlay.close': 'Close',
    'footer': 'A for-fun demo project. No real money is involved.',
    'lang.label': 'Language',
    'exit.returning': 'Going back home…',
    'tag.tumbling': 'Cascading combos',
    'tag.upto1000': 'Up to 1000x',
    'tag.multipliers': 'Multipliers',
    'tag.payanywhere': 'Match anywhere',
    'tag.freespins': 'Bonus rounds',
    'tag.stickywilds': 'Sticky symbols',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Classic',
  },

  uk: {
    'fun.pill': 'Тільки для розваги',
    'hero.kicker': 'Гра тижня',
    'hero.text': 'Сітка 6×5 з каскадними комбінаціями та множниками до 100x. Однакові символи зникають, нові падають зверху — і ланцюжок триває, поки складаються комбінації.',
    'hero.stat.grid': 'Сітка',
    'hero.stat.mechanic': 'Механіка',
    'hero.stat.multipliers': 'Множники',
    'hero.stat.cascades': 'Каскади',
    'hero.stat.upto': 'до 100x',
    'hero.cta': 'Грати',
    'notice.title': 'Це проєкт суто для розваги.',
    'notice.body': 'Тут ніде не задіяні реальні гроші — нічого платити й нічого виводити. Ігри працюють у демонстраційному режимі розробника, тож грати можна скільки завгодно, виключно для задоволення.',
    'section.games': 'Усі ігри',
    'section.recent': 'Нещодавно грали',
    'recent.empty': 'Тут з’являться ігри, які ти відкривав.',
    'nav.back': 'На головну',
    'nav.lobby': 'Головна',
    'overlay.loading': 'Завантаження гри…',
    'overlay.fullscreen': 'На весь екран',
    'overlay.close': 'Закрити',
    'footer': 'Демонстраційний проєкт для розваги. Реальні гроші не задіяні.',
    'lang.label': 'Мова',
    'exit.returning': 'Повертаємось на головну…',
    'tag.tumbling': 'Каскадні комбінації',
    'tag.upto1000': 'До 1000x',
    'tag.multipliers': 'Множники',
    'tag.payanywhere': 'Збіги будь-де',
    'tag.freespins': 'Бонусні раунди',
    'tag.stickywilds': 'Липкі символи',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Класика',
  },

  es: {
    'fun.pill': 'Solo por diversión',
    'hero.kicker': 'Juego de la semana',
    'hero.text': 'Una cuadrícula de 6×5 con combinaciones en cascada y multiplicadores de hasta 100x. Los símbolos iguales desaparecen, caen otros nuevos desde arriba, y la cadena continúa mientras se formen combinaciones.',
    'hero.stat.grid': 'Cuadrícula',
    'hero.stat.mechanic': 'Mecánica',
    'hero.stat.multipliers': 'Multiplicadores',
    'hero.stat.cascades': 'Cascadas',
    'hero.stat.upto': 'hasta 100x',
    'hero.cta': 'Jugar',
    'notice.title': 'Este es un proyecto solo por diversión.',
    'notice.body': 'Aquí no interviene dinero real en ningún momento: no hay nada que pagar ni nada que retirar. Los juegos funcionan en el modo de demostración del desarrollador, así que puedes jugar todo lo que quieras, solo por entretenimiento.',
    'section.games': 'Todos los juegos',
    'section.recent': 'Jugado recientemente',
    'recent.empty': 'Los juegos que abras aparecerán aquí.',
    'nav.back': 'Volver al inicio',
    'nav.lobby': 'Inicio',
    'overlay.loading': 'Cargando el juego…',
    'overlay.fullscreen': 'Pantalla completa',
    'overlay.close': 'Cerrar',
    'footer': 'Proyecto de demostración por diversión. No interviene dinero real.',
    'lang.label': 'Idioma',
    'exit.returning': 'Volviendo al inicio…',
    'tag.tumbling': 'Combinaciones en cascada',
    'tag.upto1000': 'Hasta 1000x',
    'tag.multipliers': 'Multiplicadores',
    'tag.payanywhere': 'Coincidencias en cualquier lugar',
    'tag.freespins': 'Rondas de bonus',
    'tag.stickywilds': 'Símbolos fijos',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Clásico',
  },

  pt: {
    'fun.pill': 'Apenas por diversão',
    'hero.kicker': 'Jogo da semana',
    'hero.text': 'Uma grelha de 6×5 com combinações em cascata e multiplicadores até 100x. Os símbolos iguais desaparecem, caem novos de cima — e a cadeia continua enquanto houver combinações.',
    'hero.stat.grid': 'Grelha',
    'hero.stat.mechanic': 'Mecânica',
    'hero.stat.multipliers': 'Multiplicadores',
    'hero.stat.cascades': 'Cascatas',
    'hero.stat.upto': 'até 100x',
    'hero.cta': 'Jogar',
    'notice.title': 'Este é um projeto apenas por diversão.',
    'notice.body': 'Aqui não há dinheiro real envolvido em lado nenhum — não há nada a pagar nem nada a levantar. Os jogos correm no modo de demonstração do programador, por isso podes jogar o tempo que quiseres, só por entretenimento.',
    'section.games': 'Todos os jogos',
    'section.recent': 'Jogado recentemente',
    'recent.empty': 'Os jogos que abrires aparecem aqui.',
    'nav.back': 'Voltar ao início',
    'nav.lobby': 'Início',
    'overlay.loading': 'A carregar o jogo…',
    'overlay.fullscreen': 'Ecrã inteiro',
    'overlay.close': 'Fechar',
    'footer': 'Projeto de demonstração por diversão. Não há dinheiro real envolvido.',
    'lang.label': 'Idioma',
    'exit.returning': 'A voltar ao início…',
    'tag.tumbling': 'Combinações em cascata',
    'tag.upto1000': 'Até 1000x',
    'tag.multipliers': 'Multiplicadores',
    'tag.payanywhere': 'Combinações em qualquer posição',
    'tag.freespins': 'Rondas de bónus',
    'tag.stickywilds': 'Símbolos fixos',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Clássico',
  },

  de: {
    'fun.pill': 'Nur zum Spaß',
    'hero.kicker': 'Spiel der Woche',
    'hero.text': 'Ein 6×5-Raster mit Kaskaden-Kombinationen und Multiplikatoren bis 100x. Gleiche Symbole verschwinden, neue fallen von oben nach — und die Kette läuft weiter, solange Kombinationen entstehen.',
    'hero.stat.grid': 'Raster',
    'hero.stat.mechanic': 'Mechanik',
    'hero.stat.multipliers': 'Multiplikatoren',
    'hero.stat.cascades': 'Kaskaden',
    'hero.stat.upto': 'bis 100x',
    'hero.cta': 'Spielen',
    'notice.title': 'Dies ist ein Projekt rein zum Spaß.',
    'notice.body': 'Hier ist nirgends echtes Geld im Spiel — es gibt nichts zu bezahlen und nichts auszuzahlen. Die Spiele laufen im Demomodus des Entwicklers, du kannst also spielen, so lange du magst, rein zur Unterhaltung.',
    'section.games': 'Alle Spiele',
    'section.recent': 'Zuletzt gespielt',
    'recent.empty': 'Spiele, die du öffnest, erscheinen hier.',
    'nav.back': 'Zurück zum Start',
    'nav.lobby': 'Start',
    'overlay.loading': 'Spiel wird geladen…',
    'overlay.fullscreen': 'Vollbild',
    'overlay.close': 'Schließen',
    'footer': 'Ein Demoprojekt zum Spaß. Es ist kein echtes Geld im Spiel.',
    'lang.label': 'Sprache',
    'exit.returning': 'Zurück zum Start…',
    'tag.tumbling': 'Kaskaden-Kombinationen',
    'tag.upto1000': 'Bis 1000x',
    'tag.multipliers': 'Multiplikatoren',
    'tag.payanywhere': 'Kombinationen überall',
    'tag.freespins': 'Bonusrunden',
    'tag.stickywilds': 'Klebende Symbole',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Klassiker',
  },

  pl: {
    'fun.pill': 'Tylko dla zabawy',
    'hero.kicker': 'Gra tygodnia',
    'hero.text': 'Plansza 6×5 z kombinacjami kaskadowymi i mnożnikami do 100x. Takie same symbole znikają, z góry spadają nowe — a łańcuch trwa, dopóki powstają kombinacje.',
    'hero.stat.grid': 'Plansza',
    'hero.stat.mechanic': 'Mechanika',
    'hero.stat.multipliers': 'Mnożniki',
    'hero.stat.cascades': 'Kaskady',
    'hero.stat.upto': 'do 100x',
    'hero.cta': 'Graj',
    'notice.title': 'To projekt wyłącznie dla zabawy.',
    'notice.body': 'Nigdzie nie ma tu prawdziwych pieniędzy — nie ma czego płacić ani czego wypłacać. Gry działają w trybie demo producenta, więc możesz grać tak długo, jak chcesz, wyłącznie dla rozrywki.',
    'section.games': 'Wszystkie gry',
    'section.recent': 'Ostatnio grane',
    'recent.empty': 'Otwarte gry pojawią się tutaj.',
    'nav.back': 'Powrót na stronę główną',
    'nav.lobby': 'Główna',
    'overlay.loading': 'Ładowanie gry…',
    'overlay.fullscreen': 'Pełny ekran',
    'overlay.close': 'Zamknij',
    'footer': 'Projekt demonstracyjny dla zabawy. Nie ma tu prawdziwych pieniędzy.',
    'lang.label': 'Język',
    'exit.returning': 'Powrót na stronę główną…',
    'tag.tumbling': 'Kombinacje kaskadowe',
    'tag.upto1000': 'Do 1000x',
    'tag.multipliers': 'Mnożniki',
    'tag.payanywhere': 'Kombinacje w każdym miejscu',
    'tag.freespins': 'Rundy bonusowe',
    'tag.stickywilds': 'Przyklejone symbole',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Klasyka',
  },

  tr: {
    'fun.pill': 'Sadece eğlence için',
    'hero.kicker': 'Haftanın oyunu',
    'hero.text': '6×5’lik bir ızgara, zincirleme kombinasyonlar ve 100x’e kadar çarpanlar. Aynı semboller kaybolur, yukarıdan yenileri düşer — ve kombinasyon oluştukça zincir devam eder.',
    'hero.stat.grid': 'Izgara',
    'hero.stat.mechanic': 'Mekanik',
    'hero.stat.multipliers': 'Çarpanlar',
    'hero.stat.cascades': 'Zincirleme',
    'hero.stat.upto': '100x’e kadar',
    'hero.cta': 'Oyna',
    'notice.title': 'Bu tamamen eğlence amaçlı bir projedir.',
    'notice.body': 'Burada hiçbir yerde gerçek para söz konusu değildir — ödenecek bir şey de, çekilecek bir şey de yoktur. Oyunlar geliştiricinin demo modunda çalışır, dolayısıyla sadece eğlence için dilediğiniz kadar oynayabilirsiniz.',
    'section.games': 'Tüm oyunlar',
    'section.recent': 'Son oynananlar',
    'recent.empty': 'Açtığınız oyunlar burada görünecek.',
    'nav.back': 'Ana sayfaya dön',
    'nav.lobby': 'Ana sayfa',
    'overlay.loading': 'Oyun yükleniyor…',
    'overlay.fullscreen': 'Tam ekran',
    'overlay.close': 'Kapat',
    'footer': 'Eğlence amaçlı bir demo projesi. Gerçek para söz konusu değildir.',
    'lang.label': 'Dil',
    'exit.returning': 'Ana sayfaya dönülüyor…',
    'tag.tumbling': 'Zincirleme kombinasyonlar',
    'tag.upto1000': '1000x’e kadar',
    'tag.multipliers': 'Çarpanlar',
    'tag.payanywhere': 'Her yerde eşleşme',
    'tag.freespins': 'Bonus turlar',
    'tag.stickywilds': 'Yapışkan semboller',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Klasik',
  },
};

export const isSupported = (code) => LOCALES.some((locale) => locale.code === code);

/**
 * English is the site's primary language, so it is the default for every first
 * visit; only an explicit choice by the visitor overrides it. (Sniffing
 * `navigator.languages` here would make the landing language depend on whose
 * browser opened the link, which is the opposite of a predictable demo.)
 */
export function resolveLocale() {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored && isSupported(stored)) return stored;
  } catch { /* storage unavailable */ }
  return DEFAULT_LOCALE;
}

export function saveLocale(code) {
  try { localStorage.setItem(KEY, code); } catch { /* private mode */ }
}

/** The launch parameter for the game client; English for anything unknown. */
export const gameLanguage = (code) => (isSupported(code) ? code : DEFAULT_LOCALE);

/** Falls back to English so a missing translation never renders as a raw key. */
export const translate = (code, key) =>
  STRINGS[code]?.[key] ?? STRINGS[DEFAULT_LOCALE][key] ?? key;
