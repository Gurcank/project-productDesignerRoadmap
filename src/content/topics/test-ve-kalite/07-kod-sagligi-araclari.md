---
title: "Kod sağlığı araçları"
sectionNumber: "17.7"
category: "test-ve-kalite"
order: 7
cardCount: 3
sourceFile: "17-test-kalite-ve-kod-sagligi.md"
origin: "material"
flags: []
---
### Linter / Formatter

- **Terim (İngilizce):** Linter (ESLint), formatter (Prettier)
- **Türkçesi:** Kod denetleyici, biçimlendirici
- **Tanım:** **Linter** olası hataları ve kural ihlallerini yakalar. **Formatter** kodun biçimini (girinti, tırnak, satır uzunluğu) otomatik olarak standartlaştırır.
- **Ne işe yarar / neden var:** Formatter'ın asıl faydası estetik değil, **tartışmayı ortadan kaldırmasıdır:** kod incelemelerinde biçim tartışması yapılmaz çünkü karar araca devredilmiştir. Bu, insan dikkatini asıl konulara bırakır.
- **Nerede karşına çıkar:** Her modern projede.
- **Örnek kullanım:** "Biçim yorumları yapmayalım; formatter zaten hallediyor, biz mantığa bakalım."
- **Karıştırılanlar:** Linter kuralları da erişilebilirlik kontrolü yapabilir — eksik `alt` metni gibi sorunları yazarken yakalayan eklentiler vardır.
- **İlgili terimler:** Type check, CI gate, Code review (17.10)

### Type check

- **Terim (İngilizce):** Type checking
- **Türkçesi:** Tip kontrolü
- **Tanım:** TypeScript'in (8.6) tip hatalarını derleme öncesinde yakalaması.
- **Ne işe yarar / neden var:** Bütün bir hata sınıfını ortadan kaldırır: yanlış alan adı, eksik alan, beklenmeyen `null`. Bir test yazmaya gerek kalmadan, yazarken yakalanır.
- **Nerede karşına çıkar:** Editörde anlık, CI'da kapı olarak.
- **Örnek kullanım:** "Tip kontrolü CI'da zorunlu olsun; `any` ile geçiştirmeyelim."
- **İlgili terimler:** TypeScript (8.6), Zod (9.9)

### Pre-commit hook / CI gate

- **Terim (İngilizce):** Pre-commit hook, CI gate, required check
- **Türkçesi:** Commit öncesi kanca, CI kapısı
- **Tanım:** **Pre-commit hook**, commit atılmadan önce yerel olarak çalışan kontrol. **CI gate**, PR'ın birleştirilebilmesi için geçmesi zorunlu olan kontrol (15.5).
- **Ne işe yarar / neden var:** İkisi de kalite kontrolünü **hatırlamaktan çıkarıp mekanizmaya bağlar.** Pre-commit hızlı geri bildirim verir; CI gate ise atlanamaz olduğu için asıl güvencedir.
- **Nerede karşına çıkar:** Depo yapılandırmasında.
- **Örnek kullanım:** "Erişilebilirlik taramasını ve performans bütçesini CI gate yapalım; uyarı olarak kalırsa kimse bakmıyor."
- **Karıştırılanlar:** **Kapı sayısı arttıkça yayın yavaşlar.** Her kontrolün bir maliyeti var; hepsini zorunlu yapmak, ekibi kapıları atlatmanın yollarını aramaya iter. Zorunlu olanlar gerçekten kritik olanlarla sınırlı tutulmalıdır.
- **İlgili terimler:** Branch protection (15.5), Definition of Done (2.10), Pipeline (16.2)
