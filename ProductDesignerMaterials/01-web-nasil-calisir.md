# Bölüm 1 — Web nasıl çalışır: temel zihin haritası

Bu bölüm dosyanın temeli. Sonraki her bölüm burada kurulan modelin üstüne bina ediliyor. Bir geliştirici sana "bu istek server'a gitmiyor, client-side'da çözülüyor" dediğinde ya da "bu staging'de çalışıyor, production'da patlıyor" dediğinde, ne dendiğini anlamanı sağlayan cümleler burada.

Bölümün amacı şu tek soruyu cevaplayabilmen: **Bir adresi yazdığın andan ekranda bir şey görene kadar arada ne oluyor, ve bu zincirin hangi halkasına ben karar veriyorum?**

Bu bölümdeki bilgi eskimeyen kategoride. Kavramlar 20 yıldır aynı; sadece isimlendirmeler ve araçlar değişiyor.

**Ana kaynak:** MDN, *How the web works* — https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works

---

## 1.1 İstemci–sunucu modeli

Webdeki her şey iki taraflı bir konuşma: bir taraf **ister**, diğer taraf **verir**. Bu bölümdeki beş terim o iki tarafın adları.

### Client

- **Terim (İngilizce):** Client
- **Türkçesi:** İstemci
- **Tanım:** Bir içeriği veya veriyi isteyen taraf — pratikte kullanıcının cihazı ve üzerindeki tarayıcı.
- **Ne işe yarar / neden var:** İşin bir kısmının kullanıcının cihazında yapılmasını mümkün kılar. Her tıklamada sunucuya gidilmesi gerekmez; bazı işler yerinde çözülür, bu da hız kazandırır.
- **Nerede karşına çıkar:** Geliştiricinin "bunu client'ta yapalım" dediği her cümlede. Chrome DevTools'un tamamı client tarafını inceler. Hata raporlarında "client-side error" ayrı bir kategoridir.
- **Örnek kullanım:** "Filtreleme client'ta yapılıyor, o yüzden sonuçlar anında geliyor ama tüm veriyi baştan indirmemiz gerekiyor."
- **Karıştırılanlar:** *Client* ≠ *müşteri*. Türkçede "client" iş dünyasında müşteri anlamına da gelir; teknik konuşmada kullanıcının cihazı demektir. Bağlamdan ayırt edilir.
- **İlgili terimler:** Server, Browser, Client-side, Front-end (1.6)

### Server

- **Terim (İngilizce):** Server
- **Türkçesi:** Sunucu
- **Tanım:** İstekleri karşılayıp cevap üreten, sürekli açık duran uzaktaki bilgisayar veya program.
- **Ne işe yarar / neden var:** Veriyi tek merkezde tutar. Herkesin kendi cihazında ayrı bir veri kopyası olsaydı iki kullanıcı aynı bilgiyi göremezdi. Ayrıca gizli kalması gereken işleri (şifre kontrolü, ödeme, veritabanı erişimi) kullanıcının göremeyeceği bir yerde yapar.
- **Nerede karşına çıkar:** Her back-end konuşmasında. "Server down" = site erişilemez durumda. Hosting faturalarında ödediğin şey budur.
- **Örnek kullanım:** "Fiyat hesabını server'da yapmamız lazım; client'ta yaparsak kullanıcı kodu değiştirip fiyatı manipüle edebilir."
- **Karıştırılanlar:** *Server* ≠ *hosting*. Server makinenin/programın kendisi, hosting o makineyi kiralama hizmeti.
- **İlgili terimler:** Client, Hosting, Back-end (1.6), Serverless (10.8)

### Client-server model

- **Terim (İngilizce):** Client-server model
- **Türkçesi:** İstemci–sunucu modeli
- **Tanım:** Bir tarafın istek gönderip diğer tarafın cevap ürettiği, webin tamamının üzerine kurulu olduğu çalışma düzeni.
- **Ne işe yarar / neden var:** Sorumluluğu ikiye böler. Görsel sunum ve etkileşim client'ta, veri ve iş kuralları server'da yaşar. Bu ayrım olmadan güvenlik de ölçeklenebilirlik de mümkün olmaz.
- **Nerede karşına çıkar:** Mimari konuşmalarında ilk çizilen diyagram budur. İş görüşmesinde "webin nasıl çalıştığını anlat" sorusunun cevabı bu modeldir.
- **Örnek kullanım:** "Klasik client-server modeli, arada bir de CDN katmanı var; statik dosyalar oraya gidiyor."
- **Karıştırılanlar:** *Peer-to-peer* modelden farkı: P2P'de merkezi bir sunucu yoktur, cihazlar doğrudan birbiriyle konuşur (BitTorrent gibi). Web P2P değildir.
- **İlgili terimler:** Request, Response, Three-tier (14.3)

### Browser (User agent)

- **Terim (İngilizce):** Browser — resmi/teknik adı: User agent (UA)
- **Türkçesi:** Tarayıcı
- **Tanım:** İnternetten gelen HTML, CSS ve JavaScript'i alıp ekranda görsel bir sayfaya çeviren program.
- **Ne işe yarar / neden var:** Kodu insana görünür hâle getirir. Ayrıca güvenlik sınırlarını uygular (bir sitenin başka bir sitenin verisine erişmesini engeller), geçmişi, çerezleri ve önbelleği yönetir.
- **Nerede karşına çıkar:** "Hangi browser'da test ettin?" sorusu QA sürecinin standart parçası. Analytics raporlarında kullanıcı dağılımı browser'a göre kırılır. "User agent" terimini daha çok log dosyalarında ve bot tespiti konuşmalarında duyarsın.
- **Örnek kullanım:** "Safari'de bozuluyor ama Chrome'da sorun yok — browser uyumluluğu problemi olabilir."
- **Karıştırılanlar:** *Browser* ≠ *arama motoru*. Chrome bir browser, Google bir arama motoru. Kullanıcılar sürekli karıştırır; teknik konuşmada karıştırma.
- **İlgili terimler:** Client, Rendering engine, DOM (1.4)

### Rendering engine

- **Terim (İngilizce):** Rendering engine (browser engine)
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "tarayıcı motoru" denir.
- **Tanım:** Tarayıcının içinde, HTML/CSS'i alıp piksellere çeviren asıl bileşen.
- **Ne işe yarar / neden var:** Aynı kodun farklı tarayıcılarda neden farklı göründüğünü açıklar. Chrome ve Edge aynı motoru (Blink) kullanır, Safari Webkit kullanır, Firefox Gecko kullanır. İki tarayıcı aynı motoru kullanıyorsa davranışları büyük ölçüde aynıdır.
- **Nerede karşına çıkar:** Cross-browser bug konuşmalarında. Bir CSS özelliğinin desteklenip desteklenmediğine bakarken (caniuse.com) motor bazında listelenir.
- **Örnek kullanım:** "iOS'ta tüm tarayıcılar Webkit kullanmak zorunda, o yüzden iPhone'da Chrome ile Safari aynı davranır." `[DEĞİŞKEN BİLGİ]` — Apple'ın bu politikası düzenleyici baskısıyla değişme sürecinde; güncel durumu doğrula.
- **Karıştırılanlar:** *Rendering engine* ≠ *JavaScript engine*. İkincisi JS kodunu çalıştıran ayrı bileşendir (Chrome'da V8). Aynı tarayıcının içinde iki ayrı motor vardır.
- **İlgili terimler:** Browser, Critical rendering path (1.4)

---

## 1.2 Adres ve bulunabilirlik: URL, domain, DNS, hosting

Bir sitenin "nerede olduğu" üç ayrı katmanda tanımlanır: insanın yazdığı adres (URL), o adresin karşılık geldiği sayı (IP), ve bu ikisini eşleştiren defter (DNS). Bu üçünü ayırt etmek, domain satın alma ve yayın süreçlerinde işini görür.

### URL

- **Terim (İngilizce):** URL — Uniform Resource Locator
- **Türkçesi:** Web adresi
- **Tanım:** İnternetteki belirli bir kaynağın tam adresi.
- **Ne işe yarar / neden var:** Her sayfanın, resmin, dosyanın tek ve paylaşılabilir bir adresi olmasını sağlar. Bir şeyin URL'i yoksa linklenemez, paylaşılamaz, arama motoru tarafından bulunamaz — bu bir ürün kararıdır, teknik detay değil.
- **Nerede karşına çıkar:** SEO konuşmalarının merkezinde. "Bu ekranın kendi URL'i olsun mu?" sorusu doğrudan senin karar alanın: modal içinde açılan bir içeriğin URL'i yoksa kullanıcı o ekranı paylaşamaz.
- **Örnek kullanım:** "Filtre seçimlerini URL'e query param olarak yazalım ki kullanıcı filtrelenmiş listeyi link olarak gönderebilsin."
- **Karıştırılanlar:** *URL* ≠ *domain*. Domain URL'in sadece bir parçasıdır. *URI* daha geniş bir üst kategoridir; günlük konuşmada URL denir.
- **İlgili terimler:** Domain, Slug, Query string, Routing (8.9)
- **Kaynak:** https://developer.mozilla.org/en-US/docs/Glossary/URL

**URL anatomisi — ezberlenecek parça adları:**

```
https://blog.ornek.com/yazilar/web-nedir?kategori=temel&sayfa=2#basliklar
└─┬─┘   └┬─┘└───┬───┘└──────┬───────┘└────────┬─────────┘└────┬───┘
scheme  sub   domain      path            query string    fragment
```

| Parça | Adı | Ne yapar |
|---|---|---|
| `https` | scheme / protocol | Hangi kurallarla konuşulacağı |
| `blog` | subdomain | Ana domainin altındaki ayrı bölüm |
| `ornek.com` | domain (+ `.com` = TLD) | Sitenin kayıtlı adı |
| `/yazilar/web-nedir` | path | Site içindeki konum; son parça **slug** |
| `?kategori=temel&sayfa=2` | query string | Ek parametreler; her biri **query parameter** |
| `#basliklar` | fragment / anchor / hash | Sayfa içi belirli bir noktaya atlar |

### Domain name

- **Terim (İngilizce):** Domain name
- **Türkçesi:** Alan adı
- **Tanım:** Bir sitenin insanların akılda tutabileceği kayıtlı adı.
- **Ne işe yarar / neden var:** IP adreslerini ezberlemek imkânsız olduğu için var. Ayrıca sunucu değişse bile adres sabit kalır — makineyi taşırsın, domain aynı kalır.
- **Nerede karşına çyıkar:** Proje başlangıcında ilk satın alınan şeylerden biri. Registrar (GoDaddy, Namecheap, Cloudflare vb.) üzerinden yıllık kiralanır; satın alınmaz, kiralanır.
- **Örnek kullanım:** "Domain'i aldık ama DNS kayıtlarını henüz yönlendirmedik, o yüzden site açılmıyor."
- **Karıştırılanlar:** *Domain* ≠ *hosting*. Domain adres, hosting evin kendisi. İkisi ayrı ayrı satın alınır ve farklı firmalardan olabilir.
- **İlgili terimler:** TLD, Subdomain, DNS, Hosting, DNS kayıtları (16.7)

### TLD

- **Terim (İngilizce):** TLD — Top-Level Domain
- **Türkçesi:** Üst düzey alan adı
- **Tanım:** Domainin en sağdaki uzantısı: `.com`, `.org`, `.com.tr`, `.io`, `.dev`.
- **Ne işe yarar / neden var:** Kategorileme ve ülke ayrımı için var. Bazılarının kayıt şartları vardır (`.edu.tr` sadece eğitim kurumlarına verilir).
- **Nerede karşına çıkar:** Domain seçiminde. Bir marka kararı olduğu kadar SEO ve güven kararıdır da — bazı TLD'ler spam ile ilişkilendirildiği için kullanıcı güvenini düşürebilir.
- **Örnek kullanım:** "`.io` teknik bir izlenim veriyor ama Türkiye'deki hedef kitleye `.com.tr` daha güvenilir gelir."
- **İlgili terimler:** Domain name

### Subdomain

- **Terim (İngilizce):** Subdomain
- **Türkçesi:** Alt alan adı
- **Tanım:** Ana domainin önüne eklenen, ayrı bir bölüm gibi davranan parça: `blog.ornek.com`, `app.ornek.com`.
- **Ne işe yarar / neden var:** Farklı işlevleri ayırır. Pazarlama sitesi ile uygulamanın ayrı kod tabanlarında, hatta ayrı sunucularda yaşamasını mümkün kılar; ikisi birbirinin yayınını bozmaz.
- **Nerede karşına çıkar:** Mimari kararında. Klasik ayrım: `www.ornek.com` pazarlama sitesi, `app.ornek.com` giriş yapılan uygulama, `docs.ornek.com` dokümantasyon.
- **Örnek kullanım:** "Uygulamayı subdomain'e mi alalım yoksa `/app` path'inde mi tutalım? Subdomain olursa iki proje ayrı deploy edilebilir."
- **Karıştırılanlar:** *Subdomain* (`blog.ornek.com`) ≠ *subdirectory/path* (`ornek.com/blog`). SEO açısından farklı davranırlar; genel eğilim, blog için subdirectory'nin ana domainin otoritesinden daha çok faydalandığı yönünde. `[EMİN DEĞİLİM]` Bu konu SEO camiasında tartışmalı; kesin bir kural gibi sunma.
- **İlgili terimler:** Domain name, URL

### Slug

- **Terim (İngilizce):** Slug
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** URL'in sonundaki, içeriği tanımlayan okunabilir kısım: `/yazilar/web-nedir` içindeki `web-nedir`.
- **Ne işe yarar / neden var:** Hem kullanıcı hem arama motoru için adresi anlamlı kılar. `/post?id=8471` yerine `/yazilar/web-nedir` hem tıklanma oranını hem güveni artırır.
- **Nerede karşına çıkar:** CMS arayüzlerinde bir içerik oluştururken doldurulan alan budur. İçerik editörleriyle konuşurken sık kullanılır.
- **Örnek kullanım:** "Slug'ları Türkçe karakter içermeyecek şekilde otomatik üretelim, ama editör manuel değiştirebilsin."
- **Karıştırılanlar:** *Slug* ≠ *path*. Path tüm yol, slug o yolun son parçası.
- **İlgili terimler:** URL, SEO (8.13)

### DNS

- **Terim (İngilizce):** DNS — Domain Name System
- **Türkçesi:** Alan adı sistemi
- **Tanım:** Yazdığın domain adını, sunucunun gerçek sayısal adresine (IP) çeviren sistem.
- **Ne işe yarar / neden var:** Telefonun rehberi gibi. İsmi ararsın, numarayı bulur. Bu katman olmasa her siteye IP yazarak girmen gerekirdi.
- **Nerede karşına çıkar:** Yayın gününde. "Site açılmıyor" şikâyetlerinin en sık sebebi eksik veya henüz yayılmamış DNS kaydıdır. Domain panelinde kayıt eklemek senin de yapabileceğin bir iş.
- **Örnek kullanım:** "DNS kaydını değiştirdim ama propagation sürüyor, bazı kullanıcılar hâlâ eski sunucuyu görüyor olabilir."
- **Karıştırılanlar:** *DNS* ≠ *hosting*. DNS sadece yönlendirme yapar; siteyi barındırmaz.
- **İlgili terimler:** Domain name, IP address, DNS kayıtları — A, CNAME, TXT (16.7)

### IP address

- **Terim (İngilizce):** IP address — Internet Protocol address
- **Türkçesi:** IP adresi
- **Tanım:** İnternete bağlı her cihazın sayısal adresi.
- **Ne işe yarar / neden var:** Verinin doğru makineye ulaşmasını sağlar. İnsan için değil, makine için tasarlanmış bir adres.
- **Nerede karşına çıkar:** DNS ayarlarında (A kaydı bir IP'ye işaret eder). Güvenlik tarafında: rate limiting ve engelleme genelde IP bazlıdır. Analytics'te coğrafi konum IP'den tahmin edilir — bu KVKK açısından kişisel veri sayılabilir.
- **Örnek kullanım:** "Aynı IP'den dakikada 100'den fazla istek gelirse rate limit devreye giriyor."
- **İlgili terimler:** DNS, Rate limiting (10.10)

### Hosting

- **Terim (İngilizce):** Hosting
- **Türkçesi:** Barındırma
- **Tanım:** Site dosyalarını sürekli açık bir sunucuda tutup internete servis etme hizmeti.
- **Ne işe yarar / neden var:** Kendi bilgisayarını 7/24 açık tutup internete açman gerekmesin diye var. Güvenlik, yedekleme, elektrik, bant genişliği gibi işleri devreder.
- **Nerede karşına çıkar:** Proje bütçesinde sabit gider kalemi. Bugün modern web projelerinde "hosting" genelde Vercel, Netlify, Cloudflare gibi platformlar üzerinden alınır; klasik cPanel'li paylaşımlı hosting daha çok WordPress dünyasında kaldı. `[DEĞİŞKEN BİLGİ]` Platform isimleri ve fiyatlandırmaları hızlı değişir.
- **Örnek kullanım:** "Statik site olduğu için hosting maliyeti neredeyse sıfır; sadece trafik arttığında bandwidth ücreti çıkar."
- **Karıştırılanlar:** *Hosting* ≠ *domain* ≠ *DNS*. Üçü ayrı hizmettir ve farklı firmalardan alınabilir.
- **İlgili terimler:** Server, Domain name, Deploy platformları (16.6)

---

## 1.3 Request / response döngüsü

Client ve server arasındaki konuşmanın kuralları. Bir web geliştiricisinin gün içinde en çok baktığı şey bu döngünün detaylarıdır — DevTools'un Network sekmesi bunu gösterir.

### HTTP

- **Terim (İngilizce):** HTTP — HyperText Transfer Protocol
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Client ile server'ın hangi formatta konuşacağını belirleyen kural seti.
- **Ne işe yarar / neden var:** Ortak dil sağlar. Farklı firmaların yazdığı tarayıcılar ve sunucular, aynı kurallara uydukları için birbirini anlar.
- **Nerede karşına çıkar:** Her API konuşmasında. "HTTP metodu", "HTTP status kodu", "HTTP header" ifadelerinin hepsi bu protokolün parçalarıdır.
- **Örnek kullanım:** "İstek HTTP 200 dönüyor ama body boş; endpoint çalışıyor, veri gelmiyor."
- **Karıştırılanlar:** *HTTP* ≠ *HTML*. HTTP taşıma kuralı, HTML taşınan içeriğin formatı.
- **İlgili terimler:** HTTPS, Request, Response, HTTP metodları (10.2), Status kodları (10.3)

### HTTPS

- **Terim (İngilizce):** HTTPS — HTTP Secure
- **Türkçesi:** Güvenli HTTP
- **Tanım:** HTTP'nin şifrelenmiş hâli; arada birinin trafiği okumasını engeller.
- **Ne işe yarar / neden var:** Şifre, kredi kartı, kişisel veri gibi bilgilerin yolda okunmasını önler. Ayrıca gönderilen içeriğin değiştirilmediğini garanti eder.
- **Nerede karşına çıkar:** Bugün pazarlık konusu değil, zorunluluk. Tarayıcılar HTTPS olmayan siteleri "güvenli değil" diye işaretler; bazı tarayıcı özellikleri (konum, kamera, service worker) sadece HTTPS'te çalışır. Arama motorları da HTTPS'i sıralama sinyali olarak kullanır.
- **Örnek kullanım:** "SSL sertifikası otomatik yenileniyor, HTTPS tarafında manuel iş yok."
- **Karıştırılanlar:** HTTPS *aktarımı* şifreler; sunucuda duran veriyi şifrelemez. "HTTPS var, veri güvende" cümlesi eksiktir.
- **İlgili terimler:** HTTP, TLS/SSL sertifikası (13.5, 16.7)

### Request

- **Terim (İngilizce):** Request
- **Türkçesi:** İstek
- **Tanım:** Client'ın server'a gönderdiği "şunu istiyorum" mesajı.
- **Ne işe yarar / neden var:** Konuşmayı başlatan taraf. Ne istendiği, kim tarafından istendiği ve varsa gönderilen veri bu mesajın içindedir.
- **Nerede karşına çıkar:** DevTools → Network sekmesinde her satır bir request'tir. Performans konuşmalarında "request sayısı" doğrudan yüklenme hızını etkiler.
- **Örnek kullanım:** "Sayfa açılırken 84 request atıyor; ikonları tek dosyada birleştirirsek bunu ciddi düşürürüz."
- **İlgili terimler:** Response, Header, Payload, HTTP metodları (10.2)

### Response

- **Terim (İngilizce):** Response
- **Türkçesi:** Yanıt / cevap
- **Tanım:** Server'ın isteğe karşılık gönderdiği mesaj.
- **Ne işe yarar / neden var:** İstenen içeriği veya bir hata bilgisini geri taşır. İsteğin başarılı olup olmadığı buradaki status kodundan anlaşılır.
- **Nerede karşına çıkar:** Hata ayıklamanın merkezi. Bir geliştirici "response'a bak" dediğinde, DevTools'ta o isteğe tıklayıp dönen içeriği incelemeni ister.
- **Örnek kullanım:** "Response 200 ama içerik boş bir dizi — filtre parametresi yanlış gidiyor olabilir."
- **İlgili terimler:** Request, Status code (10.3), Payload

### Header

- **Terim (İngilizce):** Header (HTTP header)
- **Türkçesi:** Başlık
- **Tanım:** İstek veya cevapla birlikte giden, asıl içeriğin dışındaki bilgi satırları.
- **Ne işe yarar / neden var:** İçeriğin türünü, dilini, kimlik bilgisini, önbellek kurallarını ve güvenlik politikalarını taşır. İçeriğin kendisi değil, içerik hakkındaki bilgidir.
- **Nerede karşına çıkar:** Auth konuşmalarında (token header'da gider), cache konuşmalarında, güvenlik denetimlerinde (CSP bir header'dır), CORS hatalarında.
- **Örnek kullanım:** "Authorization header'ı gitmiyor, o yüzden 401 alıyoruz."
- **Karıştırılanlar:** *HTTP header* ≠ *sayfanın header'ı*. İkincisi sayfanın üst bölümü, görsel bir bileşen (7.1). Aynı kelime iki tamamen farklı şey; bağlamdan ayırt et.
- **İlgili terimler:** Request, Response, Cookie (12.3), CORS (13.4)

### Payload / Body

- **Terim (İngilizce):** Payload (body)
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "gövde" denir.
- **Tanım:** İstek veya cevabın içindeki asıl veri.
- **Ne işe yarar / neden var:** Header "bu ne hakkında" der, payload "işte bu" der. Bir form gönderdiğinde girdiğin bilgiler payload'ta gider; bir liste çektiğinde liste payload'ta gelir.
- **Nerede karşına çıkar:** API konuşmalarında. "Payload'ı büyütmeyelim" = gereksiz alan göndermeyelim/getirmeyelim, çünkü büyük payload yavaşlatır.
- **Örnek kullanım:** "Liste endpoint'i her ürünün tüm açıklamasını payload'a koyuyor; kart görünümünde kullanmadığımız için gereksiz yük."
- **İlgili terimler:** JSON (8.5), Request, Response, API (10.4)

### Round trip

- **Terim (İngilizce):** Round trip
- **Türkçesi:** Gidiş-dönüş
- **Tanım:** Bir isteğin gidip cevabın dönmesine kadar geçen tam tur.
- **Ne işe yarar / neden var:** Hızı düşünmenin birimi. Bir işlemde kaç round trip olduğu, o işlemin ne kadar süreceğini büyük ölçüde belirler — özellikle mobil bağlantıda.
- **Nerede karşına çıkar:** Performans optimizasyonu konuşmalarında ve mimari kararlarda ("bu üç isteği tek isteğe indirelim").
- **Örnek kullanım:** "Checkout akışında dört ayrı round trip var; ikisini birleştirirsek algılanan hız gözle görülür artar."
- **İlgili terimler:** Latency, Waterfall, Caching (10.11)

### Latency

- **Terim (İngilizce):** Latency
- **Türkçesi:** Gecikme
- **Tanım:** İstekle cevap arasında geçen süre.
- **Ne işe yarar / neden var:** "Yavaş" hissinin ölçülebilir hâli. Fiziksel mesafeden de etkilenir: sunucu Frankfurt'ta, kullanıcı İstanbul'daysa aradaki mesafe milisaniye olarak faturaya yazılır.
- **Nerede karşına çıkar:** Sunucu bölgesi (region) seçiminde, CDN kararında, "neden yavaş" tartışmalarında.
- **Örnek kullanım:** "Latency'nin çoğu ilk byte'ı beklemekten geliyor; sunucuyu Avrupa bölgesine alalım."
- **Karıştırılanlar:** *Latency* ≠ *bandwidth*. Latency gecikme (yolun uzunluğu), bandwidth kapasite (yolun genişliği). Yüksek bandwidth yüksek latency'yi çözmez.
- **İlgili terimler:** Round trip, CDN (10.11), TTFB (8.12), Throughput (14.9)

---

## 1.4 Tarayıcı bir sayfayı nasıl çizer

Dosyalar tarayıcıya ulaştıktan sonra ekranda görüntü oluşana kadar bir dizi adım işler. Bu adımları bilmek iki işe yarar: sitenin neden yavaş açıldığını anlarsın, ve "sayfa zıplıyor" gibi tasarım şikâyetlerinin teknik karşılığını söyleyebilirsin.

**Ana kaynak:** https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

### DOM

- **Terim (İngilizce):** DOM — Document Object Model
- **Türkçesi:** Belge nesne modeli
- **Tanım:** Tarayıcının, HTML dosyasını bellekte bir ağaç yapısına çevirmiş hâli.
- **Ne işe yarar / neden var:** HTML dosyası ölü bir metindir; DOM onun canlı, değiştirilebilir hâlidir. JavaScript sayfayı ancak DOM üzerinden değiştirebilir — bir butona tıklayınca menünün açılması, DOM'un değiştirilmesidir.
- **Nerede karşına çıkar:** DevTools'un Elements sekmesinde gördüğün şey HTML dosyası değil, DOM'dur. "DOM'a bak" denildiğinde oraya bakılır. Performans konuşmalarında "DOM çok büyük" = sayfada çok fazla element var, tarayıcı zorlanıyor.
- **Örnek kullanım:** "Kaynak kodda o div yok; JavaScript sonradan DOM'a ekliyor."
- **Karıştırılanlar:** *DOM* ≠ *HTML*. HTML sunucudan gelen metin dosyası; DOM tarayıcının ondan ürettiği ve sonradan değişebilen yapı. İkisi çoğu zaman farklıdır — bu ayrım SEO'da kritiktir, çünkü bazı arama motoru botları JavaScript çalıştırmadan sadece HTML'i görebilir.
- **İlgili terimler:** HTML (8.1), Rendering, CSR/SSR (8.10)

### CSSOM

- **Terim (İngilizce):** CSSOM — CSS Object Model
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** DOM'un CSS karşılığı; tarayıcının tüm stil kurallarını bellekte tuttuğu yapı.
- **Ne işe yarar / neden var:** Tarayıcı, hangi elemente hangi stilin uygulanacağını hesaplamak için buna ihtiyaç duyar. CSSOM tamamlanmadan hiçbir şey çizilmez — bu yüzden CSS "render-blocking" sayılır.
- **Nerede karşına çıkar:** Performans analizlerinde. Seviye 2 terim; senin ağzından çıkması gerekmez ama duyduğunda anlaman gerekir.
- **Örnek kullanım:** "CSS dosyası çok büyük; CSSOM oluşana kadar ekran boş kalıyor."
- **İlgili terimler:** DOM, Render-blocking resource, Critical rendering path

### Critical rendering path

- **Terim (İngilizce):** Critical rendering path (CRP)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Tarayıcının dosyaları alıp ekrana ilk görüntüyü çizene kadar geçtiği adımların tamamı.
- **Ne işe yarar / neden var:** "Neden bu kadar geç açılıyor" sorusunun cevabı hemen her zaman bu zincirin bir halkasındadır. Adımlar sırayla: HTML parse → DOM, CSS parse → CSSOM, ikisi birleşir → render tree, sonra **layout** (her şey nereye ve ne büyüklükte), sonra **paint** (renkler, gölgeler, metin), sonra **composite** (katmanların birleştirilmesi).
- **Nerede karşına çıkar:** Lighthouse raporlarında ve performans optimizasyonu tartışmalarında.
- **Örnek kullanım:** "Font dosyası critical rendering path'i bloke ediyor; metin geç görünüyor."
- **İlgili terimler:** Layout, Paint, Render-blocking resource, Core Web Vitals (8.12)

### Layout (reflow)

- **Terim (İngilizce):** Layout — Firefox terminolojisinde reflow
- **Türkçesi:** Yerleşim hesabı
- **Tanım:** Tarayıcının her elementin ekranda tam olarak nerede ve ne büyüklükte olacağını hesapladığı adım.
- **Ne işe yarar / neden var:** Pahalı bir işlemdir. Bir elementin boyutu sonradan değişirse tarayıcı hesabı yeniden yapar ve etraftaki her şey kayar. Kullanıcının gördüğü "sayfa zıpladı, yanlış yere tıkladım" sorunu tam olarak budur.
- **Nerede karşına çıkar:** CLS (Cumulative Layout Shift) metriğinin arkasındaki mekanizma. Görsellere ve reklam alanlarına önceden yer ayırmanın sebebi budur — bu senin tasarım kararın.
- **Örnek kullanım:** "Görsellere `width`/`height` vermediğimiz için yüklenince layout kayıyor, CLS puanı düşük."
- **Karıştırılanlar:** *Layout* (tarayıcı adımı) ≠ *layout* (sayfa düzeni, tasarım anlamında). Aynı kelime, iki bağlam.
- **İlgili terimler:** Paint, CLS (8.12), Critical rendering path

### Paint / Composite

- **Terim (İngilizce):** Paint, Composite
- **Türkçesi:** Boyama, birleştirme
- **Tanım:** Paint = piksellerin renklendirilmesi; composite = ayrı katmanların üst üste getirilip son görüntünün oluşturulması.
- **Ne işe yarar / neden var:** Animasyon performansının anahtarı burada. Sadece composite aşamasını etkileyen özellikler (`transform`, `opacity`) akıcı animasyon verir; layout'u tetikleyen özellikler (`width`, `top`, `margin`) takılmaya yol açar.
- **Nerede karşına çıkar:** Animasyon incelemelerinde. Bir animasyonun neden takıldığını sorduğunda alacağın cevap genelde budur.
- **Örnek kullanım:** "Menü animasyonunu `left` yerine `transform` ile yapalım, composite'te kalsın."
- **İlgili terimler:** Layout, Motion (5.9)

### Render-blocking resource

- **Terim (İngilizce):** Render-blocking resource
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** İndirilip işlenmeden tarayıcının ekrana bir şey çizmesini engelleyen dosya.
- **Ne işe yarar / neden var:** Tarayıcı, CSS'i tam almadan çizmeye başlarsa kullanıcı bir anlığına stilsiz sayfa görür — bu yüzden bekler. Ama bu bekleme boş ekran süresi demektir. Optimizasyonun büyük kısmı bu listeyi kısaltmakla ilgilidir.
- **Nerede karşına çıkar:** Lighthouse raporunun standart uyarılarından biri: "Eliminate render-blocking resources".
- **Örnek kullanım:** "Üç ayrı font ailesi yüklüyoruz, hepsi render-blocking. Bire indirelim."
- **İlgili terimler:** Critical rendering path, LCP (8.12), Font loading (8.12)

### Viewport

- **Terim (İngilizce):** Viewport
- **Türkçesi:** Görüntü alanı
- **Tanım:** Kullanıcının o anda ekranda gördüğü alan.
- **Ne işe yarar / neden var:** Responsive tasarımın ölçü birimi. Breakpoint'ler viewport genişliğine göre tanımlanır. Ayrıca lazy loading kararları buna göre verilir: viewport dışındaki görseller sonradan yüklenir.
- **Nerede karşına çıkar:** Her responsive konuşmasında. Figma'da çizdiğin her ekran boyutu bir viewport varsayımıdır.
- **Örnek kullanım:** "Hero'nun tamamı viewport'a sığmıyor; mobilde CTA scroll gerektirmeden görünmeli."
- **Karıştırılanlar:** *Viewport* ≠ *ekran çözünürlüğü*. Tarayıcı penceresi ekrandan küçük olabilir; ayrıca cihaz piksel oranı yüzünden CSS pikseli ile fiziksel piksel aynı değildir.
- **İlgili terimler:** Above the fold, Breakpoint (5.8), Responsive (5.8)

### Above the fold

- **Terim (İngilizce):** Above the fold
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "katlama çizgisinin üstü" olarak açıklanır.
- **Tanım:** Kullanıcı hiç kaydırmadan gördüğü alan.
- **Ne işe yarar / neden var:** Gazete katlandığında üstte kalan kısımdan gelen terim. Hem tasarım hem performans kararlarını yönlendirir: en önemli mesaj ve birincil CTA buraya konur, buradaki görseller öncelikli yüklenir.
- **Nerede karşına çıkar:** Landing page tasarım tartışmalarında ve dönüşüm optimizasyonunda.
- **Örnek kullanım:** "Above the fold'da sadece başlık ve tek bir CTA olsun; ikinci butonu aşağı alalım."
- **Karıştırılanlar:** Sabit bir piksel değeri değildir — cihaza göre değişir. "800px above the fold" gibi bir cümle yanlıştır.
- **İlgili terimler:** Viewport, Hero (7.3), LCP (8.12)

---

## 1.5 Static site, dynamic site, web app

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

---

## 1.6 Katmanlar: front-end, back-end, full-stack, infrastructure

Bir ekipteki iş bölümünün adları. Bunları bilmek, bir talebi kime iletmen gerektiğini bilmek demektir.

### Front-end

- **Terim (İngilizce):** Front-end (FE)
- **Türkçesi:** Ön yüz
- **Tanım:** Kullanıcının gördüğü ve etkileştiği her şeyin yazıldığı katman.
- **Ne işe yarar / neden var:** Tasarımı çalışan bir arayüze çevirir. Senin çıktın en doğrudan burada karşılık bulur.
- **Nerede karşına çıkar:** Tasarım handoff'unda muhatabın front-end geliştiricidir. Bir görsel hata ("buton mobilde taşıyor") FE tarafına gider.
- **Örnek kullanım:** "Bu bir FE bug'ı, API doğru veri dönüyor ama liste yanlış sıralanıyor."
- **Karıştırılanlar:** *Front-end* ≠ *tasarım*. Front-end kod yazar, tasarımcı ekranı kurgular. Kesişirler ama aynı iş değildir.
- **İlgili terimler:** Back-end, Client-side, Component (8.7)

### Back-end

- **Terim (İngilizce):** Back-end (BE)
- **Türkçesi:** Arka yüz
- **Tanım:** Sunucuda çalışan, veriyi ve iş kurallarını yöneten katman.
- **Ne işe yarar / neden var:** Veriyi saklar, doğrular, yetki kontrolü yapar, üçüncü parti servislerle konuşur. Kullanıcı görmez ama ürünün doğruluğu buradadır.
- **Nerede karşına çıkar:** Veri gerektiren her özellik talebinde. "Bunu yapabilir miyiz?" sorusunun cevabı çoğu zaman BE tarafındadır.
- **Örnek kullanım:** "İndirim kuralı BE'de olmalı; FE'de yaparsak kullanıcı devre dışı bırakabilir."
- **İlgili terimler:** Front-end, Server, API (10.4), Database (Bölüm 11)

### Full-stack

- **Terim (İngilizce):** Full-stack
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Hem ön hem arka yüzde çalışabilen geliştirici veya yaklaşım.
- **Ne işe yarar / neden var:** Küçük ekiplerde tek kişi tüm zinciri götürebilir; iki kişi arasında bekleme olmaz. Büyük ekiplerde ise uzmanlaşma daha verimli olabilir.
- **Nerede karşına çıkar:** İş ilanlarında en sık geçen başlıklardan biri. Ayrıca Next.js gibi framework'ler "full-stack framework" olarak anılır — hem sunucu hem istemci tarafını aynı projede yazabildikleri için.
- **Örnek kullanım:** "Ekip iki kişi; ikimiz de full-stack çalışıyoruz, ayrı FE/BE ayrımı yok."
- **İlgili terimler:** Front-end, Back-end, Meta-framework (9.1)

### Infrastructure

- **Terim (İngilizce):** Infrastructure (infra)
- **Türkçesi:** Altyapı
- **Tanım:** Kodun üzerinde çalıştığı sunucu, ağ, veritabanı ve yayın sisteminin bütünü.
- **Ne işe yarar / neden var:** Kod tek başına bir şey yapmaz; çalışacağı, yayınlanacağı ve izleneceği bir zemin gerekir. Bu zeminin kurulması ve bakımı ayrı bir uzmanlıktır.
- **Nerede karşına çıkar:** "Infra tarafında bir sorun var" = kodda değil, çalışma ortamında bir problem. Vercel gibi platformlar bu işin çoğunu üstlendiği için küçük projelerde ayrı bir infra rolü gerekmez.
- **Örnek kullanım:** "Site kod değişmeden çöktü; infra tarafına bakmak lazım."
- **İlgili terimler:** DevOps (Bölüm 16), Hosting, Server

### Tech stack

- **Terim (İngilizce):** Tech stack (stack)
- **Türkçesi:** Teknoloji yığını
- **Tanım:** Bir projede kullanılan teknolojilerin tamamı.
- **Ne işe yarar / neden var:** Tek kelimeyle projenin teknik kimliğini anlatır. Yeni birine "stack ne?" diye sorulduğunda beklenen cevap: dil, framework, veritabanı, hosting.
- **Nerede karşına çıkar:** Proje başlangıcında ve işe alımda. Yapay zekâya prompt yazarken stack'i belirtmek, çıktının doğruluğunu en çok artıran tek bilgidir.
- **Örnek kullanım:** "Stack: Next.js, TypeScript, Tailwind, PostgreSQL, Vercel."
- **İlgili terimler:** Framework (9.1), Teknoloji seçimi (9.12)

### Client-side / Server-side

- **Terim (İngilizce):** Client-side, Server-side
- **Türkçesi:** İstemci tarafı, sunucu tarafı
- **Tanım:** Bir işin kullanıcının cihazında mı yoksa sunucuda mı yapıldığını belirten sıfatlar.
- **Ne işe yarar / neden var:** Aynı işlev iki yerde de yapılabilir ve sonuçları farklıdır. Client-side hızlıdır ama kullanıcı tarafından görülebilir ve değiştirilebilir; server-side güvenlidir ama her seferinde gidiş-dönüş gerektirir. Bu ayrım hem güvenlik hem performans kararlarının temelidir.
- **Nerede karşına çıkar:** Sürekli. "Client-side validation", "server-side rendering", "client-side routing" — hepsi bu ayrımın türevi.
- **Örnek kullanım:** "Form doğrulaması hem client-side hem server-side olmalı: client-side kullanıcı deneyimi için, server-side güvenlik için."
- **İlgili terimler:** Front-end, Back-end, Rendering stratejileri (8.10), Input validation (13.7)

---

## 1.7 SPA, MPA, PWA

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

---

## 1.8 Ortamlar: local, staging, production

Aynı kodun farklı yerlerde çalışan kopyaları. Bu ayrım olmasa her deneme canlı sitede yapılırdı. Detaylı yönetimi Bölüm 16.3'te; burada sadece kavram.

### Local (localhost)

- **Terim (İngilizce):** Local / localhost
- **Türkçesi:** Yerel ortam
- **Tanım:** Projenin geliştiricinin kendi bilgisayarında çalışan hâli.
- **Ne işe yarar / neden var:** Denemenin bedava ve risksiz olduğu yer. Sadece o bilgisayardan erişilir; internetten kimse göremez.
- **Nerede karşına çıkar:** "Bende çalışıyor" cümlesinin geçtiği her yer. `localhost:3000` gibi adresler bu ortamı gösterir.
- **Örnek kullanım:** "Local'de sorun yok ama deploy edince patlıyor — ortam değişkenlerinden biri eksik olabilir."
- **Karıştırılanlar:** Local'de çalışması, canlıda çalışacağı anlamına gelmez. Bu, yazılımın en eski şakalarından biri ve gerçek bir risk kaynağı.
- **İlgili terimler:** Development, Staging, Production

### Development environment

- **Terim (İngilizce):** Development environment (dev)
- **Türkçesi:** Geliştirme ortamı
- **Tanım:** Geliştirme sırasında kullanılan, hata ayıklamayı kolaylaştıracak şekilde ayarlanmış ortam.
- **Ne işe yarar / neden var:** Ayrıntılı hata mesajları, otomatik yenileme ve sıkıştırılmamış kod içerir. Bu yüzden canlıdan yavaştır — dev ortamındaki hız ölçümü gerçeği yansıtmaz.
- **Nerede karşına çıkar:** "Dev build" ile "production build" ayrımında.
- **Örnek kullanım:** "Dev modunda ölçme; production build al, öyle bak."
- **İlgili terimler:** Local, Production, Build (8.11)

### Staging environment

- **Terim (İngilizce):** Staging environment
- **Türkçesi:** Prova / hazırlık ortamı
- **Tanım:** Canlının birebir kopyası olan, ama gerçek kullanıcıya açık olmayan ortam.
- **Ne işe yarar / neden var:** Son kontrolün yapıldığı yer. Bir tasarım incelemesi veya müşteri onayı burada alınır; hata bulunursa gerçek kullanıcı etkilenmemiş olur.
- **Nerede karşına çıkar:** "Staging'e attım, bakabilir misin?" cümlesi tasarımcının en sık duyacağı cümlelerden biridir. Tasarım kalite kontrolünü burada yaparsın.
- **Örnek kullanım:** "Staging'de boşluklar Figma ile uyuşmuyor; canlıya çıkmadan düzeltelim."
- **Karıştırılanlar:** *Staging* ≠ *preview*. Preview genelde her değişiklik için otomatik üretilen geçici bir adrestir; staging kalıcı ve tek bir ortamdır.
- **İlgili terimler:** Production, Preview environment (16.3), QA (17.5)

### Production environment

- **Terim (İngilizce):** Production (prod), canlı ortam
- **Türkçesi:** Canlı ortam
- **Tanım:** Gerçek kullanıcıların kullandığı, gerçek verinin bulunduğu ortam.
- **Ne işe yarar / neden var:** Ürünün gerçekten yaşadığı yer. Buradaki her hata gerçek bir kullanıcıyı etkiler; bu yüzden buraya çıkış ayrı bir disiplinle yönetilir.
- **Nerede karşına çıkar:** "Prod'a çıktı", "prod'da bug var", "prod'a dokunma" — hepsi aynı ortamdan bahseder. Terimin tonu ciddidir; şaka yapılmaz.
- **Örnek kullanım:** "Cuma akşamı prod'a çıkmayalım; sorun çıkarsa hafta sonu kimse müdahale edemez."
- **İlgili terimler:** Staging, Deploy (16.1), Rollback (16.9), Hotfix (16.9)

---

## 1.9 Kendini test et

Cevaplara bakmadan yaz. Sonra karşılaştır.

**1.** Bir kullanıcı adres çubuğuna `ornek.com` yazıp Enter'a bastı. Ekranda görüntü oluşana kadar sırayla ne oluyor? Ana adımları say.

**2.** Domain, DNS ve hosting arasındaki fark nedir? Üçünü tek cümleyle ayır.

**3.** Bir geliştirici "bu doğrulamayı client-side yapmayalım" diyor. Gerekçesi ne olabilir?

**4.** DOM ile HTML arasındaki fark nedir ve bu fark neden SEO'yu ilgilendirir?

**5.** Sayfa açılırken görseller yüklendikçe içerik aşağı kayıyor ve kullanıcı yanlış butona tıklıyor. Bu sorunun teknik adı nedir, tarayıcının hangi adımıyla ilgilidir?

**6.** Statik site ile dinamik site arasındaki fark nedir? Hangi durumda dinamik olmak zorunludur?

**7.** SPA ile MPA arasındaki fark nedir? SPA'nın tasarımcı olarak senin ekstra sorumluluğun hâline getirdiği iki şey say.

**8.** `https://ornek.com/urunler/kirmizi-ceket?beden=m#yorumlar` adresinde `kirmizi-ceket`, `?beden=m` ve `#yorumlar` parçalarının adları nedir?

**9.** Local, staging ve production arasındaki farkı ve her birinin ne işe yaradığını açıkla.

**10.** "Latency yüksek" ile "bandwidth düşük" aynı şey mi? Değilse fark ne?

---

### Cevaplar

**1.** Tarayıcı önce DNS'e sorup domainin IP'sini bulur → o IP'deki sunucuya HTTP isteği (request) gönderir → sunucu bir cevap (response) döner → tarayıcı HTML'i işleyip DOM'u, CSS'i işleyip CSSOM'u oluşturur → ikisi birleşip render tree olur → layout hesaplanır → paint ve composite ile ekrana çizilir.

**2.** Domain sitenin kayıtlı adı. DNS o adı sunucunun IP adresine çeviren sistem. Hosting ise dosyaların gerçekten durduğu ve servis edildiği yer. Üçü ayrı hizmettir, farklı firmalardan alınabilir.

**3.** Client-side'daki kod kullanıcının cihazında çalışır; kullanıcı onu görebilir ve değiştirebilir. Güvenlik veya iş kuralı gerektiren doğrulama server-side yapılmalıdır. (İdeali ikisi birden: client-side deneyim için, server-side güvenlik için.)

**4.** HTML sunucudan gelen ham metin dosyası; DOM tarayıcının ondan ürettiği ve JavaScript'in sonradan değiştirebildiği canlı yapı. İçerik yalnızca JavaScript çalıştıktan sonra DOM'a ekleniyorsa, JavaScript çalıştırmayan botlar o içeriği göremeyebilir.

**5.** Layout shift; ölçülen metriği CLS (Cumulative Layout Shift). Tarayıcının **layout** (reflow) adımıyla ilgilidir. Çözüm: görsel ve dinamik alanlara önceden yer ayırmak.

**6.** Statik sitede herkese aynı, önceden hazırlanmış dosyalar servis edilir. Dinamik sitede sayfa istek anında üretilir. Kişiye özel içerik, kullanıcı girişi veya anlık değişen veri (stok, fiyat) varsa dinamik olmak zorunludur.

**7.** SPA'da sayfa bir kez yüklenir, geçişler yenilenmeden yapılır; MPA'da her geçişte sunucudan yeni belge gelir. SPA'da tasarımcının ekstra sorumluluğu: (a) URL'in her ekranda doğru güncellenmesi ve paylaşılabilir olması, (b) sayfa geçişinde focus yönetimi ve ekran okuyucuya geçişin bildirilmesi. (Ayrıca yükleme/boş/hata durumlarının ayrı ayrı tasarlanması da kabul edilir.)

**8.** `kirmizi-ceket` = slug (path'in son parçası). `?beden=m` = query string; `beden` bir query parameter. `#yorumlar` = fragment (anchor / hash).

**9.** Local: geliştiricinin kendi bilgisayarı, sadece ona açık, deneme yeri. Staging: canlının kopyası, dış kullanıcıya kapalı, son kontrol ve onay yeri. Production: gerçek kullanıcıların kullandığı canlı ortam, gerçek veri burada.

**10.** Aynı şey değil. Latency gecikme — isteğin gidip dönmesinin süresi. Bandwidth kapasite — birim zamanda taşınabilen veri miktarı. Bandwidth'i artırmak latency'yi düşürmez; mesafe ve gidiş-dönüş sayısı azalmadan gecikme azalmaz.

---

**Biten bölüm:** Bölüm 1 — Web nasıl çalışır
**Sıradaki bölüm:** Bölüm 2 — Ürün geliştirme yaşam döngüsü
