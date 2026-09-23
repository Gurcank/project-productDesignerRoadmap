---
title: "Bilgi mimarisi (IA)"
sectionNumber: "4.3"
category: "ux-ui-ilkeleri"
order: 3
cardCount: 7
sourceFile: "04-ui-ux-surec-ve-ilkeler.md"
origin: "material"
flags: []
---
İçeriğin nasıl düzenleneceği ve isimlendirileceği. Görünmez bir katmandır: iyi yapıldığında kimse fark etmez, kötü yapıldığında kullanıcı aradığını bulamaz ve bunu "site kötü" diye ifade eder.

### Information Architecture

- **Terim (İngilizce):** Information Architecture — IA
- **Türkçesi:** Bilgi mimarisi
- **Tanım:** İçeriğin nasıl gruplandığı, adlandırıldığı ve birbirine bağlandığına dair yapı.
- **Ne işe yarar / neden var:** Bulunabilirliği belirler. Görsel tasarımdan **önce** gelir: yapı yanlışsa hiçbir görsel çözüm onu kurtarmaz. Bir menüyü güzelleştirmek, yanlış gruplanmış içeriği doğru yapmaz.
- **Nerede karşına çıkar:** Yeni site kurgusunda ve "kullanıcılar X'i bulamıyor" şikâyetlerinde.
- **Örnek kullanım:** "Sorun menü tasarımında değil, IA'da; 'Çözümler' ve 'Ürünler' başlıkları altında aynı şeyler var."
- **İlgili terimler:** Sitemap, Taxonomy, Navigation, Card sorting

### Sitemap

- **Terim (İngilizce):** Sitemap
- **Türkçesi:** Site haritası
- **Tanım:** Bir sitedeki tüm sayfaların ve aralarındaki hiyerarşinin şeması.
- **Ne işe yarar / neden var:** Kapsamı görünür kılar. Kaç sayfa tasarlanacağı, hangi sayfaların hangisinin altında olduğu ve kaç seviye derinlik olduğu burada netleşir. Tasarıma başlamadan önceki ilk çıktı.
- **Nerede karşına çıkar:** Proje başlangıcında. Ayrıca teknik bir karşılığı vardır: `sitemap.xml` arama motorları için üretilen makine okunur dosyadır (8.13) — aynı isim, farklı şey.
- **Örnek kullanım:** "Sitemap'i çıkardık: 4 ana bölüm, toplam 23 sayfa, en fazla 3 seviye derinlik."
- **İlgili terimler:** IA, Navigation, sitemap.xml (8.13)

### Taxonomy

- **Terim (İngilizce):** Taxonomy
- **Türkçesi:** Sınıflandırma
- **Tanım:** İçeriğin hangi kategorilere ve etiketlere göre düzenleneceğini belirleyen sistem.
- **Ne işe yarar / neden var:** Filtreleme, arama ve gezinme bunun üstüne kurulur. Kategoriler örtüşürse ("Elbise" ve "Yazlık" ayrı üst kategoriyse) kullanıcı hangi yoldan gideceğini bilemez.
- **Nerede karşına çıkar:** E-ticaret ve içerik yoğun sitelerde. CMS'te alan yapısı kurulurken.
- **Örnek kullanım:** "Taksonomiyi düzeltmeden filtre tasarlamak anlamsız; kategoriler birbirinin içine giriyor."
- **İlgili terimler:** IA, Filter/Facet (7.10), Labeling

### Card sorting

- **Terim (İngilizce):** Card sorting
- **Türkçesi:** Kart gruplama
- **Tanım:** Kullanıcılardan içerik başlıklarını kendi mantıklarına göre gruplamalarını isteyen araştırma yöntemi.
- **Ne işe yarar / neden var:** IA'yı ekibin değil kullanıcının zihinsel modeline göre kurmayı sağlar. Ekip içeriği kendi organizasyon şemasına göre gruplama eğilimindedir — kullanıcı o şemayı bilmez.
- **Nerede karşına çıkar:** IA çalışmasının başında. **Open** card sorting'de kullanıcı kategori adlarını kendisi koyar; **closed**'da hazır kategorilere yerleştirir.
- **Örnek kullanım:** "Card sorting'de 8 kişiden 6'sı 'Faturalar'ı 'Hesabım' altına koydu; menüyü ona göre değiştirelim."
- **İlgili terimler:** Tree testing, IA, Mental model

### Tree testing

- **Terim (İngilizce):** Tree testing
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Kullanıcıya sadece menü yapısını (görsel tasarım olmadan) gösterip bir şeyi bulmasını isteyen test.
- **Ne işe yarar / neden var:** Bulunabilirlik sorununun yapıdan mı yoksa görsel tasarımdan mı kaynaklandığını ayırır. Görsel olmadan test edildiği için sonucun tek sorumlusu IA'dır.
- **Nerede karşına çıkar:** Card sorting'den sonra, yapıyı doğrulamak için.
- **Örnek kullanım:** "Tree testing'de kullanıcıların %70'i iade sayfasını ilk denemede bulamadı."
- **İlgili terimler:** Card sorting, IA, Findability

### Mental model

- **Terim (İngilizce):** Mental model
- **Türkçesi:** Zihinsel model
- **Tanım:** Kullanıcının bir sistemin nasıl çalıştığına dair kafasındaki tahmin.
- **Ne işe yarar / neden var:** Kullanıcı, ürünü kendi zihinsel modeline göre kullanır. Model ile gerçek arasındaki fark büyükse hata yapar ve şaşırır. İyi tasarımın işi ya modele uymak ya da modeli açıkça değiştirmektir.
- **Nerede karşına çıkar:** Kullanıcı testlerinde en sık gözlenen şey budur: kullanıcı beklediği yerde beklediği şeyi bulamaz.
- **Örnek kullanım:** "Kullanıcının zihinsel modelinde 'kaydet' kalıcı demek; bizim ürünümüzde taslak demek. Adlandırmayı değiştirelim."
- **İlgili terimler:** Jakob's law (4.7), Affordance (4.6), Card sorting

### Findability / Discoverability

- **Terim (İngilizce):** Findability, Discoverability
- **Türkçesi:** Bulunabilirlik, keşfedilebilirlik
- **Tanım:** Findability = aradığı şeyi bulabilme. Discoverability = varlığından haberi olmadığı şeyi fark edebilme.
- **Ne işe yarar / neden var:** İkisi farklı problemlerdir ve farklı çözümler gerektirir. Aradığını bulamıyorsa arama ve navigasyon sorunu; var olduğunu bilmiyorsa tanıtım, boş ekran veya onboarding sorunu.
- **Nerede karşına çıkar:** Özellik kullanım oranları düşük olduğunda. Ekipler bunu genelde "özellik kötü" diye yorumlar; çoğu zaman keşfedilebilirlik sorunudur.
- **Örnek kullanım:** "Özelliği kullanan %3; kullananlar memnun. Bu bir discoverability sorunu, kalite sorunu değil."
- **İlgili terimler:** IA, Empty state (7.9), Onboarding (7.12)
