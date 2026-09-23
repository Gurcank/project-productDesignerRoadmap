---
title: "Yüzey ve derinlik"
sectionNumber: "5.6"
category: "tasarim-sistemi"
order: 6
cardCount: 4
sourceFile: "05-tasarim-sistemi-ve-gorsel-dil.md"
origin: "material"
flags: []
---
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
