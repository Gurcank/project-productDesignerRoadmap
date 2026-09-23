---
title: "Yaygın problemler"
sectionNumber: "11.9"
category: "veritabani"
order: 9
cardCount: 4
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: []
---
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
