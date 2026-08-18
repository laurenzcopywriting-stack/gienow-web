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
import { Schieber } from '../components/Schieber'
import {
  HERO,
  STIMMEN,
  VORTEILE,
  SCHIEBER,
  ZITAT_OBEN,
  UEBUNG,
  ZITAT_UNTEN,
  HERKUNFT,
  KENNZAHLEN,
  FAQ,
} from '../inhalte/fingerapotheke'

export function Fingerapotheke() {
  const wurzel = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (reduziert()) {
        szeneSetzen(wurzel.current ?? document)
        return
      }

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
        .fromTo(
          '.hero__bild',
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.15, ease: EASE.weich },
          0.15
        )

      woerterEnthuellen('.vorteile__titel')
      einblenden('.vorteil', { ausloeser: '.vorteile__raster', versatz: 0.1 })
      einblenden('.schieber, .schieber__aktion', { ausloeser: '.appschieber' })
      einblenden('.zitat__block', { ausloeser: '.zitat' })

      woerterEnthuellen('.uebung__titel')
      einblenden('.uebung__einleitung, .uebung__vorbemerkung, .uebung__bild', {
        ausloeser: '.uebung',
      })
      gsap.fromTo(
        '.uebung__schritt',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: DAUER.kurz,
          ease: EASE.weich,
          stagger: 0.13,
          scrollTrigger: { trigger: '.uebung__schritte', start: 'top 86%', once: true },
        }
      )

      woerterEnthuellen('.herkunft__titel')
      einblenden('.herkunft__absatz, .herkunft__aktion, .herkunft__bild', {
        ausloeser: '.herkunft',
      })

      zahlenZaehlen(wurzel.current ?? document)
      einblenden('.zahl', { ausloeser: '.zahlen', versatz: 0.1 })
      woerterEnthuellen('.faq__titel')
      einblenden('.akkordeon__zeile', { ausloeser: '.akkordeon', versatz: 0.06 })

      wurzel.current?.querySelectorAll<HTMLElement>('[data-parallaxe]').forEach((el) => {
        el.dataset.speed = String(1 + Number(el.dataset.parallaxe) * 0.1)
      })
    },
    { scope: wurzel }
  )

  return (
    <div ref={wurzel} className="seite seite--finger">
      {/* ---------------- Hero ---------------- */}
      <section className="hero hero--koralle hero--geteilt auf-koralle">
        <div className="huelle hero__geteilt">
          <div className="hero__innen">
            <span className="kicker hero__kicker">{HERO.kicker}</span>
            <MaskenTitel as="h1" segmente={[{ text: HERO.titel }]} className="hero__titel h1" />
            <p className="lead hero__text">{HERO.text}</p>
            <div className="hero__aktion">
              <Knopf ton="tinte" href={HERO.knopf.href}>
                {HERO.knopf.label}
              </Knopf>
            </div>
          </div>
          <div className="hero__bild">
            <Bild quelle={HERO.bild.quelle} alt={HERO.bild.alt} verhaeltnis="1 / 1" sofort />
          </div>
        </div>
      </section>

      {/* ---------------- Stimmen ---------------- */}
      <section className="sektion--eng stimmen stimmen--koralle" id="testimonials">
        <Laufband eintraege={STIMMEN} className="stimmen__band" />
      </section>

      {/* ---------------- Vorteile ---------------- */}
      <section className="sektion--eng vorteile">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: VORTEILE.titel }]} className="vorteile__titel h2" />
        </div>
        <div className="huelle vorteile__raster">
          {VORTEILE.karten.map((k) => (
            <article className="vorteil" key={k.titel}>
              <h3 className="h4">{k.titel}</h3>
              <p className="klein">{k.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- App-Schieber ---------------- */}
      <section className="sektion--eng appschieber">
        <div className="huelle">
          <Schieber folien={SCHIEBER.bilder} verhaeltnis="16 / 10" />
        </div>
        <div className="huelle mitte schieber__aktion">
          <Knopf ton="tinte" href={SCHIEBER.knopf.href}>
            {SCHIEBER.knopf.label}
          </Knopf>
        </div>
      </section>

      {/* ---------------- Zitat oben ---------------- */}
      <section className="sektion--eng zitat">
        <div className="huelle huelle--schmal mitte">
          <div className="zitat__block">
            <p className="zitat__text h3">{ZITAT_OBEN.text}</p>
            <div className="zitat__person">
              <Bild
                quelle={ZITAT_OBEN.bild.quelle}
                alt={ZITAT_OBEN.bild.alt}
                verhaeltnis="1 / 1"
                className="zitat__portrait"
              />
              <div>
                <cite className="zitat__name">{ZITAT_OBEN.name}</cite>
                <span className="zitat__rolle">{ZITAT_OBEN.rolle}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Übung ---------------- */}
      <section className="sektion--eng uebung">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: UEBUNG.titel }]} className="uebung__titel h2" />
        </div>
        <div className="huelle uebung__innen">
          <div>
            <p className="uebung__einleitung h4">{UEBUNG.einleitung}</p>
            <p className="uebung__vorbemerkung klein">{UEBUNG.vorbemerkung}</p>
            <ol className="uebung__schritte">
              {UEBUNG.schritte.map((s, i) => (
                <li className="uebung__schritt" key={s}>
                  <span className="uebung__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <p className="uebung__nachsatz klein">{UEBUNG.nachsatz}</p>
          </div>
          <Bild
            quelle={UEBUNG.bild.quelle}
            alt={UEBUNG.bild.alt}
            verhaeltnis="4 / 3"
            className="uebung__bild"
          />
        </div>
      </section>

      {/* ---------------- Zitat unten ---------------- */}
      <section className="sektion--eng zitat">
        <div className="huelle huelle--schmal mitte">
          <div className="zitat__block">
            <p className="zitat__text h3">{ZITAT_UNTEN.text}</p>
            <cite className="zitat__name">{ZITAT_UNTEN.name}</cite>
            <div className="zitat__aktion">
              <Knopf ton="tinte" href={ZITAT_UNTEN.knopf.href}>
                {ZITAT_UNTEN.knopf.label}
              </Knopf>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Herkunft ---------------- */}
      <section className="sektion--eng herkunft">
        <div className="huelle">
          <div className="herkunft__panel auf-koralle">
            <Bild
              quelle={HERKUNFT.bild.quelle}
              alt={HERKUNFT.bild.alt}
              verhaeltnis="4 / 3"
              className="herkunft__bild"
            />
            <div className="herkunft__text">
              <MaskenTitel segmente={[{ text: HERKUNFT.titel }]} className="herkunft__titel h2" />
              {HERKUNFT.absaetze.map((a, i) => (
                <p className="herkunft__absatz" key={i}>
                  {a}
                </p>
              ))}
              <div className="herkunft__aktion">
                <Knopf ton="weiss" href={HERKUNFT.knopf.href}>
                  {HERKUNFT.knopf.label}
                </Knopf>
              </div>
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
          <MaskenTitel segmente={[{ text: FAQ.titel }]} className="faq__titel h2" />
          <p className="klein faq__unterzeile">{FAQ.unterzeile}</p>
        </div>
        <div className="huelle huelle--schmal">
          <Akkordeon fragen={FAQ.fragen} />
        </div>
        <div className="huelle mitte faq__aktion">
          <Knopf ton="tinte" href={FAQ.knopf.href}>
            {FAQ.knopf.label}
          </Knopf>
        </div>
      </section>
    </div>
  )
}
