# Bölüm 8 — Front-end temelleri (yazmak için değil, konuşmak için)

Bu bölümün amacı sana kod yazdırmak değil. Amaç şu: bir geliştirici "bu bileşen client'a düşüyor, o yüzden bundle büyüyor" dediğinde ne dendiğini anlaman ve "bu bölümü server component yapabilir miyiz?" diye sorabilmen.

Bu yüzden söz dizimi yok. Her terim, **karar verirken işine yarayacağı kadar** anlatılıyor.

Bölüm ikiye ayrılıyor:
- **8.1 – 8.9** eskimeyen kavramlar. HTML, CSS, bileşen mimarisi — bunlar 10 yıl sonra da aynı.
- **8.10 – 8.13** hızlı değişen alan. Rendering stratejileri, build araçları ve performans metrikleri her yıl kayıyor. Bu kısımlarda `[DEĞİŞKEN BİLGİ]` etiketi sık.

---

## 8.1 HTML

Sayfanın iskeleti. Erişilebilirliğin (Bölüm 6) ve SEO'nun (8.13) temelini burası kurar.

### Element / Tag / Attribute

- **Terim (İngilizce):** Element, tag, attribute
- **Türkçesi:** Öğe, etiket, nitelik
- **Tanım:** Element sayfadaki bir parçadır (bir başlık, bir buton). Tag onu işaretleyen kod parçasıdır. Attribute ise elemente eklenen ek bilgidir (bağlantı adresi, alt metin, tip).
- **Ne işe yarar / neden var:** Konuşma birimi bunlar. "Bu elemente `aria-label` niteliği ekle" cümlesinde geçen şey budur.
- **Nerede karşına çıkar:** Her kod incelemesinde ve DevTools'un Elements sekmesinde.
- **Örnek kullanım:** "Bu görsele `loading="lazy"` niteliği eklenmiş mi kontrol edelim."
- **İlgili terimler:** Semantic HTML, DOM (1.4)

### Semantic HTML

Detayı Bölüm 6.3'te. Özet: her öğe için işlevini ifade eden doğru elemanı kullanmak. Erişilebilirliğin, SEO'nun ve bakım kolaylığının ortak temeli. Bir `div` yığını görsel olarak her şeyi yapabilir ama makineler için hiçbir şey ifade etmez.

### Document flow

- **Terim (İngilizce):** Document flow (normal flow)
- **Türkçesi:** Belge akışı
- **Tanım:** Elemanların, hiçbir özel yerleşim kuralı verilmediğinde varsayılan olarak dizilme biçimi — blok elemanlar alt alta, satır içi elemanlar yan yana.
- **Ne işe yarar / neden var:** CSS'in çoğu, bu varsayılan akışı **değiştirmekle** ilgilidir. Akıştan çıkarmak (absolute, fixed) güçlüdür ama responsive davranışı elle yönetmeyi gerektirir — bu yüzden ölçülü kullanılır.
- **Nerede karşına çıkar:** Yerleşim tartışmalarında.
- **Örnek kullanım:** "Bu öğe akıştan çıkarılmış; o yüzden altındaki içerik onun altına kaymıyor, üstüne biniyor."
- **İlgili terimler:** Position (8.2), Flexbox (8.3)

---

## 8.2 CSS

Görünümün tanımlandığı katman. Tasarımcının en çok temas ettiği teknik alan.

### Selector

- **Terim (İngilizce):** Selector
- **Türkçesi:** Seçici
- **Tanım:** Stilin hangi elemanlara uygulanacağını belirten ifade.
- **Ne işe yarar / neden var:** CSS'in tamamı "kime" ve "ne" sorularından oluşur; seçici "kime" kısmıdır.
- **Nerede karşına çıkar:** Her CSS dosyasında ve DevTools'ta bir öğenin stillerine bakarken.
- **Örnek kullanım:** "Bu stil çok geniş bir seçiciyle yazılmış; başka yerleri de etkiliyor."
- **İlgili terimler:** Specificity, Cascade

### Cascade / Specificity / Inheritance

- **Terim (İngilizce):** Cascade, specificity, inheritance, `!important`
- **Türkçesi:** Basamaklama, özgüllük, kalıtım
- **Tanım:** Aynı elemana birden fazla stil uygulandığında hangisinin kazanacağını belirleyen kurallar bütünü. **Specificity** seçicinin ne kadar "özel" olduğunu ölçer; daha özel olan kazanır. **Inheritance** bazı özelliklerin (yazı tipi, renk) çocuk elemanlara otomatik geçmesidir.
- **Ne işe yarar / neden var:** "Neden bu renk değişmiyor?" sorusunun cevabı neredeyse her zaman burasıdır. `!important` bu yarışı zorla kazanır ama bir borçtur: bir kez kullanıldığında, sonraki her düzeltme de `!important` gerektirmeye başlar.
- **Nerede karşına çıkar:** Stil çakışmalarında ve CSS metodolojisi tartışmalarında (8.4).
- **Örnek kullanım:** "Bu kuralı `!important` ile ezmişiz; asıl sorun seçicinin fazla özgül olması."
- **İlgili terimler:** Selector, CSS Modules (8.4), Design token (5.2)

### Box model

- **Terim (İngilizce):** Box model — content, padding, border, margin
- **Türkçesi:** Kutu modeli
- **Tanım:** Her elemanın dört katmandan oluşan yapısı: içerik, iç boşluk (padding), kenarlık (border), dış boşluk (margin).
- **Ne işe yarar / neden var:** Boşluk konuşmasının dilidir ve **padding ile margin farkı tasarımcı için kritiktir**: padding kutunun içinde kalır ve arka plan rengini alır; margin kutunun dışındadır ve almaz. Bir butonun tıklanabilir alanını büyütmek istiyorsan padding kullanırsın (6.6), margin değil.
- **Nerede karşına çıkar:** Her boşluk geri bildiriminde. DevTools'ta seçilen elemanın altında renkli katmanlar hâlinde gösterilir.
- **Örnek kullanım:** "Kart içindeki boşluk padding olsun, kartlar arasındaki margin veya gap."
- **İlgili terimler:** Spacing scale (5.5), Gap (8.3)

### Display

- **Terim (İngilizce):** `display` — block, inline, inline-block, flex, grid, none
- **Türkçesi:** Görüntüleme türü
- **Tanım:** Bir elemanın nasıl davranacağını ve çocuklarını nasıl dizeceğini belirleyen temel özellik.
- **Ne işe yarar / neden var:** Yerleşimin ilk kararı. `display: none` öğeyi tamamen kaldırır — **ekran okuyucudan da gizler** (6.4). Sadece görsel olarak gizlemek gerekiyorsa farklı bir teknik gerekir; bu ayrım erişilebilirlikte önemlidir.
- **Nerede karşına çıkar:** Her yerleşimde ve "mobilde bunu gizleyelim" taleplerinde.
- **Örnek kullanım:** "Mobilde `display: none` ile gizlersek ekran okuyucu da göremez; bu bilgi gizli kalmasın."
- **İlgili terimler:** Flexbox (8.3), Grid (8.3), a11y (6.4)

### Position

- **Terim (İngilizce):** `position` — static, relative, absolute, fixed, sticky
- **Türkçesi:** Konumlandırma
- **Tanım:** Bir elemanın belge akışına göre nasıl yerleştirileceği. **sticky** özellikle önemlidir: eleman normal akışta durur, belirli bir kaydırma noktasında yapışır.
- **Ne işe yarar / neden var:** Sticky header (7.2), sticky CTA (7.7), sabit tablo başlıkları hep bu özellikle kurulur.
- **Nerede karşına çıkar:** Katman ve yapışkan öğe tartışmalarında.
- **Örnek kullanım:** "Tablo başlığını sticky yapalım; kaydırırken üstte kalsın."
- **İlgili terimler:** z-index (5.6), Sticky header (7.2), Document flow (8.1)

### Overflow

- **Terim (İngilizce):** `overflow` — visible, hidden, scroll, auto
- **Türkçesi:** Taşma davranışı
- **Tanım:** İçerik kutusuna sığmadığında ne olacağı.
- **Ne işe yarar / neden var:** Tasarımcıyı doğrudan ilgilendirir: uzun bir kullanıcı adı kartı taşırsa ne olacak? Kırpılacak mı (hidden), üç nokta mı konacak (ellipsis), kaydırılabilir mi olacak? **Bu karar tasarımda verilmezse geliştirici tahmin eder.**
- **Nerede karşına çıkar:** Edge case tartışmalarında (4.4) ve tablo tasarımında.
- **Örnek kullanım:** "Uzun başlıklar iki satırda kesilsin ve sonuna üç nokta gelsin; tooltip'te tamamı görünsün."
- **İlgili terimler:** Edge case (4.4), Text overflow, Table (7.10)

### CSS custom property

- **Terim (İngilizce):** CSS custom property (CSS variable)
- **Türkçesi:** CSS değişkeni
- **Tanım:** Bir değeri isimle saklayıp her yerde kullanmayı sağlayan CSS özelliği.
- **Ne işe yarar / neden var:** **Design token'ların koddaki karşılığıdır** (5.2). Tema değiştirmenin en yaygın yolu budur: bir üst seviyede değişkenlerin değerini değiştirirsin, tüm alt bileşenler otomatik güncellenir.
- **Nerede karşına çıkar:** Tema, dark mode ve tasarım sistemi uygulamalarında.
- **Örnek kullanım:** "Renkleri CSS değişkeni olarak tanımlayalım; dark mode'da sadece değerleri değiştireceğiz."
- **İlgili terimler:** Design token (5.2), Theming (5.2)

---

## 8.3 Layout

Öğelerin sayfada nasıl dizildiği. İkisini ayırt etmek, tasarım tesliminde niyetini net anlatmanı sağlar.

### Flexbox

- **Terim (İngilizce):** Flexbox (flexible box layout)
- **Türkçesi:** Esnek kutu yerleşimi
- **Tanım:** Öğeleri **tek bir eksende** (yatay veya dikey) dizen yerleşim sistemi.
- **Ne işe yarar / neden var:** Tek sıra veya tek sütun hâlindeki her şey için doğal seçim: buton grupları, navigasyon çubuğu, kart içi öğe dizilimi, form satırları. **Figma'daki auto layout ile kavramsal olarak aynı şeydir** (5.10) — bu yüzden auto layout ile çalışmak, geliştiricinin göreceği yapıya yakın tasarım üretir.
- **Nerede karşına çıkar:** Neredeyse her bileşende.
- **Örnek kullanım:** "Header'ı flex yapalım: logo solda, menü sağda, aralarında boşluk otomatik dağılsın."
- **Karıştırılanlar:** Flexbox tek eksenlidir. İki eksende (satır ve sütun) aynı anda hizalama gerekiyorsa Grid daha uygundur.
- **İlgili terimler:** Grid, Auto layout (5.10), Gap

### CSS Grid

- **Terim (İngilizce):** CSS Grid
- **Türkçesi:** CSS ızgara
- **Tanım:** Öğeleri **iki eksende** (satır ve sütun) aynı anda dizen yerleşim sistemi.
- **Ne işe yarar / neden var:** Sayfa düzeni, kart ızgaraları ve bento grid (7.5) gibi iki boyutlu yerleşimlerin doğru aracı. Bir öğenin kaç sütun ve kaç satır kaplayacağı doğrudan tanımlanabilir — bento grid tam olarak bununla kurulur.
- **Nerede karşına çıkar:** Sayfa ve bölüm düzenlerinde.
- **Örnek kullanım:** "Bento grid'i CSS Grid ile kuralım; ana kart iki sütun iki satır kaplasın."
- **Karıştırılanlar:** *CSS Grid* (kod tekniği) ≠ *layout grid* (5.5, tasarım ızgarası). İkincisi bir tasarım kararı, birincisi onu uygulama aracıdır.
- **İlgili terimler:** Flexbox, Grid (5.5), Bento grid (7.5)

### Gap

- **Terim (İngilizce):** `gap`
- **Türkçesi:** Aralık
- **Tanım:** Flex veya grid içindeki öğeler arasındaki boşluk.
- **Ne işe yarar / neden var:** Margin ile boşluk vermenin eski ve sorunlu yöntemini ortadan kaldırır: gap yalnızca **aralara** boşluk koyar, ilk ve son öğenin dışına koymaz. Tasarımdaki "kartlar arası 24px" ifadesinin doğrudan karşılığı budur.
- **Nerede karşına çıkar:** Her yerleşim tanımında.
- **Örnek kullanım:** "Kartlar arası gap 24, kart içi padding 20 olsun."
- **İlgili terimler:** Spacing scale (5.5), Box model (8.2)

### Aspect ratio

CSS tarafında `aspect-ratio` özelliğiyle bir kutunun en-boy oranı sabitlenir. Tasarım tarafındaki karşılığı 5.7'de. Önemi: görsel yüklenmeden önce yer ayrılmasını sağlar, böylece yerleşim kayması (CLS, 8.12) önlenir.

---

## 8.4 CSS yaklaşımları

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

---

## 8.5 JavaScript kavramları

Kod yazmayacaksın ama bu kelimeler her teknik konuşmada geçiyor.

### Event / Event listener

- **Terim (İngilizce):** Event, event listener, event handler
- **Türkçesi:** Olay, olay dinleyici
- **Tanım:** Kullanıcının yaptığı bir şey (tıklama, tuşa basma, kaydırma) bir "olay"dır; onu bekleyip tepki veren koda "dinleyici" denir.
- **Ne işe yarar / neden var:** Arayüzün etkileşimli olmasını sağlayan mekanizma. Tasarımcıyı ilgilendiren yanı: hangi olayın dinlendiği erişilebilirliği belirler. Sadece `click` dinlemek fareyle sınırlı kalır; klavye olayları da gerekir (6.5) — doğru HTML elemanı kullanıldığında bu otomatik gelir (6.3).
- **Nerede karşına çıkar:** Etkileşim tanımlarında.
- **Örnek kullanım:** "Bu `div`'e sadece tıklama olayı bağlanmış; klavyeyle çalışmıyor."
- **İlgili terimler:** Semantic HTML (6.3), Keyboard accessibility (6.5)

### Promise / async-await

- **Terim (İngilizce):** Promise, `async`/`await`, asynchronous
- **Türkçesi:** Söz, eş zamansız işlem
- **Tanım:** Sonucu hemen gelmeyen işlemleri (sunucudan veri çekmek gibi) yönetme biçimi. "Promise" = "sonuç birazdan gelecek" sözü.
- **Ne işe yarar / neden var:** Tarayıcı, veri beklerken donmaz — kullanıcı arayüzü çalışmaya devam eder. **Tasarımcı için anlamı:** her eş zamansız işlemin bir bekleme hâli ve bir hata hâli vardır ve ikisi de tasarlanmalıdır (7.9).
- **Nerede karşına çıkar:** Veri çeken her ekranda.
- **Örnek kullanım:** "Bu istek asenkron; yükleniyor ve hata durumlarını da tasarlayalım."
- **İlgili terimler:** Fetch, Loading state (7.9), Optimistic UI (7.9)

### Fetch / JSON

- **Terim (İngilizce):** `fetch`, JSON (JavaScript Object Notation)
- **Türkçesi:** Veri çekme, JSON veri formatı
- **Tanım:** `fetch` tarayıcının sunucudan veri istemesini sağlayan işlevdir. JSON, veri alışverişinin standart metin formatıdır.
- **Ne işe yarar / neden var:** API'lerle konuşmanın standart yolu (10.4). JSON'ın yapısını okuyabilmek işine yarar: hangi alanların geldiğini görürsün ve tasarımda o alanlara göre karar verirsin.
- **Nerede karşına çıkar:** DevTools'un Network sekmesinde, bir isteğin yanıtına baktığında.
- **Örnek kullanım:** "Response'a baktım; `avatarUrl` alanı boş dönebiliyor, fallback tasarlayalım."
- **İlgili terimler:** API (10.4), Payload (1.3), Avatar (7.13)

---

## 8.6 TypeScript

### TypeScript

- **Terim (İngilizce):** TypeScript — TS
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** JavaScript'in, değerlerin türünü (metin mi, sayı mı, hangi yapıda nesne mi) önceden tanımlamayı sağlayan sürümü.
- **Ne işe yarar / neden var:** Hataları çalışma zamanında değil **yazarken** yakalar: yanlış alan adı, eksik alan, beklenmeyen `null`. Büyük projelerde bakım maliyetini belirgin biçimde düşürür.
- **Nerede karşına çıkar:** Modern web projelerinin çoğunda varsayılan. `[DEĞİŞKEN BİLGİ]` Ekosistem hızlı hareket ediyor; dil özellikleri ve araç desteği değişiyor.
- **Örnek kullanım:** "Stack TypeScript olsun; API yanıtlarının tiplerini tanımlarsak alan adı hataları derlemede yakalanır."
- **Karıştırılanlar:** TypeScript tarayıcıda çalışmaz; derlenerek JavaScript'e çevrilir (8.11, transpiler). Ayrıca tip güvenliği **çalışma zamanında** garanti değildir: sunucudan beklenmedik veri gelirse tip tanımı onu durdurmaz — bunun için ayrıca doğrulama gerekir (9.9, Zod).
- **İlgili terimler:** Type safety, Transpiler (8.11), Zod (9.9)

### Type / Interface

- **Terim (İngilizce):** Type, interface, type safety
- **Türkçesi:** Tip, arayüz tanımı, tip güvenliği
- **Tanım:** Bir verinin hangi alanlardan oluştuğunu tanımlayan yapı.
- **Ne işe yarar / neden var:** **Tasarımcı için değeri şudur:** tip tanımı, bir nesnenin hangi bilgilere sahip olduğunun listesidir. Bir kart tasarlarken "bu alanda ne var, boş olabilir mi?" sorusunun cevabı tip tanımında yazar.
- **Nerede karşına çıkar:** Kod incelemelerinde ve API sözleşmesi konuşmalarında (10.4).
- **Örnek kullanım:** "Tipe baktım: `description` opsiyonel. Boş olduğunda kartın nasıl görüneceğini de tasarlayalım."
- **İlgili terimler:** TypeScript, Contract (10.4), Edge case (4.4)

---

## 8.7 Component mimarisi

Modern front-end'in temel fikri: arayüzü yeniden kullanılabilir parçalara bölmek. Tasarım sistemiyle (Bölüm 5) birebir örtüşür.

### Component

- **Terim (İngilizce):** Component
- **Türkçesi:** Bileşen
- **Tanım:** Kendi görünümü ve davranışı olan, yeniden kullanılabilir arayüz parçası.
- **Ne işe yarar / neden var:** Tekrarı ortadan kaldırır ve tutarlılık üretir. **Figma'daki component ile kavramsal olarak aynıdır** (5.10); iyi ekiplerde ikisinin adları ve sınırları da eşleşir.
- **Nerede karşına çıkar:** Her modern front-end projesinde.
- **Örnek kullanım:** "Bu kart üç yerde tekrar ediyor; tek bir bileşene çıkaralım."
- **İlgili terimler:** Props, Component library (5.1), Design system (5.1)

### Props

- **Terim (İngilizce):** Props (properties)
- **Türkçesi:** Özellikler
- **Tanım:** Bir bileşene dışarıdan verilen, davranışını ve içeriğini belirleyen değerler.
- **Ne işe yarar / neden var:** Aynı bileşenin farklı hâllerde kullanılmasını sağlar: bir buton `variant="primary"` veya `variant="ghost"` alabilir. **Figma'daki component property'nin doğrudan karşılığıdır** (5.10) — bu eşleşme, handoff'ta ortak dil kurar.
- **Nerede karşına çıkar:** Bileşen tanımlarında ve handoff'ta.
- **Örnek kullanım:** "Butonun prop'ları: variant, size, icon, disabled, loading. Figma'daki property'lerle aynı isimlerde olsun."
- **İlgili terimler:** Component, Variant (5.10), Handoff (2.10)

### State

- **Terim (İngilizce):** State
- **Türkçesi:** Durum
- **Tanım:** Bileşenin zaman içinde değişen kendi verisi: menü açık mı, form gönderiliyor mu, hangi sekme seçili.
- **Ne işe yarar / neden var:** Props dışarıdan gelir ve değişmez; state içeride yaşar ve değişir. Arayüzün "canlı" olmasını sağlayan şey budur.
- **Nerede karşına çıkar:** Etkileşim tasarımında. Tasarımcı olarak her state'in görsel karşılığını tanımlaman gerekir.
- **Örnek kullanım:** "Butonun üç state'i var: normal, loading, disabled. Üçünü de teslimde verdim."
- **Karıştırılanlar:** *State* (bileşenin verisi) ≠ *durum ekranları* (7.9). İlişkilidirler: state değiştiğinde farklı bir ekran gösterilir.
- **İlgili terimler:** Props, State yönetimi (9.7), Durum ekranları (7.9)

### Children / Composition

- **Terim (İngilizce):** Children, composition
- **Türkçesi:** Çocuk öğeler, kompozisyon
- **Tanım:** Bir bileşenin içine başka bileşenlerin yerleştirilebilmesi.
- **Ne işe yarar / neden var:** Esneklik üretir. Bir kart bileşeni, içine ne konacağını bilmek zorunda kalmaz — dışarıdan verilir. Bu, her varyasyon için ayrı bileşen yazmayı önler.
- **Nerede karşına çıkar:** Bileşen kütüphanesi tasarımında.
- **Örnek kullanım:** "Modal bileşeni sadece çerçeveyi versin, içeriği children olarak gelsin."
- **İlgili terimler:** Component, Atomic Design (5.1)

### Prop drilling

- **Terim (İngilizce):** Prop drilling
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir verinin, ihtiyaç duyulan derin bileşene ulaşması için aradaki tüm bileşenlerden tek tek geçirilmesi.
- **Ne işe yarar / neden var:** Bir sorun işaretidir. Aradaki bileşenler o veriyle ilgilenmez ama taşımak zorunda kalır; kod kırılganlaşır. Çözümü genelde context veya bir state yönetimi kütüphanesidir (9.7).
- **Nerede karşına çıkar:** Kod incelemelerinde ve refactor tartışmalarında.
- **Örnek kullanım:** "Tema bilgisi beş seviye prop drilling ile gidiyor; context'e alalım."
- **İlgili terimler:** State yönetimi (9.7), Props

### Controlled / Uncontrolled

- **Terim (İngilizce):** Controlled component, uncontrolled component
- **Türkçesi:** Kontrollü / kontrolsüz bileşen
- **Tanım:** Bir form alanının değerini kimin tuttuğuyla ilgili ayrım: kod tutuyorsa kontrollü, tarayıcı kendisi tutuyorsa kontrolsüz.
- **Ne işe yarar / neden var:** Kontrollü bileşen, her tuşa basıldığında değeri kodda gördüğü için anlık doğrulama ve dinamik davranış sağlar; ama daha çok yeniden çizim üretir. Kontrolsüz olan daha basit ve hızlıdır.
- **Nerede karşına çıkar:** Form kütüphanesi tartışmalarında (9.9).
- **Örnek kullanım:** "Form uzun; kontrolsüz yaklaşımla yazalım, her tuşta tüm form yeniden çizilmesin."
- **İlgili terimler:** Form validation (7.11), React Hook Form (9.9)

---

## 8.8 Hook, side effect, re-render

Bu üçü React konuşmalarında sürekli geçer. **Seviye 2** terimlerdir: duyduğunda anlaman yeter.

### Hook

- **Terim (İngilizce):** Hook
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir bileşene state, yan etki veya başka yetenekler kazandıran özel işlevler. Adları `use` ile başlar (`useState`, `useEffect`).
- **Ne işe yarar / neden var:** React'in temel yapı taşları. Ekipler ayrıca **custom hook** yazar: tekrar eden mantığı (veri çekme, form yönetimi, medya sorgusu) tek yere toplarlar.
- **Nerede karşına çıkar:** Her React konuşmasında.
- **Örnek kullanım:** "Bu mantık üç bileşende tekrar ediyor; custom hook'a alalım."
- **İlgili terimler:** State, Side effect, Component

### Side effect

- **Terim (İngilizce):** Side effect
- **Türkçesi:** Yan etki
- **Tanım:** Bileşenin, ekrana çizmek dışında yaptığı işler: veri çekmek, zamanlayıcı kurmak, tarayıcı olayını dinlemek.
- **Ne işe yarar / neden var:** Bu işlerin ne zaman ve kaç kez çalışacağı yönetilmezse hata çıkar — çift istek, sızıntı, sonsuz döngü. Sık görülen hata kaynaklarından biri.
- **Nerede karşına çıkar:** Hata ayıklamada.
- **Örnek kullanım:** "Sayfa açılışında istek iki kez gidiyor; side effect bağımlılıkları yanlış tanımlanmış olabilir."
- **İlgili terimler:** Hook, Promise (8.5)

### Re-render

- **Terim (İngilizce):** Re-render
- **Türkçesi:** Yeniden çizim
- **Tanım:** State veya props değiştiğinde bileşenin kendini yeniden hesaplaması.
- **Ne işe yarar / neden var:** Normal ve gerekli bir davranıştır. Ama gereksiz yeniden çizimler, özellikle uzun listelerde, arayüzü yavaşlatır ve doğrudan **INP** metriğini etkiler (8.12).
- **Nerede karşına çıkar:** Performans tartışmalarında.
- **Örnek kullanım:** "Liste her tuş vuruşunda yeniden çiziliyor; arama girdisi takılıyor."
- **İlgili terimler:** State, INP (8.12), Virtualization

---

## 8.9 Routing

Hangi adresin hangi ekranı gösterdiği. Bilgi mimarisinin (4.3) koddaki karşılığı.

### Route

- **Terim (İngilizce):** Route, routing, router
- **Türkçesi:** Yol, yönlendirme
- **Tanım:** Bir URL ile gösterilecek ekran arasındaki eşleşme.
- **Ne işe yarar / neden var:** Sitenin yapısını belirler. Tasarımcının burada bir sorumluluğu var: **hangi ekranın kendi URL'i olacağına karar vermek** (1.2). Modal içinde açılan bir içeriğin URL'i yoksa paylaşılamaz, yer imine eklenemez, arama motoru bulamaz.
- **Nerede karşına çıkar:** Sitemap ve IA çalışmasında; proje kurulumunda.
- **Örnek kullanım:** "Ürün detayı modal'da açılsın ama kendi URL'i de olsun; paylaşılabilir kalsın."
- **İlgili terimler:** URL (1.2), IA (4.3), SPA (1.7)

### Dynamic route / Nested route

- **Terim (İngilizce):** Dynamic route, nested route, route parameter
- **Türkçesi:** Dinamik yol, iç içe yol
- **Tanım:** Dinamik yol, adresin bir kısmının değişken olduğu yapıdır (`/urunler/[slug]`). İç içe yol, bir bölümün altındaki alt sayfalardır ve genelde ortak bir layout paylaşır (7.1).
- **Ne işe yarar / neden var:** Binlerce ürün için binlerce sayfa tanımlamak yerine tek bir şablon yazılır. İç içe yollar da header/sidebar'ın her sayfada yeniden çizilmemesini sağlar.
- **Nerede karşına çıkar:** Proje yapısında ve URL kurgusunda.
- **Örnek kullanım:** "Ayarlar altındaki tüm sayfalar aynı layout'u paylaşsın; sadece sağdaki içerik değişsin."
- **İlgili terimler:** Layout (7.1), Slug (1.2), Route

### Query param / Redirect

- **Terim (İngilizce):** Query parameter, redirect
- **Türkçesi:** Sorgu parametresi, yönlendirme
- **Tanım:** Query param, URL'e eklenen ek bilgi (`?filtre=kirmizi`). Redirect, bir adresin otomatik olarak başka bir adrese gönderilmesi.
- **Ne işe yarar / neden var:** Query param, **filtre ve sıralama durumunu paylaşılabilir kılar** (7.10). Redirect ise site yeniden yapılandırıldığında eski bağlantıların kırılmamasını sağlar — SEO için kritiktir (8.13).
- **Nerede karşına çıkar:** Filtre tasarımında ve site yenileme projelerinde.
- **Örnek kullanım:** "Yeni yapıya geçerken eski URL'lerden kalıcı redirect verelim; sıralamayı kaybetmeyelim."
- **İlgili terimler:** URL (1.2), Filter (7.10), SEO (8.13)

---

## 8.10 Rendering stratejileri

HTML'in **nerede ve ne zaman** üretildiğine dair kararlar. Bu, bir web projesinin en önemli teknik kararlarından biridir ve doğrudan hız, SEO ve maliyeti etkiler.

Basit çerçeve: HTML üç yerde üretilebilir — **derleme anında** (build), **istek anında sunucuda** (request), veya **tarayıcıda** (client). Aşağıdaki stratejiler bu üçünün farklı birleşimleridir.

### CSR

- **Terim (İngilizce):** CSR — Client-Side Rendering
- **Türkçesi:** İstemci tarafı işleme
- **Tanım:** Sunucu neredeyse boş bir HTML gönderir; içeriği tarayıcıda JavaScript üretir.
- **Ne işe yarar / neden var:** Basit ve ucuzdur; sunucu tarafı gerektirmez. Panel gibi giriş yapılan, SEO gerektirmeyen uygulamalar için uygundur. Bedeli: ilk açılışta boş ekran süresi ve JavaScript çalışmadan içerik olmaması.
- **Nerede karşına çıkar:** Klasik React uygulamalarında (SPA, 1.7).
- **Örnek kullanım:** "İç panel CSR kalsın; SEO gerekmiyor, sunucu maliyeti de olmasın."
- **Karıştırılanlar:** SEO ve ilk yükleme hızı açısından en zayıf seçenektir. Pazarlama sayfaları için genelde uygun değildir.
- **İlgili terimler:** SPA (1.7), SSR, Hydration

### SSR

- **Terim (İngilizce):** SSR — Server-Side Rendering
- **Türkçesi:** Sunucu tarafı işleme
- **Tanım:** HTML her istekte sunucuda üretilip gönderilir.
- **Ne işe yarar / neden var:** İçerik ilk yanıtta hazır gelir; arama motorları ve paylaşım önizlemeleri sorunsuz çalışır. Kişiye özel ve anlık değişen içerik için gereklidir.
- **Nerede karşına çıkar:** E-ticaret ürün sayfaları, kullanıcıya özel içerik.
- **Örnek kullanım:** "Stok bilgisi anlık; bu sayfa SSR olmalı."
- **Karıştırılanlar:** Her istekte hesaplama yapıldığı için sunucu maliyeti ve TTFB (8.12) statik seçeneklerden yüksektir.
- **İlgili terimler:** CSR, SSG, TTFB (8.12), Dynamic site (1.5)

### SSG

- **Terim (İngilizce):** SSG — Static Site Generation
- **Türkçesi:** Statik site üretimi
- **Tanım:** HTML derleme anında bir kez üretilir; her kullanıcıya aynı hazır dosya servis edilir.
- **Ne işe yarar / neden var:** **En hızlı ve en ucuz seçenek.** Dosya CDN'den servis edilir, sunucu hesaplama yapmaz, trafik artınca çökmez. Blog, dokümantasyon ve pazarlama sayfaları için doğal tercih.
- **Nerede karşına çıkar:** İçerik sitelerinde.
- **Örnek kullanım:** "Blog SSG olsun; içerik günde bir güncelleniyor, her istekte yeniden üretmeye gerek yok."
- **Karıştırılanlar:** İçerik değiştiğinde yeniden derleme gerekir. Binlerce sayfası olan sitelerde derleme süresi sorun olabilir.
- **İlgili terimler:** Static site (1.5), ISR, CDN (10.11)

### ISR

- **Terim (İngilizce):** ISR — Incremental Static Regeneration
- **Türkçesi:** Kademeli statik yeniden üretim
- **Tanım:** Statik sayfaların, belirli aralıklarla veya bir tetikleyiciyle arka planda yeniden üretilmesi.
- **Ne işe yarar / neden var:** SSG'nin hızıyla, SSR'ın tazeliğini birleştirmeye çalışır. Kullanıcı her zaman hazır bir sayfa görür; içerik arka planda güncellenir.
- **Nerede karşına çıkar:** Büyük içerik ve e-ticaret sitelerinde.
- **Örnek kullanım:** "Ürün sayfaları ISR olsun, 5 dakikada bir tazelensin; fiyat değişimi çok sık değil."
- **İlgili terimler:** SSG, SSR, Cache invalidation (10.11)

### Hydration

- **Terim (İngilizce):** Hydration
- **Türkçesi:** Yaygın Türkçe karşılığı yok ("canlandırma" denir)
- **Tanım:** Sunucudan gelen hazır HTML'in, tarayıcıda JavaScript ile etkileşimli hâle getirilmesi.
- **Ne işe yarar / neden var:** SSR ve SSG'nin eksik parçası: gelen HTML görünür ama tıklanabilir değildir; hydration onu canlandırır. **Bu ara dönem gerçek bir sorundur:** kullanıcı butonu görür, basar, hiçbir şey olmaz. Ne kadar çok JavaScript varsa bu süre o kadar uzar — ve doğrudan INP'yi (8.12) etkiler.
- **Nerede karşına çıkar:** Performans tartışmalarında.
- **Örnek kullanım:** "Sayfa hızlı görünüyor ama hydration bitmeden butonlar çalışmıyor; client JavaScript'i azaltmamız lazım."
- **İlgili terimler:** SSR, Partial hydration, INP (8.12)

### Islands / Partial hydration

- **Terim (İngilizce):** Islands architecture, partial hydration
- **Türkçesi:** Ada mimarisi, kısmi canlandırma
- **Tanım:** Sayfanın tamamını değil, yalnızca gerçekten etkileşimli olan parçalarını canlandırma yaklaşımı.
- **Ne işe yarar / neden var:** Bir blog sayfasında metnin JavaScript'e ihtiyacı yoktur; sadece arama kutusu ve menü vardır. Bu yaklaşım sadece onları canlandırır ve gönderilen JavaScript miktarını ciddi biçimde düşürür. Astro'nun (9.3) temel fikri budur.
- **Nerede karşına çıkar:** İçerik ağırlıklı sitelerde.
- **Örnek kullanım:** "İçerik sitesi için Astro düşünelim; sadece etkileşimli adalar JavaScript alsın."
- **İlgili terimler:** Hydration, Astro (9.3), Server component

### Server component

- **Terim (İngilizce):** RSC — React Server Components
- **Türkçesi:** Sunucu bileşenleri
- **Tanım:** Yalnızca sunucuda çalışan ve tarayıcıya **hiç JavaScript göndermeyen** bileşenler. Etkileşim gerektiren bileşenler ayrıca "client component" olarak işaretlenir.
- **Ne işe yarar / neden var:** Gönderilen JavaScript miktarını azaltır ve veri çekmeyi bileşenin içine taşır. Next.js App Router'da varsayılan davranıştır: bir bileşen aksi belirtilmedikçe server component'tir.
- **Nerede karşına çıkar:** Modern Next.js projelerinde.
- **Örnek kullanım:** "Bu bölüm statik metin; client component yapmaya gerek yok, server'da kalsın."
- `[DEĞİŞKEN BİLGİ]` **Durum (2026):** RSC, Next.js App Router'da varsayılan hâle geldi ve önemli bundle kazançları raporlanıyor. Ama yaygınlık iddialarında dikkatli ol: bir 2026 anketine göre ekiplerin çoğu hâlâ SPA (%84) ve SSR (%61) kullanıyor; islands (%14) ve streaming SSR (%18) gibi yeni yaklaşımlar henüz ana akım değil. Ayrıca App Router'ın **önbellek modeli** ekiplerin en sık şikâyet ettiği karmaşıklık kaynağı olarak anılıyor.
- **Karıştırılanlar:** *Server component* ≠ *SSR*. SSR bir sayfayı sunucuda HTML'e çevirir ama o bileşenin JavaScript'i yine tarayıcıya gider. Server component'in JavaScript'i **hiç** gitmez.
- **İlgili terimler:** SSR, Hydration, Next.js (9.3)
- **Kaynaklar:** https://www.telerik.com/blogs/whats-next-react-2026 · https://www.pkgpulse.com/guides/state-of-server-components-2026

### Streaming / Suspense / PPR

- **Terim (İngilizce):** Streaming SSR, Suspense, PPR (Partial Prerendering)
- **Türkçesi:** Akışlı işleme, kısmi ön üretim
- **Tanım:** Sayfanın tamamının hazır olmasını beklemeden, hazır olan parçaların sırayla gönderilmesi. **PPR** bunun bir adım ötesidir: sayfanın statik iskeleti anında gönderilir, dinamik "delikler" akış hâlinde doldurulur.
- **Ne işe yarar / neden var:** Algılanan hızı ciddi biçimde artırır: kullanıcı yavaş bir veri kaynağını beklerken sayfanın geri kalanını görür. **Tasarımcıyı doğrudan ilgilendirir** — hangi bölümün önce geleceğine ve bekleyen bölümde ne görüneceğine (skeleton, 7.9) karar vermek bir tasarım kararıdır.
- **Nerede karşına çıkar:** Modern Next.js projelerinde.
- **Örnek kullanım:** "Ürün bilgisi statik gelsin, yorumlar ve öneriler akışla sonra gelsin; bekleyen alanlara skeleton koyalım."
- `[DEĞİŞKEN BİLGİ]` PPR, Next.js 15'te deneysel bir özellik olarak belgelenmişti ve üretim için önerilmiyordu; sonraki sürümlerde durumu değişmiş olabilir. Kullanmadan önce güncel dokümanı kontrol et.
- **İlgili terimler:** Server component, Skeleton (7.9), LCP (8.12)

---

## 8.11 Build zinciri

Yazılan kodun, tarayıcının çalıştırabileceği dosyalara dönüşme süreci. Seviye 2 terimler — duyduğunda anlaman yeter.

### Package manager / Dependency

- **Terim (İngilizce):** Package manager (npm, pnpm, yarn, bun), dependency, `package.json`, lockfile
- **Türkçesi:** Paket yöneticisi, bağımlılık
- **Tanım:** Projenin kullandığı dış kütüphaneleri indiren ve sürümlerini yöneten araç. `package.json` hangi paketlerin kullanıldığını, lockfile ise tam olarak hangi sürümlerin kurulduğunu kaydeder.
- **Ne işe yarar / neden var:** Lockfile, "bende çalışıyor" probleminin (1.8) büyük kısmını çözer: herkesin bilgisayarında ve sunucuda birebir aynı sürümler kurulur.
- **Nerede karşına çıkar:** Her projede.
- **Örnek kullanım:** "Lockfile'ı da commit edelim; sürüm farkından kaynaklanan hataları önler."
- **Karıştırılanlar:** *Dependency* burada "dış kütüphane" anlamındadır; proje yönetimindeki *dependency* (3.5) farklı bir şeydir.
- **İlgili terimler:** Semantic versioning (15.8), Supply chain (13.x)

### Bundler / Transpiler

- **Terim (İngilizce):** Bundler (Vite, webpack, Turbopack, esbuild, Rollup), transpiler (Babel, SWC)
- **Türkçesi:** Paketleyici, dönüştürücü
- **Tanım:** Bundler onlarca kaynak dosyayı tarayıcının verimli yükleyebileceği birkaç dosyada birleştirir. Transpiler ise modern veya TypeScript kodunu tarayıcıların anlayacağı JavaScript'e çevirir.
- **Ne işe yarar / neden var:** Geliştiricinin düzenli dosyalarla çalışmasını ve tarayıcının optimize edilmiş dosyalar almasını aynı anda mümkün kılar. `[DEĞİŞKEN BİLGİ]` Bu alandaki araçlar hızla değişiyor; hangi aracın yaygın olduğu her yıl kayabiliyor.
- **Nerede karşına çıkar:** Proje kurulumu ve build süresi tartışmalarında.
- **Örnek kullanım:** "Build 4 dakika sürüyor; bundler'ı değiştirmeyi değerlendirelim."
- **İlgili terimler:** Build (16.2), TypeScript (8.6)

### Tree-shaking / Code splitting / Lazy loading

- **Terim (İngilizce):** Tree-shaking, code splitting, lazy loading, dynamic import
- **Türkçesi:** Ölü kod ayıklama, kod bölme, tembel yükleme
- **Tanım:** **Tree-shaking** kullanılmayan kodu çıkarır. **Code splitting** tüm kodu tek dosyada göndermek yerine sayfa bazında böler. **Lazy loading** bir parçayı ancak gerekli olduğunda yükler.
- **Ne işe yarar / neden var:** Üçü de aynı hedefe hizmet eder: **kullanıcıya o an gerekmeyen kodu göndermemek.** Ana sayfaya giren birinin, ayarlar ekranının kodunu indirmesi gereksizdir. Tasarım tarafındaki karşılığı: ağır bir bileşen (grafik kütüphanesi, harita, video oynatıcı) ancak görünür olduğunda yüklenebilir.
- **Nerede karşına çıkar:** Performans optimizasyonunda.
- **Örnek kullanım:** "Harita bileşenini lazy load edelim; sayfanın altında ve çoğu kullanıcı oraya inmiyor."
- **İlgili terimler:** Bundle size (8.12), LCP (8.12), Skeleton (7.9)

### Source map

- **Terim (İngilizce):** Source map
- **Türkçesi:** Kaynak haritası
- **Tanım:** Sıkıştırılmış üretim kodunu, okunabilir orijinal koda geri eşleyen dosya.
- **Ne işe yarar / neden var:** Canlıda bir hata oluştuğunda hangi satırdan geldiğini görmeyi sağlar. Hata izleme araçları (16.11) buna dayanır.
- **Nerede karşına çıkar:** Hata ayıklamada ve Sentry kurulumunda.
- **Örnek kullanım:** "Source map'leri Sentry'ye yükleyelim; yoksa hata raporları okunamaz oluyor."
- **İlgili terimler:** Error tracking (16.11), Minify

---

## 8.12 Performans

Hızın ölçüldüğü metrikler. Bu bölüm **tasarım kararlarını doğrudan bağlar**: hero görselinin boyutu, kaç font ağırlığı yüklendiği ve animasyonların ağırlığı buradaki sayılara yansır.

### Core Web Vitals

- **Terim (İngilizce):** Core Web Vitals — CWV
- **Türkçesi:** Temel web yaşamsal ölçütleri
- **Tanım:** Google'ın gerçek kullanıcı deneyimini ölçtüğü üç metrik: **LCP** (yüklenme), **INP** (tepki verme), **CLS** (görsel kararlılık).
- **Ne işe yarar / neden var:** Hızı öznel olmaktan çıkarır ve arama sıralamasında bir sinyal olarak kullanılır. Kritik nokta: bunlar **laboratuvar değil saha verisidir** — gerçek kullanıcıların Chrome üzerinden toplanan verisi (CrUX) kullanılır ve **75. yüzdelik** dilim üzerinden değerlendirilir, 28 günlük kayan bir pencerede. Yani Lighthouse'ta aldığın 100 puan, gerçek kullanıcıların %25'i yavaş yaşıyorsa seni geçirmez.
- **Nerede karşına çıkar:** Search Console'da, PageSpeed Insights'ta, performans tartışmalarında.
- **Örnek kullanım:** "Lighthouse yeşil ama CrUX verisinde INP kırmızı; laboratuvar değil saha verisine bakalım."
- `[DEĞİŞKEN BİLGİ]` Metrikler ve eşikler değişebilir; nitekim **INP, 12 Mart 2024'te FID'in yerini aldı** — FID'den bahseden kaynaklar eskimiştir. Güncel eşikleri web.dev üzerinden doğrula.
- **İlgili terimler:** LCP, INP, CLS, SEO (8.13)
- **Kaynak:** https://web.dev/articles/defining-core-web-vitals-thresholds

**2026 itibarıyla eşikler:**

| Metrik | Ölçtüğü | İyi | Kötü |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | En büyük görünür öğenin ne zaman çizildiği | ≤ 2,5 sn | > 4 sn |
| **INP** (Interaction to Next Paint) | Etkileşime verilen tepki süresi | ≤ 200 ms | > 500 ms |
| **CLS** (Cumulative Layout Shift) | Beklenmedik yerleşim kayması | ≤ 0,1 | > 0,25 |

### LCP

- **Terim (İngilizce):** LCP — Largest Contentful Paint
- **Türkçesi:** En büyük içerik çizimi
- **Tanım:** Ekrandaki en büyük görünür öğenin (genelde hero görseli veya ana başlık) ne zaman çizildiği.
- **Ne işe yarar / neden var:** "Sayfa açıldı mı?" hissinin ölçüsü. Tasarımcıyı doğrudan ilgilendirir: **hero görseli genelde LCP öğesidir.** Ağır bir hero görseli seçmek, ölçülebilir bir performans maliyetidir.
- **Nerede karşına çıkar:** Performans raporlarında.
- **Örnek kullanım:** "LCP 4,2 saniye; hero görselini WebP'ye çevirip önceliklendirelim."
- **İlgili terimler:** Hero visual (7.3), Image optimization, Preload

### INP

- **Terim (İngilizce):** INP — Interaction to Next Paint
- **Türkçesi:** Etkileşimden sonraki çizime kadar geçen süre
- **Tanım:** Kullanıcı bir şeye tıkladığında, ekranda bir tepki görünene kadar geçen süre. Oturumdaki etkileşimlerin en kötüsüne yakın bir değeri raporlar.
- **Ne işe yarar / neden var:** "Bu site takılıyor" hissinin ölçüsü. FID'in aksine sadece ilk etkileşimi değil, **tüm etkileşimleri** ölçtüğü için geçmesi daha zordur — 2026'da en sık başarısız olunan CWV metriği olarak anılıyor.
- **Nerede karşına çıkar:** Ağır JavaScript kullanan arayüzlerde.
- **Örnek kullanım:** "Filtre değiştirince 600ms takılma var; INP'yi düşürüyor, listeyi sanallaştıralım."
- **İlgili terimler:** Re-render (8.8), Hydration (8.10), Bundle size

### CLS

- **Terim (İngilizce):** CLS — Cumulative Layout Shift
- **Türkçesi:** Kümülatif yerleşim kayması
- **Tanım:** Sayfa yüklenirken içeriğin beklenmedik biçimde kayma miktarı.
- **Ne işe yarar / neden var:** "Tam tıklayacaktım, yer değişti" sorununun ölçüsü. **Bu metriğin çoğu bir tasarım/uygulama disiplini meselesidir:** görsellere ve reklam alanlarına önceden yer ayırmak (aspect-ratio, 5.7), fontları metrik uyumlu yedeklerle yüklemek ve dinamik olarak eklenen bileşenlere (banner, bildirim) yer ayırmak.
- **Nerede karşına çıkar:** Görsel ve font yoğun sayfalarda.
- **Örnek kullanım:** "Duyuru çubuğu sonradan yükleniyor ve her şeyi aşağı itiyor; yerini baştan ayıralım."
- **İlgili terimler:** Layout (1.4), Aspect ratio (5.7), Skeleton (7.9)

### TTFB / FCP

- **Terim (İngilizce):** TTFB — Time To First Byte, FCP — First Contentful Paint
- **Türkçesi:** İlk bayta kadar geçen süre, ilk içerik çizimi
- **Tanım:** TTFB, sunucunun ilk yanıt baytını göndermesine kadar geçen süre. FCP, ekranda ilk herhangi bir içeriğin görünmesi.
- **Ne işe yarar / neden var:** Sorunun **nerede** olduğunu ayırır: TTFB yüksekse sorun sunucuda veya ağdadır (rendering stratejisi, sunucu bölgesi, CDN); TTFB iyi ama LCP kötüyse sorun ön yüzde (görsel, font, JavaScript).
- **Nerede karşına çıkar:** Performans teşhisinde.
- **Örnek kullanım:** "TTFB 1,8 saniye; sorun görsellerimizde değil, sunucu tarafında."
- **İlgili terimler:** LCP, SSR (8.10), CDN (10.11), Latency (1.3)

### Bundle size

- **Terim (İngilizce):** Bundle size, JavaScript payload
- **Türkçesi:** Paket boyutu
- **Tanım:** Tarayıcıya gönderilen JavaScript'in toplam boyutu.
- **Ne işe yarar / neden var:** Hem indirilmesi hem **çalıştırılması** maliyetlidir; ikincisi genelde daha pahalıdır ve orta seviye telefonlarda ciddi fark yaratır. Bir kütüphane eklemenin görünmeyen bedeli budur.
- **Nerede karşına çıkar:** Kütüphane seçimi tartışmalarında (9.12).
- **Örnek kullanım:** "Bu animasyon kütüphanesi bundle'ı 40KB büyütüyor; CSS ile çözebilir miyiz?"
- **İlgili terimler:** Code splitting (8.11), INP, Performance budget

### Image optimization

- **Terim (İngilizce):** Image optimization — format, responsive images, `srcset`, lazy loading
- **Türkçesi:** Görsel optimizasyonu
- **Tanım:** Görsellerin doğru formatta (WebP, AVIF), doğru boyutta ve doğru zamanda yüklenmesi.
- **Ne işe yarar / neden var:** Web sayfalarının ağırlığının büyük kısmı görsellerdir. Üç kural: **modern format** kullan, **cihaza uygun boyutu** gönder (mobile telefona 2000px görsel göndermek israftır), ve **ekran dışındakileri** sonradan yükle. Ama hero görseli lazy load **edilmemelidir** — o LCP öğesidir ve öncelikli yüklenmelidir.
- **Nerede karşına çıkar:** Her görsel ağırlıklı sayfada.
- **Örnek kullanım:** "Hero görselini öncelikli yükleyelim, alttaki galeriyi lazy load edelim."
- **İlgili terimler:** LCP, SVG vs raster (5.7), Aspect ratio (5.7)

### Font loading

- **Terim (İngilizce):** Font loading, FOUT (Flash of Unstyled Text), FOIT (Flash of Invisible Text), `font-display`
- **Türkçesi:** Font yükleme davranışı
- **Tanım:** Özel font yüklenene kadar metnin nasıl davranacağı. **FOIT** metnin görünmez kalmasıdır; **FOUT** yedek fontla gösterilip sonra değişmesidir.
- **Ne işe yarar / neden var:** FOIT kullanıcıyı boş ekrana baktırır — genelde FOUT tercih edilir. Ama yedek fontun metrikleri farklıysa değişim anında metin sıçrar ve CLS'yi bozar; yedek fontu birincil fonta yakın seçmek bunu azaltır (5.3).
- **Nerede karşına çıkar:** Tipografi ve performans kesişiminde.
- **Örnek kullanım:** "Üç font ağırlığı yüklüyoruz ve ikisi kullanılmıyor; kaldıralım."
- **İlgili terimler:** Typeface vs Font (5.3), Font stack (5.3), CLS

### Preload / Prefetch

- **Terim (İngilizce):** Preload, prefetch, preconnect
- **Türkçesi:** Ön yükleme, ön getirme
- **Tanım:** **Preload** = "bunu şimdi ve öncelikli indir" (hero görseli, kritik font). **Prefetch** = "muhtemelen sonra gerekecek, boşta indir" (kullanıcının gitmesi olası bir sonraki sayfa).
- **Ne işe yarar / neden var:** Doğru kullanıldığında algılanan hızı belirgin artırır. Aşırı kullanıldığında ise gereksiz veri indirir ve asıl kritik kaynaklarla yarışır.
- **Nerede karşına çıkar:** Performans optimizasyonunda.
- **Örnek kullanım:** "Hero görselini preload edelim; LCP öğesi ve şu an geç geliyor."
- **İlgili terimler:** LCP, Image optimization, Caching (10.11)

### Performance budget

- **Terim (İngilizce):** Performance budget
- **Türkçesi:** Performans bütçesi
- **Tanım:** Sayfanın aşmaması gereken sınırların önceden belirlenmesi: toplam JavaScript boyutu, görsel ağırlığı, hedef metrik değerleri.
- **Ne işe yarar / neden var:** Performansı bir **kural** hâline getirir. Bütçe olmadan her ekleme tek tek makul görünür ve sayfa zamanla ağırlaşır. CI'a bağlanabilir: bütçe aşılırsa yapı başarısız olur (17.7).
- **Nerede karşına çıkar:** Gereksinimlerde (NFR, 2.6) ve CI kapılarında.
- **Örnek kullanım:** "Bütçemiz: LCP 2,5 sn altı, ilk yükte 150KB JavaScript. Aşarsak CI uyarsın."
- **İlgili terimler:** NFR (2.6), CI gate (17.7), Bundle size

---

## 8.13 SEO temelleri

Arama motorlarının siteni bulup anlamasını sağlayan temeller. Tasarımcıyı ilgilendiren kısmı, çoğu kişinin sandığından büyüktür.

### Title / Meta description

- **Terim (İngilizce):** Title tag, meta description
- **Türkçesi:** Sayfa başlığı, meta açıklama
- **Tanım:** Arama sonuçlarında görünen başlık ve altındaki açıklama metni.
- **Ne işe yarar / neden var:** Arama sonucundaki **tıklanma oranını** doğrudan belirler. İçerik tasarımının (4.9) parçasıdır: her sayfanın kendine özgü, o sayfayı anlatan bir başlığı olmalıdır.
- **Nerede karşına çıkar:** Her sayfada. CMS'te doldurulan alanlardır.
- **Örnek kullanım:** "Tüm ürün sayfalarının başlığı aynı; şablonu ürün adına göre dinamik yapalım."
- **Karıştırılanlar:** Meta description doğrudan bir sıralama faktörü değildir; etkisi tıklanma oranı üzerinden dolaylıdır. Ayrıca arama motoru bazen onu yok sayıp sayfadan kendi özetini üretir.
- **İlgili terimler:** Heading hierarchy (6.3), Open Graph

### Heading yapısı

Detayı Bölüm 6.3'te. SEO açısından da aynı kural geçerlidir: başlıklar içeriğin yapısını yansıtmalı, görsel boyut için seçilmemelidir. Erişilebilirlik ve SEO burada aynı şeyi ister — bu, iki hedefi tek işle karşılamanın tipik bir örneğidir.

### Canonical

- **Terim (İngilizce):** Canonical URL
- **Türkçesi:** Kanonik adres
- **Tanım:** Aynı içeriğe birden fazla adresten ulaşılabiliyorsa, "asıl olan budur" diyen işaret.
- **Ne işe yarar / neden var:** Filtre ve sıralama parametreleri (7.10) yüzünden aynı liste onlarca farklı URL'de görünebilir. Canonical, arama motorunun bunları ayrı sayfalar sanmasını ve değeri bölmesini engeller.
- **Nerede karşına çıkar:** E-ticaret ve filtreli listelerde.
- **Örnek kullanım:** "Filtre parametreli sayfalar canonical olarak ana kategori sayfasını göstersin."
- **İlgili terimler:** Query param (8.9), Filter (7.10)

### robots.txt / sitemap.xml

- **Terim (İngilizce):** `robots.txt`, `sitemap.xml`
- **Türkçesi:** Robot yönergesi, site haritası dosyası
- **Tanım:** `robots.txt` arama motoru botlarına hangi bölümlere girmemelerini söyler. `sitemap.xml` sitedeki sayfaların makine okunur listesidir.
- **Ne işe yarar / neden var:** Botların siteyi verimli taramasını sağlar. Büyük sitelerde sitemap, yeni sayfaların bulunmasını hızlandırır.
- **Nerede karşına çıkar:** Yayın kontrol listesinde (21.4).
- **Örnek kullanım:** "Yayına çıkmadan robots.txt'i kontrol edelim; staging'de her şeyi engelliyorduk."
- **Karıştırılanlar:** *sitemap.xml* (makineler için) ≠ *sitemap* (4.3, tasarım çıktısı). Aynı isim, farklı şey. Ayrıca klasik bir yayın hatası: staging'deki "botları engelle" ayarının canlıya taşınması — site aylarca arama sonuçlarında görünmez.
- **İlgili terimler:** Sitemap (4.3), Launch checklist (21.9)

### Structured data

- **Terim (İngilizce):** Structured data, schema.org, rich results
- **Türkçesi:** Yapılandırılmış veri
- **Tanım:** Sayfadaki içeriğin ne olduğunu makinelere açıkça söyleyen ek işaretleme: bu bir ürün, bu fiyatı, bu puanı; bu bir tarif, bu süresi.
- **Ne işe yarar / neden var:** Arama sonucunda zenginleştirilmiş görünüm (yıldızlar, fiyat, SSS açılımı, breadcrumb) sağlayabilir — bu da tıklanma oranını artırır.
- **Nerede karşına çıkar:** E-ticaret, tarif, etkinlik ve SSS sayfalarında.
- **Örnek kullanım:** "SSS bölümüne structured data ekleyelim; arama sonucunda sorular açılabilir hâle gelsin."
- **Karıştırılanlar:** Zengin sonuç **garanti değildir**; arama motoru gösterip göstermemeye kendisi karar verir.
- **İlgili terimler:** FAQ (7.5), Breadcrumb (7.2)

### Open Graph / Twitter card

- **Terim (İngilizce):** Open Graph (OG tags), Twitter card, OG image
- **Türkçesi:** Paylaşım önizleme etiketleri
- **Tanım:** Bir bağlantı sosyal medyada veya mesajlaşma uygulamasında paylaşıldığında görünecek başlık, açıklama ve görseli belirleyen etiketler.
- **Ne işe yarar / neden var:** **Bu doğrudan bir tasarım işidir.** OG görseli tanımlanmamışsa paylaşım çıplak bir bağlantı olarak görünür ve tıklanma oranı düşer. Şablon bir OG görseli tasarlamak, her sayfa için ayrı görsel üretmeden bunu çözer.
- **Nerede karşına çıkar:** Paylaşılması beklenen her sayfada.
- **Örnek kullanım:** "Blog yazıları için dinamik OG görseli üretelim: arka plan sabit, başlık ve yazar adı değişsin."
- **İlgili terimler:** Title, Aspect ratio (5.7), Social share (7.7)

### Favicon

- **Terim (İngilizce):** Favicon, app icon
- **Türkçesi:** Site simgesi
- **Tanım:** Tarayıcı sekmesinde ve yer imlerinde görünen küçük ikon.
- **Ne işe yarar / neden var:** Küçük ama marka tanınırlığı için etkili. Çok küçük boyutlarda okunabilmesi için genelde logonun sadeleştirilmiş bir sürümü kullanılır — tam logo bu boyutta okunmaz.
- **Nerede karşına çıkar:** Yayın kontrol listesinde. Sık unutulur.
- **Örnek kullanım:** "Favicon için logonun sadeleştirilmiş halini üretelim; 16px'te tam logo okunmuyor."
- **İlgili terimler:** Web app manifest (1.7), Icon set (5.7)

---

## 8.14 Kendini test et

**1.** Padding ile margin arasındaki fark nedir? Butonun tıklanabilir alanını büyütmek için hangisi kullanılır ve neden?

**2.** `!important` neden bir borç olarak nitelendirilir?

**3.** Flexbox ile CSS Grid arasındaki temel fark nedir? Bento grid hangisiyle kurulur?

**4.** `display: none` kullanmanın erişilebilirlik açısından sonucu nedir?

**5.** Tailwind'in tasarım sistemi açısından iki gerçek faydası nedir?

**6.** styled-components'in 2026'daki durumu nedir? Mevcut projede kullanıyorsan ne yapmalısın?

**7.** TypeScript tip tanımının tasarımcı için pratik değeri nedir?

**8.** Props ile state arasındaki fark nedir? Figma'daki hangi kavram props'a karşılık gelir?

**9.** Prop drilling neden bir sorun işaretidir?

**10.** CSR, SSR ve SSG arasındaki temel fark nedir? Blog için hangisi doğal tercihtir ve neden?

**11.** ISR neyi çözmeye çalışır?

**12.** Hydration nedir ve kullanıcı açısından hangi soruna yol açar?

**13.** Server component ile SSR arasındaki fark nedir?

**14.** Streaming/PPR tasarımcıyı neden ilgilendirir?

**15.** Core Web Vitals laboratuvar verisi mi saha verisi mi? "Lighthouse 100" ne anlama gelmez?

**16.** LCP, INP ve CLS'nin 2026 "iyi" eşikleri nedir?

**17.** INP'nin FID'e göre geçilmesinin neden daha zor olduğu söyleniyor?

**18.** TTFB yüksek ama görseller optimize. Sorun nerede aranır?

**19.** Hero görseli neden lazy load edilmemeli?

**20.** FOIT ile FOUT arasındaki fark nedir? Hangisi tercih edilir ve yan etkisi nedir?

**21.** Canonical URL hangi problemi çözer?

**22.** `sitemap.xml` ile tasarım çıktısı olan sitemap arasındaki fark nedir? Yayında sık yapılan robots.txt hatası nedir?

**23.** OG görseli neden bir tasarım işidir?

---

### Cevaplar

**1.** Padding kutunun **içinde** kalır ve arka plan rengini alır; margin kutunun **dışındadır** ve almaz. Tıklanabilir alanı büyütmek için **padding** kullanılır — çünkü tıklanabilir alan kutunun kendisidir; margin dışarıda kalır ve tıklanmaz.

**2.** Çünkü özgüllük yarışını zorla kazanır ve sonraki her düzeltmenin de `!important` gerektirmesine yol açar. Asıl sorun (fazla özgül seçiciler veya organizasyon eksikliği) çözülmeden birikir.

**3.** Flexbox **tek eksende** (satır veya sütun), CSS Grid **iki eksende** (satır ve sütun aynı anda) dizer. Bento grid, farklı boyutlarda kutuların iki boyutlu yerleşimi olduğu için **CSS Grid** ile kurulur.

**4.** Öğeyi tamamen kaldırır — **ekran okuyucudan da gizler.** Yalnızca görsel olarak gizlemek gerekiyorsa (ekran okuyucunun okumaya devam etmesi isteniyorsa) farklı bir teknik gerekir.

**5.** (1) Sınıflar önceden tanımlı bir ölçekten geldiği için tasarım sistemine uymayı kolaylaştırır — rastgele 17px yazamazsın. (2) Stil bileşenin yanında durduğu için bileşen silindiğinde stili de silinir; kullanılmayan CSS birikmez.

**6.** **Mart 2025'te bakım moduna geçti**; bakımcısı yeni projeler için önermiyor. Deprecated değil, çalışmaya devam ediyor. Mevcut projede kullanıyorsan panik yok — kademeli geçiş yap, yeni bileşenleri CSS Modules/Tailwind ile yaz. Toptan yeniden yazmak için yeterli sebep değil.

**7.** Tip tanımı, bir nesnenin **hangi alanlara sahip olduğunun listesidir**. Bir kart tasarlarken "bu alanda ne var, boş olabilir mi?" sorusunun cevabı orada yazar — böylece opsiyonel alanların boş hâlini de tasarlarsın.

**8.** Props dışarıdan gelir ve bileşen onu değiştirmez; state bileşenin içinde yaşar ve değişir. Figma'daki **component property** (variant, size, disabled) props'a karşılık gelir.

**9.** Aradaki bileşenler o veriyle ilgilenmedikleri hâlde taşımak zorunda kalır. Kod kırılganlaşır ve her değişiklik zincirin tamamına dokunmayı gerektirir. Çözüm genelde context veya bir state yönetimi kütüphanesidir.

**10.** CSR tarayıcıda, SSR her istekte sunucuda, SSG derleme anında bir kez HTML üretir. Blog için **SSG** doğal tercihtir: içerik herkese aynı ve seyrek değişiyor; en hızlı, en ucuz ve en dayanıklı seçenektir.

**11.** SSG'nin **tazelik** problemini. Statik sayfaların hızını korurken, içeriğin belirli aralıklarla veya tetikleyiciyle arka planda güncellenmesini sağlar — her seferinde tüm siteyi yeniden derlemeden.

**12.** Sunucudan gelen hazır HTML'in tarayıcıda JavaScript ile etkileşimli hâle getirilmesi. Sorun: bu tamamlanana kadar kullanıcı butonu **görür ama basınca hiçbir şey olmaz**. Ne kadar çok JavaScript varsa bu ara dönem o kadar uzar.

**13.** SSR bir bileşeni sunucuda HTML'e çevirir ama o bileşenin JavaScript'i **yine tarayıcıya gider** (hydration için). Server component'in JavaScript'i **hiç gitmez** — sadece sunucuda çalışır ve sonucu gönderir.

**14.** Çünkü hangi bölümün önce geleceğine ve bekleyen bölümde ne görüneceğine karar vermek bir **tasarım kararıdır**. Skeleton yerleşimi, öncelik sırası ve bekleme deneyimi tasarımcının işidir.

**15.** **Saha verisi** — gerçek Chrome kullanıcılarından toplanan CrUX verisi, 75. yüzdelik dilimde, 28 günlük kayan pencerede. "Lighthouse 100" yalnızca laboratuvar koşullarında iyi olduğu anlamına gelir; gerçek kullanıcıların %25'inden fazlası yavaş yaşıyorsa metrik yine de geçmez.

**16.** LCP ≤ **2,5 saniye**, INP ≤ **200 ms**, CLS ≤ **0,1**. (Kötü bandı: >4 sn, >500 ms, >0,25.)

**17.** FID yalnızca **ilk** etkileşimden önceki gecikmeyi ölçüyordu. INP **tüm** etkileşimleri ölçer ve en kötüye yakın bir değeri raporlar. Bu yüzden FID'de yeşil olan birçok site INP'de sarı veya kırmızıya düştü.

**18.** Sunucu ve ağ tarafında: rendering stratejisi (her istekte hesaplama yapılıyor mu), sunucu bölgesinin kullanıcıya uzaklığı, veritabanı sorguları, önbellek ve CDN kullanımı. Ön yüz optimizasyonu bu durumda sorunu çözmez.

**19.** Çünkü hero görseli genelde **LCP öğesidir**. Lazy load etmek, ölçülen metriğin ta kendisini geciktirir. Hero görseli tersine önceliklendirilmeli (preload), lazy loading ekran dışındaki görsellere uygulanmalıdır.

**20.** **FOIT** font yüklenene kadar metni görünmez tutar; **FOUT** yedek fontla gösterip sonra değiştirir. Genelde **FOUT** tercih edilir çünkü kullanıcı boş ekrana bakmaz. Yan etkisi: yedek fontun metrikleri farklıysa değişim anında metin sıçrar ve **CLS**'yi bozar — yedek fontu birincil fonta yakın seçmek bunu azaltır.

**21.** Aynı içeriğe birden fazla adresten ulaşılabilmesi problemini. Filtre ve sıralama parametreleri yüzünden aynı liste onlarca URL'de görünür; canonical, arama motoruna "asıl olan budur" diyerek değerin bölünmesini engeller.

**22.** `sitemap.xml` arama motoru botları için üretilen makine okunur dosyadır; tasarımdaki sitemap (4.3) sayfaların hiyerarşisini gösteren insan okunur şemadır. Sık yapılan hata: **staging'deki "botları engelle" ayarının canlıya taşınması** — site aylarca arama sonuçlarında görünmez.

**23.** Çünkü bir bağlantı paylaşıldığında sosyal medyada görünen görsel odur ve tıklanma oranını doğrudan etkiler. Tanımlanmamışsa paylaşım çıplak bir bağlantı olarak görünür. Şablon bir OG görseli tasarlamak (arka plan sabit, başlık dinamik) her sayfa için ayrı görsel üretmeden bunu çözer.

---

**Biten bölüm:** Bölüm 8 — Front-end temelleri
**Sıradaki bölüm:** Bölüm 9 — Framework ve kütüphane haritası
