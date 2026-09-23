---
title: "Uygulama içi ekranlar"
sectionNumber: "7.12"
category: "arayuz-anatomisi"
order: 12
cardCount: 10
sourceFile: "07b-site-anatomisi.md"
origin: "material"
flags: []
---
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
