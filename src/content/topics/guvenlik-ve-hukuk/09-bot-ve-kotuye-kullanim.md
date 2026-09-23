---
title: "Bot ve kötüye kullanım"
sectionNumber: "13.9"
category: "guvenlik-ve-hukuk"
order: 9
cardCount: 2
sourceFile: "13-guvenlik-ve-hukuki-yukumluluk.md"
origin: "material"
flags: []
---
### CAPTCHA / Honeypot

- **Terim (İngilizce):** CAPTCHA, honeypot field
- **Türkçesi:** Bot doğrulaması, tuzak alan
- **Tanım:** **CAPTCHA** kullanıcının insan olduğunu kanıtlatan testtir. **Honeypot**, insanların göremediği ama botların doldurduğu gizli bir form alanıdır.
- **Ne işe yarar / neden var:** Spam ve otomatik kötüye kullanımı azaltır. Honeypot'un avantajı, kullanıcıya hiçbir yük bindirmemesidir.
- **Nerede karşına çıkar:** İletişim formları (7.7), kayıt ve yorum akışlarında.
- **Örnek kullanım:** "Önce honeypot ve hız sınırı deneyelim; yetmezse CAPTCHA ekleriz."
- **Karıştırılanlar:** **CAPTCHA bir erişilebilirlik sorunudur** (Bölüm 6): görsel bulmacalar görme engelli kullanıcılar için engel oluşturur ve bilişsel yük ekler. WCAG 2.2'nin **Accessible Authentication** ölçütü (6.2) bilişsel test gerektiren doğrulamaları sınırlar. Bu yüzden CAPTCHA son çare olmalı, ilk refleks değil.
- **İlgili terimler:** Rate limiting (10.10), a11y (6.2), Contact form (7.7)

### WAF / DDoS

- **Terim (İngilizce):** WAF (Web Application Firewall), DDoS protection
- **Türkçesi:** Web uygulama güvenlik duvarı, hizmet engelleme saldırısı koruması
- **Tanım:** **WAF**, kötü niyetli görünen istekleri uygulamaya ulaşmadan filtreleyen katman. **DDoS koruması**, sistemi çökertmeyi amaçlayan yoğun trafiği emen altyapı.
- **Ne işe yarar / neden var:** İlk savunma hattı olarak çalışırlar. Modern CDN sağlayıcıları (10.11) bunları genelde birlikte sunar.
- **Nerede karşına çıkar:** Altyapı yapılandırmasında.
- **Örnek kullanım:** "CDN'in WAF'ını açalım; bilinen saldırı kalıplarını en azından baştan filtrelesin."
- **Karıştırılanlar:** WAF bir yama değildir; koddaki açığı kapatmaz, sadece bazı saldırıları engeller. "WAF var" cümlesi, güvenlik açığını mazur göstermez.
- **İlgili terimler:** CDN (10.11), Rate limiting (10.10)
