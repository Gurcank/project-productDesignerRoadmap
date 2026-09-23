---
title: "Doğrulama, temizleme, kaçırma"
sectionNumber: "13.7"
category: "guvenlik-ve-hukuk"
order: 7
cardCount: 2
sourceFile: "13-guvenlik-ve-hukuki-yukumluluk.md"
origin: "material"
flags: []
---
Üçü sık karıştırılır ama farklı işler yapar ve farklı yerlerde uygulanır.

### Input validation

- **Terim (İngilizce):** Input validation
- **Türkçesi:** Girdi doğrulama
- **Tanım:** Gelen verinin beklenen kurallara uyup uymadığının kontrol edilmesi.
- **Ne işe yarar / neden var:** İlk savunma hattı. **Kritik kural: client-side doğrulama güvenlik sağlamaz** (1.6) — atlanabilir. Sunucu tarafındaki doğrulama zorunludur; client-side yalnızca kullanıcı deneyimi içindir.
- **Nerede karşına çıkar:** Her formda ve her API ucunda. Zod (9.9) gibi araçlar bu işi yapar.
- **Örnek kullanım:** "Server action'da da doğrulama yapalım; client tarafı atlanabilir."
- **İlgili terimler:** Zod (9.9), Form validation (7.11), Server action (10.6)

### Sanitization / Escaping

- **Terim (İngilizce):** Sanitization, escaping, output encoding
- **Türkçesi:** Temizleme, kaçırma
- **Tanım:** **Sanitization** tehlikeli kısımların veriden çıkarılmasıdır (zengin metinden betik etiketlerini ayıklamak gibi). **Escaping** ise verinin, gösterildiği bağlamda kod olarak yorumlanmamasını sağlamaktır.
- **Ne işe yarar / neden var:** XSS'e (13.3) karşı asıl savunma escaping'dir ve modern framework'ler bunu varsayılan olarak yapar. Sanitization ise yalnızca kullanıcının HTML girmesine izin verildiğinde gerekir.
- **Nerede karşına çıkar:** Zengin metin editörü ve kullanıcı içeriği gösterilen yerlerde.
- **Örnek kullanım:** "Zengin metni sunucuda temizleyelim; sadece izin verilen etiketler kalsın."
- **Karıştırılanlar:** **Üçü birbirinin yerine geçmez.** Doğrulama "bu veri kabul edilebilir mi", temizleme "tehlikeli kısmı çıkar", kaçırma "gösterirken kod sayılmasın" der. Hepsi gerekir.
- **İlgili terimler:** XSS (13.3), Input validation
