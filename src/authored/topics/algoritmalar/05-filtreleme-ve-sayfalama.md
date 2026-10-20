---
title: "Filtreleme ve sayfalamanın maliyeti"
sectionNumber: ""
category: "algoritmalar"
order: 5
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "PostgreSQL — Index'ler ve sorgu performansı"
    url: "https://www.postgresql.org/docs/current/indexes.html"
---

Filtre paneli, tasarımda en ucuz görünen ve arkada en pahalıya gelebilen bileşenlerden biri.

## Her filtre bir sorgu değişikliğidir

Tek bir filtre ucuzdur. Sorun **birleşimden** çıkar: altı filtre, her biri iki seçenekli olsa bile, veritabanının karşılaşabileceği onlarca farklı sorgu şekli demektir. Index'ler belirli sorgu şekilleri için kurulur; tahmin edilmeyen bir birleşim index'ten yararlanamaz ve tüm tabloyu tarar.

Pratik sonuç: **filtre sayısı arttıkça, hangi birleşimlerin gerçekten kullanıldığı önem kazanır.** Kullanılmayan bir filtre yalnız ekranda yer kaplamaz, arkada da bakım yükü bırakır.

## "Kaç sonuç var" pahalı bir sorudur

Filtreye uyan kayıt sayısını göstermek, sayfayı getirmekten ayrı bir iştir: ilk 20'yi getirmek için 20 kayıt yeter, sayıyı söylemek için hepsini saymak gerekir.

Seçenekler ve maliyetleri:

| Gösterim | Maliyet | Ne zaman |
|---|---|---|
| "1.284 sonuç" | Yüksek | Sayı gerçekten karar değiştiriyorsa |
| "1.000+ sonuç" | Düşük | Çoğu durumda yeterli |
| Sayı yok | Sıfır | Sonsuz kaydırmada doğal |

Aynısı **facet sayıları** için de geçerli: her filtre seçeneğinin yanındaki "(42)" rakamı, o filtre uygulanmış hâlin ayrıca sayılması demektir. Altı filtre × her biri beş seçenek = otuz ayrı sayım.

## Filtre durumu nerede yaşıyor

Bu bir tasarım kararı ve genelde atlanır:

- **URL'de** → paylaşılabilir, geri tuşu çalışır, yenilemede kaybolmaz. Neredeyse her zaman doğru cevap.
- **Yalnız bellekte** → paylaşılamaz, geri tuşu filtreyi değil sayfayı bırakır.

## Bir Product Designer olarak

- **Filtre listesini kısa tut ve gerçekten kullanılanı ölç.** Her filtre kalıcı bir maliyettir.
- **Sonuç sayısını göstermek zorunda mısın?** "1.000+" çoğu zaman yeterli ve çok daha ucuz.
- **Facet sayılarını isterken maliyetini bil** — ekranda küçük bir parantez, arkada ayrı bir sorgu.
- **Filtreyi URL'e yaz.** Paylaşılabilirlik ve geri tuşu, sonradan eklenmesi zor iki davranıştır (8.9).
- **Filtre sonucu boşsa ne olacak?** En dar filtreyi gevşetmeyi öner; kullanıcıyı çıkmazda bırakma.
