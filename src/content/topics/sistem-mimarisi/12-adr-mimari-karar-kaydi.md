---
title: "ADR — mimari karar kaydı"
sectionNumber: "14.12"
category: "sistem-mimarisi"
order: 12
cardCount: 1
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: []
---
**Bu, bölümdeki en doğrudan senin işin olan parça.** Kod yazmadan da yazabilirsin ve yazmak seni teknik masada ciddiye aldırır.

### ADR

- **Terim (İngilizce):** ADR — Architecture Decision Record
- **Türkçesi:** Mimari karar kaydı
- **Tanım:** Alınan bir mimari kararın, gerekçesiyle ve değerlendirilen alternatifleriyle birlikte kaydedildiği kısa belge.
- **Ne işe yarar / neden var:** Altı ay sonra biri "neden bunu seçmişiz?" diye sorduğunda cevap verir. Daha önemlisi: kararın hangi **koşullar altında** alındığını kaydeder — koşullar değiştiğinde kararı yeniden değerlendirmek meşru hâle gelir. ADR olmadan, eski kararlar sorgulanamaz dogmalara dönüşür.
- **Nerede karşına çıkar:** Olgun ekiplerde, depoda `docs/adr/` klasöründe.
- **Örnek kullanım:** "Bu kararı ADR olarak yazalım; altı ay sonra neden böyle yaptığımızı hatırlayalım."
- **İlgili terimler:** Trade-off (14.1), RFC (18.6), Assumption (2.4)

**Tipik ADR iskeleti** (ekipten ekibe değişir ama bu başlıklar çoğunda vardır):

1. **Başlık ve tarih** — "ADR-007: Oturum yönetimi için session tabanlı yaklaşım"
2. **Durum** — önerildi / kabul edildi / reddedildi / yerine ADR-012 geçti
3. **Bağlam** — hangi problemi çözüyoruz, hangi kısıtlar var (ekip büyüklüğü, süre, mevcut sistem)
4. **Değerlendirilen seçenekler** — en az iki, her biri için artı ve eksiler
5. **Karar** — ne seçildi
6. **Gerekçe** — neden bu, neden diğerleri değil
7. **Sonuçlar** — bu karar bize ne getiriyor, neyi zorlaştırıyor, neyi gelecekte yeniden konuşmamız gerekecek

**Neden 4. ve 7. maddeler kritik:** Çoğu ekip yalnızca kararı yazar. Değerlendirilen alternatifleri yazmazsan, yeni gelen biri aynı alternatifi yeniden önerir ve tartışma sıfırdan başlar. Sonuçları yazmazsan, kararın bedelini kimse takip etmez.
