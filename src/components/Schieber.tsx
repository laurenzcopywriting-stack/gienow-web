import { useRef, useState } from 'react'
import { Bild } from './Bild'

type Folie = { quelle: string; alt: string }

/**
 * Bildschieber mit Scroll-Snap.
 *
 * Das Blaettern laeuft ueber `scrollTo` auf der Spur statt ueber ein
 * Transform: dadurch bleiben Wischgesten und Tastatur-Scrollen erhalten, und
 * die Position stimmt auch dann, wenn jemand von Hand wischt.
 */
export function Schieber({ folien, verhaeltnis = '16 / 10' }: { folien: Folie[]; verhaeltnis?: string }) {
  const spur = useRef<HTMLDivElement>(null)
  const [aktiv, setAktiv] = useState(0)

  const zu = (index: number) => {
    const el = spur.current
    if (!el) return
    const ziel = Math.max(0, Math.min(folien.length - 1, index))
    el.scrollTo({ left: ziel * el.clientWidth, behavior: 'smooth' })
  }

  /* Die aktive Folie wird aus der Scrollposition abgeleitet — so stimmt die
     Anzeige auch nach einer Wischgeste, die keinen Knopf ausgeloest hat. */
  const beimScrollen = () => {
    const el = spur.current
    if (!el || el.clientWidth === 0) return
    setAktiv(Math.round(el.scrollLeft / el.clientWidth))
  }

  return (
    <div className="schieber">
      <div className="schieber__spur" ref={spur} onScroll={beimScrollen}>
        {folien.map((f) => (
          <div className="schieber__folie" key={f.quelle}>
            <Bild quelle={f.quelle} alt={f.alt} verhaeltnis={verhaeltnis} />
          </div>
        ))}
      </div>

      <div className="schieber__steuerung">
        <button
          type="button"
          className="schieber__pfeil"
          aria-label="Vorheriges Bild"
          onClick={() => zu(aktiv - 1)}
          disabled={aktiv === 0}
        >
          <Pfeil richtung="links" />
        </button>

        {/* aria-live meldet den Wechsel; sonst bliebe er fuer Screenreader
            unbemerkt, weil sich sonst nichts im Fokus aendert. */}
        <span className="schieber__zaehler" aria-live="polite">
          Slide {aktiv + 1} of {folien.length}
        </span>

        <button
          type="button"
          className="schieber__pfeil"
          aria-label="Nächstes Bild"
          onClick={() => zu(aktiv + 1)}
          disabled={aktiv === folien.length - 1}
        >
          <Pfeil richtung="rechts" />
        </button>
      </div>
    </div>
  )
}

function Pfeil({ richtung }: { richtung: 'links' | 'rechts' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={richtung === 'links' ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  )
}
