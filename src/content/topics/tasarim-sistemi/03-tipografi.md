---
title: "Tipografi"
sectionNumber: "5.3"
category: "tasarim-sistemi"
order: 3
cardCount: 8
sourceFile: "05-tasarim-sistemi-ve-gorsel-dil.md"
origin: "material"
flags: []
---
Metnin nasıl görüneceğine dair kararlar. Web'in içeriğinin ezici çoğunluğu metindir; bu yüzden tipografi kararları, tek tek renk kararlarından daha çok etki eder.

### Typeface vs Font

- **Terim (İngilizce):** Typeface, Font
- **Türkçesi:** Yazı karakteri, yazı tipi
- **Tanım:** Typeface = tasarımın kendisi (Inter, Söhne, Georgia). Font = o tasarımın belirli bir ağırlık/stil/format hâlindeki dosyası (Inter Bold Italic, `.woff2`).
- **Ne işe yarar / neden var:** Ayrım pratikte önemlidir: bir typeface seçersin ama kaç **font dosyası** yükleyeceğine ayrıca karar verirsin ve bu doğrudan performans meselesidir. Beş ağırlık yüklemek beş dosya demektir.
- **Nerede karşına çıkar:** Font seçiminde ve performans bütçesi tartışmasında.
- **Örnek kullanım:** "Typeface Inter kalsın ama üç ağırlıkla sınırlayalım; şu an altı font dosyası yüklüyoruz."
- **Karıştırılanlar:** Günlük konuşmada ikisi de "font" denir ve bu bir sorun değildir. Ama fatura ve performans tarafında fark ortaya çıkar.
- **İlgili terimler:** Font weight, Variable font, Font loading (8.12)

### Font weight

- **Terim (İngilizce):** Font weight
- **Türkçesi:** Yazı ağırlığı
- **Tanım:** Harflerin kalınlığı; genelde 100–900 arası sayılarla ifade edilir (400 normal, 700 bold).
- **Ne işe yarar / neden var:** Hiyerarşinin en ucuz aracı. Boyut büyütmeden, sadece ağırlık değiştirerek vurgu üretilebilir — bu, dikey alanı korur.
- **Nerede karşına çıkar:** Tipografi ölçeği tanımlarında.
- **Örnek kullanım:** "Başlığı büyütmek yerine 600'e çıkaralım; yer kaplamadan hiyerarşi kuralım."
- **Karıştırılanlar:** Tarayıcı, olmayan bir ağırlığı **sahte olarak** üretebilir (faux bold) ve sonuç bozuk görünür. Kullanılan her ağırlığın gerçekten yüklendiğinden emin olunmalı.
- **İlgili terimler:** Variable font, Visual hierarchy (4.8)

### Type scale

- **Terim (İngilizce):** Type scale
- **Türkçesi:** Tipografi ölçeği
- **Tanım:** Kullanılacak yazı boyutlarının, belirli bir orana göre önceden belirlenmiş listesi.
- **Ne işe yarar / neden var:** Rastgele boyut kullanımını engeller. 14, 15, 16, 17, 18 hepsi kullanılırsa hiyerarşi okunmaz; 14, 16, 20, 24, 32, 40 gibi belirgin adımlar kullanılırsa fark anlaşılır. Oran genelde 1.125–1.333 arasında seçilir; küçük oran yoğun arayüzler için, büyük oran pazarlama sayfaları için uygundur.
- **Nerede karşına çıkar:** Tasarım sistemi kurulumunun ilk adımlarından biri.
- **Örnek kullanım:** "Type scale 1.25 oranında, 16px tabanlı: 16 / 20 / 25 / 31 / 39. Ara değer kullanmayalım."
- **İlgili terimler:** Design token (5.2), Fluid typography (5.8), Visual hierarchy (4.8)

### Line-height

- **Terim (İngilizce):** Line-height (leading)
- **Türkçesi:** Satır yüksekliği
- **Tanım:** Satırlar arasındaki dikey mesafe.
- **Ne işe yarar / neden var:** Okunabilirliğin en büyük tek etkeni. Genel kural: **yazı büyüdükçe satır yüksekliği oranı küçülür.** Gövde metni için 1.5 civarı rahat okunur; büyük başlıkta 1.5 dağınık durur, 1.1–1.2 uygundur. Erişilebilirlik tarafında da gövde metni için yeterli satır aralığı beklenir.
- **Nerede karşına çıkar:** Her tipografi tanımında.
- **Örnek kullanım:** "Gövde 16/24 (yani 1.5), başlık 40/44. Tek bir oranı her yere uygulamayalım."
- **İlgili terimler:** Measure, Vertical rhythm (5.5), a11y (Bölüm 6)

### Letter-spacing

- **Terim (İngilizce):** Letter-spacing (tracking)
- **Türkçesi:** Harf aralığı
- **Tanım:** Harfler arasındaki yatay mesafe.
- **Ne işe yarar / neden var:** Büyük başlıklarda harfler optik olarak fazla ayrık görünür; hafif negatif değer (-0.01em ile -0.02em civarı) toparlar. Tersine, tümü büyük harfle yazılmış küçük etiketlerde pozitif aralık okunabilirliği artırır.
- **Nerede karşına çıkar:** Başlık ve etiket stillerinde.
- **Örnek kullanım:** "Hero başlığında -0.02em tracking uygulayalım; şu an dağınık duruyor."
- **Karıştırılanlar:** *Tracking* (tüm bloğa uygulanan aralık) ≠ *kerning* (belirli harf çiftleri arasındaki özel düzeltme). Kerning font dosyasının içinde tanımlıdır.
- **İlgili terimler:** Typeface, Type scale

### Measure

- **Terim (İngilizce):** Measure (line length)
- **Türkçesi:** Satır uzunluğu
- **Tanım:** Bir satırda yer alan karakter sayısı.
- **Ne işe yarar / neden var:** Çok uzun satırda göz, satır sonundan bir sonraki satır başına dönerken kaybolur; çok kısa satırda okuma sürekli kesilir. Yaygın öneri gövde metni için **yaklaşık 45–75 karakter** aralığıdır. Bu, bir içerik alanının neden ekranın tamamına yayılmaması gerektiğinin gerekçesidir.
- **Nerede karşına çıkar:** Blog, dokümantasyon ve uzun metin sayfalarında.
- **Örnek kullanım:** "Makale gövdesine `max-width` verelim; şu an 1440px'de satırlar 140 karakter, okunmuyor."
- **İlgili terimler:** Container / max-width (5.5), Line-height

### Variable font

- **Terim (İngilizce):** Variable font
- **Türkçesi:** Değişken font
- **Tanım:** Tek dosyada, ağırlık ve genişlik gibi eksenler boyunca sürekli değişebilen font formatı.
- **Ne işe yarar / neden var:** Beş ayrı ağırlık dosyası yerine tek dosya yüklenir; bu genelde performans kazancıdır ve ara ağırlıklar (örneğin 550) kullanılabilir hâle gelir.
- **Nerede karşına çıkar:** Modern font seçimlerinde. Inter, Roboto Flex gibi yaygın ailelerin değişken sürümleri vardır.
- **Örnek kullanım:** "Variable font'a geçelim; üç ayrı dosya yerine tek dosya yükleyeceğiz."
- **Karıştırılanlar:** Her zaman daha hafif değildir; tek ağırlık kullanılıyorsa statik dosya daha küçük olabilir. Ölçmeden karar verme.
- **İlgili terimler:** Font weight, Font loading (8.12)

### Font stack / fallback

- **Terim (İngilizce):** Font stack, fallback font, system font stack
- **Türkçesi:** Yazı tipi yığını, yedek font
- **Tanım:** Birincil font yüklenemezse sırayla denenecek alternatiflerin listesi.
- **Ne işe yarar / neden var:** Font yüklenene kadar geçen sürede metin bir şeyle gösterilmek zorundadır. Yedek fontun metriklerinin birincil fonta yakın olması, yükleme tamamlandığında yaşanan sıçramayı azaltır (bkz. CLS, 8.12).
- **Nerede karşına çıkar:** CSS tanımlarında ve performans denetimlerinde.
- **Örnek kullanım:** "Fallback olarak sistem fontu kullanalım; hiç font yüklenmese bile makul görünsün."
- **İlgili terimler:** FOUT/FOIT (8.12), CLS (8.12)
