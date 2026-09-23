---
title: "Değerlendirme yöntemleri"
sectionNumber: "4.10"
category: "ux-ui-ilkeleri"
order: 10
cardCount: 7
sourceFile: "04-ui-ux-surec-ve-ilkeler.md"
origin: "material"
flags: ["degisken"]
---
Tasarımın işe yarayıp yaramadığını ölçme yolları. İkiye ayrılır: **nitel** yöntemler "neden" sorusunu, **nicel** yöntemler "ne kadar" sorusunu cevaplar. Biri diğerinin yerine geçmez.

### Usability test

- **Terim (İngilizce):** Usability test
- **Türkçesi:** Kullanılabilirlik testi
- **Tanım:** Gerçek kullanıcılara belirli görevler verip, yaparken izleyerek sorunları tespit etme yöntemi.
- **Ne işe yarar / neden var:** Ekibin göremediği şeyi gösterir: ekibi ürünü zaten bildiği için sorunlara kör olur. **Moderated** (biri yönetir, soru sorabilir) ve **unmoderated** (kullanıcı tek başına yapar, kayıt izlenir) türleri vardır. Katılımcıdan yüksek sesle düşünmesi istenir (think-aloud), çünkü nerede duraksadığı kadar **neden** duraksadığı da önemlidir.
- **Nerede karşına çıkar:** Prototip aşamasında ve yayın sonrası iyileştirmede.
- **Örnek kullanım:** "Beş kişiyle moderated test yapalım; görev, kayıt olup ilk projeyi oluşturmak olsun."
- **Karıştırılanlar:** Kullanıcıya "bunu beğendin mi?" diye sormak test değildir. Test, **görev verip davranışı gözlemlemektir**; beyan edilen tercih ile gerçek davranış sık sık ayrışır.
- **İlgili terimler:** Örneklem büyüklüğü, Prototype (4.5), Guerrilla testing

### Kaç kullanıcıyla test edilir

- **Terim (İngilizce):** "5 user rule"
- **Türkçesi:** Beş kullanıcı kuralı
- **Tanım:** Kullanılabilirlik testinde beş kullanıcının sorunların büyük kısmını ortaya çıkardığını söyleyen yaygın kural.
- **Ne işe yarar / neden var:** Test yapmanın önündeki "yeterli katılımcı bulamayız" bahanesini kaldırır. Nielsen'in önerisi aslında "tek büyük test yerine küçük ve sık testler" yapmaktır.
- **Nerede karşına çıkar:** Araştırma planlaması yapılırken.
- **Örnek kullanım:** "Tek seferde 15 kişi yerine, üç turda beşer kişiyle test edip arada düzeltelim."
- **Karıştırılanlar:** **Kuralın sınırları, kuralın kendisinden daha önemli.** Üç kayıt: (1) Nielsen'in kendi yazısı, birbirinden belirgin şekilde farklı kullanıcı grupları varsa her grup için ayrı test gerektiğini söyler. (2) Rakam, Nielsen ve Landauer'in 1993'te kurduğu bir modelden gelir ve sabit bir problem bulma oranı varsayar. (3) Faulkner'in 2003'teki çalışmasında 60 kullanıcı test edilip rastgele beşerli gruplar örneklendiğinde, bazı beşli gruplar sorunların %99'unu, bazıları ise yalnızca %55'ini bulmuştur; 10 kullanıcıda en kötü sonuç %80'e, 20 kullanıcıda %95'e yükselmiştir. Yani beş kişi **ortalama** iyi sonuç verir, **garanti** vermez.
- **İlgili terimler:** Usability test, Heuristic evaluation (4.6)
- **Kaynak:** https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/ ve Faulkner, L. (2003), *Beyond the five-user assumption*, Behavior Research Methods, Instruments, & Computers 35(3).

### Guerrilla testing

- **Terim (İngilizce):** Guerrilla testing, hallway testing
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Resmî bir kurulum olmadan, eldeki insanlarla hızlıca yapılan enformel test.
- **Ne işe yarar / neden var:** Sıfır teste kıyasla muazzam bir kazançtır. Bariz sorunlar birkaç dakikada ortaya çıkar.
- **Nerede karşına çıkar:** Küçük ekiplerde ve bütçesiz projelerde.
- **Örnek kullanım:** "Resmî test için vaktimiz yok; ofiste üç kişiye 10 dakika gösterip bariz sorunları yakalayalım."
- **Karıştırılanlar:** Katılımcılar hedef kullanıcı değilse sonuçlar yanıltıcı olabilir; özellikle alan bilgisi gerektiren ürünlerde.
- **İlgili terimler:** Usability test, Dogfooding (2.11)

### A/B test

- **Terim (İngilizce):** A/B test (split test)
- **Türkçesi:** A/B testi
- **Tanım:** Kullanıcıların bir kısmına A sürümünü, bir kısmına B sürümünü göstererek hangisinin daha iyi sonuç verdiğini ölçme yöntemi.
- **Ne işe yarar / neden var:** Tartışmayı veriyle bitirir. Ama ön koşulları vardır: yeterli trafik, önceden belirlenmiş tek bir başarı metriği ve testin istatistiksel olarak anlamlı sonuca ulaşması. Düşük trafikte A/B test yapmak, gürültüyü sonuç sanmaya yol açar.
- **Nerede karşına çıkar:** Dönüşüm optimizasyonunda, landing page ve fiyatlandırma denemelerinde.
- **Örnek kullanım:** "Buton metnini A/B test edelim ama önce hipotezi ve metriği yazalım; sonuca bakıp yorum uydurmayalım."
- **Karıştırılanlar:** *A/B test* ≠ *multivariate test*. A/B testte iki bütün sürüm karşılaştırılır; multivariate testte birden fazla değişkenin kombinasyonları test edilir ve çok daha fazla trafik gerektirir.
- **İlgili terimler:** Hypothesis (2.3), Baseline (3.7), Success metric (3.7), Feature flag (16.8)

### Funnel

- **Terim (İngilizce):** Funnel (conversion funnel)
- **Türkçesi:** Dönüşüm hunisi
- **Tanım:** Kullanıcının bir hedefe ulaşırken geçtiği adımların, her adımda kaç kişinin kaldığını gösteren analizi.
- **Ne işe yarar / neden var:** Kaybın **nerede** olduğunu gösterir. "Dönüşüm düşük" bilgisi işe yaramaz; "kayıp %60 ikinci adımda" bilgisi doğrudan bir tasarım işine dönüşür.
- **Nerede karşına çıkar:** Analitik panellerinde ve dönüşüm çalışmalarında.
- **Örnek kullanım:** "Funnel'da en büyük kayıp kart bilgisi adımında; oraya güven işaretleri ve iptal politikası bilgisi ekleyelim."
- **İlgili terimler:** User flow (4.4), Analytics (16.11), Success metric (3.7)

### Heatmap / Session recording

- **Terim (İngilizce):** Heatmap, session recording
- **Türkçesi:** Isı haritası, oturum kaydı
- **Tanım:** Heatmap = tıklama ve kaydırma yoğunluğunun renkli görselleştirmesi. Session recording = gerçek kullanıcı oturumlarının anonim tekrar izlenmesi.
- **Ne işe yarar / neden var:** Nicel veri "nerede" der, bu araçlar "nasıl" der. Tıklanamayan bir öğeye yapılan tıklamalar, sayfanın hiç aşağı kaydırılmaması gibi bulgular buradan çıkar.
- **Nerede karşına çıkar:** Hotjar, Clarity, Microsoft Clarity benzeri araçlarda. `[DEĞİŞKEN BİLGİ]` Araç isimleri ve fiyatlandırmaları değişir.
- **Örnek kullanım:** "Heatmap'te kullanıcılar başlığa tıklıyor; tıklanabilir sanıyorlar, ya link yapalım ya görünümünü değiştirelim."
- **Karıştırılanlar:** Bu araçlar kişisel veri toplayabilir; KVKK/GDPR açısından form alanlarının maskelenmesi ve aydınlatma gereklidir (13.10).
- **İlgili terimler:** Funnel, Analytics (16.11), Affordance (4.6)

### Survey / SUS / NPS

- **Terim (İngilizce):** Survey, SUS (System Usability Scale), NPS (Net Promoter Score)
- **Türkçesi:** Anket, sistem kullanılabilirlik ölçeği, net tavsiye skoru
- **Tanım:** Kullanıcıya doğrudan soru sorarak veri toplama yöntemleri. SUS standart 10 soruluk bir kullanılabilirlik ölçeğidir; NPS tek soruyla tavsiye etme eğilimini ölçer.
- **Ne işe yarar / neden var:** Zaman içinde karşılaştırılabilir bir sayı üretir. Standart ölçekler (SUS gibi) kendi ürününün geçmişiyle karşılaştırma imkânı verir.
- **Nerede karşına çıkar:** Yayın sonrası ölçümde ve müşteri memnuniyeti raporlarında.
- **Örnek kullanım:** "Yeniden tasarımdan önce ve sonra SUS uygulayalım; öznel değerlendirmenin değişip değişmediğini görelim."
- **Karıştırılanlar:** Anketler **beyanı** ölçer, davranışı değil. Kullanıcı "kolaydı" diyebilir ama testte görevi tamamlayamamış olabilir. NPS ayrıca çokça eleştirilir; tek sayıya indirgemesi nedeniyle nedenini açıklamaz.
- **İlgili terimler:** Usability test, Vanity metric (3.7), Insight (2.4)
