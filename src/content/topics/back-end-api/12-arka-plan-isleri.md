---
title: "Arka plan işleri"
sectionNumber: "10.12"
category: "back-end-api"
order: 12
cardCount: 3
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
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
