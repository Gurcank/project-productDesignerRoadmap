---
title: "Ürün geliştirme yaşam döngüsü"
sectionNumber: "2.2"
category: "urun-gelistirme"
order: 2
cardCount: 5
sourceFile: "02-urun-gelistirme-yasam-dongusu.md"
origin: "material"
flags: []
---
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
