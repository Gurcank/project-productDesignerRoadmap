---
title: "Geri bildirim döngüsü"
sectionNumber: "19.6"
category: "yapay-zeka-ile-calisma"
order: 6
cardCount: 0
sourceFile: "19-yapay-zeka-ile-profesyonel-calisma.md"
origin: "material"
flags: []
---
İlk çıktı nadiren son çıktıdır. Önemli olan, düzeltme turunun **ne kadar bilgi taşıdığı.**

**Zayıf geri bildirim:** "Beğenmedim, bir daha dene." → Model neyi değiştireceğini bilmez; rastgele başka bir yöne gider.

**Güçlü geri bildirim üç parçadan oluşur:**

1. **Ne yanlış** — teknik terimle (bu dosyanın asıl faydası burada)
2. **Neden yanlış** — hangi ilkeye veya kısıta aykırı
3. **Ne olmalı** — mümkünse somut

| Zayıf | Güçlü |
|---|---|
| "Karışık duruyor" | "Görsel hiyerarşi yok: üç buton da dolu renkli, birincil eylem belli değil. Birini primary, ikisini ghost yap." |
| "Boşluklar tuhaf" | "Başlık üstü ve altı boşluk eşit; Gestalt yakınlık gereği başlık altındaki metne ait okunmalı. Üstü 48, altı 16 olsun." |
| "Mobilde bozuk" | "375px'te kart üçlüsü sıkışıyor. 768px'in altında tek sütuna düşsün." |
| "Erişilebilir değil" | "İkon butonların erişilebilir adı yok ve tıklama alanı 24×24'ün altında. Ad ekle, padding ile hedefi büyüt." |
| "Çok yavaş" | "Hero görseli LCP öğesi ve 1,2MB PNG. WebP'ye çevir ve öncelikli yükle." |

**Dikkat:** Uzun bir düzeltme zincirinde sapma (19.1) riski artar. Beş turdan sonra hâlâ yaklaşılmıyorsa, düzeltmeye devam etmek yerine **tanımı yeniden yazıp sıfırdan başlamak** genelde daha hızlıdır.
