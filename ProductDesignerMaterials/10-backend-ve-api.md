# Bölüm 10 — Back-end ve API

Bu bölümün amacı seni back-end geliştiricisi yapmak değil. Amaç şu üç şey:

1. Bir geliştirici "bu endpoint 429 dönüyor" dediğinde ne dendiğini anlaman.
2. Bir özelliğin **neden zor** olduğunu tahmin edebilmen — böylece gerçekçi tasarım yapman.
3. Tasarım kararlarının arka yüzde ne maliyet ürettiğini görmen. "Bu listede her ürünün yorumlarını da gösterelim" masum bir istek gibi görünür ama arka tarafta N+1 problemine (11.9) ve yavaş sayfaya dönüşebilir.

Bölüm 1.3'te request/response döngüsünü kurmuştuk. Burası onun detayı.

Bu bölümdeki bilginin çoğu **eskimeyen** kategoride: HTTP, REST, önbellekleme ve kuyruk mantığı 20 yıldır aynı. Değişken olanlar araç ve servis isimleri.

---

## 10.1 Sunucu tarafının temel kavramları

Server ve runtime kavramları 1.1 ve 9.1'de tanımlandı. Burada eksik kalan parçalar.

### Process

- **Terim (İngilizce):** Process
- **Türkçesi:** Süreç / işlem
- **Tanım:** Sunucuda çalışan tek bir program örneği.
- **Ne işe yarar / neden var:** Bir uygulama tek bir process olarak çalışıyorsa, o process çöktüğünde site düşer. Bu yüzden üretimde genelde birden fazla kopya çalıştırılır (14.6, horizontal scaling) ve önlerine bir dağıtıcı konur.
- **Nerede karşına çıkar:** Sunucu izleme ve çökme incelemelerinde.
- **Örnek kullanım:** "Process bellek sızıntısı yüzünden şişip yeniden başlıyor; loglara bakalım."
- **İlgili terimler:** Server (1.1), Horizontal scaling (14.6), Stateless (14.7)

### Port

- **Terim (İngilizce):** Port
- **Türkçesi:** Bağlantı noktası
- **Tanım:** Aynı makinede birden fazla servisin ayrı ayrı dinlenebilmesini sağlayan numaralı kapı.
- **Ne işe yarar / neden var:** `localhost:3000` adresindeki 3000 budur. Bir makinede aynı anda ön yüz (3000), API (4000) ve veritabanı (5432) çalışabilmesinin sebebi.
- **Nerede karşına çıkar:** Yerel geliştirmede ve Docker yapılandırmasında (16.4).
- **Örnek kullanım:** "Port çakışması var; başka bir uygulama 3000'i kullanıyor."
- **İlgili terimler:** Localhost (1.8), Docker (16.4)

### Environment variable

- **Terim (İngilizce):** Environment variable (env var)
- **Türkçesi:** Ortam değişkeni
- **Tanım:** Uygulamanın çalıştığı ortama göre değişen ayarların, kodun dışında tutulması.
- **Ne işe yarar / neden var:** Aynı kod, farklı ortamlarda (1.8) farklı veritabanına bağlanabilsin diye. Ayrıca API anahtarları gibi gizli bilgiler koda yazılmaz — bu bir güvenlik gereğidir (13.6).
- **Nerede karşına çıkar:** Deploy sorunlarının en yaygın sebebi eksik veya yanlış ortam değişkenidir.
- **Örnek kullanım:** "Local'de çalışıyor ama production'da patlıyor; bir env var eksik olabilir."
- **Karıştırılanlar:** Ön yüze gönderilen ortam değişkenleri **gizli değildir** — tarayıcıya giden her şey görülebilir. Gerçek sırlar yalnızca sunucuda kalan değişkenlerde tutulur. Detay 13.6 ve 16.3'te.
- **İlgili terimler:** Secret yönetimi (13.6), Ortamlar (1.8, 16.3)

---

## 10.2 HTTP metodları

İstemcinin sunucudan ne yapmasını istediğini bildiren fiiller. Beş tanesini bilmek yeterli.

| Metot | Ne yapar | Güvenli mi | Idempotent mi |
|---|---|---|---|
| **GET** | Veri okur, hiçbir şeyi değiştirmez | Evet | Evet |
| **POST** | Yeni kayıt oluşturur veya bir işlem tetikler | Hayır | Hayır |
| **PUT** | Bir kaydı **tamamen** değiştirir | Hayır | Evet |
| **PATCH** | Bir kaydın **bir kısmını** değiştirir | Hayır | Genelde hayır |
| **DELETE** | Bir kaydı siler | Hayır | Evet |

### Safe / Idempotent

- **Terim (İngilizce):** Safe method, idempotent method
- **Türkçesi:** Güvenli metot, değişmez sonuçlu metot
- **Tanım:** **Safe** = veriyi değiştirmez, sadece okur. **Idempotent** = aynı isteği bir kez de gönderirsen, on kez de gönderirsen sonuç aynı olur.
- **Ne işe yarar / neden var:** Bu ayrım hem güvenlik hem kullanıcı deneyimi kararlarını belirler. **En somut karşılığı:** POST idempotent değildir, yani bir kullanıcı "Sipariş ver" butonuna iki kez basarsa iki sipariş oluşabilir. Bu yüzden butonun basıldıktan sonra devre dışı bırakılması ve yükleme durumu göstermesi (7.9) sadece estetik değil, **veri bütünlüğü meselesidir.**
- **Nerede karşına çıkar:** Form ve ödeme akışlarında; yeniden deneme mantığında (10.12).
- **Örnek kullanım:** "Sipariş butonu POST atıyor ve idempotent değil; çift tıklamayı engellemeliyiz veya sunucuya idempotency key göndermeliyiz."
- **Karıştırılanlar:** GET isteklerinin veri değiştirmemesi bir kuraldır, teknik bir zorunluluk değil. Veri değiştiren bir GET endpoint'i yazmak mümkündür ama ciddi bir hatadır: tarayıcılar ve önbellekler GET'i güvenli varsayar ve isteği kendiliğinden tekrarlayabilir.
- **İlgili terimler:** Idempotency (14.11), Caching (10.11), Loading state (7.9)

---

## 10.3 Status kodları

Sunucunun "ne oldu" cevabı. Üç haneli sayının **ilk hanesi** kategoriyi verir; onu bilmek çoğu durumda yeter.

| Aralık | Anlamı | Kim sorumlu |
|---|---|---|
| **2xx** | Başarılı | — |
| **3xx** | Yönlendirme | — |
| **4xx** | İstemci hatası — istek yanlış | İstemci / kullanıcı |
| **5xx** | Sunucu hatası — istek doğru ama sunucu beceremedi | Sunucu |

**Sık göreceğin kodlar:**

| Kod | Adı | Ne demek | Tasarımda karşılığı |
|---|---|---|---|
| **200** | OK | İşlem başarılı | Normal akış |
| **201** | Created | Yeni kayıt oluşturuldu | Başarı durumu (7.9) |
| **204** | No Content | Başarılı ama dönecek veri yok | Silme sonrası |
| **301 / 302** | Moved | Kalıcı / geçici yönlendirme | SEO'da kritik (8.13) |
| **304** | Not Modified | İçerik değişmemiş, önbellektekini kullan | Kullanıcı görmez |
| **400** | Bad Request | İstek biçimsiz veya eksik | Form hatası (4.9) |
| **401** | Unauthorized | Kimliğin doğrulanmamış | Giriş ekranına yönlendir |
| **403** | Forbidden | Kimliğin belli ama yetkin yok | "Bu sayfaya erişiminiz yok" ekranı |
| **404** | Not Found | Böyle bir şey yok | 404 sayfası (7.9) |
| **409** | Conflict | Çakışma (aynı e-posta zaten kayıtlı gibi) | Alan bazlı hata mesajı |
| **422** | Unprocessable | İstek anlaşıldı ama içerik geçersiz | Doğrulama hatası |
| **429** | Too Many Requests | Çok fazla istek attın | "Biraz bekleyin" mesajı (10.10) |
| **500** | Internal Server Error | Sunucuda beklenmedik hata | Hata ekranı (7.9) |
| **502 / 503 / 504** | Gateway / Unavailable / Timeout | Sunucu erişilemiyor veya yanıt vermedi | Bakım veya hata ekranı |

### 401 vs 403

- **Terim (İngilizce):** 401 Unauthorized, 403 Forbidden
- **Türkçesi:** Kimlik doğrulanmadı, erişim yasak
- **Tanım:** **401** = "kim olduğunu bilmiyorum, giriş yap." **403** = "kim olduğunu biliyorum ama buraya giremezsin."
- **Ne işe yarar / neden var:** İkisi tamamen farklı tasarım gerektirir. 401'de kullanıcıyı giriş ekranına yönlendirirsin; 403'te giriş ekranına yönlendirmek hatadır — kullanıcı zaten giriş yapmıştır ve tekrar giriş yapması bir şeyi değiştirmez. 403 için "erişiminiz yok, yetki talep edin" gibi ayrı bir ekran gerekir.
- **Nerede karşına çıkar:** Yetkilendirme akışlarında (12.9).
- **Örnek kullanım:** "403 alınca giriş sayfasına atıyoruz; kullanıcı sonsuz döngüye giriyor. Ayrı bir yetki ekranı yapalım."
- **İlgili terimler:** Authentication vs authorization (12.1), Error state (7.9)

### 429

- **Terim (İngilizce):** 429 Too Many Requests
- **Türkçesi:** Çok fazla istek
- **Tanım:** İstemcinin kısa sürede çok fazla istek attığı ve geçici olarak sınırlandığı durum.
- **Ne işe yarar / neden var:** Rate limiting'in (10.10) kullanıcıya yansıyan yüzü. **Tasarlanması gereken bir durumdur** ama neredeyse hep atlanır: kullanıcı ne kadar beklemesi gerektiğini bilmelidir. Sunucu genelde bir `Retry-After` bilgisi döner ve bu, arayüzde geri sayım olarak gösterilebilir.
- **Nerede karşına çıkar:** Arama, giriş denemesi ve dış servis çağrılarında.
- **Örnek kullanım:** "429'da 'çok fazla deneme, 30 saniye sonra tekrar deneyin' diyelim; sadece 'hata oluştu' yazmayalım."
- **İlgili terimler:** Rate limiting (10.10), Error message (4.9)

---

## 10.4 API kavramları

### API

- **Terim (İngilizce):** API — Application Programming Interface
- **Türkçesi:** Uygulama programlama arayüzü
- **Tanım:** İki yazılımın birbiriyle konuşma biçimini tanımlayan sözleşme.
- **Ne işe yarar / neden var:** Ön yüz ile arka yüzü birbirinden ayırır: ikisi ayrı ekipler tarafından, ayrı hızlarda geliştirilebilir. Ayrıca aynı arka yüz, hem web hem mobil hem üçüncü partiler tarafından kullanılabilir.
- **Nerede karşına çıkar:** Her teknik konuşmada.
- **Örnek kullanım:** "Bu ekran için gereken veriyi tek bir API çağrısıyla alabilir miyiz?"
- **İlgili terimler:** Endpoint, Contract, REST (10.5)

### Endpoint / Resource

- **Terim (İngilizce):** Endpoint, resource
- **Türkçesi:** Uç nokta, kaynak
- **Tanım:** Endpoint, API'nin belirli bir işlevine karşılık gelen adrestir (`/api/urunler/123`). Resource ise o adresin temsil ettiği şeydir (bir ürün).
- **Ne işe yarar / neden var:** API'yi konuşulabilir parçalara böler. "Şu endpoint yavaş", "bu endpoint 500 dönüyor" gibi cümlelerin birimidir.
- **Nerede karşına çıkar:** Her API konuşmasında ve DevTools'un Network sekmesinde.
- **Örnek kullanım:** "Liste endpoint'i her ürünün tüm açıklamasını dönüyor; kart görünümünde kullanmıyoruz."
- **İlgili terimler:** API, Payload (1.3), URL (1.2)

### Contract

- **Terim (İngilizce):** API contract, schema
- **Türkçesi:** Sözleşme
- **Tanım:** Bir endpoint'in hangi girdileri kabul ettiğini ve hangi çıktıyı döndüğünü tanımlayan anlaşma.
- **Ne işe yarar / neden var:** Ön yüz ve arka yüzün **paralel çalışmasını** mümkün kılar: sözleşme belirlendikten sonra iki taraf birbirini beklemez. Tasarımcı için önemi şu: sözleşme, hangi alanların geleceğini ve hangilerinin boş olabileceğini söyler — yani hangi boş ve uç durumları (4.4) tasarlaman gerektiğini.
- **Nerede karşına çıkar:** Özellik başlangıcında. OpenAPI (Swagger) belgesi bunun standart biçimidir.
- **Örnek kullanım:** "Sözleşmeye bakalım: `discount` alanı opsiyonel, o zaman indirimsiz kart görünümünü de tasarlamalıyız."
- **Karıştırılanlar:** Sözleşmeyi habersiz değiştirmek (**breaking change**) ön yüzü kırar. Bu yüzden sürümleme yapılır.
- **İlgili terimler:** Type (8.6), Edge case (4.4), API versioning

### API versioning

- **Terim (İngilizce):** API versioning, breaking change, deprecation
- **Türkçesi:** API sürümleme, kırıcı değişiklik
- **Tanım:** API'nin değişirken eski kullanıcılarını kırmamasını sağlayan yaklaşım — genelde adrese sürüm koyarak (`/api/v2/...`).
- **Ne işe yarar / neden var:** Bir API'yi dışarıya açtıysan, onu kullananları haberdar etmeden değiştiremezsin. Mobil uygulamalar özellikle kritiktir: kullanıcı güncellemeyi yüklemediyse eski sürümü kullanmaya devam eder.
- **Nerede karşına çıkar:** Genel API'lerde ve mobil uygulamalı ürünlerde.
- **Örnek kullanım:** "Bu değişiklik kırıcı; v2 açalım ve v1 için altı aylık geçiş süresi verelim."
- **İlgili terimler:** Contract, Semantic versioning (15.8), Deprecation (2.11)

---

## 10.5 API stilleri

Aynı işi yapmanın farklı yolları. **Bu bir mimari karardır ve tasarımı etkiler.**

### REST

- **Terim (İngilizce):** REST — Representational State Transfer
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Kaynakları adreslerle temsil eden ve HTTP metotlarını (10.2) doğal biçimde kullanan API yaklaşımı.
- **Ne işe yarar / neden var:** Basit, herkesin bildiği ve her yerde çalışan yaklaşım. **En büyük avantajı önbelleklemedir:** her kaynağın kendi URL'i olduğu için tarayıcı ve CDN (10.11) onu doğal olarak önbelleğe alabilir. Dış geliştiricilere açılan API'ler için hâlâ fiilî standart.
- **Nerede karşına çıkar:** Her yerde. Kamu API'lerinin ve üçüncü parti entegrasyonların ezici çoğunluğu REST'tir.
- **Örnek kullanım:** "Dışarıya açacağımız API REST olsun; entegrasyon yapacak herkes zaten biliyor."
- **Karıştırılanlar:** İki bilinen zayıflığı vardır: **over-fetching** (ihtiyacından fazla veri gelmesi) ve **under-fetching** (bir ekran için birden fazla istek atmak zorunda kalmak). GraphQL tam olarak bu iki sorun için doğdu.
- **İlgili terimler:** GraphQL, HTTP metodları (10.2), Caching (10.11)

### GraphQL

- **Terim (İngilizce):** GraphQL
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** İstemcinin, tam olarak hangi alanları istediğini kendisinin belirlediği API yaklaşımı.
- **Ne işe yarar / neden var:** Over-fetching ve under-fetching sorunlarını çözer: tek bir istekte, tam ihtiyaç duyulan alanlar alınır. Özellikle mobil uygulamalarda (bant genişliği kısıtlı) ve karmaşık iç içe veri yapılarında değerli.
- **Nerede karşına çıkar:** Çok sayıda farklı istemcisi olan büyük ürünlerde.
- **Örnek kullanım:** "Mobil ve web farklı alanlar istiyor; GraphQL bunu tek endpoint'le çözer."
- **Ne zaman kullanılmaz:** Karmaşıklık maliyeti yüksektir: önbellekleme zorlaşır (tek endpoint, farklı sorgular), pahalı sorgulara karşı koruma gerekir, ekstra bir katman ve araç zinciri gelir. Basit CRUD uygulamalarında getirdiğinden fazlasını götürür.
- `[DEĞİŞKEN BİLGİ]` Kaynaklar GraphQL'in benimsenme oranında **tutarsız** rakamlar veriyor (%25 ile %61 arası). Ortak nokta: REST hâlâ açık ara en yaygın; GraphQL zirve beklentisinin altında kaldı ve büyük, çok istemcili organizasyonlarda yoğunlaşıyor. Rakamlara değil, bu niteliksel resme güven.
- **İlgili terimler:** REST, N+1 (11.9), BFF (10.6)

### tRPC

- **Terim (İngilizce):** tRPC
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Ön yüz ile arka yüzün aynı TypeScript projesinde olduğu durumlarda, aradaki API katmanını neredeyse görünmez kılan yaklaşım.
- **Ne işe yarar / neden var:** Ayrı bir şema dili veya kod üretimi olmadan uçtan uca tip güvenliği verir: arka yüzde bir alan adını değiştirdiğinde, ön yüzde hata anında görünür. Küçük ekipler ve TypeScript monorepoları için ciddi hız kazancı.
- **Nerede karşına çıkar:** Next.js + TypeScript projelerinde. `[DEĞİŞKEN BİLGİ]` T3 Stack denen yaygın bir kombinasyonun (Next.js + Prisma + tRPC) parçası olarak anılıyor.
- **Örnek kullanım:** "Tek web istemcimiz var ve her şey TypeScript; tRPC ile API katmanını hafifletebiliriz."
- **Ne zaman kullanılmaz:** **Yalnızca TypeScript istemcileri için çalışır.** Dışarıya API açacaksan, Swift/Kotlin gibi başka dillerde istemcin olacaksa veya webhook alacaksan, tRPC o kısmı çözmez. Yaygın çözüm melez mimaridir: içeride tRPC, dışarıya bakan uçlarda REST.
- **İlgili terimler:** TypeScript (8.6), Zod (9.9), REST

### WebSocket / SSE / Polling

- **Terim (İngilizce):** WebSocket, SSE (Server-Sent Events), polling, long polling
- **Türkçesi:** Çift yönlü bağlantı, sunucu olayları, yoklama
- **Tanım:** Sunucudan istemciye **anlık** veri göndermenin üç yolu:
  - **Polling** — istemci belirli aralıklarla "yeni bir şey var mı?" diye sorar. Basit ama israflı.
  - **SSE** — sunucu tek yönlü olarak istemciye sürekli veri gönderir. Bildirim ve canlı akış için yeterli.
  - **WebSocket** — çift yönlü kalıcı bağlantı. Sohbet, işbirlikçi düzenleme ve oyun için gerekli.
- **Ne işe yarar / neden var:** Tasarım tarafındaki karşılığı: bir özelliğin "gerçek zamanlı" olması bedava değildir. "Bildirimler anında gelsin" isteği, altyapıda ek bir bağlantı katmanı demektir. Çoğu durumda 30 saniyelik bir tazeleme yeterlidir ve çok daha ucuzdur.
- **Nerede karşına çıkar:** Bildirim, sohbet, canlı gösterge ve işbirliği özelliklerinde.
- **Örnek kullanım:** "Bildirim için WebSocket'e gerek yok; SSE veya 30 saniyelik polling yeter."
- **İlgili terimler:** Notification center (7.12), Activity feed (7.12), Optimistic UI (7.9)

### gRPC

- **Terim (İngilizce):** gRPC
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Servislerin birbiriyle yüksek hızda konuşması için tasarlanmış, ikili (binary) protokol kullanan yaklaşım.
- **Ne işe yarar / neden var:** JSON'a göre çok daha hızlı serileştirme sunar. Tarayıcıdan doğrudan kullanımı sınırlıdır; asıl yeri **sunucular arası** iletişimdir (mikroservisler, 14.2).
- **Nerede karşına çıkar:** Büyük ölçekli sistemlerde. **Seviye 3** terim: adını duyduğunda kategorisini bilmen yeterli.
- **Örnek kullanım:** "İç servisler gRPC ile konuşuyor; dışarıya REST gateway açıyoruz."
- **İlgili terimler:** Microservice (14.2), REST

---

## 10.6 Server action, API route, BFF

Modern meta-framework'lerin (9.3) getirdiği yaklaşımlar.

### API route

- **Terim (İngilizce):** API route
- **Türkçesi:** API yolu
- **Tanım:** Ön yüz projesinin içinde tanımlanan, sunucuda çalışan endpoint.
- **Ne işe yarar / neden var:** Ayrı bir arka yüz projesi kurmadan sunucu tarafı kod yazmayı sağlar. Küçük ve orta projelerde ayrı bir back-end ekibine olan ihtiyacı ortadan kaldırır.
- **Nerede karşına çıkar:** Next.js ve benzeri meta-framework'lerde.
- **Örnek kullanım:** "Form gönderimi için ayrı bir sunucu kurmayalım; API route yeter."
- **İlgili terimler:** Server action, Meta-framework (9.1), Serverless (10.8)

### Server action

- **Terim (İngilizce):** Server action
- **Türkçesi:** Sunucu eylemi
- **Tanım:** Ön yüz kodundan doğrudan çağrılabilen ama sunucuda çalışan işlev.
- **Ne işe yarar / neden var:** Aradaki API katmanını yazma ihtiyacını ortadan kaldırır: form gönderimi için endpoint tanımlamak, adres yazmak ve yanıtı elle işlemek gerekmez. React Server Components (8.10) ile birlikte gelen bir yaklaşım.
- **Nerede karşına çıkar:** Modern Next.js projelerinde form ve mutasyon işlemlerinde.
- **Örnek kullanım:** "Bu formu server action ile bağlayalım; ayrı endpoint'e gerek yok."
- **Karıştırılanlar:** Kolaylık, doğrulama ve yetki kontrolünü atlamak için gerekçe değildir. Server action da bir endpoint'tir ve **girdi doğrulaması ile yetki kontrolü orada da zorunludur** (13.7, 12.9).
- **İlgili terimler:** API route, RSC (8.10), Zod (9.9)

### BFF

- **Terim (İngilizce):** BFF — Backend For Frontend
- **Türkçesi:** Ön yüz için arka yüz
- **Tanım:** Her istemci türü için (web, mobil) ona özel şekillendirilmiş ince bir arka yüz katmanı.
- **Ne işe yarar / neden var:** Ön yüzün ihtiyacı olan veriyi tek bir yerde toplar: üç farklı iç servisten veri çekip tek bir yanıt hâline getirir. Böylece ön yüz üç ayrı istek atmak zorunda kalmaz (under-fetching).
- **Nerede karşına çıkar:** Mikroservis mimarilerinde ve çok istemcili ürünlerde.
- **Örnek kullanım:** "Ekran üç ayrı servisten veri istiyor; BFF katmanı ekleyip tek istekte toplayalım."
- **İlgili terimler:** GraphQL (10.5), Microservice (14.2), Round trip (1.3)

---

## 10.7 Katmanlar

Arka yüz kodunun nasıl organize edildiği. **Seviye 2** terimler.

### Middleware

- **Terim (İngilizce):** Middleware
- **Türkçesi:** Ara katman
- **Tanım:** İstek asıl işleme ulaşmadan önce ondan geçen ara kod.
- **Ne işe yarar / neden var:** Her endpoint'te tekrar edilmesi gereken işleri tek yerde toplar: kimlik kontrolü, hız sınırı, günlük kaydı, dil tespiti, yönlendirme. Bir kullanıcı giriş yapmamışsa middleware onu daha en başta durdurur.
- **Nerede karşına çıkar:** Auth ve yönlendirme konuşmalarında.
- **Örnek kullanım:** "Giriş kontrolünü middleware'e alalım; her sayfada ayrı ayrı kontrol etmeyelim."
- **İlgili terimler:** Auth (Bölüm 12), Rate limiting (10.10)

### Controller / Service / Repository

- **Terim (İngilizce):** Controller, service, repository
- **Türkçesi:** Denetleyici, servis, depo
- **Tanım:** Arka yüz kodunun sorumluluklara göre bölünmesi: **controller** isteği karşılar ve yanıtı döner, **service** iş kurallarını içerir, **repository** veritabanıyla konuşur.
- **Ne işe yarar / neden var:** Katmanlı ayrım, bir kuralın nerede yaşadığını netleştirir ve test edilebilirliği artırır. "İndirim kuralını nereye yazacağız?" sorusunun cevabı: service katmanına — böylece hem web hem mobil hem arka plan işi aynı kuralı kullanır.
- **Nerede karşına çıkar:** Kod yapısı tartışmalarında.
- **Örnek kullanım:** "Bu hesaplama controller'da; service'e taşıyalım ki başka yerden de çağrılabilsin."
- **İlgili terimler:** Katmanlı mimari (14.3), Clean code (17.8)

---

## 10.8 Serverless ve edge

Sunucu yönetmeden sunucu kodu çalıştırmanın yolları.

### Serverless

- **Terim (İngilizce):** Serverless, function as a service (FaaS)
- **Türkçesi:** Sunucusuz
- **Tanım:** Kodun, sürekli açık bir sunucu yerine, yalnızca istek geldiğinde çalıştırılıp sonra kapatılan işlevler hâlinde barındırılması.
- **Ne işe yarar / neden var:** Sunucu yönetimini ortadan kaldırır ve **kullandığın kadar ödeme** modeli sunar. Trafiği düzensiz olan projeler için ekonomiktir: gece kimse kullanmıyorsa hiçbir şey ödemezsin. Ölçeklenme otomatiktir.
- **Nerede karşına çıkar:** Vercel, Netlify ve bulut sağlayıcılarının varsayılan modeli.
- **Örnek kullanım:** "Trafik dalgalı; serverless mantıklı, sabit sunucu maliyeti taşımayalım."
- **Karıştırılanlar:** **İsim yanıltıcıdır — sunucu vardır**, sadece sen yönetmezsin. Ayrıca sınırları vardır: uzun süren işler için uygun değildir (bunlar kuyruğa gider, 10.12), veritabanı bağlantılarını yönetmek ek özen ister ve çok yüksek sabit trafikte klasik sunucudan pahalı olabilir.
- **İlgili terimler:** Cold start, Edge function, Hosting (16.6)

### Cold start

- **Terim (İngilizce):** Cold start
- **Türkçesi:** Soğuk başlangıç
- **Tanım:** Bir serverless işlevin uzun süre çağrılmadıktan sonra ilk çağrıda yaşadığı ek başlangıç gecikmesi.
- **Ne işe yarar / neden var:** Serverless'ın bilinen bedeli. Kullanıcı açısından: gece kimsenin girmediği bir siteye sabah ilk giren kişi diğerlerinden yavaş bir deneyim yaşayabilir.
- **Nerede karşına çıkar:** Performans şikâyetlerinin gizli sebeplerinden biri.
- **Örnek kullanım:** "İlk istek 2 saniye, sonrakiler 200ms; cold start'a benziyor."
- **İlgili terimler:** Serverless, TTFB (8.12), Latency (1.3)

### Edge function

- **Terim (İngilizce):** Edge function, edge computing, region
- **Türkçesi:** Uç işlev, bölge
- **Tanım:** Kodun, tek bir merkezî veri merkezi yerine kullanıcıya coğrafi olarak yakın sunucularda çalıştırılması.
- **Ne işe yarar / neden var:** Gecikmeyi (1.3) düşürür: kullanıcı İstanbul'daysa ve kod Frankfurt yerine yakın bir noktada çalışıyorsa fark milisaniyelerle ölçülür. Yönlendirme, A/B test dağıtımı, kişiselleştirme ve dil tespiti gibi hafif işler için idealdir.
- **Nerede karşına çıkar:** Modern hosting platformlarında.
- **Örnek kullanım:** "Dil tespitini edge'de yapalım; kullanıcı doğru dile hemen yönlensin."
- **Karıştırılanlar:** Edge ortamı sınırlıdır: bazı Node API'leri çalışmaz ve veritabanı uzaktaysa kazanç kaybolabilir — kod kullanıcıya yakın olsa da veri hâlâ uzaktadır.
- **İlgili terimler:** CDN (10.11), Latency (1.3), Serverless

---

## 10.9 Dış dünyayla entegrasyon

### Webhook

- **Terim (İngilizce):** Webhook
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir dış servisin, bir olay gerçekleştiğinde **senin** sunucunu çağırması.
- **Ne işe yarar / neden var:** Yönü terstir: normalde sen dış servise sorarsın; webhook'ta o sana haber verir. "Ödeme onaylandı", "e-posta açıldı", "kargo teslim edildi" bilgileri böyle gelir. Sürekli sorup durmaktan (polling) çok daha verimlidir.
- **Nerede karşına çıkar:** Ödeme, e-posta ve kargo entegrasyonlarında.
- **Örnek kullanım:** "Ödeme onayını webhook'la alalım; kullanıcı sayfayı kapatsa bile sipariş güncellensin."
- **Karıştırılanlar:** **Tasarım açısından kritik bir sonucu var:** webhook gecikmeli gelebilir. Kullanıcı ödemeyi tamamladıktan sonra sipariş durumu hemen güncellenmeyebilir. Bu ara durum ("işleniyor") tasarlanmalıdır — yoksa kullanıcı "param gitti ama sipariş yok" paniği yaşar.
- **İlgili terimler:** Polling (10.5), Loading state (7.9), Idempotency (14.11)

### Third-party integration / SDK

- **Terim (İngilizce):** Third-party integration, SDK (Software Development Kit)
- **Türkçesi:** Üçüncü parti entegrasyon, yazılım geliştirme kiti
- **Tanım:** Dış bir servisin özelliklerini kullanmak; SDK ise o servisin kendi sağladığı hazır kod paketidir.
- **Ne işe yarar / neden var:** Ödeme, harita, analiz ve e-posta gibi işleri sıfırdan yazmak yerine hazır servisle çözer. SDK entegrasyonu kolaylaştırır.
- **Nerede karşına çıkar:** Neredeyse her projede.
- **Örnek kullanım:** "Harita için SDK gömüyoruz ama 90KB ekliyor; lazy load edelim."
- **Karıştırılanlar:** Her üçüncü parti bir **bağımlılık ve risk**tir: paket boyutu (8.12), performans, gizlilik (13.10) ve o servisin çökmesi durumunda ne olacağı. Ayrıca ön yüze gömülen üçüncü parti kodlar kullanıcı verisine erişebilir.
- **İlgili terimler:** Vendor lock-in (9.12), Bundle size (8.12), KVKK (13.10)

### API key

- **Terim (İngilizce):** API key, secret key, publishable key
- **Türkçesi:** API anahtarı
- **Tanım:** Bir dış servise kimliğini kanıtlayan gizli dizi.
- **Ne işe yarar / neden var:** Servisin seni tanıması ve faturalandırması için. **Kritik ayrım:** bazı servisler iki tür anahtar verir — ön yüze gömülebilen "yayınlanabilir" anahtar ve yalnızca sunucuda kalması gereken "gizli" anahtar. İkincisini ön yüz koduna koymak ciddi bir güvenlik açığıdır ve otomatik tarayıcılar tarafından anında bulunur.
- **Nerede karşına çıkar:** Her entegrasyonda.
- **Örnek kullanım:** "Bu anahtar gizli; ön yüzde kullanamayız, isteği sunucudan geçirelim."
- **İlgili terimler:** Secret yönetimi (13.6), Environment variable (10.1)

---

## 10.10 Sınırlama ve sayfalama

### Rate limiting

- **Terim (İngilizce):** Rate limiting, throttling, quota
- **Türkçesi:** Hız sınırlama, kısıtlama, kota
- **Tanım:** Bir kullanıcının veya IP'nin belirli sürede atabileceği istek sayısının sınırlanması.
- **Ne işe yarar / neden var:** Kötüye kullanımı, bot saldırılarını ve maliyet patlamalarını engeller. Giriş ekranında şifre deneme saldırılarına karşı temel savunmadır (13.9).
- **Nerede karşına çıkar:** Giriş, arama, form gönderimi ve dış servis çağrılarında.
- **Örnek kullanım:** "Giriş denemesini dakikada 5 ile sınırlayalım; sonra 429 dönüp bekleme süresi gösterelim."
- **Karıştırılanlar:** Sınıra takılan **gerçek kullanıcıya** ne gösterileceği bir tasarım işidir (10.3, 429). Ayrıca sınır çok sıkı olursa meşru kullanımı engeller.
- **İlgili terimler:** 429 (10.3), CAPTCHA (13.9), Auth (Bölüm 12)

### Pagination: offset vs cursor

- **Terim (İngilizce):** Offset pagination, cursor pagination
- **Türkçesi:** Konum tabanlı ve imleç tabanlı sayfalama
- **Tanım:** **Offset**: "20. kayıttan itibaren 20 tane ver" — klasik sayfa numaralarını mümkün kılar. **Cursor**: "şu kayıttan sonrakileri ver" — sayfa numarası olmaz ama sonsuz kaydırma için daha uygundur.
- **Ne işe yarar / neden var:** **Bu teknik ayrımın doğrudan tasarım sonucu vardır** (7.10): sayfa numaralı bir arayüz istiyorsan offset gerekir. Ama offset'in iki bilinen zayıflığı var: çok derin sayfalarda yavaşlar, ve liste sürekli değişiyorsa kayıtlar sayfalar arasında kayabilir veya tekrarlanabilir. Cursor bu sorunları çözer ama "5. sayfaya git" özelliğini imkânsız kılar.
- **Nerede karşına çıkar:** Liste ve akış tasarımında.
- **Örnek kullanım:** "Sayfa numarası istiyorsak offset gerekiyor; sonsuz kaydırma yapacaksak cursor daha sağlam."
- **İlgili terimler:** Pagination (7.10), Infinite scroll (7.10)

---

## 10.11 Caching

Aynı işi tekrar tekrar yapmamak için sonucu saklama. **Performansın en büyük tek kaldıracı.**

### Cache

- **Terim (İngilizce):** Cache, caching
- **Türkçesi:** Önbellek
- **Tanım:** Bir sonucu, tekrar hesaplamak yerine saklayıp yeniden kullanma.
- **Ne işe yarar / neden var:** Katman katman çalışır: tarayıcı önbelleği, CDN, sunucu önbelleği, veritabanı önbelleği. Her katman, isteğin daha derine gitmesini engeller — ve her katman gecikmeyi (1.3) düşürür.
- **Nerede karşına çıkar:** Her performans konuşmasında.
- **Örnek kullanım:** "Bu veri saatte bir değişiyor; her istekte veritabanına gitmeyelim, önbelleğe alalım."
- **İlgili terimler:** CDN, TTL, Cache invalidation

### CDN

- **Terim (İngilizce):** CDN — Content Delivery Network
- **Türkçesi:** İçerik dağıtım ağı
- **Tanım:** Statik dosyaların (görsel, CSS, JavaScript, font) dünya genelindeki sunuculara kopyalanıp kullanıcıya en yakın olandan servis edilmesi.
- **Ne işe yarar / neden var:** İki fayda: mesafeyi kısaltarak gecikmeyi düşürür, ve asıl sunucunun yükünü alır. Statik siteler (1.5) tamamen CDN'den servis edilebildiği için bu kadar hızlı ve ucuzdur.
- **Nerede karşına çıkar:** Neredeyse her modern hosting platformunda varsayılan olarak gelir.
- **Örnek kullanım:** "Görseller CDN'den gelsin; şu an hepsi tek sunucudan servis ediliyor."
- **İlgili terimler:** Cache, SSG (8.10), Latency (1.3)

### TTL / ETag / stale-while-revalidate

- **Terim (İngilizce):** TTL (Time To Live), ETag, stale-while-revalidate
- **Türkçesi:** Yaşam süresi, içerik damgası
- **Tanım:** **TTL** = bir önbellek kaydının ne kadar süre geçerli sayılacağı. **ETag** = içeriğin parmak izi; değişmemişse tarayıcı yeniden indirmez (304, 10.3). **stale-while-revalidate** = eski kopyayı hemen göster, arka planda yenisini getir.
- **Ne işe yarar / neden var:** Sonuncusu tasarımı doğrudan ilgilendirir: kullanıcı beklemez, veriyi anında görür; güncel sürüm arka planda gelince ekran tazelenir. TanStack Query'nin (9.8) varsayılan davranışı budur ve **"eski veri gösteriliyor, tazeleniyor" durumunun tasarlanması** gerekir.
- **Nerede karşına çıkar:** Önbellek stratejisi kararlarında.
- **Örnek kullanım:** "Liste stale-while-revalidate ile gelsin; kullanıcı anında görsün, üstte ince bir tazeleme göstergesi olsun."
- **İlgili terimler:** TanStack Query (9.8), 304 (10.3), Loading state (7.9)

### Cache invalidation

- **Terim (İngilizce):** Cache invalidation
- **Türkçesi:** Önbellek geçersizleştirme
- **Tanım:** Veri değiştiğinde, önbellekteki eski kopyanın silinmesi veya güncellenmesi.
- **Ne işe yarar / neden var:** Önbelleklemenin zor kısmı budur — yazılım dünyasının en bilinen şakalarından biri, "bilgisayar bilimindeki iki zor şeyden biri" olmasıdır. Sorunun kullanıcıya yansıması: **bir şeyi güncellersin ama sitede eski hâli görünmeye devam eder.**
- **Nerede karşına çıkar:** "Değişikliğim neden görünmüyor?" şikâyetlerinin en yaygın sebebi.
- **Örnek kullanım:** "İçerik güncellendiğinde ilgili sayfaların önbelleğini temizleyelim; editörler eski hâli görüyor."
- **İlgili terimler:** ISR (8.10), Service worker (1.7), TTL

---

## 10.12 Arka plan işleri

Kullanıcıyı bekletmeden yapılması gereken işler.

### Queue / Worker / Job

- **Terim (İngilizce):** Queue, worker, job, background job
- **Türkçesi:** Kuyruk, işçi, iş
- **Tanım:** Uzun süren işlerin bir sıraya konup, arka planda çalışan ayrı bir süreç tarafından tek tek işlenmesi.
- **Ne işe yarar / neden var:** Kullanıcı, işin bitmesini beklemek zorunda kalmaz. E-posta gönderme, PDF üretme, görsel işleme, dışa aktarma ve toplu bildirim gibi işler kuyruğa alınır.
- **Nerede karşına çıkar:** "Bu neden bu kadar sürüyor?" sorusunun çözümünde.
- **Örnek kullanım:** "Rapor 40 saniye sürüyor; kuyruğa alalım, hazır olunca kullanıcıya bildirim gidelim."
- **Karıştırılanlar:** **Tasarımı doğrudan etkiler:** iş arka plana alındığında kullanıcıya "işleminiz alındı, hazır olunca haber vereceğiz" demek ve bir takip yolu (bildirim, e-posta, durum ekranı) sunmak gerekir. Bu ara durum tasarlanmazsa kullanıcı işlemin kaybolduğunu sanır.
- **İlgili terimler:** Cron job, Notification center (7.12), Success state (7.9)

### Cron job

- **Terim (İngilizce):** Cron job, scheduled job
- **Türkçesi:** Zamanlanmış görev
- **Tanım:** Belirli zamanlarda otomatik çalışan iş.
- **Ne işe yarar / neden var:** Günlük özet e-postası, gece yedeği, haftalık rapor, süresi dolmuş kayıtların temizlenmesi gibi işler için.
- **Nerede karşına çıkar:** Neredeyse her üretim sisteminde.
- **Örnek kullanım:** "Haftalık özet e-postası pazartesi 09:00'da cron ile gitsin."
- **İlgili terimler:** Queue, Backup (11.11)

### Retry / Dead letter queue

- **Terim (İngilizce):** Retry, exponential backoff, dead letter queue (DLQ)
- **Türkçesi:** Yeniden deneme, artan bekleme, ölü mektup kuyruğu
- **Tanım:** Bir iş başarısız olursa tekrar denenir; her denemede bekleme süresi artar. Belirli sayıda denemeden sonra hâlâ başarısızsa, incelenmek üzere ayrı bir kuyruğa alınır.
- **Ne işe yarar / neden var:** Geçici hatalar (ağ kesintisi, dış servisin anlık meşguliyeti) kendiliğinden çözülür. Artan bekleme, zaten sıkışık bir servisi daha da boğmayı engeller.
- **Nerede karşına çıkar:** Kuyruk ve entegrasyon sistemlerinde.
- **Örnek kullanım:** "E-posta gönderimi 3 kez denensin, olmazsa DLQ'ya düşsün ve uyarı gitsin."
- **Karıştırılanlar:** Yeniden deneme, işin **idempotent** (10.2) olmasını gerektirir — yoksa aynı e-posta üç kez gider veya aynı ödeme iki kez alınır.
- **İlgili terimler:** Idempotency (14.11), Queue, Circuit breaker (14.11)

---

## 10.13 Back-end ekosistemleri

Arka yüzün hangi dille yazıldığı. **Seviye 3** — adını duyduğunda kategorisini bilmen yeterli.

| Ekosistem | Kısaca | Ne zaman |
|---|---|---|
| **Node.js** (Express, Fastify, NestJS) | JavaScript'i sunucuda çalıştırır | Ön yüzle aynı dil; küçük ekipte tek dil avantajı. NestJS kurumsal projelerde yapı dayatır |
| **Python** (Django, FastAPI) | Okunabilir, geniş kütüphane havuzu | Veri, yapay zekâ ve bilimsel işlerin doğal dili. Django "her şey dahil", FastAPI hafif ve hızlı |
| **Go** | Hızlı, sade, düşük kaynak tüketimi | Yüksek trafikli servisler ve altyapı araçları |
| **PHP** (Laravel) | Web'in en yaygın dillerinden | Klasik web uygulamaları; Laravel olgun ve verimli bir çerçeve |
| **Ruby** (Rails) | Hızlı geliştirme, güçlü sözleşmeler | Startup MVP'leri; Shopify ve GitHub gibi büyük örnekleri var |
| **Java / C#** | Kurumsal standart | Bankalar, sigorta, büyük kurumlar |

**Tasarımcı için sonuç:** Dil seçimi senin işini nadiren etkiler. Etkilediği tek yer, o ekosistemin hazır çözümleridir — örneğin Django kutudan çıkan bir yönetim paneli getirir ve bu, tasarım kapsamını değiştirir.

---

## 10.14 Dosya ve medya

### Upload / Object storage / Signed URL

- **Terim (İngilizce):** File upload, object storage (S3 vb.), signed URL, presigned URL
- **Türkçesi:** Dosya yükleme, nesne depolama, imzalı adres
- **Tanım:** Kullanıcı dosyaları sunucunun diskinde değil, ayrı bir depolama servisinde tutulur. **Signed URL**, o dosyaya sınırlı süreyle erişim veren özel adrestir.
- **Ne işe yarar / neden var:** Dosyaları sunucuda tutmak ölçeklenmez ve yedeklemeyi zorlaştırır. Signed URL ise özel dosyaların (fatura, kimlik belgesi) herkese açık olmadan paylaşılmasını sağlar — adres belirli bir süre sonra geçersiz olur.
- **Nerede karşına çıkar:** Profil fotoğrafı, belge yükleme ve medya yönetiminde.
- **Örnek kullanım:** "Faturaları signed URL ile verelim; adres 15 dakika sonra geçersiz olsun."
- **Karıştırılanlar:** Tasarım tarafında yükleme akışının tüm durumları gerekir (7.11): boyut ve format sınırı **önceden** yazılmalı, ilerleme gösterilmeli, iptal edilebilmeli, hata anlaşılır olmalı.
- **İlgili terimler:** File upload (7.11), Progress indicator (7.9), Auth (Bölüm 12)

### Image CDN / Transcoding

- **Terim (İngilizce):** Image CDN, image transformation, transcoding
- **Türkçesi:** Görsel dağıtım servisi, dönüştürme
- **Tanım:** Yüklenen görsellerin otomatik olarak yeniden boyutlandırılması, formatının değiştirilmesi (WebP/AVIF) ve kırpılması. Transcoding video için aynı işlemin adıdır.
- **Ne işe yarar / neden var:** Editörün yüklediği 5MB'lık fotoğrafın kullanıcıya 5MB olarak gitmemesini sağlar. Tasarımdaki her farklı boyut (kart, liste, detay) için ayrı sürüm otomatik üretilir (8.12).
- **Nerede karşına çıkar:** İçerik yoğun sitelerde. Meta-framework'lerin görsel bileşenleri bunu genelde hazır sunar.
- **Örnek kullanım:** "Görselleri image CDN'den geçirelim; editörler ne yüklerse yüklesin optimize edilmiş gelsin."
- **İlgili terimler:** Image optimization (8.12), CDN (10.11), Aspect ratio (5.7)

---

## 10.15 Sık kullanılan üçüncü parti servisler

`[DEĞİŞKEN BİLGİ]` Bu bölümdeki **kategorileri** öğren; ürün isimleri ve fiyatlandırmaları sürekli değişir. Aşağıda örnek olarak anılan isimler bir öneri değil, kulak aşinalığı içindir.

| Kategori | Ne çözer | Tasarımı nasıl etkiler |
|---|---|---|
| **Ödeme** (Stripe, iyzico, PayTR vb.) | Kart işleme, abonelik, fatura | Ödeme akışının bir kısmı servisin kendi ekranıdır; nereye kadar senin tasarımın olduğu baştan belirlenmeli |
| **E-posta** (işlemsel ve pazarlama) | Şifre sıfırlama, sipariş onayı, bülten | E-posta şablonları da tasarım işidir ve web'den farklı kısıtları vardır |
| **SMS / OTP** | Doğrulama kodu | Kod girme ekranı, tekrar gönderme sayacı ve hata durumları tasarlanmalı (12.6) |
| **Arama** (Algolia, Typesense, Meilisearch vb.) | Hızlı ve hatalı yazıma toleranslı arama | Anlık öneri, yazım düzeltme ve boş sonuç deneyimini mümkün kılar (7.10) |
| **Analitik** | Kullanım ölçümü | Olay tasarımı senin işin (16.11); KVKK uyumu gerekir (13.10) |
| **Harita** | Konum gösterimi | Ağır bir gömülü bileşendir; lazy load düşünülmeli |
| **Hata izleme** (Sentry vb.) | Canlıdaki hataları yakalama | Bkz. 16.11 |

**Örnek kullanım:** "Ödeme sayfasının hangi kısmı bizim tasarımımız, hangisi servisin ekranı? Bunu baştan netleştirelim; akış tasarımı buna bağlı."

---

## 10.16 Kendini test et

**1.** GET ile POST arasındaki fark nedir? Hangisi idempotent değildir ve bunun tasarımdaki karşılığı nedir?

**2.** 4xx ile 5xx arasındaki fark nedir? Kim sorumludur?

**3.** 401 ile 403 arasındaki fark nedir? 403 alındığında kullanıcıyı giriş sayfasına yönlendirmek neden hatadır?

**4.** 429 ne demektir ve tasarımda ne yapılmalıdır?

**5.** API contract'ın tasarımcı için değeri nedir?

**6.** REST'in over-fetching ve under-fetching sorunları nedir? GraphQL bunu nasıl çözer, bedeli nedir?

**7.** tRPC ne zaman uygun değildir?

**8.** WebSocket, SSE ve polling arasındaki fark nedir? "Bildirimler anında gelsin" isteği neden bedava değildir?

**9.** Server action kullanmak, doğrulama ve yetki kontrolünü atlamak için gerekçe midir?

**10.** BFF hangi problemi çözer?

**11.** Serverless'ta "sunucu yok" mudur? Cold start nedir ve kullanıcıya nasıl yansır?

**12.** Edge function ne kazandırır? Sınırı nedir?

**13.** Webhook nedir ve tasarım açısından hangi ara durumu zorunlu kılar?

**14.** Yayınlanabilir (publishable) anahtar ile gizli (secret) anahtar arasındaki fark nedir?

**15.** Offset ile cursor pagination arasındaki fark nedir? Sayfa numaralı bir arayüz istiyorsan hangisi gerekir?

**16.** `stale-while-revalidate` nedir ve hangi durumun tasarlanmasını gerektirir?

**17.** "Değişikliğim sitede neden görünmüyor?" sorusunun en yaygın teknik sebebi nedir?

**18.** Uzun süren bir işi kuyruğa almak tasarımda neyi zorunlu kılar?

**19.** Yeniden deneme (retry) mekanizması hangi ön koşulu gerektirir ve neden?

**20.** Signed URL neyi çözer?

---

### Cevaplar

**1.** GET veri okur ve hiçbir şeyi değiştirmez (safe); POST kayıt oluşturur veya işlem tetikler. **POST idempotent değildir**: aynı istek iki kez giderse iki kayıt oluşabilir. Tasarımdaki karşılığı: gönder butonunun basıldıktan sonra devre dışı kalması ve yükleme durumu göstermesi estetik değil, **veri bütünlüğü** meselesidir.

**2.** 4xx **istemci hatasıdır** — istek yanlış (eksik alan, geçersiz kimlik, olmayan adres). 5xx **sunucu hatasıdır** — istek doğru ama sunucu beceremedi. Sorumluluk sırasıyla istemci/kullanıcı ve sunucudadır.

**3.** 401 = "kim olduğunu bilmiyorum, giriş yap." 403 = "kim olduğunu biliyorum ama yetkin yok." 403'te giriş sayfasına yönlendirmek hatadır çünkü kullanıcı **zaten giriş yapmıştır**; tekrar giriş yapmak bir şey değiştirmez ve sonsuz döngü oluşur. 403 için ayrı bir "erişiminiz yok" ekranı gerekir.

**4.** Çok fazla istek atıldığı için geçici olarak sınırlandın. Tasarımda kullanıcıya **ne kadar beklemesi gerektiği** söylenmelidir — sunucu genelde bir bekleme süresi döner ve bu geri sayım olarak gösterilebilir. "Bir hata oluştu" demek yetersizdir.

**5.** Sözleşme, hangi alanların geleceğini ve **hangilerinin boş olabileceğini** söyler — yani hangi boş ve uç durumları (4.4) tasarlaman gerektiğini. Ayrıca ön yüz ile arka yüzün paralel çalışmasını mümkün kılar.

**6.** **Over-fetching**: ihtiyacından fazla veri gelir. **Under-fetching**: bir ekran için birden fazla istek atmak gerekir. GraphQL, istemcinin tam olarak istediği alanları tek istekte almasını sağlayarak ikisini de çözer. Bedeli: önbellekleme zorlaşır, pahalı sorgulara karşı koruma gerekir ve ekstra bir katman/araç zinciri gelir.

**7.** **Yalnızca TypeScript istemcileri için çalışır.** Dışarıya API açacaksan, Swift/Kotlin gibi başka dillerde istemcin olacaksa veya webhook alacaksan tRPC o kısmı çözmez. Yaygın çözüm melez mimaridir: içeride tRPC, dışa bakan uçlarda REST.

**8.** **Polling** istemcinin belirli aralıklarla sorması (basit, israflı). **SSE** sunucudan istemciye tek yönlü sürekli akış. **WebSocket** çift yönlü kalıcı bağlantı (sohbet, işbirlikçi düzenleme). Bedava değildir çünkü kalıcı bağlantı ek bir altyapı katmanı ve maliyet demektir; çoğu bildirim senaryosunda 30 saniyelik tazeleme yeterlidir ve çok daha ucuzdur.

**9.** Hayır. Server action da bir endpoint'tir; dışarıdan çağrılabilir. **Girdi doğrulaması ve yetki kontrolü orada da zorunludur.**

**10.** Under-fetching'i. Ön yüzün ihtiyacı olan veriyi tek yerde toplar: birden fazla iç servisten veri çekip tek bir yanıt hâline getirir, böylece ön yüz birden fazla gidiş-dönüş yapmak zorunda kalmaz.

**11.** **Sunucu vardır**, sadece sen yönetmezsin — isim yanıltıcıdır. **Cold start**, işlev uzun süre çağrılmadıktan sonraki ilk çağrıda yaşanan ek başlangıç gecikmesidir. Kullanıcıya yansıması: gece kimsenin girmediği bir siteye sabah ilk giren kişi diğerlerinden yavaş bir deneyim yaşar.

**12.** Kodu kullanıcıya coğrafi olarak yakın çalıştırarak **gecikmeyi** düşürür. Sınırı: bazı Node API'leri çalışmaz ve **veritabanı uzaktaysa kazanç kaybolabilir** — kod yakın olsa da veri hâlâ uzaktadır.

**13.** Dış servisin, bir olay olduğunda senin sunucunu çağırmasıdır. Tasarım açısından **"işleniyor" ara durumunu** zorunlu kılar: webhook gecikmeli gelebileceği için kullanıcı ödemeyi tamamladıktan sonra sipariş durumu hemen güncellenmeyebilir. Bu durum tasarlanmazsa kullanıcı "param gitti ama sipariş yok" paniği yaşar.

**14.** Yayınlanabilir anahtar ön yüz koduna gömülebilir; gizli anahtar **yalnızca sunucuda** kalmalıdır. Gizli anahtarı ön yüze koymak ciddi bir güvenlik açığıdır ve otomatik tarayıcılar tarafından anında bulunur.

**15.** **Offset**: "20. kayıttan itibaren 20 tane" — sayfa numaralarını mümkün kılar ama derin sayfalarda yavaşlar ve değişen listede kayıt kayması/tekrarı olabilir. **Cursor**: "şu kayıttan sonrakiler" — daha sağlamdır ama sayfa numarası veremez. Sayfa numaralı arayüz için **offset** gerekir.

**16.** Eski (bayat) kopyayı hemen göster, arka planda yenisini getir. Tasarlanması gereken durum: **"eski veri gösteriliyor, tazeleniyor"** hâli — kullanıcı anında içerik görür, güncel sürüm gelince ekran değişir; bu geçişin ve tazeleme göstergesinin tasarlanması gerekir.

**17.** **Önbellek geçersizleştirme** (cache invalidation) yapılmaması. Veri değişmiş ama önbellekteki eski kopya hâlâ servis ediliyor olabilir — tarayıcı, CDN, sunucu veya service worker katmanlarından herhangi birinde.

**18.** Kullanıcıya **"işleminiz alındı, hazır olunca haber vereceğiz"** demeyi ve bir **takip yolu** sunmayı (bildirim, e-posta, durum ekranı). Bu ara durum tasarlanmazsa kullanıcı işlemin kaybolduğunu sanır.

**19.** İşin **idempotent** olmasını. Aksi hâlde yeniden deneme aynı e-postayı üç kez gönderir veya aynı ödemeyi iki kez alır.

**20.** Özel dosyalara (fatura, kimlik belgesi), herkese açık hâle getirmeden ve sınırlı süreyle erişim verilmesini. Adres belirli bir süre sonra geçersiz olur.

---

**Biten bölüm:** Bölüm 10 — Back-end ve API
**Sıradaki bölüm:** Bölüm 11 — Veritabanı ve veri modeli
