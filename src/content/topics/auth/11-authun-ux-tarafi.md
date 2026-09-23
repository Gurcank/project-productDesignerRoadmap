---
title: "Auth'un UX tarafı"
sectionNumber: "12.11"
category: "auth"
order: 11
cardCount: 5
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: []
---
Bu alt bölüm terim listesi değil, **kontrol listesi**. Auth akışında tasarımcının cevaplaması gereken sorular.

### Giriş ve kayıt akışı

- **Kaç yöntem sunulacak?** Her ek yöntem karar yükü ekler (4.7). İki-üç seçenek genelde yeterlidir.
- **Kayıt ve giriş ayrı ekran mı, tek ekran mı?** Tek alanlı "e-postanı gir" yaklaşımı, kullanıcının hangi durumda olduğunu sistemin belirlemesini sağlar ve "hesabım var mıydı?" sorusunu ortadan kaldırır.
- **Kullanıcı hangi yöntemle kayıt olduğunu unutursa?** "Bu e-posta Google ile kayıtlı" yönlendirmesi gerekir (12.5).
- **Şifre alanında görünürlük düğmesi var mı?** Yazdığını görememek hata oranını artırır.
- **Yapıştırma çalışıyor mu?** Şifre ve OTP alanlarında yapıştırmayı engellemek hem şifre yöneticisi kullanımını hem erişilebilirliği (6.2) bozar.

### Hata mesajları

- **Kullanıcı sayımı sızıntısına (user enumeration) dikkat.** "Bu e-posta kayıtlı değil" mesajı kullanıcıya yardımcı olur ama saldırgana bilgi verir. Giriş ve şifre sıfırlama ekranlarında genelde belirsiz mesaj tercih edilir; kayıt ekranında ise zaten belli olduğu için netlik verilebilir.
- **Hata mesajı ne yapılacağını söylemeli** (4.9). "Giriş başarısız" yetersizdir.
- **Kilitlenme durumu tasarlanmalı.** Çok fazla deneme sonrası (10.10) ne olacak, kullanıcı ne kadar bekleyecek?

### Oturum ve süre

- **Oturum ne kadar sürecek?** Bir bankacılık uygulaması ile bir not uygulaması aynı olamaz. Kısa oturum güvenli ama sinir bozucudur.
- **"Beni hatırla" seçeneği olacak mı?** Varsa ne kadar süreliğine?
- **Oturum sona erdiğinde ne olacak?** Kullanıcı yarım kalmış bir formdaysa verisi kaybolmamalıdır — giriş sonrası aynı yere ve aynı veriyle dönmesi gerekir. Bu, en sık atlanan auth UX detayıdır.
- **"Tüm cihazlardan çıkış yap" özelliği var mı?** (Session tabanlı yaklaşımın avantajı, 12.2.)

### Hesap kurtarma

- **Kullanıcı MFA cihazını kaybederse ne olacak?** Yedek kodlar zorunludur (12.7).
- **Passkey tek yöntemse cihaz kaybında ne olacak?** Alternatif bir yol bırakılmalıdır (12.6).
- **Kurtarma akışı, güvenliğin en zayıf halkasıdır.** Bir hesabı ele geçirmenin en kolay yolu genelde şifreyi kırmak değil, kurtarma akışını istismar etmektir.

### Bildirimler

- Şifre değişti, yeni cihazdan giriş yapıldı, MFA kapatıldı, e-posta değişti — **bunların hepsi kullanıcıya bildirilmelidir.** Bu bildirimler, hesap ele geçirmenin fark edilmesini sağlayan tek mekanizma olabilir.
