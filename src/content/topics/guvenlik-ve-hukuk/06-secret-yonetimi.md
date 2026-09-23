---
title: "Secret yönetimi"
sectionNumber: "13.6"
category: "guvenlik-ve-hukuk"
order: 6
cardCount: 2
sourceFile: "13-guvenlik-ve-hukuki-yukumluluk.md"
origin: "material"
flags: []
---
### Secret

- **Terim (İngilizce):** Secret, credential, API key
- **Türkçesi:** Sır, kimlik bilgisi
- **Tanım:** Gizli kalması gereken değerler: API anahtarları (10.9), veritabanı şifreleri, imzalama anahtarları.
- **Ne işe yarar / neden var:** Sızan tek bir anahtar, tüm sistemin ele geçirilmesine yol açabilir. Bu yüzden koda yazılmaz, ortam değişkeninde (10.1) veya bir sır yöneticisinde tutulur.
- **Nerede karşına çıkar:** Her projede. `.gitignore` (15.10) dosyasının en önemli işlevlerinden biri, sır dosyalarının depoya girmesini engellemektir.
- **Örnek kullanım:** "`.env` dosyası `.gitignore`'da mı? Yanlışlıkla commit edilirse anahtarlar herkese açılır."
- **Karıştırılanlar:** **Depoya bir sır girdiyse, silmek yetmez.** Git geçmişinde kalır ve otomatik tarayıcılar bunu dakikalar içinde bulur. Doğru tepki: **anahtarı derhal iptal edip yenisini üretmek** (key rotation).
- **İlgili terimler:** Environment variable (10.1), .gitignore (15.10), API key (10.9)

### Ön yüz sırrı diye bir şey yoktur

- **Tanım:** Tarayıcıya gönderilen hiçbir değer gizli değildir.
- **Ne işe yarar / neden var:** Ortam değişkenlerinin ön yüze aktarılanları (genelde `PUBLIC_` veya `NEXT_PUBLIC_` gibi öneklerle işaretlenir) paketin içine gömülür ve herkes tarafından okunabilir. Aynı şekilde, ön yüzde gizlenen bir buton veya sayfa "korunmuş" değildir; sadece görünmüyordur.
- **Nerede karşına çıkar:** Güvenlik incelemelerinde ve rol tabanlı arayüz tasarımında.
- **Örnek kullanım:** "Yönetici butonunu ön yüzde gizlemek yeterli değil; sunucu tarafında da yetki kontrolü olmalı."
- **İlgili terimler:** Client-side vs server-side (1.6), Authorization (12.1)
