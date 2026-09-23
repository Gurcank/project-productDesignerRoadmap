# Bölüm 7 — Site anatomisi (Bölüm 7A: 7.1 – 7.7)

Bu bölüm senin en somut kazancın. Hedef şu: bir arayüz parçasını **göstererek değil, adını söyleyerek** isteyebilmek.

"Şuraya, ürün görselinin altına, ince ince akan bir şeritte müşteri logoları koyalım" cümlesi ile "hero'nun altına logo cloud ekleyelim, marquee olsun" cümlesi aynı şeyi ister. İkincisi üç saniye sürer, yanlış anlaşılmaz ve yapay zekâya verdiğinde tek seferde doğru çıktı gelir.

**Bölüm iki dosyaya bölündü:**
- **7A (bu dosya)** — sayfa iskeleti, navigasyon, hero, ikna bölümleri, içerik bölümleri, fiyatlandırma, dönüşüm
- **7B** — geri bildirim katmanı, durum ekranları, veri gösterimi, form parçaları, uygulama içi ekranlar, küçük parçalar, kendini test et

**Bir uyarı:** Bu isimlerin çoğu resmî standart değil, sektör alışkanlığıdır. Aynı parçaya iki ekipte iki farklı isim verilebilir. Amaç ezber değil, **ortak bir dil kurabilmek** — ve karşındaki farklı bir isim kullandığında neyi kastettiğini anlayabilmek.

---

## 7.1 Sayfa iskeleti

Her sayfanın ana bölgeleri. Bunlar sadece görsel bölümler değil, aynı zamanda HTML landmark'larıdır (6.3) — yani ekran okuyucu kullanıcıları bunlar arasında atlayarak gezer.

### Header

- **Terim (İngilizce):** Header (site header, masthead)
- **Türkçesi:** Üst bölüm / başlık alanı
- **Tanım:** Sayfanın en üstündeki, genelde logo ve ana navigasyonu barındıran şerit.
- **Ne işe yarar / neden var:** Kullanıcının nerede olduğunu ve nereye gidebileceğini söyler. Her sayfada tutarlı olduğu için bir sabit noktadır.
- **Nerede karşına çıkar:** Her sitede. Kodda `<header>` elemanı ve `banner` landmark'ına karşılık gelir.
- **Örnek kullanım:** "Header'ı sadeleştirelim; şu an logo, 7 menü öğesi, arama, dil seçici ve iki buton var."
- **Karıştırılanlar:** *Site header* ≠ *HTTP header* (1.3). Aynı kelime, tamamen farklı şey. Ayrıca *header* ≠ *hero* (7.3): header üst şerit, hero onun altındaki büyük tanıtım alanı.
- **İlgili terimler:** Nav, Sticky header (7.2), Hero (7.3)

### Nav

- **Terim (İngilizce):** Nav (navigation)
- **Türkçesi:** Gezinme / navigasyon
- **Tanım:** Site içindeki bağlantı grubu.
- **Ne işe yarar / neden var:** Sitenin bilgi mimarisinin (4.3) görünen yüzü. Bir sitede birden fazla nav olabilir ve bunların adları vardır: **global nav** (her sayfada aynı, ana menü), **local nav** (bir bölüm içindeki alt menü), **utility nav** (giriş, dil, arama gibi yardımcı bağlantılar), **footer nav** (alttaki geniş bağlantı listesi).
- **Nerede karşına çıkar:** Her sitede. Kodda `<nav>` elemanı.
- **Örnek kullanım:** "Global nav'da 5 öğe kalsın, geri kalanı footer nav'a inelim."
- **İlgili terimler:** IA (4.3), Mega menu (7.2), Sidebar

### Main

- **Terim (İngilizce):** Main (main content)
- **Türkçesi:** Ana içerik
- **Tanım:** Sayfanın o sayfaya özgü, asıl içeriğini barındıran bölge.
- **Ne işe yarar / neden var:** Header ve footer her sayfada tekrar eder; `main` tekrar etmeyen kısımdır. Skip link (6.5) buraya atlar. Sayfada tek bir `main` olmalıdır.
- **Nerede karşına çıkar:** Her sayfa iskeletinde.
- **Örnek kullanım:** "Skip link `#main`'e gitsin; şu an ilk kartın üstüne düşüyor."
- **İlgili terimler:** Landmark (6.3), Skip link (6.5)

### Aside / Sidebar

- **Terim (İngilizce):** Aside, sidebar
- **Türkçesi:** Yan alan, kenar çubuğu
- **Tanım:** Ana içeriğin yanında duran, destekleyici içerik veya gezinme alanı.
- **Ne işe yarar / neden var:** İki farklı işi görebilir: içerik sitelerinde ilgili yazılar, reklam, içindekiler; uygulamalarda ise ana navigasyon. İkincisine genelde **app sidebar** veya **navigation rail** denir ve daraltılabilir (collapsible) olur.
- **Nerede karşına çıkar:** Blog sayfalarında ve panel arayüzlerinde.
- **Örnek kullanım:** "Sidebar'ı daraltılabilir yapalım; dar ekranda sadece ikonlar kalsın."
- **Karıştırılanlar:** Mobilde sidebar genelde bir **drawer**'a (7B) dönüşür; ikisi aynı içeriğin farklı sunumudur.
- **İlgili terimler:** Nav, Drawer (7B), Dashboard (7B)

### Footer

- **Terim (İngilizce):** Footer
- **Türkçesi:** Alt bölüm
- **Tanım:** Sayfanın en altındaki, ikincil bağlantıları ve yasal bilgileri barındıran alan.
- **Ne işe yarar / neden var:** İki işi görür: kullanıcı aradığını yukarıda bulamazsa son çare olarak buraya bakar; ayrıca yasal zorunlulukların (gizlilik politikası, kullanım şartları, iletişim bilgisi, şirket unvanı) durduğu yerdir (13.11).
- **Nerede karşına çıkar:** Her sitede.
- **Örnek kullanım:** "Footer'a KVKK aydınlatma metni ve erişilebilirlik beyanı bağlantılarını da ekleyelim."
- **İlgili terimler:** Yasal sayfalar (13.11), Nav

### Layout

- **Terim (İngilizce):** Layout
- **Türkçesi:** Yerleşim / şablon
- **Tanım:** Birden fazla sayfanın paylaştığı ortak iskelet.
- **Ne işe yarar / neden var:** Header ve footer'ı her sayfada tekrar tanımlamak yerine bir kez tanımlayıp içeriği içine yerleştirmeyi sağlar. Kod tarafında da böyle çalışır (8.9). Bir sitede genelde birkaç layout olur: pazarlama layout'u, uygulama layout'u, giriş ekranı layout'u.
- **Nerede karşına çıkar:** Proje yapısı ve tasarım dosyası organizasyonunda.
- **Örnek kullanım:** "Giriş ekranları ayrı layout kullansın; header ve sidebar orada olmasın."
- **İlgili terimler:** App shell, Routing (8.9)

### App shell

- **Terim (İngilizce):** App shell
- **Türkçesi:** Uygulama kabuğu
- **Tanım:** Uygulamanın içerik değişse de sabit kalan çerçevesi: üst bar, yan menü, ana içerik alanı.
- **Ne işe yarar / neden var:** Sayfa geçişlerinde kabuk yeniden yüklenmez, sadece içerik değişir. Bu, uygulama hissini veren şeydir (SPA, 1.7) ve algılanan hızı artırır.
- **Nerede karşına çıkar:** Panel ve web uygulamalarında.
- **Örnek kullanım:** "App shell sabit kalsın, sadece içerik alanı değişsin; sidebar her geçişte yeniden çizilmesin."
- **İlgili terimler:** Layout, SPA (1.7), Skeleton (7B)

### Section

- **Terim (İngilizce):** Section (content block, band, strip)
- **Türkçesi:** Bölüm
- **Tanım:** Sayfanın kendi başlığı ve amacı olan, yatay bir dilim hâlindeki parçası.
- **Ne işe yarar / neden var:** Uzun sayfalar bölümlerden oluşur ve tasarım konuşması bölüm bazında yapılır. Bir landing page'in yapısı genelde şöyle adlandırılır: hero → logo cloud → feature grid → testimonial → pricing → FAQ → CTA section → footer.
- **Nerede karşına çıkar:** Sayfa kurgusunda ve tasarım tesliminde.
- **Örnek kullanım:** "Üçüncü section'ı çıkaralım; feature grid ile bento grid aynı şeyi iki kez anlatıyor."
- **İlgili terimler:** Feature grid (7.5), Hero (7.3)

---

## 7.2 Navigasyon parçaları

### Nav link + Active state

- **Terim (İngilizce):** Nav link, active state, current page indicator
- **Türkçesi:** Menü bağlantısı, aktif durum
- **Tanım:** Menüdeki tek bir bağlantı ve o an bulunulan sayfayı işaretleyen görsel durum.
- **Ne işe yarar / neden var:** Kullanıcının "neredeyim?" sorusunu cevaplar — Nielsen'in 1 numaralı ilkesinin (4.6) navigasyondaki karşılığı. Aktif durum yoksa kullanıcı yönünü kaybeder.
- **Nerede karşına çıkar:** Her menüde. Tasarım tesliminde default, hover, focus ve active durumlarının hepsi verilmelidir.
- **Örnek kullanım:** "Aktif menü öğesini sadece renkle değil, altında bir çizgiyle de işaretleyelim." (Bkz. 6.6 — sadece renge dayanmama.)
- **İlgili terimler:** Nav (7.1), Use of color (6.6), Breadcrumb

### Hamburger menu

- **Terim (İngilizce):** Hamburger menu
- **Türkçesi:** Hamburger menü
- **Tanım:** Üç yatay çizgi ikonuyla temsil edilen, tıklanınca açılan gizli menü.
- **Ne işe yarar / neden var:** Dar ekranda çok sayıda bağlantıyı gizler. Bedeli keşfedilebilirlik (4.3): gizlenen menü daha az kullanılır. Bu yüzden mobilde en kritik 1-2 eylem (genelde birincil CTA) hamburger'in **dışında** bırakılır.
- **Nerede karşına çıkar:** Neredeyse her mobil tasarımda. Masaüstünde kullanmak tartışmalıdır — yer varken gizlemek gereksiz maliyet üretir.
- **Örnek kullanım:** "Mobilde 'Ücretsiz dene' butonu hamburger'in dışında kalsın, header'da görünür olsun."
- **Karıştırılanlar:** Bazı ekipler ikonun yanına "Menü" yazar; bu, keşfedilebilirliği ölçülebilir biçimde artırdığı için sık önerilen bir yaklaşımdır.
- **İlgili terimler:** Drawer (7B), Discoverability (4.3), Tab bar

### Mega menu

- **Terim (İngilizce):** Mega menu
- **Türkçesi:** Mega menü
- **Tanım:** Üzerine gelindiğinde veya tıklandığında geniş bir panel olarak açılan, çok sütunlu ve gruplanmış menü.
- **Ne işe yarar / neden var:** Çok sayıda sayfası olan sitelerde (e-ticaret, kurumsal) hiyerarşiyi tek seferde görünür kılar; kullanıcı iki-üç seviye tıklamadan hedefe ulaşır.
- **Nerede karşına çıkar:** Büyük e-ticaret ve kurumsal sitelerde.
- **Örnek kullanım:** "Ürünler menüsünü mega menu yapalım; kategorileri sütunlara ayırıp öne çıkan ürünü sağda gösterelim."
- **Karıştırılanlar:** Erişilebilirlik açısından risklidir: yalnızca hover ile açılan mega menüler klavye ve dokunmatik kullanıcılar için sorun çıkarır. Tıklamayla da açılabilmeli ve klavyeyle gezilebilmelidir (6.5).
- **İlgili terimler:** Nav (7.1), Dropdown (7B), IA (4.3)

### Breadcrumb

- **Terim (İngilizce):** Breadcrumb
- **Türkçesi:** İçerik yolu / kırıntı navigasyonu
- **Tanım:** Kullanıcının hiyerarşide nerede olduğunu gösteren, üst seviyelere bağlantı veren yatay iz: `Ana sayfa › Kadın › Ayakkabı › Bot`.
- **Ne işe yarar / neden var:** Derin hiyerarşilerde yön duygusu verir ve tek tıkla üst seviyeye çıkmayı sağlar. Özellikle arama motorundan doğrudan iç sayfaya gelen kullanıcı için değerlidir — o kullanıcı ana sayfayı hiç görmemiştir.
- **Nerede karşına çıkar:** E-ticaret, dokümantasyon ve çok seviyeli sitelerde. SEO tarafında structured data ile arama sonuçlarında da gösterilebilir (8.13).
- **Örnek kullanım:** "Ürün sayfasına breadcrumb ekleyelim; kullanıcı kategoriye dönebilsin."
- **Karıştırılanlar:** Breadcrumb **hiyerarşiyi** gösterir, kullanıcının geçmişini değil. Tarayıcının geri tuşunun yerine geçmez.
- **İlgili terimler:** IA (4.3), Sitemap (4.3)

### Tab bar

- **Terim (İngilizce):** Tab bar (bottom navigation)
- **Türkçesi:** Alt sekme çubuğu
- **Tanım:** Mobilde ekranın altında duran, 3-5 ana bölüme geçiş sağlayan sabit çubuk.
- **Ne işe yarar / neden var:** Başparmağın rahat ulaştığı bölgededir (4.7, Fitts's law) ve hamburger'in aksine bölümleri **görünür** tutar. Uygulama benzeri ürünlerde hamburger'e tercih edilir.
- **Nerede karşına çıkar:** Mobil uygulamalarda ve mobil web uygulamalarında.
- **Örnek kullanım:** "Hamburger yerine tab bar kullanalım; dört ana bölümümüz var, hepsi görünür kalsın."
- **Karıştırılanlar:** *Tab bar* (bölümler arası geçiş, sayfa değişir) ≠ *tabs* (7.5) (aynı sayfa içinde içerik değişir).
- **İlgili terimler:** Hamburger menu, Tabs (7.5), Thumb zone (4.7)

### Sticky header / Scroll-aware header

- **Terim (İngilizce):** Sticky header, fixed header, scroll-aware header
- **Türkçesi:** Yapışkan üst bar
- **Tanım:** Sayfa aşağı kaydırılırken üstte kalan header. **Scroll-aware** sürümü aşağı kaydırırken gizlenir, yukarı kaydırırken geri gelir.
- **Ne işe yarar / neden var:** Navigasyona her an erişim sağlar. Bedeli dikey alandır — özellikle mobilde ekranın önemli bir kısmını yer. Scroll-aware davranış bu takası dengeler.
- **Nerede karşına çıkar:** Uzun sayfalarda ve içerik sitelerinde.
- **Örnek kullanım:** "Header sticky olsun ama kaydırınca inceltelim; 80px'ten 56px'e insin."
- **Karıştırılanlar:** WCAG 2.2'nin **Focus Not Obscured** ölçütü (6.2) tam olarak bunu ilgilendirir: sticky header, klavyeyle odaklanılan bir öğeyi kapatmamalıdır.
- **İlgili terimler:** Header (7.1), Focus (6.5), Sticky CTA (7.7)

### Command palette

- **Terim (İngilizce):** Command palette
- **Türkçesi:** Komut paleti
- **Tanım:** Klavye kısayoluyla (genelde Cmd/Ctrl+K) açılan, yazarak arama ve komut çalıştırma penceresi.
- **Ne işe yarar / neden var:** Uzman kullanıcıya, menülerde gezmeden doğrudan hedefe gitme yolu verir. Geniş bir uygulamada navigasyonu ölçeklemenin en verimli yollarından biridir.
- **Nerede karşına çıkar:** Geliştirici araçlarında ve modern SaaS ürünlerinde (Linear, Notion, Raycast tarzı).
- **Örnek kullanım:** "Cmd+K ile command palette açalım; sayfa geçişi ve hızlı eylemler oradan yapılsın."
- **Karıştırılanlar:** Keşfedilebilirliği düşüktür; varlığını duyurmak gerekir (arama kutusunda kısayolu göstermek gibi). Ana navigasyonun yerine geçmez, onu tamamlar.
- **İlgili terimler:** Search (7B), Keyboard accessibility (6.5), Discoverability (4.3)

---

## 7.3 Hero ve üst bölge

Sayfanın ilk ekranı. Kullanıcının kalıp kalmayacağına burada karar verdiği yer.

### Hero

- **Terim (İngilizce):** Hero (hero section, above-the-fold section)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Sayfanın en üstündeki, ana mesajı ve birincil eylemi barındıran büyük bölüm.
- **Ne işe yarar / neden var:** Üç soruyu cevaplamak zorundadır: **Bu ne? Kimin için? Şimdi ne yapmalıyım?** Üçünü cevaplayamayan hero, ne kadar güzel olursa olsun işini yapmıyordur.
- **Nerede karşına çıkar:** Her landing page ve ana sayfada. Tasarım tartışmalarının en yoğunlaştığı bölüm.
- **Örnek kullanım:** "Hero'da ne yaptığımız anlaşılmıyor; başlık soyut, ürün görseli de yok."
- **Karıştırılanlar:** *Hero* ≠ *header* (7.1). Header üstteki ince şerit, hero onun altındaki büyük alan.
- **İlgili terimler:** Headline, CTA, Above the fold (1.4)

### Eyebrow

- **Terim (İngilizce):** Eyebrow (kicker, overline)
- **Türkçesi:** Üst başlık
- **Tanım:** Ana başlığın hemen üstündeki küçük, genelde büyük harfli kısa metin.
- **Ne işe yarar / neden var:** Bağlam verir ("Yeni", "Vaka çalışması", "Ürün güncellemesi") ve başlığa görsel bir çıpa sağlar. Kısa olduğu için hiyerarşiyi bozmaz.
- **Nerede karşına çıkar:** Hero'larda, bölüm başlıklarında, blog yazılarında.
- **Örnek kullanım:** "Başlığın üstüne eyebrow ekleyelim: 'ÜCRETSİZ ARAÇ'."
- **Karıştırılanlar:** Genelde tümü büyük harf ve harf aralığı açılmış (5.3) olarak yazılır; bu, küçük punto ile okunabilirliği korur.
- **İlgili terimler:** Headline, Letter-spacing (5.3)

### Headline / Subheadline

- **Terim (İngilizce):** Headline (H1), subheadline (subhead, deck, dek)
- **Türkçesi:** Ana başlık, alt başlık
- **Tanım:** Sayfanın en büyük başlığı ve onu açan bir-iki cümlelik metin.
- **Ne işe yarar / neden var:** Headline **ne olduğunu** söyler, subheadline **nasıl ve kime** olduğunu açar. İkisini birleştirmeye çalışmak, iki cümleyi de zayıflatır: başlık kısa ve net, alt başlık açıklayıcı olmalıdır.
- **Nerede karşına çıkar:** Hero'da ve her bölüm başında.
- **Örnek kullanım:** "Headline'ı kısaltalım, detayı subheadline'a alalım; şu an başlık üç satır."
- **Karıştırılanlar:** Yapıda `h1` olması gerekir (6.3) ama görsel boyut ayrı bir karardır.
- **İlgili terimler:** Eyebrow, UX writing (4.9), Heading hierarchy (6.3)

### CTA

- **Terim (İngilizce):** CTA — Call To Action; primary CTA, secondary CTA
- **Türkçesi:** Eylem çağrısı
- **Tanım:** Kullanıcıdan yapmasını istediğin eylemi tetikleyen buton veya bağlantı.
- **Ne işe yarar / neden var:** Sayfanın amacının somutlaştığı yer. Kural: **bir ekranda tek bir birincil CTA olur.** İkinci bir eylem gerekiyorsa ikincil stilde (outline, ghost, link) verilir. İki dolu buton yan yana konduğunda kullanıcı hangisinin asıl olduğunu anlamaz (4.8, görsel hiyerarşi).
- **Nerede karşına çıkar:** Hero'da, bölüm sonlarında, fiyatlandırmada, formlarda.
- **Örnek kullanım:** "İki dolu buton var; 'Demo izle'yi ikincil stile alalım, birincil sadece 'Ücretsiz başla' olsun."
- **Karıştırılanlar:** CTA metni eylemi tarif etmelidir. "Gönder" yerine "Rezervasyonu tamamla", "Tıkla" yerine "Fiyatları gör" — kullanıcı ne olacağını bilmelidir (4.9).
- **İlgili terimler:** Visual hierarchy (4.8), UX writing (4.9), Sticky CTA (7.7)

### Hero visual / Product shot / Mockup frame

- **Terim (İngilizce):** Hero visual, product shot, device frame / mockup frame, screenshot
- **Türkçesi:** Hero görseli, ürün görseli, cihaz çerçevesi
- **Tanım:** Hero'daki ana görsel. Ürün bir yazılımsa genelde arayüz ekran görüntüsü, bazen bir laptop veya telefon çerçevesi içinde gösterilir.
- **Ne işe yarar / neden var:** Ürünün ne olduğunu metinden hızlı anlatır. Somut bir ürün görseli, soyut illüstrasyondan genellikle daha ikna edicidir — çünkü "gerçekten var" mesajı verir.
- **Nerede karşına çıkar:** SaaS ve ürün landing page'lerinde.
- **Örnek kullanım:** "Soyut illüstrasyon yerine gerçek arayüz ekran görüntüsü koyalım, hafif eğimli bir cihaz çerçevesiyle."
- **Karıştırılanlar:** *Mockup* burada "cihaz çerçevesi içine yerleştirilmiş görsel" anlamındadır; tasarım sürecindeki *mockup* (4.5) farklı bir şeydir.
- **İlgili terimler:** Hero, Aspect ratio (5.7), LCP (8.12) — hero görseli genelde LCP öğesidir, optimize edilmelidir

### Background treatment

- **Terim (İngilizce):** Background treatment — gradient, mesh gradient, noise/grain, pattern, blob, glow, spotlight
- **Türkçesi:** Arka plan uygulaması
- **Tanım:** Bölümün arkasına uygulanan görsel efektler.
- **Ne işe yarar / neden var:** Derinlik ve karakter üretir, bölümleri birbirinden ayırır. Ama her birinin bir **gerekçesi** olmalıdır: gradient dikkati bir yöne çekmek veya bölüm sınırı kurmak için kullanılabilir; sırf "boş durmasın" diye kullanıldığında çıktı jenerik görünür.
- **Nerede karşına çıkar:** Pazarlama sayfalarında yoğun olarak.
- **Örnek kullanım:** "Hero'ya çok hafif bir mesh gradient ve ince grain koyalım; gradient CTA'nın arkasında en parlak olsun ki göz oraya gitsin."
- **Karıştırılanlar:** Arka planın üstündeki metnin kontrastı, arka planın **her noktasında** ölçülmelidir (6.6). Gradientin açık kısmında geçen bir metin, koyu kısmında kalabilir.
- **İlgili terimler:** Contrast (6.6), Visual hierarchy (4.8)

### Announcement bar

- **Terim (İngilizce):** Announcement bar (top banner, promo bar)
- **Türkçesi:** Duyuru çubuğu
- **Tanım:** Header'ın üstünde duran ince, tek satırlık duyuru şeridi.
- **Ne işe yarar / neden var:** Kampanya, yeni özellik veya kritik bilgi duyurmak için. Kapatılabilir olmalıdır ve kapatıldığında hatırlanmalıdır — her sayfada yeniden çıkması sinir bozar.
- **Nerede karşına çıkar:** E-ticaret ve SaaS pazarlama sitelerinde.
- **Örnek kullanım:** "Announcement bar ekleyelim ama kapatılabilir olsun ve kapatınca 30 gün geri gelmesin."
- **Karıştırılanlar:** *Announcement bar* (pazarlama, kapatılabilir) ≠ *alert banner* (7B) (sistem durumu, kritik bilgi).
- **İlgili terimler:** Alert banner (7B), Cookie banner (7.7)

---

## 7.4 İkna bölümleri

Kullanıcının "bu güvenilir mi?" sorusunu cevaplayan bölümler. Ürün sayfalarında dönüşümü en çok etkileyen kısımlar bunlardır.

### Social proof

- **Terim (İngilizce):** Social proof
- **Türkçesi:** Sosyal kanıt
- **Tanım:** Başkalarının ürünü kullandığını veya onayladığını gösteren her şeyin genel adı.
- **Ne işe yarar / neden var:** İnsanlar belirsizlikte başkalarının davranışına bakar. Alt türleri: müşteri logoları, yorumlar, puanlar, kullanıcı sayısı, basında çıkanlar, vaka çalışmaları, sertifikalar.
- **Nerede karşına çıkar:** Landing page'lerde genelde hero'nun hemen altında.
- **Örnek kullanım:** "Hero'nun altına social proof koyalım; şu an ilk kanıt sayfanın çok aşağısında."
- **Karıştırılanlar:** Uydurulmuş veya belirsiz sosyal kanıt ters teper. "Binlerce mutlu müşteri" doğrulanamaz; "Trendyol ve Getir dahil 340 ekip" doğrulanabilir.
- **İlgili terimler:** Logo cloud, Testimonial, Trust badge

### Logo cloud

- **Terim (İngilizce):** Logo cloud (logo wall, logo bar, client logos)
- **Türkçesi:** Logo şeridi
- **Tanım:** Müşteri veya iş ortağı logolarının yan yana dizildiği şerit.
- **Ne işe yarar / neden var:** Tek bakışta güvenilirlik aktarır. Tasarım detayı: logolar farklı ağırlıkta olduğu için genelde **tek renge indirilir** (grileştirilir) ve optik olarak eşit boyutta görünecek şekilde tek tek ayarlanır — matematiksel olarak aynı boyut, görsel olarak eşit görünmez.
- **Nerede karşına çıkar:** Hero'nun hemen altında, "Bize güvenenler" başlığıyla.
- **Örnek kullanım:** "Logo cloud'daki logoları gri tonlamaya alalım ve optik olarak dengeleyelim; şu an biri diğerlerini eziyor."
- **İlgili terimler:** Social proof, Marquee (7.5)

### Testimonial

- **Terim (İngilizce):** Testimonial (quote card, review)
- **Türkçesi:** Referans / kullanıcı görüşü
- **Tanım:** Bir müşterinin ürüne dair sözlerinin, kimliğiyle birlikte gösterildiği alıntı.
- **Ne işe yarar / neden var:** Somut fayda anlatır. Güçlü bir testimonial'ın üç parçası vardır: **isim, unvan/şirket ve fotoğraf** — üçü de yoksa güvenilirliği düşer. En etkili olanlar genel övgü değil, belirli bir sonucu anlatanlardır ("kurulum 2 günden 2 saate indi").
- **Nerede karşına çıkar:** Landing page'lerde ve ürün sayfalarında.
- **Örnek kullanım:** "Testimonial'lara fotoğraf ve şirket unvanı ekleyelim; isimsiz alıntı ikna etmiyor."
- **İlgili terimler:** Social proof, Case study, Avatar (7B)

### Case study

- **Terim (İngilizce):** Case study
- **Türkçesi:** Vaka çalışması
- **Tanım:** Bir müşterinin problemi, uygulanan çözüm ve elde edilen sonucu anlatan uzun içerik.
- **Ne işe yarar / neden var:** Testimonial'ın derinleşmiş hâli. Kurumsal satışta karar vericiyi ikna eden ana malzemedir. Genelde problem → çözüm → sayısal sonuç yapısında kurulur.
- **Nerede karşına çıkar:** Kurumsal ve B2B sitelerinde ayrı bir bölüm olarak.
- **Örnek kullanım:** "Her case study'nin üstünde üç metrik gösterelim; okumadan da sonucu görsünler."
- **İlgili terimler:** Testimonial, Stat block

### Stat block

- **Terim (İngilizce):** Stat block (metric block, stats band, KPI strip)
- **Türkçesi:** İstatistik bloğu
- **Tanım:** Büyük puntolu sayılar ve altlarında kısa açıklamalardan oluşan bölüm: "%40 daha hızlı · 12.000 kullanıcı · 99,9% erişilebilirlik".
- **Ne işe yarar / neden var:** Sayı, cümleden hızlı okunur ve daha güvenilir hisseder. Tasarım açısından sayfaya güçlü bir görsel ritim katar.
- **Nerede karşına çıkar:** Hero altında, case study'lerde, hakkımızda sayfalarında.
- **Örnek kullanım:** "Üçlü stat block koyalım; sayılar 48px, açıklamalar 14px ikincil renkte."
- **Karıştırılanlar:** Kaynağı belirsiz sayılar güveni azaltır. Mümkünse ölçüm tarihini veya kaynağını küçük punto ile belirt.
- **İlgili terimler:** Social proof, Case study

### Avatar stack

- **Terim (İngilizce):** Avatar stack (avatar group, facepile)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Birbirinin üstüne binmiş dairesel profil fotoğrafları, genelde sonunda "+12" gibi bir sayaçla.
- **Ne işe yarar / neden var:** Az yer kaplayarak "burada insanlar var" mesajı verir. İki yerde kullanılır: pazarlamada sosyal kanıt olarak ("2.400 kişi katıldı"), uygulamada ise bir kaynağa erişimi olan kişileri göstermek için.
- **Nerede karşına çıkar:** Hero altında, proje kartlarında, paylaşım ekranlarında.
- **Örnek kullanım:** "CTA'nın altına avatar stack ve '2.400+ ekip kullanıyor' metni koyalım."
- **Karıştırılanlar:** Ekran okuyucu için anlamlı bir özet gerekir; 5 ayrı görselin tek tek okunması işe yaramaz (6.4).
- **İlgili terimler:** Avatar (7B), Social proof

### Rating

- **Terim (İngilizce):** Rating, star rating, review score
- **Türkçesi:** Puan / yıldız derecelendirme
- **Tanım:** Ürünün aldığı puanı yıldız veya sayı olarak gösteren bileşen.
- **Ne işe yarar / neden var:** Tek bakışta kalite sinyali verir. Yanına **kaç değerlendirmeden geldiği** yazılmalıdır: 5,0 (2 yorum) ile 4,6 (1.200 yorum) çok farklı şeylerdir ve kullanıcı bunu bilmelidir.
- **Nerede karşına çıkar:** E-ticaret ürün kartlarında, uygulama mağazası rozetlerinde.
- **Örnek kullanım:** "Puanın yanına yorum sayısını da yazalım; tek başına 5,0 şüphe uyandırıyor."
- **Karıştırılanlar:** Yıldızlar sadece görsel olmamalı; puan metin olarak da erişilebilir olmalıdır (6.6).
- **İlgili terimler:** Social proof, Badge (7B)

### Trust badge

- **Terim (İngilizce):** Trust badge, security badge, certification badge
- **Türkçesi:** Güven rozeti
- **Tanım:** Güvenlik, sertifika veya ödeme güvencesi gösteren küçük işaretler: SSL, ISO, ödeme kuruluşu logoları, iade garantisi.
- **Ne işe yarar / neden var:** Ödeme ve form adımlarındaki tereddüdü azaltır. En etkili yerleri, kullanıcının en çok tereddüt ettiği an olan **kart bilgisi girişinin hemen yanıdır** — sayfanın en altı değil.
- **Nerede karşına çıkar:** Ödeme akışlarında ve footer'da.
- **Örnek kullanım:** "Trust badge'leri kart alanının hemen altına taşıyalım; footer'da kimse görmüyor."
- **İlgili terimler:** Social proof, Funnel (4.10)

### Comparison table

- **Terim (İngilizce):** Comparison table (vs table, feature comparison)
- **Türkçesi:** Karşılaştırma tablosu
- **Tanım:** Ürünü rakiplerle veya planları birbiriyle karşılaştıran tablo.
- **Ne işe yarar / neden var:** Karar vermeyi hızlandırır. Rakiple karşılaştırmada dürüstlük önemlidir; tek taraflı ve abartılı tablolar güven kaybettirir.
- **Nerede karşına çıkar:** Fiyatlandırma sayfalarında ve "X alternatifi" sayfalarında.
- **Örnek kullanım:** "Comparison table'da mobilde sütunları kaydırılabilir yapalım; sığmıyor."
- **Karıştırılanlar:** Tablolar mobilde en çok bozulan bileşendir; responsive stratejisi (yatay kaydırma, kart görünümüne dönüşme) baştan kararlaştırılmalıdır.
- **İlgili terimler:** Feature matrix (7.6), Table (7B)

---

## 7.5 İçerik bölümleri

Ürünü veya hizmeti anlatan bölümlerin kalıpları. Bu isimleri bilmek, sayfa kurgusunu hızlıca konuşabilmek demektir.

### Feature grid

- **Terim (İngilizce):** Feature grid (feature cards, benefits section)
- **Türkçesi:** Özellik ızgarası
- **Tanım:** Özelliklerin eşit boyutlu kutularda, genelde ikon + başlık + kısa açıklama biçiminde dizildiği bölüm.
- **Ne işe yarar / neden var:** Çok sayıda özelliği taranabilir biçimde sunar.
- **Nerede karşına çıkar:** Neredeyse her landing page'de.
- **Örnek kullanım:** "Feature grid'i 3×2 yerine 2×3 yapalım; kartlar mobilde çok dar kalıyor."
- **Karıştırılanlar:** **Bu, tasarımın en jenerikleşen kalıbıdır.** Eşit üç sütunda ikon + başlık + iki satır gri metin, "AI ile üretilmiş" hissinin en yaygın kaynağıdır. Kaçınmanın yolları: kartları eşit ağırlıkta yapmamak (bento grid), her karta gerçek bir görsel/ekran görüntüsü koymak, sayıyı üçe zorlamak yerine içeriğin gerektirdiği kadar yapmak.
- **İlgili terimler:** Bento grid, Alternating section, Card (7B)

### Bento grid

- **Terim (İngilizce):** Bento grid (bento box layout)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Farklı boyutlardaki kutuların, Japon bento kutusu gibi iç içe geçmiş bir ızgarada dizildiği yerleşim.
- **Ne işe yarar / neden var:** Eşit kartların monotonluğunu kırar ve **hiyerarşi kurar**: önemli özellik büyük kutuda, ikincil olanlar küçükte. Her kutu farklı içerik türü taşıyabilir (görsel, sayı, mini demo).
- **Nerede karşına çıkar:** Son dönem ürün sitelerinde yaygın. `[EMİN DEĞİLİM]` Kalıbın kesin çıkış tarihini ve kimin yaygınlaştırdığını doğrulamadım.
- **Örnek kullanım:** "Feature grid yerine bento grid kullanalım; ana özellik iki birim genişliğinde olsun."
- **Karıştırılanlar:** Bento de bir kalıptır ve fazla kullanıldığında o da jenerikleşir. Boyut farkının bir **gerekçesi** olmalıdır (önem sırası), rastgele değil.
- **İlgili terimler:** Feature grid, Masonry, Visual hierarchy (4.8)

### Alternating section

- **Terim (İngilizce):** Alternating section (zig-zag section, split section)
- **Türkçesi:** Dönüşümlü bölüm
- **Tanım:** Metin ve görselin sırayla yer değiştirdiği (bir bölümde metin solda, sonrakinde sağda) bölüm dizisi.
- **Ne işe yarar / neden var:** Her özelliği ayrı ayrı ve derinlemesine anlatmaya izin verir; feature grid'in aksine görsel kanıt (ekran görüntüsü, demo) koyacak yer bırakır.
- **Nerede karşına çıkar:** Ürün özellik sayfalarında.
- **Örnek kullanım:** "Üç ana özelliği alternating section'la anlatalım, her birinin yanında gerçek ekran görüntüsü olsun."
- **Karıştırılanlar:** Mobilde tümü tek sütuna düşer ve dönüşümlü etkisi kaybolur; o durumda sıranın mantıklı olması (görsel önce mi metin önce mi) ayrıca kararlaştırılmalıdır.
- **İlgili terimler:** Feature grid, Split section

### Timeline

- **Terim (İngilizce):** Timeline
- **Türkçesi:** Zaman çizelgesi
- **Tanım:** Olayların veya adımların kronolojik sırayla, bir eksen üzerinde gösterildiği bölüm.
- **Ne işe yarar / neden var:** Sıralı bilgiyi görselleştirir: şirket tarihçesi, yol haritası, sipariş takibi, proje aşamaları.
- **Nerede karşına çıkar:** Hakkımızda sayfalarında, sipariş takip ekranlarında, changelog'larda.
- **Örnek kullanım:** "Sipariş durumunu timeline olarak gösterelim; hangi adımda olduğu belli olsun."
- **İlgili terimler:** Step section, Stepper (7B)

### Step / Process section

- **Terim (İngilizce):** Step section, process section, "how it works"
- **Türkçesi:** Adım bölümü
- **Tanım:** "Nasıl çalışır" tipi, numaralandırılmış adımlardan oluşan bölüm.
- **Ne işe yarar / neden var:** Karmaşık bir hizmeti anlaşılır hâle getirir ve tereddüdü azaltır: kullanıcı ne olacağını önceden bilir.
- **Nerede karşına çıkar:** Hizmet ve pazarlama sayfalarında.
- **Örnek kullanım:** "Üç adımlı bir process section ekleyelim: kaydol → veri bağla → raporu al."
- **Karıştırılanlar:** Numaralandırma (01/02/03) **gerçekten sıralı** içerikte anlamlıdır. Sırasız özellikleri numaralandırmak yaygın bir jenerikleşme kalıbıdır — okuyucuya olmayan bir sıra vaat eder.
- **İlgili terimler:** Timeline, Onboarding (7B)

### Accordion

- **Terim (İngilizce):** Accordion (disclosure, collapsible)
- **Türkçesi:** Akordeon
- **Tanım:** Başlıklara tıklandığında altındaki içeriğin açılıp kapandığı liste.
- **Ne işe yarar / neden var:** Uzun içeriği taranabilir hâle getirir; progressive disclosure'ın (4.6) en yaygın uygulaması. SSS bölümlerinin standart bileşenidir.
- **Nerede karşına çıkar:** FAQ, ürün detayları, ayar ekranları.
- **Örnek kullanım:** "SSS'yi accordion yapalım; 12 soru açık hâlde sayfayı çok uzatıyor."
- **Karıştırılanlar:** Kritik bilgi accordion içine saklanmamalıdır — kapalı içerik okunmaz. Ayrıca ok/artı ikonunun durumu açıkça değişmelidir ve klavyeyle açılabilmelidir (6.5).
- **İlgili terimler:** Progressive disclosure (4.6), FAQ, Tabs

### Tabs

- **Terim (İngilizce):** Tabs
- **Türkçesi:** Sekmeler
- **Tanım:** Aynı alanda, sekme başlıklarıyla değişen içerik bölümleri.
- **Ne işe yarar / neden var:** Birbirine alternatif içerikleri aynı yerde sunar (aylık/yıllık fiyat, farklı sektörler için aynı ürün anlatımı).
- **Nerede karşına çıkar:** Ürün sayfalarında ve panellerde.
- **Örnek kullanım:** "Üç sektör için ayrı bölüm yerine tabs kullanalım; kullanıcı kendine uyanı seçsin."
- **Karıştırılanlar:** *Tabs* (aynı sayfa içinde içerik değişir) ≠ *tab bar* (7.2) (sayfa değişir). Ayrıca sekmelerdeki içerik arama motoru tarafından okunur ama kullanıcı görmez; SEO açısından kritik içerik sekme içine gizlenmemelidir.
- **İlgili terimler:** Tab bar (7.2), Accordion

### Carousel / Slider

- **Terim (İngilizce):** Carousel, slider
- **Türkçesi:** Döngü / kaydırmalı galeri
- **Tanım:** Yatay olarak sırayla gösterilen içerik dizisi.
- **Ne işe yarar / neden var:** Dar alanda çok içerik sunar. **Ama etkinliği düşüktür:** ilk slayttan sonrasının görülme oranı hızla düşer ve otomatik dönenler kullanıcıyı okurken keser. Kritik mesajı carousel'e koymak, onu gizlemekle aynı şeydir.
- **Nerede karşına çıkar:** E-ticaret ana sayfalarında ve ürün galerilerinde.
- **Örnek kullanım:** "Hero carousel yerine tek güçlü bir mesaj koyalım; carousel'de üçüncü slaytı kimse görmüyor."
- **Karıştırılanlar:** Otomatik dönen carousel WCAG'in **Pause, Stop, Hide** ölçütüne (6.8) tabidir: durdurma kontrolü gerekir. Ayrıca klavye ve dokunmatik ile gezilebilmelidir.
- **İlgili terimler:** Gallery, Marquee, Pause Stop Hide (6.8)

### Gallery / Masonry

- **Terim (İngilizce):** Gallery, masonry layout, lightbox
- **Türkçesi:** Galeri, kırma duvar yerleşimi
- **Tanım:** Gallery = görsel koleksiyonu. Masonry = farklı yükseklikteki öğelerin boşluk bırakmadan dizildiği tuğla benzeri yerleşim. Lightbox = bir görsele tıklandığında açılan tam ekran görüntüleyici.
- **Ne işe yarar / neden var:** Görsel yoğun içerikte (portfolyo, ürün fotoğrafları, blog) düzen sağlar. Masonry, farklı oranlı görselleri kırpmadan göstermeye izin verir.
- **Nerede karşına çıkar:** Portfolyo ve ürün sitelerinde.
- **Örnek kullanım:** "Portfolyoyu masonry yapalım; görseller farklı oranlarda, kırpmak istemiyoruz."
- **Karıştırılanlar:** Masonry'de okuma sırası görsel sırayla uyuşmayabilir; klavye ve ekran okuyucu sırası kontrol edilmelidir (6.5).
- **İlgili terimler:** Aspect ratio (5.7), Modal (7B)

### Sticky scroll / Scrollytelling

- **Terim (İngilizce):** Sticky scroll section, scrollytelling, scroll-driven animation
- **Türkçesi:** Kaydırmaya bağlı anlatım
- **Tanım:** Kullanıcı kaydırdıkça bir tarafın sabit kalıp diğerinin değiştiği veya bir animasyonun kaydırmaya bağlı ilerlediği bölüm.
- **Ne işe yarar / neden var:** Bir süreci veya dönüşümü adım adım anlatmak için güçlüdür. Ürün turlarında etkilidir.
- **Nerede karşına çıkar:** Ürün tanıtım sayfalarında ve editoryal içeriklerde.
- **Örnek kullanım:** "Ürün turunu sticky scroll yapalım: solda metin akarken sağdaki ekran görüntüsü değişsin."
- **Karıştırılanlar:** Kaydırma davranışını ele geçirmek (scroll hijacking) kullanıcıyı rahatsız eder ve erişilebilirlik sorunları çıkarır. Ayrıca `prefers-reduced-motion` (5.9, 6.8) için sade bir alternatif gerekir.
- **İlgili terimler:** Motion design (5.9), prefers-reduced-motion (6.8)

### Marquee

- **Terim (İngilizce):** Marquee (ticker, scrolling banner)
- **Türkçesi:** Kayan şerit
- **Tanım:** Yatay olarak sürekli akan içerik şeridi — genelde logolar veya kısa metinler.
- **Ne işe yarar / neden var:** Az yerde çok öğe gösterir ve sayfaya hareket katar. Logo cloud'un hareketli sürümü olarak yaygınlaştı.
- **Nerede karşına çıkar:** Pazarlama sayfalarında.
- **Örnek kullanım:** "Logo cloud'u marquee yapalım ama üzerine gelince dursun."
- **Karıştırılanlar:** Sürekli hareket, Pause/Stop/Hide ölçütüne (6.8) tabidir ve `prefers-reduced-motion` açıkken durmalıdır. Ayrıca okunması gereken metin marquee içine konmamalıdır.
- **İlgili terimler:** Logo cloud (7.4), Carousel, Pause Stop Hide (6.8)

### FAQ

- **Terim (İngilizce):** FAQ — Frequently Asked Questions
- **Türkçesi:** Sıkça sorulan sorular
- **Tanım:** Sık sorulan soruların ve cevaplarının listelendiği bölüm.
- **Ne işe yarar / neden var:** Satın alma öncesi tereddütleri karşılar ve destek yükünü azaltır. En etkili FAQ, gerçek destek taleplerinden türetilendir; uydurulmuş sorular yer kaplar.
- **Nerede karşına çıkar:** Fiyatlandırma ve ürün sayfalarının alt kısmında.
- **Örnek kullanım:** "FAQ'yu destek ekibinin en sık aldığı 8 soruyla dolduralım, tahminle değil."
- **Karıştırılanlar:** Content design açısından (4.9), bir sorunun FAQ'ya girmesi çoğu zaman **akışta bir eksiklik** olduğunun işaretidir. Mümkünse cevabı akışın içine yerleştir, FAQ'ya değil.
- **İlgili terimler:** Accordion, Content design (4.9), Structured data (8.13)

### Callout

- **Terim (İngilizce):** Callout (note, admonition, aside box, pull quote)
- **Türkçesi:** Vurgu kutusu
- **Tanım:** Metin akışı içinde dikkat çekmek için ayrılmış kutu: ipucu, uyarı, not, öne çıkarılmış alıntı.
- **Ne işe yarar / neden var:** Uzun metinde ritim kurar ve önemli bilgiyi taranabilir hâle getirir. Dokümantasyonun temel bileşenlerinden biri.
- **Nerede karşına çıkar:** Blog, dokümantasyon ve yardım içeriklerinde.
- **Örnek kullanım:** "Bu uyarıyı callout'a alalım; düz metin içinde kayboluyor."
- **Karıştırılanlar:** Callout türleri (info/warning/danger) semantic renklerle (5.4) ayrılır ama sadece renkle değil, ikonla da ayrılmalıdır (6.6).
- **İlgili terimler:** Alert banner (7B), Semantic color (5.4)

---

## 7.6 Fiyatlandırma

Fiyat sayfası, bir ürün sitesinin en çok ziyaret edilen ve dönüşüme en yakın sayfasıdır. Bileşenlerinin ayrı adları vardır.

### Pricing table

- **Terim (İngilizce):** Pricing table
- **Türkçesi:** Fiyat tablosu
- **Tanım:** Planların yan yana kartlar hâlinde karşılaştırıldığı bölüm.
- **Ne işe yarar / neden var:** Karar vermeyi kolaylaştırır. Üç plan yaygındır çünkü karşılaştırma için yeterli, karar felcine yol açmayacak kadar az (4.7, Hick's law).
- **Nerede karşına çıkar:** SaaS ve abonelik ürünlerinde.
- **Örnek kullanım:** "Pricing table'da beş plan var; üçe indirip gerisini feature matrix'e alalım."
- **İlgili terimler:** Plan card, Feature matrix, Comparison table (7.4)

### Tier / Plan card

- **Terim (İngilizce):** Tier, plan, plan card
- **Türkçesi:** Katman, plan
- **Tanım:** Tek bir fiyat seçeneği ve onu temsil eden kart. Yaygın adlandırma: Free / Starter / Pro / Business / Enterprise.
- **Ne işe yarar / neden var:** Farklı ihtiyaç seviyelerini karşılar. Bir plan kartının standart parçaları: plan adı, kısa hedef kitle tanımı, fiyat, faturalama periyodu, CTA, dahil olanlar listesi.
- **Nerede karşına çıkar:** Fiyat sayfasında.
- **Örnek kullanım:** "Her plan kartının üstüne 'kimin için' satırı ekleyelim; kullanıcı hangisini seçeceğini bilmiyor."
- **İlgili terimler:** Pricing table, Most popular badge

### Billing toggle

- **Terim (İngilizce):** Billing toggle (monthly/yearly switch)
- **Türkçesi:** Faturalama değiştirici
- **Tanım:** Aylık ve yıllık fiyat arasında geçiş yapan anahtar.
- **Ne işe yarar / neden var:** İki fiyatı ayrı ayrı göstermek yerine tek yerde sunar. Genelde yıllık seçeneğin yanında indirim rozeti bulunur ("2 ay bedava").
- **Nerede karşına çıkar:** Abonelik ürünlerinde.
- **Örnek kullanım:** "Billing toggle varsayılan olarak yıllıkta açılsın ve tasarrufu rozetle gösterelim."
- **Karıştırılanlar:** Toggle'ın hangi durumda olduğu net olmalıdır; iki seçenekli anahtar tasarımlarında "hangisi aktif" sık karışır (7B, switch).
- **İlgili terimler:** Switch (7B), Pricing table

### Most popular badge

- **Terim (İngilizce):** "Most popular" badge (recommended plan, highlighted tier)
- **Türkçesi:** Öne çıkarılmış plan
- **Tanım:** Bir planın rozetle ve görsel vurguyla öne çıkarılması.
- **Ne işe yarar / neden var:** Karar vermeyi kolaylaştıran bir yönlendirmedir; kullanıcı hangi planı seçeceğini bilmediğinde varsayılan bir cevap sunar.
- **Nerede karşına çıkar:** Neredeyse her fiyat tablosunda, genelde ortadaki planda.
- **Örnek kullanım:** "Orta planı öne çıkaralım: kenarlık, hafif yükseltilmiş kart ve 'En çok tercih edilen' rozeti."
- **Karıştırılanlar:** İddia doğru olmalıdır. "En popüler" yazıp aslında en kârlı planı işaretlemek, fark edildiğinde güven kaybettirir.
- **İlgili terimler:** Badge (7B), Plan card, Elevation (5.6)

### Feature matrix

- **Terim (İngilizce):** Feature matrix (detailed comparison)
- **Türkçesi:** Özellik matrisi
- **Tanım:** Tüm özelliklerin ve hangi planda bulunduğunun tik/çarpı ile gösterildiği ayrıntılı tablo.
- **Ne işe yarar / neden var:** Plan kartları özet verir; matris detay arayan kullanıcı için altta durur. İkisi birlikte çalışır: kart hızlı karar, matris derin karşılaştırma.
- **Nerede karşına çıkar:** Fiyat sayfasının alt kısmında.
- **Örnek kullanım:** "Feature matrix'i varsayılan kapalı yapalım, 'Tüm özellikleri karşılaştır' ile açılsın."
- **Karıştırılanlar:** Tik/çarpı **sadece ikonla** değil, erişilebilir metinle de ifade edilmelidir (6.6). Ayrıca mobilde tablo stratejisi gerekir.
- **İlgili terimler:** Comparison table (7.4), Table (7B), Accordion (7.5)

---

## 7.7 Dönüşüm ve toplama

Kullanıcıdan bir eylem veya bilgi almayı hedefleyen bileşenler.

### CTA section

- **Terim (İngilizce):** CTA section (CTA banner, closing CTA, final CTA)
- **Türkçesi:** Eylem bölümü
- **Tanım:** Sayfanın sonunda, tek bir eyleme odaklanan bölüm.
- **Ne işe yarar / neden var:** Sayfayı sonuna kadar okuyan kullanıcı en ikna olmuş kullanıcıdır; onu footer'a bırakmak fırsat kaybıdır. Genelde sade tutulur: kısa başlık, tek buton, dikkat dağıtacak başka öğe yok.
- **Nerede karşına çıkar:** Landing page'lerin footer'dan hemen önceki bölümü.
- **Örnek kullanım:** "Footer'dan önce bir CTA section ekleyelim; tek başlık ve tek buton yeter."
- **İlgili terimler:** CTA (7.3), Sticky CTA

### Sticky CTA

- **Terim (İngilizce):** Sticky CTA (floating CTA, sticky action bar)
- **Türkçesi:** Sabit eylem butonu
- **Tanım:** Kaydırma boyunca ekranda kalan buton veya çubuk.
- **Ne işe yarar / neden var:** Uzun sayfalarda kullanıcı istediği anda harekete geçebilir. Mobilde alt kenarda bir çubuk olarak çok yaygındır (e-ticarette "Sepete ekle").
- **Nerede karşına çıkar:** Uzun ürün sayfalarında ve mobil e-ticarette.
- **Örnek kullanım:** "Mobilde alta sticky CTA koyalım ama hero'daki buton görünürken gizli kalsın."
- **Karıştırılanlar:** Ekranın altını kaplar; içeriğin son satırını kapatmaması için alt boşluk bırakılmalıdır. Ayrıca odaklanılan öğeyi gizlememelidir (6.2, Focus Not Obscured).
- **İlgili terimler:** CTA (7.3), Sticky header (7.2), FAB (7B)

### Newsletter / Lead capture

- **Terim (İngilizce):** Newsletter signup, lead capture form, opt-in form
- **Türkçesi:** Bülten kaydı / veri toplama formu
- **Tanım:** E-posta veya iletişim bilgisi toplayan küçük form.
- **Ne işe yarar / neden var:** Henüz satın almaya hazır olmayan kullanıcıyla bağ kurar. Dönüşümü belirleyen şey, **karşılığında ne verildiğidir**: "Bültenimize abone olun" zayıf, "Haftalık tek e-posta: bu haftanın en iyi 3 aracı" güçlüdür.
- **Nerede karşına çıkar:** Footer'da, blog yazılarının sonunda, ayrı bir bölüm olarak.
- **Örnek kullanım:** "Newsletter formuna ne göndereceğimizi ve sıklığı yazalım; tek alan ve tek buton kalsın."
- **Karıştırılanlar:** KVKK/GDPR açısından **açık rıza** gerekir (13.10): önceden işaretli onay kutusu kullanılamaz ve ne için veri toplandığı belirtilmelidir.
- **İlgili terimler:** Lead magnet, Form parçaları (7B), KVKK (13.10)

### Lead magnet

- **Terim (İngilizce):** Lead magnet
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** İletişim bilgisi karşılığında verilen ücretsiz değer: e-kitap, şablon, kontrol listesi, mini araç.
- **Ne işe yarar / neden var:** Kullanıcıya bilgisini verme gerekçesi sunar. Ne kadar somut ve hemen kullanılabilirse dönüşüm o kadar yüksek olur.
- **Nerede karşına çıkar:** Pazarlama sitelerinde ve içerik stratejilerinde.
- **Örnek kullanım:** "Lead magnet olarak bir Figma şablonu verelim; bülten vaadinden daha somut."
- **İlgili terimler:** Newsletter, Funnel (4.10)

### Waitlist

- **Terim (İngilizce):** Waitlist (early access signup)
- **Türkçesi:** Bekleme listesi
- **Tanım:** Henüz yayında olmayan bir ürün için ön kayıt toplayan form.
- **Ne işe yarar / neden var:** Ürün hazır olmadan talebi ölçer (2.3, validation) ve lansman için hazır bir kitle biriktirir. Genelde sıra numarası veya davet mekanizmasıyla desteklenir.
- **Nerede karşına çıkar:** Yeni ürün lansmanlarında ve closed beta süreçlerinde (2.11).
- **Örnek kullanım:** "Waitlist sayfası yapalım; kayıt sonrası sıradaki yerini gösterelim."
- **İlgili terimler:** Beta (2.11), Validation (2.3)

### Contact form

- **Terim (İngilizce):** Contact form
- **Türkçesi:** İletişim formu
- **Tanım:** Kullanıcının mesaj göndermesini sağlayan form.
- **Ne işe yarar / neden var:** İletişim yolunu standartlaştırır ve gelen talebi sınıflandırır. Ama tek iletişim yolu olmamalıdır: e-posta adresi de görünür olmalıdır, çünkü bazı kullanıcılar form doldurmak istemez.
- **Nerede karşına çıkar:** İletişim sayfalarında ve kurumsal sitelerde.
- **Örnek kullanım:** "Contact form'un yanına doğrudan e-posta adresini de yazalım."
- **Karıştırılanlar:** Spam koruması gerekir ama CAPTCHA erişilebilirlik sorunu çıkarabilir; honeypot gibi görünmez yöntemler tercih edilebilir (13.9).
- **İlgili terimler:** Form parçaları (7B), CAPTCHA (13.9)

### Booking widget

- **Terim (İngilizce):** Booking widget (scheduler, appointment picker)
- **Türkçesi:** Randevu bileşeni
- **Tanım:** Tarih ve saat seçerek randevu veya rezervasyon oluşturan bileşen.
- **Ne işe yarar / neden var:** Karşılıklı e-postalaşmayı ortadan kaldırır. Genelde üçüncü parti bir servis gömülür (Cal.com, Calendly benzeri). `[DEĞİŞKEN BİLGİ]` Servis isimleri ve fiyatlandırmaları değişir.
- **Nerede karşına çıkar:** Hizmet siteleri ve B2B satış sayfalarında.
- **Örnek kullanım:** "Demo talebi için form yerine booking widget koyalım; kullanıcı saati kendi seçsin."
- **Karıştırılanlar:** Gömülü üçüncü parti bileşenler kendi erişilebilirlik ve performans yükünü getirir; sayfanın geri kalanını yavaşlatabilir.
- **İlgili terimler:** Date picker (7B), Third-party integration (10.9)

### Exit intent

- **Terim (İngilizce):** Exit intent popup
- **Türkçesi:** Çıkış niyeti açılır penceresi
- **Tanım:** Kullanıcının sayfadan ayrılmak üzere olduğu algılandığında beliren modal.
- **Ne işe yarar / neden var:** Son bir teklif sunar. Kısa vadede dönüşüm artırabilir ama rahatsız edicidir ve marka algısına zarar verebilir; mobilde teknik olarak da güvenilir çalışmaz.
- **Nerede karşına çıkar:** E-ticaret ve pazarlama sitelerinde.
- **Örnek kullanım:** "Exit intent kullanacaksak oturumda bir kez ve kolay kapatılabilir olsun."
- **Karıştırılanlar:** Modal olduğu için odak yönetimi ve Esc ile kapanma kuralları geçerlidir (6.5).
- **İlgili terimler:** Modal (7B), Announcement bar (7.3)

### Cookie banner

- **Terim (İngilizce):** Cookie banner (consent banner, CMP — consent management platform)
- **Türkçesi:** Çerez bildirimi
- **Tanım:** Çerez kullanımı için kullanıcıdan onay alan bildirim.
- **Ne işe yarar / neden var:** KVKK ve GDPR yükümlülüğü (13.10). Tasarım açısından kritik nokta: **reddetmek, kabul etmek kadar kolay olmalıdır.** "Tümünü kabul et" butonu büyük ve renkli, "Reddet" küçük bir bağlantıysa bu, düzenlemelere aykırı kabul edilebilen bir karanlık kalıptır (dark pattern).
- **Nerede karşına çıkar:** Neredeyse her sitede. Genelde hazır bir CMP servisi kullanılır.
- **Örnek kullanım:** "Kabul et ve Reddet butonları eşit ağırlıkta olsun; ayarlar bağlantısı da görünür kalsın."
- **Karıştırılanlar:** Zorunlu (teknik) çerezler için onay gerekmez; onay analitik ve pazarlama çerezleri içindir. Ayrıca banner içeriği ekranı tamamen kilitlememeli ve klavyeyle kullanılabilmelidir.
- **İlgili terimler:** KVKK/GDPR (13.10), Modal (7B), Dark pattern

### Dark pattern

- **Terim (İngilizce):** Dark pattern (deceptive pattern)
- **Türkçesi:** Karanlık kalıp / aldatıcı tasarım
- **Tanım:** Kullanıcıyı, kendi çıkarına olmayan bir şeyi yapmaya yönelten tasarım kalıpları.
- **Ne işe yarar / neden var:** Bilmek, farkında olmadan uygulamamak için gerekli. Yaygın örnekler: iptal etmeyi zorlaştırmak, önceden işaretli onay kutuları, sahte aciliyet sayaçları, ret butonunu gizlemek, ek ürünü sepete kendiliğinden eklemek.
- **Nerede karşına çıkar:** E-ticaret ve abonelik ürünlerinde. Bazı düzenlemelerde yasal yaptırıma tabidir.
- **Örnek kullanım:** "Bu bir dark pattern; iptal akışını üç adımda tutalım, gizlemeyelim."
- **İlgili terimler:** Cookie banner, UX writing (4.9), KVKK (13.10)

---

**Biten dosya:** Bölüm 7A — Sayfa iskeleti, navigasyon, hero, ikna, içerik, fiyatlandırma, dönüşüm
**Sıradaki dosya:** Bölüm 7B — Geri bildirim katmanı, durum ekranları, veri gösterimi, form parçaları, uygulama içi ekranlar, küçük parçalar ve "kendini test et"
