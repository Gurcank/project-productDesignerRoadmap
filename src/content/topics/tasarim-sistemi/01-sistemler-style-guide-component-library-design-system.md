---
title: "Sistemler: style guide, component library, design system"
sectionNumber: "5.1"
category: "tasarim-sistemi"
order: 1
cardCount: 7
sourceFile: "05-tasarim-sistemi-ve-gorsel-dil.md"
origin: "material"
flags: []
---
Bu üç terim birbirinin yerine kullanılır ama kapsamları farklıdır. Farkı bilmek, bir şirkete girdiğinde "bizde design system var" cümlesinin gerçekte ne kadarını kapsadığını anlamanı sağlar.

### Style guide

- **Terim (İngilizce):** Style guide
- **Türkçesi:** Stil kılavuzu
- **Tanım:** Marka ve görsel kuralları anlatan belge: logo kullanımı, renkler, tipografi, ton.
- **Ne işe yarar / neden var:** En dar kapsam. Kuralları **anlatır** ama uygulamaz; kimse okumazsa hiçbir şey değişmez. Genelde PDF veya statik bir sayfadır.
- **Nerede karşına çıkar:** Marka projelerinde ve ajans tesliminde.
- **Örnek kullanım:** "Style guide'da logo etrafında minimum boşluk tanımlı; bu banner onu ihlal ediyor."
- **Karıştırılanlar:** *Style guide* kuralları anlatan bir belgedir; *design system* çalışan bir üründür. Style guide'ı olan her ekip design system'e sahip değildir.
- **İlgili terimler:** Design system, Brand guideline, Tone of voice (4.9)

### Pattern library

- **Terim (İngilizce):** Pattern library
- **Türkçesi:** Kalıp kütüphanesi
- **Tanım:** Tekrar eden arayüz çözümlerinin ve ne zaman kullanılacaklarının derlendiği koleksiyon.
- **Ne işe yarar / neden var:** Bileşenden bir seviye üsttedir. "Buton" bir bileşendir; "silme onayı nasıl alınır", "form hataları nasıl gösterilir" bir kalıptır. Aynı problemin her ekranda farklı çözülmesini engeller.
- **Nerede karşına çıkar:** Olgun tasarım sistemlerinin dokümantasyon bölümünde.
- **Örnek kullanım:** "Yıkıcı işlem kalıbımız var: silme her yerde geri alınabilir toast ile yapılır, diyalogla değil."
- **İlgili terimler:** Component library, Design system

### Component library

- **Terim (İngilizce):** Component library
- **Türkçesi:** Bileşen kütüphanesi
- **Tanım:** Yeniden kullanılabilir arayüz parçalarının kod veya tasarım dosyası olarak toplandığı yer.
- **Ne işe yarar / neden var:** Aynı butonu her ekranda yeniden çizmeyi ve yeniden kodlamayı ortadan kaldırır. Tasarım tarafında Figma kütüphanesi, kod tarafında React bileşen paketi olarak yaşar. **İkisinin senkron olması** ayrı bir iştir ve çoğu ekipte aksayan yer burasıdır.
- **Nerede karşına çıkar:** Her orta ölçekli üründe.
- **Örnek kullanım:** "Bu bileşen kütüphanede yok; ya ekleyelim ya varolan kartı varyant olarak genişletelim."
- **Karıştırılanlar:** Component library bir design system'in **parçasıdır**, kendisi değil. Sadece bileşen listesi olup kural, token ve dokümantasyonu olmayan bir yapı sistem değildir.
- **İlgili terimler:** Design system, Variant (5.10), Component (8.7)

### Design system

- **Terim (İngilizce):** Design system
- **Türkçesi:** Tasarım sistemi
- **Tanım:** Bir ürünün tasarım kararlarını, bileşenlerini, kurallarını ve kodunu birlikte tutan yaşayan sistem.
- **Ne işe yarar / neden var:** Tutarlılık, hız ve kalite üretir. Tekrar eden kararları bir kez alıp her yerde uygular; böylece ekip enerjisini yeni problemlere ayırır. **Ürün gibi yönetilir:** sahibi, sürümü, değişiklik günlüğü ve kullanıcıları (yani ekip) vardır.
- **Nerede karşına çıkar:** Orta ve büyük ekiplerde. Küçük projelerde "sistem" birkaç token ve birkaç bileşenden ibaret olabilir; bu da geçerli bir sistemdir.
- **Örnek kullanım:** "Design system'e yeni bileşen eklemeden önce üç yerde ihtiyaç olduğunu görelim; tek kullanımlık şeyi sisteme koymayalım."
- **Karıştırılanlar:** Design system bir Figma dosyası değildir. Figma kütüphanesi + kod paketi + dokümantasyon + kullanım kuralları + bunları güncelleyen bir süreç, hep birlikte sistemi oluşturur.
- **İlgili terimler:** Design token (5.2), Component library, Governance

### Atomic Design

- **Terim (İngilizce):** Atomic Design
- **Türkçesi:** Atomik tasarım
- **Tanım:** Arayüzü beş seviyeye bölen zihinsel model: atoms → molecules → organisms → templates → pages.
- **Ne işe yarar / neden var:** Bileşenleri sınıflandırmak ve iç içe geçmelerini düşünmek için ortak bir dil verir. Buton bir atom, arama kutusu (etiket + alan + buton) bir molekül, üst menü bir organizmadır.
- **Nerede karşına çıkar:** Tasarım sistemi klasör yapılarında ve bileşen adlandırmalarında.
- **Örnek kullanım:** "Kütüphaneyi atomic design'a göre klasörledik ama sınırlar tartışmalı; kart molekül mü organizma mı?"
- **Karıştırılanlar:** Sınırları nettir gibi görünür ama pratikte tartışmalıdır ve bu tartışma çoğu zaman zaman kaybıdır. Model bir düşünme aracıdır, bir kural değil.
- **İlgili terimler:** Component library, Design system

### Governance / Adoption

- **Terim (İngilizce):** Governance, adoption
- **Türkçesi:** Yönetişim, benimseme
- **Tanım:** Governance = sisteme kimin, nasıl katkı yapacağını ve neyin sisteme gireceğini belirleyen kurallar. Adoption = ekiplerin sistemi gerçekte ne kadar kullandığı.
- **Ne işe yarar / neden var:** Sistemlerin çoğu teknik sebeplerden değil, bu iki sebepten ölür. Kimse katkı yapamıyorsa sistem eskir; kimse kullanmıyorsa sistem gereksiz bir bakım yüküne dönüşür. Adoption ölçülebilir: bileşenlerin kaç yerde kullanıldığı, kaç yerde "detach" edilmiş kopyası olduğu.
- **Nerede karşına çıkar:** Tasarım sistemi ekiplerinin en çok konuştuğu konu.
- **Örnek kullanım:** "Adoption %40; ekiplerin yarısı bileşenleri kopyalayıp değiştiriyor. Sorun bileşenlerde mi, katkı sürecinde mi bakalım."
- **İlgili terimler:** Design system, Single source of truth

### Single source of truth

- **Terim (İngilizce):** Single source of truth — SSOT
- **Türkçesi:** Tek doğru kaynak
- **Tanım:** Bir bilginin tek bir yerde tanımlanıp diğer her yerin oraya referans vermesi ilkesi.
- **Ne işe yarar / neden var:** Aynı marka renginin Figma'da, CSS'te ve pazarlama sitesinde ayrı ayrı yazılması, üçünün zamanla ayrışmasına yol açar. Token yaklaşımının tüm gerekçesi budur.
- **Nerede karşına çıkar:** Token ve dokümantasyon tartışmalarında.
- **Örnek kullanım:** "Renk değeri üç yerde ayrı yazılı; SSOT kuralım, token'dan türetelim."
- **İlgili terimler:** Design token (5.2), Design system
