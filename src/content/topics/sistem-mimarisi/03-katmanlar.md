---
title: "Katmanlar"
sectionNumber: "14.3"
category: "sistem-mimarisi"
order: 3
cardCount: 2
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: []
---
### Three-tier / Layered architecture

- **Terim (İngilizce):** Three-tier architecture, layered architecture
- **Türkçesi:** Üç katmanlı mimari, katmanlı mimari
- **Tanım:** Sistemin sunum (arayüz), iş mantığı ve veri katmanlarına ayrılması.
- **Ne işe yarar / neden var:** En klasik ve en yaygın yapı. Her katman yalnızca komşusuyla konuşur; bu, bir katmanı değiştirmenin diğerlerini kırmamasını sağlar. Arka yüzdeki controller/service/repository ayrımı (10.7) bunun kod içindeki karşılığıdır.
- **Nerede karşına çıkar:** Neredeyse her diyagramda.
- **Örnek kullanım:** "İş kuralını sunum katmanına yazmayalım; service katmanında dursun ki mobil de kullanabilsin."
- **İlgili terimler:** Client-server (1.1), Controller/Service/Repository (10.7)

### Coupling / Cohesion

- **Terim (İngilizce):** Coupling, cohesion, bounded context
- **Türkçesi:** Bağlılık, uyumluluk
- **Tanım:** **Coupling** parçaların birbirine ne kadar bağlı olduğu; **cohesion** bir parçanın içindeki şeylerin ne kadar birbirine ait olduğu.
- **Ne işe yarar / neden var:** İyi mimarinin tek cümlelik özeti: **düşük bağlılık, yüksek uyumluluk.** Yani parçalar içeride sıkı, dışarıya karşı gevşek olmalı. **Bounded context**, bir modülün sorumluluk sınırını tanımlayan kavramdır — ve bu sınır genelde iş alanına göre çizilir (sipariş, ödeme, envanter), teknik katmana göre değil.
- **Nerede karşına çıkar:** Modül ve servis sınırı tartışmalarında.
- **Örnek kullanım:** "Bu iki modül birbirinin veritabanına doğrudan yazıyor; bağlılık çok yüksek, arayüz üzerinden konuşsunlar."
- **Karıştırılanlar:** **Tasarımla akrabalığı var:** bir bileşen kütüphanesindeki (5.1) iyi bileşen tanımı da aynıdır — kendi içinde bütün, dışarıya net bir arayüz sunan. Aynı ilke, farklı ölçekte.
- **İlgili terimler:** Modular monolith, Component (8.7)
