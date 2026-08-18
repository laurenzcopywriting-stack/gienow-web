import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger, EASE, reduziert } from '../lib/motion'
import { zuAnker } from '../lib/anker'
import { pfad } from '../lib/pfad'
import { NAVIGATION, LINKS, ROUTEN } from '../inhalte/gemeinsam'

/** Die beiden Personen-Menues rechts im Kopf der Startseite. */
const PERSONEN = [
  {
    name: 'Peter Gienow',
    instagram: LINKS.instagram,
    spotify: LINKS.spotifyPeter,
    youtube: LINKS.youtubePeter,
  },
  {
    name: 'Gertie Gienow',
    instagram: LINKS.instagram,
    spotify: LINKS.spotifyGertie,
    youtube: LINKS.youtubeGertie,
  },
]

export function Kopf({
  logo = 'hell',
  rechts = 'personen',
}: {
  logo?: 'hell' | 'dunkel'
  rechts?: 'personen' | 'tsoraat' | 'boostergane'
}) {
  const kopf = useRef<HTMLElement>(null)
  const [menuOffen, setMenuOffen] = useState(false)

  useGSAP(
    () => {
      if (reduziert()) return

      /* Die Leiste weicht beim Hinunterscrollen und kommt beim Hochscrollen
         sofort zurueck. Der Inhalt bekommt so die volle Hoehe, ohne dass die
         Navigation umstaendlich zu erreichen waere. */
      const zeigen = gsap.quickTo(kopf.current, 'yPercent', {
        duration: 0.4,
        ease: EASE.beide,
      })

      ScrollTrigger.create({
        start: 'top -80',
        end: 'max',
        onUpdate: (self) => zeigen(self.direction === 1 ? -100 : 0),
        onToggle: (self) => {
          kopf.current?.classList.toggle('ist-abgesetzt', self.isActive)
          if (!self.isActive) zeigen(0)
        },
      })
    },
    { scope: kopf }
  )

  /* Anker auf derselben Seite weich anspringen; Anker auf der Startseite
     (`/#tools`) laufen als normaler Seitenwechsel. */
  const klick = (href: string) => (ereignis: React.MouseEvent) => {
    setMenuOffen(false)
    if (!href.startsWith('#')) return
    ereignis.preventDefault()
    zuAnker(href)
  }

  return (
    <header className={`kopf ${menuOffen ? 'ist-offen' : ''}`} ref={kopf}>
      <div className="kopf__innen">
        <a href={ROUTEN.start} className="kopf__marke">
          <img
            src={pfad(logo === 'dunkel' ? '/bilder/logo-dunkel.jpg' : '/bilder/logo-hell.jpg')}
            alt="Freisinn — Gienowmethode, zur Startseite"
            width={1000}
            height={414}
          />
        </a>

        <nav className="kopf__nav" aria-label="Hauptnavigation">
          <ul>
            {NAVIGATION.map((eintrag) => (
              <li key={eintrag.label}>
                <a href={eintrag.href} onClick={klick(eintrag.href)}>
                  {eintrag.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="kopf__rechts">
          {rechts === 'personen' &&
            PERSONEN.map((p) => (
              <div className="person-menu" key={p.name}>
                <span className="person-menu__name">{p.name}</span>
                <div className="person-menu__klappe">
                  <a href={p.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a href={p.spotify} target="_blank" rel="noopener noreferrer">
                    Spotify
                  </a>
                  <a href={p.youtube} target="_blank" rel="noopener noreferrer">
                    Youtube
                  </a>
                </div>
              </div>
            ))}

          {rechts === 'tsoraat' && (
            <a
              className="kopf__sozial"
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramZeichen />
              <span>Tsoraat</span>
            </a>
          )}

          {rechts === 'boostergane' && (
            <a href={ROUTEN.boostergane} className="knopf knopf--tinte knopf--klein">
              BoosterGane
            </a>
          )}
        </div>

        <button
          type="button"
          className="kopf__brenner"
          aria-expanded={menuOffen}
          aria-label={menuOffen ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setMenuOffen((o) => !o)}
        >
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

function InstagramZeichen() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
