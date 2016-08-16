---
layout: post
title: Amazon Marketplace Einbindung
tags: multichannel
permalink: /multichannel/:title
---


+ Index
{:toc .disabled}


***Zurzeit  müssen Artikel Varianten besitzen um mit Amazon verbunden zu werden***


Unter ***Einstellungen => Amazon Einstellungen*** wird die Implementierung von Amazon gestartet.


Für die Einbindung von Amazon benötigt man verschiedenste IDs welche Amazon einem Händlerkonto zuweist.


## Amazon API


Die Amazon API wird unter Amazon API eingegeben.


![Amazon API][img2]


Wie man an die benötigten IDs  der Amazon API kommt sieht man hier : [Wie kommt man an die IDs ?][1]


## Amazon Product Advertising API


Die Möglichkeit Amazon Product Advertising API zu verwenden gibt es auch, dafür benötigt man die API-Keys von hier: [Product Advertising API][2]


Diese IDs werden unter Amazon Product Advertising API eingegeben.


![Amazon Product Advertising API][img3]


Nachdem die Keys und IDs eingegeben sind muss noch die Artikel Information Zuweisung eingestellt werden.


## Die Artikel Information Zuweisung


Nun ist es Wichtig zu entscheiden welche Werte bei Amazon angezeigt werde.


Gewählt werden hier die Felder die aus dem Shop bei Amazon eingetragen werden.


Nach der Auswahl des entsprechenden Feldes wird ein Dropdown angezeigt in dem ein Wert ausgewählt wird.


1. Bsp. für die Verwendung eines Shoptitels


![dropdown][img1]


## Die Artikel auf Amazon verbinden


Die Artikel werden über die Artikelverwaltung verlinkt.


Dafür wählt man entsprechenden Artikel durch klicken auf das Kästchen aus und klickt auf das Amazon Symbol in der nun erscheinenden Toolbar an.


Nun erscheint rechts ein Amazon Symbol welches ausgegraut ist. 


Dies bedeutet das der Artikel nun nach Amazon verlinkt wird. 


Sobald das Symbol nicht mehr ausgegraut ist , wurde der Artikel erfolgreich hochgeladen.




## Ablehnung von Amazon


Sollte Amazon Artikel aufgrund bestimmter Felder ablehnen, bietet sich die manuelle Erstellung und Zuweisung eines Attributs an, welches den abgelehnten Wert hat.
Dieses Attribut kann im Shop verborgen werden, gewährleistet jedoch, die Abbildung in Amazon.


Bsp. Der Artikeltitel passt nicht zur Strategie auf Amazon. 
Lsg: Erstellung eines Attributs “Titel” mit dem Wert, der gewünscht ist. Zuweisung des Attributs zum Feld “Titel”.










[1]: https://developer.amazonservices.de/gp/mws/faq.html
[2]: https://partnernet.amazon.de/gp/advertising/api/detail/main.html
[img1]: /img/multichannel/amazon_dropdown.png
[img2]: /img/multichannel/amazon_api1.png
[img3]: /img/multichannel/amazon_api2.png
