---
title: "Sunucu tarafının temel kavramları"
sectionNumber: "10.1"
category: "back-end-api"
order: 1
cardCount: 3
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
Server ve runtime kavramları 1.1 ve 9.1'de tanımlandı. Burada eksik kalan parçalar.

### Process

- **Terim (İngilizce):** Process
- **Türkçesi:** Süreç / işlem
- **Tanım:** Sunucuda çalışan tek bir program örneği.
- **Ne işe yarar / neden var:** Bir uygulama tek bir process olarak çalışıyorsa, o process çöktüğünde site düşer. Bu yüzden üretimde genelde birden fazla kopya çalıştırılır (14.6, horizontal scaling) ve önlerine bir dağıtıcı konur.
- **Nerede karşına çıkar:** Sunucu izleme ve çökme incelemelerinde.
- **Örnek kullanım:** "Process bellek sızıntısı yüzünden şişip yeniden başlıyor; loglara bakalım."
- **İlgili terimler:** Server (1.1), Horizontal scaling (14.6), Stateless (14.7)

### Port

- **Terim (İngilizce):** Port
- **Türkçesi:** Bağlantı noktası
- **Tanım:** Aynı makinede birden fazla servisin ayrı ayrı dinlenebilmesini sağlayan numaralı kapı.
- **Ne işe yarar / neden var:** `localhost:3000` adresindeki 3000 budur. Bir makinede aynı anda ön yüz (3000), API (4000) ve veritabanı (5432) çalışabilmesinin sebebi.
- **Nerede karşına çıkar:** Yerel geliştirmede ve Docker yapılandırmasında (16.4).
- **Örnek kullanım:** "Port çakışması var; başka bir uygulama 3000'i kullanıyor."
- **İlgili terimler:** Localhost (1.8), Docker (16.4)

### Environment variable

- **Terim (İngilizce):** Environment variable (env var)
- **Türkçesi:** Ortam değişkeni
- **Tanım:** Uygulamanın çalıştığı ortama göre değişen ayarların, kodun dışında tutulması.
- **Ne işe yarar / neden var:** Aynı kod, farklı ortamlarda (1.8) farklı veritabanına bağlanabilsin diye. Ayrıca API anahtarları gibi gizli bilgiler koda yazılmaz — bu bir güvenlik gereğidir (13.6).
- **Nerede karşına çıkar:** Deploy sorunlarının en yaygın sebebi eksik veya yanlış ortam değişkenidir.
- **Örnek kullanım:** "Local'de çalışıyor ama production'da patlıyor; bir env var eksik olabilir."
- **Karıştırılanlar:** Ön yüze gönderilen ortam değişkenleri **gizli değildir** — tarayıcıya giden her şey görülebilir. Gerçek sırlar yalnızca sunucuda kalan değişkenlerde tutulur. Detay 13.6 ve 16.3'te.
- **İlgili terimler:** Secret yönetimi (13.6), Ortamlar (1.8, 16.3)
