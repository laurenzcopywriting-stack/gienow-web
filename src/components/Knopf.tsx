import type { ReactNode } from 'react'

type Ton = 'violett' | 'tinte' | 'weiss' | 'umriss' | 'umriss-hell' | 'lime'

type KnopfProps = {
  children: ReactNode
  href?: string
  ton?: Ton
  className?: string
  beiKlick?: () => void
}

/**
 * Der einzige Button der Seite.
 *
 * Ohne `href` entsteht ein echter `<button>`. Externe Ziele bekommen `rel`
 * gesetzt, sonst erhielte die Zielseite ueber `window.opener` Zugriff auf
 * diesen Tab.
 */
export function Knopf({ children, href, ton = 'violett', className = '', beiKlick }: KnopfProps) {
  const klassen = `knopf knopf--${ton} ${className}`

  if (href) {
    const extern = href.startsWith('http')
    return (
      <a
        href={href}
        className={klassen}
        onClick={beiKlick}
        {...(extern ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={klassen} onClick={beiKlick}>
      {children}
    </button>
  )
}
