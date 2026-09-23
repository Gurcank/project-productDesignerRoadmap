---
title: "HTTP metodları"
sectionNumber: "10.2"
category: "back-end-api"
order: 2
cardCount: 1
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
İstemcinin sunucudan ne yapmasını istediğini bildiren fiiller. Beş tanesini bilmek yeterli.

| Metot | Ne yapar | Güvenli mi | Idempotent mi |
|---|---|---|---|
| **GET** | Veri okur, hiçbir şeyi değiştirmez | Evet | Evet |
| **POST** | Yeni kayıt oluşturur veya bir işlem tetikler | Hayır | Hayır |
| **PUT** | Bir kaydı **tamamen** değiştirir | Hayır | Evet |
| **PATCH** | Bir kaydın **bir kısmını** değiştirir | Hayır | Genelde hayır |
| **DELETE** | Bir kaydı siler | Hayır | Evet |

### Safe / Idempotent

- **Terim (İngilizce):** Safe method, idempotent method
- **Türkçesi:** Güvenli metot, değişmez sonuçlu metot
- **Tanım:** **Safe** = veriyi değiştirmez, sadece okur. **Idempotent** = aynı isteği bir kez de gönderirsen, on kez de gönderirsen sonuç aynı olur.
- **Ne işe yarar / neden var:** Bu ayrım hem güvenlik hem kullanıcı deneyimi kararlarını belirler. **En somut karşılığı:** POST idempotent değildir, yani bir kullanıcı "Sipariş ver" butonuna iki kez basarsa iki sipariş oluşabilir. Bu yüzden butonun basıldıktan sonra devre dışı bırakılması ve yükleme durumu göstermesi (7.9) sadece estetik değil, **veri bütünlüğü meselesidir.**
- **Nerede karşına çıkar:** Form ve ödeme akışlarında; yeniden deneme mantığında (10.12).
- **Örnek kullanım:** "Sipariş butonu POST atıyor ve idempotent değil; çift tıklamayı engellemeliyiz veya sunucuya idempotency key göndermeliyiz."
- **Karıştırılanlar:** GET isteklerinin veri değiştirmemesi bir kuraldır, teknik bir zorunluluk değil. Veri değiştiren bir GET endpoint'i yazmak mümkündür ama ciddi bir hatadır: tarayıcılar ve önbellekler GET'i güvenli varsayar ve isteği kendiliğinden tekrarlayabilir.
- **İlgili terimler:** Idempotency (14.11), Caching (10.11), Loading state (7.9)
