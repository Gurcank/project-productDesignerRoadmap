---
title: "Caching"
sectionNumber: "10.11"
category: "back-end-api"
order: 11
cardCount: 4
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
Aynı işi tekrar tekrar yapmamak için sonucu saklama. **Performansın en büyük tek kaldıracı.**

### Cache

- **Terim (İngilizce):** Cache, caching
- **Türkçesi:** Önbellek
- **Tanım:** Bir sonucu, tekrar hesaplamak yerine saklayıp yeniden kullanma.
- **Ne işe yarar / neden var:** Katman katman çalışır: tarayıcı önbelleği, CDN, sunucu önbelleği, veritabanı önbelleği. Her katman, isteğin daha derine gitmesini engeller — ve her katman gecikmeyi (1.3) düşürür.
- **Nerede karşına çıkar:** Her performans konuşmasında.
- **Örnek kullanım:** "Bu veri saatte bir değişiyor; her istekte veritabanına gitmeyelim, önbelleğe alalım."
- **İlgili terimler:** CDN, TTL, Cache invalidation

### CDN

- **Terim (İngilizce):** CDN — Content Delivery Network
- **Türkçesi:** İçerik dağıtım ağı
- **Tanım:** Statik dosyaların (görsel, CSS, JavaScript, font) dünya genelindeki sunuculara kopyalanıp kullanıcıya en yakın olandan servis edilmesi.
- **Ne işe yarar / neden var:** İki fayda: mesafeyi kısaltarak gecikmeyi düşürür, ve asıl sunucunun yükünü alır. Statik siteler (1.5) tamamen CDN'den servis edilebildiği için bu kadar hızlı ve ucuzdur.
- **Nerede karşına çıkar:** Neredeyse her modern hosting platformunda varsayılan olarak gelir.
- **Örnek kullanım:** "Görseller CDN'den gelsin; şu an hepsi tek sunucudan servis ediliyor."
- **İlgili terimler:** Cache, SSG (8.10), Latency (1.3)

### TTL / ETag / stale-while-revalidate

- **Terim (İngilizce):** TTL (Time To Live), ETag, stale-while-revalidate
- **Türkçesi:** Yaşam süresi, içerik damgası
- **Tanım:** **TTL** = bir önbellek kaydının ne kadar süre geçerli sayılacağı. **ETag** = içeriğin parmak izi; değişmemişse tarayıcı yeniden indirmez (304, 10.3). **stale-while-revalidate** = eski kopyayı hemen göster, arka planda yenisini getir.
- **Ne işe yarar / neden var:** Sonuncusu tasarımı doğrudan ilgilendirir: kullanıcı beklemez, veriyi anında görür; güncel sürüm arka planda gelince ekran tazelenir. TanStack Query'nin (9.8) varsayılan davranışı budur ve **"eski veri gösteriliyor, tazeleniyor" durumunun tasarlanması** gerekir.
- **Nerede karşına çıkar:** Önbellek stratejisi kararlarında.
- **Örnek kullanım:** "Liste stale-while-revalidate ile gelsin; kullanıcı anında görsün, üstte ince bir tazeleme göstergesi olsun."
- **İlgili terimler:** TanStack Query (9.8), 304 (10.3), Loading state (7.9)

### Cache invalidation

- **Terim (İngilizce):** Cache invalidation
- **Türkçesi:** Önbellek geçersizleştirme
- **Tanım:** Veri değiştiğinde, önbellekteki eski kopyanın silinmesi veya güncellenmesi.
- **Ne işe yarar / neden var:** Önbelleklemenin zor kısmı budur — yazılım dünyasının en bilinen şakalarından biri, "bilgisayar bilimindeki iki zor şeyden biri" olmasıdır. Sorunun kullanıcıya yansıması: **bir şeyi güncellersin ama sitede eski hâli görünmeye devam eder.**
- **Nerede karşına çıkar:** "Değişikliğim neden görünmüyor?" şikâyetlerinin en yaygın sebebi.
- **Örnek kullanım:** "İçerik güncellendiğinde ilgili sayfaların önbelleğini temizleyelim; editörler eski hâli görüyor."
- **İlgili terimler:** ISR (8.10), Service worker (1.7), TTL
