---
title: "SEO temelleri"
sectionNumber: "8.13"
category: "front-end"
order: 13
cardCount: 7
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: []
---
Arama motorlarının siteni bulup anlamasını sağlayan temeller. Tasarımcıyı ilgilendiren kısmı, çoğu kişinin sandığından büyüktür.

### Title / Meta description

- **Terim (İngilizce):** Title tag, meta description
- **Türkçesi:** Sayfa başlığı, meta açıklama
- **Tanım:** Arama sonuçlarında görünen başlık ve altındaki açıklama metni.
- **Ne işe yarar / neden var:** Arama sonucundaki **tıklanma oranını** doğrudan belirler. İçerik tasarımının (4.9) parçasıdır: her sayfanın kendine özgü, o sayfayı anlatan bir başlığı olmalıdır.
- **Nerede karşına çıkar:** Her sayfada. CMS'te doldurulan alanlardır.
- **Örnek kullanım:** "Tüm ürün sayfalarının başlığı aynı; şablonu ürün adına göre dinamik yapalım."
- **Karıştırılanlar:** Meta description doğrudan bir sıralama faktörü değildir; etkisi tıklanma oranı üzerinden dolaylıdır. Ayrıca arama motoru bazen onu yok sayıp sayfadan kendi özetini üretir.
- **İlgili terimler:** Heading hierarchy (6.3), Open Graph

### Heading yapısı

Detayı Bölüm 6.3'te. SEO açısından da aynı kural geçerlidir: başlıklar içeriğin yapısını yansıtmalı, görsel boyut için seçilmemelidir. Erişilebilirlik ve SEO burada aynı şeyi ister — bu, iki hedefi tek işle karşılamanın tipik bir örneğidir.

### Canonical

- **Terim (İngilizce):** Canonical URL
- **Türkçesi:** Kanonik adres
- **Tanım:** Aynı içeriğe birden fazla adresten ulaşılabiliyorsa, "asıl olan budur" diyen işaret.
- **Ne işe yarar / neden var:** Filtre ve sıralama parametreleri (7.10) yüzünden aynı liste onlarca farklı URL'de görünebilir. Canonical, arama motorunun bunları ayrı sayfalar sanmasını ve değeri bölmesini engeller.
- **Nerede karşına çıkar:** E-ticaret ve filtreli listelerde.
- **Örnek kullanım:** "Filtre parametreli sayfalar canonical olarak ana kategori sayfasını göstersin."
- **İlgili terimler:** Query param (8.9), Filter (7.10)

### robots.txt / sitemap.xml

- **Terim (İngilizce):** `robots.txt`, `sitemap.xml`
- **Türkçesi:** Robot yönergesi, site haritası dosyası
- **Tanım:** `robots.txt` arama motoru botlarına hangi bölümlere girmemelerini söyler. `sitemap.xml` sitedeki sayfaların makine okunur listesidir.
- **Ne işe yarar / neden var:** Botların siteyi verimli taramasını sağlar. Büyük sitelerde sitemap, yeni sayfaların bulunmasını hızlandırır.
- **Nerede karşına çıkar:** Yayın kontrol listesinde (21.4).
- **Örnek kullanım:** "Yayına çıkmadan robots.txt'i kontrol edelim; staging'de her şeyi engelliyorduk."
- **Karıştırılanlar:** *sitemap.xml* (makineler için) ≠ *sitemap* (4.3, tasarım çıktısı). Aynı isim, farklı şey. Ayrıca klasik bir yayın hatası: staging'deki "botları engelle" ayarının canlıya taşınması — site aylarca arama sonuçlarında görünmez.
- **İlgili terimler:** Sitemap (4.3), Launch checklist (21.9)

### Structured data

- **Terim (İngilizce):** Structured data, schema.org, rich results
- **Türkçesi:** Yapılandırılmış veri
- **Tanım:** Sayfadaki içeriğin ne olduğunu makinelere açıkça söyleyen ek işaretleme: bu bir ürün, bu fiyatı, bu puanı; bu bir tarif, bu süresi.
- **Ne işe yarar / neden var:** Arama sonucunda zenginleştirilmiş görünüm (yıldızlar, fiyat, SSS açılımı, breadcrumb) sağlayabilir — bu da tıklanma oranını artırır.
- **Nerede karşına çıkar:** E-ticaret, tarif, etkinlik ve SSS sayfalarında.
- **Örnek kullanım:** "SSS bölümüne structured data ekleyelim; arama sonucunda sorular açılabilir hâle gelsin."
- **Karıştırılanlar:** Zengin sonuç **garanti değildir**; arama motoru gösterip göstermemeye kendisi karar verir.
- **İlgili terimler:** FAQ (7.5), Breadcrumb (7.2)

### Open Graph / Twitter card

- **Terim (İngilizce):** Open Graph (OG tags), Twitter card, OG image
- **Türkçesi:** Paylaşım önizleme etiketleri
- **Tanım:** Bir bağlantı sosyal medyada veya mesajlaşma uygulamasında paylaşıldığında görünecek başlık, açıklama ve görseli belirleyen etiketler.
- **Ne işe yarar / neden var:** **Bu doğrudan bir tasarım işidir.** OG görseli tanımlanmamışsa paylaşım çıplak bir bağlantı olarak görünür ve tıklanma oranı düşer. Şablon bir OG görseli tasarlamak, her sayfa için ayrı görsel üretmeden bunu çözer.
- **Nerede karşına çıkar:** Paylaşılması beklenen her sayfada.
- **Örnek kullanım:** "Blog yazıları için dinamik OG görseli üretelim: arka plan sabit, başlık ve yazar adı değişsin."
- **İlgili terimler:** Title, Aspect ratio (5.7), Social share (7.7)

### Favicon

- **Terim (İngilizce):** Favicon, app icon
- **Türkçesi:** Site simgesi
- **Tanım:** Tarayıcı sekmesinde ve yer imlerinde görünen küçük ikon.
- **Ne işe yarar / neden var:** Küçük ama marka tanınırlığı için etkili. Çok küçük boyutlarda okunabilmesi için genelde logonun sadeleştirilmiş bir sürümü kullanılır — tam logo bu boyutta okunmaz.
- **Nerede karşına çıkar:** Yayın kontrol listesinde. Sık unutulur.
- **Örnek kullanım:** "Favicon için logonun sadeleştirilmiş halini üretelim; 16px'te tam logo okunmuyor."
- **İlgili terimler:** Web app manifest (1.7), Icon set (5.7)
