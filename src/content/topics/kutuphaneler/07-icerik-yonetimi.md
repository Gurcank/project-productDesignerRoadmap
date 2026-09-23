---
title: "İçerik yönetimi"
sectionNumber: "9.10"
category: "kutuphaneler"
order: 7
cardCount: 2
sourceFile: "09-framework-ve-kutuphane-haritasi.md"
origin: "material"
flags: ["degisken"]
---
### CMS / Headless CMS

- **Terim (İngilizce):** CMS (Content Management System), headless CMS
- **Türkçesi:** İçerik yönetim sistemi
- **Tanım:** İçerik editörlerinin, geliştiriciye ihtiyaç duymadan içerik girmesini sağlayan sistem. **Headless** olanı içeriği yalnızca veri olarak sunar; görünümü senin ön yüzün belirler.
- **Ne işe yarar / neden var:** İçeriğin sahipliğini pazarlama ekibine devreder. Klasik CMS (WordPress gibi) içerik ve görünümü birlikte yönetir; headless CMS ikisini ayırır — böylece aynı içerik web, mobil ve başka kanallarda kullanılabilir.
- **Nerede karşına çıkar:** Blog, ürün kataloğu ve pazarlama sitelerinde. Sanity, Contentful, Strapi, Payload yaygın adlar. `[DEĞİŞKEN BİLGİ]` Ürün isimleri, fiyatlandırma ve özellikler sık değişir.
- **Örnek kullanım:** "Blog içeriğini headless CMS'e alalım; her yazı için deploy beklemesinler."
- **Karıştırılanlar:** **Tasarımcı için önemli:** CMS'te tanımlanan alan yapısı, tasarımın esnekliğini belirler. Alanları önceden düşünmezsen editör beklenmedik içerik girer ve tasarım bozulur. Bu yüzden içerik modeli, tasarımla birlikte kurulmalıdır (4.3).
- **İlgili terimler:** IA (4.3), Edge case (4.4), SSG/ISR (8.10)

### MDX

- **Terim (İngilizce):** MDX
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Markdown içeriğin içine etkileşimli bileşen gömülebilmesini sağlayan format.
- **Ne işe yarar / neden var:** Dokümantasyon ve teknik blog için ideal: metin akışının içine canlı bir demo, bir uyarı kutusu (7.5) veya bir grafik konabilir.
- **Nerede karşına çıkar:** Dokümantasyon sitelerinde ve geliştirici bloglarında.
- **Örnek kullanım:** "Dokümantasyonu MDX ile yazalım; kod örneklerinin yanına çalışan demo koyabilelim."
- **İlgili terimler:** CMS, Code block (7.13)
