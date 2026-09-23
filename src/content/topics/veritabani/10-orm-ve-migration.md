---
title: "ORM ve migration"
sectionNumber: "11.10"
category: "veritabani"
order: 10
cardCount: 4
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: ["degisken"]
---
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
