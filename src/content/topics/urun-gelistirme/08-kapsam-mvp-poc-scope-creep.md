---
title: "Kapsam: MVP, POC, scope creep"
sectionNumber: "2.8"
category: "urun-gelistirme"
order: 8
cardCount: 6
sourceFile: "02-urun-gelistirme-yasam-dongusu.md"
origin: "material"
flags: []
---
Bir işin sınırlarını çizme dili. Tasarımcı olarak en çok bu terimlerle savunma yapacaksın: neyin bu sürüme girdiği, neyin girmediği ve neden.

### MVP

- **Terim (İngilizce):** MVP — Minimum Viable Product
- **Türkçesi:** Asgari uygulanabilir ürün
- **Tanım:** Bir fikrin işe yarayıp yaramadığını öğrenmek için gereken en küçük gerçek ürün.
- **Ne işe yarar / neden var:** Büyük bir bahsi küçük parçaya böler. Amaç "az özellikli ürün çıkarmak" değil, **en az çabayla en çok öğrenmek**tir. Bu ayrım kritik: bir MVP kötü olabilir ama işe yaramaz olamaz — kullanıcının bir işi baştan sona bitirebilmesi gerekir.
- **Nerede karşına çıkar:** Neredeyse her yeni proje konuşmasında. Aynı zamanda en çok yanlış kullanılan terimlerden biri.
- **Örnek kullanım:** "MVP'de sadece tek ödeme yöntemi olsun; talep görürse diğerlerini ekleriz."
- **Karıştırılanlar:** *MVP* ≠ *yarım ürün*. Kullanıcı MVP'yle bir işi tamamlayabilmelidir. Tek tekerlekli bir araba MVP değildir; kaykay MVP'dir. Ayrıca *MVP* ≠ *prototype* — MVP gerçek kullanıcıya çıkar, prototip çıkmaz.
- **İlgili terimler:** POC, Prototype, Scope, Build-Measure-Learn (2.2)
- **Kaynak:** Terim 2001'de Frank Robinson tarafından ortaya atıldı; Steve Blank ve Eric Ries tarafından yaygınlaştırıldı. Ries'in *The Lean Startup* kitabındaki tanımı en çok atıf alan tanımdır.

### POC

- **Terim (İngilizce):** POC — Proof of Concept
- **Türkçesi:** Kavram kanıtı
- **Tanım:** Bir şeyin teknik olarak mümkün olup olmadığını göstermek için yapılan küçük deneme.
- **Ne işe yarar / neden var:** Riski erken azaltır. "Bu entegrasyon çalışır mı?" sorusunu üç ay sonra değil, üç günde cevaplar. Atılmak üzere yazılır; kalıcı olması beklenmez.
- **Nerede karşına çıkar:** Yeni bir teknoloji veya üçüncü parti servis değerlendirilirken.
- **Örnek kullanım:** "Önce bir POC yapalım; bu API gerçekten istediğimiz veriyi dönüyor mu görelim."
- **Karıştırılanlar:** *POC* teknik mümkünlüğü, *prototype* deneyimi, *MVP* pazar talebini sınar. Üçü farklı soruları cevaplar. En sık yapılan hata, POC kodunun "zaten çalışıyor" denip üretime alınmasıdır.
- **İlgili terimler:** MVP, Prototype, Spike (3.5)

### Prototype

- **Terim (İngilizce):** Prototype
- **Türkçesi:** Prototip
- **Tanım:** Gerçek ürün gibi davranan ama arkasında gerçek sistem olmayan deneme sürümü.
- **Ne işe yarar / neden var:** Kullanıcı testini kod yazmadan mümkün kılar. Tasarım kararlarının en ucuz sınandığı yer. Detaylı türleri (lo-fi, hi-fi, clickable) Bölüm 4.5'te.
- **Nerede karşına çıkar:** Figma'da hazırlanır, kullanıcı testinde veya stakeholder sunumunda gösterilir.
- **Örnek kullanım:** "Prototip üzerinden beş kişiyle test edelim; kodlamadan önce akıştaki tıkanmayı görürüz."
- **İlgili terimler:** MVP, POC, Wireframe (4.5)

### Scope

- **Terim (İngilizce):** Scope
- **Türkçesi:** Kapsam
- **Tanım:** Bir işe neyin dahil olduğu ve neyin olmadığı.
- **Ne işe yarar / neden var:** Kapsam yazılı değilse herkesin kafasındaki kapsam farklıdır. **Out of scope** (kapsam dışı) listesi, in scope listesi kadar önemlidir — çoğu ekip ikincisini yazıp birincisini atlar ve sorun oradan çıkar.
- **Nerede karşına çıkar:** Spec ve PRD'nin zorunlu bölümü. Sözleşmeli işlerde hukuki karşılığı vardır.
- **Örnek kullanım:** "Çok dilli destek bu işin kapsamı dışında; ayrı bir iş olarak planlayalım."
- **İlgili terimler:** Scope creep, MoSCoW (2.7), Cut line

### Scope creep

- **Terim (İngilizce):** Scope creep
- **Türkçesi:** Kapsam kayması
- **Tanım:** İş sürerken kapsamın, küçük eklemelerle ve resmî bir karar olmadan büyümesi.
- **Ne işe yarar / neden var:** Tehlikeli olan tek tek eklemeler değil, hiçbirinin ayrı ayrı büyük görünmemesidir. "Bir de şunu ekleyelim" cümlesi beş kez tekrarlandığında süre iki katına çıkar ama kimse ne zaman karar verildiğini hatırlamaz.
- **Nerede karşına çıkar:** Gecikmelerin en yaygın sebebi. Retro toplantılarında sürekli gündeme gelir.
- **Örnek kullanım:** "Bu bir scope creep; eklemek istiyorsak sorun değil ama teslim tarihini de birlikte güncelleyelim."
- **Karıştırılanlar:** *Scope creep* ≠ *kapsam değişikliği*. Değişiklik bilinçli ve kayıtlıdır, sonuçları hesaplanır. Creep sessizce olur. Ayrıca *gold plating* farklı bir kusurdur: kimse istemediği hâlde ekibin kendi kendine "daha iyi olsun" diye fazladan iş yapması.
- **İlgili terimler:** Scope, Cut line, Trade-off (18.4)

### Cut line

- **Terim (İngilizce):** Cut line (scope cut)
- **Türkçesi:** Kesme çizgisi
- **Tanım:** Öncelik sırasına dizilmiş listede, "bu çizginin altındakiler bu sürüme girmiyor" diye çekilen sınır.
- **Ne işe yarar / neden var:** Süre daralınca neyin düşeceğinin **önceden** kararlaştırılmasını sağlar. Kriz anında panikle karar vermek yerine, sakin kafayla çizilmiş bir sıraya bakılır.
- **Nerede karşına çıkar:** Yayın tarihi yaklaşırken yapılan kapsam toplantılarında.
- **Örnek kullanım:** "Cut line'ı animasyonların üstüne çekelim; gerekirse onlar düşer, akış kalır."
- **İlgili terimler:** Scope, MoSCoW (2.7), Nice-to-have (18.2)
