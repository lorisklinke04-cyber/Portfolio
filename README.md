# Portfolio-Website

Roher, brutalistischer Berlin-Stil (statisches HTML/CSS/JS) — Schwarz/Weiß, harte Kanten,
dicke Linien, eine Signalfarbe, Inter als einzige Schrift. Läuft ohne Build-Prozess, direkt
über GitHub Pages hostbar.

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

Farben kannst du oben in `style.css` unter `:root` zentral anpassen — `--accent` ist die
Signalfarbe (aktuell Rot-Orange `#FF3600`), `--ink` das Schwarz, `--bg` das Weiß.

### Projektbilder ergänzen

Die Projektliste ist bewusst als reine Text-Tabelle gebaut (typisch brutalistisch). Wenn du
Bilder pro Projekt zeigen willst, füge in `.project-row` z. B. ein `<img>` hinzu und style es
in `style.css` ohne `border-radius` und ohne `box-shadow` (blur), damit der rohe Look erhalten
bleibt — allenfalls ein harter, unversetzer Rahmen (`border: 2px solid var(--ink)`).

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
