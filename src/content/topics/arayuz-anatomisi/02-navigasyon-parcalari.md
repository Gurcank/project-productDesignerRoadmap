---
title: "Navigasyon parçaları"
sectionNumber: "7.2"
category: "arayuz-anatomisi"
order: 2
cardCount: 7
sourceFile: "07a-site-anatomisi.md"
origin: "material"
flags: []
---
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
