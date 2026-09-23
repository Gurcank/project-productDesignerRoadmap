---
title: "Adres ve bulunabilirlik: URL, domain, DNS, hosting"
sectionNumber: "1.2"
category: "web-temelleri"
order: 2
cardCount: 8
sourceFile: "01-web-nasil-calisir.md"
origin: "material"
flags: ["degisken", "emin-degil"]
---
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
