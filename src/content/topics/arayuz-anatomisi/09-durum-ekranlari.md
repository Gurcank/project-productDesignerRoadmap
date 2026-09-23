---
title: "Durum ekranları"
sectionNumber: "7.9"
category: "arayuz-anatomisi"
order: 9
cardCount: 10
sourceFile: "07b-site-anatomisi.md"
origin: "material"
flags: []
---
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
