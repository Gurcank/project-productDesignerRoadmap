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
