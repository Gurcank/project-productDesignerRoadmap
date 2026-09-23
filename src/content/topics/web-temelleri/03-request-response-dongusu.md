---
title: "Request / response döngüsü"
sectionNumber: "1.3"
category: "web-temelleri"
order: 3
cardCount: 8
sourceFile: "01-web-nasil-calisir.md"
origin: "material"
flags: []
---
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
