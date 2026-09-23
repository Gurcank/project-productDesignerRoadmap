---
title: "Kanban"
sectionNumber: "3.4"
category: "calisma-bicimi"
order: 4
cardCount: 7
sourceFile: "03-calisma-bicimi-agile-scrum-kanban.md"
origin: "material"
flags: []
---
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
