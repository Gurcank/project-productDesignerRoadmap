# Bölüm 16 — DevOps, yayın ve gözlemlenebilirlik

Bu bölüm, kodun bilgisayardan çıkıp kullanıcıya ulaştığı ve orada yaşadığı süreci anlatıyor.

Tasarımcı için üç somut bağlantısı var:

1. **Yayın hızı, tasarım kalitesini belirler.** Deploy zorsa, küçük düzeltmeler birikir ve "sonraki sürümde" diye ertelenir. Kolaysa, boşluk değerini düzeltmek beş dakikalık bir iştir. Yani CI/CD, dolaylı olarak senin işini etkiler.
2. **Kalite kontrolü otomatikleştirilebilir.** Erişilebilirlik taraması, performans bütçesi ve görsel karşılaştırma testleri yayın hattına konabilir — böylece kontrol insan hafızasına değil sürece bağlanır.
3. **Canlıda ne olduğunu görmek.** Analitik olayları (16.11) tasarlamak senin işin; ve bir hata canlıda yaşandığında kullanıcının ne gördüğü de senin tasarladığın ekrandır.

Bölümdeki kavramlar eskimeyen, **ürün ve fiyat bilgileri hızlı eskiyen** kategoride. 16.6 ve 16.12'de `[DEĞİŞKEN BİLGİ]` etiketi yoğun.

---

## 16.1 CI/CD

Kısaltmanın üç ayrı anlamı var ve karıştırılıyor.

### Continuous Integration

- **Terim (İngilizce):** CI — Continuous Integration
- **Türkçesi:** Sürekli entegrasyon
- **Tanım:** Herkesin değişikliklerini sık sık (en az günde bir) ortak dala katması ve her katmada otomatik testlerin çalışması.
- **Ne işe yarar / neden var:** Entegrasyon sorunlarını erken ve küçükken yakalar. Bir hafta ayrı çalışılan iki dal birleştiğinde büyük bir çakışma çıkar (15.3); günlük birleşmede çakışma küçük olur. **Trunk-based development'ın (15.7) tam karşılığıdır.**
- **Nerede karşına çıkar:** Her PR'da çalışan kontroller.
- **Örnek kullanım:** "CI kırıldı; testlerden biri geçmiyor, merge edemeyiz."
- **İlgili terimler:** CD, Pipeline (16.2), Trunk-based (15.7)

### Continuous Delivery vs Deployment

- **Terim (İngilizce):** CD — Continuous Delivery, Continuous Deployment
- **Türkçesi:** Sürekli teslimat, sürekli dağıtım
- **Tanım:** **Continuous Delivery**: her değişiklik yayına çıkmaya **hazır** hâle gelir, ama yayın kararını insan verir. **Continuous Deployment**: testleri geçen her değişiklik **otomatik olarak** canlıya çıkar, insan onayı yoktur.
- **Ne işe yarar / neden var:** İkisinin farkı bir kültür meselesidir. Continuous Deployment, günde onlarca yayın demektir ve ancak güçlü test altyapısı, feature flag (16.8) ve hızlı geri alma (16.9) varsa güvenlidir.
- **Nerede karşına çıkar:** Süreç tartışmalarında. "CD yapıyoruz" cümlesi hangisini kastettiğini söylemez; sorulmalıdır.
- **Örnek kullanım:** "Continuous delivery'deyiz; her şey hazır ama yayın düğmesine biz basıyoruz."
- **Karıştırılanlar:** "CI/CD" kısaltması üç kavramı tek torbaya koyar. Çoğu ekip aslında CI + Continuous Delivery yapar, Continuous Deployment değil.
- **İlgili terimler:** CI, Feature flag (16.8), Rollback (16.9)

---

## 16.2 Pipeline anatomisi

### Pipeline

- **Terim (İngilizce):** Pipeline, job, step, stage, artifact, runner
- **Türkçesi:** Yayın hattı
- **Tanım:** Kodun testten geçip yayına çıkana kadar izlediği otomatik adımlar dizisi.
- **Ne işe yarar / neden var:** Elle yapılan her adım unutulabilir veya yanlış yapılabilir. Hattın tamamı otomatikse, yayın bir karar olur, bir operasyon değil.
- **Nerede karşına çıkar:** Her PR ve her deploy'da. GitHub Actions (15.11) bunun bir uygulamasıdır.
- **Örnek kullanım:** "Pipeline dört aşamalı: kurulum, test, build, deploy."
- **İlgili terimler:** GitHub Actions (15.11), Build, CI gate (17.7)

**Tipik bir hattın aşamaları:**

| Aşama | Ne yapar |
|---|---|
| **Install** | Bağımlılıkları indirir (8.11) |
| **Lint & type check** | Kod standardını ve tipleri kontrol eder (17.7) |
| **Test** | Otomatik testleri çalıştırır (17.2) |
| **Build** | Üretim için optimize edilmiş çıktıyı üretir |
| **Deploy** | Çıktıyı hedef ortama gönderir |
| **Smoke test** | Yayından sonra temel akışların çalıştığını doğrular (17.2) |

### Build / Artifact

- **Terim (İngilizce):** Build, artifact
- **Türkçesi:** Derleme, çıktı
- **Tanım:** **Build**, kaynak kodun çalıştırılabilir/servis edilebilir hâle getirilmesi (8.11). **Artifact**, o işlemin ürettiği ve sonraki aşamalara taşınan çıktı.
- **Ne işe yarar / neden var:** **Aynı artifact'ın tüm ortamlarda kullanılması önemli bir ilkedir:** staging'de test edilen şey ile production'a çıkan şey birebir aynı olmalıdır. Her ortam için ayrı build almak, "staging'de çalışıyordu" sorununu üretir.
- **Nerede karşına çıkar:** Yayın süreçlerinde.
- **Örnek kullanım:** "Staging'de test ettiğimiz artifact'ı production'a alalım; yeniden build etmeyelim."
- **İlgili terimler:** Pipeline, Ortamlar (16.3), Docker image (16.4)

---

## 16.3 Ortamlar

Bölüm 1.8'de kavramsal olarak tanıtıldı. Burada yönetim tarafı.

### Ortam türleri

- **Terim (İngilizce):** Local, development, preview, staging, production
- **Türkçesi:** Yerel, geliştirme, önizleme, prova, canlı
- **Tanım:** Aynı uygulamanın farklı amaçlarla çalışan kopyaları (1.8). **Preview environment**, her PR için otomatik oluşturulan geçici ve kendine ait adresi olan ortamdır.
- **Ne işe yarar / neden var:** **Preview ortamı doğrudan senin işine yarar:** bir tasarım değişikliğini, kimseden bir şey istemeden, gerçek bir adreste görebilir ve paylaşabilirsin. Modern hosting platformlarının (16.6) en değerli özelliklerinden biridir.
- **Nerede karşına çıkar:** Her PR'da otomatik olarak oluşur.
- **Örnek kullanım:** "PR'ın preview linkini müşteriye gönderelim; staging'e almadan onay alalım."
- **Karıştırılanlar:** *Preview* geçicidir ve PR'a bağlıdır; *staging* kalıcı ve tektir (1.8).
- **İlgili terimler:** Staging (1.8), Pull request (15.5), Design review (2.10)

### Ortam değişkeni yönetimi

- **Terim (İngilizce):** Environment variable management, secret manager
- **Türkçesi:** Ortam değişkeni yönetimi
- **Tanım:** Her ortamın kendi yapılandırma değerlerine sahip olması ve sırların güvenli saklanması (10.1, 13.6).
- **Ne işe yarar / neden var:** Aynı kod farklı ortamlarda farklı veritabanına, farklı ödeme anahtarına ve farklı analitik hesabına bağlanır. **Deploy sorunlarının en yaygın tek sebebi eksik veya yanlış ortam değişkenidir.**
- **Nerede karşına çıkar:** Hosting platformunun ayarlar ekranında.
- **Örnek kullanım:** "Staging test ödeme anahtarını kullansın; canlı anahtar sadece production'da olsun."
- **Karıştırılanlar:** **Staging'de gerçek servisleri kullanmak tehlikelidir:** test siparişi gerçek kart çekebilir, test e-postası gerçek müşteriye gidebilir. Bu bir tasarım ve süreç kararıdır.
- **İlgili terimler:** Secret (13.6), Environment variable (10.1)

---

## 16.4 Docker

### Container / Image

- **Terim (İngilizce):** Docker, container, image, Dockerfile, layer, volume, registry
- **Türkçesi:** Konteyner, imaj
- **Tanım:** **Image**, uygulamanın ve çalışması için gereken her şeyin (dil sürümü, kütüphaneler, işletim sistemi parçaları) paketlenmiş hâli. **Container**, o imajın çalışan bir örneği. **Dockerfile**, imajın nasıl oluşturulacağını tanımlayan tarif.
- **Ne işe yarar / neden var:** **"Bende çalışıyor" problemini (1.8) yapısal olarak çözer.** Uygulama yalnızca kendi kodunu değil, çalıştığı ortamı da taşır. Senin bilgisayarında çalışan imaj, sunucuda da birebir aynı şekilde çalışır.
- **Nerede karşına çıkar:** Sunucu tarafı projelerde ve yerel geliştirme ortamı kurulumunda.
- **Örnek kullanım:** "Veritabanını Docker'da çalıştıralım; herkesin bilgisayarına ayrı ayrı kurmayalım."
- **Karıştırılanlar:** *Container* bir sanal makine değildir; işletim sistemini tekrarlamaz, sadece yalıtım sağlar — bu yüzden çok daha hafif ve hızlıdır. Ayrıca **konteyner varsayılan olarak kalıcı değildir:** durdurulduğunda içindeki veri silinir. Kalıcı veri için **volume** kullanılır.
- **İlgili terimler:** Kubernetes (16.5), Artifact (16.2), Registry

### Docker Compose

- **Terim (İngilizce):** Docker Compose
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Birden fazla konteyneri (uygulama, veritabanı, önbellek) tek bir yapılandırma dosyasıyla birlikte çalıştırma aracı.
- **Ne işe yarar / neden var:** Yerel geliştirme ortamını tek komutla ayağa kaldırır. Yeni birinin projeye katılma süresini günlerden dakikalara indirebilir.
- **Nerede karşına çıkar:** Yerel geliştirme kurulumunda.
- **Örnek kullanım:** "Compose dosyası var; tek komutla uygulama, Postgres ve Redis birlikte kalkıyor."
- **İlgili terimler:** Docker, Local (1.8)

---

## 16.5 Kubernetes

### Kubernetes

- **Terim (İngilizce):** Kubernetes — K8s, orchestration
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Çok sayıda konteynerin otomatik olarak dağıtılmasını, ölçeklenmesini, izlenmesini ve çöktüğünde yeniden başlatılmasını yöneten sistem.
- **Ne işe yarar / neden var:** Onlarca servis ve yüzlerce konteyner varsa, bunları elle yönetmek imkânsızdır. Kubernetes bu işi otomatikleştirir: bir konteyner çökerse yerine yenisini açar, trafik artınca kopya sayısını artırır (14.6).
- **Nerede karşına çıkar:** Büyük ölçekli ve mikroservis (14.2) mimarilerinde.
- **Örnek kullanım:** "Kubernetes'e ihtiyacımız yok; üç servisimiz var ve platform zaten ölçekliyor."
- **Ne zaman kullanılmaz:** **Çoğu proje için gereksiz karmaşıklıktır ve bunu söylemek önemlidir.** Kubernetes'in kendisi bakım gerektiren bir sistemdir; küçük bir ekip onu yönetmeye başladığında ürün geliştirmeye ayıracağı zaman azalır. Modern hosting platformları (16.6) çoğu projenin ihtiyacını zaten karşılar.
- **Karıştırılanlar:** Kubernetes bir tercih değil, bir **maliyet**tir: bir uzmanlık, bir ekip yükü ve bir öğrenme eğrisi getirir. "Kubernetes kullanıyoruz" cümlesi bir üstünlük göstergesi değil, bir ölçek göstergesi olmalıdır. **Seviye 3** terim.
- **İlgili terimler:** Docker (16.4), Microservice (14.2), Autoscaling (14.6)

---

## 16.6 Hosting ve deploy platformları

> `[DEĞİŞKEN BİLGİ]` **Bu alt bölüm dosyadaki en hızlı eskiyen içeriklerden biri.** Aşağıdaki konumlandırmalar Eylül 2026 itibarıyla topladığım ikincil kaynaklara dayanıyor. **Fiyatları karar vermeden önce mutlaka platformun kendi sayfasından doğrula.**

### Platform manzarası

| Platform | Ne için güçlü | Dikkat edilecek |
|---|---|---|
| **Vercel** | Next.js için en iyi geliştirici deneyimi; ISR, görsel optimizasyonu ve önizleme ortamları kutudan çıkar | Kullanıma dayalı faturalama maliyet sürprizi yapabilir. Ücretsiz (Hobby) katmanının **ticari kullanıma kapalı** olduğu belirtiliyor |
| **Netlify** | Geniş framework desteği, form yönetimi, A/B bölme testi; Astro ve statik siteler için güçlü | Kredi tabanlı bir fiyatlandırmaya geçtiği raporlanıyor |
| **Cloudflare Pages / Workers** | Uç ağda çalışır, cömert ücretsiz katman, ölçekte en ucuz seçeneklerden | Öğrenme eğrisi en dik olanı; Next.js için bir uyarlama katmanı gerekebilir |
| **Railway** | Sürekli çalışan süreçler (API, worker, WebSocket) ve yanında veritabanı; koltuk başına ücret yok | Kullanıma dayalı fatura; kaynak boyutlandırması yanlışsa tahmin zorlaşır |
| **Render** | Kalıcı konteyner, soğuk başlangıç yok, tahmin edilebilir aylık ücret | Uç ağ avantajı yok |
| **Fly.io** | Docker şeklinde, bölge kontrolü, alt uçta en ucuz | En çok operasyon bilgisi isteyen seçenek; ücretsiz katmanını daralttığı raporlanıyor |
| **Kendi sunucun (VPS + Coolify vb.)** | En düşük maliyet; tam kontrol | Operasyon disiplini gerektirir: güncelleme, yedek, güvenlik, izleme senin sorumluluğunda |

### Karar çerçevesi

Platform seçiminde sorulacak sorular — fiyattan önce:

1. **Uygulama hangi şekilde?** İstek bazlı fonksiyonlar mı (Vercel, Netlify, Cloudflare), yoksa sürekli çalışan süreçler mi (Railway, Render, Fly)? WebSocket (10.5), arka plan worker'ı (10.12) veya uzun süren iş varsa serverless tek başına yetmez.
2. **Önizleme ortamı var mı?** Senin iş akışın için en değerli özellik bu (16.3).
3. **Fatura nasıl davranıyor?** Kullanıma dayalı mı, sabit mi? Ani trafik artışında ne olur?
4. **Harcama sınırı koyabiliyor muyum?** Bu, bir sonraki başlıktaki tuzağın tek gerçek savunması.
5. **Çıkış maliyeti ne?** Vendor lock-in (9.12) bilinçli bir karar olmalı.

### Maliyet tuzağı

`[EMİN DEĞİLİM]` Kullanıma dayalı faturalamanın bilinen bir riski var: **bot ve tarayıcı trafiği faturayı şişirebilir.** Yayınlanmamış bir projenin, yapay zekâ botlarının taraması yüzünden dört haneli bir fatura ürettiğine dair vaka anlatımları var; bu belirli vakayı doğrulamadım ama risk yapısal olarak gerçek. Savunma: **harcama sınırı ve uyarı kurmak**, bot trafiğini engellemek (13.9, WAF) ve hız sınırı (10.10) uygulamak. Bir projeyi yayına almadan önce bunları kurmak, sonradan faturayı tartışmaktan kolaydır.

---

## 16.7 Domain ve DNS

Kavramlar Bölüm 1.2'de. Burada pratik tarafı.

### DNS kayıt türleri

- **Terim (İngilizce):** A record, AAAA, CNAME, TXT, MX, nameserver
- **Türkçesi:** DNS kayıtları
- **Tanım:** Alan adının nereye işaret ettiğini tanımlayan kayıtlar:
  - **A** — bir IPv4 adresine işaret eder (**AAAA**, IPv6 karşılığı)
  - **CNAME** — başka bir alan adına işaret eder; hosting platformları genelde bunu ister
  - **TXT** — serbest metin; alan adı sahipliği doğrulaması ve e-posta güvenliği (SPF, DKIM, DMARC) için kullanılır
  - **MX** — e-postanın hangi sunucuya gideceğini belirler
  - **Nameserver** — alan adının DNS kayıtlarını kimin yönettiğini belirler
- **Ne işe yarar / neden var:** Yayın gününün en sık takıldığı yer burasıdır. Kayıtları eklemek, senin de yapabileceğin bir iştir.
- **Nerede karşına çıkar:** Alan adı panelinde ve hosting platformunun kurulum adımlarında.
- **Örnek kullanım:** "Platform bir CNAME istiyor; alan adı panelinden ekleyelim."
- **Karıştırılanlar:** **E-posta kayıtlarına (MX, TXT) dikkat:** nameserver'ı değiştirirsen ve eski kayıtları taşımazsan **şirketin e-postası çalışmayı bırakır.** Yayın günü yaşanan en kötü sürprizlerden biridir.
- **İlgili terimler:** DNS (1.2), Domain (1.2), SSL (13.5)

### Propagation

- **Terim (İngilizce):** DNS propagation, TTL
- **Türkçesi:** Yayılma süresi
- **Tanım:** Bir DNS değişikliğinin dünya genelinde geçerli hâle gelmesi için geçen süre.
- **Ne işe yarar / neden var:** Değişiklik anında olmaz; bazı kullanıcılar bir süre eski adresi görür. Bu, **yayın gününde "bende açılmıyor" şikâyetlerinin en yaygın sebebidir** ve genelde bir hata değildir.
- **Nerede karşına çıkar:** Alan adı taşımalarında.
- **Örnek kullanım:** "Geçiş öncesi TTL'i düşürelim; değişiklik daha hızlı yayılsın."
- **İlgili terimler:** DNS kayıtları, TTL (10.11)

---

## 16.8 Deploy stratejileri

Yeni sürümün kullanıcılara nasıl ulaştırılacağı. Hepsi aynı soruyu cevaplar: **bir şey ters giderse kaç kullanıcı etkilensin?**

### Rolling deployment

- **Terim (İngilizce):** Rolling deployment
- **Türkçesi:** Kademeli yayın
- **Tanım:** Sunucu kopyalarının tek tek yeni sürüme geçirilmesi.
- **Ne işe yarar / neden var:** Kesinti olmadan yayın yapmayı sağlar. Geçiş sırasında eski ve yeni sürüm bir süre birlikte çalışır.
- **Nerede karşına çıkar:** Çok kopyalı sistemlerde varsayılan strateji.
- **Örnek kullanım:** "Rolling deploy yapıyoruz; kesinti olmayacak ama iki sürüm kısa süre birlikte çalışacak."
- **Karıştırılanlar:** İki sürümün birlikte çalışması, **API ve veritabanı uyumluluğu** gerektirir: yeni sürümün eklediği bir alan, eski sürümü kırmamalıdır.
- **İlgili terimler:** Blue-green, Migration (11.10)

### Blue-green deployment

- **Terim (İngilizce):** Blue-green deployment
- **Türkçesi:** Mavi-yeşil yayın
- **Tanım:** İki tam ortam bulundurup, yeni sürümü boştaki ortama kurup trafiği bir anda oraya çevirmek.
- **Ne işe yarar / neden var:** **Geri dönüş anlıktır:** sorun çıkarsa trafik eski ortama geri çevrilir. Bedeli: iki kat altyapı maliyeti.
- **Nerede karşına çıkar:** Riskli sürümlerde ve kesintinin kabul edilemez olduğu sistemlerde.
- **Örnek kullanım:** "Blue-green yapalım; sorun çıkarsa saniyeler içinde geri dönebiliriz."
- **İlgili terimler:** Rollback (16.9), Canary

### Canary deployment

- **Terim (İngilizce):** Canary deployment, progressive rollout
- **Türkçesi:** Kanarya yayını, kademeli açılım
- **Tanım:** Yeni sürümün önce kullanıcıların küçük bir yüzdesine açılması, sorun görülmezse oranın kademeli artırılması.
- **Ne işe yarar / neden var:** Hatanın etki alanını sınırlar: bir sorun varsa kullanıcıların %1'i yaşar, %100'ü değil. Adı, madenlerde gaz tespiti için kullanılan kanaryadan gelir.
- **Nerede karşına çıkar:** Büyük ölçekli sistemlerde ve riskli değişikliklerde.
- **Örnek kullanım:** "Önce %5'e açalım, metrikleri bir saat izleyelim, sorun yoksa artıralım."
- **İlgili terimler:** Feature flag, Soft launch (2.11), Monitoring (16.10)

### Feature flag

- **Terim (İngilizce):** Feature flag, feature toggle, kill switch
- **Türkçesi:** Özellik anahtarı
- **Tanım:** Bir özelliğin, kod yayınlandıktan sonra ayrı bir ayarla açılıp kapatılabilmesi.
- **Ne işe yarar / neden var:** **Yayın (deploy) ile açılışı (release) birbirinden ayırır** — bu, bölümdeki en önemli fikirlerden biri. Kod canlıda durur ama kullanıcıya kapalıdır. Sonuçları:
  - Yarım kalmış iş, ana dala girebilir (trunk-based, 15.7).
  - Bir özellik, pazarlama takvimine göre açılabilir — yeni bir yayın gerekmeden.
  - Sorun çıkarsa özellik saniyeler içinde kapatılabilir (**kill switch**) — geri almaktan (16.9) çok daha hızlı.
  - A/B testi (4.10) ve kademeli açılım bunun üstüne kurulur.
- **Nerede karşına çıkar:** Modern ürün ekiplerinde standart.
- **Örnek kullanım:** "Yeni ödeme akışını flag arkasında yayınlayalım; önce biz kullanalım, sonra %10'a açalım."
- **Karıştırılanlar:** **Bayraklar birikir ve teknik borç (17.9) üretir.** Kullanılmayan bayraklar kodu dallandırır ve test edilmesi gereken durum sayısını katlar. Her bayrağın bir sahibi ve bir kaldırılma tarihi olmalıdır.
- **İlgili terimler:** Canary, A/B test (4.10), Trunk-based (15.7), Technical debt (17.9)

---

## 16.9 Olay yönetimi

Bir şeyler ters gittiğinde ne olacağı.

### Rollback

- **Terim (İngilizce):** Rollback
- **Türkçesi:** Geri alma
- **Tanım:** Yeni sürümün geri çekilip bir önceki çalışan sürüme dönülmesi.
- **Ne işe yarar / neden var:** Kriz anındaki ilk refleks. **Önce geri dön, sonra sebebi araştır** — baskı altında düzeltme yazmak yeni hata üretir (15.6).
- **Nerede karşına çıkar:** Olay müdahalesinde.
- **Örnek kullanım:** "Önce rollback yapalım, kullanıcı etkisini durduralım; kök nedene sonra bakarız."
- **Karıştırılanlar:** **Veritabanı değişiklikleri (11.10) rollback'i zorlaştırır:** kod geri alınabilir ama silinmiş bir sütun geri gelmez. Bu yüzden migration'lar geriye uyumlu planlanır: önce ekle, sonra kullan, en son eskisini kaldır.
- **İlgili terimler:** Revert (15.6), Blue-green (16.8), Migration (11.10)

### Hotfix

- **Terim (İngilizce):** Hotfix
- **Türkçesi:** Acil düzeltme
- **Tanım:** Normal süreci atlayarak doğrudan canlıya çıkarılan acil düzeltme.
- **Ne işe yarar / neden var:** Bazı sorunlar sıradaki sürümü bekleyemez. Ama süreç atlandığı için risklidir: hotfix'ler istatistiksel olarak yeni hata üretme eğilimindedir.
- **Nerede karşına çıkar:** Kritik hatalarda.
- **Örnek kullanım:** "Hotfix çıkacağız ama en azından bir kişi gözden geçirsin."
- **İlgili terimler:** Rollback, Cherry-pick (15.3), Incident

### Incident / Severity / On-call

- **Terim (İngilizce):** Incident, severity (sev1/sev2), on-call, escalation, runbook
- **Türkçesi:** Olay, önem seviyesi, nöbet
- **Tanım:** **Incident**, kullanıcıyı etkileyen beklenmedik bir sorun. **Severity**, etkisine göre seviyesi (sev1 en kritik). **On-call**, o an müdahaleden sorumlu kişi. **Runbook**, bilinen sorunlar için adım adım müdahale talimatı.
- **Ne işe yarar / neden var:** Kriz anında "kim ne yapacak" sorusunu önceden cevaplar. Panik anında karar vermek yerine, yazılı bir plan uygulanır.
- **Nerede karşına çıkar:** Üretimde çalışan her ekipte.
- **Örnek kullanım:** "Bu sev2; kullanıcılar etkileniyor ama akış tamamen durmuş değil."
- **Karıştırılanlar:** **Tasarımcının rolü var:** olay sırasında kullanıcıya ne gösterileceği (bakım ekranı, durum sayfası, hata mesajı) önceden tasarlanmış olmalıdır (7.9). Olay anında metin yazmaya çalışmak kötü sonuç verir.
- **İlgili terimler:** Postmortem, Escalation (3.5), Error state (7.9)

### Postmortem

- **Terim (İngilizce):** Postmortem, blameless postmortem, root cause analysis
- **Türkçesi:** Olay sonrası değerlendirme
- **Tanım:** Bir olaydan sonra ne olduğunu, neden olduğunu ve tekrarlamaması için ne yapılacağını yazan belge.
- **Ne işe yarar / neden var:** Aynı hatanın tekrar etmesini engeller. **"Blameless" olması kritiktir:** amaç suçlu bulmak değil, sistemdeki zayıflığı bulmaktır. Suçlama kültüründe insanlar hataları gizler ve sistem öğrenemez.
- **Nerede karşına çıkar:** Her ciddi olaydan sonra.
- **Örnek kullanım:** "Postmortem yazalım; asıl soru 'kim yaptı' değil, 'bu nasıl canlıya kadar geldi'."
- **Karıştırılanlar:** Retrospective (3.2) ile akrabadır ama farklıdır: retro düzenli ve süreç odaklı, postmortem olaya özel ve teknik odaklıdır.
- **İlgili terimler:** Incident, Retrospective (3.2), Blameless culture (18.7)

---

## 16.10 Gözlemlenebilirlik

### Monitoring vs Observability

- **Terim (İngilizce):** Monitoring, observability
- **Türkçesi:** İzleme, gözlemlenebilirlik
- **Tanım:** **Monitoring**, önceden bildiğin sorunları izlemektir ("CPU %90'ı geçti mi?"). **Observability**, bilmediğin sorunları sorabilme yeteneğidir ("neden sadece Türkiye'deki Android kullanıcıları yavaş?").
- **Ne işe yarar / neden var:** Monitoring bilinen soruları cevaplar, observability yeni soru sormanı sağlar. Karmaşık sistemlerde sorunların çoğu öngörülemez olduğu için ikincisi giderek daha önemli hâle geldi.
- **Nerede karşına çıkar:** Altyapı ve operasyon tartışmalarında.
- **Örnek kullanım:** "Uyarılarımız var ama sorunun nerede olduğunu bulamıyoruz; gözlemlenebilirlik eksik."
- **İlgili terimler:** Logging, Tracing, Alerting

### Logs / Metrics / Traces

- **Terim (İngilizce):** Logs, metrics, traces ("three pillars")
- **Türkçesi:** Günlükler, metrikler, izler
- **Tanım:** **Log** tekil olayların metin kaydı ("şu anda şu hata oluştu"). **Metric** zaman içindeki sayısal ölçüm (istek sayısı, yanıt süresi). **Trace** tek bir isteğin sistemdeki tüm yolculuğunun kaydı.
- **Ne işe yarar / neden var:** Üçü farklı soruları cevaplar. Metrik "bir sorun var mı?" der, trace "nerede?" der, log "tam olarak ne oldu?" der. Dağıtık sistemlerde (14.2) trace olmadan sorunun hangi serviste olduğunu bulmak çok zorlaşır.
- **Nerede karşına çıkar:** Hata ayıklamada.
- **Örnek kullanım:** "Metriklerde p95 yükselmiş; trace'e bakıp hangi serviste beklediğini bulalım."
- **İlgili terimler:** Observability, Percentile (14.9)

### Uptime monitor / Alerting

- **Terim (İngilizce):** Uptime monitoring, synthetic monitoring, alerting, alert fatigue
- **Türkçesi:** Erişilebilirlik izleme, uyarı
- **Tanım:** Sitenin dışarıdan düzenli olarak kontrol edilmesi ve bir sorun tespit edildiğinde ilgili kişilere bildirim gidilmesi.
- **Ne işe yarar / neden var:** Sorunu kullanıcıdan önce öğrenmeni sağlar. **Synthetic monitoring**, sadece "site açılıyor mu" değil, "giriş yapılabiliyor mu, sepete eklenebiliyor mu" gibi kritik akışları otomatik test eder.
- **Nerede karşına çıkar:** Operasyonel kontrol listesinde (21.8).
- **Örnek kullanım:** "Sadece ana sayfayı değil, ödeme akışını da synthetic olarak izleyelim."
- **Karıştırılanlar:** **Alert fatigue** gerçek bir sorundur: çok fazla uyarı gönderen bir sistemde insanlar uyarıları görmezden gelmeye başlar ve gerçek olay kaçırılır. Uyarı sayısı, eyleme geçilebilir olanlarla sınırlı tutulmalıdır.
- **İlgili terimler:** Incident (16.9), SLO (14.9), Monitoring

---

## 16.11 Hata izleme ve analitik

### Error tracking

- **Terim (İngilizce):** Error tracking, error monitoring (Sentry vb.)
- **Türkçesi:** Hata izleme
- **Tanım:** Canlıda oluşan hataların otomatik olarak toplanması, gruplanması ve bağlamıyla birlikte raporlanması.
- **Ne işe yarar / neden var:** Kullanıcıların çoğu hata bildirmez; sadece terk eder. Hata izleme, bildirilmeyen sorunları görünür kılar. Hangi tarayıcıda, hangi sayfada, kaç kullanıcıda olduğunu gösterir. Source map (8.11) yüklenmezse raporlar okunamaz hâle gelir.
- **Nerede karşına çıkar:** Üretime çıkan her projede olmalı.
- **Örnek kullanım:** "Sentry'de bu hata günde 200 kez tetikleniyor ama tek bir destek talebi yok; kullanıcılar sessizce terk ediyor."
- **İlgili terimler:** Source map (8.11), Incident (16.9), Error state (7.9)

### Web analytics vs Product analytics

- **Terim (İngilizce):** Web analytics, product analytics
- **Türkçesi:** Web analitiği, ürün analitiği
- **Tanım:** **Web analitiği** trafik odaklıdır: kaç ziyaretçi, nereden geldi, hangi sayfaya baktı. **Ürün analitiği** davranış odaklıdır: kullanıcı hangi adımları tamamladı, nerede takıldı, hangi özelliği kullandı.
- **Ne işe yarar / neden var:** İkisi farklı sorulara cevap verir ve tasarımcı ikincisine ihtiyaç duyar: funnel (4.10), elde tutma ve özellik kullanım oranları ürün analitiğinden gelir.
- **Nerede karşına çıkar:** Ölçüm kurulumunda. `[DEĞİŞKEN BİLGİ]` Araç isimleri ve fiyatlandırmaları sık değişir.
- **Örnek kullanım:** "Web analitiği 'trafik var' diyor ama funnel'ın nerede koptuğunu göremiyoruz; ürün analitiği kuralım."
- **Karıştırılanlar:** Her iki tür de kişisel veri toplayabilir; KVKK/GDPR (13.10) uyumu ve çerez onayı (7.7) gerekir. Ayrıca reklam engelleyiciler bazı araçları bloke eder — ölçümler eksik olabilir.
- **İlgili terimler:** Funnel (4.10), KVKK (13.10), Heatmap (4.10)

### Event tasarımı

- **Terim (İngilizce):** Event taxonomy, tracking plan
- **Türkçesi:** Olay tasarımı, ölçüm planı
- **Tanım:** Hangi kullanıcı davranışlarının kaydedileceğinin ve nasıl adlandırılacağının önceden planlanması.
- **Ne işe yarar / neden var:** **Bu doğrudan senin işin ve çoğu ekipte sahipsiz kalır.** Olaylar plansız eklenirse üç ay sonra `button_click`, `btn_clicked` ve `ClickedButton` adlı üç ayrı olay olur ve hiçbiri analiz edilemez. İyi bir ölçüm planı: her olayın adı, ne zaman tetiklendiği, hangi ek bilgileri (özellik) taşıdığı ve **hangi soruyu cevaplamak için var olduğu**.
- **Nerede karşına çıkar:** Özellik tanımında (2.5). Başarı ölçütü (3.7) belirlenirken, onu ölçecek olay da tanımlanmalıdır.
- **Örnek kullanım:** "Bu özelliğin başarı ölçütü var ama onu ölçecek olay tanımlı değil; yayına çıkarsak ölçemeyiz."
- **Karıştırılanlar:** **Her şeyi ölçmek bir strateji değildir.** Cevaplanmayacak soru için toplanan veri, hem gürültü hem gereksiz bir gizlilik yükümlülüğüdür (11.11, veri minimizasyonu).
- **İlgili terimler:** Success metric (3.7), Funnel (4.10), Vanity metric (3.7)

---

## 16.12 Maliyet

### Bulut maliyeti

- **Terim (İngilizce):** Cloud cost, egress, build minutes, usage-based billing
- **Türkçesi:** Bulut maliyeti, veri çıkışı, derleme dakikası
- **Tanım:** Hosting faturasının bileşenleri: hesaplama süresi, veri transferi (özellikle **egress** — dışarı çıkan veri), depolama, derleme dakikaları ve koltuk başına ücretler.
- **Ne işe yarar / neden var:** **Tasarım kararlarının doğrudan maliyet karşılığı var.** Optimize edilmemiş görseller (8.12) egress faturasını büyütür. Her sayfada çalışan ağır bir sunucu işlevi, hesaplama maliyeti üretir. Statik üretim (8.10) ise neredeyse bedavadır.
- **Nerede karşına çıkar:** Aylık faturada ve mimari kararlarda.
- **Örnek kullanım:** "Görselleri optimize edip CDN'e alalım; hem hızlanır hem egress maliyeti düşer."
- **İlgili terimler:** CDN (10.11), Image optimization (8.12), SSG (8.10)

### Ücretsiz katman uyarısı

`[DEĞİŞKEN BİLGİ]` Bölüm 11.12'deki PlanetScale dersi burada da geçerli: **ücretsiz katmanlar kalıcı değildir.** Eylül 2026 itibarıyla topladığım kaynaklar, birden fazla platformun ücretsiz katmanını daralttığını veya fiyatlandırma modelini değiştirdiğini raporluyor. Ayrıca bazı ücretsiz katmanların **ticari kullanıma kapalı** olduğu belirtiliyor — yani müşteri projesini oraya koymak sözleşme ihlali olabilir.

**Bir platform seçerken sorulacak doğru soru:** "bugün bedava mı?" değil, **"ödemeli plana geçtiğimizde maliyeti ne olur ve çıkmak ne kadar zor?"**

---

## 16.13 Kendini test et

**1.** Continuous Delivery ile Continuous Deployment arasındaki fark nedir?

**2.** Aynı artifact'ın tüm ortamlarda kullanılması neden önemli?

**3.** Preview environment senin iş akışında neden değerli? Staging'den farkı nedir?

**4.** Staging'de gerçek servisleri kullanmanın riski nedir?

**5.** Docker "bende çalışıyor" problemini nasıl çözer? Konteyner bir sanal makine midir?

**6.** Konteynerdeki veri neden kaybolur? Çözümü nedir?

**7.** Kubernetes ne zaman gereksiz karmaşıklıktır? "Kubernetes kullanıyoruz" ne göstergesi olmalıdır?

**8.** Serverless tek başına hangi durumlarda yetmez?

**9.** Kullanıma dayalı faturalamanın bilinen riski nedir ve savunması ne?

**10.** Nameserver değiştirirken en kritik dikkat noktası nedir?

**11.** Yayın gününde "bende açılmıyor" şikâyetlerinin en yaygın sebebi nedir?

**12.** Blue-green ile canary arasındaki fark nedir?

**13.** Feature flag'in en önemli katkısı nedir? Dört sonucunu say.

**14.** Feature flag'lerin biriktirdiği sorun nedir?

**15.** Canlıda bir şey bozulduğunda ilk refleks ne olmalı? Veritabanı değişiklikleri bunu nasıl zorlaştırır?

**16.** Postmortem'in "blameless" olması neden kritik?

**17.** Olay anında tasarımcının rolü nedir?

**18.** Monitoring ile observability arasındaki fark nedir?

**19.** Log, metric ve trace hangi üç farklı soruyu cevaplar?

**20.** Alert fatigue nedir?

**21.** Error tracking neden gerekli? Kullanıcılar hataları bildirmez mi?

**22.** Event tasarımı neden senin işin? Plansız olay ekleme nasıl sonuçlanır?

**23.** Tasarım kararlarının bulut maliyetiyle bağlantısına iki örnek ver.

---

### Cevaplar

**1.** **Continuous Delivery**: her değişiklik yayına çıkmaya hazır hâle gelir ama yayın kararını insan verir. **Continuous Deployment**: testleri geçen her değişiklik otomatik olarak canlıya çıkar. Çoğu ekip "CD yapıyoruz" derken aslında birincisini kastediyor.

**2.** Çünkü **staging'de test edilen şey ile production'a çıkan şey birebir aynı olmalıdır.** Her ortam için ayrı build almak, "staging'de çalışıyordu" sorununu üretir.

**3.** Bir tasarım değişikliğini kimseden bir şey istemeden, **gerçek bir adreste** görüp paylaşabilirsin. Farkı: preview **geçicidir ve PR'a bağlıdır**; staging kalıcı ve tektir.

**4.** Test siparişi **gerçek kart çekebilir**, test e-postası **gerçek müşteriye gidebilir**. Staging test anahtarlarını kullanmalıdır; bu bir süreç kararıdır.

**5.** Uygulama yalnızca kendi kodunu değil, **çalıştığı ortamı da taşır** (dil sürümü, kütüphaneler, sistem parçaları). Senin bilgisayarında çalışan imaj sunucuda da birebir aynı çalışır. **Hayır, sanal makine değildir** — işletim sistemini tekrarlamaz, sadece yalıtım sağlar; bu yüzden çok daha hafiftir.

**6.** Çünkü **konteyner varsayılan olarak kalıcı değildir**; durdurulduğunda içindeki veri silinir. Kalıcı veri için **volume** kullanılır.

**7.** Onlarca servis ve gerçek bir ölçek yoksa gereksizdir: Kubernetes'in kendisi bakım gerektiren bir sistemdir ve küçük bir ekibin ürün geliştirme zamanını yer. "Kubernetes kullanıyoruz" bir **üstünlük göstergesi değil, bir ölçek göstergesi** olmalıdır.

**8.** **Sürekli çalışan süreçler** gerektiğinde: WebSocket sunucusu, arka plan worker'ı, uzun süren işler ve cron benzeri kalıcı görevler. Bunlar için kalıcı konteyner çalıştıran platformlar gerekir.

**9.** **Bot ve tarayıcı trafiği faturayı şişirebilir** — yayınlanmamış bir proje bile taranıp yüksek fatura üretebilir. Savunma: harcama sınırı ve uyarı kurmak, bot trafiğini engellemek (WAF), hız sınırı uygulamak. Bunlar yayından **önce** kurulmalıdır.

**10.** **E-posta kayıtları (MX, TXT).** Nameserver değiştirip eski kayıtları taşımazsan **şirketin e-postası çalışmayı bırakır** — yayın gününün en kötü sürprizlerinden biri.

**11.** **DNS propagation.** Değişiklik anında geçerli olmaz; bazı kullanıcılar bir süre eski adresi görür. Genelde bir hata değildir. Geçiş öncesi TTL düşürülerek süre kısaltılabilir.

**12.** **Blue-green**: iki tam ortam vardır, trafik bir anda yeniye çevrilir; geri dönüş anlıktır ama iki kat altyapı maliyeti vardır. **Canary**: yeni sürüm önce kullanıcıların küçük bir yüzdesine açılır, sorun yoksa oran kademeli artırılır; hatanın etki alanını sınırlar.

**13.** **Yayın (deploy) ile açılışı (release) birbirinden ayırır.** Sonuçları: (a) yarım kalmış iş ana dala girebilir, (b) özellik pazarlama takvimine göre yeni yayın gerekmeden açılabilir, (c) sorun çıkarsa saniyeler içinde kapatılabilir (kill switch), (d) A/B testi ve kademeli açılım bunun üstüne kurulur.

**14.** **Birikirler ve teknik borç üretirler.** Kullanılmayan bayraklar kodu dallandırır ve test edilmesi gereken durum sayısını katlar. Her bayrağın bir sahibi ve bir kaldırılma tarihi olmalıdır.

**15.** **Rollback** — önce geri dön, kullanıcı etkisini durdur, sonra sebebi araştır. Veritabanı değişiklikleri bunu zorlaştırır: kod geri alınabilir ama **silinmiş bir sütun geri gelmez.** Bu yüzden migration'lar geriye uyumlu planlanır: önce ekle, sonra kullan, en son eskisini kaldır.

**16.** Çünkü amaç suçlu bulmak değil, **sistemdeki zayıflığı bulmaktır.** Suçlama kültüründe insanlar hataları gizler ve sistem öğrenemez.

**17.** Olay sırasında **kullanıcıya ne gösterileceğini önceden tasarlamış olmak**: bakım ekranı, durum sayfası, hata mesajı. Olay anında metin yazmaya çalışmak kötü sonuç verir.

**18.** **Monitoring** önceden bildiğin sorunları izler ("CPU %90'ı geçti mi?"). **Observability** bilmediğin sorunları sorabilme yeteneğidir ("neden sadece Türkiye'deki Android kullanıcıları yavaş?").

**19.** **Metric**: "bir sorun var mı?" **Trace**: "nerede?" **Log**: "tam olarak ne oldu?"

**20.** Çok fazla uyarı gönderen bir sistemde insanların uyarıları görmezden gelmeye başlaması — ve bu yüzden gerçek olayın kaçırılması. Uyarılar eyleme geçilebilir olanlarla sınırlı tutulmalıdır.

**21.** Çünkü **kullanıcıların çoğu hata bildirmez, sadece terk eder.** Hata izleme bildirilmeyen sorunları görünür kılar: hangi tarayıcıda, hangi sayfada, kaç kullanıcıda olduğunu gösterir.

**22.** Çünkü hangi davranışın ölçüleceği bir ürün/tasarım kararıdır ve çoğu ekipte sahipsiz kalır. Plansız eklenirse üç ay sonra `button_click`, `btn_clicked` ve `ClickedButton` adlı üç ayrı olay olur ve hiçbiri analiz edilemez. Ayrıca başarı ölçütü (3.7) tanımlanırken onu ölçecek olay da tanımlanmalıdır.

**23.** (a) Optimize edilmemiş görseller **egress** faturasını büyütür — görsel optimizasyonu hem hız hem maliyet kararıdır. (b) Her sayfada çalışan ağır bir sunucu işlevi hesaplama maliyeti üretirken, statik üretim neredeyse bedavadır — rendering stratejisi bir maliyet kararıdır.

---

**Biten bölüm:** Bölüm 16 — DevOps, yayın ve gözlemlenebilirlik
**Sıradaki bölüm:** Bölüm 17 — Test, kalite ve kod sağlığı
