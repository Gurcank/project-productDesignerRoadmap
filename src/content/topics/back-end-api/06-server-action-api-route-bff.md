---
title: "Server action, API route, BFF"
sectionNumber: "10.6"
category: "back-end-api"
order: 6
cardCount: 3
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
Modern meta-framework'lerin (9.3) getirdiği yaklaşımlar.

### API route

- **Terim (İngilizce):** API route
- **Türkçesi:** API yolu
- **Tanım:** Ön yüz projesinin içinde tanımlanan, sunucuda çalışan endpoint.
- **Ne işe yarar / neden var:** Ayrı bir arka yüz projesi kurmadan sunucu tarafı kod yazmayı sağlar. Küçük ve orta projelerde ayrı bir back-end ekibine olan ihtiyacı ortadan kaldırır.
- **Nerede karşına çıkar:** Next.js ve benzeri meta-framework'lerde.
- **Örnek kullanım:** "Form gönderimi için ayrı bir sunucu kurmayalım; API route yeter."
- **İlgili terimler:** Server action, Meta-framework (9.1), Serverless (10.8)

### Server action

- **Terim (İngilizce):** Server action
- **Türkçesi:** Sunucu eylemi
- **Tanım:** Ön yüz kodundan doğrudan çağrılabilen ama sunucuda çalışan işlev.
- **Ne işe yarar / neden var:** Aradaki API katmanını yazma ihtiyacını ortadan kaldırır: form gönderimi için endpoint tanımlamak, adres yazmak ve yanıtı elle işlemek gerekmez. React Server Components (8.10) ile birlikte gelen bir yaklaşım.
- **Nerede karşına çıkar:** Modern Next.js projelerinde form ve mutasyon işlemlerinde.
- **Örnek kullanım:** "Bu formu server action ile bağlayalım; ayrı endpoint'e gerek yok."
- **Karıştırılanlar:** Kolaylık, doğrulama ve yetki kontrolünü atlamak için gerekçe değildir. Server action da bir endpoint'tir ve **girdi doğrulaması ile yetki kontrolü orada da zorunludur** (13.7, 12.9).
- **İlgili terimler:** API route, RSC (8.10), Zod (9.9)

### BFF

- **Terim (İngilizce):** BFF — Backend For Frontend
- **Türkçesi:** Ön yüz için arka yüz
- **Tanım:** Her istemci türü için (web, mobil) ona özel şekillendirilmiş ince bir arka yüz katmanı.
- **Ne işe yarar / neden var:** Ön yüzün ihtiyacı olan veriyi tek bir yerde toplar: üç farklı iç servisten veri çekip tek bir yanıt hâline getirir. Böylece ön yüz üç ayrı istek atmak zorunda kalmaz (under-fetching).
- **Nerede karşına çıkar:** Mikroservis mimarilerinde ve çok istemcili ürünlerde.
- **Örnek kullanım:** "Ekran üç ayrı servisten veri istiyor; BFF katmanı ekleyip tek istekte toplayalım."
- **İlgili terimler:** GraphQL (10.5), Microservice (14.2), Round trip (1.3)
