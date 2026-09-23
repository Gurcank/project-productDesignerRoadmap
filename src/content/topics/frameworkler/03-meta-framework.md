---
title: "Meta-framework"
sectionNumber: "9.3"
category: "frameworkler"
order: 3
cardCount: 5
sourceFile: "09-framework-ve-kutuphane-haritasi.md"
origin: "material"
flags: ["degisken"]
---
Projenin iskeletini kuran katman. **Bu kararın tasarım tarafında doğrudan karşılığı vardır:** hangi rendering stratejisinin (8.10) mümkün olduğunu, sayfaların ne kadar hızlı açılacağını ve SEO'nun ne kadar kolay olacağını burası belirler.

### Next.js

- **Terim (İngilizce):** Next.js
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** React üzerine kurulu, en yaygın kullanılan meta-framework.
- **Ne işe yarar / neden var:** Rendering stratejilerinin hepsini (SSG, SSR, ISR, RSC, streaming) tek çatı altında sunar ve sayfa bazında seçmene izin verir. Görsel optimizasyonu, yönlendirme ve metadata yönetimi hazır gelir.
- **Nerede karşına çıkar:** SaaS ürünlerinde, pazarlama sitelerinde, e-ticarette. Senin de kullandığın stack.
- **Örnek kullanım:** "Next.js kullanalım; pazarlama sayfaları statik, panel dinamik olsun, ikisi aynı projede yaşasın."
- **Ne zaman kullanılmaz:** Sadece içerik yayınlayan bir site için gereğinden karmaşık kalabilir — orada Astro daha uygun. Ayrıca App Router'ın **önbellek modeli** ekiplerin en sık şikâyet ettiği karmaşıklık kaynağı olarak anılıyor.
- `[DEĞİŞKEN BİLGİ]` Next.js 16 hattında Turbopack üretim yapıları için kararlı hâle geldi ve PPR (8.10) genel kullanıma doğru ilerliyor olarak anılıyor. Ayrıca Vercel'e bağımlılık (vendor lock-in) endişesi düzenli olarak tartışılıyor — teknik olarak başka yerde de barındırılabilir ama bazı özellikler Vercel'de daha sorunsuz çalışır.
- **İlgili terimler:** RSC (8.10), Vercel (16.6), Astro

### Astro

- **Terim (İngilizce):** Astro
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Varsayılan olarak **sıfır JavaScript** gönderen, içerik odaklı meta-framework.
- **Ne işe yarar / neden var:** Islands mimarisini (8.10) merkeze alır: sayfa statik HTML olarak gider, sadece gerçekten etkileşimli parçalar JavaScript alır. Ayrıca framework-agnostiktir — aynı projede React, Vue ve Svelte bileşenleri kullanabilirsin.
- **Nerede karşına çıkar:** Blog, dokümantasyon, pazarlama sitesi, portfolyo.
- **Örnek kullanım:** "İçerik sitesi için Astro; Next.js'in getirdiği karmaşıklığa gerek yok, LCP de daha iyi çıkar."
- **Ne zaman kullanılmaz:** Yoğun etkileşimli uygulamalar (panel, editör, gerçek zamanlı arayüz) için tasarlanmamıştır.
- `[DEĞİŞKEN BİLGİ]` **Cloudflare, Astro'yu Ocak 2026'da satın aldı** olarak raporlanıyor; bu, projenin yönünü etkileyebilir. Güncel durumu kontrol et.
- **İlgili terimler:** Islands (8.10), SSG (8.10), Static site (1.5)

### React Router v7

- **Terim (İngilizce):** React Router v7 (eski adıyla Remix)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Web standartlarına yakın durmayı ve JavaScript olmadan da çalışan sayfalar üretmeyi hedefleyen React meta-framework'ü.
- **Ne işe yarar / neden var:** Next.js App Router'ın önbellek karmaşıklığından kaçınmak isteyen React ekipleri için en düşük sürtünmeli alternatif olarak anılıyor. Form ve veri akışı tarayıcının doğal davranışına yakın kurulur.
- **Nerede karşına çıkar:** Next.js'ten geçiş arayan ekiplerde. Shopify'ın yeniden yazılmış yönetim panelini bu altyapıda çalıştırdığı raporlanıyor.
- **Örnek kullanım:** "App Router'ın cache modeliyle boğuşmak istemiyoruz; React Router v7'yi değerlendirelim."
- `[DEĞİŞKEN BİLGİ]` **İsim karmaşası gerçek ve bilmen gerekir:** Remix, Kasım 2024'te React Router v7'ye birleşti — yani "Remix v3 olacak şey" React Router v7 oldu. Ayrı bir proje olarak **Remix 3** ise sıfırdan bir yeniden yazım olarak beta aşamasında ve üretime hazır değil. Remix v2'nin Haziran 2026'da destek dışı kaldığı raporlanıyor. Bu yüzden "Remix" kelimesini duyduğunda **hangisinden bahsedildiğini sor.**
- **İlgili terimler:** Next.js, Remix, TanStack Start

### SvelteKit / Nuxt

- **Terim (İngilizce):** SvelteKit, Nuxt
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Svelte ve Vue'nun resmî meta-framework'leri.
- **Ne işe yarar / neden var:** Next.js'in React için yaptığını kendi ekosistemlerinde yaparlar. Ekip zaten Svelte veya Vue biliyorsa doğal seçimdir.
- **Nerede karşına çıkar:** Svelte ve Vue ekiplerinde.
- **Örnek kullanım:** "Vue ekibiyiz; Nuxt doğal seçim, React'e geçmek için sebep yok."
- **İlgili terimler:** Svelte (9.2), Vue (9.2)

### TanStack Start

- **Terim (İngilizce):** TanStack Start
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** TanStack Router üzerine kurulu, tip güvenliğini merkeze alan yeni React meta-framework'ü.
- **Ne işe yarar / neden var:** İstemci öncelikli bir varsayılan ve güçlü tip güvenliği sunar. React Router/Remix birleşmesinden memnun olmayan ekiplerin yöneldiği alternatif olarak anılıyor.
- **Nerede karşına çıkar:** Yeni proje tartışmalarında.
- **Örnek kullanım:** "TanStack Start ilginç ama henüz 1.0 değil; üretim için erken."
- `[DEĞİŞKEN BİLGİ]` 2026 ortası itibarıyla release candidate aşamasında olduğu, API'nin kararlı ama sürümün 1.0 olmadığı raporlanıyor. **Ticari bir proje için bu bir risktir.**
- **İlgili terimler:** React Router v7, TanStack Query (9.8)
