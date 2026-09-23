---
title: "Sayfa iskeleti"
sectionNumber: "7.1"
category: "arayuz-anatomisi"
order: 1
cardCount: 8
sourceFile: "07a-site-anatomisi.md"
origin: "material"
flags: []
---
Her sayfanın ana bölgeleri. Bunlar sadece görsel bölümler değil, aynı zamanda HTML landmark'larıdır (6.3) — yani ekran okuyucu kullanıcıları bunlar arasında atlayarak gezer.

### Header

- **Terim (İngilizce):** Header (site header, masthead)
- **Türkçesi:** Üst bölüm / başlık alanı
- **Tanım:** Sayfanın en üstündeki, genelde logo ve ana navigasyonu barındıran şerit.
- **Ne işe yarar / neden var:** Kullanıcının nerede olduğunu ve nereye gidebileceğini söyler. Her sayfada tutarlı olduğu için bir sabit noktadır.
- **Nerede karşına çıkar:** Her sitede. Kodda `<header>` elemanı ve `banner` landmark'ına karşılık gelir.
- **Örnek kullanım:** "Header'ı sadeleştirelim; şu an logo, 7 menü öğesi, arama, dil seçici ve iki buton var."
- **Karıştırılanlar:** *Site header* ≠ *HTTP header* (1.3). Aynı kelime, tamamen farklı şey. Ayrıca *header* ≠ *hero* (7.3): header üst şerit, hero onun altındaki büyük tanıtım alanı.
- **İlgili terimler:** Nav, Sticky header (7.2), Hero (7.3)

### Nav

- **Terim (İngilizce):** Nav (navigation)
- **Türkçesi:** Gezinme / navigasyon
- **Tanım:** Site içindeki bağlantı grubu.
- **Ne işe yarar / neden var:** Sitenin bilgi mimarisinin (4.3) görünen yüzü. Bir sitede birden fazla nav olabilir ve bunların adları vardır: **global nav** (her sayfada aynı, ana menü), **local nav** (bir bölüm içindeki alt menü), **utility nav** (giriş, dil, arama gibi yardımcı bağlantılar), **footer nav** (alttaki geniş bağlantı listesi).
- **Nerede karşına çıkar:** Her sitede. Kodda `<nav>` elemanı.
- **Örnek kullanım:** "Global nav'da 5 öğe kalsın, geri kalanı footer nav'a inelim."
- **İlgili terimler:** IA (4.3), Mega menu (7.2), Sidebar

### Main

- **Terim (İngilizce):** Main (main content)
- **Türkçesi:** Ana içerik
- **Tanım:** Sayfanın o sayfaya özgü, asıl içeriğini barındıran bölge.
- **Ne işe yarar / neden var:** Header ve footer her sayfada tekrar eder; `main` tekrar etmeyen kısımdır. Skip link (6.5) buraya atlar. Sayfada tek bir `main` olmalıdır.
- **Nerede karşına çıkar:** Her sayfa iskeletinde.
- **Örnek kullanım:** "Skip link `#main`'e gitsin; şu an ilk kartın üstüne düşüyor."
- **İlgili terimler:** Landmark (6.3), Skip link (6.5)

### Aside / Sidebar

- **Terim (İngilizce):** Aside, sidebar
- **Türkçesi:** Yan alan, kenar çubuğu
- **Tanım:** Ana içeriğin yanında duran, destekleyici içerik veya gezinme alanı.
- **Ne işe yarar / neden var:** İki farklı işi görebilir: içerik sitelerinde ilgili yazılar, reklam, içindekiler; uygulamalarda ise ana navigasyon. İkincisine genelde **app sidebar** veya **navigation rail** denir ve daraltılabilir (collapsible) olur.
- **Nerede karşına çıkar:** Blog sayfalarında ve panel arayüzlerinde.
- **Örnek kullanım:** "Sidebar'ı daraltılabilir yapalım; dar ekranda sadece ikonlar kalsın."
- **Karıştırılanlar:** Mobilde sidebar genelde bir **drawer**'a (7B) dönüşür; ikisi aynı içeriğin farklı sunumudur.
- **İlgili terimler:** Nav, Drawer (7B), Dashboard (7B)

### Footer

- **Terim (İngilizce):** Footer
- **Türkçesi:** Alt bölüm
- **Tanım:** Sayfanın en altındaki, ikincil bağlantıları ve yasal bilgileri barındıran alan.
- **Ne işe yarar / neden var:** İki işi görür: kullanıcı aradığını yukarıda bulamazsa son çare olarak buraya bakar; ayrıca yasal zorunlulukların (gizlilik politikası, kullanım şartları, iletişim bilgisi, şirket unvanı) durduğu yerdir (13.11).
- **Nerede karşına çıkar:** Her sitede.
- **Örnek kullanım:** "Footer'a KVKK aydınlatma metni ve erişilebilirlik beyanı bağlantılarını da ekleyelim."
- **İlgili terimler:** Yasal sayfalar (13.11), Nav

### Layout

- **Terim (İngilizce):** Layout
- **Türkçesi:** Yerleşim / şablon
- **Tanım:** Birden fazla sayfanın paylaştığı ortak iskelet.
- **Ne işe yarar / neden var:** Header ve footer'ı her sayfada tekrar tanımlamak yerine bir kez tanımlayıp içeriği içine yerleştirmeyi sağlar. Kod tarafında da böyle çalışır (8.9). Bir sitede genelde birkaç layout olur: pazarlama layout'u, uygulama layout'u, giriş ekranı layout'u.
- **Nerede karşına çıkar:** Proje yapısı ve tasarım dosyası organizasyonunda.
- **Örnek kullanım:** "Giriş ekranları ayrı layout kullansın; header ve sidebar orada olmasın."
- **İlgili terimler:** App shell, Routing (8.9)

### App shell

- **Terim (İngilizce):** App shell
- **Türkçesi:** Uygulama kabuğu
- **Tanım:** Uygulamanın içerik değişse de sabit kalan çerçevesi: üst bar, yan menü, ana içerik alanı.
- **Ne işe yarar / neden var:** Sayfa geçişlerinde kabuk yeniden yüklenmez, sadece içerik değişir. Bu, uygulama hissini veren şeydir (SPA, 1.7) ve algılanan hızı artırır.
- **Nerede karşına çıkar:** Panel ve web uygulamalarında.
- **Örnek kullanım:** "App shell sabit kalsın, sadece içerik alanı değişsin; sidebar her geçişte yeniden çizilmesin."
- **İlgili terimler:** Layout, SPA (1.7), Skeleton (7B)

### Section

- **Terim (İngilizce):** Section (content block, band, strip)
- **Türkçesi:** Bölüm
- **Tanım:** Sayfanın kendi başlığı ve amacı olan, yatay bir dilim hâlindeki parçası.
- **Ne işe yarar / neden var:** Uzun sayfalar bölümlerden oluşur ve tasarım konuşması bölüm bazında yapılır. Bir landing page'in yapısı genelde şöyle adlandırılır: hero → logo cloud → feature grid → testimonial → pricing → FAQ → CTA section → footer.
- **Nerede karşına çıkar:** Sayfa kurgusunda ve tasarım tesliminde.
- **Örnek kullanım:** "Üçüncü section'ı çıkaralım; feature grid ile bento grid aynı şeyi iki kez anlatıyor."
- **İlgili terimler:** Feature grid (7.5), Hero (7.3)
