import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* import.meta.dirname statt __dirname: Vite verwirft __dirname mit dem neuen
   nativen Config-Loader. */
const HIER = import.meta.dirname

/** Die drei Unterseiten. Die Startseite laeuft ueber index.html. */
const SEITEN = ['ueber-uns', 'fingerapotheke', 'boostergane']

export default defineConfig(({ command }) => ({
  plugins: [react()],

  /* Beim Bauen liegt die Seite unter github.io/<repo>/, im Entwicklungsserver
     dagegen an der Wurzel. BASE_PFAD ueberschreibt das fuer andere Ziele
     (eigene Domain, Vercel): dort genuegt BASE_PFAD=/ beim Build.

     Wichtig: Interne Pfade duerfen deshalb nirgends fest mit "/" beginnen —
     sie laufen alle ueber `pfad()` aus src/lib/pfad.ts. */
  base: command === 'build' ? (process.env.BASE_PFAD ?? '/gienow-web/') : '/',

  /* Vier echte Einstiegspunkte statt einer Single-Page-App: jede Seite ist ein
     eigenes Dokument mit eigenem Bundle.

     Die Unterseiten liegen als <name>/index.html vor, nicht als <name>.html.
     Damit beantwortet jeder statische Hoster — GitHub Pages eingeschlossen —
     den Aufruf von "/ueber-uns/" direkt, ohne Regel fuer saubere URLs. */
  build: {
    rollupOptions: {
      input: {
        start: `${HIER}/index.html`,
        ...Object.fromEntries(SEITEN.map((s) => [s, `${HIER}/${s}/index.html`])),
      },
    },
  },

  /* Fester Port: der Standard 5173 ist in diesem Ordner bereits von einem
     anderen Projekt belegt. strictPort statt Ausweichen, damit die Adresse
     verlaesslich bleibt und ein Konflikt sofort auffaellt. */
  server: {
    port: 5185,
    strictPort: true,
  },
}))
