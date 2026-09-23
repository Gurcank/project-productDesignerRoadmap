# Bölüm 13 — Güvenlik ve hukuki yükümlülük

Güvenlik, "geliştiricinin işi" sanılan ama tasarımcının sürekli içine düştüğü bir alan. Sebep basit: **güvenlik açıklarının çoğu bir tasarım kararının sonucudur.**

Birkaç örnek, bu bölümün tamamını özetliyor:
- URL'de sıralı ID göstermek (11.5) → başkasının kaydına erişim denemesini kolaylaştırır (IDOR).
- "Bu e-posta kayıtlı değil" hata mesajı (12.8) → saldırgana hesap listesi verir.
- Kullanıcıdan gereksiz alan istemek (11.11) → her toplanan kişisel veri bir yükümlülüktür.
- Çerez banner'ında "Reddet"i küçültmek (7.7) → hukuki risk.
- Bir üçüncü parti bileşen gömmek (10.9) → o servisin erişimini de kabul etmek.

Bu bölümün amacı seni güvenlik uzmanı yapmak değil; **kendi kararlarının güvenlik sonucunu görebilmen** ve bir güvenlik denetimi raporunu okuyabilmen.

> **Hukuki uyarı:** 13.10 ve 13.11'deki bilgiler genel bilgilendirmedir, hukuki tavsiye değildir. Ben hukukçu değilim. Gerçek bir projede avukat görüşü almadan hareket etme.

---

## 13.1 Güvenliği düşünme biçimi

### Threat model

- **Terim (İngilizce):** Threat model, threat modeling
- **Türkçesi:** Tehdit modeli
- **Tanım:** "Kim, neden ve nasıl bize saldırır?" sorusunu sistemli biçimde cevaplamak.
- **Ne işe yarar / neden var:** Güvenliği "her şeyi koru" gibi imkânsız bir hedeften, önceliklendirilebilir bir listeye çevirir. Bir blog ile bir ödeme sistemi aynı tehditlerle karşılaşmaz; korumaların da aynı olması gerekmez.
- **Nerede karşına çıkar:** Tasarım aşamasında yapılması gereken bir çalışmadır — sonradan yapılırsa mimari değiştirmek gerekir.
- **Örnek kullanım:** "Tehdit modelimizde en yüksek risk hesap ele geçirme; MFA'ya önce oradan başlayalım."
- **İlgili terimler:** Attack surface, Insecure design (13.2)

### Attack surface

- **Terim (İngilizce):** Attack surface
- **Türkçesi:** Saldırı yüzeyi
- **Tanım:** Bir sisteme dışarıdan dokunulabilecek tüm noktaların toplamı.
- **Ne işe yarar / neden var:** Her yeni özellik, her yeni form alanı, her yeni üçüncü parti entegrasyon (10.9) yüzeyi büyütür. **Tasarım karşılığı:** kaldırılan bir özellik, korunması gereken bir yüzeyin de kaldırılması demektir. Sadelik burada bir güvenlik faydası üretir.
- **Nerede karşına çıkar:** Güvenlik denetimlerinde ve mimari incelemelerde.
- **Örnek kullanım:** "Bu dosya yükleme özelliğini gerçekten istiyor muyuz? Saldırı yüzeyini belirgin biçimde büyütüyor."
- **İlgili terimler:** Threat model, Third-party (10.9)

---

## 13.2 OWASP Top 10

### OWASP Top 10

- **Terim (İngilizce):** OWASP Top 10
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Web uygulamalarındaki en kritik güvenlik risklerinin, gerçek veriye dayanarak derlenen listesi.
- **Ne işe yarar / neden var:** Güvenlik konuşmasının ortak dili. İhale şartnamelerinde, denetim raporlarında ve müşteri güvenlik sorularında referans olarak geçer. **Ezberlemen gerekmez; kategorilerin ne anlattığını bilmen yeter.**
- **Nerede karşına çıkar:** Güvenlik denetimlerinde ve kurumsal satış süreçlerinde.
- **Örnek kullanım:** "Denetim raporu A01 altında üç bulgu listelemiş; erişim kontrolü sorunumuz var."
- `[DEĞİŞKEN BİLGİ]` **Güncel sürüm OWASP Top 10:2025**; Kasım 2025'te yayımlandı ve 2021'den sonraki ilk büyük güncelleme. İki yeni kategori eklendi, SSRF ayrı bir madde olmaktan çıkıp erişim kontrolüne dahil edildi. **2021 listesine atıf yapan kaynaklar artık eskimiştir** ama uyum belgelerinde hâlâ 2021'e referans veriliyor olabilir.
- **Kaynak:** https://owasp.org/Top10/2025/0x00_2025-Introduction/

**OWASP Top 10:2025 kategorileri:**

| # | Kategori | Kısaca |
|---|---|---|
| **A01** | Broken Access Control | Yetkisi olmayanın erişebilmesi. Listenin en tepesinde kalmaya devam ediyor; SSRF de bu kategoriye dahil edildi |
| **A02** | Security Misconfiguration | Yanlış yapılandırma (2021'de 5. sıradaydı, 2.'ye yükseldi) |
| **A03** | Software Supply Chain Failures | **Yeni.** Bağımlılıklar, derleme ve dağıtım zincirinin bütünlüğü |
| **A04** | Cryptographic Failures | Şifreleme eksikliği veya yanlış kullanımı |
| **A05** | Injection | XSS ve SQL injection dahil enjeksiyon açıkları |
| **A06** | Insecure Design | Tasarımın kendisindeki güvenlik eksiği |
| **A07** | Authentication Failures | Kimlik doğrulama kusurları (Bölüm 12) |
| **A08** | Software or Data Integrity Failures | Güvenilmeyen kod veya verinin güvenilir sayılması |
| **A09** | Logging & Alerting Failures | Saldırıyı görememe ve zamanında tepki verememe |
| **A10** | Mishandling of Exceptional Conditions | **Yeni.** Beklenmedik durumların kötü yönetilmesi |

**Tasarımcı için iki not:** **A06 — Insecure Design** doğrudan seni ilgilendirir; kusur uygulamada değil, akışın kurgusundadır (zayıf hesap kurtarma akışı gibi). **A10 — Mishandling of Exceptional Conditions** ise Bölüm 7.9'daki durum ekranlarıyla akrabadır: bir sistemin beklenmedik durumu nasıl karşıladığı hem UX hem güvenlik meselesidir.

---

## 13.3 Yaygın açıklar

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

---

## 13.4 Tarayıcı güvenlik sınırları

### Same-origin policy

- **Terim (İngilizce):** Same-origin policy — SOP
- **Türkçesi:** Aynı köken politikası
- **Tanım:** Tarayıcının, bir sitenin başka bir sitenin verisine erişmesini varsayılan olarak engellemesi.
- **Ne işe yarar / neden var:** Web'in temel güvenlik sınırı. Bu kural olmasa, açık olan bir sekmedeki kötü niyetli site, başka bir sekmedeki banka hesabını okuyabilirdi.
- **Nerede karşına çıkar:** CORS hatalarının arka planında.
- **Örnek kullanım:** "Bu hata same-origin politikasından geliyor; API farklı bir alan adında."
- **İlgili terimler:** CORS, CSP

### CORS

- **Terim (İngilizce):** CORS — Cross-Origin Resource Sharing
- **Türkçesi:** Kökenler arası kaynak paylaşımı
- **Tanım:** Bir sunucunun, hangi başka alan adlarının kendisine erişebileceğini bildirmesi.
- **Ne işe yarar / neden var:** Same-origin politikasının kontrollü olarak gevşetilmesi. Ön yüz ile API farklı alan adlarındaysa gereklidir.
- **Nerede karşına çıkar:** Geliştirme sırasında en sık karşılaşılan hatalardan biri.
- **Örnek kullanım:** "CORS hatası alıyoruz; API'nin izin verilen kökenler listesine bizim alan adımızı eklemek gerekiyor."
- **Karıştırılanlar:** **Yaygın bir yanlış anlama:** CORS bir güvenlik önlemi gibi görünse de, aslında bir **gevşetme** mekanizmasıdır. Ayrıca CORS yalnızca tarayıcıyı bağlar; sunucudan sunucuya yapılan istekleri engellemez. Yani "CORS var, güvendeyiz" cümlesi yanlıştır — asıl koruma yetkilendirmedir.
- **İlgili terimler:** Same-origin policy, API (10.4)

### CSP

- **Terim (İngilizce):** CSP — Content Security Policy
- **Türkçesi:** İçerik güvenlik politikası
- **Tanım:** Sayfanın hangi kaynaklardan kod, stil, görsel ve font yükleyebileceğini sınırlayan politika.
- **Ne işe yarar / neden var:** XSS'e karşı ikinci savunma katmanı: bir açık oluşsa bile, saldırganın kodu izin verilen kaynaklar listesinde olmadığı için çalışmayabilir.
- **Nerede karşına çıkar:** Güvenlik başlıklarında.
- **Örnek kullanım:** "CSP ekleyelim ama üçüncü parti gömülü bileşenlerin kırılmadığından emin olalım."
- **Karıştırılanlar:** **Tasarım tarafında bir sürtüşme noktasıdır:** sıkı bir CSP, gömülü analitik, harita, video oynatıcı ve font servislerini kırabilir. Bu yüzden hangi üçüncü partilerin kullanılacağı kararı, CSP kararıyla birlikte alınmalıdır.
- **İlgili terimler:** XSS (13.3), Third-party (10.9), Clickjacking (13.3)

---

## 13.5 HTTPS ve sertifikalar

### TLS / SSL sertifikası

- **Terim (İngilizce):** TLS (Transport Layer Security), SSL certificate
- **Türkçesi:** Güvenli aktarım katmanı, güvenlik sertifikası
- **Tanım:** HTTPS'in (1.3) altındaki şifreleme teknolojisi ve sunucunun kimliğini kanıtlayan belge.
- **Ne işe yarar / neden var:** İki şey sağlar: trafiğin yolda okunamaması ve karşı tarafın gerçekten iddia ettiği site olması. Modern hosting platformları (16.6) sertifikayı otomatik alır ve yeniler.
- **Nerede karşına çıkar:** Yayın sürecinde ve alan adı yapılandırmasında (16.7).
- **Örnek kullanım:** "Sertifika otomatik yenileniyor mu? Süresi dolarsa tarayıcı büyük bir uyarı gösterir ve kullanıcı kaçar."
- **İlgili terimler:** HTTPS (1.3), DNS (16.7)

### Mixed content

- **Terim (İngilizce):** Mixed content
- **Türkçesi:** Karışık içerik
- **Tanım:** HTTPS bir sayfada, HTTP üzerinden yüklenen kaynaklar bulunması.
- **Ne işe yarar / neden var:** Sayfanın güvenlik garantisini bozar; tarayıcı bu kaynakları engelleyebilir veya uyarı gösterebilir. Sonuç: görseller yüklenmez, stiller bozulur.
- **Nerede karşına çıkar:** Eski siteler HTTPS'e geçirilirken.
- **Örnek kullanım:** "Bazı görseller yüklenmiyor; mixed content uyarısı var, adresleri HTTPS'e çevirelim."
- **İlgili terimler:** HTTPS (1.3), TLS

---

## 13.6 Secret yönetimi

### Secret

- **Terim (İngilizce):** Secret, credential, API key
- **Türkçesi:** Sır, kimlik bilgisi
- **Tanım:** Gizli kalması gereken değerler: API anahtarları (10.9), veritabanı şifreleri, imzalama anahtarları.
- **Ne işe yarar / neden var:** Sızan tek bir anahtar, tüm sistemin ele geçirilmesine yol açabilir. Bu yüzden koda yazılmaz, ortam değişkeninde (10.1) veya bir sır yöneticisinde tutulur.
- **Nerede karşına çıkar:** Her projede. `.gitignore` (15.10) dosyasının en önemli işlevlerinden biri, sır dosyalarının depoya girmesini engellemektir.
- **Örnek kullanım:** "`.env` dosyası `.gitignore`'da mı? Yanlışlıkla commit edilirse anahtarlar herkese açılır."
- **Karıştırılanlar:** **Depoya bir sır girdiyse, silmek yetmez.** Git geçmişinde kalır ve otomatik tarayıcılar bunu dakikalar içinde bulur. Doğru tepki: **anahtarı derhal iptal edip yenisini üretmek** (key rotation).
- **İlgili terimler:** Environment variable (10.1), .gitignore (15.10), API key (10.9)

### Ön yüz sırrı diye bir şey yoktur

- **Tanım:** Tarayıcıya gönderilen hiçbir değer gizli değildir.
- **Ne işe yarar / neden var:** Ortam değişkenlerinin ön yüze aktarılanları (genelde `PUBLIC_` veya `NEXT_PUBLIC_` gibi öneklerle işaretlenir) paketin içine gömülür ve herkes tarafından okunabilir. Aynı şekilde, ön yüzde gizlenen bir buton veya sayfa "korunmuş" değildir; sadece görünmüyordur.
- **Nerede karşına çıkar:** Güvenlik incelemelerinde ve rol tabanlı arayüz tasarımında.
- **Örnek kullanım:** "Yönetici butonunu ön yüzde gizlemek yeterli değil; sunucu tarafında da yetki kontrolü olmalı."
- **İlgili terimler:** Client-side vs server-side (1.6), Authorization (12.1)

---

## 13.7 Doğrulama, temizleme, kaçırma

Üçü sık karıştırılır ama farklı işler yapar ve farklı yerlerde uygulanır.

### Input validation

- **Terim (İngilizce):** Input validation
- **Türkçesi:** Girdi doğrulama
- **Tanım:** Gelen verinin beklenen kurallara uyup uymadığının kontrol edilmesi.
- **Ne işe yarar / neden var:** İlk savunma hattı. **Kritik kural: client-side doğrulama güvenlik sağlamaz** (1.6) — atlanabilir. Sunucu tarafındaki doğrulama zorunludur; client-side yalnızca kullanıcı deneyimi içindir.
- **Nerede karşına çıkar:** Her formda ve her API ucunda. Zod (9.9) gibi araçlar bu işi yapar.
- **Örnek kullanım:** "Server action'da da doğrulama yapalım; client tarafı atlanabilir."
- **İlgili terimler:** Zod (9.9), Form validation (7.11), Server action (10.6)

### Sanitization / Escaping

- **Terim (İngilizce):** Sanitization, escaping, output encoding
- **Türkçesi:** Temizleme, kaçırma
- **Tanım:** **Sanitization** tehlikeli kısımların veriden çıkarılmasıdır (zengin metinden betik etiketlerini ayıklamak gibi). **Escaping** ise verinin, gösterildiği bağlamda kod olarak yorumlanmamasını sağlamaktır.
- **Ne işe yarar / neden var:** XSS'e (13.3) karşı asıl savunma escaping'dir ve modern framework'ler bunu varsayılan olarak yapar. Sanitization ise yalnızca kullanıcının HTML girmesine izin verildiğinde gerekir.
- **Nerede karşına çıkar:** Zengin metin editörü ve kullanıcı içeriği gösterilen yerlerde.
- **Örnek kullanım:** "Zengin metni sunucuda temizleyelim; sadece izin verilen etiketler kalsın."
- **Karıştırılanlar:** **Üçü birbirinin yerine geçmez.** Doğrulama "bu veri kabul edilebilir mi", temizleme "tehlikeli kısmı çıkar", kaçırma "gösterirken kod sayılmasın" der. Hepsi gerekir.
- **İlgili terimler:** XSS (13.3), Input validation

---

## 13.8 Savunma ilkeleri

### Principle of least privilege

- **Terim (İngilizce):** Principle of least privilege — PoLP
- **Türkçesi:** En az ayrıcalık ilkesi
- **Tanım:** Her kullanıcıya, servise ve anahtara **yalnızca işini yapması için gereken** yetkinin verilmesi.
- **Ne işe yarar / neden var:** Bir hesap veya anahtar ele geçirildiğinde hasarı sınırlar. **Tasarım karşılığı:** varsayılan rolün ne olacağı bir güvenlik kararıdır. Yeni davet edilen bir kullanıcı varsayılan olarak yönetici mi oluyor, yoksa en dar yetkiyle mi başlıyor?
- **Nerede karşına çıkar:** Rol tasarımında (12.9), API anahtarı kapsamlarında, bulut izinlerinde.
- **Örnek kullanım:** "Davet edilen kullanıcı varsayılan olarak 'Member' olsun; 'Admin' bilinçli bir seçim gerektirsin."
- **İlgili terimler:** RBAC (12.9), Scope (12.9)

### Defense in depth

- **Terim (İngilizce):** Defense in depth
- **Türkçesi:** Katmanlı savunma
- **Tanım:** Tek bir korumaya güvenmek yerine birden fazla bağımsız katman kurmak.
- **Ne işe yarar / neden var:** Her koruma bir gün başarısız olabilir. Client-side doğrulama + server-side doğrulama + veritabanı kısıtı (11.5) üçlüsü, bunun tipik örneğidir: biri atlanırsa diğerleri devrede kalır.
- **Nerede karşına çıkar:** Mimari kararlarda.
- **Örnek kullanım:** "Yetki kontrolü hem middleware'de hem sorgu seviyesinde olsun; tek katmana güvenmeyelim."
- **İlgili terimler:** Least privilege, RLS (11.12), Input validation (13.7)

### Fail securely

- **Terim (İngilizce):** Fail securely, fail closed
- **Türkçesi:** Güvenli başarısız olma
- **Tanım:** Bir kontrol hata verdiğinde, sistemin **erişimi reddedecek** biçimde davranması.
- **Ne işe yarar / neden var:** Yetki servisi çöktüğünde herkesi içeri almak yerine kimseyi almamak gerekir. OWASP 2025'teki "beklenmedik durumların kötü yönetilmesi" kategorisi (A10) tam olarak bu tür sorunları kapsıyor.
- **Nerede karşına çıkar:** Hata yönetimi tasarımında.
- **Örnek kullanım:** "Yetki servisi yanıt vermezse erişimi kapatalım ve kullanıcıya açıklayıcı bir hata gösterelim."
- **İlgili terimler:** Error state (7.9), Defense in depth

---

## 13.9 Bot ve kötüye kullanım

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

---

## 13.10 KVKK ve GDPR'ın ürün tarafına yansıması

> Bu alt bölüm genel bilgilendirmedir, hukuki tavsiye değildir. Gerçek bir projede avukat görüşü al.

### KVKK ve GDPR

- **Terim (İngilizce):** KVKK (Kişisel Verilerin Korunması Kanunu), GDPR (General Data Protection Regulation)
- **Türkçesi:** Türkiye ve AB'nin kişisel veri koruma mevzuatları
- **Tanım:** Kişisel verinin nasıl toplanacağını, işleneceğini, saklanacağını ve silineceğini düzenleyen yasalar. KVKK (6698 sayılı Kanun) Türkiye'de, GDPR AB'de geçerlidir.
- **Ne işe yarar / neden var:** İkisi de benzer ilkelere dayanır: şeffaflık, amaçla sınırlılık, veri minimizasyonu, saklama süresi sınırı ve ilgili kişinin hakları.
- **Nerede karşına çıkar:** Kişisel veri toplayan her projede.
- **Örnek kullanım:** "AB'ye de hizmet veriyoruz; hem KVKK hem GDPR uyumunu düşünmemiz gerekiyor."
- **İlgili terimler:** Aydınlatma metni, Açık rıza, Data retention (11.11)

### Aydınlatma metni

- **Terim (İngilizce):** Privacy notice
- **Türkçesi:** Aydınlatma metni
- **Tanım:** Veri toplanmadan **önce** kullanıcıya sunulan, verisinin nasıl işleneceğini anlatan bilgilendirme.
- **Ne işe yarar / neden var:** KVKK m.10 kapsamında bir yükümlülüktür ve rıza gerektirip gerektirmediğinden bağımsız olarak sunulmalıdır. `[DEĞİŞKEN BİLGİ]` İlgili tebliğ uyarınca içeriğinde şunların bulunması bekleniyor: veri sorumlusunun kimliği, işleme amaçları, aktarılacak alıcı kategorileri, toplama yöntemi, hukuki sebep ve ilgili kişinin hakları.
- **Nerede karşına çıkar:** Form ve kayıt akışlarında; sitenin gizlilik sayfasında.
- **Örnek kullanım:** "Aydınlatma metnini form gönderilmeden önce erişilebilir kılalım; sadece footer'da olması yetmeyebilir."
- **Karıştırılanlar:** **Metnin dili bir tasarım meselesidir.** Kurum, aydınlatma metinlerinde açık, anlaşılır ve sade bir dil kullanılmamasını yaygın bir hata olarak niteliyor. Yani hukuk metnini olduğu gibi yapıştırmak, uyumsuzluk riski taşıyabilir.
- **İlgili terimler:** Açık rıza, Yasal sayfalar (13.11), UX writing (4.9)

### Açık rıza

- **Terim (İngilizce):** Explicit consent
- **Türkçesi:** Açık rıza
- **Tanım:** Belirli bir konuya ilişkin, bilgilendirmeye dayanan ve özgür iradeyle açıklanan onay.
- **Ne işe yarar / neden var:** Bazı veri işleme faaliyetleri için gereklidir. Ama **her şey için gerekli değildir** — sözleşmenin ifası, kanuni yükümlülük ve meşru menfaat gibi başka hukuki sebepler de vardır. Her şeyi rızaya dayandırmak yaygın bir hatadır ve riskli bir uygulamadır (rıza her an geri çekilebilir).
- **Nerede karşına çıkar:** Kayıt formlarında ve pazarlama izinlerinde.
- `[DEĞİŞKEN BİLGİ]` **Bu doğrudan bir arayüz kısıtı ve senin işin:** Kişisel Verileri Koruma Kurulu'nun 18.02.2026 tarihli ve 2026/347 sayılı ilke kararına ilişkin kamuoyu duyurusunda, **açık rıza metni ile aydınlatma metninin ayrı ayrı düzenlenmesi gerektiği** vurgulanıyor; ikisinin iç içe geçmiş tek bir metin hâlinde sunulması en sık karşılaşılan hukuka aykırılıklardan biri olarak niteleniyor. Aynı duyuruda, **aydınlatma yapıldığına dair kullanıcıdan onay/rıza istenmesinin** de hatalı olduğu belirtiliyor.
- **Örnek kullanım:** "Tek bir onay kutusuyla hem aydınlatmayı hem rızayı almayalım; ikisini ayıralım ve rıza gerçekten isteğe bağlı olsun."
- **Karıştırılanlar:** **Tasarım karşılığı çok somut:** yaygın "Aydınlatma metnini okudum ve kişisel verilerimin işlenmesine izin veriyorum" tek kutusu, bu yaklaşıma göre sorunludur. Aydınlatma bilgilendirmedir (onay istenmez); rıza ise ayrı, isteğe bağlı ve geri alınabilir olmalıdır.
- **İlgili terimler:** Aydınlatma metni, Cookie banner (7.7), Dark pattern (7.7)
- **Kaynak:** https://www.kvkk.gov.tr/Icerik/8710/veri-sorumlulari-tarafindan-acik-riza-ve-aydinlatma-metinlerinin-ayri-ayri-duzenlenmesi-gerektigi-hakkinda-kisisel-verileri-koruma-kurulunun-18-02-2026-tarihli-ve-2026-347-sayili-ilke-kararina-iliskin-kamuoyu-duyurusu

### Yurt dışına veri aktarımı

- **Terim (İngilizce):** Cross-border data transfer, adequacy decision, SCC (Standard Contractual Clauses)
- **Türkçesi:** Yurt dışına aktarım, yeterlilik kararı, standart sözleşme
- **Tanım:** Kişisel verinin Türkiye dışındaki bir sunucuya veya hizmet sağlayıcıya aktarılması.
- **Ne işe yarar / neden var:** **Bu, doğrudan teknoloji seçimini etkiler:** ABD'de barındırılan bir analitik servisi, e-posta servisi veya BaaS (11.12) kullanmak, yurt dışına veri aktarımı anlamına gelebilir.
- `[DEĞİŞKEN BİLGİ]` 7499 sayılı Kanun ile KVKK'nın 9. maddesinde köklü bir değişiklik yapıldığı ve **açık rızaya dayalı aktarımın genel kural olmaktan çıkıp istisna hâline geldiği** raporlanıyor. Yerine yeterlilik kararı ve standart sözleşme gibi güvence mekanizmaları getirildi; geçiş sürecinin 1 Eylül 2024'te tamamlandığı belirtiliyor. Standart sözleşmelerin Kuruma bildirilmesine dair süre koşulları da bulunuyor. **Bu bilgileri ikincil kaynaklardan aldım; kesin uygulama için mevzuata ve avukata bak.**
- **Nerede karşına çıkar:** Üçüncü parti servis seçiminde (10.15) ve hosting kararında (16.6).
- **Örnek kullanım:** "Bu analitik servisi verileri ABD'de tutuyor; yurt dışı aktarım rejimine göre değerlendirmemiz gerekiyor."
- **İlgili terimler:** Third-party (10.9), Hosting (16.6), BaaS (11.12)

### Ürün tarafına yansıyan ilkeler

Mevzuatın, doğrudan tasarım kararına dönüşen kısımları:

- **Veri minimizasyonu** — Toplamadığın veri, korumak zorunda olmadığın veridir. Formdaki her alan bir yükümlülüktür: "bu alanı gerçekten kullanıyor muyuz?" sorusu hem UX hem uyum sorusudur (11.11).
- **Amaçla sınırlılık** — Bir amaç için toplanan veri, başka bir amaçla kullanılamaz. "Kayıt için topladığımız e-postaya pazarlama gönderelim" bir uyum sorunu doğurabilir.
- **Saklama süresi** — Veri süresiz saklanamaz. Bir silme veya anonimleştirme politikası gerekir (11.11).
- **İlgili kişinin hakları** — Kullanıcı verisine erişme, düzeltme ve silinmesini isteme hakkına sahiptir. **Bunların bir arayüzü olmalıdır:** "verilerimi indir" ve "hesabımı sil" ekranları. Ayrıca başvuru yolu makul olmalıdır; yalnızca noter gibi maliyetli kanallar sunmak eleştirilen bir uygulamadır.
- **Şeffaflık** — Kullanıcı, ne toplandığını ve neden toplandığını anlayabilmelidir. Bu bir metin yazımı (4.9) işidir.

### Veri ihlali bildirimi

- **Terim (İngilizce):** Data breach notification
- **Türkçesi:** Veri ihlali bildirimi
- **Tanım:** Kişisel veri sızması durumunda, otoriteye ve etkilenen kişilere bildirim yapma yükümlülüğü.
- **Ne işe yarar / neden var:** Bir ihlal yaşandığında ne yapılacağının **önceden** planlanmış olması gerekir; olay anında öğrenilmez. Bildirimin metni ve kullanıcıya nasıl iletileceği de tasarlanması gereken bir şeydir.
- **Nerede karşına çıkar:** Olay müdahale planlarında (16.9).
- **Örnek kullanım:** "İhlal senaryosu için bir iletişim şablonumuz var mı? Olay anında yazmaya çalışmayalım."
- **İlgili terimler:** Incident (16.9), Postmortem (16.9)

---

## 13.11 Yasal sayfalar

Bir sitede bulunması beklenen hukuki içerikler. `[DEĞİŞKEN BİLGİ]` Hangilerinin zorunlu olduğu ülkeye, sektöre ve iş modeline göre değişir.

| Sayfa | Ne için |
|---|---|
| **Gizlilik politikası / Aydınlatma metni** | Kişisel verinin nasıl işlendiği (13.10) |
| **Çerez politikası** | Hangi çerezlerin hangi amaçla kullanıldığı (7.7) |
| **Kullanım şartları** | Hizmetin kullanım kuralları ve sorumluluk sınırları |
| **Mesafeli satış sözleşmesi / İade politikası** | E-ticarette zorunlu; teslimat, iade ve cayma hakkı |
| **İletişim ve kimlik bilgileri** | Ticari unvan, adres, vergi bilgileri (e-ticarette yasal zorunluluk) |
| **Erişilebilirlik beyanı** | Erişilebilirlik durumu ve geri bildirim yolu (6.2) |

**Tasarımcı için notlar:**
- Bu sayfalar footer'da (7.1) bulunur ama **yalnızca footer'da bulunmaları yeterli olmayabilir** — ilgili oldukları anda (form gönderimi, satın alma) da erişilebilir olmalıdırlar.
- Hukuk metinleri genelde tasarımın en ihmal edilen kısmıdır. Okunabilir bir tipografi (5.3), makul satır uzunluğu (5.3) ve iyi bir başlık yapısı (6.3) bu sayfalarda da gereklidir.
- **Katmanlı sunum** yaklaşımı işe yarar: özet bir üst katman ve detaya inen bir alt katman. Uzun bir hukuk metnini olduğu gibi dökmek, şeffaflık ilkesine hizmet etmez.

---

## 13.12 Kendini test et

**1.** Güvenlik açıklarının çoğu neden bir tasarım kararının sonucudur? Üç örnek ver.

**2.** Attack surface ile tasarım sadeliği arasındaki ilişki nedir?

**3.** OWASP Top 10'un güncel sürümü hangisidir ve 2021'e göre iki yeni kategori nedir?

**4.** XSS ile CSRF arasındaki fark nedir?

**5.** IDOR nedir ve neden tasarımcıyı doğrudan ilgilendirir? Asıl savunması nedir?

**6.** "URL gir, biz önizlemesini getirelim" özelliği hangi riski doğurur?

**7.** CORS bir güvenlik önlemi midir? "CORS var, güvendeyiz" cümlesi neden yanlış?

**8.** CSP ne yapar ve tasarımda hangi sürtüşmeyi yaratır?

**9.** Bir API anahtarı yanlışlıkla depoya commit edildi ve fark edilip silindi. Yeterli mi?

**10.** Ön yüzde bir butonu gizlemek, o işlemi korumak için yeterli mi? Neden?

**11.** Input validation, sanitization ve escaping arasındaki fark nedir?

**12.** Client-side doğrulama güvenlik sağlar mı?

**13.** En az ayrıcalık ilkesinin tasarımdaki karşılığı nedir? Bir örnek ver.

**14.** "Fail securely" ne demek? Yetki servisi çökerse ne yapılmalı?

**15.** CAPTCHA neden son çare olmalı?

**16.** WAF, koddaki bir açığı kapatır mı?

**17.** Veri minimizasyonu neden hem UX hem uyum meselesidir?

**18.** Aydınlatma metni ile açık rıza aynı onay kutusunda toplanabilir mi? Güncel yaklaşım ne diyor?

**19.** Her veri işleme faaliyeti için açık rıza gerekli midir? Her şeyi rızaya dayandırmanın riski nedir?

**20.** Bir ABD merkezli analitik servisi kullanmak hangi hukuki başlığı gündeme getirir?

**21.** İlgili kişinin haklarının arayüzdeki karşılığı nedir?

---

### Cevaplar

**1.** Çünkü mimari ve akış kararları, saldırı imkânlarını belirler. Örnekler: (a) URL'de sıralı ID göstermek → IDOR denemesini kolaylaştırır. (b) "Bu e-posta kayıtlı değil" mesajı → saldırgana hesap listesi verir. (c) Gereksiz form alanı toplamak → her kişisel veri bir yükümlülük ve sızma riski. (Ayrıca: çerez banner'ında reddi zorlaştırmak, gereksiz üçüncü parti gömmek.)

**2.** Her yeni özellik, form alanı ve üçüncü parti entegrasyon saldırı yüzeyini büyütür. **Kaldırılan bir özellik, korunması gereken bir yüzeyin de kaldırılması demektir** — yani sadelik burada bir güvenlik faydası üretir.

**3.** **OWASP Top 10:2025** (Kasım 2025'te yayımlandı). İki yeni kategori: **A03 Software Supply Chain Failures** ve **A10 Mishandling of Exceptional Conditions**. Ayrıca SSRF ayrı madde olmaktan çıkıp A01 Broken Access Control'e dahil edildi.

**4.** **XSS**, saldırganın **senin sitende** kod çalıştırmasıdır. **CSRF**, saldırganın **başka bir siteden** senin sitene, kullanıcının oturumunu kullanarak istek attırmasıdır. Farklı savunmalar gerektirirler (escaping/CSP vs SameSite/CSRF jetonu).

**5.** Bir kaydın kimliğini değiştirerek başkasına ait kayda erişebilmektir (`/siparis/1042` → `/siparis/1043`). Tasarımcıyı ilgilendirir çünkü URL yapısı ve kimlik gösterimi tasarım kararıdır. **Asıl savunma, her istekte "bu kayıt bu kullanıcıya mı ait?" kontrolüdür** — tahmin edilemez kimlik kullanmak yalnızca zorlaştırır, korumaz.

**6.** **SSRF** (Server-Side Request Forgery). Saldırgan, sunucunun iç ağdaki gizli servislere istek atmasını sağlayabilir. Hangi adreslere istek atılabileceği sınırlanmalıdır.

**7.** Hayır — CORS aslında same-origin politikasının **kontrollü gevşetilmesidir**. Ayrıca yalnızca tarayıcıyı bağlar; sunucudan sunucuya istekleri engellemez. "CORS var, güvendeyiz" yanlıştır çünkü asıl koruma **yetkilendirmedir**.

**8.** Sayfanın hangi kaynaklardan kod, stil, görsel ve font yükleyebileceğini sınırlar; XSS'e karşı ikinci savunma katmanıdır. **Sürtüşme:** sıkı bir CSP, gömülü analitik, harita, video oynatıcı ve font servislerini kırabilir — bu yüzden üçüncü parti seçimleri CSP kararıyla birlikte alınmalıdır.

**9.** **Hayır.** Sır, Git geçmişinde kalır ve otomatik tarayıcılar bunu dakikalar içinde bulur. Doğru tepki: **anahtarı derhal iptal edip yenisini üretmek** (key rotation).

**10.** Hayır. Tarayıcıya gönderilen hiçbir şey gizli değildir ve ön yüzde gizlenmiş bir öğe "korunmuş" değil, sadece görünmez durumdadır. **Sunucu tarafında da yetki kontrolü zorunludur.**

**11.** **Input validation**: gelen veri kurallara uyuyor mu? **Sanitization**: tehlikeli kısımları veriden çıkar. **Escaping**: gösterirken kod olarak yorumlanmasını engelle. Üçü farklı işler yapar ve birbirinin yerine geçmez.

**12.** Hayır. Client-side doğrulama atlanabilir; yalnızca kullanıcı deneyimi içindir. **Güvenlik sunucu tarafındaki doğrulamayla sağlanır.**

**13.** Her kullanıcıya, servise ve anahtara yalnızca işini yapması için gereken yetkinin verilmesi. Tasarımdaki karşılığı: **varsayılan rolün ne olacağı bir güvenlik kararıdır** — davet edilen kullanıcı varsayılan olarak en dar yetkiyle (Member) başlamalı, Admin bilinçli bir seçim gerektirmelidir.

**14.** Bir kontrol hata verdiğinde sistemin **erişimi reddedecek** biçimde davranması. Yetki servisi çökerse herkesi içeri almak yerine erişim kapatılmalı ve kullanıcıya açıklayıcı bir hata gösterilmelidir.

**15.** Çünkü bir **erişilebilirlik sorunudur**: görsel bulmacalar görme engelli kullanıcılar için engel oluşturur ve bilişsel yük ekler; WCAG 2.2'nin Accessible Authentication ölçütü bilişsel test gerektiren doğrulamaları sınırlar. Önce honeypot ve hız sınırı gibi kullanıcıya yük bindirmeyen yöntemler denenmelidir.

**16.** Hayır. WAF bazı saldırıları filtreler ama koddaki açığı kapatmaz. "WAF var" cümlesi bir güvenlik açığını mazur göstermez.

**17.** Çünkü **toplamadığın veri, korumak zorunda olmadığın veridir.** Formdaki her alan hem kullanıcı için sürtünme hem şirket için yükümlülük ve sızma riskidir. "Bu alanı gerçekten kullanıyor muyuz?" sorusu ikisini birden cevaplar.

**18.** Hayır — güncel yaklaşım bunu sorunlu buluyor. KVK Kurulu'nun ilgili ilke kararına dair duyurusunda, **açık rıza ve aydınlatma metinlerinin ayrı ayrı düzenlenmesi gerektiği** ve iç içe geçmiş tek metin olarak sunulmasının en sık karşılaşılan hukuka aykırılıklardan biri olduğu belirtiliyor. Ayrıca **aydınlatma yapıldığına dair onay istenmesi** de hatalı sayılıyor: aydınlatma bir bilgilendirmedir, onay gerektirmez.

**19.** Hayır. Sözleşmenin ifası, kanuni yükümlülük ve meşru menfaat gibi başka hukuki sebepler de vardır. **Her şeyi rızaya dayandırmanın riski:** rıza her an geri çekilebilir, dolayısıyla işleme faaliyetinin hukuki temeli kırılgan hâle gelir.

**20.** **Yurt dışına veri aktarımı.** KVKK'nın 9. maddesindeki değişikliklerle açık rızaya dayalı aktarım genel kural olmaktan çıktı; yeterlilik kararı veya standart sözleşme gibi güvence mekanizmaları gerekiyor. Bu, üçüncü parti servis ve hosting seçimini doğrudan etkiler.

**21.** **Ekranlar.** Kullanıcı verisine erişme, düzeltme ve silinmesini isteme hakkına sahiptir; bunun karşılığı "verilerimi indir" ve "hesabımı sil" akışlarıdır. Ayrıca başvuru yolu makul olmalıdır — yalnızca noter gibi maliyetli kanallar sunmak eleştirilen bir uygulamadır.

---

**Biten bölüm:** Bölüm 13 — Güvenlik ve hukuki yükümlülük
**Sıradaki bölüm:** Bölüm 14 — Sistem mimarisi ve sistem tasarımı
