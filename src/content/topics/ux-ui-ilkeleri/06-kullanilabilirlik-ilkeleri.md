---
title: "Kullanılabilirlik ilkeleri"
sectionNumber: "4.6"
category: "ux-ui-ilkeleri"
order: 6
cardCount: 8
sourceFile: "04-ui-ux-surec-ve-ilkeler.md"
origin: "material"
flags: []
---
Bir arayüzün "kullanılabilir" sayılmasının ölçütleri. Bu bölümdeki terimler, tasarım geri bildirimini gerekçelendirmenin dilidir.

### Usability

- **Terim (İngilizce):** Usability
- **Türkçesi:** Kullanılabilirlik
- **Tanım:** Bir ürünün, hedef kullanıcının işini ne kadar kolay, hızlı ve hatasız yapmasına izin verdiği.
- **Ne işe yarar / neden var:** Ölçülebilir bir kavramdır: görev tamamlama oranı, süre, hata sayısı, memnuniyet. Bu yüzden "kullanılabilir değil" cümlesi bir izlenim değil, ölçülebilir bir iddia olabilir.
- **Nerede karşına çıkar:** Test raporlarında ve tasarım savunmalarında.
- **Örnek kullanım:** "Kullanılabilirlik testinde görev tamamlama %40; hedefimiz en az %80'di."
- **Karıştırılanlar:** *Usability* ≠ *UX*. Kullanılabilirlik deneyimin bir bileşenidir; bir ürün kusursuz kullanılabilir ama işe yaramaz olabilir.
- **İlgili terimler:** Usability test (4.10), Heuristic evaluation, a11y (Bölüm 6)

### Nielsen's 10 usability heuristics

- **Terim (İngilizce):** Nielsen's heuristics
- **Türkçesi:** Nielsen sezgisel ilkeleri
- **Tanım:** Bir arayüzü kullanıcı olmadan denetlemeye yarayan on genel ilke.
- **Ne işe yarar / neden var:** Kullanıcı testi zaman ve bütçe ister; bu on ilke, tasarımı masa başında ve ücretsiz denetlemeyi sağlar. Ayrıca geri bildirime ortak bir dil verir: "bu 4 numaraya aykırı" demek, "bana ters geldi" demekten daha tartışılabilirdir.
- **Nerede karşına çıkar:** Tasarım incelemelerinde ve UX işe alım mülakatlarında.
- **Örnek kullanım:** "Heuristic 1'e aykırı: dosya yüklenirken hiçbir geri bildirim yok, kullanıcı işlem olup olmadığını bilmiyor."
- **Karıştırılanlar:** Heuristic evaluation, kullanıcı testinin yerine geçmez. Ayrıca **değerlendirici etkisi** vardır: aynı arayüzü inceleyen iki kişi büyük ölçüde farklı sorunlar bulabilir.
- **İlgili terimler:** Heuristic evaluation, Usability test (4.10)
- **Kaynak:** https://www.nngroup.com/articles/ten-usability-heuristics/ — Jakob Nielsen ve Rolf Molich tarafından 1990'da geliştirildi; Nielsen 1994'te 249 gerçek kullanılabilirlik probleminin faktör analiziyle listeyi bugünkü on maddeye indirdi. Liste 1994'ten beri değişmedi.

**On ilke (Türkçe özetlenmiş hâlleriyle):**

| # | İlke | Pratikte ne demek |
|---|---|---|
| 1 | Visibility of system status | Sistem ne yapıyorsa kullanıcı bilsin: yükleniyor, kaydedildi, gönderildi |
| 2 | Match between system and the real world | Kullanıcının dilini kullan, sistemin iç terimlerini değil |
| 3 | User control and freedom | Geri alma ve çıkış yolu her zaman bulunsun |
| 4 | Consistency and standards | Aynı şey her yerde aynı görünsün; sektör alışkanlıklarına uy |
| 5 | Error prevention | Hatayı düzeltmektense oluşmasını engelle |
| 6 | Recognition rather than recall | Kullanıcı hatırlamak zorunda kalmasın, görsün ve tanısın |
| 7 | Flexibility and efficiency of use | Yeni kullanıcıyı yavaşlatmadan uzmana kısayol ver |
| 8 | Aesthetic and minimalist design | Her eklenen öğe, asıl olanın görünürlüğünü azaltır |
| 9 | Help users recognize, diagnose, recover from errors | Hata mesajı sade dille ne olduğunu ve çözümü söylesin |
| 10 | Help and documentation | Yardım gerekmesin; gerektiğinde de bulunabilir olsun |

### Heuristic evaluation

- **Terim (İngilizce):** Heuristic evaluation
- **Türkçesi:** Sezgisel değerlendirme
- **Tanım:** Birkaç uzmanın arayüzü, belirli ilkelere göre tek tek inceleyip sorun listesi çıkarması.
- **Ne işe yarar / neden var:** Hızlı ve ucuzdur; kullanıcı bulmayı gerektirmez. Genelde birden fazla değerlendiriciyle yapılır, çünkü tek kişi sorunların bir kısmını kaçırır.
- **Nerede karşına çıkar:** Yeni bir ürün devraldığında veya yayına çıkmadan önceki denetimde.
- **Örnek kullanım:** "Heuristic evaluation yaptım: 14 sorun buldum, 4'ü kritik."
- **Karıştırılanlar:** "Beş değerlendirici sorunların çoğunu bulur" yaygın kuralı, Nielsen ve Landauer'in 1993'te kurduğu matematiksel bir modelden gelir. Bu bir **planlama tahminidir, doğa yasası değil** — ve değerlendiriciler arasındaki uyum çalışmalarda çok geniş bir aralıkta çıkmıştır.
- **İlgili terimler:** Nielsen's heuristics, Usability test (4.10)

### Affordance

- **Terim (İngilizce):** Affordance
- **Türkçesi:** Sunum / eylem imkânı
- **Tanım:** Bir nesnenin, kendisiyle ne yapılabileceğini fiziksel veya görsel olarak mümkün kılması.
- **Ne işe yarar / neden var:** Bir kapının kolu çekmeyi, düz plakası itmeyi mümkün kılar. Arayüzde de bir öğenin tıklanabilir, sürüklenebilir veya yazılabilir olduğunun anlaşılması gerekir. Bu anlaşılmıyorsa kullanıcı öğeyi kullanmaz — orada olduğunu görse bile.
- **Nerede karşına çıkar:** Düz (flat) tasarım tartışmalarında sık gündeme gelir: gölge ve kenarlık kaldırıldığında butonun buton olduğu anlaşılmayabilir.
- **Örnek kullanım:** "Bu kart tıklanabilir ama affordance yok; hover'da hiçbir şey değişmiyor, imleç de değişmiyor."
- **Karıştırılanlar:** Don Norman'ın sonraki çalışmalarında ayrım netleştirilir: arayüzde asıl kastedilen çoğu zaman **signifier**'dır — affordance imkânın kendisidir, signifier o imkânı görünür kılan ipucudur.
- **İlgili terimler:** Signifier, Mental model (4.3), Feedback

### Signifier

- **Terim (İngilizce):** Signifier
- **Türkçesi:** Gösterge / ipucu
- **Tanım:** Bir eylemin mümkün olduğunu kullanıcıya söyleyen görsel işaret.
- **Ne işe yarar / neden var:** Alt çizgili mavi metin, imlecin el şekline dönmesi, sürüklenebilir bir öğedeki tutamaç işareti — hepsi signifier'dır. Bunlar olmadan imkân var ama görünmez olur.
- **Nerede karşına çıkar:** Etkileşimli bileşenlerin tasarımında ve erişilebilirlik denetimlerinde.
- **Örnek kullanım:** "Sürüklenebilir olduğunu anlamıyorlar; tutamaç ikonu koyalım, signifier eksik."
- **İlgili terimler:** Affordance, Discoverability (4.3)

### Feedback

- **Terim (İngilizce):** Feedback (system feedback)
- **Türkçesi:** Geri bildirim
- **Tanım:** Kullanıcının yaptığı bir eyleme sistemin verdiği görünür yanıt.
- **Ne işe yarar / neden var:** Yanıt yoksa kullanıcı eylemin gerçekleşip gerçekleşmediğini bilemez ve tekrar dener — çift sipariş, çift ödeme, çift kayıt buradan çıkar. Nielsen'in 1 numaralı ilkesi tam olarak budur.
- **Nerede karşına çıkar:** Buton tıklamalarında, form gönderimlerinde, dosya yüklemelerinde.
- **Örnek kullanım:** "Kaydet'e basınca hiçbir şey olmuyor gibi görünüyor; en azından buton yükleme durumuna geçmeli."
- **İlgili terimler:** Loading state (7.9), Toast (7.8), Micro-interaction (5.9)

### Progressive disclosure

- **Terim (İngilizce):** Progressive disclosure
- **Türkçesi:** Kademeli gösterim
- **Tanım:** Bilgiyi ve seçenekleri hepsini birden değil, ihtiyaç duyuldukça açma yaklaşımı.
- **Ne işe yarar / neden var:** Karmaşıklığı yok etmeden gizler. Yeni kullanıcı sade bir ekran görür, ileri seviye kullanıcı gelişmiş ayarlara ulaşabilir. Accordion, "gelişmiş ayarlar" bölümü ve çok adımlı formlar bu ilkeye dayanır.
- **Nerede karşına çıkar:** Yoğun panellerde, ayar ekranlarında, uzun formlarda.
- **Örnek kullanım:** "Yirmi alanın hepsini göstermeyelim; temel altısını açık bırakıp gerisini progressive disclosure ile açalım."
- **Karıştırılanlar:** Gizlemek her zaman iyi değildir; sık kullanılan bir seçeneği gizlemek keşfedilebilirliği düşürür. Kural: sıklık düşükse gizle, yüksekse gizleme.
- **İlgili terimler:** Accordion (7.5), Cognitive load (4.7), Discoverability (4.3)

### Undo / Forgiveness

- **Terim (İngilizce):** Undo, forgiving design
- **Türkçesi:** Geri alma, affedici tasarım
- **Tanım:** Kullanıcının yaptığı işlemi geri alabilmesi veya hatasının kolayca düzeltilebilmesi.
- **Ne işe yarar / neden var:** Onay diyaloglarına iyi bir alternatiftir. Sürekli "emin misiniz?" sormak kullanıcıyı otomatik onaylamaya alıştırır ve koruma işlevini kaybeder; geri alınabilir bir işlem, hem hızlı hem güvenlidir. Nielsen'in 3 numaralı ilkesi.
- **Nerede karşına çıkar:** Silme işlemlerinde, toplu düzenlemelerde.
- **Örnek kullanım:** "Onay diyaloğu yerine silelim ve 5 saniye geri al seçeneği olan bir toast gösterelim."
- **İlgili terimler:** Toast (7.8), Confirm dialog (7.8), Error prevention
