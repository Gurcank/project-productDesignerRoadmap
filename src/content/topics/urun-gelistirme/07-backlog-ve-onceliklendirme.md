---
title: "Backlog ve önceliklendirme"
sectionNumber: "2.7"
category: "urun-gelistirme"
order: 7
cardCount: 8
sourceFile: "02-urun-gelistirme-yasam-dongusu.md"
origin: "material"
flags: []
---
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
