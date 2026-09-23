---
title: "JWT ve token türleri"
sectionNumber: "12.4"
category: "auth"
order: 4
cardCount: 2
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: []
---
### JWT

- **Terim (İngilizce):** JWT — JSON Web Token
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** İçinde kullanıcı bilgisi taşıyan, sunucu tarafından imzalanmış jeton biçimi.
- **Ne işe yarar / neden var:** İmza sayesinde, alıcı jetonun değiştirilmediğini veritabanına bakmadan doğrulayabilir. Bu, dağıtık sistemlerde her servisin bağımsız doğrulama yapabilmesini sağlar.
- **Nerede karşına çıkar:** Modern API'lerde ve mikroservislerde.
- **Örnek kullanım:** "JWT'nin içine rolü de koyalım; her serviste ayrıca veritabanı sorgusu olmasın."
- **Karıştırılanlar:** **İki önemli yanılgı var.** Birincisi: **JWT şifreli değildir, sadece imzalıdır.** İçindeki bilgi herkes tarafından okunabilir — bu yüzden içine hassas veri konmaz. İkincisi: **iptal edilemez.** Bir kullanıcıyı yasakladığında, elindeki jeton süresi dolana kadar geçerli kalmaya devam eder. Bu iki gerçek, JWT'yi çoğu basit web uygulaması için session'dan daha karmaşık hâle getirir.
- **İlgili terimler:** Access token, Refresh token, Session (12.2)

### Access token / Refresh token

- **Terim (İngilizce):** Access token, refresh token, expiry, revocation
- **Türkçesi:** Erişim jetonu, yenileme jetonu, geçerlilik süresi, iptal
- **Tanım:** **Access token** kısa ömürlüdür (dakikalar) ve her istekte kullanılır. **Refresh token** uzun ömürlüdür ve yalnızca yeni bir access token almak için kullanılır.
- **Ne işe yarar / neden var:** JWT'nin iptal edilememe sorununu hafifletir: access token çalınsa bile kısa sürede geçersiz olur; refresh token ise sunucuda kayıtlı olduğu için iptal edilebilir.
- **Nerede karşına çıkar:** Mobil uygulamalarda ve OAuth akışlarında.
- **Örnek kullanım:** "Access token 15 dakika, refresh token 30 gün olsun."
- **Karıştırılanlar:** **Tasarım karşılığı:** jeton yenileme kullanıcıya görünmez olmalıdır. Kullanıcının 15 dakikada bir çıkış yapmış olması bir hatadır. Ama refresh token da süresi dolduğunda kullanıcı gerçekten çıkış yapar — ve bu anın nasıl yaşandığı (yarım kalan iş kaybolur mu?) tasarlanmalıdır.
- **İlgili terimler:** JWT, Session süresi (12.11)
