---
title: "Serverless ve edge"
sectionNumber: "10.8"
category: "back-end-api"
order: 8
cardCount: 3
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
Sunucu yönetmeden sunucu kodu çalıştırmanın yolları.

### Serverless

- **Terim (İngilizce):** Serverless, function as a service (FaaS)
- **Türkçesi:** Sunucusuz
- **Tanım:** Kodun, sürekli açık bir sunucu yerine, yalnızca istek geldiğinde çalıştırılıp sonra kapatılan işlevler hâlinde barındırılması.
- **Ne işe yarar / neden var:** Sunucu yönetimini ortadan kaldırır ve **kullandığın kadar ödeme** modeli sunar. Trafiği düzensiz olan projeler için ekonomiktir: gece kimse kullanmıyorsa hiçbir şey ödemezsin. Ölçeklenme otomatiktir.
- **Nerede karşına çıkar:** Vercel, Netlify ve bulut sağlayıcılarının varsayılan modeli.
- **Örnek kullanım:** "Trafik dalgalı; serverless mantıklı, sabit sunucu maliyeti taşımayalım."
- **Karıştırılanlar:** **İsim yanıltıcıdır — sunucu vardır**, sadece sen yönetmezsin. Ayrıca sınırları vardır: uzun süren işler için uygun değildir (bunlar kuyruğa gider, 10.12), veritabanı bağlantılarını yönetmek ek özen ister ve çok yüksek sabit trafikte klasik sunucudan pahalı olabilir.
- **İlgili terimler:** Cold start, Edge function, Hosting (16.6)

### Cold start

- **Terim (İngilizce):** Cold start
- **Türkçesi:** Soğuk başlangıç
- **Tanım:** Bir serverless işlevin uzun süre çağrılmadıktan sonra ilk çağrıda yaşadığı ek başlangıç gecikmesi.
- **Ne işe yarar / neden var:** Serverless'ın bilinen bedeli. Kullanıcı açısından: gece kimsenin girmediği bir siteye sabah ilk giren kişi diğerlerinden yavaş bir deneyim yaşayabilir.
- **Nerede karşına çıkar:** Performans şikâyetlerinin gizli sebeplerinden biri.
- **Örnek kullanım:** "İlk istek 2 saniye, sonrakiler 200ms; cold start'a benziyor."
- **İlgili terimler:** Serverless, TTFB (8.12), Latency (1.3)

### Edge function

- **Terim (İngilizce):** Edge function, edge computing, region
- **Türkçesi:** Uç işlev, bölge
- **Tanım:** Kodun, tek bir merkezî veri merkezi yerine kullanıcıya coğrafi olarak yakın sunucularda çalıştırılması.
- **Ne işe yarar / neden var:** Gecikmeyi (1.3) düşürür: kullanıcı İstanbul'daysa ve kod Frankfurt yerine yakın bir noktada çalışıyorsa fark milisaniyelerle ölçülür. Yönlendirme, A/B test dağıtımı, kişiselleştirme ve dil tespiti gibi hafif işler için idealdir.
- **Nerede karşına çıkar:** Modern hosting platformlarında.
- **Örnek kullanım:** "Dil tespitini edge'de yapalım; kullanıcı doğru dile hemen yönlensin."
- **Karıştırılanlar:** Edge ortamı sınırlıdır: bazı Node API'leri çalışmaz ve veritabanı uzaktaysa kazanç kaybolabilir — kod kullanıcıya yakın olsa da veri hâlâ uzaktadır.
- **İlgili terimler:** CDN (10.11), Latency (1.3), Serverless
