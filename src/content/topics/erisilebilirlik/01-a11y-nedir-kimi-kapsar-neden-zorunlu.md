---
title: "a11y nedir, kimi kapsar, neden zorunlu"
sectionNumber: "6.1"
category: "erisilebilirlik"
order: 1
cardCount: 6
sourceFile: "06-erisilebilirlik-a11y.md"
origin: "material"
flags: ["degisken"]
---
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
