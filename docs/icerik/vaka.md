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
