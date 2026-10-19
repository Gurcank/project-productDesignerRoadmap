# İş gereksinimleri belgesi: Tek iade kuralı

**Sürüm:** 1.0 · **Hazırlayan:** Ayşe (BA) · **Karar sahibi:** Ozan (PO, panel takımı) · **Tarih:** Demlik vakası

## 1. Sorun ve ihtiyaç

**İhtiyaç:** müşteri ve dükkân, bir iptalde ne kadar iade yapılacağını önceden ve aynı şekilde bilmeli.

**Kanıt:** geçen ay iadeyle ilgili 310 destek talebi geldi. Okunan 60 talebin 26'sı "beklediğim iadeyi alamadım", 18'i "dükkân iptal etti ama haberim olmadı".

**Kök neden:** iade kuralının tek bir kaynağı ve sahibi yok. Kural üç yerde, birbiriyle çelişen üç metin olarak duruyor: uygulamadaki iptal metni, Panel yardım sayfası, destek el kitabı.

## 2. Hedef ve amaçlar

- **Hedef:** iade kararı tek bir kurala bağlı ve her yerde aynı olsun.
- **Amaç:** üç ay içinde iadeyle ilgili destek talepleri ayda 310'dan 150'nin altına insin.

## 3. Kapsam

**Kapsam içi:**

- Müşterinin ve dükkânın iptali, iade tutarının hesaplanması ve otomatik iade
- Dükkân iptalinde %20 kupon
- Müşteriye ve dükkâna iade bildirimi; finansa gün sonu iade raporu

**Kapsam dışı:**

- Müşterinin bankasına yaptığı ödeme itirazları (chargeback)
- Kupon kampanyaları

## 4. Paydaşlar

| Paydaş | İlgisi | Bu işteki rolü |
|---|---|---|
| Müşteri | Parasını doğru ve hızlı geri almak | Görüşme yok; destek talepleri okundu |
| Dükkân çalışanı | İptali hızlı yapmak, müşteriye doğru bilgi vermek | Görüşme, gözlem, UAT |
| Destek ekibi | Daha az talep, net kural | Atölye, UAT |
| Finans | Gün sonu iadelerinin doğru kaydı | Atölye |
| Ozan (PO) | Doğru kural, doğru sıra | Karar sahibi |

## 5. Gereksinimler

| Kimlik | Tür | Gereksinim | Kaynak | Öncelik |
|---|---|---|---|---|
| İG-1 | İş | Üç ay içinde iadeyle ilgili destek talepleri ayda 310'dan 150'nin altına iner. | İhtiyaç | — |
| PG-1 | Paydaş | Dükkân çalışanı, iptal etmeden önce müşterinin ne kadar iade alacağını görür. | Görüşme, gözlem | Yüksek |
| PG-2 | Paydaş | Müşteri, iptal düğmesine basmadan önce ne kadar iade alacağını görür. | Destek talepleri | Yüksek |
| FG-1 | İşlevsel | Sistem iade tutarını "İade kararı" tablosuna göre hesaplar. | PG-1, PG-2 | Yüksek |
| FG-2 | İşlevsel | Sistem iadeyi ödeme kuruluşuna iptal anında otomatik gönderir. | İG-1 | Yüksek |
| FG-3 | İşlevsel | Sistem, kupon gereken iptalde %20 kuponu müşterinin hesabına ekler. | Karar tablosu | Orta |
| FG-4 | İşlevsel | Sistem, dükkân iptal ettiğinde müşteriye sebebiyle birlikte bildirim gönderir. | Destek talepleri | Yüksek |
| İOG-1 | İşlevsel olmayan | İade kararı iptalden sonra en geç 5 saniye içinde müşterinin ekranında görünür. | PG-2 | Yüksek |
| GG-1 | Geçiş | Yayından önce eski yardım sayfası ve el kitabındaki iade metinleri kaldırılır; destek ekibi bir saatlik eğitim alır. | Kök neden | Yüksek |

## 6. İş kuralları

"İade kararı" karar tablosu, sekiz kural (UNIQUE). Bkz. karar tablosu şablonu.

## 7. Varsayımlar ve kısıtlar

- **Varsayım:** ödeme kuruluşu kısmi iadeyi de otomatik kabul eder. Doğrulama: Ayşe, ödeme kuruluşunun belgesinden, ilk sprintten önce.
- **Kısıt:** ödeme kuruluşu iadeyi 1–3 iş gününde karta yansıtır; Demlik bunu hızlandıramaz.
- **Kısıt:** Demlik kart bilgisi saklamaz.

## 8. Açık sorular

| Soru | Kim cevaplar | Ne zamana kadar |
|---|---|---|
| Teslim edilmiş siparişte şikâyet olursa ne olur? | Ozan | Bir sonraki çeyrek; bu işin kapsamı dışında |

## 9. Onay

| Ad | Rol | Sürüm | Tarih |
|---|---|---|---|
| Ozan | Product Owner | 1.0 | Atölyeden sonraki hafta |
