---
title: "Sorgu ve işlem"
sectionNumber: "11.8"
category: "veritabani"
order: 8
cardCount: 4
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: []
---
### Query / SQL

- **Terim (İngilizce):** Query, SQL (Structured Query Language)
- **Türkçesi:** Sorgu
- **Tanım:** Veritabanından veri isteme veya veriyi değiştirme talebi. SQL bu talebin yazıldığı dildir.
- **Ne işe yarar / neden var:** Her ekranın arkasında bir veya birkaç sorgu vardır. Bir ekranın kaç sorgu attığı, o ekranın hızını doğrudan belirler.
- **Nerede karşına çıkar:** Performans incelemelerinde.
- **Örnek kullanım:** "Bu sayfa kaç sorgu atıyor? 40'tan fazlaysa bir sorun var."
- **İlgili terimler:** N+1 (11.9), ORM (11.10)

### Join

- **Terim (İngilizce):** Join
- **Türkçesi:** Birleştirme
- **Tanım:** Birden fazla tablodaki veriyi tek bir sorguda birleştirme.
- **Ne işe yarar / neden var:** Normalleştirilmiş verinin bir arada gösterilmesini sağlar: siparişi kullanıcı adıyla birlikte listelemek gibi. Doğru kullanıldığında, ayrı ayrı sorgu atmaktan çok daha hızlıdır (bkz. N+1).
- **Nerede karşına çıkar:** Her ilişkisel sorguda.
- **Örnek kullanım:** "Kullanıcı adını ayrı sorguyla çekmeyelim; join ile tek sorguda alalım."
- **İlgili terimler:** N+1 (11.9), Normalization (11.7)

### Aggregate

- **Terim (İngilizce):** Aggregation — count, sum, average, group by
- **Türkçesi:** Toplulaştırma
- **Tanım:** Çok sayıda satırdan tek bir özet sayı üretme: kaç tane, toplam ne kadar, ortalama kaç.
- **Ne işe yarar / neden var:** Gösterge panellerindeki (7.12) tüm sayılar bunlarla üretilir. Büyük tablolarda pahalı olabilir — bu yüzden bazen önceden hesaplanıp saklanır (denormalizasyon, 11.7).
- **Nerede karşına çıkar:** Dashboard, rapor ve istatistik bölümlerinde (7.4).
- **Örnek kullanım:** "Dashboard'daki bu dört sayı her açılışta milyonlarca satır tarıyor; günlük özet tablosu yapalım."
- **İlgili terimler:** Dashboard (7.12), Stat block (7.4), Slow query (11.9)

### Transaction / ACID

- **Terim (İngilizce):** Transaction, ACID (Atomicity, Consistency, Isolation, Durability)
- **Türkçesi:** İşlem, ACID özellikleri
- **Tanım:** Birden fazla değişikliğin **ya hep birlikte ya da hiç** uygulanmasını garanti eden mekanizma.
- **Ne işe yarar / neden var:** Klasik örnek para transferidir: bir hesaptan düşülüp diğerine eklenmesi tek bir bütün olmalıdır. Ortada kesilirse para yok olur. **Ürün karşılığı:** sipariş oluşturulurken stok düşülmesi, ödeme kaydı ve sipariş satırı hep birlikte olmalıdır; biri başarısız olursa hiçbiri olmamalıdır. Bu, arayüzdeki "yarım kalmış sipariş" durumlarını engeller.
- **Nerede karşına çıkar:** Ödeme, stok ve çok adımlı veri değişikliklerinde.
- **Örnek kullanım:** "Sipariş oluşturma işlemini transaction'a alalım; stok düştü ama sipariş oluşmadı durumu olmasın."
- **Karıştırılanlar:** ACID'in dört harfi genelde ezberlenmez; önemli olan **atomiklik** fikridir — "ya hepsi ya hiçbiri". Detay 14.10'da.
- **İlgili terimler:** Consistency (14.10), Idempotency (14.11), Queue (10.12)
