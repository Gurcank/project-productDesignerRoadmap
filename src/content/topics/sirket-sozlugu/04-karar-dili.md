---
title: "Karar dili"
sectionNumber: "18.4"
category: "sirket-sozlugu"
order: 4
cardCount: 5
sourceFile: "18-sirket-ortami-sozlugu.md"
origin: "material"
flags: []
---
Bir kararı tartışırken kullanılan çerçeve kelimeleri. **Bu beş kelimeyi doğru kullanmak, teknik masada ciddiye alınmanın en hızlı yoludur.**

### Constraint

- **Terim (İngilizce):** Constraint
- **Türkçesi:** Kısıt
- **Tanım:** Değiştiremeyeceğin, verili olan sınır: süre, bütçe, ekip büyüklüğü, mevcut teknoloji, yasal zorunluluk.
- **Ne işe yarar / neden var:** Kısıtları açıkça saymak, tartışmayı hayal kurmaktan çıkarır. Ayrıca kısıtlar **tasarımı kötüleştirmez, odaklar**: sınırsız zaman ve bütçe verilen projeler genelde daha iyi çıkmaz.
- **Nerede karşına çıkar:** Brief'lerde (2.5), spec'lerde (2.5), ADR'lerde (14.12).
- **Örnek kullanım:** "Kısıtlarımız: altı hafta, iki kişi, mevcut tasarım sistemi. Buna göre konuşalım."
- **Karıştırılanlar:** Bazı "kısıtlar" aslında varsayımdır. "Bunu değiştiremeyiz" cümlesi sorgulandığında sık sık çözülür.
- **İlgili terimler:** Assumption, Trade-off, Brief (2.5)

### Assumption

- **Terim (İngilizce):** Assumption
- **Türkçesi:** Varsayım
- **Tanım:** Doğru kabul edilen ama kanıtlanmamış inanç (2.4).
- **Ne işe yarar / neden var:** "Bunu varsayıyoruz" demek bir zayıflık itirafı değil, bir **risk beyanıdır**. Yazıya döküldüğünde sınanabilir hâle gelir.
- **Nerede karşına çıkar:** PRD'lerde ayrı bir başlık olarak.
- **Örnek kullanım:** "Varsayımımız: kullanıcıların çoğu masaüstünden giriyor. Yanlışsa tüm yerleşim değişir — bunu ölçelim."
- **İlgili terimler:** Hypothesis (2.3), Risk, Constraint

### Risk

- **Terim (İngilizce):** Risk, mitigation
- **Türkçesi:** Risk, azaltma önlemi
- **Tanım:** Olması muhtemel ve olursa zarar verecek durum. **Mitigation**, o riski azaltmak için önceden alınan önlem.
- **Ne işe yarar / neden var:** Riski adlandırmak onu yönetilebilir kılar. Kayıtlı bir risk sürpriz değildir; kayıtsız bir risk krizdir.
- **Nerede karşına çıkar:** Proje planlarında ve PRD'lerde.
- **Örnek kullanım:** "Risk: üçüncü parti servis lansman gününde yetişmeyebilir. Azaltma: geçici bir alternatif akış hazırlayalım."
- **İlgili terimler:** Assumption, Dependency (3.5), Graceful degradation (14.8)

### Trade-off

Detayı 9.12 ve 14.1'de. Kısaca: **hiçbir seçenek her şeyi kazandırmaz.** Bir öneriyi savunuyorsan neyi feda ettiğini söyleyebilmelisin; söyleyemiyorsan öneriyi yeterince anlamamışsındır.

### Spike / Timebox

Detayı 3.5 ve 3.3'te. Kısaca: **spike** belirsizliği azaltmak için ayrılan araştırma işi; **timebox** ona konan zaman sınırıdır. "Bilmiyoruz" cevabını "iki gün içinde öğreneceğiz"e çeviren mekanizma.
