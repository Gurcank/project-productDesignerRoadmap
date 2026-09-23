---
title: "Görsel gereklilikler"
sectionNumber: "6.6"
category: "erisilebilirlik"
order: 6
cardCount: 4
sourceFile: "06-erisilebilirlik-a11y.md"
origin: "material"
flags: ["emin-degil"]
---
### Contrast (detay)

Temel oranlar Bölüm 5.4'te verildi. Burada ek noktalar:

- Kontrast, metnin **üzerinde durduğu gerçek renge** göre hesaplanır — görsel üzerindeki metin en riskli durumdur; görselin her yerinde oran değişir. Çözüm: metnin arkasına yeterli opaklıkta bir katman koymak.
- **Devre dışı (disabled) bileşenler** kontrast kuralının dışındadır. Ama bu, okunamayacak kadar soluk yapılabileceği anlamına gelmez; kullanıcının orada bir şey olduğunu anlaması gerekir.
- **Odak göstergesi** metin olmadığı için 3:1 eşiğine tabidir (SC 1.4.11).
- **Placeholder metni** genelde düşük kontrastlıdır ve bu yüzden de label yerine kullanılmamalıdır (4.9).
- Koyu tema için oranlar **yeniden hesaplanmalıdır** (5.2).

### Use of color

- **Terim (İngilizce):** Use of color (SC 1.4.1)
- **Türkçesi:** Rengin tek başına kullanılmaması
- **Tanım:** Bir bilgi yalnızca renkle aktarılmamalıdır.
- **Ne işe yarar / neden var:** Renk körlüğü olan kullanıcılar (özellikle kırmızı-yeşil ayrımında) rengi ayırt edemez. Kırmızı çerçeveli bir form alanı, tek başına "hata var" demez; ikon ve metin de gerekir. Aynı şekilde bir grafikte sadece renkle ayrılan çizgiler okunamaz — desen, etiket veya doğrudan işaretleme gerekir.
- **Nerede karşına çıkar:** Form doğrulama, durum rozetleri, grafikler, zorunlu alan işaretleri.
- **Örnek kullanım:** "Durum rozetlerinde sadece renk var; ikon ekleyelim ki renkten bağımsız da anlaşılsın."
- **İlgili terimler:** Semantic color (5.4), Error message (4.9)

### Target size

- **Terim (İngilizce):** Target size (SC 2.5.8)
- **Türkçesi:** Hedef boyutu
- **Tanım:** Dokunmatik veya işaretleyici hedeflerin en az **24×24 CSS pikseli** olması (veya çevresinde yeterli aralık bırakılması).
- **Ne işe yarar / neden var:** Küçük hedefler titremesi olan, motor kısıtı olan veya hareket hâlindeki kullanıcılar için ulaşılamazdır. Görünen ikon 16px olabilir; **tıklanabilir alan** dolgu (padding) ile büyütülür — bu, tasarımın görsel yoğunluğunu bozmadan kuralı karşılamanın yoludur.
- **Nerede karşına çıkar:** İkon butonlarında, tablo satırı eylemlerinde, yan yana dizilmiş küçük kontrollerde.
- **Örnek kullanım:** "İkon 16px kalsın ama tıklama alanı 40×40 olsun; görsel değişmez, hedef büyür."
- **Karıştırılanlar:** Mobil platform rehberlerinde daha büyük değerler önerilir (44pt/48dp gibi); WCAG'in 24px'i **asgari** eşiktir, hedef değil. `[EMİN DEĞİLİM]` Platform rehberlerindeki tam sayıları bu oturumda doğrulamadım.
- **İlgili terimler:** Fitts's Law (4.7), Mobile-first (5.8)

### Text resize / Reflow

- **Terim (İngilizce):** Resize text (SC 1.4.4), Reflow (SC 1.4.10)
- **Türkçesi:** Metin büyütme, yeniden akış
- **Tanım:** Kullanıcı metni büyüttüğünde veya sayfayı yakınlaştırdığında içeriğin kaybolmaması ve iki yönlü kaydırma gerektirmemesi.
- **Ne işe yarar / neden var:** Az gören kullanıcılar tarayıcı zoom'unu veya yazı boyutu ayarını kullanır. Sabit yükseklikli kutular ve `px` cinsinden sabitlenmiş metin, büyütüldüğünde içeriği kırpar veya üst üste bindirir.
- **Nerede karşına çıkar:** Kart ve buton tasarımlarında. Test etmesi kolay: tarayıcıda %200 zoom yap.
- **Örnek kullanım:** "%200 zoom'da kart metni taşıyor; sabit yükseklik yerine içeriğe göre esneyen kutu kullanalım."
- **İlgili terimler:** Responsive (5.8), Fluid typography (5.8)
