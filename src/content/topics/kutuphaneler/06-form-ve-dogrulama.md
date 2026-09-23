---
title: "Form ve doğrulama"
sectionNumber: "9.9"
category: "kutuphaneler"
order: 6
cardCount: 3
sourceFile: "09-framework-ve-kutuphane-haritasi.md"
origin: "material"
flags: ["degisken"]
---
### React Hook Form

- **Terim (İngilizce):** React Hook Form (RHF)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** React'te form durumunu ve doğrulamasını yöneten kütüphane.
- **Ne işe yarar / neden var:** Kontrolsüz bileşen yaklaşımını (8.7) kullandığı için her tuş vuruşunda tüm formu yeniden çizmez; uzun formlarda performans farkı belirgindir. Doğrulama, hata mesajları ve gönderim akışı hazır gelir.
- **Nerede karşına çıkar:** React projelerinde form yönetiminin yaygın seçimi.
- **Örnek kullanım:** "20 alanlı form için RHF kullanalım; her tuşta yeniden çizim olmasın."
- **İlgili terimler:** Zod, Form validation (7.11), Controlled/uncontrolled (8.7)

### Zod

- **Terim (İngilizce):** Zod
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Verinin beklenen yapıya uyup uymadığını **çalışma zamanında** kontrol eden şema doğrulama kütüphanesi.
- **Ne işe yarar / neden var:** TypeScript tipleri yalnızca yazarken korur (8.6); sunucudan beklenmedik veri gelirse bir şey yapmaz. Zod bu boşluğu doldurur: aynı şemayı hem form doğrulaması hem API yanıtı kontrolü için kullanabilirsin. **Tasarımcı için anlamı:** doğrulama kuralları (minimum uzunluk, format, zorunluluk) tek yerde tanımlanır ve hata mesajları buradan gelir — yani mesaj metinlerini bir yerde toplu olarak yazabilirsin.
- **Nerede karşına çıkar:** Form ve API sınırlarında; server action doğrulamalarında (10.6).
- **Örnek kullanım:** "Zod şemasındaki hata mesajlarını gözden geçirelim; kullanıcıya teknik dille konuşuyoruz."
- **Karıştırılanlar:** *Zod* (çalışma zamanı doğrulama) ≠ *TypeScript* (derleme zamanı tip kontrolü). İkisi farklı anlarda korur ve birbirinin yerine geçmez.
- **İlgili terimler:** TypeScript (8.6), Input validation (13.7), Error message (4.9)

### Formik / Yup

- **Terim (İngilizce):** Formik, Yup
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** RHF ve Zod'dan önceki nesil form ve doğrulama kütüphaneleri.
- **Ne işe yarar / neden var:** Hâlâ çok sayıda projede kullanılıyor; adlarını duyduğunda tanıman yeterli. `[DEĞİŞKEN BİLGİ]` Yeni projelerde tercih edilme oranları düştü; güncel durumlarını kontrol et.
- **Nerede karşına çıkar:** Eski React projelerinde.
- **Örnek kullanım:** "Proje Formik kullanıyor; yeni formları RHF'ye geçirmeden önce tutarlılığı düşünelim."
- **İlgili terimler:** React Hook Form, Zod
