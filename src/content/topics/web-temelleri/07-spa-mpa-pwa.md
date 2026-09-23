---
title: "SPA, MPA, PWA"
sectionNumber: "1.7"
category: "web-temelleri"
order: 7
cardCount: 6
sourceFile: "01-web-nasil-calisir.md"
origin: "material"
flags: []
---
Bir sitenin sayfa geçişlerini nasıl yaptığına dair üç yaklaşım. Sadece teknik değil, doğrudan hissedilen bir deneyim farkı yaratır.

### SPA

- **Terim (İngilizce):** SPA — Single Page Application
- **Türkçesi:** Tek sayfa uygulaması
- **Tanım:** Tarayıcının sayfayı bir kez yükleyip sonraki tüm geçişleri sayfayı yenilemeden yaptığı yapı.
- **Ne işe yarar / neden var:** Geçişler anlık olur, beyaz ekran flaşı yaşanmaz, uygulama hissi verir. Bedeli: ilk açılış daha yavaş olabilir, SEO ek özen ister, geri tuşu ve URL yönetimi elle kurulmak zorundadır.
- **Nerede karşına çıkar:** Panel, dashboard, editör gibi ürünlerde varsayılan tercih.
- **Örnek kullanım:** "SPA olduğu için sekme değiştirince sayfa yenilenmiyor, ama URL'in de güncellendiğinden emin olalım."
- **Karıştırılanlar:** *SPA* ≠ *tek sayfalık site*. SPA'da onlarca ekran olabilir; "tek sayfa" ifadesi tarayıcının tek bir belge yüklemesini anlatır, içerik miktarını değil.
- **İlgili terimler:** MPA, Client-side routing, CSR (8.10)

### MPA

- **Terim (İngilizce):** MPA — Multi-Page Application
- **Türkçesi:** Çok sayfalı uygulama
- **Tanım:** Her sayfa geçişinde sunucudan yeni bir belge alınan klasik yapı.
- **Ne işe yarar / neden var:** Basit, sağlam, SEO açısından sorunsuz. Tarayıcının geri/ileri tuşu ve URL davranışı kutudan çıktığı gibi çalışır. Her geçişte kısa bir yükleme yaşanır.
- **Nerede karşına çıkar:** İçerik siteleri, e-ticaret, blog. Astro gibi araçlar bu yaklaşımı bilinçli olarak geri getirdi.
- **Örnek kullanım:** "İçerik ağırlıklı bir site; MPA yeterli, SPA karmaşıklığına gerek yok."
- **İlgili terimler:** SPA, SSG/SSR (8.10)

### Client-side routing

- **Terim (İngilizce):** Client-side routing
- **Türkçesi:** İstemci tarafı yönlendirme
- **Tanım:** Sayfa geçişlerinin sunucuya gidilmeden, tarayıcıda JavaScript ile yapılması.
- **Ne işe yarar / neden var:** SPA'nın anlık geçiş hissini sağlayan mekanizma. Ama URL'in doğru güncellenmesi, geri tuşunun çalışması ve ekran okuyucunun sayfa değiştiğini anlaması ayrıca ele alınmak zorundadır — bunlar erişilebilirlik kusuru olarak sık atlanır.
- **Nerede karşına çıkar:** "Geri tuşuna basınca yanlış yere gidiyor" tipi hataların kaynağı burasıdır.
- **Örnek kullanım:** "Client-side routing'de sayfa değişince focus'u başlığa taşımamız lazım, yoksa screen reader kullanıcısı geçişi fark etmiyor."
- **İlgili terimler:** SPA, Routing (8.9), Focus (6.5)

### PWA

- **Terim (İngilizce):** PWA — Progressive Web App
- **Türkçesi:** İlerici web uygulaması
- **Tanım:** Cihaza kurulabilen, çevrimdışı çalışabilen ve uygulama gibi davranabilen web sitesi.
- **Ne işe yarar / neden var:** Uygulama mağazasına girmeden uygulama benzeri deneyim sunar. Tek kod tabanıyla hem web hem "kurulu uygulama" elde edilir. Sınırı: cihazın bazı yeteneklerine erişimi native uygulamalar kadar geniş değildir ve platformdan platforma farklılık gösterir.
- **Nerede karşına çıkar:** "Mobil uygulama yapalım mı?" tartışmasının ilk alternatifi olarak gündeme gelir.
- **Örnek kullanım:** "Tam bir mobil uygulama yerine önce PWA yapalım; kurulabilir olsun, bildirim ihtiyacı çıkarsa sonra değerlendiririz."
- **Karıştırılanlar:** *PWA* ≠ *native app*. PWA web teknolojileriyle yazılır, tarayıcı üzerinde çalışır. *PWA* ≠ *responsive site*: responsive olmak yetmez; kurulabilirlik ve çevrimdışı çalışma ayrıca kurulur.
- **İlgili terimler:** Service worker, Web app manifest, Responsive (5.8)
- **Kaynak:** https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app

### Service worker

- **Terim (İngilizce):** Service worker
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Sayfanın arka planında çalışan, ağ isteklerinin arasına girebilen küçük bir program.
- **Ne işe yarar / neden var:** Çevrimdışı çalışmayı ve arka plan bildirimlerini mümkün kılan bileşen. İnternet yoksa daha önce kaydettiği içeriği gösterebilir.
- **Nerede karşına çıkar:** PWA konuşmalarında. Ayrıca bir güncellemenin kullanıcıya neden geç ulaştığının sebebi çoğu zaman eski service worker'ın önbelleğidir.
- **Örnek kullanım:** "Kullanıcılar hâlâ eski sürümü görüyor; service worker cache'ini temizlemeleri gerekiyor."
- **İlgili terimler:** PWA, Caching (10.11)
- **Kaynak:** https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API

### Web app manifest

- **Terim (İngilizce):** Web app manifest
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Sitenin cihaza kurulduğunda nasıl görüneceğini tanımlayan küçük ayar dosyası.
- **Ne işe yarar / neden var:** Uygulama adı, ikon, açılış ekranı rengi, ekran yönü gibi bilgileri taşır. Buradaki değerler senin tasarım kararlarındır — ikon setinden açılış rengine kadar.
- **Nerede karşına çıkar:** PWA kurulumunda. Ana ekrana eklenen ikonun ve uygulama adının nereden geldiği sorusunun cevabı.
- **Örnek kullanım:** "Manifest'te tema rengini marka rengiyle eşleyelim, kurulunca durum çubuğu da uyumlu görünsün."
- **İlgili terimler:** PWA, Service worker, Favicon (8.13)
- **Kaynak:** https://developer.mozilla.org/en-US/docs/Web/Manifest
