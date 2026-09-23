---
title: "Gereksinimler: epic, user story, acceptance criteria"
sectionNumber: "2.6"
category: "urun-gelistirme"
order: 6
cardCount: 6
sourceFile: "02-urun-gelistirme-yasam-dongusu.md"
origin: "material"
flags: []
---
Büyük bir işi, üzerinde çalışılabilir parçalara bölme dili. Bu üç terim senin için en yüksek getirili olanlar: bir özellik talebini bu formatta yazabiliyorsan, hem geliştiriciyle hem yapay zekâyla profesyonel seviyede konuşuyorsun demektir.

### Epic

- **Terim (İngilizce):** Epic
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Tek bir sprint'e sığmayacak kadar büyük, birden fazla story'ye bölünen iş kümesi.
- **Ne işe yarar / neden var:** Büyük hedefin parçalara bölünürken kaybolmamasını sağlar. Yirmi ayrı ticket arasında "aslında hepsi ödeme akışının parçası" bilgisini taşıyan katman budur.
- **Nerede karşına çıkar:** Jira/Linear gibi araçlarda hiyerarşinin üst seviyesi. Roadmap'te bir satır genelde bir epic'tir.
- **Örnek kullanım:** "Ödeme epic'i altında sekiz story var, ikisi bu sprint'te."
- **İlgili terimler:** User story, Task, Roadmap (2.9)

### User story

- **Terim (İngilizce):** User story
- **Türkçesi:** Kullanıcı hikâyesi
- **Tanım:** Bir gereksinimi, kullanıcının bakış açısından tek cümlede anlatan yazım biçimi.
- **Ne işe yarar / neden var:** Gereksinimi teknik görevden ayırıp amaca bağlar. Standart kalıbı: *"[rol] olarak, [şunu] yapmak istiyorum, çünkü [şu sebeple]."* Son kısım en önemlisidir — sebep yazılırsa geliştirici daha iyi bir çözüm önerebilir; yazılmazsa sadece söyleneni yapar.
- **Nerede karşına çıkar:** Backlog'daki ticket başlıklarında. Sprint planning'de üzerinde konuşulan birim.
- **Örnek kullanım:** "Kayıtlı kullanıcı olarak, sepetimi cihazlar arasında görmek istiyorum, çünkü telefonda ekleyip bilgisayarda satın alıyorum."
- **Karıştırılanlar:** *User story* ≠ *task*. Story kullanıcı için bir değer ifade eder; task o değeri üretmek için yapılan teknik adımdır. "Veritabanına sepet tablosu ekle" bir task'tır, story değil.
- **İlgili terimler:** Epic, Task, Acceptance criteria

### Task

- **Terim (İngilizce):** Task (subtask)
- **Türkçesi:** Görev / alt görev
- **Tanım:** Bir story'yi hayata geçirmek için yapılması gereken tekil teknik iş.
- **Ne işe yarar / neden var:** İşin kim tarafından, hangi sırayla yapılacağını netleştirir. Bir story'nin altında hem tasarım hem front-end hem back-end task'ı olabilir.
- **Nerede karşına çıkar:** Ticket'ların altındaki alt maddeler.
- **Örnek kullanım:** "Story'nin tasarım task'ı bitti, front-end task'ı bu hafta başlıyor."
- **İlgili terimler:** User story, Ticket (2.7)

### Acceptance criteria

- **Terim (İngilizce):** Acceptance criteria — AC
- **Türkçesi:** Kabul kriterleri
- **Tanım:** Bir işin "bitti" sayılabilmesi için sağlanması gereken, tek tek kontrol edilebilir koşullar listesi.
- **Ne işe yarar / neden var:** "Bitti" kelimesinin herkes için aynı anlama gelmesini sağlar. Kriterler yazılmazsa iş, geliştiricinin doğru sandığı yerde biter; sonra revizyon turu başlar. Bu, dosyadaki en yüksek getirili tek beceridir: bir isteği kabul kriterleriyle yazabilmek, gelen çıktının doğruluğunu doğrudan artırır.
- **Nerede karşına çıkar:** Her ticket'ın içinde. QA testini buradan yazar. Yapay zekâya prompt yazarken de aynı işlevi görür (19.5).
- **Örnek kullanım:** "AC'ye 'boş sonuç durumunda ne görüneceği' maddesini ekleyelim, yoksa boş ekran tasarımsız kalır."
- **Karıştırılanlar:** *Acceptance criteria* ≠ *Definition of Done*. AC o işe özeldir ("filtre seçildiğinde URL güncellenir"); DoD (2.10) tüm işler için geçerli genel standarttır ("kod review'dan geçti, testler yeşil").
- **İlgili terimler:** User story, Given/When/Then, Definition of Done (2.10)

**İyi kabul kriteri nasıl anlaşılır:** Her madde "evet" veya "hayır" diye cevaplanabiliyorsa iyidir. "Sayfa hızlı açılmalı" kötü; "Sayfa 3G bağlantıda 3 saniyeden kısa sürede etkileşime hazır olmalı" iyi. Ayrıca sadece başarılı durumu değil, boş durumu, hata durumunu ve yükleme durumunu da kapsamalıdır (7.9).

### Given / When / Then

- **Terim (İngilizce):** Given / When / Then — GWT
- **Türkçesi:** Verilen / olduğunda / o zaman
- **Tanım:** Bir kabul kriterini üç parçaya bölerek yazma biçimi: başlangıç durumu, yapılan eylem, beklenen sonuç.
- **Ne işe yarar / neden var:** Kriteri belirsizlikten arındırır. Üç parça da yazılmak zorunda olduğu için "hangi durumda" sorusu atlanamaz — en sık atlanan bilgi budur.
- **Nerede karşına çıkar:** Kabul kriterlerinde ve otomatik testlerde. Cucumber gibi test araçlarının kullandığı Gherkin dili bu yapıya dayanır.
- **Örnek kullanım:** "Given kullanıcı giriş yapmamış, When sepete ürün ekler, Then ürün korunur ve giriş sonrası sepette görünür."
- **İlgili terimler:** Acceptance criteria, E2E test (17.2)
- **Kaynak:** Martin Fowler, *Given When Then* — https://martinfowler.com/bliki/GivenWhenThen.html (Dan North ve Chris Matts tarafından BDD kapsamında geliştirildi.)

### Non-functional requirement

- **Terim (İngilizce):** Non-functional requirement — NFR
- **Türkçesi:** İşlevsel olmayan gereksinim
- **Tanım:** Ürünün ne yaptığını değil, nasıl olması gerektiğini tanımlayan gereksinimler: hız, erişilebilirlik, güvenlik, tarayıcı desteği, dil desteği.
- **Ne işe yarar / neden var:** Bunlar yazılmazsa hiç kimse sahiplenmez ve en sona kalır — sona kalınca da yapılmaz. Erişilebilirlik ve performans en sık bu yüzden düşer.
- **Nerede karşına çıkar:** PRD'de ayrı başlık olarak. Kurumsal projelerde sözleşmeye girer.
- **Örnek kullanım:** "NFR olarak yazalım: tüm etkileşimler klavyeyle erişilebilir olmalı ve kontrast WCAG AA'yı sağlamalı."
- **İlgili terimler:** Acceptance criteria, a11y (Bölüm 6), Performance budget (17.6)
