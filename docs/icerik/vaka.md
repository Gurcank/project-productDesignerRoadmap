# Vaka kitabı: Demlik

> Derslerdeki örnekler bu kurgusal şirketten gelir. Böylece bir rolün dersindeki örnek, başka bir
> rolün dersindekiyle aynı dünyada geçer: PM'in önceliklendirdiği özellik, PjM'nin planladığı
> lansmanda, BA'nın yazdığı iade kuralında, UXR'nin konuştuğu öğrencide yeniden görünür.
> Buradaki sayılar ve isimler sabittir; ders yazarken değiştirme, gerekiyorsa buraya ekle.
>
> Tamamen kurgusaldır. Gerçek bir şirket, kişi ya da ürünle benzerliği tesadüftür.

## Ürün

**Demlik**, kahve dükkânları için önceden sipariş uygulamasıdır. Müşteri siparişini telefondan
verir ve öder, kuyruğa girmeden dükkândan alır. Dükkân tarafında bir **Demlik Panel** web uygulaması
vardır: menü, stok, sipariş ekranı, gün sonu raporu.

- Kullanıcılar: kahve içen müşteriler (B2C) ve kahve dükkânları (B2B, aylık abonelik + sipariş başı
  komisyon).
- Platformlar: iOS ve Android uygulaması, müşteri web sitesi, Demlik Panel (web).
- Ödeme: bir ödeme kuruluşu üzerinden kartla ödeme; Demlik kart bilgisi saklamaz.

## Şirket ve ekip

İstanbul'da, 35 kişilik bir girişim. Ürün tarafında iki takım var.

**Sipariş takımı** (müşteri uygulaması):

| Kişi | Rol |
|---|---|
| Elif | Product Manager |
| Deniz | Product Owner |
| Selin | Product Designer |
| Mert | UX Researcher (iki takıma ortak) |
| Kaan | Scrum Master (iki takıma ortak) |
| Ece, Burak, Can | Geliştiriciler |
| Zeynep | QA |

**Panel takımı** (dükkân uygulaması):

| Kişi | Rol |
|---|---|
| Ozan | Product Owner |
| Ayşe | Business Analyst |
| Emre, Defne | Geliştiriciler |

**Kampüs projesi** için ayrıca: **Leyla**, Project Manager; sponsor **Hakan**, operasyon direktörü.

## Sayılar (bugün)

| Ölçü | Değer |
|---|---|
| Anlaşmalı dükkân | 140 |
| Aylık aktif müşteri | 38.000 |
| Günlük sipariş | 4.200 |
| Ortalama sepet | 165 TL |
| İlk siparişten sonra 30 gün içinde ikinci sipariş verenler | %41 |
| Sepetten ödemeye geçip ödemeyi bitirmeyenler | %22 |
| Uygulama mağazası puanı | 4,3 |
| Son beş siparişinde hep aynı ürünü alan aktif müşteriler | %54 |

## Açık işler

Dersler bu işlerden örnek alır.

1. **Kampüs lansmanı (proje).** Üç üniversitede 12 kampüs kafesine Demlik'i dönem başına kadar
   açmak: 14 hafta, 2,4 milyon TL bütçe. Kafelerin bir kısmı eski bir kasa (POS) sistemi kullanıyor;
   entegrasyonu bir tedarikçi yapacak. Öğrenci kartıyla indirim, kampüsün öğrenci işleriyle bir
   protokol gerektiriyor.
2. **Ödeme adımındaki düşüş (ürün).** Ödemeyi yarıda bırakma oranı %22. Hipotez: kayıtlı kart
   seçimi ekranı kafa karıştırıyor.
3. **Favori sipariş (özellik fikri).** "Her zamanki" siparişi tek dokunuşla tekrarlamak.
   Backlog'da başka fikirlerle yarışıyor: sipariş hazır bildirimi, grup siparişi, sadakat puanı.
4. **İade kuralları (analiz).** Dükkân siparişi hazırlamadan iptal ederse, hazırladıktan sonra
   iptal ederse, ürün stokta kalmazsa ne olur? Kurallar şu an üç farklı yerde, birbiriyle çelişiyor.
5. **Öğrenci araştırması (araştırma).** Kampüs öğrencileri sabah dersten önce sipariş verir mi?
   Ne kadar önceden? Mert, 8 öğrenciyle görüşme planlıyor.

## Kampüs projesinin künyesi

Proje Yönetimi dersleri bu rakamları kullanır. Haftalar projenin başından sayılır (hafta 0 = başlangıç,
hafta 14 = dönem başı, lansman).

**Hedef (tüzükten):** "Dönem başında 12 kampüs kafesinde Demlik'le sipariş alınabilsin; öğrenci
kartıyla %10 indirim çalışsın." Sponsor Hakan, proje yöneticisi Leyla.

**İş gerekçesinden:** sorun, kampüs kafelerinde ders arası 10 dakikada uzayan kuyruk. Beklenen fayda:
ilk dönemin sonunda 12 kafeden günde 600 sipariş. Üç seçenek karşılaştırıldı: hiçbir şey yapmamak,
kafeye ayrı bir tablet koymak (kasa entegrasyonu yok), kasa entegrasyonuyla tam açılış. Üçüncüsü
seçildi.

**İş kırılım yapısı (WBS):**

1. Proje yönetimi
2. Kasa entegrasyonu — 2.1 arayüz şartnamesi · 2.2 entegrasyon geliştirme · 2.3 entegrasyon testi
3. Uygulama değişiklikleri — 3.1 öğrenci kartı indirimi · 3.2 kampüs menüleri
4. Kafe hazırlığı — 4.1 kafe sözleşmeleri · 4.2 tablet ve yazıcı kurulumu, personel eğitimi
5. Kampüs ve lansman — 5.1 öğrenci işleri protokolü · 5.2 pilot kafe · 5.3 12 kafeye açılış

**Takvim ağı** (bitiş-başlangıç bağımlılıkları, hafta):

| Kod | İş | Süre | Önce bitmesi gereken |
|---|---|---|---|
| A | Kasa şartnamesi | 2 | — |
| B | Entegrasyon geliştirme | 4 | A |
| C | Entegrasyon testi | 2 | B |
| P | Öğrenci işleri protokolü | 3 | — |
| D | Öğrenci kartı indirimi | 4 | P |
| S | Kafe sözleşmeleri | 3 | — |
| K | Kurulum ve eğitim | 3 | S |
| T | Pilot kafe | 2 | C, D, K |
| Y | 12 kafeye açılış | 3 | T |

Kritik yol A → B → C → T → Y = 13 hafta; dönem başına 1 hafta tampon kalır. D'nin 1, K'nin 2 hafta
bolluğu var. Kilometre taşları: şartname onayı (2), entegrasyon hazır (8), pilot başarılı (10),
lansman (14).

**Tahmin:** entegrasyon geliştirme için tedarikçinin üç tahmini: iyimser 3, en olası 4, kötümser 8
hafta → beklenen (3 + 4×4 + 8) / 6 = 4,5 hafta.

**Bütçe (2,4 milyon TL):**

| Kalem | TL |
|---|---|
| Kasa entegrasyonu (tedarikçi, sabit fiyat) | 900.000 |
| Uygulama değişiklikleri (iç ekip zamanı) | 600.000 |
| Kafe hazırlığı (12 kafe: tablet, yazıcı, eğitim) | 360.000 |
| Lansman kampanyası | 240.000 |
| Proje yönetimi | 120.000 |
| İhtiyat (contingency) | 180.000 |

Bunun dışında Hakan'ın elinde 120.000 TL yönetim rezervi var. Kafe hazırlığı parametrik tahmindir
(kafe başına 30.000 TL × 12). Lansman kampanyası analog tahmindir: geçen yıl İzmir'deki şehir
lansmanı kampanyası 200.000 TL'ydi, kampüs için %20 artırıldı.

**7. hafta durumu (kazanılmış değer):** planlanan değer (PV) 1.200.000, kazanılmış değer (EV)
1.020.000, gerçekleşen maliyet (AC) 1.150.000 TL → SPI 0,85, CPI ≈ 0,89, tamamlanma tahmini
(EAC) ≈ 2,71 milyon TL. Neden: tedarikçinin test ortamı 6. haftada hazır değildi.

**Pilotun kabul kriterleri (2. haftada yazıldı):** iki hafta boyunca siparişlerin %98'i kasaya hatasız
düşer; sipariş ödemeden sonra 5 saniye içinde kafede görünür; 50 test siparişinde indirim hatasız
uygulanır; kafe personelinin hepsi eğitimi tamamlar. Pilotta örtük bir gereksinim çıktı: fiş, baristanın
50 cm'den okuyabileceği boyutta basılmalı.

**Sonra ne oldu:** 7. haftanın durum raporu sarıydı. Hakan aşımı yönetim rezervinden karşıladı
(kampanya kesilmedi). Pilot bir hafta gecikti (11. hafta), tampon kullanıldı, lansman 14. haftada
yapıldı. Proje 2.520.000 TL'ye kapandı (%5 aşım); ihtiyat, ikinci dalga ve test gecikmesine gitti.

**Risk kaydından:** tedarikçi entegrasyonu gecikir (olasılık yüksek, etki yüksek); protokol dönem
başına yetişmez (orta, yüksek); kafe personeli sistemi benimsemez (orta, orta); ödeme kuruluşu
kampüs mağazaları için ek onay ister (düşük, yüksek). Fırsat: üniversite kendi duyurusunda Demlik'i
tanıtabilir.

**RAID kaydından:** tüzükteki varsayım "kart numaraları bir arayüzle doğrulanabilir" 3. haftada yanlış
çıktı: öğrenci işleri her pazartesi bir kart listesi gönderiyor. Listede olmayan öğrenciyi kafe
personeli elle onaylıyor (Elif'in kararı). 6. haftada tedarikçi riski gerçekleşti ve sorun oldu.

**Değişiklik talebi (5. hafta):** Hakan ikinci bir üniversiteden 3 kafe daha ister (12 → 15). Etki:
+90.000 TL, +1 hafta. Karar: 3 kafe lansmandan sonra ikinci dalgada açılır.

**Kampüs programı (lansmandan sonra):** Hakan kampüs işlerini bir programa çevirdi. Fayda hedefi:
bir yıl içinde kampüslerden günde 2.000 sipariş. Projeler: ikinci dalga (3 kafe), iki şehirde yeni
kampüsler, kampüs sadakat puanı. Program yöneticisi Leyla. Ödeme altyapısı yenileme projesi
programın dışında, portföyde ondan önce sıralandı.

## Paydaşlar

| Paydaş | İlgi | Etki |
|---|---|---|
| Hakan (operasyon direktörü, kampüs projesinin sponsoru) | Yüksek | Yüksek |
| Kampüs kafeleri işletmecileri | Yüksek | Orta |
| Üniversite öğrenci işleri | Orta | Yüksek |
| POS tedarikçisi | Orta | Orta |
| Ödeme kuruluşu | Düşük | Yüksek |
| Müşteri hizmetleri ekibi | Yüksek | Düşük |
| Yatırımcılar | Orta | Yüksek |

## Takvim

- İki haftalık sprintler; sprint pazartesi başlar.
- Kampüs lansmanı: 14 hafta sonra, dönemin ilk haftası.
- Çeyrek hedefi (OKR): "Tekrar eden siparişi artır" — anahtar sonuç: 30 günde ikinci sipariş
  oranını %41'den %50'ye çıkarmak.
