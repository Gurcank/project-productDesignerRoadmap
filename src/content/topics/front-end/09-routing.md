---
title: "Routing"
sectionNumber: "8.9"
category: "front-end"
order: 9
cardCount: 3
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: []
---
Hangi adresin hangi ekranı gösterdiği. Bilgi mimarisinin (4.3) koddaki karşılığı.

### Route

- **Terim (İngilizce):** Route, routing, router
- **Türkçesi:** Yol, yönlendirme
- **Tanım:** Bir URL ile gösterilecek ekran arasındaki eşleşme.
- **Ne işe yarar / neden var:** Sitenin yapısını belirler. Tasarımcının burada bir sorumluluğu var: **hangi ekranın kendi URL'i olacağına karar vermek** (1.2). Modal içinde açılan bir içeriğin URL'i yoksa paylaşılamaz, yer imine eklenemez, arama motoru bulamaz.
- **Nerede karşına çıkar:** Sitemap ve IA çalışmasında; proje kurulumunda.
- **Örnek kullanım:** "Ürün detayı modal'da açılsın ama kendi URL'i de olsun; paylaşılabilir kalsın."
- **İlgili terimler:** URL (1.2), IA (4.3), SPA (1.7)

### Dynamic route / Nested route

- **Terim (İngilizce):** Dynamic route, nested route, route parameter
- **Türkçesi:** Dinamik yol, iç içe yol
- **Tanım:** Dinamik yol, adresin bir kısmının değişken olduğu yapıdır (`/urunler/[slug]`). İç içe yol, bir bölümün altındaki alt sayfalardır ve genelde ortak bir layout paylaşır (7.1).
- **Ne işe yarar / neden var:** Binlerce ürün için binlerce sayfa tanımlamak yerine tek bir şablon yazılır. İç içe yollar da header/sidebar'ın her sayfada yeniden çizilmemesini sağlar.
- **Nerede karşına çıkar:** Proje yapısında ve URL kurgusunda.
- **Örnek kullanım:** "Ayarlar altındaki tüm sayfalar aynı layout'u paylaşsın; sadece sağdaki içerik değişsin."
- **İlgili terimler:** Layout (7.1), Slug (1.2), Route

### Query param / Redirect

- **Terim (İngilizce):** Query parameter, redirect
- **Türkçesi:** Sorgu parametresi, yönlendirme
- **Tanım:** Query param, URL'e eklenen ek bilgi (`?filtre=kirmizi`). Redirect, bir adresin otomatik olarak başka bir adrese gönderilmesi.
- **Ne işe yarar / neden var:** Query param, **filtre ve sıralama durumunu paylaşılabilir kılar** (7.10). Redirect ise site yeniden yapılandırıldığında eski bağlantıların kırılmamasını sağlar — SEO için kritiktir (8.13).
- **Nerede karşına çıkar:** Filtre tasarımında ve site yenileme projelerinde.
- **Örnek kullanım:** "Yeni yapıya geçerken eski URL'lerden kalıcı redirect verelim; sıralamayı kaybetmeyelim."
- **İlgili terimler:** URL (1.2), Filter (7.10), SEO (8.13)
