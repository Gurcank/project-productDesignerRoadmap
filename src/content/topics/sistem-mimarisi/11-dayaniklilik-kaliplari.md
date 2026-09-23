---
title: "Dayanıklılık kalıpları"
sectionNumber: "14.11"
category: "sistem-mimarisi"
order: 11
cardCount: 4
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: []
---
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
