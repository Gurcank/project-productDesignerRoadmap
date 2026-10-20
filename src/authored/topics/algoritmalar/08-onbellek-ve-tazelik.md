---
title: "Önbellek ve tazelik"
sectionNumber: ""
category: "algoritmalar"
order: 8
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "MDN — HTTP önbellekleme"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"
---

Önbellek, bir kez hesaplanan sonucu saklayıp tekrar kullanmaktır. Hız için en güçlü araç ve aynı zamanda **en sinsi hata kaynağı**: sakladığın şey eskidiğinde kullanıcı yanlış bilgiyi görür ve sistem hata vermez.

Materyal bunu 10.11'de ele alıyor; buradaki amaç tasarıma yansıyan kısmı.

## Asıl soru: ne kadar eski kabul edilebilir

Her veri için cevabı farklıdır ve bu bir **ürün kararıdır**, teknik değil:

| Veri | Kabul edilebilir yaş |
|---|---|
| Blog yazısı | Saatler |
| Ürün fiyatı | Dakikalar |
| Stok durumu | Saniyeler |
| Sepet, bakiye | Sıfır — asla önbelleklenmez |

Belirtmezsen geliştirici bir süre seçer ve kullanıcı bir gün yanlış fiyat görür.

## Bayat veri nasıl görünür

En yaygın kalıp **stale-while-revalidate**: eskisini hemen göster, arka planda yenile. Arayüz anında dolar, sonra sessizce güncellenir.

Bunun tasarım bedeli var: kullanıcı bir sayıya bakarken sayı değişir. Buna karar vermek gerekir — sessizce mi güncellensin, yoksa "güncellendi" denilsin mi?

## Önbellek katmanları

Bir sayfa görünene kadar veri birkaç önbellekten geçebilir: tarayıcı, service worker, CDN, sunucu, veritabanı. Bir değişikliğin görünmemesi bunların **herhangi birinden** kaynaklanabilir — bu yüzden "bende eski görünüyor" şikâyeti tek bir yerde çözülmez.

Bu sitenin kendi geçmişinde bunun bir örneği var: arama indeksinin manifest dosyası kalıcı önbelleğe alınınca, arama artık var olmayan bir indeksi okudu ve anlamsız sonuçlar döndürdü. Hata veren bir şey yoktu — yalnız yanlış cevaplar.

## Bir Product Designer olarak

- **Her ekran için "ne kadar taze olmalı" sorusunu cevapla.** Özellikle para, stok ve izinle ilgili olanlarda.
- **"Yenile" eylemi gerekiyor mu?** Kullanıcıya tazeliği kontrol etme yolu vermek bazen en ucuz çözümdür.
- **Veri güncellendiğinde ekranda ne olacak?** Sessiz değişim mi, bildirim mi?
- **"Bende eski görünüyor" şikâyetini ciddiye al** — bu neredeyse her zaman bir önbellek katmanıdır ve kullanıcı için hatadan ayırt edilemez.
