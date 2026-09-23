---
title: "Renk"
sectionNumber: "5.4"
category: "tasarim-sistemi"
order: 4
cardCount: 5
sourceFile: "05-tasarim-sistemi-ve-gorsel-dil.md"
origin: "material"
flags: ["degisken"]
---
Renk kararı hem marka hem işlev meselesidir. İşlev tarafında ölçülebilir kuralları vardır — yani her renk kararı zevk tartışması değildir.

### Color ramp

- **Terim (İngilizce):** Color ramp (color scale)
- **Türkçesi:** Renk rampası / basamakları
- **Tanım:** Bir rengin açıktan koyuya doğru numaralandırılmış basamakları: `blue-50`, `blue-100`, … `blue-900`.
- **Ne işe yarar / neden var:** Rastgele ton üretmeyi engeller. Bir arka plan, bir kenarlık, bir metin rengi gerektiğinde aynı rampadan seçilir; sonuç uyumlu olur. Numaralandırma ayrıca dark mode'da tersine çevirmeyi kolaylaştırır.
- **Nerede karşına çıkar:** Her tasarım sisteminin primitive token katmanında. Tailwind'in 50–950 numaralandırması bu yaklaşımı yaygınlaştırdı.
- **Örnek kullanım:** "Kenarlık için `gray-200`, ikincil metin için `gray-500`, başlık için `gray-900`. Ara ton üretmeyelim."
- **İlgili terimler:** Primitive token (5.2), Neutral palette

### Palet yapısı

- **Terim (İngilizce):** Primary, secondary, accent, neutral
- **Türkçesi:** Birincil, ikincil, vurgu, nötr
- **Tanım:** Paletin rol bazlı bölümleri. Primary = marka ve birincil eylem rengi. Secondary = destekleyici. Accent = dikkat çekmesi gereken az sayıda yer. Neutral = grilerin rampası; arka plan, metin ve kenarlıkların çoğu buradan gelir.
- **Ne işe yarar / neden var:** Arayüzün **ezici çoğunluğu nötrdür**; renk azlıkta kullanıldığında işe yarar. Yeni başlayanların en yaygın hatası çok fazla renk kullanmaktır — sonuç, hiçbir şeyin öne çıkmadığı bir yüzeydir.
- **Nerede karşına çıkar:** Palet kurulumunda.
- **Örnek kullanım:** "Tek bir accent rengi yeter; birincil eylem dışında hiçbir yerde kullanmayalım."
- **Karıştırılanlar:** Nötr rampanın **tamamen gri olması gerekmez.** Marka rengine hafifçe kaydırılmış nötrler (hafif mavi veya sıcak gri) arayüzü daha bütünlüklü gösterir; saf gri çoğu zaman soğuk ve jenerik durur.
- **İlgili terimler:** Color ramp, Semantic color, Visual hierarchy (4.8)

### Semantic color

- **Terim (İngilizce):** Semantic color (status color)
- **Türkçesi:** Anlamsal renk
- **Tanım:** Belirli bir durumu anlatan renkler: success (yeşil), warning (sarı/turuncu), danger/error (kırmızı), info (mavi).
- **Ne işe yarar / neden var:** Kullanıcı bu eşleşmeleri öğrenmiştir; bozmak kafa karıştırır. Ayrıca bunların da rampası olmalıdır: hata mesajının arka planı, kenarlığı ve metni aynı kırmızı olamaz.
- **Nerede karşına çıkar:** Uyarı, hata ve onay bileşenlerinde.
- **Örnek kullanım:** "Hata bileşeni `red-50` zemin, `red-200` kenarlık, `red-700` metin kullanıyor."
- **Karıştırılanlar:** **Anlamı sadece renkle taşımak erişilebilirlik ihlalidir** (6.6). Renk körlüğü olan kullanıcı kırmızı ile yeşili ayırt edemeyebilir; ikon veya metin de gerekir.
- **İlgili terimler:** Color ramp, a11y (Bölüm 6), Error state (7.9)

### Renk formatları: HEX, RGB, HSL, OKLCH

- **Terim (İngilizce):** HEX, RGB, HSL, OKLCH
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir rengi sayıyla ifade etmenin farklı yolları. HEX (`#1B4DFF`) ve RGB kırmızı-yeşil-mavi bileşenlerini verir. HSL renk tonu, doygunluk ve açıklık verir. OKLCH açıklık, kroma ve renk tonu verir ama **algısal olarak tekdüze** olacak şekilde tasarlanmıştır.
- **Ne işe yarar / neden var:** HSL'de aynı açıklık değerine sahip iki renk gözle bakınca farklı parlaklıkta görünür (sarı ile mavi gibi). OKLCH bunu düzeltir; bu yüzden rampa üretmek ve kontrast korumak için daha güvenilirdir.
- **Nerede karşına çıkar:** Modern tasarım sistemlerinde OKLCH giderek yaygınlaşıyor.
- **Örnek kullanım:** "Rampayı OKLCH'te kuralım; açıklık adımları gözle de eşit görünsün."
- `[DEĞİŞKEN BİLGİ]` **Tarayıcı desteği:** `oklch()` Chrome 111+, Firefox 113+, Safari 15.4+ sürümlerinde destekleniyor; 2026 ortası itibarıyla küresel destek yaklaşık %90 seviyesinde raporlanıyor. Eski tarayıcılar için HEX/HSL yedeği vermek hâlâ öneriliyor. Bu oranlar zamanla değişir, kullanmadan önce güncel destek durumunu kontrol et.
- **İlgili terimler:** Color ramp, Contrast ratio
- **Kaynak:** https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch

### Contrast ratio

- **Terim (İngilizce):** Contrast ratio
- **Türkçesi:** Kontrast oranı
- **Tanım:** İki rengin parlaklık farkının, 1:1 ile 21:1 arasında ifade edilen ölçüsü.
- **Ne işe yarar / neden var:** Okunabilirliği zevkten çıkarıp ölçülebilir bir eşiğe bağlar. WCAG 2.2 AA seviyesinde: **normal metin için en az 4.5:1**, **büyük metin için 3:1** (büyük metin ≈ 24px veya kalınsa ≈18.66px ve üstü), **metin olmayan arayüz bileşenleri ve odak göstergeleri için 3:1**. AAA seviyesinde bu değerler 7:1 ve 4.5:1'e çıkar. Detaylar Bölüm 6.6'da.
- **Nerede karşına çıkar:** Palet kurarken ve erişilebilirlik denetimlerinde. Figma'nın renk seçicisinde ve tarayıcı geliştirici araçlarında yerleşik kontrol vardır.
- **Örnek kullanım:** "Bu gri `#9CA3AF`, beyaz zeminde 2.5:1 veriyor; gövde metni için yetmez, `gray-600`'e inelim."
- **Karıştırılanlar:** Eşikler **tavsiye değil, birçok ülkede yasal gerekliliğin dayanağıdır.** Ayrıca devre dışı (disabled) bileşenler bu kuralın dışındadır. `[DEĞİŞKEN BİLGİ]` WCAG 3 için APCA adlı yeni bir kontrast hesaplama yöntemi geliştiriliyor; henüz zorunlu değil ama gündemde.
- **İlgili terimler:** WCAG (6.2), Semantic color, Dark mode (5.2)
