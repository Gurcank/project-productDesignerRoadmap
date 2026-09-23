---
category: "back-end-api"
sourceFiles: ["10-backend-ve-api.md"]
---

Bu bölümün amacı seni back-end geliştiricisi yapmak değil. Amaç şu üç şey:

1. Bir geliştirici "bu endpoint 429 dönüyor" dediğinde ne dendiğini anlaman.
2. Bir özelliğin **neden zor** olduğunu tahmin edebilmen — böylece gerçekçi tasarım yapman.
3. Tasarım kararlarının arka yüzde ne maliyet ürettiğini görmen. "Bu listede her ürünün yorumlarını da gösterelim" masum bir istek gibi görünür ama arka tarafta N+1 problemine (11.9) ve yavaş sayfaya dönüşebilir.

Bölüm 1.3'te request/response döngüsünü kurmuştuk. Burası onun detayı.

Bu bölümdeki bilginin çoğu **eskimeyen** kategoride: HTTP, REST, önbellekleme ve kuyruk mantığı 20 yıldır aynı. Değişken olanlar araç ve servis isimleri.
