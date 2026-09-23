---
title: "Kubernetes"
sectionNumber: "16.5"
category: "devops-ve-yayin"
order: 5
cardCount: 1
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: []
---
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
