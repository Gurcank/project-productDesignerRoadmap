---
title: "HTML"
sectionNumber: "8.1"
category: "front-end"
order: 1
cardCount: 3
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: []
---
Sayfanın iskeleti. Erişilebilirliğin (Bölüm 6) ve SEO'nun (8.13) temelini burası kurar.

### Element / Tag / Attribute

- **Terim (İngilizce):** Element, tag, attribute
- **Türkçesi:** Öğe, etiket, nitelik
- **Tanım:** Element sayfadaki bir parçadır (bir başlık, bir buton). Tag onu işaretleyen kod parçasıdır. Attribute ise elemente eklenen ek bilgidir (bağlantı adresi, alt metin, tip).
- **Ne işe yarar / neden var:** Konuşma birimi bunlar. "Bu elemente `aria-label` niteliği ekle" cümlesinde geçen şey budur.
- **Nerede karşına çıkar:** Her kod incelemesinde ve DevTools'un Elements sekmesinde.
- **Örnek kullanım:** "Bu görsele `loading="lazy"` niteliği eklenmiş mi kontrol edelim."
- **İlgili terimler:** Semantic HTML, DOM (1.4)

### Semantic HTML

Detayı Bölüm 6.3'te. Özet: her öğe için işlevini ifade eden doğru elemanı kullanmak. Erişilebilirliğin, SEO'nun ve bakım kolaylığının ortak temeli. Bir `div` yığını görsel olarak her şeyi yapabilir ama makineler için hiçbir şey ifade etmez.

### Document flow

- **Terim (İngilizce):** Document flow (normal flow)
- **Türkçesi:** Belge akışı
- **Tanım:** Elemanların, hiçbir özel yerleşim kuralı verilmediğinde varsayılan olarak dizilme biçimi — blok elemanlar alt alta, satır içi elemanlar yan yana.
- **Ne işe yarar / neden var:** CSS'in çoğu, bu varsayılan akışı **değiştirmekle** ilgilidir. Akıştan çıkarmak (absolute, fixed) güçlüdür ama responsive davranışı elle yönetmeyi gerektirir — bu yüzden ölçülü kullanılır.
- **Nerede karşına çıkar:** Yerleşim tartışmalarında.
- **Örnek kullanım:** "Bu öğe akıştan çıkarılmış; o yüzden altındaki içerik onun altına kaymıyor, üstüne biniyor."
- **İlgili terimler:** Position (8.2), Flexbox (8.3)
