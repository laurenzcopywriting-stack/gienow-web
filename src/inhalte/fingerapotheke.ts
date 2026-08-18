import { LINKS, ROUTEN } from './gemeinsam'

/* =========================================================================
   Fingerapotheke — Wortlaut von gienowmethode.onepage.me/fingerapotheke

   Die Schreibfehler der Live-Seite sind hier korrigiert. Was geaendert wurde,
   steht vollstaendig in ABWEICHUNGEN.md.
   ========================================================================= */

export const HERO = {
  kicker: 'Die Fingerapotheke App für bewusste Selbstregulation',
  titel: 'Fördern Sie Ihr Wohlbefinden durch symptombasierte Fingergesten',
  text: 'Unterstützen Sie Entspannung und Regeneration mit unauffälligen Fingerhaltungen ganz nebenbei im Alltag',
  knopf: { label: 'Fingerapotheke App öffnen', href: LINKS.fingerapothekeApp },
  bild: {
    quelle: '/bilder/tool-fingerapotheke.jpg',
    alt: 'Hände formen eine Fingergeste vor einer Rose',
  },
}

export const STIMMEN = [
  '"Die hier beschriebenen Hilfen zur Selbsthilfe mit Fingergesten funktionieren einfach hervorragend. Die Fingerapotheke begleitet mich in allen Lebenslagen und entspannt jeden Schmerz und jedes Problem. Unfassbar wie einfach der Zugang zu unseren eigenen Selbstheilungskräften sein kann! Wir müssen es nur tun. Und wie, das steht in diesem Büchlein."\n\n- Kundenrezension auf Amazon.de',
  '"Egal, ob es sich um leichte Symptome wie eine Schniefnase oder um schwerwiegende Krankheiten handelte, stets erfuhr ich Erleichterung (...) Und so verschwanden über die Jahre auch meine chronische Sinusitis und diverse andere Rücken-, Hüft- und Knieprobleme."',
  '"Durch Fingergesten sind meine Zähne stärker und gesünder geworden. Eine Außenstehende sagte mir einen Tag nach der Fingergeste meine Zähne seien viel strahlender als sonst - und sie wusste nichts von den Gesten."',
  'Sehr einfache Fingerstellungen aus uraltem Wissen, die ich direkt anwenden konnte und die meinen Energiefluss spürbar harmonisiert haben – so konnte ich körperliche und innere Themen gezielter bearbeiten und auflösen.',
  '"Ein wertvoller Alltagsbegleiter, der mir hilft, meinen Alltag in bessere Energie lenken zu können. Ich konnte damit helfen, die schriftliche Prüfung meiner Tochter so zu unterstützen, dass sie sich während der Prüfung sicherer fühlte und die Prüfung bestand. Auch meinem Sohn konnte ich damit helfen, als er die praktische Fahrprüfung machte."',
  'Beim Training erlitt eine Klientin einen Hexenschuss.\nFrüher hatte sie oft Bandscheibenprobleme, seit der GienowMethode jedoch nicht mehr.\n\nErst nahm sie aus Gewohnheit ein Schmerzmittel, dann erinnerte sie sich an die Fingergeste für Hexenschuss.\n\n"Gudrun, du glaubst es nicht: Sofort waren die Schmerzen um 90% besser und am Abend ganz weg."',
  'Ich bin am Wochenende nachts durch das Kribbeln einer sich ankündigenden Lippenherpes aufgewacht. Hab es dann gleich in mein Gesundheitskonto hochgeladen und die Fingergeste für Lippenherpes gehalten. Daraufhin konnte ich wieder einschlafen und am nächsten Tag verschwand das Lippenbläschen wieder\n\n- Georg P.',
  'Ich bin ein großer Fan der Fingergesten, der Fingerapotheke, die ich häufig anwende und an Freunde und Familie weiter gegeben habe.\n\n- Sigrun',
]

export const VORTEILE = {
  titel: 'Wie ganzheitliches Wohlbefinden schon bei Ihren Händen beginnen kann:',
  karten: [
    {
      titel: 'Intuitiv verständliche Fingermedizin',
      text: 'Nutzen Sie Fingergesten dank bildlichen und schnell verstehbaren Anleitungen ohne Vorkenntnisse',
    },
    {
      titel: '24/7 ohne Hilfsmittel anwendbar',
      text: 'Unterstützen Sie Regulationskräfte und Ihr inneres Gleichgewicht mit Ihren Händen, die Sie immer bei sich tragen',
    },
    {
      titel: 'Anwendbar für JEDE Blockade',
      text: 'Verwandeln Sie jedes Symptom von Körper, Geist und Seele mit der passenden Fingergeste in etwas Sanfteres',
    },
  ],
}

export const SCHIEBER = {
  bilder: [
    { quelle: '/bilder/finger-slide1.jpg', alt: 'Fingerapotheke-App: Symptome eingeben' },
    { quelle: '/bilder/finger-slide2.jpg', alt: 'Fingerapotheke-App: passende Fingergeste' },
    { quelle: '/bilder/finger-slide3.jpg', alt: 'Fingerapotheke-App: Anleitung zur Geste' },
  ],
  knopf: { label: 'Zur Fingerapotheke-App', href: LINKS.fingerapothekeApp },
}

export const ZITAT_OBEN = {
  text: '"Als Erstes habe ich einen Punkt kennengelernt, der die Nase frei macht – und sehr schnell wirkt.\nDu hältst diese Punkte einfach zwei bis drei Minuten und erzeugst so für dich selbst einen spürbaren Energiestrom und Ausgleich.\nDas ist super kraftvoll."',
  name: 'Francis Herdes',
  rolle: 'Lebeduftend.de',
  bild: { quelle: '/bilder/finger-francis.jpg', alt: 'Porträt Francis Herdes' },
}

export const UEBUNG = {
  titel: 'Haben Sie Lust eine Fingergeste auszuprobieren?',
  einleitung: 'Wenden Sie diese Notfall-Fingergeste für zwei Minuten an:',
  vorbemerkung:
    'Für Notsituationen, im Stress, Überforderung, "Außer sich sein" oder wenn Sie einfach bei sich in Ruhe ankommen wollen',
  schritte: [
    'Lassen Sie alle vier Finger wie Schmetterlingsflügel sanft miteinander berühren',
    'Halten Sie die Geste für einige Sekunden bis Minuten',
    'Spüren Sie in sich hinein. Kommen Sie bei sich an.',
    'Nehmen Sie alles wahr was sich Ihnen offenbart:',
  ],
  nachsatz:
    'Bewusstheit, neu entstandene Möglichkeiten, innere Ruhe oder auch ein mulmiges Gefühl, das sich zeigt um aufgelöst zu werden',
  bild: { quelle: '/bilder/finger-notfallgeste.jpg', alt: 'Illustration der Notfall-Fingergeste' },
}

export const ZITAT_UNTEN = {
  text: '"Durch die Notfall-Geste kann ich mein Energiesystem jederzeit auf Reset bringen, es ist wie als wenn alles auf Null geschalten wird, es eröffnen sich Möglichkeiten wie bei einem Neustart."',
  name: 'Georg',
  knopf: { label: 'Zur Fingerapotheke App', href: LINKS.fingerapothekeApp },
}

export const HERKUNFT = {
  titel: 'Worauf beruht die Fingerapotheke?',
  absaetze: [
    'Nach seinem Krankenhausaufenthalt wollte Dr. Peter Gienow seine Gesundheit selbst regulieren – ohne äußere Heilmittel.',
    'So entstand die Fingerapotheke, die Symptome in die Gebärdensprache des Körpers übersetzt:',
    'einfache Fingergesten auf Basis uralten Wissens, die die Meridiane verbinden, um Körper, Geist und Seele wieder in Balance zu bringen.',
  ],
  knopf: { label: 'Zur ganzen Geschichte', href: ROUTEN.ueberUns },
  bild: { quelle: '/bilder/finger-herkunft.jpg', alt: 'Zeichnung zur Geburt der Fingerapotheke' },
}

export const KENNZAHLEN = [
  { text: '24/7', label: 'sofort die passende Fingergeste auf die Hand' },
  { wert: 10, suffix: '+', label: 'Jahre Entwicklung' },
  { wert: 1000, suffix: '+', label: 'AnwenderInnen der Fingerapotheke' },
]

export const FAQ = {
  titel: 'Unsere FAQ zur Fingerapotheke',
  unterzeile:
    'Hier finden Sie Antworten auf häufig gestellte Fragen zur Fingerapotheke der Gienowmethode',
  fragen: [
    {
      frage: 'Wie funktioniert das?',
      antwort:
        'Auch die Fingerapotheke basiert auf der Qothematik, der Mathematik nach Gienow. Nur werden hier keine Qodes errechnet, sondern Fingergesten, mit denen wir unsere Selbstheilungskräfte aktivieren können, indem sie Energiebahnen durch bestimmte Fingerberührungen verbinden.',
    },
    {
      frage: 'Was kann ich erwarten?',
      antwort:
        'Sie dürfen alles erwarten. Wir und andere Fingerapotheke-Anwendende haben eine Bandbreite an Wirkungen erfahren. Am besten ist es, sich nicht an Erwartungen festzuklammern, sondern vorurteilsfrei dem begegnen zu können, was sich durch die Fingergesten in Ihrem Leben offenbart.',
    },
    {
      frage: 'Wie oft wende ich die Gesten an?',
      antwort:
        'Halten wir die Fingergeste, die nach der Eingabe der drei Symptome angezeigt wird, bis unsere Finger zu pulsieren beginnen, dann sollten wir Pause machen.\nWir können diese Fingergeste jederzeit wiederholen, aber auch hier gilt, »viel hilft nicht viel«.\nViel wichtiger ist es, den Selbstheilungskräften zu erlauben sich zu entfalten. Je geduldiger wir sind, desto besser.',
    },
    {
      frage: 'Für welche Fälle sollte ich die Fingerapotheke nutzen?',
      antwort:
        'Nutzen Sie die Fingerapotheke, um Körper, Geist und Seele ganzheitlich von innen heraus zu unterstützen und zu stärken. Wenn Beschwerden sich nicht wandeln, sollten Sie eine Wirkungsebene nach oben wechseln, erst einen SelfQ und dann BoosterGane. Hierzu lassen Sie sich am besten von unseren ExpertInnen unverbindlich beraten.',
    },
    {
      frage: 'Was ist der Unterschied zu Mudras?',
      antwort:
        'Mudras basieren auf der indischen Tradition. Die Fingerapotheke der Gienowmethode nutzt andere Systeme verschiedener Kulturen und moderner Medizin. Durch Fingergesten der Fingerapotheke können Sie Ihr Wohlbefinden durch bewusste Berührung für bestimmte Symptome individuell fördern.',
    },
  ],
  knopf: { label: 'Zur Fingerapotheke App', href: LINKS.fingerapothekeApp },
}
