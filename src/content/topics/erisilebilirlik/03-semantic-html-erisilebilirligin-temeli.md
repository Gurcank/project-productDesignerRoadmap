---
title: "Semantic HTML: erişilebilirliğin temeli"
sectionNumber: "6.3"
category: "erisilebilirlik"
order: 3
cardCount: 4
sourceFile: "06-erisilebilirlik-a11y.md"
origin: "material"
flags: []
---
Erişilebilirliğin en büyük kısmı, ekstra bir şey **eklemekle** değil, doğru elemanı kullanmakla sağlanır. Yardımcı teknolojiler ekranı değil, kodun yapısını okur.

### Semantic HTML

- **Terim (İngilizce):** Semantic HTML
- **Türkçesi:** Anlamsal HTML
- **Tanım:** Her öğe için, işlevini ifade eden doğru HTML elemanını kullanmak.
- **Ne işe yarar / neden var:** Doğru eleman, erişilebilirliğin çoğunu **bedava** getirir. Gerçek bir `<button>` klavyeyle odaklanabilir, Enter ve Space ile çalışır, ekran okuyucuya "buton" diye tanıtılır. Aynı görünümdeki bir `<div>`'de bunların hepsini elle yazman gerekir ve genelde eksik yazılır.
- **Nerede karşına çıkar:** Kod incelemelerinde ve a11y denetimlerinde en sık çıkan sorun kategorisi.
- **Örnek kullanım:** "Bu tıklanabilir kart `div`; klavyeyle ulaşılamıyor. Buton veya link olmalı."
- **İlgili terimler:** Landmark, Heading hierarchy, ARIA (6.4), HTML (8.1)

### Link vs Button

- **Terim (İngilizce):** Link (`<a>`) vs Button (`<button>`)
- **Türkçesi:** Bağlantı ve buton
- **Tanım:** Link kullanıcıyı **bir yere götürür**; buton bir **eylem yapar**.
- **Ne işe yarar / neden var:** Fark davranışa yansır: link yeni sekmede açılabilir, adresi kopyalanabilir, tarayıcı geçmişine girer; buton bunları yapmaz. Klavye davranışları bile farklıdır (link Enter, buton Enter ve Space). Yanlış eleman kullanmak kullanıcının beklentisini bozar.
- **Nerede karşına çıkar:** Tasarım tesliminde belirtilmesi gereken bir karar. "Bu bir link mi buton mu?" sorusunun cevabı sende.
- **Örnek kullanım:** "'Sepete ekle' buton, 'Ürün detayı' link. Görsel olarak ikisi de buton gibi görünebilir ama kod farklı olmalı."
- **Karıştırılanlar:** Görünüm ile eleman farklı şeylerdir. Bir link buton gibi **görünebilir**; önemli olan işlevi.
- **İlgili terimler:** Semantic HTML, Keyboard accessibility (6.5)

### Landmark

- **Terim (İngilizce):** Landmark (landmark region)
- **Türkçesi:** Bölge işareti
- **Tanım:** Sayfanın ana bölgelerini tanımlayan elemanlar: `header`, `nav`, `main`, `aside`, `footer`, `form`, `search`.
- **Ne işe yarar / neden var:** Ekran okuyucu kullanıcıları bu bölgeler arasında **doğrudan atlayabilir**. Görsel kullanıcı ana içeriğin nerede olduğunu bir bakışta görür; landmark, aynı bilgiyi kod düzeyinde verir.
- **Nerede karşına çıkar:** Sayfa iskeleti tanımlarında (7.1).
- **Örnek kullanım:** "Sayfada iki `main` var; tek olmalı. Diğerini `section` yapalım."
- **İlgili terimler:** Semantic HTML, Skip link (6.5), Sayfa iskeleti (7.1)

### Heading hierarchy

- **Terim (İngilizce):** Heading hierarchy
- **Türkçesi:** Başlık hiyerarşisi
- **Tanım:** `h1`–`h6` başlıklarının, içeriğin yapısını yansıtacak şekilde sırayla kullanılması.
- **Ne işe yarar / neden var:** Ekran okuyucu kullanıcılarının çoğu sayfayı **başlık listesi üzerinden** gezer — tıpkı görsel kullanıcının sayfayı tarayarak gezmesi gibi. Seviye atlanırsa (h2'den h4'e) yapı bozulur. Ayrıca başlık seviyesi **görünüm için değil, yapı için** seçilir: küçük görünmesi gereken bir h2, CSS ile küçültülür, h4 yapılmaz.
- **Nerede karşına çıkar:** Tasarım tesliminde başlık seviyelerini belirtmek senin işindir.
- **Örnek kullanım:** "Bu bölüm başlığı görsel olarak küçük ama yapıda h2; seviyeyi teslimde yazdım."
- **Karıştırılanlar:** Sayfada tek bir `h1` olması yaygın kabul gören pratiktir ve genelde sayfa başlığıdır.
- **İlgili terimler:** Semantic HTML, Visual hierarchy (4.8), SEO (8.13)
