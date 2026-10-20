# A/B test planı: Yeni kart seçim ekranı

**Sahibi:** Elif (PM), analiz Ece · **Süre:** iki tam hafta, pazartesiden pazara

**Hipotez:** Ödeme ekranında seçili kartı vurgularsak ödeme tamamlama oranı artar, çünkü Mert'in testinde beş kişiden dördü hangi kartın seçili olduğunu söyleyemedi.

| Alan | |
|---|---|
| Birincil metrik | Ödeme tamamlama oranı (Checkout Started → Order Completed) |
| Koruyucu metrikler | Ortalama sepet tutarı; ödeme hatası oranı; iptal oranı |
| Taban oran | %78 |
| En küçük saptanacak etki | 3 puan (%78 → %81) |
| Güç / anlamlılık | %80 / %5 |
| Varyasyon başına örneklem | 2.946 (toplam 5.892) |
| Günlük trafik → süre | Ödeme adımına günde ~2.300 kişi → 3 gün yeter; takım kuralı gereği iki tam hafta |
| Atama | %50 / %50, kullanıcı kimliğine göre |
| SRM kontrolü | Her gün; ki-kare testi |
| Erken durdurma koşulu | Yalnız ödeme hatası oranı iki katına çıkarsa |

## Karar kuralı

- Ödeme tamamlama anlamlı biçimde artar ve koruyucular bozulmazsa: yeni ekran herkese açılır.
- Anlamlı fark yoksa: eski ekran kalır; Mert'in bulgusu için başka bir çözüm aranır.
- Koruyucu bozulursa: test durdurulur ve neden araştırılır.

## Sonuç

Birinci gün yeni ekran +5 puan gösterdi; Burak durdurmayı önerdi, plan gereği durdurulmadı. SRM kontrolü geçti (50,2 / 49,8). İki hafta sonunda kontrol %78,1, yeni ekran %80,9; fark anlamlı, koruyucular değişmedi. Yeni ekran herkese açıldı.
