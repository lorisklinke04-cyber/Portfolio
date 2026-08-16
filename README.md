# Portfolio — Loris Klinke

Eine Single-Page-Portfolio-Website. Auf **Desktop** scrollt man mit dem Mausrad durch die Projektbeschreibung und klickt, um zum nächsten Projekt zu springen. Auf **Mobile** wischt man zwischen den Projekten und tippt, um die Beschreibung ein-/auszublenden.

Oben links gibt es eine feste Navigation mit zwei Reitern: **„Loris Klinke“** und **„Work“**. Beide bleiben beim Scrollen/Wischen sichtbar. Wichtig — die Zuordnung ist bewusst "über Kreuz":

- Beim Aufrufen der Seite landet man direkt in der **Work**-Sektion (den vier Projekten). Der Reiter „Work“ ist dann aktiv markiert.
- Klickt man auf **„Loris Klinke“**, springt man zum Lebenslauf-/Kontakt-Abschnitt ganz unten.
- Klickt man von dort auf **„Work“**, springt man zurück zum ersten Projekt (Meridian), um die Arbeiten erneut durchzugehen.

Diese Zuordnung wurde bewusst so gewählt, damit die Reiter-Reihenfolge „Loris Klinke“ → „Work“ von links nach rechts erhalten bleibt, obwohl die Seite technisch in der Work-Sektion startet.

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

## Aufbau der Seite

Die Seite besteht aus zwei Arten von Abschnitten innerhalb von `#stage`:

1. **Werke** (`<section class="project work">`) — die vier Projekte Meridian, Fracture, Artifact, Assembly. Zähler oben rechts (`01 / 04`) und Progress-Rail rechts beziehen sich ausschließlich auf diese Abschnitte.
2. **Lebenslauf** (`<section class="project cv-section">`) — ein einzelner Abschnitt ganz am Ende, erreichbar über den Reiter „Work“ oder (auf Mobile) einfach durch Weiterscrollen nach dem letzten Projekt. Zählt nicht zu den vier Werken, hat also keine eigene Nummer im Zähler.

## Bilder austauschen

Einfach eine Datei im `images/`-Ordner mit gleichem Namen ersetzen — oder im `style`-Attribut des jeweiligen `.media`-Divs (Vorschaubild) bzw. `.carousel-slide`-Divs (Karussel-Bild) einen neuen Dateinamen eintragen.

## Texte anpassen

Jedes Werk ist ein `<section class="project work">`-Block. Darin befindet sich ein `.info`-Bereich mit:

- `<span class="tag">` — Kategorie/Jahr, z. B. `Photography — 2024`
- `<h2>` — Projekttitel
- `<p>` — Beschreibung

## Projekte hinzufügen oder entfernen

Einen kompletten `<section class="project work">`-Block kopieren oder löschen. **Wichtig:** die Klasse `work` muss erhalten bleiben, sonst wird das Projekt nicht mitgezählt und taucht nicht im Klick-/Scroll-Zyklus der Werke auf. Zähler (`01 / 04` usw.) und der Progress-Rail rechts aktualisieren sich automatisch über JavaScript — daran muss nichts von Hand angepasst werden. Der Lebenslauf-Abschnitt bleibt davon unberührt, da er keine `work`-Klasse trägt.

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

## Lebenslauf-Abschnitt anpassen

Der komplette Inhalt steht am Ende von `index.html` im Block `<section class="project cv-section">`. Er gliedert sich wie im Original-PDF:

- **Kopfbereich** (`.cv-header`): Name, Rolle/Titel und Kontaktdaten (Mobile, Instagram, E-Mail, Website — jeweils als echte, klickbare Links: `tel:`, `mailto:`, externe URLs).
- **Personal** (`.cv-personal`): Fließtext-Absatz.
- **Experience** (`.cv-experience`): Liste von Stationen, jeweils mit Zeitraum, Titel und Beschreibung.
- **Education / Skills / Languages**: drei weitere Spalten darunter.

Um eine Station hinzuzufügen oder zu ändern, ein `<li>` im jeweiligen `.cv-list`-Block kopieren/anpassen:

```html
<li>
  <span class="cv-item-date">Monat Jahr – Monat Jahr</span>
  <div class="cv-item-body">
    <span class="cv-item-title">Titel der Station</span>
    <span class="cv-item-desc">Beschreibung</span>
  </div>
</li>
```

Skills sind einzelne `<li>`-Einträge in `.cv-tags` (werden automatisch als Pills dargestellt), Sprachen folgen dem gleichen einfachen Muster wie im bestehenden Code (`.cv-list-plain`).

Der Abschnitt ist **intern scrollbar** (`.cv-scroll`), falls der Inhalt nicht auf einen Bildschirm passt — das ist bei einem Lebenslauf mit mehr Stationen zu erwarten und braucht keine Anpassung.

## Design-Variablen

Farben und Schrift lassen sich zentral über die CSS-Variablen im `:root`-Block oben in `index.html` anpassen:

```css
:root {
  --bg: #0a0a0a;         /* Hintergrundfarbe */
  --ink: #f2f2ef;        /* Textfarbe */
  --accent: #6b6bff;     /* Akzentfarbe (Progress-Rail, aktiver Reiter, Fokus-Rahmen) */
  --display-font: 'Roboto Mono', monospace;
  --body-font: 'Roboto Mono', monospace;
}
```

## Navigation im Detail

- **„Loris Klinke“** springt zum Lebenslauf-/Kontakt-Abschnitt.
- **„Work“** springt zurück zum ersten Werk (Meridian) — Standard-Ansicht beim Laden der Seite.
- Der aktive Reiter wird durch einen dünnen Unterstrich in der Akzentfarbe hervorgehoben. Das entspricht immer dem Abschnitt, in dem man sich gerade befindet — nicht der Aktion des Buttons.
- Auf Mobile scrollt ein Klick auf einen Reiter sanft zum jeweiligen Abschnitt (`scrollIntoView`); auf Desktop wird direkt umgeschaltet.
- Solange der Lebenslauf aktiv ist, sind Mausrad-Wechsel, Klick-Weiterschalten und Pfeiltasten zwischen den Werken deaktiviert, damit man ganz normal im Lebenslauf scrollen und auf Links klicken kann.
- Im JavaScript ist dieser bewusste "Über-Kreuz"-Zusammenhang im Abschnitt `// ---------- GLOBAL NAV ----------` kommentiert, falls das Verhalten später nochmal angepasst werden soll.

## Deployment über GitHub Pages

1. Repository mit `index.html` und dem `images/`-Ordner auf GitHub pushen.
2. Unter **Settings → Pages** als Quelle den Branch (z. B. `main`) und Root-Ordner (`/`) auswählen.
3. Die Seite ist danach unter `https://<username>.github.io/<repo-name>/` erreichbar.

## Browser-Hinweise

- Respektiert `prefers-reduced-motion` (reduzierte Animationen für Nutzer, die das in ihrem System eingestellt haben).
- Tastatursteuerung auf Desktop: Pfeiltasten (`←` `→` `↑` `↓`) wechseln zwischen den Werken (nicht aktiv, solange der Lebenslauf angezeigt wird).
- Karussel- und Nav-Buttons haben sichtbaren Fokus-Rahmen (Tastatur-Zugänglichkeit).
