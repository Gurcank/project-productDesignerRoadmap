---
title: "CSS yaklaşımları"
sectionNumber: "8.4"
category: "front-end"
order: 4
cardCount: 4
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: ["degisken"]
---
Stilin nasıl organize edileceğine dair yaklaşımlar. Bu, proje başında verilen ve sonradan değiştirmesi pahalı olan bir karardır.

### Vanilla CSS / BEM

- **Terim (İngilizce):** Vanilla CSS, BEM (Block Element Modifier)
- **Türkçesi:** Sade CSS, BEM adlandırma yöntemi
- **Tanım:** Ayrı CSS dosyaları yazmak ve sınıf adlarını disiplinli bir kurala göre vermek. BEM, `blok__eleman--durum` biçiminde bir adlandırma sözleşmesidir.
- **Ne işe yarar / neden var:** Hiçbir araca bağımlı değildir ve her yerde çalışır. Amacı, isim çakışmalarını ve özgüllük savaşlarını (8.2) disiplinle önlemektir. Bedeli: disiplini herkesin sürdürmesi gerekir.
- **Nerede karşına çıkar:** Framework kullanmayan projelerde ve eski kod tabanlarında.
- **Örnek kullanım:** "Sınıf adlarını BEM'e göre verelim; şu an aynı ada sahip iki farklı stil var."
- **İlgili terimler:** Specificity (8.2), CSS Modules

### CSS Modules

- **Terim (İngilizce):** CSS Modules
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Her bileşenin kendi CSS dosyasının olduğu ve sınıf adlarının derleme sırasında otomatik olarak benzersiz hâle getirildiği yaklaşım.
- **Ne işe yarar / neden var:** İsim çakışmasını **otomatik** çözer — disipline değil araca güvenir. Sade CSS yazmaya devam edersin, çalışma zamanı maliyeti yoktur.
- **Nerede karşına çıkar:** React ve Next.js projelerinde yaygın ve güvenli bir varsayılan.
- **Örnek kullanım:** "CSS Modules kullanalım; sade CSS yazmaya devam ederiz ama çakışma riski kalmaz."
- **İlgili terimler:** Vanilla CSS, Tailwind, Component (8.7)

### Utility-first (Tailwind)

- **Terim (İngilizce):** Utility-first CSS, Tailwind CSS
- **Türkçesi:** Yardımcı sınıf öncelikli CSS
- **Tanım:** Her biri tek bir işi yapan küçük sınıfların doğrudan HTML'e yazılması yaklaşımı.
- **Ne işe yarar / neden var:** İki gerçek faydası vardır. Birincisi, **tasarım sistemine uymayı kolaylaştırır**: sınıflar önceden tanımlı bir ölçekten gelir, rastgele 17px yazamazsın. İkincisi, stil bileşenin yanında durduğu için bir bileşeni silmek stilini de siler; kullanılmayan CSS birikmez.
- **Nerede karşına çıkar:** Modern React/Next.js projelerinde çok yaygın. shadcn/ui (9.5) gibi kopyala-yapıştır bileşen yaklaşımının temeli.
- **Örnek kullanım:** "Tailwind kullanalım ve spacing ölçeğimizi config'e yazalım; ölçek dışı değer kullanılamasın."
- **Karıştırılanlar:** En yaygın eleştirisi HTML'in uzun sınıf listeleriyle dolmasıdır ("class soup"). Ayrıca ölçeği config'te tanımlamazsan avantajı kaybolur. `[DEĞİŞKEN BİLGİ]` Tailwind'in sürümleri arasında yapılandırma biçimi değişiyor; güncel sürümü kontrol et.
- **İlgili terimler:** Design token (5.2), shadcn/ui (9.5), CSS Modules

### CSS-in-JS

- **Terim (İngilizce):** CSS-in-JS — runtime (styled-components, Emotion), zero-runtime (vanilla-extract, Panda CSS)
- **Türkçesi:** JavaScript içinde CSS
- **Tanım:** Stillerin JavaScript dosyalarının içinde yazılması. **Runtime** sürümü stilleri tarayıcıda çalışırken üretir; **zero-runtime** sürümü derleme sırasında üretip statik CSS çıkarır.
- **Ne işe yarar / neden var:** Bileşenle stili aynı dosyada tutar ve stilin JavaScript değerlerine göre dinamik değişmesini kolaylaştırır.
- `[DEĞİŞKEN BİLGİ]` **Durum değişti ve bilmen gerekir:** styled-components **Mart 2025'te bakım moduna geçti**; bakımcısı yeni projeler için önermediğini açıkça belirtti. Sebepleri arasında React Server Components ile uyumsuzluk ve çalışma zamanı stil enjeksiyonunun performans maliyeti sayılıyor. Kütüphane hâlâ çalışıyor ve milyonlarca projede kullanımda — yani mevcut kodun tehlikede değil — ama 2026'da yeni bir proje için varsayılan seçim değil. Yerine önerilenler: CSS Modules, Tailwind veya sıfır-çalışma-zamanlı seçenekler (vanilla-extract, Panda CSS).
- **Nerede karşına çıkar:** Eski React projelerinde çok yaygın; yeni projelerde azalıyor.
- **Örnek kullanım:** "Bu proje styled-components kullanıyor; devam edelim ama yeni bileşenleri CSS Modules'a alalım."
- **İlgili terimler:** Server component (8.10), Tailwind, CSS Modules
- **Kaynaklar:** https://blog.openreplay.com/state-css-in-js-2026/ · https://www.sanity.io/blog/cut-styled-components-into-pieces-this-is-our-last-resort
