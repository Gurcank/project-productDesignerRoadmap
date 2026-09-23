---
title: "Tahmin ve ölçüm: story point, velocity, capacity"
sectionNumber: "3.3"
category: "calisma-bicimi"
order: 3
cardCount: 5
sourceFile: "03-calisma-bicimi-agile-scrum-kanban.md"
origin: "material"
flags: []
---
Ekibin ne kadar iş alabileceğini kestirme araçları. Hepsinin ortak kuralı şudur: **bunlar planlama aracıdır, performans ölçme aracı değildir.** Performans ölçümüne dönüştürüldüklerinde ekip sayıları manipüle etmeye başlar ve araç işlevini kaybeder.

### Story point

- **Terim (İngilizce):** Story point
- **Türkçesi:** Hikâye puanı
- **Tanım:** Bir işin büyüklüğünü saat yerine, göreli bir puanla ifade etme birimi.
- **Ne işe yarar / neden var:** İnsanlar süre tahmininde kötüdür ama **karşılaştırmada** iyidir. "Bu iş şu işin iki katı" demek, "bu iş 6 saat sürer" demekten daha güvenilirdir. Puan; karmaşıklık, belirsizlik ve iş miktarını birlikte kapsar. Genelde Fibonacci benzeri bir dizi kullanılır (1, 2, 3, 5, 8, 13) — büyüdükçe aralığın açılması, büyük işlerde belirsizliğin de büyüdüğünü yansıtır.
- **Nerede karşına çıkar:** Grooming ve planning toplantılarında. Planning poker denen yöntemle herkes aynı anda puan gösterir; farklı puanlar çıkarsa asıl değerli olan, aradaki farkın **neden** olduğunu konuşmaktır.
- **Örnek kullanım:** "Ben 3 verdim sen 8 verdin; farkı konuşalım, muhtemelen ikimiz farklı kapsam düşünüyoruz."
- **Karıştırılanlar:** *Story point* ≠ *saat*. Puanı saate çevirmek ("1 puan = 4 saat") yöntemin tüm faydasını yok eder. Ayrıca puanlar ekipten ekibe kıyaslanamaz; her ekibin ölçeği kendine özeldir.
- **İlgili terimler:** Velocity, Estimation (2.7), Capacity

### Velocity

- **Terim (İngilizce):** Velocity
- **Türkçesi:** Hız
- **Tanım:** Bir ekibin sprint başına ortalama olarak tamamladığı story point miktarı.
- **Ne işe yarar / neden var:** Gelecek sprint'te ne kadar iş alınabileceğini tahmin etmeye yarar. Son 3-5 sprint'in ortalaması kullanılır.
- **Nerede karşına çıkar:** Planning'de kapasite belirlerken ve roadmap tahminlerinde.
- **Örnek kullanım:** "Son üç sprint velocity 24; bu sprint 35 puan almak gerçekçi değil."
- **Karıştırılanlar:** Velocity bir **performans göstergesi değildir.** Yönetim velocity'yi hedef hâline getirirse ekip puanları şişirir ve sayı anlamını yitirir. Ayrıca iki ekibin velocity'si karşılaştırılamaz.
- **İlgili terimler:** Story point, Capacity, Burndown chart

### Capacity

- **Terim (İngilizce):** Capacity
- **Türkçesi:** Kapasite
- **Tanım:** Ekibin bu sprint'te fiilen çalışabileceği süre.
- **Ne işe yarar / neden var:** Velocity geçmişe bakar, capacity bu sprint'in gerçeğine bakar: izinler, tatiller, toplantılar, başka projeye ayrılan zaman. İkisi birlikte kullanılır.
- **Nerede karşına çıkar:** Planning'in ilk adımı.
- **Örnek kullanım:** "İki kişi izinli, kapasitemiz %60; velocity'ye göre değil ona göre alalım."
- **İlgili terimler:** Velocity, Sprint planning (3.2), Bandwidth (18.2)

### Burndown chart

- **Terim (İngilizce):** Burndown chart
- **Türkçesi:** Tükenme grafiği
- **Tanım:** Sprint boyunca kalan işin gün gün nasıl azaldığını gösteren grafik.
- **Ne işe yarar / neden var:** Sapmayı erken gösterir. Çizgi düz gidiyorsa iş ilerlemiyor demektir; sprint bitmeden müdahale şansı verir.
- **Nerede karşına çıkar:** Jira gibi araçların sprint ekranında otomatik üretilir.
- **Örnek kullanım:** "Burndown yatay gidiyor; üç gündür hiçbir iş 'done'a geçmedi, bir yerde takılıyoruz."
- **Karıştırılanlar:** *Burndown* kalan işi gösterir (aşağı iner); *burnup* tamamlanan işi ve toplam kapsamı ayrı ayrı gösterir — bu yüzden burnup, kapsam büyümesini (scope creep) görünür kılar. Kapsam değişikliğini izlemek istiyorsan burnup daha faydalıdır.
- **İlgili terimler:** Velocity, Scope creep (2.8), Cumulative flow diagram (3.4)

### Timebox

- **Terim (İngilizce):** Timebox
- **Türkçesi:** Zaman kutusu
- **Tanım:** Bir işe veya toplantıya önceden sabit bir süre ayırıp, süre dolduğunda durma kuralı.
- **Ne işe yarar / neden var:** Sonu belirsiz araştırmaların ve toplantıların sınırlandırılmasını sağlar. Süre dolduğunda iş bitmemiş olabilir; o zaman elde ne varsa onunla karar verilir. Amaç mükemmel cevap değil, **zamanında** cevaptır.
- **Nerede karşına çıkar:** Standup'ın 15 dakika olması bir timebox'tır. Araştırma işlerinde de kullanılır (bkz. spike, 3.5).
- **Örnek kullanım:** "Bu araştırmayı iki günle timebox'layalım; süre dolunca ne bulduysak onunla karar veririz."
- **İlgili terimler:** Spike (3.5), Sprint (3.2), Bikeshedding (18.2)
