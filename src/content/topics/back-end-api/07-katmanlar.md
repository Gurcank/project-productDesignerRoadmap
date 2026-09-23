---
title: "Katmanlar"
sectionNumber: "10.7"
category: "back-end-api"
order: 7
cardCount: 2
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
Arka yüz kodunun nasıl organize edildiği. **Seviye 2** terimler.

### Middleware

- **Terim (İngilizce):** Middleware
- **Türkçesi:** Ara katman
- **Tanım:** İstek asıl işleme ulaşmadan önce ondan geçen ara kod.
- **Ne işe yarar / neden var:** Her endpoint'te tekrar edilmesi gereken işleri tek yerde toplar: kimlik kontrolü, hız sınırı, günlük kaydı, dil tespiti, yönlendirme. Bir kullanıcı giriş yapmamışsa middleware onu daha en başta durdurur.
- **Nerede karşına çıkar:** Auth ve yönlendirme konuşmalarında.
- **Örnek kullanım:** "Giriş kontrolünü middleware'e alalım; her sayfada ayrı ayrı kontrol etmeyelim."
- **İlgili terimler:** Auth (Bölüm 12), Rate limiting (10.10)

### Controller / Service / Repository

- **Terim (İngilizce):** Controller, service, repository
- **Türkçesi:** Denetleyici, servis, depo
- **Tanım:** Arka yüz kodunun sorumluluklara göre bölünmesi: **controller** isteği karşılar ve yanıtı döner, **service** iş kurallarını içerir, **repository** veritabanıyla konuşur.
- **Ne işe yarar / neden var:** Katmanlı ayrım, bir kuralın nerede yaşadığını netleştirir ve test edilebilirliği artırır. "İndirim kuralını nereye yazacağız?" sorusunun cevabı: service katmanına — böylece hem web hem mobil hem arka plan işi aynı kuralı kullanır.
- **Nerede karşına çıkar:** Kod yapısı tartışmalarında.
- **Örnek kullanım:** "Bu hesaplama controller'da; service'e taşıyalım ki başka yerden de çağrılabilsin."
- **İlgili terimler:** Katmanlı mimari (14.3), Clean code (17.8)
