---
title: "İstemci–sunucu modeli"
sectionNumber: "1.1"
category: "web-temelleri"
order: 1
cardCount: 5
sourceFile: "01-web-nasil-calisir.md"
origin: "material"
flags: ["degisken"]
---
Webdeki her şey iki taraflı bir konuşma: bir taraf **ister**, diğer taraf **verir**. Bu bölümdeki beş terim o iki tarafın adları.

### Client

- **Terim (İngilizce):** Client
- **Türkçesi:** İstemci
- **Tanım:** Bir içeriği veya veriyi isteyen taraf — pratikte kullanıcının cihazı ve üzerindeki tarayıcı.
- **Ne işe yarar / neden var:** İşin bir kısmının kullanıcının cihazında yapılmasını mümkün kılar. Her tıklamada sunucuya gidilmesi gerekmez; bazı işler yerinde çözülür, bu da hız kazandırır.
- **Nerede karşına çıkar:** Geliştiricinin "bunu client'ta yapalım" dediği her cümlede. Chrome DevTools'un tamamı client tarafını inceler. Hata raporlarında "client-side error" ayrı bir kategoridir.
- **Örnek kullanım:** "Filtreleme client'ta yapılıyor, o yüzden sonuçlar anında geliyor ama tüm veriyi baştan indirmemiz gerekiyor."
- **Karıştırılanlar:** *Client* ≠ *müşteri*. Türkçede "client" iş dünyasında müşteri anlamına da gelir; teknik konuşmada kullanıcının cihazı demektir. Bağlamdan ayırt edilir.
- **İlgili terimler:** Server, Browser, Client-side, Front-end (1.6)

### Server

- **Terim (İngilizce):** Server
- **Türkçesi:** Sunucu
- **Tanım:** İstekleri karşılayıp cevap üreten, sürekli açık duran uzaktaki bilgisayar veya program.
- **Ne işe yarar / neden var:** Veriyi tek merkezde tutar. Herkesin kendi cihazında ayrı bir veri kopyası olsaydı iki kullanıcı aynı bilgiyi göremezdi. Ayrıca gizli kalması gereken işleri (şifre kontrolü, ödeme, veritabanı erişimi) kullanıcının göremeyeceği bir yerde yapar.
- **Nerede karşına çıkar:** Her back-end konuşmasında. "Server down" = site erişilemez durumda. Hosting faturalarında ödediğin şey budur.
- **Örnek kullanım:** "Fiyat hesabını server'da yapmamız lazım; client'ta yaparsak kullanıcı kodu değiştirip fiyatı manipüle edebilir."
- **Karıştırılanlar:** *Server* ≠ *hosting*. Server makinenin/programın kendisi, hosting o makineyi kiralama hizmeti.
- **İlgili terimler:** Client, Hosting, Back-end (1.6), Serverless (10.8)

### Client-server model

- **Terim (İngilizce):** Client-server model
- **Türkçesi:** İstemci–sunucu modeli
- **Tanım:** Bir tarafın istek gönderip diğer tarafın cevap ürettiği, webin tamamının üzerine kurulu olduğu çalışma düzeni.
- **Ne işe yarar / neden var:** Sorumluluğu ikiye böler. Görsel sunum ve etkileşim client'ta, veri ve iş kuralları server'da yaşar. Bu ayrım olmadan güvenlik de ölçeklenebilirlik de mümkün olmaz.
- **Nerede karşına çıkar:** Mimari konuşmalarında ilk çizilen diyagram budur. İş görüşmesinde "webin nasıl çalıştığını anlat" sorusunun cevabı bu modeldir.
- **Örnek kullanım:** "Klasik client-server modeli, arada bir de CDN katmanı var; statik dosyalar oraya gidiyor."
- **Karıştırılanlar:** *Peer-to-peer* modelden farkı: P2P'de merkezi bir sunucu yoktur, cihazlar doğrudan birbiriyle konuşur (BitTorrent gibi). Web P2P değildir.
- **İlgili terimler:** Request, Response, Three-tier (14.3)

### Browser (User agent)

- **Terim (İngilizce):** Browser — resmi/teknik adı: User agent (UA)
- **Türkçesi:** Tarayıcı
- **Tanım:** İnternetten gelen HTML, CSS ve JavaScript'i alıp ekranda görsel bir sayfaya çeviren program.
- **Ne işe yarar / neden var:** Kodu insana görünür hâle getirir. Ayrıca güvenlik sınırlarını uygular (bir sitenin başka bir sitenin verisine erişmesini engeller), geçmişi, çerezleri ve önbelleği yönetir.
- **Nerede karşına çıkar:** "Hangi browser'da test ettin?" sorusu QA sürecinin standart parçası. Analytics raporlarında kullanıcı dağılımı browser'a göre kırılır. "User agent" terimini daha çok log dosyalarında ve bot tespiti konuşmalarında duyarsın.
- **Örnek kullanım:** "Safari'de bozuluyor ama Chrome'da sorun yok — browser uyumluluğu problemi olabilir."
- **Karıştırılanlar:** *Browser* ≠ *arama motoru*. Chrome bir browser, Google bir arama motoru. Kullanıcılar sürekli karıştırır; teknik konuşmada karıştırma.
- **İlgili terimler:** Client, Rendering engine, DOM (1.4)

### Rendering engine

- **Terim (İngilizce):** Rendering engine (browser engine)
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "tarayıcı motoru" denir.
- **Tanım:** Tarayıcının içinde, HTML/CSS'i alıp piksellere çeviren asıl bileşen.
- **Ne işe yarar / neden var:** Aynı kodun farklı tarayıcılarda neden farklı göründüğünü açıklar. Chrome ve Edge aynı motoru (Blink) kullanır, Safari Webkit kullanır, Firefox Gecko kullanır. İki tarayıcı aynı motoru kullanıyorsa davranışları büyük ölçüde aynıdır.
- **Nerede karşına çıkar:** Cross-browser bug konuşmalarında. Bir CSS özelliğinin desteklenip desteklenmediğine bakarken (caniuse.com) motor bazında listelenir.
- **Örnek kullanım:** "iOS'ta tüm tarayıcılar Webkit kullanmak zorunda, o yüzden iPhone'da Chrome ile Safari aynı davranır." `[DEĞİŞKEN BİLGİ]` — Apple'ın bu politikası düzenleyici baskısıyla değişme sürecinde; güncel durumu doğrula.
- **Karıştırılanlar:** *Rendering engine* ≠ *JavaScript engine*. İkincisi JS kodunu çalıştıran ayrı bileşendir (Chrome'da V8). Aynı tarayıcının içinde iki ayrı motor vardır.
- **İlgili terimler:** Browser, Critical rendering path (1.4)
