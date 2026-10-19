# Kapsam haritası: Çevik Pratikler

> Ders üretim hattının 1. ve 2. adımı ([ders-standardi.md](ders-standardi.md)). Kaynakların hepsi
> tarayıcı panelinde açılıp okundu (2026-10-19). Bu bölüm, **Çalışma Biçimi** bölümünün üstüne kurulur:
> orada temel kavramlar herkese anlatılır, burada bir takımda çalıştırmanın derinliği gelir.

## Birincil kaynaklar

| Kısaltma | Kaynak | Ne için |
|---|---|---|
| SG | Scrum Guide, Kasım 2020 (scrumguides.org) | Teori, değerler, sorumluluklar, olaylar, eserler ve taahhütler |
| AM | Agile Manifesto ve 12 ilke (agilemanifesto.org; resmî Türkçe çevirisi) | Değerler ve ilkeler |
| KG | The Kanban Guide, Mayıs 2025 (kanbanguides.org) | Üç pratik, iş akışı tanımı, SLE, dört akış metriği |
| Wake | Bill Wake, "INVEST in Good Stories" (2003) | INVEST, 3C |
| HW | Humanizing Work, story bölme rehberi | Dokuz bölme kalıbı, bölmeyi değerlendirme |
| Patton | Jeff Patton, "The New User Story Backlog is a Map" (2008) | Story mapping, omurga, yürüyen iskelet |
| Gherkin | cucumber.io Gherkin başvurusu ve Türkçe anahtar kelimeler | Given-When-Then |
| ProKanban | Kanban Playbook 4.3; "Story points with MCS" | Monte Carlo öngörü |
| InfoQ | Amr Noaman, "How Kanban Works" | Little Yasası |
| 55D | ActionableAgile belgeleri | Kümülatif akış diyagramı |
| Retromat | Corinna Baldauf, retrospektif rehberi ve etkinlikleri | Beş aşama, Prime Directive, formatlar |
| LS | Liberating Structures, 1-2-4-All; leancoffee.org | Kolaylaştırma teknikleri |
| re:Work | Google, Project Aristotle | Takım etkililiğinin beş dinamiği |
| Atlassian | Team Playbook, Working Agreements | Çalışma sözleşmesi |
| Scrum.org | Płaskonka, "Ready or Not?" (2023) | Definition of Ready |
| LeSS / SAFe | less.works; framework.scaledagile.com | Ölçekleme |
| Lee | Jeremiah Lee, "Spotify's Failed #SquadGoals" (2020) | Spotify miti |

## Kavram → ders

| # | Ders (slug) | Kavramlar | Görsel | Araç |
|---|---|---|---|---|
| 1 | manifesto-ve-12-ilke | 4 değer, "soldakini daha değerli", 12 ilke, ilkelerin bugünkü anlamı | Matrix2x2 değil: Layers (değer → ilke → pratik) | — |
| 2 | scrum-rehberi | ampirizm, yalın düşünce, 3 sütun, 5 değer, 3 taahhüt, sprint kuralları, zaman kutuları, iptal, Scrum'ın söylemedikleri | Cycle (eser–taahhüt) | sprint-hedefi |
| 3 | product-owner-isi | değeri en çoklamak, backlog yönetiminin 4 işi, tek kişi, ürün hedefi, sprint hedefini önermek | Spectrum (yetki devri) | sprint-hedefi |
| 4 | scrum-master-isi | takıma, PO'ya ve kuruma hizmet; engel, kolaylaştırma, koçluk; yönetici değil | Layers | calisma-sozlesmesi |
| 5 | kolaylastirma-teknikleri | zaman kutusu, yapılandırılmış davet, 1-2-4-All, Lean Coffee, nokta oylaması | Cycle (1-2-4-All) | — |
| 6 | retro-formatlari | beş aşama, Prime Directive, Mad Sad Glad, Start Stop Continue, Sailboat, 5 Neden, Timeline, eylem | Layers (beş aşama) | retro-panosu |
| 7 | refinement-invest-ve-story-bolme | refinement, hazır, INVEST, 3C, dikey dilim, dokuz kalıp, DoR riskleri, Gherkin | Tree (bölme) | dor-dod, gherkin-story |
| 8 | story-mapping | düz backlog sorunu, faaliyet–görev omurgası, kaburgalar, yürüyen iskelet, yayın şeritleri | Swimlane yerine Timeline değil → Layers/Tree | — |
| 9 | akis-metrikleri-ve-cfd | DoW, SLE, WIP, throughput, iş öğesi yaşı, cycle time, Little Yasası, CFD okuma | Chart (CFD) | — |
| 10 | ongoru-velocity-ve-monte-carlo | velocity'nin sınırları, throughput, Monte Carlo, olasılıklı cevap, kararlılık | Demo: Monte Carlo | — |
| 11 | takim-dinamikleri-ve-calisma-sozlesmesi | Project Aristotle'ın beş dinamiği, psikolojik güvenlik, çalışma sözleşmesi | Layers | calisma-sozlesmesi |
| 12 | olcekleme-safe-less-spotify | neden ölçeklenir, LeSS, SAFe (ART, PI Planning), Spotify miti, önce ölçeklenmemeyi dene | Spectrum | — |
| 13 | anti-paternler | her biri bir kuralın ihlali: hedefsiz sprint, rapor standup'ı, slayt review'ı, aksiyonsuz retro, kapı DoR, velocity karşılaştırması, WIP'siz Kanban | Heatmap değil: Matrix2x2 | — |

## Çalışma Biçimi bölümünün v2'ye yükseltilmesi

| Ders | Değişen |
|---|---|
| waterfall-ve-agile | Rol merceği 7 role; Manifesto ayrıntısı yeni derse bağlanır |
| scrum | **Hata düzeltmesi:** "Beş toplantı" başlığı altında dört olay vardı; Scrum Rehberi'ne göre beş olay Sprint'in kendisiyle birlikte sayılır (sprint + dört olay) |
| tahmin-ve-olcum-story-point-velocity-capacity | Öngörü dersine bağlantı |
| kanban | Kanban Rehberi 2025'in üç pratiği ve dört metriği; akış dersine bağlantı |
| engeller-bagimliliklar-ve-belirsizlik | Proje yönetimindeki bağımlılık türlerine bağlantı |
| sync-async-ve-toplanti-duzeni | Çalışma sözleşmesine bağlantı |
| hedef-ve-olcum-okr-kpi-north-star | Re:Work "yapı ve netlik" bağlantısı |

Materyaldeki doğru bilgi atılmaz; ders v2 iskeletine, Demlik vakasına ve rol merceklerine taşınır.

## Çakışma tablosu

| Kavram | Asıl yeri | Bu bölümde |
|---|---|---|
| Waterfall/agile felsefesi | calisma-bicimi/waterfall-ve-agile | Bağlantı; 12 ilke yeni derste |
| Sprint, olaylar, sorumluluklar (temel) | calisma-bicimi/scrum | Derinlik: teori, taahhütler, kurallar |
| Story point, velocity, burndown | calisma-bicimi/tahmin-ve-olcum… | Öngörü dersi sınırlarını ve alternatifini anlatır |
| Pano, WIP, lead/cycle time, darboğaz | calisma-bicimi/kanban | Akış dersi: Kanban Rehberi 2025, SLE, yaş, Little, CFD |
| Epic, user story, acceptance criteria | urun-gelistirme/gereksinimler… | Refinement dersi bölmeyi ve INVEST'i anlatır |
| Kapanışta öğrenilen dersler | proje-yonetimi/kapanis… | Retro dersi düzenli, kısa retroyu anlatır |
| Program, portföy | proje-yonetimi/program-portfoy-ve-pmo | Ölçekleme dersi çevik çerçeveleri anlatır |
| Yol haritası | urun-gelistirme/roadmap-ve-planlama | Story map'e bağlanır |
