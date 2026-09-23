---
title: "Docker"
sectionNumber: "16.4"
category: "devops-ve-yayin"
order: 4
cardCount: 2
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: []
---
### Container / Image

- **Terim (İngilizce):** Docker, container, image, Dockerfile, layer, volume, registry
- **Türkçesi:** Konteyner, imaj
- **Tanım:** **Image**, uygulamanın ve çalışması için gereken her şeyin (dil sürümü, kütüphaneler, işletim sistemi parçaları) paketlenmiş hâli. **Container**, o imajın çalışan bir örneği. **Dockerfile**, imajın nasıl oluşturulacağını tanımlayan tarif.
- **Ne işe yarar / neden var:** **"Bende çalışıyor" problemini (1.8) yapısal olarak çözer.** Uygulama yalnızca kendi kodunu değil, çalıştığı ortamı da taşır. Senin bilgisayarında çalışan imaj, sunucuda da birebir aynı şekilde çalışır.
- **Nerede karşına çıkar:** Sunucu tarafı projelerde ve yerel geliştirme ortamı kurulumunda.
- **Örnek kullanım:** "Veritabanını Docker'da çalıştıralım; herkesin bilgisayarına ayrı ayrı kurmayalım."
- **Karıştırılanlar:** *Container* bir sanal makine değildir; işletim sistemini tekrarlamaz, sadece yalıtım sağlar — bu yüzden çok daha hafif ve hızlıdır. Ayrıca **konteyner varsayılan olarak kalıcı değildir:** durdurulduğunda içindeki veri silinir. Kalıcı veri için **volume** kullanılır.
- **İlgili terimler:** Kubernetes (16.5), Artifact (16.2), Registry

### Docker Compose

- **Terim (İngilizce):** Docker Compose
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Birden fazla konteyneri (uygulama, veritabanı, önbellek) tek bir yapılandırma dosyasıyla birlikte çalıştırma aracı.
- **Ne işe yarar / neden var:** Yerel geliştirme ortamını tek komutla ayağa kaldırır. Yeni birinin projeye katılma süresini günlerden dakikalara indirebilir.
- **Nerede karşına çıkar:** Yerel geliştirme kurulumunda.
- **Örnek kullanım:** "Compose dosyası var; tek komutla uygulama, Postgres ve Redis birlikte kalkıyor."
- **İlgili terimler:** Docker, Local (1.8)
