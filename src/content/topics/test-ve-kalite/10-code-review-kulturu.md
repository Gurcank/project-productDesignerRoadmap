---
title: "Code review kültürü"
sectionNumber: "17.10"
category: "test-ve-kalite"
order: 10
cardCount: 0
sourceFile: "17-test-kalite-ve-kod-sagligi.md"
origin: "material"
flags: []
---
Detayı 15.5'te. Burada kültür tarafı — ve bu, senin de dahil olduğun bir pratik.

**İyi bir incelemede neye bakılır (sırayla):**

1. **Doğru problemi mi çözüyor?** — En üst seviye soru. Kod kusursuz olabilir ama yanlış şeyi yapıyor olabilir.
2. **Kabul kriterlerini karşılıyor mu?** (2.6) — Boş durum, hata durumu ve yükleme durumu dahil mi?
3. **Uç durumlar düşünülmüş mü?** (4.4) — Çok uzun metin, boş liste, yavaş bağlantı.
4. **Tasarıma uygun mu?** — Senin alanın: ölçüler, durumlar, responsive davranış, erişilebilirlik.
5. **Anlaşılır mı?** — Altı ay sonra biri okuduğunda anlayacak mı?
6. **Biçim** — Buna bakılmaz; formatter'ın (17.7) işidir.

**Yorum yazma biçimi:**

- **Soru sor, hüküm verme.** "Bu neden böyle?" yerine "Bunu şöyle yapmalıydın" demek savunmaya iter.
- **Zorunlu ile öneriyi ayır.** Yaygın bir pratik, öneri niteliğindeki yorumları `nit:` (nitpick) ile işaretlemektir — böylece hangi yorumun bloke ettiği belli olur.
- **İyi olanı da söyle.** İncelemeler yalnızca eleştiriden oluşursa süreç yıpratıcı hâle gelir.
- **Yorum sayısını sınırla.** Otuz yorumlu bir inceleme, incelemeden çok yeniden yazma talebidir; o noktada yorum yazmak yerine konuşmak daha verimlidir.

**Süre de bir kalite meselesidir:** günlerce bekleyen bir PR, dalın eskimesine, çakışmaya (15.3) ve yazanın bağlamı unutmasına yol açar. Birçok ekip bir inceleme süresi hedefi koyar.
