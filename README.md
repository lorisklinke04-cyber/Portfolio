# Portfolio — Loris Klinke

Minimalistisches Portfolio im Stil von [veryes.co](https://www.veryes.co): ein Projekt pro Vollbild-Ansicht, Klick/Swipe wechselt das Projekt, Scrollen bzw. Tippen zeigt den Text dazu.

## Live schalten mit GitHub Pages (kostenlos, kein Server nötig)

1. Neues Repository auf GitHub anlegen (z. B. `portfolio`).
2. `index.html` in das Repository hochladen (per Drag & Drop im Browser oder via Git).
3. Im Repo: **Settings → Pages → Source** auf `main` / Branch `/ (root)` stellen und speichern.
4. Nach ca. 1 Minute ist die Seite unter `https://<dein-github-name>.github.io/portfolio/` erreichbar.

## Eigene Inhalte einsetzen

Alles Nötige steht als Kommentar oben in `index.html`, kurz zusammengefasst:

- **Bilder:** In jedem `.media`-Block `background-color` durch dein Bild ersetzen:
  ```css
  background-image: url('bilder/projekt1.jpg');
  background-size: cover;
  background-position: center;
  ```
  Am besten einen Ordner `bilder/` im Repo anlegen und dort die Fotos ablegen.
- **Texte:** In jedem `<section class="project">` den `<span class="tag">`, `<h2>` (Titel) und `<p>` (Beschreibung) austauschen.
- **Weitere Projekte:** Einen kompletten `<section class="project">`-Block kopieren und einfügen. Zähler (z. B. „02 / 04") und der Progress-Rail rechts aktualisieren sich automatisch über das JavaScript am Ende der Datei — nichts von Hand anpassen.

## Verhalten

| | Desktop | Mobile |
|---|---|---|
| Nächstes Projekt | Klick irgendwo im Bild | Hoch-/Runterswipen (Scroll-Snap) |
| Text anzeigen | Mit dem Mausrad scrollen | Aufs Bild tippen |
| Zusätzlich | Pfeiltasten ↑ ↓ ← → | — |

## Eigene Domain (optional)

Falls du später eine eigene Domain (z. B. `lorisklinke.de`) nutzen willst: in GitHub Pages unter Settings → Pages ein `CNAME` eintragen und beim Domain-Anbieter einen CNAME-Eintrag auf `<dein-github-name>.github.io` setzen.
