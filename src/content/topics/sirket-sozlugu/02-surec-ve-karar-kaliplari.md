---
title: "Süreç ve karar kalıpları"
sectionNumber: "18.2"
category: "sirket-sozlugu"
order: 2
cardCount: 6
sourceFile: "18-sirket-ortami-sozlugu.md"
origin: "material"
flags: []
---
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
