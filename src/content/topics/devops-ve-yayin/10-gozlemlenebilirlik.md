---
title: "Gözlemlenebilirlik"
sectionNumber: "16.10"
category: "devops-ve-yayin"
order: 10
cardCount: 3
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: []
---
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
