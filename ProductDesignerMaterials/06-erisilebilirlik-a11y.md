# Bölüm 6 — Erişilebilirlik (a11y)

Bu bölüm diğerlerinden kısa ama etkisi en yüksek olanlardan biri. Sebebi şu: erişilebilirlik, tasarımcının **sonradan eklenemeyecek** tek sorumluluğudur. Kontrastı, odak sırasını, etiket yapısını ve dokunma hedefi boyutunu tasarım aşamasında düşünmezsen, geliştirici bunu sonradan düzeltemez — ekranı yeniden tasarlamak gerekir.

İkinci sebep hukuki. Erişilebilirlik artık "iyi olurdu" kategorisinden çıkmış, birçok ülkede yasal yükümlülük hâline gelmiş durumda — Türkiye dahil (6.1).

Üçüncü sebep pratik: erişilebilirlik kararlarının çoğu, herkes için daha iyi bir arayüz üretir. Yeterli kontrast güneş altında telefon kullanan herkese yarar; net odak göstergesi klavyeyle çalışan uzman kullanıcıya yarar; iyi yazılmış hata mesajı herkese yarar.

**Bölümdeki kısaltma:** "a11y" = accessibility kelimesinin a ile y arasındaki 11 harfin sayıyla değiştirilmiş hâli. Aynı mantıkla i18n = internationalization, l10n = localization.

---

## 6.1 a11y nedir, kimi kapsar, neden zorunlu

### Accessibility (a11y)

- **Terim (İngilizce):** Accessibility — a11y
- **Türkçesi:** Erişilebilirlik
- **Tanım:** Bir ürünün, engelli kullanıcılar da dahil olmak üzere mümkün olan en geniş kitle tarafından kullanılabilmesi.
- **Ne işe yarar / neden var:** Bir grubu dışarıda bırakmamak için. Ama kapsamı çoğu kişinin sandığından geniştir: görme, işitme, motor beceri, bilişsel farklılıklar ve nöbet hassasiyeti hepsi bu başlık altındadır.
- **Nerede karşına çıkar:** Gereksinimlerde (NFR olarak, 2.6), tasarım denetimlerinde, hukuk ve satın alma süreçlerinde.
- **Örnek kullanım:** "a11y kontrolünü DoD'a ekleyelim; sona bırakırsak hiç yapılmıyor."
- **Karıştırılanlar:** *Accessibility* ≠ *usability* (4.6). Kullanılabilirlik herkes için kolaylık; erişilebilirlik belirli engelleri olan kişiler için **kullanılabilir olmak**. Bir ürün son derece kullanışlı ama tamamen erişilemez olabilir.
- **İlgili terimler:** WCAG (6.2), Inclusive design, Assistive technology

### Engelin üç hâli

- **Terim (İngilizce):** Permanent, temporary, situational disability
- **Türkçesi:** Kalıcı, geçici, duruma bağlı engel
- **Tanım:** Bir kısıtın kalıcı olması gerekmez. Tek kolu olmayan biri (kalıcı), kolu alçıda olan biri (geçici) ve bebek taşıyan biri (duruma bağlı) aynı arayüz problemini yaşar.
- **Ne işe yarar / neden var:** Erişilebilirliğin "küçük bir azınlık için" olmadığını gösteren en güçlü çerçeve. Gürültülü ortamda video izleyen herkes altyazıya, güneş altında telefona bakan herkes yüksek kontrasta ihtiyaç duyar.
- **Nerede karşına çıkar:** Erişilebilirliği ekibe savunurken kullanacağın argüman.
- **Örnek kullanım:** "Altyazı sadece işitme engelliler için değil; kullanıcıların büyük kısmı videoları sessiz izliyor."
- **İlgili terimler:** Inclusive design, Curb-cut effect

### Curb-cut effect

- **Terim (İngilizce):** Curb-cut effect
- **Türkçesi:** Kaldırım rampası etkisi
- **Tanım:** Belirli bir grup için yapılan düzenlemenin, herkese fayda sağlaması.
- **Ne işe yarar / neden var:** İsmini tekerlekli sandalye için yapılan kaldırım rampalarından alır; bugün o rampaları en çok bebek arabası, valiz ve bisiklet kullananlar kullanır. Dijital karşılıkları: altyazı, sesli okuma, koyu tema, klavye kısayolları.
- **Nerede karşına çıkar:** Erişilebilirlik yatırımının gerekçelendirilmesinde.
- **Örnek kullanım:** "Klavye erişimini düzeltmek sadece a11y değil; güç kullanıcılar da hızlanacak."
- **İlgili terimler:** Inclusive design, Engelin üç hâli

### Assistive technology

- **Terim (İngilizce):** Assistive technology — AT
- **Türkçesi:** Yardımcı teknoloji
- **Tanım:** Kullanıcının ürüne erişmesini sağlayan araçlar: ekran okuyucu, ekran büyüteci, klavye alternatifleri, ses komutu, göz takip sistemleri, braille ekran.
- **Ne işe yarar / neden var:** Bu araçlar senin ürününü **HTML yapısı üzerinden** okur. Yani kodun anlamlı olması bir kalite meselesi değil, erişim meselesidir. Görsel olarak buton gibi görünen bir `div`, ekran okuyucu için buton değildir.
- **Nerede karşına çıkar:** a11y testlerinde ve semantic HTML tartışmalarında.
- **Örnek kullanım:** "Bu bileşen yardımcı teknolojiler için görünmez; sadece görsel olarak var."
- **İlgili terimler:** Screen reader (6.4), Semantic HTML (6.3)

### Inclusive design

- **Terim (İngilizce):** Inclusive design
- **Türkçesi:** Kapsayıcı tasarım
- **Tanım:** Tasarımı baştan çeşitliliği kapsayacak şekilde yapma yaklaşımı.
- **Ne işe yarar / neden var:** Erişilebilirlik bir **uyum kontrolü** (yaptığın şey kurallara uyuyor mu), kapsayıcı tasarım bir **süreç** (baştan kimleri düşünerek tasarlıyorsun). Uyum kontrolünü geçen ama kullanılamayan arayüzler mümkündür; kapsayıcı tasarım bunu engellemeyi hedefler.
- **Nerede karşına çıkar:** Tasarım süreci tartışmalarında.
- **Örnek kullanım:** "Sadece WCAG'i geçmeyelim; ekran okuyucuyla akışı gerçekten bitirebiliyor muyuz test edelim."
- **İlgili terimler:** a11y, WCAG (6.2)

### Hukuki çerçeve

- **Terim (İngilizce):** EAA, EN 301 549, ADA, WAD
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Erişilebilirliği zorunlu kılan yasal düzenlemeler.
- **Ne işe yarar / neden var:** Erişilebilirlik artık bir tercih değil. Öne çıkan düzenlemeler:
  - **European Accessibility Act (EAA)** — Direktif (EU) 2019/882. 28 Haziran 2025'te uygulanmaya başladı. E-ticaret, bankacılık, telekom, ulaşım, e-kitap ve görsel-işitsel medya gibi tüketiciye dönük hizmetleri kapsıyor ve **AB'ye hizmet veren AB dışı şirketleri de** kapsıyor. Teknik referansı **EN 301 549** standardı; bu standardın web bileşeni WCAG 2.1 AA'yı esas alıyor.
  - **ADA (ABD)** — mahkeme kararları ve düzenlemeler üzerinden WCAG'i fiilî ölçüt hâline getirdi.
  - **Türkiye** — Aile ve Sosyal Hizmetler Bakanlığı koordinasyonunda, web siteleri ve mobil uygulamaların erişilebilirliğine dair bir **Cumhurbaşkanlığı Genelgesi** yayımlandı (2025). Kurumlar, Bakanlığın yayımladığı "Web Siteleri ve Mobil Uygulamaların Erişilebilirliği Kontrol Listesi — A Seviyesi"ne göre değerlendirme yapıyor; bu liste WCAG 2.2'yi esas alıyor. Daha eski bir kaynak olarak **KAMİS** (Kamu İnternet Siteleri Rehberi) kamu siteleri için erişilebilirlik ilkelerini WCAG 2.0 / ISO/IEC 40500:2012 temelinde tanımlar.
- **Nerede karşına çıkar:** Kurumsal projelerde sözleşme maddesi olarak; ihalelerde şart olarak.
- **Örnek kullanım:** "Müşteri AB'ye satış yapıyor; EAA kapsamındayız, WCAG AA hedefini gereksinimlere yazalım."
- `[DEĞİŞKEN BİLGİ]` Mevzuat hızlı değişiyor. Türkiye'deki genelgenin uyum süreleri, denetim mekanizması ve erişilebilirlik logosu uygulamasına dair ayrıntıları birincil kaynaktan (aile.gov.tr) doğrula; ben ikincil kaynaklardan gördüm ve tam olarak teyit etmedim. EN 301 549'un WCAG 2.2'ye güncellenmesi de gündemde.
- **İlgili terimler:** WCAG, Accessibility statement (6.2)
- **Kaynaklar:** https://accessible-eu-centre.ec.europa.eu/content-corner/news/wcag-22-officially-w3c-recommendation-2023-10-06_en · https://www.aile.gov.tr/eyhgm/haberler/web-siteleri-ve-mobil-uygulamalarin-erisilebilirligi-cumhurbaskanligi-genelgesi-yayimlandi/

---

## 6.2 WCAG

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

---

## 6.3 Semantic HTML: erişilebilirliğin temeli

Erişilebilirliğin en büyük kısmı, ekstra bir şey **eklemekle** değil, doğru elemanı kullanmakla sağlanır. Yardımcı teknolojiler ekranı değil, kodun yapısını okur.

### Semantic HTML

- **Terim (İngilizce):** Semantic HTML
- **Türkçesi:** Anlamsal HTML
- **Tanım:** Her öğe için, işlevini ifade eden doğru HTML elemanını kullanmak.
- **Ne işe yarar / neden var:** Doğru eleman, erişilebilirliğin çoğunu **bedava** getirir. Gerçek bir `<button>` klavyeyle odaklanabilir, Enter ve Space ile çalışır, ekran okuyucuya "buton" diye tanıtılır. Aynı görünümdeki bir `<div>`'de bunların hepsini elle yazman gerekir ve genelde eksik yazılır.
- **Nerede karşına çıkar:** Kod incelemelerinde ve a11y denetimlerinde en sık çıkan sorun kategorisi.
- **Örnek kullanım:** "Bu tıklanabilir kart `div`; klavyeyle ulaşılamıyor. Buton veya link olmalı."
- **İlgili terimler:** Landmark, Heading hierarchy, ARIA (6.4), HTML (8.1)

### Link vs Button

- **Terim (İngilizce):** Link (`<a>`) vs Button (`<button>`)
- **Türkçesi:** Bağlantı ve buton
- **Tanım:** Link kullanıcıyı **bir yere götürür**; buton bir **eylem yapar**.
- **Ne işe yarar / neden var:** Fark davranışa yansır: link yeni sekmede açılabilir, adresi kopyalanabilir, tarayıcı geçmişine girer; buton bunları yapmaz. Klavye davranışları bile farklıdır (link Enter, buton Enter ve Space). Yanlış eleman kullanmak kullanıcının beklentisini bozar.
- **Nerede karşına çıkar:** Tasarım tesliminde belirtilmesi gereken bir karar. "Bu bir link mi buton mu?" sorusunun cevabı sende.
- **Örnek kullanım:** "'Sepete ekle' buton, 'Ürün detayı' link. Görsel olarak ikisi de buton gibi görünebilir ama kod farklı olmalı."
- **Karıştırılanlar:** Görünüm ile eleman farklı şeylerdir. Bir link buton gibi **görünebilir**; önemli olan işlevi.
- **İlgili terimler:** Semantic HTML, Keyboard accessibility (6.5)

### Landmark

- **Terim (İngilizce):** Landmark (landmark region)
- **Türkçesi:** Bölge işareti
- **Tanım:** Sayfanın ana bölgelerini tanımlayan elemanlar: `header`, `nav`, `main`, `aside`, `footer`, `form`, `search`.
- **Ne işe yarar / neden var:** Ekran okuyucu kullanıcıları bu bölgeler arasında **doğrudan atlayabilir**. Görsel kullanıcı ana içeriğin nerede olduğunu bir bakışta görür; landmark, aynı bilgiyi kod düzeyinde verir.
- **Nerede karşına çıkar:** Sayfa iskeleti tanımlarında (7.1).
- **Örnek kullanım:** "Sayfada iki `main` var; tek olmalı. Diğerini `section` yapalım."
- **İlgili terimler:** Semantic HTML, Skip link (6.5), Sayfa iskeleti (7.1)

### Heading hierarchy

- **Terim (İngilizce):** Heading hierarchy
- **Türkçesi:** Başlık hiyerarşisi
- **Tanım:** `h1`–`h6` başlıklarının, içeriğin yapısını yansıtacak şekilde sırayla kullanılması.
- **Ne işe yarar / neden var:** Ekran okuyucu kullanıcılarının çoğu sayfayı **başlık listesi üzerinden** gezer — tıpkı görsel kullanıcının sayfayı tarayarak gezmesi gibi. Seviye atlanırsa (h2'den h4'e) yapı bozulur. Ayrıca başlık seviyesi **görünüm için değil, yapı için** seçilir: küçük görünmesi gereken bir h2, CSS ile küçültülür, h4 yapılmaz.
- **Nerede karşına çıkar:** Tasarım tesliminde başlık seviyelerini belirtmek senin işindir.
- **Örnek kullanım:** "Bu bölüm başlığı görsel olarak küçük ama yapıda h2; seviyeyi teslimde yazdım."
- **Karıştırılanlar:** Sayfada tek bir `h1` olması yaygın kabul gören pratiktir ve genelde sayfa başlığıdır.
- **İlgili terimler:** Semantic HTML, Visual hierarchy (4.8), SEO (8.13)

---

## 6.4 Ekran okuyucu ve ARIA

Görme engelli kullanıcıların arayüzü nasıl deneyimlediği ve arayüzün onlara nasıl anlatıldığı.

### Screen reader

- **Terim (İngilizce):** Screen reader
- **Türkçesi:** Ekran okuyucu
- **Tanım:** Ekrandaki içeriği sesli okuyan veya braille ekrana aktaran yazılım.
- **Ne işe yarar / neden var:** Kullanıcı sayfayı **doğrusal olarak** dinler ya da başlık, link, landmark listeleri üzerinden atlayarak gezer. Bu yüzden görsel düzenin anlamlı olması yetmez; kodun sırası da anlamlı olmalıdır. Yaygın olanlar: NVDA ve JAWS (Windows), VoiceOver (macOS/iOS), TalkBack (Android).
- **Nerede karşına çıkar:** a11y testlerinde. En az bir kez kendi sitende deneyimlemen, bu bölümün tamamından daha öğreticidir.
- **Örnek kullanım:** "VoiceOver'la denedim: buton 'düğme' diye okunuyor ama ne yaptığı söylenmiyor, erişilebilir adı yok."
- **İlgili terimler:** Accessible name, Alt text, ARIA, Semantic HTML (6.3)

### Alt text

- **Terim (İngilizce):** Alt text (alternative text)
- **Türkçesi:** Alternatif metin
- **Tanım:** Bir görselin, göremeyen kullanıcıya ne anlattığını aktaran metin.
- **Ne işe yarar / neden var:** Amaç görseli **tarif etmek değil, işlevini aktarmaktır.** Aynı fotoğraf farklı bağlamlarda farklı alt metin gerektirir: bir haber sayfasında olayı anlatır, bir ürün sayfasında ürünün rengini ve açısını anlatır.
- **Nerede karşına çıkar:** İçerik girişinde ve CMS alanlarında. Alt metin yazmak genelde tasarımcı veya içerik editörünün işidir.
- **Örnek kullanım:** "Bu grafiğin alt metni 'grafik' olamaz; asıl bulguyu bir cümleyle yazalım."
- **Karıştırılanlar:** **Dekoratif görsellerin alt metni boş bırakılmalıdır** (`alt=""`). Boş bırakmak "unutmak" değildir; ekran okuyucuya "bunu atla" demektir. Her görsele metin yazmak, dinleyen kullanıcıyı gereksiz gürültüye boğar. Ayrıca alt metne "resim" veya "görsel" yazmak gereksizdir; ekran okuyucu zaten öyle olduğunu söyler.
- **İlgili terimler:** Screen reader, Decorative image, SEO (8.13)

### Accessible name

- **Terim (İngilizce):** Accessible name
- **Türkçesi:** Erişilebilir ad
- **Tanım:** Bir öğenin yardımcı teknolojiye tanıtılan adı.
- **Ne işe yarar / neden var:** Yalnızca ikon içeren bir butonun görünen metni yoktur; erişilebilir adı verilmezse ekran okuyucu "düğme" der ve kullanıcı ne yaptığını bilemez. Ad, görünen etiketten, `aria-label`'dan veya ilişkilendirilmiş bir etiketten gelir.
- **Nerede karşına çıkar:** İkon butonlarında, arama alanlarında, kapatma (×) düğmelerinde — a11y denetimlerinin en sık bulgusu.
- **Örnek kullanım:** "Kapatma butonuna erişilebilir ad verelim: 'Diyaloğu kapat'."
- **İlgili terimler:** ARIA, aria-label, Icon set (5.7)

### ARIA

- **Terim (İngilizce):** ARIA — Accessible Rich Internet Applications
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** HTML'in tek başına ifade edemediği rol, durum ve ilişkileri yardımcı teknolojilere bildiren ek nitelikler kümesi.
- **Ne işe yarar / neden var:** Sekmeler, açılır menüler ve karmaşık bileşenler için HTML'de hazır eleman yoktur; ARIA bu boşluğu doldurur.
- **Nerede karşına çıkar:** Özel bileşen geliştirmede. Hazır ve erişilebilirliği test edilmiş kütüphaneler (Radix gibi, 9.5) bunun büyük kısmını halleder — bu, kütüphane seçiminin bir erişilebilirlik kararı olduğunu gösterir.
- **Örnek kullanım:** "Bu açılır menüyü sıfırdan yazmayalım; erişilebilir bir headless bileşen kullanalım."
- **Karıştırılanlar:** **ARIA'nın birinci kuralı: mümkünse ARIA kullanma.** Doğru HTML elemanı varsa onu kullan. Yanlış kullanılan ARIA, hiç ARIA kullanmamaktan daha zararlıdır; çünkü yardımcı teknolojiye **yanlış bilgi** verir. `role="button"` yazılmış bir `div`, klavye desteği eklenmediyse hâlâ çalışmaz ama artık kendini buton olarak tanıtır.
- **İlgili terimler:** Semantic HTML (6.3), role, aria-label

### role / aria-label / aria-live

- **Terim (İngilizce):** `role`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-live`
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** `role` öğenin ne olduğunu söyler. `aria-label` görünmeyen bir ad verir. `aria-labelledby` sayfadaki başka bir metni ad olarak kullanır. `aria-describedby` ek açıklama bağlar. `aria-live` bir alanın içeriği değiştiğinde ekran okuyucunun bunu duyurmasını sağlar.
- **Ne işe yarar / neden var:** `aria-live` tasarımcıyı doğrudan ilgilendirir: **görsel bir bildirim (toast, hata mesajı, "3 sonuç bulundu") ekranda belirdiğinde, ekran okuyucu kullanıcısının bundan haberi olmaz** — canlı bölge tanımlanmadıkça. Bu, en sık atlanan erişilebilirlik detaylarından biridir.
- **Nerede karşına çıkar:** Toast, form doğrulama, canlı arama sonuçlarında.
- **Örnek kullanım:** "Filtre uygulanınca 'X sonuç bulundu' metnini canlı bölge yapalım; sessiz değişim olmasın."
- **İlgili terimler:** ARIA, Toast (7.8), Inline validation (6.7)

---

## 6.5 Klavye erişimi

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

---

## 6.6 Görsel gereklilikler

### Contrast (detay)

Temel oranlar Bölüm 5.4'te verildi. Burada ek noktalar:

- Kontrast, metnin **üzerinde durduğu gerçek renge** göre hesaplanır — görsel üzerindeki metin en riskli durumdur; görselin her yerinde oran değişir. Çözüm: metnin arkasına yeterli opaklıkta bir katman koymak.
- **Devre dışı (disabled) bileşenler** kontrast kuralının dışındadır. Ama bu, okunamayacak kadar soluk yapılabileceği anlamına gelmez; kullanıcının orada bir şey olduğunu anlaması gerekir.
- **Odak göstergesi** metin olmadığı için 3:1 eşiğine tabidir (SC 1.4.11).
- **Placeholder metni** genelde düşük kontrastlıdır ve bu yüzden de label yerine kullanılmamalıdır (4.9).
- Koyu tema için oranlar **yeniden hesaplanmalıdır** (5.2).

### Use of color

- **Terim (İngilizce):** Use of color (SC 1.4.1)
- **Türkçesi:** Rengin tek başına kullanılmaması
- **Tanım:** Bir bilgi yalnızca renkle aktarılmamalıdır.
- **Ne işe yarar / neden var:** Renk körlüğü olan kullanıcılar (özellikle kırmızı-yeşil ayrımında) rengi ayırt edemez. Kırmızı çerçeveli bir form alanı, tek başına "hata var" demez; ikon ve metin de gerekir. Aynı şekilde bir grafikte sadece renkle ayrılan çizgiler okunamaz — desen, etiket veya doğrudan işaretleme gerekir.
- **Nerede karşına çıkar:** Form doğrulama, durum rozetleri, grafikler, zorunlu alan işaretleri.
- **Örnek kullanım:** "Durum rozetlerinde sadece renk var; ikon ekleyelim ki renkten bağımsız da anlaşılsın."
- **İlgili terimler:** Semantic color (5.4), Error message (4.9)

### Target size

- **Terim (İngilizce):** Target size (SC 2.5.8)
- **Türkçesi:** Hedef boyutu
- **Tanım:** Dokunmatik veya işaretleyici hedeflerin en az **24×24 CSS pikseli** olması (veya çevresinde yeterli aralık bırakılması).
- **Ne işe yarar / neden var:** Küçük hedefler titremesi olan, motor kısıtı olan veya hareket hâlindeki kullanıcılar için ulaşılamazdır. Görünen ikon 16px olabilir; **tıklanabilir alan** dolgu (padding) ile büyütülür — bu, tasarımın görsel yoğunluğunu bozmadan kuralı karşılamanın yoludur.
- **Nerede karşına çıkar:** İkon butonlarında, tablo satırı eylemlerinde, yan yana dizilmiş küçük kontrollerde.
- **Örnek kullanım:** "İkon 16px kalsın ama tıklama alanı 40×40 olsun; görsel değişmez, hedef büyür."
- **Karıştırılanlar:** Mobil platform rehberlerinde daha büyük değerler önerilir (44pt/48dp gibi); WCAG'in 24px'i **asgari** eşiktir, hedef değil. `[EMİN DEĞİLİM]` Platform rehberlerindeki tam sayıları bu oturumda doğrulamadım.
- **İlgili terimler:** Fitts's Law (4.7), Mobile-first (5.8)

### Text resize / Reflow

- **Terim (İngilizce):** Resize text (SC 1.4.4), Reflow (SC 1.4.10)
- **Türkçesi:** Metin büyütme, yeniden akış
- **Tanım:** Kullanıcı metni büyüttüğünde veya sayfayı yakınlaştırdığında içeriğin kaybolmaması ve iki yönlü kaydırma gerektirmemesi.
- **Ne işe yarar / neden var:** Az gören kullanıcılar tarayıcı zoom'unu veya yazı boyutu ayarını kullanır. Sabit yükseklikli kutular ve `px` cinsinden sabitlenmiş metin, büyütüldüğünde içeriği kırpar veya üst üste bindirir.
- **Nerede karşına çıkar:** Kart ve buton tasarımlarında. Test etmesi kolay: tarayıcıda %200 zoom yap.
- **Örnek kullanım:** "%200 zoom'da kart metni taşıyor; sabit yükseklik yerine içeriğe göre esneyen kutu kullanalım."
- **İlgili terimler:** Responsive (5.8), Fluid typography (5.8)

---

## 6.7 Form erişilebilirliği

Formlar, erişilebilirlik hatalarının en yoğunlaştığı yerdir — ve dönüşümün de en kritik olduğu yer. İkisi aynı yerde buluşur.

### Label association

- **Terim (İngilizce):** Label association
- **Türkçesi:** Etiket ilişkilendirmesi
- **Tanım:** Her form alanının, koda düzeyinde kendi etiketiyle bağlanmış olması.
- **Ne işe yarar / neden var:** Ekran okuyucu, alana odaklandığında etiketi okur — bağ kurulmamışsa "düzenleme alanı" der ve kullanıcı ne yazacağını bilemez. Ayrıca doğru bağlanmış etikete tıklamak alanı odaklar; bu, herkes için kullanılabilirlik kazancıdır (özellikle küçük onay kutularında).
- **Nerede karşına çıkar:** Her formda. Otomatik denetim araçlarının en sık bulgusu.
- **Örnek kullanım:** "Etiketler görsel olarak var ama alanla bağlı değil; ilişkilendirelim."
- **Karıştırılanlar:** Placeholder etiket değildir (4.9). Görsel olarak etiket gibi görünen serbest metin de yeterli değildir; bağ kurulmalıdır.
- **İlgili terimler:** Label/Placeholder (4.9), Form parçaları (7.11)

### Error identification / suggestion

- **Terim (İngilizce):** Error identification (SC 3.3.1), Error suggestion (SC 3.3.3)
- **Türkçesi:** Hata belirtme ve öneri
- **Tanım:** Hatanın hangi alanda olduğunun metinle bildirilmesi ve mümkünse düzeltme önerisi sunulması.
- **Ne işe yarar / neden var:** "Formda hata var" mesajı, 12 alanlı bir formda işe yaramaz. Hata **alanın yanında**, metinle ve alanla ilişkilendirilmiş olarak gösterilmelidir. Ayrıca hata özeti verilecekse, özetteki maddeler ilgili alana bağlantı olmalıdır.
- **Nerede karşına çıkar:** Form doğrulama tasarımında.
- **Örnek kullanım:** "Hata mesajını alanın altına koyalım, alanla ilişkilendirelim ve canlı bölge olarak duyuralım."
- **İlgili terimler:** Error message (4.9), aria-live (6.4), Inline validation (7.8)

### Autocomplete

- **Terim (İngilizce):** Autocomplete attribute (SC 1.3.5)
- **Türkçesi:** Otomatik doldurma niteliği
- **Tanım:** Alanın hangi tür kişisel bilgiyi beklediğini tarayıcıya bildiren nitelik (ad, e-posta, adres, kart numarası).
- **Ne işe yarar / neden var:** Tarayıcının doğru doldurmasını sağlar. Bilişsel yükü ve yazma çabasını azaltır — motor kısıtı olan kullanıcılar için ciddi fark yaratır, herkes için de formu hızlandırır.
- **Nerede karşına çıkar:** Kayıt, ödeme ve adres formlarında.
- **Örnek kullanım:** "Adres alanlarına autocomplete değerlerini verelim; tarayıcı doldursun."
- **İlgili terimler:** Form parçaları (7.11), Redundant Entry (6.2)

### Zorunlu alan işaretleme

- **Terim (İngilizce):** Required field indication
- **Türkçesi:** Zorunlu alan gösterimi
- **Tanım:** Hangi alanların doldurulmasının zorunlu olduğunun belirtilmesi.
- **Ne işe yarar / neden var:** Yıldız (*) yaygındır ama tek başına yetersizdir: anlamı açıklanmalı ve koda da bildirilmelidir. Daha iyi bir yaklaşım, zorunluları işaretlemek yerine **isteğe bağlı olanları "(isteğe bağlı)" diye yazmaktır** — çoğu formda zorunlu alanlar çoğunluktadır, bu yüzden daha az işaret gerekir ve belirsizlik kalmaz.
- **Nerede karşına çıkar:** Her form tasarımında.
- **Örnek kullanım:** "Zorunluları yıldızlamak yerine sadece isteğe bağlı olanı etiketleyelim; formda 8 alanın 7'si zorunlu."
- **İlgili terimler:** Label (4.9), Error identification

---

## 6.8 Hareket ve nöbet hassasiyeti

### prefers-reduced-motion

Detayı Bölüm 5.9'da. Özet: kullanıcı işletim sisteminde "hareketi azalt" ayarını açtığında, büyük yer değiştirmeler, paralaks ve zoom efektleri kaldırılmalı; yerine zararsız bir opaklık geçişi bırakılmalıdır. Bu bir estetik tercih değil, vestibüler rahatsızlığı olan kullanıcılar için fiziksel bir gerekliliktir.

### Flashing content

- **Terim (İngilizce):** Three flashes threshold (SC 2.3.1)
- **Türkçesi:** Yanıp sönme eşiği
- **Tanım:** İçerik, saniyede üçten fazla yanıp sönmemelidir.
- **Ne işe yarar / neden var:** Işığa duyarlı epilepsisi olan kişilerde nöbet tetikleyebilir. Bu, dosyadaki en ciddi sonuçlu erişilebilirlik kuralıdır.
- **Nerede karşına çıkar:** Video içeriklerinde, dikkat çekme amaçlı animasyonlarda, oyunlaştırma efektlerinde.
- **Örnek kullanım:** "Bu kutlama animasyonu hızlı yanıp sönüyor; frekansı düşürelim."
- **İlgili terimler:** Motion design (5.9)

### Pause, stop, hide

- **Terim (İngilizce):** Pause, Stop, Hide (SC 2.2.2)
- **Türkçesi:** Duraklatma, durdurma, gizleme
- **Tanım:** Otomatik hareket eden, kayan veya güncellenen içerik beş saniyeden uzun sürüyorsa kullanıcı onu durdurabilmelidir.
- **Ne işe yarar / neden var:** Otomatik dönen carousel, kayan duyuru şeridi (marquee) ve otomatik oynayan video, dikkat kısıtı veya okuma güçlüğü olan kullanıcılar için engeldir; yavaş okuyan herkes için de sinir bozucudur.
- **Nerede karşına çıkar:** Carousel ve marquee bileşenlerinde (7.5).
- **Örnek kullanım:** "Carousel otomatik dönüyorsa duraklat butonu koyalım; ayrıca odaklanınca dönmeyi durdursun."
- **İlgili terimler:** Carousel (7.5), Marquee (7.5)

---

## 6.9 Denetleme

### Automated testing

- **Terim (İngilizce):** Automated accessibility testing
- **Türkçesi:** Otomatik erişilebilirlik testi
- **Tanım:** Lighthouse, axe, WAVE gibi araçlarla yapılan otomatik tarama.
- **Ne işe yarar / neden var:** Ucuz ve hızlıdır; eksik alt metin, düşük kontrast, eksik etiket gibi sorunları anında bulur. CI hattına eklenebilir (16.2), böylece yeni hatalar birikmez.
- **Nerede karşına çıkar:** Geliştirme sürecinde ve denetimlerin ilk adımında.
- **Örnek kullanım:** "axe'ı CI'a ekleyelim; her PR'da yeni ihlal varsa uyarsın."
- **Karıştırılanlar:** **Bu bölümün en önemli uyarısı:** otomatik araçlar sorunların yalnızca bir kısmını yakalar — yaygın olarak raporlanan aralık **%30–40** civarındadır. "Lighthouse 100 verdi" cümlesi erişilebilir olduğun anlamına gelmez. Odak sırasının mantıklı olması, alt metnin **doğru** olması, hata mesajının anlaşılır olması — hiçbiri otomatik ölçülemez.
- **İlgili terimler:** Manuel test, CI gate (17.7)

### Manuel test

- **Terim (İngilizce):** Manual accessibility testing
- **Türkçesi:** Manuel erişilebilirlik testi
- **Tanım:** Klavye, ekran okuyucu, zoom ve renk simülasyonu ile elle yapılan kontrol.
- **Ne işe yarar / neden var:** Otomatik aracın göremediği şeyleri yakalar. Tasarımcının yapabileceği en verimli dört kontrol:
  1. **Fareyi bırak**, sadece Tab/Enter/Space/ok tuşlarıyla ana akışı bitirmeye çalış.
  2. **%200 zoom** yap, içerik kırpılıyor mu bak.
  3. **Ekran okuyucuyu aç** (macOS'ta VoiceOver, Windows'ta NVDA), ilk ekranı dinle.
  4. **Gri tonlama** filtresi uygula; renkten bağımsız olarak her şey anlaşılıyor mu bak.
- **Nerede karşına çıkar:** Design review'da (2.10) ve yayın öncesi kontrolde.
- **Örnek kullanım:** "Design review'a klavye turunu da ekledim; üç bileşende odak göstergesi yok."
- **İlgili terimler:** Automated testing, Design review (2.10)

### Accessibility overlay

- **Terim (İngilizce):** Accessibility overlay / widget
- **Türkçesi:** Erişilebilirlik eklentisi
- **Tanım:** Siteye eklenen ve "tek satır kodla erişilebilirlik sağladığını" iddia eden üçüncü parti araçlar.
- **Ne işe yarar / neden var:** **Erişilebilirlik topluluğu tarafından geniş ölçüde eleştirilir.** Temel gerekçeler: altta yatan sorunları düzeltmezler, bazı durumlarda yardımcı teknolojilerin kendi ayarlarıyla çakışırlar ve yasal koruma sağladıkları iddiası tartışmalıdır. Kalıcı çözüm, sorunun kodda ve tasarımda düzeltilmesidir.
- **Nerede karşına çıkar:** "Hızlı çözüm" arayan müşteri taleplerinde.
- **Örnek kullanım:** "Overlay yerine gerçek düzeltmeleri planlayalım; bütçeyi oraya harcamak daha kalıcı."
- `[EMİN DEĞİLİM]` Bu eleştirilerin hukuki sonuçları ülkeye göre değişir; kesin bir hukuki iddiada bulunmuyorum.
- **İlgili terimler:** Automated testing, Accessibility statement (6.2)

### Engelli kullanıcılarla test

- **Terim (İngilizce):** Testing with users with disabilities
- **Türkçesi:** Engelli kullanıcılarla test
- **Tanım:** Gerçek yardımcı teknoloji kullanıcılarıyla yapılan kullanılabilirlik testi.
- **Ne işe yarar / neden var:** Tüm ölçütleri geçen ama kullanılamayan arayüzler mümkündür. Deneyimli bir ekran okuyucu kullanıcısı, hiçbir aracın bulamayacağı sorunları on dakikada bulur.
- **Nerede karşına çıkar:** Olgun erişilebilirlik programlarında.
- **Örnek kullanım:** "Standartları geçtik ama bir NVDA kullanıcısıyla da test edelim; akış gerçekten bitiyor mu görelim."
- **İlgili terimler:** Usability test (4.10), Inclusive design (6.1)

---

## 6.10 Kendini test et

**1.** Erişilebilirlik ile kullanılabilirlik arasındaki fark nedir?

**2.** "Engelin üç hâli" nedir ve bu çerçeve erişilebilirliği savunurken neden işe yarar?

**3.** WCAG'in POUR ilkeleri nelerdir? "İçerik görünüyor ama klavyeyle ulaşılamıyor" hangi ilkeye girer?

**4.** Hangi uyum seviyesi pratik ve yasal hedeftir ve neden AAA hedeflenmez?

**5.** Görsel olarak buton gibi görünen bir `div` neden sorunludur? En az üç kayıp say.

**6.** Link ile buton arasındaki fark nedir? "Sepete ekle" hangisi olmalı?

**7.** Başlık seviyesi (h2, h3) neye göre seçilir? Görünüme mi yapıya mı?

**8.** Dekoratif bir görselin alt metni ne olmalı ve neden?

**9.** ARIA'nın birinci kuralı nedir? Yanlış ARIA neden hiç ARIA'dan kötü olabilir?

**10.** Bir filtre uygulandığında "12 sonuç bulundu" yazısı beliriyor. Ekran okuyucu kullanıcısı bunu neden duymayabilir ve çözüm nedir?

**11.** Focus ring'i "tasarımı bozuyor" diye kaldırmak yerine ne yapılır?

**12.** Modal açıldığında odakla ilgili üç şey yapılmalı. Nedir?

**13.** SPA'da sayfa geçişinde ekran okuyucu kullanıcısı neden değişimi fark etmeyebilir?

**14.** WCAG 2.2'nin getirdiği minimum dokunma hedefi boyutu nedir? Görünen ikonu büyütmeden bu nasıl sağlanır?

**15.** Bir form alanında hata var. Kırmızı kenarlık yeterli mi? Değilse ne gerekir?

**16.** Zorunlu alanları yıldızlamak yerine önerilen yaklaşım nedir ve neden?

**17.** Otomatik erişilebilirlik araçları sorunların ne kadarını yakalar? "Lighthouse 100 verdi" ne anlama gelir, ne anlama gelmez?

**18.** Erişilebilirlik overlay'leri neden eleştirilir?

---

### Cevaplar

**1.** Kullanılabilirlik herkes için kolaylık; erişilebilirlik belirli engelleri olan kişiler için **kullanılabilir olmak**. Bir ürün son derece kullanışlı ama tamamen erişilemez olabilir — örneğin klavyeyle hiç çalışmayan, çok akıcı bir arayüz.

**2.** Kalıcı (tek kolu olmayan), geçici (kolu alçıda), duruma bağlı (bebek taşıyan). İşe yarar çünkü erişilebilirliğin "küçük bir azınlık için" olmadığını gösterir: aynı arayüz problemini çok daha geniş bir kitle yaşar.

**3.** Perceivable, Operable, Understandable, Robust. Klavyeyle ulaşılamama **Operable** ilkesine girer — içerik algılanabiliyor ama işletilemiyor.

**4.** **AA**. Düzenlemelerin neredeyse tamamı AA'yı referans alır. AAA bazı içerik türleri için tam olarak karşılanamaz (örneğin 7:1 kontrast çoğu marka rengiyle mümkün değildir) ve W3C'nin kendisi de tüm siteler için AAA hedeflenmesini önermez.

**5.** (1) Klavyeyle odaklanılamaz, Tab ile ulaşılamaz. (2) Enter/Space ile çalışmaz. (3) Ekran okuyucuya "buton" olarak tanıtılmaz. (4) Tarayıcının varsayılan odak göstergesini almaz. Hepsi elle eklenmek zorunda kalır ve genelde eksik eklenir.

**6.** Link kullanıcıyı **bir yere götürür**, buton bir **eylem yapar**. "Sepete ekle" bir eylemdir → buton. Görsel olarak ikisi de buton gibi görünebilir; belirleyici olan işlevdir.

**7.** **Yapıya göre.** Başlık seviyesi içeriğin hiyerarşisini yansıtır; görünüm CSS ile ayarlanır. Küçük görünmesi gereken bir h2, h4 yapılmaz — küçültülür.

**8.** Boş bırakılmalı (`alt=""`). Bu "unutmak" değil, ekran okuyucuya "bunu atla" demektir. Her dekoratif görsele metin yazmak, dinleyen kullanıcıyı gereksiz gürültüye boğar.

**9.** "Mümkünse ARIA kullanma" — doğru HTML elemanı varsa onu kullan. Yanlış ARIA daha kötüdür çünkü yardımcı teknolojiye **yanlış bilgi** verir: `role="button"` yazılmış ama klavye desteği eklenmemiş bir `div`, artık kendini buton olarak tanıtır ama çalışmaz.

**10.** Görsel değişim ekran okuyucuya otomatik duyurulmaz. Çözüm: o alanı **canlı bölge** (`aria-live`) olarak tanımlamak, böylece içerik değiştiğinde duyurulsun.

**11.** Kaldırmak yerine **markaya uygun, yeterince görünür ve kontrast eşiğini (3:1) sağlayan** bir odak göstergesi tasarlanır. Ayrıca göstergeyi yalnızca klavye kullanımında göstermek mümkündür — fareyle tıklandığında görünmez.

**12.** (1) Açılınca odak modalın içine taşınır (genelde başlığa). (2) Odak modal içinde döner, arkaya kaçmaz (focus trap). (3) Kapanınca odak, modalı açan öğeye geri döner. (Ek olarak Esc ile kapanmalı.)

**13.** SPA'da sayfa gerçekten yenilenmez; odak eski yerinde kalır ve tarayıcı yeni bir belge yüklemediği için ekran okuyucu bir değişim duyurmaz. Çözüm: geçişte odağı yeni sayfanın başlığına taşımak ve değişimi duyurmak (focus management).

**14.** **24×24 CSS pikseli** (SC 2.5.8, AA) — veya çevresinde yeterli aralık bırakmak. Görünen ikon 16px kalabilir; **tıklanabilir alan** dolgu (padding) ile büyütülür, böylece görsel yoğunluk bozulmadan kural karşılanır.

**15.** Yeterli değil. Bilgi yalnızca renkle aktarılmamalıdır (SC 1.4.1): renk körlüğü olan kullanıcı kırmızıyı ayırt edemeyebilir. Gerekenler: metinle yazılmış hata mesajı, alanın yanında ve alanla ilişkilendirilmiş; tercihen bir ikon; ve değişimin ekran okuyucuya duyurulması.

**16.** Zorunluları yıldızlamak yerine **isteğe bağlı olanları "(isteğe bağlı)" diye etiketlemek**. Çoğu formda zorunlu alanlar çoğunluktadır; bu yaklaşım daha az işaret gerektirir, yıldızın anlamını açıklama ihtiyacını ortadan kaldırır ve belirsizlik bırakmaz.

**17.** Yaygın olarak raporlanan aralık **%30–40**. "Lighthouse 100 verdi" yalnızca **makinenin ölçebildiği** kontrollerin geçtiği anlamına gelir; odak sırasının mantıklı olduğu, alt metnin doğru olduğu veya hata mesajının anlaşılır olduğu anlamına **gelmez**.

**18.** Altta yatan sorunları düzeltmezler, bazı durumlarda yardımcı teknolojilerin kendi ayarlarıyla çakışırlar ve sağladıkları iddia edilen yasal koruma tartışmalıdır. Kalıcı çözüm sorunun kodda ve tasarımda düzeltilmesidir.

---

**Biten bölüm:** Bölüm 6 — Erişilebilirlik (a11y)
**Sıradaki bölüm:** Bölüm 7 — Site anatomisi: bölüm ve arayüz parçalarının adları
