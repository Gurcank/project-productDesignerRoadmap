# Bölüm 11 — Veritabanı ve veri modeli

Bu bölümün tasarımcı için değeri, ilk bakışta göründüğünden büyük. Sebebi şu: **veri modeli, arayüzün neyi gösterebileceğinin sınırını çizer.**

Bir örnek: "Kullanıcı birden fazla adres kaydedebilsin" ile "kullanıcının tek bir adresi olsun" arasındaki fark, bir tasarım tercihi gibi görünür. Aslında bir **veri modeli kararıdır** ve sonradan değiştirmek, ekranı değiştirmekten kat kat pahalıdır. Bu yüzden veri modeli, ekranlarla birlikte konuşulmalıdır — sonrasında değil.

İkinci değer: bir isteğin **neden zor** olduğunu tahmin edebilmek. "Listede her ürünün son yorumunu da gösterelim" masum görünür ama N+1 problemine (11.9) dönüşüp sayfayı yavaşlatabilir. Bunu bilmek, geliştiricinin "bu zor" cevabını anlamlandırmanı ve alternatif önermeni sağlar.

Bu bölümdeki kavramlar **eskimeyen** kategoride — ilişkisel model 50 yıllık. Değişken olanlar ürün ve servis isimleri (11.12).

---

## 11.1 Veri neden ayrı bir katman

### Database

- **Terim (İngilizce):** Database — DB
- **Türkçesi:** Veritabanı
- **Tanım:** Verinin kalıcı olarak, yapılandırılmış biçimde saklandığı ve sorgulanabildiği sistem.
- **Ne işe yarar / neden var:** Uygulama kapansa, sunucu yeniden başlasa veya kod tamamen değişse bile verinin kalmasını sağlar. Ayrıca aynı veriye birden fazla kullanıcının aynı anda, tutarlı biçimde erişebilmesini sağlar.
- **Nerede karşına çıkar:** Her dinamik projede.
- **Örnek kullanım:** "Bu bilgiyi nerede saklıyoruz? Veritabanında mı, sadece tarayıcıda mı?"
- **İlgili terimler:** Persistence, Schema (11.4), Dynamic site (1.5)

### Persistence

- **Terim (İngilizce):** Persistence, persistent storage
- **Türkçesi:** Kalıcılık
- **Tanım:** Verinin, onu üreten süreç sona erdikten sonra da var olmaya devam etmesi.
- **Ne işe yarar / neden var:** **Tasarım açısından somut sorusu şudur:** kullanıcı sekmeyi kapatıp geri geldiğinde ne kaybolur? Yarım kalmış bir form kaybolacak mı? Sepet duruyor mu? Filtre seçimleri hatırlanıyor mu? Bunların her biri bir kalıcılık kararıdır ve tasarımda belirtilmelidir.
- **Nerede karşına çıkar:** Form, sepet ve taslak özelliklerinde.
- **Örnek kullanım:** "Uzun formu taslak olarak kaydedelim mi? Kullanıcı yanlışlıkla kapatırsa her şey gitmesin."
- **İlgili terimler:** Database, Multi-step form (7.11), Draft

---

## 11.2 Veritabanı türleri

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

---

## 11.3 Yaygın ürünler

| Ürün | Tür | Ne zaman |
|---|---|---|
| **PostgreSQL** | İlişkisel | Modern varsayılan. Güçlü, açık kaynak, JSON desteği var, eklentilerle genişler. Emin değilsen bu |
| **MySQL** | İlişkisel | Çok yaygın ve olgun. WordPress ve klasik web yığınlarında baskın |
| **SQLite** | İlişkisel (dosya tabanlı) | Tek dosyada çalışır, sunucu gerektirmez. Küçük projeler, mobil uygulamalar, yerel geliştirme |
| **MongoDB** | Belge | Esnek yapılı veri; en yaygın belge veritabanı |
| **Redis** | Anahtar-değer | Önbellek, oturum, kuyruk, sayaç. Ana veritabanı olarak değil, yanında |

**Tasarımcı için sonuç:** Ürün seçimi senin işini doğrudan etkilemez. Etkilediği tek yer, o veritabanının **ne garanti ettiğidir** — ilişkisel bir veritabanı, arayüzde "bu iki kayıt tutarlı olmalı" varsayımını güvenilir kılar; belge veritabanı bunu garanti etmez.

---

## 11.4 Şema temelleri

### Schema

- **Terim (İngilizce):** Schema
- **Türkçesi:** Şema
- **Tanım:** Veritabanındaki tabloların, sütunların, tiplerin ve aralarındaki ilişkilerin tanımı.
- **Ne işe yarar / neden var:** Verinin yapısının sözleşmesidir. **Tasarımcı için okunabilir bir belgedir:** hangi alanların var olduğunu, hangilerinin zorunlu, hangilerinin boş olabileceğini gösterir. Bir ekranı tasarlamadan önce şemaya bakmak, hangi uç durumları (4.4) düşünmen gerektiğini söyler.
- **Nerede karşına çıkar:** Proje kurulumunda ve her veri modeli tartışmasında.
- **Örnek kullanım:** "Şemaya baktım: `phone` alanı boş olabiliyor. Telefonu olmayan kullanıcı için kart nasıl görünecek?"
- **İlgili terimler:** Table, Nullable, Migration (11.10)

### Table / Row / Column

- **Terim (İngilizce):** Table, row (record), column (field)
- **Türkçesi:** Tablo, satır (kayıt), sütun (alan)
- **Tanım:** Tablo bir tür nesneyi tutar (kullanıcılar), her satır o türden bir kayıttır (bir kullanıcı), her sütun o kaydın bir özelliğidir (e-posta).
- **Ne işe yarar / neden var:** Konuşma birimi bunlar. Bir Excel tablosu düşün: sayfa = tablo, satır = kayıt, sütun = alan.
- **Nerede karşına çıkar:** Her veri konuşmasında.
- **Örnek kullanım:** "Kullanıcılar tablosuna `timezone` sütunu ekleyelim mi? Bildirimleri doğru saatte göndermek için lazım."
- **İlgili terimler:** Schema, Data type

### Data type / Nullable / Default

- **Terim (İngilizce):** Data type, nullable, `NULL`, default value
- **Türkçesi:** Veri tipi, boş olabilir, varsayılan değer
- **Tanım:** Her sütunun ne tür veri tutacağı (metin, sayı, tarih, doğru/yanlış), boş bırakılıp bırakılamayacağı ve boş bırakılırsa hangi değeri alacağı.
- **Ne işe yarar / neden var:** **Bu, tasarımcının en çok işine yarayan üç bilgidir.** "Nullable" olan her alan, arayüzde bir boş durum demektir: profil fotoğrafı yoksa ne görünecek (avatar fallback, 7.13), açıklama yoksa kart nasıl duracak, tarih yoksa ne yazacak.
- **Nerede karşına çıkar:** Şema incelemesinde ve handoff'ta.
- **Örnek kullanım:** "Üç alan nullable; üçünün de boş hâlini tasarladım, teslimde var."
- **Karıştırılanlar:** `NULL` (değer yok) ile boş metin (`""`) ve sıfır farklı şeylerdir. "Değer girilmemiş" ile "bilerek boş bırakılmış" ayrımı bazen ürün açısından anlamlıdır.
- **İlgili terimler:** Edge case (4.4), Empty state (7.9), Contract (10.4)

---

## 11.5 Anahtarlar, kısıtlar ve index

### Primary key

- **Terim (İngilizce):** Primary key — PK
- **Türkçesi:** Birincil anahtar
- **Tanım:** Her satırı benzersiz olarak tanımlayan sütun.
- **Ne işe yarar / neden var:** Bir kaydı işaret etmenin tek güvenilir yolu. İki kullanıcının adı aynı olabilir ama kimlikleri farklıdır.
- **Nerede karşına çıkar:** Her tabloda. URL'lerde de görünür (`/urunler/123`).
- **Örnek kullanım:** "URL'de ID yerine slug kullanalım (1.2); ID'yi göstermek hem çirkin hem bilgi sızdırıyor."
- **Karıştırılanlar:** Sıralı sayısal ID'ler (1, 2, 3...) dışarıya gösterildiğinde bilgi sızdırır: rakip, ID'lere bakarak kaç siparişin olduğunu tahmin edebilir. Bu yüzden dışarıya açık kayıtlarda tahmin edilemez kimlikler (UUID benzeri) tercih edilir.
- **İlgili terimler:** Foreign key, Slug (1.2), IDOR (13.3)

### Foreign key

- **Terim (İngilizce):** Foreign key — FK
- **Türkçesi:** Yabancı anahtar
- **Tanım:** Bir tablodaki satırın, başka bir tablodaki satıra işaret eden sütunu.
- **Ne işe yarar / neden var:** İlişkileri kuran ve **tutarlılığı zorlayan** mekanizma. Bir sipariş, var olmayan bir kullanıcıya bağlanamaz — veritabanı buna izin vermez.
- **Nerede karşına çıkar:** Her ilişkisel şemada.
- **Örnek kullanım:** "Sipariş, kullanıcıya foreign key ile bağlı; kullanıcıyı silersek siparişlere ne olacak?"
- **Karıştırılanlar:** Bu sorunun cevabı bir **ürün kararıdır**, teknik değil: kullanıcı silinince siparişleri de silinsin mi, yoksa kalıp "silinmiş kullanıcı" mı görünsün? Genelde ikincisi doğrudur (bkz. soft delete, 11.11) — ama bu, arayüzde nasıl görüneceğini tasarlamanı gerektirir.
- **İlgili terimler:** Primary key, İlişki türleri (11.6), Soft delete (11.11)

### Constraint / Unique

- **Terim (İngilizce):** Constraint, unique constraint, check constraint
- **Türkçesi:** Kısıt, benzersizlik kısıtı
- **Tanım:** Veritabanı seviyesinde uygulanan kurallar: bu alan benzersiz olmalı, bu alan boş olamaz, bu sayı negatif olamaz.
- **Ne işe yarar / neden var:** Kuralı **en derin katmanda** uygular. Uygulama kodundaki kontrol atlanabilir veya bir yerde unutulabilir; veritabanı kısıtı atlanamaz.
- **Nerede karşına çıkar:** Kayıt formlarında (e-posta benzersizliği) ve iş kurallarında.
- **Örnek kullanım:** "E-posta benzersiz olmalı; kısıt veritabanında olsun, sadece formda kontrol etmeyelim."
- **Karıştırılanlar:** **Tasarım karşılığı:** benzersizlik ihlali kullanıcıya 409 (10.3) olarak döner ve "bu e-posta zaten kayıtlı" mesajı gerekir. Ama dikkat: giriş ekranında bu bilgiyi vermek güvenlik açısından sakıncalı olabilir (12.11).
- **İlgili terimler:** 409 (10.3), Input validation (13.7), Error message (4.9)

### Index

- **Terim (İngilizce):** Index
- **Türkçesi:** Dizin
- **Tanım:** Bir sütundaki değerlere göre hızlı arama yapmayı sağlayan yardımcı yapı.
- **Ne işe yarar / neden var:** Kitabın arkasındaki dizin gibi. İndeks yoksa veritabanı tüm satırları tek tek tarar; on bin kayıtta fark edilmez, on milyon kayıtta sayfa açılmaz. **Yavaş sayfa şikâyetlerinin en yaygın tek sebebi eksik indekstir.**
- **Nerede karşına çıkar:** Performans incelemelerinde.
- **Örnek kullanım:** "Filtreleme yaptığımız sütunda indeks var mı? Liste 4 saniyede geliyor."
- **Karıştırılanlar:** İndeks bedava değildir: okumayı hızlandırır ama **yazmayı yavaşlatır** ve yer kaplar. Her sütuna indeks koymak bir çözüm değil, ayrı bir problemdir.
- **İlgili terimler:** Slow query (11.9), N+1 (11.9), Filter (7.10)

---

## 11.6 İlişki türleri

Tabloların birbirine nasıl bağlandığı. **Bu, tasarım toplantısında konuşulması gereken bir konudur** — çünkü doğrudan arayüzü belirler.

### One-to-one

- **Terim (İngilizce):** One-to-one (1:1)
- **Türkçesi:** Bire bir
- **Tanım:** Bir kaydın karşılığında en fazla bir kayıt olması: bir kullanıcının bir profil kaydı.
- **Ne işe yarar / neden var:** Nadiren gerekir; genelde ayrı tabloya bölmenin sebebi hassas verinin ayrılması veya nadiren kullanılan alanların ayrı tutulmasıdır.
- **Örnek kullanım:** "Kullanıcının bir tane fatura adresi mi olacak, birden fazla mı? Bu şimdi karar verilmeli."
- **İlgili terimler:** One-to-many

### One-to-many

- **Terim (İngilizce):** One-to-many (1:N)
- **Türkçesi:** Bire çok
- **Tanım:** Bir kaydın birden fazla kayda sahip olması: bir kullanıcının birçok siparişi.
- **Ne işe yarar / neden var:** En yaygın ilişki türü. Arayüzdeki karşılığı bir **listedir** — ve liste demek, boş durumu (7.9), sıralaması, sayfalaması (7.10) ve "kaç tane gösterilecek" kararı demektir.
- **Nerede karşına çıkar:** Her projede.
- **Örnek kullanım:** "Kullanıcı → siparişler bire çok; sipariş listesinin boş hâlini ve sayfalamasını da tasarlayalım."
- **İlgili terimler:** Many-to-many, Empty state (7.9), Pagination (7.10)

### Many-to-many / Join table

- **Terim (İngilizce):** Many-to-many (N:M), join table (pivot table)
- **Türkçesi:** Çoka çok, ara tablo
- **Tanım:** Her iki tarafın da birden fazla karşılığı olması: bir ürünün birden fazla etiketi, bir etiketin birden fazla ürünü. Bu ilişki bir **ara tablo** ile kurulur.
- **Ne işe yarar / neden var:** Etiketleme, üyelik, izin ve favori gibi özelliklerin temeli. **Tasarım karşılığı:** çoklu seçim arayüzleri (chip'ler, 7.10), çoklu filtreler ve "bu kullanıcı hangi ekiplerde" tipi görünümler.
- **Nerede karşına çıkar:** Etiket, kategori, rol ve ekip özelliklerinde.
- **Örnek kullanım:** "Kullanıcı birden fazla ekipte olabiliyor mu? Öyleyse çoka çok; rol seçimi ekip başına ayrı olmalı."
- **Karıştırılanlar:** Ara tabloda **ek bilgi** de tutulabilir ve bu çoğu zaman gerekir: "kullanıcı bu ekibe ne zaman katıldı", "bu ekipteki rolü ne". Bu ihtiyacı önceden fark etmezsen model sonradan değişir.
- **İlgili terimler:** One-to-many, RBAC (12.9), Chip (7.10)

---

## 11.7 Normalizasyon ve denormalizasyon

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

---

## 11.8 Sorgu ve işlem

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

---

## 11.9 Yaygın problemler

Yavaş ve hatalı sayfaların arkasındaki tekrar eden sebepler.

### N+1 problem

- **Terim (İngilizce):** N+1 query problem
- **Türkçesi:** N+1 sorgu problemi
- **Tanım:** Bir liste çekmek için 1 sorgu atılması, sonra listedeki her öğe için ayrı birer sorgu daha atılması.
- **Ne işe yarar / neden var:** **Bu bölümdeki en önemli terim, çünkü doğrudan tasarım isteklerinden doğar.** "Listede her ürünün yazarını da gösterelim" dediğinde, kod 20 ürün için 20 ek sorgu atabilir. 1 sorgu 5 milisaniyeyse toplam 105 milisaniye olur; 100 ürünlü bir sayfada bu yarım saniyeye çıkar. Çözümü genelde join (11.8) veya toplu yüklemedir.
- **Nerede karşına çıkar:** Liste ve tablo ekranlarının performans incelemelerinde.
- **Örnek kullanım:** "Bu liste N+1 yapıyor; her satır için ayrı sorgu gidiyor, ilişkileri tek seferde çekelim."
- **Karıştırılanlar:** ORM'ler (11.10) bu sorunu kolaylaştırır: tek satırlık masum görünen bir kod, arka planda yüzlerce sorgu üretebilir. Bu yüzden ORM kullanan ekiplerde N+1 daha sık görülür.
- **İlgili terimler:** Join (11.8), ORM (11.10), Slow query

### Slow query / Missing index

- **Terim (İngilizce):** Slow query, missing index, full table scan
- **Türkçesi:** Yavaş sorgu, eksik indeks, tam tablo taraması
- **Tanım:** Bir sorgunun, indeks olmadığı için tüm tabloyu taraması ve uzun sürmesi.
- **Ne işe yarar / neden var:** Küçük veriyle test edilen bir özellik, gerçek veriyle çöker. **Bu, staging (1.8) ile production arasındaki en yaygın fark kaynağıdır:** staging'de 100 kayıt vardır, production'da 2 milyon.
- **Nerede karşına çıkar:** Yayın sonrası performans şikâyetlerinde.
- **Örnek kullanım:** "Staging'de anında geliyor, production'da 6 saniye; veri hacmi farkı ve muhtemelen eksik indeks."
- **İlgili terimler:** Index (11.5), Staging (1.8), Monitoring (16.10)

### Lock / Deadlock

- **Terim (İngilizce):** Lock, deadlock
- **Türkçesi:** Kilit, karşılıklı kilitlenme
- **Tanım:** Bir kayıt üzerinde işlem yapılırken başkalarının aynı anda değiştirmesini engelleyen mekanizma. Deadlock, iki işlemin karşılıklı olarak birbirini beklemesi.
- **Ne işe yarar / neden var:** Aynı anda iki kişinin aynı son bileti almasını engeller. Bedeli: kilitler beklemeye ve yavaşlığa yol açabilir.
- **Nerede karşına çıkar:** Yoğun trafikli işlemlerde (bilet satışı, stok, rezervasyon).
- **Örnek kullanım:** "Son ürün için iki eş zamanlı sipariş geliyor; kilit olmadan ikisine de satmış oluruz."
- **Karıştırılanlar:** **Tasarım karşılığı:** "başkası az önce aldı" durumunun bir ekranı olmalıdır. Rezervasyon ve bilet ürünlerinde bu, sık yaşanan ve sıkça tasarlanmayan bir durumdur.
- **İlgili terimler:** Transaction (11.8), Error state (7.9), Optimistic UI (7.9)

### Connection pool

- **Terim (İngilizce):** Connection pool, connection pooling
- **Türkçesi:** Bağlantı havuzu
- **Tanım:** Veritabanına açılan bağlantıların sınırlı sayıda tutulup yeniden kullanılması.
- **Ne işe yarar / neden var:** Her bağlantı veritabanı için maliyetlidir ve sayıları sınırlıdır. **Serverless (10.8) ile bilinen bir çatışması vardır:** her işlev çağrısı yeni bir bağlantı açmaya çalışırsa havuz hızla tükenir. Bu, serverless projelerinde sık karşılaşılan bir üretim hatasıdır.
- **Nerede karşına çıkar:** Serverless dağıtımlarında ve trafik artışlarında.
- **Örnek kullanım:** "Trafik artınca 'too many connections' hatası alıyoruz; havuzlayıcı kullanmamız lazım."
- **İlgili terimler:** Serverless (10.8), Cold start (10.8), BaaS (11.12)

---

## 11.10 ORM ve migration

### ORM

- **Terim (İngilizce):** ORM — Object-Relational Mapping
- **Türkçesi:** Nesne-ilişkisel eşleme
- **Tanım:** Veritabanı satırlarını, kodda nesne olarak kullanmayı sağlayan katman. SQL yazmak yerine kod yazılır.
- **Ne işe yarar / neden var:** Geliştirme hızını artırır ve tip güvenliği (8.6) sağlar: şemadaki bir alanı değiştirdiğinde kodda hata görünür. Ayrıca SQL injection (13.3) riskini büyük ölçüde azaltır.
- **Nerede karşına çıkar:** Modern TypeScript projelerinin çoğunda.
- **Örnek kullanım:** "ORM kullanalım; şema değişince tipler otomatik güncellensin."
- **Karıştırılanlar:** ORM, SQL bilmemeyi mazur göstermez. Karmaşık sorgularda ürettiği SQL verimsiz olabilir ve N+1 (11.9) üretmesi kolaydır. Ekipte kimse üretilen sorguya bakmıyorsa, performans sorunu görünmez birikir.
- **İlgili terimler:** Prisma, Drizzle, N+1 (11.9), TypeScript (8.6)

### Prisma / Drizzle

- **Terim (İngilizce):** Prisma, Drizzle ORM
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** TypeScript ekosisteminin iki yaygın ORM'i. **Prisma** kendi şema dilini kullanır ve daha soyut, üst seviye bir API sunar. **Drizzle** şemayı doğrudan TypeScript'te tanımlar ve SQL'e çok yakın bir yazım biçimi kullanır.
- **Ne işe yarar / neden var:** Seçim, ekibin SQL'e ne kadar yakın durmak istediğine bağlıdır. Prisma daha az SQL bilgisiyle daha hızlı ilerletir ve görsel veri tarayıcısı (Prisma Studio) gibi araçlar getirir; Drizzle daha şeffaftır — hangi SQL'in çalışacağını görürsün ve çok daha küçüktür.
- **Nerede karşına çıkar:** Next.js ve Node.js projelerinde.
- **Örnek kullanım:** "Ekip SQL'e hâkim; Drizzle ile gidelim, ürettiğimiz sorguyu görmek istiyoruz."
- `[DEĞİŞKEN BİLGİ]` **Önemli bir değişiklik oldu:** Prisma 7 (Kasım 2025 olarak raporlanıyor) Rust tabanlı sorgu motorunu kaldırıp yerine TypeScript/WASM tabanlı bir derleyici koydu. Paket boyutunun yaklaşık 14MB'tan 1,6MB'a düştüğü ve serverless soğuk başlangıçlarının belirgin biçimde iyileştiği raporlanıyor. **Bu, Prisma'nın serverless/edge ortamlarda ağır olduğunu söyleyen tüm eski kaynakları geçersiz kılar.** Drizzle hâlâ daha küçük (~7,4kb) ama aradaki fark ciddi biçimde kapandı. Kullanmadan önce güncel sürüm notlarını kontrol et.
- **İlgili terimler:** ORM, Migration, Serverless (10.8)

### Migration

- **Terim (İngilizce):** Migration
- **Türkçesi:** Göç / şema değişikliği
- **Tanım:** Veritabanı şemasında yapılan değişikliğin, sürüm kontrolüne alınmış ve tekrarlanabilir bir adım olarak kaydedilmesi.
- **Ne işe yarar / neden var:** Şema değişikliğinin her ortamda (1.8) aynı biçimde uygulanmasını sağlar. Ayrıca geri alınabilir olmasını hedefler.
- **Nerede karşına çıkar:** Her şema değişikliğinde ve deploy sürecinde (16.2).
- **Örnek kullanım:** "Yeni alanı migration ile ekleyelim; staging'de deneyip sonra production'a alalım."
- **Karıştırılanlar:** **Tasarımcı için önemli sonuç:** veri modelini değiştirmek, ekran değiştirmekten pahalıdır. Yeni bir alan eklemek görece kolaydır; var olan bir alanın anlamını değiştirmek veya bir ilişkiyi bire çoktan çoka çoka çevirmek, mevcut verinin de dönüştürülmesini gerektirir. Bu yüzden model kararları erken verilmelidir.
- **İlgili terimler:** Schema (11.4), Deploy (16.1), Breaking change (10.4)

### Seed / Schema drift

- **Terim (İngilizce):** Seed data, schema drift
- **Türkçesi:** Başlangıç verisi, şema kayması
- **Tanım:** **Seed**, geliştirme ortamını gerçekçi örnek veriyle doldurmaktır. **Schema drift**, bir ortamdaki şemanın diğerlerinden farklılaşmasıdır.
- **Ne işe yarar / neden var:** Seed doğrudan senin işine yarar: **gerçekçi seed verisi olmadan tasarımın uç durumları test edilemez.** "Ahmet Yılmaz" ile test edilen bir kart, gerçek veride 60 karakterlik bir şirket unvanıyla karşılaşınca taşar. İyi seed verisi kasten uzun isimler, boş alanlar ve aşırı değerler içerir.
- **Nerede karşına çıkar:** Geliştirme ortamı kurulumunda.
- **Örnek kullanım:** "Seed verisine çok uzun isimler ve boş açıklamalar da koyalım; tasarımı gerçek koşulda görelim."
- **İlgili terimler:** Edge case (4.4), Migration, Staging (1.8)

---

## 11.11 Veri yaşam döngüsü

### Backup / Restore

- **Terim (İngilizce):** Backup, restore, point-in-time recovery
- **Türkçesi:** Yedek, geri yükleme
- **Tanım:** Verinin düzenli kopyalarının alınması ve gerektiğinde geri getirilmesi.
- **Ne işe yarar / neden var:** Veri kaybı, bir "ihtimal" değil bir "ne zaman" meselesidir: donanım arızası, hatalı bir migration, yanlış bir silme komutu. **Kritik nokta:** yedek almak yetmez, **geri yüklemenin denenmiş olması** gerekir. Test edilmemiş yedek, yedek sayılmaz.
- **Nerede karşına çıkar:** Operasyonel kontrol listesinde (21.8).
- **Örnek kullanım:** "Yedek alınıyor ama geri yükleme hiç denenmedi; bir tatbikat yapalım."
- **İlgili terimler:** Incident (16.9), Data retention

### Soft delete

- **Terim (İngilizce):** Soft delete, hard delete
- **Türkçesi:** Yumuşak silme, kalıcı silme
- **Tanım:** Kaydı gerçekten silmek yerine "silinmiş" olarak işaretlemek.
- **Ne işe yarar / neden var:** Kazayla silmeyi geri alınabilir kılar ve ilişkili kayıtların bozulmasını engeller (silinen kullanıcının siparişleri hâlâ anlamlı kalır). **Tasarım karşılığı:** "Çöp kutusu" özelliği, "geri al" seçeneği (4.6) ve "silinmiş kullanıcı" görünümü hep bu kararın sonucudur.
- **Nerede karşına çıkar:** İçerik ve hesap yönetiminde.
- **Örnek kullanım:** "Soft delete kullanalım, 30 gün çöp kutusunda kalsın, sonra kalıcı silinsin."
- **Karıştırılanlar:** KVKK/GDPR (13.10) kapsamında kullanıcı **silinme hakkını** kullandığında soft delete yeterli olmayabilir; gerçek silme veya anonimleştirme gerekebilir. Bu ikisi çelişebilir ve ürün kararı gerektirir.
- **İlgili terimler:** Undo (4.6), Data retention, KVKK (13.10)

### Audit log

- **Terim (İngilizce):** Audit log, audit trail
- **Türkçesi:** Denetim kaydı
- **Tanım:** Kim, ne zaman, neyi değiştirdi bilgisinin kalıcı olarak tutulması.
- **Ne işe yarar / neden var:** Kurumsal ürünlerde zorunluluktur ve ekip ürünlerinde güven üretir. Arayüzdeki karşılığı activity feed'dir (7.12).
- **Nerede karşına çıkar:** Ekip ve kurumsal ürünlerde.
- **Örnek kullanım:** "Kim hangi ayarı değiştirdi görünsün; audit log'u activity feed olarak gösterelim."
- **İlgili terimler:** Activity feed (7.12), Compliance (13.10)

### Data retention / PII

- **Terim (İngilizce):** Data retention, PII (Personally Identifiable Information)
- **Türkçesi:** Veri saklama süresi, kişisel veri
- **Tanım:** Hangi verinin ne kadar süre saklanacağı ve kişisel verinin nasıl ele alınacağı.
- **Ne işe yarar / neden var:** KVKK ve GDPR (13.10) gereği: veri **amacı için gereken süre kadar** saklanmalıdır, süresiz değil. Ayrıca ne kadar az kişisel veri toplanırsa risk o kadar azalır — bu, **tasarım aşamasında verilen bir karardır**: formda gerçekten telefon numarası gerekli mi?
- **Nerede karşına çıkar:** Form tasarımında ve hukuki uyum çalışmasında.
- **Örnek kullanım:** "Bu alanı toplamayalım; kullanmıyoruz ve topladığımız her kişisel veri bir yükümlülük."
- **İlgili terimler:** KVKK/GDPR (13.10), Soft delete, Form (7.11)

---

## 11.12 BaaS ve yönetilen veritabanları

Veritabanını (ve bazen tüm arka yüzü) hazır servis olarak almak.

### BaaS

- **Terim (İngilizce):** BaaS — Backend as a Service
- **Türkçesi:** Servis olarak arka yüz
- **Tanım:** Veritabanı, kimlik doğrulama, dosya depolama ve gerçek zamanlı özellikleri hazır sunan platform.
- **Ne işe yarar / neden var:** Küçük ekiplerin arka yüz kurmadan ürün çıkarmasını sağlar. Senin gibi tek başına çalışan biri için, aylar kazandıran bir tercih olabilir.
- **Nerede karşına çıkar:** MVP ve küçük ekip projelerinde.
- **Örnek kullanım:** "Tek başımayız; BaaS ile başlayalım, arka yüz kurmakla uğraşmayalım."
- **Ne zaman kullanılmaz:** Karmaşık iş kuralları, özel performans ihtiyaçları veya katı veri yerleşimi (data residency) gereksinimleri olan projelerde sınırlarına çarpılır. Ayrıca bir **vendor lock-in** (9.12) kararıdır.
- **İlgili terimler:** Supabase, Firebase, Vendor lock-in (9.12)

### Manzara

`[DEĞİŞKEN BİLGİ]` **Bu tablo Eylül 2026 itibarıyla topladığım bilgilere dayanıyor ve hızla eskir. Kullanmadan önce doğrula.**

| Ürün | Ne | Öne çıkan |
|---|---|---|
| **Supabase** | Postgres + kimlik doğrulama + depolama + gerçek zamanlı + edge işlevleri | "Açık kaynak Firebase alternatifi" olarak konumlanır. Tek platformda tüm arka yüz. Ücretsiz katmanda proje bir süre kullanılmazsa duraklatılıyor |
| **Neon** | Serverless Postgres | Sıfıra ölçeklenme ve **branching** (her PR için ayrı veritabanı kopyası). Databricks tarafından satın alındığı (Mayıs 2025, ~1 milyar dolar) raporlanıyor; bağımsız işletildiği belirtiliyor. Temmuz 2026'da kendi auth/depolama/işlev paketini beta olarak çıkardığı raporlanıyor |
| **Firebase** | Google'ın BaaS'ı | Gerçek zamanlı senkronizasyon ve çevrimdışı destek güçlü; mobil uygulamalarda yaygın. Google ekosistemine bağlar |
| **PlanetScale** | Yönetilen MySQL/Vitess ve Postgres | **Ücretsiz katmanını Nisan 2024'te kaldırdı**; bu, sektörde çokça konuşulan bir dönüm noktası oldu. Şu an ödemeli ve daha kurumsal konumda |
| **Turso / Cloudflare D1** | Edge SQLite | Kullanıcıya yakın, düşük gecikmeli okumalar |

**Bu tablodan çıkarılacak asıl ders şu:** ücretsiz katmanlar kalıcı değildir. PlanetScale örneği, üzerine ürün kurulan bir ücretsiz katmanın bir gecede kalkabileceğini gösterdi. Bir platform seçerken "bugün bedava" değil, "ödemeli plana geçersek maliyeti ne olur ve çıkmak ne kadar zor" sorusu sorulmalıdır.

### Row Level Security

- **Terim (İngilizce):** RLS — Row Level Security
- **Türkçesi:** Satır seviyesinde güvenlik
- **Tanım:** Hangi kullanıcının hangi satırları görebileceğinin, uygulama kodunda değil **veritabanı seviyesinde** tanımlanması.
- **Ne işe yarar / neden var:** BaaS mimarilerinde kritiktir: istemci doğrudan veritabanıyla konuştuğu için, yetki kontrolü arada bir sunucu katmanı olmadan yapılmalıdır. RLS bu kontrolü en derin katmana koyar.
- **Nerede karşına çıkar:** Supabase ve benzeri platformlarda.
- **Örnek kullanım:** "RLS politikalarını yazmadan yayına çıkmayalım; şu an herkes her satırı okuyabilir."
- **Karıştırılanlar:** **Ciddi bir risk kaynağıdır:** RLS yapılandırılmadığında veya yanlış yazıldığında, veritabanı internete açık hâle gelebilir. BaaS ile hızlı ilerleyen projelerde en sık görülen güvenlik açığı budur.
- **İlgili terimler:** Authorization (12.9), IDOR (13.3), BaaS

---

## 11.13 Kendini test et

**1.** Veri modeli kararları neden ekranlarla birlikte konuşulmalı?

**2.** İlişkisel veritabanının belge veritabanına göre temel garantisi nedir?

**3.** Redis neden ana veritabanı olarak kullanılmaz?

**4.** Bir sütunun "nullable" olması tasarımcı için ne anlama gelir?

**5.** Sıralı sayısal ID'leri URL'de göstermenin sakıncası nedir?

**6.** Foreign key'in tutarlılık garantisi nedir? "Kullanıcı silinince siparişlerine ne olacak" sorusu teknik mi ürün kararı mı?

**7.** Index ne işe yarar ve bedeli nedir?

**8.** Çoka çok ilişkide ara tabloda ek bilgi tutmak neden sık gerekir? Bir örnek ver.

**9.** Normalizasyon ile denormalizasyon arasındaki takas nedir? Denormalizasyonun arayüzdeki riski nedir?

**10.** Transaction ne garanti eder? Sipariş akışında karşılığı nedir?

**11.** N+1 problemi nedir ve hangi tasarım isteğinden doğar? Çözümü nedir?

**12.** Staging'de hızlı, production'da yavaş bir liste. En muhtemel iki sebep nedir?

**13.** Serverless ile connection pool arasındaki çatışma nedir?

**14.** ORM kullanmak SQL bilmemeyi mazur gösterir mi? Neden?

**15.** Prisma'nın serverless ortamlarda ağır olduğunu söyleyen kaynaklar neden eskimiş olabilir?

**16.** Seed verisi tasarımcıyı neden ilgilendirir? İyi seed verisi ne içerir?

**17.** "Yedek alıyoruz" demek yeterli mi?

**18.** Soft delete ne sağlar ve KVKK ile nasıl çelişebilir?

**19.** Ücretsiz veritabanı katmanları hakkında PlanetScale örneğinden çıkarılacak ders nedir?

**20.** RLS nedir ve neden BaaS mimarilerinde kritik bir güvenlik noktasıdır?

---

### Cevaplar

**1.** Çünkü **veri modeli, arayüzün neyi gösterebileceğinin sınırını çizer.** "Kullanıcı birden fazla adres kaydedebilsin" bir tasarım tercihi gibi görünür ama bir veri modeli kararıdır ve sonradan değiştirmek, ekranı değiştirmekten kat kat pahalıdır.

**2.** **Tutarlılığı veri katmanında zorlar.** Olmayan bir kullanıcıya sipariş yazılamaz, aynı e-posta iki kez kaydedilemez. Bu garantiler uygulama kodunda değil veritabanında verilir — yani kimse atlayamaz. Belge veritabanı bunu garanti etmez; sorumluluk uygulama koduna düşer.

**3.** Karmaşık sorgu yapamaz. Çok hızlıdır ama sadece anahtarla erişim sunar. Bu yüzden ana veritabanının **yerine** değil **yanında** kullanılır: önbellek, oturum, hız sınırı sayacı, kuyruk.

**4.** O alan **boş olabilir** demektir — yani arayüzde bir boş durum tasarlanmalıdır. Profil fotoğrafı yoksa avatar fallback, açıklama yoksa kartın nasıl duracağı, tarih yoksa ne yazacağı.

**5.** Bilgi sızdırır. Rakip, ID'lere bakarak kaç siparişin veya kaç kullanıcın olduğunu tahmin edebilir. Ayrıca ID'leri tek tek deneyerek başkasının kaydına erişmeye çalışma (IDOR, 13.3) kolaylaşır. Dışa açık kayıtlarda tahmin edilemez kimlikler tercih edilir.

**6.** Foreign key, bir kaydın **var olmayan** bir kayda bağlanmasını engeller. "Kullanıcı silinince siparişlerine ne olacak" sorusu bir **ürün kararıdır**: siparişler de silinsin mi, yoksa kalıp "silinmiş kullanıcı" mı görünsün? Genelde ikincisi doğrudur ve bunun arayüzde nasıl görüneceği tasarlanmalıdır.

**7.** Bir sütundaki değerlere göre hızlı arama sağlar; indeks yoksa veritabanı tüm satırları tarar. Bedeli: **okumayı hızlandırır ama yazmayı yavaşlatır** ve yer kaplar. Her sütuna indeks koymak ayrı bir problemdir.

**8.** Çünkü ilişkinin kendisi hakkında bilgi tutmak gerekir. Örnek: kullanıcı–ekip ilişkisinde "bu ekibe ne zaman katıldı" ve "bu ekipteki rolü ne" bilgileri ara tabloda yaşar. Bu ihtiyacı önceden fark etmezsen model sonradan değişir.

**9.** Normalizasyon tekrarı önler, tutarlılık verir ama okumak için join gerektirir (yavaş olabilir). Denormalizasyon veriyi kopyalayarak okumayı hızlandırır ama kopyanın güncel tutulması sorumluluğunu getirir. **Arayüzdeki risk:** kopya güncellenmezse tutarsız görünür — "12 yorum" yazan ama 8 yorum listeleyen bir kart, kullanıcıya ürünün bozuk olduğunu düşündürür.

**10.** Birden fazla değişikliğin **ya hep birlikte ya da hiç** uygulanmasını. Sipariş akışında karşılığı: stok düşülmesi, ödeme kaydı ve sipariş satırı hep birlikte olmalıdır; biri başarısız olursa hiçbiri olmamalıdır — böylece "yarım kalmış sipariş" durumu oluşmaz.

**11.** Bir liste için 1 sorgu atılıp, sonra listedeki her öğe için ayrı birer sorgu daha atılması. **"Listede her ürünün yazarını/son yorumunu da gösterelim" gibi tasarım isteklerinden doğar.** Çözümü join veya ilişkileri tek seferde toplu çekmektir.

**12.** (1) **Veri hacmi farkı** — staging'de 100 kayıt, production'da milyonlarca. (2) **Eksik indeks** — küçük veride fark edilmez, büyük veride tam tablo taramasına dönüşür.

**13.** Veritabanı bağlantı sayısı sınırlıdır ve havuzlanır. Serverless'ta her işlev çağrısı yeni bir bağlantı açmaya çalışırsa havuz hızla tükenir ("too many connections"). Bu, serverless projelerinde sık karşılaşılan bir üretim hatasıdır; havuzlayıcı (pooler) kullanmak gerekir.

**14.** Hayır. Karmaşık sorgularda ORM'in ürettiği SQL verimsiz olabilir ve **N+1 üretmesi çok kolaydır** — tek satırlık masum görünen bir kod arka planda yüzlerce sorgu üretebilir. Ekipte kimse üretilen sorguya bakmıyorsa performans sorunu görünmez birikir.

**15.** Çünkü **Prisma 7** (Kasım 2025 olarak raporlanıyor) Rust tabanlı sorgu motorunu kaldırıp TypeScript/WASM tabanlı bir derleyiciyle değiştirdi; paket boyutu yaklaşık 14MB'tan 1,6MB'a düştü ve soğuk başlangıçlar belirgin biçimde iyileşti. Eski karşılaştırmalar bu değişiklikten önce yazılmıştır.

**16.** Çünkü **gerçekçi seed verisi olmadan tasarımın uç durumları test edilemez.** "Ahmet Yılmaz" ile test edilen bir kart, gerçek veride 60 karakterlik bir şirket unvanıyla taşar. İyi seed verisi kasten uzun isimler, boş alanlar, aşırı büyük sayılar ve eksik ilişkiler içerir.

**17.** Hayır. **Geri yüklemenin denenmiş olması** gerekir. Test edilmemiş yedek, yedek sayılmaz — gerçek bir olayda çalışmadığı ancak o an anlaşılır.

**18.** Kazayla silmeyi geri alınabilir kılar ve ilişkili kayıtların bozulmasını engeller ("silinmiş kullanıcı"nın siparişleri anlamlı kalır). KVKK/GDPR kapsamında kullanıcı **silinme hakkını** kullandığında ise soft delete yeterli olmayabilir; gerçek silme veya anonimleştirme gerekebilir. İkisi çelişir ve ürün kararı gerektirir.

**19.** **Ücretsiz katmanlar kalıcı değildir.** PlanetScale, ücretsiz katmanını Nisan 2024'te kaldırdı ve üzerine ürün kurmuş binlerce projeyi taşınmak zorunda bıraktı. Platform seçerken sorulacak soru "bugün bedava mı" değil, **"ödemeli plana geçersek maliyeti ne olur ve çıkmak ne kadar zor"**.

**20.** Hangi kullanıcının hangi **satırları** görebileceğinin veritabanı seviyesinde tanımlanmasıdır. BaaS'ta kritiktir çünkü istemci doğrudan veritabanıyla konuşur — arada yetki kontrolü yapacak bir sunucu katmanı yoktur. RLS yapılandırılmadığında veya yanlış yazıldığında veritabanı fiilen internete açık hâle gelir; BaaS ile hızlı ilerleyen projelerdeki en sık güvenlik açığı budur.

---

**Biten bölüm:** Bölüm 11 — Veritabanı ve veri modeli
**Sıradaki bölüm:** Bölüm 12 — Auth: kimlik doğrulama ve yetkilendirme
