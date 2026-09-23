---
title: "Geri bildirim katmanı"
sectionNumber: "7.8"
category: "arayuz-anatomisi"
order: 8
cardCount: 11
sourceFile: "07b-site-anatomisi.md"
origin: "material"
flags: []
---
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
