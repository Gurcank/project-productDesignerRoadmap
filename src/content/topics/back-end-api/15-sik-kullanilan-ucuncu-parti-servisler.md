---
title: "Sık kullanılan üçüncü parti servisler"
sectionNumber: "10.15"
category: "back-end-api"
order: 15
cardCount: 0
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: ["degisken"]
---
`[DEĞİŞKEN BİLGİ]` Bu bölümdeki **kategorileri** öğren; ürün isimleri ve fiyatlandırmaları sürekli değişir. Aşağıda örnek olarak anılan isimler bir öneri değil, kulak aşinalığı içindir.

| Kategori | Ne çözer | Tasarımı nasıl etkiler |
|---|---|---|
| **Ödeme** (Stripe, iyzico, PayTR vb.) | Kart işleme, abonelik, fatura | Ödeme akışının bir kısmı servisin kendi ekranıdır; nereye kadar senin tasarımın olduğu baştan belirlenmeli |
| **E-posta** (işlemsel ve pazarlama) | Şifre sıfırlama, sipariş onayı, bülten | E-posta şablonları da tasarım işidir ve web'den farklı kısıtları vardır |
| **SMS / OTP** | Doğrulama kodu | Kod girme ekranı, tekrar gönderme sayacı ve hata durumları tasarlanmalı (12.6) |
| **Arama** (Algolia, Typesense, Meilisearch vb.) | Hızlı ve hatalı yazıma toleranslı arama | Anlık öneri, yazım düzeltme ve boş sonuç deneyimini mümkün kılar (7.10) |
| **Analitik** | Kullanım ölçümü | Olay tasarımı senin işin (16.11); KVKK uyumu gerekir (13.10) |
| **Harita** | Konum gösterimi | Ağır bir gömülü bileşendir; lazy load düşünülmeli |
| **Hata izleme** (Sentry vb.) | Canlıdaki hataları yakalama | Bkz. 16.11 |

**Örnek kullanım:** "Ödeme sayfasının hangi kısmı bizim tasarımımız, hangisi servisin ekranı? Bunu baştan netleştirelim; akış tasarımı buna bağlı."
