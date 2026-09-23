---
title: "Hook, side effect, re-render"
sectionNumber: "8.8"
category: "front-end"
order: 8
cardCount: 3
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: []
---
Bu üçü React konuşmalarında sürekli geçer. **Seviye 2** terimlerdir: duyduğunda anlaman yeter.

### Hook

- **Terim (İngilizce):** Hook
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir bileşene state, yan etki veya başka yetenekler kazandıran özel işlevler. Adları `use` ile başlar (`useState`, `useEffect`).
- **Ne işe yarar / neden var:** React'in temel yapı taşları. Ekipler ayrıca **custom hook** yazar: tekrar eden mantığı (veri çekme, form yönetimi, medya sorgusu) tek yere toplarlar.
- **Nerede karşına çıkar:** Her React konuşmasında.
- **Örnek kullanım:** "Bu mantık üç bileşende tekrar ediyor; custom hook'a alalım."
- **İlgili terimler:** State, Side effect, Component

### Side effect

- **Terim (İngilizce):** Side effect
- **Türkçesi:** Yan etki
- **Tanım:** Bileşenin, ekrana çizmek dışında yaptığı işler: veri çekmek, zamanlayıcı kurmak, tarayıcı olayını dinlemek.
- **Ne işe yarar / neden var:** Bu işlerin ne zaman ve kaç kez çalışacağı yönetilmezse hata çıkar — çift istek, sızıntı, sonsuz döngü. Sık görülen hata kaynaklarından biri.
- **Nerede karşına çıkar:** Hata ayıklamada.
- **Örnek kullanım:** "Sayfa açılışında istek iki kez gidiyor; side effect bağımlılıkları yanlış tanımlanmış olabilir."
- **İlgili terimler:** Hook, Promise (8.5)

### Re-render

- **Terim (İngilizce):** Re-render
- **Türkçesi:** Yeniden çizim
- **Tanım:** State veya props değiştiğinde bileşenin kendini yeniden hesaplaması.
- **Ne işe yarar / neden var:** Normal ve gerekli bir davranıştır. Ama gereksiz yeniden çizimler, özellikle uzun listelerde, arayüzü yavaşlatır ve doğrudan **INP** metriğini etkiler (8.12).
- **Nerede karşına çıkar:** Performans tartışmalarında.
- **Örnek kullanım:** "Liste her tuş vuruşunda yeniden çiziliyor; arama girdisi takılıyor."
- **İlgili terimler:** State, INP (8.12), Virtualization
