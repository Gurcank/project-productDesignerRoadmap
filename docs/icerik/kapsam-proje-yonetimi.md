# Kapsam haritası: Proje Yönetimi

> Ders üretim hattının 1. ve 2. adımı ([ders-standardi.md](ders-standardi.md)). Birincil kaynağın
> kavramları ders ders işaretlenir; başka bir derste anlatılan kavram burada yeniden anlatılmaz,
> bağlantı verilir. Kaynakların hepsi tarayıcı panelinde açılıp okundu (2026-10-18).

## Birincil kaynaklar

| Kısaltma | Kaynak | Ne için |
|---|---|---|
| Watt | Adrienne Watt, *Project Management* 2. baskı, BCcampus (CC BY 4.0), opentextbc.ca/projectmanagement — bölüm 3–18 | Yaşam döngüsü, başlatma, kapsam/WBS, takvim, kaynak, bütçe/EVM, tedarik, kalite, iletişim, risk, değişiklik kontrolü, kapanış |
| PMBOK 8 | PMI, *PMBOK® Guide* 8. baskı (Kasım 2025) tanıtım sayfası | 6 ilke, 7 performans alanı |
| PMI | pmi.org: What Is Project Management, What is a Project Manager, PMP | Yaklaşımlar (öngörücü, uyarlanabilir, hibrit), PjM sorumlulukları, PMP koşulları |
| PeopleCert | PRINCE2 sertifika ailesi sayfası | PRINCE2, PRINCE2 Agile, MSP (program), MoP (portföy), P3O (ofis), M_o_R |
| Construx | McConnell, "The Cone of Uncertainty" | Belirsizlik konisi: 0,25×–4×, 0,5×–2×, 0,67×–1,5×, 0,8×–1,25× |
| Wikipedia | "Three-point estimation" | E = (a + 4m + b) / 6, SD = (b − a) / 6 |
| gov.scot | Deposit Return Scheme güvence raporu (2021), Delivery Confidence Assessment | Beş kademeli RAG tanımları |
| Asana | "RAID log" | RAID'in harfleri ve harf varyantları, risk ≠ sorun |
| UK DDaT | Delivery manager, programme delivery manager, portfolio manager rol tanımları | Program ve portföy rolleri |

Watt'ta **yok**, başka kaynaktan geliyor: üç nokta formülü, belirsizlik konisi, RAID, RAG.

## Kavram → ders

| # | Ders (slug) | Kavramlar | Görsel | Araç | Kaynak |
|---|---|---|---|---|---|
| 1 | proje-urun-ve-operasyon | proje, ürün, operasyon, PjM sorumlulukları | Timeline | risk-kaydi | yayında |
| 2 | yaklasim-secimi | yaşam döngüsü (başlatma, planlama, uygulama, kapanış), öngörücü, uyarlanabilir, hibrit, fizibilite ("yapabilir miyiz / yapmalı mıyız") | Spectrum | proje-tuzugu | Watt 3, PMI |
| 3 | standartlar-ve-sertifikalar | PMBOK 8 ilke ve alanları, PMBOK'un eski 10 bilgi alanı, PRINCE2 ailesi, PMP / CAPM | Layers | — | PMBOK 8, Watt 4, PMI PMP, PeopleCert |
| 4 | is-gerekcesi-ve-proje-tuzugu | iş gerekçesi içeriği, sponsor onayı, tüzük bölümleri, SMART hedef, PjM yetkisi, NPV/ROI/geri ödeme (Deeper) | Cycle (onay akışı) | is-gerekcesi, proje-tuzugu | Watt 7 |
| 5 | kapsam-ve-wbs | kapsam beyanı, teslimat odaklı ayrıştırma, iş paketi, %100 kuralı, ne zaman durulur | Tree | wbs | Watt 9 |
| 6 | tahmin | analog, parametrik, aşağıdan yukarı, üç nokta, belirsizlik konisi, taahhüt zamanı | Demo: koni | takvim | Watt 12, Construx, Wikipedia |
| 7 | bagimliliklar-ve-kritik-yol | FS/SS/FF/SF, zorunlu/isteğe bağlı/dış bağımlılık, öncül ve gecikme (lead/lag), AON, kritik yol, bolluk | Network + demo | takvim | Watt 10 |
| 8 | gantt-ve-kilometre-taslari | Gantt, kilometre taşı, temel çizgi (baseline), "bugün" çizgisi | Timeline | takvim | Watt 10 |
| 9 | kaynak-ve-kapasite | kaynak aşırı yüklemesi, kaynak dengeleme, bolluğu kullanmak | Chart (bar) | — | Watt 11 |
| 10 | butce-ve-kazanilmis-deger | maliyet kalemleri, ihtiyat ve yönetim rezervi, PV/EV/AC, SV/CV, SPI/CPI, EAC | Demo: EVM + Chart | — | Watt 12 |
| 11 | risk-yonetimi | risk = belirsiz olay, fırsat, olasılık × etki, kaçın/azalt/aktar/kabul et, acil durum planı | Heatmap | risk-kaydi | Watt 16 |
| 12 | raid-kaydi | risk, varsayım, sorun, bağımlılık; harf varyantları (eylem, karar); risk ≠ sorun | Matrix2x2 | raid | Asana, Watt 16 |
| 13 | degisiklik-kontrolu | değişiklik talebi, etki analizi, değişiklik kurulu, kapsam kayması ile farkı | Swimlane | degisiklik-talebi | Watt 17 |
| 14 | kalite-ve-kabul | kalite = gereksinime uygunluk, kalite ≠ sınıf (grade), kalite planı, kabul kriteri, resmî kabul | Layers | — | Watt 14, 18 |
| 15 | durum-raporu | iletişim planı, bilgi ihtiyacı analizi, RAG, beş kademeli güven değerlendirmesi, kötü haberi erken vermek | Heatmap | durum-raporu | Watt 15, gov.scot |
| 16 | tedarikci-ve-sozlesme | yap ya da al, RFQ / RFP, sabit fiyat, maliyet artı, zaman ve malzeme, risk kimde | Spectrum | — | Watt 13 |
| 17 | kapanis-ve-ogrenilen-dersler | resmî kabul, eksik iş listesi (punch list), sözleşme kapanışı, öğrenilen dersler (suçlamasız), arşiv | Cycle | kapanis-raporu | Watt 18 |
| 18 | program-portfoy-ve-pmo | proje / program / portföy, fayda gerçekleştirme, PMO | Layers | — | PeopleCert, UK DDaT, PMBOK 8 |

## Çakışma tablosu

| Kavram | Asıl anlatıldığı yer | Bu bölümde |
|---|---|---|
| Waterfall ve agile felsefesi, Agile Manifesto | calisma-bicimi/waterfall-ve-agile | Yalnız bağlantı; yaklaşım seçimi dersi "ne zaman hangisi" sorusunu karar ölçütleriyle cevaplar |
| Blocker, dependency, escalation (ekip dili) | calisma-bicimi/engeller-bagimliliklar-ve-belirsizlik | Bağımlılık türleri (FS/SS/FF/SF) ve ağ üzerindeki etkisi burada |
| Story point, velocity, capacity, burndown | calisma-bicimi/tahmin-ve-olcum-story-point-velocity-capacity | Göreli tahmin orada; mutlak tahmin (süre, para) burada. Kapasite dersi sprint kapasitesine bağlanır |
| Kapsam, scope creep, cut line | urun-gelistirme/kapsam-mvp-poc-scope-creep | Değişiklik kontrolü dersi scope creep'i tanımlamaz, ona bağlanır |
| Roadmap, kilometre taşı (ürün) | urun-gelistirme/roadmap-ve-planlama | Gantt dersi proje takvimindeki kilometre taşını anlatır, roadmap'e bağlanır |
| Action item, olay dili | sirket-sozlugu/risk-ve-olay-dili | Risk dersi kendi tanımını yapar; olay dili oradadır |
| Kabul kriteri (user story) | urun-gelistirme/gereksinimler-epic-user-story-acceptance-criteria | Kalite dersi proje kabulünü anlatır, story kabul kriterine bağlanır |
| RACI | Araçlar/raci | Tüzük dersinde roller için bağlantı |

## Bölüm dışında kalanlar (bilerek)

- PMP sınav içeriğinin ayrıntısı, ücretler: hızla eskir; yalnız koşulların özeti ve "doğrula" notu.
- Kazanılmış değerin ileri formülleri (TCPI, VAC): `<Deeper>` içinde değil, hiç yok; temel dört
  oran yeterli.
- Monte Carlo ile takvim: Çevik Pratikler bölümünde "öngörü" dersinde.
- Paydaş haritası, RACI/DACI derinliği, müzakere: İletişim ve Paydaşlar bölümünde.
