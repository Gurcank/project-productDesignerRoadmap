---
title: "Status kodları"
sectionNumber: "10.3"
category: "back-end-api"
order: 3
cardCount: 2
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
Sunucunun "ne oldu" cevabı. Üç haneli sayının **ilk hanesi** kategoriyi verir; onu bilmek çoğu durumda yeter.

| Aralık | Anlamı | Kim sorumlu |
|---|---|---|
| **2xx** | Başarılı | — |
| **3xx** | Yönlendirme | — |
| **4xx** | İstemci hatası — istek yanlış | İstemci / kullanıcı |
| **5xx** | Sunucu hatası — istek doğru ama sunucu beceremedi | Sunucu |

**Sık göreceğin kodlar:**

| Kod | Adı | Ne demek | Tasarımda karşılığı |
|---|---|---|---|
| **200** | OK | İşlem başarılı | Normal akış |
| **201** | Created | Yeni kayıt oluşturuldu | Başarı durumu (7.9) |
| **204** | No Content | Başarılı ama dönecek veri yok | Silme sonrası |
| **301 / 302** | Moved | Kalıcı / geçici yönlendirme | SEO'da kritik (8.13) |
| **304** | Not Modified | İçerik değişmemiş, önbellektekini kullan | Kullanıcı görmez |
| **400** | Bad Request | İstek biçimsiz veya eksik | Form hatası (4.9) |
| **401** | Unauthorized | Kimliğin doğrulanmamış | Giriş ekranına yönlendir |
| **403** | Forbidden | Kimliğin belli ama yetkin yok | "Bu sayfaya erişiminiz yok" ekranı |
| **404** | Not Found | Böyle bir şey yok | 404 sayfası (7.9) |
| **409** | Conflict | Çakışma (aynı e-posta zaten kayıtlı gibi) | Alan bazlı hata mesajı |
| **422** | Unprocessable | İstek anlaşıldı ama içerik geçersiz | Doğrulama hatası |
| **429** | Too Many Requests | Çok fazla istek attın | "Biraz bekleyin" mesajı (10.10) |
| **500** | Internal Server Error | Sunucuda beklenmedik hata | Hata ekranı (7.9) |
| **502 / 503 / 504** | Gateway / Unavailable / Timeout | Sunucu erişilemiyor veya yanıt vermedi | Bakım veya hata ekranı |

### 401 vs 403

- **Terim (İngilizce):** 401 Unauthorized, 403 Forbidden
- **Türkçesi:** Kimlik doğrulanmadı, erişim yasak
- **Tanım:** **401** = "kim olduğunu bilmiyorum, giriş yap." **403** = "kim olduğunu biliyorum ama buraya giremezsin."
- **Ne işe yarar / neden var:** İkisi tamamen farklı tasarım gerektirir. 401'de kullanıcıyı giriş ekranına yönlendirirsin; 403'te giriş ekranına yönlendirmek hatadır — kullanıcı zaten giriş yapmıştır ve tekrar giriş yapması bir şeyi değiştirmez. 403 için "erişiminiz yok, yetki talep edin" gibi ayrı bir ekran gerekir.
- **Nerede karşına çıkar:** Yetkilendirme akışlarında (12.9).
- **Örnek kullanım:** "403 alınca giriş sayfasına atıyoruz; kullanıcı sonsuz döngüye giriyor. Ayrı bir yetki ekranı yapalım."
- **İlgili terimler:** Authentication vs authorization (12.1), Error state (7.9)

### 429

- **Terim (İngilizce):** 429 Too Many Requests
- **Türkçesi:** Çok fazla istek
- **Tanım:** İstemcinin kısa sürede çok fazla istek attığı ve geçici olarak sınırlandığı durum.
- **Ne işe yarar / neden var:** Rate limiting'in (10.10) kullanıcıya yansıyan yüzü. **Tasarlanması gereken bir durumdur** ama neredeyse hep atlanır: kullanıcı ne kadar beklemesi gerektiğini bilmelidir. Sunucu genelde bir `Retry-After` bilgisi döner ve bu, arayüzde geri sayım olarak gösterilebilir.
- **Nerede karşına çıkar:** Arama, giriş denemesi ve dış servis çağrılarında.
- **Örnek kullanım:** "429'da 'çok fazla deneme, 30 saniye sonra tekrar deneyin' diyelim; sadece 'hata oluştu' yazmayalım."
- **İlgili terimler:** Rate limiting (10.10), Error message (4.9)
