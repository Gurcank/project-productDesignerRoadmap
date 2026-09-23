---
title: "CI/CD"
sectionNumber: "16.1"
category: "devops-ve-yayin"
order: 1
cardCount: 2
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: []
---
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
