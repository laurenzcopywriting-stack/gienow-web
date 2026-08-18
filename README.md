# gienow-web

Nachbau der vier Seiten von `gienowmethode.onepage.me` als eigener Code.

## Starten

```bash
npm install
```

```bash
npm run dev
```

Läuft auf <http://localhost:5185>.

## Die vier Seiten

| Pfad | Datei | Einstieg |
|---|---|---|
| `/` | `index.html` | `src/einstiege/start.tsx` |
| `/ueber-uns` | `ueber-uns.html` | `src/einstiege/ueberUns.tsx` |
| `/fingerapotheke` | `fingerapotheke.html` | `src/einstiege/fingerapotheke.tsx` |
| `/boostergane` | `boostergane.html` | `src/einstiege/boostergane.tsx` |

Jede Seite ist ein eigenes Dokument mit eigenem Bundle — kein Router. Die
sauberen Pfade ohne `.html` übernimmt im Entwicklungsserver ein kleines Plugin
in `vite.config.ts`; beim Ausliefern machen das Vercel und Netlify von selbst.

## Wo was liegt

```
src/
  inhalte/     Alle Texte, Bildpfade und Links — hier wird Inhalt geändert
  seiten/      Die vier Seiten samt ihrer Scroll-Choreografie
  components/  Geteilte Bausteine (Kopf, Fuß, Laufband, Schieber, Akkordeon …)
  lib/motion.ts  Die gemeinsame Bewegungssprache (Eases, Reveals, Zähler)
  styles/      base.css (Tokens) · bausteine.css · seiten.css
public/bilder/ 35 Originalbilder von der Live-Seite
```

**Texte ändern:** ausschließlich in `src/inhalte/`. Kein Text steht im JSX.

**Farben ändern:** ausschließlich in `src/styles/base.css`. Kein Hex-Wert
steht irgendwo sonst.

**Links ändern:** `src/inhalte/gemeinsam.ts`, Block `LINKS`.

## Bauen

```bash
npm run build
```

Erzeugt vier HTML-Dateien mit getrennten Bundles in `dist/`.

## Wichtig

`ABWEICHUNGEN.md` listet jede Stelle, an der dieser Nachbau von der Live-Seite
abweicht: korrigierte Schreibfehler, reparierte Links und die noch offenen
Punkte. Vor dem Livegang bitte einmal durchgehen.
