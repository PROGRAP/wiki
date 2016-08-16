---
layout: post
title: Amazon Marketplace
tags: multichannel
permalink: /multichannel/:title
---


+ Hier wird eine Inhaltsangabe erstellt
{:toc}


## Vorwort:


Mit der Amazonschnittstelle können **Bestellungen und Artikel verknüpft** und **synchronisiert** werden.
Bitte beachten:  Artikel ohne Varianten könnennicht abgeglichen werden.


![AmazonEinstellungen][1]




## Einrichtung


### Amazon API 


- wird immer benötigt
- benötigt wird: MerchantID; MarketplaceID; KeyID; SecretKey
- Hilfestellung von Amazon: [Amazon FAQ][2]


![AmazoonAPI][3]


### Amazon Product Advertising API
- wird immer benötigt
- benötigt wird: AccessKey; SecretKey; AssociateTag
- Daten: [Amazon Produktdaten für Ihre Website][4]


![AmazonProductAdvertisingAPI][5]


### Artikel Information Zuweisung
- wird benötigt um Artikel zu Amazon hochzuladen
- benötigt wird: amazon_pattern_product_id = EAN; alle Felder die bei Amazon angezeigt werden sollen
- Auswahl durch Dropdown


![AmazonArtikelZuweisungBsp1][6]


### Artikel Zuweisung
- wird benötigt um Artikel zu Amazon hochzuladen
1. zu verknüpfende Artikel auswählen
2. Klick auf das Amazon-Symbol


![AmazonArtikelZuweisung][7]


- zugewiesene artikel sind gekennzeichnet durch ein graues Amazon-Symbol, hochgeladene Artikel durch ein rotes


![AmazonArtikelZugewiesen][8]


## Besondere Hinweise


- Amazon nutzt die **EAN** als Abgleichbasis
- beim **1. Abgleich** wird der **Bestand der Shops** auf Amazon übertragen
- Übertragene Bestellungen bekommen im Shop eine neue (im Shop fortlaufende) Bestellnummer, die Amazonbestellnummer kann exportiert werden
- **Abgelehnte Felder mithilfe** von (im Shop)-versteckten **Attributen ersetzen**


Bsp.: 
- Amazon lehnt Titel des Artikels ab
- Attribut:Titel erstellen, versteckt
- gewünschten Wert zuweisen
- Zuweisung zum Feld Titel in Artikel Information Zuweisung












[1]: /img/AmazonEinstellungenPosition.gif
[2]: https://developer.amazonservices.de/gp/mws/faq.html
[3]: /img/AmazonAPI.png
[4]: https://partnernet.amazon.de/gp/advertising/api/detail/main.html
[5]: /img/AmazonProductAdvertisingAPI.png
[6]: /im/AmazonArtikelZuweisungBsp1.png
[7]: /img/AmazonArtikelZuweisung.png
[8]: /img/AmazonArtikelZugewiesen.png
