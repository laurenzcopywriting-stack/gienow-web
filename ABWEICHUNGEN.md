# Abweichungen vom Original

Quelle des Nachbaus: `gienowmethode.onepage.me` (Startseite, `/ueber-uns`,
`/fingerapotheke`, `/boostergane`). Texte und Bilder stammen von dort.

**Die Schreibfehler der Live-Seite sind im Nachbau korrigiert.** Diese Datei
listet auf, was geändert wurde — damit der Unterschied zur Live-Seite
nachvollziehbar bleibt und beim nächsten Abgleich niemand versehentlich
zurückkorrigiert.

---

## 1. Korrigierte Schreibfehler

### Startseite (`src/inhalte/start.ts`)

| Live-Seite | Jetzt |
|---|---|
| Speicheldrüsen**l**rebs | Speicheldrüsen**k**rebs |
| **Sels**theilungskräfte anregen | **Selbst**heilungskräfte anregen |
| häufig **gestelle** Fragen | häufig **gestellte** Fragen |
| **Desgn**‒Kleidung | **Design**-Kleidung |
| harmonisierende **Wikrungen** | harmonisierende **Wirkungen** |
| Tsoraat **Divigns** | Tsoraat **Designs** |
| „kontaktieren Sie uns gerne **(Link)** und …" | Platzhalter entfernt |
| sog. **Informationsabende** | sog. **Informationsebene** |
| „welche Anwendungszwecke geeignet **sind**" | geeignet **ist** |
| „Situation haben **könne** Sie gerne" | „Situation haben**, können** Sie gerne" |

### Über uns (`src/inhalte/ueberUns.ts`)

| Live-Seite | Jetzt |
|---|---|
| **entiwickelt** | **entwickelt** |
| **Entwiklcungs**geschichte | **Entwicklungs**geschichte |
| **Grundss**trukturen | **Grunds**trukturen |
| „**ein Homöopathische** Repertorium, **die** sie" | „**ein homöopathisches** Repertorium, **das** sie" |
| **Köper** | **Körper** |
| ein **wietres** Wunder | ein **weiteres** Wunder |
| **umgwandelt** | **umgewandelt** |
| Selbsthei**u**ng | Selbsthei**lu**ng |
| Qode for **helth** | Qode for **Health** |
| **Dass** Projekt fand | **Das** Projekt fand |
| Seit 2020 **entstandenen** viele Tools | Seit 2020 **entstanden** viele Tools |
| **Wiisen**, das Sie | **Wissen**, das Sie |
| **Zusammnehängen** | **Zusammenhängen** |
| „Immer wenn ich die Bücher **lesen**" | „… **lese**" |
| allgemei**i**ne Medizin | allgeme**i**ne Medizin |
| von einem großflächig**em** BoosterGan | großflächig**en** |
| medizin**s**che Expertin | medizin**is**che Expertin |
| begleitet und **beratet Patientinenn**| begleitet und **berät Patientinnen** |
| **Gienowmthode** | **Gienowmethode** |

### Fingerapotheke (`src/inhalte/fingerapotheke.ts`)

| Live-Seite | Jetzt |
|---|---|
| „Die beschriebenen **Hilfe** … **funktioniert**" | „Die beschriebenen **Hilfen** … **funktionieren**" |
| meine Zähne **seinen** viel strahlender | meine Zähne **seien** viel strahlender |
| häufig **gestelle** Fragen | häufig **gestellte** Fragen |
| von innen heraus zu **untersützen** | zu **unterstützen** |
| „Wenn Beschwerden nicht wandeln" | „Wenn Beschwerden **sich** nicht wandeln" |
| erst einen **SelbstQ** | erst einen **SelfQ** (so heißt es überall sonst) |
| **könne** Sie Ihr Wohlbefinden | **können** Sie Ihr Wohlbefinden |

### BoosterGane (`src/inhalte/boostergane.ts`)

| Live-Seite | Jetzt |
|---|---|
| Schlaf Atmungs**stürung** | Schlaf Atmungs**störung** |
| Beispiel **GammEi** | Beispiel **GammaEi** |
| **farbintensiever** | **farbintensiver** |
| energetischer **usgleich** | energetischer **Ausgleich** |
| liebevoll**-gestalteteten** Box | liebevoll **gestalteten** Box |
| **Inspriationen** | **Inspirationen** |
| **Halte** Sie Ihren Organen | **Halten** Sie Ihren Organen |
| Mit **Boostergene** | Mit **BoosterGene** |
| „Beziehungen**.** Gesundheit" | „Beziehungen**,** Gesundheit" |
| „der äußere Ausdruck der wirkt" | „der äußere Ausdruck**,** der wirkt" |
| unter **sorgsamen** Druck | unter **sorgsamem** Druck |
| häufig **gestelle** Fragen | häufig **gestellte** Fragen |

### Zahlen auf der Startseite

Die Ziffernfolgen waren verrutscht:

| Live-Seite | Jetzt |
|---|---|
| 5.**0000**+ Tools | 5.**000**+ Tools |
| **350**+ Jahre Erfahrung | **35**+ Jahre (so nennt es auch die Über-uns-Seite) |
| 500.**0000**+ Anwendungen | 500.**000**+ Anwendungen |

Sie sind jetzt als Zahlen notiert und zählen beim Hereinscrollen hoch.

---

## 2. Widersprüche, die ich NICHT angefasst habe

Das sind keine Schreibfehler, sondern inhaltliche Entscheidungen — bitte
selbst festlegen:

- **„80+ Gienow-Bücher"** als Überschrift, aber **„60+ Bücher"** in der Liste
  direkt darüber (beides Über uns). Beide Zahlen stehen unverändert drin.
- **„35+ Jahre in einem Augenblick"**, aber im Untertitel **„von 1997 bis
  heute"** — das wären 28 Jahre. Für 35+ müsste dort etwa 1990 stehen.
- Der Fuß trägt **„© 2025 Company. All rights reserved"**, und die
  Fußzeilen-Spalte heißt **„Company"**. Offensichtlich Reste der
  Onepage-Vorlage. Ich habe keinen Firmennamen erfunden — sag mir, was dort
  stehen soll.

---

## 3. Weitere bewusste Abweichungen

### Verlinkung repariert

Auf der Live-Seite zeigen mehrere Links ins Leere oder auf `onepage.io`
(die Baukasten-Seite):

| Element | Live-Seite | Hier |
|---|---|---|
| Navigation „Über uns", „Kontakt" (Unterseiten) | `onepage.io` | `/ueber-uns`, `#kontakt` |
| „Zum BoosterGane Webshop" | `onepage.io` | `/boostergane` |
| „Zu BoosterGane in Form und Farbe" / „in Klang und Wort" | `onepage.io` | `/boostergane` |
| „Zur Fingerapotheke-App" (Über uns) | `onepage.io` | `/fingerapotheke` |
| „Zu den Büchern" | `onepage.io` | `tsoraat.world` |
| „Zur ganzen Geschichte" (Fingerapotheke) | zeigte auf sich selbst | `/ueber-uns` |
| „Zu BoosterGane" (Über uns) | zeigte auf sich selbst | `/boostergane` |

**Noch offen:** Der echte BoosterGane-Webshop und der Buch-Shop sind mir nicht
bekannt; ebenso fehlen Ziele für **Nutzungsbedingungen** und
**Datenschutzerklärung** (auf der Live-Seite ebenfalls ohne Ziel). Alles an
einer Stelle: `src/inhalte/gemeinsam.ts`, Block `LINKS`.

### Technisch

- **Vier getrennte Seiten**, kein Single-Page-Router — je eigenes Dokument und
  eigenes Bundle.
- **YouTube lädt erst auf Klick.** Vorher steht ein lokales Standbild: spart
  den Player beim Aufruf und verhindert, dass YouTube schon beim Seitenaufruf
  mitliest.
- **Das Logo ist ein JPEG mit weißem Grund** (so liegt es im CDN) und wird per
  `mix-blend-mode: multiply` eingebunden. Eine freigestellte PNG- oder
  SVG-Fassung wäre sauberer.
- **Bilder liegen lokal** unter `public/bilder/` (36 Dateien).
  `weitere-tapeten.png` ist mit 20 MB sehr groß und sollte vor dem Livegang
  verkleinert werden.
- **Endlosband:** Die Live-Seite dupliziert die Feedback-Karten dreimal im
  Markup; hier reicht die zweite Kopie für den nahtlosen Umlauf.

### Bewegung

Auf Wunsch stärker choreografiert als das Original, ohne das Layout zu
verändern: maskierte Wort-Reveals, Parallaxe, aufziehendes dunkles Panel,
Endlosband, gepinnte horizontale Passage bei „Tore der Gienowmethode",
Zähler bei den Kennzahlen.

`prefers-reduced-motion` schaltet die gesamte Choreografie ab und setzt jede
Szene direkt auf ihren Endzustand — Texte und Zahlen bleiben vollständig
sichtbar.

---

## 4. Noch nicht geprüft

Die **Sichtprüfung im Browser steht aus**: die Browser-Pane dieser Sitzung
kompositiert keine Frames, und die Chrome-Verbindung ist während der Arbeit
abgerissen. Geprüft und in Ordnung: Typprüfung, Produktions-Build, alle vier
Seiten laden ohne Konsolenfehler, alle Bildpfade antworten mit 200.
