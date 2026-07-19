# Portfolio-Website

Minimalistische, helle Portfolio-Seite (statisches HTML/CSS/JS) — inspiriert vom Editorial-Stil
von timtijink.com. Läuft ohne Build-Prozess, direkt über GitHub Pages hostbar.

## Dateien

- `index.html` — Struktur & Inhalte
- `style.css` — Design (Farben, Typografie, Layout)
- `script.js` — Cursor-Vorschau-Effekt bei den Projekten

## Inhalte anpassen

Öffne `index.html` und ersetze:

- **„Dein Name“** (Logo, Titel, Footer) → deinen Namen
- **Hero-Text** → deine eigene Kurzvorstellung
- **Projekt Eins–Fünf** → deine echten Projekte (Titel, Jahr, Kategorie, Beschreibung)
- **Info-Bio & Leistungen/Tools** → deine Skills
- **E-Mail & Social-Links** (`mailto:`, Instagram/LinkedIn/Behance) → deine echten Links

Farben & Schriften kannst du oben in `style.css` unter `:root` zentral anpassen (z. B. `--accent`
für die Akzentfarbe).

### Echte Projektbilder statt Farbverlauf

Aktuell zeigt die Cursor-Vorschau bei den Projekten einen generierten Farbverlauf als Platzhalter.
Sobald du Bilder hast:

1. Bilder in einen Ordner `images/` legen (z. B. `images/projekt-1.jpg`).
2. In `script.js` in der Funktion beim `mouseenter` statt `peek.style.background = ...` schreiben:
   ```js
   peek.style.backgroundImage = `url('images/projekt-${hue}.jpg')`;
   peek.style.backgroundSize = 'cover';
   ```

## Lokal ansehen

Einfach `index.html` im Browser öffnen — kein Server nötig.

## Auf GitHub Pages veröffentlichen

1. Neues Repository auf GitHub erstellen (z. B. `portfolio`).
2. Diese drei Dateien (`index.html`, `style.css`, `script.js`) ins Repository hochladen
   (per Drag & Drop im Browser oder per `git push`).
3. Im Repository: **Settings → Pages**.
4. Unter „Build and deployment“ → Source: **Deploy from a branch** wählen.
5. Branch: `main`, Ordner: `/ (root)` → **Save**.
6. Nach ca. 1 Minute ist die Seite live unter:
   `https://<dein-github-username>.github.io/<repository-name>/`

### Per Git-Kommandozeile hochladen

```bash
git init
git add .
git commit -m "Portfolio-Website"
git branch -M main
git remote add origin https://github.com/<dein-username>/portfolio.git
git push -u origin main
```
