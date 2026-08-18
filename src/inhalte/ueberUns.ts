import { LINKS, ROUTEN } from './gemeinsam'

/* =========================================================================
   Über uns — Wortlaut von gienowmethode.onepage.me/ueber-uns

   Die Schreibfehler der Live-Seite sind hier korrigiert. Was geaendert wurde,
   steht vollstaendig in ABWEICHUNGEN.md.
   ========================================================================= */

export const HERO = {
  kicker: 'Der Wunsch, der die Gienowmethode ins Leben gerufen hat',
  titelOben: 'Wir wollen',
  titelUnten: '"Freisein" für jeden Menschen jederzeit ermöglichen',
  text: 'Wie wir die Gienowmethode entwickelt haben, damit Sie sich mit aktivierten Selbstheilungskräften selbst helfen können',
  knopf: { label: 'Alle Team-Mitglieder kennenlernen', href: '#team' },
  bild: { quelle: '/bilder/ueber-hero-team.jpg', alt: 'Das Gienow-Team auf einer Treppe' },
}

export const BAND = {
  titel: '35+ Jahre in einem Augenblick',
  text: 'Erfahre die ganze Entwicklungsgeschichte der Gienowmethode von 1990 bis heute',
}

export const STATIONEN = [
  {
    titel: '2005 - das miasmatische Modell',
    absaetze: [
      'In einer schweren Nacht träumte Peter Gienow von Grundstrukturen eines Systems.',
      'Daraus entwickelte er sein eigenes Miasmatisches Modell.',
      'Es vereint uralte Weltbeschreibungen verschiedener Kulturen mit modernen, innovativen Systemansätzen zur Krankheitsbehandlung.',
    ],
    bild: {
      quelle: '/bilder/ueber-miasmatisch.jpg',
      alt: 'Farbiges Mandala mit Yin-Yang-Zeichen',
    },
  },
  {
    titel: 'Gesundheitsfluss durch Essenzen',
    absaetze: [
      'Ausgehend von der Gienow-Miasmatik erarbeiteten Peter und Gertie Gienow ein homöopathisches Repertorium, das sie stets weiterentwickelten.',
      'Als behandelndes Mittel kreierten Sie Essenzen, mit denen sie 80% ihrer Patienten zur Genesung verhalfen (eigene Metriken)',
    ],
    bild: null,
  },
  {
    titel: 'Ausbau der Gienowmethode',
    absaetze: [
      'Die Repertorisation wurde stets weiterentwickelt,',
      'viele Bücher geschrieben, Patienten geholfen',
      'und viele Seminare über die Miasmatische Homöopathie wurden veranstaltet.',
    ],
    bild: null,
  },
]

export const JAHR_2016 = {
  marke: '2016',
  karten: [
    {
      titel: 'Dr. Peter Gienow erkrankte',
      absaetze: [
        'Seine Milz war geschädigt und deutlich vergrößert, dass in seinem Körper kaum noch Thrombozyten vorhanden waren.',
        'Nach Cortisongabe im Krankenhaus verschwanden die Thrombozyten komplett.',
        'Er lag im Sterben.',
      ],
      bild: { quelle: '/bilder/team-peter.jpg', alt: 'Porträt von Dr. Peter Gienow' },
      istVideo: false,
      knopf: null,
      breit: false,
    },
    {
      titel: 'Gertie rettete Peters Leben mit dem ersten BoosterGan',
      absaetze: [
        'Gertie Gienow versuchte alles, um ihren Mann zu retten. Jeder Kunstgriff, jedes Mittel – doch weder Schulmedizin noch ihre eigene Gienow-Miasmatik halfen.',
        'In ihrem Zweifel wandte sie sich an Gott, an die Urquelle allen Seins, mit dem innigsten Wunsch, ihrem Mann das Leben zu retten, und bat um eine Möglichkeit, dies tun zu können.',
        'Unter diesem großen Druck und mit unendlicher Liebe entstand Thromboman – das erste BoosterGan, das Gertie malte.',
        'Sie brachte es ins Krankenhaus, und Peters Thrombozyten stiegen wieder an.',
        'Sein Leben war gerettet, ohne logische Erklärung der Ärzte.',
      ],
      bild: { quelle: '/bilder/ueber-thromboman.jpg', alt: 'Thromboman – das erste BoosterGan' },
      istVideo: false,
      knopf: null,
      breit: false,
    },
    {
      titel: 'Wie sich die Liebesbotschaft von einem Zimmer in die Welt verbreitete',
      absaetze: [
        'Gertie brachte weitere Superheldenbilder in sein Zimmer, und ein weiteres Wunder geschah: Auch ein anderer Patient im gleichen Krankenzimmer reagierte auf ein BoosterGan wie Peter – und heilte.',
        'Dieses Ereignis veranlasste Gertie, die Schöpfung dieser Wesen zu vertiefen.',
        'Es entstanden viele BoosterGane, die Patienten wie Superhelden auf ihrer Genesungsreise begleiteten – auch bei nicht-körperlichen Beschwerden.',
        'Das Tor zu diesen mächtigen Wesenheiten war geöffnet, und Gertie erhielt das Privileg, eine Verbindung zu ihnen herzustellen.',
        'Durch ihren Zugang zu dieser göttlichen Ebene kann sie Werke erschaffen, die Betrachter direkt mit dieser Ebene verlinken.',
        'Sie testeten die Wirkung auch bei anderen Personen und auf weitere Organe – mit erstaunlichen Ergebnissen wie in den Feedbacks auf der Website zu lesen.',
      ],
      bild: {
        quelle: '/bilder/ueber-liebesbotschaft.jpg',
        alt: 'Gertie Gienow erzählt im Video',
      },
      istVideo: true,
      knopf: { label: 'Zu BoosterGane', href: ROUTEN.boostergane },
      breit: true,
    },
  ],
}

export const WEITERE_STATIONEN = [
  {
    titel: 'Erfindung der Fingerapotheke',
    absaetze: [
      'Nachdem Peter stabil war, entwickelte er auf Basis eines mathematischen Systems, der Qothematik, die Fingerapotheke.',
      'Mit ihr kann jede Beschwerde rechnerisch in eine Fingergeste umgewandelt werden, damit der Körper diese Information versteht und als Impuls zur Selbstheilung nutzt.',
    ],
    bild: {
      quelle: '/bilder/finger-notfallgeste.jpg',
      alt: 'Illustration einer Fingergeste',
    },
    knopf: { label: 'Zur Fingerapotheke-App', href: ROUTEN.fingerapotheke },
  },
  {
    titel: 'Qodes for Health und SelfQ',
    absaetze: [
      'Gertie und Peter Gienow konzipierten die Qode for Health Technologie, mit denen sie sich selbst heilten.',
    ],
    bild: null,
    knopf: { label: 'Erstelle deinen individuellen Self-Q', href: LINKS.qodesForHealth },
  },
  {
    titel: '2018 - Q-Health for Africa',
    absaetze: [
      'Zusammen mit Kooperationspartnern startete das Q-Health Projekt, um mit SelfQ digitalen Healing Support in Ländern Afrikas, die mangelhaften Zugang zu Behandlungen haben.',
      'Das Projekt fand über die Jahre in über 10 Ländern Anschluss und feierte erfolgreiche Ergebnisse.',
    ],
    bild: null,
    knopf: null,
  },
]

export const HEUTE = {
  titel: 'Und hier stehen wir heute:',
  einleitung: 'Seit 2020 entstanden viele weitere Tools in exponentieller Geschwindigkeit:',
  punkte: [
    '500+ Qodes im Qothematik Shop',
    '500+ BoosterGane',
    'Seit 2025 BoosterGane als Songs auf der klanglichen Ebene',
    '80+ Bücher',
    'Seit 2023 regelmäßige Seminare zur Bewusstseinsschulung',
  ],
  bild: { quelle: '/bilder/weitere-klangqodes.jpg', alt: 'Meer im Abendlicht' },
}

export const BUECHER = {
  titel: '80+ Gienow-Bücher',
  absaetze: [
    'Über Hintergrund, Tools, Theorie und praktische Anwendungen der Gienowmethode.',
    'Wissen, das Sie so nirgends anders finden:',
  ],
  zitat:
    '"Immer wenn ich die Gienow-Bücher lese, eröffnet sich mir eine echte wahre Welt, die mein Verständnis von der Welt, mir und tieferen Zusammenhängen stets erweitert"',
  zitatQuelle: '- Leserin',
  knopf: { label: 'Zu den Büchern', href: LINKS.tsoraat },
  bild: { quelle: '/bilder/ueber-buch.jpg', alt: 'Gienow-Bücher' },
}

export const TEAM = {
  titel: 'Lernen Sie unser Gienow-Team kennen',
  mitglieder: [
    {
      name: 'Dr. Peter Gienow',
      rolle: 'Arzt, Gründer und Erfinder der Gienow Tools',
      absaetze: [
        'hat tausende Bücher gelesen, um alles relevante Wissen, Weisheit und Wahrheit in die Gienowmethode zu einem neuen Ganzen zu integrieren.',
        'Daraus entstanden die Fingerapotheke, sein miasmatisches Modell und die Qodes der Gienowmethode',
      ],
      bild: { quelle: '/bilder/team-peter.jpg', alt: 'Dr. Peter Gienow' },
    },
    {
      name: 'Gertie Gienow',
      rolle: 'Geschäftsführerin, Gründerin und Erfinderin der Gienow Tools',
      absaetze: [
        'Niemand weiß woher sie kommt und wohin sie geht.',
        'Als Künstlerin ... erschuf sie die BoosterGane und entwickelte mit ihrem Mann Peter SelfQ. Sie ist die leitende Inspiration für Peter und befruchtet die Gienowmethode immer wieder aufs neue mit ihren Einsichten.',
      ],
      bild: { quelle: '/bilder/team-gertie.jpg', alt: 'Gertie Gienow' },
    },
    {
      name: 'Dr. Gudrun Hasler',
      rolle: 'Ärztin für allgemeine Medizin, Internistin, Gienowmethode-Beraterin',
      absaetze: [
        'fasziniert von einem großflächigen Original-BoosterGan, bis heute in ihrer Obhut, trat sie als medizinische Expertin und beste Freundin mit in das Wirken der Gienows',
        '- das Dreistern-Team aus Peter, Gertie und Gudrun entstand',
      ],
      bild: { quelle: '/bilder/team-gudrun.jpg', alt: 'Dr. Gudrun Hasler' },
    },
    {
      name: 'Sinja Gienow',
      rolle: 'Ergotherapeutin, Gienowmethode Beraterin',
      absaetze: [
        'begleitet und berät Patientinnen und Patienten im Krankenhaus und in Einzelberatungen.',
        'Als Content Creator trägt sie die Werkzeuge der Gienowmethode mit in die Welt',
      ],
      bild: { quelle: '/bilder/team-sinja.jpg', alt: 'Sinja Gienow' },
    },
    {
      name: 'Laurenz Partheymüller',
      rolle: 'Gienowmethode-Berater, Marketing Director, Content Creator',
      absaetze: [
        'Nachdem die BoosterGane ihm das Leben retteten, ist er fester Bestandteil des Teams, berät Menschen mit den Gienow-Tools',
        'und führt neue unternehmerische Projekte ins Feld.',
      ],
      bild: { quelle: '/bilder/team-laurenz.jpg', alt: 'Laurenz Partheymüller' },
    },
  ],
}
