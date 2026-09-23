---
title: "Sync, async ve toplantı düzeni"
sectionNumber: "3.6"
category: "calisma-bicimi"
order: 6
cardCount: 5
sourceFile: "03-calisma-bicimi-agile-scrum-kanban.md"
origin: "material"
flags: []
---
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
