---
title: "Trafiği yönetenler"
sectionNumber: "14.5"
category: "sistem-mimarisi"
order: 5
cardCount: 2
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: []
---
### Load balancer

- **Terim (İngilizce):** Load balancer
- **Türkçesi:** Yük dengeleyici
- **Tanım:** Gelen istekleri, aynı uygulamanın birden fazla kopyası arasında dağıtan katman.
- **Ne işe yarar / neden var:** İki iş görür: yükü paylaştırır ve çöken bir kopyayı devre dışı bırakarak sistemin ayakta kalmasını sağlar. Yatay ölçeklemenin (14.6) ön koşuludur.
- **Nerede karşına çıkar:** Her ölçeklenmiş sistemde ve mimari diyagramlarında.
- **Örnek kullanım:** "Load balancer arkasında üç kopya çalışıyor; biri çökerse trafiği diğer ikisi alır."
- **İlgili terimler:** Horizontal scaling (14.6), Stateless (14.7), SPOF (14.8)

### Reverse proxy / API gateway

- **Terim (İngilizce):** Reverse proxy, API gateway
- **Türkçesi:** Ters vekil sunucu, API geçidi
- **Tanım:** İsteklerin uygulamaya ulaşmadan önce geçtiği ara katman. **API gateway**, bunun API'ye özel ve daha yetenekli hâlidir: kimlik doğrulama, hız sınırı (10.10), yönlendirme ve günlük kaydını tek yerde toplar.
- **Ne işe yarar / neden var:** Her serviste tekrarlanacak işleri tek noktaya çeker. Ayrıca dışarıya tek bir adres sunarak iç yapıyı gizler.
- **Nerede karşına çıkar:** Mikroservis mimarilerinde ve büyük sistemlerde.
- **Örnek kullanım:** "Hız sınırını gateway'de uygulayalım; her serviste ayrı ayrı yazmayalım."
- **Karıştırılanlar:** Gateway bir tek arıza noktası (14.8) hâline gelebilir; kendisi de yedekli kurulmalıdır.
- **İlgili terimler:** Middleware (10.7), BFF (10.6), Load balancer
