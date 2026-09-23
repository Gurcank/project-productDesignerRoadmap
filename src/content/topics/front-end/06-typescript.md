---
title: "TypeScript"
sectionNumber: "8.6"
category: "front-end"
order: 6
cardCount: 2
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: ["degisken"]
---
### TypeScript

- **Terim (İngilizce):** TypeScript — TS
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** JavaScript'in, değerlerin türünü (metin mi, sayı mı, hangi yapıda nesne mi) önceden tanımlamayı sağlayan sürümü.
- **Ne işe yarar / neden var:** Hataları çalışma zamanında değil **yazarken** yakalar: yanlış alan adı, eksik alan, beklenmeyen `null`. Büyük projelerde bakım maliyetini belirgin biçimde düşürür.
- **Nerede karşına çıkar:** Modern web projelerinin çoğunda varsayılan. `[DEĞİŞKEN BİLGİ]` Ekosistem hızlı hareket ediyor; dil özellikleri ve araç desteği değişiyor.
- **Örnek kullanım:** "Stack TypeScript olsun; API yanıtlarının tiplerini tanımlarsak alan adı hataları derlemede yakalanır."
- **Karıştırılanlar:** TypeScript tarayıcıda çalışmaz; derlenerek JavaScript'e çevrilir (8.11, transpiler). Ayrıca tip güvenliği **çalışma zamanında** garanti değildir: sunucudan beklenmedik veri gelirse tip tanımı onu durdurmaz — bunun için ayrıca doğrulama gerekir (9.9, Zod).
- **İlgili terimler:** Type safety, Transpiler (8.11), Zod (9.9)

### Type / Interface

- **Terim (İngilizce):** Type, interface, type safety
- **Türkçesi:** Tip, arayüz tanımı, tip güvenliği
- **Tanım:** Bir verinin hangi alanlardan oluştuğunu tanımlayan yapı.
- **Ne işe yarar / neden var:** **Tasarımcı için değeri şudur:** tip tanımı, bir nesnenin hangi bilgilere sahip olduğunun listesidir. Bir kart tasarlarken "bu alanda ne var, boş olabilir mi?" sorusunun cevabı tip tanımında yazar.
- **Nerede karşına çıkar:** Kod incelemelerinde ve API sözleşmesi konuşmalarında (10.4).
- **Örnek kullanım:** "Tipe baktım: `description` opsiyonel. Boş olduğunda kartın nasıl görüneceğini de tasarlayalım."
- **İlgili terimler:** TypeScript, Contract (10.4), Edge case (4.4)
