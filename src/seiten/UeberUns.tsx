import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, einblenden, woerterEnthuellen, szeneSetzen, reduziert, EASE, DAUER } from '../lib/motion'
import { MaskenTitel } from '../components/Text'
import { Knopf } from '../components/Knopf'
import { Bild, VideoBild } from '../components/Bild'
import {
  HERO,
  BAND,
  STATIONEN,
  JAHR_2016,
  WEITERE_STATIONEN,
  HEUTE,
  BUECHER,
  TEAM,
} from '../inhalte/ueberUns'

export function UeberUns() {
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
          { opacity: 0, x: 36 },
          { opacity: 1, x: 0, duration: 1.05, ease: EASE.weich },
          0.2
        )

      woerterEnthuellen('.band__titel')
      einblenden('.band__text', { ausloeser: '.band' })

      /* Jede Station des Zeitstrahls blendet fuer sich ein und der Faden
         waechst ueber die gesamte Sektion mit. */
      gsap.utils.toArray<HTMLElement>('.station').forEach((station) => {
        woerterEnthuellen(station.querySelector('.masken-titel') as Element)
        einblenden(station.querySelectorAll('.station__absatz, .station__bild'), {
          ausloeser: station,
          versatz: 0.07,
        })
      })

      gsap.fromTo(
        '.stationen__faden',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.stationen',
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 0.7,
          },
        }
      )

      gsap.fromTo(
        '.jahr__marke',
        { opacity: 0, scale: 0.82 },
        {
          opacity: 1,
          scale: 1,
          duration: DAUER.mittel,
          ease: EASE.weich,
          scrollTrigger: { trigger: '.jahr', start: 'top 82%', once: true },
        }
      )
      einblenden('.jahr__karte', { ausloeser: '.jahr__raster', versatz: 0.12 })

      gsap.utils.toArray<HTMLElement>('.spaeter__eintrag').forEach((eintrag) => {
        woerterEnthuellen(eintrag.querySelector('.masken-titel') as Element)
        einblenden(eintrag.querySelectorAll('.spaeter__absatz, .spaeter__aktion, .spaeter__bild'), {
          ausloeser: eintrag,
        })
      })

      woerterEnthuellen('.heute__titel')
      einblenden('.heute__einleitung, .heute__punkt', { ausloeser: '.heute', versatz: 0.07 })
      woerterEnthuellen('.buecher__titel')
      einblenden('.buecher__absatz, .buecher__zitat, .buecher__aktion, .buecher__bild', {
        ausloeser: '.buecher',
      })
      woerterEnthuellen('.team__titel')
      einblenden('.person', { ausloeser: '.team__raster', versatz: 0.09 })

      wurzel.current?.querySelectorAll<HTMLElement>('[data-parallaxe]').forEach((el) => {
        el.dataset.speed = String(1 + Number(el.dataset.parallaxe) * 0.1)
      })
    },
    { scope: wurzel }
  )

  return (
    <div ref={wurzel} className="seite seite--ueber">
      {/* ---------------- Hero ---------------- */}
      <section className="hero hero--geteilt">
        <div className="huelle hero__geteilt">
          <div className="hero__innen">
            <span className="kicker hero__kicker">{HERO.kicker}</span>
            <MaskenTitel
              as="h1"
              segmente={[{ text: HERO.titelOben }, { text: HERO.titelUnten }]}
              className="hero__titel h1"
            />
            <p className="lead hero__text">{HERO.text}</p>
            <div className="hero__aktion">
              <Knopf ton="violett" href={HERO.knopf.href}>
                {HERO.knopf.label}
              </Knopf>
            </div>
          </div>
          <div className="hero__bild">
            <Bild quelle={HERO.bild.quelle} alt={HERO.bild.alt} verhaeltnis="3 / 4" sofort />
          </div>
        </div>
      </section>

      {/* ---------------- Band ---------------- */}
      <section className="band auf-violett">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: BAND.titel }]} className="band__titel h2" />
          <p className="band__text">{BAND.text}</p>
        </div>
      </section>

      {/* ---------------- Zeitstrahl ---------------- */}
      <section className="sektion stationen">
        <div className="huelle stationen__innen">
          <div className="stationen__spur" aria-hidden="true">
            <span className="stationen__faden" />
          </div>

          <div className="stationen__folien">
            {STATIONEN.map((s) => (
              <article className="station" key={s.titel}>
                <MaskenTitel segmente={[{ text: s.titel }]} className="h3" />
                <div className="station__inhalt">
                  <div>
                    {s.absaetze.map((a, i) => (
                      <p className="station__absatz" key={i}>
                        {a}
                      </p>
                    ))}
                  </div>
                  {s.bild && (
                    <Bild
                      quelle={s.bild.quelle}
                      alt={s.bild.alt}
                      verhaeltnis="1 / 1"
                      className="station__bild"
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 2016 ---------------- */}
      <section className="jahr auf-violett">
        <div className="huelle">
          <p className="jahr__marke">{JAHR_2016.marke}</p>
          <div className="jahr__raster">
            {JAHR_2016.karten.map((k) => (
              <article
                className={`jahr__karte ${k.breit ? 'jahr__karte--breit' : ''}`}
                key={k.titel}
              >
                <div className="jahr__text">
                  <h3 className="h3">{k.titel}</h3>
                  {k.absaetze.map((a, i) => (
                    <p key={i}>{a}</p>
                  ))}
                  {k.knopf && (
                    <Knopf ton="tinte" href={k.knopf.href}>
                      {k.knopf.label}
                    </Knopf>
                  )}
                </div>
                {k.istVideo ? (
                  <VideoBild
                    quelle={k.bild.quelle}
                    alt={k.bild.alt}
                    verhaeltnis="16 / 10"
                    className="jahr__bild"
                  />
                ) : (
                  <Bild
                    quelle={k.bild.quelle}
                    alt={k.bild.alt}
                    verhaeltnis="4 / 3"
                    className="jahr__bild"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Weitere Stationen ---------------- */}
      <section className="sektion spaeter">
        <div className="huelle">
          {WEITERE_STATIONEN.map((s) => (
            <article className="spaeter__eintrag" key={s.titel}>
              <div className="spaeter__text">
                <MaskenTitel segmente={[{ text: s.titel }]} className="h3" />
                {s.absaetze.map((a, i) => (
                  <p className="spaeter__absatz" key={i}>
                    {a}
                  </p>
                ))}
                {s.knopf && (
                  <div className="spaeter__aktion">
                    <Knopf ton="violett" href={s.knopf.href}>
                      {s.knopf.label}
                    </Knopf>
                  </div>
                )}
              </div>
              {s.bild && (
                <Bild
                  quelle={s.bild.quelle}
                  alt={s.bild.alt}
                  verhaeltnis="4 / 3"
                  className="spaeter__bild"
                />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Heute ---------------- */}
      <section className="sektion heute">
        <div className="huelle heute__innen">
          <Bild
            quelle={HEUTE.bild.quelle}
            alt={HEUTE.bild.alt}
            verhaeltnis="4 / 3"
            className="heute__bild"
            parallaxe={1.3}
          />
          <div>
            <MaskenTitel segmente={[{ text: HEUTE.titel }]} className="heute__titel h2" />
            <p className="heute__einleitung">{HEUTE.einleitung}</p>
            <ul className="heute__liste">
              {HEUTE.punkte.map((p) => (
                <li className="heute__punkt" key={p}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Bücher ---------------- */}
      <section className="sektion--eng buecher">
        <div className="huelle buecher__innen">
          <div>
            <MaskenTitel segmente={[{ text: BUECHER.titel }]} className="buecher__titel h2" />
            {BUECHER.absaetze.map((a, i) => (
              <p className="buecher__absatz lead" key={i}>
                {a}
              </p>
            ))}
            <blockquote className="buecher__zitat">
              <p>{BUECHER.zitat}</p>
              <cite>{BUECHER.zitatQuelle}</cite>
            </blockquote>
            <div className="buecher__aktion">
              <Knopf ton="violett" href={BUECHER.knopf.href}>
                {BUECHER.knopf.label}
              </Knopf>
            </div>
          </div>
          <Bild
            quelle={BUECHER.bild.quelle}
            alt={BUECHER.bild.alt}
            verhaeltnis="3 / 4"
            className="buecher__bild"
          />
        </div>
      </section>

      {/* ---------------- Team ---------------- */}
      <section className="sektion team" id="team">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: TEAM.titel }]} className="team__titel h2" />
        </div>
        <div className="huelle team__raster">
          {TEAM.mitglieder.map((m) => (
            <article className="person" key={m.name}>
              <Bild quelle={m.bild.quelle} alt={m.bild.alt} verhaeltnis="1 / 1" />
              <h3 className="h4 person__name">{m.name}</h3>
              <p className="person__rolle">{m.rolle}</p>
              {m.absaetze.map((a, i) => (
                <p className="klein person__text" key={i}>
                  {a}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
