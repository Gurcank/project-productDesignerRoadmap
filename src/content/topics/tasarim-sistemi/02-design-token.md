---
title: "Design token"
sectionNumber: "5.2"
category: "tasarim-sistemi"
order: 2
cardCount: 7
sourceFile: "05-tasarim-sistemi-ve-gorsel-dil.md"
origin: "material"
flags: ["degisken"]
---
Tasarım kararlarının, hem tasarım aracının hem kodun okuyabileceği isimli değerlere dönüştürülmüş hâli. Modern tasarım sisteminin temeli budur.

### Design token

- **Terim (İngilizce):** Design token
- **Türkçesi:** Tasarım belirteci (yaygın olarak İngilizcesi kullanılır)
- **Tanım:** Bir tasarım kararının, ham değer yerine isimle saklanan hâli: `#1B4DFF` yerine `color-brand-primary`.
- **Ne işe yarar / neden var:** İsim, değeri değiştirilebilir kılar. Değeri 200 yerde tekrarlarsan marka rengi değiştiğinde 200 yeri bulman gerekir; token kullanırsan tek yeri değiştirirsin. Ayrıca isim bir **niyet** taşır: `color-text-danger`, `#D92D20`'den daha fazla bilgi verir.
- **Nerede karşına çıkar:** Figma variables, CSS custom property, Tailwind config, Style Dictionary çıktıları.
- **Örnek kullanım:** "Rengi doğrudan yazmayalım; `color-surface-raised` token'ını kullanalım ki dark mode'da otomatik değişsin."
- **İlgili terimler:** Primitive/Semantic/Component token, Theming, CSS custom property (8.2)

### Token katmanları

Tokenlar üç katmanda düşünülür. Bu ayrım tasarım sistemlerinin en çok işe yarayan tek fikridir.

| Katman | Ne saklar | Örnek isim | Örnek değer |
|---|---|---|---|
| **Primitive** (global, base) | Ham değer, anlam yok | `blue-600` | `#1B4DFF` |
| **Semantic** (alias) | Kullanım niyeti | `color-action-primary` | → `blue-600` |
| **Component** | Belirli bir bileşene özel | `button-primary-background` | → `color-action-primary` |

### Primitive token

- **Terim (İngilizce):** Primitive token (global token, base token)
- **Türkçesi:** Temel token
- **Tanım:** Ham değerin isimlendirilmiş hâli; nerede kullanılacağına dair bilgi taşımaz.
- **Ne işe yarar / neden var:** Paletin kendisidir. `gray-100`'den `gray-900`'a kadar bir rampa, kullanılabilir ham malzemeyi tanımlar.
- **Nerede karşına çıkar:** Token dosyasının en alt katmanı.
- **Örnek kullanım:** "Primitive katmanda 11 basamaklı nötr rampa var; semantic katman bunlardan seçiyor."
- **Karıştırılanlar:** Primitive token'ları doğrudan bileşenlerde kullanmak yaygın bir hatadır; tema değiştirmeyi imkânsız hâle getirir. Bileşen `gray-900` değil `color-text-primary` kullanmalıdır.
- **İlgili terimler:** Semantic token, Color ramp (5.4)

### Semantic token

- **Terim (İngilizce):** Semantic token (alias token)
- **Türkçesi:** Anlamsal token
- **Tanım:** Bir primitive token'a işaret eden, kullanım amacını adlandıran token.
- **Ne işe yarar / neden var:** Temanın çalıştığı katman burasıdır. `color-text-primary` açık temada `gray-900`'a, koyu temada `gray-50`'ye işaret eder; bileşen hiçbir şey bilmeden ikisinde de doğru görünür.
- **Nerede karşına çıkar:** Bileşenlerin gerçekten kullandığı katman.
- **Örnek kullanım:** "Yeni bir renk eklemeyelim; `color-border-subtle` zaten var, onu kullanalım."
- **İlgili terimler:** Primitive token, Theming, Mode

### Theming / Mode

- **Terim (İngilizce):** Theming, mode
- **Türkçesi:** Tema, mod
- **Tanım:** Aynı semantic token setinin farklı değer kümeleriyle çalışması: açık/koyu tema, marka A/marka B, yoğun/geniş yerleşim.
- **Ne işe yarar / neden var:** Tek bir arayüzü, tek bir kod tabanıyla birden fazla görünümde çalıştırır. Figma'da bu "modes" ile, CSS'te genelde bir üst sınıf veya `prefers-color-scheme` ile yapılır.
- **Nerede karşına çıkar:** Dark mode ve çok markalı ürünlerde.
- **Örnek kullanım:** "Modu değiştirdiğimizde bozulan yerler var; demek ki bazı bileşenler primitive token'a doğrudan bağlı."
- **İlgili terimler:** Dark mode, Semantic token, Variable (5.10)

### Dark mode

- **Terim (İngilizce):** Dark mode
- **Türkçesi:** Koyu tema
- **Tanım:** Arayüzün koyu zeminli sürümü.
- **Ne işe yarar / neden var:** Kullanıcı tercihi ve düşük ışıkta konfor. **Renkleri ters çevirmek yeterli değildir:** koyu zeminde saf beyaz metin göz yorar (genelde biraz kırılmış beyaz kullanılır), gölgeler işe yaramaz (derinlik yüzey açıklığıyla verilir), doygun renkler koyu zeminde titrer ve kontrast oranlarının **yeniden hesaplanması** gerekir — açık temada geçen bir renk çifti koyu temada kalabilir.
- **Nerede karşına çıkar:** Ürün gereksinimlerinde standart bir talep.
- **Örnek kullanım:** "Dark mode'da kartları gölgeyle değil, yüzey açıklık farkıyla ayıralım."
- **Karıştırılanlar:** Dark mode bir "renk filtresi" değil, ayrı bir tasarım kararları setidir. Otomatik dönüştürme neredeyse her zaman kötü sonuç verir.
- **İlgili terimler:** Theming, Elevation (5.6), Contrast ratio (5.4)

### DTCG / Style Dictionary

- **Terim (İngilizce):** DTCG format (Design Tokens Community Group), Style Dictionary
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** DTCG = tokenların standart bir JSON formatında yazılması için tanımlanan ortak biçim. Style Dictionary = bu tokenları CSS, iOS, Android gibi farklı hedeflere dönüştüren araç.
- **Ne işe yarar / neden var:** Tasarım aracı ile kod arasındaki köprüyü otomatikleştirir. Figma'da değişen bir token, bir hat üzerinden CSS değişkenine dönüşebilir.
- **Nerede karşına çıkar:** Olgun tasarım sistemlerinin altyapısında. `[DEĞİŞKEN BİLGİ]` Bu alan hızlı değişiyor; araç isimleri ve format sürümleri güncel olarak kontrol edilmeli.
- **Örnek kullanım:** "Tokenları DTCG formatında dışa aktarıp Style Dictionary ile CSS değişkenlerine çevirelim."
- **İlgili terimler:** Design token, Variable (5.10), Single source of truth (5.1)
