# Bölüm 5 — Tasarım sistemi ve görsel dil

Bölüm 4 "hangi süreçle, hangi ilkeyle" idi. Bu bölüm "hangi değerle": renk, tipografi, boşluk, gölge, hareket. Yani tasarım kararlarının sayıya ve isme dönüştüğü katman.

Bu bölüm senin için iki nedenle kritik:

**Birincisi**, yapay zekâya iş yaptırırken çıktının kalitesini en çok bu terimler belirler. "Modern ve şık olsun" bir talimat değildir; "8px tabanlı spacing ölçeği, 1.25 oranlı type scale, tek bir accent rengi ve nötr grinin 9 basamaklı rampası" bir talimattır. İlkinden jenerik çıktı gelir, ikincisinden kontrol edilebilir çıktı.

**İkincisi**, "AI ile üretilmiş" hissini veren şey genelde renk veya font seçimi değil; **sistemsizliktir**. Her bölümde farklı boşluk değeri, gerekçesiz gradient, birbiriyle ilişkisiz üç gri tonu. Sistem kurmayı bilmek, bu histen kurtulmanın yoludur.

---

## 5.1 Sistemler: style guide, component library, design system

Bu üç terim birbirinin yerine kullanılır ama kapsamları farklıdır. Farkı bilmek, bir şirkete girdiğinde "bizde design system var" cümlesinin gerçekte ne kadarını kapsadığını anlamanı sağlar.

### Style guide

- **Terim (İngilizce):** Style guide
- **Türkçesi:** Stil kılavuzu
- **Tanım:** Marka ve görsel kuralları anlatan belge: logo kullanımı, renkler, tipografi, ton.
- **Ne işe yarar / neden var:** En dar kapsam. Kuralları **anlatır** ama uygulamaz; kimse okumazsa hiçbir şey değişmez. Genelde PDF veya statik bir sayfadır.
- **Nerede karşına çıkar:** Marka projelerinde ve ajans tesliminde.
- **Örnek kullanım:** "Style guide'da logo etrafında minimum boşluk tanımlı; bu banner onu ihlal ediyor."
- **Karıştırılanlar:** *Style guide* kuralları anlatan bir belgedir; *design system* çalışan bir üründür. Style guide'ı olan her ekip design system'e sahip değildir.
- **İlgili terimler:** Design system, Brand guideline, Tone of voice (4.9)

### Pattern library

- **Terim (İngilizce):** Pattern library
- **Türkçesi:** Kalıp kütüphanesi
- **Tanım:** Tekrar eden arayüz çözümlerinin ve ne zaman kullanılacaklarının derlendiği koleksiyon.
- **Ne işe yarar / neden var:** Bileşenden bir seviye üsttedir. "Buton" bir bileşendir; "silme onayı nasıl alınır", "form hataları nasıl gösterilir" bir kalıptır. Aynı problemin her ekranda farklı çözülmesini engeller.
- **Nerede karşına çıkar:** Olgun tasarım sistemlerinin dokümantasyon bölümünde.
- **Örnek kullanım:** "Yıkıcı işlem kalıbımız var: silme her yerde geri alınabilir toast ile yapılır, diyalogla değil."
- **İlgili terimler:** Component library, Design system

### Component library

- **Terim (İngilizce):** Component library
- **Türkçesi:** Bileşen kütüphanesi
- **Tanım:** Yeniden kullanılabilir arayüz parçalarının kod veya tasarım dosyası olarak toplandığı yer.
- **Ne işe yarar / neden var:** Aynı butonu her ekranda yeniden çizmeyi ve yeniden kodlamayı ortadan kaldırır. Tasarım tarafında Figma kütüphanesi, kod tarafında React bileşen paketi olarak yaşar. **İkisinin senkron olması** ayrı bir iştir ve çoğu ekipte aksayan yer burasıdır.
- **Nerede karşına çıkar:** Her orta ölçekli üründe.
- **Örnek kullanım:** "Bu bileşen kütüphanede yok; ya ekleyelim ya varolan kartı varyant olarak genişletelim."
- **Karıştırılanlar:** Component library bir design system'in **parçasıdır**, kendisi değil. Sadece bileşen listesi olup kural, token ve dokümantasyonu olmayan bir yapı sistem değildir.
- **İlgili terimler:** Design system, Variant (5.10), Component (8.7)

### Design system

- **Terim (İngilizce):** Design system
- **Türkçesi:** Tasarım sistemi
- **Tanım:** Bir ürünün tasarım kararlarını, bileşenlerini, kurallarını ve kodunu birlikte tutan yaşayan sistem.
- **Ne işe yarar / neden var:** Tutarlılık, hız ve kalite üretir. Tekrar eden kararları bir kez alıp her yerde uygular; böylece ekip enerjisini yeni problemlere ayırır. **Ürün gibi yönetilir:** sahibi, sürümü, değişiklik günlüğü ve kullanıcıları (yani ekip) vardır.
- **Nerede karşına çıkar:** Orta ve büyük ekiplerde. Küçük projelerde "sistem" birkaç token ve birkaç bileşenden ibaret olabilir; bu da geçerli bir sistemdir.
- **Örnek kullanım:** "Design system'e yeni bileşen eklemeden önce üç yerde ihtiyaç olduğunu görelim; tek kullanımlık şeyi sisteme koymayalım."
- **Karıştırılanlar:** Design system bir Figma dosyası değildir. Figma kütüphanesi + kod paketi + dokümantasyon + kullanım kuralları + bunları güncelleyen bir süreç, hep birlikte sistemi oluşturur.
- **İlgili terimler:** Design token (5.2), Component library, Governance

### Atomic Design

- **Terim (İngilizce):** Atomic Design
- **Türkçesi:** Atomik tasarım
- **Tanım:** Arayüzü beş seviyeye bölen zihinsel model: atoms → molecules → organisms → templates → pages.
- **Ne işe yarar / neden var:** Bileşenleri sınıflandırmak ve iç içe geçmelerini düşünmek için ortak bir dil verir. Buton bir atom, arama kutusu (etiket + alan + buton) bir molekül, üst menü bir organizmadır.
- **Nerede karşına çıkar:** Tasarım sistemi klasör yapılarında ve bileşen adlandırmalarında.
- **Örnek kullanım:** "Kütüphaneyi atomic design'a göre klasörledik ama sınırlar tartışmalı; kart molekül mü organizma mı?"
- **Karıştırılanlar:** Sınırları nettir gibi görünür ama pratikte tartışmalıdır ve bu tartışma çoğu zaman zaman kaybıdır. Model bir düşünme aracıdır, bir kural değil.
- **İlgili terimler:** Component library, Design system

### Governance / Adoption

- **Terim (İngilizce):** Governance, adoption
- **Türkçesi:** Yönetişim, benimseme
- **Tanım:** Governance = sisteme kimin, nasıl katkı yapacağını ve neyin sisteme gireceğini belirleyen kurallar. Adoption = ekiplerin sistemi gerçekte ne kadar kullandığı.
- **Ne işe yarar / neden var:** Sistemlerin çoğu teknik sebeplerden değil, bu iki sebepten ölür. Kimse katkı yapamıyorsa sistem eskir; kimse kullanmıyorsa sistem gereksiz bir bakım yüküne dönüşür. Adoption ölçülebilir: bileşenlerin kaç yerde kullanıldığı, kaç yerde "detach" edilmiş kopyası olduğu.
- **Nerede karşına çıkar:** Tasarım sistemi ekiplerinin en çok konuştuğu konu.
- **Örnek kullanım:** "Adoption %40; ekiplerin yarısı bileşenleri kopyalayıp değiştiriyor. Sorun bileşenlerde mi, katkı sürecinde mi bakalım."
- **İlgili terimler:** Design system, Single source of truth

### Single source of truth

- **Terim (İngilizce):** Single source of truth — SSOT
- **Türkçesi:** Tek doğru kaynak
- **Tanım:** Bir bilginin tek bir yerde tanımlanıp diğer her yerin oraya referans vermesi ilkesi.
- **Ne işe yarar / neden var:** Aynı marka renginin Figma'da, CSS'te ve pazarlama sitesinde ayrı ayrı yazılması, üçünün zamanla ayrışmasına yol açar. Token yaklaşımının tüm gerekçesi budur.
- **Nerede karşına çıkar:** Token ve dokümantasyon tartışmalarında.
- **Örnek kullanım:** "Renk değeri üç yerde ayrı yazılı; SSOT kuralım, token'dan türetelim."
- **İlgili terimler:** Design token (5.2), Design system

---

## 5.2 Design token

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

---

## 5.3 Tipografi

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

---

## 5.4 Renk

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

---

## 5.5 Grid ve spacing

Yerleşimin ve boşlukların sistemi. Tasarımın "düzenli" mi "dağınık" mı göründüğünü belirleyen en sessiz katman.

### Grid

- **Terim (İngilizce):** Grid (column grid)
- **Türkçesi:** Izgara
- **Tanım:** Sayfayı eşit sütunlara bölen görünmez yerleşim yapısı. Parçaları: **column** (sütun), **gutter** (sütunlar arası boşluk), **margin** (kenar boşluğu).
- **Ne işe yarar / neden var:** Hizalama kararlarını tek tek vermek yerine bir sisteme bağlar. 12 sütun yaygındır çünkü 2, 3, 4 ve 6'ya bölünebilir; bu da farklı düzenlere esneklik verir.
- **Nerede karşına çıkar:** Figma'da layout grid olarak, kodda CSS Grid veya Flexbox olarak.
- **Örnek kullanım:** "Masaüstünde 12 sütun, 24px gutter; kart bölümü 4 sütunluk üçlü olsun."
- **İlgili terimler:** Container, Breakpoint (5.8), CSS Grid (8.3)

### Container / max-width

- **Terim (İngilizce):** Container, max-width
- **Türkçesi:** Kapsayıcı, maksimum genişlik
- **Tanım:** İçeriğin yayılabileceği en fazla genişlik.
- **Ne işe yarar / neden var:** Geniş ekranlarda içeriğin sonsuza kadar yayılmasını engeller. Sınırsız genişlik hem satır uzunluğunu bozar (5.3) hem de göz taramasını zorlaştırır. Farklı içerikler farklı container genişliği isteyebilir: metin dar, tablo ve galeri geniş.
- **Nerede karşına çıkar:** Her sayfa yerleşiminde.
- **Örnek kullanım:** "Genel container 1200px, ama makale gövdesi 680px'te kalsın."
- **İlgili terimler:** Measure (5.3), Grid, Breakpoint (5.8)

### Spacing scale

- **Terim (İngilizce):** Spacing scale
- **Türkçesi:** Boşluk ölçeği
- **Tanım:** Kullanılacak boşluk değerlerinin önceden belirlenmiş listesi: 4, 8, 12, 16, 24, 32, 48, 64.
- **Ne işe yarar / neden var:** "AI ile üretilmiş" hissinin en büyük panzehiri budur. Ölçek yoksa her bölümde farklı değer çıkar (13px, 17px, 22px) ve göz bunu düzensizlik olarak okur — sebebini adlandıramasa bile. Ölçek varsa boşluklar birbiriyle ilişkili olur.
- **Nerede karşına çıkar:** Token tanımlarında ve her yerleşim kararında.
- **Örnek kullanım:** "Bu boşluk 18px; ölçekte yok. 16 veya 24'e yuvarlayalım."
- **İlgili terimler:** 8pt grid, Design token (5.2), White space (4.8)

### 8pt grid

- **Terim (İngilizce):** 8pt grid (8-point grid system)
- **Türkçesi:** 8 birimlik ızgara
- **Tanım:** Tüm boşluk ve boyut değerlerinin 8'in katı olması yaklaşımı (bazı yerlerde 4'lük ara adımlarla).
- **Ne işe yarar / neden var:** Yaygın ekran boyutlarının çoğu 8'e bölünebildiği için ölçekleme daha temiz çalışır. Ama asıl faydası matematiksel değil, **karar sayısını azaltmasıdır**: 8, 16, 24 arasından seçmek, 0–100 arasından seçmekten hızlı ve tutarlıdır.
- **Nerede karşına çıkar:** Tasarım sistemi kurulumunda. Yaygın bir sektör alışkanlığıdır, resmî bir standart değil.
- **Örnek kullanım:** "8pt sisteme uyuyoruz; ikon içi hizalamalarda 4'lük ara adım serbest."
- **Karıştırılanlar:** Kutsal bir kural değildir. Tipografi ve optik hizalama zaman zaman ölçek dışı değer gerektirir; kural körü körüne uygulanınca sonuç kötüleşebilir.
- **İlgili terimler:** Spacing scale, Vertical rhythm

### Vertical rhythm

- **Terim (İngilizce):** Vertical rhythm
- **Türkçesi:** Dikey ritim
- **Tanım:** Dikey boşlukların tutarlı bir tabana göre tekrar etmesi.
- **Ne işe yarar / neden var:** Sayfayı aşağı kaydırırken oluşan düzen hissini üretir. Başlık üstü boşluk her zaman başlık altı boşluktan büyük olmalıdır — çünkü Gestalt yakınlık ilkesi gereği (4.8) başlık, altındaki metne ait olarak okunmalıdır.
- **Nerede karşına çıkar:** Uzun içerik sayfalarında ve tipografi tanımlarında.
- **Örnek kullanım:** "Başlık üstü 48, altı 16; şu an ikisi de 24 olduğu için başlık hangi bloğa ait belli değil."
- **İlgili terimler:** Spacing scale, Gestalt proximity (4.8), Line-height (5.3)

### Density

- **Terim (İngilizce):** Density
- **Türkçesi:** Yoğunluk
- **Tanım:** Belirli bir alanda ne kadar bilgi gösterildiği.
- **Ne işe yarar / neden var:** Farklı kullanıcı ve bağlamlar farklı yoğunluk ister. Bir pazarlama sayfası ferah olmalıdır; günde sekiz saat tablo inceleyen bir uzman ise az kaydırmak ister. Bazı sistemler yoğunluğu bir **mod** olarak sunar (compact/comfortable).
- **Nerede karşına çıkar:** Panel ve tablo tasarımlarında.
- **Örnek kullanım:** "Operasyon ekibi için compact mod ekleyelim; satır yüksekliğini 48'den 36'ya indiren bir mod yeterli."
- **İlgili terimler:** Theming (5.2), Spacing scale, Data grid (7.10)

---

## 5.6 Yüzey ve derinlik

Öğelerin birbirinin üstünde durduğu hissini üreten kararlar.

### Elevation

- **Terim (İngilizce):** Elevation
- **Türkçesi:** Yükseklik / kot
- **Tanım:** Bir yüzeyin diğerlerinin ne kadar "üstünde" olduğunu ifade eden seviye sistemi.
- **Ne işe yarar / neden var:** Katman ilişkisini tutarlı hâle getirir. Her bileşenin kendi gölgesini uydurması yerine, sistem 4-5 seviye tanımlar (yüzey, kart, açılır menü, modal, bildirim) ve her seviyenin gölgesi/rengi bellidir.
- **Nerede karşına çıkar:** Tasarım sistemlerinin yüzey tanımlarında.
- **Örnek kullanım:** "Dropdown elevation-2, modal elevation-4. Aralarında bir seviye daha uydurmayalım."
- **Karıştırılanlar:** Koyu temada gölge çalışmaz; derinlik **yüzey açıklığını artırarak** verilir. Yani elevation sistemi tema başına farklı biçimde ifade edilir.
- **İlgili terimler:** Shadow, z-index, Dark mode (5.2)

### Shadow

- **Terim (İngilizce):** Box shadow / drop shadow
- **Türkçesi:** Gölge
- **Tanım:** Bir öğenin arkasına düşen, derinlik hissi veren efekt.
- **Ne işe yarar / neden var:** Elevation'ın görsel ifadesi. Gerçekçi görünmesi için genelde tek bir gölge yetmez; yakın-sert ve uzak-yumuşak iki katmanın birleşimi daha doğal durur. Ayrıca gölge rengi saf siyah yerine, arka planın koyu bir tonu olduğunda daha temiz görünür.
- **Nerede karşına çıkar:** Kart, menü ve modal tasarımında.
- **Örnek kullanım:** "Gölge çok sert; iki katmanlı yumuşak bir gölgeye geçelim ve rengini nötr rampadan alalım."
- **Karıştırılanlar:** Gölge ölçülü kullanılmalıdır; her öğenin gölgesi varsa hiçbir şey öne çıkmaz. Ayrıca gölge tek başına **kenarlık işi görmez**: düşük kontrastlı ekranlarda sınırın görünmesi için ince bir kenarlık gerekebilir.
- **İlgili terimler:** Elevation, Border

### Border radius

- **Terim (İngilizce):** Border radius (corner radius)
- **Türkçesi:** Köşe yuvarlaklığı
- **Tanım:** Köşelerin ne kadar yuvarlatıldığı.
- **Ne işe yarar / neden var:** Ürünün karakterini en hızlı belirleyen tek değerdir: keskin köşe ciddi ve teknik, yumuşak köşe samimi ve erişilebilir hisseder. Sistem olarak birkaç değer tanımlanır (sm/md/lg/full) ve rastgele değer kullanılmaz.
- **Nerede karşına çıkar:** Token tanımlarında.
- **Örnek kullanım:** "Radius ölçeği 4 / 8 / 12 / 999. Kartlar 12, butonlar 8, avatar 999."
- **Karıştırılanlar:** İç içe geçen kutularda **dıştaki radius, içtekinden büyük olmalıdır** (kabaca: dış radius = iç radius + aradaki boşluk). Aksi hâlde köşeler optik olarak bozuk görünür — sık gözden kaçan bir detay.
- **İlgili terimler:** Border, Design token (5.2)

### z-index / Stacking

- **Terim (İngilizce):** z-index, stacking context
- **Türkçesi:** Katman sırası
- **Tanım:** Üst üste gelen öğelerden hangisinin önde görüneceğini belirleyen sayı.
- **Ne işe yarar / neden var:** Modal, dropdown, tooltip ve sticky header sürekli çakışır. Sistemde bir katman ölçeği tanımlanmazsa geliştiriciler `z-index: 9999` yazmaya başlar ve düzen kontrolden çıkar.
- **Nerede karşına çıkar:** "Dropdown modalın arkasında kalıyor" tipi hatalarda.
- **Örnek kullanım:** "z-index token'ları tanımlayalım: dropdown 100, sticky 200, modal 300, toast 400."
- **İlgili terimler:** Elevation, Modal (7.8), Sticky header (7.2)

---

## 5.7 Görsel varlıklar

İkonlar, illüstrasyonlar ve fotoğraflar. Ürünün karakterini büyük ölçüde bunlar taşır ve en çok tutarsızlık da burada oluşur.

### Asset

- **Terim (İngilizce):** Asset
- **Türkçesi:** Varlık / kaynak dosya
- **Tanım:** Projede kullanılan görsel dosyaların genel adı: ikon, logo, fotoğraf, illüstrasyon, video.
- **Ne işe yarar / neden var:** Handoff'un ve proje dosyasının somut çıktısıdır. Hangi formatta, hangi çözünürlükte ve hangi adla teslim edileceği kararlaştırılmazsa uygulama sırasında kayıp yaşanır.
- **Nerede karşına çıkar:** Handoff'ta (2.10) ve proje klasör yapısında.
- **Örnek kullanım:** "Asset'leri SVG olarak dışa aktarıp `icons/` altında kebab-case adlarla verdim."
- **İlgili terimler:** SVG, Icon set, Image optimization (8.12)

### Icon set

- **Terim (İngilizce):** Icon set
- **Türkçesi:** İkon seti
- **Tanım:** Aynı çizim kurallarına göre üretilmiş ikon ailesi.
- **Ne işe yarar / neden var:** Tutarlılık için **tek bir setten** ikon kullanılmalıdır. Farklı setlerden karıştırılan ikonlar (biri çizgisel, biri dolu, biri farklı kalınlıkta) arayüzü hemen amatör gösterir. Setin ortak parametreleri vardır: çizim ızgarası (genelde 24×24), çizgi kalınlığı, köşe tarzı.
- **Nerede karşına çıkar:** Lucide, Phosphor, Heroicons, Material Symbols gibi hazır setler yaygın kullanılır. `[DEĞİŞKEN BİLGİ]` Set isimleri ve lisansları değişir; kullanmadan önce lisansı kontrol et.
- **Örnek kullanım:** "Tek set kullanalım; şu an üç farklı kaynaktan ikon var, çizgi kalınlıkları tutmuyor."
- **Karıştırılanlar:** İkon tek başına anlam taşımaz. Yaygın olmayan bir ikonun yanına metin etiket gerekir — "hamburger" ve "çöp kutusu" gibi öğrenilmiş birkaç ikon istisnadır.
- **İlgili terimler:** SVG, Asset, a11y (6.4)

### SVG vs raster

- **Terim (İngilizce):** SVG, raster (PNG, JPG, WebP, AVIF)
- **Türkçesi:** Vektör, piksel tabanlı görsel
- **Tanım:** SVG matematiksel olarak tanımlanır ve her boyutta net kalır. Raster formatlar piksellerden oluşur ve büyütüldüğünde bozulur.
- **Ne işe yarar / neden var:** İkon ve logo SVG olmalıdır: küçüktür, her ekranda nettir ve rengi CSS ile değiştirilebilir. Fotoğraf raster olmalıdır; modern formatlar (WebP, AVIF) aynı kalitede belirgin biçimde daha küçük dosya üretir.
- **Nerede karşına çıkar:** Asset teslimi ve performans optimizasyonunda.
- **Örnek kullanım:** "Logoyu PNG değil SVG verelim; retina ekranda bulanık görünüyor."
- **İlgili terimler:** Asset, Image optimization (8.12)

### Aspect ratio

- **Terim (İngilizce):** Aspect ratio
- **Türkçesi:** En-boy oranı
- **Tanım:** Bir görselin genişlik/yükseklik oranı: 16:9, 4:3, 1:1, 3:2.
- **Ne işe yarar / neden var:** Kart ve galeri tasarımlarında görsellerin aynı oranda olması düzeni korur. Ayrıca oran önceden tanımlanırsa tarayıcı görsel yüklenmeden yer ayırabilir — bu, sayfa zıplamasını (CLS) önler (1.4, 8.12).
- **Nerede karşına çıkar:** Kart, blog listesi ve galeri tasarımında.
- **Örnek kullanım:** "Tüm kart görselleri 16:9 olsun; farklı oranlar geldiğinde ortadan kırpalım."
- **İlgili terimler:** CLS (8.12), Card (7.10)

### Art direction

- **Terim (İngilizce):** Art direction
- **Türkçesi:** Sanat yönetimi
- **Tanım:** Görsellerin hangi tarzda, hangi konuda ve nasıl çekileceğine dair bütünlüklü karar.
- **Ne işe yarar / neden var:** Stok fotoğraf hissini engelleyen şey budur. Rastgele seçilmiş "ofiste gülen insanlar" fotoğrafları, ne kadar kaliteli olursa olsun ürünü jenerik gösterir. Yön belirlenirse görseller birbirini destekler.
- **Nerede karşına çıkar:** Marka ve pazarlama sitesi projelerinde.
- **Örnek kullanım:** "Art direction: doğal ışık, düşük doygunluk, insanlar ekrana bakmıyor. Stok seçerken bu kurallara uyalım."
- **Karıştırılanlar:** Web'de *art direction* teknik bir anlam da taşır: farklı ekran boyutlarında **farklı kırpılmış** görsel sunmak (sadece küçültmek değil).
- **İlgili terimler:** Asset, Moodboard (4.5), Responsive (5.8)

---

## 5.8 Responsive ve mobile-first

Tasarımın farklı ekran boyutlarında nasıl davranacağı. Bu artık bir "ek özellik" değil, varsayılan gerekliliktir.

### Responsive design

- **Terim (İngilizce):** Responsive design
- **Türkçesi:** Duyarlı tasarım
- **Tanım:** Aynı tasarımın, ekran genişliğine göre kendini yeniden düzenlemesi.
- **Ne işe yarar / neden var:** Tek kod tabanıyla tüm cihazlarda çalışır. Sadece küçültmek değildir: sütunlar alt alta geçer, menü hamburger olur, tablolar farklı gösterilir, bazı öğeler gizlenir veya yeniden düzenlenir.
- **Nerede karşına çıkar:** Her web projesinde. Tasarım teslimi en az iki-üç boyutta yapılmalıdır.
- **Örnek kullanım:** "Masaüstü ve mobil ekranları hazırladım; tablet için 2 sütuna düşme kuralını da yazdım."
- **Karıştırılanlar:** *Responsive* ≠ *adaptive*. Responsive akışkandır ve her genişlikte çalışır; adaptive belirli boyutlar için ayrı düzenler sunar ve aradaki genişliklerde boşluk bırakabilir.
- **İlgili terimler:** Breakpoint, Mobile-first, Viewport (1.4)

### Mobile-first

- **Terim (İngilizce):** Mobile-first
- **Türkçesi:** Önce mobil
- **Tanım:** Tasarıma en küçük ekrandan başlayıp yukarı doğru genişletme yaklaşımı.
- **Ne işe yarar / neden var:** Kısıt, önceliklendirmeyi zorlar. Küçük ekrana ancak gerçekten gerekli olan sığar; büyük ekrandan başlanınca her şey sığar ve neyin önemli olduğu kararı hiç verilmez. Ayrıca çoğu ürün için trafiğin büyük kısmı mobildir — masaüstünden başlamak, çoğunluk için yapılan tasarımı sonraya bırakmak demektir.
- **Nerede karşına çıkar:** Tasarım süreci ve CSS yazım sırasında (`min-width` sorguları).
- **Örnek kullanım:** "Mobile-first çalışalım; mobilde neyin kesileceğine karar verirsek masaüstü zaten kolay."
- **İlgili terimler:** Responsive, Breakpoint, Thumb zone (4.7)

### Breakpoint

- **Terim (İngilizce):** Breakpoint
- **Türkçesi:** Kırılma noktası
- **Tanım:** Yerleşimin değiştiği ekran genişliği eşiği.
- **Ne işe yarar / neden var:** Düzen kararlarını belirli genişliklere bağlar. **İyi bir breakpoint, cihaz modeline göre değil içeriğe göre seçilir:** yerleşim nerede bozuluyorsa breakpoint oradadır. Cihaz boyutları sürekli değiştiği için "iPhone genişliği" gibi sabitler hızla eskir.
- **Nerede karşına çıkar:** Tasarım sistemi tanımlarında ve CSS'te.
- **Örnek kullanım:** "Kart üçlüsü 900px altında sıkışıyor; breakpoint'i oraya koyup ikiliye düşelim."
- **İlgili terimler:** Responsive, Container query, Viewport (1.4)

### Container query

- **Terim (İngilizce):** Container query
- **Türkçesi:** Kapsayıcı sorgusu
- **Tanım:** Bir bileşenin, ekran genişliğine değil **içinde bulunduğu kapsayıcının** genişliğine göre davranmasını sağlayan CSS özelliği.
- **Ne işe yarar / neden var:** Bileşen tabanlı tasarımın eksik parçasıydı. Aynı kart, geniş bir ana bölümde yatay, dar bir kenar çubuğunda dikey görünebilmelidir — ekran genişliği bu ikisi için de aynıdır, bu yüzden breakpoint çözemez.
- **Nerede karşına çıkar:** Bileşen kütüphanelerinde giderek yaygınlaşıyor. `[DEĞİŞKEN BİLGİ]` Modern tarayıcılarda destekleniyor; kullanmadan önce güncel destek durumunu kontrol et.
- **Örnek kullanım:** "Kartı container query ile yazalım; hem ana alanda hem sidebar'da doğru davransın."
- **İlgili terimler:** Breakpoint, Component (8.7)

### Fluid typography

- **Terim (İngilizce):** Fluid typography
- **Türkçesi:** Akışkan tipografi
- **Tanım:** Yazı boyutunun, breakpoint'te bir anda değil, ekran genişliğiyle birlikte kademesiz olarak değişmesi.
- **Ne işe yarar / neden var:** Her breakpoint için ayrı boyut tanımlamayı azaltır ve ara genişliklerde daha doğal sonuç verir. CSS'te genelde `clamp()` ile yapılır: bir minimum, bir tercih edilen ve bir maksimum değer verilir.
- **Nerede karşına çıkar:** Modern tipografi sistemlerinde, özellikle büyük başlıklarda.
- **Örnek kullanım:** "Hero başlığını fluid yapalım: mobilde 32, masaüstünde 64, arada kademesiz."
- **Karıştırılanlar:** Sınırsız akışkanlık okunabilirliği bozabilir; minimum ve maksimum değer mutlaka verilmelidir.
- **İlgili terimler:** Type scale (5.3), Breakpoint

---

## 5.9 Motion

Hareketin tasarımı. Kuralı basit: **hareketin bir işi olmalı.** İşi olmayan animasyon, kullanıcıyı yavaşlatan bir gösteriştir.

### Motion design

- **Terim (İngilizce):** Motion design
- **Türkçesi:** Hareket tasarımı
- **Tanım:** Arayüzdeki geçişlerin, animasyonların ve tepkilerin tasarımı.
- **Ne işe yarar / neden var:** İyi hareket üç işten birini yapar: **yön gösterir** (bu panel nereden geldi, nereye gitti), **durum bildirir** (yükleniyor, kaydedildi), **ilişki kurar** (tıklanan kart bu detaya dönüştü). Bu üçünden birini yapmıyorsa hareket gereksizdir.
- **Nerede karşına çıkar:** Prototip ve handoff'ta. Genelde en son düşünülür ve bu yüzden tutarsız olur.
- **Örnek kullanım:** "Bu animasyon hiçbir işe yaramıyor, sadece süslüyor; kaldıralım."
- **İlgili terimler:** Micro-interaction, Duration, Easing

### Duration

- **Terim (İngilizce):** Duration
- **Türkçesi:** Süre
- **Tanım:** Bir animasyonun ne kadar sürdüğü, milisaniye cinsinden.
- **Ne işe yarar / neden var:** Süre, algılanan hızı doğrudan etkiler. Genel yaklaşım: küçük ve yakın hareketler kısa (yaklaşık 100–200 ms), büyük ve uzak hareketler biraz daha uzun (yaklaşık 250–400 ms). Kullanıcının sık tekrarladığı bir etkileşim ne kadar hoş olursa olsun uzun sürerse rahatsız edici hâle gelir.
- **Nerede karşına çıkar:** Tasarım sistemi motion token'larında.
- **Örnek kullanım:** "Hover geçişi 300ms çok yavaş; 150'ye indirelim, tekrar eden bir etkileşim."
- **Karıştırılanlar:** `[EMİN DEĞİLİM]` Bu sayı aralıkları sektörde yaygın öneriler; kesin bir standart değil. Sistemine göre ayarla ve tekrar sıklığını ölçüt al.
- **İlgili terimler:** Easing, Motion token, Response time (4.7)

### Easing

- **Terim (İngilizce):** Easing (timing function)
- **Türkçesi:** Yumuşatma eğrisi
- **Tanım:** Animasyonun hızının süre boyunca nasıl değiştiği.
- **Ne işe yarar / neden var:** Doğrusal (linear) hareket mekanik hisseder çünkü gerçek dünyada hiçbir şey sabit hızda başlayıp durmaz. Genel yaklaşım: ekrana **giren** öğe hızlı başlayıp yavaşlar (ease-out), ekrandan **çıkan** öğe yavaş başlayıp hızlanır (ease-in), yer değiştiren öğe ikisini birden kullanır (ease-in-out).
- **Nerede karşına çıkar:** Motion token'larında ve prototip ayarlarında.
- **Örnek kullanım:** "Modal açılışı ease-out olsun, kapanışı ease-in; şu an ikisi de linear ve robotik duruyor."
- **İlgili terimler:** Duration, Transition

### Transition vs Animation

- **Terim (İngilizce):** Transition, Animation
- **Türkçesi:** Geçiş, animasyon
- **Tanım:** Transition = bir durumdan diğerine geçerken oluşan hareket (hover, açık/kapalı). Animation = kendi kendine çalışan, tekrarlanabilen hareket dizisi (yükleme dönen çemberi).
- **Ne işe yarar / neden var:** Farklı işler için farklı araçlar. Arayüzün büyük kısmı transition'dır; animation daha çok durum göstergelerinde kullanılır.
- **Nerede karşına çıkar:** CSS tanımlarında ve tasarım tesliminde.
- **Örnek kullanım:** "Buton hover'ı transition, skeleton parıltısı animation."
- **İlgili terimler:** Micro-interaction, Loading state (7.9)

### Micro-interaction

- **Terim (İngilizce):** Micro-interaction
- **Türkçesi:** Mikro etkileşim
- **Tanım:** Tek bir küçük eyleme verilen küçük görsel tepki: butonun basılma hissi, kalp ikonunun doldurulması, kopyalandı işareti.
- **Ne işe yarar / neden var:** Sistemin cevap verdiğini hissettirir (feedback, 4.6). En büyük kalite farkını yaratan detaylardan biridir — ve ölçülü kullanıldığında.
- **Nerede karşına çıkar:** Buton, form ve etkileşimli bileşen tasarımında.
- **Örnek kullanım:** "Kopyala butonuna mikro etkileşim ekleyelim: ikon 1 saniye tik işaretine dönsün."
- **İlgili terimler:** Feedback (4.6), Transition, Motion design

### Staggering / Orchestration

- **Terim (İngilizce):** Staggering, orchestration
- **Türkçesi:** Kademeli başlatma, koreografi
- **Tanım:** Staggering = birden çok öğenin küçük gecikmelerle sırayla animasyona girmesi. Orchestration = birden çok animasyonun birbirine göre zamanlanması.
- **Ne işe yarar / neden var:** Aynı anda hareket eden 20 öğe kaotik görünür; küçük gecikmelerle sıralanınca göz takip edebilir. Ama gecikmeler toplamı büyürse kullanıcı bekler — özellikle sık ziyaret edilen ekranlarda risklidir.
- **Nerede karşına çıkar:** Liste ve galeri girişlerinde, pazarlama sayfalarında.
- **Örnek kullanım:** "Kart listesine 40ms stagger verelim ama toplam 300ms'i geçmesin."
- **İlgili terimler:** Duration, Motion design

### prefers-reduced-motion

- **Terim (İngilizce):** `prefers-reduced-motion`
- **Türkçesi:** Azaltılmış hareket tercihi
- **Tanım:** Kullanıcının işletim sistemi düzeyinde "hareketi azalt" ayarını açtığını bildiren CSS medya sorgusu.
- **Ne işe yarar / neden var:** Vestibüler rahatsızlığı olan kullanıcılarda büyük hareketler baş dönmesi ve mide bulantısı yaratabilir. Bu bir tercih değil, erişilebilirlik gereğidir. Doğru uygulama animasyonları tamamen kapatmak değil, **büyük yer değiştirmeleri ve paralaks etkilerini** kaldırıp yerine kısa bir opaklık geçişi bırakmaktır.
- **Nerede karşına çıkar:** Erişilebilirlik denetimlerinde ve motion tanımlarında.
- **Örnek kullanım:** "Paralaks efekti `prefers-reduced-motion` açıkken devre dışı kalsın; sadece fade uygulayalım."
- **İlgili terimler:** a11y (6.8), Motion design

---

## 5.10 Figma dili

Tasarım aracının terimleri. Bunlar sadece araç bilgisi değil; ekiple konuşurken kullanacağın kelimelerdir.

`[DEĞİŞKEN BİLGİ]` Bu bölümdeki her şey bir ürün özelliğidir ve Figma sık güncellenir. Aşağıdaki bilgiler Eylül 2026 itibarıyla geçerli görünen genel yapıyı anlatır; menü konumları ve ayrıntılar değişmiş olabilir.

### Frame

- **Terim (İngilizce):** Frame
- **Türkçesi:** Çerçeve
- **Tanım:** İçine öğe alabilen, kendi boyutu ve davranış kuralları olan kapsayıcı.
- **Ne işe yarar / neden var:** Figma'daki her yerleşimin temeli. Bir ekran bir frame'dir, bir kart da bir frame'dir. Kırpma, auto layout ve responsive davranış frame üzerinden çalışır.
- **Nerede karşına çıkar:** Her dosyada.
- **Örnek kullanım:** "Bunu grup değil frame yap; auto layout uygulayabilelim."
- **Karıştırılanlar:** *Frame* ≠ *Group*. Group sadece öğeleri bir arada tutar; frame bir kapsayıcıdır ve kendi kuralları vardır. Group kullanmak neredeyse her zaman sonradan sorun çıkarır.
- **İlgili terimler:** Auto layout, Constraints

### Auto layout

- **Terim (İngilizce):** Auto layout
- **Türkçesi:** Otomatik yerleşim
- **Tanım:** Bir frame içindeki öğelerin, yön, boşluk ve hizalama kurallarına göre otomatik dizilmesini sağlayan özellik.
- **Ne işe yarar / neden var:** Tasarımı statik bir resim olmaktan çıkarıp davranışlı hâle getirir: içerik uzayınca kutu büyür, öğe eklenince aralık korunur. **Kavramsal olarak CSS Flexbox'a karşılık gelir** — bu yüzden auto layout ile çalışmak, geliştiricinin göreceği yapıya daha yakın bir tasarım üretir.
- **Nerede karşına çıkar:** Her ciddi Figma dosyasında.
- **Örnek kullanım:** "Kartta auto layout yok; metin uzayınca taşıyor. Gerçek içerikle test edemiyoruz."
- **İlgili terimler:** Frame, Flexbox (8.3), Spacing scale (5.5)

### Constraints

- **Terim (İngilizce):** Constraints
- **Türkçesi:** Kısıtlar
- **Tanım:** Bir öğenin, kapsayıcısı yeniden boyutlandığında nasıl davranacağını belirleyen kural (sola sabit, sağa sabit, esne, ortala).
- **Ne işe yarar / neden var:** Responsive davranışı tasarım dosyasında göstermenin yolu. Ekran genişliğini değiştirdiğinde tasarımın gerçekte ne yapacağını görürsün.
- **Nerede karşına çıkar:** Responsive kontrolde.
- **Örnek kullanım:** "Butonun constraint'i sola sabit; sağ hizalı olmalı, çerçeveyi genişletince kayıyor."
- **İlgili terimler:** Auto layout, Responsive (5.8)

### Component / Instance

- **Terim (İngilizce):** Component, Instance
- **Türkçesi:** Bileşen, örnek
- **Tanım:** Component = ana kopya. Instance = o ana kopyadan türetilmiş ve ona bağlı kalan kullanım.
- **Ne işe yarar / neden var:** Ana bileşen değiştiğinde tüm örnekler güncellenir. 40 ekranda kullanılan bir butonun köşe yarıçapı tek yerden değişir. **Detach** (bağı koparma) bu ilişkiyi bozar ve tutarsızlığın en yaygın kaynağıdır.
- **Nerede karşına çıkar:** Her kütüphanede.
- **Örnek kullanım:** "Bu instance detach edilmiş; ana bileşene geri bağlayalım."
- **İlgili terimler:** Variant, Library, Component (8.7)

### Variant / Component property

- **Terim (İngilizce):** Variant, component property
- **Türkçesi:** Varyant, bileşen özelliği
- **Tanım:** Variant = aynı bileşenin farklı hâlleri (primary/secondary, small/large, default/hover/disabled). Component property = o hâllerin ve içeriklerin açılır menüden seçilebilir hâle getirilmesi.
- **Ne işe yarar / neden var:** Aynı bileşenin 12 ayrı kopyasını üretmek yerine tek bileşende düzenlenmiş bir matris kurar. **Kod tarafındaki `props` kavramının doğrudan karşılığıdır** (8.7); bu eşleşme handoff'u belirgin biçimde kolaylaştırır.
- **Nerede karşına çıkar:** Bileşen kütüphanelerinde.
- **Örnek kullanım:** "Butonda üç property olsun: variant (primary/secondary/ghost), size (sm/md/lg), icon (boolean)."
- **İlgili terimler:** Component, Props (8.7)

### Variable

- **Terim (İngilizce):** Variable (Figma variables)
- **Türkçesi:** Değişken
- **Tanım:** Figma'nın tasarım token'larını yerel olarak ifade etme biçimi. Renk, sayı, metin ve boolean tipinde olabilir; koleksiyonlar ve **modlar** (mode) altında düzenlenir.
- **Ne işe yarar / neden var:** Tema desteğinin çalıştığı yer burasıdır: bir renk değişkeninin Light ve Dark değeri olabilir ve mod değiştirildiğinde tüm dosya güncellenir. Değişkenler birbirini referans alabilir (aliasing) — semantic token katmanı (5.2) böyle kurulur. Her değişkene bir **code syntax** adı verilebilir; bu ad Dev Mode'da geliştiriciye görünür.
- **Nerede karşına çıkar:** Modern tasarım sistemi dosyalarında.
- **Örnek kullanım:** "`color/text/primary` değişkenini `color/neutral/900`'a alias'layalım; dark mode'da hedefi değiştiririz."
- **Karıştırılanlar:** *Variable* ≠ *Style*. Style tek bir sabit değeri saklar, mod desteklemez ve başka bir style'a referans veremez. Figma'nın kendi dokümantasyonu, değişkenlerin style'ların yerine geçmediğini; tipografi ve efekt gibi bileşik değerlerde style'ların hâlâ kullanıldığını belirtiyor.
- **İlgili terimler:** Design token (5.2), Theming (5.2), Style
- **Kaynak:** https://help.figma.com/hc/en-us/articles/15871097384471-The-difference-between-variables-and-styles

### Style

- **Terim (İngilizce):** Style (color style, text style, effect style)
- **Türkçesi:** Stil
- **Tanım:** Yeniden kullanılabilir, isimlendirilmiş bir görsel tanım.
- **Ne işe yarar / neden var:** Tipografi gibi **bileşik** değerler için hâlâ ana araçtır: bir metin stili aile, boyut, ağırlık, satır yüksekliği ve harf aralığını birlikte saklar. Değişkenler bunu tek başına ifade edemez.
- **Nerede karşına çıkar:** Tipografi ve efekt tanımlarında.
- **Örnek kullanım:** "Metin stilleri type scale'e göre kurulu; içlerindeki değerler variable'lardan besleniyor."
- **İlgili terimler:** Variable, Type scale (5.3)

### Library

- **Terim (İngilizce):** Library, publish
- **Türkçesi:** Kütüphane, yayınlama
- **Tanım:** Bileşen, stil ve değişkenlerin başka dosyalarda kullanılabilmesi için yayınlanması.
- **Ne işe yarar / neden var:** Tasarım sisteminin dağıtım mekanizması. Yayınlanan bir güncelleme, kullanan dosyalara bildirim olarak gider ve orada onaylanır — yani değişiklik zorla değil, kontrollü yayılır.
- **Nerede karşına çıkar:** Çok dosyalı projelerde.
- **Örnek kullanım:** "Kütüphaneyi yayınladım; güncellemeyi kabul edip ekranları kontrol edin."
- **İlgili terimler:** Component, Governance (5.1), Versioning (15.8)

### Dev Mode / Code Connect

- **Terim (İngilizce):** Dev Mode, Code Connect
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Dev Mode = geliştiricinin tasarımı inceleyip ölçü, renk ve token adlarını görebildiği görünüm. Code Connect = bir Figma bileşenini koddaki karşılığına bağlayarak Dev Mode'da gerçek kod parçasını gösteren özellik.
- **Ne işe yarar / neden var:** Handoff'u (2.10) belge alışverişinden canlı bir kaynağa çevirir. Değişkene verilen code syntax adı sayesinde geliştirici `#1B4DFF` yerine `--color-action-primary` görür — yani doğru olanı kopyalar.
- **Nerede karşına çıkar:** Tasarım-geliştirme aktarımında. `[DEĞİŞKEN BİLGİ]` Bu özelliklerin kapsamı ve fiyatlandırması değişebilir.
- **Örnek kullanım:** "Dev Mode'da token adları görünüyor; ham hex kopyalamayın."
- **İlgili terimler:** Handoff (2.10), Design token (5.2), Variable

---

## 5.11 Kendini test et

**1.** Style guide, component library ve design system arasındaki fark nedir?

**2.** Primitive, semantic ve component token katmanları neyi çözer? Bir bileşenin doğrudan primitive token kullanması neden sorunludur?

**3.** Dark mode neden "renkleri ters çevirmek" değildir? En az üç sebep say.

**4.** Typeface ile font arasındaki fark pratikte neyi etkiler?

**5.** Type scale neden gerekli? Ölçek olmadan ne olur?

**6.** Gövde metni ve büyük başlık için satır yüksekliği neden farklı olmalı?

**7.** Bir makale sayfasında `max-width` vermenin gerekçesi nedir? Hangi kavramla ilgilidir?

**8.** WCAG AA seviyesinde normal metin, büyük metin ve arayüz bileşenleri için minimum kontrast oranları nedir?

**9.** OKLCH'in HSL'e göre avantajı nedir?

**10.** 8pt grid'in asıl faydası matematiksel midir? Değilse nedir?

**11.** Başlık üstündeki boşluk neden başlık altındakinden büyük olmalı? Hangi ilkeyle açıklanır?

**12.** İç içe iki kutuda köşe yarıçapları nasıl ilişkilendirilmeli?

**13.** Breakpoint seçerken neden cihaz modeli referans alınmamalı?

**14.** Container query hangi problemi çözer, breakpoint neden yetmez?

**15.** Ekrana giren ve ekrandan çıkan öğeler için hangi easing türleri kullanılır ve neden?

**16.** `prefers-reduced-motion` açıkken ne yapılmalı? Tüm animasyonları kapatmak doğru mu?

**17.** Figma'da Variable ile Style arasındaki fark nedir? Hangi durumda hâlâ Style kullanılır?

**18.** Figma'daki "variant / component property" kavramının kod tarafındaki karşılığı nedir?

---

### Cevaplar

**1.** Style guide kuralları **anlatan** bir belgedir (logo, renk, ton). Component library yeniden kullanılabilir arayüz parçalarının **koleksiyonudur**. Design system bunların tümünü — token, bileşen, kural, dokümantasyon, kod ve bunları güncelleyen süreci — birlikte tutan **yaşayan sistemdir**.

**2.** Katmanlar, değeri kullanım niyetinden ayırır. Primitive ham değeri (`blue-600`), semantic niyeti (`color-action-primary`), component ise bileşene özel kullanımı saklar. Bileşen doğrudan primitive kullanırsa tema değişimi imkânsız hâle gelir: `gray-900` koyu temada da `gray-900` kalır, oysa `color-text-primary` hedefini değiştirebilir.

**3.** (1) Saf beyaz metin koyu zeminde göz yorar, kırılmış beyaz gerekir. (2) Gölge koyu zeminde işe yaramaz; derinlik yüzey açıklık farkıyla verilir. (3) Doygun renkler koyu zeminde titrer, kroma düşürülmelidir. (4) Kontrast oranları yeniden hesaplanmalıdır; açık temada geçen bir çift koyu temada kalabilir.

**4.** Typeface tasarımın kendisidir (Inter), font ise belirli bir ağırlık/stil/format dosyasıdır (Inter Bold, `.woff2`). Pratikte performansı etkiler: bir typeface seçersin ama kaç font **dosyası** yükleyeceğine ayrıca karar verirsin; her ağırlık ek bir dosyadır.

**5.** Ölçek, rastgele boyut kullanımını engeller. 14, 15, 16, 17, 18 hepsi kullanılırsa aradaki farklar algılanamaz ve hiyerarşi okunmaz. Belirgin adımlar (16 / 20 / 25 / 31) fark edilebilir bir sıralama üretir.

**6.** Yazı büyüdükçe satır yüksekliği **oranı** küçülmelidir. Gövde için 1.5 civarı rahat okunur; aynı oran 40px'lik bir başlıkta satırları kopuk ve dağınık gösterir, orada 1.1–1.2 uygundur.

**7.** Satır uzunluğu (measure) meselesi. Çok uzun satırda göz, satır sonundan bir sonraki satır başına dönerken kaybolur. Gövde metni için yaklaşık 45–75 karakter aralığı önerilir; geniş ekranda `max-width` olmadan bu aralık çok aşılır.

**8.** Normal metin **4.5:1**, büyük metin **3:1** (≈24px veya kalınsa ≈18.66px ve üstü), metin olmayan arayüz bileşenleri ve odak göstergeleri **3:1**. (AAA seviyesinde 7:1 ve 4.5:1.)

**9.** Algısal tekdüzelik. HSL'de aynı açıklık değerine sahip iki renk (sarı ve mavi gibi) gözle farklı parlaklıkta görünür; OKLCH'te eşit açıklık değeri eşit algılanan parlaklık üretir. Bu, rampa kurmayı ve kontrast korumayı öngörülebilir hâle getirir.

**10.** Hayır. Ekran boyutlarının 8'e bölünebilmesi ikincil bir faydadır; asıl fayda **karar sayısını azaltmasıdır**. 8, 16, 24 arasından seçmek 0–100 arasından seçmekten hem hızlı hem tutarlıdır.

**11.** Gestalt **yakınlık** (proximity) ilkesi gereği. Başlık, altındaki metne ait olarak okunmalıdır; üst boşluk alt boşluktan küçük olursa başlık bir önceki bloğa aitmiş gibi görünür.

**12.** Dıştaki radius, içtekinden büyük olmalıdır — kabaca **dış radius = iç radius + aradaki boşluk**. Aksi hâlde köşeler optik olarak yanlış hizalanmış görünür.

**13.** Cihaz modelleri ve boyutları sürekli değişir; "iPhone genişliği" gibi sabitler hızla eskir. Doğru yaklaşım **içeriğe göre** seçmektir: yerleşim hangi genişlikte bozuluyorsa breakpoint oradadır.

**14.** Aynı bileşenin, ekran genişliği aynıyken farklı kapsayıcılarda farklı davranması gerektiği durumu çözer. Bir kart geniş ana bölümde yatay, dar sidebar'da dikey olmalıdır; ikisi için de ekran genişliği aynı olduğundan breakpoint bunu ayırt edemez.

**15.** Ekrana **giren** öğe `ease-out` (hızlı başlar, yavaşlar) — dikkat çeker ve doğal biçimde yerine oturur. Ekrandan **çıkan** öğe `ease-in` (yavaş başlar, hızlanır) — gidişi hızlandırır, kullanıcıyı bekletmez. Doğrusal hareket mekanik hisseder çünkü gerçek dünyada hiçbir şey sabit hızda başlayıp durmaz.

**16.** Hayır, tamamen kapatmak doğru değil. Büyük yer değiştirmeler, paralaks ve zoom gibi vestibüler rahatsızlık yaratabilecek hareketler kaldırılır; yerine kısa bir opaklık geçişi gibi zararsız bir geri bildirim bırakılır. Amaç hareketi yok etmek değil, rahatsız edici olanı azaltmaktır.

**17.** Variable dinamik ve tiplidir: modları (light/dark, marka A/B) destekler, başka bir değişkeni referans alabilir (aliasing) ve Dev Mode'da code syntax adıyla görünür. Style statik tek bir değer saklar, mod ve alias desteklemez. **Style hâlâ bileşik değerler için kullanılır** — özellikle metin stilleri (aile + boyut + ağırlık + satır yüksekliği) ve efektler.

**18.** Kod tarafındaki **props** (8.7). Bir bileşenin `variant`, `size`, `disabled` gibi özellikleri, Figma'daki component property'lerin doğrudan karşılığıdır; bu eşleşme handoff'u kolaylaştırır.

---

**Biten bölüm:** Bölüm 5 — Tasarım sistemi ve görsel dil
**Sıradaki bölüm:** Bölüm 6 — Erişilebilirlik (a11y)
