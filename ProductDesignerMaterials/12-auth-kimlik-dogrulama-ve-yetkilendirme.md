# Bölüm 12 — Auth: kimlik doğrulama ve yetkilendirme

Auth, bir üründe **hem en çok kullanılan hem en az tasarlanan** akıştır. Herkes kayıt olur, herkes giriş yapar, herkes şifresini unutur — ama bu ekranlar genelde en sona bırakılır ve varsayılan hâlleriyle kalır.

Bu bölümün iki hedefi var:

1. **Teknik tarafı anlamak** — session, token, OAuth, JWT gibi terimler her auth konuşmasında geçer ve karıştırılmaları güvenlik açığına yol açar.
2. **Tasarım sorumluluğunu görmek** — auth akışındaki kararların çoğu senin işin: hangi yöntemler sunulacak, hata mesajı ne diyecek, oturum ne kadar sürecek, hesabını kaybeden kullanıcı ne yapacak.

Bölümdeki kavramlar eskimeyen kategoride. Değişken olanlar: hazır çözümler (12.10) ve şifre politikası tavsiyeleri (12.8) — ikincisi son yıllarda ciddi biçimde değişti ve muhtemelen bildiğinin tersi.

---

## 12.1 Authentication vs authorization

Bu ayrım, bölümün tamamının temeli. İkisini karıştırmak, güvenlik açıklarının en yaygın kavramsal kaynağıdır.

### Authentication

- **Terim (İngilizce):** Authentication — AuthN
- **Türkçesi:** Kimlik doğrulama
- **Tanım:** "Sen kimsin?" sorusunun cevabı.
- **Ne işe yarar / neden var:** Kullanıcının iddia ettiği kişi olduğunu kanıtlar: şifre, doğrulama kodu, biyometri veya bir kimlik sağlayıcısı üzerinden.
- **Nerede karşına çıkar:** Giriş ekranında.
- **Örnek kullanım:** "Kimlik doğrulama geçti ama bu sayfaya yetkisi yok."
- **İlgili terimler:** Authorization, Session (12.2), Password (12.8)

### Authorization

- **Terim (İngilizce):** Authorization — AuthZ
- **Türkçesi:** Yetkilendirme
- **Tanım:** "Ne yapabilirsin?" sorusunun cevabı.
- **Ne işe yarar / neden var:** Kimliği doğrulanmış bir kullanıcının hangi kaynaklara erişebileceğini ve hangi işlemleri yapabileceğini belirler.
- **Nerede karşına çıkar:** Rol, izin ve ekip özelliklerinde.
- **Örnek kullanım:** "Kullanıcı giriş yapmış ama düzenleme yetkisi yok; butonu gizleyelim mi, pasif mi gösterelim?"
- **Karıştırılanlar:** **Bu ayrım tasarımda somutlaşır:** 401 kimlik doğrulama sorunudur (giriş ekranına yönlendir), 403 yetkilendirme sorunudur (giriş ekranı işe yaramaz, ayrı bir ekran gerekir) — bkz. 10.3.
- **İlgili terimler:** Authentication, RBAC (12.9), 403 (10.3)

---

## 12.2 Session vs token

Kullanıcı giriş yaptıktan sonra, sonraki her istekte onu nasıl tanıdığımız. İki temel yaklaşım vardır.

### Session

- **Terim (İngilizce):** Session, session-based authentication
- **Türkçesi:** Oturum
- **Tanım:** Sunucunun, giriş yapan kullanıcı için bir kayıt tutması ve tarayıcıya yalnızca bu kaydın kimliğini vermesi.
- **Ne işe yarar / neden var:** Asıl bilgi sunucuda kaldığı için **oturum istenildiği an iptal edilebilir**: kullanıcı "tüm cihazlardan çıkış yap" dediğinde veya bir hesap tehlikeye girdiğinde sunucudaki kayıt silinir ve erişim anında biter. Bedeli: sunucunun bu kayıtları saklaması ve her istekte kontrol etmesi gerekir (genelde Redis'te tutulur, 11.3).
- **Nerede karşına çıkar:** Klasik web uygulamalarında ve modern auth kütüphanelerinin çoğunda.
- **Örnek kullanım:** "Session tabanlı gidelim; 'tüm oturumları sonlandır' özelliği istiyoruz."
- **İlgili terimler:** Cookie (12.3), Token, Redis (11.3)

### Token

- **Terim (İngilizce):** Token-based authentication
- **Türkçesi:** Jeton tabanlı doğrulama
- **Tanım:** Sunucunun, kullanıcı bilgilerini içeren imzalı bir belge verip artık kendi tarafında kayıt tutmaması.
- **Ne işe yarar / neden var:** Sunucu durum tutmaz (stateless, 14.7), bu yüzden yatay ölçeklenmesi kolaydır ve birden fazla servis aynı jetonu doğrulayabilir. Bedeli: **iptal etmek zordur** — jeton kendi kendini kanıtladığı için, süresi dolana kadar geçerli kalır.
- **Nerede karşına çıkar:** Mobil uygulamalarda, mikroservislerde, API entegrasyonlarında.
- **Örnek kullanım:** "Mobil uygulama da aynı API'yi kullanacak; token tabanlı yaklaşım daha uygun."
- **Karıştırılanlar:** **Yaygın bir yanılgı:** "modern uygulamalar JWT kullanır, session eskidir." Doğru değil. Session, tek bir web uygulaması için çoğu zaman **daha güvenli ve daha basittir**; token'ın avantajları dağıtık sistemlerde ortaya çıkar. Seçim bir takastır (9.12): iptal edilebilirlik mi, ölçeklenebilirlik mi.
- **İlgili terimler:** JWT (12.4), Session, Stateless (14.7)

---

## 12.3 Cookie

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

---

## 12.4 JWT ve token türleri

### JWT

- **Terim (İngilizce):** JWT — JSON Web Token
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** İçinde kullanıcı bilgisi taşıyan, sunucu tarafından imzalanmış jeton biçimi.
- **Ne işe yarar / neden var:** İmza sayesinde, alıcı jetonun değiştirilmediğini veritabanına bakmadan doğrulayabilir. Bu, dağıtık sistemlerde her servisin bağımsız doğrulama yapabilmesini sağlar.
- **Nerede karşına çıkar:** Modern API'lerde ve mikroservislerde.
- **Örnek kullanım:** "JWT'nin içine rolü de koyalım; her serviste ayrıca veritabanı sorgusu olmasın."
- **Karıştırılanlar:** **İki önemli yanılgı var.** Birincisi: **JWT şifreli değildir, sadece imzalıdır.** İçindeki bilgi herkes tarafından okunabilir — bu yüzden içine hassas veri konmaz. İkincisi: **iptal edilemez.** Bir kullanıcıyı yasakladığında, elindeki jeton süresi dolana kadar geçerli kalmaya devam eder. Bu iki gerçek, JWT'yi çoğu basit web uygulaması için session'dan daha karmaşık hâle getirir.
- **İlgili terimler:** Access token, Refresh token, Session (12.2)

### Access token / Refresh token

- **Terim (İngilizce):** Access token, refresh token, expiry, revocation
- **Türkçesi:** Erişim jetonu, yenileme jetonu, geçerlilik süresi, iptal
- **Tanım:** **Access token** kısa ömürlüdür (dakikalar) ve her istekte kullanılır. **Refresh token** uzun ömürlüdür ve yalnızca yeni bir access token almak için kullanılır.
- **Ne işe yarar / neden var:** JWT'nin iptal edilememe sorununu hafifletir: access token çalınsa bile kısa sürede geçersiz olur; refresh token ise sunucuda kayıtlı olduğu için iptal edilebilir.
- **Nerede karşına çıkar:** Mobil uygulamalarda ve OAuth akışlarında.
- **Örnek kullanım:** "Access token 15 dakika, refresh token 30 gün olsun."
- **Karıştırılanlar:** **Tasarım karşılığı:** jeton yenileme kullanıcıya görünmez olmalıdır. Kullanıcının 15 dakikada bir çıkış yapmış olması bir hatadır. Ama refresh token da süresi dolduğunda kullanıcı gerçekten çıkış yapar — ve bu anın nasıl yaşandığı (yarım kalan iş kaybolur mu?) tasarlanmalıdır.
- **İlgili terimler:** JWT, Session süresi (12.11)

---

## 12.5 OAuth, SSO ve dış kimlik sağlayıcıları

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

---

## 12.6 Şifresiz yöntemler

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

---

## 12.7 MFA / 2FA

### MFA

- **Terim (İngilizce):** MFA (Multi-Factor Authentication), 2FA (Two-Factor Authentication)
- **Türkçesi:** Çok faktörlü kimlik doğrulama
- **Tanım:** Girişte birden fazla kanıt istenmesi: bildiğin bir şey (şifre), sahip olduğun bir şey (telefon, güvenlik anahtarı), olduğun bir şey (parmak izi).
- **Ne işe yarar / neden var:** Şifre çalınsa bile hesabı korur. Hesap ele geçirmelere karşı en etkili tek önlem olarak kabul edilir.
- **Nerede karşına çıkar:** Hesap güvenliği ayarlarında; kurumsal ürünlerde zorunlu olabilir.
- **Örnek kullanım:** "MFA'yı isteğe bağlı sunalım ama yönetici hesapları için zorunlu olsun."
- **Karıştırılanlar:** **Yöntemler eşit güvenlikte değildir.** Genel sıralama: FIDO2/passkey en güçlü, ardından kimlik doğrulayıcı uygulama (TOTP), en sonda SMS. SMS hiç yoktan iyidir ama kimlik avına dayanıklı sayılmaz (12.6).
- **İlgili terimler:** TOTP, Passkey (12.6), Backup code

### TOTP / Backup code

- **Terim (İngilizce):** TOTP (Time-based One-Time Password), authenticator app, backup code, recovery code
- **Türkçesi:** Zaman tabanlı tek kullanımlık kod, yedek kod
- **Tanım:** Kimlik doğrulayıcı uygulamanın ürettiği, 30 saniyede bir değişen kod. Yedek kodlar ise cihaz kaybedildiğinde kullanılmak üzere önceden verilen tek kullanımlık kodlardır.
- **Ne işe yarar / neden var:** SMS'e göre daha güvenlidir çünkü telefon numarasına değil cihaza bağlıdır. **Yedek kodlar zorunludur:** MFA'yı yedek yol olmadan sunmak, kullanıcıları hesaplarından kalıcı olarak kilitleme riski yaratır.
- **Nerede karşına çıkar:** Güvenlik ayarları ekranında.
- **Örnek kullanım:** "MFA kurulumunda yedek kodları göster ve indirmeye zorla; kullanıcı geçemeden devam edemesin."
- **Karıştırılanlar:** **Kurulum akışı tasarımı kritiktir:** QR kod, elle giriş alternatifi, doğrulama adımı ve yedek kodların gösterilmesi — dördü de gerekir. Kullanıcı yedek kodları kaydetmeden akışı bitirebiliyorsa, destek yükü ve hesap kaybı kaçınılmazdır.
- **İlgili terimler:** MFA, Account recovery (12.11)

---

## 12.8 Şifre güvenliği

Bu alt bölümde **muhtemelen bildiğinin tersi olan** bilgiler var. Şifre politikası tavsiyeleri son yıllarda köklü biçimde değişti.

### Hashing / Salting

- **Terim (İngilizce):** Hashing, salt, bcrypt, Argon2
- **Türkçesi:** Özetleme, tuzlama
- **Tanım:** Şifrenin, geri çevrilemez bir işlemle özetlenip saklanması. **Salt**, her şifreye eklenen rastgele değerdir.
- **Ne işe yarar / neden var:** Veritabanı sızsa bile şifreler okunamaz. Salt olmasa, aynı şifreyi kullanan kullanıcılar aynı özeti üretir ve saldırgan hazır tablolarla toplu çözüm yapabilir. bcrypt ve Argon2 gibi algoritmalar bilerek **yavaş** tasarlanmıştır; bu, deneme saldırılarını pahalı hâle getirir.
- **Nerede karşına çıkar:** Güvenlik denetimlerinde.
- **Örnek kullanım:** "Şifreler bcrypt ile saklanıyor mu, yoksa düz metin mi? Bunu doğrulayalım."
- **Karıştırılanlar:** **Şifreler asla şifrelenmez, özetlenir.** Fark kritik: şifreleme geri çevrilebilir, özetleme çevrilemez. Bir servis "şifrenizi size e-posta ile gönderelim" diyorsa, şifreleri geri çevrilebilir biçimde saklıyordur — bu ciddi bir kusurdur.
- **İlgili terimler:** Password reset, Security (Bölüm 13)

### Şifre politikası

- **Terim (İngilizce):** Password policy, composition rules, password rotation, blocklist screening
- **Türkçesi:** Şifre politikası, karmaşıklık kuralları, periyodik değiştirme
- **Tanım:** Kullanıcıdan hangi şifrenin isteneceğine dair kurallar.
- **Ne işe yarar / neden var:** **Bu, doğrudan senin tasarım kararın** — şifre alanının altındaki kurallar metnini sen yazıyorsun. Ve yaygın uygulamaların çoğu artık güncel rehberliğe aykırı.
- `[DEĞİŞKEN BİLGİ]` **Güncel yaklaşım (NIST SP 800-63B Revision 4, 2025'te tamamlandığı raporlanıyor):**
  - **Karmaşıklık kuralları dayatılmamalı.** "En az bir büyük harf, bir rakam ve bir sembol" gerekliliği artık **önerilmiyor** — kılavuz bunu açıkça yasaklayan bir dil kullanıyor. Bu kurallar kullanıcıları tahmin edilebilir kalıplara itiyor (`Sifre1!`).
  - **Periyodik zorunlu değiştirme kaldırıldı.** 90 günde bir şifre değiştirtmek artık önerilmiyor; yalnızca ihlal şüphesi varsa değiştirilmeli.
  - **Uzunluk, karmaşıklıktan önemli.** Asgari 8 karakter; şifre tek doğrulayıcıysa 15 karakter öneriliyor. Sistem en az 64 karakteri kabul edebilmeli.
  - **Boşluk ve tüm Unicode karakterler kabul edilmeli** — yani parola cümleleri (passphrase) desteklenmeli.
  - **Sızmış şifre listesine karşı kontrol zorunlu.** Kullanıcının seçtiği şifre bilinen ihlallerde geçiyorsa reddedilmeli.
- **Nerede karşına çıkar:** Kayıt ve şifre değiştirme ekranlarında.
- **Örnek kullanım:** "Karmaşıklık kuralını kaldıralım, minimum uzunluğu artıralım ve sızmış şifre kontrolü ekleyelim. Yardımcı metin de buna göre değişsin."
- **Karıştırılanlar:** Bu değişikliklerin sebebi güvenliği gevşetmek değil, **tersine sıkılaştırmak**: karmaşıklık kuralları ve zorunlu rotasyon, kullanıcıları zayıf ve tahmin edilebilir davranışlara ittiği için kaldırıldı. Ayrıca **yapıştırmayı engellememek** gerekir — şifre yöneticisi kullanımını engellemek güvenliği düşürür.
- **İlgili terimler:** Passkey (12.6), MFA (12.7), Accessible Authentication (6.2)
- **Kaynak:** https://pages.nist.gov/800-63-4/sp800-63b.html

### Password reset

- **Terim (İngilizce):** Password reset flow, forgot password
- **Türkçesi:** Şifre sıfırlama akışı
- **Tanım:** Şifresini unutan kullanıcının, kimliğini e-posta üzerinden kanıtlayıp yeni şifre belirlemesi.
- **Ne işe yarar / neden var:** En çok kullanılan destek akışıdır ve genelde en az tasarlanan akıştır. Doğru kurgusu: e-posta gir → tek kullanımlık, kısa ömürlü bağlantı gönder → yeni şifre belirlet → **mevcut tüm oturumları sonlandır** → kullanıcıya "şifreniz değişti" bildirimi gönder.
- **Nerede karşına çıkar:** Her üründe.
- **Örnek kullanım:** "Şifre sıfırlandıktan sonra diğer cihazlardaki oturumlar da kapansın; hesap ele geçirilmişse erişim kesilsin."
- **Karıştırılanlar:** **Güvenlik ile UX'in çeliştiği klasik nokta:** "bu e-posta kayıtlı değil" demek kullanıcıya yardımcı olur ama saldırgana hangi e-postaların sistemde olduğunu söyler (**user enumeration**). Yaygın çözüm: e-posta kayıtlı olsun olmasın aynı mesajı göstermek ("Bu adres kayıtlıysa bir bağlantı gönderdik").
- **İlgili terimler:** Email verification, Session (12.2), Auth UX (12.11)

### Email verification

- **Terim (İngilizce):** Email verification, double opt-in
- **Türkçesi:** E-posta doğrulama
- **Tanım:** Kullanıcının girdiği e-posta adresine gerçekten sahip olduğunun kontrol edilmesi.
- **Ne işe yarar / neden var:** Sahte kayıtları azaltır ve şifre sıfırlamanın güvenli çalışmasını sağlar — doğrulanmamış bir e-posta üzerinden hesap kurtarma, hesap ele geçirmeye açık kapı bırakır.
- **Nerede karşına çıkar:** Kayıt akışında.
- **Örnek kullanım:** "Doğrulamayı zorunlu tutalım ama kullanıcıyı hemen içeri alalım; doğrulanana kadar sadece bir uyarı şeridi gösterelim."
- **Karıştırılanlar:** **Tasarım kararı:** doğrulama, kayıt akışını kesmeli mi yoksa arka planda mı ilerlemeli? Kesmek, tamamlama oranını düşürür. Yaygın orta yol: kullanıcıyı içeri al, ama doğrulanmamış hesabın bazı işlemlerini kısıtla ve kalıcı bir uyarı şeridi (7.8) göster.
- **İlgili terimler:** Alert banner (7.8), Onboarding (7.12), Account linking (12.5)

---

## 12.9 Yetkilendirme modelleri

Kimin neyi yapabileceğini tanımlama biçimleri.

### RBAC

- **Terim (İngilizce):** RBAC — Role-Based Access Control
- **Türkçesi:** Rol tabanlı erişim kontrolü
- **Tanım:** Kullanıcılara roller atanır (admin, editör, görüntüleyici) ve izinler rollere bağlanır.
- **Ne işe yarar / neden var:** En yaygın ve en anlaşılır model. Kullanıcı sayısı arttıkça, herkese tek tek izin vermek yerine rol atamak yönetilebilir kalır.
- **Nerede karşına çıkar:** Ekip ürünlerinde ve yönetim panellerinde.
- **Örnek kullanım:** "Üç rol yeterli: Owner, Admin, Member. Daha fazlası karmaşıklık üretir."
- **Karıştırılanlar:** **Tasarım tarafı düşünülmesi gereken üç soru:** Rol matrisi kullanıcıya nasıl gösterilecek (hangi rol ne yapabilir)? Yetkisi olmayan bir eylem gizlenecek mi, pasif mi gösterilecek? Rol değiştiğinde kullanıcı bilgilendirilecek mi?
- **İlgili terimler:** Permission, ABAC, Many-to-many (11.6)

### ABAC / Permission / Scope

- **Terim (İngilizce):** ABAC (Attribute-Based Access Control), permission, scope
- **Türkçesi:** Öznitelik tabanlı erişim, izin, kapsam
- **Tanım:** **ABAC** kararı özniteliklere göre verir ("kendi departmanındaki belgeleri düzenleyebilir"). **Permission** tek bir yetkidir. **Scope** OAuth'ta bir uygulamaya verilen erişim sınırıdır.
- **Ne işe yarar / neden var:** RBAC'ın yetmediği durumlarda daha ince ayar sağlar. Bedeli: karmaşıklık — hem uygulanması hem kullanıcıya anlatılması zorlaşır.
- **Nerede karşına çıkar:** Kurumsal ve karmaşık izin gerektiren ürünlerde.
- **Örnek kullanım:** "RBAC yetmiyor; kullanıcı sadece kendi ekibinin projelerini görsün, bu ABAC'a giriyor."
- **İlgili terimler:** RBAC, OAuth (12.5), RLS (11.12)

### Multi-tenancy

- **Terim (İngilizce):** Multi-tenancy, tenant, organization, workspace
- **Türkçesi:** Çok kiracılı yapı
- **Tanım:** Aynı uygulamanın birden fazla müşteri kuruluşuna hizmet vermesi ve verilerinin birbirinden yalıtılması.
- **Ne işe yarar / neden var:** B2B SaaS'ın temel yapısı. **Tasarım karşılığı çok somuttur:** kullanıcı birden fazla kuruluşta olabilir mi? Öyleyse kuruluş değiştirici (workspace switcher) gerekir. Davet akışı, rol atama, kuruluş ayarları ve faturalandırma — hepsi ayrı ekranlar demektir.
- **Nerede karşına çıkar:** Her B2B üründe.
- **Örnek kullanım:** "Kullanıcı birden fazla workspace'te olabilecek; header'a workspace switcher koyalım."
- **Karıştırılanlar:** **En kritik güvenlik noktası veri yalıtımıdır:** bir kiracının verisinin başka bir kiracıya sızması, bir SaaS ürünü için en ciddi hata sınıfıdır. Her sorguda kiracı filtresinin uygulandığından emin olunmalıdır (bkz. IDOR, 13.3; RLS, 11.12).
- **İlgili terimler:** RBAC, RLS (11.12), SSO (12.5)

---

## 12.10 Hazır çözümler

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

---

## 12.11 Auth'un UX tarafı

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

---

## 12.12 Kendini test et

**1.** Authentication ile authorization arasındaki fark nedir? 401 ve 403 hangisine karşılık gelir?

**2.** Session ile token tabanlı yaklaşım arasındaki temel takas nedir?

**3.** "Modern uygulamalar JWT kullanır, session eskidir" ifadesi doğru mu?

**4.** JWT şifreli midir? İçine hassas veri konur mu? Neden?

**5.** Access token ile refresh token neden ayrılır?

**6.** Oturum çerezinde bulunması gereken üç güvenlik bayrağı nedir ve her biri neyi engeller?

**7.** Token'ı localStorage'da tutmanın riski nedir?

**8.** OAuth ile OIDC arasındaki fark nedir? "Google ile giriş" hangisidir?

**9.** Account linking neden gerekli? Otomatik yapmanın riski nedir?

**10.** SSO neden kurumsal satışta önemlidir ve tasarımcı için ne demektir?

**11.** Magic link ile OTP arasındaki UX farkı nedir? Hangisi mobilde daha iyi çalışır?

**12.** Passkey neden kimlik avına dayanıklıdır? Tasarımdaki en zor kısmı nedir?

**13.** MFA yöntemleri güvenlik açısından nasıl sıralanır?

**14.** Yedek kodlar neden zorunludur?

**15.** Şifreler şifrelenir mi, özetlenir mi? Fark neden önemli?

**16.** "En az bir büyük harf, bir rakam ve bir sembol" kuralı güncel rehberliğe uygun mu? Neden?

**17.** Zorunlu periyodik şifre değiştirme neden artık önerilmiyor?

**18.** Şifre sıfırlama akışında "bu e-posta kayıtlı değil" demek neden sakıncalı olabilir?

**19.** Şifre sıfırlandıktan sonra ne yapılmalı ve neden?

**20.** Multi-tenancy'de en kritik güvenlik noktası nedir?

**21.** Oturum sona erdiğinde en sık atlanan UX detayı nedir?

**22.** Hesap kurtarma akışı neden "güvenliğin en zayıf halkası" olarak anılır?

---

### Cevaplar

**1.** Authentication "sen kimsin?" (kimlik doğrulama), authorization "ne yapabilirsin?" (yetkilendirme). **401** authentication sorunudur (giriş yapılmamış), **403** authorization sorunudur (giriş yapılmış ama yetki yok).

**2.** **İptal edilebilirlik ile ölçeklenebilirlik arasında.** Session'da bilgi sunucuda durur, bu yüzden anında iptal edilebilir ama sunucu kayıt tutmak zorundadır. Token'da bilgi jetonun kendisindedir, bu yüzden sunucu durum tutmaz ve kolay ölçeklenir ama iptal etmek zordur.

**3.** Hayır. Session, tek bir web uygulaması için çoğu zaman **daha güvenli ve daha basittir**. Token'ın avantajları dağıtık sistemlerde, mobil istemcilerde ve çok servisli mimarilerde ortaya çıkar. Bu bir takastır, bir moda değil.

**4.** **JWT şifreli değildir, sadece imzalıdır.** İçindeki bilgi herkes tarafından okunabilir; imza yalnızca değiştirilmediğini garanti eder. Bu yüzden içine hassas veri konmaz.

**5.** JWT'nin iptal edilememe sorununu hafifletmek için. Access token kısa ömürlüdür — çalınsa bile hızla geçersiz olur. Refresh token uzun ömürlüdür ama sunucuda kayıtlı olduğu için iptal edilebilir.

**6.** **httpOnly** (JavaScript erişemez → XSS ile oturum çalınamaz), **Secure** (yalnızca HTTPS üzerinden gider → ağdan dinlenemez), **SameSite** (başka sitelerden gelen isteklerde gönderilmez → CSRF'e karşı temel savunma).

**7.** `localStorage`'a JavaScript erişebilir. Sayfada bir **XSS** açığı varsa saldırgan jetonu okuyup çalabilir. httpOnly çerez bu riski ortadan kaldırır çünkü JavaScript ona erişemez.

**8.** OAuth bir **yetkilendirme** protokolüdür ("bu uygulama dosyalarıma erişebilir"). OIDC, OAuth'un üzerine kurulmuş ve kimlik bilgisi de taşıyan katmandır. "Google ile giriş" teknik olarak **OIDC**'dir.

**9.** Çünkü kullanıcı önce e-postayla kayıt olup sonra Google ile girmeye çalışabilir; sistem bunu ayrı hesap sayarsa kullanıcı verilerini kaybetmiş gibi hisseder. Otomatik birleştirmenin riski: doğrulanmamış bir e-posta üzerinden hesap ele geçirme. Bu yüzden birleştirme genelde doğrulama ister.

**10.** Kurumsal IT ekipleri, çalışanların ayrı ayrı şifre yönetmesini istemez ve çalışan ayrıldığında tüm erişimlerin merkezî olarak kesilmesini ister; bu yüzden çoğu zaman **satın alma şartıdır**. Tasarımcı için: yönetici panelinde SSO yapılandırma ekranı, alan adı doğrulama ve "bu alan adı SSO ile girmeli" kuralı tasarlanmalıdır.

**11.** Magic link'te kullanıcı **sekmeyi terk edip** e-postasına gider ve dönerken bağlamı kaybedebilir. OTP'de kullanıcı **aynı sekmede kalır**, kodu okuyup yazar. Bu yüzden **OTP mobilde daha iyi çalışır.**

**12.** Çünkü anahtar **sitenin alan adına kriptografik olarak bağlıdır**; sahte bir giriş sayfasında otomatik olarak çalışmaz. Ayrıca özel anahtar cihazdan hiç çıkmaz, sunucuda çalınabilecek bir şifre yoktur. Tasarımdaki en zor kısım **kurtarma akışıdır**: kullanıcı cihazını kaybederse ne olacak?

**13.** En güçlüden zayıfa: **FIDO2/passkey → kimlik doğrulayıcı uygulama (TOTP) → SMS.** SMS hiç yoktan iyidir ama SIM değiştirme saldırılarına açıktır ve kimlik avına dayanıklı sayılmaz.

**14.** Çünkü MFA'yı yedek yol olmadan sunmak, kullanıcıları hesaplarından **kalıcı olarak kilitleme** riski yaratır. Cihaz kaybolduğunda başka bir giriş yolu kalmaz; sonuç, yüksek destek yükü ve hesap kaybıdır.

**15.** **Özetlenir (hash), şifrelenmez.** Şifreleme geri çevrilebilir, özetleme çevrilemez. Bir servis "şifrenizi size gönderelim" diyorsa şifreleri geri çevrilebilir biçimde saklıyordur — ciddi bir kusurdur.

**16.** **Hayır, uygun değil.** Güncel NIST rehberliği karmaşıklık kurallarının dayatılmamasını söylüyor. Sebep: bu kurallar kullanıcıları tahmin edilebilir kalıplara itiyor (`Sifre1!`) ve gerçek güvenlik kazancı sağlamıyor. Yerine **uzunluk** öne çıkarılıyor ve sızmış şifre listesine karşı kontrol öneriliyor.

**17.** Çünkü kullanıcıları zayıf ve tahmin edilebilir davranışlara itiyor: küçük değişikliklerle aynı şifreyi tekrarlamak, bir yere not almak. Güncel rehberlik, şifrenin yalnızca **ihlal şüphesi** varsa değiştirilmesini söylüyor.

**18.** **User enumeration** — saldırgana hangi e-postaların sistemde kayıtlı olduğunu söyler. Yaygın çözüm, e-posta kayıtlı olsun olmasın aynı mesajı göstermektir: "Bu adres kayıtlıysa bir bağlantı gönderdik."

**19.** **Mevcut tüm oturumlar sonlandırılmalı** ve kullanıcıya "şifreniz değişti" bildirimi gönderilmeli. Sebep: hesap zaten ele geçirilmişse, saldırganın açık oturumu şifre değişse bile devam eder.

**20.** **Veri yalıtımı.** Bir kiracının verisinin başka bir kiracıya sızması, bir SaaS ürünü için en ciddi hata sınıfıdır. Her sorguda kiracı filtresinin uygulandığından emin olunmalıdır.

**21.** Kullanıcının **yarım kalmış işinin kaybolması.** Oturum sona erdiğinde kullanıcı giriş yaptıktan sonra aynı yere ve mümkünse aynı veriyle dönmelidir; yeniden giriş yapıp ana sayfaya düşmek ve formu baştan doldurmak zorunda kalmak sık yapılan bir hatadır.

**22.** Çünkü bir hesabı ele geçirmenin en kolay yolu genelde şifreyi kırmak değil, **kurtarma akışını istismar etmektir.** Ana giriş yolu ne kadar güçlü olursa olsun, zayıf bir kurtarma akışı o gücü anlamsız kılar.

---

**Biten bölüm:** Bölüm 12 — Auth: kimlik doğrulama ve yetkilendirme
**Sıradaki bölüm:** Bölüm 13 — Güvenlik ve hukuki yükümlülük
