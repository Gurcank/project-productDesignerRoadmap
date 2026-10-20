# Sprint 14 planı — Sipariş takımı

| | |
|---|---|
| Sprint | 14 (iki hafta, pazartesi başlar) |
| Ürün hedefi | Tekrar eden siparişi kolaylaştır |
| Katılanlar | Deniz (PO), Kaan (SM), Ece, Burak, Can, Zeynep, Selin |

## Neden değerli? (Sprint hedefi)

**Müşteri son siparişini tek dokunuşla tekrarlayabilsin.**

Müşterilerin %54'ü son beş siparişinde hep aynı ürünü alıyor. Bu hedef, 30 günde ikinci sipariş oranını artırma çabasına doğrudan hizmet eder.

## Ne yapılabilir? (Seçilen öğeler)

| Öğe | Not |
|---|---|
| Ana ekranda "Son siparişini tekrarla" düğmesi | Hedefin çekirdeği |
| Kayıtlı kartla tek dokunuşta ödeme | Kart silinmişse kart seçimine yönlendirir |
| Stokta olmayan ürün uyarısı | Refinement'ta risk olarak çıktı |
| Hazır bildirimi hatasının düzeltilmesi | Tekrar eden siparişi engelliyor |

Kapsam dışı (sonraki sprintler): favori listesi, tekrar etmeden önce düzenleme.

## Nasıl yapılacak? (İlk günler)

- Pazartesi–salı: düğme ve uç noktası (Ece, Burak); bildirim hatası (Can).
- Çarşamba: ödeme akışı (Burak); test senaryoları (Zeynep, önceden yazılır).
- Selin: düğmenin boş ve hata durumları, salıya kadar.

## Kapasite notları

- Can perşembe izinli.
- Zeynep'in 6 saati kampüs projesinin entegrasyon testine gidiyor.
- Kasa tedarikçisinin API değişiklikleri: Ayşe salı günü panoya işler.

## Riskler ve bağımlılıklar

- Ödeme kuruluşunun kayıtlı kart uç noktasında bakım (çarşamba gece) — Burak takip ediyor.
