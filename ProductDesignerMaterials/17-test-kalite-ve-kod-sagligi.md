# Bölüm 17 — Test, kalite ve kod sağlığı

Bu bölümün senin için iki net çıktısı var:

1. **İyi bir hata raporu yazabilmek** (17.5). Bu, tasarımcının geliştiriciyle ilişkisini en çok etkileyen tek beceridir. Kötü bir hata raporu iki gün kaybettirir; iyi bir tanesi on dakikada kapanır.
2. **Tasarım kalitesini otomatikleştirebilmek** (17.6). Erişilebilirlik taraması, görsel karşılaştırma ve performans bütçesi yayın hattına konabilir — böylece "her sürümde tekrar kontrol etme" yükü insandan makineye geçer.

Geri kalan kısımlar **Seviye 2**: kod yazmayacaksın ama bir PR'da "testler kırıldı" veya "bu coverage'ı düşürüyor" cümlelerini anlaman gerekiyor.

Kavramlar eskimeyen, araçlar hızlı değişen kategoride (17.3).

---

## 17.1 Test neden var

### Test

- **Terim (İngilizce):** Automated test
- **Türkçesi:** Otomatik test
- **Tanım:** Kodun beklendiği gibi çalıştığını, insan müdahalesi olmadan ve tekrar tekrar kontrol eden kod.
- **Ne işe yarar / neden var:** Asıl faydası hata bulmak değil, **değişiklik yapabilme cesareti vermektir.** Testi olmayan bir kod tabanında her değişiklik risklidir; bu yüzden ekip dokunmaktan çekinir ve kod çürür. Testi olan bir kodda "bu düzeltmeyi yapalım" kararı ucuzdur.
- **Nerede karşına çıkar:** Her PR'da (15.5) ve CI hattında (16.1).
- **Örnek kullanım:** "Bu bileşeni yeniden yazmaktan çekiniyoruz çünkü testi yok; önce test yazalım."
- **Karıştırılanlar:** **Tasarımcı için somut sonucu şu:** test altyapısı zayıf bir projede, küçük tasarım düzeltmelerin de "riskli" sayılıp ertelenir. Yani test, dolaylı olarak tasarım kalitesini belirler.
- **İlgili terimler:** Test pyramid, CI (16.1), Refactor (17.9)

### Test pyramid

- **Terim (İngilizce):** Test pyramid, testing trophy
- **Türkçesi:** Test piramidi
- **Tanım:** Testlerin dağılımını anlatan model: tabanda çok sayıda hızlı ve ucuz test (unit), ortada daha az entegrasyon testi, tepede az sayıda yavaş ama gerçekçi uçtan uca test (E2E).
- **Ne işe yarar / neden var:** Bir denge önerir. E2E testler en gerçekçi olanlardır ama yavaş, kırılgan ve pahalıdır; hepsini E2E yapmak CI süresini dakikalardan saate çıkarır. Unit testler hızlıdır ama "parçalar tek tek çalışıyor, birlikte çalışmıyor" durumunu yakalayamaz.
- **Nerede karşına çıkar:** Test stratejisi tartışmalarında.
- **Örnek kullanım:** "Her şeyi E2E ile test ediyoruz; CI 25 dakika sürüyor. Piramidi dengeleyelim."
- **Karıştırılanlar:** Piramidin kesin oranları dogma değildir. **Front-end tarafında "testing trophy" adlı bir alternatif model**, entegrasyon testlerine daha fazla ağırlık verilmesini savunur — çünkü kullanıcı tek tek fonksiyonları değil, birlikte çalışan parçaları deneyimler. `[EMİN DEĞİLİM]` İki model arasındaki tartışmanın güncel durumunu doğrulamadım.
- **İlgili terimler:** Unit test, E2E test, CI (16.1)

---

## 17.2 Test türleri

### Unit test

- **Terim (İngilizce):** Unit test
- **Türkçesi:** Birim testi
- **Tanım:** Tek bir fonksiyonun veya küçük bir parçanın, dış dünyadan yalıtılmış olarak test edilmesi.
- **Ne işe yarar / neden var:** Çok hızlıdır (milisaniyeler) ve hata olduğunda **tam olarak nerede olduğunu** söyler. İş kuralları için idealdir: indirim hesabı, tarih dönüşümü, doğrulama kuralı.
- **Nerede karşına çıkar:** Her projede, en kalabalık test grubu.
- **Örnek kullanım:** "İndirim hesabı için unit test yazalım; kurallar karmaşık ve elle test etmesi zor."
- **İlgili terimler:** Integration test, Mock (17.4)

### Integration test

- **Terim (İngilizce):** Integration test
- **Türkçesi:** Entegrasyon testi
- **Tanım:** Birden fazla parçanın birlikte doğru çalışıp çalışmadığının test edilmesi — örneğin bir API ucunun veritabanıyla birlikte.
- **Ne işe yarar / neden var:** Gerçek hataların çoğu parçaların **arasında** olur, içinde değil: yanlış alan adı, eksik kontrol, uyumsuz veri tipi. Unit testler bunları göremez.
- **Nerede karşına çıkar:** API ve veri erişimi katmanlarında.
- **Örnek kullanım:** "Unit testler geçiyor ama entegrasyonda patlıyor; API'nin dönüşü şemayla uyuşmuyor."
- **İlgili terimler:** Unit test, Contract (10.4)

### E2E test

- **Terim (İngilizce):** E2E — End-to-End test
- **Türkçesi:** Uçtan uca test
- **Tanım:** Gerçek bir tarayıcıda, gerçek bir kullanıcının yapacağı adımların baştan sona otomatik olarak yürütülmesi.
- **Ne işe yarar / neden var:** Kullanıcının deneyimine en yakın test. **Tasarımcıyı en çok ilgilendiren tür budur:** bir kullanıcı akışının (4.4) gerçekten çalıştığını doğrular. Ama yavaş ve kırılgandır; bu yüzden sadece **kritik akışlar** için yazılır: kayıt, giriş, ödeme, ana iş akışı.
- **Nerede karşına çıkar:** CI hattının son aşamalarında.
- **Örnek kullanım:** "E2E testleri para kazandıran akışlara ayıralım: kayıt, ödeme, arama. Her butonu test etmeyelim."
- **Karıştırılanlar:** E2E testlerin kırılganlığı gerçek bir sorundur; tasarım değişince testler kırılır. Bu yüzden testler görsel detaylara değil, **erişilebilir adlara ve rollere** (6.4) bağlanır — bu da semantic HTML'in (6.3) bir yan faydasıdır.
- **İlgili terimler:** Smoke test, User flow (4.4), Accessible name (6.4)

### Smoke / Regression test

- **Terim (İngilizce):** Smoke test, regression test
- **Türkçesi:** Duman testi, gerileme testi
- **Tanım:** **Smoke test**, yayından hemen sonra "en temel şeyler çalışıyor mu?" kontrolü. **Regression test**, daha önce düzeltilmiş bir hatanın geri gelmediğini doğrulayan test.
- **Ne işe yarar / neden var:** Smoke test, bozuk bir yayını dakikalar içinde yakalar (16.2). Regression test ise **her hata düzeltmesinin yanına bir test eklenmesi** disiplininden doğar: aynı hata bir daha sessizce dönemez.
- **Nerede karşına çıkar:** Yayın hattında ve hata düzeltme PR'larında.
- **Örnek kullanım:** "Bu hatayı düzelttik; yanına bir regression testi ekleyelim ki tekrar etmesin."
- **İlgili terimler:** E2E test, Pipeline (16.2), Bug report (17.5)

---

## 17.3 Araçlar

> `[DEĞİŞKEN BİLGİ]` Araç manzarası hızlı değişir. Aşağıdakiler Eylül 2026 itibarıyla topladığım kaynaklara dayanıyor.

| Katman | Yaygın araçlar | Notlar |
|---|---|---|
| **Unit / integration** | Vitest, Jest | Vitest, modern projelerde varsayılan hâline geldiği raporlanıyor; Jest hâlâ çok yaygın ama yeni projelerde tercih oranı düşüyor |
| **Bileşen testi** | Testing Library | Bileşenleri, kullanıcının gördüğü gibi (rol ve erişilebilir ad üzerinden) test etmeyi teşvik eder |
| **E2E** | Playwright, Cypress | Playwright'ın öne geçtiği raporlanıyor: çapraz tarayıcı desteği ve ücretsiz paralel çalıştırma başlıca sebepler. Cypress geriliyor ama ölmüyor; mevcut test setleri geçerli kalıyor |

`[EMİN DEĞİLİM]` Bir sektör anketinin (State of JS 2025, Ocak 2026'da yayımlandığı belirtiliyor) Playwright ve Cypress arasında memnuniyet açısından belirgin bir fark raporladığı aktarılıyor. Anketin kendisini okumadım; rakamları yazmıyorum.

**Tasarımcı için asıl not:** Testing Library'nin yaklaşımı seni doğrudan ilgilendirir. Bu kütüphane, bileşenleri CSS sınıflarına göre değil **erişilebilir adlara ve rollere göre** bulmayı teşvik eder. Sonuç: erişilebilirlik için yaptığın işler (6.3, 6.4) testleri de sağlamlaştırır. İyi yazılmış bir arayüz, test edilmesi kolay bir arayüzdür.

---

## 17.4 Test kavramları

### Test coverage

- **Terim (İngilizce):** Test coverage, code coverage
- **Türkçesi:** Test kapsamı
- **Tanım:** Kodun ne kadarının testler tarafından çalıştırıldığını gösteren yüzde.
- **Ne işe yarar / neden var:** Test edilmemiş bölgeleri görünür kılar. Ama **ölçtüğü şey "kod çalıştırıldı mı", "doğru mu" değil:** %100 kapsama sahip bir kod tabanı yine de yanlış çalışabilir.
- **Nerede karşına çıkar:** CI raporlarında ve PR yorumlarında.
- **Örnek kullanım:** "Kapsam %85 ama kritik ödeme akışı test edilmemiş; sayı yanıltıyor."
- **Karıştırılanlar:** **Kapsam bir hedefe dönüştürüldüğünde bozulur** (Goodhart yasası): ekip, değer üretmeyen ama yüzdeyi yükselten testler yazmaya başlar. Kapsam bir **teşhis aracıdır**, bir hedef değil.
- **İlgili terimler:** Vanity metric (3.7), CI gate (17.7)

### Flaky test

- **Terim (İngilizce):** Flaky test
- **Türkçesi:** Kararsız test
- **Tanım:** Kod değişmediği hâlde bazen geçen, bazen kalan test.
- **Ne işe yarar / neden var:** **Test altyapısının en yıkıcı sorunu.** Bir test rastgele kaldığında ekip "yine takıldı, tekrar çalıştır" demeye başlar — ve bu alışkanlık oluştuğu anda **tüm test setine olan güven ölür.** Gerçek bir hata olduğunda da aynı refleksle geçilir.
- **Nerede karşına çıkar:** E2E testlerde çok yaygın; genelde zamanlama, paylaşılan durum veya ağ kaynaklıdır.
- **Örnek kullanım:** "Bu test kararsız; ya düzeltelim ya devre dışı bırakalım, ama 'tekrar çalıştır' demeyi bırakalım."
- **Karıştırılanlar:** Kararsız bir testi otomatik yeniden denemeye almak sorunu gizler, çözmez. Yaygın tavsiye: **düzelt veya karantinaya al, yeniden denemeyle örtme.**
- **İlgili terimler:** E2E test, CI (16.1)

### Mock / Stub / Fixture

- **Terim (İngilizce):** Mock, stub, fixture, test data
- **Türkçesi:** Taklit, sahte yanıt, hazır veri
- **Tanım:** **Mock/stub**, testte gerçek bir bağımlılığın (API, veritabanı, ödeme servisi) yerine konan sahte versiyon. **Fixture**, testin kullandığı hazır örnek veri.
- **Ne işe yarar / neden var:** Testi hızlı ve öngörülebilir kılar: gerçek bir ödeme servisine bağlanmadan ödeme akışı test edilebilir.
- **Nerede karşına çıkar:** Unit ve entegrasyon testlerinde.
- **Örnek kullanım:** "API'yi mock'layalım; test gerçek sunucuya bağlı olmasın."
- **Karıştırılanlar:** **Aşırı mock'lama tehlikelidir:** her şey taklit edilirse test, gerçek sistemi değil kendi kurgusunu doğrular. Ayrıca fixture verisi gerçekçi olmalıdır — seed verisi (11.10) için geçerli olan aynı kural burada da geçer: uzun isimler, boş alanlar ve uç değerler içermelidir.
- **İlgili terimler:** Seed (11.10), Edge case (4.4), Integration test

---

## 17.5 QA ve hata raporu

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

---

## 17.6 Tasarım kalitesinin otomatikleştirilmesi

**Senin için ikinci en önemli alt bölüm.** Buradaki üç kontrol, tasarım kalitesini insan disiplininden çıkarıp sürece bağlar.

### Visual regression testing

- **Terim (İngilizce):** Visual regression testing, snapshot testing
- **Türkçesi:** Görsel gerileme testi
- **Tanım:** Arayüzün ekran görüntülerinin alınıp, her değişiklikte öncekiyle piksel bazında karşılaştırılması.
- **Ne işe yarar / neden var:** **Kod testleri görsel bozulmaları yakalayamaz.** Bir CSS değişikliği başka bir sayfadaki kartı bozabilir ve hiçbir test bunu fark etmez. Görsel regresyon testi, PR'da "bu 12 ekran değişti" diyerek fark listesi sunar — sen de bunun kasıtlı olup olmadığına karar verirsin.
- **Nerede karşına çıkar:** Tasarım sistemi olan ekiplerde. `[DEĞİŞKEN BİLGİ]` Araç isimleri ve fiyatlandırmaları değişir.
- **Örnek kullanım:** "Görsel regresyon kuralım; bileşen değişikliklerinin başka yerleri bozup bozmadığını PR'da görelim."
- **Karıştırılanlar:** Yanlış pozitifler sorun olur: font yüklenme farkı, animasyon zamanlaması ve dinamik içerik sahte farklar üretir. Kurulumun bir kısmı bunları sabitlemekle geçer.
- **İlgili terimler:** Design review (2.10), Design system (5.1), CI (16.1)

### Accessibility testing

- **Terim (İngilizce):** Automated accessibility testing
- **Türkçesi:** Otomatik erişilebilirlik testi
- **Tanım:** Erişilebilirlik ihlallerinin CI hattında otomatik taranması (6.9).
- **Ne işe yarar / neden var:** Eksik alt metin, düşük kontrast ve eksik etiket gibi sorunların birikmesini engeller. **Kritik uyarı Bölüm 6.9'da:** otomatik araçlar sorunların yalnızca bir kısmını yakalar — yaygın olarak raporlanan aralık %30–40. Yani CI'daki yeşil işaret "erişilebilir" demek değildir; "bilinen otomatik kontroller geçti" demektir.
- **Nerede karşına çıkar:** CI hattında ve tarayıcı eklentilerinde.
- **Örnek kullanım:** "axe'ı CI'a ekleyelim; yeni ihlal eklenirse PR kırılsın. Manuel kontrolü yine de yapacağız."
- **İlgili terimler:** a11y (Bölüm 6), CI gate, Definition of Done (2.10)

### Performance budget

- **Terim (İngilizce):** Performance budget, Lighthouse CI
- **Türkçesi:** Performans bütçesi
- **Tanım:** Sayfanın aşmaması gereken sınırların (paket boyutu, LCP, CLS) CI hattında kontrol edilmesi (8.12).
- **Ne işe yarar / neden var:** Performans zamanla bozulur çünkü her ekleme tek tek makul görünür. Bütçe, bu birikimi mekanik olarak durdurur: sınır aşılırsa yapı başarısız olur.
- **Nerede karşına çıkar:** CI hattında.
- **Örnek kullanım:** "İlk yükte 150KB JavaScript sınırı koyalım; aşan PR kırılsın."
- **Karıştırılanlar:** Laboratuvar ölçümü (Lighthouse) ile saha verisi (CrUX) farklıdır (8.12). CI'daki Lighthouse skoru bir **gerileme alarmıdır**, gerçek kullanıcı deneyiminin kanıtı değil.
- **İlgili terimler:** Core Web Vitals (8.12), NFR (2.6), CI gate

---

## 17.7 Kod sağlığı araçları

### Linter / Formatter

- **Terim (İngilizce):** Linter (ESLint), formatter (Prettier)
- **Türkçesi:** Kod denetleyici, biçimlendirici
- **Tanım:** **Linter** olası hataları ve kural ihlallerini yakalar. **Formatter** kodun biçimini (girinti, tırnak, satır uzunluğu) otomatik olarak standartlaştırır.
- **Ne işe yarar / neden var:** Formatter'ın asıl faydası estetik değil, **tartışmayı ortadan kaldırmasıdır:** kod incelemelerinde biçim tartışması yapılmaz çünkü karar araca devredilmiştir. Bu, insan dikkatini asıl konulara bırakır.
- **Nerede karşına çıkar:** Her modern projede.
- **Örnek kullanım:** "Biçim yorumları yapmayalım; formatter zaten hallediyor, biz mantığa bakalım."
- **Karıştırılanlar:** Linter kuralları da erişilebilirlik kontrolü yapabilir — eksik `alt` metni gibi sorunları yazarken yakalayan eklentiler vardır.
- **İlgili terimler:** Type check, CI gate, Code review (17.10)

### Type check

- **Terim (İngilizce):** Type checking
- **Türkçesi:** Tip kontrolü
- **Tanım:** TypeScript'in (8.6) tip hatalarını derleme öncesinde yakalaması.
- **Ne işe yarar / neden var:** Bütün bir hata sınıfını ortadan kaldırır: yanlış alan adı, eksik alan, beklenmeyen `null`. Bir test yazmaya gerek kalmadan, yazarken yakalanır.
- **Nerede karşına çıkar:** Editörde anlık, CI'da kapı olarak.
- **Örnek kullanım:** "Tip kontrolü CI'da zorunlu olsun; `any` ile geçiştirmeyelim."
- **İlgili terimler:** TypeScript (8.6), Zod (9.9)

### Pre-commit hook / CI gate

- **Terim (İngilizce):** Pre-commit hook, CI gate, required check
- **Türkçesi:** Commit öncesi kanca, CI kapısı
- **Tanım:** **Pre-commit hook**, commit atılmadan önce yerel olarak çalışan kontrol. **CI gate**, PR'ın birleştirilebilmesi için geçmesi zorunlu olan kontrol (15.5).
- **Ne işe yarar / neden var:** İkisi de kalite kontrolünü **hatırlamaktan çıkarıp mekanizmaya bağlar.** Pre-commit hızlı geri bildirim verir; CI gate ise atlanamaz olduğu için asıl güvencedir.
- **Nerede karşına çıkar:** Depo yapılandırmasında.
- **Örnek kullanım:** "Erişilebilirlik taramasını ve performans bütçesini CI gate yapalım; uyarı olarak kalırsa kimse bakmıyor."
- **Karıştırılanlar:** **Kapı sayısı arttıkça yayın yavaşlar.** Her kontrolün bir maliyeti var; hepsini zorunlu yapmak, ekibi kapıları atlatmanın yollarını aramaya iter. Zorunlu olanlar gerçekten kritik olanlarla sınırlı tutulmalıdır.
- **İlgili terimler:** Branch protection (15.5), Definition of Done (2.10), Pipeline (16.2)

---

## 17.8 Clean code ilkeleri

Kod yazmayacaksın ama bu ilkeler bir PR'ı değerlendirirken ve senin kendi alanındaki (tasarım sistemi) düzeni kurarken işe yarar — **aynı ilkeler orada da geçerli.**

### Anlamlı isimlendirme

- **Terim (İngilizce):** Naming
- **Tanım:** Değişken, fonksiyon ve bileşen adlarının ne yaptıklarını açıkça söylemesi.
- **Ne işe yarar / neden var:** Kodun büyük kısmı yazılmaktan çok **okunur**; iyi isim, yoruma olan ihtiyacı ortadan kaldırır. **Tasarım karşılığı doğrudan:** token adları (5.2) ve bileşen adları (5.10) da aynı kurala tabidir — `color-4` kötü, `color-text-danger` iyi.
- **Örnek kullanım:** "Bu prop adı ne yaptığını söylemiyor; `flag` yerine `isDisabled` olsun."
- **İlgili terimler:** Design token (5.2), Component (8.7)

### Tek sorumluluk / DRY / Erken return

- **Terim (İngilizce):** Single responsibility, DRY (Don't Repeat Yourself), early return, magic number
- **Türkçesi:** Tek sorumluluk, tekrar etme, erken çıkış, sihirli sayı
- **Tanım:** **Tek sorumluluk**: bir parça tek bir iş yapmalı. **DRY**: aynı mantık birden fazla yerde tekrarlanmamalı. **Erken return**: hata ve istisna durumları başta ayıklanıp asıl mantık iç içe geçmeden yazılmalı. **Magic number**: koda gömülmüş, ne anlama geldiği belirsiz sabit sayı.
- **Ne işe yarar / neden var:** Hepsi aynı hedefe hizmet eder: kodun okunabilir ve değiştirilebilir kalması. **Bunlar tasarım sistemine birebir çevrilir:** tek sorumluluk = bir bileşen tek işi yapar (5.1); DRY = aynı boşluk değeri 40 yerde tekrarlanmaz, token'dan gelir (5.2); magic number = `margin: 22px` yerine ölçekten bir değer (5.5).
- **Nerede karşına çıkar:** Kod incelemelerinde.
- **Örnek kullanım:** "Bu 22px sihirli sayı; spacing ölçeğinden bir değer kullanalım."
- **Karıştırılanlar:** **DRY aşırıya kaçırılabilir.** İki şey bugün aynı görünüyor diye birleştirmek, yarın farklılaştıklarında ikisini de bozan bir soyutlama üretir. "Erken soyutlama, kopyalamadan pahalıdır" yaygın bir karşı-ilkedir.
- **İlgili terimler:** Design token (5.2), Spacing scale (5.5), Refactor (17.9)

### Yorumlar

- **Terim (İngilizce):** Code comments
- **Türkçesi:** Kod yorumları
- **Tanım:** Kodun içine yazılan açıklamalar.
- **Ne işe yarar / neden var:** **İyi yorum "ne yaptığını" değil "neden öyle yaptığını" açıklar** — ne yaptığı zaten kodda yazıyor. "Neden" ise kodda görünmez: hangi kısıt yüzünden, hangi hatayı önlemek için, hangi kararın sonucu olarak. Bu, commit mesajları (15.8) ve ADR'ler (14.12) için de geçerli olan aynı ilkedir.
- **Nerede karşına çıkar:** Kod incelemelerinde.
- **Örnek kullanım:** "Yorum 'diziyi döndürüyor' diyor; bunu zaten görüyoruz. Neden bu sırayla döndüğünü yazsın."
- **İlgili terimler:** ADR (14.12), Commit convention (15.8)

---

## 17.9 Teknik borç

### Technical debt

- **Terim (İngilizce):** Technical debt, tech debt
- **Türkçesi:** Teknik borç
- **Tanım:** Bugün hızlı gitmek için alınan kısa yolun, gelecekte faiziyle ödenecek maliyeti.
- **Ne işe yarar / neden var:** Metafor kasıtlıdır: **borç her zaman kötü değildir.** Bir tarihe yetişmek için bilinçli olarak borçlanmak meşru bir karardır. Sorun, **borcun kayıt altına alınmaması** ve faizinin görünmez birikmesidir.
- **Nerede karşına çıkar:** Planlama toplantılarında ve "bu neden bu kadar yavaş ilerliyor?" sorularında.
- **Örnek kullanım:** "Bunu şimdilik kopyalayalım ama teknik borç olarak kaydedelim ve bir sonraki sprint'te toparlayalım."
- **Karıştırılanlar:** **Tasarım borcu da vardır ve aynı biçimde birikir:** sisteme girmemiş tek kullanımlık bileşenler, ölçek dışı boşluk değerleri, tanımlanmamış durum ekranları (7.9), kopyalanmış ve ayrışmış Figma bileşenleri (5.10). Bunlar da kayıt altına alınmalı ve bütçelenmelidir.
- **İlgili terimler:** Refactor, Code smell, Backlog (2.7)

### Refactor

- **Terim (İngilizce):** Refactoring
- **Türkçesi:** Yeniden yapılandırma
- **Tanım:** Kodun **davranışını değiştirmeden** iç yapısını iyileştirmek.
- **Ne işe yarar / neden var:** Tanımın kritik kısmı "davranışı değiştirmeden"dir: refactor bir yeniden yazım değildir ve kullanıcı hiçbir fark görmemelidir. Testler (17.1) bu güvenceyi sağlayan şeydir — testsiz refactor bir kumar hâline gelir.
- **Nerede karşına çıkar:** Sprint planlamasında ve PR başlıklarında.
- **Örnek kullanım:** "Bu PR sadece refactor; davranış değişmedi, testler aynı kalmalı."
- **Karıştırılanlar:** **Refactor ile yeni özelliği aynı PR'a koymamak önemlidir** — ikisi karışınca inceleyen kişi neyin niyetli neyin kaza olduğunu ayırt edemez.
- **İlgili terimler:** Technical debt, Test (17.1), Pull request (15.5)

### Code smell / Boy scout rule

- **Terim (İngilizce):** Code smell, boy scout rule
- **Türkçesi:** Kod kokusu, izci kuralı
- **Tanım:** **Code smell**, kendisi hata olmayan ama daha derin bir sorunun işareti olan kalıp: aşırı uzun fonksiyon, tekrarlanan mantık, çok fazla parametre. **Boy scout rule**, "dokunduğun yeri bulduğundan biraz daha temiz bırak" ilkesi.
- **Ne işe yarar / neden var:** İzci kuralı, büyük temizlik projeleri beklemek yerine borcu sürekli ve küçük adımlarla azaltmayı önerir. Büyük temizlik projeleri genelde onaylanmaz; küçük iyileştirmeler ise her PR'da yapılabilir.
- **Nerede karşına çıkar:** Kod inceleme kültüründe (17.10).
- **Örnek kullanım:** "Bu dosyaya zaten dokunuyoruz; şu tekrarı da temizleyelim."
- **İlgili terimler:** Technical debt, Refactor

---

## 17.10 Code review kültürü

Detayı 15.5'te. Burada kültür tarafı — ve bu, senin de dahil olduğun bir pratik.

**İyi bir incelemede neye bakılır (sırayla):**

1. **Doğru problemi mi çözüyor?** — En üst seviye soru. Kod kusursuz olabilir ama yanlış şeyi yapıyor olabilir.
2. **Kabul kriterlerini karşılıyor mu?** (2.6) — Boş durum, hata durumu ve yükleme durumu dahil mi?
3. **Uç durumlar düşünülmüş mü?** (4.4) — Çok uzun metin, boş liste, yavaş bağlantı.
4. **Tasarıma uygun mu?** — Senin alanın: ölçüler, durumlar, responsive davranış, erişilebilirlik.
5. **Anlaşılır mı?** — Altı ay sonra biri okuduğunda anlayacak mı?
6. **Biçim** — Buna bakılmaz; formatter'ın (17.7) işidir.

**Yorum yazma biçimi:**

- **Soru sor, hüküm verme.** "Bu neden böyle?" yerine "Bunu şöyle yapmalıydın" demek savunmaya iter.
- **Zorunlu ile öneriyi ayır.** Yaygın bir pratik, öneri niteliğindeki yorumları `nit:` (nitpick) ile işaretlemektir — böylece hangi yorumun bloke ettiği belli olur.
- **İyi olanı da söyle.** İncelemeler yalnızca eleştiriden oluşursa süreç yıpratıcı hâle gelir.
- **Yorum sayısını sınırla.** Otuz yorumlu bir inceleme, incelemeden çok yeniden yazma talebidir; o noktada yorum yazmak yerine konuşmak daha verimlidir.

**Süre de bir kalite meselesidir:** günlerce bekleyen bir PR, dalın eskimesine, çakışmaya (15.3) ve yazanın bağlamı unutmasına yol açar. Birçok ekip bir inceleme süresi hedefi koyar.

---

## 17.11 Kendini test et

**1.** Otomatik testin asıl faydası nedir? Tasarım kalitesiyle bağlantısı ne?

**2.** Test piramidi neyi önerir? Her şeyi E2E ile test etmenin sakıncası nedir?

**3.** Unit test ile integration test hangi farklı hataları yakalar?

**4.** E2E testler neden kırılgandır ve bu kırılganlık nasıl azaltılır?

**5.** Regression test hangi disiplinden doğar?

**6.** Testing Library'nin yaklaşımı seni neden ilgilendirir?

**7.** Test coverage neyi ölçer, neyi ölçmez? Hedefe dönüştüğünde ne olur?

**8.** Flaky test neden test altyapısının en yıkıcı sorunudur? Doğru tepki nedir?

**9.** Aşırı mock'lamanın riski nedir?

**10.** Senaryolu test ile keşifsel test ne bulur? Tasarımcının keşifsel testte avantajı nedir?

**11.** İyi bir hata raporunda en sık atlanan üç alan nedir ve neden önemli?

**12.** Bir hata raporunun geçmesi gereken tek cümlelik testi nedir?

**13.** Severity ile priority arasındaki fark nedir? "Düşük severity + yüksek priority" örneği ver.

**14.** Görsel regresyon testi hangi boşluğu doldurur? Bilinen sorunu nedir?

**15.** CI'daki yeşil erişilebilirlik işareti ne anlama gelir, ne anlama gelmez?

**16.** Performans bütçesi neden gerekli? Lighthouse skoru neyin kanıtı değildir?

**17.** Formatter'ın asıl faydası estetik midir?

**18.** CI gate sayısını artırmanın sakıncası nedir?

**19.** Clean code ilkelerinin tasarım sistemindeki karşılıkları nelerdir? Üç örnek ver.

**20.** DRY ilkesi nasıl aşırıya kaçırılır?

**21.** İyi bir kod yorumu neyi açıklar?

**22.** Teknik borç her zaman kötü müdür? Asıl sorun nedir?

**23.** Tasarım borcu nasıl birikir? Dört örnek ver.

**24.** Refactor'ın tanımındaki kritik kelime nedir? Neden refactor ile yeni özellik aynı PR'a konmaz?

**25.** Kod incelemesinde ilk bakılacak soru nedir? Biçime neden bakılmaz?

---

### Cevaplar

**1.** Asıl faydası hata bulmak değil, **değişiklik yapabilme cesareti vermektir.** Testsiz bir kod tabanında her değişiklik risklidir; ekip dokunmaktan çekinir. Tasarım bağlantısı: test altyapısı zayıf bir projede **küçük tasarım düzeltmeleri de "riskli" sayılıp ertelenir.**

**2.** Tabanda çok sayıda hızlı ve ucuz test (unit), ortada entegrasyon, tepede az sayıda E2E. Her şeyi E2E yapmak CI süresini dakikalardan saate çıkarır ve testler kırılgan olduğu için sürekli bakım ister.

**3.** Unit test **bir parçanın içindeki** hataları yakalar (yanlış hesap, yanlış koşul). Integration test **parçaların arasındaki** hataları yakalar (yanlış alan adı, uyumsuz veri tipi, eksik kontrol) — ki gerçek hataların çoğu buradadır.

**4.** Çünkü gerçek bir tarayıcıda çalışırlar; tasarım veya yapı değişince kırılırlar. Azaltmanın yolu: testleri görsel detaylara değil **erişilebilir adlara ve rollere** bağlamak — bu da semantic HTML'in bir yan faydasıdır.

**5.** **Her hata düzeltmesinin yanına bir test eklenmesi** disiplininden. Böylece aynı hata bir daha sessizce geri dönemez.

**6.** Çünkü bileşenleri CSS sınıflarına göre değil **erişilebilir adlara ve rollere göre** bulmayı teşvik eder. Sonuç: erişilebilirlik için yaptığın işler testleri de sağlamlaştırır. İyi yazılmış bir arayüz, test edilmesi kolay bir arayüzdür.

**7.** **"Kod çalıştırıldı mı"yı ölçer, "doğru mu"yu ölçmez.** %100 kapsamlı bir kod yine de yanlış çalışabilir. Hedefe dönüştüğünde ekip, değer üretmeyen ama yüzdeyi yükselten testler yazmaya başlar; teşhis aracı olmaktan çıkar.

**8.** Çünkü ekip "yine takıldı, tekrar çalıştır" demeye başlar ve **tüm test setine olan güven ölür** — gerçek bir hata olduğunda da aynı refleksle geçilir. Doğru tepki: **düzelt veya karantinaya al**; otomatik yeniden denemeyle örtme.

**9.** Her şey taklit edilirse test, gerçek sistemi değil **kendi kurgusunu** doğrular. Ayrıca fixture verisi gerçekçi değilse (uzun isimler, boş alanlar, uç değerler yoksa) uç durumlar hiç test edilmez.

**10.** Senaryolu test **bilinen davranışları** doğrular; keşifsel test **kimsenin düşünmediği durumları** bulur. Tasarımcının avantajı: uç durumları zaten düşünmüş olduğu için nereyi kurcalayacağını bilir — çok uzun isim, boş liste, yavaş bağlantı, geri tuşu, çift tıklama.

**11.** **Ortam bilgisi, sıklık ve kullanıcı/veri durumu.** Önemli çünkü bir hata yalnızca belirli bir tarayıcıda, belirli bir rolde veya 200 öğeli bir listede oluşuyorsa, bu bilgi olmadan geliştirici onu hiç göremez.

**12.** Raporu okuyan kişinin, **senin bilgisayarına ihtiyaç duymadan** hatayı kendi ekranında görebilmesini sağlamalıdır.

**13.** **Severity** hatanın ne kadar kötü olduğudur (teknik etki); **priority** ne zaman düzeltileceğidir (iş kararı). Düşük severity + yüksek priority örneği: ana sayfadaki logonun yanlış olması — sistemi bozmaz ama herkes görür, hemen düzeltilir.

**14.** **Kod testlerinin yakalayamadığı görsel bozulmaları.** Bir CSS değişikliği başka bir sayfadaki kartı bozabilir ve hiçbir test bunu fark etmez. Bilinen sorunu **yanlış pozitiflerdir**: font yüklenme farkı, animasyon zamanlaması ve dinamik içerik sahte farklar üretir.

**15.** **"Bilinen otomatik kontroller geçti"** anlamına gelir. **"Erişilebilir"** anlamına gelmez — otomatik araçlar sorunların yalnızca bir kısmını (yaygın olarak raporlanan aralık %30–40) yakalar.

**16.** Çünkü performans zamanla bozulur; her ekleme tek tek makul görünür ve birikir. Bütçe bu birikimi mekanik olarak durdurur. Lighthouse skoru bir **laboratuvar ölçümüdür** ve gerileme alarmı olarak değerlidir; **gerçek kullanıcı deneyiminin kanıtı değildir** (saha verisi ayrıdır).

**17.** Hayır — asıl faydası **tartışmayı ortadan kaldırmasıdır.** Kod incelemelerinde biçim tartışılmaz çünkü karar araca devredilmiştir; insan dikkati asıl konulara kalır.

**18.** **Kapı sayısı arttıkça yayın yavaşlar** ve ekip kapıları atlatmanın yollarını aramaya başlar. Zorunlu kontroller gerçekten kritik olanlarla sınırlı tutulmalıdır.

**19.** **Tek sorumluluk** = bir bileşen tek işi yapar. **DRY** = aynı boşluk değeri 40 yerde tekrarlanmaz, token'dan gelir. **Magic number** = `margin: 22px` yerine spacing ölçeğinden bir değer. (Ek: anlamlı isimlendirme = `color-4` değil `color-text-danger`.)

**20.** İki şey **bugün aynı göründüğü için** birleştirilerek. Yarın farklılaştıklarında, o soyutlama ikisini birden bozar. "Erken soyutlama, kopyalamadan pahalıdır" yaygın bir karşı-ilkedir.

**21.** **"Ne yaptığını" değil, "neden öyle yaptığını."** Ne yaptığı zaten kodda görünür; neden görünmez — hangi kısıt yüzünden, hangi hatayı önlemek için, hangi kararın sonucu olarak. Aynı ilke commit mesajları ve ADR'ler için de geçerlidir.

**22.** Hayır. Bir tarihe yetişmek için **bilinçli borçlanmak meşru bir karardır.** Asıl sorun, borcun **kayıt altına alınmaması** ve faizinin görünmez birikmesidir.

**23.** Sisteme girmemiş tek kullanımlık bileşenler · ölçek dışı boşluk ve renk değerleri · tanımlanmamış durum ekranları (boş, hata, yükleme) · kopyalanıp ana bileşenden koparılmış Figma örnekleri. (Ek: güncellenmemiş tasarım dokümantasyonu.)

**24.** **"Davranışı değiştirmeden."** Refactor bir yeniden yazım değildir; kullanıcı hiçbir fark görmemelidir. Yeni özellikle aynı PR'a konmaz çünkü ikisi karışınca inceleyen kişi **neyin niyetli neyin kaza olduğunu** ayırt edemez.

**25.** **"Doğru problemi mi çözüyor?"** Kod kusursuz olabilir ama yanlış şeyi yapıyor olabilir. Biçime bakılmaz çünkü o formatter'ın işidir; insan dikkatini oraya harcamak israftır.

---

**Biten bölüm:** Bölüm 17 — Test, kalite ve kod sağlığı
**Sıradaki bölüm:** Bölüm 18 — Şirket ortamı sözlüğü ve iletişim kalıpları
