---
title: "Ölçekleme"
sectionNumber: "14.6"
category: "sistem-mimarisi"
order: 6
cardCount: 2
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: []
---
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
