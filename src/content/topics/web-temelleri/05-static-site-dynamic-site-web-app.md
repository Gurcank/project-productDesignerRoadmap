---
title: "Static site, dynamic site, web app"
sectionNumber: "1.5"
category: "web-temelleri"
order: 5
cardCount: 4
sourceFile: "01-web-nasil-calisir.md"
origin: "material"
flags: []
---
Bu üç kategori, bir projenin maliyetini, hızını, ekip ihtiyacını ve mimarisini belirleyen ilk ayrımdır. Projenin ilk gününde verilen karar budur.

### Static site

- **Terim (İngilizce):** Static site
- **Türkçesi:** Statik site
- **Tanım:** Herkese aynı, önceden hazırlanmış dosyaların servis edildiği site.
- **Ne işe yarar / neden var:** En hızlı, en ucuz, en güvenli seçenek. Sunucuda çalışan bir program olmadığı için saldırı yüzeyi neredeyse yoktur ve trafik arttığında çökmez.
- **Nerede karşına çıkar:** Tanıtım siteleri, portfolyolar, dokümantasyon, blog. "Statik olabilir mi?" sorusu her projede sorulmalı — cevabı evetse hayatı kolaylaştırır.
- **Örnek kullanım:** "İçerik ayda bir güncelleniyor, kullanıcı girişi yok — statik site yeter, sunucu maliyeti sıfıra iner."
- **Karıştırılanlar:** *Statik* ≠ *hareketsiz/animasyonsuz*. Statik bir sitede animasyon, video, form da olabilir. Statiklik, sayfanın sunucuda kişiye özel üretilmemesi demektir.
- **İlgili terimler:** Dynamic site, SSG (8.10), CDN (10.11)

### Dynamic site

- **Terim (İngilizce):** Dynamic site
- **Türkçesi:** Dinamik site
- **Tanım:** Sayfanın içeriğinin istek anında, kişiye veya duruma göre üretildiği site.
- **Ne işe yarar / neden var:** Kişiselleştirme, anlık veri ve kullanıcıya özel içerik gerektiğinde şart. Bedeli: sunucu maliyeti, daha yavaş ilk yanıt, bakım yükü, güvenlik sorumluluğu.
- **Nerede karşına çıkar:** E-ticaret, üyelik sistemi olan her site, panelli her yapı.
- **Örnek kullanım:** "Stok bilgisi anlık değişiyor, sayfayı statik üretemeyiz — dinamik olmak zorunda."
- **İlgili terimler:** Static site, SSR (8.10), Database (Bölüm 11)

### Web application

- **Terim (İngilizce):** Web application (web app)
- **Türkçesi:** Web uygulaması
- **Tanım:** Kullanıcının içerik okumaktan çok iş yaptığı, uygulama gibi davranan site.
- **Ne işe yarar / neden var:** Kurulum gerektirmeden, her cihazda çalışan bir uygulama sunar. Gmail, Figma, Notion bu kategoride.
- **Nerede karşına çıkar:** Ürün kararında. Bir site ile bir uygulama tasarlamak farklı disiplinlerdir: web app'te durum yönetimi, boş ekranlar, hata ekranları, yetki seviyeleri ve klavye kısayolları tasarımın merkezine gelir.
- **Örnek kullanım:** "Bu artık bir pazarlama sitesi değil, web app — onboarding ve empty state'leri baştan tasarlamamız gerekiyor."
- **Karıştırılanlar:** Sınır keskin değildir; bir sitenin bir kısmı web app olabilir (`ornek.com` tanıtım, `app.ornek.com` uygulama).
- **İlgili terimler:** SPA, Dashboard (7.12), Empty state (7.9)

### Landing page

- **Terim (İngilizce):** Landing page
- **Türkçesi:** İniş sayfası / açılış sayfası
- **Tanım:** Tek bir hedefe (kayıt, satın alma, form doldurma) odaklanmış, genelde tek sayfadan oluşan site.
- **Ne işe yarar / neden var:** Dikkat dağıtan her şeyi çıkararak dönüşüm oranını yükseltir. Bir reklam kampanyasının varış noktası olarak ayrıca üretilir.
- **Nerede karşına çıkar:** Pazarlama ekibiyle yapılan her konuşmada. Ölçütü ziyaretçi sayısı değil, dönüşüm oranıdır.
- **Örnek kullanım:** "Bu landing page'de navigasyon menüsü olmasın; kullanıcının tek yolu CTA olsun."
- **Karıştırılanlar:** *Landing page* ≠ *homepage*. Homepage sitenin ana sayfası; landing page belirli bir kampanya için üretilmiş, genelde menüsüz, tek amaçlı sayfa.
- **İlgili terimler:** CTA (7.3), Hero (7.3), Funnel (4.10)
