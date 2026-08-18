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
import { Bild, VideoBild } from '../components/Bild'
import { Kennzahlen } from '../components/Zahlen'
import { Akkordeon } from '../components/Akkordeon'
import { Laufband } from '../components/Laufband'
import { Schieber } from '../components/Schieber'
import { VideoEinbettung } from '../components/VideoEinbettung'
import { zuAnker } from '../lib/anker'
import {
  HERO,
  KENNZAHLEN,
  BERICHTE,
  SPRACHE,
  BEISPIELE,
  BETRACHTUNG,
  ZITAT,
  SORTEN,
  ENTSTEHUNG,
  FAQ,
} from '../inhalte/boostergane'

export function BoosterGane() {
  const wurzel = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (reduziert()) {
        szeneSetzen(wurzel.current ?? document)
        return
      }

      /* Der Lime-Strich unter "durch Sehen ..." wird gezogen, nachdem die
         Woerter stehen — ueber background-size, damit er von links waechst. */
      gsap
        .timeline({ delay: 0.15 })
        .fromTo(
          '.hero__titel .wort',
          { yPercent: 108 },
          { yPercent: 0, duration: DAUER.lang, ease: EASE.auftritt, stagger: 0.05 }
        )
        .fromTo(
          '.hero__kicker',
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: DAUER.mittel, ease: EASE.weich },
          '-=0.85'
        )
        .fromTo(
          '.hero__titel .unterstrichen',
          { backgroundSize: '0% 0.16em' },
          { backgroundSize: '100% 0.16em', duration: 0.55, ease: EASE.beide },
          '-=0.2'
        )

      woerterEnthuellen('.hero__titel-unten')
      einblenden('.hero__schieber, .hero__video, .hero__text, .hero__aktion', {
        ausloeser: '.hero__zweiter',
      })

      zahlenZaehlen(wurzel.current ?? document)
      einblenden('.zahl', { ausloeser: '.band-zahlen', versatz: 0.12 })

      woerterEnthuellen('.sprache__titel')
      gsap.fromTo(
        '.schritt',
        { opacity: 0, y: 34, rotateX: -7 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: DAUER.mittel,
          ease: EASE.weich,
          stagger: 0.14,
          scrollTrigger: { trigger: '.sprache__raster', start: 'top 85%', once: true },
        }
      )

      einblenden('.beispiel', { ausloeser: '.beispiele__raster', versatz: 0.14 })

      /* Das Bild waechst waehrend des Heranscrollens leicht auf — die Sektion
         fordert genau das: "Betrachten Sie es einen Moment." */
      woerterEnthuellen('.betrachtung__titel')
      einblenden('.betrachtung__absatz, .betrachtung__aktion', { ausloeser: '.betrachtung__text' })
      gsap.fromTo(
        '.betrachtung__bild',
        { scale: 0.94 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.betrachtung',
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          },
        }
      )

      einblenden('.zitat__block', { ausloeser: '.zitat' })
      woerterEnthuellen('.sorten__titel')
      einblenden('.sorte', { ausloeser: '.sorten__raster', versatz: 0.09 })
      woerterEnthuellen('.entstehung__titel')
      einblenden('.entstehung__absatz, .entstehung__aktion, .entstehung__bild', {
        ausloeser: '.entstehung',
      })
      woerterEnthuellen('.faq__titel')
      einblenden('.akkordeon__zeile', { ausloeser: '.akkordeon', versatz: 0.06 })

      wurzel.current?.querySelectorAll<HTMLElement>('[data-parallaxe]').forEach((el) => {
        el.dataset.speed = String(1 + Number(el.dataset.parallaxe) * 0.1)
      })
    },
    { scope: wurzel }
  )

  return (
    <div ref={wurzel} className="seite seite--booster">
      {/* ---------------- Hero ---------------- */}
      <section className="hero hero--booster">
        <div className="huelle">
          <span className="kicker hero__kicker">{HERO.kicker}</span>
          <MaskenTitel
            as="h1"
            segmente={[
              { text: HERO.titelOben },
              { text: HERO.titelAkzent, stil: 'unterstrichen' },
            ]}
            className="hero__titel display"
          />

          <div className="hero__schieber">
            <Schieber folien={HERO.schieber} verhaeltnis="16 / 10" />
          </div>

          <div className="hero__zweiter">
            <div className="hero__video">
              <VideoEinbettung
                id={HERO.video.id}
                titel={HERO.video.titel}
                kanal={HERO.video.kanal}
                standbild={HERO.video.bild}
                href={HERO.video.href}
              />
              <p className="klein hero__videotext">{HERO.videoBeschriftung}</p>
            </div>

            <div>
              <MaskenTitel
                segmente={[{ text: HERO.titelUnten }]}
                className="hero__titel-unten display"
              />
              <p className="lead hero__text">{HERO.text}</p>
              <div className="hero__aktion">
                {HERO.knoepfe.map((k) => (
                  <Knopf
                    key={k.label}
                    ton={k.ton}
                    href={k.href.startsWith('#') ? undefined : k.href}
                    beiKlick={k.href.startsWith('#') ? () => zuAnker(k.href) : undefined}
                  >
                    {k.label}
                  </Knopf>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Kennzahlen ---------------- */}
      <section className="band-zahlen auf-violett">
        <div className="huelle">
          <Kennzahlen zahlen={KENNZAHLEN} ton="dunkel" />
        </div>
      </section>

      {/* ---------------- Berichte ---------------- */}
      <section className="berichte auf-violett" id="testimonials">
        <Laufband eintraege={BERICHTE} className="berichte__band" />
      </section>

      {/* ---------------- Sprache der Liebe ---------------- */}
      <section className="sektion sprache" id="sprache">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: SPRACHE.titel }]} className="sprache__titel h2" />
        </div>
        <div className="huelle sprache__raster">
          {SPRACHE.schritte.map((s) => (
            <article className="schritt auf-violett" key={s.titel}>
              <h3 className="h4">{s.titel}</h3>
              {s.text.split('\n').map((zeile, i) => (
                <p className="klein" key={i}>
                  {zeile}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Beispiele ---------------- */}
      <section className="sektion--eng beispiele">
        <div className="huelle beispiele__raster">
          {BEISPIELE.map((b) => (
            <article className="beispiel" key={b.beispiel}>
              {b.istVideo ? (
                <VideoBild quelle={b.bild.quelle} alt={b.bild.alt} verhaeltnis="16 / 10" />
              ) : (
                <Bild quelle={b.bild.quelle} alt={b.bild.alt} verhaeltnis="16 / 10" />
              )}
              <p className="klein beispiel__beschriftung">{b.beschriftung}</p>
              <h3 className="h4">{b.beispiel}</h3>
              <p className="klein">{b.einleitung}</p>
              <ul className="beispiel__punkte">
                {b.punkte.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Knopf ton="violett" href={b.knopf.href}>
                {b.knopf.label}
              </Knopf>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Betrachtung ---------------- */}
      <section className="sektion betrachtung">
        <div className="huelle betrachtung__innen">
          <Bild
            quelle={BETRACHTUNG.bild.quelle}
            alt={BETRACHTUNG.bild.alt}
            verhaeltnis="1 / 1"
            className="betrachtung__bild"
          />
          <div className="betrachtung__text">
            <MaskenTitel
              segmente={[{ text: BETRACHTUNG.titel }]}
              className="betrachtung__titel h2"
            />
            {BETRACHTUNG.absaetze.map((a, i) => (
              <p className="betrachtung__absatz" key={i}>
                {a.split('\n').map((zeile, j) => (
                  <span key={j}>
                    {zeile}
                    {j < a.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
            <div className="betrachtung__aktion">
              <Knopf ton="tinte" href={BETRACHTUNG.knopf.href}>
                {BETRACHTUNG.knopf.label}
              </Knopf>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Zitat ---------------- */}
      <section className="zitat zitat--violett auf-violett">
        <div className="huelle huelle--schmal mitte">
          <div className="zitat__block">
            {ZITAT.text.split('\n\n').map((absatz, i) => (
              <p className="zitat__text h3" key={i}>
                {absatz}
              </p>
            ))}
            <cite className="zitat__name">{ZITAT.name}</cite>
            <span className="zitat__rolle">{ZITAT.zusatz}</span>
          </div>
        </div>
      </section>

      {/* ---------------- Sorten ---------------- */}
      <section className="sektion sorten">
        <div className="huelle mitte">
          <MaskenTitel
            segmente={[{ text: SORTEN.titelOben }, { text: SORTEN.titelUnten, stil: 'betont' }]}
            className="sorten__titel h2"
          />
          <p className="klein sorten__unterzeile">{SORTEN.unterzeile}</p>
        </div>
        <div className="huelle sorten__raster">
          {SORTEN.karten.map((k) => (
            <article className="sorte auf-violett" key={k.titel}>
              <Bild quelle={k.bild.quelle} alt={k.bild.alt} verhaeltnis="1 / 1" />
              <h3 className="h4">{k.titel}</h3>
              <p className="sorte__unterzeile">{k.unterzeile}</p>
              <p className="klein">{k.text}</p>
              <Knopf ton="umriss-hell" href={SORTEN.knopfUnten.href}>
                {SORTEN.knopfLabel}
              </Knopf>
            </article>
          ))}
        </div>
        <div className="huelle mitte sorten__aktion">
          <Knopf ton="violett" href={SORTEN.knopfUnten.href}>
            {SORTEN.knopfUnten.label}
          </Knopf>
        </div>
      </section>

      {/* ---------------- Entstehung ---------------- */}
      <section className="sektion entstehung auf-violett">
        <div className="huelle entstehung__innen">
          <VideoBild
            quelle={ENTSTEHUNG.bild.quelle}
            alt={ENTSTEHUNG.bild.alt}
            verhaeltnis="4 / 3"
            className="entstehung__bild"
          />
          <div className="entstehung__text">
            <MaskenTitel segmente={[{ text: ENTSTEHUNG.titel }]} className="entstehung__titel h2" />
            <p className="entstehung__name">{ENTSTEHUNG.name}</p>
            {ENTSTEHUNG.absaetze.map((a, i) => (
              <p className="entstehung__absatz" key={i}>
                {a}
              </p>
            ))}
            <div className="entstehung__aktion">
              <Knopf ton="weiss" href={ENTSTEHUNG.knopf.href}>
                {ENTSTEHUNG.knopf.label}
              </Knopf>
            </div>
          </div>
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
      </section>
    </div>
  )
}
