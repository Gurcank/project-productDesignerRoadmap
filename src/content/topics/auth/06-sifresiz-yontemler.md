---
title: "Şifresiz yöntemler"
sectionNumber: "12.6"
category: "auth"
order: 6
cardCount: 3
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: ["degisken"]
---
Şifreyi tamamen ortadan kaldıran veya ikinci plana atan yaklaşımlar. **Sektörün gittiği yön burası.**

### Magic link

- **Terim (İngilizce):** Magic link
- **Türkçesi:** Sihirli bağlantı
- **Tanım:** Kullanıcının e-posta adresine gönderilen ve tıklandığında doğrudan giriş yaptıran tek kullanımlık bağlantı.
- **Ne işe yarar / neden var:** Şifre yönetimini tamamen ortadan kaldırır. Nadiren giriş yapılan ürünlerde iyi çalışır.
- **Nerede karşına çıkar:** SaaS ürünlerinde ve içerik platformlarında.
- **Örnek kullanım:** "Magic link ekleyelim; kullanıcılarımız ayda bir giriyor, şifre hatırlamıyorlar."
- **Karıştırılanlar:** **Tasarım açısından zor bir akıştır:** kullanıcı sekmeyi terk edip e-postasına gider ve geri döndüğünde bağlamı kaybolabilir. Ayrıca e-posta gecikebilir veya spam'e düşebilir. Bekleme ekranı, "e-postayı tekrar gönder" seçeneği ve gönderim sayacı zorunludur.
- **İlgili terimler:** OTP, Email deliverability, Loading state (7.9)

### OTP

- **Terim (İngilizce):** OTP — One-Time Password
- **Türkçesi:** Tek kullanımlık kod
- **Tanım:** E-posta veya SMS ile gönderilen, kısa süre geçerli sayısal kod.
- **Ne işe yarar / neden var:** Magic link'e göre avantajı, kullanıcının **aynı sekmede kalmasıdır** — kodu okuyup yazar, bağlam kopmaz. Mobilde özellikle iyi çalışır.
- **Nerede karşına çıkar:** Kayıt, giriş ve iki adımlı doğrulamada.
- **Örnek kullanım:** "6 haneli OTP kullanalım; kod alanları otomatik ilerlesin ve yapıştırma çalışsın."
- **Karıştırılanlar:** **Kod giriş ekranı tasarımının bilinen tuzakları:** yapıştırmayı engellememek (WCAG 2.2'nin Accessible Authentication ölçütü bunu ilgilendirir, 6.2), otomatik doldurmayı desteklemek, geri sayımlı "tekrar gönder" butonu koymak ve yanlış kod girildiğinde alanı temizleyip odağı başa almak.
- `[DEĞİŞKEN BİLGİ]` Güvenlik tarafında önemli bir not: **SMS ile gönderilen kodlar artık zayıf kabul ediliyor.** NIST'in güncel dijital kimlik kılavuzu SMS'i "kısıtlı doğrulayıcı" olarak sınıflandırıyor; SIM değiştirme saldırılarına açık olduğu için kimlik avına dayanıklı sayılmıyor. Mümkünse kimlik doğrulayıcı uygulama (TOTP) veya passkey tercih edilmeli.
- **İlgili terimler:** MFA (12.7), Passkey, Accessible Authentication (6.2)

### Passkey / WebAuthn

- **Terim (İngilizce):** Passkey, WebAuthn, FIDO2
- **Türkçesi:** Geçiş anahtarı
- **Tanım:** Şifre yerine, cihazda saklanan bir kriptografik anahtar çiftiyle giriş yapma yöntemi. Kullanıcı parmak izi, yüz tanıma veya cihaz PIN'i ile anahtarı kullanmaya izin verir.
- **Ne işe yarar / neden var:** **Kimlik avına yapısal olarak dayanıklıdır.** Anahtar, sitenin alan adına kriptografik olarak bağlıdır; sahte bir giriş sayfasında otomatik olarak çalışmaz. Ayrıca sunucuda çalınabilecek bir şifre yoktur — sunucu yalnızca genel anahtarı saklar, özel anahtar cihazdan hiç çıkmaz.
- **Nerede karşına çıkar:** Büyük platformlarda yaygınlaştı; modern auth kütüphanelerinin çoğu destekliyor.
- **Örnek kullanım:** "Passkey ekleyelim ama şifreyi de bırakalım; kullanıcı cihazını kaybederse alternatif yolu olsun."
- `[DEĞİŞKEN BİLGİ]` NIST'in güncel kılavuzunun, bulut üzerinden senkronize edilen passkey'leri AAL2 seviyesinde tanıdığı raporlanıyor. Bu, kurumsal ve kamu tarafında benimsemeyi hızlandıran bir gelişme.
- **Karıştırılanlar:** **Tasarım tarafında en zor kısmı kurtarma akışıdır:** kullanıcı cihazını kaybederse ne olacak? Passkey'i tek yöntem yapmak riskli olabilir; genelde bir yedek yöntem (e-posta OTP, yedek kod) birlikte sunulur. Ayrıca kullanıcılara "passkey" kelimesi tanıdık gelmeyebilir; arayüz metni (4.9) bunu açıklamalıdır.
- **İlgili terimler:** MFA (12.7), Account recovery (12.11), Password (12.8)
