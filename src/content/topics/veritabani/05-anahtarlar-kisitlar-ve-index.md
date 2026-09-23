---
title: "Anahtarlar, kısıtlar ve index"
sectionNumber: "11.5"
category: "veritabani"
order: 5
cardCount: 4
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: []
---
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
