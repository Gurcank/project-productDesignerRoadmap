---
title: "Kısıt tanımlama"
sectionNumber: "19.4"
category: "yapay-zeka-ile-calisma"
order: 4
cardCount: 0
sourceFile: "19-yapay-zeka-ile-profesyonel-calisma.md"
origin: "material"
flags: []
---
Kısıtlar, modelin senin yerine karar vermesini engelleyen şeydir. Bir web işi için tipik kısıt listesi:

**Teknik**
- Stack ve sürümler (1.6): "Next.js App Router, TypeScript, Tailwind"
- Kütüphane politikası: "yeni bağımlılık ekleme" veya "sadece şu listedekiler"
- Rendering stratejisi (8.10): "bu sayfa statik üretilmeli"
- Paket boyutu (8.12): "ilk yükte 150KB JavaScript sınırını aşma"

**Tasarım**
- Ölçekler (5.3, 5.5): "spacing yalnızca 4/8/12/16/24/32/48'den, type scale 16 tabanlı 1.25 oranında"
- Token kullanımı (5.2): "ham hex veya px değeri yazma, token kullan"
- Yasaklar (19.2): "eşit üç sütunlu ikon kartı yok, gerekçesiz gradient yok, sırasız içerikte numaralandırma yok"
- Hareket (5.9): "animasyon yalnızca yön gösterme veya durum bildirme amaçlıysa"

**Erişilebilirlik** (Bölüm 6)
- "Tüm etkileşimler klavyeyle erişilebilir, focus göstergesi görünür"
- "Kontrast WCAG 2.2 AA'yı sağlamalı"
- "Dokunma hedefleri en az 24×24"
- "Anlam yalnızca renkle taşınmasın"

**Kapsam**
- Kapsam dışı (2.8): "bu işte veri katmanına dokunma"
- Dosya sınırı: "yalnızca şu bileşen dosyasını değiştir"

**Önemli:** Kısıtları her seferinde yazmak yerine çoğunu talimat dosyasına (19.3) taşı; prompt'ta yalnızca o işe özgü olanları belirt.
