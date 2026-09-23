---
title: "Ortamlar"
sectionNumber: "16.3"
category: "devops-ve-yayin"
order: 3
cardCount: 2
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: []
---
Bölüm 1.8'de kavramsal olarak tanıtıldı. Burada yönetim tarafı.

### Ortam türleri

- **Terim (İngilizce):** Local, development, preview, staging, production
- **Türkçesi:** Yerel, geliştirme, önizleme, prova, canlı
- **Tanım:** Aynı uygulamanın farklı amaçlarla çalışan kopyaları (1.8). **Preview environment**, her PR için otomatik oluşturulan geçici ve kendine ait adresi olan ortamdır.
- **Ne işe yarar / neden var:** **Preview ortamı doğrudan senin işine yarar:** bir tasarım değişikliğini, kimseden bir şey istemeden, gerçek bir adreste görebilir ve paylaşabilirsin. Modern hosting platformlarının (16.6) en değerli özelliklerinden biridir.
- **Nerede karşına çıkar:** Her PR'da otomatik olarak oluşur.
- **Örnek kullanım:** "PR'ın preview linkini müşteriye gönderelim; staging'e almadan onay alalım."
- **Karıştırılanlar:** *Preview* geçicidir ve PR'a bağlıdır; *staging* kalıcı ve tektir (1.8).
- **İlgili terimler:** Staging (1.8), Pull request (15.5), Design review (2.10)

### Ortam değişkeni yönetimi

- **Terim (İngilizce):** Environment variable management, secret manager
- **Türkçesi:** Ortam değişkeni yönetimi
- **Tanım:** Her ortamın kendi yapılandırma değerlerine sahip olması ve sırların güvenli saklanması (10.1, 13.6).
- **Ne işe yarar / neden var:** Aynı kod farklı ortamlarda farklı veritabanına, farklı ödeme anahtarına ve farklı analitik hesabına bağlanır. **Deploy sorunlarının en yaygın tek sebebi eksik veya yanlış ortam değişkenidir.**
- **Nerede karşına çıkar:** Hosting platformunun ayarlar ekranında.
- **Örnek kullanım:** "Staging test ödeme anahtarını kullansın; canlı anahtar sadece production'da olsun."
- **Karıştırılanlar:** **Staging'de gerçek servisleri kullanmak tehlikelidir:** test siparişi gerçek kart çekebilir, test e-postası gerçek müşteriye gidebilir. Bu bir tasarım ve süreç kararıdır.
- **İlgili terimler:** Secret (13.6), Environment variable (10.1)
