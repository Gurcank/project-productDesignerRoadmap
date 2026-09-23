---
title: "Savunma ilkeleri"
sectionNumber: "13.8"
category: "guvenlik-ve-hukuk"
order: 8
cardCount: 3
sourceFile: "13-guvenlik-ve-hukuki-yukumluluk.md"
origin: "material"
flags: []
---
### Principle of least privilege

- **Terim (İngilizce):** Principle of least privilege — PoLP
- **Türkçesi:** En az ayrıcalık ilkesi
- **Tanım:** Her kullanıcıya, servise ve anahtara **yalnızca işini yapması için gereken** yetkinin verilmesi.
- **Ne işe yarar / neden var:** Bir hesap veya anahtar ele geçirildiğinde hasarı sınırlar. **Tasarım karşılığı:** varsayılan rolün ne olacağı bir güvenlik kararıdır. Yeni davet edilen bir kullanıcı varsayılan olarak yönetici mi oluyor, yoksa en dar yetkiyle mi başlıyor?
- **Nerede karşına çıkar:** Rol tasarımında (12.9), API anahtarı kapsamlarında, bulut izinlerinde.
- **Örnek kullanım:** "Davet edilen kullanıcı varsayılan olarak 'Member' olsun; 'Admin' bilinçli bir seçim gerektirsin."
- **İlgili terimler:** RBAC (12.9), Scope (12.9)

### Defense in depth

- **Terim (İngilizce):** Defense in depth
- **Türkçesi:** Katmanlı savunma
- **Tanım:** Tek bir korumaya güvenmek yerine birden fazla bağımsız katman kurmak.
- **Ne işe yarar / neden var:** Her koruma bir gün başarısız olabilir. Client-side doğrulama + server-side doğrulama + veritabanı kısıtı (11.5) üçlüsü, bunun tipik örneğidir: biri atlanırsa diğerleri devrede kalır.
- **Nerede karşına çıkar:** Mimari kararlarda.
- **Örnek kullanım:** "Yetki kontrolü hem middleware'de hem sorgu seviyesinde olsun; tek katmana güvenmeyelim."
- **İlgili terimler:** Least privilege, RLS (11.12), Input validation (13.7)

### Fail securely

- **Terim (İngilizce):** Fail securely, fail closed
- **Türkçesi:** Güvenli başarısız olma
- **Tanım:** Bir kontrol hata verdiğinde, sistemin **erişimi reddedecek** biçimde davranması.
- **Ne işe yarar / neden var:** Yetki servisi çöktüğünde herkesi içeri almak yerine kimseyi almamak gerekir. OWASP 2025'teki "beklenmedik durumların kötü yönetilmesi" kategorisi (A10) tam olarak bu tür sorunları kapsıyor.
- **Nerede karşına çıkar:** Hata yönetimi tasarımında.
- **Örnek kullanım:** "Yetki servisi yanıt vermezse erişimi kapatalım ve kullanıcıya açıklayıcı bir hata gösterelim."
- **İlgili terimler:** Error state (7.9), Defense in depth
