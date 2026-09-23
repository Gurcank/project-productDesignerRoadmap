---
title: "Cookie"
sectionNumber: "12.3"
category: "auth"
order: 3
cardCount: 3
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: ["emin-degil"]
---
Tarayıcının, sunucudan gelen küçük bir bilgiyi saklayıp sonraki her istekte geri göndermesi.

### Cookie

- **Terim (İngilizce):** Cookie
- **Türkçesi:** Çerez
- **Tanım:** Tarayıcıda saklanan ve aynı siteye yapılan her istekte otomatik olarak gönderilen küçük veri parçası.
- **Ne işe yarar / neden var:** Oturum kimliğini taşımanın standart yolu. Otomatik gönderilmesi hem avantaj (kod yazmaya gerek yok) hem risktir (CSRF, 13.3).
- **Nerede karşına çıkar:** Her oturumlu uygulamada. Ayrıca çerez onayı (7.7) hukuki bir konudur (13.10).
- **Örnek kullanım:** "Oturum çerezini httpOnly yapalım; JavaScript erişemesin."
- **İlgili terimler:** Session (12.2), Cookie banner (7.7), CSRF (13.3)

### Cookie güvenlik bayrakları

- **Terim (İngilizce):** `httpOnly`, `Secure`, `SameSite`
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir çerezin nasıl korunacağını belirleyen ayarlar:
  - **httpOnly** — JavaScript bu çereze erişemez. Bir XSS açığı (13.3) oluşsa bile oturum çalınamaz.
  - **Secure** — çerez yalnızca HTTPS üzerinden gönderilir.
  - **SameSite** — çerezin başka sitelerden yapılan isteklerde gönderilip gönderilmeyeceğini belirler; CSRF'e (13.3) karşı temel savunma.
- **Ne işe yarar / neden var:** Üçü birlikte, oturum çerezini korumanın standart yoludur. Üçü de olmayan bir oturum çerezi ciddi bir açıktır.
- **Nerede karşına çıkar:** Güvenlik denetimlerinde.
- **Örnek kullanım:** "Çerez ayarlarını kontrol edelim: httpOnly, Secure ve SameSite üçü de olmalı."
- **İlgili terimler:** XSS (13.3), CSRF (13.3), HTTPS (1.3)

### localStorage'da token tutmak

- **Terim (İngilizce):** Token in localStorage
- **Türkçesi:** Tarayıcı deposunda jeton saklamak
- **Tanım:** Erişim jetonunun, çerez yerine tarayıcının yerel deposunda saklanması.
- **Ne işe yarar / neden var:** Yaygın bir kalıp ama **riskli** kabul edilir: `localStorage`'a JavaScript erişebilir, dolayısıyla sayfada bir XSS açığı (13.3) varsa saldırgan jetonu okuyup çalabilir. httpOnly çerez bu riski ortadan kaldırır çünkü JavaScript ona erişemez.
- **Nerede karşına çıkar:** Güvenlik incelemelerinde sık çıkan bulgu.
- **Örnek kullanım:** "Token localStorage'da duruyor; httpOnly çereze taşımayı değerlendirelim."
- **Karıştırılanlar:** Bu konu tamamen siyah-beyaz değildir ve mimariye göre farklı yaklaşımlar savunulur. `[EMİN DEĞİLİM]` Tek doğru cevap gibi sunma; ama "XSS varsa localStorage'daki jeton okunabilir" kısmı tartışmasızdır.
- **İlgili terimler:** XSS (13.3), Cookie, JWT (12.4)
