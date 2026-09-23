# Bölüm 14 — Sistem mimarisi ve sistem tasarımı

Mimari, senin öncelik sıralamanda UI/UX'ten sonra gelen ikinci alan. Bu bölüm o yüzden iki hedefle yazıldı:

1. **Bir mimari tartışmasına katılabilmek.** Mimari kararların çoğu teknik değil, **takas** kararıdır — ve takasları tartışmak kod bilmeyi gerektirmez. "Bu bize ne kazandırıyor, karşılığında neyi kaybediyoruz?" sorusunu doğru terimlerle sorabilmek, masadaki yerini belirler.
2. **Bir mimari diyagramını okuyabilmek.** Kutular, oklar ve sınırlar bir dildir; bu dili bilmek, sistemin nasıl çalıştığını kimseye sormadan anlamanı sağlar.

Bu bölümdeki kavramların çoğu **Seviye 2**: senin üretmen gerekmiyor, anlaman yeterli. İki istisna var ve ikisi de doğrudan senin işin: **trade-off düşünme biçimi** (14.1) ve **ADR yazmak** (14.12).

---

## 14.1 Mimari nedir ve neden erken karar verilir

### Architecture

- **Terim (İngilizce):** Software architecture
- **Türkçesi:** Yazılım mimarisi
- **Tanım:** Bir sistemin parçalarının nasıl bölündüğü, birbirleriyle nasıl konuştuğu ve nerede çalıştığına dair üst seviye kararların bütünü.
- **Ne işe yarar / neden var:** Mimari, **geri dönüşü en pahalı karar sınıfıdır.** Bir buton rengini bir günde değiştirirsin; bir ekranı bir haftada yeniden tasarlarsın; veri modelini (11.10) aylarca taşırsın; mimariyi ise çoğu zaman hiç değiştirmezsin — yeniden yazarsın.
- **Nerede karşına çıkar:** Proje kurulumunda ve büyük özellik kararlarında.
- **Örnek kullanım:** "Bu bir mimari karar; şimdi konuşalım, sonra değiştirmesi pahalı olacak."
- **İlgili terimler:** Trade-off, ADR (14.12), Tech stack (1.6)

### Tersine çevrilebilirlik

- **Terim (İngilizce):** One-way door vs two-way door decision, reversibility
- **Türkçesi:** Tek yönlü ve çift yönlü kapı kararları
- **Tanım:** Bir kararın geri alınabilir olup olmadığına göre sınıflandırılması. **Çift yönlü kapı**: yanlışsa geri dön. **Tek yönlü kapı**: geri dönüş yok veya çok pahalı.
- **Ne işe yarar / neden var:** Karar hızını ayarlar. Çift yönlü kapılarda uzun uzun tartışmak zaman kaybıdır — dene, olmazsa değiştir. Tek yönlü kapılarda ise yavaşlamak doğrudur. **Ekiplerin en yaygın hatası ikisini karıştırmaktır:** buton rengini saatlerce tartışıp veritabanı seçimini bir öğleden sonrada yapmak.
- **Nerede karşına çıkar:** Karar toplantılarında.
- **Örnek kullanım:** "Bu çift yönlü kapı; bir hafta deneyelim, olmazsa geri alırız. Uzun tartışmaya gerek yok."
- **İlgili terimler:** Trade-off, Spike (3.5), ADR (14.12)

### Trade-off düşünmek

- **Terim (İngilizce):** Trade-off
- **Türkçesi:** Takas
- **Tanım:** Bkz. 9.12. Mimaride özel bir ağırlığı var: **mimaride "iyi" ve "kötü" seçenek yoktur, farklı şeyleri optimize eden seçenekler vardır.**
- **Ne işe yarar / neden var:** Bir mimari önerisini değerlendirmenin tek dürüst yolu, neyi feda ettiğini sormaktır. Mikroservis ölçeklenebilirlik kazandırır, basitlik kaybettirir. Önbellek hız kazandırır, tazelik kaybettirir (10.11). Statik üretim hız kazandırır, dinamiklik kaybettirir (8.10).
- **Nerede karşına çıkar:** Her mimari tartışmasında.
- **Örnek kullanım:** "Bunun takası ne? Neyi kaybediyoruz karşılığında?"
- **İlgili terimler:** ADR (14.12), Constraint (18.4)

---

## 14.2 Mimari stiller

Sistemin kaç parçaya bölüneceği ve parçaların nasıl dağıtılacağı.

### Monolith

- **Terim (İngilizce):** Monolith, monolithic architecture
- **Türkçesi:** Tek parça mimari
- **Tanım:** Tüm uygulamanın tek bir kod tabanı ve tek bir dağıtım birimi olarak çalışması.
- **Ne işe yarar / neden var:** Basit. Tek yerde çalışır, tek yerde hata ayıklanır, ağ gecikmesi yoktur, bir işlem tek bir transaction'da (11.8) tutulabilir. **Küçük ve orta ekipler için neredeyse her zaman doğru başlangıçtır.**
- **Nerede karşına çıkar:** Çoğu projede — ve genelde olması gerektiği gibi.
- **Örnek kullanım:** "Monolith ile başlayalım; iki kişiyiz, mikroservisin operasyon maliyetini karşılayamayız."
- **Karıştırılanlar:** "Monolith eski, mikroservis modern" bir yanılgıdır. Monolith'in sorunu **büyüklük değil, düzensizliktir**: sınırları belirsiz, her şeyin her şeye dokunduğu bir kod tabanı ("big ball of mud") bakımı zorlaştırır. Çözümü mikroservis değil, modüler yapıdır.
- **İlgili terimler:** Modular monolith, Microservice

### Modular monolith

- **Terim (İngilizce):** Modular monolith
- **Türkçesi:** Modüler tek parça mimari
- **Tanım:** Tek bir dağıtım birimi olarak çalışan ama içinde net modül sınırları bulunan mimari.
- **Ne işe yarar / neden var:** İki dünyanın iyi taraflarını hedefler: **mikroservisin disiplinli sınırlarını, monolith'in operasyonel basitliğiyle** birleştirir. Modüller birbirine yalnızca tanımlı arayüzlerden dokunur; ileride bir modülü ayrı servise çıkarmak gerekirse, o sınır zaten hazırdır.
- `[DEĞİŞKEN BİLGİ]` **2026 itibarıyla sektördeki yaygın tavsiye budur:** yeni bir ürüne modüler monolith ile başlamak, mikroservise ancak ölçülmüş bir darboğaz ve ekip yapısı bunu gerektirdiğinde geçmek.
- **Nerede karşına çıkar:** Mimari tartışmalarında giderek daha çok.
- **Örnek kullanım:** "Modüler monolith kuralım; modül sınırlarını net çizelim, gerekirse ileride ayırırız."
- **İlgili terimler:** Monolith, Microservice, Bounded context

### Microservice

- **Terim (İngilizce):** Microservices
- **Türkçesi:** Mikroservisler
- **Tanım:** Uygulamanın, birbirinden bağımsız geliştirilip dağıtılan küçük servislere bölünmesi.
- **Ne işe yarar / neden var:** Asıl faydası teknik değil **organizasyoneldir:** çok sayıda ekip, birbirini beklemeden kendi servisini yayınlayabilir. Ayrıca farklı parçalar farklı ölçeklerde çalışabilir ve bir servisin çökmesi diğerlerini doğrudan durdurmaz.
- **Nerede karşına çıkar:** Büyük organizasyonlarda.
- **Örnek kullanım:** "Mikroservise geçmek için ekip yapımız uygun değil; üç kişiyiz, servis başına sahip yok."
- **Ne zaman kullanılmaz:** **Bedelleri ağırdır ve genelde hafife alınır:** ağ gecikmesi, dağıtık hata ayıklama, veri tutarlılığının zorlaşması, izleme ve dağıtım altyapısı zorunluluğu, çok daha yüksek operasyon maliyeti. Martin Fowler'ın "microservices premium" dediği bu ek maliyet, ancak belirli bir ölçek ve ekip yapısında kendini amorti eder.
- **İlgili terimler:** Distributed monolith, Modular monolith, Message queue (14.4)

### Distributed monolith

- **Terim (İngilizce):** Distributed monolith
- **Türkçesi:** Dağıtık tek parça
- **Tanım:** Servislerin ayrı ayrı dağıtıldığı ama birbirine sıkı sıkıya bağlı olduğu — yani bağımsız yayınlanamadığı — yapı.
- **Ne işe yarar / neden var:** **Mimarideki en kötü sonuçtur:** mikroservisin tüm maliyetini ödersin, hiçbir faydasını almazsın. Servisler ayrı ama biri değişince hepsini birlikte yayınlamak gerekir.
- **Nerede karşına çıkar:** Erken ve gerekçesiz mikroservis geçişlerinin tipik sonucu.
- **Örnek kullanım:** "Servisleri ayırdık ama hepsini birlikte deploy ediyoruz; bu bir dağıtık monolith, kazancımız yok."
- **İlgili terimler:** Microservice, Coupling

**Karar tablosu:**

| | Monolith / Modüler monolith | Microservice |
|---|---|---|
| **Ne zaman** | Küçük–orta ekip, tek ürün, belirsiz gereksinimler | Çok sayıda ekip, ölçülmüş darboğaz, farklı ölçekleme ihtiyaçları |
| **Kazandırır** | Basitlik, hızlı geliştirme, kolay hata ayıklama, tek transaction | Bağımsız yayın, bağımsız ölçekleme, hata yalıtımı |
| **Kaybettirir** | Tek dağıtım birimi; ekip büyüdükçe yayın koordinasyonu zorlaşır | Operasyon maliyeti, ağ gecikmesi, dağıtık hata ayıklama, veri tutarlılığı |
| **Ön koşul** | Yok | Olgun CI/CD, izleme, dağıtık izleme altyapısı |

`[EMİN DEĞİLİM]` **Sık alıntılanan iki vaka hakkında bir uyarı:** Amazon Prime Video'nun bir ekibinin dağıtık bir tasarımı tek sürece indirip yaklaşık %90 altyapı maliyeti tasarrufu bildirdiği (2023) ve Twilio Segment'in 140'tan fazla servisi tek kod tabanına geri topladığı yaygın biçimde anlatılıyor. **Ama bu hikâyeler sıkça abartılıyor.** Prime Video örneğinde söz konusu olan bir izleme aracıydı, Prime Video platformunun tamamı değil; başlangıç noktası da klasik mikroservis değil, serverless bir tasarımdı. Ayrıca "kuruluşların %X'i mikroservisten geri dönüyor" biçiminde dolaşan yüzdelerin güvenilir bir kaynağa dayanmadığı da ayrıca belirtiliyor. **Bu rakamları bir tartışmada kullanma;** çıkarılacak ders niteldir: dağıtık mimari, operasyonel maliyetini hak etmek zorundadır.

---

## 14.3 Katmanlar

### Three-tier / Layered architecture

- **Terim (İngilizce):** Three-tier architecture, layered architecture
- **Türkçesi:** Üç katmanlı mimari, katmanlı mimari
- **Tanım:** Sistemin sunum (arayüz), iş mantığı ve veri katmanlarına ayrılması.
- **Ne işe yarar / neden var:** En klasik ve en yaygın yapı. Her katman yalnızca komşusuyla konuşur; bu, bir katmanı değiştirmenin diğerlerini kırmamasını sağlar. Arka yüzdeki controller/service/repository ayrımı (10.7) bunun kod içindeki karşılığıdır.
- **Nerede karşına çıkar:** Neredeyse her diyagramda.
- **Örnek kullanım:** "İş kuralını sunum katmanına yazmayalım; service katmanında dursun ki mobil de kullanabilsin."
- **İlgili terimler:** Client-server (1.1), Controller/Service/Repository (10.7)

### Coupling / Cohesion

- **Terim (İngilizce):** Coupling, cohesion, bounded context
- **Türkçesi:** Bağlılık, uyumluluk
- **Tanım:** **Coupling** parçaların birbirine ne kadar bağlı olduğu; **cohesion** bir parçanın içindeki şeylerin ne kadar birbirine ait olduğu.
- **Ne işe yarar / neden var:** İyi mimarinin tek cümlelik özeti: **düşük bağlılık, yüksek uyumluluk.** Yani parçalar içeride sıkı, dışarıya karşı gevşek olmalı. **Bounded context**, bir modülün sorumluluk sınırını tanımlayan kavramdır — ve bu sınır genelde iş alanına göre çizilir (sipariş, ödeme, envanter), teknik katmana göre değil.
- **Nerede karşına çıkar:** Modül ve servis sınırı tartışmalarında.
- **Örnek kullanım:** "Bu iki modül birbirinin veritabanına doğrudan yazıyor; bağlılık çok yüksek, arayüz üzerinden konuşsunlar."
- **Karıştırılanlar:** **Tasarımla akrabalığı var:** bir bileşen kütüphanesindeki (5.1) iyi bileşen tanımı da aynıdır — kendi içinde bütün, dışarıya net bir arayüz sunan. Aynı ilke, farklı ölçekte.
- **İlgili terimler:** Modular monolith, Component (8.7)

---

## 14.4 Event-driven mimari

### Event-driven architecture

- **Terim (İngilizce):** Event-driven architecture — EDA, event
- **Türkçesi:** Olay güdümlü mimari
- **Tanım:** Parçaların birbirini doğrudan çağırmak yerine, "olan biten"i duyurup ilgilenenlerin dinlemesi üzerine kurulu yapı.
- **Ne işe yarar / neden var:** Bağlılığı düşürür. "Sipariş oluşturuldu" olayını yayınlayan servis, kimin dinlediğini bilmek zorunda değildir — e-posta servisi, stok servisi ve analitik ayrı ayrı dinler. Yeni bir dinleyici eklemek, mevcut kodu değiştirmeyi gerektirmez.
- **Nerede karşına çıkar:** Orta ve büyük ölçekli sistemlerde.
- **Örnek kullanım:** "Sipariş oluşturulduğunda bir olay yayınlayalım; bildirim ve fatura servisleri onu dinlesin."
- **Karıştırılanlar:** **Bedeli takip edilebilirliktir:** bir şeyin neden olduğunu izlemek zorlaşır, çünkü çağrı zinciri açık değildir. Ayrıca olayların sırası ve tekrarı yönetilmelidir (idempotency, 14.11).
- **İlgili terimler:** Message queue, Pub/sub, Webhook (10.9)

### Message queue / Pub-sub

- **Terim (İngilizce):** Message queue, publish-subscribe (pub/sub), broker, event bus
- **Türkçesi:** Mesaj kuyruğu, yayınla-abone ol
- **Tanım:** Mesajların gönderici ile alıcı arasında bir aracı üzerinden taşınması. **Kuyrukta** bir mesajı genelde tek bir alıcı işler; **pub/sub'da** aynı mesajı birden fazla abone alır.
- **Ne işe yarar / neden var:** Gönderici ile alıcıyı zaman olarak ayırır: alıcı çökmüş olsa bile mesaj kuyrukta bekler ve alıcı ayağa kalkınca işlenir. Bu, dayanıklılığın (14.8) temel araçlarından biridir. Kavramsal karşılığı 10.12'de.
- **Nerede karşına çıkar:** Arka plan işleri ve servisler arası iletişimde. Kafka, RabbitMQ, SQS yaygın adlardır (**Seviye 3**).
- **Örnek kullanım:** "E-posta servisi çökerse siparişler etkilenmesin; mesajı kuyruğa atalım."
- **İlgili terimler:** Queue (10.12), Event-driven, Retry (14.11)

---

## 14.5 Trafiği yönetenler

### Load balancer

- **Terim (İngilizce):** Load balancer
- **Türkçesi:** Yük dengeleyici
- **Tanım:** Gelen istekleri, aynı uygulamanın birden fazla kopyası arasında dağıtan katman.
- **Ne işe yarar / neden var:** İki iş görür: yükü paylaştırır ve çöken bir kopyayı devre dışı bırakarak sistemin ayakta kalmasını sağlar. Yatay ölçeklemenin (14.6) ön koşuludur.
- **Nerede karşına çıkar:** Her ölçeklenmiş sistemde ve mimari diyagramlarında.
- **Örnek kullanım:** "Load balancer arkasında üç kopya çalışıyor; biri çökerse trafiği diğer ikisi alır."
- **İlgili terimler:** Horizontal scaling (14.6), Stateless (14.7), SPOF (14.8)

### Reverse proxy / API gateway

- **Terim (İngilizce):** Reverse proxy, API gateway
- **Türkçesi:** Ters vekil sunucu, API geçidi
- **Tanım:** İsteklerin uygulamaya ulaşmadan önce geçtiği ara katman. **API gateway**, bunun API'ye özel ve daha yetenekli hâlidir: kimlik doğrulama, hız sınırı (10.10), yönlendirme ve günlük kaydını tek yerde toplar.
- **Ne işe yarar / neden var:** Her serviste tekrarlanacak işleri tek noktaya çeker. Ayrıca dışarıya tek bir adres sunarak iç yapıyı gizler.
- **Nerede karşına çıkar:** Mikroservis mimarilerinde ve büyük sistemlerde.
- **Örnek kullanım:** "Hız sınırını gateway'de uygulayalım; her serviste ayrı ayrı yazmayalım."
- **Karıştırılanlar:** Gateway bir tek arıza noktası (14.8) hâline gelebilir; kendisi de yedekli kurulmalıdır.
- **İlgili terimler:** Middleware (10.7), BFF (10.6), Load balancer

---

## 14.6 Ölçekleme

### Vertical vs Horizontal scaling

- **Terim (İngilizce):** Vertical scaling (scale up), horizontal scaling (scale out)
- **Türkçesi:** Dikey ve yatay ölçekleme
- **Tanım:** **Dikey**: makineyi büyütmek (daha çok işlemci, daha çok bellek). **Yatay**: daha çok makine eklemek.
- **Ne işe yarar / neden var:** Dikey ölçekleme basittir — kod değişmez — ama bir tavanı vardır ve tek makine kaldığı için arıza riski sürer. Yatay ölçekleme teorik olarak sınırsızdır ama uygulamanın **stateless** (14.7) olmasını gerektirir.
- **Nerede karşına çıkar:** Trafik artışı tartışmalarında.
- **Örnek kullanım:** "Önce dikey büyütelim, ucuz ve hızlı. Tavana yaklaşınca yatay ölçekleme için stateless'a geçeriz."
- **İlgili terimler:** Stateless (14.7), Load balancer (14.5), Autoscaling

### Autoscaling

- **Terim (İngilizce):** Autoscaling
- **Türkçesi:** Otomatik ölçekleme
- **Tanım:** Trafiğe göre kopya sayısının otomatik artıp azalması.
- **Ne işe yarar / neden var:** Düzensiz trafikte maliyeti kontrol eder: gece az kopya, gündüz çok. Serverless'ın (10.8) doğal davranışıdır.
- **Nerede karşına çıkar:** Bulut yapılandırmasında.
- **Örnek kullanım:** "Kampanya günü trafik on kat artacak; autoscaling limitlerini önceden yükseltelim."
- **Karıştırılanlar:** Otomatik ölçekleme anında değildir; yeni kopyaların açılması zaman alır. Ani zirvelerde (bilet satışı, canlı yayın) önceden ölçeklendirme gerekebilir.
- **İlgili terimler:** Serverless (10.8), Cold start (10.8)

---

## 14.7 Stateless / Stateful

### Stateless

- **Terim (İngilizce):** Stateless, stateful
- **Türkçesi:** Durumsuz, durumlu
- **Tanım:** **Stateless** bir servis, istekler arasında kendi belleğinde bilgi tutmaz; her istek kendi içinde bütündür. **Stateful** olan tutar.
- **Ne işe yarar / neden var:** **Yatay ölçeklemenin ön koşuludur.** Kullanıcının oturum bilgisi tek bir sunucunun belleğinde durursa, ikinci bir sunucu eklendiğinde o kullanıcı oraya düştüğünde çıkış yapmış olur. Çözüm: durumu paylaşılan bir yere taşımak (Redis, veritabanı) veya jetonda taşımak (12.2).
- **Nerede karşına çıkar:** Ölçekleme ve oturum yönetimi tartışmalarında.
- **Örnek kullanım:** "Oturumları sunucu belleğinde tutuyoruz; ikinci kopya ekleyince kullanıcılar rastgele çıkış yapacak. Redis'e taşıyalım."
- **İlgili terimler:** Session (12.2), Horizontal scaling (14.6), Redis (11.3)

---

## 14.8 Dayanıklılık

### Single point of failure

- **Terim (İngilizce):** SPOF — Single Point of Failure
- **Türkçesi:** Tek arıza noktası
- **Tanım:** Çöktüğünde tüm sistemi durduran tekil bileşen.
- **Ne işe yarar / neden var:** Mimari diyagramına bakıp "burası çökerse ne olur?" diye sormanın adı. Tek veritabanı, tek gateway, tek ödeme sağlayıcısı — hepsi birer SPOF olabilir.
- **Nerede karşına çıkar:** Mimari incelemelerinde ve olay sonrası analizlerde (16.9).
- **Örnek kullanım:** "Tek bir e-posta sağlayıcımız var; onlar çökerse şifre sıfırlama tamamen durur. Bu bir SPOF."
- **İlgili terimler:** Redundancy, Failover, Graceful degradation

### Redundancy / Failover

- **Terim (İngilizce):** Redundancy, failover, replica
- **Türkçesi:** Yedeklilik, devralma
- **Tanım:** Aynı işi yapabilen birden fazla kopya bulundurmak ve biri çöktüğünde diğerinin devralması.
- **Ne işe yarar / neden var:** SPOF'u ortadan kaldırmanın standart yolu. Bedeli maliyettir: iki kat kaynak, iki kat fatura.
- **Nerede karşına çıkar:** Altyapı kararlarında.
- **Örnek kullanım:** "Veritabanına bir replika ekleyelim; ana çökerse devralsın."
- **İlgili terimler:** SPOF, Availability (14.9), Backup (11.11)

### Graceful degradation

- **Terim (İngilizce):** Graceful degradation
- **Türkçesi:** Zarif bozulma
- **Tanım:** Bir parça çöktüğünde tüm sistemin çökmesi yerine, o parçanın işlevinin devre dışı kalıp geri kalanın çalışmaya devam etmesi.
- **Ne işe yarar / neden var:** **Bu, doğrudan bir tasarım işidir ve bölümün tasarımcıyı en çok ilgilendiren terimi.** Öneri servisi çöktüğünde ürün sayfası çökmemeli, sadece öneriler bölümü görünmemeli veya bir hata kutusu göstermelidir (7.9). Yani "hangi bölüm olmadan bu sayfa hâlâ işe yarar?" sorusu bir tasarım sorusudur.
- **Nerede karşına çıkar:** Hata durumu tasarımında ve dayanıklılık incelemelerinde.
- **Örnek kullanım:** "Yorumlar yüklenmezse sadece o bölüm hata gösterisin, sayfanın tamamı çökmesin."
- **İlgili terimler:** Error state (7.9), Streaming (8.10), Circuit breaker (14.11)

---

## 14.9 Ölçüler ve hedefler

### Latency / Throughput

- **Terim (İngilizce):** Latency, throughput
- **Türkçesi:** Gecikme, iş çıkarma kapasitesi
- **Tanım:** Bkz. 1.3. Latency tek bir isteğin ne kadar sürdüğü; throughput birim zamanda kaç istek işlenebildiği.
- **Ne işe yarar / neden var:** İkisi bağımsızdır ve karıştırılır. Bir sistem çok sayıda isteği işleyebilirken (yüksek throughput) her biri yavaş olabilir (yüksek latency). Kullanıcı **latency'yi** hisseder.
- **Nerede karşına çıkar:** Performans ve kapasite planlamasında.
- **Örnek kullanım:** "Throughput yeterli ama p95 latency 3 saniye; kullanıcı bunu yavaş algılar."
- **İlgili terimler:** Percentile, Core Web Vitals (8.12)

### Percentile

- **Terim (İngilizce):** Percentile — p50, p95, p99
- **Türkçesi:** Yüzdelik dilim
- **Tanım:** Ölçümlerin dağılımını tarif etme biçimi. **p95 = 200ms**, isteklerin %95'inin 200 milisaniyenin altında tamamlandığı anlamına gelir.
- **Ne işe yarar / neden var:** **Ortalama yalan söyler.** Ortalama 200ms olan bir sistemde, kullanıcıların %5'i 4 saniye bekliyor olabilir — ve o %5, en çok veri sahibi, yani genelde en değerli kullanıcılardır. Core Web Vitals'ın 75. yüzdelik dilimi kullanması (8.12) tam da bu sebeptendir.
- **Nerede karşına çıkar:** Performans raporlarında ve SLO tanımlarında.
- **Örnek kullanım:** "Ortalamaya bakmayalım; p95 ve p99'a bakalım. Kötü deneyim orada saklı."
- **İlgili terimler:** Latency, SLO, Core Web Vitals (8.12)

### Availability

- **Terim (İngilizce):** Availability, uptime, "nines"
- **Türkçesi:** Erişilebilirlik / çalışır olma oranı
- **Tanım:** Sistemin çalışır durumda olduğu zamanın oranı. "Dokuzlar" ile ifade edilir.
- **Ne işe yarar / neden var:** Somut bir bütçe verir — çünkü her dokuz, izin verilen kesinti süresini onda birine indirir ve maliyeti katlar:

| Hedef | Yıllık kesinti (yaklaşık) | Aylık kesinti (yaklaşık) |
|---|---|---|
| %99 ("iki dokuz") | ~3,65 gün | ~7,2 saat |
| %99,9 ("üç dokuz") | ~8,8 saat | ~43 dakika |
| %99,99 ("dört dokuz") | ~53 dakika | ~4,3 dakika |
| %99,999 ("beş dokuz") | ~5 dakika | ~26 saniye |

- **Nerede karşına çıkar:** SLA görüşmelerinde ve altyapı kararlarında.
- **Örnek kullanım:** "Dört dokuz hedefliyorsak yılda 53 dakika kesinti hakkımız var; bakım pencereleri bile buna dahil."
- **Karıştırılanlar:** **Erişilebilirlik (availability) ≠ erişilebilirlik (accessibility, Bölüm 6).** Türkçede ikisi de aynı kelimeyle karşılanıyor; İngilizce terimi kullanmak karışıklığı önler.
- **İlgili terimler:** SLA, Redundancy (14.8), Monitoring (16.10)

### SLA / SLO / SLI

- **Terim (İngilizce):** SLA (Service Level Agreement), SLO (Objective), SLI (Indicator)
- **Türkçesi:** Hizmet seviyesi anlaşması / hedefi / göstergesi
- **Tanım:** **SLI** ölçülen şeydir (başarılı istek oranı). **SLO** iç hedeftir (%99,9). **SLA** müşteriye verilen sözleşmesel taahhüttür — ihlal edilirse yaptırımı vardır.
- **Ne işe yarar / neden var:** Üçü iç içe geçer: SLI ölçer, SLO ekibin kendine koyduğu çıtadır, SLA dışa verilen sözdür. SLO genelde SLA'dan **daha sıkı** tutulur ki söz ihlal edilmeden önce uyarı alınsın.
- **Nerede karşına çıkar:** Kurumsal satışta ve operasyon planlamasında.
- **Örnek kullanım:** "SLA'da %99,9 söz veriyoruz ama iç SLO'muz %99,95; tampon bırakalım."
- **Karıştırılanlar:** **Error budget** kavramı buradan çıkar: %99,9 hedef, yılda ~8,8 saatlik bir "hata bütçesi" demektir. Bütçe tükenmediyse ekip risk alıp hızlı yayın yapabilir; tükendiyse istikrara odaklanır. Bu, hız ile güvenilirlik arasındaki tartışmayı sayıya bağlar.
- **İlgili terimler:** Availability, Monitoring (16.10), Incident (16.9)

---

## 14.10 Tutarlılık

### Consistency / Eventual consistency

- **Terim (İngilizce):** Strong consistency, eventual consistency
- **Türkçesi:** Güçlü tutarlılık, nihai tutarlılık
- **Tanım:** **Güçlü tutarlılık**: bir yazma işleminden sonra herkes anında yeni değeri görür. **Nihai tutarlılık**: herkes eninde sonunda yeni değeri görür ama kısa bir süre eski değeri görebilir.
- **Ne işe yarar / neden var:** **Bu ayrımın doğrudan bir arayüz sonucu vardır.** Nihai tutarlı bir sistemde kullanıcı bir şeyi kaydeder, sayfayı yeniler ve eski hâli görür — sistem bozuk değildir ama kullanıcı öyle sanır. Tasarım çözümü: kullanıcının kendi değişikliğini anında göstermek (optimistic UI, 7.9) ve "güncelleniyor" durumunu belirtmek.
- **Nerede karşına çıkar:** Dağıtık sistemlerde, önbellekli yapılarda (10.11), çoğaltılmış veritabanlarında.
- **Örnek kullanım:** "Beğeni sayısı nihai tutarlı; kullanıcı kendi beğenisini anında görsün, toplam sayı biraz gecikebilir."
- **İlgili terimler:** Optimistic UI (7.9), Cache invalidation (10.11), CAP

### CAP teoremi

- **Terim (İngilizce):** CAP theorem — Consistency, Availability, Partition tolerance
- **Türkçesi:** CAP teoremi
- **Tanım:** Dağıtık bir sistemde, ağ bölünmesi yaşandığında tutarlılık ile erişilebilirlik arasında seçim yapmak zorunda kalınacağını söyleyen ilke.
- **Ne işe yarar / neden var:** Kavramsal olarak bilmen yeterli. Pratik anlamı: **ağ koptuğunda ya yanlış olabilecek bir cevap verirsin ya hiç cevap vermezsin.** Bir banka birinciyi seçemez; bir sosyal medya akışı seçebilir.
- **Nerede karşına çıkar:** Dağıtık sistem tartışmalarında. **Seviye 3** terim.
- **Örnek kullanım:** "Bu veri için tutarlılık kritik; erişilebilirlikten ödün verip hata döneriz."
- **Karıştırılanlar:** Sık yanlış anlaşılır — "üçünden ikisini seç" biçiminde özetlenir ama teoremin söylediği daha dar: seçim yalnızca **bölünme anında** ortaya çıkar. `[EMİN DEĞİLİM]` Teoremin kesin formülasyonu akademik bir tartışma konusudur; günlük kullanımda kaba bir çerçeve olarak geçer.
- **İlgili terimler:** Consistency, Availability (14.9)

---

## 14.11 Dayanıklılık kalıpları

### Idempotency

- **Terim (İngilizce):** Idempotency, idempotency key
- **Türkçesi:** Değişmez sonuçluluk
- **Tanım:** Aynı işlemin birden fazla kez çalıştırılmasının, bir kez çalıştırılmasıyla aynı sonucu vermesi. **Idempotency key**, istemcinin isteğe eklediği benzersiz kimliktir; sunucu aynı anahtarla ikinci bir istek gelirse tekrar işlem yapmaz.
- **Ne işe yarar / neden var:** Dağıtık sistemlerin temel güvenlik ağı. Ağ koptuğunda istemci isteğin gidip gitmediğini bilemez; tekrar dener. İşlem idempotent değilse ikinci sipariş veya ikinci ödeme oluşur.
- **Nerede karşına çıkar:** Ödeme entegrasyonlarında, kuyruklarda (10.12), webhook işlemede (10.9).
- **Örnek kullanım:** "Ödeme isteğine idempotency key ekleyelim; ağ koparsa çift çekim olmasın."
- **Karıştırılanlar:** **Tasarım karşılığı 10.2'deki ile aynı:** butonu devre dışı bırakmak istemci tarafı bir önlemdir ve yeterli değildir; asıl koruma sunucudadır. Ama ikisi birlikte kullanılır (defense in depth, 13.8).
- **İlgili terimler:** Retry, HTTP metodları (10.2), Transaction (11.8)

### Retry / Exponential backoff

- **Terim (İngilizce):** Retry, exponential backoff, jitter
- **Türkçesi:** Yeniden deneme, artan bekleme
- **Tanım:** Bkz. 10.12. Başarısız isteğin, her denemede daha uzun beklenerek tekrarlanması.
- **Ne işe yarar / neden var:** Geçici hatalar kendiliğinden çözülür. Artan bekleme, zaten sıkışık bir servisi daha da boğmayı engeller. **Jitter** ise beklemeye rastgelelik ekler — yoksa tüm istemciler aynı anda tekrar dener ve "yeniden deneme fırtınası" oluşur.
- **Nerede karşına çıkar:** Entegrasyonlarda ve kuyruklarda.
- **Örnek kullanım:** "Yeniden denemelere jitter ekleyelim; hepsi aynı saniyede tekrar denemesin."
- **İlgili terimler:** Idempotency, Circuit breaker, DLQ (10.12)

### Circuit breaker

- **Terim (İngilizce):** Circuit breaker
- **Türkçesi:** Devre kesici
- **Tanım:** Bir bağımlılık sürekli hata veriyorsa, ona istek atmayı bir süre tamamen durdurup hızlıca hata dönme kalıbı.
- **Ne işe yarar / neden var:** Sigortanın çalışma mantığı. Çöken bir servise istek atmaya devam etmek iki zarar verir: senin kaynaklarını bekleyerek tüketir ve zaten çökmüş servisi daha da boğar. Devre kesici, sorunu yalıtır.
- **Nerede karşına çıkar:** Servisler arası çağrılarda ve üçüncü parti entegrasyonlarda.
- **Örnek kullanım:** "Öneri servisi sürekli zaman aşımına uğruyor; devre kesici koyalım ve o bölümü gizleyelim."
- **Karıştırılanlar:** **Graceful degradation ile birlikte çalışır** (14.8): devre kesildiğinde arayüzde ne görüneceği tasarlanmalıdır.
- **İlgili terimler:** Graceful degradation (14.8), Retry, Timeout

### Timeout

- **Terim (İngilizce):** Timeout
- **Türkçesi:** Zaman aşımı
- **Tanım:** Bir isteğin ne kadar bekleneceğinin sınırlanması.
- **Ne işe yarar / neden var:** Zaman aşımı olmayan bir istek sonsuza kadar bekleyebilir ve kaynakları kilitler. **Tasarım karşılığı:** zaman aşımı süresi, kullanıcının ne kadar bekleyeceğini belirler — ve bu süre boyunca ne göreceği (7.9) tasarlanmalıdır.
- **Nerede karşına çıkar:** Her dış çağrıda.
- **Örnek kullanım:** "Zaman aşımını 10 saniye yapalım; kullanıcı sonsuza kadar spinner izlemesin."
- **İlgili terimler:** Circuit breaker, Loading state (7.9), Response time (4.7)

---

## 14.12 ADR — mimari karar kaydı

**Bu, bölümdeki en doğrudan senin işin olan parça.** Kod yazmadan da yazabilirsin ve yazmak seni teknik masada ciddiye aldırır.

### ADR

- **Terim (İngilizce):** ADR — Architecture Decision Record
- **Türkçesi:** Mimari karar kaydı
- **Tanım:** Alınan bir mimari kararın, gerekçesiyle ve değerlendirilen alternatifleriyle birlikte kaydedildiği kısa belge.
- **Ne işe yarar / neden var:** Altı ay sonra biri "neden bunu seçmişiz?" diye sorduğunda cevap verir. Daha önemlisi: kararın hangi **koşullar altında** alındığını kaydeder — koşullar değiştiğinde kararı yeniden değerlendirmek meşru hâle gelir. ADR olmadan, eski kararlar sorgulanamaz dogmalara dönüşür.
- **Nerede karşına çıkar:** Olgun ekiplerde, depoda `docs/adr/` klasöründe.
- **Örnek kullanım:** "Bu kararı ADR olarak yazalım; altı ay sonra neden böyle yaptığımızı hatırlayalım."
- **İlgili terimler:** Trade-off (14.1), RFC (18.6), Assumption (2.4)

**Tipik ADR iskeleti** (ekipten ekibe değişir ama bu başlıklar çoğunda vardır):

1. **Başlık ve tarih** — "ADR-007: Oturum yönetimi için session tabanlı yaklaşım"
2. **Durum** — önerildi / kabul edildi / reddedildi / yerine ADR-012 geçti
3. **Bağlam** — hangi problemi çözüyoruz, hangi kısıtlar var (ekip büyüklüğü, süre, mevcut sistem)
4. **Değerlendirilen seçenekler** — en az iki, her biri için artı ve eksiler
5. **Karar** — ne seçildi
6. **Gerekçe** — neden bu, neden diğerleri değil
7. **Sonuçlar** — bu karar bize ne getiriyor, neyi zorlaştırıyor, neyi gelecekte yeniden konuşmamız gerekecek

**Neden 4. ve 7. maddeler kritik:** Çoğu ekip yalnızca kararı yazar. Değerlendirilen alternatifleri yazmazsan, yeni gelen biri aynı alternatifi yeniden önerir ve tartışma sıfırdan başlar. Sonuçları yazmazsan, kararın bedelini kimse takip etmez.

---

## 14.13 Mimari diyagramı okumak

Diyagramlar bir dildir. Standart bir gösterim yoktur ama yaygın kalıplar vardır.

**Kutular** bileşenleri temsil eder: servisler, veritabanları, dış sistemler, kullanıcı arayüzleri. Bir kutunun adı genelde sorumluluğunu söyler.

**Oklar** veri veya çağrı akışını gösterir. **Okun yönü kimin kimi çağırdığını söyler** ve bu önemli bir bilgidir: A → B ise A, B'ye bağımlıdır; B'nin çökmesi A'yı etkiler, tersi geçerli olmayabilir. Kesikli oklar genelde eş zamansız (async) iletişimi, düz oklar eş zamanlı çağrıyı gösterir.

**Kesikli kutular veya çerçeveler** sınırları temsil eder: bir ağ sınırı, bir güvenlik sınırı, bir ekip sorumluluğu veya bir bulut hesabı. **Bir sınırı geçen her ok, üzerinde durulması gereken bir noktadır** — orada kimlik doğrulama (Bölüm 12), gecikme (1.3) ve hata olasılığı vardır.

**Bir diyagrama bakarken sorulacak beş soru:**

1. **Kullanıcı isteği hangi kutulardan geçiyor?** Zincirdeki her halka gecikme ve arıza ihtimali ekler.
2. **Hangi kutu çökerse ne olur?** Tek arıza noktaları (14.8) burada görünür.
3. **Hangi oklar bir sınırı geçiyor?** Ağ sınırını geçen her çağrı yavaş ve güvenilmezdir.
4. **Veri nerede duruyor?** Kaç ayrı yerde veri var ve bunlar nasıl senkron kalıyor (14.10)?
5. **Ne eksik?** İzleme (16.10), önbellek (10.11), kuyruk (10.12) ve yedeklilik (14.8) diyagramlarda en sık atlanan parçalardır.

**C4 modeli** `[EMİN DEĞİLİM]` adıyla anılan ve diyagramları dört zoom seviyesine ayıran bir yaklaşım yaygın olarak kullanılıyor: sistem bağlamı, konteyner, bileşen, kod. Kesin detayını doğrulamadım ama "hangi seviyede konuşuyoruz?" sorusu diyagram tartışmalarında işe yarar — çoğu karışıklık, iki kişinin farklı zoom seviyelerinden konuşmasından çıkar.

---

## 14.14 Kendini test et

**1.** Mimari kararlar neden erken verilir? Karar sınıflarını geri dönüş maliyetine göre sırala.

**2.** Tek yönlü ve çift yönlü kapı kararları nedir? Ekiplerin bu konudaki en yaygın hatası nedir?

**3.** "Monolith eski, mikroservis modern" ifadesi neden yanlış? Monolith'in asıl sorunu nedir?

**4.** Modular monolith neyi hedefler?

**5.** Mikroservisin asıl faydası teknik mi organizasyonel mi? Açıkla.

**6.** Distributed monolith nedir ve neden en kötü sonuçtur?

**7.** Amazon Prime Video vakası hakkında hangi nüansları bilmek gerekir?

**8.** "Düşük bağlılık, yüksek uyumluluk" ne demek? Tasarımdaki karşılığı nedir?

**9.** Event-driven mimarinin kazandırdığı ve kaybettirdiği nedir?

**10.** Yatay ölçeklemenin ön koşulu nedir? Oturumlar sunucu belleğinde tutulursa ne olur?

**11.** Graceful degradation neden bir tasarım işidir? Bir örnek ver.

**12.** Ortalama yanıt süresine bakmak neden yetersiz? Hangi ölçüye bakılmalı?

**13.** %99,9 ve %99,99 hedefleri yıllık kaç saat/dakika kesintiye karşılık gelir?

**14.** SLI, SLO ve SLA arasındaki fark nedir? İç SLO neden SLA'dan sıkı tutulur?

**15.** Error budget nedir ve neyi çözer?

**16.** Nihai tutarlılığın arayüzdeki sonucu nedir? Tasarım çözümü nedir?

**17.** Idempotency key neyi engeller? Butonu devre dışı bırakmak yeterli mi?

**18.** Yeniden denemelere neden jitter eklenir?

**19.** Circuit breaker ne yapar ve hangi tasarım kararını gerektirir?

**20.** Bir ADR'de en sık atlanan iki madde nedir ve atlanınca ne olur?

**21.** Bir mimari diyagramında okun yönü neyi söyler?

**22.** Bir diyagrama bakarken sorulacak beş soru nedir?

---

### Cevaplar

**1.** Çünkü **geri dönüşü en pahalı karar sınıfıdır.** Maliyet sırası: buton rengi (saatler) → ekran tasarımı (günler–haftalar) → veri modeli (aylar) → mimari (çoğu zaman değiştirilmez, yeniden yazılır).

**2.** **Çift yönlü kapı**: yanlışsa geri dönülebilir. **Tek yönlü kapı**: geri dönüş yok veya çok pahalı. En yaygın hata **ikisini karıştırmaktır**: buton rengini saatlerce tartışıp veritabanı seçimini bir öğleden sonrada yapmak.

**3.** Çünkü ikisi farklı problemleri çözer; biri diğerinin evrimleşmiş hâli değildir. Monolith'in asıl sorunu **büyüklük değil, düzensizliktir** — sınırları belirsiz, her şeyin her şeye dokunduğu bir kod tabanı. Çözümü mikroservis değil, **modüler yapıdır**.

**4.** Mikroservisin **disiplinli sınırlarını**, monolith'in **operasyonel basitliğiyle** birleştirmeyi. Modüller yalnızca tanımlı arayüzlerden konuşur; ileride bir modül ayrı servise çıkarılacaksa sınır zaten hazırdır.

**5.** **Organizasyoneldir.** Çok sayıda ekip, birbirini beklemeden kendi servisini yayınlayabilir. Teknik faydalar (bağımsız ölçekleme, hata yalıtımı) gerçektir ama asıl gerekçe ekip yapısıdır — bu yüzden üç kişilik bir ekipte mikroservis genelde anlamsızdır.

**6.** Servislerin ayrı ayrı dağıtıldığı ama birbirine sıkı bağlı olduğu, yani bağımsız yayınlanamadığı yapı. En kötü sonuçtur çünkü **mikroservisin tüm maliyetini ödersin, hiçbir faydasını almazsın.**

**7.** Söz konusu olan **bir izleme aracıydı**, Prime Video platformunun tamamı değil. Başlangıç noktası klasik mikroservis değil, **serverless bir tasarımdı**. Ayrıca "kuruluşların %X'i geri dönüyor" biçimindeki yüzdelerin güvenilir bir kaynağa dayanmadığı belirtiliyor. Çıkarılacak ders nitel: **dağıtık mimari operasyonel maliyetini hak etmek zorundadır.**

**8.** Parçalar **içeride sıkı, dışarıya karşı gevşek** olmalı: bir modülün içindeki şeyler birbirine ait olmalı (cohesion), modüller arasındaki bağ ise mümkün olduğunca zayıf olmalı (coupling). Tasarımdaki karşılığı, iyi bileşen tanımıyla aynıdır: kendi içinde bütün, dışarıya net bir arayüz sunan.

**9.** **Kazandırır:** bağlılığı düşürür — olayı yayınlayan, kimin dinlediğini bilmek zorunda değildir; yeni dinleyici eklemek mevcut kodu değiştirmez. **Kaybettirir:** takip edilebilirlik — bir şeyin neden olduğunu izlemek zorlaşır, çünkü çağrı zinciri açık değildir.

**10.** **Stateless olmak.** Oturumlar sunucu belleğinde tutulursa, ikinci bir kopya eklendiğinde kullanıcı o kopyaya düştüğünde çıkış yapmış olur. Çözüm: durumu paylaşılan bir yere (Redis, veritabanı) taşımak veya jetonda taşımak.

**11.** Çünkü "hangi bölüm olmadan bu sayfa hâlâ işe yarar?" bir tasarım sorusudur ve cevabı ekranlara yansır. Örnek: öneri servisi çöktüğünde ürün sayfası çökmemeli; sadece öneriler bölümü gizlenmeli veya kendi içinde bir hata kutusu göstermelidir.

**12.** Çünkü **ortalama yalan söyler.** Ortalaması 200ms olan bir sistemde kullanıcıların %5'i 4 saniye bekliyor olabilir. **p95 ve p99** gibi yüzdelik dilimlere bakılmalıdır; kötü deneyim orada saklıdır.

**13.** %99,9 ≈ yılda **8,8 saat** (ayda ~43 dakika). %99,99 ≈ yılda **53 dakika** (ayda ~4,3 dakika).

**14.** **SLI** ölçülen göstergedir, **SLO** ekibin kendine koyduğu iç hedeftir, **SLA** müşteriye verilen ve ihlalinde yaptırımı olan sözleşmesel taahhüttür. İç SLO daha sıkı tutulur ki **söz ihlal edilmeden önce uyarı alınsın**.

**15.** SLO hedefinden artakalan kesinti payı (%99,9 → yılda ~8,8 saat). Hız ile güvenilirlik tartışmasını sayıya bağlar: bütçe tükenmediyse ekip risk alıp hızlı yayın yapabilir, tükendiyse istikrara odaklanır.

**16.** Kullanıcı bir şeyi kaydeder, sayfayı yeniler ve **eski hâli görür** — sistem bozuk değildir ama kullanıcı öyle sanır. Tasarım çözümü: kullanıcının kendi değişikliğini anında göstermek (optimistic UI) ve "güncelleniyor" durumunu belirtmek.

**17.** Aynı isteğin iki kez işlenmesini — yani çift sipariş, çift ödeme. **Butonu devre dışı bırakmak yeterli değildir**: istemci tarafı bir önlemdir, ağ koptuğunda veya istemci yeniden denediğinde koruma sağlamaz. Asıl koruma sunucudadır; ikisi birlikte kullanılır.

**18.** Yoksa tüm istemciler aynı anda tekrar dener ve zaten sıkışık servisi yeniden boğar ("yeniden deneme fırtınası"). Jitter, beklemeye rastgelelik ekleyerek denemeleri zamana yayar.

**19.** Sürekli hata veren bir bağımlılığa istek atmayı bir süre tamamen durdurup hızlıca hata döner; böylece hem kendi kaynaklarını korur hem çökmüş servisi daha da boğmaz. Gerektirdiği tasarım kararı: **devre kesildiğinde arayüzde ne görüneceği** (graceful degradation).

**20.** **Değerlendirilen alternatifler** ve **sonuçlar**. Alternatifler yazılmazsa yeni gelen biri aynı seçeneği yeniden önerir ve tartışma sıfırdan başlar. Sonuçlar yazılmazsa kararın bedelini kimse takip etmez.

**21.** **Kimin kimi çağırdığını, yani bağımlılık yönünü.** A → B ise A, B'ye bağımlıdır: B'nin çökmesi A'yı etkiler, tersi geçerli olmayabilir. Kesikli oklar genelde eş zamansız, düz oklar eş zamanlı iletişimi gösterir.

**22.** (1) Kullanıcı isteği hangi kutulardan geçiyor? (2) Hangi kutu çökerse ne olur? (3) Hangi oklar bir sınırı geçiyor? (4) Veri nerede duruyor ve nasıl senkron kalıyor? (5) Ne eksik — izleme, önbellek, kuyruk, yedeklilik?

---

**Biten bölüm:** Bölüm 14 — Sistem mimarisi ve sistem tasarımı
**Sıradaki bölüm:** Bölüm 15 — Git ve GitHub
