---
layout: post
title: Amazon Payments
tags: versand_zahlung
permalink: /zahlung-versand/:title
---


+ Index
{:toc .disabled}


## Vorwort:
Mit der Amazon Payment Integration ist es möglich mit den bei Amazon hinterlegten Kundendaten zu Bestellen und Bezahlen. 


Bitte beachten Sie: 
Ein Login durch Amazon ist derzeit noch nicht möglich. 


## Einrichtung:
Um Amazon einzurichten Muss die Registration bei Amazon Payments erfolgt sein. Dies kann unter [Amazon Payment][1] erfolgen. 


Weitere Informationen und Hilfestellungen zur Registration:
[Hilfe zur Amazon Payment Registration][2]


**Nach der Registration müssen die Amazon Payment API-Daten im Core hinterlegt werden:**


### Beschaffung der Amazon API daten:
1. Bei [Amazon Seller Central][3] einloggen.
2. auf Integration >> [MWS Access Key][4] 


### Konfigurieren der Amazon Schnittstelle im Core:
Amazon payment befindet sich unter:


1. Zahlung und Versand
2. Zahlungsarten 
3. Amazon Payment


Sollte Amazon Payment hier nicht gelistet sein:


1. Zahlung und Versand
2. Zahlungsarten 
3. Neue Zahlungsart Hinzufügen
4. Amazon Payment


Um die API Daten zu hinterlegen auf **Aktivieren** klicken.
Wenn Amazon Payment bereits aktiviert ist auf **Einstellungen** Klicken.


Es öffnet sich Folgender Dialog:

![amzonpayment][5]


Hier die 


1. Acess Key
2. Client ID
3. Merchant/Sellser ID
4. Secret 


aus dem [Amazon Seller Central][4] eintragen. Über die Checkbox Sandbox kann der Testmodus aktiviert (farbig) bzw. deaktiviert (grau) werden.


Alle Weiteren Standardzahlungsarteneinstellungen befinden sich unter den API-Konfigurationseinstellungen. 


[1]:https://payments.amazon.de/preregistration/lpa
[2]:https://payments.amazon.de/help/201212150 
[3]:https://sellercentral.amazon.de
[4]:https://sellercentral-europe.amazon.com/gp/pyop/seller/mwsaccess/ref=py_pyopacc_dnav_home_?ld=APDELPADirect
[5]:/img/amazonpayment.png