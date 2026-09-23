# Bölüm 3 — Çalışma biçimi: Agile, Scrum, Kanban ve ekip ritüelleri

Bölüm 2 "hangi belge, hangi karar"ı anlattı. Bu bölüm o kararların **hangi ritimle** alındığını anlatıyor: ekip haftayı nasıl bölüyor, hangi toplantıda ne konuşuluyor, ilerleme neyle ölçülüyor.

Bu bölümün terimleri her gün duyacağın terimler. Bir şirkete girdiğin ilk hafta karşına çıkacak cümlelerin çoğu buradan: "standup'ta söylersin", "bu sprint'e sığmaz", "velocity düştü", "bu bir blocker". Bunları bilmemek seni ilk günden yavaşlatır.

**Önemli uyarı:** Bu bölümdeki çerçevelerin (Scrum, Kanban) resmî tanımı ile şirketlerdeki uygulaması çoğu zaman aynı değildir. Aşağıda önce resmî tanımı, sonra gerçekte ne olduğunu yazıyorum. İkisini ayırt edebilmek, "biz Scrum yapıyoruz" diyen bir ekipte gerçekte ne olduğunu anlamanı sağlar.

---

## 3.1 Waterfall ve Agile

Yazılım geliştirmenin iki ana çalışma felsefesi. Aralarındaki fark bir teknik tercih değil, **belirsizlikle nasıl baş edileceğine** dair bir duruş farkıdır.

### Waterfall

- **Terim (İngilizce):** Waterfall model
- **Türkçesi:** Şelale modeli
- **Tanım:** Fazların sırayla ve geri dönülmeden ilerlediği geliştirme yaklaşımı: önce tüm gereksinimler, sonra tüm tasarım, sonra tüm kodlama, sonra test, sonra yayın.
- **Ne işe yarar / neden var:** Gereksinimlerin gerçekten baştan bilindiği ve değişmeyeceği işlerde mantıklıdır: inşaat, donanım üretimi, katı düzenlemeye tabi projeler. Yazılımda sorun çıkarır, çünkü kullanıcı ürünü ancak gördükten sonra ne istediğini anlar — ve o noktada geri dönüş pahalıdır.
- **Nerede karşına çıkar:** Kamu ihalelerinde, kurumsal projelerde ve ajans sözleşmelerinde hâlâ yaygın. Genelde olumsuz bir anlam yüklenerek kullanılır ("bu waterfall'a döndü").
- **Örnek kullanım:** "Sözleşme waterfall mantığında yazılmış; kapsamı önden dondurmamız gerekiyor."
- **Karıştırılanlar:** Waterfall her koşulda kötü değildir. Kötü olan, belirsizliğin yüksek olduğu bir işte waterfall uygulamaktır.
- **İlgili terimler:** Agile, Scope (2.8), Iteration (2.2)

### Agile

- **Terim (İngilizce):** Agile
- **Türkçesi:** Çevik
- **Tanım:** İşi küçük parçalara bölüp sık teslim ederek, plana değil geri bildirime göre yön belirleyen çalışma yaklaşımı.
- **Ne işe yarar / neden var:** Belirsizliği kabul eder. Baştan doğru planın imkânsız olduğunu varsayar ve bunun yerine **hatayı erken bulmayı** hedefler. Bir şey iki hafta sonra yanlış çıkarsa iki haftalık iş kaybedilir; altı ay sonra çıkarsa altı ay.
- **Nerede karşına çıkar:** Neredeyse her yazılım ekibinde bir biçimde. "Agile çalışıyoruz" cümlesi çok geniş bir yelpazeyi kapsar; ne kastedildiğini sormak gerekir.
- **Örnek kullanım:** "Agile çalışıyoruz ama iki haftalık sprint'lerimiz var, Kanban değil Scrum uyguluyoruz."
- **Karıştırılanlar:** *Agile* ≠ *Scrum*. Agile bir zihniyet ve ilkeler bütünü; Scrum onu uygulayan bir çerçevedir. Ayrıca *agile* ≠ *plansız çalışmak* — en yaygın yanlış anlama budur. Agile plan yapmamak değil, planı sık güncellemektir.
- **İlgili terimler:** Agile Manifesto, Scrum (3.2), Kanban (3.4), Waterfall

### Agile Manifesto

- **Terim (İngilizce):** Manifesto for Agile Software Development (Agile Manifesto)
- **Türkçesi:** Çevik yazılım geliştirme bildirisi
- **Tanım:** 2001'de yazılan, çevik yaklaşımın dört değerini ve on iki ilkesini tanımlayan kısa metin.
- **Ne işe yarar / neden var:** Agile'ın referans noktası. Dört değerin her biri bir tercih sıralamasıdır — sağdakini reddetmez, soldakini daha değerli bulur:
  1. Süreç ve araçlardan çok **bireyler ve etkileşim**
  2. Kapsamlı dokümantasyondan çok **çalışan yazılım**
  3. Sözleşme pazarlığından çok **müşteriyle iş birliği**
  4. Plana bağlı kalmaktan çok **değişime uyum**
- **Nerede karşına çıkar:** Süreç tartışmalarında referans olarak. Ayrıca çokça eleştirilir: "agile industrial complex" ifadesi, manifestonun sertifikasyon ve danışmanlık sektörüne dönüşmesine yönelik eleştiriyi anlatır.
- **Örnek kullanım:** "Bu toplantı yapısı manifestonun ilk değeriyle çelişiyor: aracın raporlamasına insanların konuşmasından daha çok zaman ayırıyoruz."
- **Karıştırılanlar:** "Dokümantasyondan çok çalışan yazılım" maddesi, dokümantasyon yazılmayacağı anlamına gelmez. Metin bunu açıkça belirtir: sağdakinin de değeri vardır.
- **İlgili terimler:** Agile, Scrum, Lean
- **Kaynak:** https://agilemanifesto.org — 11-13 Şubat 2001'de Snowbird'de (Utah) toplanan 17 kişi tarafından yazıldı ve o günden beri hiç revize edilmedi. Tarihçesi: https://agilemanifesto.org/history.html

### Lean

- **Terim (İngilizce):** Lean (lean software development)
- **Türkçesi:** Yalın
- **Tanım:** Toyota üretim sisteminden gelen, değer üretmeyen her şeyi israf sayan ve akışı düzgünleştirmeye odaklanan yaklaşım.
- **Ne işe yarar / neden var:** İsrafın türlerini görünür kılar: yarım kalmış iş, gereksiz özellik, beklemeler, gereksiz aktarımlar. Kanban'ın ve Lean Startup'ın ortak atası bu düşünce.
- **Nerede karşına çıkar:** Süreç iyileştirme ve akış konuşmalarında. "Lean" kelimesi hem üretim hem startup bağlamında geçer; hangisi olduğunu bağlamdan çıkar.
- **Örnek kullanım:** "Yarım kalmış beş özellik var; lean açısından bu envanter, değer değil."
- **İlgili terimler:** Kanban (3.4), WIP limit (3.4), MVP (2.8)

### SAFe

- **Terim (İngilizce):** SAFe — Scaled Agile Framework
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Agile'ı çok sayıda ekibin bulunduğu büyük organizasyonlarda uygulamak için tasarlanmış, katmanlı ve ayrıntılı çerçeve.
- **Ne işe yarar / neden var:** Onlarca ekibin koordinasyonunu düzenlemeye çalışır. Tartışmalıdır: eleştirmenler, agile'ın basitliğini kaybettiğini ve bürokrasi ürettiğini söyler; savunucular büyük ölçekte alternatifin kaos olduğunu.
- **Nerede karşına çıkar:** Büyük kurumsal şirketlerde ve bankalarda. Küçük ekiplerde karşına çıkarsa bu bir uyarı işaretidir.
- **Örnek kullanım:** "Şirket SAFe'e geçti; artık PI planning denilen çeyreklik büyük planlama toplantıları var."
- **İlgili terimler:** Scrum, Agile
- **Not:** Bu bir **Seviye 3** terim: adını duyduğunda ne kategoride olduğunu bilmen yeterli, detayını öğrenmen gerekmiyor.

---

## 3.2 Scrum

En yaygın agile çerçevesi. Resmî tanımı **Scrum Guide** adlı kısa bir belgede yapılır; belge Ken Schwaber ve Jeff Sutherland tarafından yazılır ve yıllar içinde güncellenir.

`[DEĞİŞKEN BİLGİ]` Güncel sürüm 18 Kasım 2020 tarihli **2020 Scrum Guide**'dır ve 2020 sürümünde "rol" kelimesi "accountability" (sorumluluk alanı) ile değiştirilmiş, "Development Team" ayrımı kaldırılarak tek bir Scrum Team tanımlanmıştır. Bu bilgi Eylül 2026 itibarıyla geçerli görünüyor ama Scrum Guide birkaç yılda bir güncelleniyor; scrumguides.org üzerinden kontrol et.

### Scrum

- **Terim (İngilizce):** Scrum
- **Türkçesi:** Yaygın Türkçe karşılığı yok (ragbi terimi)
- **Tanım:** İşi sabit uzunlukta dönemlere bölen, her dönemin sonunda çalışan bir çıktı üretmeyi hedefleyen agile çerçevesi.
- **Ne işe yarar / neden var:** Belirsizliğe ritim getirir. Sabit uzunluktaki dönem, ekibe düzenli aralıklarla durup bakma fırsatı verir: ne yaptık, ne öğrendik, sırada ne var.
- **Nerede karşına çıkar:** Ürün ekiplerinin çoğunda. İş ilanlarında "Scrum deneyimi" sık aranır.
- **Örnek kullanım:** "Scrum uyguluyoruz: iki haftalık sprint, salı planning, cuma review ve retro."
- **Karıştırılanlar:** Çoğu ekip "Scrum yapıyoruz" der ama aslında sadece sprint ve standup uygular; retro yapılmaz, sprint goal yazılmaz. Buna sektörde alaycı biçimde **"Scrum-but"** veya **"Dark Scrum"** denir.
- **İlgili terimler:** Sprint, Product Owner (2.1), Scrum Master, Kanban (3.4)

**Scrum'ın üç sorumluluk alanı (2020 sürümüne göre):**

| Sorumluluk | Odağı |
|---|---|
| Product Owner | Ne yapılacağı ve hangi sırayla — backlog'un sahibi |
| Scrum Master | Sürecin işlemesi, engellerin kaldırılması, ekibin korunması |
| Developers | İşin nasıl yapılacağı ve sprint sonunda çıktının üretilmesi |

Not: "Developers" burada sadece kod yazan kişi anlamına gelmez; sprint çıktısını üretmeye katkı veren herkesi kapsar — tasarımcı da dahil.

### Sprint

- **Terim (İngilizce):** Sprint (iteration)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Genelde 1-4 hafta süren, sonunda kullanılabilir bir çıktı hedeflenen sabit uzunluktaki çalışma dönemi.
- **Ne işe yarar / neden var:** Süresinin **sabit** olması kritiktir. Sabit süre, iş bitmediğinde kapsamın kısılmasını zorlar; süre esnek olsaydı her seferinde tarih kayardı. Ayrıca düzenli bir öğrenme ritmi kurar.
- **Nerede karşına çıkar:** Planlamanın temel birimi. "Bu sprint'e sığar mı?" en sık sorulan sorulardan biri.
- **Örnek kullanım:** "Bu iş bu sprint'e sığmaz; ya ikiye bölelim ya sonrakine bırakalım."
- **Karıştırılanlar:** *Sprint* ≠ *acele etmek*. İsim yanıltıcıdır; sprint bir hız değil, bir zaman dilimidir. Sürekli hız beklentisi tükenmeye yol açar.
- **İlgili terimler:** Timebox (3.3), Sprint goal, Velocity (3.3)

### Sprint goal

- **Terim (İngilizce):** Sprint goal
- **Türkçesi:** Sprint hedefi
- **Tanım:** Sprint boyunca ulaşılmak istenen tek cümlelik ortak amaç.
- **Ne işe yarar / neden var:** Sprint'i bir görev listesi olmaktan çıkarır. Hedef varsa, işler tam bitmese bile "hedefe ulaştık mı?" sorusu cevaplanabilir; ayrıca sprint ortasında öncelik tartışması çıktığında karar ölçütü olur.
- **Nerede karşına çıkar:** Sprint planning'in çıktısı. En sık atlanan Scrum parçasıdır — atlandığında sprint bir "yapılacaklar kutusuna" dönüşür.
- **Örnek kullanım:** "Sprint goal: yeni kullanıcı kayıt olduktan sonra ilk projesini yardım almadan oluşturabilsin."
- **İlgili terimler:** Sprint, Sprint planning, Theme (2.9)

### Scrum Master

- **Terim (İngilizce):** Scrum Master — SM
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Sürecin doğru işlemesinden, engellerin kaldırılmasından ve ekibin dış müdahalelerden korunmasından sorumlu kişi.
- **Ne işe yarar / neden var:** Ekip kendi kendini yönetiyorsa bile, süreci kimin sahipleneceği belirsizse ritüeller çürür. SM ayrıca ekip dışından gelen ani talepleri filtreler.
- **Nerede karşına çıkar:** Scrum uygulayan orta ve büyük ekiplerde. Küçük ekiplerde ayrı bir SM yoktur; işi ekip lideri veya PM üstlenir.
- **Örnek kullanım:** "Bu bağımlılığı ben çözemiyorum, Scrum Master diğer ekiple konuşacak."
- **Karıştırılanlar:** *Scrum Master* ≠ *yönetici*. SM'in ekip üzerinde hiyerarşik yetkisi yoktur; işi kolaylaştırmaktır. Ayrıca ≠ *Product Owner*: PO ne yapılacağına, SM nasıl çalışılacağına odaklanır.
- **İlgili terimler:** Product Owner (2.1), Blocker (3.5), Retrospective

### Sprint backlog

- **Terim (İngilizce):** Sprint backlog
- **Türkçesi:** Sprint yapılacakları
- **Tanım:** Bu sprint içinde yapılmak üzere seçilen işlerin listesi.
- **Ne işe yarar / neden var:** Ürün backlog'undan (2.7) ayrılır: ürün backlog'u tüm gelecek işleri içerir, sprint backlog'u sadece bu iki haftalık taahhüdü. Sprint ortasında bu listeye ekleme yapmak, planın anlamını yok eder.
- **Nerede karşına çıkar:** Sprint board'unun içeriği budur.
- **Örnek kullanım:** "Bunu sprint backlog'una ekleyemeyiz; ekliyorsak eşdeğer bir işi çıkarmamız lazım."
- **İlgili terimler:** Backlog (2.7), Sprint, Capacity (3.3)

### Sprint planning

- **Terim (İngilizce):** Sprint planning
- **Türkçesi:** Sprint planlama
- **Tanım:** Sprint'in başında yapılan, hangi işlerin alınacağının ve sprint hedefinin belirlendiği toplantı.
- **Ne işe yarar / neden var:** Taahhüdü ortak hâle getirir. Kimin ne yapacağı burada netleşir; sonradan "ben bunu bilmiyordum" denmesini engeller.
- **Nerede karşına çıkar:** Sprint'in ilk günü. Tasarımcı olarak burada bulunman şart: tasarım gerektiren işleri işaret edip önden hazırlık süresini takvime yerleştirebilirsin.
- **Örnek kullanım:** "Planning'de söyleyeyim: bu story'nin tasarımı hazır değil, DoR'u karşılamıyor."
- **Karıştırılanlar:** Planning bir tahmin toplantısıdır, grooming'in (2.7) yerine geçmez. Grooming yapılmamışsa planning saatlerce sürer ve tahminler kötü çıkar.
- **İlgili terimler:** Grooming (2.7), Definition of Ready (2.10), Capacity (3.3)

### Daily standup

- **Terim (İngilizce):** Daily standup, daily scrum
- **Türkçesi:** Günlük ayaküstü toplantı
- **Tanım:** Ekibin her gün kısa süreyle (genelde 15 dakika) bir araya gelip günü hizaladığı toplantı.
- **Ne işe yarar / neden var:** Amacı **rapor vermek değil, engelleri erken görmek ve günü koordine etmektir.** İki kişinin aynı işe girmesi veya birinin üç gündür takılı kalması bu toplantıda ortaya çıkar.
- **Nerede karşına çıkar:** Her sabah. Uzaktan çalışan ekiplerde yazılı (async) yapılabilir.
- **Örnek kullanım:** "Standup'ta söylerim; API'yi bekliyorum, bugün ilerleyemiyorum."
- **Karıştırılanlar:** Klasik "dün ne yaptım / bugün ne yapacağım / engelim var mı" üçlüsü artık Scrum Guide'ın zorunlu tuttuğu bir format değildir; 2020 sürümünde bu üç soru kaldırıldı. Ayrıca standup bir yöneticiye **durum raporu** verme toplantısı değildir — bu, en yaygın bozulma biçimidir.
- **İlgili terimler:** Blocker (3.5), Async standup (3.6), Timebox (3.3)

### Sprint review

- **Terim (İngilizce):** Sprint review, demo
- **Türkçesi:** Sprint değerlendirmesi
- **Tanım:** Sprint sonunda üretilen çıktının stakeholder'lara gösterildiği ve geri bildirim alındığı toplantı.
- **Ne işe yarar / neden var:** Çalışan çıktının gerçekten çalıştığını kanıtlar ve geri bildirim döngüsünü kapatır. Slayt değil, ürün gösterilir — bu ayrım önemlidir.
- **Nerede karşına çıkar:** Sprint'in son günü. Tasarımcı olarak burası, kararlarının gerçek tepkiyle karşılaştığı yerdir.
- **Örnek kullanım:** "Review'da yeni akışı canlı gösterelim, ekran görüntüsüyle değil."
- **Karıştırılanlar:** *Sprint review* ≠ *retrospective*. Review **ürünü**, retro **süreci** değerlendirir. İkisini aynı toplantıda birleştiren ekiplerde retro genelde ezilir.
- **İlgili terimler:** Retrospective, Stakeholder (2.1), Increment

### Retrospective

- **Terim (İngilizce):** Retrospective — retro
- **Türkçesi:** Değerlendirme / geriye dönük bakış
- **Tanım:** Ekibin, çalışma biçimini gözden geçirip neyi değiştireceğine karar verdiği toplantı.
- **Ne işe yarar / neden var:** Sürecin kendisini iyileştirmenin tek yapısal fırsatı. Retro yoksa aynı sorun her sprint tekrar eder ve kimse kurumsal olarak müdahale etmez. **Kritik nokta:** retro'nun çıktısı bir duygu paylaşımı değil, sahibi ve tarihi olan somut bir aksiyondur.
- **Nerede karşına çıkar:** Sprint sonunda, review'dan sonra.
- **Örnek kullanım:** "Retro'da üç sprint üst üste aynı şeyi konuştuk; bu sefer aksiyon yazıp sahibini belirleyelim."
- **Karıştırılanlar:** Retro suçlu arama toplantısı değildir. Suçlamaya dönerse insanlar gerçek sorunu söylemeyi bırakır ve toplantı işlevsizleşir (bkz. blameless culture, 18.7).
- **İlgili terimler:** Sprint review, Postmortem (16.9), Action item (18.3)

### Increment

- **Terim (İngilizce):** Increment
- **Türkçesi:** Artım
- **Tanım:** Sprint sonunda ortaya çıkan, önceki çıktıların üzerine eklenen ve kullanılabilir durumda olan ürün parçası.
- **Ne işe yarar / neden var:** "Bitti" tanımını somutlaştırır. Bir sprint'in çıktısı yarım kalmış bir şey değil, Definition of Done'ı (2.10) karşılayan gerçek bir parça olmalıdır.
- **Nerede karşına çıkar:** Sprint review'da gösterilen şey budur.
- **Örnek kullanım:** "Increment yayına çıkmak zorunda değil ama çıkabilir durumda olmalı."
- **İlgili terimler:** Definition of Done (2.10), Sprint review

---

## 3.3 Tahmin ve ölçüm: story point, velocity, capacity

Ekibin ne kadar iş alabileceğini kestirme araçları. Hepsinin ortak kuralı şudur: **bunlar planlama aracıdır, performans ölçme aracı değildir.** Performans ölçümüne dönüştürüldüklerinde ekip sayıları manipüle etmeye başlar ve araç işlevini kaybeder.

### Story point

- **Terim (İngilizce):** Story point
- **Türkçesi:** Hikâye puanı
- **Tanım:** Bir işin büyüklüğünü saat yerine, göreli bir puanla ifade etme birimi.
- **Ne işe yarar / neden var:** İnsanlar süre tahmininde kötüdür ama **karşılaştırmada** iyidir. "Bu iş şu işin iki katı" demek, "bu iş 6 saat sürer" demekten daha güvenilirdir. Puan; karmaşıklık, belirsizlik ve iş miktarını birlikte kapsar. Genelde Fibonacci benzeri bir dizi kullanılır (1, 2, 3, 5, 8, 13) — büyüdükçe aralığın açılması, büyük işlerde belirsizliğin de büyüdüğünü yansıtır.
- **Nerede karşına çıkar:** Grooming ve planning toplantılarında. Planning poker denen yöntemle herkes aynı anda puan gösterir; farklı puanlar çıkarsa asıl değerli olan, aradaki farkın **neden** olduğunu konuşmaktır.
- **Örnek kullanım:** "Ben 3 verdim sen 8 verdin; farkı konuşalım, muhtemelen ikimiz farklı kapsam düşünüyoruz."
- **Karıştırılanlar:** *Story point* ≠ *saat*. Puanı saate çevirmek ("1 puan = 4 saat") yöntemin tüm faydasını yok eder. Ayrıca puanlar ekipten ekibe kıyaslanamaz; her ekibin ölçeği kendine özeldir.
- **İlgili terimler:** Velocity, Estimation (2.7), Capacity

### Velocity

- **Terim (İngilizce):** Velocity
- **Türkçesi:** Hız
- **Tanım:** Bir ekibin sprint başına ortalama olarak tamamladığı story point miktarı.
- **Ne işe yarar / neden var:** Gelecek sprint'te ne kadar iş alınabileceğini tahmin etmeye yarar. Son 3-5 sprint'in ortalaması kullanılır.
- **Nerede karşına çıkar:** Planning'de kapasite belirlerken ve roadmap tahminlerinde.
- **Örnek kullanım:** "Son üç sprint velocity 24; bu sprint 35 puan almak gerçekçi değil."
- **Karıştırılanlar:** Velocity bir **performans göstergesi değildir.** Yönetim velocity'yi hedef hâline getirirse ekip puanları şişirir ve sayı anlamını yitirir. Ayrıca iki ekibin velocity'si karşılaştırılamaz.
- **İlgili terimler:** Story point, Capacity, Burndown chart

### Capacity

- **Terim (İngilizce):** Capacity
- **Türkçesi:** Kapasite
- **Tanım:** Ekibin bu sprint'te fiilen çalışabileceği süre.
- **Ne işe yarar / neden var:** Velocity geçmişe bakar, capacity bu sprint'in gerçeğine bakar: izinler, tatiller, toplantılar, başka projeye ayrılan zaman. İkisi birlikte kullanılır.
- **Nerede karşına çıkar:** Planning'in ilk adımı.
- **Örnek kullanım:** "İki kişi izinli, kapasitemiz %60; velocity'ye göre değil ona göre alalım."
- **İlgili terimler:** Velocity, Sprint planning (3.2), Bandwidth (18.2)

### Burndown chart

- **Terim (İngilizce):** Burndown chart
- **Türkçesi:** Tükenme grafiği
- **Tanım:** Sprint boyunca kalan işin gün gün nasıl azaldığını gösteren grafik.
- **Ne işe yarar / neden var:** Sapmayı erken gösterir. Çizgi düz gidiyorsa iş ilerlemiyor demektir; sprint bitmeden müdahale şansı verir.
- **Nerede karşına çıkar:** Jira gibi araçların sprint ekranında otomatik üretilir.
- **Örnek kullanım:** "Burndown yatay gidiyor; üç gündür hiçbir iş 'done'a geçmedi, bir yerde takılıyoruz."
- **Karıştırılanlar:** *Burndown* kalan işi gösterir (aşağı iner); *burnup* tamamlanan işi ve toplam kapsamı ayrı ayrı gösterir — bu yüzden burnup, kapsam büyümesini (scope creep) görünür kılar. Kapsam değişikliğini izlemek istiyorsan burnup daha faydalıdır.
- **İlgili terimler:** Velocity, Scope creep (2.8), Cumulative flow diagram (3.4)

### Timebox

- **Terim (İngilizce):** Timebox
- **Türkçesi:** Zaman kutusu
- **Tanım:** Bir işe veya toplantıya önceden sabit bir süre ayırıp, süre dolduğunda durma kuralı.
- **Ne işe yarar / neden var:** Sonu belirsiz araştırmaların ve toplantıların sınırlandırılmasını sağlar. Süre dolduğunda iş bitmemiş olabilir; o zaman elde ne varsa onunla karar verilir. Amaç mükemmel cevap değil, **zamanında** cevaptır.
- **Nerede karşına çıkar:** Standup'ın 15 dakika olması bir timebox'tır. Araştırma işlerinde de kullanılır (bkz. spike, 3.5).
- **Örnek kullanım:** "Bu araştırmayı iki günle timebox'layalım; süre dolunca ne bulduysak onunla karar veririz."
- **İlgili terimler:** Spike (3.5), Sprint (3.2), Bikeshedding (18.2)

---

## 3.4 Kanban

Scrum'a alternatif bir akış yönetimi yaklaşımı. Temel farkı: Scrum işi **zamana** böler (sprint), Kanban işi **akışa** göre yönetir (sürekli devam eder, sabit dönemler yoktur).

Kökeni Toyota üretim sistemidir; Taiichi Ohno'nun 1940-50'lerde geliştirdiği kart tabanlı çekme sistemine dayanır. Bilgi işine ve yazılıma uyarlanması 2000'li yıllarda David J. Anderson tarafından yapılmıştır.

### Kanban

- **Terim (İngilizce):** Kanban
- **Türkçesi:** Yaygın Türkçe karşılığı yok (Japonca "görsel sinyal / pano")
- **Tanım:** İşi bir pano üzerinde görünür kılan, aynı anda devam eden iş sayısını sınırlayarak akışı düzgünleştiren yöntem.
- **Ne işe yarar / neden var:** Sprint'e sığmayan, sürekli ve öngörülemez akan işler için uygundur: destek, hata düzeltme, içerik üretimi, tasarım talepleri. Mevcut sürecin üzerine uygulanabilir — kimsenin işini veya unvanını değiştirmez, bu yüzden benimsenmesi kolaydır.
- **Nerede karşına çıkar:** Destek ve operasyon ekiplerinde, ajans iş akışlarında, tek kişilik projelerde.
- **Örnek kullanım:** "Sprint'e uymuyoruz çünkü işler her an geliyor; Kanban'a geçelim, WIP limiti koyalım."
- **Karıştırılanlar:** *Kanban* ≠ *Trello panosu kullanmak*. Pano yöntemin sadece görünen kısmı; asıl yöntem **WIP limiti** ve akış ölçümüdür. Limitsiz bir pano Kanban değildir.
- **İlgili terimler:** WIP limit, Scrum (3.2), Lean (3.1)

### Board / Column / Swimlane

- **Terim (İngilizce):** Board, column, swimlane, card
- **Türkçesi:** Pano, sütun, kulvar, kart
- **Tanım:** İşlerin kart olarak durduğu, aşamalara göre sütunlara ayrılan ve gerektiğinde yatay kulvarlara bölünen görsel düzen.
- **Ne işe yarar / neden var:** İşin nerede olduğunu tek bakışta gösterir. Sütunlar gerçek süreci yansıtmalıdır; "To Do / Doing / Done" çoğu ekip için fazla kaba kalır ve tıkanmanın nerede olduğunu gizler.
- **Nerede karşına çıkar:** Jira, Linear, Trello, GitHub Projects.
- **Örnek kullanım:** "Panoya 'design review' sütunu ekleyelim; şu an tasarım kontrolü 'in progress' içinde kayboluyor."
- **İlgili terimler:** Kanban, WIP limit, Ticket (2.7)

### WIP limit

- **Terim (İngilizce):** WIP limit — Work In Progress limit
- **Türkçesi:** Devam eden iş sınırı
- **Tanım:** Bir sütunda aynı anda en fazla kaç iş bulunabileceğini belirleyen sayı.
- **Ne işe yarar / neden var:** Kanban'ın en önemli parçası. Aynı anda çok işe başlamak, hiçbirinin bitmemesine yol açar; iş yarım kaldıkça değer üretmez. Limit dolduğunda yeni iş başlatmak yasaktır — bu kural insanları **başlamak yerine bitirmeye** zorlar ve tıkanıklığın nerede olduğunu anında görünür kılar.
- **Nerede karşına çıkar:** Pano sütun başlıklarında sayı olarak: "In Progress (3)".
- **Örnek kullanım:** "In progress limiti dolu; yeni işe başlamak yerine review'da bekleyen kartı bitirelim."
- **Karıştırılanlar:** WIP limiti bir hedef değil, bir tavan sınırdır. Ayrıca sezgiye aykırıdır: limit koymak işi yavaşlatmaz, tersine toplam teslim hızını artırır.
- **İlgili terimler:** Cycle time, Bottleneck, Context switching (3.6)

### Lead time / Cycle time

- **Terim (İngilizce):** Lead time, Cycle time
- **Türkçesi:** Teslim süresi, çevrim süresi
- **Tanım:** Lead time = talebin girmesinden teslimine kadar geçen toplam süre. Cycle time = iş üzerinde çalışılmaya başlandıktan teslimine kadar geçen süre.
- **Ne işe yarar / neden var:** İkisi arasındaki fark **bekleme süresidir** ve genelde toplamın büyük kısmıdır. "Neden bu kadar uzun sürüyor?" sorusunun cevabı çoğunlukla çalışılan sürede değil, sırada bekleme süresindedir. Bu ölçümler müşteriye gerçekçi süre söylemeyi de mümkün kılar.
- **Nerede karşına çıkar:** Kanban ölçümlerinde ve süreç iyileştirme tartışmalarında.
- **Örnek kullanım:** "Cycle time 2 gün ama lead time 3 hafta; sorun geliştirmede değil, işin sırada beklemesinde."
- **İlgili terimler:** Throughput, WIP limit, Bottleneck

### Throughput

- **Terim (İngilizce):** Throughput
- **Türkçesi:** İş çıkarma oranı
- **Tanım:** Birim zamanda tamamlanan iş sayısı.
- **Ne işe yarar / neden var:** Velocity'nin Kanban'daki karşılığı sayılabilir, ama puan yerine **adet** sayar. Tahmin yapmak için yeterlidir ve tahminleme toplantısı gerektirmez — bazı ekipler bu yüzden story point'i tamamen bırakır.
- **Nerede karşına çıkar:** Akış raporlarında.
- **Örnek kullanım:** "Haftada ortalama 7 kart bitiriyoruz; 21 kartlık bu iş yaklaşık 3 hafta demek."
- **İlgili terimler:** Velocity (3.3), Cycle time, Lead time

### Bottleneck

- **Terim (İngilizce):** Bottleneck
- **Türkçesi:** Darboğaz
- **Tanım:** Akışın en yavaş ilerlediği ve işlerin biriktiği aşama.
- **Ne işe yarar / neden var:** Bir sistemin toplam hızını darboğaz belirler. Darboğaz dışındaki aşamaları hızlandırmak toplam hızı değiştirmez — sadece darboğaz önünde daha büyük yığın oluşturur. Bu, süreç iyileştirmedeki en sık yapılan hatadır.
- **Nerede karşına çıkar:** Pano üzerinde bir sütunun sürekli dolu olmasıyla kendini gösterir.
- **Örnek kullanım:** "Darboğaz code review; geliştirme hızlanınca sadece review kuyruğu büyüyor."
- **İlgili terimler:** WIP limit, Cycle time, Blocker (3.5)

### Scrumban

- **Terim (İngilizce):** Scrumban
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Scrum'ın ritüellerini (planning, retro) Kanban'ın akış yönetimiyle (WIP limit, sürekli akış) birleştiren melez yaklaşım.
- **Ne işe yarar / neden var:** Gerçek ekiplerin çoğu saf Scrum veya saf Kanban uygulamaz; bu terim o gerçeği adlandırır.
- **Nerede karşına çıkar:** "Biz aslında Scrumban yapıyoruz" cümlesinde.
- **Örnek kullanım:** "Sprint'imiz var ama panoda WIP limiti de var; teknik olarak Scrumban."
- **İlgili terimler:** Scrum (3.2), Kanban

---

## 3.5 Engeller, bağımlılıklar ve belirsizlik

Planın bozulduğu noktaların adları. Bu terimleri doğru kullanmak, bir sorunu şikâyet olmaktan çıkarıp ele alınabilir bir konuya dönüştürür.

### Blocker

- **Terim (İngilizce):** Blocker
- **Türkçesi:** Engel
- **Tanım:** Bir işin ilerlemesini tamamen durduran ve kendi başına çözülemeyen durum.
- **Ne işe yarar / neden var:** Kelimenin bir ağırlığı vardır: "blocker" dendiğinde ekip müdahale eder. Bu yüzden doğru kullanılmalıdır — her zorluk blocker değildir. Blocker, **sen ne yaparsan yap ilerleyemediğin** durumdur.
- **Nerede karşına çıkar:** Standup'ın asıl amacı bunları ortaya çıkarmaktır.
- **Örnek kullanım:** "Blocker'ım var: API anahtarı gelmeden entegrasyonu test edemiyorum."
- **Karıştırılanlar:** *Blocker* ≠ *yavaşlatan şey*. İkincisi için "impediment" veya sadece "risk" denir. Her şeye blocker demek, kelimenin gücünü tüketir.
- **İlgili terimler:** Dependency, Escalation, Scrum Master (3.2)

### Dependency

- **Terim (İngilizce):** Dependency
- **Türkçesi:** Bağımlılık
- **Tanım:** Bir işin başlayabilmesi veya bitebilmesi için önce başka bir işin veya başka bir tarafın tamamlanması gerekmesi.
- **Ne işe yarar / neden var:** Gecikmelerin en yaygın yapısal sebebi. Önceden tespit edilirse sıralama değiştirilerek yönetilebilir; edilmezse sprint ortasında patlar. Bu yüzden PRD'de ayrı bir başlıktır.
- **Nerede karşına çıkar:** Planlamada ve ekipler arası koordinasyonda. Tasarımcı için tipik bağımlılık: içerik metni gelmeden ekran tamamlanamaz.
- **Örnek kullanım:** "Bu story'nin ödeme ekibine bağımlılığı var; onlar bitirmeden bizim işimiz başlayamaz."
- **Karıştırılanlar:** Yazılımda *dependency* aynı zamanda "projenin kullandığı dış kütüphane" anlamına gelir (8.11). Bağlamdan ayırt et.
- **İlgili terimler:** Blocker, Cross-functional team (2.1), Risk (18.4)

### Escalation

- **Terim (İngilizce):** Escalation
- **Türkçesi:** Üst mercie taşıma
- **Tanım:** Kendi seviyende çözülemeyen bir sorunu, karar yetkisi olan bir üst seviyeye taşımak.
- **Ne işe yarar / neden var:** Bir sorunun sessizce beklemesini engeller. Doğru kullanıldığında bir şikâyet değil, bir süreç adımıdır: "bu benim yetkimi aşıyor, karar verecek kişiye taşıyorum."
- **Nerede karşına çıkar:** Bağımlılık çözülmediğinde, kaynak yetmediğinde, iki ekip anlaşamadığında.
- **Örnek kullanım:** "İki gündür cevap alamıyoruz; escalate edip yöneticiye taşıyorum."
- **Karıştırılanlar:** Escalation bir suçlama değildir; iyi ekiplerde erken escalate etmek olumlu karşılanır. Geç escalate etmek, sorunu büyüttüğü için asıl hatadır.
- **İlgili terimler:** Blocker, Stakeholder (2.1), Incident (16.9)

### Spike

- **Terim (İngilizce):** Spike
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir soruyu cevaplamak veya belirsizliği azaltmak için ayrılan, süresi sınırlı araştırma işi.
- **Ne işe yarar / neden var:** Tahmin edilemeyen bir işi tahmin edilebilir hâle getirir. "Bu ne kadar sürer bilmiyoruz" durumunda önce bir spike açılır, sonra gerçek iş tahmin edilir.
- **Nerede karşına çıkar:** Backlog'da ayrı bir kart türü olarak. Yeni bir kütüphane veya entegrasyon değerlendirilirken.
- **Örnek kullanım:** "Önce 2 günlük spike açalım; bu kütüphanenin işimizi görüp görmediğini anlayalım."
- **Karıştırılanlar:** *Spike* ≠ *POC* (2.8). Örtüşürler; spike bir zaman kutusu ve backlog kaydıdır, POC üretilen çıktının adıdır.
- **İlgili terimler:** Timebox (3.3), POC (2.8), Estimation (2.7)

### Carry over

- **Terim (İngilizce):** Carry over (spillover)
- **Türkçesi:** Devreden iş
- **Tanım:** Sprint sonunda bitmeyip bir sonraki sprint'e aktarılan iş.
- **Ne işe yarar / neden var:** Tek başına felaket değildir, ama **tekrar ederse** bir sinyaldir: ya işler çok büyük bölünüyor, ya kapasite yanlış hesaplanıyor, ya tanım eksik giriyor. Retro'nun standart gündem maddelerinden biri.
- **Nerede karşına çıkar:** Sprint review ve retro'da.
- **Örnek kullanım:** "Üç sprint üst üste carry over var; story'leri daha küçük bölmemiz lazım."
- **İlgili terimler:** Sprint (3.2), Velocity (3.3), Retrospective (3.2)

---

## 3.6 Sync, async ve toplantı düzeni

Ekibin ne zaman aynı anda, ne zaman ayrı ayrı çalıştığı. Uzaktan ve farklı saat dilimlerinde çalışmanın yaygınlaşmasıyla bu ayrım bir çalışma kültürü konusu hâline geldi. Toplantı türlerinin tam listesi **Bölüm 18.5**'te; burada çalışma biçimi tarafı.

### Sync / Async

- **Terim (İngilizce):** Synchronous (sync), Asynchronous (async)
- **Türkçesi:** Eş zamanlı, eş zamansız
- **Tanım:** Sync = herkesin aynı anda katıldığı iletişim (toplantı, görüşme). Async = herkesin kendi zamanında katıldığı iletişim (yazılı mesaj, doküman yorumu, kayıtlı video).
- **Ne işe yarar / neden var:** İkisinin farklı güçleri var. Sync tartışma ve hızlı karar için iyidir ama herkesin takvimini böler ve odaklanmayı bozar. Async yazıya döktüğü için kalıcı ve aranabilir bir kayıt bırakır, ama karar süresini uzatır. Modern uzaktan ekiplerin çoğu **async-first** çalışır: varsayılan yazılıdır, toplantı istisnadır.
- **Nerede karşına çıkar:** "Bunu async halledelim" = toplantı yapmayalım, yazışalım.
- **Örnek kullanım:** "Bunun için toplantıya gerek yok; async yorum bırakın, yarın karar veririm."
- **İlgili terimler:** Async standup, Documentation-first (18.7), Focus time

### Async standup

- **Terim (İngilizce):** Async standup, written standup
- **Türkçesi:** Yazılı günlük güncelleme
- **Tanım:** Günlük hizalamanın toplantı yerine yazılı kanaldan yapılması.
- **Ne işe yarar / neden var:** Farklı saat dilimlerinde çalışan ekipler için tek uygulanabilir yol. Ayrıca yazılı olduğu için sonradan aranabilir. Riski: engeller yazıda gömülü kalıp kimsenin dikkatini çekmeyebilir; bu yüzden engeller ayrıca işaretlenir.
- **Nerede karşına çıkar:** Slack kanallarında, günün başında.
- **Örnek kullanım:** "Async standup'a yazdım ama kimse görmemiş; engeli ayrıca etiketlemem lazımmış."
- **İlgili terimler:** Daily standup (3.2), Sync/Async, Blocker (3.5)

### Context switching

- **Terim (İngilizce):** Context switching
- **Türkçesi:** Bağlam değiştirme
- **Tanım:** Bir işten başka bir işe geçerken zihnin yeniden yüklenmesi için harcanan kayıp.
- **Ne işe yarar / neden var:** Çok işe aynı anda başlamanın neden verimsiz olduğunu açıklar. Aynı zamanda WIP limitinin (3.4) ve odak zamanının gerekçesidir.
- **Nerede karşına çıkar:** İş yükü ve toplantı yoğunluğu tartışmalarında.
- **Örnek kullanım:** "Günde üç projeye bölünüyorum; context switching yüzünden hiçbirinde ilerleyemiyorum."
- **İlgili terimler:** WIP limit (3.4), Focus time, Bandwidth (18.2)

### Focus time / Deep work

- **Terim (İngilizce):** Focus time, deep work, maker time
- **Türkçesi:** Odak zamanı
- **Tanım:** Toplantısız, kesintisiz bırakılan uzun çalışma blokları.
- **Ne işe yarar / neden var:** Tasarım ve geliştirme gibi işler kesintisiz sürede üretilir. Güne dağılmış üç toplantı, teorik olarak 1,5 saat alsa bile geriye kalan zamanı kullanılamaz parçalara böler.
- **Nerede karşına çıkar:** Takvimde bloke edilmiş saatler olarak. Bazı ekiplerde "toplantısız çarşamba" gibi kurumsal kurallar vardır.
- **Örnek kullanım:** "Toplantıları öğleden sonraya toplayalım; sabahlar focus time kalsın."
- **İlgili terimler:** Context switching, Sync/Async

### Overlap hours

- **Terim (İngilizce):** Overlap hours, core hours
- **Türkçesi:** Ortak çalışma saatleri
- **Tanım:** Farklı saat dilimlerindeki ekip üyelerinin hepsinin çalışır olduğu ortak zaman aralığı.
- **Ne işe yarar / neden var:** Sync iletişimin mümkün olduğu tek pencere. Bu pencere dar olduğunda ekip async'e geçmek zorundadır — bu bir tercih değil, bir sonuçtur.
- **Nerede karşına çıkar:** Uluslararası ekiplerde ve uzaktan çalışma sözleşmelerinde.
- **Örnek kullanım:** "Overlap sadece 3 saat; o saatleri toplantıyla doldurmayalım, kritik kararlara saklayalım."
- **İlgili terimler:** Sync/Async, Async standup

---

## 3.7 Hedef ve ölçüm: OKR, KPI, north star

Ekibin doğru yöne gidip gitmediğini anlama araçları. Ürün tarafındaki en sık karıştırılan terim kümesi burasıdır; farkları bilmek seni ayırır.

### OKR

- **Terim (İngilizce):** OKR — Objectives and Key Results
- **Türkçesi:** Hedefler ve anahtar sonuçlar
- **Tanım:** Nitel bir hedef (Objective) ile o hedefe ulaşıldığını kanıtlayacak sayısal sonuçların (Key Results) birlikte yazıldığı hedef koyma yöntemi.
- **Ne işe yarar / neden var:** İki şeyi zorunlu kılar: **odak** (az sayıda hedef) ve **ölçülebilirlik** (hedefin tuttuğunu neyin kanıtlayacağı). Objective ilham verici ve niteldir; Key Result sayısal ve tartışmasızdır. Genelde çeyreklik döngüde işler.
- **Nerede karşına çıkar:** Çeyrek başında şirket ve ekip hedefleri belirlenirken.
- **Örnek kullanım:** "Objective: yeni kullanıcı ilk günden değer görsün. KR1: ilk oturumda proje oluşturma oranı %30'dan %55'e çıksın. KR2: onboarding tamamlama süresi 8 dakikadan 4 dakikaya insin."
- **Karıştırılanlar:** *Key Result* ≠ *task*. "Onboarding'i yeniden tasarla" bir görevdir, bir key result değildir; key result sonucu ölçer, yapılan işi değil. En yaygın OKR hatası budur. Ayrıca OKR'ın performans değerlendirmesine bağlanması, ekibi kolay hedefler yazmaya iter ve yöntemi bozar.
- **İlgili terimler:** KPI, North star metric, Quarter (2.9)
- **Kaynak:** Peter Drucker'ın MBO (Management by Objectives) fikrinden yola çıkarak Intel'de Andy Grove tarafından geliştirildi (1970'ler; *High Output Management*, 1983). John Doerr 1999'da Google'a taşıdı ve 2018'de *Measure What Matters* kitabıyla yaygınlaştırdı.

### KPI

- **Terim (İngilizce):** KPI — Key Performance Indicator
- **Türkçesi:** Anahtar performans göstergesi
- **Tanım:** Bir işin sağlığını sürekli izlemek için takip edilen sayısal gösterge.
- **Ne işe yarar / neden var:** OKR bir dönem için değişim hedefler; KPI ise sürekli izlenir ve genelde bir eşiğin altına düşmemesi beklenir. İkisi birbirinin alternatifi değil, tamamlayıcısıdır.
- **Nerede karşına çıkar:** Dashboard'larda, aylık raporlarda.
- **Örnek kullanım:** "Dönüşüm oranı bizim KPI'ımız; bu çeyreğin OKR'ı onu %2'den %3'e çıkarmak."
- **Karıştırılanlar:** *KPI* sürekli izlenen sağlık göstergesidir, *Key Result* belirli bir dönemde değiştirilmek istenen hedeftir. Her metrik KPI değildir; KPI, karar değiştirecek olandır.
- **İlgili terimler:** OKR, Success metric, Vanity metric

### North star metric

- **Terim (İngilizce):** North star metric — NSM
- **Türkçesi:** Kuzey yıldızı metriği
- **Tanım:** Ürünün kullanıcıya sağladığı asıl değeri en iyi temsil eden tek metrik.
- **Ne işe yarar / neden var:** Şirketin tamamını tek bir yöne hizalar. İyi bir NSM, kullanıcı gerçekten fayda gördüğünde artar — kullanıcı kandırıldığında değil. Bu yüzden seçimi stratejik bir karardır: "izlenen video dakikası" ile "kullanıcının tamamladığı ders sayısı" farklı ürünler üretir.
- **Nerede karşına çıkar:** Strateji sunumlarında, şirket düzeyinde tek bir metrik olarak.
- **Örnek kullanım:** "North star'ımız kayıt sayısı değil, ilk hafta içinde ekibiyle proje paylaşan kullanıcı sayısı."
- **Karıştırılanlar:** Gelir genelde iyi bir north star değildir, çünkü kullanıcı değerinin sonucudur, kendisi değil — ve kısa vadede kullanıcıya zarar vererek de artırılabilir.
- **İlgili terimler:** KPI, Success metric, Vanity metric

### Success metric

- **Terim (İngilizce):** Success metric
- **Türkçesi:** Başarı ölçütü
- **Tanım:** Belirli bir özellik veya değişikliğin işe yarayıp yaramadığını ölçecek metrik.
- **Ne işe yarar / neden var:** PRD'nin (2.5) zorunlu parçası. **Yayından önce** belirlenmelidir; sonradan seçilirse ekip iyi görünen metriği seçer ve öğrenme olmaz.
- **Nerede karşına çıkar:** Her özellik tanımında. "Bu iş bittiğinde başarılı olduğunu nasıl anlayacağız?" sorusunun cevabı.
- **Örnek kullanım:** "Success metric: filtre kullanan oturumlarda ürün sayfasına geçiş oranı. Ölçüm iki hafta sonra."
- **İlgili terimler:** Hypothesis (2.3), KPI, Baseline

### Baseline

- **Terim (İngilizce):** Baseline
- **Türkçesi:** Başlangıç değeri
- **Tanım:** Bir değişiklik yapılmadan önceki mevcut ölçüm değeri.
- **Ne işe yarar / neden var:** Karşılaştırma noktası olmadan "arttı" veya "azaldı" denemez. En sık yapılan ölçüm hatası, baseline almadan değişiklik yapmaktır.
- **Nerede karşına çıkar:** A/B testlerinde ve iyileştirme çalışmalarında.
- **Örnek kullanım:** "Değişikliği yayınlamadan önce iki hafta baseline toplayalım."
- **İlgili terimler:** Success metric, A/B test (4.10)

### Leading / Lagging indicator

- **Terim (İngilizce):** Leading indicator, Lagging indicator
- **Türkçesi:** Öncü gösterge, ardıl gösterge
- **Tanım:** Leading = gelecekteki sonucu önceden haber veren gösterge. Lagging = sonucu olduktan sonra gösteren gösterge.
- **Ne işe yarar / neden var:** Lagging göstergeler (gelir, aylık aktif kullanıcı) doğrudur ama geç haber verir — gördüğünde müdahale şansı azalmıştır. Leading göstergeler (ilk hafta kullanım sıklığı, onboarding tamamlama) erken uyarı verir.
- **Nerede karşına çıkar:** Metrik seti tasarlarken. İyi bir dashboard ikisini birlikte içerir.
- **Örnek kullanım:** "İptal oranı lagging; onu beklemek yerine ilk hafta aktifliğini leading gösterge olarak izleyelim."
- **İlgili terimler:** KPI, North star metric

### Vanity metric

- **Terim (İngilizce):** Vanity metric
- **Türkçesi:** Gösteriş metriği
- **Tanım:** İyi görünen ama karar değiştirmeyen metrik.
- **Ne işe yarar / neden var:** Toplam kayıt sayısı, toplam indirme, sayfa görüntülenme — hepsi sürekli artar ve hiçbiri ürünün iyi olup olmadığını söylemez. Test şu: **bu sayı değişirse ne yapacağımı değiştirir mi?** Cevap hayırsa vanity metriktir.
- **Nerede karşına çıkar:** Sunumlarda ve pazarlama materyallerinde bolca.
- **Örnek kullanım:** "Toplam kayıt 100 bin ama haftalık aktif 900; ilk sayı vanity metric."
- **İlgili terimler:** KPI, North star metric, Success metric

---

## 3.8 Kendini test et

**1.** Agile ile Scrum arasındaki fark nedir?

**2.** Agile Manifesto'nun dört değerinden "kapsamlı dokümantasyondan çok çalışan yazılım" maddesi, dokümantasyon yazılmayacağı anlamına mı gelir? Neden?

**3.** Sprint'in süresinin **sabit** olması neden önemli? Süre esnek olsaydı ne olurdu?

**4.** Sprint review ile retrospective arasındaki fark nedir?

**5.** Story point'i saate çevirmek (örneğin "1 puan = 4 saat") neden yöntemi bozar?

**6.** Velocity'nin performans göstergesi olarak kullanılması neden sorun yaratır?

**7.** Bir Trello panosu kullanmak Kanban yapmak mıdır? Eksik olan nedir?

**8.** WIP limiti koymak işi yavaşlatır mı? Cevabını gerekçelendir.

**9.** Cycle time 2 gün, lead time 3 hafta. Bu tabloda sorun nerede ve nereye bakmalısın?

**10.** Bir darboğazın (bottleneck) dışındaki aşamaları hızlandırmak toplam hızı artırır mı?

**11.** Key Result ile task arasındaki fark nedir? Şu ifade hangisidir: "Onboarding akışını yeniden tasarla."

**12.** "Toplam kayıt sayısı 100 bin" ifadesi neden vanity metric olabilir? Onu anlamlı hâle getirmek için ne eklersin?

**13.** Blocker ile dependency arasındaki fark nedir?

**14.** Async-first çalışan bir ekipte overlap hours neden toplantıyla doldurulmamalı?

---

### Cevaplar

**1.** Agile bir zihniyet ve ilkeler bütünüdür (Agile Manifesto). Scrum, o ilkeleri uygulayan somut çerçevelerden biridir. Her Scrum ekibi agile'dır iddiası taşır, ama her agile ekip Scrum kullanmaz — Kanban da bir alternatiftir.

**2.** Hayır. Metin dört değeri bir **tercih sıralaması** olarak yazar ve sağdaki maddelerin de değerli olduğunu açıkça belirtir. Anlamı: ikisi çatıştığında çalışan yazılım öncelenir; dokümantasyon terk edilmez.

**3.** Sabit süre, iş yetişmediğinde **kapsamın** kısılmasını zorlar. Süre esnek olsaydı her sprint biraz daha uzar, tahmin anlamını yitirir ve ekip düzenli öğrenme ritmini kaybederdi.

**4.** Sprint review **ürünü** değerlendirir: çıktı stakeholder'lara gösterilir, geri bildirim alınır. Retrospective **süreci** değerlendirir: ekip kendi çalışma biçimini gözden geçirir ve değiştireceği şeye karar verir.

**5.** Story point'in tüm faydası, süre tahmini yerine **göreli büyüklük** tahmini yapmasıdır; insanlar karşılaştırmada iyi, süre kestiriminde kötüdür. Saate çevrildiği anda yöntem gizli bir saat tahminine dönüşür ve belirsizliği taşıma özelliğini kaybeder.

**6.** Velocity hedefe dönüştüğünde ekip puanları şişirir. Sayı artar ama üretilen iş artmaz; metrik ölçtüğü şeyi ölçmeyi bırakır. Ayrıca velocity ekibe özeldir, iki ekip arasında karşılaştırılamaz.

**7.** Hayır, eksik. Pano yöntemin görünen kısmıdır; asıl yöntem **WIP limiti** ve akış ölçümüdür (cycle time, lead time, throughput). Limitsiz bir pano sadece bir liste görselleştirmesidir.

**8.** Hayır, tersine toplam teslim hızını artırır. Çok işe aynı anda başlamak hiçbirinin bitmemesine yol açar; yarım iş değer üretmez. Limit, insanları başlamak yerine bitirmeye zorlar ve tıkanıklığı görünür kılar.

**9.** Sorun geliştirmede değil, **beklemede**. Aradaki fark (yaklaşık 19 gün) işin sırada beklediği süredir. Bakılacak yer: kuyruk uzunluğu, WIP limiti, önceliklendirme sıklığı ve giriş kapısı — kaç iş aynı anda kabul ediliyor.

**10.** Hayır. Toplam hızı darboğaz belirler. Darboğaz dışını hızlandırmak sadece darboğaz önünde daha büyük bir yığın oluşturur.

**11.** Key Result bir **sonucu** ölçer ve sayısaldır; task yapılacak **işi** tarif eder. "Onboarding akışını yeniden tasarla" bir task'tır. Key Result hâli: "İlk oturumda proje oluşturma oranı %30'dan %55'e çıksın."

**12.** Sürekli artan, hiç azalmayan ve karar değiştirmeyen bir sayı olduğu için. Anlamlı hâle getirmek için bir **zaman aralığı ve aktiflik** eklenir: "son 7 günde en az bir kez giriş yapan kullanıcı sayısı" veya "kayıt olduktan sonra ilk haftada değer eylemini tamamlayan kullanıcı oranı".

**13.** Dependency, bir işin başka bir işe veya tarafa bağlı olmasıdır — planlanabilir ve sıralama değiştirilerek yönetilebilir. Blocker, o bağımlılığın (veya başka bir sebebin) işi **fiilen durdurduğu** durumdur ve acil müdahale gerektirir.

**14.** Overlap hours, sync iletişimin mümkün olduğu tek penceredir ve dardır. Toplantıyla doldurulursa, gerçekten aynı anda konuşulması gereken kritik kararlar için yer kalmaz. Yazıyla halledilebilecek her şey o pencerenin dışına, async'e taşınmalıdır.

---

**Biten bölüm:** Bölüm 3 — Çalışma biçimi: Agile, Scrum, Kanban ve ekip ritüelleri
**Sıradaki bölüm:** Bölüm 4 — UI/UX: süreç ve ilkeler
