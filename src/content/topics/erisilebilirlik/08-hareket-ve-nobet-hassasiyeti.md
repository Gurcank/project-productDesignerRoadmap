---
title: "Hareket ve nöbet hassasiyeti"
sectionNumber: "6.8"
category: "erisilebilirlik"
order: 8
cardCount: 3
sourceFile: "06-erisilebilirlik-a11y.md"
origin: "material"
flags: []
---
### prefers-reduced-motion

Detayı Bölüm 5.9'da. Özet: kullanıcı işletim sisteminde "hareketi azalt" ayarını açtığında, büyük yer değiştirmeler, paralaks ve zoom efektleri kaldırılmalı; yerine zararsız bir opaklık geçişi bırakılmalıdır. Bu bir estetik tercih değil, vestibüler rahatsızlığı olan kullanıcılar için fiziksel bir gerekliliktir.

### Flashing content

- **Terim (İngilizce):** Three flashes threshold (SC 2.3.1)
- **Türkçesi:** Yanıp sönme eşiği
- **Tanım:** İçerik, saniyede üçten fazla yanıp sönmemelidir.
- **Ne işe yarar / neden var:** Işığa duyarlı epilepsisi olan kişilerde nöbet tetikleyebilir. Bu, dosyadaki en ciddi sonuçlu erişilebilirlik kuralıdır.
- **Nerede karşına çıkar:** Video içeriklerinde, dikkat çekme amaçlı animasyonlarda, oyunlaştırma efektlerinde.
- **Örnek kullanım:** "Bu kutlama animasyonu hızlı yanıp sönüyor; frekansı düşürelim."
- **İlgili terimler:** Motion design (5.9)

### Pause, stop, hide

- **Terim (İngilizce):** Pause, Stop, Hide (SC 2.2.2)
- **Türkçesi:** Duraklatma, durdurma, gizleme
- **Tanım:** Otomatik hareket eden, kayan veya güncellenen içerik beş saniyeden uzun sürüyorsa kullanıcı onu durdurabilmelidir.
- **Ne işe yarar / neden var:** Otomatik dönen carousel, kayan duyuru şeridi (marquee) ve otomatik oynayan video, dikkat kısıtı veya okuma güçlüğü olan kullanıcılar için engeldir; yavaş okuyan herkes için de sinir bozucudur.
- **Nerede karşına çıkar:** Carousel ve marquee bileşenlerinde (7.5).
- **Örnek kullanım:** "Carousel otomatik dönüyorsa duraklat butonu koyalım; ayrıca odaklanınca dönmeyi durdursun."
- **İlgili terimler:** Carousel (7.5), Marquee (7.5)
