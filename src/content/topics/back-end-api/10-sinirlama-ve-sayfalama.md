---
title: "Sınırlama ve sayfalama"
sectionNumber: "10.10"
category: "back-end-api"
order: 10
cardCount: 2
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
### Rate limiting

- **Terim (İngilizce):** Rate limiting, throttling, quota
- **Türkçesi:** Hız sınırlama, kısıtlama, kota
- **Tanım:** Bir kullanıcının veya IP'nin belirli sürede atabileceği istek sayısının sınırlanması.
- **Ne işe yarar / neden var:** Kötüye kullanımı, bot saldırılarını ve maliyet patlamalarını engeller. Giriş ekranında şifre deneme saldırılarına karşı temel savunmadır (13.9).
- **Nerede karşına çıkar:** Giriş, arama, form gönderimi ve dış servis çağrılarında.
- **Örnek kullanım:** "Giriş denemesini dakikada 5 ile sınırlayalım; sonra 429 dönüp bekleme süresi gösterelim."
- **Karıştırılanlar:** Sınıra takılan **gerçek kullanıcıya** ne gösterileceği bir tasarım işidir (10.3, 429). Ayrıca sınır çok sıkı olursa meşru kullanımı engeller.
- **İlgili terimler:** 429 (10.3), CAPTCHA (13.9), Auth (Bölüm 12)

### Pagination: offset vs cursor

- **Terim (İngilizce):** Offset pagination, cursor pagination
- **Türkçesi:** Konum tabanlı ve imleç tabanlı sayfalama
- **Tanım:** **Offset**: "20. kayıttan itibaren 20 tane ver" — klasik sayfa numaralarını mümkün kılar. **Cursor**: "şu kayıttan sonrakileri ver" — sayfa numarası olmaz ama sonsuz kaydırma için daha uygundur.
- **Ne işe yarar / neden var:** **Bu teknik ayrımın doğrudan tasarım sonucu vardır** (7.10): sayfa numaralı bir arayüz istiyorsan offset gerekir. Ama offset'in iki bilinen zayıflığı var: çok derin sayfalarda yavaşlar, ve liste sürekli değişiyorsa kayıtlar sayfalar arasında kayabilir veya tekrarlanabilir. Cursor bu sorunları çözer ama "5. sayfaya git" özelliğini imkânsız kılar.
- **Nerede karşına çıkar:** Liste ve akış tasarımında.
- **Örnek kullanım:** "Sayfa numarası istiyorsak offset gerekiyor; sonsuz kaydırma yapacaksak cursor daha sağlam."
- **İlgili terimler:** Pagination (7.10), Infinite scroll (7.10)
