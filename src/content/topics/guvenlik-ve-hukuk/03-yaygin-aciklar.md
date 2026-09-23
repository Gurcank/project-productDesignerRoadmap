---
title: "Yaygın açıklar"
sectionNumber: "13.3"
category: "guvenlik-ve-hukuk"
order: 3
cardCount: 6
sourceFile: "13-guvenlik-ve-hukuki-yukumluluk.md"
origin: "material"
flags: []
---
Adlarını duyacağın ve ne olduğunu anlaman gereken saldırı türleri.

### XSS

- **Terim (İngilizce):** XSS — Cross-Site Scripting
- **Türkçesi:** Siteler arası betik çalıştırma
- **Tanım:** Saldırganın, başka kullanıcıların tarayıcısında kendi kodunu çalıştırabilmesi.
- **Ne işe yarar / neden var:** Kullanıcı girdisi (yorum, profil adı, arama terimi) ekranda gösterilirken kod olarak yorumlanırsa oluşur. Sonucu ağırdır: oturum çalma (12.3), sahte form gösterme, kullanıcı adına işlem yapma.
- **Nerede karşına çıkar:** Kullanıcı içeriği gösteren her yerde. Modern framework'ler varsayılan olarak korur — **ama "ham HTML olarak göster" gibi özellikler bu korumayı kapatır.**
- **Örnek kullanım:** "Kullanıcı yorumlarında zengin metin desteği istiyoruz; XSS riskini nasıl yöneteceğiz?"
- **Karıştırılanlar:** **Tasarım kararıyla doğrudan bağlantısı şudur:** "kullanıcı biçimlendirme yapabilsin" isteği, ham HTML kabul etmek anlamına gelirse risk doğurur. Güvenli yol, sınırlı bir zengin metin editörü ve sunucu tarafında temizleme (sanitization, 13.7) kullanmaktır.
- **İlgili terimler:** Sanitization (13.7), CSP (13.4), httpOnly (12.3)

### CSRF

- **Terim (İngilizce):** CSRF — Cross-Site Request Forgery
- **Türkçesi:** Siteler arası istek sahteciliği
- **Tanım:** Kullanıcının, farkında olmadan başka bir sitede oturum açık olduğu uygulamada işlem yapmasının sağlanması.
- **Ne işe yarar / neden var:** Çerezler her isteğe otomatik eklendiği için (12.3), kötü niyetli bir site senin adına bir form gönderebilir. Savunması: `SameSite` çerez ayarı ve CSRF jetonları.
- **Nerede karşına çıkar:** Çerez tabanlı oturum kullanan uygulamalarda.
- **Örnek kullanım:** "SameSite ayarı yapılmış mı? CSRF koruması buna bağlı."
- **Karıştırılanlar:** *XSS* saldırganın **senin sitende** kod çalıştırmasıdır; *CSRF* saldırganın **başka bir siteden** senin sitene istek attırmasıdır. İkisi farklı savunmalar gerektirir.
- **İlgili terimler:** SameSite (12.3), Cookie (12.3)

### SQL injection

- **Terim (İngilizce):** SQL injection — SQLi
- **Türkçesi:** SQL enjeksiyonu
- **Tanım:** Kullanıcı girdisinin, veritabanı sorgusunun bir parçası olarak çalıştırılabilmesi.
- **Ne işe yarar / neden var:** Tüm veritabanının okunmasına veya silinmesine yol açabilir — en eski ve en yıkıcı açıklardan biri. Modern ORM'ler (11.10) ve parametreli sorgular bunu büyük ölçüde ortadan kaldırır.
- **Nerede karşına çıkar:** Ham SQL yazılan yerlerde.
- **Örnek kullanım:** "Arama sorgusunu elle birleştiriyoruz; parametreli sorguya çevirelim."
- **İlgili terimler:** ORM (11.10), Injection (13.2), Input validation (13.7)

### IDOR

- **Terim (İngilizce):** IDOR — Insecure Direct Object Reference
- **Türkçesi:** Güvensiz doğrudan nesne referansı
- **Tanım:** Bir kaydın kimliğini değiştirerek, başkasına ait kayda erişilebilmesi.
- **Ne işe yarar / neden var:** **Bu, tasarımcının en çok ilgilendiği açıktır.** URL'de `/siparis/1042` görüyorsan, `/siparis/1043` yazarak başkasının siparişini görebilir misin? Sunucu her istekte "bu kayıt bu kullanıcıya mı ait?" kontrolünü yapmıyorsa evet. Erişim kontrolü kategorisinin (A01) en yaygın biçimi.
- **Nerede karşına çıkar:** Kayıt detay sayfalarında, dosya erişiminde, çok kiracılı sistemlerde (12.9).
- **Örnek kullanım:** "IDOR testi yapalım: başka kullanıcının sipariş ID'siyle URL'i deneyelim."
- **Karıştırılanlar:** **Tahmin edilemez kimlik kullanmak (11.5) bir savunma değil, sadece zorlaştırmadır.** Asıl savunma, her istekte yetki kontrolü yapmaktır. İkisi birlikte kullanılır.
- **İlgili terimler:** Primary key (11.5), Multi-tenancy (12.9), RLS (11.12)

### SSRF

- **Terim (İngilizce):** SSRF — Server-Side Request Forgery
- **Türkçesi:** Sunucu tarafı istek sahteciliği
- **Tanım:** Saldırganın, sunucuyu kendi seçtiği bir adrese istek atmaya zorlaması.
- **Ne işe yarar / neden var:** "Bir URL gir, biz o sayfanın önizlemesini getirelim" gibi masum görünen özellikler bu riski doğurur: saldırgan, sunucunun iç ağdaki gizli servislere istek atmasını sağlayabilir.
- **Nerede karşına çıkar:** URL önizleme, webhook yapılandırma ve görsel içe aktarma özelliklerinde.
- **Örnek kullanım:** "URL önizleme özelliği SSRF riski taşıyor; hangi adreslere istek atılabileceğini sınırlayalım."
- **İlgili terimler:** Attack surface (13.1), Webhook (10.9)

### Clickjacking

- **Terim (İngilizce):** Clickjacking
- **Türkçesi:** Tıklama hırsızlığı
- **Tanım:** Sitenin görünmez bir çerçeve içinde başka bir sayfaya gömülüp, kullanıcının farkında olmadan tıklamasının sağlanması.
- **Ne işe yarar / neden var:** Kullanıcı bir yere tıkladığını sanır, aslında altta duran senin uygulamanda bir işlem onaylar. Savunması, sitenin başka sayfalara gömülmesini engelleyen başlıklardır.
- **Nerede karşına çıkar:** Güvenlik denetimlerinde.
- **Örnek kullanım:** "Uygulamanın iframe içine gömülmesini engelleyelim; clickjacking riski var."
- **İlgili terimler:** CSP (13.4), Header (1.3)
