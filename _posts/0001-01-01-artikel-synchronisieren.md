---
layout: post
title: Artikel Synchronisieren
tags: weclapp
permalink: /weclapp/:title
---


+ Index
{:toc .disabled}


Der Weclapp Artikel Synchronisations Cronjob importiert die folgenden Felder aller Weclapp Artikel und Hersteller:


### Artikel
1. weclapp Artikelnummer                => core Artikelnummer
2. weclapp Artikel ist aktiv                => core Aktiv
3. weclapp Kurztext1                         => core Kurzbeschreibung
4. weclapp Beschreibung                => core Langbeschreibung
5. weclapp Langtext                        => core Langbeschreibung 2
6. weclapp EAN-Nummber                => core EAN
7. weclapp Bezeichnung                        => core Titel / Artikelname
8. weclapp VK-Preis (erster preis)        => core Artikelpreis
9. weclapp MPN-Nummber                => core Herstellerproduktnummer
10. weclapp Hersteller ID                         => core Hersteller ID


### Hersteller
1. weclapp id                => core weclapp_id
2. weclapp Name        => core Titel
3. weclapp Aktiv                => core Ist aktiviert


### Automatische Synchronisation aktivieren


Im Backend unter **Multichannel > CronJob Verwaltung NG** ein Häkchen bei **Weclapp Artikel Synchronisieren (Nur Update)** setzen und mit einem Klick auf das Auge aktivieren. Zuvor müssen in den Moduleinstellungen die WeClapp API-Daten eingetragen werden. Das zmb-Support-Team übernimmt dies gern.
