---
layout: post
title: Artikel Importer
tags: multichannel
permalink: /multichannel/:title
---


+ Hier wird eine Inhaltsangabe erstellt
{:toc}


Über den Artikelimporter können große Artikelmengen über eine CSV Datei in den Katalog eingespeist werden. Zu finden ist er im Hauptmenü unter **Multichannel > Artikel Importer** Bevor eine Datei hochgeladen werden kann, muss unter **Multichannel > Artikel Importprofile** ein Importprofil angelegt werden.


Bitte beachten: Kategorien, Hersteller, Bestellungen und Kunden können ggf mit Artikeln verknüpft, jedoch nicht mit allen Facetten importiert werden.


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


Hinweis: IMMER speichern, bevor Zeilen hinzugefügt oder entfernt werden.


Mögliche Felder sind:


<table  class="table">
 <tr>
   <td>Artikelnummer</td>
    <td>Pflichtfeld</td>
    <td>ID des Artikels, die im Frontend zu sehen ist</td>
 </tr>
 <tr>
   <td>oxid</td>
    <td>freiwillig</td>
    <td>ID des Artikels, die NICHT im Frontend zu sehen ist</td>
 </tr>
 <tr>
   <td>oxparentid</td>
    <td>freiwillig</td>
    <td>ID des Vaterartikels</td>
 </tr>
<tr>
   <td>Variantennummer</td>
    <td>Pflichtfeld, wenn Varianten vorhanden sind</td>
    <td>muss der Artikelnummer des Vaters entsprechen</td>
 </tr>
 <tr>
   <td>Aktiv</td>
    <td>freiwillig</td>
    <td>ist aktiv</td>
 </tr>
 <tr>
   <td>oxactivefrom</td>
    <td>freiwillig</td>
    <td>aktiv ab einem Zeitpunkt</td>
 </tr>
 <tr>
   <td>oxactiveto</td>
    <td>freiwillig</td>
    <td>aktiv bis zu einem Zeitpunkt</td>
 </tr>


<tr>
   <td>EAN</td>
    <td>freiwillig</td>
    <td>European Article Number</td>
 </tr>
<tr>
   <td>Artikelname</td>
    <td>Pflichtfeld</td>
    <td>Name des Artikels</td>
 </tr>
<tr>
   <td>Kurzbeschreibung</td>
    <td>freiwillig</td>
    <td>Begrenzter Beschreibungstext (255 Zeichen)</td>
 </tr>
<tr>
   <td>oxlongdesc</td>
    <td>freiwillig</td>
    <td>ausführliche Beschreibung inkl. HTML</td>
 </tr>

<tr>
   <td>Artikelpreis</td>
    <td>Pflichtfeld</td>
    <td>Format in der Form 23,99</td>
 </tr>
 <tr>
   <td>Einkaufspreis</td>
    <td>freiwillig</td>
    <td>Preis des Artikels beim Erwerb</td>
 </tr>
<tr>
   <td>Hersteller</td>
    <td>freiwillig</td>
    <td>Angabe des Herstellers</td>
 </tr>
<tr>
   <td>UVP</td>
    <td>freiwillig</td>
    <td>nötig für Rabatte, hier Originalpreis eingeben, im Feld Artikelpreis den reduzierten Preis eingeben</td>
 </tr>
<tr>
   <td>Thumbnail</td>
    <td>freiwillig</td>
    <td>kann aus 1. Artikelbild generiert werden</td>
 </tr>
<tr>
   <td>Bild1-12 </td>
    <td>freiwillig</td>
    <td>Entweder Name des Bildes oder Bild-URL angeben</td>
 </tr>
<tr>
   <td> Kann gesucht werden</td>
    <td>freiwillig</td>
    <td>wird in der Shopsuche angezeigt, Standard 1 </td>
 </tr>
<tr>
   <td>Lagerbestand</td>
    <td>freiwillig</td>
    <td>Anzahl des Lagerbestands, Standard -1</td>
 </tr>
<tr>
   <td>Lieferstatus</td>
    <td>freiwillig</td>
    <td>wie wird mit dem Artikel umgegangen, wenn der Bestand 0 ist </td>
 </tr>
<tr>
   <td>Mindestbestellmenge</td>
    <td>freiwillig</td>
    <td>Menge, die mindestens in den Warenkorb gelegt werden muss, damit der Artikel kaufbar ist</td>
 </tr>

 <tr>
   <td>Mengeneinheit</td>
    <td>freiwillig</td>
    <td>Grundpreis, Einheit des Artikels</td>
 </tr>
<tr>
   <td>Menge je Einheit</td>
    <td>freiwillig</td>
    <td>Grundpreis, Menge des Artikels, bezogen auf die Einheit, z. B. 5</td>
 </tr>
<tr>
   <td>oxdistean</td>
    <td>freiwillig</td>
    <td>Grundpreis, spezielle Einheit, z. B. 100g</td>
 </tr>
<tr>
   <td>Info falls Artikel auf Lager</td>
    <td>freiwillig</td>
    <td>Text, der angezeigt wird, wenn der Artikel auf Lager ist</td>
 </tr>
<tr>
   <td> Info falls Artikel nicht auf Lager </td>
    <td>freiwillig</td>
    <td>Text, der angezeigt wird, wenn der Artikel nicht auf Lager ist</td>
 </tr><tr>
   <td>Wieder lieferbar am </td>
    <td>freiwillig</td>
    <td>Datum, wann Artikel wieder verfügbar ist</td>
 </tr>

<tr>
   <td>Variantentitel</td>
    <td>Pflichtfeld, wenn Varianten gewählt wurden</td>
    <td>Überschrift der Varianten in der Form z. B. Größe | Farbe </td>
 </tr>
<tr>
   <td>Varianten Option 1-6 </td>
    <td>Pflichtfeld, wenn Varianten gewählt wurden</td>
    <td>Variantenwerte, z. B. XL, rot</td>
 </tr>
<tr>
   <td>versandkostenfrei</td>
    <td>freiwillig</td>
    <td>Artikel grundsätzlich als versandkostenfrei markieren</td>
 </tr>

<tr>
   <td>Gewicht</td>
    <td>freiwillig</td>
    <td> zur Berechnung von Versandkosten</td>
 </tr>
<tr>
   <td>Länge</td>
    <td>freiwillig</td>
    <td>zur Berechnung von Versandkosten</td>
 </tr>
<tr>
   <td>Breite</td>
    <td>freiwillig</td>
    <td>zur Berechnung von Versandkosten</td>
 </tr>
<tr>
   <td>Höhe</td>
    <td>freiwillig</td>
    <td>zur Berechnung von Versandkosten</td>
 </tr>
<tr>
   <td>Hersteller Artikelnummer</td>
    <td>freiwillig</td>
    <td>für interne Logistik bei Nachbestellungen</td>
 </tr>
<tr>
   <td>Langbeschreibung</td>
    <td>freiwillig</td>
    <td>ausführliche Beschreibung mit HTML</td>
 </tr>
<tr>
   <td>Erstellungsdatum</td>
    <td>freiwillig</td>
    <td>wenn nicht angegeben, wird aktuelles Datum gewählt</td>
 </tr><tr>
   <td>Spezielle MwST</td>
    <td>freiwillig</td>
    <td>Angabe einer Mehrwertsteuer, die von 19% abweicht</td>
 </tr><tr>
   <td>Minimale Lieferzeit </td>
    <td>freiwillig</td>
    <td></td>
 </tr><tr>
   <td>Maximale Lieferzeit</td>
    <td>freiwillig</td>
    <td></td>
 </tr>
<tr>
   <td>Lieferzeiteinheit</td>
    <td>freiwillig</td>
    <td>z.B. DAY</td>
 </tr>
<tr>
   <td>Kategorie</td>
    <td>Pflicht, wenn Kategorien ausgewählt wurde</td>
    <td>Angabe der Kategorie</td>
 </tr>
<tr>
   <td>Attribute: Farbe</td>
    <td>freiwillig</td>
    <td>Eigenschaften des Artikels nach denen gefiltert werden kann, müssen vorher im Backend erstellt werden</td>
 </tr>

<tr>
   <td>Externe URL</td>
    <td>freiwillig</td>
    <td>URL außerhalb des Shops, auf die der Artikel weiterleitet</td>
 </tr><tr>
   <td>oxinsert</td>
    <td>freiwillig</td>
    <td>Datum, an welchem Artikel in den Shop kam, wichtig für Elastic Search</td>
 </tr><tr>
   <td>oxtimestamp</td>
    <td>freiwillig</td>
    <td>Zeitstempel</td>
 </tr>
<tr>
   <td>oxbundleid</td>
    <td>freiwillig</td>
    <td>verpflichtende Artikel, oxid des Pflichtartikels</td>
 </tr>
<tr>
   <td>Werbeportalfreigabe</td>
    <td>freiwillig</td>
    <td>Artikel ist für weitere Portale zugelassen</td>
 </tr><tr>
   <td>Artikel wird in Übersicht angezeigt</td>
    <td>freiwillig</td>
    <td>Artikel wird in der Übersicht angezeigt</td>
 </tr>
<tr>
   <td>Nicht via Dataunifier exportieren</td>
    <td>freiwillig</td>
    <td>Artikel wird nicht exportiert</td>
 </tr>
<tr>
   <td>Zur Sitemap exportieren</td>
    <td>freiwillig</td>
    <td>Artikel wird in Sitemap exportiert</td>
 </tr>



</table>




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


-------


## Besondere Artikel


### Varianten


<table  class="table">
 <tr>
   <th>Artikelnummer</th>
    <th>Variantennummer</th>
    <th>Titel</th>
    <th>Variantenoption 1</th>
    <th>Variantenoption 2</th>
    <th>Variantenname</th>
 </tr>
<tr>
    <td>0001</td>
    <td>0001</td>
    <td>Artikel</td>
    <td></td>
    <td></td>
    <td>Größe|Farbe</td>
</tr>
<tr>
    <td>0002</td>
    <td>0001</td>
    <td>Artikel groß</td>
    <td>groß</td>
    <td>rot</td>
    <td>Größe|Farbe</td>
</tr>
<tr>
    <td>0003</td>
    <td>0001</td>
    <td>Artikel klein</td>
    <td>klein</td>
    <td>rot</td>
    <td>Größe|Farbe</td>
</tr>
<tr>
    <td>0004</td>
    <td>0001</td>
    <td>Artikel groß</td>
    <td>groß</td>
    <td>gelb</td>
    <td>Größe|Farbe</td>
</tr>
<tr>
    <td>0005</td>
    <td>0001</td>
    <td>Artikel klein</td>
    <td>klein</td>
    <td>gelb</td>
    <td>Größe|Farbe</td>
</tr>
<tr>
    <td>0006</td>
    <td>0006</td>
    <td>Testartikel</td>
    <td></td>
    <td></td>
    <td></td>
</tr>
</table>




In diesem Beispiel sind die *Artikel 0002 - 0005 Varianten des Artikels 0001*. Der Artikel 0006 gehört nicht dazu. Wird Artikel 0001 aufgerufen, kann die Größe und die Farbe gewählt werden.


Sowohl Varianten als auch Vaterartikel brauchen Bilder.


### Dimensionen / Grundpreis


Die Spalte Frontend dient nur der Veranschaulichung und muss nicht angegeben werden.


<table  class="table">
 <tr>
   <th>Artikelnummer</th>
   <th>Titel</th>
   <th>Preis</th>
   <th>Menge</th>
   <th>Einheit</th>
   <th>Sepz. Einheit</th>
   <th>Frontend*</th>
 </tr>
 <tr>
   <td>0001</td>
   <td>T-Shirt</td>
   <td>20</td>
   <td>2</td>
   <td>_UNIT_PIECE</td>
   <td></td>
   <td>10€/Stück</td>
 </tr>
 <tr>
   <td>0002</td>
   <td>Erde</td>
   <td>10</td>
   <td>5</td>
   <td>_UNIT_KG</td>
   <td></td>
   <td>2€/kg</td>
 </tr>
 <tr>
   <td>0003</td>
   <td>Futter</td>
   <td>10</td>
   <td>10</td>
   <td>_UNIT_G</td>
   <td></td>
   <td>1€/kg</td>
 </tr>
 <tr>
   <td>0004</td>
   <td>Benzin</td>
   <td>20</td>
   <td>15</td>
   <td>_UNIT_L</td>
   <td></td>
   <td>1,33€/l</td>
 </tr>
 <tr>
   <td>0005</td>
   <td>Creme</td>
   <td>15</td>
   <td>50</td>
   <td>_UNIT_ML</td>
   <td></td>
   <td>0,3€/ml</td>
 </tr>
 <tr>
   <td>0006</td>
   <td>Saure Schlange</td>
   <td>0.5</td>
   <td>10</td>
   <td>_UNIT_CM</td>
   <td></td>
   <td>0,05€/cm</td>
 </tr>
 <tr>
   <td>0007</td>
   <td>Bleistiftmine</td>
   <td>0.2</td>
   <td>10</td>
   <td>_UNIT_MM</td>
   <td></td>
   <td>0,02€/mm</td>
 </tr>
 <tr>
   <td>0008</td>
   <td>Tapete</td>
   <td>15</td>
   <td>1</td>
   <td>_UNIT_M</td>
   <td></td>
   <td>15€/m</td>
 </tr>
 <tr>
   <td>0009</td>
   <td>Teppich</td>
   <td>25</td>
   <td>5</td>
   <td>_UNIT_M2</td>
   <td></td>
   <td>5€/m2</td>
 </tr>
 <tr>
   <td>0010</td>
   <td>Kies</td>
   <td>60</td>
   <td>4</td>
   <td>_UNIT_M3</td>
   <td></td>
   <td>15€/m3</td>
 </tr>
 <tr>
   <td>0011</td>
   <td>Werkzeug</td>
   <td>120</td>
   <td>6</td>
   <td>_UNIT_ITEM</td>
   <td></td>
   <td>20€/Teil</td>
 </tr>
 <tr>
   <td>0012</td>
   <td>Schokolade</td>
   <td>2</td>
   <td>5</td>
   <td></td>
   <td>100g</td>
   <td>0,4€/100g</td>
 </tr>
</table>


- das System berechnet den Grundpreis immer für 1 Einheit
- bei einer *Speziellen Einheit* (zB. 100g) *muss die Menge* so *angepasst werden* (zB. 1g=100g)


### Verpflichtende Artikel


<table  class="table">
  <tr>
    <th>Artnum</th>
    <th>ID</th>
    <th>Titel</th>
    <th>Preis</th>
    <th>Werbung</th>
    <th>Sitemap</th>
    <th>Sichtbar</th>
    <th>Suchbar</th>
    <th>k. Export</th>
    <th>Bundle</th>
  </tr>
  <tr>
    <td>0001</td>
    <td></td>
    <td>Batterie</td>
    <td>50</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>P-001</td>
  </tr>
  <tr>
    <td>P-001</td>
    <td>P-001</td>
    <td>Batteriepfand</td>
    <td>7,50</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td></td>
  </tr>
</table>


- in diesem Beispiel wird beim Kauf der “Batterie” (0001) immer auch der “Batteriepfand” (P-001) mit in den Warenkorb gelegt
- “Batteriepfand” hat keine Werbeportalfreigabe, wird nicht auf Sitemaps oder in CSVs exportiert und ist nicht such- oder sichtbar
- “Bundle” ist in diesem Fall die ID des Pflichtartikels (Batteriepfand)
- empfohlen wird die Definition der ID des Pflichtartikels, da diese sonst vom System generiert wird
