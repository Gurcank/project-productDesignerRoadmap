---
title: "Veri yaşam döngüsü"
sectionNumber: "11.11"
category: "veritabani"
order: 11
cardCount: 4
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: []
---
### Backup / Restore

- **Terim (İngilizce):** Backup, restore, point-in-time recovery
- **Türkçesi:** Yedek, geri yükleme
- **Tanım:** Verinin düzenli kopyalarının alınması ve gerektiğinde geri getirilmesi.
- **Ne işe yarar / neden var:** Veri kaybı, bir "ihtimal" değil bir "ne zaman" meselesidir: donanım arızası, hatalı bir migration, yanlış bir silme komutu. **Kritik nokta:** yedek almak yetmez, **geri yüklemenin denenmiş olması** gerekir. Test edilmemiş yedek, yedek sayılmaz.
- **Nerede karşına çıkar:** Operasyonel kontrol listesinde (21.8).
- **Örnek kullanım:** "Yedek alınıyor ama geri yükleme hiç denenmedi; bir tatbikat yapalım."
- **İlgili terimler:** Incident (16.9), Data retention

### Soft delete

- **Terim (İngilizce):** Soft delete, hard delete
- **Türkçesi:** Yumuşak silme, kalıcı silme
- **Tanım:** Kaydı gerçekten silmek yerine "silinmiş" olarak işaretlemek.
- **Ne işe yarar / neden var:** Kazayla silmeyi geri alınabilir kılar ve ilişkili kayıtların bozulmasını engeller (silinen kullanıcının siparişleri hâlâ anlamlı kalır). **Tasarım karşılığı:** "Çöp kutusu" özelliği, "geri al" seçeneği (4.6) ve "silinmiş kullanıcı" görünümü hep bu kararın sonucudur.
- **Nerede karşına çıkar:** İçerik ve hesap yönetiminde.
- **Örnek kullanım:** "Soft delete kullanalım, 30 gün çöp kutusunda kalsın, sonra kalıcı silinsin."
- **Karıştırılanlar:** KVKK/GDPR (13.10) kapsamında kullanıcı **silinme hakkını** kullandığında soft delete yeterli olmayabilir; gerçek silme veya anonimleştirme gerekebilir. Bu ikisi çelişebilir ve ürün kararı gerektirir.
- **İlgili terimler:** Undo (4.6), Data retention, KVKK (13.10)

### Audit log

- **Terim (İngilizce):** Audit log, audit trail
- **Türkçesi:** Denetim kaydı
- **Tanım:** Kim, ne zaman, neyi değiştirdi bilgisinin kalıcı olarak tutulması.
- **Ne işe yarar / neden var:** Kurumsal ürünlerde zorunluluktur ve ekip ürünlerinde güven üretir. Arayüzdeki karşılığı activity feed'dir (7.12).
- **Nerede karşına çıkar:** Ekip ve kurumsal ürünlerde.
- **Örnek kullanım:** "Kim hangi ayarı değiştirdi görünsün; audit log'u activity feed olarak gösterelim."
- **İlgili terimler:** Activity feed (7.12), Compliance (13.10)

### Data retention / PII

- **Terim (İngilizce):** Data retention, PII (Personally Identifiable Information)
- **Türkçesi:** Veri saklama süresi, kişisel veri
- **Tanım:** Hangi verinin ne kadar süre saklanacağı ve kişisel verinin nasıl ele alınacağı.
- **Ne işe yarar / neden var:** KVKK ve GDPR (13.10) gereği: veri **amacı için gereken süre kadar** saklanmalıdır, süresiz değil. Ayrıca ne kadar az kişisel veri toplanırsa risk o kadar azalır — bu, **tasarım aşamasında verilen bir karardır**: formda gerçekten telefon numarası gerekli mi?
- **Nerede karşına çıkar:** Form tasarımında ve hukuki uyum çalışmasında.
- **Örnek kullanım:** "Bu alanı toplamayalım; kullanmıyoruz ve topladığımız her kişisel veri bir yükümlülük."
- **İlgili terimler:** KVKK/GDPR (13.10), Soft delete, Form (7.11)
