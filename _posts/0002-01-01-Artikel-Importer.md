---
layout: post
title: Artikel Importer
tags: multichannel
permalink: /multichannel/:title
---


+ Hier wird eine Inhaltsangabe erstellt
{:toc}


Über den Artikelimporter können Artikel über eine CSV Datei in den Katalog eingespeist werden. Bevor eine Datei hochgeladen werden kann, muss ein Importprofil angelegt werden.


-----


## CSV Format


Die zu importierende CSV-Datei sollte als Feldtrenner Tabs haben. Als Hauptschlüssel sollte Artikelnummer oder EAN gewählt werden.


-----


## Importprofil anlegen


1. Unter Multichannel > Artikelimportprofile auf NEU klicken
2. Titel eingeben und speichern.
3. Feldtrenner auswählen. (Tabs)
4. Als Artikelhauptschlüssel Artikelnummer oder EAN auswählen
5. Als Variantengruppenfeld Variantennummer auswählen
6. Als Artikelselektor “Artikelnummer Selektor” oder “EAN Selektor” auswählen
7. Sortierung “Keine” auswählen
8. Sprache ihres Importprofils auswählen


Um die Funktionalität von Kategorien und Attributen nutzen zu können, ist es nötig einige der Post Prozess Plugins auszuwählen, darunter Kategoriesystem und Attributsystem. 


Zu importierende Datei hochladen, um daraus die Profilfelder zu generieren. 


### Profilfeldeditor


Wenn eine Datei hochgeladen wurde, können nun die Felder den Variablen zugewiesen werden. Andernfalls manuell neue Zeilen hinzufügen und Artikelfelder mit Dateifeldern verknüpfen.


Mögliche Felder sind:


|-----------------+------------+----------------|
| Artikelnummer | Pflichtfeld | ID des Artikels |
|-----------------+------------+----------------|
| Variantennummer | Pflichtfeld, wenn Varianten vorhanden sind | muss der Artikelnummer des Vaters entsprechen |
|-----------------+------------+----------------|
| EAN | freiwillig | European Article Number |
|-----------------+------------+----------------|
| Artikelname | Pflichtfeld | Name des Artikels |
|-----------------+------------+----------------|
| Kurzbeschreibung | freiwillig | Zeichenbegrenzter Beschreibungstext |
|-----------------+------------+----------------|
| Artikelpreis | Pflichtfeld | Format in der Form 23,99 |
|-----------------+------------+----------------|
| Hersteller | freiwillig | Angabe des Herstellers |
|-----------------+------------+----------------|
| UVP | freiwillig | nötig für Rabatte, hier Originalpreis eingeben, im Feld Artikelpreis den reduzierten Preis eingeben |
|-----------------+------------+----------------|
| Thumbnail | freiwillig | kann aus 1. Artikelbild generiert werden |
|-----------------+------------+----------------|
| Bild1-12 | freiwillig | Entweder Name des Bildes oder Bild-URL angeben |
|-----------------+------------+----------------|
| Kann gesucht werden | freiwillig | wird in der Shopsuche angezeigt, Standard 1 |
|-----------------+------------+----------------|
| Lagerbestand | freiwillig | Anzahl des Lagerbestands, Standard -1 |
|-----------------+------------+----------------|
| Lieferstatus | freiwillig | wie wird mit dem Artikel umgegangen, wenn der Bestand 0 ist |
|-----------------+------------+----------------|
| Info falls Artikel auf Lager | freiwillig | Text, der angezeigt wird, wenn der Artikel auf Lager ist |
|-----------------+------------+----------------|
| Info falls Artikel nicht auf Lager | freiwillig | Text, der angezeigt wird, wenn der Artikel nicht auf Lager ist |
|-----------------+------------+----------------|
| Variantentitel | Pflichtfeld, wenn Varianten gewählt wurden | Überschrift der Varianten in der Form z. B. \` Größe|Farbe \` |
|-----------------+------------+----------------|
| Varianten Option 1-6 | Pflichtfeld, wenn Varianten gewählt wurden | Variantenwerte |
|-----------------+------------+----------------|
| Gewicht | freiwillig | zur Berechnung von Versandkosten |
|-----------------+------------+----------------|
| Länge | freiwillig | zur Berechnung von Versandkosten |
|-----------------+------------+----------------|
| Breite | freiwillig | zur Berechnung von Versandkosten |
|-----------------+------------+----------------|
| Höhe | freiwillig | zur Berechnung von Versandkosten |
|-----------------+------------+----------------|
| Hersteller Artikelnummer | freiwillig | für interne Logistik bei Nachbestellungen |
|-----------------+------------+----------------|
| Langbeschreibung | freiwillig | ausführliche Beschreibung mit HTML |
|-----------------+------------+----------------|
| Erstellungsdatum | freiwillig | wenn nicht angegeben, wird aktuelles Datum gewählt |
|-----------------+------------+----------------|
| Spezielle MwST | freiwillig | Angabe einer speziellen Mehrwertsteuer |
|-----------------+------------+----------------|
| Minimale Lieferzeit | freiwillig | |
|-----------------+------------+----------------|
| Maximale Lieferzeit | freiwillig | |
|-----------------+------------+----------------|
| Lieferzeiteinheit | freiwillig | z.B. DAY |
|-----------------+------------+----------------|
| Kategorie | Pflicht, wenn Kategorien ausgewählt wurde | Angabe der Kategorie |
|-----------------+------------+----------------|


### Bilder


Bei Bildern kann entweder nur der Dateiname des Bildes angegeben werden, das dann auf dem Server gesucht wird oder die komplette Bild-URL. Hierbei muss im Profilfeldeditor als Modifizierer Zuweisung des Dateinamens ausgewählt werden. Vor Ausführen des Imports muss dann einmal auf die Wolke geklickt werden, um die Bilddateien herunterzuladen.


-----




## Importdatei Hochladen


1. Unter Multichannel > Artikelimporter auf “Importdatei hochladen” klicken.
2. Datei auswählen und speichern
3. Der Datei ein Artikelimportprofil zuweisen
4. Gegebenenfalls “Nur aktualisieren” auswählen
5. Gegebenenfalls “Bilder importieren” auswählen
6. Unter Optionen Ausführen. Außerdem können hier Bilder heruntergeladen und die Datei gelöscht werden.
