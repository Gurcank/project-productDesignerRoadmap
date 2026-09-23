---
title: "Klavye erişimi"
sectionNumber: "6.5"
category: "erisilebilirlik"
order: 5
cardCount: 7
sourceFile: "06-erisilebilirlik-a11y.md"
origin: "material"
flags: []
---
En kolay test edilen ve en sık ihlal edilen alan. Farenizi bırakıp sadece Tab, Enter, Space ve ok tuşlarıyla sitenizi kullanmayı deneyin — sorunların çoğu ilk beş dakikada ortaya çıkar.

### Keyboard accessibility

- **Terim (İngilizce):** Keyboard accessibility
- **Türkçesi:** Klavye erişilebilirliği
- **Tanım:** Tüm işlevlerin yalnızca klavyeyle kullanılabilmesi.
- **Ne işe yarar / neden var:** Sadece görme engelli kullanıcılar için değil: motor beceri kısıtı olanlar, titremesi olanlar, ekran okuyucu kullananlar ve hız isteyen uzman kullanıcılar klavyeyle gezer. Fareyle yapılabilen her şeyin klavyeyle de yapılabilmesi gerekir.
- **Nerede karşına çıkar:** Manuel testin ilk adımı.
- **Örnek kullanım:** "Klavyeyle test ettim: filtre menüsü Tab ile açılıyor ama ok tuşlarıyla gezilemiyor."
- **İlgili terimler:** Focus, Tab order, Focus trap

### Focus

- **Terim (İngilizce):** Focus
- **Türkçesi:** Odak
- **Tanım:** Klavye girdisinin o an hangi öğeye gittiği.
- **Ne işe yarar / neden var:** Klavye kullanıcısının "imleci" budur. Odağın nerede olduğu görünmüyorsa kullanıcı kaybolur.
- **Nerede karşına çıkar:** Her etkileşimli bileşende. Tasarım tesliminde **focus durumu** da verilmelidir (hover ve active gibi).
- **Örnek kullanım:** "Handoff'a focus durumunu da ekledim; sadece hover vermek yetmiyor."
- **İlgili terimler:** Focus indicator, Tab order, Focus management

### Focus indicator (focus ring)

- **Terim (İngilizce):** Focus indicator, focus ring
- **Türkçesi:** Odak göstergesi
- **Tanım:** Odaklanan öğenin etrafında görünen çerçeve veya vurgu.
- **Ne işe yarar / neden var:** Klavye kullanıcısının nerede olduğunu gösteren tek işaret. Tarayıcının varsayılan halkası bazen tasarımla uyumsuz görünür ve **kaldırılır** — bu, en yaygın ve en zararlı erişilebilirlik hatalarından biridir. Doğru yaklaşım kaldırmak değil, **markaya uygun ve yeterince görünür** bir gösterge tasarlamaktır. WCAG'e göre odak göstergesi de kontrast eşiğini (3:1) sağlamalıdır.
- **Nerede karşına çıkar:** Tasarım sisteminde ayrı bir token olarak tanımlanmalıdır.
- **Örnek kullanım:** "Focus ring'i kaldırmayalım; 2px kalınlıkta, marka renginde ve 2px offsetli bir halka tanımlayalım."
- **Karıştırılanlar:** Odak göstergesini yalnızca klavye kullanımında göstermek mümkündür (fareyle tıklandığında görünmez). Bu, "tasarımı bozuyor" itirazının makul çözümüdür — tamamen kaldırmak değil.
- **İlgili terimler:** Focus, Contrast ratio (6.6), Design token (5.2)

### Tab order

- **Terim (İngilizce):** Tab order, tabindex
- **Türkçesi:** Sekme sırası
- **Tanım:** Tab tuşuna basıldığında odağın hangi sırayla ilerlediği.
- **Ne işe yarar / neden var:** Sıra, **kodun sırasını** takip eder — görsel yerleşimi değil. CSS ile görsel olarak yeri değiştirilmiş bir öğe, klavyede beklenmedik bir yerde çıkar. Bu yüzden görsel sıra ile kod sırasının uyumlu olması gerekir.
- **Nerede karşına çıkar:** Karmaşık yerleşimlerde ve responsive düzen değişimlerinde.
- **Örnek kullanım:** "Mobilde CTA görsel olarak üstte ama Tab sırasında en sonda; kod sırasını düzeltelim."
- **Karıştırılanlar:** `tabindex` ile sıra elle değiştirilebilir ama pozitif değerler kullanmak neredeyse her zaman hatadır ve bakımı imkânsızlaştırır.
- **İlgili terimler:** Focus, Semantic HTML (6.3)

### Focus trap

- **Terim (İngilizce):** Focus trap
- **Türkçesi:** Odak hapsi
- **Tanım:** Modal veya çekmece açıkken odağın o alanın içinde tutulması.
- **Ne işe yarar / neden var:** Modal açıkken Tab'a basınca odağın arkadaki sayfaya kaçması, klavye kullanıcısı için ürünü kullanılamaz hâle getirir: kullanıcı göremediği öğeler arasında dolaşır. Doğru davranış: odak modalın içinde döner, Esc ile kapanır ve **kapandığında odak, modalı açan öğeye geri döner.**
- **Nerede karşına çıkar:** Modal, drawer ve açılır menü tasarımlarında.
- **Örnek kullanım:** "Modal açılınca odak başlığa gitsin, içeride dönsün, kapanınca butona geri dönsün."
- **Karıştırılanlar:** Kasıtlı focus trap (modal içinde) iyidir; **kasıtsız** focus trap (kullanıcının bir öğeden çıkamaması) ciddi bir ihlaldir.
- **İlgili terimler:** Modal (7.8), Focus management

### Skip link

- **Terim (İngilizce):** Skip link (skip to content)
- **Türkçesi:** Atlama bağlantısı
- **Tanım:** Sayfanın en başında bulunan, tekrar eden navigasyonu atlayıp doğrudan ana içeriğe götüren bağlantı.
- **Ne işe yarar / neden var:** Klavye kullanıcısı her sayfada 30 menü öğesini tek tek geçmek zorunda kalmasın diye. Genelde görünmezdir ve **yalnızca odaklandığında** görünür hâle gelir.
- **Nerede karşına çıkar:** Sayfa iskeletinin ilk öğesi olarak.
- **Örnek kullanım:** "Skip link ekleyelim; odaklanınca sol üstte görünsün, `#main`'e gitsin."
- **İlgili terimler:** Landmark (6.3), Keyboard accessibility

### Focus management

- **Terim (İngilizce):** Focus management
- **Türkçesi:** Odak yönetimi
- **Tanım:** Sayfa veya ekran değiştiğinde odağın bilinçli olarak doğru yere taşınması.
- **Ne işe yarar / neden var:** SPA'larda (1.7) sayfa gerçekten yenilenmediği için odak eski yerinde kalır ve ekran okuyucu kullanıcısı **sayfanın değiştiğini fark etmez.** Doğru davranış: geçişte odağı yeni sayfanın başlığına taşımak ve değişimi duyurmak.
- **Nerede karşına çıkar:** Client-side routing'de (1.7), modal açılış/kapanışında, adım geçişlerinde.
- **Örnek kullanım:** "Adım değişince odağı yeni adımın başlığına taşıyalım; şu an kullanıcı hâlâ eski butonda."
- **İlgili terimler:** Client-side routing (1.7), aria-live (6.4), Focus trap
