---
title: "API stilleri"
sectionNumber: "10.5"
category: "back-end-api"
order: 5
cardCount: 5
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: ["degisken"]
---
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
