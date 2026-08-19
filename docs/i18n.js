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
    'hero.text': 'A 6×5 grid with tumbling wins and multipliers up to 100x. Winning combinations disappear, new symbols drop in from above — and the streak keeps going as long as there are wins.',
    'hero.stat.grid': 'Grid',
    'hero.stat.mechanic': 'Mechanic',
    'hero.stat.multipliers': 'Multipliers',
    'hero.stat.cascades': 'Cascades',
    'hero.stat.upto': 'up to 100x',
    'hero.cta': 'Spin',
    'notice.title': 'This is a purely-for-fun project.',
    'notice.body': 'There is no real-money play here: no wagering, no deposits, no withdrawals and no purchases. Games open in the developer’s demo mode — spin as much as you like, just for the fun of it.',
    'section.games': 'All games',
    'section.recent': 'Recently played',
    'recent.empty': 'Games you open will show up here.',
    'nav.back': 'Back to the lobby',
    'nav.lobby': 'Lobby',
    'overlay.loading': 'Loading the game…',
    'overlay.fullscreen': 'Fullscreen',
    'overlay.close': 'Close',
    'footer': 'A for-fun demo project. There is no real-money play.',
    'lang.label': 'Language',
    'exit.returning': 'Returning to the lobby…',
    'tag.tumbling': 'Tumbling wins',
    'tag.upto1000': 'Up to 1000x',
    'tag.multipliers': 'Multipliers',
    'tag.payanywhere': 'Pay anywhere',
    'tag.freespins': 'Free spins',
    'tag.stickywilds': 'Sticky wilds',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Classic',
  },

  uk: {
    'fun.pill': 'Тільки для розваги',
    'hero.kicker': 'Гра тижня',
    'hero.text': 'Сітка 6×5, каскадні виграші та множники до 100x. Виграшні комбінації зникають, нові символи падають зверху — і серія не зупиняється, поки є виграші.',
    'hero.stat.grid': 'Сітка',
    'hero.stat.mechanic': 'Механіка',
    'hero.stat.multipliers': 'Множники',
    'hero.stat.cascades': 'Каскади',
    'hero.stat.upto': 'до 100x',
    'hero.cta': 'Крутити',
    'notice.title': 'Це суто розважальний проєкт.',
    'notice.body': 'Тут немає гри на реальні гроші: ні ставок, ні депозитів, ні виведення, ні покупок. Ігри відкриваються в демонстраційному режимі розробника — крути скільки завгодно, просто для задоволення.',
    'section.games': 'Усі ігри',
    'section.recent': 'Нещодавно грали',
    'recent.empty': 'Тут з’являться ігри, які ти відкривав.',
    'nav.back': 'Назад до лоббі',
    'nav.lobby': 'Лоббі',
    'overlay.loading': 'Завантаження гри…',
    'overlay.fullscreen': 'На весь екран',
    'overlay.close': 'Закрити',
    'footer': 'Розважальний демонстраційний проєкт. Гра на реальні гроші відсутня.',
    'lang.label': 'Мова',
    'exit.returning': 'Повертаємось у лоббі…',
    'tag.tumbling': 'Каскадні виграші',
    'tag.upto1000': 'До 1000x',
    'tag.multipliers': 'Множники',
    'tag.payanywhere': 'Виплати будь-де',
    'tag.freespins': 'Фріспіни',
    'tag.stickywilds': 'Липкі вайлди',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Класика',
  },

  es: {
    'fun.pill': 'Solo por diversión',
    'hero.kicker': 'Juego de la semana',
    'hero.text': 'Una cuadrícula de 6×5 con victorias en cascada y multiplicadores de hasta 100x. Las combinaciones ganadoras desaparecen, caen nuevos símbolos desde arriba, y la racha continúa mientras haya premios.',
    'hero.stat.grid': 'Cuadrícula',
    'hero.stat.mechanic': 'Mecánica',
    'hero.stat.multipliers': 'Multiplicadores',
    'hero.stat.cascades': 'Cascadas',
    'hero.stat.upto': 'hasta 100x',
    'hero.cta': 'Girar',
    'notice.title': 'Este es un proyecto puramente recreativo.',
    'notice.body': 'Aquí no se juega con dinero real: sin apuestas, sin depósitos, sin retiros y sin compras. Los juegos se abren en el modo de demostración del desarrollador: gira todo lo que quieras, solo por diversión.',
    'section.games': 'Todos los juegos',
    'section.recent': 'Jugado recientemente',
    'recent.empty': 'Los juegos que abras aparecerán aquí.',
    'nav.back': 'Volver al lobby',
    'nav.lobby': 'Lobby',
    'overlay.loading': 'Cargando el juego…',
    'overlay.fullscreen': 'Pantalla completa',
    'overlay.close': 'Cerrar',
    'footer': 'Proyecto de demostración recreativo. No hay juego con dinero real.',
    'lang.label': 'Idioma',
    'exit.returning': 'Volviendo al lobby…',
    'tag.tumbling': 'Victorias en cascada',
    'tag.upto1000': 'Hasta 1000x',
    'tag.multipliers': 'Multiplicadores',
    'tag.payanywhere': 'Pagos en cualquier lugar',
    'tag.freespins': 'Giros gratis',
    'tag.stickywilds': 'Comodines fijos',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Clásico',
  },

  pt: {
    'fun.pill': 'Apenas por diversão',
    'hero.kicker': 'Jogo da semana',
    'hero.text': 'Uma grelha de 6×5 com ganhos em cascata e multiplicadores até 100x. As combinações vencedoras desaparecem, novos símbolos caem de cima — e a sequência continua enquanto houver prémios.',
    'hero.stat.grid': 'Grelha',
    'hero.stat.mechanic': 'Mecânica',
    'hero.stat.multipliers': 'Multiplicadores',
    'hero.stat.cascades': 'Cascatas',
    'hero.stat.upto': 'até 100x',
    'hero.cta': 'Girar',
    'notice.title': 'Este é um projeto puramente recreativo.',
    'notice.body': 'Aqui não se joga a dinheiro real: sem apostas, sem depósitos, sem levantamentos e sem compras. Os jogos abrem no modo de demonstração do programador — gira à vontade, só pela diversão.',
    'section.games': 'Todos os jogos',
    'section.recent': 'Jogado recentemente',
    'recent.empty': 'Os jogos que abrires aparecem aqui.',
    'nav.back': 'Voltar ao lobby',
    'nav.lobby': 'Lobby',
    'overlay.loading': 'A carregar o jogo…',
    'overlay.fullscreen': 'Ecrã inteiro',
    'overlay.close': 'Fechar',
    'footer': 'Projeto de demonstração recreativo. Não há jogo a dinheiro real.',
    'lang.label': 'Idioma',
    'exit.returning': 'A voltar ao lobby…',
    'tag.tumbling': 'Ganhos em cascata',
    'tag.upto1000': 'Até 1000x',
    'tag.multipliers': 'Multiplicadores',
    'tag.payanywhere': 'Prémios em qualquer posição',
    'tag.freespins': 'Rodadas grátis',
    'tag.stickywilds': 'Wilds fixos',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Clássico',
  },

  de: {
    'fun.pill': 'Nur zum Spaß',
    'hero.kicker': 'Spiel der Woche',
    'hero.text': 'Ein 6×5-Raster mit Kaskadengewinnen und Multiplikatoren bis 100x. Gewinnkombinationen verschwinden, neue Symbole fallen von oben nach — und die Serie läuft weiter, solange es Gewinne gibt.',
    'hero.stat.grid': 'Raster',
    'hero.stat.mechanic': 'Mechanik',
    'hero.stat.multipliers': 'Multiplikatoren',
    'hero.stat.cascades': 'Kaskaden',
    'hero.stat.upto': 'bis 100x',
    'hero.cta': 'Drehen',
    'notice.title': 'Dies ist ein reines Spaßprojekt.',
    'notice.body': 'Hier wird nicht um echtes Geld gespielt: keine Einsätze, keine Einzahlungen, keine Auszahlungen und keine Käufe. Die Spiele öffnen im Demomodus des Entwicklers — dreh so viel du willst, einfach zum Spaß.',
    'section.games': 'Alle Spiele',
    'section.recent': 'Zuletzt gespielt',
    'recent.empty': 'Spiele, die du öffnest, erscheinen hier.',
    'nav.back': 'Zurück zur Lobby',
    'nav.lobby': 'Lobby',
    'overlay.loading': 'Spiel wird geladen…',
    'overlay.fullscreen': 'Vollbild',
    'overlay.close': 'Schließen',
    'footer': 'Ein Demoprojekt zum Spaß. Es wird nicht um echtes Geld gespielt.',
    'lang.label': 'Sprache',
    'exit.returning': 'Zurück zur Lobby…',
    'tag.tumbling': 'Kaskadengewinne',
    'tag.upto1000': 'Bis 1000x',
    'tag.multipliers': 'Multiplikatoren',
    'tag.payanywhere': 'Gewinne überall',
    'tag.freespins': 'Freispiele',
    'tag.stickywilds': 'Klebende Wilds',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Klassiker',
  },

  pl: {
    'fun.pill': 'Tylko dla zabawy',
    'hero.kicker': 'Gra tygodnia',
    'hero.text': 'Plansza 6×5 z wygranymi kaskadowymi i mnożnikami do 100x. Wygrywające kombinacje znikają, nowe symbole spadają z góry — a seria trwa, dopóki są wygrane.',
    'hero.stat.grid': 'Plansza',
    'hero.stat.mechanic': 'Mechanika',
    'hero.stat.multipliers': 'Mnożniki',
    'hero.stat.cascades': 'Kaskady',
    'hero.stat.upto': 'do 100x',
    'hero.cta': 'Zakręć',
    'notice.title': 'To projekt wyłącznie dla zabawy.',
    'notice.body': 'Nie ma tu gry na prawdziwe pieniądze: żadnych zakładów, wpłat, wypłat ani zakupów. Gry otwierają się w trybie demo producenta — kręć, ile chcesz, po prostu dla zabawy.',
    'section.games': 'Wszystkie gry',
    'section.recent': 'Ostatnio grane',
    'recent.empty': 'Otwarte gry pojawią się tutaj.',
    'nav.back': 'Powrót do lobby',
    'nav.lobby': 'Lobby',
    'overlay.loading': 'Ładowanie gry…',
    'overlay.fullscreen': 'Pełny ekran',
    'overlay.close': 'Zamknij',
    'footer': 'Projekt demonstracyjny dla zabawy. Nie ma gry na prawdziwe pieniądze.',
    'lang.label': 'Język',
    'exit.returning': 'Powrót do lobby…',
    'tag.tumbling': 'Wygrane kaskadowe',
    'tag.upto1000': 'Do 1000x',
    'tag.multipliers': 'Mnożniki',
    'tag.payanywhere': 'Wypłaty w każdym miejscu',
    'tag.freespins': 'Darmowe spiny',
    'tag.stickywilds': 'Lepkie symbole wild',
    'tag.megaways': 'Megaways',
    'tag.classic': 'Klasyka',
  },

  tr: {
    'fun.pill': 'Sadece eğlence için',
    'hero.kicker': 'Haftanın oyunu',
    'hero.text': '6×5’lik bir ızgara, zincirleme kazançlar ve 100x’e kadar çarpanlar. Kazanan kombinasyonlar kaybolur, yukarıdan yeni semboller düşer — ve kazanç oldukça seri devam eder.',
    'hero.stat.grid': 'Izgara',
    'hero.stat.mechanic': 'Mekanik',
    'hero.stat.multipliers': 'Çarpanlar',
    'hero.stat.cascades': 'Zincirleme',
    'hero.stat.upto': '100x’e kadar',
    'hero.cta': 'Çevir',
    'notice.title': 'Bu tamamen eğlence amaçlı bir projedir.',
    'notice.body': 'Burada gerçek parayla oyun yoktur: bahis, para yatırma, para çekme ve satın alma yoktur. Oyunlar geliştiricinin demo modunda açılır — canınız istediği kadar çevirin, sırf keyfi için.',
    'section.games': 'Tüm oyunlar',
    'section.recent': 'Son oynananlar',
    'recent.empty': 'Açtığınız oyunlar burada görünecek.',
    'nav.back': 'Lobiye dön',
    'nav.lobby': 'Lobi',
    'overlay.loading': 'Oyun yükleniyor…',
    'overlay.fullscreen': 'Tam ekran',
    'overlay.close': 'Kapat',
    'footer': 'Eğlence amaçlı bir demo projesi. Gerçek parayla oyun yoktur.',
    'lang.label': 'Dil',
    'exit.returning': 'Lobiye dönülüyor…',
    'tag.tumbling': 'Zincirleme kazançlar',
    'tag.upto1000': '1000x’e kadar',
    'tag.multipliers': 'Çarpanlar',
    'tag.payanywhere': 'Her yerde ödeme',
    'tag.freespins': 'Bedava dönüşler',
    'tag.stickywilds': 'Yapışkan wild’lar',
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
