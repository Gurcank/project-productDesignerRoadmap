# Fırsat-çözüm ağacı: Sipariş takımı

**Sonuç:** İlk siparişten sonra 30 günde ikinci sipariş verenler %41 → %50, çeyrek sonuna kadar.

**Dayandığı görüşmeler:** Mert'in 8 öğrenci görüşmesi ve önceki çeyrekten 6 müşteri görüşmesi.

## Fırsat alanı

- **Sipariş vermeden önce**
  - Fırsat: "Sevdiğim dükkân açık mı bilmiyorum."
  - Fırsat: "Her sabah aynı şeyi baştan seçiyorum."
- **Sipariş verirken**
  - Fırsat: "Kartımı her seferinde seçiyorum."
  - Fırsat: "Arkadaşlarla tek siparişte birleşemiyoruz."
- **Teslim alırken**
  - Fırsat: "Kahvem hazır mı bilmiyorum, erken gidip bekliyorum."

## Hedef fırsat

"Her sabah aynı şeyi baştan seçiyorum." — **Neden bu?** Aktif müşterilerin %54'ü son beş siparişinde hep aynı ürünü alıyor; strateji düzenli sabah müşterisine odaklanıyor; görüşmelerde en sık geçen şikâyet.

## Çözümler

| Çözüm | En riskli varsayım | Test | Başarı ölçütü |
|---|---|---|---|
| 1. Son siparişi tekrarla | Müşteri ana ekrandaki düğmeyi fark eder | Prototip testi, 8 kişi | 8'den en az 6'sı 10 saniyede bulur → 7/8 |
| 2. Favori listesi | Müşteri favori kaydetmeye zahmet eder | Prototip testi, aynı oturum | 8'den en az 5'i kaydeder → 3/8 |
| 3. Zamanlanmış sipariş | İstenmeden ödeme almaz | Test edilmedi | Kural yazıldı: her siparişten 30 dk önce bildirim |

## Karar

Önce "Son siparişi tekrarla" teslime gidiyor. Favori listesi Next'te, kullanım verisi geldikten sonra yeniden değerlendirilecek. Zamanlanmış sipariş Later'da.
