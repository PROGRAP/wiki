---
layout: post
title: Content Management System
tags: gestaltung
permalink: /gestaltung/:title
---


+ Hier wird eine Inhaltsangabe erstellt
{:toc}


## Vorwort


Ein ansprechendes Design ist mit dem Content Management System realisierbar. Responsive Design und Content ermöglichen eine optimale Internetpräsenz auf allen Geräten. Eine klare Benutzerführung, professionelle Bilder sowie ansprechende Inhalte komplettieren das CMS-Gerüst und versprechen ein angenehmes Einkaufserlebnis.


![CMSPosition][1]


## Einrichtung


1. Klicken auf “Neu”
2. Titel eingeben (öffentlich sichtbar)
3. Editor per Dropdown auswählen (BlockGrid oder Texteditor)
4. Speichern


BlockGrid
![BlockGrid][2] 


Texteditor
![TextEditor][3]


## Eigenschaften 


### Titel


wird im Frontend angezeigt


### Ist aktiviert


wenn aktiv, kann der Beitrag im Shop gesehen werden


### Objektidentifikator


Wird generiert und ist einmalig, nur relevant bei Snippets. Gibt die Zugehörigkeit innerhalb des CMS an, also wo es dargestellt wird.


### Typ


gibt an, welchen Zweck und welche Eigenschaften die CMS-Seite hat


- Snippet: Content-Abschnitte, die zum Beispiel in Kategorien oder im Artikeleditor zugeordnet werden können.
- Oberer Menüeintrag: Die Seite wird neben den Kategorien im Header-Menü angelegt.
- Kategorie: Die Seite kann Kategorien als oberes oder unteres CMS zugewiesen werden 
- Seite: Singuläre Seiten, für die kein Menüeintrag erstellt wird.
- Beitrag: Erscheint im Blog.
- Trackingcode: Mit JavaScript oder HTML können manuelle Codes eingetragen werden.
- Manuell: Muss manuell zugeordnet werden
- Lexikoneintrag: Lexika sind hervorragend, um dem Kunden Informationen geordnet zu vermitteln. 
- Email: Hier können Kunden- E-Mails editiert werden.
- Video: Hier kann ein Video eingefügt werden.




### Sortierungsnummer


Bestimmt die Reihenfolge, in welcher CMS-Seiten dargestellt werden


### Vorlage


Alle gespeicherten Vorlagen können hier ausgewählt werden. Diese erscheint dann im Editor


### Layout


Es stehen verschiedene Layouts zur Verfügung.
        
-LandingPage.tpl
-base.tpl
-footer.tpl
-header.tpl
-page.tpl
-popup.tpl
-post.tpl
-sidebar.tpl


### Feste Grid Breite


Wenn diese Option aktiv ist, passt sich der Shop nicht der individuellen Größe des Endgerätes an. So hätte jedes Smartphone dieselbe Content-Größe, wodurch weiße Ränder entstehen können.


### Titel ausblenden 


Titel wird im Frontend nicht angezeigt


## Editoren


- Der Inhalt wird im Editor gestaltet (BlockGrid oder Texteditor)


### BlockGrid


* optische Verhältnisse leicht einzuschätzen
* Blöcke die mit der Maus verschoben werden Können
* Sections zum Individuellen anpassen bestimmt der Bereiche der CMS-
* so können via CSS weitere Einstellungen vorgenommen werden
* empfohlen bei geringen/keinen technischen Kenntnissen


Funktionen auf der rechten Seite:


- 15 Zeilen hinzufügen oder entfernen
![15Zeilen][4]


- Blöcke hinzufügen und per drag&drop bewegen, Größe durch ziehen anpassen
![BloeckePlatzieren][5]


- individuelle Gestaltungsmöglichkeiten für verschiedene Endgeräte (Leiste über dem Editor)


### TextEditor


- Funktionen über dem Editor-Bereich
- gängige Funktionen aus textbearbeitungsprogrammen
- Werkzeuge > Quelltext erlaubt eine Anpassung durch HTML und Inline-CSS
- empfohlen bei Kenntnissen von HTML/CSS


![TextEditor][6]


## Bilder


Für den Typ “Beitrag” können hier Bilder eingestellt werden. So können Thumbnails und Galleriebilder ausgewählt werden.


##Artikel


Nur relevant für den Typ “Beitrag”: Im Blog werden zugewiesene Artikel unter dem Beitrag angezeigt.


## SEO


Die Seoeinstellungen können beliebig verändert werden. URLs können nicht doppelt vorkommen. 
Für den Typ “Snippet” können keine Seo-Einstellungen vorgenommen werden.




[1]: /img/CMSPosition.gif
[2]: /img/BlockGrid.png
[3]: /img/TextEditor.png
[4]: /img/15Zeilen.gif
[5]: /img/BloeckePlatzieren.gif
[6]: /img/TextEditor.gif
