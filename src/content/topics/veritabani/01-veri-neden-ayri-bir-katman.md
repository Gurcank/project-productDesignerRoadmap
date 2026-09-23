---
title: "Veri neden ayrı bir katman"
sectionNumber: "11.1"
category: "veritabani"
order: 1
cardCount: 2
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: []
---
### Database

- **Terim (İngilizce):** Database — DB
- **Türkçesi:** Veritabanı
- **Tanım:** Verinin kalıcı olarak, yapılandırılmış biçimde saklandığı ve sorgulanabildiği sistem.
- **Ne işe yarar / neden var:** Uygulama kapansa, sunucu yeniden başlasa veya kod tamamen değişse bile verinin kalmasını sağlar. Ayrıca aynı veriye birden fazla kullanıcının aynı anda, tutarlı biçimde erişebilmesini sağlar.
- **Nerede karşına çıkar:** Her dinamik projede.
- **Örnek kullanım:** "Bu bilgiyi nerede saklıyoruz? Veritabanında mı, sadece tarayıcıda mı?"
- **İlgili terimler:** Persistence, Schema (11.4), Dynamic site (1.5)

### Persistence

- **Terim (İngilizce):** Persistence, persistent storage
- **Türkçesi:** Kalıcılık
- **Tanım:** Verinin, onu üreten süreç sona erdikten sonra da var olmaya devam etmesi.
- **Ne işe yarar / neden var:** **Tasarım açısından somut sorusu şudur:** kullanıcı sekmeyi kapatıp geri geldiğinde ne kaybolur? Yarım kalmış bir form kaybolacak mı? Sepet duruyor mu? Filtre seçimleri hatırlanıyor mu? Bunların her biri bir kalıcılık kararıdır ve tasarımda belirtilmelidir.
- **Nerede karşına çıkar:** Form, sepet ve taslak özelliklerinde.
- **Örnek kullanım:** "Uzun formu taslak olarak kaydedelim mi? Kullanıcı yanlışlıkla kapatırsa her şey gitmesin."
- **İlgili terimler:** Database, Multi-step form (7.11), Draft
