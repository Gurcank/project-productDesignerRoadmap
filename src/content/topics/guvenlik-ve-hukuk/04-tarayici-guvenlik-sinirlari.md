---
title: "Tarayıcı güvenlik sınırları"
sectionNumber: "13.4"
category: "guvenlik-ve-hukuk"
order: 4
cardCount: 3
sourceFile: "13-guvenlik-ve-hukuki-yukumluluk.md"
origin: "material"
flags: []
---
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
