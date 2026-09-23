---
title: "QA ve hata raporu"
sectionNumber: "17.5"
category: "test-ve-kalite"
order: 5
cardCount: 3
sourceFile: "17-test-kalite-ve-kod-sagligi.md"
origin: "material"
flags: []
---
**Bölümün senin için en önemli kısmı.**

### QA süreci

- **Terim (İngilizce):** QA, test case, test plan, exploratory testing
- **Türkçesi:** Kalite güvence, test senaryosu
- **Tanım:** **Test case**, belirli bir durumu adım adım kontrol eden senaryo. **Exploratory testing** ise senaryosuz, keşfederek ve kırmaya çalışarak yapılan test.
- **Ne işe yarar / neden var:** Senaryolu test bilinen davranışları doğrular; keşifsel test **kimsenin düşünmediği durumları** bulur. İkisi farklı şeyler bulur ve ikisi de gerekir.
- **Nerede karşına çıkar:** Staging ortamında (1.8), yayın öncesi.
- **Örnek kullanım:** "Senaryoları geçtik; şimdi yarım saat keşifsel test yapalım, uç durumları kurcalayalım."
- **Karıştırılanlar:** Tasarımcının keşifsel testte avantajı vardır: **uç durumları (4.4) zaten düşünmüş olduğun için** nereyi kurcalayacağını bilirsin — çok uzun isim, boş liste, yavaş bağlantı, geri tuşu, iki kez tıklama.
- **İlgili terimler:** Edge case (4.4), Design review (2.10), Staging (1.8)

### Bug report

- **Terim (İngilizce):** Bug report, reproduce steps, expected vs actual
- **Türkçesi:** Hata raporu, yeniden üretme adımları
- **Tanım:** Bir hatanın, başkasının da görebileceği biçimde kaydedilmesi.
- **Ne işe yarar / neden var:** **Bir hatanın çözülme süresini en çok belirleyen şey, raporun kalitesidir.** "Sayfa bozuk" raporu, geliştiricinin saatlerce tahmin yürütmesine yol açar. İyi bir rapor on dakikada kapanır.
- **Nerede karşına çıkar:** Her gün.
- **Örnek kullanım:** "Raporda yeniden üretme adımları yok; hangi ekranda, hangi kullanıcıyla olduğunu bilmiyoruz."
- **İlgili terimler:** Issue template (15.9), Severity, Edge case (4.4)

**İyi bir hata raporunun bileşenleri:**

| Alan | Ne yazılır |
|---|---|
| **Başlık** | Tek cümlede ne olduğu — "Ödeme adımında kart alanı odak alınca kayboluyor" |
| **Ortam** | Hangi ortam (staging/production), tarayıcı ve sürümü, cihaz, ekran boyutu |
| **Kullanıcı/veri durumu** | Giriş yapılmış mı, hangi rol, hangi veri (boş liste? 200 öğe?) |
| **Yeniden üretme adımları** | Numaralı ve tekrarlanabilir: 1. Şu sayfaya git 2. Şuna tıkla 3. ... |
| **Beklenen sonuç** | Ne olmalıydı |
| **Gerçekleşen sonuç** | Ne oldu |
| **Kanıt** | Ekran görüntüsü, ekran kaydı, konsol hatası |
| **Sıklık** | Her seferinde mi, bazen mi? Bazen ise hangi koşulda? |
| **Etki** | Kaç kullanıcı, hangi akış, iş etkisi ne |

**En sık atlanan üç alan:** ortam bilgisi, sıklık ve kullanıcı/veri durumu. Bir hata yalnızca 200 öğeli listede oluşuyorsa, bu bilgi olmadan geliştirici onu hiç göremez.

**Kısa kural:** Bir hata raporu, onu okuyan kişinin **senin bilgisayarına ihtiyaç duymadan** hatayı kendi ekranında görebilmesini sağlamalıdır.

### Severity vs Priority

- **Terim (İngilizce):** Severity, priority
- **Türkçesi:** Önem derecesi, öncelik
- **Tanım:** **Severity** hatanın ne kadar kötü olduğudur (teknik etki). **Priority** ne zaman düzeltileceğidir (iş kararı).
- **Ne işe yarar / neden var:** İkisi bağımsızdır ve karıştırılır. **Düşük severity + yüksek priority** mümkündür: ana sayfadaki logonun yanlış olması sistemi bozmaz ama hemen düzeltilir. **Yüksek severity + düşük priority** de mümkündür: nadir bir tarayıcıda veri kaybı, kullanıcı sayısı çok azsa sıraya girebilir.
- **Nerede karşına çıkar:** Hata triyajında.
- **Örnek kullanım:** "Severity düşük ama priority yüksek; marka sayfasında ve herkes görüyor."
- **İlgili terimler:** Bug report, Prioritization (2.7), Incident severity (16.9)
