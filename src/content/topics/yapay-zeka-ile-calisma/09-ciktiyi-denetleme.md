---
title: "Çıktıyı denetleme"
sectionNumber: "19.9"
category: "yapay-zeka-ile-calisma"
order: 9
cardCount: 3
sourceFile: "19-yapay-zeka-ile-profesyonel-calisma.md"
origin: "material"
flags: []
---
**Bu alt bölüm pazarlık konusu değil.** Kod okuyabiliyorsun; bu, çıktıyı denetleyebileceğin anlamına gelir ve denetlemek zorundasın.

### Neyi mutlaka doğrula

| Kategori | Neden | Nasıl |
|---|---|---|
| **Kütüphane ve sürüm iddiaları** | Bilgi kesim tarihi (19.1) | Paketin kendi sayfasına bak |
| **API ve parametre isimleri** | Uydurma riski (19.1) | Resmî dokümantasyondan kontrol et |
| **Sayısal iddialar ve istatistikler** | Uydurma riski | Kaynağı iste, kaynağı aç |
| **Kaynak linkleri** | Var olmayan link üretilebilir | Tıkla, gerçekten açılıyor mu |
| **Güvenlik ve hukuk iddiaları** | Yanlışın bedeli yüksek (Bölüm 13) | Birincil kaynak veya uzman |
| **Erişilebilirlik** | Otomatik araç %30-40 yakalar (6.9) | Manuel klavye ve zoom testi (6.9) |

### Neyi gözle kontrol et

Bir arayüz çıktısı geldiğinde, **kod okumadan** yapabileceğin kontroller:

- **Ölçek dışı değer var mı?** `p-[18px]`, `#3B82F6`, `margin: 22px` gibi elle yazılmış değerler.
- **Durum ekranları var mı?** Boş, hata, yükleme (7.9) — yoksa sonradan eklenmez, unutulur.
- **Klavye turu.** Fareyi bırak, Tab ile geç (6.9).
- **%200 zoom.** İçerik kırpılıyor mu (6.6).
- **375px genişlik.** Taşma var mı.
- **Uzun metin.** 60 karakterlik bir başlık koy, ne oluyor bak (4.4).

### Kod incelemesi refleksi

Kaynaklarda tekrar eden bir tavsiye: **her yapay zekâ oturumundan sonra diff'e (15.2) bakmak.** Bunun, prompt iyileştirmekten daha çok hata önlediği belirtiliyor. Sen kod okuyabildiğin için bu senin de yapabileceğin bir kontrol — hangi dosyaların değiştiğine bakmak bile başlı başına faydalıdır.

**Nihai ilke:** Üretimi hızlandırabilirsin ama **sorumluluğu devredemezsin.** Yayına çıkan şeyin sahibi sensin.
