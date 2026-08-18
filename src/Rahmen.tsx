import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollSmoother, reduziert } from './lib/motion'
import { Kopf } from './components/Kopf'
import { Fuss } from './components/Fuss'

/**
 * Die gemeinsame Huelle aller vier Seiten.
 *
 * Jede Seite ist ein eigenes Dokument mit eigenem Bundle — es gibt keinen
 * Router. Der Rahmen startet den ScrollSmoother und haelt Kopf und Fuss.
 */
export function Rahmen({
  children,
  logo = 'hell',
}: {
  children: ReactNode
  /** Welche Logo-Fassung der Kopf traegt (die Live-Seite wechselt sie). */
  logo?: 'hell' | 'dunkel'
}) {
  const wurzel = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (reduziert()) return

      /* Zieht das Scrollen leicht nach. Muss vor allen anderen ScrollTriggern
         entstehen, weil es den Scroller ersetzt. */
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.05,
        effects: true,
        normalizeScroll: true,
      })

      gsap.to('.fortschritt__fuellung', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      })

      return () => smoother.kill()
    },
    { scope: wurzel }
  )

  return (
    <div ref={wurzel}>
      {/* Alles Fixierte liegt AUSSERHALB von #smooth-wrapper. ScrollSmoother
          transformiert den Content — `position: fixed` wanderte darin mit. */}
      <a className="sprungmarke" href="#inhalt">
        Zum Inhalt springen
      </a>

      <div className="fortschritt" aria-hidden="true">
        <div className="fortschritt__fuellung" />
      </div>

      <Kopf logo={logo} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="inhalt">{children}</main>
          <Fuss />
        </div>
      </div>
    </div>
  )
}
