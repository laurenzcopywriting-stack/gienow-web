import { LINKS, ROUTEN } from './gemeinsam'

/* =========================================================================
   Startseite — Wortlaut von gienowmethode.onepage.me/

   Die Schreibfehler der Live-Seite sind hier korrigiert. Was geaendert wurde,
   steht vollstaendig in ABWEICHUNGEN.md.
   ========================================================================= */

export const HERO = {
  kicker: 'Gienowmethode',
  titelOben: 'Wie Sie mit dem',
  titelUnten: 'Do It Yourself Gesundheitssystem Wunder für Körper, Geist und Seele erleben',
  text: 'und Ihr persönliches Freisein durch ganzheitliche Tools in wenigen Minuten auf Ihrem Smartphone selbstbestimmt entfalten',
  knopf: { label: 'Zu den Tools', href: '#tools' },
  bild: { quelle: '/bilder/start-hero.jpg', alt: 'Wolkenhimmel mit leuchtendem Torbogen' },
}

export const STIMMEN = {
  titel: 'Tauchen Sie in die Feedback-Geschichten unserer DIY-Tools ein:',
  eintraege: [
    'Eine Frau leidet unter einem Speicheldrüsenkrebs, der nicht operiert werden konnte.\n\nDurch Arbeit mit Qodes und BoosterGane wurde er operabel und ist ausgeheilt.',
    'Nach der ersten Pilleneinnahme entwickelte eine 16-Jährige starke Nebenwirkungen, darunter einen schmerzhaften Speichelstein. Trotz Cortison, Antibiotika, geplanter OP und Skepsis gegenüber BoosterGane entschied sie sich, abzuwarten.\n\nDurch den Steinbeißerbuddha und den passenden Qode löste sich der Stein schließlich von selbst – nach drei Wochen war sie völlig beschwerdefrei und fand mit ihrem Freund eine bessere Alternative zur Pille.',
    'Ich hatte über lange Zeit fast täglich Mandelschmerzen, die morgens auftraten und im Laufe des Vormittags verschwanden. Ich begann, mit dem BoosterGan Authenzia zu arbeiten.\n\nNach einigen Tagen bis Wochen geschah Folgendes: Beim Beten hielt ich Authenzia an meinen Hals. Es kribbelte kurz – und plötzlich waren die Schmerzen innerhalb von Sekunden verschwunden und kamen auch die Wochen danach nicht wieder',
    'Ein Patient hat ein Jahr lang den Nachtfalter immer mal wieder angesehen und hatte das ganze Jahr keine von seinen ewigen Infekten mit chronischer Sinusitis.\n\nEr ist völlig begeistert. In einer neuen Verarbeitungsebene mit seinen seelisch belastenden Prozessen in einer Umgebung taucht nun die Sinusitis wieder auf mit Herzbeschwerden. Nun gesellt sich GammaEi als GertieGan dazu.',
    'GG Super Mario Magen: Einen Klienten habe ich Super Mario Magen empfohlen, er sagte das sich jedes Problem immer auf seinen Magen schlägt und das war schon immer so. Er arbeitete intensiv mit GG Super Mario Magen und berichtete nach einiger Zeit dass er die Hähnchen mit Knochen die auf dem GG abgebildet sind, gespürt habe als hätte er sie persönlich verdaut. Nach dieser wunderbaren Erfahrung hat er keine stressbedingten Magenprobleme mehr.',
    'Liebe Gertie, Das GertieGan MuschelPuschel hat mir bei meiner Ischilagie supergut geholfen. Ich hatte mir beim Gießkanne anheben einen Hexenschuss zugezogen, der durch ruhe alleine nicht besser wurde. Nach 2 Tagen hole ich mir das GertieGan MuschelPuschel um meine Wirbelkörper wieder zu sortieren und an die richtige Stelle zu bringen. Nach 1 Stunde war der Schmerz verschwunden und nur noch ein leichtes angestrengtes Gefühl in der Region geblieben, das am nächsten Tag verschwunden war. Ein Segen! Alles Liebe Gudrun',
    'Eine Klientin hat Burnout-Symptome und lies sich krankschreiben. Sie klagte über Konzentrationsschwäche und Zitat: "wuselig im Kopf " Sie hätte keine Klarheit und keinen Focus mehr. Daraufhin empfahl ich Ihr das GG Graf Tatterfit und es stellte sich sofort Besserung ein. Jetzt ist Sie wieder Fröhlich und denkt darüber nach wieder zu arbeiten.',
    'Epilepsiepatientin die in extreme Stress-Situation kommt und massive Aussetzer (Vorstufe die sie spürt vor Anfall) produziert, trotz medikamentöser Notfallmitteln keine Besserung. Mit Fingerstellung und Empfangschefin werden die Aussetzer sofort weniger, unterstützt durch Ruhe sind die Aussetzer bis zum Abend komplett weg. Danke!',
    'Ihr Lieben, hier ein Feedback von Peitschenelli: ein 88 jähriger Herr hat bereits wochenlang Blut im Urin. Mal hellrot, mal ganz dunkelblutig. Weil es ihm sehr gut geht und er darüberhinaus keine Beschwerden hat, will er sich nicht untersuchen lassen. Er schaut aber Peitschenelli an und der Urin wird am selben Tag wieder klar und bleibt klar.\n\nLiebesgrüße und große Dankbarkeit an die Autorin Gertie',
    'Seit einigen Tagen habe ich keine Schwindelgefühle mehr und ich fühle mich insgesamt gut bei Kräften – auch im Kopf… Das GertieGan liegt weiterhin auf meinem Schreibtisch, so dass immer wieder mein Blick darauf fällt. Besten Dank für deine Hilfe',
    '38-jährige Patientin (Behandlungsbeginn vor ca. 3Wochen) – MS, Schwäche rechtes Bein nach längerem Laufen, dringende Empfehlung um nichts zu verpassen: Krankenhaus zur Cortison-Infusionstherapie für 3-5 Tage, vermutlich akuter MS-Schub. 2 Tage vor Klinikuntersuchung Beginn mit den Superhelden -> Neurologisch keine Auffälligkeiten – wird am gleichen Tag ohne Therapie wieder entlassen ;-))). Die Superhelden haben so gut gearbeitet, da ist jegliche Überredungskunst als Therapeut unnötig! Phänomenal!!! Lieben Dank!',
    'Ich wollte kurz wegen meiner Stimme berichten. Bei dem GertieGan hatte ich das Gefühl, dass es mir gut tut es anzusehen. Kigibili-Code habe ich auch gemacht. Meine Stimmprobleme sind nicht weg, aber besser.',
  ],
}

export const BLOCKADEN = {
  titel: 'Stellen Sie sich vor Sie lassen Ihre Blockaden hinter sich',
  zeilen: [
    'Frei von Ängsten, frei von Beschwerden.',
    'Alle Begrenzungen lösen sich, die Ketten fallen ab, und Sie spüren wieder diese Leichtigkeit:',
    'die Freiheit zu lieben, sich in Ihrer Haut wohlzufühlen und unbeschwerte Träume zu leben.',
  ],
  frage: 'Was wäre, wenn Sie im Alltag wieder in diesem Zustand aufatmen können?',
}

export const WURZEL = {
  titel: 'Das DIY-Gesundheitssystem löst diese Dysbalancen Ihres Organismus an der Wurzel:',
  punkte: [
    'Tool-Impulse über Berühren, Hören und Sehen sprechen in Unordnung geratene Zustände an',
    'diese Informationen fügen den Organismus wie in einem Farbenspiel kohärent zusammen',
    'die harmonische Ordnung zeigt sich in Fügungen, erweiterter Bewusstheit und gesteigertem Wohlbefinden',
  ],
}

export const ZITAT = {
  text: 'Ein bunter Strauß von Werkzeugen breitete sich vor mir aus, aus denen ich frei wählen konnte; und mein Gefühl zog mich immer in genau die Richtung, wo die Resonanz am größten war. Das fing mit SelfQ und Fingergesten an und setzte sich mit den BoosterGanen und Sussuu fort.',
  name: 'Julia',
  zusatz: '5000+ Kunden vertrauen uns',
}

export const TOOLS = {
  titel: 'Welches Tool lässt Ihre Gesundheit erklingen?',
  karten: [
    {
      name: 'SelfQ',
      titel: 'Aktivieren Sie Selbstheilungskräfte in 72 Sekunden',
      text: 'Symbole, Formen und energetische Strukturen, die durch reines Betrachten innere Transformationsprozesse anstoßen.',
      punkte: [
        '3 Symptome eingeben und direkt zugeschnittenen Qode erhalten',
        'In 72s durch die Augen aktivieren',
        'auf jedem Smartphone jederzeit abrufbar',
      ],
      knopf: { label: 'Zu SelfQ', href: LINKS.qodesForHealth },
      bild: { quelle: '/bilder/tool-selfq.png', alt: 'SelfQ Qode mit Farbfeldern' },
    },
    {
      name: 'Fingerapotheke',
      titel: 'Öffnen Sie Ihre körpereigene Hausapotheke',
      text: 'Nutzen Sie Ihre Hände als Schlüssel zur energetischen Selbstregulation',
      punkte: [
        '24/7 mit einem Klick zur Fingergeste',
        'auf Symptome personalisierte Fingergesten',
        'Selbstheilungskräfte bewusst anregen',
      ],
      knopf: { label: 'Zur Fingerapotheke', href: ROUTEN.fingerapotheke },
      bild: {
        quelle: '/bilder/tool-fingerapotheke.jpg',
        alt: 'Hände formen eine Fingergeste vor einer Rose',
      },
    },
    {
      name: 'BoosterGane',
      titel: 'Hören und sehen Sie die Blaupausen Ihrer Gesundheit',
      text: 'Tauchen Sie in heilsame malerische und klangliche Welten und erwecken Sie die ursprüngliche Gesundheit Ihres Organismus wieder.',
      punkte: [
        'Körper, Geist und Seele mit inneren Bildern anreichern',
        'Energiesystem regenerieren',
        'tiefe und komplex-vernetzte Blockaden auflösen',
      ],
      knopf: { label: 'Jetzt ansehen und anhören', href: ROUTEN.boostergane },
      bild: { quelle: '/bilder/tool-boostergane.jpg', alt: 'Rundes Aquarell in Türkis und Rosa' },
    },
  ],
}

export const TORE = {
  titelOben: 'Das fließt in Ihr Leben, wenn Sie die',
  titelUnten: 'Tore der Gienowmethode für sich öffnen',
  karten: [
    {
      titel: 'Direkte Auflösung der Blockaden',
      text: 'was viele AnwenderInnen als Wunderheilungen bezeichnen',
    },
    {
      titel: 'Ganzheitliche Transformation',
      text: 'körperlich, seelisch und geistige Symptome, können zusammenhängend gelöst werden',
    },
    {
      titel: 'Bewusste Erkenntnisse über wahre Ursachen',
      text: 'Auftauchen neuer unbekannter Lösungsmöglichkeiten',
    },
    {
      titel: 'Selbstheilungskräfte anregen',
      text: 'durch gezielte Impulse über Hören und Sehen',
    },
    {
      titel: 'Bewusstsein schulen',
      text: 'verborgene unbekannte Zusammenhänge von Blockaden innen wie außen erkennen, um sie zu lösen',
    },
    {
      titel: 'Freisein im ganzen Wesen spüren',
      text: 'Begeben Sie sich durch die Tools in einen bewussten Freiheitszustand',
    },
  ],
}

export const WEITERE = {
  titel: 'Weitere Tools für Ihre ganzheitliche Gesundheit',
  karten: [
    {
      titel: 'KlangQodes',
      unterzeile: 'Selbstheilungskräfte durch Klang wecken',
      text: 'Lösen Sie durch klangliche Formen bestimmte Beschwerden für ganzheitliches Wohlbefinden auf',
      knopf: { label: 'Mehr Infos', href: LINKS.tsoraat },
      bild: { quelle: '/bilder/weitere-klangqodes.jpg', alt: 'Landschaft im Abendlicht' },
    },
    {
      titel: 'Qothematik',
      unterzeile: 'Nutzen Sie hunderte Qodes für Ihr Energiesystem',
      text: 'Hier erhalten Sie alle Qodes, die Ihnen von Ihrem Therapeuten der Gienowmethode verschrieben wurden.',
      knopf: { label: 'Zum Qode Shop', href: LINKS.qothematik },
      bild: { quelle: '/bilder/weitere-qothematik.png', alt: 'Geometrisches Farbmuster' },
    },
    {
      titel: 'Tsoraat Designs',
      unterzeile: 'Gesundheit mit energetisch wirksamen Designs beeinflussen',
      text: 'Mit Design-Kleidung von Peter Gienow schaffen Sie Zugang zu Bewusstseinsformen, die Ihnen bei speziellen Alltagsthemen zur Seite stehen',
      knopf: { label: 'Mehr erfahren', href: LINKS.tsoraat },
      bild: { quelle: '/bilder/weitere-tsoraat.jpg', alt: 'Energetisch wirksames Design' },
    },
    {
      titel: 'Meditationstapeten',
      unterzeile: 'Schreiten Sie durch magische Tore meditativer Welten',
      text: 'Bringen Sie harmonisierende Wirkungen in Ihre vier Wände und täglichen Meditationen',
      knopf: { label: 'Jetzt stöbern', href: LINKS.wundertapeten },
      bild: { quelle: '/bilder/weitere-tapeten.jpg', alt: 'Meditative Bildtapete' },
    },
  ],
}

export const RETTUNG = {
  titel: 'Wie die Gienowmethode ein Leben rettete',
  absaetze: [
    'Durch eine schwere Erkrankung stand Dr. Peter Gienow dem Tod sehr nahe.',
    'Trotz intensiver medizinischer Behandlung gab es zeitweise kaum noch therapeutische Möglichkeiten.',
    'In dieser Phase entstand ein neuer Ansatz, aus dem später die BoosterGane entwickelt wurden.',
    'Im weiteren Verlauf konnten schrittweise Veränderungen beobachtet werden, und seine Blutwerte stabilisierten sich wieder.',
    'Heute kann er mit gesunder Milz ein aktives Leben führen.',
  ],
  knopf: { label: 'Zur ganzen Geschichte', href: ROUTEN.ueberUns },
  bild: { quelle: '/bilder/start-rettung.jpg', alt: 'Peter und Gertie Gienow im Freien' },
}

/* Auf der Live-Seite stehen hier "5.0000+", "350+" und "500.0000+". Die
   Ziffernfolgen sind offensichtlich verrutscht — korrigiert auf 5.000+, 35+
   (so nennt es auch die Über-uns-Seite) und 500.000+. Als Zahlen notiert,
   damit sie beim Hereinscrollen hochzaehlen. */
export const KENNZAHLEN = [
  { wert: 5000, suffix: '+', label: 'Tools für personalisierte Wirkung' },
  { wert: 35, suffix: '+', label: 'Jahre Erfahrung im medizinischen und alternativen Bereich' },
  { wert: 500000, suffix: '+', label: 'Anwendungen der Gienow-Tools' },
]

export const FAQ = {
  titelOben: 'Unsere FAQ zum DIY-Gesundheitssystem',
  titelUnten: 'der Gienowmethode',
  unterzeile: 'Hier finden Sie Antworten auf häufig gestellte Fragen zur Gienowmethode',
  fragen: [
    {
      frage: 'Sind Sie ein freies Unternehmen?',
      antwort:
        'Ja, wir sind ein freies Unternehmen und bilden auch Menschen aus, die viele Erfahrungen mit unseren Gienow-Wundern gemacht haben. Wir distanzieren uns ganz klar von Pseudowissenschaft, Schneeballsystemen und Heilversprechen.',
    },
    {
      frage: 'Wo kann ich die Tools bestellen?',
      antwort:
        'Fast jedes Tool wird auf jeweiligen Webshops angeboten. Wenn Sie oben das Tool auswählen, finden Sie auf der jeweiligen Seite Links, die Sie zu unseren jeweiligen externen Shops führen werden.',
    },
    {
      frage: 'Welches Tool ist für meine Situation das beste?',
      antwort:
        'Welches Tool am besten für welche Anwendungszwecke geeignet ist, finden Sie auf der jeweiligen Tool-Seite. Ansonsten kontaktieren Sie uns gerne und wir können Ihre ersten Fragen direkt beantworten. Sollten Sie eine schwerwiegende Situation haben, können Sie gerne direkt eine beratende Behandlung bei uns buchen, um die besten Erfolge (die angesprochenen 80% Heilungsquote) zu feiern.',
    },
    {
      frage: 'In welcher Reihenfolge sollte ich mit den Tools arbeiten?',
      antwort:
        'Es gibt keine verpflichtende Reihenfolge. Es ist nur interessant zu wissen, dass die Tools auf verschiedenen Ebenen arbeiten: die Fingergesten arbeiten mit körpereigenen Energien, die Qodes geben externe Impulse und die BoosterGane gehen sogar über diese sog. Informationsebene hinaus und berührt die göttliche Ebene (ens.dei nach Paracelsus).\nDas heißt: sollte man mit Fingergesten langfristig an Grenzen stoßen, sollte man das Problem von einer höheren Ebene aus behandeln und wenn selbst die Qodes keine Hilfe bieten sind die BoosterGane immer gerne da um “von ganz oben” Unterstützung zu bieten.',
    },
  ],
}
