---
category: "devops-ve-yayin"
sourceFiles: ["16-devops-yayin-ve-gozlemlenebilirlik.md"]
---

Bu bölüm, kodun bilgisayardan çıkıp kullanıcıya ulaştığı ve orada yaşadığı süreci anlatıyor.

Tasarımcı için üç somut bağlantısı var:

1. **Yayın hızı, tasarım kalitesini belirler.** Deploy zorsa, küçük düzeltmeler birikir ve "sonraki sürümde" diye ertelenir. Kolaysa, boşluk değerini düzeltmek beş dakikalık bir iştir. Yani CI/CD, dolaylı olarak senin işini etkiler.
2. **Kalite kontrolü otomatikleştirilebilir.** Erişilebilirlik taraması, performans bütçesi ve görsel karşılaştırma testleri yayın hattına konabilir — böylece kontrol insan hafızasına değil sürece bağlanır.
3. **Canlıda ne olduğunu görmek.** Analitik olayları (16.11) tasarlamak senin işin; ve bir hata canlıda yaşandığında kullanıcının ne gördüğü de senin tasarladığın ekrandır.

Bölümdeki kavramlar eskimeyen, **ürün ve fiyat bilgileri hızlı eskiyen** kategoride. 16.6 ve 16.12'de `[DEĞİŞKEN BİLGİ]` etiketi yoğun.
