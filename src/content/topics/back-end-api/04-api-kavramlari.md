---
title: "API kavramları"
sectionNumber: "10.4"
category: "back-end-api"
order: 4
cardCount: 4
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
### API

- **Terim (İngilizce):** API — Application Programming Interface
- **Türkçesi:** Uygulama programlama arayüzü
- **Tanım:** İki yazılımın birbiriyle konuşma biçimini tanımlayan sözleşme.
- **Ne işe yarar / neden var:** Ön yüz ile arka yüzü birbirinden ayırır: ikisi ayrı ekipler tarafından, ayrı hızlarda geliştirilebilir. Ayrıca aynı arka yüz, hem web hem mobil hem üçüncü partiler tarafından kullanılabilir.
- **Nerede karşına çıkar:** Her teknik konuşmada.
- **Örnek kullanım:** "Bu ekran için gereken veriyi tek bir API çağrısıyla alabilir miyiz?"
- **İlgili terimler:** Endpoint, Contract, REST (10.5)

### Endpoint / Resource

- **Terim (İngilizce):** Endpoint, resource
- **Türkçesi:** Uç nokta, kaynak
- **Tanım:** Endpoint, API'nin belirli bir işlevine karşılık gelen adrestir (`/api/urunler/123`). Resource ise o adresin temsil ettiği şeydir (bir ürün).
- **Ne işe yarar / neden var:** API'yi konuşulabilir parçalara böler. "Şu endpoint yavaş", "bu endpoint 500 dönüyor" gibi cümlelerin birimidir.
- **Nerede karşına çıkar:** Her API konuşmasında ve DevTools'un Network sekmesinde.
- **Örnek kullanım:** "Liste endpoint'i her ürünün tüm açıklamasını dönüyor; kart görünümünde kullanmıyoruz."
- **İlgili terimler:** API, Payload (1.3), URL (1.2)

### Contract

- **Terim (İngilizce):** API contract, schema
- **Türkçesi:** Sözleşme
- **Tanım:** Bir endpoint'in hangi girdileri kabul ettiğini ve hangi çıktıyı döndüğünü tanımlayan anlaşma.
- **Ne işe yarar / neden var:** Ön yüz ve arka yüzün **paralel çalışmasını** mümkün kılar: sözleşme belirlendikten sonra iki taraf birbirini beklemez. Tasarımcı için önemi şu: sözleşme, hangi alanların geleceğini ve hangilerinin boş olabileceğini söyler — yani hangi boş ve uç durumları (4.4) tasarlaman gerektiğini.
- **Nerede karşına çıkar:** Özellik başlangıcında. OpenAPI (Swagger) belgesi bunun standart biçimidir.
- **Örnek kullanım:** "Sözleşmeye bakalım: `discount` alanı opsiyonel, o zaman indirimsiz kart görünümünü de tasarlamalıyız."
- **Karıştırılanlar:** Sözleşmeyi habersiz değiştirmek (**breaking change**) ön yüzü kırar. Bu yüzden sürümleme yapılır.
- **İlgili terimler:** Type (8.6), Edge case (4.4), API versioning

### API versioning

- **Terim (İngilizce):** API versioning, breaking change, deprecation
- **Türkçesi:** API sürümleme, kırıcı değişiklik
- **Tanım:** API'nin değişirken eski kullanıcılarını kırmamasını sağlayan yaklaşım — genelde adrese sürüm koyarak (`/api/v2/...`).
- **Ne işe yarar / neden var:** Bir API'yi dışarıya açtıysan, onu kullananları haberdar etmeden değiştiremezsin. Mobil uygulamalar özellikle kritiktir: kullanıcı güncellemeyi yüklemediyse eski sürümü kullanmaya devam eder.
- **Nerede karşına çıkar:** Genel API'lerde ve mobil uygulamalı ürünlerde.
- **Örnek kullanım:** "Bu değişiklik kırıcı; v2 açalım ve v1 için altı aylık geçiş süresi verelim."
- **İlgili terimler:** Contract, Semantic versioning (15.8), Deprecation (2.11)
