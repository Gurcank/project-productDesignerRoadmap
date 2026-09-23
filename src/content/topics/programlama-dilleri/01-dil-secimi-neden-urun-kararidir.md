---
title: "Dil seçimi neden bir ürün kararıdır"
sectionNumber: ""
category: "programlama-dilleri"
order: 1
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "Stack Overflow — Developer Survey (dil kullanım ve ekosistem verisi)"
    url: "https://survey.stackoverflow.co/"
---

Bu bölüm dil öğretmiyor. Amacı şu: ekipte "bunu Go'ya taşısak mı" ya da "bu iş için Python daha uygun" konuşulduğunda, tartışmanın **neyle ilgili olduğunu** anlayabilmen.

Dil seçimi teknik bir zevk meselesi gibi görünür ama sonuçlarının çoğu ürün tarafına düşer: ne kadar hızlı işe alım yapılabileceği, bir özelliğin ne kadar sürede çıkacağı, hangi hazır parçaların bedavaya geleceği.

## Seçimi belirleyen şey dilin kendisi değil

Bir dil nadiren "daha iyi" olduğu için seçilir. Kararı genelde şu dördü belirler:

- **Ekosistem.** O iş için hazır kütüphane var mı? Görüntü işleme Python'da, ödeme entegrasyonu her yerde, mobil arayüz Swift/Kotlin'de hazır gelir.
- **Ekip.** Şirkette o dili bilen kaç kişi var, işe alım ne kadar kolay. En iyi dil, ekibin bakabildiği dildir.
- **Çalışma ortamı.** Tarayıcıda yalnız JavaScript çalışır. iOS'ta Swift, Android'de Kotlin birinci sınıf vatandaştır. Bu bir tercih değil, kısıttır.
- **Devralınan kod.** Var olan sistem hangi dildeyse, yeni iş de büyük ihtimalle orada yazılır. "Boring technology" tam olarak budur (Bölüm 9).

## Tasarımı etkileyen üç yer

**1. Hazır olanın ucuz, olmayanın pahalı olması.** Bir ekosistemde standart olan bir bileşen (tarih seçici, grafik, zengin metin editörü) başka bir ekosistemde sıfırdan yazılır. "Basit bir takvim" isteği, dile göre iki gün ya da iki hafta olabilir.

**2. Tip sistemi ve hata yakalama.** Tipli diller (TypeScript, Java, C#, Go) bazı hataları kod yazılırken yakalar; tipsizler çalışırken. Bu, senin tasarladığın **hata durumlarının** ne kadarının kullanıcıya ulaşacağını etkiler.

**3. Performans profili.** Bazı diller hız için, bazıları yazma kolaylığı için tasarlanmıştır. "Bu ekran neden yavaş" sorusunun cevabı bazen dilde, ama çoğu zaman veritabanı sorgusunda ya da ağdadır (11.9) — dile atmak genelde yanlış adrestir.

## Dikkat: dil ≠ framework ≠ runtime

Üçü sık karıştırılır ve materyal bunu 9.1'de ayırıyor:

| Kavram | Ne | Örnek |
|---|---|---|
| Dil | Yazım kuralları ve anlam | JavaScript, Python |
| Runtime | Dili çalıştıran ortam | Tarayıcı, Node.js |
| Framework | Dille yazılmış iskelet | Next.js, Django |

"Next.js'e geçelim" bir framework kararıdır, dil kararı değil. İkisini ayırmak, tartışmanın ne kadar büyük olduğunu anlamanı sağlar.

## Bir Product Designer olarak

- **"Bu hangi dilde yazılacak?" senin sorun değil; "bu ekosistemde hazır var mı?" senin sorun.** İkincisi tasarım kapsamını doğrudan değiştirir (2.8).
- **Dil değişikliği bir mimari karardır**, özellik değil. "Şunu Go'ya taşıyalım" dendiğinde takvim aylarla ölçülür (14.1).
- **Tarayıcıda ne istediğine dikkat et.** İstemci tarafında yalnız JavaScript çalışır; "bunu tarayıcıda yapalım" demek otomatik olarak JS/TS demektir.
- **Bir dilin "modern" olması ürün için argüman değildir.** Ekibin bakabildiği, işe alabildiği, hazır parçası olan dil kazanır.
