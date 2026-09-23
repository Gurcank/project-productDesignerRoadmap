# Bölüm 2 — Ürün geliştirme yaşam döngüsü

Bölüm 1 "makine nasıl çalışır"ı anlattı. Bu bölüm "insanlar nasıl çalışır"ı anlatıyor: bir fikrin kimin elinden geçerek, hangi belgelere dönüşerek, hangi kararlarla süzülerek yayına gittiğini.

Bu bölüm senin için diğerlerinden daha kritik. Sebep şu: teknik terimleri bilmemek seni yavaşlatır, ama **süreç terimlerini bilmemek seni masadan dışlar.** "Bu acceptance criteria'sı yazılmamış" veya "bu scope creep" cümlelerini kuramayan biri, kararın alındığı toplantıda dinleyici konumunda kalır.

Bu bölümdeki bilginin çoğu yavaş eskiyen kategoride. Kavramlar 20 yıllık; sadece hangi framework'ün moda olduğu değişiyor.

---

## 2.1 Ekipteki roller

Rol adları şirketten şirkete kayar. Aynı işi bir yerde "PM", başka yerde "PO", bir başkasında "Product Lead" yapıyor olabilir. Aşağıdaki tanımlar **tipik** dağılımı anlatır; bir şirkete girdiğinde ilk yapman gereken şey, o şirketteki gerçek dağılımı sormaktır.

### Product Manager

- **Terim (İngilizce):** Product Manager — PM
- **Türkçesi:** Ürün yöneticisi
- **Tanım:** Ne yapılacağına ve neden yapılacağına karar veren, ürünün sonucundan sorumlu kişi.
- **Ne işe yarar / neden var:** Kullanıcı ihtiyacı, iş hedefi ve teknik gerçeklik üç ayrı yönden çeker. PM bu üçünü tek bir karara indirger. Otoritesi genelde yetkiden değil, ikna ve gerekçeden gelir.
- **Nerede karşına çıkar:** Roadmap, öncelik ve scope kararlarında muhatabın. Bir özelliğin neden yapıldığını en iyi PM açıklar.
- **Örnek kullanım:** "PM'e sorayım, bu özellik bu çeyrekte mi yoksa sonrakinde mi?"
- **Karıştırılanlar:** *Product Manager* ≠ *Project Manager*. Product Manager **ne** yapılacağına, Project Manager **ne zaman ve nasıl** teslim edileceğine odaklanır. İkisi de "PM" diye kısaltılır; hangisi olduğunu bağlamdan çıkar.
- **İlgili terimler:** Product Owner, Roadmap (2.9), Prioritization (2.7)

### Product Owner

- **Terim (İngilizce):** Product Owner — PO
- **Türkçesi:** Ürün sahibi
- **Tanım:** Scrum çerçevesinde backlog'un sahibi olan, ekibin ne üzerinde çalışacağını sıraya koyan rol.
- **Ne işe yarar / neden var:** Ekibe tek bir öncelik kaynağı verir. Herkes ayrı ayrı iş talep ederse ekip dağılır; PO bu talepleri tek bir sıralı listeye indirger.
- **Nerede karşına çıkar:** Scrum uygulayan şirketlerde. Sprint planning ve grooming toplantılarının sahibi.
- **Örnek kullanım:** "Bu ticket'ı backlog'a ekledim ama önceliğini PO belirleyecek."
- **Karıştırılanlar:** *PO* ≠ *PM*. PO, Scrum'ın resmî bir rolüdür ve odağı backlog'dur; PM daha geniş bir ürün sorumluluğudur. Bazı şirketlerde aynı kişi ikisini birden yapar, bazılarında PO daha operasyonel bir rol olarak konumlanır.
- **İlgili terimler:** Backlog (2.7), Scrum (3.2), Sprint planning (3.2)

### Product Designer

- **Terim (İngilizce):** Product Designer
- **Türkçesi:** Ürün tasarımcısı
- **Tanım:** Bir ürünün akışını, yapısını ve arayüzünü kurgulayan; problemden çözüme kadar tasarım kararlarını veren kişi.
- **Ne işe yarar / neden var:** Bir çözüm fikri ile kullanılabilir bir ekran arasındaki mesafeyi kapatır. Sadece güzel ekran çizmez; kullanıcının hangi adımda ne göreceğine, hangi durumda ne olacağına karar verir.
- **Nerede karşına çıkar:** Discovery'den launch'a kadar her fazda. Ekiplerde tek bir tasarımcı varsa araştırma, IA, arayüz, tasarım sistemi ve içerik yazımı aynı kişiye düşer.
- **Örnek kullanım:** "Akışın ikinci adımını Product Designer yeniden kurguladı, dönüşüm iki kat arttı."
- **Karıştırılanlar:** *Product Designer* ≠ *UI Designer* ≠ *Graphic Designer*. UI Designer daha çok arayüz katmanına odaklanır; Product Designer problem tanımından itibaren sürece girer. Graphic Designer marka ve görsel iletişim tarafındadır.
- **İlgili terimler:** Product Engineer, UX/UI ayrımı (4.1), Handoff (2.10)

### Product Engineer

- **Terim (İngilizce):** Product Engineer
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Sadece verilen görevi kodlamayan; ürünün ne olması gerektiğine, nasıl görüneceğine ve nasıl çalışacağına dair karara da katılan geliştirici.
- **Ne işe yarar / neden var:** Klasik ayrımda tasarımcı ekranı çizer, geliştirici uygular ve ikisi arasında bilgi kaybı olur. Product Engineer bu kaybı, aynı kişinin her iki tarafa da hâkim olmasıyla azaltır. Küçük ekiplerde en verimli rol budur; büyük ekiplerde ise "spesifikasyonu sorgulayan geliştirici" anlamına gelir.
- **Nerede karşına çıkar:** Startup iş ilanlarında son yıllarda yaygınlaştı. `[DEĞİŞKEN BİLGİ]` Rolün tanımı henüz oturmuş değil; şirketten şirkete anlamı değişiyor, iş görüşmesinde ne kastedildiğini sor.
- **Örnek kullanım:** "Ekip küçük; ayrı tasarımcı yok, product engineer olarak hem akışı kurguluyorum hem uyguluyorum."
- **Karıştırılanlar:** *Product Engineer* ≠ *Full-stack developer*. Full-stack teknik kapsamı (ön + arka yüz) anlatır; Product Engineer karar kapsamını (ürün + uygulama) anlatır. Bir kişi ikisi birden olabilir.
- **İlgili terimler:** Product Designer, Full-stack (1.6)

### Tech Lead / Engineering Manager

- **Terim (İngilizce):** Tech Lead (TL), Engineering Manager (EM)
- **Türkçesi:** Teknik lider, mühendislik yöneticisi
- **Tanım:** Tech Lead teknik kararların, Engineering Manager ise ekibin ve insan yönetiminin sorumlusudur.
- **Ne işe yarar / neden var:** Bir ekipte "hangi teknoloji, hangi mimari, hangi standart" sorularının bir sahibi olması gerekir (TL). Ayrıca kimin ne üzerinde çalıştığı, kimin geliştirilmesi gerektiği de ayrı bir iştir (EM).
- **Nerede karşına çıkar:** Mimari kararlarda ve teknik itirazlarda TL, kaynak/zaman tartışmalarında EM devrededir.
- **Örnek kullanım:** "Kütüphane seçimini TL onaylaması gerekiyor, tek başımıza karar veremeyiz."
- **İlgili terimler:** ADR (14.12), Code review (17.10)

### QA

- **Terim (İngilizce):** QA — Quality Assurance
- **Türkçesi:** Kalite güvence
- **Tanım:** Ürünün beklendiği gibi çalıştığını yayından önce sistematik olarak kontrol eden rol.
- **Ne işe yarar / neden var:** Geliştirici kendi yazdığı şeyi test ederken kendi varsayımlarının içinde kalır. QA, ürünü "kullanıcı gibi ama kötü niyetli" bir gözle dener: boş bırakılan alanlar, çok uzun metinler, yavaş bağlantı, geri tuşu.
- **Nerede karşına çıkar:** Staging ortamında. Bir bug raporu geldiğinde muhtemelen QA'den gelmiştir.
- **Örnek kullanım:** "QA staging'de üç bug açtı; ikisi görsel, biri akışı kırıyor."
- **Karıştırılanlar:** *QA* ≠ *test yazan geliştirici*. Otomatik test yazmak geliştiricinin işi olabilir; QA daha çok senaryo ve kabul kontrolüdür. Küçük ekiplerde ayrı bir QA rolü yoktur, iş ekibe dağılır.
- **İlgili terimler:** Test türleri (17.2), Bug report (17.5), Staging (1.8)

### DevOps / SRE

- **Terim (İngilizce):** DevOps, SRE — Site Reliability Engineering
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Kodun yayınlanma, çalışma ve izlenme süreçlerinden sorumlu rol ve yaklaşım.
- **Ne işe yarar / neden var:** Kod yazmakla kodun canlıda ayakta kalması ayrı işlerdir. Bu rol, yayın hattını (CI/CD), sunucuları ve izlemeyi kurar. Küçük projelerde bu işin çoğunu Vercel gibi platformlar üstlenir; ayrı bir rol gerekmez.
- **Nerede karşına çıkar:** Deploy sorunlarında, çökme durumlarında, performans krizlerinde.
- **Örnek kullanım:** "Deploy pipeline'ı kırıldı, DevOps'a haber verdim."
- **İlgili terimler:** CI/CD (16.1), Monitoring (16.10), Infrastructure (1.6)

### Stakeholder

- **Terim (İngilizce):** Stakeholder
- **Türkçesi:** Paydaş
- **Tanım:** Ürünün sonucundan etkilenen veya karara söz hakkı olan herkes: yönetici, satış, pazarlama, hukuk, müşteri destek, bazen müşterinin kendisi.
- **Ne işe yarar / neden var:** Bir ürün sadece kullanıcı için değil, birçok tarafın kısıtları içinde yapılır. Bu tarafları önceden tanımak, iş bittikten sonra gelen "ama bu böyle olmamalıydı" itirazını engeller.
- **Nerede karşına çıkar:** Kickoff toplantısında ilk yapılan şey stakeholder listesini çıkarmaktır. Onay gerektiren her adımda karşına çıkar.
- **Örnek kullanım:** "Fiyat sayfasını yayınlamadan önce hukuk ve satış tarafındaki stakeholder'lardan onay almamız lazım."
- **Karıştırılanlar:** *Stakeholder* ≠ *kullanıcı*. Kullanıcı ürünü kullanır; stakeholder ürünün sonucuyla ilgilenir. İkisi çoğu zaman farklı kişilerdir ve istekleri çelişebilir.
- **İlgili terimler:** Kickoff (18.5), Sign-off (2.10), Escalation (3.5)

### Cross-functional team

- **Terim (İngilizce):** Cross-functional team (squad, pod)
- **Türkçesi:** Çapraz işlevli ekip
- **Tanım:** Bir işi baştan sona bitirebilmek için gereken tüm rolleri içinde barındıran ekip.
- **Ne işe yarar / neden var:** Roller ayrı departmanlarda otursaydı her adım için başka bir departmandan sıra beklenirdi. Aynı ekipte tasarımcı, geliştirici ve PM olunca iş dışarı çıkmadan biter.
- **Nerede karşına çıkar:** Şirket organizasyon şemalarında. "Squad" adı Spotify'ın yayınladığı modelden yaygınlaştı.
- **Örnek kullanım:** "Ödeme squad'ı bu işi tek başına bitirebilir, başka ekibe bağımlılığımız yok."
- **İlgili terimler:** Dependency (3.5), Agile (3.1)

---

## 2.2 Ürün geliştirme yaşam döngüsü

Bir fikrin yayına gidene kadar geçtiği fazların bütünü. Bu fazlar bir çizgi değil, bir döngüdür: son adım ilk adımı besler. Fazların tek tek detayı **Bölüm 20**'de; burada kavramın kendisi.

### Product development lifecycle

- **Terim (İngilizce):** Product development lifecycle (PDLC)
- **Türkçesi:** Ürün geliştirme yaşam döngüsü
- **Tanım:** Bir ürün fikrinin araştırmadan yayına ve ölçüme kadar geçtiği fazların tamamı.
- **Ne işe yarar / neden var:** Ortak bir dil sağlar. "Hangi fazdayız?" sorusunun cevabı, o an hangi soruların açık, hangilerinin kapanmış olması gerektiğini belirler. Discovery fazında "hangi rengi kullanalım" tartışması erken, delivery fazında "acaba bu özelliğe gerek var mı" tartışması geçtir.
- **Nerede karşına çıkar:** Proje planlamasında ve "nerede tıkandık" konuşmalarında.
- **Örnek kullanım:** "Henüz discovery'deyiz, arayüz kararına girmek için erken."
- **Karıştırılanlar:** *PDLC* ≠ *SDLC* (Software Development Lifecycle). SDLC daha dar: kodun yazılıp yayınlanmasıyla ilgili. PDLC problem tanımından ölçüme kadar geniş.
- **İlgili terimler:** Discovery (2.3), Delivery, Bölüm 20

### Discovery / Delivery (dual-track)

- **Terim (İngilizce):** Discovery track, Delivery track — birlikte: dual-track
- **Türkçesi:** Keşif ve teslim hatları
- **Tanım:** Ne yapılacağının araştırıldığı hat (discovery) ile kararlaştırılan şeyin üretildiği hat (delivery), aynı anda ve paralel yürür.
- **Ne işe yarar / neden var:** Sıralı çalışılırsa (önce hepsini araştır, sonra hepsini üret) ekibin yarısı sürekli boş kalır ve araştırma sonuçları eskiyerek gelir. Paralel yürütünce, bu sprint'te üretilen şey bir önceki sprint'te keşfedilmiş olur.
- **Nerede karşına çıkar:** Ürün ekiplerinin çalışma modelini anlatırken. Tasarımcının çoğu zaman iki hatta birden olduğu yer burasıdır: bu sprint'in tasarımını teslim ederken, gelecek sprint'in araştırmasını yapar.
- **Örnek kullanım:** "Dual-track çalışıyoruz; ben bu sprint'te sonraki özelliğin akışını çıkarıyorum, geliştirme bir önceki kararı uyguluyor."
- **İlgili terimler:** Discovery (2.3), Sprint (3.2)

### Iteration

- **Terim (İngilizce):** Iteration
- **Türkçesi:** Yineleme
- **Tanım:** Bir şeyi bitirip, tepki alıp, aldığın tepkiyle yeniden ele alma turu.
- **Ne işe yarar / neden var:** İlk seferde doğru yapmanın imkânsız olduğu kabulüne dayanır. Küçük ve sık turlar, hatanın maliyetini düşürür — yanlış giden şey iki haftalık iş olur, altı aylık değil.
- **Nerede karşına çıkar:** Hem tasarım hem geliştirme sürecinde. "İkinci iterasyonda düzeltiriz" cümlesi bir erteleme değil, planlanmış bir yaklaşımdır.
- **Örnek kullanım:** "İlk iterasyonda sadece temel akışı çıkaralım, kullanıcı tepkisine göre ikinciyi şekillendiririz."
- **İlgili terimler:** Feedback loop, MVP (2.8), Agile (3.1)

### Feedback loop

- **Terim (İngilizce):** Feedback loop
- **Türkçesi:** Geri bildirim döngüsü
- **Tanım:** Yapılan şeyin sonucunun ölçülüp bir sonraki kararı beslediği kapalı devre.
- **Ne işe yarar / neden var:** Döngü kapanmazsa öğrenme olmaz. Yayınladıktan sonra ölçmeyen bir ekip, aynı hatayı tekrar eder. Döngünün **hızı** ekibin öğrenme hızıdır.
- **Nerede karşına çıkar:** Analytics ve deneme kurulumu tartışmalarında. Yapay zekâyla çalışırken de aynı kavram geçerlidir (19.6).
- **Örnek kullanım:** "Yayına aldık ama ölçüm koymadık; feedback loop kapanmıyor, iyileştirdik mi bilmiyoruz."
- **İlgili terimler:** Build-Measure-Learn, Success metric (3.7), Analytics (16.11)

### Build – Measure – Learn

- **Terim (İngilizce):** Build-Measure-Learn loop
- **Türkçesi:** Üret–ölç–öğren döngüsü
- **Tanım:** Küçük bir şey üret, etkisini ölç, sonuçtan öğren ve tekrar başla biçimindeki üç adımlı döngü.
- **Ne işe yarar / neden var:** Eric Ries'in *The Lean Startup* kitabıyla yaygınlaşan çerçeve. Amacı ürün üretmek değil, **doğrulanmış öğrenme** üretmek olarak tanımlanır — yani üretilen her şeyin bir soruyu cevaplaması beklenir.
- **Nerede karşına çıkar:** Startup ve yeni ürün konuşmalarında. MVP kavramının arka planındaki mantık budur.
- **Örnek kullanım:** "Build-measure-learn açısından bakınca bu özellik hiçbir soruya cevap vermiyor; ölçemeyeceksek yapmayalım."
- **İlgili terimler:** MVP (2.8), Hypothesis (2.3), Feedback loop

---

## 2.3 Discovery: problemi bulma aşaması

Çözüme geçmeden önce doğru problemi bulma aşaması. En sık atlanan faz ve en pahalı hataların kaynağı: yanlış problemi mükemmel çözmek, doğru problemi kötü çözmekten daha maliyetlidir.

### Discovery

- **Terim (İngilizce):** Discovery (product discovery)
- **Türkçesi:** Keşif
- **Tanım:** Ne yapılacağına karar vermeden önce problemi, kullanıcıyı ve alternatifleri araştırma çalışması.
- **Ne işe yarar / neden var:** Yanlış şeyi üretmenin maliyetini düşürür. Bir hafta araştırma, üç aylık yanlış geliştirmeyi engelleyebilir.
- **Nerede karşına çıkar:** Yeni bir özellik veya ürün gündeme geldiğinde ilk faz. "Discovery yaptık mı?" sorusu bir kalite kapısıdır.
- **Örnek kullanım:** "Discovery'de altı kullanıcıyla konuştuk; hiçbiri bu problemi bizim varsaydığımız gibi tarif etmedi."
- **Karıştırılanlar:** *Discovery* ≠ *research*. Research bir yöntem, discovery ise o yöntemleri de içeren bir faz.
- **İlgili terimler:** User research (2.4), Problem statement, Hypothesis

### Problem statement

- **Terim (İngilizce):** Problem statement
- **Türkçesi:** Problem tanımı
- **Tanım:** Çözülmek istenen problemi, çözümden bahsetmeden yazan kısa metin.
- **Ne işe yarar / neden var:** İnsanlar problemi çözüm diliyle anlatma eğilimindedir ("bize bir filtre lazım"). Bu, alternatifleri daha başta öldürür. Problem tanımı çözümü askıya alır ve ekibin birden fazla yol düşünmesini sağlar.
- **Nerede karşına çıkar:** Her spec ve PRD'nin ilk bölümü. Kickoff'ta üzerinde uzlaşılması gereken ilk şey.
- **Örnek kullanım:** "Problem statement'ı yeniden yazalım: 'filtre yok' bir problem değil, 'kullanıcı aradığı ürünü listede bulamıyor' bir problem."
- **Karıştırılanlar:** İçinde çözüm geçen bir cümle problem tanımı değildir. Test: cümleyi okuyan biri en az iki farklı çözüm düşünebiliyorsa iyi yazılmıştır.
- **İlgili terimler:** Hypothesis, Spec (2.5), JTBD

### Hypothesis

- **Terim (İngilizce):** Hypothesis
- **Türkçesi:** Hipotez
- **Tanım:** "Şunu yaparsak şu olacak, çünkü şu" biçiminde yazılan, test edilebilir tahmin.
- **Ne işe yarar / neden var:** Bir kararı fikirden çıkarıp sınanabilir hâle getirir. Hipotez yazılmazsa, iş bittikten sonra herkes sonucu kendi lehine yorumlar.
- **Nerede karşına çıkar:** A/B test kurgusunda, deneysel özelliklerde, PRD'nin başında.
- **Örnek kullanım:** "Hipotez: kayıt formunu üç alandan bire indirirsek tamamlama oranı artar, çünkü terk edilme en çok ikinci alanda oluyor."
- **Karıştırılanlar:** *Hypothesis* ≠ *assumption*. Hipotez sınanmak üzere yazılır ve bir ölçütü vardır; varsayım çoğu zaman farkında bile olunmadan taşınır.
- **İlgili terimler:** Assumption (2.4), A/B test (4.10), Success metric (3.7)

### Jobs To Be Done

- **Terim (İngilizce):** Jobs To Be Done — JTBD
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "yapılması gereken iş" olarak açıklanır.
- **Tanım:** Kullanıcının bir ürünü satın almasını, ürünün özelliklerine değil, o kişinin hayatında halletmeye çalıştığı işe bağlayan bakış açısı.
- **Ne işe yarar / neden var:** Rekabeti yeniden tanımlar. Bir not uygulamasının rakibi başka bir not uygulaması değil, kâğıt ve kalem olabilir. Kullanıcıyı demografik özellikleriyle değil, içinde bulunduğu durumla tarif eder.
- **Nerede karşına çıkar:** Discovery ve konumlandırma tartışmalarında. Persona yaklaşımına alternatif veya tamamlayıcı olarak kullanılır.
- **Örnek kullanım:** "JTBD açısından bakalım: kullanıcı bu ekranı 'rapor almak' için değil, 'toplantıda haklı çıkmak' için açıyor."
- **Karıştırılanlar:** *JTBD* ≠ *use case*. Use case sistemle etkileşimi tarif eder; JTBD kullanıcının hayatındaki amacı tarif eder ve ürünü hiç anmayabilir.
- **İlgili terimler:** Persona (2.4), Problem statement
- **Not:** Yaklaşım Clayton Christensen ve Tony Ulwick'in çalışmalarıyla ilişkilendirilir. `[EMİN DEĞİLİM]` İki farklı JTBD okulu var ve aralarında yöntem farkı bulunuyor; tek bir kanonik tanım olduğunu varsayma.

### Validation

- **Terim (İngilizce):** Validation
- **Türkçesi:** Doğrulama
- **Tanım:** Bir varsayımın veya çözümün gerçekten işe yarayıp yaramadığını, üretime girmeden önce sınamak.
- **Ne işe yarar / neden var:** Ekibin kendine olan güvenini veriyle değiştirir. Kullanıcı testi, sahte buton denemesi, ön kayıt sayfası gibi düşük maliyetli yöntemlerle yapılır.
- **Nerede karşına çıkar:** Büyük yatırım gerektiren kararların öncesinde. "Bunu valide ettik mi?" sorusu bir kapı görevi görür.
- **Örnek kullanım:** "Özelliği yapmadan önce landing page ile talebi valide edelim; ilgi yoksa üç haftalık iş boşa gitmemiş olur."
- **İlgili terimler:** Hypothesis, POC (2.8), Usability test (4.10)

### Product-market fit

- **Terim (İngilizce):** Product-market fit — PMF
- **Türkçesi:** Ürün-pazar uyumu
- **Tanım:** Ürünün, gerçekten bir talebi karşıladığı ve kullanıcıların kendiliğinden geldiği/kaldığı nokta.
- **Ne işe yarar / neden var:** Bir startup'ın en kritik eşiği. PMF öncesinde ölçeklendirmeye, reklam harcamasına veya ekip büyütmeye yatırım yapmak, delik bir kovaya su doldurmaya benzer.
- **Nerede karşına çıkar:** Yatırım ve strateji konuşmalarında. Kesin bir ölçütü yoktur; elde tutma (retention) oranı en sık kullanılan göstergedir.
- **Örnek kullanım:** "PMF'e ulaşmadan pazarlama bütçesi artırmak riskli; önce elde tutmayı düzeltelim."
- **İlgili terimler:** MVP (2.8), North star metric (3.7)

---

## 2.4 Araştırma ve kullanıcı bilgisi

Discovery'nin içindeki yöntemler ve çıktılar. Yöntemlerin detayı Bölüm 4.10'da; burada kavramlar ve çıktı adları.

### User research

- **Terim (İngilizce):** User research
- **Türkçesi:** Kullanıcı araştırması
- **Tanım:** Kullanıcının gerçekte ne yaptığını ve neye ihtiyaç duyduğunu sistemli biçimde öğrenme çalışması.
- **Ne işe yarar / neden var:** Ekibin kendi sezgisi, kendi kullanım alışkanlığını yansıtır — ve ekip kullanıcı gibi değildir. Araştırma bu boşluğu kapatır. İkiye ayrılır: **qualitative** (nitel — az kişi, derin anlayış, "neden") ve **quantitative** (nicel — çok kişi, sayısal, "ne kadar").
- **Nerede karşına çıkar:** Discovery fazında ve tasarım kararlarının gerekçesi sorulduğunda.
- **Örnek kullanım:** "Nicel veri düşüşün ikinci adımda olduğunu söylüyor; nedenini anlamak için nitel görüşme yapmamız lazım."
- **Karıştırılanlar:** *Nitel* ve *nicel* farklı sorulara cevap verir; biri diğerinin yerine geçmez. Beş kişiyle görüşüp "kullanıcıların %60'ı" demek yöntem hatasıdır.
- **İlgili terimler:** Insight, Persona, Usability test (4.10)

### Insight

- **Terim (İngilizce):** Insight
- **Türkçesi:** İçgörü
- **Tanım:** Ham veriden çıkarılan, bir karara yön verebilecek anlamlı sonuç.
- **Ne işe yarar / neden var:** Veri tek başına karar üretmez. "Kullanıcıların %40'ı ikinci adımda çıkıyor" bir bulgudur; "kullanıcılar ikinci adımda neden kart bilgisi istendiğini anlamıyor" bir içgörüdür. İkincisi ne yapacağını söyler.
- **Nerede karşına çıkar:** Araştırma sunumlarında ve tasarım gerekçelerinde.
- **Örnek kullanım:** "Bulguları listeledik ama içgörüye dönüştürmedik; bu hâliyle karar veremeyiz."
- **Karıştırılanlar:** *Insight* ≠ *data* ≠ *finding*. Data ham sayı, finding gözlem, insight yorumlanmış ve eyleme dönüşebilir hâli.
- **İlgili terimler:** User research, Research synthesis (4.10)

### Persona

- **Terim (İngilizce):** Persona
- **Türkçesi:** Kullanıcı profili
- **Tanım:** Araştırmadan çıkan tipik kullanıcı davranışlarını temsil eden kurgusal kişi tanımı.
- **Ne işe yarar / neden var:** Ekibin "kullanıcı" derken aynı kişiyi düşünmesini sağlar. Bir tasarım kararını tartışırken soyut "kullanıcı" yerine somut bir profil üzerinden konuşmak, tartışmayı zevk tartışması olmaktan çıkarır.
- **Nerede karşına çıkar:** Araştırma çıktısı olarak. Tasarım ekiplerinin duvarında veya proje dosyasının başında.
- **Örnek kullanım:** "Bu akış ileri seviye persona için uygun ama ilk kez giren kullanıcı için fazla adım var."
- **Karıştırılanlar:** Araştırmaya dayanmayan, hayal edilerek yazılan persona işe yaramaz; hatta ekibin varsayımlarını resmîleştirerek zarar verir. Sık yapılan hata, personayı yaş ve meslek gibi demografiyle doldurup davranışı yazmamaktır.
- **İlgili terimler:** JTBD (2.3), User research, User flow (4.4)

### Assumption

- **Terim (İngilizce):** Assumption
- **Türkçesi:** Varsayım
- **Tanım:** Doğru olduğu kabul edilen ama kanıtlanmamış inanç.
- **Ne işe yarar / neden var:** Her projede varsayım vardır; tehlikeli olan varsayımın olması değil, **görünmez** olmasıdır. Yazıya döküldüğünde sınanabilir ve tartışılabilir hâle gelir.
- **Nerede karşına çıkar:** Spec'lerde ayrı bir başlık olarak. Ayrıca "bunu neden böyle yaptık" sorusunun cevabı çoğu zaman yazılmamış bir varsayımdır.
- **Örnek kullanım:** "Burada varsayımımız kullanıcının kurumsal e-postası olduğu. Yanlışsa tüm kayıt akışı değişir."
- **İlgili terimler:** Hypothesis (2.3), Risk (18.4), Constraint (18.4)

### Pain point

- **Terim (İngilizce):** Pain point
- **Türkçesi:** Sorun noktası / acı noktası
- **Tanım:** Kullanıcının deneyim sırasında zorlandığı, sinirlendiği veya vazgeçtiği belirli an.
- **Ne işe yarar / neden var:** Genel şikâyeti belirli bir ana bağlar. "Site kullanışsız" bir şikâyettir; "ödeme adımında kart bilgisi girdikten sonra sayfa başa dönüyor" bir pain point'tir ve çözülebilir.
- **Nerede karşına çıkar:** Araştırma çıktılarında ve journey map üzerinde işaretlenmiş noktalarda.
- **Örnek kullanım:** "En büyük pain point kayıt değil, kayıt sonrası boş ekran — kullanıcı ne yapacağını bilmiyor."
- **İlgili terimler:** User journey, Empty state (7.9), Insight

### User journey / Journey map

- **Terim (İngilizce):** User journey, Journey map
- **Türkçesi:** Kullanıcı yolculuğu, yolculuk haritası
- **Tanım:** Kullanıcının bir hedefe ulaşırken geçtiği tüm adımların, duygularıyla ve sorun noktalarıyla birlikte çıkarıldığı harita.
- **Ne işe yarar / neden var:** Ürünün dışında kalan adımları da görünür kılar: reklamı görme, arkadaşından duyma, destek ekibine yazma, e-posta bekleme. Deneyim sadece ekranlarda yaşanmaz; bu harita ekran dışını da masaya getirir.
- **Nerede karşına çıkar:** Discovery çıktısı olarak ve deneyim iyileştirme çalışmalarında.
- **Örnek kullanım:** "Journey map'te en büyük kopma ürünün içinde değil, onay e-postasının 20 dakika geç gelmesinde."
- **Karıştırılanlar:** *User journey* ≠ *user flow*. Journey daha geniş ve duygusaldır, ürün dışını da kapsar; user flow (4.4) ürün içindeki ekran ve karar adımlarını gösterir.
- **İlgili terimler:** Pain point, User flow (4.4), Funnel (4.10)

---

## 2.5 Belgeler: spec, PRD, one-pager, brief

Kararların yazıya döküldüğü formatlar. Yazılmamış karar, karar değildir — hatırlanma biçimi kişiden kişiye değişir ve sonra tartışma yeniden açılır.

### Spec

- **Terim (İngilizce):** Spec — specification
- **Türkçesi:** Şartname / teknik tanım
- **Tanım:** Yapılacak şeyin ne olduğunu, neyi kapsayıp neyi kapsamadığını yazan belge.
- **Ne işe yarar / neden var:** Herkesin aynı şeyi anlamasını sağlar. Sözlü anlatımda beş kişi beş farklı şey anlar ve fark, iş bittiğinde ortaya çıkar. Spec bu farkı en ucuz aşamada, yazarken yakalar.
- **Nerede karşına çıkar:** Geliştirme başlamadan önce. Yapay zekâya iş yaptırırken de aynı işlevi görür: iyi bir prompt aslında bir spec'tir (19.2).
- **Örnek kullanım:** "Spec'te bu durumun ne olacağı yazmıyor; şimdi karar vermemiz gerekiyor."
- **Karıştırılanlar:** *Spec* ≠ *tasarım dosyası*. Figma dosyası ekranı gösterir, spec kuralı yazar: hangi durumda ne olacağı, hangi verinin nereden geleceği, hangi hâlin kapsam dışı olduğu.
- **İlgili terimler:** PRD, Acceptance criteria (2.6), Scope (2.8)

### PRD

- **Terim (İngilizce):** PRD — Product Requirements Document
- **Türkçesi:** Ürün gereksinim belgesi
- **Tanım:** Bir ürün veya özelliğin neden yapıldığını, kimin için yapıldığını ve neyi kapsadığını anlatan ana belge.
- **Ne işe yarar / neden var:** Spec'ten daha geniştir: problemi, hedefi, başarı ölçütünü ve kapsam dışını da içerir. Ekibe tek bir referans noktası verir.
- **Nerede karşına çıkar:** Genelde PM yazar; tasarımcı ve geliştirici yorum ekler. Büyük şirketlerde PRD onaylanmadan iş başlamaz.
- **Örnek kullanım:** "PRD'de başarı ölçütü yazılmamış; bu iş bittiğinde başarılı olup olmadığını nasıl anlayacağız?"
- **Karıştırılanlar:** *PRD* ≠ *spec*. PRD **neden** ve **ne** sorularına, spec daha çok **ne tam olarak** sorusuna cevap verir. Bazı ekipler ikisini tek belgede birleştirir.
- **İlgili terimler:** Spec, One-pager, Success metric (3.7)

**Tipik PRD iskeleti** (ekipten ekibe değişir, ama bu başlıklar çoğunda vardır):
1. Problem ve bağlam
2. Hedef ve başarı ölçütü
3. Hedef kullanıcı
4. Kapsam (in scope) ve kapsam dışı (out of scope)
5. Kullanıcı akışları ve gereksinimler
6. Kabul kriterleri
7. Varsayımlar, riskler, bağımlılıklar
8. Açık sorular

### One-pager

- **Terim (İngilizce):** One-pager
- **Türkçesi:** Tek sayfalık özet
- **Tanım:** Bir fikri tek sayfada anlatan kısa belge.
- **Ne işe yarar / neden var:** Karar vericinin zamanı sınırlıdır. Fikri tek sayfaya sığdıramamak çoğu zaman fikrin henüz netleşmediğinin işaretidir; bu yüzden format aynı zamanda bir düşünme disiplini.
- **Nerede karşına çıkar:** Yeni bir fikri yönetime sunarken. PRD yazmadan önceki ilk adım.
- **Örnek kullanım:** "Tam PRD yazmadan önce bir one-pager çıkarıp yönetimden ön onay alalım."
- **İlgili terimler:** PRD, RFC (18.6), Stakeholder (2.1)

### Brief

- **Terim (İngilizce):** Brief (design brief, creative brief)
- **Türkçesi:** Brif / iş tanımı
- **Tanım:** Bir tasarım veya içerik işine başlamadan önce hedefi, hedef kitleyi, kısıtları ve teslim edilecekleri tanımlayan kısa metin.
- **Ne işe yarar / neden var:** Tasarımcının doğru sorunun peşine düşmesini sağlar. Brief'siz başlayan işlerde revizyon sayısı artar, çünkü hedef en baştan ortak değildir.
- **Nerede karşına çıkar:** Ajans işlerinde ve serbest çalışmada standart. Bir müşteriden iş alırken ilk isteyeceğin belge budur; yoksa sen yazıp onaylatırsın.
- **Örnek kullanım:** "Brief'te marka tonu yazmıyor; üç yön hazırlayıp müşteriye seçtirelim."
- **Karıştırılanlar:** *Brief* ≠ *spec*. Brief hedefi ve kısıtı verir, çözümü tarif etmez; spec çözümü tarif eder.
- **İlgili terimler:** Spec, Scope (2.8), Constraint (18.4)

---

## 2.6 Gereksinimler: epic, user story, acceptance criteria

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

---

## 2.7 Backlog ve önceliklendirme

Yapılacak işlerin biriktiği yer ve hangisinin önce yapılacağına karar verme yöntemleri. Öncelik kararı, bir ürün ekibinin en sık verdiği ve en çok tartıştığı karardır.

### Backlog

- **Terim (İngilizce):** Backlog (product backlog)
- **Türkçesi:** Yapılacaklar havuzu
- **Tanım:** Yapılması düşünülen tüm işlerin öncelik sırasıyla durduğu liste.
- **Ne işe yarar / neden var:** Fikirlerin kaybolmasını engeller ama daha önemlisi, "bu ne zaman yapılacak" sorusuna dürüst bir cevap verir: listenin 40. sırasındaki iş, pratikte yapılmayacak iştir. Backlog bu gerçeği görünür kılar.
- **Nerede karşına çıkar:** Jira, Linear, Notion, GitHub Issues gibi araçlarda.
- **Örnek kullanım:** "Fikri backlog'a ekleyelim ama şunu net söyleyeyim: mevcut önceliklerle bu çeyrek sıraya girmez."
- **Karıştırılanlar:** Backlog bir çöp kutusu değildir. Sürekli büyüyen ve hiç temizlenmeyen bir backlog işlevsizdir; grooming bu yüzden vardır.
- **İlgili terimler:** Ticket, Grooming, Prioritization

### Ticket / Issue

- **Terim (İngilizce):** Ticket, Issue, Card
- **Türkçesi:** İş kaydı
- **Tanım:** Tek bir işi temsil eden, takip edilebilir kayıt.
- **Ne işe yarar / neden var:** İşin sahibi, durumu, tanımı ve tartışması tek yerde toplanır. Bir konuşma sonucunda karar alındıysa ve ticket açılmadıysa, o karar birkaç gün içinde kaybolur.
- **Nerede karşına çıkar:** Her gün. "Ticket açtın mı?" en sık duyacağın cümlelerden biri.
- **Örnek kullanım:** "Bunu burada konuşmayalım, ticket açalım da kaybolmasın."
- **İlgili terimler:** Backlog, Bug report (17.5), GitHub Issue (15.9)

### Grooming / Refinement

- **Terim (İngilizce):** Backlog grooming, backlog refinement
- **Türkçesi:** Backlog düzenleme
- **Tanım:** Backlog'daki işlerin gözden geçirildiği, netleştirildiği, tahmin edildiği ve gereksizlerin silindiği düzenli toplantı.
- **Ne işe yarar / neden var:** Sprint planning'e hazır olmayan işlerin gelmesini engeller. Belirsiz bir iş planlama toplantısında tartışılırsa toplantı uzar ve tahmin yanlış çıkar.
- **Nerede karşına çıkar:** Genelde haftalık veya sprint ortasında. Tasarımcı olarak burada bulunman, "bu iş tasarım gerektiriyor" uyarısını erken verebilmen açısından değerlidir.
- **Örnek kullanım:** "Grooming'de bu story'yi ikiye böldük; tek parça olarak sprint'e sığmıyordu."
- **İlgili terimler:** Backlog, Sprint planning (3.2), Definition of Ready (2.10)

### Prioritization

- **Terim (İngilizce):** Prioritization
- **Türkçesi:** Önceliklendirme
- **Tanım:** Sınırlı zamanla hangi işin önce yapılacağına karar verme süreci.
- **Ne işe yarar / neden var:** Her şey önemliyse hiçbir şey önemli değildir. Çerçeveler (RICE, ICE, MoSCoW) doğru cevabı vermez; tartışmayı zevkten çıkarıp karşılaştırılabilir bir zemine taşır. Asıl faydaları budur.
- **Nerede karşına çıkar:** Çeyrek planlamada ve sprint başında.
- **Örnek kullanım:** "Üç özellik de değerli ama aynı anda yapamayız; bir önceliklendirme turu yapalım."
- **İlgili terimler:** RICE, MoSCoW, ICE, Roadmap (2.9), Trade-off (18.4)

### RICE

- **Terim (İngilizce):** RICE — Reach, Impact, Confidence, Effort
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Dört tahmini tek bir puana indiren önceliklendirme yöntemi: (Reach × Impact × Confidence) ÷ Effort.
- **Ne işe yarar / neden var:** "Etki" gibi tek bir bulanık tahmin yerine, üzerine ayrı ayrı sayı konulabilen dört küçük tahmin kullanır. En değerli parçası **Confidence**'tır: tahminlerine ne kadar güvendiğini beyan etmeni zorunlu kılar; düşük güven, o fikrin ölmesi değil, önce araştırma gerektiği anlamına gelir.
- **Nerede karşına çıkar:** Çeyrek planlamalarında. Aynı hedefe hizmet eden fikirler karşılaştırılırken en temiz çalışır.
- **Örnek kullanım:** "RICE'a göre küçük düzeltme büyük özelliğin önüne geçti; çok daha fazla kullanıcıya dokunuyor."
- **Karıştırılanlar:** Puan mutlak bir gerçek değildir; sadece **aynı listede, aynı yöntemle** puanlanmış fikirler karşılaştırılabilir. İki farklı listenin RICE puanlarını yan yana koymak anlamsızdır.
- **İlgili terimler:** ICE, MoSCoW, Prioritization
- **Kaynak:** Sean McBride tarafından Intercom'da geliştirildi (2016). Intercom'un ürün blogundaki orijinal yazı birincil kaynaktır.

### ICE

- **Terim (İngilizce):** ICE — Impact, Confidence, Ease
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** RICE'ın daha hafif hâli; üç faktörle hızlı puanlama.
- **Ne işe yarar / neden var:** Hızlıdır. Reach hesaplayacak veri yoksa veya karar küçükse RICE fazla ağır kalır.
- **Nerede karşına çıkar:** Growth ve deney listelerinde. Sean Ellis tarafından geliştirildi.
- **Örnek kullanım:** "Deney listesi için ICE yeter, RICE'a girmeyelim."
- **İlgili terimler:** RICE

### MoSCoW

- **Terim (İngilizce):** MoSCoW — Must have, Should have, Could have, Won't have
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** İşleri dört zorunluluk seviyesine ayıran yöntem.
- **Ne işe yarar / neden var:** Puan hesaplamadan hızlı bir kapsam kararı verdirir. En değerli kutusu **Won't have**'dir: bu turda **yapılmayacakların** açıkça yazılması, sonradan gelen "ama bu da olacaktı" tartışmasını bitirir.
- **Nerede karşına çıkar:** Ajans ve müşteri projelerinde, teslim kapsamı belirlenirken çok yaygın.
- **Örnek kullanım:** "Çok dilli destek bu sürümde 'won't have'; yazıya geçirelim ki sonradan sürpriz olmasın."
- **Karıştırılanlar:** Herkesin her şeyi "must have" işaretlemesi bu yöntemin klasik başarısızlık biçimidir. Kural: must have'ler toplam işin yarısını geçmemelidir.
- **İlgili terimler:** Scope (2.8), Cut line (2.8), RICE

### Estimation / T-shirt sizing

- **Terim (İngilizce):** Estimation, T-shirt sizing (S/M/L/XL)
- **Türkçesi:** Tahminleme
- **Tanım:** Bir işin ne kadar çaba gerektireceğine dair kaba tahmin.
- **Ne işe yarar / neden var:** Planlama için gereklidir ama kesinlik iddiası taşımaz. T-shirt boyutları tam da bu yüzden kullanılır: "5 gün" der gibi görünen sahte hassasiyeti engeller.
- **Nerede karşına çıkar:** Grooming ve planning toplantılarında.
- **Örnek kullanım:** "Tasarım tarafı M, geliştirme tarafı L; tek sprint'e sığmayabilir."
- **Karıştırılanlar:** Tahmin bir **söz** değildir. Tahminin taahhüde dönüştüğü ekiplerde geliştiriciler tahminleri şişirir ve sistem bozulur.
- **İlgili terimler:** Story point (3.3), Velocity (3.3), Capacity (3.3)

---

## 2.8 Kapsam: MVP, POC, scope creep

Bir işin sınırlarını çizme dili. Tasarımcı olarak en çok bu terimlerle savunma yapacaksın: neyin bu sürüme girdiği, neyin girmediği ve neden.

### MVP

- **Terim (İngilizce):** MVP — Minimum Viable Product
- **Türkçesi:** Asgari uygulanabilir ürün
- **Tanım:** Bir fikrin işe yarayıp yaramadığını öğrenmek için gereken en küçük gerçek ürün.
- **Ne işe yarar / neden var:** Büyük bir bahsi küçük parçaya böler. Amaç "az özellikli ürün çıkarmak" değil, **en az çabayla en çok öğrenmek**tir. Bu ayrım kritik: bir MVP kötü olabilir ama işe yaramaz olamaz — kullanıcının bir işi baştan sona bitirebilmesi gerekir.
- **Nerede karşına çıkar:** Neredeyse her yeni proje konuşmasında. Aynı zamanda en çok yanlış kullanılan terimlerden biri.
- **Örnek kullanım:** "MVP'de sadece tek ödeme yöntemi olsun; talep görürse diğerlerini ekleriz."
- **Karıştırılanlar:** *MVP* ≠ *yarım ürün*. Kullanıcı MVP'yle bir işi tamamlayabilmelidir. Tek tekerlekli bir araba MVP değildir; kaykay MVP'dir. Ayrıca *MVP* ≠ *prototype* — MVP gerçek kullanıcıya çıkar, prototip çıkmaz.
- **İlgili terimler:** POC, Prototype, Scope, Build-Measure-Learn (2.2)
- **Kaynak:** Terim 2001'de Frank Robinson tarafından ortaya atıldı; Steve Blank ve Eric Ries tarafından yaygınlaştırıldı. Ries'in *The Lean Startup* kitabındaki tanımı en çok atıf alan tanımdır.

### POC

- **Terim (İngilizce):** POC — Proof of Concept
- **Türkçesi:** Kavram kanıtı
- **Tanım:** Bir şeyin teknik olarak mümkün olup olmadığını göstermek için yapılan küçük deneme.
- **Ne işe yarar / neden var:** Riski erken azaltır. "Bu entegrasyon çalışır mı?" sorusunu üç ay sonra değil, üç günde cevaplar. Atılmak üzere yazılır; kalıcı olması beklenmez.
- **Nerede karşına çıkar:** Yeni bir teknoloji veya üçüncü parti servis değerlendirilirken.
- **Örnek kullanım:** "Önce bir POC yapalım; bu API gerçekten istediğimiz veriyi dönüyor mu görelim."
- **Karıştırılanlar:** *POC* teknik mümkünlüğü, *prototype* deneyimi, *MVP* pazar talebini sınar. Üçü farklı soruları cevaplar. En sık yapılan hata, POC kodunun "zaten çalışıyor" denip üretime alınmasıdır.
- **İlgili terimler:** MVP, Prototype, Spike (3.5)

### Prototype

- **Terim (İngilizce):** Prototype
- **Türkçesi:** Prototip
- **Tanım:** Gerçek ürün gibi davranan ama arkasında gerçek sistem olmayan deneme sürümü.
- **Ne işe yarar / neden var:** Kullanıcı testini kod yazmadan mümkün kılar. Tasarım kararlarının en ucuz sınandığı yer. Detaylı türleri (lo-fi, hi-fi, clickable) Bölüm 4.5'te.
- **Nerede karşına çıkar:** Figma'da hazırlanır, kullanıcı testinde veya stakeholder sunumunda gösterilir.
- **Örnek kullanım:** "Prototip üzerinden beş kişiyle test edelim; kodlamadan önce akıştaki tıkanmayı görürüz."
- **İlgili terimler:** MVP, POC, Wireframe (4.5)

### Scope

- **Terim (İngilizce):** Scope
- **Türkçesi:** Kapsam
- **Tanım:** Bir işe neyin dahil olduğu ve neyin olmadığı.
- **Ne işe yarar / neden var:** Kapsam yazılı değilse herkesin kafasındaki kapsam farklıdır. **Out of scope** (kapsam dışı) listesi, in scope listesi kadar önemlidir — çoğu ekip ikincisini yazıp birincisini atlar ve sorun oradan çıkar.
- **Nerede karşına çıkar:** Spec ve PRD'nin zorunlu bölümü. Sözleşmeli işlerde hukuki karşılığı vardır.
- **Örnek kullanım:** "Çok dilli destek bu işin kapsamı dışında; ayrı bir iş olarak planlayalım."
- **İlgili terimler:** Scope creep, MoSCoW (2.7), Cut line

### Scope creep

- **Terim (İngilizce):** Scope creep
- **Türkçesi:** Kapsam kayması
- **Tanım:** İş sürerken kapsamın, küçük eklemelerle ve resmî bir karar olmadan büyümesi.
- **Ne işe yarar / neden var:** Tehlikeli olan tek tek eklemeler değil, hiçbirinin ayrı ayrı büyük görünmemesidir. "Bir de şunu ekleyelim" cümlesi beş kez tekrarlandığında süre iki katına çıkar ama kimse ne zaman karar verildiğini hatırlamaz.
- **Nerede karşına çıkar:** Gecikmelerin en yaygın sebebi. Retro toplantılarında sürekli gündeme gelir.
- **Örnek kullanım:** "Bu bir scope creep; eklemek istiyorsak sorun değil ama teslim tarihini de birlikte güncelleyelim."
- **Karıştırılanlar:** *Scope creep* ≠ *kapsam değişikliği*. Değişiklik bilinçli ve kayıtlıdır, sonuçları hesaplanır. Creep sessizce olur. Ayrıca *gold plating* farklı bir kusurdur: kimse istemediği hâlde ekibin kendi kendine "daha iyi olsun" diye fazladan iş yapması.
- **İlgili terimler:** Scope, Cut line, Trade-off (18.4)

### Cut line

- **Terim (İngilizce):** Cut line (scope cut)
- **Türkçesi:** Kesme çizgisi
- **Tanım:** Öncelik sırasına dizilmiş listede, "bu çizginin altındakiler bu sürüme girmiyor" diye çekilen sınır.
- **Ne işe yarar / neden var:** Süre daralınca neyin düşeceğinin **önceden** kararlaştırılmasını sağlar. Kriz anında panikle karar vermek yerine, sakin kafayla çizilmiş bir sıraya bakılır.
- **Nerede karşına çıkar:** Yayın tarihi yaklaşırken yapılan kapsam toplantılarında.
- **Örnek kullanım:** "Cut line'ı animasyonların üstüne çekelim; gerekirse onlar düşer, akış kalır."
- **İlgili terimler:** Scope, MoSCoW (2.7), Nice-to-have (18.2)

---

## 2.9 Roadmap ve planlama

Ne zaman ne yapılacağının üst seviye planı. Roadmap bir takvim değil, bir niyet beyanıdır — bu ayrımı bilmek, roadmap'e tarih yazmanın neden riskli olduğunu açıklar.

### Roadmap

- **Terim (İngilizce):** Roadmap
- **Türkçesi:** Yol haritası
- **Tanım:** Ürünün önümüzdeki dönemde hangi hedeflere, hangi sırayla yöneleceğini gösteren üst seviye plan.
- **Ne işe yarar / neden var:** Ekibi ve stakeholder'ları ortak bir yönde hizalar. İyi bir roadmap özellik listesi değil, **hedef** listesidir; çünkü hedef sabit kalırken çözüm değişebilir.
- **Nerede karşına çıkar:** Çeyrek planlamalarında, yönetim sunumlarında, işe alım görüşmelerinde.
- **Örnek kullanım:** "Roadmap'te bu çeyreğin teması elde tutma; yeni özellik değil, mevcut akışların iyileştirilmesi."
- **Karıştırılanlar:** *Roadmap* ≠ *proje planı*. Proje planı tarihler ve bağımlılıklar içerir; roadmap yön ve öncelik gösterir. Roadmap'e kesin tarih yazmak, tahmini taahhüde çevirdiği için sık yapılan bir hatadır.
- **İlgili terimler:** Now/Next/Later, Milestone, OKR (3.7)

### Now / Next / Later

- **Terim (İngilizce):** Now / Next / Later roadmap
- **Türkçesi:** Şimdi / sonra / ileride
- **Tanım:** Roadmap'i tarih yerine üç zaman ufkuna bölen format.
- **Ne işe yarar / neden var:** Belirsizliği dürüstçe yansıtır. Yakın işler nettir, uzak işler bulanıktır — bu format bunu görünür kılar. Tarihli roadmap ise uzak işleri de kesinmiş gibi gösterir ve güven kaybına yol açar.
- **Nerede karşına çıkar:** Modern ürün ekiplerinde giderek yaygınlaşan format.
- **Örnek kullanım:** "Bunu 'Later'a koyalım; şu an nasıl çözeceğimizi bile bilmiyoruz, tarih vermek yanıltıcı olur."
- **İlgili terimler:** Roadmap, Quarter

### Quarter

- **Terim (İngilizce):** Quarter — Q1, Q2, Q3, Q4
- **Türkçesi:** Çeyrek
- **Tanım:** Yılın üç aylık dilimleri; şirketlerin planlama ve ölçüm birimi.
- **Ne işe yarar / neden var:** Yıl planlamak için fazla uzun, ay çok kısa. Çeyrek, hedef koyup sonuç görmeye yetecek uzunlukta bir dilim sunar.
- **Nerede karşına çıkar:** OKR döngüsü genelde çeyrekliktir. "Q3'te çıkar" ifadesi standart bir plan dilidir.
- **Örnek kullanım:** "Bu Q2 işi değil; Q3 roadmap'ine alalım."
- **Karıştırılanlar:** Çeyrek her şirkette Ocak'ta başlamaz; **fiscal year** (mali yıl) farklı bir ayda başlayabilir. Bir şirkete girdiğinde Q1'in ne zaman başladığını sor.
- **İlgili terimler:** Roadmap, OKR (3.7)

### Milestone

- **Terim (İngilizce):** Milestone
- **Türkçesi:** Kilometre taşı
- **Tanım:** Projede ulaşılması hedeflenen belirgin ara nokta.
- **Ne işe yarar / neden var:** Uzun bir işi ölçülebilir aralıklara böler. "Tasarım onaylandı", "beta yayında" gibi noktalar ilerlemenin görünür kanıtlarıdır.
- **Nerede karşına çıkar:** Proje planlarında, GitHub'da issue gruplaması olarak (15.9).
- **Örnek kullanım:** "İlk milestone tasarım onayı; ona kadar geliştirme başlamıyor."
- **İlgili terimler:** Roadmap, Definition of Done (2.10)

### Theme / Initiative

- **Terim (İngilizce):** Theme, Initiative
- **Türkçesi:** Tema, girişim
- **Tanım:** Birden fazla epic'i bir arada tutan üst seviye odak alanı.
- **Ne işe yarar / neden var:** Roadmap'in özellik listesine dönüşmesini engeller. "Bu çeyrek teması: yeni kullanıcının ilk gün deneyimi" demek, ekibe altında çalışacağı bir çerçeve verir ve çözümü sabitlemez.
- **Nerede karşına çıkar:** Çeyrek planlamalarında ve roadmap sunumlarında.
- **Örnek kullanım:** "Onboarding teması altında dört epic var; hepsi aynı metriği hedefliyor."
- **İlgili terimler:** Epic (2.6), Roadmap, OKR (3.7)

---

## 2.10 Hazır ve bitmiş tanımları, handoff

Bir işin başlamaya ve bitmeye hazır olduğunu nasıl anlarız. Bu iki tanım yazılı değilse ekip sürekli aynı tartışmayı yeniden yapar.

### Definition of Ready

- **Terim (İngilizce):** Definition of Ready — DoR
- **Türkçesi:** Hazır olma tanımı
- **Tanım:** Bir işin geliştirmeye alınabilmesi için önceden sağlanması gereken koşullar listesi.
- **Ne işe yarar / neden var:** Yarım tanımlanmış işin sprint'e girmesini engeller. Sprint ortasında "burada ne olacak?" diye takılmak, sprint'in en pahalı israfıdır.
- **Nerede karşına çıkar:** Sprint planning'in giriş kapısı. Tasarımcı için önemlidir: "tasarım hazır" maddesi genelde DoR'da yer alır.
- **Örnek kullanım:** "DoR'a göre tasarım onaylı ve AC yazılı olmadan story sprint'e alınmıyor."
- **İlgili terimler:** Definition of Done, Acceptance criteria (2.6), Grooming (2.7)

### Definition of Done

- **Terim (İngilizce):** Definition of Done — DoD
- **Türkçesi:** Bitmiş olma tanımı
- **Tanım:** Bir işin "bitti" sayılabilmesi için sağlanması gereken, tüm işler için ortak koşullar listesi.
- **Ne işe yarar / neden var:** "Bitti" kelimesini standartlaştırır. Aksi hâlde bir geliştirici için "bitti" kodun çalışması, tasarımcı için tasarıma uyması, QA için test edilmiş olması demektir — üçü aynı anda doğru olmadıkça iş bitmemiştir.
- **Nerede karşına çıkar:** Ekibin çalışma anlaşmasında. Sprint review'da bir işin sayılıp sayılmayacağını belirler.
- **Örnek kullanım:** "DoD'a 'mobilde kontrol edildi' ve 'klavyeyle gezilebiliyor' maddelerini ekleyelim."
- **Karıştırılanlar:** *DoD* tüm işler için geneldir; *acceptance criteria* (2.6) o işe özeldir. İkisi birden sağlanmalıdır.
- **İlgili terimler:** Definition of Ready, Acceptance criteria (2.6), QA (2.1)

**Tipik DoD maddeleri:** kod review'dan geçti · testler yeşil · tasarımla karşılaştırıldı · responsive kontrol edildi · erişilebilirlik temel kontrolü yapıldı · staging'e deploy edildi · dokümantasyon güncellendi.

### Handoff

- **Terim (İngilizce):** Handoff (design handoff)
- **Türkçesi:** Devir / teslim
- **Tanım:** Tasarımın, uygulanmak üzere geliştiriciye aktarılması.
- **Ne işe yarar / neden var:** Ekran görüntüsü yeterli değildir; ölçüler, renk değerleri, durumlar (hover, focus, disabled, error), responsive davranış ve boş/hata ekranları da aktarılmalıdır. Eksik handoff, uygulama sırasında geliştiricinin tahmin yürütmesine yol açar — ve tahmin edilen her karar tasarımdan uzaklaşır.
- **Nerede karşına çıkar:** Tasarım bitince. Figma Dev Mode gibi araçlar bu aktarımı kolaylaştırır (5.10).
- **Örnek kullanım:** "Handoff'ta tüm buton durumlarını ve boş liste ekranını da ekledim."
- **Karıştırılanlar:** Handoff bir "duvarın üstünden atma" anı olarak görülürse başarısız olur. İyi ekiplerde tasarımcı uygulama boyunca ulaşılabilir kalır ve sonucu staging'de kontrol eder.
- **İlgili terimler:** Design review, Staging (1.8), Design system (5.1)

### Design review

- **Terim (İngilizce):** Design review
- **Türkçesi:** Tasarım incelemesi
- **Tanım:** Uygulanmış arayüzün, tasarım kararlarına uygunluğunun kontrol edildiği inceleme.
- **Ne işe yarar / neden var:** Uygulama sırasında oluşan sapmaları yayından önce yakalar. Boşluklar, yazı tipi ağırlıkları, geçiş süreleri ve durumlar en sık kayan şeylerdir.
- **Nerede karşına çıkar:** Staging ortamında, yayından önce. Tasarımcının kalite kapısı budur.
- **Örnek kullanım:** "Design review'da üç sapma buldum: kart aralıkları, ikincil buton rengi ve boş durum metni."
- **İlgili terimler:** Handoff, QA (2.1), Visual regression (17.6)

### Sign-off

- **Terim (İngilizce):** Sign-off
- **Türkçesi:** Onay
- **Tanım:** Yetkili kişinin bir çıktıyı resmen kabul etmesi.
- **Ne işe yarar / neden var:** Sorumluluğu netleştirir ve sonradan gelen itirazın önüne geçer. Özellikle müşteriyle çalışırken yazılı onay, kapsam tartışmasının kanıtıdır.
- **Nerede karşına çıkar:** Tasarım teslimi, yayın öncesi, sözleşmeli işlerde faturalama öncesi.
- **Örnek kullanım:** "Müşteriden yazılı sign-off almadan geliştirmeye başlamayalım."
- **İlgili terimler:** Stakeholder (2.1), Scope (2.8), Milestone (2.9)

---

## 2.11 Yayın türleri

Bir ürünün kullanıcıya açılma biçimleri. Hepsi aynı anda herkese açmanın riskini azaltmanın farklı yollarıdır.

### Alpha

- **Terim (İngilizce):** Alpha
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Ürünün, genelde şirket içinde veya çok küçük bir gruba açılan ilk, eksik ve kararsız sürümü.
- **Ne işe yarar / neden var:** Büyük hataları, gerçek kullanıcıya ulaşmadan yakalar. Bu aşamada hata beklenir, kusur normaldir.
- **Nerede karşına çıkar:** Büyük özellik lansmanlarının ilk adımı.
- **Örnek kullanım:** "Alpha'da sadece ekip kullanıyor; veri kaybı olabilir diye uyarı koyduk."
- **İlgili terimler:** Beta, Dogfooding

### Beta

- **Terim (İngilizce):** Beta (closed/private beta, open/public beta)
- **Türkçesi:** Deneme sürümü
- **Tanım:** Ürünün, sınırlı veya açık bir kullanıcı grubuna, henüz tam sürüm sayılmadan sunulması.
- **Ne işe yarar / neden var:** Gerçek kullanım koşullarında test sağlar. **Closed beta** davetle sınırlıdır ve odaklı geri bildirim verir; **open beta** herkese açıktır ve yük testi gibi çalışır. "Beta" etiketi ayrıca kullanıcının beklentisini ayarlar.
- **Nerede karşına çıkar:** Lansman planlarında. Waitlist ve davet kodu mekanizmaları genelde bu aşamada tasarlanır.
- **Örnek kullanım:** "Önce 200 kişilik closed beta, iki hafta sonra open beta."
- **İlgili terimler:** Alpha, GA, Waitlist (7.7), Feature flag (16.8)

### Soft launch

- **Terim (İngilizce):** Soft launch
- **Türkçesi:** Sessiz açılış
- **Tanım:** Ürünü duyuru yapmadan, sınırlı bir kitleye veya bölgeye açma.
- **Ne işe yarar / neden var:** Duyurunun getireceği yükü ve dikkati üstlenmeden gerçek koşulları test eder. Sorun çıkarsa itibar maliyeti düşük olur.
- **Nerede karşına çıkar:** Pazarlama planlarında. Genelde büyük duyurudan (hard launch) önce yapılır.
- **Örnek kullanım:** "Soft launch yapalım; iki hafta veriyi izleyip sorun yoksa duyuruya çıkarız."
- **İlgili terimler:** Beta, Canary deployment (16.8)

### GA

- **Terim (İngilizce):** GA — General Availability
- **Türkçesi:** Genel kullanıma açılma
- **Tanım:** Ürünün herkese açık, kararlı ve desteklenen tam sürümü.
- **Ne işe yarar / neden var:** Bir eşiktir: GA sonrası kararlılık, geri uyumluluk ve destek beklentisi başlar. Deneysel değişiklikler artık serbestçe yapılamaz.
- **Nerede karşına çıkar:** Sürüm duyurularında ve kurumsal satışta ("GA olmadan satın almıyoruz").
- **Örnek kullanım:** "GA'ya çıkınca API'de kırıcı değişiklik yapamayız; sözleşmemiz var."
- **İlgili terimler:** Beta, Semantic versioning (15.8), Deprecation

### Dogfooding

- **Terim (İngilizce):** Dogfooding — "eating your own dog food"
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Ekibin kendi ürününü günlük işinde gerçekten kullanması.
- **Ne işe yarar / neden var:** Sorunları en hızlı ortaya çıkaran yöntem. Bir akışı her gün kullanmak zorunda kalmak, o akıştaki rahatsızlığı raporlardan daha net gösterir.
- **Nerede karşına çıkar:** Ekip içi kullanım politikalarında.
- **Örnek kullanım:** "Dogfooding'e geçtik; iki gün içinde bildirim ayarlarının yerini değiştirdik."
- **Karıştırılanlar:** Ekip kullanıcıyı temsil etmez. Dogfooding gerçek kullanıcı araştırmasının yerini tutmaz; sadece bariz sorunları erken yakalar.
- **İlgili terimler:** Alpha, User research (2.4)

### Deprecation / Sunset

- **Terim (İngilizce):** Deprecation, Sunset, End of life (EOL)
- **Türkçesi:** Kullanımdan kaldırma
- **Tanım:** Bir özelliğin veya sürümün artık desteklenmeyeceğinin duyurulup, belirli bir tarihte kapatılması.
- **Ne işe yarar / neden var:** Ürünün büyümesi kadar küçülmesi de yönetilmelidir. Bir şeyi haber vermeden kapatmak güven kaybettirir; deprecation süreci kullanıcıya geçiş süresi tanır. Bu süreçte geçiş yolu, uyarı mesajı ve iletişim tasarımı senin işindir.
- **Nerede karşına çıkar:** API sürüm yönetiminde ve eski özelliklerin kaldırılmasında.
- **Örnek kullanım:** "Eski panel üç ay sonra kapanıyor; şimdiden banner koyup yeni panele yönlendirelim."
- **İlgili terimler:** GA, Semantic versioning (15.8), Migration (11.10)

---

## 2.12 Kendini test et

**1.** Product Manager ile Project Manager arasındaki fark nedir?

**2.** Bir stakeholder "kullanıcılar filtre istiyor" diyor. Bunu problem statement olarak nasıl yeniden yazarsın ve neden?

**3.** User story'nin standart kalıbı nedir ve kalıbın hangi kısmı en çok atlanır? Atlanınca ne kaybedilir?

**4.** Acceptance criteria ile Definition of Done arasındaki fark nedir? Birer örnek ver.

**5.** Şu kabul kriteri neden kötü: "Arama sonuçları hızlı ve doğru gelmeli." Nasıl düzeltirsin?

**6.** MVP, POC ve prototype hangi üç farklı soruyu cevaplar?

**7.** Scope creep ile bilinçli kapsam değişikliği arasındaki fark nedir?

**8.** MoSCoW yönteminin en değerli kutusu hangisidir ve neden?

**9.** Roadmap'e kesin tarih yazmak neden riskli görülüyor? Alternatif format nedir?

**10.** Discovery ve delivery'nin paralel yürütülmesine ne denir ve bu ne işe yarar?

**11.** Bir tasarım handoff'unda ekran görüntüsünden başka neler bulunmalı? En az dört şey say.

**12.** Closed beta ile soft launch arasındaki fark nedir?

---

### Cevaplar

**1.** Product Manager **ne** yapılacağına ve **neden** yapılacağına karar verir, ürünün sonucundan sorumludur. Project Manager işin **ne zaman ve nasıl** teslim edileceğine, plan ve koordinasyona odaklanır. İkisi de "PM" diye kısaltılır.

**2.** "Filtre" bir çözüm, problem değil. Problem statement çözümden arındırılarak yazılır: "Kullanıcı, aradığı ürünü uzun listede bulamıyor ve aramayı terk ediyor." Böylece filtre dışında sıralama, arama iyileştirmesi veya kategori değişikliği gibi alternatifler de masada kalır.

**3.** *"[Rol] olarak, [şunu] yapmak istiyorum, çünkü [şu sebeple]."* En çok atlanan kısım **sebep**tir. Sebep yazılmazsa geliştirici alternatif ve daha iyi bir çözüm öneremez; sadece söyleneni birebir uygular.

**4.** Acceptance criteria o işe özeldir: "Filtre seçildiğinde URL güncellenir." Definition of Done tüm işler için ortaktır: "Kod review'dan geçti, testler yeşil, mobilde kontrol edildi." İkisi birden sağlanmadan iş bitmiş sayılmaz.

**5.** Ölçülebilir değil; "hızlı" ve "doğru" kişiden kişiye değişir ve evet/hayır ile cevaplanamaz. Düzeltilmiş hâli: "Given kullanıcı en az 3 karakter yazmış, When aramayı tetikler, Then sonuçlar 500 ms içinde görünür ve eşleşme yoksa boş durum ekranı gösterilir."

**6.** POC: **teknik olarak mümkün mü?** Prototype: **kullanıcı bu deneyimi anlıyor ve kullanabiliyor mu?** MVP: **gerçek kullanıcılar bunu istiyor ve kullanıyor mu?**

**7.** Kapsam değişikliği bilinçlidir, kayıt altına alınır ve süre/kaynak etkisi birlikte güncellenir. Scope creep sessizce, tek tek küçük eklemelerle olur; kimse ne zaman karar verildiğini hatırlamaz ama teslim tarihi kayar.

**8.** **Won't have.** Bu turda yapılmayacakların açıkça yazılması, sonradan gelen "ama bu da olacaktı" itirazını baştan kapatır. Diğer üç kutu neyin yapılacağını söyler; asıl koruma bu kutudan gelir.

**9.** Uzak işlerin belirsizliği yüksektir; tarih yazmak tahmini taahhüde çevirir ve tutulmayınca güven kaybettirir. Alternatif: **Now / Next / Later** formatı — belirsizliği dürüstçe yansıtır.

**10.** **Dual-track.** Ekip aynı anda hem bir sonraki işi keşfeder hem mevcut kararı üretir. Böylece kimse sıra beklemez ve araştırma sonuçları eskimeden kullanılır.

**11.** En az dördü: ölçüler ve boşluk değerleri · renk ve tipografi token değerleri · tüm bileşen durumları (hover, focus, active, disabled, error, loading) · responsive davranış ve breakpoint'ler · boş durum, hata durumu ve yükleme ekranları · animasyon süresi ve easing değerleri · erişilebilirlik notları (odak sırası, alt metin).

**12.** Closed beta sınırlı ve **davetli** bir gruba açılır, odaklı geri bildirim toplamak içindir. Soft launch ürünü açar ama **duyuru yapmaz**; amaç gerçek koşullarda sessizce test etmek ve sorun çıkarsa itibar maliyetini düşük tutmaktır. Biri erişimi, diğeri duyuruyu kısıtlar.

---

**Biten bölüm:** Bölüm 2 — Ürün geliştirme yaşam döngüsü
**Sıradaki bölüm:** Bölüm 3 — Çalışma biçimi: Agile, Scrum, Kanban ve ekip ritüelleri
