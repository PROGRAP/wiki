---
layout: post
title: Artikel Synchronisieren
tags: weclapp, artikel, import
permalink: /weclapp/:title
---


+ Index
{:toc .disabled}


Der Weclapp Artikel Synchronisations Cronjob importiert die folgenden Felder aller Weclapp Artikel und Hersteller:


### Artikel
1. weclapp articleNumber                => core oxarticlenumber
2. weclapp active                        => core oxactive
3. weclapp shortDescription1                => core oxshortdesc
4. weclapp description                        => core long_desc
5. weclapp longText                        => core long_desc2
6. weclapp ean                                => core ean
7. weclapp name                                => core oxtitle
8. weclapp articlePrices        (erster preis)        => core oxprice
9. weclapp manufacturerPartNumber        => core oxmpn
10. weclapp manufacturerId                => core oxmanufacturerId


### Hersteller
1. weclapp id                => core weclapp_id
2. weclapp name                => core oxtitle
3. weclapp active        => core oxactive