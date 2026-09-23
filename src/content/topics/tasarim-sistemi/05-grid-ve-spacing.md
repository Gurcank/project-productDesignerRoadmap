---
title: "Grid ve spacing"
sectionNumber: "5.5"
category: "tasarim-sistemi"
order: 5
cardCount: 6
sourceFile: "05-tasarim-sistemi-ve-gorsel-dil.md"
origin: "material"
flags: []
---
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
