# Bölüm 18 — Şirket ortamı sözlüğü ve iletişim kalıpları

Bu bölüm diğerlerinden farklı: burada öğrendiğin şeyler teknik bilgi değil, **bir odaya girdiğinde kendini yabancı hissetmemeni sağlayan kelimeler.**

Teknik bilgi eksikliği fark edilmez — sorabilirsin. Ama bir toplantıda "bunu punt edelim, şimdilik nice-to-have" cümlesini anlamamak, tartışmanın dışında kalmak demektir. Ve bu kelimelerin çoğu hiçbir yerde öğretilmez; insanlar onları kullanarak öğrenir.

**Not:** Türkiye'deki yazılım ekiplerinin çoğunda bu terimler İngilizce hâlleriyle kullanılır — Türkçe konuşmanın içine gömülmüş olarak ("bunu bir sonraki sprint'e punt edelim"). Türkçe karşılığı olan ve gerçekten kullanılanları ayrıca belirttim.

**Format notu:** Saf kısaltmalar için (EOD, FYI, TL;DR) tam kart formatı anlamsız kalıyor — tanım, "ne işe yarar" ve "nerede karşına çıkar" alanları aynı cümleye çıkıyor. Onları tablo hâlinde verdim. Kavram taşıyan terimler (bikeshedding, disagree and commit, RFC) tam kart olarak yazıldı.

---

## 18.1 Kısaltmalar

Yazışmalarda ve Slack mesajlarında en sık geçenler.

### Zaman ve takvim

| Kısaltma | Açılımı | Anlamı | Örnek |
|---|---|---|---|
| **EOD** | End of Day | Gün sonuna kadar | "Taslağı EOD'a kadar gönderirim." |
| **EOW** | End of Week | Hafta sonuna kadar | "EOW hedefliyoruz." |
| **COB** | Close of Business | Mesai bitimine kadar (EOD'a yakın) | "COB'a kadar geri dönerim." |
| **ETA** | Estimated Time of Arrival | Tahmini bitiş/teslim zamanı | "ETA nedir?" |
| **ASAP** | As Soon As Possible | Mümkün olan en kısa sürede | "ASAP değil, EOD yeterli." |
| **OOO** | Out Of Office | Ofiste/erişilebilir değil | "Yarın OOO'yum." |
| **PTO** | Paid Time Off | Ücretli izin | "Gelecek hafta PTO aldım." |
| **WFH** | Work From Home | Evden çalışma | "Bugün WFH'im." |

`[EMİN DEĞİLİM]` **Saat dilimi tuzağı:** "EOD" ifadesi kimin günü olduğunu söylemez. Farklı saat dilimlerinde çalışan ekiplerde bu belirsizlik gerçek gecikmeler üretir; net bir saat yazmak daha güvenlidir.

### İletişim

| Kısaltma | Açılımı | Anlamı | Örnek |
|---|---|---|---|
| **FYI** | For Your Information | Bilgin olsun; eylem beklenmiyor | "FYI: müşteri tarihi öne çekmek istiyor." |
| **TL;DR** | Too Long; Didn't Read | Uzun metnin en başına konan özet | "TL;DR: iki hafta gecikiyoruz." |
| **IMO / IMHO** | In My Opinion / In My Humble Opinion | Bence | "IMO ikinci seçenek daha güvenli." |
| **AFAIK** | As Far As I Know | Bildiğim kadarıyla | "AFAIK bu hâlâ deneysel." |
| **ICYMI** | In Case You Missed It | Kaçırdıysan diye | "ICYMI: dün karar aldık." |
| **NDA** | Non-Disclosure Agreement | Gizlilik sözleşmesi | "NDA imzalamadan detay paylaşamayız." |

### Kod ve inceleme

| Kısaltma | Açılımı | Anlamı | Örnek |
|---|---|---|---|
| **PTAL** | Please Take Another Look | Düzelttim, tekrar bakar mısın | "Yorumları uyguladım, PTAL." |
| **LGTM** | Looks Good To Me | Bence uygun, onaylıyorum | "LGTM, merge edebilirsin." |
| **WIP** | Work In Progress | Devam ediyor, henüz bitmedi | "WIP: henüz incelemeye hazır değil." |
| **nit** | nitpick | Küçük öneri; bloke etmiyor | "nit: buradaki boşluk 16 olmalı." |
| **SSIA** | Subject Says It All | Başlık her şeyi anlatıyor | (kısa PR başlıklarında) |

**`nit:` ön eki senin için faydalı:** bir inceleme yorumunun (17.10) bloke edici mi yoksa öneri mi olduğunu tek kelimeyle belirtir. Bunu kullanmak, tasarım geri bildirimlerinin yanlış ağırlıkta algılanmasını önler.

### Toplantı ve organizasyon

| Kısaltma | Açılımı | Anlamı |
|---|---|---|
| **1:1** | One-on-one | Yönetici ile birebir düzenli görüşme |
| **AMA** | Ask Me Anything | Serbest soru-cevap oturumu |
| **RFC** | Request For Comments | Yorum istenen öneri belgesi (18.6) |
| **DRI** | Directly Responsible Individual | İşin tek sorumlusu |
| **SME** | Subject Matter Expert | Konu uzmanı |

### 1:1

- **Terim (İngilizce):** 1:1 (one-on-one)
- **Türkçesi:** Birebir görüşme
- **Tanım:** Bir çalışan ile yöneticisi arasındaki düzenli, genelde haftalık veya iki haftalık özel görüşme.
- **Ne işe yarar / neden var:** Durum raporu toplantısı **değildir** — o bilgi başka kanallardan zaten akıyor. 1:1'in amacı engelleri konuşmak, geri bildirim alışverişi yapmak ve kariyer/gelişim konularını ele almaktır. **Gündemi genelde çalışan belirler**, yönetici değil.
- **Nerede karşına çıkar:** Kurumsal ortamda standart.
- **Örnek kullanım:** "1:1'de konuşalım; burada uzun sürer."
- **Karıştırılanlar:** 1:1'i durum raporuna çevirmek, kurumların en yaygın hatasıdır — o zaman toplantı işlevsizleşir.
- **İlgili terimler:** Feedback, Escalation (18.3)

---

## 18.2 Süreç ve karar kalıpları

### Kapsam ve önceliklendirme dili

| Terim | Anlamı | Örnek |
|---|---|---|
| **Must-have** | Olmazsa olmaz (2.7, MoSCoW) | "Ödeme akışı must-have." |
| **Nice-to-have** | İyi olur ama şart değil | "Animasyonlar nice-to-have; süre daralırsa düşer." |
| **Quick win** | Az emekle görünür fayda | "Bu bir quick win; yarım günde biter." |
| **Low-hanging fruit** | Kolay ulaşılabilir kazanç | "Önce low-hanging fruit'lara bakalım." |
| **Punt** | Bir kararı veya işi ileriye atmak | "Bunu bir sonraki sprint'e punt edelim." |
| **Park** | Şimdilik bir kenara koymak, unutmamak | "Bu konuyu park edelim, kickoff'ta dönelim." |
| **Deprioritize** | Öncelik sırasında aşağı indirmek | "Bu epic'i deprioritize ettik." |
| **Descope / Cut** | Kapsamdan çıkarmak (2.8, cut line) | "Süreye yetişmiyoruz; iki özelliği descope edelim." |
| **Table it** | Konuyu ertelemek, şimdi tartışmamak | "Bunu table edelim, gündemimiz dolu." |

**Not:** *Punt* ve *park* arasında ince bir fark var: **punt** işi belirli bir sonraki döneme atar; **park** ise "şimdi konuşmuyoruz ama unutmuyoruz" demektir ve genelde bir parking lot listesine yazılır.

### Kapasite ve iş yükü

| Terim | Anlamı | Örnek |
|---|---|---|
| **Bandwidth** | Kapasite, ayrılabilecek zaman (3.3) | "Bu hafta bandwidth'im yok." |
| **Capacity** | Ekibin fiilen çalışabileceği süre | "Kapasitemiz %60, iki kişi izinli." |
| **Context switching** | Bağlam değiştirme kaybı (3.6) | "Üç projeye bölünüyorum, context switching öldürüyor." |
| **Heads-down** | Kesintisiz odaklanma modu | "Bugün heads-down çalışacağım." |
| **Firefighting** | Sürekli acil işlerle uğraşma | "Bu hafta hep firefighting; planlı iş yapamadık." |

### Ship it

- **Terim (İngilizce):** Ship it, shipping
- **Türkçesi:** Yayınla / çıkar
- **Tanım:** Bir işin tamamlanıp kullanıcıya ulaştırılması.
- **Ne işe yarar / neden var:** "Bitti" ile "yayında" arasındaki farkı vurgular. Yazılım kültüründe **değer, yayına çıkana kadar üretilmiş sayılmaz**; bu yüzden "shipping" bir erdem olarak anılır.
- **Nerede karşına çıkar:** Her yerde. "Ship it" bir onay ifadesi olarak da kullanılır.
- **Örnek kullanım:** "Mükemmel değil ama ship edelim; kullanıcı geri bildirimiyle iyileştiririz."
- **Karıştırılanlar:** Aşırıya kaçtığında kalite bahanesine dönüşür. Karşı-kalıp: **"ship it" ile "Definition of Done" (2.10) çelişiyorsa, sorun DoD'de değil acele etmededir.**
- **İlgili terimler:** Deploy (16.1), MVP (2.8), Definition of Done (2.10)

### Bikeshedding

- **Terim (İngilizce):** Bikeshedding (law of triviality)
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "önemsiz ayrıntıda boğulma" olarak açıklanır.
- **Tanım:** Bir ekibin, asıl zor ve önemli konu yerine herkesin fikir söyleyebileceği önemsiz bir ayrıntıya saatlerce takılması.
- **Ne işe yarar / neden var:** Adı, bir nükleer santral tasarımı toplantısında reaktör yerine bisiklet barakasının rengini tartışan komite benzetmesinden gelir. Sebebi basit: **herkes basit konuda fikir sahibi olabilir, zor konuda olamaz** — ve katılım gösterme baskısı insanları kolay konuya iter.
- **Nerede karşına çıkar:** Tasarım ve karar toplantılarında çok sık. **Tasarımcı için özel bir tehlikedir:** renk ve buton metni herkesin fikir söyleyebileceği konulardır; akış yapısı değildir. Bu yüzden toplantılar kolayca renk tartışmasına kayar.
- **Örnek kullanım:** "Yirmi dakikadır buton rengini tartışıyoruz; bikeshedding yapıyoruz. Asıl karar akışın kaç adım olacağı."
- **Karıştırılanlar:** Panzehiri, tartışmayı **çerçevelemektir**: crit'e (4.2) getirirken hedefi yazmak, karar gerektiren soruyu açıkça sormak ve önemsiz konuları timebox'lamak (3.3).
- **İlgili terimler:** Design critique (4.2), Timebox (3.3), Divergent/convergent (4.2)

### Yak shaving

- **Terim (İngilizce):** Yak shaving
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Asıl işi yapmak için önce başka bir şeyi, onun için de başka bir şeyi düzeltmek zorunda kalıp, zincirin sonunda asıl işten çok uzaklaşmak.
- **Ne işe yarar / neden var:** "Basit bir buton ekleyecektim, üç saattir derleme yapılandırmasıyla uğraşıyorum" durumunun adı. Bunu adlandırabilmek, fark edip durabilmeyi sağlar.
- **Nerede karşına çıkar:** Geliştirme sırasında ve standup'ta (3.2) "neden ilerlemedim" açıklamalarında.
- **Örnek kullanım:** "Yak shaving'e girdim; asıl işe dönmek için bunu şimdilik geçici çözümle bırakıyorum."
- **İlgili terimler:** Technical debt (17.9), Timebox (3.3), Blocker (3.5)

### Scope creep / Gold plating

Detayı 2.8'de. Kısaca: **scope creep** kapsamın sessizce büyümesi; **gold plating** kimsenin istemediği hâlde ekibin kendi kendine fazladan iş yapmasıdır. İkincisi tasarımcılarda ve geliştiricilerde sık görülür — "madem dokunuyorum, şunu da güzelleştireyim".

---

## 18.3 Risk ve olay dili

| Terim | Anlamı | Detay |
|---|---|---|
| **Blocker** | İlerlemeyi tamamen durduran engel | 3.5 |
| **Impediment** | Yavaşlatan ama durdurmayan engel | 3.5 |
| **Escalation** | Sorunu karar yetkisi olan üst seviyeye taşımak | 3.5 |
| **Fire drill** | Aciliyeti abartılmış, panikle yapılan iş | — |
| **War room** | Kriz süresince herkesin aynı kanalda toplanması | 16.9 |
| **Incident** | Kullanıcıyı etkileyen beklenmedik sorun | 16.9 |
| **Sev1 / Sev2** | Olayın önem seviyesi | 16.9 |
| **Postmortem** | Olay sonrası değerlendirme | 16.9 |
| **Action item** | Toplantıdan çıkan, sahibi ve tarihi olan somut iş | — |
| **Hotfix** | Süreci atlayan acil düzeltme | 16.9 |
| **Rollback** | Önceki sürüme dönme | 16.9 |

### Action item

- **Terim (İngilizce):** Action item, AI (kısaltma olarak da kullanılır)
- **Türkçesi:** Aksiyon maddesi
- **Tanım:** Bir toplantı veya değerlendirmeden çıkan, **sahibi ve tarihi belli** somut iş.
- **Ne işe yarar / neden var:** "Şuna bir bakalım" bir aksiyon maddesi değildir; kim, ne zaman, neyi bitirecek belli değilse hiç konuşulmamış sayılır. Retro (3.2) ve postmortem'lerin (16.9) işe yaramamasının bir numaralı sebebi budur.
- **Nerede karşına çıkar:** Toplantı notlarının sonunda.
- **Örnek kullanım:** "Aksiyon maddesi olarak yazalım: erişilebilirlik kontrol listesini PR şablonuna ekleme — sahibi ben, cuma."
- **İlgili terimler:** Retrospective (3.2), DRI, Postmortem (16.9)

### Fire drill

- **Terim (İngilizce):** Fire drill
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "yangın tatbikatı"
- **Tanım:** Gerçek aciliyeti olmayan ama acilmiş gibi yürütülen, ekibin planını bozan iş.
- **Ne işe yarar / neden var:** Bu ifadeyi bilmek, bir işin gerçekten acil mi yoksa birinin paniği mi olduğunu sorgulama iznini verir. Sürekli fire drill yaşayan ekipler planlı iş yapamaz hâle gelir.
- **Nerede karşına çıkar:** Retro'larda şikâyet konusu olarak.
- **Örnek kullanım:** "Bu bir fire drill mı yoksa gerçekten sev1 mi? Etkilenen kullanıcı sayısına bakalım."
- **İlgili terimler:** Incident (16.9), Escalation (3.5), Firefighting (18.2)

---

## 18.4 Karar dili

Bir kararı tartışırken kullanılan çerçeve kelimeleri. **Bu beş kelimeyi doğru kullanmak, teknik masada ciddiye alınmanın en hızlı yoludur.**

### Constraint

- **Terim (İngilizce):** Constraint
- **Türkçesi:** Kısıt
- **Tanım:** Değiştiremeyeceğin, verili olan sınır: süre, bütçe, ekip büyüklüğü, mevcut teknoloji, yasal zorunluluk.
- **Ne işe yarar / neden var:** Kısıtları açıkça saymak, tartışmayı hayal kurmaktan çıkarır. Ayrıca kısıtlar **tasarımı kötüleştirmez, odaklar**: sınırsız zaman ve bütçe verilen projeler genelde daha iyi çıkmaz.
- **Nerede karşına çıkar:** Brief'lerde (2.5), spec'lerde (2.5), ADR'lerde (14.12).
- **Örnek kullanım:** "Kısıtlarımız: altı hafta, iki kişi, mevcut tasarım sistemi. Buna göre konuşalım."
- **Karıştırılanlar:** Bazı "kısıtlar" aslında varsayımdır. "Bunu değiştiremeyiz" cümlesi sorgulandığında sık sık çözülür.
- **İlgili terimler:** Assumption, Trade-off, Brief (2.5)

### Assumption

- **Terim (İngilizce):** Assumption
- **Türkçesi:** Varsayım
- **Tanım:** Doğru kabul edilen ama kanıtlanmamış inanç (2.4).
- **Ne işe yarar / neden var:** "Bunu varsayıyoruz" demek bir zayıflık itirafı değil, bir **risk beyanıdır**. Yazıya döküldüğünde sınanabilir hâle gelir.
- **Nerede karşına çıkar:** PRD'lerde ayrı bir başlık olarak.
- **Örnek kullanım:** "Varsayımımız: kullanıcıların çoğu masaüstünden giriyor. Yanlışsa tüm yerleşim değişir — bunu ölçelim."
- **İlgili terimler:** Hypothesis (2.3), Risk, Constraint

### Risk

- **Terim (İngilizce):** Risk, mitigation
- **Türkçesi:** Risk, azaltma önlemi
- **Tanım:** Olması muhtemel ve olursa zarar verecek durum. **Mitigation**, o riski azaltmak için önceden alınan önlem.
- **Ne işe yarar / neden var:** Riski adlandırmak onu yönetilebilir kılar. Kayıtlı bir risk sürpriz değildir; kayıtsız bir risk krizdir.
- **Nerede karşına çıkar:** Proje planlarında ve PRD'lerde.
- **Örnek kullanım:** "Risk: üçüncü parti servis lansman gününde yetişmeyebilir. Azaltma: geçici bir alternatif akış hazırlayalım."
- **İlgili terimler:** Assumption, Dependency (3.5), Graceful degradation (14.8)

### Trade-off

Detayı 9.12 ve 14.1'de. Kısaca: **hiçbir seçenek her şeyi kazandırmaz.** Bir öneriyi savunuyorsan neyi feda ettiğini söyleyebilmelisin; söyleyemiyorsan öneriyi yeterince anlamamışsındır.

### Spike / Timebox

Detayı 3.5 ve 3.3'te. Kısaca: **spike** belirsizliği azaltmak için ayrılan araştırma işi; **timebox** ona konan zaman sınırıdır. "Bilmiyoruz" cevabını "iki gün içinde öğreneceğiz"e çeviren mekanizma.

---

## 18.5 Toplantı türleri

| Toplantı | Amacı | Detay |
|---|---|---|
| **Kickoff** | Projenin başlangıcı; hedef, kapsam, roller, paydaşlar netleşir | 2.1 |
| **Standup** | Günlük hizalama; engelleri ortaya çıkarmak | 3.2 |
| **Sprint planning** | Sprint'e ne alınacağı ve hedefin belirlenmesi | 3.2 |
| **Grooming / Refinement** | Backlog'un netleştirilmesi ve tahminlenmesi | 2.7 |
| **Sprint review / Demo** | Üretilen çıktının gösterilmesi ve geri bildirim | 3.2 |
| **Retrospective** | Çalışma biçiminin değerlendirilmesi | 3.2 |
| **Design critique** | Tasarımın hedeflere göre değerlendirilmesi | 4.2 |
| **Design review** | Uygulanmış arayüzün tasarıma uygunluk kontrolü | 2.10 |
| **Architecture review** | Mimari kararın tartışılması ve onaylanması | 14.1 |
| **Postmortem** | Olay sonrası kök neden ve önlem | 16.9 |
| **1:1** | Yönetici ile birebir | 18.1 |
| **All-hands / Town hall** | Şirket geneli bilgilendirme | — |
| **Sync** | Belirli bir konu için hızlı hizalama görüşmesi | 3.6 |
| **Office hours** | Belirli saatlerde açık soru-cevap penceresi | — |

### Sync

- **Terim (İngilizce):** Sync, sync up, touch base, catch up, huddle
- **Türkçesi:** Hizalama görüşmesi
- **Tanım:** Belirli bir konuyu hızlıca konuşmak için yapılan kısa, genelde plansız görüşme.
- **Ne işe yarar / neden var:** Yazışmanın uzadığı durumlarda beş dakikalık bir konuşma yirmi mesajı bitirir. Ama bunun tersi de doğrudur: her konuyu sync'e taşımak, herkesin odak zamanını (3.6) parçalar.
- **Nerede karşına çıkar:** Slack'te "quick sync?" mesajı olarak.
- **Örnek kullanım:** "Bu yazışarak uzayacak; 10 dakika sync yapalım ve kararı yazıya dökelim."
- **Karıştırılanlar:** **Kritik alışkanlık: sync'ten çıkan kararı yazıya dökmek.** Konuşulan ama yazılmayan karar, katılmayanlar için hiç alınmamış sayılır.
- **İlgili terimler:** Async (3.6), Action item (18.3), Status update (18.6)

### Toplantı hijyeni

Bir toplantının işe yarayıp yaramadığını belirleyen üç şey:

1. **Gündem var mı?** Gündemsiz toplantı, kimin ne için orada olduğunu bilmediği bir toplantıdır.
2. **Karar mı, bilgilendirme mi?** Bilgilendirme toplantısının çoğu yazılı olabilir (3.6). Toplantı, **karar ve tartışma** için ayrılmalıdır.
3. **Çıktı ne?** Aksiyon maddeleri (18.3) yazılmadıysa toplantı bitmemiştir.

Yaygın bir kalıp: **"Bu toplantı bir e-posta olabilir miydi?"** — bunu sormak meşrudur ve iyi ekiplerde teşvik edilir.

---

## 18.6 Yazılı formatlar

Kurumsal ortamda hangi belgenin ne işe yaradığı.

| Format | Ne için | Detay |
|---|---|---|
| **One-pager** | Bir fikri tek sayfada sunmak, ön onay almak | 2.5 |
| **PRD / Spec** | Ne yapılacağını ve neden yapılacağını tanımlamak | 2.5 |
| **RFC** | Bir öneriyi yorum ve itiraz için açmak | Aşağıda |
| **ADR** | Alınan mimari kararı gerekçesiyle kaydetmek | 14.12 |
| **Status update** | İlerlemeyi paydaşlara düzenli bildirmek | Aşağıda |
| **Changelog / Release note** | Ne değiştiğini kullanıcıya anlatmak | 15.8 |
| **Runbook** | Bilinen bir soruna adım adım müdahale talimatı | 16.9 |
| **Postmortem** | Olay sonrası analiz ve önlemler | 16.9 |
| **Brief** | Bir tasarım/içerik işine hedef ve kısıt vermek | 2.5 |

### RFC

- **Terim (İngilizce):** RFC — Request For Comments
- **Türkçesi:** Görüş talebi belgesi
- **Tanım:** Bir öneriyi, karar alınmadan önce yazıya döküp ilgililerin yorum ve itirazına açmak.
- **Ne işe yarar / neden var:** Kararı toplantıdan yazıya taşır. Faydaları: yazan kişi fikrini netleştirmek zorunda kalır, katılamayanlar da yorum yapabilir, itirazlar kayıt altına alınır ve karar alındığında herkes gerekçeyi görmüş olur.
- **Nerede karşına çıkar:** Orta ve büyük ekiplerde, önemli değişikliklerden önce.
- **Örnek kullanım:** "Bu değişiklik üç ekibi etkiliyor; RFC yazıp bir hafta yorum alalım."
- **Karıştırılanlar:** *RFC* karar **öncesi** tartışmadır; *ADR* (14.12) karar **sonrası** kayıttır. Biri girdi, diğeri çıktıdır.
- **İlgili terimler:** ADR (14.12), One-pager (2.5), Disagree and commit (18.7)

### Status update

- **Terim (İngilizce):** Status update, weekly update
- **Türkçesi:** Durum güncellemesi
- **Tanım:** Bir işin ilerleyişini paydaşlara (2.1) düzenli olarak bildiren kısa yazı.
- **Ne işe yarar / neden var:** Yöneticilerin ve paydaşların sormasına gerek kalmadan bilgi akmasını sağlar — bu da kesintileri azaltır. İyi bir güncelleme genelde dört parçadan oluşur: **durum** (yolunda / risk altında / gecikiyor), **bu hafta ne oldu**, **sırada ne var**, **neye ihtiyacım var**.
- **Nerede karşına çıkar:** Haftalık olarak Slack veya e-postada.
- **Örnek kullanım:** "Durum: risk altında. Üçüncü parti entegrasyonu gecikti; ETA'yı bir hafta kaydırmamız gerekebilir."
- **Karıştırılanlar:** **Kötü haberi geciktirmek en yaygın hatadır.** Erken bildirilen gecikme yönetilebilir bir bilgidir; son anda bildirilen gecikme bir güven sorunudur.
- **İlgili terimler:** Escalation (3.5), Stakeholder (2.1), Risk (18.4)

---

## 18.7 Kültür kalıpları

Bir ekibin nasıl çalıştığını tarif eden ifadeler. Bunları bilmek, bir iş görüşmesinde ekibin kültürünü anlamana da yarar.

### Async-first

- **Terim (İngilizce):** Async-first, remote-first
- **Türkçesi:** Eş zamansız öncelikli
- **Tanım:** Varsayılan iletişimin yazılı ve eş zamansız olduğu, toplantının istisna olduğu çalışma biçimi (3.6).
- **Ne işe yarar / neden var:** Farklı saat dilimlerinde çalışmayı mümkün kılar ve kararların yazılı iz bırakmasını sağlar. Bedeli: karar süresi uzar ve yazma disiplini gerektirir.
- **Nerede karşına çıkar:** Uzaktan çalışan ekiplerin tanıtım metinlerinde.
- **Örnek kullanım:** "Async-first çalışıyoruz; toplantı yerine yazılı öneri bekliyoruz."
- **İlgili terimler:** Sync/Async (3.6), Documentation-first

### Documentation-first

- **Terim (İngilizce):** Documentation-first, writing culture
- **Türkçesi:** Belge öncelikli
- **Tanım:** Bir işe başlamadan önce niyetin ve kararın yazıya dökülmesi.
- **Ne işe yarar / neden var:** Yazmak, düşünmeyi zorlar. Bir fikri tek sayfaya sığdıramamak (2.5) çoğu zaman fikrin henüz netleşmediğinin işaretidir. Ayrıca yeni katılan biri, aylarca süren konuşmaları okuyarak yetişebilir.
- **Nerede karşına çıkar:** Async çalışan ekiplerde.
- **Örnek kullanım:** "Önce bir RFC yazalım; tartışmayı onun üstünden yürütelim."
- **İlgili terimler:** RFC (18.6), ADR (14.12), Async-first

### Disagree and commit

- **Terim (İngilizce):** Disagree and commit
- **Türkçesi:** Katılmıyorum ama destekliyorum
- **Tanım:** Bir karara katılmasan bile, karar alındıktan sonra ona tam destek verme ilkesi.
- **Ne işe yarar / neden var:** Ekipleri iki kötü uçtan korur: **sonsuz tartışma** (herkes ikna olana kadar ilerlememek) ve **sessiz sabotaj** (karara uymuş görünüp yarım çalışmak). İlkenin çalışması için ön koşul, **itirazın gerçekten dinlenmiş olmasıdır** — aksi hâlde "sus ve uy" anlamına gelir ve zararlıdır.
- **Nerede karşına çıkar:** Karar kültüründe.
- **Örnek kullanım:** "Ben hâlâ ikinci seçeneği tercih ederdim ama karar verildi; disagree and commit — tam destek veriyorum."
- **Karıştırılanlar:** İtirazın **kayıt altına alınması** önemlidir (ADR'deki alternatifler bölümü, 14.12): karar yanlış çıkarsa, o itiraz süreci hızlandırır.
- **İlgili terimler:** ADR (14.12), RFC (18.6), Blameless culture

### Blameless culture

- **Terim (İngilizce):** Blameless culture, psychological safety
- **Türkçesi:** Suçlamayan kültür, psikolojik güvenlik
- **Tanım:** Hataların kişilere değil sisteme atfedildiği, insanların sorun bildirmekten çekinmediği ortam.
- **Ne işe yarar / neden var:** Suçlama kültüründe insanlar hataları gizler; gizlenen hata büyür ve sistem öğrenemez. Postmortem'lerin (16.9) "blameless" olmasının sebebi budur. Aynı ilke retro (3.2) ve kod incelemesi (17.10) için de geçerlidir.
- **Nerede karşına çıkar:** Olay yönetimi ve ekip kültürü tartışmalarında.
- **Örnek kullanım:** "Soru 'kim yaptı' değil, 'bu nasıl canlıya kadar geldi ve hangi kontrol eksikti'."
- **İlgili terimler:** Postmortem (16.9), Retrospective (3.2), Code review (17.10)

### Bias for action

- **Terim (İngilizce):** Bias for action
- **Türkçesi:** Eyleme meyil
- **Tanım:** Belirsizlik varken beklemek yerine, geri alınabilir kararlarda hızlı hareket etmeyi tercih eden yaklaşım.
- **Ne işe yarar / neden var:** Çift yönlü kapı kararlarında (14.1) uzun tartışma israftır. Ama **tek yönlü kapılarda aynı refleks tehlikelidir** — bu yüzden ilke, karar türünü ayırt etmeyi gerektirir.
- **Nerede karşına çıkar:** Şirket değerleri listelerinde ve iş görüşmelerinde.
- **Örnek kullanım:** "Bu geri alınabilir; bias for action, deneyip ölçelim."
- **İlgili terimler:** Tersine çevrilebilirlik (14.1), Iteration (2.2)

### Ownership / DRI

- **Terim (İngilizce):** Ownership, DRI (Directly Responsible Individual)
- **Türkçesi:** Sahiplik, tek sorumlu
- **Tanım:** Her işin **tek bir** sahibi olması ilkesi.
- **Ne işe yarar / neden var:** "Herkesin sorumluluğu" pratikte "kimsenin sorumluluğu" demektir. Tek bir sahip, işin takip edilmesini garanti eder — sahip işi kendisi yapmak zorunda değildir, bitmesini sağlamakla yükümlüdür.
- **Nerede karşına çıkar:** Proje ve aksiyon maddesi atamalarında.
- **Örnek kullanım:** "Bu maddenin DRI'ı kim? Sahipsiz kalırsa yapılmaz."
- **İlgili terimler:** Action item (18.3), Stakeholder (2.1)

---

## 18.8 Kendini test et

**1.** EOD ve COB ne demek? "EOD'a kadar" ifadesinin bilinen belirsizliği nedir?

**2.** FYI ve PTAL ne zaman kullanılır?

**3.** `nit:` ön eki ne işe yarar ve senin için neden faydalı?

**4.** 1:1'in amacı nedir? En yaygın bozulma biçimi nedir?

**5.** Punt ile park arasındaki ince fark nedir?

**6.** Bikeshedding nedir ve tasarımcı için neden özel bir tehlike?

**7.** Bikeshedding'in panzehiri nedir?

**8.** Yak shaving nedir? Adlandırabilmek neden işe yarar?

**9.** Gold plating ile scope creep arasındaki fark nedir?

**10.** Blocker ile impediment arasındaki fark nedir?

**11.** Fire drill nedir ve bu kelimeyi bilmek ne kazandırır?

**12.** Bir "action item"ın taşıması gereken iki şey nedir? Eksikse ne olur?

**13.** Constraint ile assumption arasındaki fark nedir? "Bunu değiştiremeyiz" cümlesi hangisine örnek olabilir?

**14.** Bir riski kaydetmek neden önemli?

**15.** Sync yapmanın faydası ve maliyeti nedir? Sync'ten sonraki kritik alışkanlık nedir?

**16.** Bir toplantının işe yarayıp yaramadığını belirleyen üç şey nedir?

**17.** RFC ile ADR arasındaki fark nedir?

**18.** İyi bir status update'in dört parçası nedir? En yaygın hata nedir?

**19.** Documentation-first neden sadece bir arşivleme pratiği değildir?

**20.** "Disagree and commit" ilkesinin çalışması için ön koşul nedir? Ön koşul yoksa ne anlama gelir?

**21.** Blameless kültür neden pratik bir gereklilik, sadece bir nezaket değil?

**22.** "Bias for action" ne zaman tehlikelidir?

**23.** "Herkesin sorumluluğu" neden sorunlu? DRI bu sorunu nasıl çözer?

---

### Cevaplar

**1.** **EOD** = gün sonuna kadar; **COB** = mesai bitimine kadar. Belirsizlik: **kimin günü olduğunu söylemez.** Farklı saat dilimlerinde çalışan ekiplerde gerçek gecikmeler üretir; net bir saat yazmak daha güvenlidir.

**2.** **FYI**: bilgin olsun, senden eylem beklenmiyor. **PTAL**: "düzelttim, tekrar bakar mısın" — kod incelemesinde yorumları uyguladıktan sonra kullanılır.

**3.** Bir inceleme yorumunun **bloke edici mi yoksa öneri mi** olduğunu tek kelimeyle belirtir. Senin için faydalı çünkü tasarım geri bildirimlerinin yanlış ağırlıkta algılanmasını önler — "bu boşluk 16 olmalı" ile "bu akış çalışmıyor" farklı ağırlıklardır.

**4.** Engelleri konuşmak, geri bildirim alışverişi yapmak ve gelişim konularını ele almak; gündemi genelde **çalışan** belirler. En yaygın bozulma: **durum raporu toplantısına dönüşmesi** — o bilgi zaten başka kanallardan akıyor, dönüştüğünde toplantı işlevsizleşir.

**5.** **Punt**, işi belirli bir sonraki döneme atar. **Park**, "şimdi konuşmuyoruz ama unutmuyoruz" demektir ve genelde bir bekleme listesine yazılır.

**6.** Asıl zor konu yerine, herkesin fikir söyleyebileceği önemsiz bir ayrıntıya saatlerce takılmak. Tasarımcı için tehlikeli çünkü **renk ve buton metni herkesin fikir söyleyebileceği konulardır; akış yapısı değildir** — toplantılar bu yüzden kolayca renk tartışmasına kayar.

**7.** **Tartışmayı çerçevelemek:** crit'e getirirken hedefi yazmak, karar gerektiren soruyu açıkça sormak ve önemsiz konuları timebox'lamak.

**8.** Asıl işi yapmak için önce başka bir şeyi, onun için de başka bir şeyi düzeltmek zorunda kalıp zincirin sonunda asıl işten uzaklaşmak. Adlandırabilmek işe yarar çünkü **fark edip durabilmeyi** sağlar — "yak shaving'e girdim, geçici çözümle bırakıyorum" diyebilmek.

**9.** **Scope creep**: kapsam dışarıdan gelen isteklerle sessizce büyür. **Gold plating**: kimse istemediği hâlde ekip kendi kendine fazladan iş yapar ("madem dokunuyorum, şunu da güzelleştireyim").

**10.** **Blocker** ilerlemeyi tamamen durdurur ve kendi başına çözülemez. **Impediment** yavaşlatır ama durdurmaz. Her zorluğa "blocker" demek kelimenin gücünü tüketir.

**11.** Gerçek aciliyeti olmayan ama acilmiş gibi yürütülen, ekibin planını bozan iş. Kelimeyi bilmek, bir işin **gerçekten acil mi yoksa birinin paniği mi** olduğunu sorgulama iznini verir.

**12.** **Sahibi ve tarihi.** Eksikse "şuna bir bakalım" seviyesinde kalır ve yapılmaz — retro ile postmortem'lerin işe yaramamasının bir numaralı sebebi budur.

**13.** **Constraint** değiştiremeyeceğin verili bir sınırdır; **assumption** doğru kabul edilen ama kanıtlanmamış bir inançtır. "Bunu değiştiremeyiz" cümlesi sık sık **varsayım** çıkar — sorgulandığında çözülür.

**14.** Çünkü **kayıtlı bir risk sürpriz değildir; kayıtsız bir risk krizdir.** Adlandırmak, azaltma önlemi planlamayı mümkün kılar.

**15.** **Faydası:** yazışmanın uzadığı durumda beş dakikalık konuşma yirmi mesajı bitirir. **Maliyeti:** herkesin odak zamanını parçalar. **Kritik alışkanlık:** sync'ten çıkan kararı yazıya dökmek — konuşulan ama yazılmayan karar, katılmayanlar için hiç alınmamış sayılır.

**16.** (1) Gündem var mı? (2) Karar mı, bilgilendirme mi — bilgilendirmenin çoğu yazılı olabilir. (3) Çıktı ne — aksiyon maddeleri yazılmadıysa toplantı bitmemiştir.

**17.** **RFC** karar **öncesi** tartışmadır: öneriyi yorum ve itiraza açar. **ADR** karar **sonrası** kayıttır: alınan kararı gerekçesi ve alternatifleriyle saklar. Biri girdi, diğeri çıktıdır.

**18.** **Durum** (yolunda / risk altında / gecikiyor), **bu hafta ne oldu**, **sırada ne var**, **neye ihtiyacım var**. En yaygın hata: **kötü haberi geciktirmek** — erken bildirilen gecikme yönetilebilir bilgi, son anda bildirilen gecikme bir güven sorunudur.

**19.** Çünkü **yazmak düşünmeyi zorlar.** Bir fikri tek sayfaya sığdıramamak çoğu zaman fikrin henüz netleşmediğinin işaretidir. Ayrıca yeni katılan biri aylarca süren konuşmaları okuyarak yetişebilir.

**20.** Ön koşul: **itirazın gerçekten dinlenmiş olması.** Yoksa ilke "sus ve uy" anlamına gelir ve zararlıdır. Ayrıca itirazın kayıt altına alınması önemlidir — karar yanlış çıkarsa o itiraz süreci hızlandırır.

**21.** Çünkü **suçlama kültüründe insanlar hataları gizler**; gizlenen hata büyür ve sistem öğrenemez. Yani nezaket değil, öğrenme kapasitesi meselesidir.

**22.** **Tek yönlü kapı kararlarında** (geri dönüşü olmayan veya çok pahalı olan). İlke, çift yönlü kapılar için doğrudur; karar türünü ayırt etmeden uygulanırsa pahalı hatalar üretir.

**23.** Çünkü **pratikte "kimsenin sorumluluğu" demektir** — herkes başkasının bakacağını varsayar. DRI, tek bir sahip atayarak takibi garanti eder; sahip işi kendisi yapmak zorunda değildir, **bitmesini sağlamakla** yükümlüdür.

---

**Biten bölüm:** Bölüm 18 — Şirket ortamı sözlüğü ve iletişim kalıpları
**Sıradaki bölüm:** Bölüm 19 — Yapay zekâ ile profesyonel çalışma
