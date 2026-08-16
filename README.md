# Portfolio — Loris Klinke

Eine Single-Page-Portfolio-Website. Auf **Desktop** scrollt man mit dem Mausrad durch die Projektbeschreibung und klickt, um zum nächsten Projekt zu springen. Auf **Mobile** wischt man zwischen den Projekten und tippt, um die Beschreibung ein-/auszublenden.

## Struktur

```
.
├── index.html          ← die gesamte Seite (HTML, CSS und JS in einer Datei)
└── images/
    ├── Insta-Slide-1.png   ← Vorschaubild "Meridian" (Hintergrund)
    ├── Insta-Slide-7.png   ← Karussel-Bild "Meridian"
    ├── Insta-Slide-4.png   ← Karussel-Bild "Meridian"
    ├── project-2.jpg       ← Vorschaubild "Fracture"
    ├── project-3.jpg       ← Vorschaubild "Artifact"
    └── project-4.jpg       ← Vorschaubild "Assembly"
```

Es gibt keinen Build-Prozess. `index.html` kann direkt im Browser geöffnet oder unverändert z. B. über **GitHub Pages** gehostet werden.

## Bilder austauschen

Einfach eine Datei im `images/`-Ordner mit gleichem Namen ersetzen — oder im `style`-Attribut des jeweiligen `.media`-Divs (Vorschaubild) bzw. `.carousel-slide`-Divs (Karussel-Bild) einen neuen Dateinamen eintragen.

## Texte anpassen

Jedes Projekt ist ein `<section class="project">`-Block. Darin befindet sich ein `.info`-Bereich mit:

- `<span class="tag">` — Kategorie/Jahr, z. B. `Photography — 2024`
- `<h2>` — Projekttitel
- `<p>` — Beschreibung

## Projekte hinzufügen oder entfernen

Einen kompletten `<section class="project">`-Block kopieren oder löschen. Zähler (`01 / 04` usw.) und der Progress-Rail rechts aktualisieren sich automatisch über JavaScript — daran muss nichts von Hand angepasst werden.

## Bildkarussel pro Projekt (optional)

Aktuell hat nur **Meridian** ein Karussel — als Muster für weitere Projekte. Um es bei einem anderen Projekt zu ergänzen, folgenden Block innerhalb von `.info`, direkt nach dem `<p>`, einfügen:

```html
<div class="carousel">
  <div class="carousel-track">
    <div class="carousel-slide" style="background-image: url('images/dein-bild-1.png')"></div>
    <div class="carousel-slide" style="background-image: url('images/dein-bild-2.png')"></div>
  </div>
  <button class="carousel-btn carousel-prev" aria-label="Vorheriges Bild">‹</button>
  <button class="carousel-btn carousel-next" aria-label="Nächstes Bild">›</button>
  <div class="carousel-dots">
    <span class="dot active"></span>
    <span class="dot"></span>
  </div>
</div>
```

Wichtig:

- Für jedes Bild ein `.carousel-slide` **und** ein `.dot` — die Anzahl muss übereinstimmen.
- Nur der **erste** `.dot` bekommt die Klasse `active`.
- Pfeile, Punkte, Swipe-Steuerung (Mobile) und die Einblend-Animation funktionieren automatisch über die bestehende `initCarousel()`-Funktion im JavaScript — dort muss nichts angepasst werden.
- Projekte ohne `.carousel`-Block funktionieren weiterhin genau wie bisher, ganz ohne Karussel.

## Design-Variablen

Farben und Schrift lassen sich zentral über die CSS-Variablen im `:root`-Block oben in `index.html` anpassen:

```css
:root {
  --bg: #0a0a0a;         /* Hintergrundfarbe */
  --ink: #f2f2ef;        /* Textfarbe */
  --accent: #6b6bff;     /* Akzentfarbe (Progress-Rail, Fokus-Rahmen) */
  --display-font: 'Roboto Mono', monospace;
  --body-font: 'Roboto Mono', monospace;
}
```

## Deployment über GitHub Pages

1. Repository mit `index.html` und dem `images/`-Ordner auf GitHub pushen.
2. Unter **Settings → Pages** als Quelle den Branch (z. B. `main`) und Root-Ordner (`/`) auswählen.
3. Die Seite ist danach unter `https://<username>.github.io/<repo-name>/` erreichbar.

## Browser-Hinweise

- Respektiert `prefers-reduced-motion` (reduzierte Animationen für Nutzer, die das in ihrem System eingestellt haben).
- Tastatursteuerung auf Desktop: Pfeiltasten (`←` `→` `↑` `↓`) wechseln zwischen Projekten.
- Karussel-Buttons haben sichtbaren Fokus-Rahmen (Tastatur-Zugänglichkeit).
