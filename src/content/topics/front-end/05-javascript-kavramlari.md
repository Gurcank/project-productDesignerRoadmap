---
title: "JavaScript kavramları"
sectionNumber: "8.5"
category: "front-end"
order: 5
cardCount: 3
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: []
---
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
