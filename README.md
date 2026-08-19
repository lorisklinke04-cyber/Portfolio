# Portfolio — Loris Klinke

Eine Single-Page-Portfolio-Website. Auf **Desktop** scrollt man mit dem Mausrad, um das Projektbild zu verzerren und die Beschreibung einzublenden; ein Klick entzerrt es wieder zurück, ein weiterer Klick auf die obere/untere Bildschirmhälfte springt zum vorherigen/nächsten Projekt. Auf **Mobile** wischt man zwischen den Projekten und tippt, um die Beschreibung ein-/auszublenden.

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

1. **Werke** (`<section class="project work">`) — die vier Projekte Meridian, Fracture, Artifact, Assembly. Jedes zeigt zunächst nur das Vorschaubild. Beim Scrollen (Desktop) bzw. Antippen (Mobile) fährt von unten ein schwarzes **Detail-Panel** hoch, das die Projektinfos zeigt — währenddessen wird das Bild darüber sichtbar zusammengestaucht, bis bei voll geöffnetem Panel nur noch der schwarze Bereich zu sehen ist (angelehnt an veryes.co). Navigiert wird ganz ohne sichtbare Buttons: ein Klick entzerrt das Bild wieder zurück, ein weiterer Klick auf die obere/untere Bildschirmhälfte springt zum vorherigen/nächsten Projekt.
2. **Lebenslauf** (`<section class="project cv-section">`) — ein einzelner Abschnitt ganz am Ende, erreichbar über den Reiter „Loris Klinke“ oder (auf Mobile) einfach durch Weiterscrollen nach dem letzten Projekt.

## Bilder austauschen

Einfach eine Datei im `images/`-Ordner mit gleichem Namen ersetzen — oder im `style`-Attribut des jeweiligen `.media`-Divs (Vorschaubild) bzw. `.carousel-slide`-Divs (Karussel-Bild) einen neuen Dateinamen eintragen.

## Texte anpassen

Jedes Werk ist ein `<section class="project work">`-Block. Die Texte liegen im `.info`-Bereich innerhalb des schwarzen Detail-Panels, aufgeteilt in zwei Teile:

- `.info-head`: `<span class="tag">` (Kategorie/Jahr, z. B. `Photography — 2024`) und `<h2>` (Projekttitel)
- `.info-body`: `<p>` (Beschreibung) und optional das Karussel

Die Platzhaltertexte (Lorem Ipsum) sind aktuell bewusst länger als am Anfang (~5x), damit sich das Zusammenstauchen des Bildes und das interne Scrollen im Panel realistisch testen lassen. Beim Eintragen der echten Texte einfach den `<p>`-Inhalt ersetzen — kürzer oder länger ist beides problemlos möglich, das Panel scrollt bei Bedarf automatisch.

## Projekte hinzufügen oder entfernen

Einen kompletten `<section class="project work">`-Block kopieren oder löschen. **Wichtig:** die Klasse `work` muss erhalten bleiben, sonst taucht das Projekt nicht im Klick-/Wisch-Zyklus der Werke auf. Der Lebenslauf-Abschnitt bleibt davon unberührt, da er keine `work`-Klasse trägt. Es müssen keine Navigations-Buttons gepflegt werden — Vor/Zurück läuft komplett über Klickzonen, Pfeiltasten und Wischen (siehe unten).

## Bildkarussel pro Projekt (optional)

Aktuell hat nur **Meridian** ein Karussel — als Muster für weitere Projekte. Um es bei einem anderen Projekt zu ergänzen, folgenden Block innerhalb von `.info-body`, direkt nach dem `<p>`, einfügen:

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

## Detail-Panel & Bild-Effekt (angelehnt an veryes.co)

Auf **Desktop** ist der Effekt direkt an die Scrollbewegung gekoppelt:

- **Runterscrollen** öffnet das schwarze Panel (`.detail-panel`) Stück für Stück von unten und staucht dabei das Vorschaubild (`.media`) gleichzeitig zusammen (`transform: scaleY(...)`, Ankerpunkt oben) — genau im Tempo der Scrollbewegung, ohne Verzögerung.
- **Hochscrollen** macht das wieder rückgängig: Panel schließt sich, Bild entzerrt sich zurück in seine Originalform.
- Scrollt man ganz durch, wird das Panel **bildschirmfüllend** und das Bild ist komplett verschwunden (nur noch der schwarze Bereich mit dem Text ist zu sehen).
- Ist das Panel voll geöffnet, übernimmt es das Scrollen selbst (falls der Text länger ist als der Platz im Panel).

Technisch läuft das über einen Fortschrittswert `revealProgress` (0 bis 1) im JavaScript, der bei jedem Mausrad-Event verändert und direkt als Inline-Style auf `.media`, `.detail-panel` und `.scrim` angewendet wird (Funktion `applyProgress()`). Zwei Werte steuern die Intensität:

```js
const SCROLL_RANGE = 650; // Pixel Scroll-Delta, bis das Panel voll offen ist — höher = man muss weiter scrollen
const SQUEEZE_MIN = 0;    // Bild-Skalierung (scaleY) bei voll geöffnetem Panel — 0 = Bild komplett verschwunden
```

Beide Konstanten stehen direkt am Anfang des `<script>`-Blocks in `index.html` und lassen sich dort anpassen. `SQUEEZE_MIN` auf z. B. `0.1` setzen, falls ein kleiner Bildrest sichtbar bleiben soll statt komplett zu verschwinden.

**Auf Mobile** bleibt es beim einfachen Antippen: ein Tap öffnet/schließt das Panel komplett (kein kontinuierliches Scrollen, da Touch-Scrollen für das Wischen zwischen Projekten gebraucht wird) — dafür sorgt die CSS-Klasse `.revealed` mit den entsprechenden `@media (max-width: 768px)`-Werten, die auf denselben "bildschirmfüllend"-Zustand gesetzt sind.

### Navigation im Projekt: Klick entzerrt, Klick auf oben/unten wechselt

Es gibt **keine sichtbaren Buttons** mehr im Panel — die Navigation läuft komplett über Klicks, Tastatur und Wischen:

- **Desktop, Bild ist (auch nur teilweise) verzerrt:** Ein Klick irgendwo auf den Bildschirm entzerrt das Bild sanft zurück in die Ausgangsposition — das Panel schließt sich wieder.
- **Desktop, Bild ist in der Ausgangsposition (unverzerrt, `revealProgress` = 0):** Ein Klick auf die **obere Bildschirmhälfte** springt zum vorherigen Projekt, ein Klick auf die **untere Hälfte** zum nächsten.
- **Desktop, jederzeit:** Pfeiltasten `←`/`→` bzw. `↑`/`↓` springen zum vorherigen/nächsten Projekt, auch bei offenem Panel.
- **Mobile:** Wischen nach oben/unten zwischen den Projekten funktioniert jederzeit, unabhängig davon, ob das Panel gerade offen ist. Antippen öffnet/schließt das Panel wie gehabt.

### Übergangs-Animation zwischen zwei Projekten (Desktop)

Der Wechsel zwischen zwei Werken ist ein **smoothes, zügiges Wischen** statt einer reinen Überblendung: Das neue Bild schiebt sich rein, während das alte in dieselbe Richtung rausgeschoben wird (`next` = von unten nach oben, `prev` = von oben nach unten). Das steuert die Funktion `slideTo()` im JavaScript, indem sie kurzzeitig beide Sektionen gleichzeitig sichtbar macht und ihnen ein `transform: translateY(...)` gibt, das per CSS-Transition auf `.project` (`0.42s`) animiert:

```css
.project {
  transition: transform 0.42s cubic-bezier(0.65,0,0.35,1), opacity 0.3s ease;
}
```

Kleinerer Wert = noch schnelleres Durchswitchen; der zugehörige `setTimeout` in `slideTo()` (aktuell `450`ms) sollte dabei ungefähr zur CSS-Dauer passen, damit die Aufräum-Logik nicht zu früh greift.

Ausgelöst wird das Wischen von: den Klickzonen oben/unten und den Pfeiltasten. Der Sprung zurück zum ersten Projekt über den „Work“-Reiter bleibt bewusst eine einfache Überblendung ohne Richtung, da er kein Nachbar-Projekt ist, sondern ein Rücksprung zum Anfang.

Auf **Mobile** übernimmt weiterhin die native Wisch-/Scroll-Snap-Bewegung des Browsers die Animation zwischen den Projekten — dort ist `slideTo()` nicht aktiv.

Farben und Schrift lassen sich zentral über die CSS-Variablen im `:root`-Block oben in `index.html` anpassen:

```css
:root {
  --bg: #0a0a0a;         /* Hintergrundfarbe */
  --ink: #f2f2ef;        /* Textfarbe */
  --accent: #6b6bff;     /* Akzentfarbe (aktiver Reiter, Fokus-Rahmen) */
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
