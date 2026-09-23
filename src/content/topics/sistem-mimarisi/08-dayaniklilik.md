---
title: "Dayanıklılık"
sectionNumber: "14.8"
category: "sistem-mimarisi"
order: 8
cardCount: 3
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: []
---
### Single point of failure

- **Terim (İngilizce):** SPOF — Single Point of Failure
- **Türkçesi:** Tek arıza noktası
- **Tanım:** Çöktüğünde tüm sistemi durduran tekil bileşen.
- **Ne işe yarar / neden var:** Mimari diyagramına bakıp "burası çökerse ne olur?" diye sormanın adı. Tek veritabanı, tek gateway, tek ödeme sağlayıcısı — hepsi birer SPOF olabilir.
- **Nerede karşına çıkar:** Mimari incelemelerinde ve olay sonrası analizlerde (16.9).
- **Örnek kullanım:** "Tek bir e-posta sağlayıcımız var; onlar çökerse şifre sıfırlama tamamen durur. Bu bir SPOF."
- **İlgili terimler:** Redundancy, Failover, Graceful degradation

### Redundancy / Failover

- **Terim (İngilizce):** Redundancy, failover, replica
- **Türkçesi:** Yedeklilik, devralma
- **Tanım:** Aynı işi yapabilen birden fazla kopya bulundurmak ve biri çöktüğünde diğerinin devralması.
- **Ne işe yarar / neden var:** SPOF'u ortadan kaldırmanın standart yolu. Bedeli maliyettir: iki kat kaynak, iki kat fatura.
- **Nerede karşına çıkar:** Altyapı kararlarında.
- **Örnek kullanım:** "Veritabanına bir replika ekleyelim; ana çökerse devralsın."
- **İlgili terimler:** SPOF, Availability (14.9), Backup (11.11)

### Graceful degradation

- **Terim (İngilizce):** Graceful degradation
- **Türkçesi:** Zarif bozulma
- **Tanım:** Bir parça çöktüğünde tüm sistemin çökmesi yerine, o parçanın işlevinin devre dışı kalıp geri kalanın çalışmaya devam etmesi.
- **Ne işe yarar / neden var:** **Bu, doğrudan bir tasarım işidir ve bölümün tasarımcıyı en çok ilgilendiren terimi.** Öneri servisi çöktüğünde ürün sayfası çökmemeli, sadece öneriler bölümü görünmemeli veya bir hata kutusu göstermelidir (7.9). Yani "hangi bölüm olmadan bu sayfa hâlâ işe yarar?" sorusu bir tasarım sorusudur.
- **Nerede karşına çıkar:** Hata durumu tasarımında ve dayanıklılık incelemelerinde.
- **Örnek kullanım:** "Yorumlar yüklenmezse sadece o bölüm hata gösterisin, sayfanın tamamı çökmesin."
- **İlgili terimler:** Error state (7.9), Streaming (8.10), Circuit breaker (14.11)
