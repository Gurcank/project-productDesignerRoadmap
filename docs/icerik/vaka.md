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

## Takımların çalışma biçimi

Çevik Pratikler dersleri bu rakamları kullanır.

**Sipariş takımı Scrum çalışır.** İki haftalık sprint, pazartesi başlar. Planlama pazartesi 10.00–12.00,
Daily Scrum her gün 09.45'te 15 dakika, review ve retro ikinci haftanın cuması (review 14.00–15.00,
retro 15.30–16.30). Refinement her çarşamba 1 saat. Geliştiriciler: Ece, Burak, Can, Zeynep (QA) ve
sprintte iş aldığında Selin.

- Son altı sprintin tamamlanan story sayısı: 9, 7, 10, 8, 6, 9. Son üç sprintin velocity'si 24, 22,
  26 puan (ortalama 24).
- Son on haftanın haftalık throughput'u (biten öğe): 4, 6, 3, 5, 7, 4, 5, 6, 2, 5.
- Ürün hedefi (çeyrek): "Tekrar eden siparişi kolaylaştır" (OKR ile aynı yön).
- Sprint 14 hedefi: "Müşteri son siparişini tek dokunuşla tekrarlayabilsin."

**Panel takımı Kanban çalışır.** Dükkânlardan gelen istekler ve hatalar sürekli akar. Pano:
Gelen → Analiz (WIP 2) → Geliştirme (WIP 3) → Test (WIP 2) → Yayında. Hizmet seviyesi beklentisi
(SLE): "İşlerin %85'i 8 gün ya da daha kısa sürede biter." Son dört haftada ortalama WIP 5, haftalık
ortalama throughput 5 öğe (iş günü başına 1): Little Yasası'na göre ortalama cycle time 5 iş günü.

**Favori sipariş için story map:** faaliyetler Uygulamayı aç → Siparişi seç → Öde → Teslim al.
Yürüyen iskelet (ilk sürüm): ana ekranda "Son siparişini tekrarla" düğmesi, kayıtlı kartla ödeme,
hazır bildirimi. Sonraki sürümler: favori listesi, tekrar etmeden önce düzenleme, zamanlanmış sipariş.

**Çalışma sözleşmesinden:** ortak çalışma saatleri 10.00–16.00; toplantısız çarşamba öğleden sonra;
bir PR en geç bir iş günü içinde incelenir; Daily Scrum'a gelemeyen, panoya yazılı not bırakır.

**Bir retro (Sprint 13):** Sailboat formatı. Rüzgâr: Zeynep'in erken test senaryoları. Çapa: kasa
tedarikçisinden geç gelen API değişiklikleri. Eylem: "Tedarikçinin API değişikliklerini Ayşe her salı
panoya işler" (sahibi Ayşe, Sprint 14 sonunda kontrol).

## İade kuralları analizi

İş Analizi dersleri bu rakamları kullanır. Analizi panel takımında **Ayşe** (BA) yürütür; karar
sahibi **Ozan** (PO).

**Bugünkü durum:** iade kuralı üç yerde yazılı ve üçü birbirini tutmuyor: uygulamadaki iptal metni,
Demlik Panel'in yardım sayfası ve destek ekibinin el kitabı. Müşteri iptal isteğini destek ekibine
yazar; destek dükkânı arar, sonra iadeyi Panel'den elle başlatır. Ödeme kuruluşu iadeyi 1–3 iş
gününde karta yansıtır.

**Sipariş durumları:** Alındı → Hazırlanıyor → Hazır → Teslim edildi. İptal ilk üç durumda olabilir.

**Sayılar:** geçen ay iadeyle ilgili 310 destek talebi geldi. Ayşe 60 tanesini okudu: 26'sı
"beklediğim iadeyi alamadım", 18'i "dükkân iptal etti ama haberim olmadı", 16'sı başka konular.

**Beş neden (Ayşe'nin atölyesi):**

1. Müşteriler neden şikâyet ediyor? Bekledikleri iadeyi alamıyorlar.
2. Neden? Uygulama "tam iade" diyor, destek el kitabı "hazırlanan siparişe iade yok" diyor.
3. Neden iki metin farklı? Üçünü üç ayrı ekip, farklı zamanlarda yazdı.
4. Neden ayrı ekipler yazdı? İade kuralının bir sahibi yok.
5. Neden sahibi yok? İade, ilk yıl bir destek politikası olarak başladı; hiçbir zaman ürün gereksinimi
   olarak yazılmadı.

Kök neden: **iade kuralının tek bir kaynağı ve sahibi yok.**

**İhtiyaç → hedef → amaç:**

- İhtiyaç: müşteri ve dükkân, bir iptalde ne kadar iade yapılacağını önceden ve aynı şekilde bilmeli.
- Hedef: iade kararı tek bir kurala bağlı ve her yerde aynı olsun.
- Amaç: üç ay içinde iadeyle ilgili destek taleplerini ayda 310'dan 150'nin altına indirmek.

**Çıkarma (elicitation):** dört dükkân çalışanıyla görüşme; iki dükkânda sabah yoğunluğunda gözlem;
üç metnin doküman analizi; 60 destek talebinin okunması; Ozan, destek ekibi lideri ve finansla bir
atölye (kolaylaştırıcı Kaan). **Gözlemden çıkan:** stok bittiğinde çalışanlar siparişi iptal etmiyor,
müşteriyi telefonla arayıp başka ürün öneriyor. Görüşmelerde bunu kimse söylememişti.

**İade kararı (karar tablosu, UNIQUE):**

| # | Sipariş durumu | İptal eden | Stok sorunu | İade | %20 kupon |
|---|---|---|---|---|---|
| 1 | Alındı | Müşteri | – | Tam | Hayır |
| 2 | Alındı | Dükkân | Hayır | Tam | Hayır |
| 3 | Alındı | Dükkân | Evet | Eksik ürün kadar | Hayır |
| 4 | Hazırlanıyor | Müşteri | – | Yok | Hayır |
| 5 | Hazırlanıyor | Dükkân | Hayır | Tam | Evet |
| 6 | Hazırlanıyor | Dükkân | Evet | Eksik ürün kadar | Hayır |
| 7 | Hazır | Müşteri | – | Yok | Hayır |
| 8 | Hazır | Dükkân | – | Tam | Evet |

3 durum × 2 iptal eden × 2 stok = 12 olasılık; sekiz kural hepsini tam bir kez karşılar. "Stok
sorunu" yalnız dükkân bir ürünü veremediğinde "Evet" olur; o zaman sipariş kalan ürünlerle sürer.

**Gereksinimlerden örnekler:**

| Kimlik | Tür | Metin |
|---|---|---|
| İG-1 | İş | Üç ay içinde iadeyle ilgili destek talepleri ayda 310'dan 150'nin altına iner. |
| PG-1 | Paydaş | Dükkân çalışanı, iptal etmeden önce müşterinin ne kadar iade alacağını görür. |
| PG-2 | Paydaş | Müşteri, iptal düğmesine basmadan önce ne kadar iade alacağını görür. |
| FG-1 | İşlevsel | Sistem iade tutarını "İade kararı" tablosuna göre hesaplar. |
| FG-2 | İşlevsel | Sistem iadeyi ödeme kuruluşuna iptal anında otomatik gönderir. |
| FG-3 | İşlevsel | Sistem, kupon gereken iptalde %20 kuponu müşterinin hesabına ekler. |
| FG-4 | İşlevsel | Sistem, dükkân iptal ettiğinde müşteriye sebebiyle birlikte bildirim gönderir. |
| İOG-1 | İşlevsel olmayan | İade kararı iptalden sonra en geç 5 saniye içinde müşterinin ekranında görünür. |
| GG-1 | Geçiş | Yayından önce eski yardım sayfası ve el kitabındaki iade metinleri kaldırılır; destek ekibi bir saatlik eğitim alır. |

**Bağlam:** "Demlik iade" sistemi müşteriden ve dükkân çalışanından iptal alır, destek ekibine
itirazları gösterir, ödeme kuruluşuna iadeyi gönderir, finansa gün sonu iade raporu verir.
**Kapsam dışı:** müşterinin bankasına yaptığı ödeme itirazları (chargeback) ve kupon kampanyaları.

**Veri:** yeni varlık **İade** (iade no, sipariş no, tutar, sebep, uygulanan kural no, durum:
başlatıldı / tamamlandı / başarısız, oluşturulma zamanı). Kart bilgisi tutulmaz; müşteriye sipariş
üzerinden bağlanır.

**UAT (iki hafta önce yayın):** üç pilot dükkânın çalışanları ve iki destek uzmanı, bir hafta,
15 senaryo (12 kombinasyon + 3 uç durum: ödeme kuruluşu yanıt vermez, aynı siparişe iki iptal, gece
yarısı iptal). 14 senaryo geçti; 8. kuralda kupon müşteriye bildirilmedi, düzeltildi. Çalışanlar
"Kısmi iade" ifadesini anlamadı; metin "Eksik ürünlerin tutarı iade edilir" oldu.

**Ayrıntılar (derslerde geçen sabitler):**

- Bütün dükkânlarda günde 30–40 iptal olur. Örneklerdeki müşteri Ada, Moda şubesi, 165 TL'lik sipariş;
  kupon sipariş tutarının %20'si, yani 33 TL (Ozan'ın kararı).
- Use case "Siparişi dükkân olarak iptal et": ödeme kuruluşu yanıt vermezse sistem 3 kez dener, sonra
  iadeyi "başarısız" kaydeder ve destek ekibine uyarı düşer (5a); aynı siparişe ikinci iptal reddedilir (5b).
- Boşluklar: B1 tek kural kaynağı, B2 müşteriye bildirim, B3 otomatik iade, B4 çalışanın tutarı görmesi,
  B5 eksik ürün işaretleme, B6 finansa gün sonu raporu, B7 telefonla ürün önerisini sisteme taşımak.
  İlk sürüm B1–B5 (B5, karar tablosunun 3. ve 6. kuralı ona dayandığı için öne alındı), ikinci sürüm B6,
  B7 sonraki çeyreğin adayı. Varsayım "ödeme kuruluşu kısmi iadeyi otomatik kabul eder" ilk sprintten
  önce doğrulandı.
- Story'ler: S-41 (çalışan tutarı görür), S-42 (karar tablosu), S-43 (otomatik iade), S-44 (kupon),
  S-45 (bildirim), S-46 (eski metinler ve eğitim), S-47 (müşteri tutarı görür; sipariş takımına gitti).
  Otomatik testler T-K1…T-K8 (kural başına bir), yük testi P-1, kabul senaryoları UAT-01…UAT-15.
- Veri sözlüğü: iade_no (IA-…), siparis_no, tutar, sebep (stok sorunu / müşteri isteği / dükkân kapalı /
  diğer; eskiden serbest metindi), kural_no (1–8), durum, olusturma. Müşterinin telefonu iade kaydına
  alınmadı. Saklama süresi hukuka soruldu, açık soru.
- Sprint ortasında finans kuponun %15'e inmesini istedi; Ozan etki analizini görüp değişikliği bir
  sonraki sürüme bıraktı.

**Sonra ne oldu:** üç ay sonra iadeyle ilgili destek talepleri ayda 140'a indi; amaç tuttu. İki dükkân
stok bitince hâlâ müşteriyi telefonla arıyordu (kurum sınırlaması); Ayşe B7'yi önerdi.

## Ürün kararları (sipariş takımı)

Ürün Yönetimi dersleri bu rakamları kullanır. Karar sahibi **Elif** (PM); araştırma **Mert**.

**Vizyon (üç yıl):** "Bağımsız kahve dükkânlarında hiç kimse kahvesi için kuyrukta beklemesin."
**Ürün ilkeleri:** (1) Bir sipariş en çok üç dokunuş sürer. (2) Dükkânın düzenini bozmayız: her
özellik önce bir baristanın iş akışında denenir. (3) Müşteriye sürpriz ücret yok.

**Strateji (bu yıl):** odak, düzenli sabah müşterisi. İçgörü: aktif müşterilerin %54'ü son beş
siparişinde hep aynı ürünü aldı; ilk siparişten sonra 30 günde ikinci sipariş %41. **Yapmayacaklarımız:**
eve teslimat (kurye), kampüs dışında yeni şehir, zincir kafeler için özel uygulama.

**Değer önerisi tuvali (sabah müşterisi):** işler — sabah kahvesini yolda almak, derse ya da işe geç
kalmamak. Acılar — kuyruk, her sabah aynı siparişi baştan kurmak, ödemede kart karmaşası (%22 yarıda
bırakma), kahvenin hazır olup olmadığını bilmemek. Kazanımlar — kahve geldiğinde hazır, dükkânın onu
tanıması. Değer haritası: önceden sipariş ve ödeme (kuyruk), son siparişi tekrarla (baştan kurmak),
hazır bildirimi (bekleme).

**Konumlandırma:** rakip alternatifler — kuyrukta beklemek, dükkânı telefonla aramak, yemek teslimat
uygulamaları, büyük zincirlerin kendi uygulamaları. Farklılaştırıcılar — 140 bağımsız dükkân tek
uygulamada, gel-al (kurye ücreti yok), dükkânın kasasına doğrudan düşen sipariş. Pazar kategorisi —
"mahalle kahvecileri için önceden sipariş", "yemek siparişi" değil.

**Fırsat-çözüm ağacı:** sonuç (ürün sonucu) — 30 günde ikinci sipariş %41 → %50. Anlar: sipariş
vermeden önce, sipariş verirken, teslim alırken. Fırsatlar — "her sabah aynı şeyi baştan seçiyorum",
"kartımı her seferinde seçiyorum", "kahvem hazır mı bilmiyorum, erken gidip bekliyorum", "arkadaşlarla
tek siparişte birleşemiyoruz", "sevdiğim dükkân açık mı bilmiyorum". Hedef fırsat: "her sabah aynı şeyi
baştan seçiyorum". Üç çözüm: son siparişi tekrarla, favori listesi, zamanlanmış sipariş.

**Varsayım testleri (iki hafta):**

| Kimlik | Tür | Varsayım | Test | Başarı ölçütü (önceden) | Sonuç |
|---|---|---|---|---|---|
| V1 | İstek | Sabah müşterileri tek dokunuşla tekrar etmek ister | Veri: son beş sipariş | Aktiflerin en az %40'ı hep aynı ürünü alıyor | %54, geçti |
| V2 | Kullanılabilirlik | Müşteri ana ekrandaki düğmeyi fark eder | Prototip testi, 8 kişi | 8'den en az 6'sı 10 saniyede bulur | 7/8, geçti |
| V3 | Yapılabilirlik | Son siparişin ürünleri hâlâ menüde | Veri: son siparişler | En az %85'inde ürünlerin hepsi menüde | %91, geçti (kalan %9 için "biten ürünü çıkar" story'si) |
| V4 | İş uygunluğu | Tekrar sipariş sepeti küçültmez | Veri: tekrar eden siparişler | Ortalama sepet %10'dan fazla düşmez | 158 TL (165'e göre −%4), geçti |
| V5 | Etik | Zamanlanmış sipariş istenmeden ödeme almaz | Test edilmedi | — | Kural: her zamanlanmış siparişten 30 dk önce bildirim |

Karar: önce "son siparişi tekrarla"; zamanlanmış sipariş sonraki sürümde.

**Kano anketi (240 aktif müşteri):** sipariş hazır bildirimi — must-be; favori sipariş — performance;
sadakat puanı — attractive; grup siparişi — çoğunluk için indifferent, öğrencilerin üçte biri için
attractive.

**Gecikme maliyeti ve WSJF (göreli, 1–10):**

| Fikir | Değer | Zaman kritikliği | Risk azaltma / fırsat | Gecikme maliyeti | Süre | WSJF |
|---|---|---|---|---|---|---|
| Sipariş hazır bildirimi | 5 | 8 | 2 | 15 | 1 | 15,0 |
| Favori sipariş (son siparişi tekrarla) | 8 | 3 | 5 | 16 | 3 | 5,3 |
| Grup siparişi | 3 | 2 | 3 | 8 | 5 | 1,6 |
| Sadakat puanı | 5 | 1 | 2 | 8 | 5 | 1,6 |

Bildirimin zaman kritikliği kampüs lansmanından gelir: öğrenciler ders arasında hazır olduğunu bilmek
ister. Elif bildirimi (1 puanlık iş) favori siparişle aynı sprinte aldı.

**Yol haritası (Now–Next–Later):** Now — "Tekrar siparişi kolaylaştır" (%41 → %50; son siparişi
tekrarla, hazır bildirimi). Next — "Ödemeyi yarıda bırakmayı azalt" (%22 → %15). Later — "Arkadaşlarla
birlikte sipariş" ve "Kampüs sabahları".

**Lansman katmanları:** kampüs lansmanı — 1. katman; "Son siparişini tekrarla" — 2. katman (uygulama içi
duyuru, en az üç siparişi olan müşterilere e-posta, mağaza notu, Panel'de dükkânlara not; önce %10
kullanıcı, sonra herkes); iade kuralı — 3. katman (Panel'de not, destek eğitimi).

**Büyüme döngüsü:** dükkân Demlik'e katılır → kasadaki QR kartıyla müşterilerini davet eder → müşteri
uygulamayı indirip sipariş verir → uygulamadaki "dükkân öner" ile gittiği başka dükkânı önerir → yeni
dükkân katılır. Geçen yıl katılan dükkânların %30'u müşteri önerisiyle geldi. Demlik Panel'in ilk ayı
ücretsiz; dükkân kurulumu kendisi yapabilir.

**Yaşam döngüsü ve emeklilik:** Demlik büyüme evresinde. "Masaya servis" özelliği (müşteri masadan
sipariş verir, barista getirir) 140 dükkânın 12'sinde açık, siparişlerin %3'ü; yoğun kullanan 4 dükkân.
Karar: kaldırmak. Yeni dükkânlara kapatıldı; 8 az kullanan dükkânda gizlendi; 4 dükkâna üç ay önceden
haber verildi, alternatif: masadaki QR'dan gel-al siparişi ve isimle çağırma.

**Ayrıntılar (derslerde geçen sabitler):**

- Strateji yazılmadan önce ofis duvarında kırka yakın fikir vardı; otuzu "şimdi değil" oldu.
- Önceki çeyreğin yol haritası slaydı: on iki özellik, her birinin yanında bir ay; altısı o ay
  çıkmadı, ikisi çıktı ama kullanılmadı. Slaytta "Mart'ta favori listesi, Nisan'da yeni ödeme
  ekranı, Haziran'da grup siparişi" yazıyordu.
- Mert'in sekiz öğrenci görüşmesinin beşinde "her seferinde aynı şeyi arıyorum" geçti. Fırsat-çözüm
  ağacı bu sekiz görüşmeye ve önceki çeyrekten altı müşteri görüşmesine dayanır. Menüde arama
  yapanların çoğu, son siparişlerinde zaten aldıkları ürünü arıyordu.
- V2 prototip testinde düğmeyi bulamayan katılımcı onu "kampanya" sandı; Selin düğmeyi sipariş
  içeriğiyle gösterdi ("Orta boy filtre kahve · Moda"). Favori listesinin varsayımı aynı oturumda
  sınandı: sekiz kişiden üçü favori kaydetti (ölçüt beşti).
- Ödeme adımı araştırması (Mert): analitik, bırakanların çoğunun kart seçim ekranında ayrıldığını
  gösterdi; beş kişilik testte dördü hangi kartın seçili olduğunu söyleyemedi. Kartının süresi dolan
  müşteriler bankadan uyarı alıyor ama Demlik'te kartı güncellemenin yolunu bulamıyordu.
- "Son siparişini tekrarla" yayını: bir hafta ekip içi kullanım (ofisin karşısındaki dükkândan);
  Can, düğmenin kapalı dükkânlarda da göründüğünü buldu. Sonra %10 kullanıcı bir hafta, durdurma
  koşulu hatalı siparişlerin %1'i geçmesi; sonra herkes. Lansman ölçüsü: ilk ayda sabah
  müşterilerinin %25'i düğmeyi en az bir kez kullanır.
- Tekrar sipariş her zaman son siparişin dükkânına gider (spec kuralı).
- Kampüs lansmanına on hafta kala Leyla, öğrencilerin hazır bildirimine ihtiyacını hatırlattı.
- "Dükkân öner" düğmesi profil sayfasının en altındaydı; bir sonraki çeyreğin aday işi.
- Demlik'te mali yıl Ocak'ta başlar.

**"Hayır" listesi (bir çeyrekte gelen talepler):** yatırımcıdan eve teslimat; sekiz dükkânlı en büyük
müşteri "Köşe Kahve"den kendine özel sadakat sistemi; rakipte var diye aylık kahve aboneliği; bir
geliştiriciden "iki saatlik iş" diye karanlık mod. Elif'in cevabı her biri için yazılı.

## Analitik ve iş rakamları

Ürün Analitiği ile İş Modeli ve Strateji dersleri bu rakamları kullanır. Analitik tarafında veri
sorularını Elif ve Mert sorar, panoyu Ece kurar; iş tarafında rakamların sahibi finans ve Hakan'dır.

**North Star ve metrik ağacı:** North Star "haftalık tamamlanan sipariş" (bugün 29.400 = 4.200 × 7).
Girdiler: haftalık aktif müşteri (21.000), müşteri başına haftalık sipariş (1,4), ödeme tamamlama
oranı (%78), aktif dükkân (140), söz verilen sürede hazır olan sipariş oranı (%91). Takım metrikleri:
30 günde ikinci sipariş %41 (sipariş takımı), aylık iade talebi 310 (panel takımı).

**"Aktif müşteri" tanımı:** son 30 günde en az bir siparişi tamamlanmış müşteri (uygulamayı açmak
sayılmaz). Aylık aktif müşteri 38.000.

**AARRR (bir aylık):** edinme — 12.000 yeni kayıt (kasadaki QR %45, Instagram reklamı %35, arkadaş
daveti %20); aktivasyon — kayıttan sonra 7 gün içinde ilk siparişini tamamlayanlar %55 (6.600);
elde tutma — 30 günde ikinci sipariş %41; tavsiye — "dükkân öner" ve arkadaş daveti; gelir —
dükkân komisyonu ve aboneliği.

**Haftalık sipariş hunisi:** uygulamayı açan 60.000 → ürün görüntüleyen 42.000 → sepete ekleyen
21.000 → ödemeye geçen 16.000 → ödemeyi tamamlayan 12.480 (%78; bırakma %22).

**Kohort tablosu (ilk sipariş ayına göre; o ayda en az bir sipariş verenlerin oranı):**

| Kohort | Ay 1 | Ay 2 | Ay 3 |
|---|---|---|---|
| Ocak | %41 | %30 | %26 |
| Şubat | %40 | %29 | %25 |
| Mart | %42 | %31 | %27 |
| Nisan | %41 | %30 | — |
| Mayıs | %43 | — | — |

**Segmentler:** sabah müşterisi (haftada 3+ sipariş) aktiflerin %25'i ama siparişlerin %60'ı;
öğrenciler (kampüs) aktiflerin %15'i, ortalama sepet 120 TL; sabah müşterisinin ortalama sepeti ≈ 170 TL; ara sıra gelenler (ayda 1; çoğu zaman birkaç kişilik sipariş, ortalama sepet ≈ 190 TL) aktiflerin
%40'ı. Edinme kanalına göre 30 günde ikinci sipariş: QR %52, arkadaş daveti %47, Instagram %28.

**İzleme planı (seçme):** olaylar İngilizce, Nesne + Eylem, Title Case; özellikler snake_case.
App Opened, Product Viewed, Product Added, Checkout Started, Order Completed (order_value,
shop_id, payment_saved_card, source), Reorder Tapped, Order Cancelled (cancelled_by, reason),
Refund Issued (refund_rule). Olaylarda ad, telefon, e-posta yok; müşteri anonim kimlikle izlenir.

**Ödeme A/B testi (Next satırı):** yeni kart seçim ekranı (seçili kart vurgulu). Taban ödeme
tamamlama %78, en küçük saptanacak etki 3 puan (%78 → %81), α %5, güç %80 → varyasyon başına
yaklaşık 2.950 kullanıcı; ödeme adımına günde ~2.300 kişi geliyor. Takım kuralı: hesap birkaç gün
çıksa da test iki tam hafta (pazartesi–pazar) sürer. Birinci gün Burak +5 puan gördü ve durdurmak
istedi; Elif durdurmadı. SRM kontrolü geçti (50,2 / 49,8). Sonuç: kontrol %78,1, yeni ekran %80,9;
anlamlı. Ekran herkese açıldı.

**Simpson paradoksu (testten önceki hata):** yeni ekran önce yalnız kampüs pilot sürümünde açılmıştı.
Kaba karşılaştırma yeni ekranı daha kötü gösterdi (eski %80, yeni %69,6), çünkü yeni ekranı görenlerin
çoğu, tamamlama oranı zaten düşük olan öğrencilerdi. Segment segment: kampüste eski %60 (1.000
kullanıcı), yeni %65 (4.000); şehirde eski %85 (4.000), yeni %88 (1.000).

**Korelasyon örneği:** hazır bildirimini açan müşterilerin 30 günde ikinci sipariş oranı %58,
açmayanların %33. Bildirim mi tekrar siparişi getiriyor, yoksa düzenli müşteriler mi bildirimi
açıyor? Takım bunu bir deneyle sınadı: yeni kullanıcıların yarısında bildirim varsayılan açık
geldi; fark 3 puan çıktı, 25 puan değil.

**Pano:** üst satırda North Star ve beş girdi (haftalık, geçen haftayla ve geçen yılın aynı
haftasıyla); altında takım metrikleri. Eski panoda "toplam indirme" kümülatif grafiği vardı; kaldırıldı.
Eski panoda 34 grafik vardı, yenisinde 9. Haftalık indirme sekiz haftada 3.400'lük tepeden 2.000'e
indi (yaklaşık %40); bu ilk kez kümülatif grafiğin yerine konan haftalık grafikte görüldü.

**Analitik dersleri için ek olgular:**
- Pazarlama "aktif" diye 52.000 sayısını veriyordu; bu "uygulamayı açanlar"dı ve panoda o adla ayrı bir satıra taşındı. Sipariş takımı müşteri
  memnuniyetini çeyrekte bir kısa anketle ölçer.
- Ödeme adımındaki kayıp, kayıtlı kartı olmayanlarda ve kampüs kullanıcılarında daha yüksek.
- Bir ay 30 günde ikinci sipariş %41'den %38'e düştü; hiçbir kanalda düşüş yoktu, Instagram'ın yeni
  müşterilerdeki payı artmıştı. Pazarlama Instagram bütçesinin bir kısmını QR kartlarına kaydırdı.
- Günde 30 sipariş varsayımı, bugünkü 140 dükkânın ortalamasıdır (4.200 / 140).
- İlk yılın Lean Canvas'ındaki en riskli varsayım: "Dükkânlar sipariş başına komisyon ödemeyi kabul
  eder." İlk 20 dükkânla ödeme yapılan bir pilot yapıldı; 17'si üç ay sonra devam etti.

**Fiyat tartışması:** finans komisyonu %6'dan %8'e çıkarmayı önerdi. Ayşe 12 dükkân sahibiyle
görüştü; sahipler Demlik siparişlerinin yaklaşık üçte birinin Demlik olmasa gelmeyecek
müşterilerden geldiğini tahmin etti. Komisyon %6'da kaldı; önce dükkân başına ek siparişi ölçen bir
analiz başladı. Kampüs NPV'sindeki %30 iskonto oranını finans yüksek enflasyon ve şirketin riski
yüzünden seçti.

**İş modeli:** müşteri ödeme yapmaz (sipariş ücreti yok). Dükkân aylık 1.500 TL abonelik ve sipariş
tutarının %6'sı komisyon öder (165 TL'lik siparişte 9,90 TL). Demlik Panel'in ilk ayı ücretsiz.
Öğrenci kartıyla %10 indirim (kampüs; indirimi kampanya bütçesi karşılar).

**Aylık gelir tablosu (yaklaşık):** GMV 20,79 milyon TL (4.200 × 165 × 30). Gelir 1,457 milyon TL
(komisyon 1,247 + abonelik 0,210). Değişken maliyet 0,554 milyon (ödeme kuruluşu işlem ücreti
GMV'nin %2'si = 0,416; altyapı ve destek 0,139). Brüt kâr 0,903 milyon, brüt marj %62. Faaliyet
giderleri 3,0 milyon (maaşlar 2,45; pazarlama 0,40; ofis ve diğer 0,15). Faaliyet zararı ve net
yanma (net burn) ayda yaklaşık 2,1 milyon. Kasada 30 milyon TL → yaklaşık 14 aylık pist (runway).

**Birim ekonomisi (müşteri tarafı):** sipariş başına katkı 5,50 TL (komisyon 9,90 − ödeme ücreti
3,30 − altyapı ve destek 1,10). Aktif müşteri ayda ortalama 3,3 sipariş → aylık katkı 18,15 TL.
Aylık müşteri kaybı (churn) %8 → ortalama ömür 12,5 ay → LTV ≈ 227 TL. Ücretli CAC (Instagram)
180 TL, karma CAC 95 TL (QR ve davet neredeyse bedava). Ücretli LTV/CAC ≈ 1,3; karma ≈ 2,4. Ücretli
kanalda geri ödeme ≈ 10 ay.

**Pazar büyüklüğü (aşağıdan yukarı, Demlik'in kendi sayımı):** İstanbul'da yaklaşık 4.000 bağımsız
kahve dükkânı. Dükkân başına yıllık gelir potansiyeli ≈ 125.000 TL (abonelik 18.000 + komisyon
≈ 107.000; günde 30 sipariş varsayımıyla). TAM ≈ 500 milyon TL/yıl. SAM (sabah yoğunluğu olan ve
kasası entegre edilebilen 1.800 dükkân) ≈ 225 milyon TL. SOM (üç yılda 600 dükkân) ≈ 75 milyon TL.

**Rekabet:** rakip alternatifler kuyruk, telefon, teslimat uygulamaları, zincirlerin uygulamaları.
Tedarikçiler: ödeme kuruluşu, POS tedarikçisi. Alıcılar: dükkânlar (geçiş maliyeti: kasa
entegrasyonu ve personel eğitimi) ve müşteriler (geçiş maliyeti düşük). Yeni giren tehdidi: bir
teslimat devinin gel-al özelliği. Ağ etkisi iki taraflı: dükkân çoğaldıkça müşteri, müşteri
çoğaldıkça dükkân gelir.

**Kampüs projesinin ROI ve NPV'si:** yatırım 2,52 milyon TL (gerçekleşen). Beklenen: günde 600
sipariş → aylık katkı 99.000 TL (600 × 30 × 5,50) + 12 kafenin aboneliği 18.000 TL = 117.000 TL;
yılda ≈ 1,404 milyon. Üç yıllık basit ROI ≈ %67; geri ödeme ≈ 1,8 yıl. Yıllık %30 iskonto oranıyla
üç yıllık NPV ≈ +0,03 milyon TL: zar zor pozitif. Hakan'ın kararı: ikinci dalga ancak 30 günde
ikinci sipariş kampüste %41'in üstündeyse.

**SWOT (özet):** güçlü — 140 dükkân, kasa entegrasyonu, yüksek tekrar sipariş; zayıf — ücretli
kanalda zayıf LTV/CAC, nakit yanması; fırsat — kampüsler, dükkânların stok ihtiyacı; tehdit — teslimat
devlerinin gel-al özelliği, ödeme ücretlerinin artması. **Ansoff:** tekrar sipariş = pazara nüfuz;
kampüs = pazar geliştirme; Panel'e stok modülü = ürün geliştirme (aday); eve teslimat = çeşitlendirme
(reddedildi). **PESTLE'den:** enflasyon (fiyat ve iskonto oranı), KVKK (izleme planı), öğrenci
işleri protokolleri, mobil ödeme alışkanlığı.

**Şirket OKR'ı (bu çeyrek):** O — "Düzenli sabah müşterisinin ilk tercihi ol." KR1 — haftalık
tamamlanan sipariş 29.400 → 34.000; KR2 — 30 günde ikinci sipariş %41 → %50; KR3 — iade talepleri
ayda 310 → 150'nin altı. Sipariş takımı KR2'yi, panel takımı KR3'ü üstlendi; KR1 ikisinin ortak
sonucu. Ayrıca bir öğrenme OKR'ı: "Kampüs öğrencileri sabah ne kadar önceden sipariş veriyor?"
(Mert). KPI olarak izlenen: uygulama puanı 4,3, ödeme kuruluşu hata oranı.

## İletişim ve paydaş işleri

İletişim ve Paydaşlar dersleri bu olguları kullanır. Çoğu kampüs projesinde geçer; proje yöneticisi
**Leyla**, sponsor **Hakan**. Paydaş tablosundaki "Etki" sütunu güç-ilgi haritasında güç ekseni olur.

**Güç-ilgi haritası (kampüs projesi, 1. hafta):** yakından yönet — Hakan; memnun tut — öğrenci
işleri, ödeme kuruluşu, yatırımcılar; bilgilendir — kampüs kafeleri işletmecileri, müşteri hizmetleri;
izle — (projenin başında kimse). POS tedarikçisi orta-orta: sözleşme gereği iki haftada bir
görüşülür. Tutum: öğrenci işleri temkinli (KVKK ve kart listesi), POS tedarikçisi destekleyici,
müşteri hizmetleri endişeli ("kampüsten gelecek iade sorularını kim cevaplayacak?").

**İkinci dalga kararı (DACI):** lansmandan altı hafta sonra verilecek. Driver Leyla; Approver Hakan;
Contributors Elif, Ozan, finans ve Mert; Informed kampüs kafeleri, müşteri hizmetleri, iki takım.
Hakan'ın koşulu: kampüste 30 günde ikinci sipariş %41'in üstünde.

**Öğrenci kartı protokolü (RAPID):** Recommend Leyla; Agree hukuk (KVKK uyumu); Perform sipariş
takımı (Deniz); Input öğrenci işleri, Mert, Selin; Decide Hakan.

**Kampüs iletişim planı:** Hakan — haftalık durum e-postası, pazartesi 10.00, Leyla yazar, ilk
cümlesi BLUF; öğrenci işleri — ayda bir toplantı, Leyla ve Hakan; kafe işletmecileri — iki haftada bir
telefon, duyurular bir mesaj grubunda, Leyla; müşteri hizmetleri — lansmandan iki hafta önce eğitim ve
SSS, Ayşe; ödeme kuruluşu — kilometre taşlarında e-posta, Emre; yatırımcılar — aylık yatırımcı
mektubunda bir paragraf, Hakan. **Eskalasyon eşiği:** kritik yoldaki bir iş bir haftadan fazla kayarsa
Hakan aynı gün telefonla haber alır, rapor beklenmez.

**Haftalık kampüs koordinasyon toplantısı (cuma):** başta 60 dakika ve 11 kişiydi. 4. haftada 45 dakika ve
6 kişiye indi (Leyla, Emre, Ozan, Deniz, tedarikçi temsilcisi, Ayşe); diğerleri notları okuyor. Notlar
gündemle aynı belgede; her eylem maddesinin sahibi ve tarihi var. Not alma sırası her hafta döner.

**Kötü haber (6. hafta):** tedarikçinin 4. ve 5. hafta raporları yeşildi. 6. haftanın perşembesi Emre
test ortamının hazır olmadığını öğrendi; tedarikçi koordinatörü "birkaç gün" dedi. Leyla aynı gün,
eşiğe göre, Hakan'ı aradı: sorun, kritik yola etkisi ve iki seçenek. 7. hafta raporu sarıydı.

**Tedarikçiyle müzakere (6–7. hafta):** Leyla'nın çıkarı dönem başında lansman; tedarikçinin çıkarı
sabit fiyatlı sözleşmede zarar etmemek ve ilk kampüs referansı. Leyla'nın BATNA'sı iş gerekçesindeki
ikinci seçenek: kafelere ayrı tablet (kasa entegrasyonu yok), iki haftada kurulabilir. Nesnel ölçüt:
sözleşmedeki "entegrasyon hazır, 8. hafta" kilometre taşı. Anlaşma: test ortamı 7. haftanın sonunda;
tedarikçi iki hafta ek bir mühendis verir, fiyat değişmez; Demlik lansman duyurusunda tedarikçiyi
anar.

**Yetkisiz etki (4. hafta):** kampüs menüleri (WBS 3.2) için Leyla'nın Emre'den bir haftalık işe
ihtiyacı vardı; Emre panel takımında, önceliği Ozan veriyor. Leyla, menü kopyalama özelliğinin dükkân
isteklerinde ilk üçte olduğunu gösterdi: aynı iş bütün çok şubeli dükkânlara yarıyordu. Ozan dört gün
verdi. Leyla da iade analizi için Ayşe'ye kampüs kafelerinden iki görüşmeci buldu.

**Çatışma (Sprint 6):** Elif ödeme A/B testinin kurulmasını, Leyla öğrenci kartı indirimini (D) aynı
sprintte Ece'ye vermek istedi. İkisi de önce Kaan'a "benimki öncelikli" diye geldi. Kaan ikisini aynı
masaya oturttu; çıkarlar konuşuldu: D'nin bir hafta bolluğu vardı, testin ise kampanyadan önce iki tam
hafta koşması gerekiyordu. Çözüm: Ece ve Can ilk hafta D'yi bitirdi, Burak testi kurdu; test bir
sonraki pazartesi başladı.

**SBI (Sprint 13 review'dan sonra):** Kaan, Burak'a: "Dünkü Sprint Review'da Zeynep açık hataları
anlatırken üç kez sözünü kestin. Zeynep son iki maddeye geçemedi; kafe fişindeki okunma sorunu
konuşulmadan kaldı." Niyet sorusuna Burak'ın cevabı: süreyi yetiştirmeye çalışıyordu. Sonraki review'da
hata listesi ilk 15 dakikaya alındı.

**Veriyle hikâye (lansmandan 4 hafta sonra):** kampüsten günlük sipariş haftalara göre 180, 290, 360,
410 (ilk dönem hedefi 600). Kampüste 30 günde ikinci sipariş %44. Ece'nin ilk grafiği 12 kafenin
günlük siparişlerini 28 çizgide gösteriyordu; Leyla haftalık toplamı tek çizgiye indirdi, başlığa
mesajı yazdı: "Kampüs siparişleri dört haftada iki katına çıktı; hedefin üçte ikisinde."

**Öğrenci araştırmasının sonucu (Mert):** sekiz öğrenciden altısı dersten 10–15 dakika önce, yürürken
sipariş veriyor; ikisi sabah evden çıkmadan. Kampüs siparişlerinin %70'i ders saatinden önceki 20
dakikada geliyor; yoğun dakikalarda kafede hazırlama süresi 8 dakikaya çıkıyor. Öneri: hazırlık süresini
sipariş ekranında göstermek. Mert önce uzun, kronolojik bir e-posta yazdı; sonra BLUF ile yeniden yazdı,
Elif öneriyi refinement'a aldı.

**Dağıtık çalışma:** Can bu yıl Berlin'den çalışıyor (İstanbul'un iki saat gerisi); ortak çalışma
saatleri 10.00–16.00 onun için 08.00–14.00. Daily Scrum'a katılamadığı günlerde notunu önceki akşam
panoya yazar. POS tedarikçisi İzmir'de; Mert haftanın iki günü kampüslerde sahada.

## Araştırma işleri (Mert)

Kullanıcı Araştırması dersleri bu olguları kullanır. Araştırmacı **Mert**, iki takıma ortak; ekipteki
not alma ve gözlem işlerine Selin, Ayşe ve Zeynep katılır.

**Kampüs dönemi araştırma planı:** atölyede 31 soru yazıldı, gruplanınca 9 özet soruya indi; noktalı
oylamayla ilk üç: (1) öğrenciler sabah ne kadar önceden ve nerede sipariş veriyor; (2) kafe personeli
yoğun dakikalarda siparişi nasıl yönetiyor; (3) Panel'de dükkânlar menü ayarlarını neden bulamıyor.
İki haftada bir tur; her turda en az bir yardımcı teknoloji kullanan katılımcı.

**Katılımcı paneli:** uygulamada "Araştırmalara katıl" kaydı; 1.240 kişi listede (izinli). Teşvik
oturum başına 150 TL kahve kredisi, oturumun başında verilir. Dükkân tarafı için Ozan'ın listesi.
Kişisel veri: ad ve telefon yalnız randevu için; kayıtlar ve notlar altı ay sonra silinir; veri
sorumlusu Demlik. Onam formu ve bilgi notu şablonu Mert'te; hukuk kontrol etti.

**Görüşmeler:** sekiz kampüs öğrencisi, 45 dakika, kampüste ve görüntülü. Bulgular "Öğrenci
araştırmasının sonucu" maddesinde.

**Bağlamsal gözlem:** Mert ve Ayşe, kampüsteki pilot kafede 07.45–09.30 arası iki sabah gözlem. Görüşmede "ekrana bakıyorum" diyen baristalar
ekrana değil yazıcıdan çıkan fişe bakıyor; yoğun dakikalarda fişler tezgâhta üst üste biniyor. (Pilotta
çıkan "fiş 50 cm'den okunmalı" gereksinimi bu gözlemle anlaşıldı.)

**Günlük çalışması:** on kampüs öğrencisi, iki hafta. Olay tabanlı kayıt (her sipariş verdiğinde kısa bir
not ve fotoğraf) ve akşam 21.00'de tek soruluk sinyal ("Bugün kahveni nereden aldın?"). Sonunda 20
dakikalık görüşme. On kişiden yedisi derse geç kaldığı günlerde sipariş vermekten vazgeçti.

**Kart sıralama (Panel menüsü):** 36 kart, 18 dükkân sahibi ya da çalışanı, nitel, uzaktan. "Stok" ile
"Menü"yü çoğu katılımcı aynı grupta topladı; "Bugünlük kapat" kartı herkes tarafından stokla birlikte
konuldu.

**Ağaç testi (Panel'in yeni gezinmesi):** 40 dükkân çalışanı, nicel, moderatörsüz. Görev: "Biten bir ürünü
bugünlük satıştan kaldırmak istiyorsun." Eski ağaçta başarı %55, yeni ağaçta ("Menü ve stok" altında)
%85. Eski menüde "Ürünler", "Stok" ve "Ayarlar" ayrı bölümlerdi; işlem "Ayarlar" altındaydı.

**Mutluluk anketi:** çeyrekte bir, uygulama içi, üç soru (biri açık uçlu). Son çeyrekte 2.140 yanıt.
Açık uçlu soruda en sık geçen konu kartı güncelleyememekti.

**Sentez ve paylaşım:** kampüs görüşmelerinin analizi aynı gün, 2 saatlik görüşme için 1 saat; Selin,
Elif ve Zeynep katıldı. Her ikinci perşembe 30 dakikalık "araştırma show and tell"; ekip alanında bir
araştırma duvarı. Bulgular ortak bir içgörü deposunda, etiketli.

**Araştırma altyapısından önce:** geçen yıl bir ajansın yazdığı 40 sayfalık rapor ortak klasörde duruyordu;
ekipte yalnız iki kişi açmıştı. Kampüs ve Panel takımları onam formunun iki farklı sürümünü kullanıyordu;
Ayşe, bulunamadığı için daha önce yapılmış bir dükkân araştırmasını yeniden planlıyordu. İlk görüşmede bir
öğrenci kaydın hocalarına gidip gitmeyeceğini sordu; bilgi notunu e-postada almış ama açmamıştı. Bundan
sonra Mert onamın ana maddelerini oturum başında sesli okumaya başladı ve onam kayıtta sözlü alındı.

## Web ve arayüz işleri (Selin)

Web Temelleri, UX/UI İlkeleri, Tasarım Sistemi, Erişilebilirlik ve Arayüz Anatomisi dersleri bu
olguları kullanır. Tasarım kararları **Selin**'in; Panel tarafında Emre ve Ayşe, müşteri uygulamasında
Ece ve Burak birlikte çalışır.

**Adresler ve ortamlar:** müşteri sitesi `demlik.com.tr`, dükkân sayfası `demlik.com.tr/dukkan/moda`,
ürün `demlik.com.tr/dukkan/moda/filtre-kahve` (eskiden adresi olmayan bir modal'dı; dükkân Instagram'da
paylaşamıyordu). Kampüs landing page'i `demlik.com.tr/kampus` (statik; tek hedef: uygulamayı indir;
bekleme listesi: e-posta ve üniversite). Panel `panel.demlik.com.tr`, prova ortamı
`staging.demlik.com.tr` (ödeme kuruluşunun test modu). Panel yeni hostinge taşınırken DNS kaydı bir
akşam önce değiştirildi; sabah iki dükkân eski sürümü gördü. Kural: cuma 15.00'ten sonra canlıya
çıkış yok.

**İstemci, sunucu, katmanlar:** öğrenci kartı indirimi ilk prototipte uygulamada hesaplanıyordu;
sunucuya taşındı. Sepet hesaba bağlı, sunucuda. Ece front-end, Burak back-end, Can full-stack;
ayrı bir altyapı rolü yok. Ödeme ekranı açılırken dört istek gidiyordu (kartlar, sepet, dükkân
açık mı, indirim); Burak ikiye indirdi. Panel bir SPA'dır, kafe tabletlerinde ana ekrana eklenmiş
PWA olarak çalışır; geri tuşu Panel'den çıkarıyordu, Emre her ekrana adres verdi.

**Arayüz kararları:** dükkân sayfasında fotoğraflar yüklendikçe liste kayıyordu (CLS); fotoğraflar
4:3'e sabitlendi. Eski ödeme ekranında üç dolu düğme vardı (Öde, Kart ekle, Kupon kullan); tek
birincil eylem Öde oldu. Kart ekleme formunda yer tutucu etiketin yerine kullanılıyordu; hata metni
"Son kullanma tarihi geçmiş. Kartının üzerindeki tarihi kontrol et." oldu; uygulama "sen" dilinde.
Sipariş animasyonu 1,2 saniyeydi; 300 ms'lik tike indi, fincan yalnız ilk siparişte oynuyor.
Müşteri uygulamasında beş bölüm hamburger menüdeydi; dördü alttaki sekme çubuğuna çıktı. Ana
sayfanın hero'su müşteriye ayrıldı ("Uygulamayı indir"); dükkânlar için ayrı sayfa var.

**Tasarım sistemi:** iki üründe 14 farklı kahverengi vardı; dokuz basamaklı tek rampaya (`kahve-100`
… `kahve-900`) ve semantic token'lara indi. Panel'in koyu teması yalnız semantic katmanla kuruldu.
Eski Figma dosyasında 23 farklı buton vardı. Boşluk ölçeği 4, 8, 12, 16, 24, 32. Tek font ailesi,
iki ağırlık, 16 px gövde, 1,25 oranlı ölçek. Yeni bileşen önerileri iki haftada bir Selin, Ece ve
Emre'nin toplantısında karara bağlanır; sistemin tek doğru kaynağı koddur.

**Erişilebilirlik:** hedef WCAG 2.2 AA; sitede erişilebilirlik beyanı var. Bir görüşmede ekran
okuyucu kullanan öğrenci "Öde"ye ulaşamadı (düğme bir `div`'di). Panel'de odak halkası kaldırılmıştı,
geri getirildi; sipariş durumları yalnız renkle ayrılıyordu, metin ve ikon eklendi. Kampüs kutlama
animasyonundaki ikon saniyede dört kez yanıp sönüyordu; kaldırıldı. Panel'de sezgisel
değerlendirmeyi Selin ve Ayşe yaptı; geri alma bildirimi beş saniye.

## Mühendislik işleri (Ece, Burak, Emre)

Mühendislik dersleri bu olguları kullanır. Müşteri tarafında Ece (front-end), Burak (back-end) ve Can
(full-stack); Panel tarafında Emre ve Defne.

**Yığın:** müşteri sitesi Next.js (React, TypeScript); tanıtım sayfaları ve kampüs sayfası statik (SSG),
dükkân sayfaları her istekte sunucuda üretilir (SSR, "şu an açık" bilgisi yüzünden). Panel, Vite ile
derlenen bir React SPA (CSR), kafe tabletlerinde PWA. iOS uygulaması Swift, Android uygulaması Kotlin.
Sipariş ve ödeme servisleri TypeScript ile Node.js üzerinde; veri PostgreSQL'de, analiz sorguları bir
okuma kopyasında. Haftalık metrik raporu bir Python betiği (Burak). Kasa tedarikçisinin entegrasyon
katmanı C#/.NET; arada bir arayüz şartnamesi var. Ödeme kuruluşu entegrasyon arayüzünü yılda birkaç
planlı sürümle değiştirir.

**Kütüphaneler:** stil Tailwind (boşluk ölçeği yapılandırmada); Panel'in ilk ekranları styled-components,
dokunuldukça taşınıyor; Defne'nin Panda CSS önerisi "şimdilik hayır" diye kayıtlı. Dialog, menü ve
combobox headless primitiflerle; buton ve dialog shadcn/ui yaklaşımıyla projeye kopyalandı. Destek
ekibinin iade izleme aracı styled bir kütüphaneyle iki haftada yazıldı. Sepet Zustand'da, seçili kart
local state, tema context; Panel'in sipariş listesi TanStack Query ile 15 saniyede bir tazelenir,
"Hazır" optimistic. Formlar React Hook Form + Zod; mesajlar şemada. Yardım merkezi headless CMS'te
(başlık en çok 70 karakter). Animasyon Motion ve Lottie; Lenis ve 3B önerileri eklenmedi.

**Olaylar:** sipariş kartı müşteri tarafında ve Panel'de iki ayrı kodla yazılmıştı; tek `SiparisKarti`
bileşeni oldu. Panel'de her yeni sipariş otuz kartın hepsini yeniden çizdiriyordu ve açılışta liste
isteği iki kez gidiyordu; düzeltildi, mantık `useYeniSiparis` hook'unda toplandı. Harita kütüphanesi
Panel'in ana paketine girmişti; lazy load edildi. Lockfile commit edilmemişti; edildi. Dükkân sayfasında
LCP 4,2 → 2,1 saniye (kapak fotoğrafı WebP ve öncelikli, fontlar 3 → 2). Ürün adı
`hazirOlma` → `hazirOlmaDakika` yeniden adlandırması yedi dosyada derleme hatası verdi. Kasa verisinde
bir gün `acikMi` alanı gelmedi; dış veri artık şemayla doğrulanıyor. Sabah bildirim gecikmesi için
Go'ya taşıma önerildi; neden tekrarlanan bir sorguydu ("günlük sipariş 20.000'i geçerse yeniden bak").
Gün sonu raporundaki grafik elle yazıldı. Ciro bilgisi ilk sürümde tarayıcıya gönderilip gizleniyordu;
artık sunucudan yalnız yetkisi olana geliyor. Panel'de "Menü ayarları" adresi "Menü ve stok"a kalıcı
yönlendirildi. Dükkân sayfalarının başlığı "Moda Kahve · Demlik" biçiminde, şablon OG görseli var.
Bazı dükkânların WordPress siteleri için eklenti yerine hazır bağlantı ve düğme görseli verildi.

**Arka yüz ve veri:** API REST; mobil, web ve Panel aynı endpoint'leri kullanır.
Panel'de iki rol var: dükkân sahibi ve çalışan; ciro raporunu yalnız sahip görür (403 ekranı). Bir çalışan
birden fazla dükkânda çalışabilir; ilişki çoka çok, rol ara tabloda. Panel girişinde beş hatalı denemeden
sonra 60 saniye bekleme. Müşteriler telefon numarası ve SMS koduyla giriş yapar (tekrar gönder: 60 sn).
Çift sipariş idempotency key ile engellenir. Ödeme onayı ödeme kuruluşundan webhook ile gelir; arada
"Ödemen alındı, sipariş kafeye iletiliyor" ekranı. Aylık rapor kuyrukta; bildirimler üç kez denenir,
sonra ölü mektup kuyruğuna düşer. Dükkân faturaları 15 dakika geçerli imzalı adresle indirilir. Ürün
fotoğrafları görsel dönüştürme servisinden 4:3 üç boyutta çıkar. Sipariş servisi sürekli açık sunucularda;
formlar serverless; edge kullanılmıyor. Mobil ana ekran BFF ile tek istekte gelir. Oturum, giriş sayacı
ve menü önbelleği (5 dk, fiyat değişince temizlenir) Redis'te; mobil uygulama son siparişleri SQLite'ta
tutar. Sipariş adresleri tahmin edilemez kimlik kullanır; müşteriye ve baristaya gösterilen kısa kod
("A-417") her gün baştan sayar. Panel sipariş listesi dükkân + tarih indeksi eklenince 4 saniyeden yarım
saniyenin altına indi; müşteri adları N+1 ile 31 sorgu atıyordu, join ile 2 oldu. Sipariş satırı o anki
fiyatı kopyalar; iade siparişteki fiyattan yapılır. Hesap silinince 30 gün beklenir, sonra kişisel bilgi
anonimleştirilir; siparişler "silinmiş müşteri" olarak kalır. Yedekler her gece; geri yükleme tatbikatı
çeyrekte bir. Mert'in araştırma paneli önce Selin'in bir BaaS ile kurduğu formdu; RLS yazılmamıştı, yayından
önce düzeltildi; sonra yönetilen PostgreSQL'e taşındı.

**Arama ve algoritma kararları:** dükkân listesi sırası: önce açık olanlar, sonra mesafe, eşitse ad.
"Tüm dükkânlarda menü araması" yakındaki 10 açık dükkâna küçültüldü. Menü araması önek tabanlı, Türkçe
köklemeli ve karakter sadeleştirmeli, tek harf yazım toleranslı, 250 ms debounce; dükkân adları köklemeden
muaf. Panel listesi saate, eşitse sipariş koduna göre sıralanır. Dükkân listesi filtreleri URL'de; facet
sayıları ve "bitki bazlı süt" filtresi kullanılmadığı için kaldırıldı. Dükkân sayfasında "Bu dükkânda
birlikte sık alınanlar"; yeni dükkânda "Bu dükkânda popüler"e döner. Yardım merkezinde 60 makale var;
anlamsal arama yerine en sık 30 ifade için eş anlamlı listesi kuruldu. Favori listesi en çok 20 ürün;
kimlik dükkân + ürün. Panel'de "bugünkü diğer siparişleri" rozeti kare büyüyordu; sözlükle doğrusala indi.

**Kimlik ve güvenlik:** Panel'de her çalışanın kendi hesabı var (ortak kafe hesabı yok); giriş tek ekranla
başlar ("E-postanı gir"), yeni çalışan davet koduyla katılır. Panel ve web oturumları session (Redis),
Panel oturumu 12 saat, "beni hatırla" yok; mobil uygulama 15 dakikalık erişim ve 60 günlük yenileme jetonu
kullanır. Panel jetonu önce yerel depodaydı, httpOnly/Secure/SameSite çereze taşındı. Panel şifresi en az
15 karakter; karmaşıklık kuralı ve zorunlu değiştirme yok, sızmış şifre kontrolü var; sıfırlama bağlantısı
30 dakika. Dükkân sahibine MFA (kimlik doğrulayıcı uygulama, on yedek kod) zorunlu, çalışana isteğe bağlı.
Müşteri girişi SMS kodu (kart bilgisi ödeme kuruluşunda olduğu için risk düşük kabul edildi); passkey ikinci
yöntem. Telefon numarası değiştirme akışı iki numarayı da doğrular. Çalışanın ekranında "İadeyi onayla"
pasif ve açıklamalı; sahip bir çalışana yalnız iade onayı yetkisi verebilir. Yeni davet edilen varsayılan
"çalışan". Sosyal giriş yok. Auth açık kaynak bir kütüphaneyle, ekranlar Selin'in.

**Güvenlik olayları:** tehdit modelinde üç risk: sahip hesabının ele geçirilmesi, öğrenci kartı indiriminin
istismarı (kart başına günde en çok iki indirimli sipariş), telefonların sızması. Kart listesi servisi
yanıt vermediğinde indirim uygulanmaz (güvenli başarısızlık). Lansman öncesi dış denetim: A01 (rapor
uç noktasında dükkân kontrolü), A02 (staging'de açık hata sayfası), A06 (telefon değiştirme akışı), A10
(kasa zaman aşımında "alındı" görünmesi). Dükkân açıklaması sınırlı zengin metin (600 karakter, sunucuda
temizleme), sipariş notu düz metin (140 karakter). "Dükkânın web sitesi" önizlemesi SSRF riski yüzünden
yapılmadı. Panel'e sıkı CSP eklenince harita kırıldı, izin listesine eklendi. Düğme görselinin HTTP
bağlantısı karışık içerik yarattı. Defne e-posta servisinin anahtarını depoya gönderdi; aynı akşam iptal
edildi, depoya gönderimde sır taraması var. Bekleme listesi spam'i honeypot ve hız sınırıyla durdu. Kayıt
ekranında aydınlatma ve kampanya izni ayrıldı; "Verilerimi indir" ve "Hesabımı sil" var. Ödeme ekranında
iade koşulu tek satır; satıcı dükkân.

**Mimari:** arka yüz modüler monolith (sipariş, ödeme, menü ve stok, iade modülleri); bildirim işçisi ve
haftalık rapor ayrı. Panel'in Next.js'e taşınması ADR ile reddedildi. İade modülü sipariş tablosuna doğrudan
yazıyordu; artık sipariş modülünün arayüzünü çağırıyor. Panel'in ikinci kopyası eklenince bellekteki
oturumlar yüzünden çalışanlar çıkış yaptı; oturumlar Redis'e taşındı. Sabah trafiği dakikada ~10 (07.00),
~32 (08.00), ~8 (10.00) sipariş isteği; kopyalar 2 → 4, her gün 07.15'te 3'e önceden çıkar; kampüs lansmanı
sabahı 6. API gateway (iki kopya) ve yük dengeleyici. "Sipariş oluşturuldu" olayını kafe ekranı, bildirim
işçisi ve analitik dinler. Tek SMS sağlayıcısı 40 dakika kesildi; ikinci sağlayıcı eklendi. Kasa çağrısı
zaman aşımı 10 sn, öneri servisi için devre kesici. Sipariş servisi SLO'su %99,9, p95 onay 2 sn altında
(ortalama 600 ms iken p95 3 sn'yi geçiyordu); dükkânlara SLA %99,5. Öğrenci kartı doğrulaması Elif'in
yazdığı bir ADR ile haftalık listeye bağlandı.

## Teslimat, kalite ve yapay zekâ işleri

Git ve GitHub, DevOps ve Yayın, Test ve Kalite ile Yapay Zekâ ile Çalışma dersleri bu olguları kullanır.

**Git:** tek bir monorepo (müşteri sitesi, Panel, ortak bileşen paketi). GitHub Flow; dallar kısa ömürlü,
paylaşılan dalda rebase ve force push yok. Main'e girmek için bir onay ve geçen kontroller gerekir; PR'lar
squash ile birleşir. Commit'ler Conventional Commits; mobil uygulama SemVer ("Son siparişini tekrarla" 3.4.0,
kapalı dükkân düzeltmesi 3.4.1), her sürüm etiketli. "Son siparişini tekrarla" önce 1.400 satırlık tek PR'dı;
dört PR'a bölündü. Kampanya videoları bir kez depoya girdi, geçmişten temizlendi. Panel takımının panosu
GitHub'da (Gelen → Analiz → Geliştirme → Test → Yayında); hata ve PR şablonları var. Kasa tedarikçisi
fork'tan PR açtı.

**Yayın:** her PR'da GitHub Actions lint, tip, test ve build çalıştırır (~8 dk); ayrıca erişilebilirlik ve
sır taraması. Main'e giren her şey kendiliğinden staging'e çıkar; production'a çıkış bir düğme (Continuous
Delivery), haftada ortalama on iki yayın. Site ve Panel istek bazlı bir platformda, her PR'a preview linki;
sipariş servisi ve bildirim işçisi Docker imajı olarak bir konteyner platformunda, staging'de denenen imaj
production'a aynen çıkar. Smoke test: dükkân sayfası, sepete ekleme, Panel girişi; kırmızıysa önceki imaja
döner. Harcama sınırı ve bütçenin %80'inde uyarı. Yerel ortam Compose ile (uygulama, PostgreSQL, Redis);
Defne ilk gün çalıştırdı. Kubernetes önerisi reddedildi; servis sayısı ona yaklaşırsa yeniden bakılır.
Yeni e-posta servisinin anahtarı production'a eklenmemişti; şifre sıfırlama e-postaları 25 dakika gitmedi.
DNS geçişlerinden bir gün önce TTL beş dakikaya iner. "Son siparişini tekrarla" bayrağının sahibi Deniz'di;
lansmandan iki hafta sonra kaldırıldı. Nöbet haftalık; SMS kesintisi sev2'ydi (nöbetçi Can), Selin'in önceden
yazdığı şerit açıldı, postmortem suçlamasızdı. Synthetic izleme beş dakikada bir; Panel uyarı kanalı günde
40 uyarıdan 6'ya indi. Panel'de eski iPad'lerde bir hata günde 180 kez tetikleniyordu, destek talebi yoktu.
Dükkân fotoğrafları WebP'ye geçince veri transferi kalemi yarıya indi. Kampüs bekleme listesi ücretsiz bir
form aracından (ticari kullanıma kapalı) kendi siteye alındı.

**Test ve kalite:** sipariş servisinde ~1.400 unit, 120 entegrasyon, 9 E2E testi (kırk E2E ile CI 22 dakika
sürüyordu). Kapsam %78, hedef değil. Panel'in "Hazır" E2E testi flaky'ydi; karantinaya alındı, Defne düzeltti.
Testler ödeme kuruluşunun API'sini mock'lar; fixture'da "Moda" dükkânı ve "Büyük boy yulaf sütlü karamelli
soğuk latte". Zeynep'in raporu: süresi dolmuş kartlı müşteride Android 3.8.1'de Öde düğmesi pasif (severity ve
priority yüksek). Borç backlog'da "borç" etiketiyle, sprint kapasitesinin ~%15'i. İlk inceleme hedefi bir iş
günü; öneriler `nit:` ile. Araçlar: Vitest, Testing Library, Playwright; ESLint, Prettier, TypeScript strict;
Panel'de görsel regresyon uyarı olarak duruyor. Sabit adı `SIPARIS_TAZELEME_SN`.

**Yapay zekâ:** depoda bir `AGENTS.md` var (stack, klasörler, `kahve-*` token'ları, ölçek, komutlar, en
sonda yasaklar; biri "yeni bağımlılık ekleme"). Emre'nin token'sız ilk denemesi Panel'e benzemedi. Model
ödeme API'sinde var olmayan bir "iade nedeni kodu" parametresi uydurdu. Elif'in yatırımcı özetinde açılmayan
linkli istatistik çıkarıldı. Leyla risk kaydı, takvim ve paydaş planını üç ayrı oturumda hazırladı. Defne'nin
tek alan düzeltmesinde altı dosya değişti. Panel'de yetkiler "Ekip" ekranından verilir; dükkânlara yenilikler
Panel'deki "Yenilikler" kutusunda duyurulur (metin Ozan'ın).

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
