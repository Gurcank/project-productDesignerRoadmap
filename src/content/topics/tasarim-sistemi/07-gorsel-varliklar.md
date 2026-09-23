---
title: "Görsel varlıklar"
sectionNumber: "5.7"
category: "tasarim-sistemi"
order: 7
cardCount: 5
sourceFile: "05-tasarim-sistemi-ve-gorsel-dil.md"
origin: "material"
flags: ["degisken"]
---
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
