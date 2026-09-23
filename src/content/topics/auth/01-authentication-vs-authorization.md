---
title: "Authentication vs authorization"
sectionNumber: "12.1"
category: "auth"
order: 1
cardCount: 2
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: []
---
Bu ayrım, bölümün tamamının temeli. İkisini karıştırmak, güvenlik açıklarının en yaygın kavramsal kaynağıdır.

### Authentication

- **Terim (İngilizce):** Authentication — AuthN
- **Türkçesi:** Kimlik doğrulama
- **Tanım:** "Sen kimsin?" sorusunun cevabı.
- **Ne işe yarar / neden var:** Kullanıcının iddia ettiği kişi olduğunu kanıtlar: şifre, doğrulama kodu, biyometri veya bir kimlik sağlayıcısı üzerinden.
- **Nerede karşına çıkar:** Giriş ekranında.
- **Örnek kullanım:** "Kimlik doğrulama geçti ama bu sayfaya yetkisi yok."
- **İlgili terimler:** Authorization, Session (12.2), Password (12.8)

### Authorization

- **Terim (İngilizce):** Authorization — AuthZ
- **Türkçesi:** Yetkilendirme
- **Tanım:** "Ne yapabilirsin?" sorusunun cevabı.
- **Ne işe yarar / neden var:** Kimliği doğrulanmış bir kullanıcının hangi kaynaklara erişebileceğini ve hangi işlemleri yapabileceğini belirler.
- **Nerede karşına çıkar:** Rol, izin ve ekip özelliklerinde.
- **Örnek kullanım:** "Kullanıcı giriş yapmış ama düzenleme yetkisi yok; butonu gizleyelim mi, pasif mi gösterelim?"
- **Karıştırılanlar:** **Bu ayrım tasarımda somutlaşır:** 401 kimlik doğrulama sorunudur (giriş ekranına yönlendir), 403 yetkilendirme sorunudur (giriş ekranı işe yaramaz, ayrı bir ekran gerekir) — bkz. 10.3.
- **İlgili terimler:** Authentication, RBAC (12.9), 403 (10.3)
