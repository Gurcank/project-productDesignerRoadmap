---
title: "UX \"yasaları\" ve bilişsel yük"
sectionNumber: "4.7"
category: "ux-ui-ilkeleri"
order: 7
cardCount: 6
sourceFile: "04-ui-ux-surec-ve-ilkeler.md"
origin: "material"
flags: ["emin-degil"]
---
Psikoloji araştırmalarından türetilmiş ve tasarım kararlarını gerekçelendirmekte kullanılan kurallar. **Hepsinin sınırları var** ve en sık yapılan hata, sınırlarını bilmeden uygulamak.

### Hick's Law

- **Terim (İngilizce):** Hick's Law (Hick–Hyman Law)
- **Türkçesi:** Hick yasası
- **Tanım:** Seçenek sayısı arttıkça karar verme süresi uzar.
- **Ne işe yarar / neden var:** Menü, form ve fiyatlandırma tasarımında seçenek azaltmanın gerekçesidir. Ama gerçek fayda, seçenek **silmekten** çok seçenekleri **gruplamaktan** gelir: 30 seçenek, 5 grupta 6'şar seçenekten daha yorucudur.
- **Nerede karşına çıkar:** Navigasyon ve fiyat planı tartışmalarında.
- **Örnek kullanım:** "Beş plan yerine üç plan sunalım; Hick's law açısından karar süresi kısalır."
- **Karıştırılanlar:** Yasa **tanıdık olmayan, eşit olasılıklı** seçenekler için formüle edilmiştir. Alışkanlık kazanılmış arayüzlerde ve seçenekler görünür haldeyken etkisi zayıflar.
- **İlgili terimler:** Cognitive load, Miller's Law, Progressive disclosure (4.6)

### Fitts's Law

- **Terim (İngilizce):** Fitts's Law
- **Türkçesi:** Fitts yasası
- **Tanım:** Bir hedefe ulaşma süresi, hedefin uzaklığı arttıkça uzar ve boyutu büyüdükçe kısalır.
- **Ne işe yarar / neden var:** Buton boyutlarının ve yerleşiminin gerekçesi. Birincil eylemi küçük yapmak veya ekranın uzak köşesine koymak ölçülebilir bir maliyettir. Mobilde başparmağın rahat ulaştığı bölge ("thumb zone") bu yasanın pratik uygulamasıdır. Erişilebilirlikte de dokunma hedefi minimum boyutlarının temeli budur (6.6).
- **Nerede karşına çıkar:** Mobil tasarımda, dokunma hedefi boyutu tartışmalarında.
- **Örnek kullanım:** "Silme ve kaydet butonları yan yana ve küçük; Fitts's law gereği yanlış tıklama riski yüksek, aralarına mesafe koyalım."
- **İlgili terimler:** Touch target (6.6), Mobile-first (5.8)

### Jakob's Law

- **Terim (İngilizce):** Jakob's Law
- **Türkçesi:** Jakob yasası
- **Tanım:** Kullanıcılar zamanlarının çoğunu başka sitelerde geçirir; bu yüzden senin sitenin de onlar gibi çalışmasını beklerler.
- **Ne işe yarar / neden var:** Yaygın kalıplardan sapmanın maliyetini hatırlatır. Logonun sol üstte olması, sepet ikonunun sağ üstte olması, alt çizgili metnin link olması — bunlar zevk değil, öğrenilmiş beklentidir. Sapmak mümkündür ama **bedeli ödenebilir olmalıdır.**
- **Nerede karşına çıkar:** "Farklı bir şey yapalım" önerilerine karşı en güçlü argüman.
- **Örnek kullanım:** "Menüyü sağ tarafa almak özgün olur ama Jakob's law diyor ki kullanıcı solda arayacak; kazancı bu maliyeti karşılamıyor."
- **Karıştırılanlar:** Bu yasa "hiç yenilik yapma" demez. Yeniliğin, öğrenme maliyetini karşılayacak kadar değer üretmesi gerektiğini söyler.
- **İlgili terimler:** Mental model (4.3), Consistency (4.6)

### Miller's Law

- **Terim (İngilizce):** Miller's Law ("magical number seven, plus or minus two")
- **Türkçesi:** Miller yasası
- **Tanım:** İnsanın kısa süreli belleğinde aynı anda tutabildiği bilgi parçası sayısı sınırlıdır.
- **Ne işe yarar / neden var:** Asıl değerli kısmı sayı değil, **chunking** (parçalama) fikridir: bilgi anlamlı gruplara bölündüğünde aynı sınırdan çok daha fazlası geçer. Telefon numarasının 5XX XXX XX XX diye yazılmasının sebebi budur.
- **Nerede karşına çıkar:** Menü, liste ve form uzunluğu tartışmalarında — ve genelde **yanlış** kullanılır.
- **Örnek kullanım:** "Numarayı gruplayarak gösterelim; chunking okunabilirliği artırır."
- **Karıştırılanlar:** **Bu, dosyadaki en sık yanlış uygulanan kuraldır.** "Menüde 7'den fazla öğe olmasın" cümlesinin araştırmada karşılığı yoktur. Miller'ın 1956 tarihli çalışması **ekranda görünmeyen**, akılda tutulması gereken bilgiyle ilgilidir. Menü öğeleri ekranda durur; bu bir **tanıma** görevidir, hatırlama görevi değil. Miller'ın kendisi de sayıyı bir tesadüf olarak nitelendirmiştir ve sonraki araştırmalar (Cowan, 2001) gerçek kapasitenin daha düşük ve malzemeye göre değişken olduğunu göstermiştir. Menü uzunluğu için doğru referans Miller değil, Hick's Law ve bilişsel yüktür.
- **İlgili terimler:** Cognitive load, Hick's Law, Recognition rather than recall (4.6)

### Cognitive load

- **Terim (İngilizce):** Cognitive load
- **Türkçesi:** Bilişsel yük
- **Tanım:** Bir görevi yapmak için harcanan zihinsel çaba.
- **Ne işe yarar / neden var:** Tasarımın asıl düşmanı budur; "yasaların" çoğu bunun türevidir. Yük üç yerden gelir: görevin kendi zorluğu, arayüzün getirdiği gereksiz zorluk ve öğrenme çabası. Tasarımcının işi ikinciyi azaltmaktır — kullanıcı işine odaklansın, arayüzü çözmeye değil.
- **Nerede karşına çıkar:** Karmaşık panel ve form tasarımlarında.
- **Örnek kullanım:** "Aynı ekranda üç farklı görev var; bilişsel yük yüksek, ayıralım."
- **İlgili terimler:** Miller's Law, Hick's Law, Progressive disclosure (4.6)

### Response time thresholds

- **Terim (İngilizce):** Response time thresholds (Doherty threshold olarak da anılır)
- **Türkçesi:** Yanıt süresi eşikleri
- **Tanım:** İnsanın bir sistemin yanıtını nasıl algıladığını belirleyen kabaca üç eşik: yaklaşık **0,1 sn** anında hissedilir; **1 sn** civarında akış korunur ama gecikme fark edilir; **10 sn** civarında dikkat kopar.
- **Ne işe yarar / neden var:** Hangi durumda hangi geri bildirimin gerektiğini belirler: 1 saniyenin altında hiçbir şey gerekmez; birkaç saniyede spinner veya skeleton; uzun sürede ilerleme göstergesi ve tahmini süre.
- **Nerede karşına çıkar:** Yükleme durumu tasarımında ve performans tartışmalarında.
- **Örnek kullanım:** "İşlem ortalama 4 saniye sürüyor; skeleton koyalım, spinner tek başına yetmez."
- **Karıştırılanlar:** `[EMİN DEĞİLİM]` Bu eşikler farklı kaynaklarda biraz farklı sayılarla anılıyor ve kökeni birden fazla çalışmaya dayandırılıyor. Sayıları kesin değer değil, büyüklük mertebesi olarak kullan.
- **İlgili terimler:** Loading state (7.9), Skeleton (7.9), Core Web Vitals (8.12)
