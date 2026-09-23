# Bölüm 19 — Yapay zekâ ile profesyonel çalışma

Bu bölüm senin orijinal hedeflerinden biriydi: **yapay zekâya profesyonel seviyede prompt yazabilmek.**

Ama bölümün asıl tezi şu ve dosyanın tamamını bağlıyor:

> **İyi bir prompt, bir spec'tir.** (2.5)
> Bağlam + kısıt (18.4) + kabul kriteri (2.6) + format. Dördü de bu dosyada zaten var.

Yani prompt yazmayı öğrenmek ayrı bir beceri değil; **Bölüm 1-18'de öğrendiğin dili kullanmak.** "Modern ve şık olsun" cümlesi bir talimat değildir çünkü içinde tek bir doğrulanabilir kısıt yoktur. "8px tabanlı spacing ölçeği, tek accent rengi, kartlar arası gap 24, boş durum ve hata durumu dahil" bir talimattır — ve bu cümledeki her terim bu dosyadan geliyor.

**Bir uyarı:** Bu bölümü yazan da bir yapay zekâ. Sistemlerin nasıl çalıştığına dair anlattıklarım genel ve kavramsaldır; belirli bir ürünün belirli bir sürümünün davranışı hakkında kesin iddiada bulunmuyorum.

---

## 19.1 Modelin neyi bilip neyi bilmediği

Sınırları bilmek, prompt yazmanın ön koşulu.

### Context window

- **Terim (İngilizce):** Context window, context
- **Türkçesi:** Bağlam penceresi
- **Tanım:** Modelin bir seferde "görebildiği" metnin toplam miktarı: senin mesajların, onun cevapları, okuduğu dosyalar, araç çıktıları.
- **Ne işe yarar / neden var:** **Bu pencere sınırlı ve tükenen bir kaynaktır.** Uzun bir oturumda pencere dolduğunda model, başlangıçtaki talimatları unutmaya veya tutarsız kararlar vermeye başlayabilir. Bu, "başta söylediğimi neden yapmıyor?" sorusunun en yaygın teknik cevabıdır.
- **Nerede karşına çıkar:** Uzun sohbetlerde ve büyük kod tabanlarıyla çalışırken.
- **Örnek kullanım:** "Oturum çok uzadı ve kararlar tutarsızlaşmaya başladı; özetleyip yeni bir oturum açalım."
- **Karıştırılanlar:** Büyük bir bağlam penceresi, "her şeyi at içine" demek değildir. **Alakasız bağlam, alakalı bağlamı seyreltir.** Bu yüzden doğru yaklaşım pencereyi doldurmak değil, ne göstereceğini seçmektir (19.3).
- **İlgili terimler:** Context engineering (19.3), Session (19.8)

### Knowledge cutoff

- **Terim (İngilizce):** Knowledge cutoff, training data cutoff
- **Türkçesi:** Bilgi kesim tarihi
- **Tanım:** Modelin eğitim verisinin bittiği tarih; o tarihten sonrasını kendiliğinden bilmez.
- **Ne işe yarar / neden var:** **Senin alanında bu doğrudan bir risktir**, çünkü Bölüm 9'da gördüğün gibi kütüphane manzarası hızlı değişir. Model, bakım moduna geçmiş bir kütüphaneyi (8.4) veya adı değişmiş bir paketi (9.6) hâlâ eski hâliyle önerebilir.
- **Nerede karşına çıkar:** Kütüphane, sürüm ve API önerilerinde.
- **Örnek kullanım:** "Bu kütüphanenin güncel durumunu doğrula; bilgi kesim tarihinden sonra değişmiş olabilir."
- **Karıştırılanlar:** Model, bilmediği bir şeyin bilmediğini her zaman fark etmez — eski bilgiyi güvenle sunar. **Değişken bilgi türlerini (sürüm, fiyat, API davranışı) her zaman doğrulat.**
- **İlgili terimler:** Hallucination, `[DEĞİŞKEN BİLGİ]` (0.4)

### Hallucination

- **Terim (İngilizce):** Hallucination, confabulation
- **Türkçesi:** Uydurma
- **Tanım:** Modelin, doğru olmayan bir bilgiyi doğruymuş gibi, kendinden emin bir dille üretmesi.
- **Ne işe yarar / neden var:** Bilmen gereken en önemli sınır. Uydurma **rastgele** değil, **makul görünen** biçimde olur: var olmayan bir kütüphane fonksiyonu, var olmayan bir CSS özelliği, var olmayan bir kaynak, yanlış bir istatistik. Tam da makul göründüğü için fark etmesi zordur.
- **Nerede karşına çıkar:** Özellikle niş kütüphanelerde, sayısal iddialarda ve kaynak taleplerinde.
- **Örnek kullanım:** "Bu API'nin gerçekten böyle bir parametresi var mı? Dokümantasyondan doğrulayalım."
- **Karıştırılanlar:** **Savunması iki katmanlıdır:** (1) modelden emin olmadığında bunu söylemesini istemek, (2) doğrulanabilir her iddiayı kendin kontrol etmek. İkincisi vazgeçilmezdir; birincisi yardımcıdır ama garanti değildir.
- **İlgili terimler:** Knowledge cutoff, Çıktı denetimi (19.9)

### Drift

- **Terim (İngilizce):** Drift
- **Türkçesi:** Sapma
- **Tanım:** Üretilen çıktının, istenen şeyden yavaş yavaş uzaklaşması — ama bunu yaparken tutarlı ve inandırıcı görünmesi.
- **Ne işe yarar / neden var:** 2026 itibarıyla yapay zekâ destekli geliştirmenin ana sorunu olarak **üretim hızı değil, sapma** anılıyor: hızlı üretilmiş, kendinden emin ama **yanlış problemi çözen** çıktı. Panzehir, üretimden önce net bir tanım (spec) koymaktır.
- **Nerede karşına çıkar:** Uzun oturumlarda ve belirsiz taleplerde.
- **Örnek kullanım:** "Çıktı güzel ama biz bunu istememiştik; sapma var. Tanıma geri dönelim."
- **İlgili terimler:** Spec (2.5), Acceptance criteria (2.6), Context window

---

## 19.2 İyi prompt anatomisi

Bir talimatın yedi bileşeni. Hepsi her seferinde gerekmez ama **eksik olan her bileşen, modelin senin yerine karar verdiği bir yer** demektir.

| # | Bileşen | Neyi cevaplar | Bu dosyadaki karşılığı |
|---|---|---|---|
| 1 | **Rol** | Hangi bakış açısından yaklaşsın | — |
| 2 | **Bağlam** | Bu iş neyin parçası, kim için | Brief (2.5) |
| 3 | **Görev** | Tam olarak ne yapılacak | User story (2.6) |
| 4 | **Kısıt** | Neyi yapamaz, neye uymalı | Constraint (18.4) |
| 5 | **Format** | Çıktı hangi biçimde gelsin | — |
| 6 | **Kabul kriteri** | "Bitti" ne demek | Acceptance criteria (2.6) |
| 7 | **Örnek / referans** | Neye benzesin, neye benzemesin | Moodboard (4.5) |

**En çok atlanan üçü: kısıt, kabul kriteri ve "neye benzemesin".** Üçü de "istemediğim şeyi baştan eleme" işlevi görür ve bu, iterasyon sayısını en çok düşüren şeydir.

### Negatif kısıt

- **Terim (İngilizce):** Negative constraint, anti-pattern
- **Türkçesi:** Olumsuz kısıt, kaçınılacak kalıp
- **Tanım:** Ne istediğini değil, **ne istemediğini** açıkça yazmak.
- **Ne işe yarar / neden var:** Bir model, belirtilmeyen her yerde **en yaygın kalıba** yönelir — çünkü eğitim verisinde en çok o vardır. "Jenerik" çıktının sebebi budur. Yasaklamadığın varsayılan, gelecektir.
- **Nerede karşına çıkar:** Tasarım taleplerinde en kritik bileşen.
- **Örnek kullanım:** "Eşit üç sütunlu ikon + başlık + iki satır gri metin kartı kullanma. Sebepsiz gradient başlık kullanma. Sıralı olmayan içeriğe 01/02/03 numarası verme."
- **İlgili terimler:** Feature grid (7.5), Design system (5.1)

---

## 19.3 Bağlam verme yolları

2026'da yaygın görüşe göre **asıl beceri prompt yazmak değil, bağlamı tasarlamak** — yani modelin ne göreceğine karar vermek. Sorunların çoğu kötü prompt'tan değil, eksik bağlamdan doğuyor.

### Context engineering

- **Terim (İngilizce):** Context engineering
- **Türkçesi:** Bağlam mühendisliği
- **Tanım:** Modele ne gösterileceğinin bilinçli olarak tasarlanması — sadece nasıl sorulacağının değil.
- **Ne işe yarar / neden var:** Aynı model, aynı soruya farklı bağlamla çok farklı cevap verir. Bir bileşen isterken tasarım token'larını (5.2) da verdiysen, çıktı ölçeğe uyar; vermediysen model kendi sayılarını uydurur ve sonuç sistemsiz görünür.
- **Nerede karşına çıkar:** Yapay zekâ destekli geliştirmenin merkezî becerisi olarak anılıyor.
- **Örnek kullanım:** "Sorun promptta değil; model tasarım sistemimizi görmüyor. Token dosyasını da verelim."
- `[EMİN DEĞİLİM]` Bu terimin ne kadar kalıcı olacağını bilmiyorum; ama altındaki fikir (bağlamın çıktıyı prompttan çok belirlediği) sağlam.
- **İlgili terimler:** Context window (19.1), Kalıcı talimat dosyası

### Bağlam kaynakları

| Kaynak | Ne sağlar | Ne zaman |
|---|---|---|
| **Referans site / ekran görüntüsü** | Görsel yön, düzen kalıbı | Tasarım isteklerinde |
| **Mevcut kod** | Proje kalıpları, adlandırma, yapı | Var olan projeye ekleme yaparken |
| **Tasarım token'ları** (5.2) | Renk, boşluk, tipografi ölçeği | Her arayüz isteğinde |
| **Veri şeması / tip tanımı** (11.4, 8.6) | Hangi alanlar var, hangileri boş olabilir | Veri gösteren ekranlarda |
| **Kullanıcı akışı** (4.4) | Adımlar, dallanmalar, uç durumlar | Çok ekranlı akışlarda |
| **Kabul kriterleri** (2.6) | "Bitti" tanımı | Her ciddi istekte |
| **Hata mesajı / konsol çıktısı** | Sorunun gerçek hâli | Hata ayıklamada |

**Kritik nokta — "bağlam boşluğu":** Projende yazılı olmayan her kural, model için **yok** demektir. Ekibin (veya senin) kafandaki "biz hep şöyle yaparız" bilgisi, yazılı değilse hiçbir prompt bunu telafi edemez. Bu boşluklar tanımı gereği görünmezdir: dosya, belgelemediği şeyi belgelemez.

### Kalıcı talimat dosyası

- **Terim (İngilizce):** Project instruction file (CLAUDE.md, AGENTS.md, rules file)
- **Türkçesi:** Proje talimat dosyası
- **Tanım:** Projeye özgü kuralların, her oturumda tekrar yazmak yerine kalıcı bir dosyada tutulması.
- **Ne işe yarar / neden var:** Proje kurallarını her promptta tekrarlamak hem zaman hem bağlam penceresi israfıdır. Kalıcı bir dosya bunu bir kez çözer. `[DEĞİŞKEN BİLGİ]` `AGENTS.md` adının bu iş için fiilî bir ortak standart hâline geldiği raporlanıyor; araçların kendi dosya adları ve konumları farklı olabilir, güncel dokümantasyona bak.
- **Nerede karşına çıkar:** Yapay zekâ destekli geliştirme ortamlarında.
- **Örnek kullanım:** "Tasarım kurallarını talimat dosyasına yazalım; her seferinde tekrar anlatmayalım."
- **İlgili terimler:** Context engineering, Design system (5.1)

**Kaynaklarda tutarlı olarak önerilen yapı** (sırasıyla):

1. **Proje özeti ve stack** (1.6) — bu ne, hangi teknolojilerle
2. **Mimari ilkeler** (Bölüm 14) — klasör yapısı, katmanlar, veri akışı
3. **Kurallar ve kalıplar** — adlandırma, bileşen yapısı, stil yaklaşımı (8.4)
4. **Tasarım sistemi** (Bölüm 5) — token'lar, ölçekler, bileşen kütüphanesi
5. **Test stratejisi** (Bölüm 17)
6. **Komutlar** — build, test, lint nasıl çalıştırılır
7. **Kaçınılacak kalıplar (anti-patterns)** — **en sona ve açıkça**

Yedinci madde senin için en önemlisi: **tasarım yasaklarını buraya yazarsan** (19.2, negatif kısıt), her promptta tekrar etmen gerekmez.

---

## 19.4 Kısıt tanımlama

Kısıtlar, modelin senin yerine karar vermesini engelleyen şeydir. Bir web işi için tipik kısıt listesi:

**Teknik**
- Stack ve sürümler (1.6): "Next.js App Router, TypeScript, Tailwind"
- Kütüphane politikası: "yeni bağımlılık ekleme" veya "sadece şu listedekiler"
- Rendering stratejisi (8.10): "bu sayfa statik üretilmeli"
- Paket boyutu (8.12): "ilk yükte 150KB JavaScript sınırını aşma"

**Tasarım**
- Ölçekler (5.3, 5.5): "spacing yalnızca 4/8/12/16/24/32/48'den, type scale 16 tabanlı 1.25 oranında"
- Token kullanımı (5.2): "ham hex veya px değeri yazma, token kullan"
- Yasaklar (19.2): "eşit üç sütunlu ikon kartı yok, gerekçesiz gradient yok, sırasız içerikte numaralandırma yok"
- Hareket (5.9): "animasyon yalnızca yön gösterme veya durum bildirme amaçlıysa"

**Erişilebilirlik** (Bölüm 6)
- "Tüm etkileşimler klavyeyle erişilebilir, focus göstergesi görünür"
- "Kontrast WCAG 2.2 AA'yı sağlamalı"
- "Dokunma hedefleri en az 24×24"
- "Anlam yalnızca renkle taşınmasın"

**Kapsam**
- Kapsam dışı (2.8): "bu işte veri katmanına dokunma"
- Dosya sınırı: "yalnızca şu bileşen dosyasını değiştir"

**Önemli:** Kısıtları her seferinde yazmak yerine çoğunu talimat dosyasına (19.3) taşı; prompt'ta yalnızca o işe özgü olanları belirt.

---

## 19.5 Kabul kriteriyle istemek

Bölüm 2.6'daki kabul kriteri, prompt yazarken **"bitti" tanımını baştan koymak** anlamına gelir. Bu, iterasyonu en çok azaltan tek uygulamadır.

**Kötü:** "Bir fiyatlandırma bölümü yap."

**İyi — kabul kriterleriyle:**

> Fiyatlandırma bölümü. Bitmiş sayılması için:
> - Üç plan kartı, ortadaki "En çok tercih edilen" rozetiyle öne çıkarılmış
> - Aylık/yıllık geçiş anahtarı; yıllıkta tasarruf rozeti
> - Her kartta: plan adı, kime uygun olduğu, fiyat, tek CTA, dahil olanlar listesi
> - Mobilde tek sütun, 768px üstünde üç sütun
> - Anahtarın hangi durumda olduğu renkten bağımsız olarak anlaşılır
> - Tüm butonlar klavyeyle erişilebilir, focus göstergesi görünür
> - Boşluklar spacing ölçeğinden, renkler token'dan

Bu liste, tek tek "evet/hayır" ile kontrol edilebilir (2.6) — yani çıktıyı denetlemenin de listesi olur.

**Kural:** Bir kabul kriteri yazamıyorsan, isteğin henüz netleşmemiştir. Bu, modelin değil senin probleminin işaretidir.

---

## 19.6 Geri bildirim döngüsü

İlk çıktı nadiren son çıktıdır. Önemli olan, düzeltme turunun **ne kadar bilgi taşıdığı.**

**Zayıf geri bildirim:** "Beğenmedim, bir daha dene." → Model neyi değiştireceğini bilmez; rastgele başka bir yöne gider.

**Güçlü geri bildirim üç parçadan oluşur:**

1. **Ne yanlış** — teknik terimle (bu dosyanın asıl faydası burada)
2. **Neden yanlış** — hangi ilkeye veya kısıta aykırı
3. **Ne olmalı** — mümkünse somut

| Zayıf | Güçlü |
|---|---|
| "Karışık duruyor" | "Görsel hiyerarşi yok: üç buton da dolu renkli, birincil eylem belli değil. Birini primary, ikisini ghost yap." |
| "Boşluklar tuhaf" | "Başlık üstü ve altı boşluk eşit; Gestalt yakınlık gereği başlık altındaki metne ait okunmalı. Üstü 48, altı 16 olsun." |
| "Mobilde bozuk" | "375px'te kart üçlüsü sıkışıyor. 768px'in altında tek sütuna düşsün." |
| "Erişilebilir değil" | "İkon butonların erişilebilir adı yok ve tıklama alanı 24×24'ün altında. Ad ekle, padding ile hedefi büyüt." |
| "Çok yavaş" | "Hero görseli LCP öğesi ve 1,2MB PNG. WebP'ye çevir ve öncelikli yükle." |

**Dikkat:** Uzun bir düzeltme zincirinde sapma (19.1) riski artar. Beş turdan sonra hâlâ yaklaşılmıyorsa, düzeltmeye devam etmek yerine **tanımı yeniden yazıp sıfırdan başlamak** genelde daha hızlıdır.

---

## 19.7 Amatör prompt vs profesyonel prompt

Bölümün merkezi. Her karşılaştırmada fark **ne kadar uzun yazıldığı değil, kaç kararın belirsiz bırakıldığı.**

### Örnek 1 — Bir bölüm isteme

**Amatör:**
> "Sitem için güzel bir hero bölümü yap. Modern olsun."

*Belirsiz bırakılan kararlar:* ürün ne, kime hitap ediyor, hangi eylem isteniyor, hangi teknolojide, hangi ölçeklerde, mobilde ne olacak, "modern" ne demek.

**Profesyonel:**
> **Bağlam:** Küçük ekipler için bir toplantı notu aracının pazarlama sitesi. Hedef kitle: 5-20 kişilik yazılım ekiplerinde çalışan proje yöneticileri.
>
> **Görev:** Hero bölümü. Üç soruyu cevaplamalı: bu ne, kimin için, şimdi ne yapmalıyım.
>
> **İçerik:** Eyebrow, tek satırlık headline, iki satırlık subheadline, tek birincil CTA ("Ücretsiz başla"), sağda ürün ekran görüntüsü için 16:9 alan. CTA'nın altında avatar stack + "340 ekip kullanıyor".
>
> **Stack:** Next.js App Router, TypeScript, Tailwind. Yeni bağımlılık ekleme.
>
> **Kısıtlar:** Spacing yalnızca 4/8/16/24/32/48/64'ten. Renkler token'dan (`--color-*`), ham hex yok. Tek accent rengi, yalnızca CTA'da. Mobile-first; 768px altında tek sütun, görsel metnin altına.
>
> **Yasaklar:** Sebepsiz gradient başlık yok. Stok illüstrasyon yok. İkinci bir dolu buton yok.
>
> **Erişilebilirlik:** Başlık `h1`. CTA gerçek `<button>` veya `<a>`, görünür focus göstergesi. Metin/arka plan kontrastı en az 4.5:1.
>
> **Kabul kriteri:** 375px ve 1440px'te taşma yok · klavyeyle CTA'ya ulaşılabiliyor ve focus görünüyor · tüm boşluklar ölçekten · hiçbir ham renk değeri yok.

### Örnek 2 — Hata bildirme

**Amatör:**
> "Form çalışmıyor, düzelt."

**Profesyonel:**
> Kayıt formunda e-posta alanı: geçersiz bir adres girip Tab ile çıkınca hata mesajı görünüyor, ama düzeltip tekrar yazınca mesaj kaybolmuyor.
>
> Beklenen: alan geçerli hâle gelince hata anında kalkmalı.
> Gerçekleşen: hata, form yeniden gönderilene kadar duruyor.
> Ortam: Chrome, staging, masaüstü.
>
> Doğrulama zamanlaması şöyle olsun: ilk kontrol alandan çıkınca (blur), sonrasında yazarken anında güncellensin. Hata mesajı alanla ilişkilendirilmiş ve canlı bölge olarak duyurulmuş olmalı.

### Örnek 3 — Mevcut kodu değiştirme

**Amatör:**
> "Bu bileşeni daha iyi yap."

**Profesyonel:**
> Bu kart bileşeninde üç sorun var:
> 1. Boşluklar elle yazılmış (`p-[18px]`), ölçekte yok → `p-4` veya `p-6` yap.
> 2. Uzun başlıkta taşıyor → iki satırda kes, sonuna üç nokta, tam metni `title` olarak ver.
> 3. Tıklanabilir ama `div` → gerçek bir bağlantı olsun, klavyeyle erişilebilsin.
>
> **Kapsam:** Yalnızca bu dosyayı değiştir. Görsel tasarımı değiştirme — bu bir refactor, yeni özellik değil.

### Örnek 4 — Karar sorma

**Amatör:**
> "Hangi framework'ü kullanmalıyım?"

**Profesyonel:**
> Bir seçim yapmam gerekiyor. Bağlam: tek kişilik bir ekip (ben), içerik ağırlıklı bir tanıtım sitesi + küçük bir yönetim paneli. Kısıtlar: altı hafta, React biliyorum, SEO kritik, bütçe minimum.
>
> İki-üç seçenek ver. Her biri için: ne kazandırır, neyi feda eder, ne zaman yanlış tercih olur. Sonunda bir öneri yap ve gerekçesini yaz. Kesin olmadığın yerleri belirt.

**Dört örnekte ortak olan:** bağlam verilmiş, kısıt yazılmış, kapsam sınırlanmış, kabul kriteri konmuş ve **belirsizlik payı beyan edilmesi istenmiş.**

---

## 19.8 İşi bölme ve oturum yönetimi

### Görev boyutu

Büyük ve belirsiz bir talep, sapma (19.1) için en verimli zemindir. Yaygın tavsiye, işi **spec → plan → görevler → uygulama** biçiminde bölmek ve her aşamada bir insan kontrol noktası bırakmak.

Pratikte senin için bu şu demek:

1. **Önce tanım.** Ne yapılacak, kısıtlar ne, kabul kriteri ne — kod yok.
2. **Sonra plan.** Hangi dosyalar, hangi sırayla, hangi kararlar. Onayla.
3. **Sonra küçük parçalar.** Tek seferde bir bileşen veya bir bölüm.
4. **Her parçadan sonra kontrol.** Çıktıyı gör, sonra devam et.

Bu, "tek promptla tüm siteyi yap" yaklaşımından yavaş görünür ama **toplam süre genelde daha kısadır**, çünkü geri dönüş turları azalır.

### Oturum hijyeni

- **Yeni iş, yeni oturum.** Bağlam penceresi (19.1) tükenen bir kaynaktır; alakasız geçmiş, alakalı bağlamı seyreltir.
- **Uzayan oturumu özetleyip yenile.** "Şu ana kadar şunlara karar verdik" özetiyle temiz bir oturum açmak, dolmuş bir pencerede devam etmekten iyidir.
- **Kısa ve odaklı oturum, uzun ve dağınık oturumdan iyi sonuç verir.** Bu, kaynaklarda tekrar eden bir gözlem.
- **Kapsamı daralt.** "Yalnızca şu dosyaya dokun" cümlesi, beklenmedik değişikliklerin önüne geçer.

---

## 19.9 Çıktıyı denetleme

**Bu alt bölüm pazarlık konusu değil.** Kod okuyabiliyorsun; bu, çıktıyı denetleyebileceğin anlamına gelir ve denetlemek zorundasın.

### Neyi mutlaka doğrula

| Kategori | Neden | Nasıl |
|---|---|---|
| **Kütüphane ve sürüm iddiaları** | Bilgi kesim tarihi (19.1) | Paketin kendi sayfasına bak |
| **API ve parametre isimleri** | Uydurma riski (19.1) | Resmî dokümantasyondan kontrol et |
| **Sayısal iddialar ve istatistikler** | Uydurma riski | Kaynağı iste, kaynağı aç |
| **Kaynak linkleri** | Var olmayan link üretilebilir | Tıkla, gerçekten açılıyor mu |
| **Güvenlik ve hukuk iddiaları** | Yanlışın bedeli yüksek (Bölüm 13) | Birincil kaynak veya uzman |
| **Erişilebilirlik** | Otomatik araç %30-40 yakalar (6.9) | Manuel klavye ve zoom testi (6.9) |

### Neyi gözle kontrol et

Bir arayüz çıktısı geldiğinde, **kod okumadan** yapabileceğin kontroller:

- **Ölçek dışı değer var mı?** `p-[18px]`, `#3B82F6`, `margin: 22px` gibi elle yazılmış değerler.
- **Durum ekranları var mı?** Boş, hata, yükleme (7.9) — yoksa sonradan eklenmez, unutulur.
- **Klavye turu.** Fareyi bırak, Tab ile geç (6.9).
- **%200 zoom.** İçerik kırpılıyor mu (6.6).
- **375px genişlik.** Taşma var mı.
- **Uzun metin.** 60 karakterlik bir başlık koy, ne oluyor bak (4.4).

### Kod incelemesi refleksi

Kaynaklarda tekrar eden bir tavsiye: **her yapay zekâ oturumundan sonra diff'e (15.2) bakmak.** Bunun, prompt iyileştirmekten daha çok hata önlediği belirtiliyor. Sen kod okuyabildiğin için bu senin de yapabileceğin bir kontrol — hangi dosyaların değiştiğine bakmak bile başlı başına faydalıdır.

**Nihai ilke:** Üretimi hızlandırabilirsin ama **sorumluluğu devredemezsin.** Yayına çıkan şeyin sahibi sensin.

---

## 19.10 Tekrar eden tuzaklar

### Jenerik tasarım

**Belirti:** Çıktı "AI ile üretilmiş" hissi veriyor ama neden olduğunu söyleyemiyorsun.

**Sebep:** Belirtilmeyen her yerde model **en yaygın kalıba** yönelir. Sistemsizlik (Bölüm 5 girişi) bunun görünen hâlidir: her bölümde farklı boşluk, gerekçesiz gradient, birbiriyle ilişkisiz griler, eşit üç sütunlu kartlar.

**Çözüm:** Ölçekleri ver (5.3, 5.5), token'ları ver (5.2), yasakları yaz (19.2), referans ver.

### Uydurma bağımlılık

**Belirti:** Kod var olmayan bir fonksiyonu veya paketi çağırıyor.

**Sebep:** Uydurma (19.1), en çok niş kütüphanelerde görülür.

**Çözüm:** "Yeni bağımlılık ekleme" kısıtı koy; eklenmesi gerekiyorsa gerekçesini ve paketin adını doğrulat.

### Eskimiş sürüm bilgisi

**Belirti:** Önerilen yaklaşım, kütüphanenin eski sürümüne ait.

**Sebep:** Bilgi kesim tarihi (19.1).

**Çözüm:** Kullandığın sürümü prompt'ta belirt; değişken bilgiyi doğrulat.

### Sessiz kapsam büyümesi

**Belirti:** Bir bileşen istedin, beş dosya değişti.

**Sebep:** Kapsam sınırı belirtilmedi (2.8, scope creep'in yapay zekâ hâli).

**Çözüm:** "Yalnızca şu dosyayı değiştir", "mevcut davranışı koruyarak" gibi kapsam kısıtları.

### Kabul edilen ilk cevap

**Belirti:** İlk çıktı makul göründüğü için sorgulanmadan kullanıldı.

**Sebep:** Kendinden emin bir dille sunulan çıktı, doğruluk izlenimi verir.

**Çözüm:** Alternatif iste ("üç yaklaşım ver ve takaslarını yaz"), kendi kabul kriterlerinle (19.5) kontrol et.

### Yanlış problemi çözmek

**Belirti:** Çıktı teknik olarak iyi ama işe yaramıyor.

**Sebep:** Sapma (19.1) — ve genelde kökü, isteğin çözüm dilinde yazılmış olmasıdır ("bize filtre lazım") problem dilinde değil ("kullanıcı aradığını bulamıyor", 2.3).

**Çözüm:** Problem tanımıyla başla, çözümle değil. Bu, Bölüm 2.3'teki ilkenin aynısıdır.

---

## 19.11 Kendini test et

**1.** Bağlam penceresi neden "tükenen kaynak"? Büyük pencere "her şeyi at" demek midir?

**2.** Bilgi kesim tarihi senin alanında neden özel bir risk?

**3.** Uydurma neden fark edilmesi zordur? İki katmanlı savunması nedir?

**4.** "Drift" nedir ve 2026'da neden ana sorun olarak anılıyor?

**5.** İyi bir prompt'un yedi bileşeni nedir? En çok atlanan üçü hangisi?

**6.** Negatif kısıt neden gereklidir? Yasaklamadığın varsayılan ne olur?

**7.** "Context engineering" ne demek ve prompt engineering'den farkı nedir?

**8.** "Bağlam boşluğu" nedir ve neden görünmezdir?

**9.** Kalıcı talimat dosyasında senin için en önemli bölüm hangisidir ve neden?

**10.** Kabul kriteri yazamıyorsan bu neyin işaretidir?

**11.** Güçlü geri bildirimin üç parçası nedir?

**12.** "Karışık duruyor" geri bildirimini nasıl güçlü hâle getirirsin?

**13.** Beş düzeltme turundan sonra hâlâ yaklaşılmıyorsa ne yapmalı?

**14.** Amatör ve profesyonel prompt arasındaki fark uzunluk mudur? Değilse nedir?

**15.** İşi bölmenin dört aşaması nedir?

**16.** "Tek promptla tüm siteyi yap" yaklaşımı neden yavaş görünen yöntemden daha uzun sürer?

**17.** Oturum hijyeninin üç kuralı nedir?

**18.** Kod okumadan yapabileceğin altı arayüz kontrolü nedir?

**19.** Her yapay zekâ oturumundan sonra yapılması önerilen tek alışkanlık nedir?

**20.** Jenerik tasarımın sebebi nedir ve dört çözümü nedir?

**21.** "Sessiz kapsam büyümesi" neyin yapay zekâ hâlidir? Çözümü nedir?

**22.** "Yanlış problemi çözmek" tuzağının kökü genelde nerededir?

---

### Cevaplar

**1.** Çünkü senin mesajların, modelin cevapları, okunan dosyalar ve araç çıktıları hep aynı sınırlı alanı paylaşır; dolduğunda başlangıçtaki talimatlar unutulabilir. **Hayır** — alakasız bağlam, alakalı bağlamı **seyreltir**. Doğru yaklaşım pencereyi doldurmak değil, ne göstereceğini seçmektir.

**2.** Çünkü senin alanındaki kütüphane manzarası hızlı değişir (Bölüm 9). Model, bakım moduna geçmiş bir kütüphaneyi veya adı değişmiş bir paketi hâlâ eski hâliyle önerebilir — ve bunu kendinden emin bir dille yapar.

**3.** Çünkü **rastgele değil, makul görünen** biçimde olur: var olmayan ama var olabilecek bir fonksiyon, inandırıcı bir istatistik. Savunma: (1) modelden emin olmadığında bunu söylemesini istemek, (2) doğrulanabilir her iddiayı **kendin kontrol etmek.** İkincisi vazgeçilmezdir.

**4.** Üretilen çıktının istenen şeyden yavaşça uzaklaşması ama tutarlı ve inandırıcı görünmesi. Ana sorun olarak anılıyor çünkü **üretim hızı artık darboğaz değil**; darboğaz, kendinden emin ama yanlış problemi çözen çıktının yarattığı inceleme-ve-düzeltme döngüsü.

**5.** Rol, bağlam, görev, kısıt, format, kabul kriteri, örnek/referans. En çok atlanan üçü: **kısıt, kabul kriteri ve "neye benzemesin".**

**6.** Çünkü model, belirtilmeyen her yerde **en yaygın kalıba** yönelir — eğitim verisinde en çok o vardır. Yasaklamadığın varsayılan **gelecektir**; "jenerik" çıktının sebebi budur.

**7.** Modele **ne gösterileceğinin** bilinçli tasarımı — sadece nasıl sorulacağının değil. Fark: aynı model, aynı soruya farklı bağlamla çok farklı cevap verir. Sorunların çoğu kötü prompt'tan değil, eksik bağlamdan doğar.

**8.** Projede **yazılı olmayan** her kuralın, model için **yok** sayılması. Görünmezdir çünkü tanımı gereği: dosya, belgelemediği şeyi belgelemez — eksikliği ancak çıktı yanlış geldiğinde fark edilir.

**9.** **Kaçınılacak kalıplar (anti-patterns) bölümü**, en sonda. Çünkü tasarım yasaklarını oraya yazarsan her promptta tekrar etmen gerekmez ve jenerikleşmenin ana kaynağı baştan kapanır.

**10.** **İsteğin henüz netleşmediğinin** işareti. Bu, modelin değil senin probleminin göstergesidir.

**11.** (1) Ne yanlış — teknik terimle. (2) Neden yanlış — hangi ilkeye veya kısıta aykırı. (3) Ne olmalı — mümkünse somut.

**12.** Örnek: "Görsel hiyerarşi yok: üç buton da dolu renkli, birincil eylem belli değil. Birini primary, ikisini ghost stile al." Yani izlenimi **ilkeye ve somut düzeltmeye** bağlamak.

**13.** Düzeltmeye devam etmek yerine **tanımı yeniden yazıp sıfırdan başlamak.** Uzun düzeltme zincirlerinde sapma riski artar ve her tur bağlamı daha da bulandırır.

**14.** **Hayır, uzunluk değil.** Fark, **kaç kararın belirsiz bırakıldığıdır.** Kısa ama kısıtlı bir prompt, uzun ama belirsiz bir prompttan iyidir.

**15.** **Spec → plan → görevler → uygulama**, her aşamada bir insan kontrol noktasıyla.

**16.** Çünkü belirsiz ve büyük talep, sapma için en verimli zemindir; sonuçta **geri dönüş turları** artar. Küçük parçalar yavaş görünür ama toplam süre genelde daha kısadır.

**17.** (1) Yeni iş için yeni oturum aç. (2) Uzayan oturumu özetleyip yeni bir oturuma taşı. (3) Kapsamı daralt ("yalnızca şu dosyaya dokun"). (Ek: kısa ve odaklı oturum, uzun ve dağınıktan iyi sonuç verir.)

**18.** Ölçek dışı değer var mı · durum ekranları (boş/hata/yükleme) var mı · klavye turu · %200 zoom · 375px genişlik · uzun metin (60 karakterlik başlık) testi.

**19.** **Diff'e bakmak** — hangi dosyaların, nasıl değiştiğini görmek. Bunun prompt iyileştirmekten daha çok hata önlediği belirtiliyor.

**20.** **Sebep:** belirtilmeyen her yerde model en yaygın kalıba yönelir; sonuç sistemsizliktir. **Çözümler:** ölçekleri ver, token'ları ver, yasakları yaz, referans ver.

**21.** **Scope creep'in** (2.8) yapay zekâ hâli: bir bileşen istersin, beş dosya değişir. Çözüm: kapsam kısıtı yazmak — "yalnızca şu dosyayı değiştir", "mevcut davranışı koruyarak".

**22.** İsteğin **çözüm dilinde** yazılmış olması ("bize filtre lazım"), **problem dilinde** değil ("kullanıcı aradığını bulamıyor"). Bu, Bölüm 2.3'teki problem tanımı ilkesinin aynısıdır.

---

**Biten bölüm:** Bölüm 19 — Yapay zekâ ile profesyonel çalışma
**Sıradaki bölüm:** Bölüm 20 — Sıfırdan tam sürüme akış haritası
