import { FUSS, ROUTEN } from '../inhalte/gemeinsam'
import { zuAnker } from '../lib/anker'
import { pfad } from '../lib/pfad'

export function Fuss() {
  const klick = (href: string) => (ereignis: React.MouseEvent) => {
    if (!href.startsWith('#') || href === '#') return
    ereignis.preventDefault()
    zuAnker(href)
  }

  return (
    <footer className="fuss auf-violett" id="kontakt">
      <div className="huelle fuss__innen">
        <div className="fuss__marke">
          <a href={ROUTEN.start}>
            <img
              src={pfad('/bilder/logo-fuss.jpg')}
              alt="Freisinn — Gienowmethode"
              width={1000}
              height={414}
            />
          </a>
          <ul className="fuss__sozial">
            <li>
              <a href={ROUTEN.start} aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.45-.13-2.43 0-4.1 1.48-4.1 4.2v2.34H7.44V13h2.71v8h3.35z" />
                </svg>
              </a>
            </li>
            <li>
              <a href={ROUTEN.start} aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                  <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.8" />
                  <circle cx="12" cy="12" r="3.7" />
                  <circle cx="17.3" cy="6.7" r="1.05" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </li>
            <li>
              <a href={ROUTEN.start} aria-label="Youtube">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M21.6 7.9c-.23-1.03-.92-1.78-1.86-1.98C18.02 5.55 12 5.55 12 5.55s-6.02 0-7.74.37c-.94.2-1.63.95-1.86 1.98C2 9.77 2 12 2 12s0 2.23.4 4.1c.23 1.03.92 1.78 1.86 1.98 1.72.37 7.74.37 7.74.37s6.02 0 7.74-.37c.94-.2 1.63-.95 1.86-1.98.4-1.87.4-4.1.4-4.1s0-2.23-.4-4.1zM10.1 15.3V8.7l5.2 3.3-5.2 3.3z" />
                </svg>
              </a>
            </li>
          </ul>
          <small className="fuss__rechte">{FUSS.rechte}</small>
        </div>

        <nav className="fuss__spalten" aria-label="Fußnavigation">
          {FUSS.spalten.map((spalte) => (
            <div className="fuss__spalte" key={spalte.titel}>
              <h2 className="fuss__titel">{spalte.titel}</h2>
              <ul>
                {spalte.eintraege.map((e) => (
                  <li key={e.label}>
                    <a href={e.href} onClick={klick(e.href)}>
                      {e.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="fuss__spalte">
            <h2 className="fuss__titel">{FUSS.kontakt.titel}</h2>
            <ul>
              <li>
                <a href={`tel:${FUSS.kontakt.telefon}`}>{FUSS.kontakt.telefon}</a>
              </li>
              <li>
                <a href={`mailto:${FUSS.kontakt.email}`}>{FUSS.kontakt.email}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  )
}
