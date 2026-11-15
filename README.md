# AutoFinder – Progressive Web App

Installierbare PWA-Version des bestehenden 19-Fahrzeuge-Atlas. Die bisherigen Fahrzeugdaten, Galerien, Swipe-Favoriten, Statistiken und der Dreier-Direktvergleich sind in `index.html` vollständig enthalten.

## Veröffentlichung

1. Den **Inhalt dieses Ordners** (nicht nur `index.html`) in den Stamm eines GitHub-Pages- oder Cloudflare-Pages-Projekts hochladen.
2. Die veröffentlichte HTTPS-Adresse auf dem Smartphone in Safari (iPhone) oder Chrome (Android) öffnen.
3. Oben in der App auf **↓ App** tippen. Auf iOS erklärt der Dialog die manuellen Schritte über **Teilen → Zum Home-Bildschirm**.

Die Datei allein lokal zu öffnen (`file://`) ist **nicht installierbar**, weil Manifest, Service Worker und sicherer Ursprung für eine PWA eine HTTPS-Seite (oder localhost für Entwicklung) benötigen.

## Offline-Verhalten

Nach dem ersten erfolgreichen Laden und der Service-Worker-Installation funktionieren App-Oberfläche, Texte, Fahrzeugdaten, Swipe-Entscheidungen und Vergleiche offline. **Fahrzeugbilder liegen auf externen Webseiten und können offline fehlen**. Links zu Quellen benötigen Internet.

## Daten und Übertragung

Favoriten werden lokal im Browser in `localStorage` gespeichert, nicht auf einem Server. Bei einer neuen Domain oder einem anderen Gerät werden bestehende Favoriten **nicht automatisch übertragen**. Bei Browserdaten-Löschung können sie verloren gehen. Die einmalige Installation synchronisiert weder die alte lokale HTML-Datei noch andere Geräte.

## Aktualisierung

`sw.js` nutzt versioniertes Shell-Caching und einen Online-first-Ansatz für Navigationen. Beim Veröffentlichen einer neuen Version den Cache-Namen in `sw.js` anpassen und alle Dateien hochladen; besuchte Geräte aktualisieren die App bei erneuter Online-Nutzung. Die lokal gespeicherten Favoriten bleiben auf derselben Domain erhalten.

## Lokaler Test

`python3 -m http.server 8000` im Ordner starten und `http://localhost:8000` öffnen. Für Smartphone-Tests muss die Seite über HTTPS gehostet werden.

## Bestand

- 19 Fahrzeugprofile; Motorisierung PHEV, Range-Extender oder Mildhybrid getrennt bezeichnet
- Swipe-Studio mit Favoriten/Nein/Vielleicht
- Galerien mit Hero-, Innenraum- und Kofferraumbildern (extern geladen)
- Kennzahlenvergleich aller Fahrzeuge mit Checkboxen
- Originaler Dreier-Direktvergleich
- Fahrprofil und Quellenübersicht