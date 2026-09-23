---
title: "Responsive ve mobile-first"
sectionNumber: "5.8"
category: "tasarim-sistemi"
order: 8
cardCount: 5
sourceFile: "05-tasarim-sistemi-ve-gorsel-dil.md"
origin: "material"
flags: ["degisken"]
---
Tasarımın farklı ekran boyutlarında nasıl davranacağı. Bu artık bir "ek özellik" değil, varsayılan gerekliliktir.

### Responsive design

- **Terim (İngilizce):** Responsive design
- **Türkçesi:** Duyarlı tasarım
- **Tanım:** Aynı tasarımın, ekran genişliğine göre kendini yeniden düzenlemesi.
- **Ne işe yarar / neden var:** Tek kod tabanıyla tüm cihazlarda çalışır. Sadece küçültmek değildir: sütunlar alt alta geçer, menü hamburger olur, tablolar farklı gösterilir, bazı öğeler gizlenir veya yeniden düzenlenir.
- **Nerede karşına çıkar:** Her web projesinde. Tasarım teslimi en az iki-üç boyutta yapılmalıdır.
- **Örnek kullanım:** "Masaüstü ve mobil ekranları hazırladım; tablet için 2 sütuna düşme kuralını da yazdım."
- **Karıştırılanlar:** *Responsive* ≠ *adaptive*. Responsive akışkandır ve her genişlikte çalışır; adaptive belirli boyutlar için ayrı düzenler sunar ve aradaki genişliklerde boşluk bırakabilir.
- **İlgili terimler:** Breakpoint, Mobile-first, Viewport (1.4)

### Mobile-first

- **Terim (İngilizce):** Mobile-first
- **Türkçesi:** Önce mobil
- **Tanım:** Tasarıma en küçük ekrandan başlayıp yukarı doğru genişletme yaklaşımı.
- **Ne işe yarar / neden var:** Kısıt, önceliklendirmeyi zorlar. Küçük ekrana ancak gerçekten gerekli olan sığar; büyük ekrandan başlanınca her şey sığar ve neyin önemli olduğu kararı hiç verilmez. Ayrıca çoğu ürün için trafiğin büyük kısmı mobildir — masaüstünden başlamak, çoğunluk için yapılan tasarımı sonraya bırakmak demektir.
- **Nerede karşına çıkar:** Tasarım süreci ve CSS yazım sırasında (`min-width` sorguları).
- **Örnek kullanım:** "Mobile-first çalışalım; mobilde neyin kesileceğine karar verirsek masaüstü zaten kolay."
- **İlgili terimler:** Responsive, Breakpoint, Thumb zone (4.7)

### Breakpoint

- **Terim (İngilizce):** Breakpoint
- **Türkçesi:** Kırılma noktası
- **Tanım:** Yerleşimin değiştiği ekran genişliği eşiği.
- **Ne işe yarar / neden var:** Düzen kararlarını belirli genişliklere bağlar. **İyi bir breakpoint, cihaz modeline göre değil içeriğe göre seçilir:** yerleşim nerede bozuluyorsa breakpoint oradadır. Cihaz boyutları sürekli değiştiği için "iPhone genişliği" gibi sabitler hızla eskir.
- **Nerede karşına çıkar:** Tasarım sistemi tanımlarında ve CSS'te.
- **Örnek kullanım:** "Kart üçlüsü 900px altında sıkışıyor; breakpoint'i oraya koyup ikiliye düşelim."
- **İlgili terimler:** Responsive, Container query, Viewport (1.4)

### Container query

- **Terim (İngilizce):** Container query
- **Türkçesi:** Kapsayıcı sorgusu
- **Tanım:** Bir bileşenin, ekran genişliğine değil **içinde bulunduğu kapsayıcının** genişliğine göre davranmasını sağlayan CSS özelliği.
- **Ne işe yarar / neden var:** Bileşen tabanlı tasarımın eksik parçasıydı. Aynı kart, geniş bir ana bölümde yatay, dar bir kenar çubuğunda dikey görünebilmelidir — ekran genişliği bu ikisi için de aynıdır, bu yüzden breakpoint çözemez.
- **Nerede karşına çıkar:** Bileşen kütüphanelerinde giderek yaygınlaşıyor. `[DEĞİŞKEN BİLGİ]` Modern tarayıcılarda destekleniyor; kullanmadan önce güncel destek durumunu kontrol et.
- **Örnek kullanım:** "Kartı container query ile yazalım; hem ana alanda hem sidebar'da doğru davransın."
- **İlgili terimler:** Breakpoint, Component (8.7)

### Fluid typography

- **Terim (İngilizce):** Fluid typography
- **Türkçesi:** Akışkan tipografi
- **Tanım:** Yazı boyutunun, breakpoint'te bir anda değil, ekran genişliğiyle birlikte kademesiz olarak değişmesi.
- **Ne işe yarar / neden var:** Her breakpoint için ayrı boyut tanımlamayı azaltır ve ara genişliklerde daha doğal sonuç verir. CSS'te genelde `clamp()` ile yapılır: bir minimum, bir tercih edilen ve bir maksimum değer verilir.
- **Nerede karşına çıkar:** Modern tipografi sistemlerinde, özellikle büyük başlıklarda.
- **Örnek kullanım:** "Hero başlığını fluid yapalım: mobilde 32, masaüstünde 64, arada kademesiz."
- **Karıştırılanlar:** Sınırsız akışkanlık okunabilirliği bozabilir; minimum ve maksimum değer mutlaka verilmelidir.
- **İlgili terimler:** Type scale (5.3), Breakpoint
