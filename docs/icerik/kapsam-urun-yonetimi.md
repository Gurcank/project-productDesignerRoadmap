# Kapsam haritası: Ürün Yönetimi

> Ders üretim hattının 1. ve 2. adımı ([ders-standardi.md](ders-standardi.md)). Kaynakların hepsi
> tarayıcı panelinde açılıp okundu (2026-10-19). Bu bölüm, **Ürün Geliştirme** bölümünün üstüne kurulur:
> orada keşif, backlog, roadmap ve belgeler herkese tanıtılır; burada neyin, kimin için ve neden
> yapılacağına karar vermenin derinliği gelir.

## Birincil kaynaklar

| Kısaltma | Kaynak | Ne için |
|---|---|---|
| SVPG-R | Marty Cagan, "The Four Big Risks" (2017) | Dört risk ve kimin sorumlu olduğu |
| SVPG-S | Cagan, "Product Strategy – Overview" (2020) | Odak, içgörü, eylem, yönetim; Rumelt |
| SVPG-V | Cagan, "Vision vs. Strategy" (2016) | Vizyon (2–5 yıl), strateji, ürün ilkeleri |
| VPC | Strategyzer, Value Proposition Canvas (resmî sayfa) | Müşteri profili, değer haritası, uyum |
| Dunford | April Dunford, "A Quickstart Guide to Positioning" (2021) | Konumlandırmanın tanımı ve beş bileşeni |
| OST | Teresa Torres, "Opportunity Solution Trees" (2023) | Sonuç, fırsat, çözüm, varsayım testi; üç sonuç türü |
| AT | Torres, "Assumption Testing" (2023) | Beş varsayım türü, dört test türü, Bland'ın varsayım haritası |
| Kano | Folding Burritos, "The Complete Guide to the Kano Model"; Wikipedia | Kategoriler, çift soru, hayranlığın çürümesi |
| CoD | Black Swan Farming, "Cost of Delay" | Gecikme maliyeti, CD3, Maersk örneği |
| WSJF | SAFe, "Weighted Shortest Job First" (açık kısım) | Tanım ve bileşenler |
| NNL | Janna Bastow, "Why I Invented the Now-Next-Later Roadmap" (2022) | Üç ufuk, problem düzeyinde öncelik |
| PRD | Atlassian, "How to create a PRD" | Sekiz bölüm, anti-paternler |
| Tier | Pragmatic Institute, "Product Launch Tiers" | Üç lansman katmanı, istisna |
| Loops | Reforge, "Growth Loops are the New Funnels" (2018) | Hunilerin sınırları, döngü, Pinterest |
| PLG | ProductLed, "Product-Led Growth" (2023) | Tanım, faydalar, nedenler |
| PLC | Universal Marketing Dictionary (AMA) | Dört evre ve dört öncül |
| Sunset | Des Traynor, "How to sunset a feature" (Intercom, 2015) | Özelliği emekliye ayırmanın dört adımı |
| No | Des Traynor, "Product strategy means saying no" (Intercom, 2013) | On iki "evet" gerekçesi |

**Kullanılmayanlar:** SAFe'in WSJF ayrıntısı ve Strategyzer playbook'ları giriş ya da ücret istiyor.
Sourcegraph'ın emeklilik el kitabı ve Atlassian'ın ürün yaşam döngüsü sayfası 404 döndü. Wikipedia'nın
ürün yaşam döngüsü maddesi tek kaynaklı ve uyarılı olduğu için kullanılmadı.

## Kavram → ders

| # | Ders (slug) | Kavramlar | Görsel | Araç |
|---|---|---|---|---|
| 1 | pm-isi-ve-dort-risk | PM'in hesap verdiği şey (sonuç), değer, kullanılabilirlik, yapılabilirlik, iş uygunluğu riskleri; kim neden sorumlu; riskleri erken ele almak | Tree (fikir ve dört risk, sahipleriyle) | — |
| 2 | vizyon-ve-strateji | vizyon (2–5 yıl, ikna edici), ürün ilkeleri, strateji (odak, içgörü, eylem, yönetim), kötü strateji | Layers (vizyon → strateji → keşif → teslimat) | one-pager |
| 3 | deger-onerisi-ve-konumlandirma | müşteri profili (işler, acılar, kazanımlar), değer haritası, uyum; konumlandırma tanımı, beş bileşen, sıra | Tree (değer önerisi tuvali) | — |
| 4 | surekli-kesif-ve-firsat-cozum-agaci | üç sonuç türü, fırsat ≠ çözüm, kılık değiştirmiş çözüm testi, fırsat değerlendirme, üç çözüm | Tree (OST) | firsat-cozum-agaci |
| 5 | varsayim-haritalama-ve-urun-deneyleri | beş varsayım türü, önem × kanıt haritası, dört test türü, başarı ölçütünü önceden yazmak, A/B'nin yeri | Matrix2x2 (önem × kanıt) | deney-karti |
| 6 | kano-deger-efor-ve-gecikme-maliyeti | Kano kategorileri ve çift soru; değer/efor matrisi; gecikme maliyeti; CD3 ve WSJF | Matrix2x2 (değer × efor) ve WSJF tablosu | — |
| 7 | sonuc-odakli-yol-haritasi | çıktı ≠ sonuç, Now-Next-Later, problem düzeyinde öncelik, OST ve OKR bağlantısı, tarih istendiğinde | Layers (üç ufuk) | now-next-later |
| 8 | prd-anatomisi | PRD'nin sekiz bölümü, yaşayan belge, anti-paternler, "yapmadıklarımız" | Layers (PRD bölümleri) | prd |
| 9 | lansman-ve-gtm | lansman katmanları, etkiye göre kaynak, konumlandırmadan mesaja, hazırlık listesi | Layers (üç katman) | lansman-plani |
| 10 | buyume-donguleri-ve-plg | huni (AARRR) ve sınırları, büyüme döngüsü, Demlik'in iki taraflı döngüsü, PLG | Cycle | — |
| 11 | yasam-dongusu-ve-ozellik-emekliligi | dört evre ve öncüller, evreye göre strateji, özelliği emekliye ayırmanın dört adımı | Chart (temsilî yaşam döngüsü eğrisi) | — |
| 12 | trade-off-ve-hayir-demek | strateji = seçim, on iki "evet" gerekçesi, iyi bir "hayır" cümlesi, paydaşla konuşma | Matrix2x2 (değer × stratejiye uyum) | — |


## Ürün Geliştirme bölümünün v2'ye yükseltilmesi

| Ders | Değişen |
|---|---|
| urun-gelistirme-yasam-dongusu | Yedi rol merceği; Demlik vakası; sürekli keşif dersine bağlantı |
| discovery-problemi-bulma-asamasi | Fırsat ≠ çözüm (OST) ve varsayım dersine bağlantı |
| arastirma-ve-kullanici-bilgisi | Vaka: Mert'in 8 öğrenci görüşmesi; araştırma dersleri için zemin |
| gereksinimler-epic-user-story-acceptance-criteria | Given-When-Then ve iyi gereksinim derslerine bağlantı |
| belgeler-spec-prd-one-pager-brief | PRD anatomisi dersine ve PRD şablonuna bağlantı |
| hazir-ve-bitmis-tanimlari-handoff | Çevik Pratikler'deki hazır/bitti tanımı şablonuna bağlantı |
| kapsam-mvp-poc-scope-creep | Bağlam diyagramı ve değişiklik kontrolüne bağlantı |
| roadmap-ve-planlama | Sonuç odaklı yol haritası dersine bağlantı |
| yayin-turleri | Lansman ve özellik emekliliği derslerine bağlantı |

Materyaldeki doğru bilgi atılmaz; ders v2 iskeletine, Demlik vakasına ve rol merceklerine taşınır.

## Rol öncelikleri (roles.ts istisnaları)

Kategori düzeyi: PD Ö · PM T · PO T · PjM İ · SM Ö · BA Ö · UXR Ö. Konu düzeyinde:

| Ders | PD | PO | SM | BA | UXR |
|---|---|---|---|---|---|
| pm-isi-ve-dort-risk | Ö | Ö | İ | İ | Ö |
| vizyon-ve-strateji | İ | T | Ö | İ | İ |
| deger-onerisi-ve-konumlandirma | İ | Ö | İ | Ö | Ö |
| surekli-kesif-ve-firsat-cozum-agaci | Ö | T | İ | İ | Ö |
| varsayim-haritalama-ve-urun-deneyleri | Ö | T | İ | İ | Ö |
| kano-deger-efor-ve-gecikme-maliyeti | İ | T | İ | Ö | İ |
| sonuc-odakli-yol-haritasi | İ | T | Ö | İ | İ |
| prd-anatomisi | İ | T | İ | Ö | İ |
| lansman-ve-gtm | İ | Ö | İ | İ | İ |
| buyume-donguleri-ve-plg | İ | İ | İ | İ | İ |
| yasam-dongusu-ve-ozellik-emekliligi | İ | Ö | İ | İ | İ |
| trade-off-ve-hayir-demek | İ | T | Ö | Ö | İ |

PM'in hepsi Temel; PjM'nin hepsi İsteğe bağlı.

## Çakışma tablosu

| Kavram | Asıl yeri | Bu bölümde |
|---|---|---|
| Discovery, problem tanımı, hipotez, JTBD | urun-gelistirme/discovery… | Fırsat-çözüm ağacı ve varsayım testi derinleşir |
| RICE, ICE, MoSCoW | urun-gelistirme/backlog-ve-onceliklendirme | Kano, değer/efor, gecikme maliyeti ve WSJF |
| Roadmap, Now/Next/Later (temel) | urun-gelistirme/roadmap-ve-planlama | Sonuç odaklılık, OST ve OKR bağlantısı |
| PRD (belge türü olarak) | urun-gelistirme/belgeler… | PRD'nin bölüm bölüm yazımı |
| Alpha, beta, GA, kaldırma | urun-gelistirme/yayin-turleri | Lansman katmanları; özellik emekliliğinin adımları |
| MVP, kapsam | urun-gelistirme/kapsam… | Trade-off ve "hayır" |
| Roller, PM/PO farkı | urun-gelistirme/ekipteki-roller; roller sayfaları | PM'in işi dört risk üzerinden |
| OKR, North Star | calisma-bicimi/hedef-ve-olcum… | Roadmap'te sonuç olarak |
| Huni, AARRR, kohort | ileride urun-analitigi | Büyüme döngüsü yalnız kavram düzeyinde |
| İş modeli, fiyat | ileride is-ve-strateji | Değer önerisi ve konumlandırma |
