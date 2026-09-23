---
title: "Veritabanı türleri"
sectionNumber: "11.2"
category: "veritabani"
order: 2
cardCount: 4
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: ["degisken", "emin-degil"]
---
Farklı veri şekilleri, farklı depolama biçimleri ister.

### Relational database

- **Terim (İngilizce):** Relational database, SQL database, RDBMS
- **Türkçesi:** İlişkisel veritabanı
- **Tanım:** Verinin satır ve sütunlardan oluşan tablolarda tutulduğu ve tabloların birbiriyle ilişkilendirildiği model.
- **Ne işe yarar / neden var:** **Varsayılan seçim budur ve öyle olmalıdır.** Yapıyı önceden tanımlaman, veritabanının tutarlılığı zorlamasını sağlar: olmayan bir kullanıcıya sipariş yazılamaz, aynı e-posta iki kez kaydedilemez. Bu garantiler uygulama kodunda değil, veri katmanında verilir — yani kimse atlayamaz.
- **Nerede karşına çıkar:** Neredeyse her projede.
- **Örnek kullanım:** "İlişkisel gidelim; siparişler, kullanıcılar ve ürünler arasında net ilişkiler var."
- **Karıştırılanlar:** "SQL veritabanı" ve "ilişkisel veritabanı" pratikte aynı şeyi anlatır; SQL, bu veritabanlarını sorgulama dilidir.
- **İlgili terimler:** PostgreSQL (11.3), Schema (11.4), ACID (11.8)

### Document database

- **Terim (İngilizce):** Document database, NoSQL
- **Türkçesi:** Belge veritabanı
- **Tanım:** Verinin, sabit bir tablo yapısı yerine esnek belgeler (genelde JSON benzeri) hâlinde saklandığı model.
- **Ne işe yarar / neden var:** Yapının önceden bilinmediği veya kayıttan kayda değiştiği durumlarda esneklik verir: her ürünün farklı özellik setinin olduğu bir katalog gibi.
- **Nerede karşına çıkar:** MongoDB, Firestore gibi ürünlerde.
- **Örnek kullanım:** "Ürün özellikleri kategoriye göre çok değişiyor; o kısmı esnek tutalım."
- **Karıştırılanlar:** **Esneklik bedava değildir.** Veritabanı yapıyı zorlamadığı için tutarsız veri girmeyi engellemez; o iş uygulama koduna düşer ve zamanla kaçınılmaz olarak bir kısmı atlanır. Ayrıca modern ilişkisel veritabanları JSON alanları desteklediği için, "esneklik lazım" gerekçesi çoğu zaman ilişkisel model içinde de karşılanabilir. `[EMİN DEĞİLİM]` Bu, sektörde tartışmalı bir konudur; tek doğru cevap olarak sunma.
- **İlgili terimler:** Relational database, MongoDB (11.3), Schema (11.4)

### Key-value store

- **Terim (İngilizce):** Key-value store
- **Türkçesi:** Anahtar-değer deposu
- **Tanım:** Her kaydın bir anahtarla saklanıp aynı anahtarla çok hızlı geri alındığı basit yapı.
- **Ne işe yarar / neden var:** Karmaşık sorgu yapamaz ama **çok hızlıdır.** Bu yüzden ana veritabanının yerine değil, yanında kullanılır: önbellek (10.11), oturum bilgisi, hız sınırı sayacı (10.10), kuyruk (10.12).
- **Nerede karşına çıkar:** Redis en yaygın örneği.
- **Örnek kullanım:** "Oturum bilgisini Redis'te tutalım; her istekte veritabanına gitmeyelim."
- **İlgili terimler:** Redis (11.3), Caching (10.11), Session (12.2)

### Vector database

- **Terim (İngilizce):** Vector database, embedding
- **Türkçesi:** Vektör veritabanı
- **Tanım:** Metin veya görsellerin sayısal temsillerini saklayıp "anlamca en benzer olanı" bulmayı sağlayan veritabanı.
- **Ne işe yarar / neden var:** Yapay zekâ destekli arama ve öneri sistemlerinin altyapısı. Klasik arama kelime eşleşmesine bakar; vektör araması **anlam yakınlığına** bakar — "ucuz laptop" araması "uygun fiyatlı dizüstü bilgisayar" sonucunu getirebilir.
- **Nerede karşına çıkar:** Yapay zekâ özellikli ürünlerde. `[DEĞİŞKEN BİLGİ]` Bu alan çok hızlı değişiyor; ayrı ürünler yerine mevcut veritabanlarına eklenen özellikler de yaygınlaşıyor.
- **Örnek kullanım:** "Anlamsal arama istiyorsak vektör aramasına ihtiyacımız var; kelime eşleşmesi yetmez."
- **İlgili terimler:** Search (7.10), Document database
