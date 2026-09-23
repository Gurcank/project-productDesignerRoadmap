---
title: "Mimari stiller"
sectionNumber: "14.2"
category: "sistem-mimarisi"
order: 2
cardCount: 4
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: ["degisken", "emin-degil"]
---
Sistemin kaç parçaya bölüneceği ve parçaların nasıl dağıtılacağı.

### Monolith

- **Terim (İngilizce):** Monolith, monolithic architecture
- **Türkçesi:** Tek parça mimari
- **Tanım:** Tüm uygulamanın tek bir kod tabanı ve tek bir dağıtım birimi olarak çalışması.
- **Ne işe yarar / neden var:** Basit. Tek yerde çalışır, tek yerde hata ayıklanır, ağ gecikmesi yoktur, bir işlem tek bir transaction'da (11.8) tutulabilir. **Küçük ve orta ekipler için neredeyse her zaman doğru başlangıçtır.**
- **Nerede karşına çıkar:** Çoğu projede — ve genelde olması gerektiği gibi.
- **Örnek kullanım:** "Monolith ile başlayalım; iki kişiyiz, mikroservisin operasyon maliyetini karşılayamayız."
- **Karıştırılanlar:** "Monolith eski, mikroservis modern" bir yanılgıdır. Monolith'in sorunu **büyüklük değil, düzensizliktir**: sınırları belirsiz, her şeyin her şeye dokunduğu bir kod tabanı ("big ball of mud") bakımı zorlaştırır. Çözümü mikroservis değil, modüler yapıdır.
- **İlgili terimler:** Modular monolith, Microservice

### Modular monolith

- **Terim (İngilizce):** Modular monolith
- **Türkçesi:** Modüler tek parça mimari
- **Tanım:** Tek bir dağıtım birimi olarak çalışan ama içinde net modül sınırları bulunan mimari.
- **Ne işe yarar / neden var:** İki dünyanın iyi taraflarını hedefler: **mikroservisin disiplinli sınırlarını, monolith'in operasyonel basitliğiyle** birleştirir. Modüller birbirine yalnızca tanımlı arayüzlerden dokunur; ileride bir modülü ayrı servise çıkarmak gerekirse, o sınır zaten hazırdır.
- `[DEĞİŞKEN BİLGİ]` **2026 itibarıyla sektördeki yaygın tavsiye budur:** yeni bir ürüne modüler monolith ile başlamak, mikroservise ancak ölçülmüş bir darboğaz ve ekip yapısı bunu gerektirdiğinde geçmek.
- **Nerede karşına çıkar:** Mimari tartışmalarında giderek daha çok.
- **Örnek kullanım:** "Modüler monolith kuralım; modül sınırlarını net çizelim, gerekirse ileride ayırırız."
- **İlgili terimler:** Monolith, Microservice, Bounded context

### Microservice

- **Terim (İngilizce):** Microservices
- **Türkçesi:** Mikroservisler
- **Tanım:** Uygulamanın, birbirinden bağımsız geliştirilip dağıtılan küçük servislere bölünmesi.
- **Ne işe yarar / neden var:** Asıl faydası teknik değil **organizasyoneldir:** çok sayıda ekip, birbirini beklemeden kendi servisini yayınlayabilir. Ayrıca farklı parçalar farklı ölçeklerde çalışabilir ve bir servisin çökmesi diğerlerini doğrudan durdurmaz.
- **Nerede karşına çıkar:** Büyük organizasyonlarda.
- **Örnek kullanım:** "Mikroservise geçmek için ekip yapımız uygun değil; üç kişiyiz, servis başına sahip yok."
- **Ne zaman kullanılmaz:** **Bedelleri ağırdır ve genelde hafife alınır:** ağ gecikmesi, dağıtık hata ayıklama, veri tutarlılığının zorlaşması, izleme ve dağıtım altyapısı zorunluluğu, çok daha yüksek operasyon maliyeti. Martin Fowler'ın "microservices premium" dediği bu ek maliyet, ancak belirli bir ölçek ve ekip yapısında kendini amorti eder.
- **İlgili terimler:** Distributed monolith, Modular monolith, Message queue (14.4)

### Distributed monolith

- **Terim (İngilizce):** Distributed monolith
- **Türkçesi:** Dağıtık tek parça
- **Tanım:** Servislerin ayrı ayrı dağıtıldığı ama birbirine sıkı sıkıya bağlı olduğu — yani bağımsız yayınlanamadığı — yapı.
- **Ne işe yarar / neden var:** **Mimarideki en kötü sonuçtur:** mikroservisin tüm maliyetini ödersin, hiçbir faydasını almazsın. Servisler ayrı ama biri değişince hepsini birlikte yayınlamak gerekir.
- **Nerede karşına çıkar:** Erken ve gerekçesiz mikroservis geçişlerinin tipik sonucu.
- **Örnek kullanım:** "Servisleri ayırdık ama hepsini birlikte deploy ediyoruz; bu bir dağıtık monolith, kazancımız yok."
- **İlgili terimler:** Microservice, Coupling

**Karar tablosu:**

| | Monolith / Modüler monolith | Microservice |
|---|---|---|
| **Ne zaman** | Küçük–orta ekip, tek ürün, belirsiz gereksinimler | Çok sayıda ekip, ölçülmüş darboğaz, farklı ölçekleme ihtiyaçları |
| **Kazandırır** | Basitlik, hızlı geliştirme, kolay hata ayıklama, tek transaction | Bağımsız yayın, bağımsız ölçekleme, hata yalıtımı |
| **Kaybettirir** | Tek dağıtım birimi; ekip büyüdükçe yayın koordinasyonu zorlaşır | Operasyon maliyeti, ağ gecikmesi, dağıtık hata ayıklama, veri tutarlılığı |
| **Ön koşul** | Yok | Olgun CI/CD, izleme, dağıtık izleme altyapısı |

`[EMİN DEĞİLİM]` **Sık alıntılanan iki vaka hakkında bir uyarı:** Amazon Prime Video'nun bir ekibinin dağıtık bir tasarımı tek sürece indirip yaklaşık %90 altyapı maliyeti tasarrufu bildirdiği (2023) ve Twilio Segment'in 140'tan fazla servisi tek kod tabanına geri topladığı yaygın biçimde anlatılıyor. **Ama bu hikâyeler sıkça abartılıyor.** Prime Video örneğinde söz konusu olan bir izleme aracıydı, Prime Video platformunun tamamı değil; başlangıç noktası da klasik mikroservis değil, serverless bir tasarımdı. Ayrıca "kuruluşların %X'i mikroservisten geri dönüyor" biçiminde dolaşan yüzdelerin güvenilir bir kaynağa dayanmadığı da ayrıca belirtiliyor. **Bu rakamları bir tartışmada kullanma;** çıkarılacak ders niteldir: dağıtık mimari, operasyonel maliyetini hak etmek zorundadır.
