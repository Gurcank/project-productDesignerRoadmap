---
title: "CSS"
sectionNumber: "8.2"
category: "front-end"
order: 2
cardCount: 7
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: []
---
Görünümün tanımlandığı katman. Tasarımcının en çok temas ettiği teknik alan.

### Selector

- **Terim (İngilizce):** Selector
- **Türkçesi:** Seçici
- **Tanım:** Stilin hangi elemanlara uygulanacağını belirten ifade.
- **Ne işe yarar / neden var:** CSS'in tamamı "kime" ve "ne" sorularından oluşur; seçici "kime" kısmıdır.
- **Nerede karşına çıkar:** Her CSS dosyasında ve DevTools'ta bir öğenin stillerine bakarken.
- **Örnek kullanım:** "Bu stil çok geniş bir seçiciyle yazılmış; başka yerleri de etkiliyor."
- **İlgili terimler:** Specificity, Cascade

### Cascade / Specificity / Inheritance

- **Terim (İngilizce):** Cascade, specificity, inheritance, `!important`
- **Türkçesi:** Basamaklama, özgüllük, kalıtım
- **Tanım:** Aynı elemana birden fazla stil uygulandığında hangisinin kazanacağını belirleyen kurallar bütünü. **Specificity** seçicinin ne kadar "özel" olduğunu ölçer; daha özel olan kazanır. **Inheritance** bazı özelliklerin (yazı tipi, renk) çocuk elemanlara otomatik geçmesidir.
- **Ne işe yarar / neden var:** "Neden bu renk değişmiyor?" sorusunun cevabı neredeyse her zaman burasıdır. `!important` bu yarışı zorla kazanır ama bir borçtur: bir kez kullanıldığında, sonraki her düzeltme de `!important` gerektirmeye başlar.
- **Nerede karşına çıkar:** Stil çakışmalarında ve CSS metodolojisi tartışmalarında (8.4).
- **Örnek kullanım:** "Bu kuralı `!important` ile ezmişiz; asıl sorun seçicinin fazla özgül olması."
- **İlgili terimler:** Selector, CSS Modules (8.4), Design token (5.2)

### Box model

- **Terim (İngilizce):** Box model — content, padding, border, margin
- **Türkçesi:** Kutu modeli
- **Tanım:** Her elemanın dört katmandan oluşan yapısı: içerik, iç boşluk (padding), kenarlık (border), dış boşluk (margin).
- **Ne işe yarar / neden var:** Boşluk konuşmasının dilidir ve **padding ile margin farkı tasarımcı için kritiktir**: padding kutunun içinde kalır ve arka plan rengini alır; margin kutunun dışındadır ve almaz. Bir butonun tıklanabilir alanını büyütmek istiyorsan padding kullanırsın (6.6), margin değil.
- **Nerede karşına çıkar:** Her boşluk geri bildiriminde. DevTools'ta seçilen elemanın altında renkli katmanlar hâlinde gösterilir.
- **Örnek kullanım:** "Kart içindeki boşluk padding olsun, kartlar arasındaki margin veya gap."
- **İlgili terimler:** Spacing scale (5.5), Gap (8.3)

### Display

- **Terim (İngilizce):** `display` — block, inline, inline-block, flex, grid, none
- **Türkçesi:** Görüntüleme türü
- **Tanım:** Bir elemanın nasıl davranacağını ve çocuklarını nasıl dizeceğini belirleyen temel özellik.
- **Ne işe yarar / neden var:** Yerleşimin ilk kararı. `display: none` öğeyi tamamen kaldırır — **ekran okuyucudan da gizler** (6.4). Sadece görsel olarak gizlemek gerekiyorsa farklı bir teknik gerekir; bu ayrım erişilebilirlikte önemlidir.
- **Nerede karşına çıkar:** Her yerleşimde ve "mobilde bunu gizleyelim" taleplerinde.
- **Örnek kullanım:** "Mobilde `display: none` ile gizlersek ekran okuyucu da göremez; bu bilgi gizli kalmasın."
- **İlgili terimler:** Flexbox (8.3), Grid (8.3), a11y (6.4)

### Position

- **Terim (İngilizce):** `position` — static, relative, absolute, fixed, sticky
- **Türkçesi:** Konumlandırma
- **Tanım:** Bir elemanın belge akışına göre nasıl yerleştirileceği. **sticky** özellikle önemlidir: eleman normal akışta durur, belirli bir kaydırma noktasında yapışır.
- **Ne işe yarar / neden var:** Sticky header (7.2), sticky CTA (7.7), sabit tablo başlıkları hep bu özellikle kurulur.
- **Nerede karşına çıkar:** Katman ve yapışkan öğe tartışmalarında.
- **Örnek kullanım:** "Tablo başlığını sticky yapalım; kaydırırken üstte kalsın."
- **İlgili terimler:** z-index (5.6), Sticky header (7.2), Document flow (8.1)

### Overflow

- **Terim (İngilizce):** `overflow` — visible, hidden, scroll, auto
- **Türkçesi:** Taşma davranışı
- **Tanım:** İçerik kutusuna sığmadığında ne olacağı.
- **Ne işe yarar / neden var:** Tasarımcıyı doğrudan ilgilendirir: uzun bir kullanıcı adı kartı taşırsa ne olacak? Kırpılacak mı (hidden), üç nokta mı konacak (ellipsis), kaydırılabilir mi olacak? **Bu karar tasarımda verilmezse geliştirici tahmin eder.**
- **Nerede karşına çıkar:** Edge case tartışmalarında (4.4) ve tablo tasarımında.
- **Örnek kullanım:** "Uzun başlıklar iki satırda kesilsin ve sonuna üç nokta gelsin; tooltip'te tamamı görünsün."
- **İlgili terimler:** Edge case (4.4), Text overflow, Table (7.10)

### CSS custom property

- **Terim (İngilizce):** CSS custom property (CSS variable)
- **Türkçesi:** CSS değişkeni
- **Tanım:** Bir değeri isimle saklayıp her yerde kullanmayı sağlayan CSS özelliği.
- **Ne işe yarar / neden var:** **Design token'ların koddaki karşılığıdır** (5.2). Tema değiştirmenin en yaygın yolu budur: bir üst seviyede değişkenlerin değerini değiştirirsin, tüm alt bileşenler otomatik güncellenir.
- **Nerede karşına çıkar:** Tema, dark mode ve tasarım sistemi uygulamalarında.
- **Örnek kullanım:** "Renkleri CSS değişkeni olarak tanımlayalım; dark mode'da sadece değerleri değiştireceğiz."
- **İlgili terimler:** Design token (5.2), Theming (5.2)
