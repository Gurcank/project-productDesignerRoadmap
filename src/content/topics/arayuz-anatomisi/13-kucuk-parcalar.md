---
title: "Küçük parçalar"
sectionNumber: "7.13"
category: "arayuz-anatomisi"
order: 13
cardCount: 7
sourceFile: "07b-site-anatomisi.md"
origin: "material"
flags: []
---
Adı sık geçen ama üzerinde durulmayan bileşenler.

### Avatar

- **Terim (İngilizce):** Avatar
- **Türkçesi:** Profil görseli
- **Tanım:** Bir kişiyi veya kurumu temsil eden küçük, genelde dairesel görsel.
- **Ne işe yarar / neden var:** Kişiyi hızlı tanıtır. Fotoğraf yoksa bir **fallback** gerekir: baş harfler, üretilmiş bir renk veya varsayılan ikon. Bu fallback tasarlanmazsa kırık görsel ikonu çıkar.
- **Nerede karşına çıkar:** Her kullanıcılı üründe.
- **Örnek kullanım:** "Fotoğrafı olmayan kullanıcılar için baş harfli fallback tasarlayalım; renk isimden türetilsin."
- **İlgili terimler:** Avatar stack (7.4), Profile (7.12)

### Divider

- **Terim (İngilizce):** Divider, separator, rule
- **Türkçesi:** Ayırıcı çizgi
- **Tanım:** İçerik grupları arasına konan ince çizgi.
- **Ne işe yarar / neden var:** Grupları ayırır. Ama **çoğu zaman boşluk daha iyi bir ayırıcıdır** (4.8): çizgi görsel gürültü ekler, boşluk eklemez. Çizgi, boşluğun yetmediği yoğun arayüzlerde (tablo satırları, ayar listeleri) anlamlıdır.
- **Nerede karşına çıkar:** Listelerde, menülerde, formlarda.
- **Örnek kullanım:** "Bu çizgileri kaldırıp aralığı 16'dan 32'ye çıkaralım; ayrım boşlukla da okunuyor."
- **İlgili terimler:** White space (4.8), Spacing scale (5.5)

### Icon button

- **Terim (İngilizce):** Icon button
- **Türkçesi:** İkon buton
- **Tanım:** Yalnızca ikondan oluşan buton.
- **Ne işe yarar / neden var:** Yer kazandırır. Bedeli: **anlam belirsizliği ve erişilebilirlik riski.** Erişilebilir adı zorunludur (6.4), tooltip önerilir ve dokunma hedefi 24×24'ün altına düşmemelidir (6.6). Yaygın olmayan ikonlarda metin etiket kullanmak daha güvenlidir.
- **Nerede karşına çıkar:** Araç çubuklarında, tablo satırlarında, header'da.
- **Örnek kullanım:** "İkon butonlara erişilebilir ad ve tooltip ekleyelim; ikon 16px kalsın, tıklama alanı 40px olsun."
- **İlgili terimler:** Accessible name (6.4), Target size (6.6), Icon set (5.7)

### FAB

- **Terim (İngilizce):** FAB — Floating Action Button
- **Türkçesi:** Yüzen eylem butonu
- **Tanım:** Ekranın (genelde sağ alt) köşesinde yüzen dairesel birincil eylem butonu.
- **Ne işe yarar / neden var:** Ekranın ana eylemini her an erişilebilir tutar. Material Design'dan yaygınlaşan bir kalıptır.
- **Nerede karşına çıkar:** Mobil uygulamalarda ve mobil web'de.
- **Örnek kullanım:** "Mobilde 'Yeni ekle' için FAB koyalım; liste uzun, üstteki butona dönmek zor."
- **Karıştırılanlar:** İçeriğin son satırını kapatabilir; alt boşluk bırakılmalıdır. Ayrıca yalnızca ikonluysa erişilebilir adı gerekir.
- **İlgili terimler:** Sticky CTA (7.7), Icon button, CTA (7.3)

### Back to top

- **Terim (İngilizce):** Back to top button
- **Türkçesi:** Başa dön butonu
- **Tanım:** Uzun sayfalarda, sayfanın başına döndüren küçük buton.
- **Ne işe yarar / neden var:** Çok uzun sayfalarda kaydırma yorgunluğunu azaltır. Genelde belirli bir kaydırma mesafesinden sonra belirir.
- **Nerede karşına çıkar:** Blog, dokümantasyon ve uzun listelerde.
- **Örnek kullanım:** "İki ekran boyu kaydırınca back to top belirsin, sağ altta."
- **İlgili terimler:** Sticky CTA (7.7), FAB

### Scroll indicator

- **Terim (İngilizce):** Scroll indicator, reading progress bar
- **Türkçesi:** Okuma ilerleme çubuğu
- **Tanım:** Sayfanın ne kadarının okunduğunu gösteren ince çubuk, genelde üstte.
- **Ne işe yarar / neden var:** Uzun içerikte "daha ne kadar var?" sorusunu cevaplar ve tamamlama isteğini artırır.
- **Nerede karşına çıkar:** Blog ve makale sayfalarında.
- **Örnek kullanım:** "Makale sayfasına üstte 3px'lik okuma ilerleme çubuğu ekleyelim."
- **İlgili terimler:** Progress indicator (7.9), Sticky header (7.2)

### Blockquote / Code block / kbd

- **Terim (İngilizce):** Blockquote, code block, inline code, `kbd`
- **Türkçesi:** Alıntı bloğu, kod bloğu, tuş göstergesi
- **Tanım:** Blockquote = öne çıkarılmış alıntı. Code block = kod parçası, genelde renklendirilmiş ve kopyalanabilir. `kbd` = klavye tuşunu gösteren küçük etiket (`Ctrl` `K` gibi).
- **Ne işe yarar / neden var:** İçerik türlerini görsel olarak ayırır ve okunabilirliği artırır. Kod bloğunda **kopyala butonu** neredeyse zorunlu bir beklentidir.
- **Nerede karşına çıkar:** Blog, dokümantasyon ve yardım içeriklerinde.
- **Örnek kullanım:** "Kod bloklarına kopyala butonu ve dil etiketi ekleyelim."
- **İlgili terimler:** Callout (7.5), Micro-interaction (5.9)
