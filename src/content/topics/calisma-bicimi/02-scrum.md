---
title: "Scrum"
sectionNumber: "3.2"
category: "calisma-bicimi"
order: 2
cardCount: 10
sourceFile: "03-calisma-bicimi-agile-scrum-kanban.md"
origin: "material"
flags: ["degisken"]
---
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
