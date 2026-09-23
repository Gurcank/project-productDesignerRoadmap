---
title: "Event-driven mimari"
sectionNumber: "14.4"
category: "sistem-mimarisi"
order: 4
cardCount: 2
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: []
---
### Event-driven architecture

- **Terim (İngilizce):** Event-driven architecture — EDA, event
- **Türkçesi:** Olay güdümlü mimari
- **Tanım:** Parçaların birbirini doğrudan çağırmak yerine, "olan biten"i duyurup ilgilenenlerin dinlemesi üzerine kurulu yapı.
- **Ne işe yarar / neden var:** Bağlılığı düşürür. "Sipariş oluşturuldu" olayını yayınlayan servis, kimin dinlediğini bilmek zorunda değildir — e-posta servisi, stok servisi ve analitik ayrı ayrı dinler. Yeni bir dinleyici eklemek, mevcut kodu değiştirmeyi gerektirmez.
- **Nerede karşına çıkar:** Orta ve büyük ölçekli sistemlerde.
- **Örnek kullanım:** "Sipariş oluşturulduğunda bir olay yayınlayalım; bildirim ve fatura servisleri onu dinlesin."
- **Karıştırılanlar:** **Bedeli takip edilebilirliktir:** bir şeyin neden olduğunu izlemek zorlaşır, çünkü çağrı zinciri açık değildir. Ayrıca olayların sırası ve tekrarı yönetilmelidir (idempotency, 14.11).
- **İlgili terimler:** Message queue, Pub/sub, Webhook (10.9)

### Message queue / Pub-sub

- **Terim (İngilizce):** Message queue, publish-subscribe (pub/sub), broker, event bus
- **Türkçesi:** Mesaj kuyruğu, yayınla-abone ol
- **Tanım:** Mesajların gönderici ile alıcı arasında bir aracı üzerinden taşınması. **Kuyrukta** bir mesajı genelde tek bir alıcı işler; **pub/sub'da** aynı mesajı birden fazla abone alır.
- **Ne işe yarar / neden var:** Gönderici ile alıcıyı zaman olarak ayırır: alıcı çökmüş olsa bile mesaj kuyrukta bekler ve alıcı ayağa kalkınca işlenir. Bu, dayanıklılığın (14.8) temel araçlarından biridir. Kavramsal karşılığı 10.12'de.
- **Nerede karşına çıkar:** Arka plan işleri ve servisler arası iletişimde. Kafka, RabbitMQ, SQS yaygın adlardır (**Seviye 3**).
- **Örnek kullanım:** "E-posta servisi çökerse siparişler etkilenmesin; mesajı kuyruğa atalım."
- **İlgili terimler:** Queue (10.12), Event-driven, Retry (14.11)
