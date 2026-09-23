---
title: "OAuth, SSO ve dış kimlik sağlayıcıları"
sectionNumber: "12.5"
category: "auth"
order: 5
cardCount: 4
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: []
---
### OAuth 2.0

- **Terim (İngilizce):** OAuth 2.0
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir uygulamanın, kullanıcının şifresini görmeden başka bir servisteki kaynaklara sınırlı erişim almasını sağlayan protokol.
- **Ne işe yarar / neden var:** Asıl amacı **yetkilendirmedir**, kimlik doğrulama değil: "bu uygulamanın Google Drive'ımdaki dosyaları okumasına izin veriyorum" gibi. Kullanıcı şifresini üçüncü tarafa vermez.
- **Nerede karşına çıkar:** "Google ile bağlan" akışlarında ve entegrasyonlarda.
- **Örnek kullanım:** "Takvim entegrasyonu için OAuth kullanacağız; kullanıcı hangi izinleri verdiğini görecek."
- **Karıştırılanlar:** OAuth **yetkilendirme** protokolüdür; kimlik doğrulama için üzerine OIDC eklenir. Sosyal giriş, teknik olarak OIDC'dir.
- **İlgili terimler:** OIDC, Social login, Scope (12.9)

### OIDC / Social login

- **Terim (İngilizce):** OIDC (OpenID Connect), social login
- **Türkçesi:** Sosyal giriş
- **Tanım:** OAuth 2.0'ın üzerine kurulmuş, kimlik bilgisi de taşıyan katman. "Google ile giriş yap" düğmesinin arkasındaki teknoloji.
- **Ne işe yarar / neden var:** Kayıt sürtünmesini ciddi biçimde azaltır: kullanıcı yeni bir şifre üretmez, e-posta doğrulaması gerekmez.
- **Nerede karşına çıkar:** Neredeyse her tüketici ürününde.
- **Örnek kullanım:** "Google ve Apple ile giriş ekleyelim; kayıt tamamlama oranını artırır."
- **Karıştırılanlar:** **Tasarım tarafında iki tuzak var.** Birincisi: kullanıcı hangi yöntemle kayıt olduğunu unutur ve şifreyle girmeye çalışıp başarısız olur — bu yüzden "bu e-posta Google ile kayıtlı" gibi bir yönlendirme gerekir. İkincisi: çok fazla giriş seçeneği sunmak karar felci yaratır (4.7, Hick's law); genelde iki-üç seçenek yeterlidir.
- **İlgili terimler:** OAuth, Account linking, SSO

### SSO / SAML

- **Terim (İngilizce):** SSO (Single Sign-On), SAML
- **Türkçesi:** Tek oturum açma
- **Tanım:** Kullanıcının, kurumunun merkezî kimlik sistemiyle bir kez giriş yapıp tüm uygulamalara erişmesi. SAML, kurumsal dünyada yaygın olan eski ama hâlâ baskın protokoldür.
- **Ne işe yarar / neden var:** Kurumsal satışta çoğu zaman **satın alma şartıdır**: IT ekipleri, çalışanların ayrı ayrı şifre yönetmesini istemez ve çalışan işten ayrıldığında tüm erişimlerin merkezî olarak kesilmesini ister.
- **Nerede karşına çıkar:** B2B ürünlerinin kurumsal planlarında.
- **Örnek kullanım:** "Enterprise planda SSO şart; olmadan bu segmente satamayız."
- **Karıştırılanlar:** SSO kurulumu genelde müşterinin IT ekibiyle birlikte yapılır ve **kendi arayüzünü gerektirir**: yönetici panelinde SSO yapılandırma ekranı, alan adı doğrulama, "bu alan adındaki kullanıcılar SSO ile girmeli" kuralı. Bunlar tasarlanması gereken ekranlardır.
- **İlgili terimler:** OIDC, Multi-tenancy (12.9), Enterprise tier (7.6)

### Account linking

- **Terim (İngilizce):** Account linking
- **Türkçesi:** Hesap birleştirme
- **Tanım:** Aynı kişinin farklı giriş yöntemleriyle oluşturduğu hesapların tek hesapta birleştirilmesi.
- **Ne işe yarar / neden var:** Kullanıcı önce e-postayla kayıt olur, sonra Google ile girmeye çalışır. Sistem bunu ayrı bir hesap sayarsa kullanıcı verilerini kaybetmiş gibi hisseder — auth akışlarındaki en sık yaşanan gerçek sorunlardan biri.
- **Nerede karşına çıkar:** Birden fazla giriş yöntemi sunan her üründe.
- **Örnek kullanım:** "Aynı e-posta ile Google'dan gelirse mevcut hesaba bağlayalım; yeni hesap açmayalım."
- **Karıştırılanlar:** Otomatik birleştirme güvenlik riski taşıyabilir (doğrulanmamış bir e-posta üzerinden hesap ele geçirme). Bu yüzden birleştirme genelde doğrulama ister — ve bu doğrulama akışı tasarlanmalıdır.
- **İlgili terimler:** Social login, Email verification (12.8)
