---
title: "MFA / 2FA"
sectionNumber: "12.7"
category: "auth"
order: 7
cardCount: 2
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: []
---
### MFA

- **Terim (İngilizce):** MFA (Multi-Factor Authentication), 2FA (Two-Factor Authentication)
- **Türkçesi:** Çok faktörlü kimlik doğrulama
- **Tanım:** Girişte birden fazla kanıt istenmesi: bildiğin bir şey (şifre), sahip olduğun bir şey (telefon, güvenlik anahtarı), olduğun bir şey (parmak izi).
- **Ne işe yarar / neden var:** Şifre çalınsa bile hesabı korur. Hesap ele geçirmelere karşı en etkili tek önlem olarak kabul edilir.
- **Nerede karşına çıkar:** Hesap güvenliği ayarlarında; kurumsal ürünlerde zorunlu olabilir.
- **Örnek kullanım:** "MFA'yı isteğe bağlı sunalım ama yönetici hesapları için zorunlu olsun."
- **Karıştırılanlar:** **Yöntemler eşit güvenlikte değildir.** Genel sıralama: FIDO2/passkey en güçlü, ardından kimlik doğrulayıcı uygulama (TOTP), en sonda SMS. SMS hiç yoktan iyidir ama kimlik avına dayanıklı sayılmaz (12.6).
- **İlgili terimler:** TOTP, Passkey (12.6), Backup code

### TOTP / Backup code

- **Terim (İngilizce):** TOTP (Time-based One-Time Password), authenticator app, backup code, recovery code
- **Türkçesi:** Zaman tabanlı tek kullanımlık kod, yedek kod
- **Tanım:** Kimlik doğrulayıcı uygulamanın ürettiği, 30 saniyede bir değişen kod. Yedek kodlar ise cihaz kaybedildiğinde kullanılmak üzere önceden verilen tek kullanımlık kodlardır.
- **Ne işe yarar / neden var:** SMS'e göre daha güvenlidir çünkü telefon numarasına değil cihaza bağlıdır. **Yedek kodlar zorunludur:** MFA'yı yedek yol olmadan sunmak, kullanıcıları hesaplarından kalıcı olarak kilitleme riski yaratır.
- **Nerede karşına çıkar:** Güvenlik ayarları ekranında.
- **Örnek kullanım:** "MFA kurulumunda yedek kodları göster ve indirmeye zorla; kullanıcı geçemeden devam edemesin."
- **Karıştırılanlar:** **Kurulum akışı tasarımı kritiktir:** QR kod, elle giriş alternatifi, doğrulama adımı ve yedek kodların gösterilmesi — dördü de gerekir. Kullanıcı yedek kodları kaydetmeden akışı bitirebiliyorsa, destek yükü ve hesap kaybı kaçınılmazdır.
- **İlgili terimler:** MFA, Account recovery (12.11)
