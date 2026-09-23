---
title: "Ekipteki roller"
sectionNumber: "2.1"
category: "urun-gelistirme"
order: 1
cardCount: 9
sourceFile: "02-urun-gelistirme-yasam-dongusu.md"
origin: "material"
flags: ["degisken"]
---
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
