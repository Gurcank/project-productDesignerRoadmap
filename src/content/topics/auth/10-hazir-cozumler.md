---
title: "Hazır çözümler"
sectionNumber: "12.10"
category: "auth"
order: 10
cardCount: 2
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: ["degisken"]
---
`[DEĞİŞKEN BİLGİ]` **Bu alt bölüm hızlı eskir. Aşağıdaki bilgiler Eylül 2026 itibarıyla topladığım kaynaklara dayanıyor; kullanmadan önce doğrula.**

### Kendin yazmak mı, hazır çözüm mü

- **Tanım:** Auth'u sıfırdan yazmak ile hazır bir kütüphane veya servis kullanmak arasındaki karar.
- **Ne işe yarar / neden var:** **Genel kabul: auth'u sıfırdan yazma.** Doğru yapılması gereken çok sayıda detay var (özetleme, oturum yönetimi, jeton yenileme, hız sınırı, hesap kurtarma, kullanıcı sayımı sızıntısı) ve her biri sessizce yanlış yapılabilir. Hazır çözümler bunları test edilmiş biçimde getirir.
- **Örnek kullanım:** "Auth'u kendimiz yazmayalım; bir kütüphane alıp üstüne kendi ekranlarımızı koyalım."
- **İlgili terimler:** Trade-off (9.12), Vendor lock-in (9.12)

### Manzara

| Çözüm | Ne | Trade-off |
|---|---|---|
| **Better Auth** | TypeScript kütüphanesi; kendi veritabanında çalışır, harici servis yok. Eklenti mimarisiyle 2FA, passkey, organizasyon, magic link desteği | Kullanıcı verisi sende kalır, maliyet öngörülebilir; karşılığında arayüzü ve operasyonu sen yönetirsin. 2024'te çıktı; genç bir proje |
| **Auth.js (eski adı NextAuth)** | React ekosisteminin en yerleşik açık kaynak auth kütüphanesi | Sosyal giriş için olgun; 2FA, passkey ve RBAC gibi ileri özellikler kutudan çıkmaz. Yeni projelerde tercih edilme oranı düştü |
| **Clerk** | Barındırılan servis; hazır giriş/kayıt ekranları ve yönetim paneli getirir | En hızlı yol; karşılığında aylık aktif kullanıcı başına ödeme ve kullanıcı verisinin dışarıda tutulması |
| **Supabase Auth** | Supabase platformunun parçası | Zaten Supabase kullanıyorsan doğal seçim; RLS (11.12) ile yetkilendirmenin bir kısmını veri katmanına indirir |
| **Auth0** | Kurumsal kimlik platformu | Kurumsal özellikler ve destek güçlü; maliyet ve bağımlılık yüksek |

`[DEĞİŞKEN BİLGİ]` Ekosistemde iki önemli hareket raporlanıyor: **Auth.js'in Better Auth ile birleştiği yönünde bir duyuru (Eylül 2025)** ve **Lucia Auth'un kullanımdan kaldırıldığı.** Bu bilgileri birincil kaynaktan doğrulamadım; bir karar vermeden önce projelerin kendi sitelerine bak.

**Tasarımcı için asıl soru şu:** hazır çözümün **kendi ekranlarını mı** kullanacaksın, yoksa yalnızca arka ucunu alıp arayüzü kendin mi tasarlayacaksın? Bu, marka tutarlılığı ile hız arasındaki takastır ve proje başında karara bağlanmalıdır — sonradan değiştirmek pahalıdır.
