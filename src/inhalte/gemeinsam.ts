import { pfad } from '../lib/pfad'

/* =========================================================================
   Inhalte, die auf allen vier Seiten gleich sind: Navigation und Fuss.
   Wortlaut und Ziele stammen aus gienowmethode.onepage.me.
   ========================================================================= */

/* Alle vier Ziele laufen durch `pfad()`, damit sie auch unter einem
   Unterpfad stimmen (GitHub Pages liefert die Seite unter /<repo>/ aus).

   Mit Schraegstrich am Ende: die Unterseiten liegen als Verzeichnis mit
   index.html vor. Ohne ihn schickt ein statischer Hoster erst eine
   Weiterleitung hinterher. */
export const ROUTEN = {
  start: pfad('/'),
  ueberUns: pfad('/ueber-uns/'),
  fingerapotheke: pfad('/fingerapotheke/'),
  boostergane: pfad('/boostergane/'),
} as const

/** Externe Ziele, so wie sie auf der Live-Seite verlinkt sind. */
export const LINKS = {
  fingerapothekeApp: 'https://fingerapotheke.com/abonnement',
  /* Diese Seite gehoert nicht zu den vier nachgebauten — der Knopf zeigt
     deshalb auf das Original. */
  qodesForHealth: 'https://gienowmethode.onepage.me/qodes-for-health',
  tsoraat: 'https://tsoraat.world/',
  qothematik: 'https://qothematik.com/',
  wundertapeten: 'https://wundertapeten.com/',
  instagram: 'https://www.instagram.com/tsoraat/',
  spotifyPeter: 'https://open.spotify.com/search/tsoraatmusic',
  spotifyGertie: 'https://open.spotify.com/search/songwriterbooster',
  youtubePeter: 'https://www.youtube.com/@tsoraat1467',
  youtubeGertie: 'https://www.youtube.com/@gertiegienow8653/videos',
  playlist: 'https://www.youtube.com/watch?v=pUSQBJfPMIw',
} as const

export const NAVIGATION = [
  { label: 'Zu den Tools', href: `${ROUTEN.start}#tools` },
  { label: 'Testimonials', href: `${ROUTEN.start}#testimonials` },
  { label: 'Über uns', href: ROUTEN.ueberUns },
  { label: 'Kontakt', href: '#kontakt' },
]

export const FUSS = {
  spalten: [
    {
      titel: 'Freisinn',
      eintraege: [
        { label: 'Startseite', href: ROUTEN.start },
        { label: 'Gienow-Tools', href: `${ROUTEN.start}#tools` },
        { label: 'Testimonials', href: `${ROUTEN.start}#testimonials` },
        { label: 'Über uns', href: ROUTEN.ueberUns },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      titel: 'Legal',
      eintraege: [
        { label: 'Nutzungsbedingungen', href: '#' },
        { label: 'Datenschutzerklärung', href: '#' },
      ],
    },
  ],
  kontakt: {
    titel: 'Contacts',
    telefon: '004550137264',
    email: 'tsoraat@soulicious.com',
  },
  rechte: '© 2025 Freisinn. All rights reserved',
}
