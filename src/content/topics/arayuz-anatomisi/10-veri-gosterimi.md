---
title: "Veri gösterimi"
sectionNumber: "7.10"
category: "arayuz-anatomisi"
order: 10
cardCount: 10
sourceFile: "07b-site-anatomisi.md"
origin: "material"
flags: []
---
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
