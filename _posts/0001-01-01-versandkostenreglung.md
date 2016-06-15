---
layout: post
title: Versandkostenreglung
tags: versand_zahlung
permalink: /versand-zahlung/:title
---

+ Index
{:toc}

Die Versandkostenreglung berechnet nach denen von Ihnen gewählten Bedingungen den Versandpreis und die Versandart.

## Versandregelübersicht

In der Übersicht sehen sie alle bereits verfügbaren Regeln und sehen ob diese aktiv/inaktiv sind.
Ein Klick auf das Symbol der Hand wechselt den Status.

Über den Stift können sie die Regel editieren und über den Mülleimer löschen.

## Versandregeln

Hier editieren oder erstellen Sie neue Versandkostenregelungen. 
Damit Versandkostenregeln überhaupt greifen müssen diese mit Benutzergruppen, Versandarten und Länder gekoppelt werden.
Sehen sie dafür [HIER][Versandarten].

***Vergessen Sie nicht zu speichern!***

## Allgemein

Hier können sie den Titel auswählen und auch die Versandart als aktiv einstellen.
Dies können sie auch später in der Versandregelübersicht machen.

---

## Regeln

Hier stellen sie ein wann diese Regel greift und wie sie auf den Warenkorb gerechnet wird.

### Bedingung

Die Bedingung gibt die Einheit an die bei der Berechnung betrachtet wird.

### >= und <=

Das Symbol***(>=)*** steht für den Wert der erreicht werden muss damit die Regel greift.
Das andere Symbol***(<=)*** steht für den Wert der nicht überschritten werden darf damit die Regel noch gilt.

### Preisaufschlag/-abschlag und Typ

Geben sie hier den absoluten oder den prozentualen Wert ein.
Danach müssen die noch dem System sagen ob er den Wert als Prozentzahl oder Währung berechnen soll.

|ABS| ---=--- | absoluten Wert|
|                                      |
|perc| ---=--- | Prozentwert     |  
|||

#### Berechnungsregeln

Hier stellen Sie ein wie oft und in welchem Umfang die Regel greift.

|Regel| Bedeutung|
|                             |
|Einmal Pro Warenkorb                      | Diese Regel wird einmal auf den ganzen Warenkorb angewandt.|
|                                                                                                                                                   |
|Einmal pro unterschiedlichen Artikel | Hier wird die Regel auf die unterschiedlichen Artikel im Warenkorb angewandt.|
|                                                               							|
|Für jeden Artikel| Jeder Artikel im Warenkorb wird, egal wie oft er bestellt wurde,  in die Berechnung der Versandkosten eingehen.  |

#### Keine weitere Berechnung

Bei aktivem Regler wird, wenn diese Regel greift, ***keine*** weitere Regel zur Berechnung der Versandkosten verwendet.

---

## Design 

Hier stellen sie unteranderen ein, von wann bis wann die Regel greift.

### Aktiv von/Aktiv bis

Stellen sie die Lebenszeit einer Regel ein.
Das verwendete Format ist ***JJJJ-MM-TT HH:MM:SS*** in beiden Feldern.

### Reihenfolge in der Regelverarbeitung

Je kleiner die Zahl desto früher greift die Regel.
Sie können  Zahlen von -1000 bis 1000 verwenden.

---

## Länder

Hier weisen Sie der Regel ein oder mehrere Länder zu.

Um ein bestimmtes Land auszuwählen geben Sie den Namen im Suchfeld für Titel ein.

Sie können aber Auch eine Liste mit allen Länder anzeigen lassen oder nur mit Ländern die zugewiesen/nicht zugewiesen sind. Dafür wählen sie einfach das Kriterium im Suchfeld ganz links aus.

Setzen Sie Häkchen für Länder die Sie verknüpfen wollen. 

**Vergessen Sie nicht zu Übernehmen!**


---

## Gruppen

Weisen Sie Versandkostenregeln bestimmten Benutzergruppen zu.
Die Auswahl verhält sich ähnlich wie bei den Ländern.

---

## Benutzer

Hier können Sie einzelne Benutzer für die Versandkostenregel bestimmen
Und auch hier wählen Sie nach dem Prinzip der [Länder].

---

## Zahlungsarten

Für die verschiedenen Versandkostenregelungen können auch verschiedene Zahlungsarten infrage kommen.

Auch hier wird wieder unsere Auswahlliste benutzt wie bei Länder/Gruppen/Benutzer.

---

Damit sind Sie hier fertig und können direkt mit den [Versandarten] loslegen.

[Länder]: #Länder
[Versandarten]: /wiki/versand/versandarten
