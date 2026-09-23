---
title: "Rendering stratejileri"
sectionNumber: "8.10"
category: "front-end"
order: 10
cardCount: 8
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: ["degisken"]
---
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
