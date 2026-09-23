---
title: "WCAG"
sectionNumber: "6.2"
category: "erisilebilirlik"
order: 2
cardCount: 6
sourceFile: "06-erisilebilirlik-a11y.md"
origin: "material"
flags: ["degisken"]
---
Erişilebilirliğin uluslararası ölçütü. Yasa değildir ama neredeyse tüm yasalar ona atıf yapar.

### WCAG

- **Terim (İngilizce):** WCAG — Web Content Accessibility Guidelines
- **Türkçesi:** Web İçeriği Erişilebilirlik Kılavuzu
- **Tanım:** W3C tarafından yayımlanan, web içeriğinin erişilebilir olması için sağlanması gereken ölçütler bütünü.
- **Ne işe yarar / neden var:** Erişilebilirliği ölçülebilir hâle getirir. "Erişilebilir mi?" sorusu yorum gerektirir; "1.4.3'ü karşılıyor mu?" sorusu evet/hayır ile cevaplanır.
- **Nerede karşına çıkar:** Gereksinim belgelerinde, denetim raporlarında, ihale şartnamelerinde.
- **Örnek kullanım:** "Hedefimiz WCAG 2.2 AA; AAA'yı zorlamayalım, bazı kriterleri marka renkleriyle karşılamak mümkün değil."
- `[DEĞİŞKEN BİLGİ]` **Güncel sürüm WCAG 2.2**; Ekim 2023'te W3C Recommendation oldu. WCAG 3 taslak aşamasında ve yıllar sürecek. Yeni bir sürüm çıkmış olabilir; w3.org üzerinden kontrol et.
- **İlgili terimler:** POUR, Conformance level, Success criterion

### POUR

- **Terim (İngilizce):** POUR — Perceivable, Operable, Understandable, Robust
- **Türkçesi:** Algılanabilir, işletilebilir, anlaşılabilir, sağlam
- **Tanım:** WCAG'in dört temel ilkesi; tüm ölçütler bu dördünün altında toplanır.
- **Ne işe yarar / neden var:** Kriter listesini ezberlemek yerine mantığı kavramayı sağlar:
  - **Perceivable** — kullanıcı içeriği algılayabiliyor mu? (alt metin, altyazı, kontrast)
  - **Operable** — kullanıcı arayüzü çalıştırabiliyor mu? (klavye, yeterli süre, hedef boyutu)
  - **Understandable** — kullanıcı anlayabiliyor mu? (sade dil, tutarlılık, anlaşılır hata mesajı)
  - **Robust** — farklı teknolojilerle çalışıyor mu? (doğru işaretleme, yardımcı teknoloji uyumu)
- **Nerede karşına çıkar:** WCAG'i öğrenirken ve denetim raporlarını okurken.
- **Örnek kullanım:** "Sorun perceivable değil operable tarafında; içerik görünüyor ama klavyeyle ulaşılamıyor."
- **İlgili terimler:** WCAG, Success criterion

### Conformance level (A / AA / AAA)

- **Terim (İngilizce):** Conformance level
- **Türkçesi:** Uyum seviyesi
- **Tanım:** WCAG ölçütlerinin üç zorluk kademesi.
- **Ne işe yarar / neden var:** **A** temel eşiktir; karşılanmazsa içerik bazı kullanıcılar için tamamen erişilemezdir. **AA** pratik ve yasal hedeftir — düzenlemelerin neredeyse tamamı bunu referans alır. **AAA** her içerik türü için tam olarak karşılanamayabilir; W3C'nin kendisi de tüm siteler için AAA hedeflenmesini önermez.
- **Nerede karşına çıkar:** Gereksinim yazarken. Doğru cümle "WCAG 2.2 Level AA" biçimindedir.
- **Örnek kullanım:** "AA hedefliyoruz. AAA'daki 7:1 kontrast, marka rengimizle mümkün değil."
- **Karıştırılanlar:** Seviyeler kümülatiftir: AA demek, A'yı da karşılamak demektir.
- **İlgili terimler:** WCAG, Success criterion, Contrast ratio (6.6)

### Success criterion

- **Terim (İngilizce):** Success criterion — SC
- **Türkçesi:** Başarı ölçütü
- **Tanım:** Test edilebilir tek bir gereklilik; numarayla anılır (1.4.3 Contrast Minimum gibi).
- **Ne işe yarar / neden var:** Denetim raporları bu numaralarla yazılır. Numaraları ezberlemen gerekmez ama okuduğunda ne demek olduğunu anlaman gerekir.
- **Nerede karşına çıkar:** Denetim raporlarında ve düzeltme ticket'larında.
- **Örnek kullanım:** "Rapor 15 ihlal listelemiş; 9'u 1.4.3, yani kontrast. Palet düzeltmesiyle çoğu kapanır."
- **İlgili terimler:** WCAG, Conformance level

### WCAG 2.2'nin getirdikleri

WCAG 2.2, 2.1'in üstüne **dokuz yeni ölçüt** ekledi ve eskiyen bir ölçütü (4.1.1 Parsing) kaldırdı. Tasarımcıyı en çok ilgilendiren AA seviyesindekiler:

| Ölçüt | Ne ister | Tasarımdaki karşılığı |
|---|---|---|
| **2.4.11** Focus Not Obscured (Min.) | Odaklanan öğe tamamen gizlenmemeli | Sticky header/footer odaktaki öğeyi kapatmamalı |
| **2.5.7** Dragging Movements | Sürükleme gerektiren her işlevin sürüklemesiz alternatifi olmalı | Slider, kart sıralama, harita için buton alternatifi |
| **2.5.8** Target Size (Min.) | Dokunma hedefleri en az **24×24 CSS pikseli** olmalı (veya yeterli aralık) | Küçük ikon butonları, yan yana simgeler |
| **3.3.8** Accessible Authentication (Min.) | Giriş, bilişsel test gerektirmemeli | Yapıştırmayı engelleme, bulmaca tipi doğrulama |
| **3.2.6** Consistent Help (A) | Yardım aynı yerde bulunmalı | Destek bağlantısının konumu sayfadan sayfaya değişmemeli |
| **3.3.7** Redundant Entry (A) | Aynı bilgi tekrar istenmemeli | Çok adımlı formda "faturaya aynısını kullan" seçeneği |

**Kaynak:** https://accessible-eu-centre.ec.europa.eu/content-corner/news/wcag-22-officially-w3c-recommendation-2023-10-06_en

### Accessibility statement

- **Terim (İngilizce):** Accessibility statement
- **Türkçesi:** Erişilebilirlik beyanı
- **Tanım:** Sitenin erişilebilirlik durumunu, hangi standardı hedeflediğini, bilinen eksikleri ve iletişim yolunu açıklayan sayfa.
- **Ne işe yarar / neden var:** Bazı düzenlemelerde zorunludur. Ayrıca dürüst bir beyandır: "%100 erişilebilir" iddiası neredeyse her zaman yanlıştır; bilinen eksikleri ve düzeltme planını yazmak daha güvenilirdir ve kullanıcıya sorun bildirme yolu açar.
- **Nerede karşına çıkar:** Footer'daki yasal bağlantılar arasında (7.1, 13.11).
- **Örnek kullanım:** "Erişilebilirlik beyanına bilinen eksikleri ve geri bildirim e-postasını da ekleyelim."
- **İlgili terimler:** Hukuki çerçeve (6.1), Yasal sayfalar (13.11)
