# Kartının süresi dolmuş kullanıcıda ödeme ekranında Öde düğmesi pasif kalıyor

**Ortam:** Production · Android uygulaması 3.8.1 · Pixel 7 · 412 px
**Kullanıcı ve veri durumu:** Giriş yapılmış müşteri; tek kayıtlı kartının süresi dolmuş.

## Yeniden üretme adımları

1. Sepete herhangi bir ürün ekle.
2. Ödemeye geç.
3. Kayıtlı kartı seç.

**Beklenen:** kartın süresinin dolduğunu söyleyen bir uyarı ve kartı güncelleme bağlantısı.
**Gerçekleşen:** Öde düğmesi pasif kalıyor; hiçbir mesaj görünmüyor.

## Kanıt

Ekran kaydı ekte (14 sn). Uygulama günlüğünde hata yok.

## Sıklık ve etki

- **Sıklık:** her seferinde.
- **Etki:** bu durumdaki müşteriler ödemeyi bitiremiyor. Kartının süresi dolan müşteriler bankadan uyarı alıyor ama Demlik'te kartı güncellemenin yolunu bulamıyor.

## Sınıflandırma

- **Severity:** Yüksek — ödeme akışı tamamlanamıyor.
- **Priority:** Yüksek — ödemeyi bitirmeyenler zaten %22.
