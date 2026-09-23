---
title: "Clean code ilkeleri"
sectionNumber: "17.8"
category: "test-ve-kalite"
order: 8
cardCount: 3
sourceFile: "17-test-kalite-ve-kod-sagligi.md"
origin: "material"
flags: []
---
Kod yazmayacaksın ama bu ilkeler bir PR'ı değerlendirirken ve senin kendi alanındaki (tasarım sistemi) düzeni kurarken işe yarar — **aynı ilkeler orada da geçerli.**

### Anlamlı isimlendirme

- **Terim (İngilizce):** Naming
- **Tanım:** Değişken, fonksiyon ve bileşen adlarının ne yaptıklarını açıkça söylemesi.
- **Ne işe yarar / neden var:** Kodun büyük kısmı yazılmaktan çok **okunur**; iyi isim, yoruma olan ihtiyacı ortadan kaldırır. **Tasarım karşılığı doğrudan:** token adları (5.2) ve bileşen adları (5.10) da aynı kurala tabidir — `color-4` kötü, `color-text-danger` iyi.
- **Örnek kullanım:** "Bu prop adı ne yaptığını söylemiyor; `flag` yerine `isDisabled` olsun."
- **İlgili terimler:** Design token (5.2), Component (8.7)

### Tek sorumluluk / DRY / Erken return

- **Terim (İngilizce):** Single responsibility, DRY (Don't Repeat Yourself), early return, magic number
- **Türkçesi:** Tek sorumluluk, tekrar etme, erken çıkış, sihirli sayı
- **Tanım:** **Tek sorumluluk**: bir parça tek bir iş yapmalı. **DRY**: aynı mantık birden fazla yerde tekrarlanmamalı. **Erken return**: hata ve istisna durumları başta ayıklanıp asıl mantık iç içe geçmeden yazılmalı. **Magic number**: koda gömülmüş, ne anlama geldiği belirsiz sabit sayı.
- **Ne işe yarar / neden var:** Hepsi aynı hedefe hizmet eder: kodun okunabilir ve değiştirilebilir kalması. **Bunlar tasarım sistemine birebir çevrilir:** tek sorumluluk = bir bileşen tek işi yapar (5.1); DRY = aynı boşluk değeri 40 yerde tekrarlanmaz, token'dan gelir (5.2); magic number = `margin: 22px` yerine ölçekten bir değer (5.5).
- **Nerede karşına çıkar:** Kod incelemelerinde.
- **Örnek kullanım:** "Bu 22px sihirli sayı; spacing ölçeğinden bir değer kullanalım."
- **Karıştırılanlar:** **DRY aşırıya kaçırılabilir.** İki şey bugün aynı görünüyor diye birleştirmek, yarın farklılaştıklarında ikisini de bozan bir soyutlama üretir. "Erken soyutlama, kopyalamadan pahalıdır" yaygın bir karşı-ilkedir.
- **İlgili terimler:** Design token (5.2), Spacing scale (5.5), Refactor (17.9)

### Yorumlar

- **Terim (İngilizce):** Code comments
- **Türkçesi:** Kod yorumları
- **Tanım:** Kodun içine yazılan açıklamalar.
- **Ne işe yarar / neden var:** **İyi yorum "ne yaptığını" değil "neden öyle yaptığını" açıklar** — ne yaptığı zaten kodda yazıyor. "Neden" ise kodda görünmez: hangi kısıt yüzünden, hangi hatayı önlemek için, hangi kararın sonucu olarak. Bu, commit mesajları (15.8) ve ADR'ler (14.12) için de geçerli olan aynı ilkedir.
- **Nerede karşına çıkar:** Kod incelemelerinde.
- **Örnek kullanım:** "Yorum 'diziyi döndürüyor' diyor; bunu zaten görüyoruz. Neden bu sırayla döndüğünü yazsın."
- **İlgili terimler:** ADR (14.12), Commit convention (15.8)
