import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import {
  gsap,
  einblenden,
  woerterEnthuellen,
  szeneSetzen,
  reduziert,
  zahlenZaehlen,
  EASE,
  DAUER,
} from '../lib/motion'
import { MaskenTitel } from '../components/Text'
import { Knopf } from '../components/Knopf'
import { Bild } from '../components/Bild'
import { Kennzahlen } from '../components/Zahlen'
import { Akkordeon } from '../components/Akkordeon'
import { Laufband } from '../components/Laufband'
import { zuAnker } from '../lib/anker'
import {
  HERO,
  STIMMEN,
  BLOCKADEN,
  WURZEL,
  ZITAT,
  TOOLS,
  TORE,
  WEITERE,
  RETTUNG,
  KENNZAHLEN,
  FAQ,
} from '../inhalte/start'

export function Start() {
  const wurzel = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (reduziert()) {
        szeneSetzen(wurzel.current ?? document)
        return
      }

      /* --- Einstieg -------------------------------------------------------
         Ohne ScrollTrigger, weil der Hero beim Laden schon sichtbar ist. */
      gsap
        .timeline({ delay: 0.15 })
        .fromTo(
          '.hero__titel .wort',
          { yPercent: 108 },
          { yPercent: 0, duration: DAUER.lang, ease: EASE.auftritt, stagger: 0.045 }
        )
        .fromTo(
          '.hero__kicker, .hero__text, .hero__aktion',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: DAUER.mittel, ease: EASE.weich, stagger: 0.1 },
          '-=0.7'
        )

      /* Der Hero verlaesst die Buehne. Die Timeline haengt am Wrapper, nicht
         an den Woertern: eine Scroll-Timeline auf .wort schriebe ihren
         Startwert bei progress 0 zurueck und ueberstimmte den Auftritt. */
      gsap.to('.hero__innen', {
        yPercent: -18,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
      })

      /* Das Hintergrundbild zieht langsamer mit als der Text. */
      gsap.to('.hero__bild', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
      })

      /* --- Abschnitte ------------------------------------------------------ */
      woerterEnthuellen('.stimmen__titel')
      woerterEnthuellen('.blockaden__titel')
      einblenden('.blockaden__zeile', { ausloeser: '.blockaden__text' })

      /* Das dunkle Panel schiebt sich beim Hereinscrollen auf. */
      gsap.fromTo(
        '.blockaden__panel',
        { clipPath: 'inset(10% 5% 10% 5% round 28px)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 28px)',
          ease: 'none',
          scrollTrigger: { trigger: '.blockaden', start: 'top 80%', end: 'top 30%', scrub: 0.9 },
        }
      )

      woerterEnthuellen('.wurzel__titel')
      einblenden('.wurzel__punkt', { ausloeser: '.wurzel__liste', versatz: 0.12 })
      einblenden('.zitat__block', { ausloeser: '.zitat' })

      woerterEnthuellen('.tools__titel')
      gsap.utils.toArray<HTMLElement>('.toolkarte').forEach((karte) => {
        einblenden(karte.querySelectorAll('.toolkarte__text > *, .toolkarte__bild'), {
          ausloeser: karte,
          versatz: 0.07,
        })
      })

      woerterEnthuellen('.tore__titel')
      woerterEnthuellen('.weitere__titel')
      einblenden('.weitere__karte', { ausloeser: '.weitere__raster', versatz: 0.08 })
      woerterEnthuellen('.rettung__titel')
      einblenden('.rettung__absatz, .rettung__aktion, .rettung__bild', { ausloeser: '.rettung' })
      zahlenZaehlen(wurzel.current ?? document)
      einblenden('.zahl', { ausloeser: '.zahlen', versatz: 0.1 })
      woerterEnthuellen('.faq__titel')
      einblenden('.akkordeon__zeile', { ausloeser: '.akkordeon', versatz: 0.06 })

      /* --- Tore: horizontale Passage --------------------------------------
         Nur ab Tablet aufwaerts; darunter loest das CSS die Spur in eine
         normale Liste auf, und ein Pin hielte eine Bildschirmlaenge fest, in
         der nichts mehr passiert. matchMedia raeumt beim Wechsel selbst auf. */
      const mm = gsap.matchMedia()

      mm.add('(min-width: 901px)', () => {
        const spur = wurzel.current?.querySelector<HTMLElement>('.tore__spur')
        if (!spur) return

        const weite = () => Math.max(0, spur.scrollWidth - window.innerWidth + 80)

        gsap.to(spur, {
          x: () => -weite(),
          /* ease MUSS 'none' sein, sonst laufen Scrollposition und
             Seitwaertsbewegung auseinander. */
          ease: 'none',
          scrollTrigger: {
            trigger: '.tore',
            start: 'top top',
            end: () => `+=${weite() + window.innerHeight * 0.4}`,
            pin: '.tore__buehne',
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        })
      })

      /* ScrollSmoother liest die Parallaxe ueber `data-speed`. */
      wurzel.current?.querySelectorAll<HTMLElement>('[data-parallaxe]').forEach((el) => {
        el.dataset.speed = String(1 + Number(el.dataset.parallaxe) * 0.1)
      })
    },
    { scope: wurzel }
  )

  return (
    <div ref={wurzel} className="seite seite--start">
      {/* ---------------- Hero ---------------- */}
      <section className="hero hero--dunkel auf-dunkel">
        <div className="hero__bild">
          <Bild quelle={HERO.bild.quelle} alt={HERO.bild.alt} verhaeltnis="16 / 9" sofort />
        </div>

        <div className="huelle hero__innen mitte">
          <span className="kicker hero__kicker">{HERO.kicker}</span>
          <MaskenTitel
            as="h1"
            segmente={[{ text: HERO.titelOben }, { text: HERO.titelUnten }]}
            className="hero__titel display"
          />
          <p className="lead hero__text">{HERO.text}</p>
          <div className="hero__aktion">
            <Knopf ton="weiss" beiKlick={() => zuAnker(HERO.knopf.href)}>
              {HERO.knopf.label}
            </Knopf>
          </div>
        </div>
      </section>

      {/* ---------------- Feedback-Geschichten ---------------- */}
      <section className="sektion--eng stimmen" id="testimonials">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: STIMMEN.titel }]} className="stimmen__titel h3" />
        </div>
        <Laufband eintraege={STIMMEN.eintraege} className="stimmen__band" />
      </section>

      {/* ---------------- Blockaden ---------------- */}
      <section className="blockaden">
        <div className="huelle">
          <div className="blockaden__panel auf-dunkel">
            <MaskenTitel segmente={[{ text: BLOCKADEN.titel }]} className="blockaden__titel h1" />
            <div className="blockaden__text">
              {BLOCKADEN.zeilen.map((z, i) => (
                <p className="blockaden__zeile" key={i}>
                  {z}
                </p>
              ))}
              <p className="blockaden__zeile blockaden__frage">{BLOCKADEN.frage}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Wurzel ---------------- */}
      <section className="sektion wurzel">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: WURZEL.titel }]} className="wurzel__titel h2" />
        </div>
        <div className="huelle">
          <ol className="wurzel__liste">
            {WURZEL.punkte.map((p, i) => (
              <li className="wurzel__punkt" key={i}>
                <span className="wurzel__num" aria-hidden="true">
                  {i + 1}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Zitat ---------------- */}
      <section className="sektion--eng zitat">
        <div className="huelle huelle--schmal mitte">
          <div className="zitat__block">
            <span className="zitat__zeichen" aria-hidden="true">
              &quot;
            </span>
            <p className="zitat__text">{ZITAT.text}</p>
            <cite className="zitat__name">{ZITAT.name}</cite>
            <span className="zitat__rolle">{ZITAT.zusatz}</span>
          </div>
        </div>
      </section>

      {/* ---------------- Tools ---------------- */}
      <section className="sektion tools" id="tools">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: TOOLS.titel }]} className="tools__titel h2" />
        </div>

        <div className="huelle tools__liste">
          {TOOLS.karten.map((karte, i) => (
            <article
              className={`toolkarte ${i % 2 === 1 ? 'toolkarte--gedreht' : ''}`}
              key={karte.name}
            >
              <div className="toolkarte__text">
                <span className="toolkarte__name">{karte.name}</span>
                <h3 className="h3">{karte.titel}</h3>
                <p className="klein">{karte.text}</p>
                <ul className="toolkarte__punkte">
                  {karte.punkte.map((p) => (
                    <li key={p}>
                      <Haken />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Knopf ton="violett" href={karte.knopf.href}>
                  {karte.knopf.label}
                </Knopf>
              </div>
              <Bild
                quelle={karte.bild.quelle}
                alt={karte.bild.alt}
                verhaeltnis="1 / 1"
                className="toolkarte__bild"
              />
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Tore (horizontal) ---------------- */}
      <section className="tore">
        <div className="tore__buehne">
          <div className="tore__spur">
            <div className="tore__einstieg">
              <MaskenTitel
                segmente={[{ text: TORE.titelOben }, { text: TORE.titelUnten, stil: 'betont' }]}
                className="tore__titel h2"
              />
            </div>
            {TORE.karten.map((k, i) => (
              <article className="torkarte auf-violett" key={k.titel}>
                <span className="torkarte__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h4">{k.titel}</h3>
                <p>{k.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Weitere Tools ---------------- */}
      <section className="sektion weitere">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: WEITERE.titel }]} className="weitere__titel h2" />
        </div>
        <div className="huelle weitere__raster">
          {WEITERE.karten.map((k) => (
            <article className="weitere__karte" key={k.titel}>
              <Bild quelle={k.bild.quelle} alt={k.bild.alt} verhaeltnis="4 / 3" />
              <div className="weitere__inhalt">
                <h3 className="h4">{k.titel}</h3>
                <p className="weitere__unterzeile">{k.unterzeile}</p>
                <p className="klein">{k.text}</p>
                <Knopf ton="umriss" href={k.knopf.href}>
                  {k.knopf.label}
                </Knopf>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Rettung ---------------- */}
      <section className="sektion rettung auf-violett">
        <div className="huelle rettung__innen">
          <Bild
            quelle={RETTUNG.bild.quelle}
            alt={RETTUNG.bild.alt}
            verhaeltnis="4 / 3"
            className="rettung__bild"
          />
          <div className="rettung__text">
            <MaskenTitel segmente={[{ text: RETTUNG.titel }]} className="rettung__titel h2" />
            {RETTUNG.absaetze.map((a, i) => (
              <p className="rettung__absatz" key={i}>
                {a}
              </p>
            ))}
            <div className="rettung__aktion">
              <Knopf ton="weiss" href={RETTUNG.knopf.href}>
                {RETTUNG.knopf.label}
              </Knopf>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Kennzahlen ---------------- */}
      <section className="sektion--eng">
        <div className="huelle">
          <Kennzahlen zahlen={KENNZAHLEN} />
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="sektion faq" id="faq">
        <div className="huelle huelle--schmal mitte">
          <MaskenTitel
            segmente={[{ text: FAQ.titelOben }, { text: FAQ.titelUnten }]}
            className="faq__titel h2"
          />
          <p className="klein faq__unterzeile">{FAQ.unterzeile}</p>
        </div>
        <div className="huelle huelle--schmal">
          <Akkordeon fragen={FAQ.fragen} />
        </div>
      </section>
    </div>
  )
}

function Haken() {
  return (
    <svg
      className="haken"
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.4l4 4 8-9" />
    </svg>
  )
}
