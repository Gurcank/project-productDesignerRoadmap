# Bölüm 21 — "Bir sitede olması gerekenler" kontrol listesi

Bu bölüm okunmak için değil, **kullanılmak için** yazıldı. Kopyala, projene yapıştır, kutucukları işaretle.

**Nasıl kullanılır:**

- **Her madde her projede geçerli değildir.** Tek sayfalık bir tanıtım sitesi ile üyelikli bir ürün aynı listeye tabi olamaz. Geçerli olmayan maddeyi silme — **"geçerli değil" diye işaretle.** Sebebi şu: silinen madde unutulur, işaretlenen madde bilinçli bir karar olur.
- **Maddelerin yanındaki numaralar** ilgili bölüme referanstır. Bir maddeyi anlamıyorsan oraya bak.
- **🔴 ile işaretli maddeler bloke edicidir** — tamamlanmadan yayına çıkılmaz. Diğerleri önemlidir ama pazarlık edilebilir.
- Listeyi **Faz 8'de** (20.9) bir kez, **Faz 9'da** (20.10) bir kez daha geçmek işe yarar.

> **Hukuki uyarı:** 21.7'deki maddeler genel bilgilendirmedir, hukuki tavsiye değildir. Projenin gerçek yükümlülükleri sektöre, iş modeline ve hedef pazara göre değişir; avukat görüşü al.

---

## 21.1 Teknik kontrol listesi

### Temel işleyiş
- [ ] 🔴 Site tüm hedef tarayıcılarda açılıyor (NFR'de tanımlanmış olmalı, 2.6)
- [ ] 🔴 Tüm iç bağlantılar çalışıyor, kırık link yok
- [ ] 🔴 Tüm formlar gönderiliyor ve veriler doğru yere ulaşıyor
- [ ] `www` ve `www` olmayan sürümler arasında tek yöne yönlendirme var (8.9, 8.13)
- [ ] Eski URL'ler için kalıcı yönlendirme kurulmuş (8.9) — site yenilemesi yapıldıysa
- [ ] 🔴 404 sayfası tasarlanmış ve çıkış yolu sunuyor (7.9)
- [ ] 500 / hata sayfası tasarlanmış (7.9)
- [ ] Ortam değişkenleri production için doğru ayarlanmış (16.3)
- [ ] Test/örnek veriler temizlenmiş; canlıda lorem ipsum veya "test kullanıcı" yok

### Kod ve depo
- [ ] `.gitignore` doğru yapılandırılmış; `.env` depoda değil (13.6, 15.10)
- [ ] Ana dal korumalı (branch protection, 15.5)
- [ ] CI hattı çalışıyor ve PR'larda zorunlu (16.2, 17.7)
- [ ] Linter, formatter ve tip kontrolü kurulu (17.7)
- [ ] README veya kurulum talimatı var — yeni biri projeyi ayağa kaldırabilir
- [ ] Yapay zekâ talimat dosyası güncel (19.3)

### Veri
- [ ] 🔴 Veri modeli ve migration'lar production'da uygulanmış (11.10)
- [ ] İndeksler kritik sorgular için mevcut (11.5, 11.9)
- [ ] Bağlantı havuzu yapılandırılmış — serverless kullanılıyorsa (11.9)

---

## 21.2 Tasarım ve UX kontrol listesi

### Durum ekranları — en sık atlanan grup
- [ ] 🔴 Veri gösteren her ekranın **yükleniyor** durumu var (7.9)
- [ ] 🔴 Veri gösteren her ekranın **boş** durumu var ve çıkış yolu sunuyor (7.9)
- [ ] 🔴 Veri gösteren her ekranın **hata** durumu var ve "şimdi ne yapmalıyım" diyor (7.9, 4.9)
- [ ] Arama/filtre sonucu boşsa öneri veya filtre temizleme sunuluyor (7.9, 7.10)
- [ ] İlk kullanım boş durumu bir onboarding fırsatı olarak kullanılmış (7.9, 7.12)
- [ ] Başarı durumu sonraki adımı gösteriyor (7.9)

### Bileşen durumları
- [ ] Her etkileşimli öğede default, hover, **focus**, active, disabled durumları tanımlı (6.5)
- [ ] Yükleme sırasında butonlar devre dışı ve durum gösteriyor (7.9, 10.2)
- [ ] Yıkıcı işlemler geri alınabilir veya onay istiyor (4.6, 7.8)

### Hiyerarşi ve tutarlılık
- [ ] Her ekranda **tek** birincil CTA var (7.3, 4.8)
- [ ] Boşluklar spacing ölçeğinden; ölçek dışı değer yok (5.5)
- [ ] Renkler token'dan; ham hex yok (5.2)
- [ ] Tipografi ölçekten; ara boyut kullanılmamış (5.3)
- [ ] Tek ikon seti kullanılmış (5.7)
- [ ] Aktif menü öğesi işaretli ve sadece renkle değil (7.2, 6.6)

### Responsive
- [ ] 🔴 375px genişlikte taşma yok
- [ ] 🔴 768px ve 1440px'te düzen bozulmuyor
- [ ] Çok geniş ekranda içerik yayılmıyor (container/max-width var, 5.5)
- [ ] Tablolar mobilde bir stratejiye sahip (kaydırma / kart / gizleme, 7.10)
- [ ] Mobilde birincil eylem hamburger'in dışında (7.2)

### Uç durumlar
- [ ] Çok uzun metinlerde (60+ karakter başlık) düzen bozulmuyor (4.4)
- [ ] Çok kısa/boş içerikte düzen bozulmuyor (4.4)
- [ ] Görsel yüklenmediğinde makul bir yedek var (5.7, 7.13)
- [ ] Uzun listelerde sayfalama veya sanallaştırma var (7.10)

### Metin
- [ ] Buton etiketleri eylemi söylüyor ("Gönder" değil, "Rezervasyonu tamamla", 4.9)
- [ ] Hata mesajları ne olduğunu, neden olduğunu ve ne yapılacağını söylüyor (4.9)
- [ ] Placeholder, label yerine kullanılmamış (4.9)
- [ ] Ton, duruma uygun — hata ekranında şaka yok (4.9)

---

## 21.3 Erişilebilirlik kontrol listesi

Hedef: **WCAG 2.2 Level AA** (6.2). Detaylı rehber Bölüm 6'da.

### Manuel dört kontrol — bunlar araçla yapılamaz
- [ ] 🔴 **Klavye turu:** Fareyi bırakıp Tab/Enter/Space/ok tuşlarıyla ana akış tamamlanabiliyor (6.5, 6.9)
- [ ] 🔴 **Odak görünürlüğü:** Odaklanılan her öğede görünür bir gösterge var (6.5)
- [ ] **%200 zoom:** İçerik kırpılmıyor, üst üste binmiyor (6.6)
- [ ] **Gri tonlama:** Renkten bağımsız olarak her şey anlaşılıyor (6.6)

### Yapı
- [ ] 🔴 Tıklanabilir her öğe gerçek `button` veya `a`; `div` değil (6.3)
- [ ] Başlık hiyerarşisi yapıyı yansıtıyor, seviye atlanmamış (6.3)
- [ ] Sayfada tek `h1` var (6.3)
- [ ] Landmark'lar tanımlı: header, nav, main, footer (6.3)
- [ ] Skip link mevcut ve çalışıyor (6.5)

### Görsel
- [ ] 🔴 Metin kontrastı en az 4.5:1 (büyük metin 3:1) (5.4, 6.6)
- [ ] Arayüz bileşenleri ve odak göstergeleri en az 3:1 (6.6)
- [ ] Anlam sadece renkle taşınmıyor — ikon veya metin de var (6.6)
- [ ] Dokunma hedefleri en az 24×24 CSS pikseli (6.6)

### İçerik
- [ ] Anlamlı görsellerin alt metni var; dekoratifler boş bırakılmış (6.4)
- [ ] İkon butonların erişilebilir adı var (6.4)
- [ ] Form alanları etiketleriyle ilişkilendirilmiş (6.7)
- [ ] Hata mesajları alanla ilişkilendirilmiş ve duyuruluyor (6.4, 6.7)
- [ ] Dinamik değişimler (toast, sonuç sayısı) canlı bölge olarak duyuruluyor (6.4)

### Modal ve hareket
- [ ] Modal açılınca odak içeri taşınıyor, içeride kalıyor, kapanınca geri dönüyor (6.5, 7.8)
- [ ] Esc ile kapanıyor (7.8)
- [ ] `prefers-reduced-motion` destekleniyor (5.9, 6.8)
- [ ] Otomatik hareket eden içerik durdurulabiliyor (6.8, 7.5)
- [ ] Saniyede üçten fazla yanıp sönen içerik yok (6.8)

### Denetim
- [ ] Otomatik tarama (Lighthouse/axe) çalıştırılmış ve kritik bulgular kapatılmış (6.9)
- [ ] Ekran okuyucuyla en az ana akış denenmiş (6.9)
- [ ] Erişilebilirlik beyanı sayfası var (6.2, 13.11)

---

## 21.4 İçerik ve SEO kontrol listesi

### İçerik
- [ ] 🔴 Lorem ipsum veya yer tutucu metin kalmamış
- [ ] Gerçek içerikle tasarım kontrol edilmiş (20.8)
- [ ] Yazım ve dil kontrolü yapılmış
- [ ] İletişim bilgileri doğru ve güncel
- [ ] Tarihler, fiyatlar ve sayılar güncel

### Temel SEO
- [ ] 🔴 Her sayfanın benzersiz `title` etiketi var (8.13)
- [ ] Her sayfanın meta açıklaması var (8.13)
- [ ] 🔴 `robots.txt` production için doğru — **staging'deki "engelle" ayarı taşınmamış** (8.13)
- [ ] `sitemap.xml` üretiliyor ve güncel (8.13)
- [ ] Canonical etiketleri doğru; filtreli sayfalar kopya sayılmıyor (8.13)
- [ ] Başlık hiyerarşisi anlamlı (6.3, 8.13)
- [ ] Görsellerde açıklayıcı alt metin var (6.4, 8.13)
- [ ] URL'ler okunabilir; ID yerine slug kullanılıyor (1.2)

### Paylaşım
- [ ] 🔴 Open Graph etiketleri var: başlık, açıklama, görsel (8.13)
- [ ] OG görseli tasarlanmış ve doğru oranda (8.13, 5.7)
- [ ] Paylaşım önizlemesi gerçekten test edilmiş — bir mesajlaşma uygulamasına link atarak
- [ ] Favicon mevcut ve küçük boyutta okunuyor (8.13)
- [ ] Web app manifest varsa doğru yapılandırılmış (1.7)

### Yapılandırılmış veri
- [ ] Uygunsa structured data eklenmiş (ürün, SSS, breadcrumb, etkinlik) (8.13)

---

## 21.5 Performans kontrol listesi

Hedefler ve eşikler Bölüm 8.12'de.

### Ölçüm
- [ ] 🔴 LCP ≤ 2,5 saniye (8.12)
- [ ] INP ≤ 200 ms (8.12)
- [ ] 🔴 CLS ≤ 0,1 (8.12)
- [ ] Ölçüm gerçekçi koşullarda yapılmış — mobil, kısıtlı ağ, production build (1.8, 8.12)
- [ ] Saha verisi izlemeye alınmış (8.12, 16.11)

### Görseller
- [ ] 🔴 Görseller modern formatta (WebP/AVIF) (5.7, 8.12)
- [ ] Görseller cihaza uygun boyutlarda servis ediliyor (8.12)
- [ ] Ekran dışındaki görseller lazy load ediliyor (8.12)
- [ ] 🔴 Hero görseli lazy load **edilmiyor**, öncelikli yükleniyor (8.12)
- [ ] Görsellerin en-boy oranı tanımlı; yüklenince kayma yok (5.7, 8.12)

### Font ve kod
- [ ] Kullanılmayan font ağırlıkları kaldırılmış (5.3, 8.12)
- [ ] Font yükleme davranışı ayarlanmış; metin görünmez kalmıyor (8.12)
- [ ] Kullanılmayan bağımlılıklar temizlenmiş (8.11)
- [ ] Ağır bileşenler (harita, grafik, 3B) lazy load ediliyor (8.11, 9.6)
- [ ] Performans bütçesi tanımlanmış ve CI'da kontrol ediliyor (17.6)

### Altyapı
- [ ] Statik varlıklar CDN'den servis ediliyor (10.11)
- [ ] Önbellek başlıkları doğru yapılandırılmış (10.11)
- [ ] Sunucu bölgesi hedef kitleye uygun (10.8)

---

## 21.6 Güvenlik kontrol listesi

Detaylar Bölüm 13'te.

### Temel
- [ ] 🔴 HTTPS zorunlu; HTTP'den yönlendirme var (1.3, 13.5)
- [ ] 🔴 SSL sertifikası geçerli ve otomatik yenileniyor (13.5)
- [ ] Karışık içerik (mixed content) uyarısı yok (13.5)
- [ ] Güvenlik başlıkları yapılandırılmış (CSP, clickjacking koruması) (13.3, 13.4)

### Sırlar
- [ ] 🔴 Hiçbir API anahtarı veya sır depoda yok (13.6, 15.10)
- [ ] 🔴 Gizli anahtarlar ön yüz paketine gömülmemiş (13.6)
- [ ] Geçmişte depoya sır girdiyse **iptal edilip yenilenmiş** (13.6)

### Erişim
- [ ] 🔴 Her korumalı istekte sunucu tarafında yetki kontrolü var (13.6, 12.9)
- [ ] IDOR testi yapılmış — başkasının kayıt ID'siyle erişim denenmiş (13.3)
- [ ] BaaS kullanılıyorsa RLS politikaları yazılmış ve test edilmiş (11.12)
- [ ] Çok kiracılı yapıda veri yalıtımı doğrulanmış (12.9)
- [ ] Varsayılan roller en dar yetkiyle başlıyor (13.8)

### Girdi ve kötüye kullanım
- [ ] 🔴 Sunucu tarafında girdi doğrulaması var (13.7)
- [ ] Kullanıcı içeriği güvenli biçimde gösteriliyor (13.7)
- [ ] Hız sınırı uygulanmış — özellikle giriş ve formlarda (10.10)
- [ ] Formlarda spam koruması var (13.9)

### Auth
- [ ] Oturum çerezi httpOnly, Secure ve SameSite (12.3)
- [ ] Şifre sıfırlama sonrası tüm oturumlar sonlandırılıyor (12.8)
- [ ] Kullanıcı sayımı sızıntısı yok — hata mesajları hesap varlığını açık etmiyor (12.8)
- [ ] Şifre politikası güncel rehberliğe uygun; yapıştırma engellenmemiş (12.8)

---

## 21.7 Hukuki kontrol listesi

> Genel bilgilendirmedir, hukuki tavsiye değildir. Yükümlülükler sektöre, iş modeline ve hedef pazara göre değişir.

### Sayfalar
- [ ] 🔴 Gizlilik politikası / aydınlatma metni var ve erişilebilir (13.10, 13.11)
- [ ] Çerez politikası var (13.11)
- [ ] Kullanım şartları var (13.11)
- [ ] E-ticaret ise: mesafeli satış sözleşmesi, iade ve cayma hakkı bilgisi (13.11)
- [ ] E-ticaret ise: ticari unvan, adres ve iletişim bilgileri yayınlanmış (13.11)
- [ ] Erişilebilirlik beyanı var (6.2)

### Onay ve rıza
- [ ] 🔴 Çerez bildirimi var ve **reddetmek kabul etmek kadar kolay** (7.7, 13.10)
- [ ] Zorunlu olmayan çerezler onay alınmadan çalışmıyor (13.10)
- [ ] 🔴 Aydınlatma metni ile açık rıza **ayrı ayrı** sunuluyor (13.10)
- [ ] Önceden işaretli onay kutusu yok (7.7, 13.10)
- [ ] Pazarlama izni ayrı ve isteğe bağlı (13.10)

### Veri
- [ ] Toplanan her kişisel veri alanının bir gerekçesi var (11.11, 13.10)
- [ ] Saklama süresi belirlenmiş (11.11)
- [ ] Kullanıcının verisine erişme ve silme talebi için bir yol var (13.10)
- [ ] Yurt dışına veri aktarımı varsa hukuki dayanağı değerlendirilmiş (13.10)
- [ ] Üçüncü parti servislerin veri işleme durumu gözden geçirilmiş (10.9, 13.10)

### İçerik
- [ ] Kullanılan görsel, font ve ikonların lisansları uygun (5.7)
- [ ] Üçüncü parti kütüphanelerin lisansları ticari kullanıma uygun (9.12)
- [ ] Hosting planının ticari kullanıma izin verdiği doğrulanmış (16.6, 16.12)

---

## 21.8 Operasyonel kontrol listesi

### İzleme
- [ ] 🔴 Hata izleme kurulmuş ve bildirim gidiyor (16.11)
- [ ] Source map'ler yüklenmiş — hata raporları okunabilir (8.11, 16.11)
- [ ] Uptime izleme kurulmuş (16.10)
- [ ] Kritik akışlar için synthetic izleme var (16.10)
- [ ] Uyarılar eyleme geçilebilir; gürültü yok (16.10)

### Ölçüm
- [ ] Analitik kurulmuş ve çalıştığı doğrulanmış (16.11)
- [ ] Başarı ölçütünü ölçen olaylar tanımlanmış (3.7, 16.11)
- [ ] Funnel takibi kurulmuş (4.10)
- [ ] Analitik KVKK/çerez onayına bağlı çalışıyor (13.10)

### Dayanıklılık
- [ ] 🔴 Veritabanı yedeği otomatik alınıyor (11.11)
- [ ] 🔴 **Geri yükleme en az bir kez denenmiş** (11.11)
- [ ] Geri alma (rollback) yolu belli ve denenmiş (16.9)
- [ ] Harcama sınırı ve fatura uyarısı kurulmuş (16.12)

### Sahiplik ve belge
- [ ] Alan adı, hosting ve servis hesaplarının sahibi belli — kişisel hesapta değil
- [ ] Alan adı yenileme tarihi takvimde
- [ ] Erişim bilgileri güvenli biçimde paylaşılmış (13.6)
- [ ] Kurulum ve çalıştırma talimatı yazılı
- [ ] Bilinen sorunlar ve teknik borç kayıtlı (17.9)
- [ ] Bir sorun çıkarsa kime ulaşılacağı belli (16.9)

---

## 21.9 Launch günü kontrol listesi

Yayın gününde sırayla geçilecek liste.

### Yayından önce (T-1 gün)
- [ ] 21.1–21.8 arası listeler bir kez geçilmiş
- [ ] Staging'de son sürüm onaylanmış (1.8, 2.10)
- [ ] DNS kayıtları hazırlanmış; TTL düşürülmüş (16.7)
- [ ] 🔴 **E-posta kayıtları (MX, TXT) korunmuş** — nameserver değişecekse (16.7)
- [ ] Production ortam değişkenleri kontrol edilmiş (16.3)
- [ ] Geri alma planı yazılı (16.9)
- [ ] Yayın saatinde kimin müsait olacağı belli — **cuma akşamı değil** (16.9)

### Yayın anında
- [ ] Deploy tamamlandı ve build başarılı (16.2)
- [ ] Smoke test: ana sayfa, giriş, kritik akış çalışıyor (17.2)
- [ ] 🔴 HTTPS çalışıyor; sertifika geçerli (13.5)
- [ ] 404 ve hata sayfaları doğru dönüyor (7.9)
- [ ] `robots.txt` production için doğru (8.13)

### Yayından hemen sonra (ilk saat)
- [ ] Gerçek bir cihazda mobil kontrol yapıldı
- [ ] OG önizlemesi bir mesajlaşma uygulamasında test edildi (8.13)
- [ ] Bir form gerçekten gönderildi ve ulaştığı doğrulandı
- [ ] Ödeme varsa gerçek bir test işlemi yapıldı (10.15)
- [ ] Hata izleme panelinde yeni hata akışı izleniyor (16.11)
- [ ] Analitik veri almaya başladı (16.11)

### İlk 48 saat
- [ ] Hata oranı izleniyor (16.11)
- [ ] Core Web Vitals saha verisi toplanmaya başladı (8.12)
- [ ] Kullanıcı geri bildirim kanalı açık ve izleniyor
- [ ] Sunucu maliyeti ve trafik beklendiği gibi (16.12)
- [ ] Arama motoruna gönderim yapıldı; indeksleme izleniyor (8.13)

### İlk hafta
- [ ] Başarı ölçütü ölçülmeye başlandı (3.7, 20.11)
- [ ] Bulunan hatalar önceliklendirildi (17.5)
- [ ] Retrospective yapıldı (3.2)
- [ ] Bilinen sorunlar ve sonraki adımlar kayıt altına alındı

---

## Hızlı sürüm — küçük projeler için

Tek sayfalık bir tanıtım sitesi veya küçük bir proje için, **atlanamayacak 15 madde:**

1. 🔴 Mobilde (375px) taşma yok
2. 🔴 Klavyeyle gezilebiliyor ve odak göstergesi görünür
3. 🔴 Metin kontrastı 4.5:1 üzerinde
4. 🔴 Tüm formlar çalışıyor ve verisi ulaşıyor
5. 🔴 404 sayfası var ve çıkış yolu sunuyor
6. 🔴 HTTPS çalışıyor
7. 🔴 Depoda sır yok
8. 🔴 `robots.txt` staging ayarını taşımıyor
9. 🔴 Her sayfanın benzersiz `title`'ı var
10. 🔴 OG etiketleri ve görseli var, test edilmiş
11. 🔴 Görseller modern formatta ve boyutlandırılmış
12. 🔴 Hero görseli öncelikli yükleniyor
13. 🔴 Gizlilik politikası ve çerez bildirimi var
14. 🔴 Lorem ipsum kalmamış
15. 🔴 Hata izleme ve analitik kurulu

---

**Biten bölüm:** Bölüm 21 — "Bir sitede olması gerekenler" kontrol listesi
**Sıradaki bölüm:** Bölüm 22 — Alfabetik terim dizini + Ek A ve Ek B
