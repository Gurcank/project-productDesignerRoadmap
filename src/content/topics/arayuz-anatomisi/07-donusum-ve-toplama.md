---
title: "Dönüşüm ve toplama"
sectionNumber: "7.7"
category: "arayuz-anatomisi"
order: 7
cardCount: 10
sourceFile: "07a-site-anatomisi.md"
origin: "material"
flags: ["degisken"]
---
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
