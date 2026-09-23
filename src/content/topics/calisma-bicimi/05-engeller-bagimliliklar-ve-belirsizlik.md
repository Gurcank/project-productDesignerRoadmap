---
title: "Engeller, bağımlılıklar ve belirsizlik"
sectionNumber: "3.5"
category: "calisma-bicimi"
order: 5
cardCount: 5
sourceFile: "03-calisma-bicimi-agile-scrum-kanban.md"
origin: "material"
flags: []
---
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
