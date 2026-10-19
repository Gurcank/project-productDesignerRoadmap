# Use case: Siparişi dükkân olarak iptal et

| Alan | |
|---|---|
| Bağlamdaki hedef | Dükkân çalışanı, hazırlayamayacağı bir siparişi iptal eder; müşteri doğru iadeyi alır ve nedenini öğrenir. |
| Kapsam | Demlik Panel ve iade hizmeti (kara kutu) |
| Seviye | Ana görev |
| Birincil aktör | Dükkân çalışanı |
| Diğer aktörler | Ödeme kuruluşu, müşteri (bildirim alır) |
| Tetikleyici | Çalışan, bir siparişi hazırlayamayacağını fark eder. |
| Ön koşul | Sipariş "Alındı", "Hazırlanıyor" ya da "Hazır" durumunda. |
| Başarıda garanti | Sipariş iptal edilir; iade karar tablosuna göre başlatılır; müşteri bildirim alır. |
| Başarısızlıkta bile garanti | Sipariş iptal edilmediyse müşteriden para eksilmez; iade başlatılamadıysa kayıt "başarısız" durumunda kalır ve destek ekibi görür. |

## Ana başarı senaryosu

1. Çalışan siparişi açar ve iptal etmek istediğini belirtir.
2. Çalışan iptal sebebini seçer: stok sorunu ya da başka bir sebep.
3. Sistem, karar tablosuna göre iade tutarını ve varsa kuponu çalışana gösterir.
4. Çalışan iptali onaylar.
5. Sistem iadeyi ödeme kuruluşuna gönderir ve kuponu müşterinin hesabına ekler.
6. Sistem müşteriye iptal sebebini, iade tutarını ve iadenin 1–3 iş gününde karta yansıyacağını bildirir.

## Uzantılar

- **2a.** Sebep stok sorunu: çalışan eksik ürünleri işaretler; sipariş kalan ürünlerle sürer ve yalnız eksik ürünlerin tutarı iade edilir.
- **3a.** Sipariş bu arada "Teslim edildi" oldu: sistem iptale izin vermez ve sebebini gösterir.
- **5a.** Ödeme kuruluşu yanıt vermez: sistem 3 kez yeniden dener; yine olmazsa iadeyi "başarısız" olarak kaydeder ve destek ekibine uyarı düşer. Müşteriye "iadeniz işleniyor" bildirimi gider.
- **5b.** Aynı siparişe ikinci bir iptal gelir: sistem ikinci iptali reddeder.

## İlgili bilgi

- **Öncelik:** yüksek
- **Sıklık:** günde 30–40 iptal (bütün dükkânlarda)
- **İlgili gereksinimler:** PG-1, FG-1, FG-2, FG-3, FG-4, İOG-1
- **Açık sorular:** teslim edilmiş siparişteki şikâyetler bu use case'in dışında; Ozan bir sonraki çeyreğe bıraktı.
