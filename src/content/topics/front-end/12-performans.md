---
title: "Performans"
sectionNumber: "8.12"
category: "front-end"
order: 12
cardCount: 10
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: ["degisken"]
---
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
