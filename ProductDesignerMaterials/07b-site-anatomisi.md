# Bölüm 7 — Site anatomisi (Bölüm 7B: 7.8 – 7.14)

7A sayfanın **yapısını** anlattı. 7B, kullanıcının ürünle etkileştiği anda ortaya çıkan parçaları anlatıyor: bildirimler, açılır pencereler, durum ekranları, tablolar, formlar.

Bu yarı, uygulama tasarımının dilidir. Bir pazarlama sayfası 7A'daki parçalarla kurulur; bir panel veya web uygulaması ise ağırlıkla buradaki parçalarla.

**Bu bölümün en önemli mesajı:** Buradaki bileşenlerin çoğu **birbirine çok benzeyen ama farklı işler yapan** çiftler hâlinde gelir — modal ve drawer, tooltip ve popover, badge ve chip, checkbox ve switch, pagination ve infinite scroll. Kartların "karıştırılanlar" bölümleri bu yüzden en değerli kısımdır.

---

## 7.8 Geri bildirim katmanı

Sayfanın üstünde beliren geçici katmanlar. Hepsinin ortak sorunu aynıdır: **odak yönetimi ve kapatılabilirlik** (6.5).

### Overlay / Backdrop

- **Terim (İngilizce):** Overlay, backdrop, scrim
- **Türkçesi:** Örtü / karartma katmanı
- **Tanım:** Modal veya çekmece açıldığında arka planı karartan yarı saydam katman.
- **Ne işe yarar / neden var:** İki iş görür: dikkati öndeki içeriğe toplar (Gestalt figure-ground, 4.8) ve arkadaki içeriğin tıklanamaz olduğunu görsel olarak bildirir. Genelde üzerine tıklandığında katman kapanır.
- **Nerede karşına çıkar:** Her modal, drawer ve mobil menüde.
- **Örnek kullanım:** "Overlay opaklığı %60 olsun; %20'de arka plan hâlâ dikkat çekiyor."
- **Karıştırılanlar:** *Overlay* (bu katman) ≠ *accessibility overlay* (6.9, erişilebilirlik eklentisi). Aynı kelime, tamamen farklı şey.
- **İlgili terimler:** Modal, Drawer, z-index (5.6)

### Modal ve Dialog

- **Terim (İngilizce):** Dialog, modal (modal dialog), non-modal dialog
- **Türkçesi:** Diyalog, kalıcı pencere
- **Tanım:** **Dialog** bileşenin adıdır; **modal** ise bir davranış sıfatıdır — arkadaki içerikle etkileşimi engelleyen dialog'a modal denir. Engellemeyen sürüme non-modal dialog denir.
- **Ne işe yarar / neden var:** Akışı kesip kullanıcıdan tek bir şeye odaklanmasını ister. Bu kesme maliyetlidir, bu yüzden yalnızca gerçekten gerektiğinde kullanılır: onay gerektiren yıkıcı işlemler, kısa ve zorunlu girdiler.
- **Nerede karşına çıkar:** Her uygulamada. Kodda `<dialog>` elemanı veya bir kütüphane bileşeni olarak.
- **Örnek kullanım:** "Bu formu modal yerine ayrı sayfaya alalım; sekiz alan modal içine sığmıyor."
- **Karıştırılanlar:** Uzun formlar ve karmaşık akışlar modal'a konmamalıdır — kaydırma, klavye ve mobil davranışı bozulur. Erişilebilirlik kuralları zorunludur: açılınca odak içeri taşınır, içeride döner (focus trap), Esc ile kapanır, kapanınca odak açan öğeye döner (6.5).
- **İlgili terimler:** Drawer, Confirm dialog, Focus trap (6.5)

### Confirm dialog

- **Terim (İngilizce):** Confirm dialog (confirmation modal)
- **Türkçesi:** Onay penceresi
- **Tanım:** Bir işlemin gerçekten istendiğini soran küçük modal.
- **Ne işe yarar / neden var:** Yıkıcı işlemlerde kazayı önler. Ama aşırı kullanıldığında kullanıcı otomatik olarak "Evet"e basmaya alışır ve koruma işlevi ölür. **Daha iyi alternatif çoğu durumda geri alınabilir işlemdir** (4.6, undo): işlemi yap, geri al seçenekli bir toast göster.
- **Nerede karşına çıkar:** Silme, iptal etme, geri alınamaz işlemler.
- **Örnek kullanım:** "Tek satır silmede onay sormayalım, geri al verelim; toplu silmede onay soralım."
- **Karıştırılanlar:** Buton metinleri "Evet/Hayır" değil, **eylemi söyleyen** metinler olmalıdır: "Projeyi sil" / "Vazgeç". Kullanıcı sadece butona bakıp karar verebilmelidir (4.9).
- **İlgili terimler:** Modal, Undo (4.6), Toast

### Drawer / Sheet

- **Terim (İngilizce):** Drawer, side panel, sheet, bottom sheet
- **Türkçesi:** Çekmece, panel, alt panel
- **Tanım:** Ekranın kenarından kayarak açılan panel. Yandan gelirse **drawer/side panel**, mobilde alttan gelirse **bottom sheet**.
- **Ne işe yarar / neden var:** Modal'ın aksine bağlamı korur: arkadaki liste görünmeye devam eder, kullanıcı nerede olduğunu unutmaz. Detay görüntüleme, filtre paneli ve düzenleme formları için modal'dan genelde daha uygundur.
- **Nerede karşına çıkar:** Panellerde detay görünümü, mobilde menü ve filtreler.
- **Örnek kullanım:** "Ürün detayını modal yerine drawer'da açalım; kullanıcı listedeki yerini kaybetmesin."
- **Karıştırılanlar:** Drawer da modal olabilir (arkayı kilitler) veya olmayabilir. Bottom sheet'lerde sürükleyerek kapatma yaygındır ama bu, sürüklemesiz bir alternatif gerektirir (6.2, Dragging Movements).
- **İlgili terimler:** Modal, Sidebar (7.1), Overlay

### Tooltip

- **Terim (İngilizce):** Tooltip
- **Türkçesi:** İpucu balonu
- **Tanım:** Bir öğenin üzerine gelindiğinde veya odaklanıldığında beliren kısa açıklama.
- **Ne işe yarar / neden var:** Yalnızca ikonla gösterilen bir eylemin adını veya kısaltılmış bir bilginin tamamını gösterir. **Kısa** olmalıdır: birkaç kelime.
- **Nerede karşına çıkar:** İkon butonlarında, kısaltılmış metinlerde, tablo başlıklarında.
- **Örnek kullanım:** "İkon butonlara tooltip ekleyelim ama erişilebilir adı da ayrıca verelim."
- **Karıştırılanlar:** **Kritik bilgi tooltip'e konmaz** — dokunmatik cihazlarda hover yoktur, tooltip görünmeyebilir. Ayrıca tooltip içeriği tıklanabilir öğe içermemelidir; içerecekse o bir popover'dır.
- **İlgili terimler:** Popover, Accessible name (6.4), Icon button (7.13)

### Popover

- **Terim (İngilizce):** Popover
- **Türkçesi:** Açılır kutu
- **Tanım:** Bir öğeye tıklandığında yanında açılan, içinde metin, bağlantı veya form barındırabilen küçük panel.
- **Ne işe yarar / neden var:** Tooltip'ten farkı, **etkileşimli içerik** barındırabilmesi ve tıklamayla açılmasıdır. Kullanıcı içeriğe fareyle gidip tıklayabilir.
- **Nerede karşına çıkar:** Profil önizlemeleri, "daha fazla bilgi" kutuları, küçük ayar panelleri.
- **Örnek kullanım:** "Bu tooltip içinde link var; popover'a çevirelim, tooltip'te tıklanamıyor."
- **İlgili terimler:** Tooltip, Dropdown, Modal

### Dropdown

- **Terim (İngilizce):** Dropdown menu
- **Türkçesi:** Açılır menü
- **Tanım:** Bir butona tıklandığında açılan, eylem veya bağlantı listesi.
- **Ne işe yarar / neden var:** İkincil eylemleri gizleyerek arayüzü sadeleştirir. Genelde "üç nokta" (kebab) veya "üç yatay nokta" (meatball) ikonuyla açılır.
- **Nerede karşına çıkar:** Tablo satırlarında, kart köşelerinde, header'da hesap menüsünde.
- **Örnek kullanım:** "Satır sonuna kebab menü koyalım; düzenle, kopyala ve sil oraya girsin."
- **Karıştırılanlar:** *Dropdown menu* (eylem listesi) ≠ *select* (7.11) (form alanı, değer seçimi). Kod ve erişilebilirlik davranışları farklıdır; ikisini karıştırmak yaygın bir hatadır.
- **İlgili terimler:** Select (7.11), Context menu, Popover

### Context menu

- **Terim (İngilizce):** Context menu (right-click menu)
- **Türkçesi:** Bağlam menüsü
- **Tanım:** Sağ tıklama veya uzun basma ile açılan, o öğeye özel eylemler menüsü.
- **Ne işe yarar / neden var:** Uzman kullanıcıya hız verir. Ama keşfedilebilirliği düşüktür; buradaki eylemler başka bir yerden de erişilebilir olmalıdır.
- **Nerede karşına çıkar:** Dosya yöneticileri, tasarım araçları, tablo arayüzleri.
- **Örnek kullanım:** "Sağ tık menüsü ekleyelim ama aynı eylemler kebab menüde de olsun."
- **İlgili terimler:** Dropdown, Discoverability (4.3)

### Toast / Snackbar

- **Terim (İngilizce):** Toast, snackbar
- **Türkçesi:** Anlık bildirim
- **Tanım:** Ekranın bir köşesinde kısa süre görünüp kendiliğinden kaybolan bildirim. *Snackbar* aynı kalıbın Material Design'daki adıdır ve genelde bir eylem butonu içerir.
- **Ne işe yarar / neden var:** Akışı kesmeden bir işlemin sonucunu bildirir. "Geri al" eylemini barındırmak için ideal yerdir (4.6).
- **Nerede karşına çıkar:** Kaydetme, silme, kopyalama gibi işlemlerden sonra.
- **Örnek kullanım:** "Silme sonrası toast göstereleim: 'Proje silindi — Geri al', 6 saniye kalsın."
- **Karıştırılanlar:** **Kritik veya hata bilgisi toast'a konmaz** — kaybolur, geri getirilemez ve kaçırılabilir. Ayrıca ekran okuyucuya duyurulması için canlı bölge gerekir (6.4). Süresi de yeterli olmalıdır; okuma hızı yavaş kullanıcılar için 3 saniye yetmez.
- **İlgili terimler:** Alert banner, aria-live (6.4), Undo (4.6)

### Alert banner

- **Terim (İngilizce):** Alert banner (inline alert, system banner, message bar)
- **Türkçesi:** Uyarı şeridi
- **Tanım:** Sayfanın veya bir bölümün içinde kalıcı olarak duran durum mesajı.
- **Ne işe yarar / neden var:** Toast'ın aksine kaybolmaz; kalıcı ve önemli bilgiler için kullanılır: ödeme başarısız, hesap doğrulanmamış, sistem bakımı, plan limiti doldu. Genelde semantic renklerle (5.4) türlendirilir.
- **Nerede karşına çıkar:** Panel üstlerinde, form üstlerinde, hesap ekranlarında.
- **Örnek kullanım:** "'E-postanı doğrula' mesajı toast değil alert banner olsun; kalıcı ve eylem butonlu."
- **Karıştırılanlar:** *Alert banner* (sistem durumu, kalıcı) ≠ *announcement bar* (7.3, pazarlama, kapatılabilir). Ayrıca sadece renkle değil ikon ve metinle de ayrıştırılmalıdır (6.6).
- **İlgili terimler:** Toast, Callout (7.5), Announcement bar (7.3)

### Inline validation

- **Terim (İngilizce):** Inline validation
- **Türkçesi:** Alan içi doğrulama
- **Tanım:** Form alanının doğruluğunun, form gönderilmeden, alanın hemen yanında bildirilmesi.
- **Ne işe yarar / neden var:** Kullanıcı hatayı, hâlâ o alandayken görür ve düzeltir. Formun sonunda toplu hata göstermek, kullanıcıyı yukarı geri döndürür ve terk oranını artırır.
- **Nerede karşına çıkar:** Her formda.
- **Örnek kullanım:** "Doğrulamayı alan terk edilince (blur) yapalım, her tuşta değil; yazarken kırmızı göstermek rahatsız ediyor."
- **Karıştırılanlar:** **Zamanlama kritiktir.** Kullanıcı henüz yazarken hata göstermek ("geçersiz e-posta" daha ilk harfte) rahatsız edicidir. Yaygın yaklaşım: ilk doğrulamayı alandan çıkınca yap, düzeltme sırasında ise anında güncelle.
- **İlgili terimler:** Error message (4.9), Error identification (6.7), Form (7.11)

---

## 7.9 Durum ekranları

Bir ekranın "dolu ve her şey yolunda" hâli dışındaki bütün hâlleri. **Tasarımcının en sık atladığı iş budur** — ve bu eksiklik doğrudan kullanıcıya yansır, çünkü geliştirici o boşluğu doldurmak zorunda kalır ve tahminle doldurur.

**Kural:** Veri gösteren her ekranın en az dört hâli tasarlanmalıdır — **yükleniyor, boş, hata, dolu.** Beşincisi de sık gerekir: **kısmi/az veri.**

### Loading state

- **Terim (İngilizce):** Loading state
- **Türkçesi:** Yükleniyor durumu
- **Tanım:** İçerik hazır olmadan önce gösterilen geçici hâl.
- **Ne işe yarar / neden var:** Kullanıcıya sistemin çalıştığını bildirir (4.6, feedback). Hangi göstergenin kullanılacağı süreye bağlıdır (4.7): çok kısa sürelerde hiçbir şey gerekmez, orta sürelerde skeleton veya spinner, uzun sürelerde ilerleme göstergesi ve tahmini süre.
- **Nerede karşına çıkar:** Veri çeken her ekranda.
- **Örnek kullanım:** "Liste 2-3 saniyede geliyor; spinner yerine skeleton kullanalım."
- **İlgili terimler:** Skeleton, Spinner, Progress indicator

### Skeleton

- **Terim (İngilizce):** Skeleton screen (skeleton loader, shimmer)
- **Türkçesi:** İskelet ekran
- **Tanım:** Gelecek içeriğin şeklini taklit eden gri bloklar.
- **Ne işe yarar / neden var:** Algılanan bekleme süresini kısaltır çünkü kullanıcı boş ekrana değil, oluşmakta olan bir yapıya bakar. Ayrıca içerik geldiğinde yerleşim kaymaz (1.4, CLS) — çünkü yer önceden ayrılmıştır.
- **Nerede karşına çıkar:** Liste, kart ve profil yüklemelerinde.
- **Örnek kullanım:** "Skeleton gerçek yerleşimle aynı ölçüde olsun; şu an içerik gelince kartlar zıplıyor."
- **Karıştırılanlar:** Skeleton'ın gerçek içerikle **aynı boyutta** olması gerekir, yoksa faydası (kayma önleme) kaybolur. Ayrıca parıltı animasyonu `prefers-reduced-motion` altında sadeleşmelidir (6.8).
- **İlgili terimler:** Loading state, CLS (8.12), Spinner

### Spinner

- **Terim (İngilizce):** Spinner (loader, activity indicator)
- **Türkçesi:** Dönen gösterge
- **Tanım:** Süresi bilinmeyen bir işlemi gösteren dönen animasyon.
- **Ne işe yarar / neden var:** Basit ve her yerde çalışır. Ama hiçbir bilgi vermez: ne kadar kaldığı, ilerleyip ilerlemediği bilinmez. Bu yüzden kısa işlemler ve küçük alanlar (buton içi) için uygundur.
- **Nerede karşına çıkar:** Buton içi yükleme, küçük bileşen yüklemeleri.
- **Örnek kullanım:** "Kaydet butonuna basınca buton içinde spinner göstereleim ve butonu devre dışı bırakalım."
- **Karıştırılanlar:** Tam sayfa spinner, uzun sürelerde en kötü seçenektir; skeleton veya ilerleme göstergesi tercih edilmelidir.
- **İlgili terimler:** Skeleton, Progress indicator, Loading state

### Progress indicator

- **Terim (İngilizce):** Progress bar, determinate / indeterminate progress
- **Türkçesi:** İlerleme göstergesi
- **Tanım:** İşlemin ne kadarının tamamlandığını gösteren çubuk. **Determinate** yüzdeyi bilir, **indeterminate** bilmez (sadece devam ettiğini gösterir).
- **Ne işe yarar / neden var:** Uzun işlemlerde belirsizliği azaltır. Yüzde bilinmiyorsa bile adım adı göstermek yardımcı olur ("Dosya yükleniyor… Doğrulanıyor… Kaydediliyor").
- **Nerede karşına çıkar:** Dosya yükleme, dışa aktarma, içe aktarma, çok adımlı işlemler.
- **Örnek kullanım:** "Yükleme 30 saniye sürebiliyor; determinate progress bar ve kalan süre gösterelim."
- **İlgili terimler:** Loading state, Stepper (7.11), File upload (7.11)

### Optimistic UI

- **Terim (İngilizce):** Optimistic UI (optimistic update)
- **Türkçesi:** İyimser arayüz
- **Tanım:** Sunucudan yanıt beklemeden, işlemin başarılı olacağı varsayılarak arayüzün hemen güncellenmesi.
- **Ne işe yarar / neden var:** Beğeni, işaretleme, sıralama gibi küçük ve neredeyse her zaman başarılı olan işlemlerde bekleme hissini tamamen ortadan kaldırır. Hata olursa değişiklik geri alınır ve kullanıcıya bildirilir.
- **Nerede karşına çıkar:** Modern uygulamalarda yaygın. Tasarımcıyı ilgilendirir çünkü **hata durumunda ne olacağı** tasarlanmalıdır.
- **Örnek kullanım:** "Beğeni butonu optimistic olsun; hata olursa eski hâline dönsün ve toast göstersin."
- **İlgili terimler:** Loading state, Toast (7.8), Error state

### Empty state

- **Terim (İngilizce):** Empty state, zero state, zero data
- **Türkçesi:** Boş durum
- **Tanım:** Gösterilecek veri olmadığında görünen ekran.
- **Ne işe yarar / neden var:** **En değerli ama en çok atlanan ekran budur.** Üç farklı boş durum vardır ve üçü farklı tasarlanır:
  1. **İlk kullanım** (henüz hiç veri yok) — burası aslında bir onboarding fırsatıdır: ne yapılacağını anlat ve birincil eylemi göster.
  2. **Kullanıcı temizledi** (hepsi tamamlandı/silindi) — olumlu bir mesaj uygundur.
  3. **Sonuç yok** (arama/filtre boş döndü) — kullanıcıyı çıkmazda bırakmamak için filtreyi temizleme veya öneri sunulmalıdır (4.4, dead end).
- **Nerede karşına çıkar:** Her liste, tablo, arama sonucu ve panelde.
- **Örnek kullanım:** "İlk kullanım boş durumuna 'İlk projeni oluştur' butonu ve tek cümlelik açıklama koyalım."
- **Karıştırılanlar:** Boş durumu sadece "Kayıt bulunamadı" metniyle geçmek, en yaygın kaçırılmış fırsattır.
- **İlgili terimler:** Onboarding (7.12), Dead end (4.4), Error state

### Error state

- **Terim (İngilizce):** Error state
- **Türkçesi:** Hata durumu
- **Tanım:** Bir şey ters gittiğinde gösterilen ekran veya bölüm.
- **Ne işe yarar / neden var:** Üç soruyu cevaplamalıdır: ne oldu, neden oldu, şimdi ne yapmalıyım (4.9). Ayrıca **kapsamı** doğru seçilmelidir: tek bir kart yüklenemediyse tüm sayfayı hata ekranına çevirmek aşırıdır; hata o bileşenin içinde gösterilmelidir.
- **Nerede karşına çıkar:** Veri çeken her bileşende.
- **Örnek kullanım:** "Grafik yüklenemezse sadece grafik alanında hata ve 'Tekrar dene' butonu gösterelim."
- **İlgili terimler:** Error message (4.9), 404, Offline state

### 404 / 500

- **Terim (İngilizce):** 404 page (not found), 500 page (server error)
- **Türkçesi:** Bulunamadı sayfası, sunucu hatası sayfası
- **Tanım:** 404 = istenen sayfa yok. 500 = sunucuda bir şey ters gitti (10.3).
- **Ne işe yarar / neden var:** İkisi de kullanıcının kaybolduğu andır; ikisi de bir çıkış yolu sunmalıdır: arama kutusu, ana sayfa bağlantısı, popüler sayfalar. 404'te suç kullanıcıda değildir — ton buna göre olmalıdır.
- **Nerede karşına çıkar:** Her sitede olmalıdır ve genelde en son yapılır (veya hiç yapılmaz).
- **Örnek kullanım:** "404'e arama kutusu ve en çok ziyaret edilen üç sayfayı koyalım; sadece 'sayfa bulunamadı' yazmayalım."
- **Karıştırılanlar:** 404 sayfası da site tasarımının parçasıdır: header, footer ve navigasyon korunmalıdır. Boş bir sayfa çıkmazdır (4.4).
- **İlgili terimler:** Error state, Status kodları (10.3), Dead end (4.4)

### Offline state

- **Terim (İngilizce):** Offline state
- **Türkçesi:** Çevrimdışı durumu
- **Tanım:** İnternet bağlantısı kesildiğinde gösterilen hâl.
- **Ne işe yarar / neden var:** Bağlantı sorununu, uygulama hatasından ayırır. Kullanıcı "uygulama bozuldu" değil, "bağlantım yok" diye anlar. Girilen verinin korunması da bu durumun bir parçasıdır.
- **Nerede karşına çıkar:** Mobil ağırlıklı ürünlerde ve PWA'larda (1.7).
- **Örnek kullanım:** "Bağlantı kesilince üstte kalıcı bir şerit gösterelim ve formdaki veriyi kaybetmeyelim."
- **İlgili terimler:** PWA (1.7), Service worker (1.7), Alert banner (7.8)

### Success state

- **Terim (İngilizce):** Success state, confirmation screen
- **Türkçesi:** Başarı durumu
- **Tanım:** Bir işlem tamamlandığında gösterilen onay.
- **Ne işe yarar / neden var:** Kullanıcı işlemin gerçekten olduğunu bilmelidir. Ayrıca **sonraki adımı** göstermek için iyi bir fırsattır: sipariş tamamlandı → siparişi takip et; kayıt oldu → ilk projeni oluştur.
- **Nerede karşına çıkar:** Ödeme, kayıt, form gönderimi sonrasında.
- **Örnek kullanım:** "Ödeme sonrası ekranında sipariş numarası, tahmini teslim ve 'siparişi takip et' butonu olsun."
- **İlgili terimler:** Toast (7.8), Feedback (4.6), Onboarding (7.12)

---

## 7.10 Veri gösterimi

Listelerin, tabloların ve filtrelerin dili. Panel arayüzlerinin ana malzemesi.

### Table / Data grid

- **Terim (İngilizce):** Table, data grid, data table
- **Türkçesi:** Tablo, veri ızgarası
- **Tanım:** Table = satır ve sütunlardan oluşan veri gösterimi. **Data grid** onun gelişmiş hâlidir: sıralama, filtreleme, sütun yeniden boyutlandırma, satır içi düzenleme, sabit sütunlar, sanal kaydırma.
- **Ne işe yarar / neden var:** Çok sayıda kaydı karşılaştırılabilir biçimde gösterir. Tasarım kararları: sabit başlık satırı, satır yoğunluğu (5.5), hangi sütunların önemli olduğu, satır eylemlerinin nerede duracağı.
- **Nerede karşına çıkar:** Panellerde ve yönetim arayüzlerinde.
- **Örnek kullanım:** "Tabloda başlık satırı sabit kalsın, ilk sütun da yatay kaydırmada sabitlensin."
- **Karıştırılanlar:** Tablo mobilde en çok bozulan bileşendir. Üç strateji vardır: yatay kaydırma, kart görünümüne dönüşme, veya sütun gizleme. Hangisinin kullanılacağı baştan kararlaştırılmalıdır. Ayrıca düzen amaçlı tablo kullanmak erişilebilirlik hatasıdır (6.3).
- **İlgili terimler:** List, Pagination, Bulk actions, Density (5.5)

### List

- **Terim (İngilizce):** List, list item, list row
- **Türkçesi:** Liste
- **Tanım:** Öğelerin alt alta dizildiği gösterim.
- **Ne işe yarar / neden var:** Tablodan daha esnektir: her satırda farklı yapıda içerik olabilir (avatar, başlık, alt metin, rozet, eylem). Mobilde tablodan çok daha iyi çalışır.
- **Nerede karşına çıkar:** Bildirimler, mesajlar, arama sonuçları, ayarlar.
- **Örnek kullanım:** "Mobilde tabloyu listeye çevirelim; her satır kart gibi görünsün."
- **İlgili terimler:** Table, Card, Infinite scroll

### Card

- **Terim (İngilizce):** Card
- **Türkçesi:** Kart
- **Tanım:** Tek bir nesneyi temsil eden, kendi sınırı olan kutu.
- **Ne işe yarar / neden var:** Gestalt "common region" ilkesiyle (4.8) grupları ayırır ve her nesneyi bağımsız olarak taranabilir yapar. Kartın tamamı tıklanabilir olabilir ama o zaman içinde ayrı bir buton olması sorun çıkarır (iç içe tıklanabilir alanlar).
- **Nerede karşına çıkar:** Ürün listeleri, blog listeleri, panolar.
- **Örnek kullanım:** "Kartın tamamı tıklanabilir olsun ama içindeki 'Favorilere ekle' butonu ayrı çalışsın."
- **Karıştırılanlar:** Kartın tamamının tıklanabilir olması durumunda, ekran okuyucu için tek bir anlamlı bağlantı adı gerekir; her metin parçasını ayrı link yapmak kullanıcıyı boğar (6.4).
- **İlgili terimler:** Gestalt (4.8), Elevation (5.6), List

### Badge, Chip, Tag

- **Terim (İngilizce):** Badge, chip, tag, pill, label
- **Türkçesi:** Rozet, etiket
- **Tanım:** Üçü de küçük, yuvarlatılmış etiketlerdir ama işleri farklıdır:
  - **Badge** — bir durumu veya sayıyı **gösterir**, tıklanmaz: "Yeni", "Beta", bildirim sayacı "3".
  - **Chip** — kullanıcının **seçtiği veya kaldırabildiği** öğedir, genelde bir × içerir: uygulanmış filtreler, seçilmiş alıcılar.
  - **Tag** — içeriği **sınıflandırır**, genelde tıklanınca o etikete ait içeriğe götürür: blog etiketleri.
- **Ne işe yarar / neden var:** Görsel olarak çok benzer oldukları için sık karıştırılırlar; ama etkileşim davranışları farklıdır ve bu, tasarımda ayırt edilmelidir (bir chip kaldırılabilir görünmelidir, bir badge tıklanabilir görünmemelidir).
- **Nerede karşına çıkar:** Her uygulamada.
- **Örnek kullanım:** "Uygulanan filtreleri chip olarak gösterelim, her birinde × olsun ve 'Tümünü temizle' bağlantısı da bulunsun."
- **İlgili terimler:** Filter, Semantic color (5.4), Affordance (4.6)

### Pagination

- **Terim (İngilizce):** Pagination
- **Türkçesi:** Sayfalama
- **Tanım:** Uzun listenin numaralı sayfalara bölünmesi.
- **Ne işe yarar / neden var:** Kullanıcıya konum duygusu ve kontrol verir: kaç sayfa var, neredeyim, geri dönebilir miyim. Ayrıca bir sayfanın URL'i olduğu için paylaşılabilir ve arama motoru tarafından taranabilir (8.13).
- **Nerede karşına çıkar:** E-ticaret listelerinde, arama sonuçlarında, tablolarda.
- **Örnek kullanım:** "Ürün listesinde infinite scroll yerine pagination kullanalım; kullanıcı 4. sayfaya dönebilsin."
- **İlgili terimler:** Infinite scroll, Load more, URL (1.2)

### Infinite scroll / Load more

- **Terim (İngilizce):** Infinite scroll, load more button
- **Türkçesi:** Sonsuz kaydırma, daha fazla yükle
- **Tanım:** Kaydırdıkça yeni içeriğin otomatik yüklenmesi, veya bir butonla elle yüklenmesi.
- **Ne işe yarar / neden var:** Keşif odaklı akışlarda (sosyal medya, görsel galeriler) doğal hisseder. Bedelleri: footer'a ulaşmak imkânsızlaşır, konum duygusu kaybolur, geri dönünce yer kaybedilir ve performans zamanla bozulur. **Load more**, ikisinin arası bir çözümdür: kullanıcı kontrolü korunur, footer erişilebilir kalır.
- **Nerede karşına çıkar:** Akış tipi arayüzlerde.
- **Örnek kullanım:** "İnfinite scroll yerine 'Daha fazla göster' butonu koyalım; footer'daki bağlantılara erişilemiyordu."
- **Karıştırılanlar:** Infinite scroll'da yeni içerik yüklendiğinde ekran okuyucuya bildirilmelidir (6.4) ve klavye kullanıcısı sayfanın sonuna asla ulaşamaz — bu ciddi bir erişilebilirlik sorunudur.
- **İlgili terimler:** Pagination, Footer (7.1), aria-live (6.4)

### Filter / Facet

- **Terim (İngilizce):** Filter, facet, faceted search
- **Türkçesi:** Filtre, kırılım
- **Tanım:** Listeyi belirli kriterlere göre daraltan kontroller. **Facet** = filtrelenebilir bir özellik boyutu (marka, beden, fiyat aralığı).
- **Ne işe yarar / neden var:** Büyük kataloglarda bulunabilirliği sağlar. İyi filtre tasarımının kuralları: uygulanmış filtreler görünür olmalı (chip olarak), her seçeneğin kaç sonuç vereceği gösterilmeli, sıfır sonuç veren seçenekler devre dışı bırakılmalı ve **filtreler URL'e yazılmalıdır** ki paylaşılabilsin (1.2).
- **Nerede karşına çıkar:** E-ticaret, iş ilanları, emlak, panel listeleri.
- **Örnek kullanım:** "Filtreleri query param olarak URL'e yazalım; kullanıcı filtreli listeyi link olarak gönderebilsin."
- **İlgili terimler:** Taxonomy (4.3), Chip, Search, URL (1.2)

### Sort

- **Terim (İngilizce):** Sort, sort control
- **Türkçesi:** Sıralama
- **Tanım:** Listenin hangi ölçüte göre dizileceğini seçen kontrol.
- **Ne işe yarar / neden var:** Filtre listeyi **daraltır**, sıralama **düzenler** — ikisi farklı işlerdir ve arayüzde ayrı gösterilmelidir. Varsayılan sıralamanın ne olduğu ve neden o olduğu bilinçli bir karardır.
- **Nerede karşına çıkar:** Liste ve tablolarda.
- **Örnek kullanım:** "Varsayılan sıralama 'En yeni' olsun; 'Önerilen' belirsiz ve kullanıcı neye göre sıralandığını anlamıyor."
- **İlgili terimler:** Filter, Table

### Search

- **Terim (İngilizce):** Search, search field, typeahead / autocomplete, autosuggest
- **Türkçesi:** Arama, otomatik tamamlama
- **Tanım:** Kullanıcının metin yazarak içerik bulmasını sağlayan alan. **Typeahead/autocomplete**, yazarken öneri gösteren davranıştır.
- **Ne işe yarar / neden var:** Navigasyonun alternatifi ve bazı sitelerde ana yolu. Kritik tasarım kararları: sonuç yoksa ne gösterilecek (öneri, yazım düzeltmesi), yakın eşleşmelerin gösterilip gösterilmeyeceği, son aramaların hatırlanıp hatırlanmayacağı.
- **Nerede karşına çıkar:** Her içerik yoğun sitede.
- **Örnek kullanım:** "Arama sonucu boşsa 'bunu mu demek istediniz' ve popüler aramaları gösterelim; boş ekran bırakmayalım."
- **Karıştırılanlar:** Öneri listesi klavyeyle gezilebilmeli ve seçim ekran okuyucuya duyurulmalıdır (6.4). Ayrıca arama alanının erişilebilir bir etiketi olmalıdır — sadece büyüteç ikonu yetmez.
- **İlgili terimler:** Empty state (7.9), Command palette (7.2), Filter

### Bulk actions

- **Terim (İngilizce):** Bulk actions, row actions, selection mode
- **Türkçesi:** Toplu işlemler, satır eylemleri
- **Tanım:** Birden fazla satır seçip hepsine birden işlem yapma; veya tek bir satıra özel eylemler.
- **Ne işe yarar / neden var:** Yönetim arayüzlerinde zaman kazandırır. Tasarım kararları: seçim yapılınca eylem çubuğunun nerede belireceği, kaç öğe seçildiğinin gösterilmesi, "tümünü seç"in sadece bu sayfayı mı yoksa tüm sonuçları mı kapsadığının açıkça yazılması.
- **Nerede karşına çıkar:** Panel tablolarında ve e-posta arayüzlerinde.
- **Örnek kullanım:** "Seçim yapılınca altta bir eylem çubuğu belirsin: '12 öğe seçildi — Sil, Taşı, Dışa aktar'."
- **Karıştırılanlar:** Toplu silme geri alınamaz olduğunda onay gerekir (7.8, confirm dialog); tek satır silmede geri al daha uygundur.
- **İlgili terimler:** Table, Confirm dialog (7.8), Checkbox (7.11)

---

## 7.11 Form parçaları

Formlar, dönüşümün ve erişilebilirliğin aynı anda kritik olduğu yerdir (6.7). Parçaların adlarını bilmek, hangi kontrolün hangi işe uygun olduğunu tartışabilmek demektir.

### Input

- **Terim (İngilizce):** Input, text field
- **Türkçesi:** Metin alanı
- **Tanım:** Tek satırlık metin girişi.
- **Ne işe yarar / neden var:** Formun temel yapı taşı. Türü (`email`, `tel`, `number`, `password`) belirtildiğinde mobilde doğru klavye açılır — bu, küçük ama gerçek bir kullanılabilirlik kazancıdır.
- **Nerede karşına çıkar:** Her formda.
- **Örnek kullanım:** "Telefon alanına doğru tip verelim; mobilde harf klavyesi açılıyor."
- **Karıştırılanlar:** Etiket, yardımcı metin ve placeholder ayrımı için 4.9'a bak — placeholder etiket yerine kullanılmaz.
- **İlgili terimler:** Textarea, Label (4.9), Autocomplete (6.7)

### Textarea

- **Terim (İngilizce):** Textarea
- **Türkçesi:** Çok satırlı metin alanı
- **Tanım:** Uzun metin girişi için çok satırlı alan.
- **Ne işe yarar / neden var:** Beklenen içeriğin uzunluğunu görsel olarak bildirir: küçük bir kutu kısa cevap, büyük bir kutu uzun cevap bekler. Karakter sınırı varsa sayaç gösterilmelidir.
- **Nerede karşına çıkar:** Mesaj, açıklama, yorum alanlarında.
- **Örnek kullanım:** "Textarea içeriğe göre büyüsün ve 500 karakter sınırını sayaçla gösterelim."
- **İlgili terimler:** Input, Helper text (4.9)

### Select vs Combobox

- **Terim (İngilizce):** Select (dropdown list), combobox
- **Türkçesi:** Seçim kutusu, aranabilir seçim kutusu
- **Tanım:** **Select** sabit bir listeden seçim yaptırır. **Combobox** aynı işi yapar ama kullanıcı yazarak arayabilir ve bazen kendi değerini ekleyebilir.
- **Ne işe yarar / neden var:** Kural pratik: **yaklaşık 7-10 seçeneğe kadar select, üstünde combobox.** 200 ülkelik bir listede kaydırmak yerine yazmak çok daha hızlıdır. Çok az seçenek varsa (2-4) radio daha iyidir çünkü hepsi görünür kalır.
- **Nerede karşına çıkar:** Her formda.
- **Örnek kullanım:** "Ülke seçimini combobox yapalım; select'te 200 öğe arasında kaydırıyorlar."
- **Karıştırılanlar:** *Select* (form alanı, değer seçer) ≠ *dropdown menu* (7.8, eylem listesi). Ayrıca özel yazılmış combobox'lar erişilebilirlik açısından risklidir; test edilmiş bir kütüphane tercih edilmelidir (9.5).
- **İlgili terimler:** Dropdown (7.8), Radio, Search

### Checkbox, Radio, Switch

- **Terim (İngilizce):** Checkbox, radio button, switch (toggle)
- **Türkçesi:** Onay kutusu, seçim düğmesi, anahtar
- **Tanım:** Üçü de seçim yaptırır ama farklı işler için:
  - **Checkbox** — birden fazlası seçilebilir, veya tek bir şeyin açık/kapalı olduğunu belirtir. Formun gönderilmesiyle etkili olur.
  - **Radio** — birbirini dışlayan seçeneklerden **tam olarak biri** seçilir.
  - **Switch** — bir ayarı **anında** açar veya kapatır; kaydet butonu gerektirmez.
- **Ne işe yarar / neden var:** Yanlış kontrol seçmek beklenti hatası üretir. Bir ayar ekranında checkbox kullanmak, kullanıcının kaydet butonu aramasına yol açar; formda switch kullanmak ise değişikliğin anında kaydedildiği izlenimini verir.
- **Nerede karşına çıkar:** Her formda ve ayar ekranında.
- **Örnek kullanım:** "Ayarlar sayfasında switch kullanalım — anında kaydediliyor. Kayıt formundaki 'şartları kabul ediyorum' checkbox kalsın."
- **Karıştırılanlar:** Switch'in hangi durumda olduğu **sadece renkle** anlaşılmamalıdır (6.6); konum ve tercihen bir etiket de gerekir. Radio grupları `fieldset`/`legend` ile gruplanmalıdır (6.7).
- **İlgili terimler:** Billing toggle (7.6), Form validation, Use of color (6.6)

### Slider

- **Terim (İngilizce):** Slider, range slider
- **Türkçesi:** Kaydırıcı
- **Tanım:** Bir aralıktan değer seçilen sürgü. Çift tutamaçlı olanı **range slider**'dır (fiyat aralığı gibi).
- **Ne işe yarar / neden var:** Kesin değerin önemli olmadığı, göreli ayarlarda iyi çalışır (ses, parlaklık). Kesin değer gerekiyorsa yanına bir sayı alanı da konmalıdır.
- **Nerede karşına çıkar:** Filtrelerde ve ayarlarda.
- **Örnek kullanım:** "Fiyat filtresine range slider koyalım ama yanına iki sayı alanı da ekleyelim."
- **Karıştırılanlar:** Sürükleme gerektirir; WCAG 2.2'nin **Dragging Movements** ölçütü (6.2) gereği ok tuşlarıyla veya butonlarla da ayarlanabilmelidir.
- **İlgili terimler:** Filter (7.10), Dragging Movements (6.2)

### Stepper

- **Terim (İngilizce):** Stepper (number input, quantity selector)
- **Türkçesi:** Artır/azalt kontrolü
- **Tanım:** Bir sayıyı artı/eksi butonlarıyla değiştiren kontrol.
- **Ne işe yarar / neden var:** Küçük sayısal ayarlarda (adet, kişi sayısı) hızlıdır. Butonlar dokunma hedefi boyutunu (6.6) karşılamalıdır — bu kontrolde en sık ihlal edilen kuraldır.
- **Nerede karşına çıkar:** Sepet, rezervasyon, sipariş ekranlarında.
- **Örnek kullanım:** "Adet stepper'ının butonları 24px'in altında; dolgu ekleyip 40×40 yapalım."
- **Karıştırılanlar:** *Stepper* (sayı kontrolü) ≠ *step indicator* (çok adımlı formdaki ilerleme göstergesi). Aynı kelime iki farklı şey için kullanılır; bağlamdan ayırt et.
- **İlgili terimler:** Target size (6.6), Multi-step form

### Date picker

- **Terim (İngilizce):** Date picker, date range picker, time picker
- **Türkçesi:** Tarih seçici
- **Tanım:** Takvim arayüzüyle tarih seçtiren bileşen.
- **Ne işe yarar / neden var:** Tarih formatı karmaşasını önler (GG/AA/YYYY mi AA/GG/YYYY mi). Ama takvim tek yol olmamalıdır: **elle yazma da mümkün olmalıdır** — bilinen bir tarihi yazmak, takvimde aylarca geri gitmekten çok hızlıdır.
- **Nerede karşına çıkar:** Rezervasyon, filtreleme, raporlama ekranlarında.
- **Örnek kullanım:** "Date picker'a yazarak giriş de ekleyelim; doğum tarihi için takvimde 30 yıl geri gitmek işkence."
- **Karıştırılanlar:** Erişilebilirlik açısından en zor bileşenlerden biridir; sıfırdan yazmak yerine test edilmiş bir kütüphane kullanmak neredeyse her zaman doğrudur.
- **İlgili terimler:** Booking widget (7.7), Input, Combobox

### File upload

- **Terim (İngilizce):** File upload, dropzone, file picker
- **Türkçesi:** Dosya yükleme
- **Tanım:** Dosya seçme veya sürükleyip bırakma bileşeni.
- **Ne işe yarar / neden var:** Tasarımda cevaplanması gereken sorular çoktur: hangi formatlar ve maksimum boyut kabul ediliyor (**önceden** yazılmalı, hata mesajında değil), yükleme ilerlemesi nasıl gösteriliyor, yüklenen dosya nasıl kaldırılıyor, birden fazla dosya destekleniyor mu.
- **Nerede karşına çıkar:** Profil, form ve içerik yükleme ekranlarında.
- **Örnek kullanım:** "Kabul edilen formatları ve 10MB sınırını alanın altına baştan yazalım."
- **Karıştırılanlar:** Sürükle-bırak tek yol olamaz; tıklayarak dosya seçme de olmalıdır (6.2, Dragging Movements).
- **İlgili terimler:** Progress indicator (7.9), Error message (4.9)

### Multi-step form

- **Terim (İngilizce):** Multi-step form, wizard, step indicator
- **Türkçesi:** Çok adımlı form, sihirbaz
- **Tanım:** Uzun bir formun adımlara bölünmesi ve ilerlemenin bir göstergeyle sunulması.
- **Ne işe yarar / neden var:** Bilişsel yükü azaltır (4.7) ve tamamlama oranını artırır: 20 alanlı tek bir sayfa korkutur, dört adımda beşerli alan yönetilebilir görünür. İlerleme göstergesi kaç adım kaldığını söyler.
- **Nerede karşına çıkar:** Kayıt, ödeme ve onboarding akışlarında.
- **Örnek kullanım:** "Kayıt formunu üç adıma bölelim ve üstte step indicator gösterelim."
- **Karıştırılanlar:** Girilen veri adımlar arasında **kaybolmamalıdır** ve geri dönülebilmelidir. Ayrıca aynı bilgi tekrar istenmemelidir (6.2, Redundant Entry). Adım değişiminde odak yönetimi gerekir (6.5).
- **İlgili terimler:** Progress indicator (7.9), Onboarding (7.12), Focus management (6.5)

### Form validation

- **Terim (İngilizce):** Form validation, client-side / server-side validation
- **Türkçesi:** Form doğrulama
- **Tanım:** Girilen verinin kurallara uygunluğunun kontrol edilmesi.
- **Ne işe yarar / neden var:** İkisi de gereklidir ve farklı işler görür: **client-side** hızlı geri bildirim için (deneyim), **server-side** güvenlik için (1.6). Client-side doğrulama atlanabileceği için ona güvenilemez.
- **Nerede karşına çıkar:** Her formda.
- **Örnek kullanım:** "Doğrulama hem client hem server tarafında olsun; client atlanabilir."
- **Karıştırılanlar:** Gönder butonunu doğrulama geçilene kadar **devre dışı bırakmak** yaygın ama tartışmalı bir kalıptır: kullanıcı neyin eksik olduğunu anlamaz. Daha iyi yaklaşım butonu aktif tutup, basıldığında eksikleri işaretlemek ve ilk hatalı alana odaklanmaktır.
- **İlgili terimler:** Inline validation (7.8), Input validation (13.7), Error message (4.9)

---

## 7.12 Uygulama içi ekranlar

Giriş yapılmış kullanıcının gördüğü ekranların kalıpları.

### Dashboard

- **Terim (İngilizce):** Dashboard
- **Türkçesi:** Kontrol paneli / gösterge paneli
- **Tanım:** Önemli bilgilerin ve kısayolların bir arada özetlendiği ana ekran.
- **Ne işe yarar / neden var:** Kullanıcının "durum ne?" sorusuna hızlı cevap verir. En sık yapılan hata, her şeyi göstermeye çalışmaktır: iyi bir dashboard **karar değiştirecek** birkaç şeyi gösterir, elde olan tüm veriyi değil. Boş durumu (7.9) burada özellikle önemlidir — yeni kullanıcı boş bir dashboard görür.
- **Nerede karşına çıkar:** Her SaaS ve panel ürününde.
- **Örnek kullanım:** "Dashboard'da 12 kart var; üçe indirip gerisini ilgili sayfalara taşıyalım."
- **İlgili terimler:** Widget, Empty state (7.9), Chart

### Widget

- **Terim (İngilizce):** Widget (dashboard card, module, tile)
- **Türkçesi:** Bileşen kutusu
- **Tanım:** Dashboard'daki tek bir bilgi bloğu: bir sayı, bir grafik, bir mini liste.
- **Ne işe yarar / neden var:** Dashboard'ı parçalara ayırır ve her parçanın kendi yükleme, boş ve hata durumu olmasını sağlar — biri başarısız olduğunda tüm ekran çökmesin diye.
- **Nerede karşına çıkar:** Panellerde.
- **Örnek kullanım:** "Her widget'ın kendi skeleton ve hata durumu olsun; biri patlayınca dashboard komple boş kalmasın."
- **İlgili terimler:** Dashboard, Card (7.10), Error state (7.9)

### Onboarding

- **Terim (İngilizce):** Onboarding
- **Türkçesi:** Karşılama / alıştırma akışı
- **Tanım:** Yeni kullanıcının ürünü ilk kez kullanmaya başladığı süreç.
- **Ne işe yarar / neden var:** Kullanıcının ilk değeri görmesine kadar geçen süreyi kısaltır — bu süre uzarsa kullanıcı geri dönmez. En iyi onboarding, ürünü anlatan değil, kullanıcıya **ilk gerçek işini yaptıran** onboarding'dir.
- **Nerede karşına çıkar:** Her SaaS ürününde.
- **Örnek kullanım:** "Onboarding'i beş slaytlık tanıtım yerine 'ilk projeni oluştur' akışına çevirelim."
- **İlgili terimler:** Empty state (7.9), Product tour, Checklist

### Product tour / Coachmark

- **Terim (İngilizce):** Product tour, walkthrough, coachmark, hotspot, tooltip tour
- **Türkçesi:** Ürün turu, ipucu işaretleri
- **Tanım:** Arayüzdeki öğelerin üzerine sırayla açılan ipucu balonlarıyla yapılan tanıtım. **Coachmark** tek bir öğeyi işaret eden ipucudur.
- **Ne işe yarar / neden var:** Yeni özellikleri duyurmak için kullanılır. Sınırlıdır: kullanıcı genelde hepsini atlar ve atlamayanlar da unutur. **Bağlama gömülü ipuçları** (kullanıcı o özelliğe geldiğinde gösterilen tek ipucu) daha etkilidir.
- **Nerede karşına çıkar:** SaaS ürünlerinde ve özellik lansmanlarında.
- **Örnek kullanım:** "Yedi adımlık tur yerine, kullanıcı o ekrana ilk geldiğinde tek bir coachmark gösterelim."
- **Karıştırılanlar:** Turlar modal davranışı gösterir; odak yönetimi ve atlanabilirlik gerekir (6.5).
- **İlgili terimler:** Onboarding, Tooltip (7.8)

### Onboarding checklist

- **Terim (İngilizce):** Onboarding checklist, getting started checklist
- **Türkçesi:** Başlangıç kontrol listesi
- **Tanım:** Yeni kullanıcının tamamlaması gereken adımların, ilerleme göstergeli listesi.
- **Ne işe yarar / neden var:** Tamamlanmamış işleri görünür tutar ve tamamlama isteği yaratır. Ürün turundan daha etkilidir çünkü kullanıcı kendi hızında ilerler ve her adım gerçek bir iş yaptırır.
- **Nerede karşına çıkar:** SaaS panellerinde, genelde dashboard'ın üstünde veya bir kenarda.
- **Örnek kullanım:** "Dashboard'a dört adımlık checklist koyalım; tamamlanınca kaybolsun."
- **İlgili terimler:** Onboarding, Progress indicator (7.9), Empty state (7.9)

### Settings

- **Terim (İngilizce):** Settings, preferences
- **Türkçesi:** Ayarlar
- **Tanım:** Kullanıcının ürünü kendine göre yapılandırdığı ekran.
- **Ne işe yarar / neden var:** Tasarım zorluğu, **gruplamadır** (4.3): hesap, profil, bildirimler, güvenlik, faturalama, ekip, entegrasyonlar. Ayrıca çoğu ayar anında kaydedilir (switch, 7.11) ve bu durumda kaydedildiğinin bildirilmesi gerekir (4.6).
- **Nerede karşına çıkar:** Her uygulamada.
- **Örnek kullanım:** "Ayarları yedi sekmeye bölelim; şu an tek sayfada 40 kontrol var."
- **İlgili terimler:** Switch (7.11), IA (4.3), Tabs (7.5)

### Profile / Account

- **Terim (İngilizce):** Profile, account
- **Türkçesi:** Profil, hesap
- **Tanım:** Profile = kullanıcının başkalarına görünen bilgileri. Account = kimlik, güvenlik ve faturalama gibi kişisel yönetim bilgileri.
- **Ne işe yarar / neden var:** İkisinin ayrılması, kullanıcının "bu bilgi görünüyor mu?" endişesini giderir. Hangi alanın kime görünür olduğu açıkça belirtilmelidir.
- **Nerede karşına çıkar:** Kullanıcı hesaplı her üründe.
- **Örnek kullanım:** "Profil ve hesap ayarlarını ayıralım; kullanıcı e-postasının herkese görünüp görünmediğini bilmiyor."
- **İlgili terimler:** Settings, Avatar (7.13), Auth (Bölüm 12)

### Notification center

- **Terim (İngilizce):** Notification center, inbox
- **Türkçesi:** Bildirim merkezi
- **Tanım:** Kullanıcıya gelen bildirimlerin toplandığı panel; genelde zil ikonu ve sayaç rozetiyle.
- **Ne işe yarar / neden var:** Kaçırılan bildirimlerin toplandığı yer. Tasarım kararları: okundu/okunmadı ayrımı, gruplama, "tümünü okundu işaretle", boş durumu ve bildirim tercihlerine giden bağlantı.
- **Nerede karşına çıkar:** İşbirliği ve sosyal ürünlerde.
- **Örnek kullanım:** "Bildirimleri türe göre gruplayalım ve 'tümünü okundu işaretle' ekleyelim."
- **İlgili terimler:** Badge (7.10), Activity feed, Drawer (7.8)

### Activity feed

- **Terim (İngilizce):** Activity feed, audit log, changelog (in-app)
- **Türkçesi:** Etkinlik akışı
- **Tanım:** Bir kaynakta veya hesapta olan biteni kronolojik listeleyen akış.
- **Ne işe yarar / neden var:** "Kim ne zaman ne yaptı" sorusunu cevaplar. Ekip ürünlerinde güven ve şeffaflık üretir; kurumsal ürünlerde denetim (audit) gerekliliğidir (11.11).
- **Nerede karşına çıkar:** İşbirliği araçlarında ve yönetim panellerinde.
- **Örnek kullanım:** "Proje sayfasına activity feed ekleyelim; kim neyi değiştirdi görünsün."
- **İlgili terimler:** Notification center, Audit log (11.11), Timeline (7.5)

### Kanban board

- **Terim (İngilizce):** Kanban board (board view)
- **Türkçesi:** Pano görünümü
- **Tanım:** Öğelerin sütunlar hâlinde, durumlarına göre dizildiği ve sürüklenerek taşınabildiği görünüm.
- **Ne işe yarar / neden var:** Durum bazlı işleri görselleştirir (3.4). Aynı verinin liste ve takvim görünümleri de sunulabilir; kullanıcı tercihine göre seçer.
- **Nerede karşına çıkar:** Proje yönetimi ve CRM ürünlerinde.
- **Örnek kullanım:** "Aynı veriyi hem liste hem board görünümünde sunalım; kullanıcı seçsin."
- **Karıştırılanlar:** Sürükle-bırak tek yol olamaz; durumu değiştirmenin sürüklemesiz bir yolu bulunmalıdır (6.2, Dragging Movements).
- **İlgili terimler:** Kanban (3.4), Dragging Movements (6.2)

---

## 7.13 Küçük parçalar

Adı sık geçen ama üzerinde durulmayan bileşenler.

### Avatar

- **Terim (İngilizce):** Avatar
- **Türkçesi:** Profil görseli
- **Tanım:** Bir kişiyi veya kurumu temsil eden küçük, genelde dairesel görsel.
- **Ne işe yarar / neden var:** Kişiyi hızlı tanıtır. Fotoğraf yoksa bir **fallback** gerekir: baş harfler, üretilmiş bir renk veya varsayılan ikon. Bu fallback tasarlanmazsa kırık görsel ikonu çıkar.
- **Nerede karşına çıkar:** Her kullanıcılı üründe.
- **Örnek kullanım:** "Fotoğrafı olmayan kullanıcılar için baş harfli fallback tasarlayalım; renk isimden türetilsin."
- **İlgili terimler:** Avatar stack (7.4), Profile (7.12)

### Divider

- **Terim (İngilizce):** Divider, separator, rule
- **Türkçesi:** Ayırıcı çizgi
- **Tanım:** İçerik grupları arasına konan ince çizgi.
- **Ne işe yarar / neden var:** Grupları ayırır. Ama **çoğu zaman boşluk daha iyi bir ayırıcıdır** (4.8): çizgi görsel gürültü ekler, boşluk eklemez. Çizgi, boşluğun yetmediği yoğun arayüzlerde (tablo satırları, ayar listeleri) anlamlıdır.
- **Nerede karşına çıkar:** Listelerde, menülerde, formlarda.
- **Örnek kullanım:** "Bu çizgileri kaldırıp aralığı 16'dan 32'ye çıkaralım; ayrım boşlukla da okunuyor."
- **İlgili terimler:** White space (4.8), Spacing scale (5.5)

### Icon button

- **Terim (İngilizce):** Icon button
- **Türkçesi:** İkon buton
- **Tanım:** Yalnızca ikondan oluşan buton.
- **Ne işe yarar / neden var:** Yer kazandırır. Bedeli: **anlam belirsizliği ve erişilebilirlik riski.** Erişilebilir adı zorunludur (6.4), tooltip önerilir ve dokunma hedefi 24×24'ün altına düşmemelidir (6.6). Yaygın olmayan ikonlarda metin etiket kullanmak daha güvenlidir.
- **Nerede karşına çıkar:** Araç çubuklarında, tablo satırlarında, header'da.
- **Örnek kullanım:** "İkon butonlara erişilebilir ad ve tooltip ekleyelim; ikon 16px kalsın, tıklama alanı 40px olsun."
- **İlgili terimler:** Accessible name (6.4), Target size (6.6), Icon set (5.7)

### FAB

- **Terim (İngilizce):** FAB — Floating Action Button
- **Türkçesi:** Yüzen eylem butonu
- **Tanım:** Ekranın (genelde sağ alt) köşesinde yüzen dairesel birincil eylem butonu.
- **Ne işe yarar / neden var:** Ekranın ana eylemini her an erişilebilir tutar. Material Design'dan yaygınlaşan bir kalıptır.
- **Nerede karşına çıkar:** Mobil uygulamalarda ve mobil web'de.
- **Örnek kullanım:** "Mobilde 'Yeni ekle' için FAB koyalım; liste uzun, üstteki butona dönmek zor."
- **Karıştırılanlar:** İçeriğin son satırını kapatabilir; alt boşluk bırakılmalıdır. Ayrıca yalnızca ikonluysa erişilebilir adı gerekir.
- **İlgili terimler:** Sticky CTA (7.7), Icon button, CTA (7.3)

### Back to top

- **Terim (İngilizce):** Back to top button
- **Türkçesi:** Başa dön butonu
- **Tanım:** Uzun sayfalarda, sayfanın başına döndüren küçük buton.
- **Ne işe yarar / neden var:** Çok uzun sayfalarda kaydırma yorgunluğunu azaltır. Genelde belirli bir kaydırma mesafesinden sonra belirir.
- **Nerede karşına çıkar:** Blog, dokümantasyon ve uzun listelerde.
- **Örnek kullanım:** "İki ekran boyu kaydırınca back to top belirsin, sağ altta."
- **İlgili terimler:** Sticky CTA (7.7), FAB

### Scroll indicator

- **Terim (İngilizce):** Scroll indicator, reading progress bar
- **Türkçesi:** Okuma ilerleme çubuğu
- **Tanım:** Sayfanın ne kadarının okunduğunu gösteren ince çubuk, genelde üstte.
- **Ne işe yarar / neden var:** Uzun içerikte "daha ne kadar var?" sorusunu cevaplar ve tamamlama isteğini artırır.
- **Nerede karşına çıkar:** Blog ve makale sayfalarında.
- **Örnek kullanım:** "Makale sayfasına üstte 3px'lik okuma ilerleme çubuğu ekleyelim."
- **İlgili terimler:** Progress indicator (7.9), Sticky header (7.2)

### Blockquote / Code block / kbd

- **Terim (İngilizce):** Blockquote, code block, inline code, `kbd`
- **Türkçesi:** Alıntı bloğu, kod bloğu, tuş göstergesi
- **Tanım:** Blockquote = öne çıkarılmış alıntı. Code block = kod parçası, genelde renklendirilmiş ve kopyalanabilir. `kbd` = klavye tuşunu gösteren küçük etiket (`Ctrl` `K` gibi).
- **Ne işe yarar / neden var:** İçerik türlerini görsel olarak ayırır ve okunabilirliği artırır. Kod bloğunda **kopyala butonu** neredeyse zorunlu bir beklentidir.
- **Nerede karşına çıkar:** Blog, dokümantasyon ve yardım içeriklerinde.
- **Örnek kullanım:** "Kod bloklarına kopyala butonu ve dil etiketi ekleyelim."
- **İlgili terimler:** Callout (7.5), Micro-interaction (5.9)

---

## 7.14 Kendini test et

Bu test 7A ve 7B'nin tamamını kapsar.

**1.** Header ile hero arasındaki fark nedir?

**2.** Bir sitede kaç farklı nav olabilir? En az üçünü adlandır.

**3.** Bir hero'nun cevaplaması gereken üç soru nedir?

**4.** Bir ekranda kaç birincil CTA olmalı? İkinci bir eylem gerekiyorsa ne yapılır?

**5.** Feature grid'in en yaygın jenerikleşme biçimi nedir ve nasıl kaçınılır?

**6.** 01/02/03 numaralandırması ne zaman uygundur, ne zaman değildir?

**7.** Carousel'e kritik mesaj koymak neden risklidir? Otomatik dönen carousel hangi WCAG ölçütüne tabidir?

**8.** Logo cloud'da logoların "optik olarak dengelenmesi" ne demektir?

**9.** Cookie banner tasarımında en kritik kural nedir ve ihlali ne olarak adlandırılır?

**10.** Modal ile drawer arasındaki fark nedir? Bir liste içindeki öğenin detayını göstermek için hangisi daha uygun ve neden?

**11.** Tooltip ile popover arasındaki fark nedir? İçinde link olan bir açıklama hangisi olmalı?

**12.** Toast'a hangi bilgi konmaz ve neden?

**13.** Alert banner ile announcement bar arasındaki fark nedir?

**14.** Confirm dialog yerine çoğu durumda daha iyi olan alternatif nedir ve neden?

**15.** Veri gösteren bir ekranın kaç hâli tasarlanmalı? Hepsini say.

**16.** Üç farklı boş durum türü nedir ve her biri nasıl farklı tasarlanır?

**17.** Skeleton'ın spinner'a göre iki avantajı nedir?

**18.** Badge, chip ve tag arasındaki fark nedir? Uygulanmış filtreler hangisi olmalı?

**19.** Pagination ile infinite scroll arasındaki takas nedir? Infinite scroll'un erişilebilirlik sorunu nedir?

**20.** Select yerine combobox ne zaman kullanılır? Çok az seçenek varsa hangisi tercih edilir?

**21.** Checkbox, radio ve switch arasındaki fark nedir? Ayarlar sayfasında hangisi kullanılır?

**22.** Gönder butonunu doğrulama geçilene kadar devre dışı bırakmak neden tartışmalıdır?

**23.** İyi bir onboarding'in, ürünü anlatan bir turdan farkı nedir?

**24.** Divider yerine çoğu zaman ne kullanmak daha iyidir ve neden?

**25.** İkon buton kullanırken zorunlu olan üç şey nedir?

---

### Cevaplar

**1.** Header sayfanın en üstündeki, logo ve navigasyonu barındıran ince şerittir. Hero onun altındaki, ana mesajı ve birincil eylemi barındıran büyük tanıtım alanıdır.

**2.** **Global nav** (her sayfada aynı ana menü), **local nav** (bir bölüm içindeki alt menü), **utility nav** (giriş, dil, arama gibi yardımcı bağlantılar), **footer nav** (alttaki geniş bağlantı listesi).

**3.** Bu ne? Kimin için? Şimdi ne yapmalıyım? Üçünü cevaplamayan hero işini yapmıyordur.

**4.** **Tek** birincil CTA. İkinci eylem gerekiyorsa ikincil stilde verilir (outline, ghost veya link). İki dolu buton yan yana konduğunda kullanıcı hangisinin asıl olduğunu anlamaz.

**5.** Eşit üç sütunda ikon + başlık + iki satır gri metin. Kaçınma yolları: kartları eşit ağırlıkta yapmamak (bento grid), her karta gerçek görsel/ekran görüntüsü koymak, sayıyı üçe zorlamak yerine içeriğin gerektirdiği kadar yapmak, alternating section'a geçmek.

**6.** Gerçekten **sıralı** içerikte uygundur (nasıl çalışır, süreç adımları). Sırasız özellikleri numaralandırmak, okuyucuya olmayan bir sıra vaat eder ve yaygın bir jenerikleşme kalıbıdır.

**7.** İlk slayttan sonrasının görülme oranı hızla düşer; kritik mesajı carousel'e koymak onu gizlemekle aynı şeydir. Otomatik dönenler **Pause, Stop, Hide** ölçütüne (SC 2.2.2) tabidir — durdurma kontrolü gerekir.

**8.** Logolar farklı biçim ve ağırlıkta olduğu için matematiksel olarak aynı boyut, görsel olarak eşit görünmez. Optik denge, her logonun **görsel olarak** eşit ağırlıkta durması için tek tek boyut ayarı yapmaktır (genelde tek renge indirmekle birlikte).

**9.** **Reddetmek, kabul etmek kadar kolay olmalıdır.** "Tümünü kabul et" büyük ve renkli, "Reddet" küçük bir bağlantıysa bu bir **dark pattern**'dir ve bazı düzenlemelerde aykırı kabul edilebilir.

**10.** Modal arkadaki içerikle etkileşimi engeller ve bağlamı kaybettirir; drawer kenardan açılır ve arkadaki liste görünür kalır. Liste içindeki bir öğenin detayı için **drawer** daha uygundur, çünkü kullanıcı listedeki yerini kaybetmez.

**11.** Tooltip hover/focus ile açılır, kısa metin içerir, **etkileşimli içerik alamaz**. Popover tıklamayla açılır ve içinde link, buton, form barındırabilir. İçinde link olan açıklama **popover** olmalıdır — tooltip'teki linke fareyle gidilemez.

**12.** **Kritik bilgi ve hata mesajları.** Toast kaybolur, geri getirilemez ve kaçırılabilir. Kalıcı olması gereken bilgi alert banner'a konur.

**13.** Alert banner sistem durumunu bildirir, kalıcıdır ve genelde bir eylem gerektirir (ödeme başarısız, e-posta doğrulanmadı). Announcement bar pazarlama amaçlıdır, header'ın üstünde durur ve kapatılabilir olmalıdır.

**14.** **Geri alınabilir işlem** (undo): işlemi hemen yap, "Geri al" seçenekli bir toast göster. Daha iyidir çünkü sürekli onay sormak kullanıcıyı otomatik "Evet"e basmaya alıştırır ve diyaloğun koruma işlevi ölür.

**15.** En az dört: **yükleniyor, boş, hata, dolu.** Beşincisi sık gerekir: **kısmi/az veri**.

**16.** (1) **İlk kullanım** — henüz hiç veri yok; onboarding fırsatıdır, ne yapılacağını anlat ve birincil eylemi göster. (2) **Kullanıcı temizledi** — hepsi tamamlandı/silindi; olumlu mesaj uygundur. (3) **Sonuç yok** — arama/filtre boş döndü; filtre temizleme veya öneri sunulmalı, kullanıcı çıkmazda bırakılmamalı.

**17.** (1) Algılanan bekleme süresini kısaltır — kullanıcı boş ekrana değil oluşmakta olan bir yapıya bakar. (2) Yer önceden ayrıldığı için içerik geldiğinde yerleşim kaymaz (CLS önlenir).

**18.** **Badge** durumu veya sayıyı gösterir, tıklanmaz ("Yeni", bildirim sayacı). **Chip** kullanıcının seçtiği/kaldırabildiği öğedir, × içerir. **Tag** içeriği sınıflandırır, tıklanınca o etikete ait içeriğe götürür. Uygulanmış filtreler **chip** olmalıdır.

**19.** Pagination konum duygusu, kontrol ve paylaşılabilir URL verir; infinite scroll keşif akışlarında daha doğal hisseder ama footer'a ulaşmayı imkânsızlaştırır ve konum duygusunu kaybettirir. Erişilebilirlik sorunu: **klavye kullanıcısı sayfanın sonuna asla ulaşamaz**, ayrıca yeni içeriğin geldiği ekran okuyucuya duyurulmalıdır.

**20.** Yaklaşık **7-10 seçeneğin üstünde** combobox kullanılır (kullanıcı yazarak arayabilsin). Çok az seçenek varsa (2-4) **radio** tercih edilir, çünkü tüm seçenekler görünür kalır ve tek tıkla seçilir.

**21.** **Checkbox** birden fazlası seçilebilir veya tek bir şeyin açık/kapalı olduğunu belirtir, form gönderilince etkili olur. **Radio** birbirini dışlayan seçeneklerden tam olarak birini seçtirir. **Switch** bir ayarı anında açar/kapatır. Ayarlar sayfasında **switch** kullanılır, çünkü değişiklik anında kaydedilir ve kullanıcı kaydet butonu aramaz.

**22.** Kullanıcı butonun neden pasif olduğunu ve neyin eksik olduğunu anlamaz. Daha iyi yaklaşım: butonu aktif tutmak, basıldığında eksik alanları işaretlemek ve ilk hatalı alana odaklanmak.

**23.** İyi onboarding ürünü **anlatmaz**, kullanıcıya **ilk gerçek işini yaptırır**. Beş slaytlık tanıtım turu genelde atlanır ve unutulur; "ilk projeni oluştur" akışı ise kullanıcıyı ilk değere ulaştırır.

**24.** **Boşluk.** Çizgi görsel gürültü ekler, boşluk eklemez ve Gestalt yakınlık ilkesiyle aynı ayrımı yapar. Çizgi, boşluğun yetmediği yoğun arayüzlerde (tablo satırları, ayar listeleri) anlamlıdır.

**25.** (1) **Erişilebilir ad** (ekran okuyucu için). (2) **Tooltip** veya başka bir görsel açıklama. (3) **Yeterli dokunma hedefi** — ikon küçük kalabilir ama tıklanabilir alan en az 24×24 olmalıdır (dolgu ile büyütülür).

---

**Biten bölüm:** Bölüm 7 — Site anatomisi (7A + 7B tamamlandı)
**Sıradaki bölüm:** Bölüm 8 — Front-end temelleri (yazmak için değil, konuşmak için)
