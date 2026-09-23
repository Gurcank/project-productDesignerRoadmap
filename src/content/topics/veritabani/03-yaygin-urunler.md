---
title: "Yaygın ürünler"
sectionNumber: "11.3"
category: "veritabani"
order: 3
cardCount: 0
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: []
---
| Ürün | Tür | Ne zaman |
|---|---|---|
| **PostgreSQL** | İlişkisel | Modern varsayılan. Güçlü, açık kaynak, JSON desteği var, eklentilerle genişler. Emin değilsen bu |
| **MySQL** | İlişkisel | Çok yaygın ve olgun. WordPress ve klasik web yığınlarında baskın |
| **SQLite** | İlişkisel (dosya tabanlı) | Tek dosyada çalışır, sunucu gerektirmez. Küçük projeler, mobil uygulamalar, yerel geliştirme |
| **MongoDB** | Belge | Esnek yapılı veri; en yaygın belge veritabanı |
| **Redis** | Anahtar-değer | Önbellek, oturum, kuyruk, sayaç. Ana veritabanı olarak değil, yanında |

**Tasarımcı için sonuç:** Ürün seçimi senin işini doğrudan etkilemez. Etkilediği tek yer, o veritabanının **ne garanti ettiğidir** — ilişkisel bir veritabanı, arayüzde "bu iki kayıt tutarlı olmalı" varsayımını güvenilir kılar; belge veritabanı bunu garanti etmez.
