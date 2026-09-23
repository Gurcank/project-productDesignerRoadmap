---
title: "Ölçüler ve hedefler"
sectionNumber: "14.9"
category: "sistem-mimarisi"
order: 9
cardCount: 4
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: []
---
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
