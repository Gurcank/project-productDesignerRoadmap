---
title: "İlişki türleri"
sectionNumber: "11.6"
category: "veritabani"
order: 6
cardCount: 3
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: []
---
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
