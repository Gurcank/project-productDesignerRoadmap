---
title: "Tarayıcı bir sayfayı nasıl çizer"
sectionNumber: "1.4"
category: "web-temelleri"
order: 4
cardCount: 8
sourceFile: "01-web-nasil-calisir.md"
origin: "material"
flags: []
---
Dosyalar tarayıcıya ulaştıktan sonra ekranda görüntü oluşana kadar bir dizi adım işler. Bu adımları bilmek iki işe yarar: sitenin neden yavaş açıldığını anlarsın, ve "sayfa zıplıyor" gibi tasarım şikâyetlerinin teknik karşılığını söyleyebilirsin.

**Ana kaynak:** https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

### DOM

- **Terim (İngilizce):** DOM — Document Object Model
- **Türkçesi:** Belge nesne modeli
- **Tanım:** Tarayıcının, HTML dosyasını bellekte bir ağaç yapısına çevirmiş hâli.
- **Ne işe yarar / neden var:** HTML dosyası ölü bir metindir; DOM onun canlı, değiştirilebilir hâlidir. JavaScript sayfayı ancak DOM üzerinden değiştirebilir — bir butona tıklayınca menünün açılması, DOM'un değiştirilmesidir.
- **Nerede karşına çıkar:** DevTools'un Elements sekmesinde gördüğün şey HTML dosyası değil, DOM'dur. "DOM'a bak" denildiğinde oraya bakılır. Performans konuşmalarında "DOM çok büyük" = sayfada çok fazla element var, tarayıcı zorlanıyor.
- **Örnek kullanım:** "Kaynak kodda o div yok; JavaScript sonradan DOM'a ekliyor."
- **Karıştırılanlar:** *DOM* ≠ *HTML*. HTML sunucudan gelen metin dosyası; DOM tarayıcının ondan ürettiği ve sonradan değişebilen yapı. İkisi çoğu zaman farklıdır — bu ayrım SEO'da kritiktir, çünkü bazı arama motoru botları JavaScript çalıştırmadan sadece HTML'i görebilir.
- **İlgili terimler:** HTML (8.1), Rendering, CSR/SSR (8.10)

### CSSOM

- **Terim (İngilizce):** CSSOM — CSS Object Model
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** DOM'un CSS karşılığı; tarayıcının tüm stil kurallarını bellekte tuttuğu yapı.
- **Ne işe yarar / neden var:** Tarayıcı, hangi elemente hangi stilin uygulanacağını hesaplamak için buna ihtiyaç duyar. CSSOM tamamlanmadan hiçbir şey çizilmez — bu yüzden CSS "render-blocking" sayılır.
- **Nerede karşına çıkar:** Performans analizlerinde. Seviye 2 terim; senin ağzından çıkması gerekmez ama duyduğunda anlaman gerekir.
- **Örnek kullanım:** "CSS dosyası çok büyük; CSSOM oluşana kadar ekran boş kalıyor."
- **İlgili terimler:** DOM, Render-blocking resource, Critical rendering path

### Critical rendering path

- **Terim (İngilizce):** Critical rendering path (CRP)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Tarayıcının dosyaları alıp ekrana ilk görüntüyü çizene kadar geçtiği adımların tamamı.
- **Ne işe yarar / neden var:** "Neden bu kadar geç açılıyor" sorusunun cevabı hemen her zaman bu zincirin bir halkasındadır. Adımlar sırayla: HTML parse → DOM, CSS parse → CSSOM, ikisi birleşir → render tree, sonra **layout** (her şey nereye ve ne büyüklükte), sonra **paint** (renkler, gölgeler, metin), sonra **composite** (katmanların birleştirilmesi).
- **Nerede karşına çıkar:** Lighthouse raporlarında ve performans optimizasyonu tartışmalarında.
- **Örnek kullanım:** "Font dosyası critical rendering path'i bloke ediyor; metin geç görünüyor."
- **İlgili terimler:** Layout, Paint, Render-blocking resource, Core Web Vitals (8.12)

### Layout (reflow)

- **Terim (İngilizce):** Layout — Firefox terminolojisinde reflow
- **Türkçesi:** Yerleşim hesabı
- **Tanım:** Tarayıcının her elementin ekranda tam olarak nerede ve ne büyüklükte olacağını hesapladığı adım.
- **Ne işe yarar / neden var:** Pahalı bir işlemdir. Bir elementin boyutu sonradan değişirse tarayıcı hesabı yeniden yapar ve etraftaki her şey kayar. Kullanıcının gördüğü "sayfa zıpladı, yanlış yere tıkladım" sorunu tam olarak budur.
- **Nerede karşına çıkar:** CLS (Cumulative Layout Shift) metriğinin arkasındaki mekanizma. Görsellere ve reklam alanlarına önceden yer ayırmanın sebebi budur — bu senin tasarım kararın.
- **Örnek kullanım:** "Görsellere `width`/`height` vermediğimiz için yüklenince layout kayıyor, CLS puanı düşük."
- **Karıştırılanlar:** *Layout* (tarayıcı adımı) ≠ *layout* (sayfa düzeni, tasarım anlamında). Aynı kelime, iki bağlam.
- **İlgili terimler:** Paint, CLS (8.12), Critical rendering path

### Paint / Composite

- **Terim (İngilizce):** Paint, Composite
- **Türkçesi:** Boyama, birleştirme
- **Tanım:** Paint = piksellerin renklendirilmesi; composite = ayrı katmanların üst üste getirilip son görüntünün oluşturulması.
- **Ne işe yarar / neden var:** Animasyon performansının anahtarı burada. Sadece composite aşamasını etkileyen özellikler (`transform`, `opacity`) akıcı animasyon verir; layout'u tetikleyen özellikler (`width`, `top`, `margin`) takılmaya yol açar.
- **Nerede karşına çıkar:** Animasyon incelemelerinde. Bir animasyonun neden takıldığını sorduğunda alacağın cevap genelde budur.
- **Örnek kullanım:** "Menü animasyonunu `left` yerine `transform` ile yapalım, composite'te kalsın."
- **İlgili terimler:** Layout, Motion (5.9)

### Render-blocking resource

- **Terim (İngilizce):** Render-blocking resource
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** İndirilip işlenmeden tarayıcının ekrana bir şey çizmesini engelleyen dosya.
- **Ne işe yarar / neden var:** Tarayıcı, CSS'i tam almadan çizmeye başlarsa kullanıcı bir anlığına stilsiz sayfa görür — bu yüzden bekler. Ama bu bekleme boş ekran süresi demektir. Optimizasyonun büyük kısmı bu listeyi kısaltmakla ilgilidir.
- **Nerede karşına çıkar:** Lighthouse raporunun standart uyarılarından biri: "Eliminate render-blocking resources".
- **Örnek kullanım:** "Üç ayrı font ailesi yüklüyoruz, hepsi render-blocking. Bire indirelim."
- **İlgili terimler:** Critical rendering path, LCP (8.12), Font loading (8.12)

### Viewport

- **Terim (İngilizce):** Viewport
- **Türkçesi:** Görüntü alanı
- **Tanım:** Kullanıcının o anda ekranda gördüğü alan.
- **Ne işe yarar / neden var:** Responsive tasarımın ölçü birimi. Breakpoint'ler viewport genişliğine göre tanımlanır. Ayrıca lazy loading kararları buna göre verilir: viewport dışındaki görseller sonradan yüklenir.
- **Nerede karşına çıkar:** Her responsive konuşmasında. Figma'da çizdiğin her ekran boyutu bir viewport varsayımıdır.
- **Örnek kullanım:** "Hero'nun tamamı viewport'a sığmıyor; mobilde CTA scroll gerektirmeden görünmeli."
- **Karıştırılanlar:** *Viewport* ≠ *ekran çözünürlüğü*. Tarayıcı penceresi ekrandan küçük olabilir; ayrıca cihaz piksel oranı yüzünden CSS pikseli ile fiziksel piksel aynı değildir.
- **İlgili terimler:** Above the fold, Breakpoint (5.8), Responsive (5.8)

### Above the fold

- **Terim (İngilizce):** Above the fold
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "katlama çizgisinin üstü" olarak açıklanır.
- **Tanım:** Kullanıcı hiç kaydırmadan gördüğü alan.
- **Ne işe yarar / neden var:** Gazete katlandığında üstte kalan kısımdan gelen terim. Hem tasarım hem performans kararlarını yönlendirir: en önemli mesaj ve birincil CTA buraya konur, buradaki görseller öncelikli yüklenir.
- **Nerede karşına çıkar:** Landing page tasarım tartışmalarında ve dönüşüm optimizasyonunda.
- **Örnek kullanım:** "Above the fold'da sadece başlık ve tek bir CTA olsun; ikinci butonu aşağı alalım."
- **Karıştırılanlar:** Sabit bir piksel değeri değildir — cihaza göre değişir. "800px above the fold" gibi bir cümle yanlıştır.
- **İlgili terimler:** Viewport, Hero (7.3), LCP (8.12)
