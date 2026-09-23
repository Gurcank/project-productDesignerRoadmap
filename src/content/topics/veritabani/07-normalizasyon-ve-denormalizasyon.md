---
title: "Normalizasyon ve denormalizasyon"
sectionNumber: "11.7"
category: "veritabani"
order: 7
cardCount: 2
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: []
---
### Normalization

- **Terim (İngilizce):** Normalization
- **Türkçesi:** Normalleştirme
- **Tanım:** Verinin tekrar etmeyecek biçimde tablolara bölünmesi.
- **Ne işe yarar / neden var:** Her bilgi tek yerde tutulur; değiştiğinde tek yerden değişir. Bir şirketin adı 5000 siparişin içine kopyalanmışsa, ad değiştiğinde 5000 kaydı güncellemek gerekir — ve bir kısmı kaçınılmaz olarak atlanır. Normalleştirme bunu engeller.
- **Nerede karşına çıkar:** Veri modeli tasarımında.
- **Örnek kullanım:** "Şirket adını siparişe kopyalamayalım; şirket tablosuna referans verelim."
- **İlgili terimler:** Denormalization, Foreign key (11.5), Single source of truth (5.1)

### Denormalization

- **Terim (İngilizce):** Denormalization
- **Türkçesi:** Normalleştirmeyi bozma
- **Tanım:** Hız için bilerek veri tekrarı yapmak.
- **Ne işe yarar / neden var:** Normalleştirilmiş veriyi okumak, birçok tabloyu birleştirmeyi (join, 11.8) gerektirir ve bu yavaş olabilir. Sık okunan bir bilgiyi kopyalamak okumayı hızlandırır — bedeli, kopyanın güncel tutulması sorumluluğudur.
- **Nerede karşına çıkar:** Performans optimizasyonunda ve raporlama tablolarında.
- **Örnek kullanım:** "Ürün kartında yorum sayısını her seferinde saymayalım; sayacı ürün kaydında tutalım."
- **Karıştırılanlar:** Bir **takastır** (9.12): hız kazanırsın, tutarlılık riski alırsın. Kopya güncellenmezse arayüzde tutarsız sayılar görünür — "12 yorum" yazan ama 8 yorum listeleyen bir kart, kullanıcıya ürünün bozuk olduğunu düşündürür.
- **İlgili terimler:** Normalization, Trade-off (9.12), Cache invalidation (10.11)
