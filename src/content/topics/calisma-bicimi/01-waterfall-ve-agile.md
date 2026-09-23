---
title: "Waterfall ve Agile"
sectionNumber: "3.1"
category: "calisma-bicimi"
order: 1
cardCount: 5
sourceFile: "03-calisma-bicimi-agile-scrum-kanban.md"
origin: "material"
flags: []
---
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
