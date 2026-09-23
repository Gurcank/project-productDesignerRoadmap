# Bölüm 4 — UI/UX: süreç ve ilkeler

Bu bölüm senin ana alanın. Amacı, şu ana kadar sezgiyle yaptığın şeylerin adını ve gerekçesini vermek.

Fark şurada: "burası biraz boş duruyor" demek bir izlenimdir, tartışılamaz. "Bu bölümde görsel hiyerarşi yok; birincil eylem ikincil eylemle aynı ağırlıkta, bu yüzden göz nereye gideceğini bilmiyor" demek bir argümandır, savunulabilir. İkinci cümleyi kurabilen tasarımcı, kararını zevk tartışmasından çıkarır.

Bir uyarı: bu bölümdeki "yasalar" fizik yasası değildir. Çoğu, belirli koşullarda yapılmış psikoloji çalışmalarından türetilmiş ve zamanla sloganlaştırılmıştır. Nerede yanlış uygulandıklarını da yazıyorum — çünkü bir kuralı yanlış yerde kullanmak, hiç bilmemekten daha kötü sonuç verebilir.

---

## 4.1 Disiplinlerin ayrımı

Bu terimler günlük konuşmada birbirinin yerine kullanılır ve bu bir sorun değildir. Ama ne zaman gerçekten farklı şeyleri kastettiklerini bilmek, iş ilanlarını okurken ve ekipte kimin ne yaptığını anlarken işini görür.

### UX

- **Terim (İngilizce):** UX — User Experience
- **Türkçesi:** Kullanıcı deneyimi
- **Tanım:** Bir kişinin bir ürün veya hizmetle kurduğu ilişkinin bütünü — sadece ekranlar değil, bekleme süreleri, e-postalar, destek görüşmesi ve sonrasındaki his dahil.
- **Ne işe yarar / neden var:** Deneyimin ekranlarda bitmediğini hatırlatır. Kusursuz bir arayüz, onay e-postası 20 dakika geç geliyorsa kötü bir deneyim üretir. Bu, tasarımcının sorumluluk alanını arayüzün ötesine taşır.
- **Nerede karşına çıkar:** İş ilanlarında en yaygın kısaltma. Ayrıca çok gevşek kullanılır: "UX iyileştirme" cümlesi bazen sadece "butonu büyütelim" demektir.
- **Örnek kullanım:** "Arayüz temiz ama UX kötü; kullanıcı işlemi bitirdikten sonra ne olduğunu anlamıyor."
- **Karıştırılanlar:** *UX* ≠ *UI*. UI, UX'in bir parçasıdır; UX ondan geniştir. "UX/UI Designer" ifadesi bu ikisini bir arada yapan kişiyi anlatır ama teknik olarak farklı kapsamlardır.
- **İlgili terimler:** UI, Product Design (2.1), User journey (2.4), Service Design

### UI

- **Terim (İngilizce):** UI — User Interface
- **Türkçesi:** Kullanıcı arayüzü
- **Tanım:** Kullanıcının ürünle etkileştiği görsel ve etkileşimsel katman: ekranlar, butonlar, tipografi, renk, hareket.
- **Ne işe yarar / neden var:** Soyut bir akışı, dokunulabilir ve anlaşılabilir bir yüzeye çevirir. İyi bir UI, doğru kurgulanmış bir akışı hızlandırır; kötü bir UI, doğru akışı bile kullanılamaz hâle getirir.
- **Nerede karşına çıkar:** Tasarım tesliminde ve görsel geri bildirimlerde.
- **Örnek kullanım:** "Akış doğru ama UI'da hiyerarşi yok; üç buton da aynı ağırlıkta duruyor."
- **İlgili terimler:** UX, Visual design, Design system (Bölüm 5)

### Interaction Design

- **Terim (İngilizce):** Interaction Design — IxD
- **Türkçesi:** Etkileşim tasarımı
- **Tanım:** Kullanıcının bir eylemi ile sistemin verdiği tepki arasındaki ilişkiyi tasarlama disiplini.
- **Ne işe yarar / neden var:** "Tıklayınca ne olacak" sorusunun tasarımıdır: bekleme sırasında ne görünür, hata olursa ne olur, geri alınabilir mi, geçiş nasıl olur. Statik ekran çizmekle bitmeyen kısım burasıdır ve en sık atlanan kısımdır.
- **Nerede karşına çıkar:** Prototip hazırlarken ve handoff'ta durum tanımları yazarken.
- **Örnek kullanım:** "IxD tarafı eksik: kaydet butonuna basınca ne olduğunu, hata durumunda ne göründüğünü tanımlamamışız."
- **İlgili terimler:** Micro-interaction (5.9), Feedback (4.6), Loading state (7.9)

### Visual Design

- **Terim (İngilizce):** Visual design
- **Türkçesi:** Görsel tasarım
- **Tanım:** Tipografi, renk, boşluk, görsel ve hiyerarşi kararlarının verildiği katman.
- **Ne işe yarar / neden var:** Görsel karar sadece estetik değildir; hiyerarşi kurar, okunabilirliği belirler, güven duygusunu etkiler. Bir ürünün "ciddi" veya "amatör" görünmesi bu katmanda oluşur.
- **Nerede karşına çıkar:** Tasarım incelemelerinde ve marka konuşmalarında.
- **Örnek kullanım:** "Visual design tarafında sorun yok, sorun akışta."
- **Karıştırılanlar:** *Visual design* ≠ *dekorasyon*. Görsel kararların işlevi vardır; kontrast bir okunabilirlik meselesidir, tercih meselesi değildir.
- **İlgili terimler:** UI, Visual hierarchy (4.8), Bölüm 5

### Service Design

- **Terim (İngilizce):** Service design
- **Türkçesi:** Hizmet tasarımı
- **Tanım:** Bir hizmetin, kullanıcı tarafındaki ve arka taraftaki tüm parçalarının birlikte tasarlanması.
- **Ne işe yarar / neden var:** Bazı deneyim sorunları ekranda çözülemez; süreçte, personelde veya politikada çözülür. "İade süreci kötü" sorununun cevabı çoğu zaman iade sayfasının tasarımı değil, iade politikasıdır.
- **Nerede karşına çıkar:** Bankacılık, sağlık, kamu ve perakende projelerinde. Service blueprint denilen, ön yüzü ve arka yüzü aynı haritada gösteren çıktı bu disiplinden gelir.
- **Örnek kullanım:** "Bu bir arayüz sorunu değil, service design sorunu; destek ekibinin elinde bu bilgi yok."
- **İlgili terimler:** User journey (2.4), UX

---

## 4.2 Tasarım süreci

Tasarımın nasıl ilerlediğine dair ortak dil. Bu modellerin hepsi aynı temel fikrin farklı ambalajlarıdır: **önce genişle, sonra daralt; bunu iki kez yap — bir kez problem için, bir kez çözüm için.**

### Divergent / Convergent thinking

- **Terim (İngilizce):** Divergent thinking, Convergent thinking
- **Türkçesi:** Iraksak düşünme, yakınsak düşünme
- **Tanım:** Divergent = seçenekleri çoğaltma. Convergent = seçenekleri eleyip karara varma.
- **Ne işe yarar / neden var:** İkisini aynı anda yapmak, ikisini de bozar. Fikir üretirken eleştirmek fikirleri öldürür; karar verirken yeni fikir eklemek kararı geciktirir. Toplantıların dağılmasının en yaygın sebebi bu iki modun karışmasıdır.
- **Nerede karşına çıkar:** Beyin fırtınası ve karar toplantılarında. İyi kolaylaştırıcı bu iki modu açıkça ayırır.
- **Örnek kullanım:** "Şu an divergent moddayız, fikirleri eleştirmeyelim; elemeyi yarım saat sonra yapacağız."
- **İlgili terimler:** Double Diamond, Design critique, Ideation

### Double Diamond

- **Terim (İngilizce):** Double Diamond
- **Türkçesi:** Çift elmas modeli
- **Tanım:** Tasarım sürecini dört faza bölen model: **Discover, Define, Develop, Deliver.** İlk elmas problem alanını, ikinci elmas çözüm alanını temsil eder.
- **Ne işe yarar / neden var:** En sık yapılan tasarım hatasını engellemeyi hedefler: doğru çözümü yanlış problem için üretmek. İlk elmasın sonunda **problemin ne olduğunu**, ikinci elmasın sonunda **nasıl çözüleceğini** bilirsin. Her elmas önce genişler (divergent), sonra daralır (convergent).
- **Nerede karşına çıkar:** Tasarım süreçlerini anlatan hemen her sunumda. Ajanslarda müşteriye süreç anlatırken standart görsel.
- **Örnek kullanım:** "Henüz ilk elmastayız; çözüm konuşmak için erken, önce problemi netleştirelim."
- **Karıştırılanlar:** Doğrusal bir süreç değildir; Design Council'ın kendi açıklaması da geri dönüşlerin normal olduğunu belirtir. Ayrıca *Double Diamond* ≠ *Design Thinking*: ikisi akraba modellerdir, Double Diamond problem/çözüm ayrımını daha net vurgular.
- **İlgili terimler:** Divergent/Convergent, Discovery (2.3), Problem statement (2.3)
- **Kaynak:** https://www.designcouncil.org.uk/resources/the-double-diamond/ — British Design Council tarafından geliştirildi. `[EMİN DEĞİLİM]` Kaynaklar tarih için 2004 ve 2005'i birlikte anıyor; kesin yılı doğrulamadım. 2019'da "Framework for Innovation" adıyla güncellenmiş bir sürümü de var.

### Design Thinking

- **Terim (İngilizce):** Design Thinking
- **Türkçesi:** Tasarım odaklı düşünme
- **Tanım:** Problem çözmeye kullanıcıdan başlayan, hızlı prototipleme ve test üzerine kurulu yaklaşım. Yaygın beş adımlı hâli: empathize, define, ideate, prototype, test.
- **Ne işe yarar / neden var:** Tasarımcı olmayanlara tasarım yaklaşımını öğretmek için paketlenmiştir. Bu aynı zamanda eleştirilerinin de kaynağıdır: karmaşık tasarım işini beş yapışkan-not adımına indirgediği söylenir.
- **Nerede karşına çıkar:** Kurumsal atölyelerde ve yönetici eğitimlerinde çok yaygın. Tasarımcılar arasında ise ihtiyatlı karşılanır.
- **Örnek kullanım:** "Design thinking atölyesi yaptık ama çıkan fikirler test edilmedi; süreç yarım kaldı."
- **İlgili terimler:** Double Diamond, Design sprint

### Design sprint

- **Terim (İngilizce):** Design sprint
- **Türkçesi:** Tasarım sprinti
- **Tanım:** Bir problemi anlama, çözüm üretme, prototipleme ve test etmeyi birkaç güne sıkıştıran yoğun çalışma formatı.
- **Ne işe yarar / neden var:** Uzun süren tartışmaları kesip somut bir yanıt üretir. Aylarca konuşulan bir fikir, bir hafta içinde kullanıcı karşısına çıkar.
- **Nerede karşına çıkar:** Yeni ürün fikirlerinde ve tıkanmış tartışmalarda. Google Ventures'ın beş günlük formatı en bilinen sürümüdür.
- **Örnek kullanım:** "Üç aydır bu özelliği tartışıyoruz; bir design sprint yapıp prototiple test edelim."
- **Karıştırılanlar:** *Design sprint* ≠ *Scrum sprint* (3.2). Aynı kelime, tamamen farklı şey.
- **İlgili terimler:** Prototype (4.5), Usability test (4.10), Timebox (3.3)

### Ideation

- **Terim (İngilizce):** Ideation
- **Türkçesi:** Fikir üretme
- **Tanım:** Bir problem için çok sayıda çözüm seçeneği üretme aşaması.
- **Ne işe yarar / neden var:** İlk akla gelen fikir nadiren en iyisidir. Çokluk, seçim yapabilmenin ön koşuludur. "Crazy 8s" (8 dakikada 8 eskiz) gibi teknikler, niteliği değil niceliği zorlayarak alışılmış çözümün dışına çıkmayı hedefler.
- **Nerede karşına çıkar:** Atölyelerde ve tasarım sürecinin başında.
- **Örnek kullanım:** "Tek yön getirmeyelim; ideation'da en az üç farklı yaklaşım çıkaralım."
- **İlgili terimler:** Divergent thinking, Design sprint

### Design critique

- **Terim (İngilizce):** Design critique — crit
- **Türkçesi:** Tasarım eleştirisi
- **Tanım:** Bir tasarımın, hedeflere göre ekip tarafından yapılandırılmış biçimde değerlendirildiği oturum.
- **Ne işe yarar / neden var:** Geri bildirimi "beğendim/beğenmedim"den çıkarır. İyi bir crit'te tasarımcı önce bağlamı ve hedefi anlatır, sonra geri bildirim o hedefe göre verilir. Bu yapı olmadan toplantı zevk tartışmasına döner.
- **Nerede karşına çıkar:** Tasarım ekiplerinin haftalık ritüeli.
- **Örnek kullanım:** "Crit'e getirirken hedefi de yaz: bu ekranın amacı kayıt oranını artırmak, estetik değil."
- **Karıştırılanlar:** *Design critique* (süreç içi, ekip içi, iyileştirme amaçlı) ≠ *design review* (2.10) (uygulanan işin tasarıma uygunluk kontrolü).
- **İlgili terimler:** Design review (2.10), Retrospective (3.2)

---

## 4.3 Bilgi mimarisi (IA)

İçeriğin nasıl düzenleneceği ve isimlendirileceği. Görünmez bir katmandır: iyi yapıldığında kimse fark etmez, kötü yapıldığında kullanıcı aradığını bulamaz ve bunu "site kötü" diye ifade eder.

### Information Architecture

- **Terim (İngilizce):** Information Architecture — IA
- **Türkçesi:** Bilgi mimarisi
- **Tanım:** İçeriğin nasıl gruplandığı, adlandırıldığı ve birbirine bağlandığına dair yapı.
- **Ne işe yarar / neden var:** Bulunabilirliği belirler. Görsel tasarımdan **önce** gelir: yapı yanlışsa hiçbir görsel çözüm onu kurtarmaz. Bir menüyü güzelleştirmek, yanlış gruplanmış içeriği doğru yapmaz.
- **Nerede karşına çıkar:** Yeni site kurgusunda ve "kullanıcılar X'i bulamıyor" şikâyetlerinde.
- **Örnek kullanım:** "Sorun menü tasarımında değil, IA'da; 'Çözümler' ve 'Ürünler' başlıkları altında aynı şeyler var."
- **İlgili terimler:** Sitemap, Taxonomy, Navigation, Card sorting

### Sitemap

- **Terim (İngilizce):** Sitemap
- **Türkçesi:** Site haritası
- **Tanım:** Bir sitedeki tüm sayfaların ve aralarındaki hiyerarşinin şeması.
- **Ne işe yarar / neden var:** Kapsamı görünür kılar. Kaç sayfa tasarlanacağı, hangi sayfaların hangisinin altında olduğu ve kaç seviye derinlik olduğu burada netleşir. Tasarıma başlamadan önceki ilk çıktı.
- **Nerede karşına çıkar:** Proje başlangıcında. Ayrıca teknik bir karşılığı vardır: `sitemap.xml` arama motorları için üretilen makine okunur dosyadır (8.13) — aynı isim, farklı şey.
- **Örnek kullanım:** "Sitemap'i çıkardık: 4 ana bölüm, toplam 23 sayfa, en fazla 3 seviye derinlik."
- **İlgili terimler:** IA, Navigation, sitemap.xml (8.13)

### Taxonomy

- **Terim (İngilizce):** Taxonomy
- **Türkçesi:** Sınıflandırma
- **Tanım:** İçeriğin hangi kategorilere ve etiketlere göre düzenleneceğini belirleyen sistem.
- **Ne işe yarar / neden var:** Filtreleme, arama ve gezinme bunun üstüne kurulur. Kategoriler örtüşürse ("Elbise" ve "Yazlık" ayrı üst kategoriyse) kullanıcı hangi yoldan gideceğini bilemez.
- **Nerede karşına çıkar:** E-ticaret ve içerik yoğun sitelerde. CMS'te alan yapısı kurulurken.
- **Örnek kullanım:** "Taksonomiyi düzeltmeden filtre tasarlamak anlamsız; kategoriler birbirinin içine giriyor."
- **İlgili terimler:** IA, Filter/Facet (7.10), Labeling

### Card sorting

- **Terim (İngilizce):** Card sorting
- **Türkçesi:** Kart gruplama
- **Tanım:** Kullanıcılardan içerik başlıklarını kendi mantıklarına göre gruplamalarını isteyen araştırma yöntemi.
- **Ne işe yarar / neden var:** IA'yı ekibin değil kullanıcının zihinsel modeline göre kurmayı sağlar. Ekip içeriği kendi organizasyon şemasına göre gruplama eğilimindedir — kullanıcı o şemayı bilmez.
- **Nerede karşına çıkar:** IA çalışmasının başında. **Open** card sorting'de kullanıcı kategori adlarını kendisi koyar; **closed**'da hazır kategorilere yerleştirir.
- **Örnek kullanım:** "Card sorting'de 8 kişiden 6'sı 'Faturalar'ı 'Hesabım' altına koydu; menüyü ona göre değiştirelim."
- **İlgili terimler:** Tree testing, IA, Mental model

### Tree testing

- **Terim (İngilizce):** Tree testing
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Kullanıcıya sadece menü yapısını (görsel tasarım olmadan) gösterip bir şeyi bulmasını isteyen test.
- **Ne işe yarar / neden var:** Bulunabilirlik sorununun yapıdan mı yoksa görsel tasarımdan mı kaynaklandığını ayırır. Görsel olmadan test edildiği için sonucun tek sorumlusu IA'dır.
- **Nerede karşına çıkar:** Card sorting'den sonra, yapıyı doğrulamak için.
- **Örnek kullanım:** "Tree testing'de kullanıcıların %70'i iade sayfasını ilk denemede bulamadı."
- **İlgili terimler:** Card sorting, IA, Findability

### Mental model

- **Terim (İngilizce):** Mental model
- **Türkçesi:** Zihinsel model
- **Tanım:** Kullanıcının bir sistemin nasıl çalıştığına dair kafasındaki tahmin.
- **Ne işe yarar / neden var:** Kullanıcı, ürünü kendi zihinsel modeline göre kullanır. Model ile gerçek arasındaki fark büyükse hata yapar ve şaşırır. İyi tasarımın işi ya modele uymak ya da modeli açıkça değiştirmektir.
- **Nerede karşına çıkar:** Kullanıcı testlerinde en sık gözlenen şey budur: kullanıcı beklediği yerde beklediği şeyi bulamaz.
- **Örnek kullanım:** "Kullanıcının zihinsel modelinde 'kaydet' kalıcı demek; bizim ürünümüzde taslak demek. Adlandırmayı değiştirelim."
- **İlgili terimler:** Jakob's law (4.7), Affordance (4.6), Card sorting

### Findability / Discoverability

- **Terim (İngilizce):** Findability, Discoverability
- **Türkçesi:** Bulunabilirlik, keşfedilebilirlik
- **Tanım:** Findability = aradığı şeyi bulabilme. Discoverability = varlığından haberi olmadığı şeyi fark edebilme.
- **Ne işe yarar / neden var:** İkisi farklı problemlerdir ve farklı çözümler gerektirir. Aradığını bulamıyorsa arama ve navigasyon sorunu; var olduğunu bilmiyorsa tanıtım, boş ekran veya onboarding sorunu.
- **Nerede karşına çıkar:** Özellik kullanım oranları düşük olduğunda. Ekipler bunu genelde "özellik kötü" diye yorumlar; çoğu zaman keşfedilebilirlik sorunudur.
- **Örnek kullanım:** "Özelliği kullanan %3; kullananlar memnun. Bu bir discoverability sorunu, kalite sorunu değil."
- **İlgili terimler:** IA, Empty state (7.9), Onboarding (7.12)

---

## 4.4 Akışlar

Kullanıcının bir hedefe ulaşmak için attığı adımların haritası. Ekran çizmeden önce yapılan iş budur; ekranlar akışın çıktısıdır, girdisi değil.

### User flow

- **Terim (İngilizce):** User flow
- **Türkçesi:** Kullanıcı akışı
- **Tanım:** Kullanıcının bir hedefe ulaşırken geçtiği ekranların, kararların ve dallanmaların şeması.
- **Ne işe yarar / neden var:** Eksik ekranları ve düşünülmemiş durumları önceden ortaya çıkarır. Ekran ekran tasarlarsan aradaki geçişleri ve istisnaları kaçırırsın; akış çizersen kaçıramazsın çünkü her dallanma bir kutu ister.
- **Nerede karşına çıkar:** Tasarımın ilk çıktısı. Figma, FigJam, Whimsical gibi araçlarda çizilir.
- **Örnek kullanım:** "Akışı çizince fark ettik: kullanıcı e-postasını doğrulamadan ödeme adımına geçebiliyor."
- **Karıştırılanlar:** *User flow* ürün içindeki adımları gösterir; *user journey* (2.4) ürün dışını ve duyguyu da kapsar.
- **İlgili terimler:** Task flow, Happy path, Edge case

### Task flow

- **Terim (İngilizce):** Task flow
- **Türkçesi:** Görev akışı
- **Tanım:** Tek bir görevin, dallanma olmadan, doğrusal adımları.
- **Ne işe yarar / neden var:** User flow dallanmaları içerir ve karmaşıktır; task flow bir görevin en kısa hâlini gösterir. Adım sayısını azaltma çalışmalarında bu basit hâl kullanılır.
- **Nerede karşına çıkar:** Akış sadeleştirme çalışmalarında.
- **Örnek kullanım:** "Task flow şu an 6 adım; 4'e indirebilir miyiz?"
- **İlgili terimler:** User flow, Happy path

### Happy path

- **Terim (İngilizce):** Happy path
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "ideal akış" denir.
- **Tanım:** Her şeyin yolunda gittiği, hata olmayan, veri eksiksiz olan senaryo.
- **Ne işe yarar / neden var:** Tasarımın ve demoların başlangıç noktası. Tehlikesi de budur: çoğu ekip sadece happy path'i tasarlar ve gerçek kullanımda ortaya çıkan durumların tasarımı yapılmadan kalır. Bu, tasarımcının en sık yaptığı eksiklik.
- **Nerede karşına çıkar:** Demo ve sunumlarda. "Bu sadece happy path" bir uyarı cümlesidir.
- **Örnek kullanım:** "Happy path hazır; şimdi boş, hata ve yükleme durumlarını da tasarlamamız lazım."
- **İlgili terimler:** Edge case, Error path, Durum ekranları (7.9)

### Edge case

- **Terim (İngilizce):** Edge case
- **Türkçesi:** Uç durum
- **Tanım:** Nadiren oluşan ama oluştuğunda tasarımı bozan durum.
- **Ne işe yarar / neden var:** Nadir olması önemsiz olduğu anlamına gelmez; o duruma düşen kullanıcı için tek gerçek odur. Tipik uç durumlar: çok uzun isim, tek karakterlik metin, 999 bildirim, sıfır sonuç, çok yavaş bağlantı, hiç görsel yüklenmemiş, çok küçük ekran, çok büyük ekran.
- **Nerede karşına çıkar:** Tasarım incelemelerinde ve QA'in bulduğu hatalarda.
- **Örnek kullanım:** "Edge case: kullanıcı adı 40 karakter olursa kart taşıyor. Kırpma kuralı belirleyelim."
- **Karıştırılanlar:** *Edge case* ≠ *bug*. Edge case tasarlanmamış bir durumdur; bug yanlış çalışan bir şeydir. Tasarlanmamış uç durum genelde bug'a dönüşür.
- **İlgili terimler:** Happy path, Error state (7.9), Acceptance criteria (2.6)

### Error path

- **Terim (İngilizce):** Error path
- **Türkçesi:** Hata akışı
- **Tanım:** Bir şey ters gittiğinde kullanıcının izleyeceği yol.
- **Ne işe yarar / neden var:** Kullanıcıyı çıkmazda bırakmamayı sağlar. Her hata ekranının cevaplaması gereken üç soru vardır: **ne oldu, neden oldu, şimdi ne yapmalıyım.** Üçüncüsü en sık atlanandır ve en önemlisidir.
- **Nerede karşına çıkar:** Form tasarımında, ödeme akışlarında, bağlantı kopmalarında.
- **Örnek kullanım:** "Error path'te sadece 'bir hata oluştu' yazıyor; kullanıcıya ne yapacağını söylemiyoruz."
- **İlgili terimler:** Error state (7.9), UX writing (4.9), Nielsen heuristics (4.6)

### Dead end

- **Terim (İngilizce):** Dead end
- **Türkçesi:** Çıkmaz
- **Tanım:** Kullanıcının devam edecek hiçbir eylem bulamadığı ekran.
- **Ne işe yarar / neden var:** 404 sayfaları, boş sonuç ekranları ve hata ekranları en sık çıkmaza dönüşen yerlerdir. Kural basit: **her ekranda ileri götüren en az bir yol olmalı.**
- **Nerede karşına çıkar:** Tasarım denetimlerinde.
- **Örnek kullanım:** "Arama sonucu boşsa ekran çıkmaz oluyor; öneri listesi veya filtre temizleme butonu koyalım."
- **İlgili terimler:** Empty state (7.9), 404 (7.9), Error path

---

## 4.5 Çıktılar: wireframe, mockup, prototype

Tasarım sürecinin farklı aşamalarında üretilen belgeler. Aralarındaki fark **detay seviyesi** (fidelity) ve **amaç**tır; ikisini karıştırmak yanlış aşamada yanlış geri bildirim almaya yol açar.

### Fidelity

- **Terim (İngilizce):** Fidelity (lo-fi, hi-fi)
- **Türkçesi:** Detay/gerçeklik seviyesi
- **Tanım:** Bir çıktının nihai ürüne ne kadar benzediği.
- **Ne işe yarar / neden var:** Detay seviyesi, alınacak geri bildirimin türünü belirler. Kutu ve çizgilerden oluşan bir eskiz gösterirsen yapı hakkında konuşulur; gerçekçi bir ekran gösterirsen renk ve font hakkında konuşulur — yapı tartışması kapanır. Bu yüzden erken aşamada bilinçli olarak düşük detay kullanılır.
- **Nerede karşına çıkar:** Her tasarım tesliminde.
- **Örnek kullanım:** "Bunu hi-fi göstermeyelim; yapıyı konuşmak istiyoruz, renk tartışması başlamasın."
- **İlgili terimler:** Wireframe, Mockup, Prototype

### Wireframe

- **Terim (İngilizce):** Wireframe
- **Türkçesi:** Tel kafes / iskelet
- **Tanım:** Ekranın yapısını ve içerik yerleşimini gösteren, görsel tasarım içermeyen taslak.
- **Ne işe yarar / neden var:** Hızlıdır ve ucuzdur; bu yüzden çok sayıda alternatif denenebilir. Amacı **ne nerede duracak** ve **hiyerarşi ne** sorularını cevaplamaktır.
- **Nerede karşına çıkar:** Tasarımın erken aşamasında. Bazı ekipler wireframe adımını atlayıp doğrudan hi-fi'ye geçer; bu, yapı hatalarının pahalı aşamada bulunmasına yol açar.
- **Örnek kullanım:** "Üç wireframe alternatifi çıkarayım, hangi yapının işe yaradığına birlikte karar verelim."
- **İlgili terimler:** Mockup, Fidelity, IA (4.3)

### Mockup

- **Terim (İngilizce):** Mockup
- **Türkçesi:** Maket / görsel taslak
- **Tanım:** Nihai görsel tasarımı gösteren, ancak etkileşimi olmayan statik ekran.
- **Ne işe yarar / neden var:** "Nasıl görünecek" sorusunu cevaplar. Onay almak ve görsel yönü netleştirmek için kullanılır.
- **Nerede karşına çıkar:** Stakeholder onaylarında ve handoff'ta.
- **Örnek kullanım:** "Mockup'lar hazır; prototipe bağlayıp akışı test edelim."
- **Karıştırılanlar:** *Mockup* kelimesi ayrıca "ürün görselini bir cihaz çerçevesine yerleştirilmiş hâlde gösteren pazarlama görseli" anlamına da gelir (7.3'teki mockup frame). Bağlamdan ayırt et.
- **İlgili terimler:** Wireframe, Prototype, Fidelity

### Prototype

- **Terim (İngilizce):** Prototype (clickable / interactive prototype)
- **Türkçesi:** Prototip
- **Tanım:** Ekranların birbirine bağlandığı, tıklanabilen ve akışın denenebildiği sürüm.
- **Ne işe yarar / neden var:** Statik ekranlarda görünmeyen sorunlar ancak akış denenince ortaya çıkar: adım fazlalığı, geri dönüş eksikliği, kaybolma hissi. Kullanıcı testinin girdisi budur.
- **Nerede karşına çıkar:** Kullanıcı testinde ve geliştiriciye niyeti aktarırken.
- **Örnek kullanım:** "Prototipte kullanıcıların üçü de ikinci adımda durdu; adımı ikiye bölmemiz gerekiyor."
- **Karıştırılanlar:** Prototip **atılmak** üzere yapılır. "Prototip zaten çalışıyor, üzerine geliştirelim" cümlesi teknik borcun (17.9) klasik başlangıcıdır.
- **İlgili terimler:** Mockup, Usability test (4.10), MVP (2.8)

### Moodboard / Style tile

- **Terim (İngilizce):** Moodboard, Style tile
- **Türkçesi:** İlham panosu, stil kartı
- **Tanım:** Moodboard = görsel yönü anlatan referans derlemesi. Style tile = renk, tipografi ve temel bileşenlerin bir arada gösterildiği örnek kart.
- **Ne işe yarar / neden var:** Görsel yön tartışmasını, tam ekran tasarlamadan yapmayı sağlar. Yön yanlışsa üç saatlik iş kaybedilir, üç günlük değil.
- **Nerede karşına çıkar:** Proje başında, müşteriyle yön belirlerken.
- **Örnek kullanım:** "İki moodboard hazırladım; önce yönü seçelim, sonra ekranlara geçeyim."
- **İlgili terimler:** Design system (5.1), Brief (2.5)

---

## 4.6 Kullanılabilirlik ilkeleri

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

---

## 4.7 UX "yasaları" ve bilişsel yük

Psikoloji araştırmalarından türetilmiş ve tasarım kararlarını gerekçelendirmekte kullanılan kurallar. **Hepsinin sınırları var** ve en sık yapılan hata, sınırlarını bilmeden uygulamak.

### Hick's Law

- **Terim (İngilizce):** Hick's Law (Hick–Hyman Law)
- **Türkçesi:** Hick yasası
- **Tanım:** Seçenek sayısı arttıkça karar verme süresi uzar.
- **Ne işe yarar / neden var:** Menü, form ve fiyatlandırma tasarımında seçenek azaltmanın gerekçesidir. Ama gerçek fayda, seçenek **silmekten** çok seçenekleri **gruplamaktan** gelir: 30 seçenek, 5 grupta 6'şar seçenekten daha yorucudur.
- **Nerede karşına çıkar:** Navigasyon ve fiyat planı tartışmalarında.
- **Örnek kullanım:** "Beş plan yerine üç plan sunalım; Hick's law açısından karar süresi kısalır."
- **Karıştırılanlar:** Yasa **tanıdık olmayan, eşit olasılıklı** seçenekler için formüle edilmiştir. Alışkanlık kazanılmış arayüzlerde ve seçenekler görünür haldeyken etkisi zayıflar.
- **İlgili terimler:** Cognitive load, Miller's Law, Progressive disclosure (4.6)

### Fitts's Law

- **Terim (İngilizce):** Fitts's Law
- **Türkçesi:** Fitts yasası
- **Tanım:** Bir hedefe ulaşma süresi, hedefin uzaklığı arttıkça uzar ve boyutu büyüdükçe kısalır.
- **Ne işe yarar / neden var:** Buton boyutlarının ve yerleşiminin gerekçesi. Birincil eylemi küçük yapmak veya ekranın uzak köşesine koymak ölçülebilir bir maliyettir. Mobilde başparmağın rahat ulaştığı bölge ("thumb zone") bu yasanın pratik uygulamasıdır. Erişilebilirlikte de dokunma hedefi minimum boyutlarının temeli budur (6.6).
- **Nerede karşına çıkar:** Mobil tasarımda, dokunma hedefi boyutu tartışmalarında.
- **Örnek kullanım:** "Silme ve kaydet butonları yan yana ve küçük; Fitts's law gereği yanlış tıklama riski yüksek, aralarına mesafe koyalım."
- **İlgili terimler:** Touch target (6.6), Mobile-first (5.8)

### Jakob's Law

- **Terim (İngilizce):** Jakob's Law
- **Türkçesi:** Jakob yasası
- **Tanım:** Kullanıcılar zamanlarının çoğunu başka sitelerde geçirir; bu yüzden senin sitenin de onlar gibi çalışmasını beklerler.
- **Ne işe yarar / neden var:** Yaygın kalıplardan sapmanın maliyetini hatırlatır. Logonun sol üstte olması, sepet ikonunun sağ üstte olması, alt çizgili metnin link olması — bunlar zevk değil, öğrenilmiş beklentidir. Sapmak mümkündür ama **bedeli ödenebilir olmalıdır.**
- **Nerede karşına çıkar:** "Farklı bir şey yapalım" önerilerine karşı en güçlü argüman.
- **Örnek kullanım:** "Menüyü sağ tarafa almak özgün olur ama Jakob's law diyor ki kullanıcı solda arayacak; kazancı bu maliyeti karşılamıyor."
- **Karıştırılanlar:** Bu yasa "hiç yenilik yapma" demez. Yeniliğin, öğrenme maliyetini karşılayacak kadar değer üretmesi gerektiğini söyler.
- **İlgili terimler:** Mental model (4.3), Consistency (4.6)

### Miller's Law

- **Terim (İngilizce):** Miller's Law ("magical number seven, plus or minus two")
- **Türkçesi:** Miller yasası
- **Tanım:** İnsanın kısa süreli belleğinde aynı anda tutabildiği bilgi parçası sayısı sınırlıdır.
- **Ne işe yarar / neden var:** Asıl değerli kısmı sayı değil, **chunking** (parçalama) fikridir: bilgi anlamlı gruplara bölündüğünde aynı sınırdan çok daha fazlası geçer. Telefon numarasının 5XX XXX XX XX diye yazılmasının sebebi budur.
- **Nerede karşına çıkar:** Menü, liste ve form uzunluğu tartışmalarında — ve genelde **yanlış** kullanılır.
- **Örnek kullanım:** "Numarayı gruplayarak gösterelim; chunking okunabilirliği artırır."
- **Karıştırılanlar:** **Bu, dosyadaki en sık yanlış uygulanan kuraldır.** "Menüde 7'den fazla öğe olmasın" cümlesinin araştırmada karşılığı yoktur. Miller'ın 1956 tarihli çalışması **ekranda görünmeyen**, akılda tutulması gereken bilgiyle ilgilidir. Menü öğeleri ekranda durur; bu bir **tanıma** görevidir, hatırlama görevi değil. Miller'ın kendisi de sayıyı bir tesadüf olarak nitelendirmiştir ve sonraki araştırmalar (Cowan, 2001) gerçek kapasitenin daha düşük ve malzemeye göre değişken olduğunu göstermiştir. Menü uzunluğu için doğru referans Miller değil, Hick's Law ve bilişsel yüktür.
- **İlgili terimler:** Cognitive load, Hick's Law, Recognition rather than recall (4.6)

### Cognitive load

- **Terim (İngilizce):** Cognitive load
- **Türkçesi:** Bilişsel yük
- **Tanım:** Bir görevi yapmak için harcanan zihinsel çaba.
- **Ne işe yarar / neden var:** Tasarımın asıl düşmanı budur; "yasaların" çoğu bunun türevidir. Yük üç yerden gelir: görevin kendi zorluğu, arayüzün getirdiği gereksiz zorluk ve öğrenme çabası. Tasarımcının işi ikinciyi azaltmaktır — kullanıcı işine odaklansın, arayüzü çözmeye değil.
- **Nerede karşına çıkar:** Karmaşık panel ve form tasarımlarında.
- **Örnek kullanım:** "Aynı ekranda üç farklı görev var; bilişsel yük yüksek, ayıralım."
- **İlgili terimler:** Miller's Law, Hick's Law, Progressive disclosure (4.6)

### Response time thresholds

- **Terim (İngilizce):** Response time thresholds (Doherty threshold olarak da anılır)
- **Türkçesi:** Yanıt süresi eşikleri
- **Tanım:** İnsanın bir sistemin yanıtını nasıl algıladığını belirleyen kabaca üç eşik: yaklaşık **0,1 sn** anında hissedilir; **1 sn** civarında akış korunur ama gecikme fark edilir; **10 sn** civarında dikkat kopar.
- **Ne işe yarar / neden var:** Hangi durumda hangi geri bildirimin gerektiğini belirler: 1 saniyenin altında hiçbir şey gerekmez; birkaç saniyede spinner veya skeleton; uzun sürede ilerleme göstergesi ve tahmini süre.
- **Nerede karşına çıkar:** Yükleme durumu tasarımında ve performans tartışmalarında.
- **Örnek kullanım:** "İşlem ortalama 4 saniye sürüyor; skeleton koyalım, spinner tek başına yetmez."
- **Karıştırılanlar:** `[EMİN DEĞİLİM]` Bu eşikler farklı kaynaklarda biraz farklı sayılarla anılıyor ve kökeni birden fazla çalışmaya dayandırılıyor. Sayıları kesin değer değil, büyüklük mertebesi olarak kullan.
- **İlgili terimler:** Loading state (7.9), Skeleton (7.9), Core Web Vitals (8.12)

---

## 4.8 Görsel hiyerarşi ve algı

Gözün ekranda nereye gideceğini belirleyen kurallar. Bu bölüm, "bu tasarım karışık duruyor" izlenimini teknik bir gerekçeye çevirmeni sağlar.

### Visual hierarchy

- **Terim (İngilizce):** Visual hierarchy
- **Türkçesi:** Görsel hiyerarşi
- **Tanım:** Öğelerin önem sırasının, görsel ağırlıkla ifade edilmesi.
- **Ne işe yarar / neden var:** Kullanıcı ekranı okumaz, tarar. Hiyerarşi yoksa göz nereye bakacağını bilemez ve ekran "karışık" hissedilir. Ağırlık üretmenin araçları: boyut, ağırlık (font weight), renk kontrastı, boşluk, konum ve yüzey farkı.
- **Nerede karşına çıkar:** Neredeyse her tasarım geri bildiriminde. En sık rastlanan kusur: bir ekranda **birden fazla birincil eylem** olması.
- **Örnek kullanım:** "Bu ekranda üç buton da dolu renkli; birincil eylem hangisi belli değil, ikisini ikincil stile alalım."
- **İlgili terimler:** Contrast, Gestalt, Focal point

### Gestalt principles

- **Terim (İngilizce):** Gestalt principles
- **Türkçesi:** Gestalt ilkeleri
- **Tanım:** İnsan zihninin ayrı öğeleri nasıl gruplayarak algıladığını tanımlayan ilkeler.
- **Ne işe yarar / neden var:** Kullanıcı, gruplamayı senin niyetinden değil görsel ipuçlarından okur. Yanlış boşluk, ilgisiz iki şeyi bir grup gibi gösterir; bu, tasarım hatalarının en sessiz ve en yaygın kaynağıdır.
- **Nerede karşına çıkar:** Form, kart ve liste tasarımında.
- **Örnek kullanım:** "Etiket ile alan arasındaki boşluk, alan ile bir sonraki etiket arasındakinden büyük; proximity ilkesi gereği yanlış eşleşme okunuyor."
- **İlgili terimler:** Visual hierarchy, White space, Spacing (5.5)

| İlke | Ne der | Tasarımdaki karşılığı |
|---|---|---|
| Proximity | Yakın olanlar ilişkili algılanır | Etiket–alan mesafesi, kart içi boşluk |
| Similarity | Benzer görünenler aynı gruba ait algılanır | Aynı tür eylemler aynı buton stilinde |
| Common region | Aynı çerçeve içindekiler bir gruptur | Kart, panel, kenarlıklı bölüm |
| Closure | Zihin eksik şekli tamamlar | Kırpılmış görsel, kısmen görünen sonraki kart |
| Continuity | Aynı hat üzerindekiler ilişkili algılanır | Hizalama, grid |
| Figure–ground | Bir katman ön, diğeri arka algılanır | Modal ve arkasındaki karartma |

### Contrast

- **Terim (İngilizce):** Contrast
- **Türkçesi:** Kontrast
- **Tanım:** İki öğe arasındaki algılanabilir fark — renk, boyut, ağırlık veya biçim üzerinden.
- **Ne işe yarar / neden var:** Hem hiyerarşinin hem okunabilirliğin temeli. Erişilebilirlik tarafında ölçülebilir bir eşiği vardır (6.6), yani tercih meselesi değildir. Ayrıca kontrast tasarrufludur: her şey vurguluysa hiçbir şey vurgulu değildir.
- **Nerede karşına çıkar:** Renk seçimlerinde ve erişilebilirlik denetimlerinde.
- **Örnek kullanım:** "Açık gri metin arka planla 2,8:1 kontrast veriyor; AA için 4,5:1 gerekiyor, koyulaştıralım."
- **İlgili terimler:** Contrast ratio (5.4, 6.6), Visual hierarchy

### White space

- **Terim (İngilizce):** White space (negative space)
- **Türkçesi:** Boşluk / negatif alan
- **Tanım:** Öğeler arasında bilinçli olarak bırakılan boş alan.
- **Ne işe yarar / neden var:** Boşluk boş değildir; gruplama yapar, nefes verir ve önem işaretler. Bir öğenin etrafındaki boşluğu artırmak, onu büyütmeden vurgular. En sık gelen "buraya bir şey koyalım" isteği, çoğu zaman tasarımın en işlevli parçasını yok eder.
- **Nerede karşına çıkar:** Neredeyse her tasarım tartışmasında.
- **Örnek kullanım:** "Bu boşluk kasıtlı; kaldırırsak iki bölüm tek bölüm gibi okunur."
- **İlgili terimler:** Gestalt (proximity), Spacing scale (5.5), Visual hierarchy

### Alignment

- **Terim (İngilizce):** Alignment
- **Türkçesi:** Hizalama
- **Tanım:** Öğelerin ortak eksenlere göre yerleştirilmesi.
- **Ne işe yarar / neden var:** Görünmez düzen çizgileri yaratır ve "dağınık" hissini ortadan kaldırır. Amatör görünen tasarımların en yaygın sebebi hizasızlıktır — genelde renk veya font değil.
- **Nerede karşına çıkar:** Tasarım incelemesinde ve uygulama sonrası kontrolde.
- **Örnek kullanım:** "Kart içindeki ikon ve başlık farklı eksende; ikisini de sol kenara hizalayalım."
- **İlgili terimler:** Grid (5.5), Gestalt (continuity)

### Scanning patterns

- **Terim (İngilizce):** F-pattern, Z-pattern, layer-cake pattern
- **Türkçesi:** Tarama desenleri
- **Tanım:** Kullanıcıların sayfayı okurken izlediği tipik göz hareketi desenleri.
- **Ne işe yarar / neden var:** Önemli bilginin nereye konacağına dair kaba bir yön verir: metin yoğun sayfalarda göz sola ve üste yığılır.
- **Nerede karşına çıkar:** Landing page ve içerik sayfası tartışmalarında.
- **Örnek kullanım:** "Uzun metin bloğunda kullanıcı F deseniyle tarıyor; önemli bilgi ilk iki satırda ve alt başlıklarda olsun."
- **Karıştırılanlar:** Bu desenler bir kural değil, gözlemdir ve **iyi tasarlanmamış** sayfalarda ortaya çıkar. Net görsel hiyerarşi ve alt başlıklar konulduğunda kullanıcı F deseninden çıkar. Yani F-pattern bir hedef değil, bir uyarı işaretidir.
- **İlgili terimler:** Visual hierarchy, Above the fold (1.4)

---

## 4.9 UX writing ve içerik

Arayüzdeki kelimeler. Tasarımın en çok gözden kaçan ve en hızlı etki eden katmanı: bir buton etiketini değiştirmek, ekranı yeniden tasarlamaktan çok daha ucuzdur ve bazen aynı etkiyi yapar.

### UX writing / Microcopy

- **Terim (İngilizce):** UX writing, microcopy
- **Türkçesi:** Arayüz metni
- **Tanım:** Arayüzdeki küçük metin parçaları: buton etiketleri, hata mesajları, boş ekran metinleri, ipuçları, onay mesajları.
- **Ne işe yarar / neden var:** Kullanıcının ne yapacağını bu kelimeler söyler. "Gönder" ile "Rezervasyonu tamamla" aynı butondur ama farklı güven üretir. Belirsiz etiket, kullanıcıyı duraklatır.
- **Nerede karşına çıkar:** Her ekranda. Çoğu ekipte ayrı bir UX writer yoktur; iş tasarımcıya düşer.
- **Örnek kullanım:** "Buton 'Tamam' değil 'Aboneliği iptal et' desin; kullanıcı neyi onayladığını bilsin."
- **Karıştırılanlar:** *UX writing* ≠ *copywriting*. Copywriting ikna eder ve satar; UX writing yönlendirir ve netleştirir. İkisi farklı beceridir.
- **İlgili terimler:** Content design, Error message, Tone of voice

### Content design

- **Terim (İngilizce):** Content design
- **Türkçesi:** İçerik tasarımı
- **Tanım:** Kullanıcının ihtiyaç duyduğu bilginin ne olduğuna, nasıl yapılandırılacağına ve nerede sunulacağına karar verme disiplini.
- **Ne işe yarar / neden var:** UX writing kelimeleri yazar; content design **hangi bilginin gerektiğine** karar verir ve bazen cevabı "bu ekran hiç olmasın" olur.
- **Nerede karşına çıkar:** Büyük kurumlarda ayrı bir rol, küçük ekiplerde tasarımcının işi.
- **Örnek kullanım:** "Content design açısından bu SSS bölümü gereksiz; sorular akışın içinde cevaplanmalı."
- **İlgili terimler:** UX writing, IA (4.3)

### Tone of voice

- **Terim (İngilizce):** Tone of voice
- **Türkçesi:** Ses tonu
- **Tanım:** Ürünün kullanıcıyla konuşurken kullandığı üslup.
- **Ne işe yarar / neden var:** Tutarlılık güven üretir. Ayrıca ton **duruma göre** değişmelidir: hata anında esprili olmak sinir bozar, kutlama anında kuru olmak soğuk durur. İyi bir ton rehberi bu bağlam farkını tanımlar.
- **Nerede karşına çıkar:** Marka rehberlerinde ve tasarım sistemlerinde.
- **Örnek kullanım:** "Ödeme başarısız ekranında şaka yapmayalım; ton rehberimiz hata durumunda sade ve yardımcı diyor."
- **İlgili terimler:** UX writing, Design system (5.1)

### Label / Helper text / Placeholder

- **Terim (İngilizce):** Label, helper text, placeholder
- **Türkçesi:** Etiket, yardımcı metin, yer tutucu
- **Tanım:** Label = alanın kalıcı adı. Helper text = alanın altındaki açıklama. Placeholder = alan boşken içinde görünen soluk metin.
- **Ne işe yarar / neden var:** Üçü farklı işlere yarar ve karıştırılırsa sorun çıkar. **Placeholder label yerine kullanılamaz:** kullanıcı yazmaya başlayınca kaybolur, o alanın ne olduğu unutulur, kontrastı düşük olduğu için okunabilirliği zayıftır ve ekran okuyucularda güvenilir biçimde okunmaz.
- **Nerede karşına çıkar:** Her form tasarımında. En sık yapılan form hatası budur.
- **Örnek kullanım:** "Placeholder'ı label'a çevirelim; kullanıcı yazarken alanın ne olduğunu göremiyor."
- **İlgili terimler:** Form parçaları (7.11), Form erişilebilirliği (6.7)

### Error message

- **Terim (İngilizce):** Error message
- **Türkçesi:** Hata mesajı
- **Tanım:** Bir şey ters gittiğinde kullanıcıya gösterilen metin.
- **Ne işe yarar / neden var:** Üç şeyi yapmalı: ne olduğunu söyle, sebebini açıkla, çözümü göster. Ayrıca kullanıcıyı suçlamamalı ("hatalı giriş yaptınız" yerine "bu e-posta adresi kayıtlı görünmüyor") ve teknik kod göstermemeli.
- **Nerede karşına çıkar:** Form doğrulamalarında, ödeme akışlarında, bağlantı hatalarında.
- **Örnek kullanım:** "'Error 422' yerine 'Şifre en az 8 karakter olmalı' yazalım ve kuralı alanın altında baştan gösterelim."
- **Karıştırılanlar:** Güvenlik gerektiren yerlerde mesaj bilinçli olarak belirsiz tutulur: giriş ekranında "e-posta bulunamadı" demek, saldırgana hangi hesapların var olduğunu söyler (Bölüm 12.11).
- **İlgili terimler:** Error state (7.9), Error path (4.4), Inline validation (7.8)

---

## 4.10 Değerlendirme yöntemleri

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

---

## 4.11 Kendini test et

**1.** UX ile UI arasındaki fark nedir? Kusursuz bir UI kötü bir UX üretebilir mi? Örnek ver.

**2.** Double Diamond'ın iki elması neyi temsil eder? Her elmasın sonunda ne bilinmiş olur?

**3.** Erken aşamada neden bilinçli olarak düşük detaylı (lo-fi) çıktı gösterilir?

**4.** Wireframe, mockup ve prototype hangi üç farklı soruyu cevaplar?

**5.** Card sorting ile tree testing arasındaki fark nedir? Hangisi ne zaman kullanılır?

**6.** Bir özelliği kullanan kullanıcı oranı %3, ama kullananlar memnun. Bu findability sorunu mu, discoverability sorunu mu? Ne yaparsın?

**7.** "Menüde 7'den fazla öğe olmasın" cümlesi neden yanlış? Doğru referans hangi kavramdır?

**8.** Affordance ile signifier arasındaki fark nedir? Bir örnekle açıkla.

**9.** Bir kullanıcı silme butonuna basınca "Emin misiniz?" diyaloğu göstermek yerine ne yapılabilir ve bu neden daha iyi olabilir?

**10.** F-pattern iyi bir tasarım hedefi midir? Neden?

**11.** Placeholder metni label yerine kullanmanın üç sakıncasını say.

**12.** Bir hata mesajının cevaplaması gereken üç soru nedir? Hangi durumda mesaj bilinçli olarak belirsiz bırakılır?

**13.** "Beş kullanıcı yeterlidir" kuralının üç sınırı nedir?

**14.** Funnel analizi "dönüşüm düşük" bilgisinden neden daha kullanışlıdır?

**15.** Bir kullanıcı testinde "bunu beğendiniz mi?" diye sormak neden yöntem hatasıdır?

---

### Cevaplar

**1.** UI arayüz katmanıdır (ekranlar, butonlar, tipografi); UX ise kullanıcının ürünle kurduğu ilişkinin bütünüdür — bekleme süreleri, e-postalar, destek dahil. Evet üretebilir: kusursuz bir ödeme ekranı, onay e-postası 20 dakika sonra geliyorsa kullanıcıda "işlem geçti mi?" endişesi bırakır.

**2.** İlk elmas **problem alanını** (Discover, Define), ikinci elmas **çözüm alanını** (Develop, Deliver) temsil eder. İlkinin sonunda problemin ne olduğu, ikincisinin sonunda nasıl çözüleceği bilinmiş olur.

**3.** Detay seviyesi geri bildirimin türünü belirler. Gerçekçi bir ekran gösterirsen konuşma renk ve fonta kayar, yapı tartışması kapanır. Yapıyı konuşmak istiyorsan kutu ve çizgi göster.

**4.** Wireframe: **ne nerede duracak, hiyerarşi ne?** Mockup: **nasıl görünecek?** Prototype: **akış çalışıyor mu, kullanıcı yolunu bulabiliyor mu?**

**5.** Card sorting kullanıcıdan içeriği **kendi mantığına göre gruplamasını** ister — yapıyı kurmak için, önce kullanılır. Tree testing kurulmuş yapıyı, görsel tasarım olmadan **doğrulamak** için kullanılır — sonra.

**6.** Discoverability sorunu: kullanıcılar özelliğin varlığını bilmiyor (kullananlar memnun olduğuna göre kalite sorunu yok). Çözüm arama/menü düzeltmesi değil; boş ekranda tanıtım, onboarding adımı, ilgili bağlamda ipucu veya duyuru.

**7.** Miller'ın 1956 çalışması **akılda tutulması gereken** bilgiyle ilgilidir; menü öğeleri ekranda görünür durur, bu bir tanıma görevidir, hatırlama görevi değil. Miller'ın kendisi de sayıyı bir tesadüf olarak nitelendirmiştir. Menü uzunluğu için doğru referans **Hick's Law** ve **bilişsel yük**tür; ayrıca asıl fayda seçenek silmekten değil gruplamaktan gelir.

**8.** Affordance imkânın kendisidir, signifier o imkânı görünür kılan ipucudur. Örnek: bir kart tıklanabilir olabilir (affordance var), ama imleç değişmiyor ve hover'da hiçbir şey olmuyorsa signifier yoktur — kullanıcı tıklanabildiğini anlamaz.

**9.** İşlemi hemen yapıp geri alınabilir bir toast göstermek ("Silindi — Geri al"). Daha iyi olabilir çünkü sürekli onay sormak kullanıcıyı otomatik onaylamaya alıştırır ve diyaloğun koruma işlevi kaybolur; geri alma hem hızlı hem güvenlidir.

**10.** Hayır. F-pattern bir hedef değil, **görsel hiyerarşisi zayıf sayfalarda ortaya çıkan bir gözlemdir**. Net başlıklar, alt başlıklar ve hiyerarşi konulduğunda kullanıcı bu desenden çıkar. Yani F-pattern görmek bir uyarı işaretidir.

**11.** (1) Kullanıcı yazmaya başlayınca kaybolur, alanın ne olduğu unutulur. (2) Kontrastı düşüktür, okunabilirliği zayıftır. (3) Ekran okuyucularda güvenilir biçimde okunmaz, erişilebilirlik sorunu yaratır. (Ek olarak: doldurulmuş boş alan ayrımını da zorlaştırır.)

**12.** Ne oldu, neden oldu, şimdi ne yapmalıyım. Güvenlik gerektiren yerlerde bilinçli olarak belirsiz bırakılır: giriş ekranında "bu e-posta kayıtlı değil" demek, saldırgana hangi hesapların var olduğunu doğrular.

**13.** (1) Birbirinden belirgin şekilde farklı kullanıcı grupları varsa her grup için ayrı test gerekir. (2) Rakam sabit bir problem bulma oranı varsayan bir modelden gelir, ölçüm değil tahmindir. (3) Faulkner'in çalışması, rastgele beşerli grupların sorunların %55 ile %99'u arasında değişen oranlarını bulduğunu gösterdi — beş kişi ortalama iyidir, garanti değildir.

**14.** Çünkü kaybın **nerede** olduğunu söyler. "Dönüşüm düşük" bir durum tespitidir ve eyleme dönüşmez; "kayıp %60 kart bilgisi adımında" doğrudan hangi ekranın çalışılacağını gösterir.

**15.** Çünkü beyan edilen tercih ile gerçek davranış sık sık ayrışır. Test, görev verip **davranışı gözlemlemektir**; kullanıcı nezaketen veya kendini suçlamamak için "kolaydı" diyebilirken görevi tamamlayamamış olabilir.

---

**Biten bölüm:** Bölüm 4 — UI/UX: süreç ve ilkeler
**Sıradaki bölüm:** Bölüm 5 — Tasarım sistemi ve görsel dil
