---
title: "Figma dili"
sectionNumber: "5.10"
category: "tasarim-sistemi"
order: 10
cardCount: 9
sourceFile: "05-tasarim-sistemi-ve-gorsel-dil.md"
origin: "material"
flags: ["degisken"]
---
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
