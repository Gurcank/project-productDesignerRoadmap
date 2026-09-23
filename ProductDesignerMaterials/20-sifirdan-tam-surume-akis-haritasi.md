# Bölüm 20 — Sıfırdan tam sürüme akış haritası

Bu bölüm yeni terim öğretmiyor. Öğrendiklerini **zaman eksenine** diziyor.

Bölüm 1-19 bir sözlüktü: her terim kendi bağlamında anlatıldı. Burada tek bir soruyu cevaplıyoruz: **bir web projesi baştan sona nasıl ilerler, hangi anda hangi karar verilir ve o an hangi kelimeler konuşulur?**

**Nasıl kullanılır:** Bir projenin ortasında "şu an neredeyiz, sırada ne var?" diye baktığın harita bu. Ayrıca bir işi devraldığında "bu proje hangi fazları atlamış?" diye kontrol edebilirsin — çünkü atlanan fazlar sonradan fatura olarak geri gelir ve her fazın altında bunu yazdım.

**Üç uyarı:**

1. **Bu bir şelale değil.** Fazlar sırayla anlatılıyor ama pratikte iç içe geçer ve geri dönüşler olur (2.2, iterasyon). Özellikle Faz 1-4 arasında ileri geri gidilir.
2. **Ölçek değişir.** Tek kişilik bir tanıtım sitesinde bazı fazlar yarım saat sürer; kurumsal bir üründe haftalar. Ama **hiçbiri sıfırlanmaz** — sadece kısalır.
3. **Senin rolün her fazda var.** Bu haritanın bir amacı da şu: tasarımcının işi Faz 4'te başlayıp Faz 5'te bitmiyor.

---

## 20.1 Faz 0 — Fikir ve problem tanımı

**Amaç:** Neyi, kim için, neden yaptığımızı tek sayfada netleştirmek.

**Girdi:** Bir fikir, bir müşteri talebi veya bir şikâyet.

**Çıktı:**
- **Problem statement** (2.3) — çözümden arındırılmış problem tanımı
- **Hedef kullanıcı** (2.4) — kimden bahsediyoruz
- **Başarı ölçütü** (3.7) — bu iş işe yaradı mı nasıl anlayacağız
- **One-pager** (2.5) — hepsini içeren tek sayfa

**Kim ne yapar:**
| Rol | Ne yapar |
|---|---|
| PM / kurucu (2.1) | Problemi ve iş hedefini tanımlar |
| **Sen** | Problemin çözüm dilinde yazılmasına itiraz edersin; kullanıcı tarafını sorarsın |
| Stakeholder'lar (2.1) | Kısıtları ve beklentileri söyler |

**Kritik kararlar:** Bu gerçekten bir problem mi? Kimin problemi? Çözmezsek ne olur?

**Konuşulan terimler:** problem statement, hypothesis (2.3), assumption (2.4), success metric (3.7), stakeholder (2.1), constraint (18.4)

**Atlanırsa ne olur:** Ekip, kimsenin istemediği bir şeyi mükemmel biçimde yapar. Bu, en pahalı hata sınıfıdır çünkü faturası ancak yayından sonra kesilir.

**Senin cümlen:** *"'Filtre lazım' bir çözüm. Problem ne? Kullanıcı ne yapamıyor?"*

---

## 20.2 Faz 1 — Discovery ve araştırma

**Amaç:** Varsayımları azaltmak; doğru problemi doğruladığımızdan emin olmak.

**Girdi:** Faz 0'ın problem tanımı.

**Çıktı:**
- **Araştırma bulguları ve içgörüler** (2.4)
- **Kullanıcı yolculuğu / pain point haritası** (2.4)
- **Rakip ve referans incelemesi**
- **Doğrulanmış veya çürütülmüş varsayım listesi** (2.4)

**Kim ne yapar:**
| Rol | Ne yapar |
|---|---|
| PM | Pazar ve iş tarafını araştırır |
| **Sen** | Kullanıcı görüşmesi, mevcut ürünün kullanılabilirlik incelemesi (4.6), rakip analizi |
| Geliştirici | Teknik fizibilite; gerekirse **spike** (3.5) veya **POC** (2.8) |

**Kritik kararlar:** Hangi varsayımlar test edilmeye değer? Devam mı, dönüş mü?

**Konuşulan terimler:** discovery (2.3), user research (2.4), insight (2.4), persona (2.4), JTBD (2.3), pain point (2.4), validation (2.3), spike (3.5), POC (2.8)

**Atlanırsa ne olur:** Ekibin kendi sezgisi kullanıcı sanılır. Sonuç genelde Faz 10'da ortaya çıkar: özellik yapılmış ama kullanılmıyor (4.3, discoverability sorunu sanılır, aslında ihtiyaç yoktur).

**Senin cümlen:** *"Beş kullanıcıyla yarım saat konuşalım (4.10). Bu, üç haftalık yanlış geliştirmeyi engelleyebilir."*

---

## 20.3 Faz 2 — Spec, scope ve önceliklendirme

**Amaç:** Ne yapılacağını ve **ne yapılmayacağını** yazıya dökmek.

**Girdi:** Faz 1'in bulguları.

**Çıktı:**
- **PRD / spec** (2.5)
- **Kapsam ve kapsam dışı listesi** (2.8)
- **User story'ler ve kabul kriterleri** (2.6)
- **Önceliklendirilmiş liste ve cut line** (2.7, 2.8)
- **Risk, varsayım ve bağımlılık listesi** (18.4, 3.5)
- **Non-functional requirement'lar** (2.6) — performans, erişilebilirlik, tarayıcı desteği

**Kim ne yapar:**
| Rol | Ne yapar |
|---|---|
| PM / PO (2.1) | PRD'yi yazar, önceliklendirir |
| **Sen** | Kabul kriterlerine **durum ekranlarını** (7.9) ve **erişilebilirlik NFR'lerini** (Bölüm 6) ekletirsin |
| Geliştirici | Fizibilite ve tahmin (2.7); teknik riskleri işaret eder |

**Kritik kararlar:** MVP sınırı nerede (2.8)? Neyi bilinçli olarak yapmıyoruz? Hangi metrik başarıyı ölçecek?

**Konuşulan terimler:** spec, PRD (2.5), epic, user story, acceptance criteria, Given/When/Then (2.6), MVP (2.8), scope / out of scope (2.8), cut line (2.8), MoSCoW / RICE (2.7), NFR (2.6), Definition of Done (2.10)

**Atlanırsa ne olur:** Herkes farklı bir şey anlar. Fark, iş bittiğinde ortaya çıkar ve o noktada düzeltmek en pahalı hâldedir. Ayrıca "bitti" tartışması her özellikte yeniden yaşanır.

**Senin cümlen:** *"Kabul kriterlerinde boş durum, hata durumu ve yükleme durumu yok. Yazmazsak tasarlanmaz."*

---

## 20.4 Faz 3 — Bilgi mimarisi ve akışlar

**Amaç:** Ekran çizmeden önce yapıyı ve yolu kurmak.

**Girdi:** Spec ve kabul kriterleri.

**Çıktı:**
- **Sitemap** (4.3)
- **Taksonomi ve etiketleme** (4.3)
- **User flow'lar** (4.4) — happy path, edge case ve error path dahil
- **Navigasyon modeli** (4.3, 7.2)
- **URL yapısı kararı** (1.2, 8.9) — hangi ekranın kendi adresi olacak
- **İlk veri modeli taslağı** (Bölüm 11) — geliştiriciyle birlikte

**Kim ne yapar:**
| Rol | Ne yapar |
|---|---|
| **Sen** | IA, akışlar, navigasyon, URL kararları — **bu faz senin** |
| Geliştirici | Veri modelini akışa göre tartışır (11.1) |
| PM | Akışın iş kurallarına uygunluğunu kontrol eder |

**Kritik kararlar:** Kaç seviye derinlik? Hangi ekran kendi URL'ine sahip olacak? Kullanıcı birden fazla X'e sahip olabilecek mi (11.6)?

**Konuşulan terimler:** IA, sitemap, taxonomy, card sorting, tree testing, mental model (4.3), user flow, task flow, happy path, edge case, error path, dead end (4.4), URL, slug (1.2), route (8.9), one-to-many / many-to-many (11.6)

**Atlanırsa ne olur:** Ekranlar tek tek güzel, akış bozuk olur. Ayrıca **veri modeli kararları sonradan verilir** — ve onları değiştirmek ekran değiştirmekten kat kat pahalıdır (11.10).

**Senin cümlen:** *"Kullanıcı birden fazla adres kaydedebilecek mi? Bu bir tasarım tercihi gibi görünüyor ama veri modeli kararı — şimdi konuşalım."*

---

## 20.5 Faz 4 — Tasarım

**Amaç:** Yapıyı görünür ve denenebilir hâle getirmek.

**Girdi:** Akışlar ve IA.

**Çıktı, sırayla:**
1. **Moodboard / yön seçimi** (4.5) — görsel yön onaylanır
2. **Wireframe'ler** (4.5) — yapı ve hiyerarşi kararı, düşük detayla
3. **Tasarım sistemi temeli** (Bölüm 5) — token'lar, tipografi ölçeği, renk rampası, spacing ölçeği
4. **Hi-fi ekranlar** (4.5) — tüm durumlar dahil
5. **Prototip** (4.5) — akış denenebilir hâlde
6. **Kullanıcı testi** (4.10) — mümkünse burada
7. **Handoff paketi** (2.10)

**Kim ne yapar:** Bu faz ağırlıkla senin. Geliştirici erken dahil olursa fizibilite sorunları burada yakalanır, uygulama sırasında değil.

**Kritik kararlar:** Tasarım sistemi kurulacak mı yoksa hazır kütüphane mi (9.5, headless vs styled)? Breakpoint'ler ne (5.8)? Motion'ın işi ne (5.9)?

**Teslim edilmesi gerekenler — en sık eksik kalanlar:**
- Tüm bileşen durumları: default, hover, **focus** (6.5), active, disabled, loading, error
- **Dört ekran hâli** (7.9): yükleniyor, boş, hata, dolu
- Responsive davranış ve breakpoint kuralları (5.8)
- Token adları ve değerleri (5.2) — ham hex değil
- Erişilebilirlik notları: başlık seviyeleri (6.3), odak sırası (6.5), alternatif metinler (6.4)
- Animasyon süre ve easing değerleri (5.9)
- Uzun metin / boş veri davranışı (4.4)

**Konuşulan terimler:** wireframe, mockup, prototype, fidelity (4.5), design system, design token, type scale, color ramp, spacing scale, breakpoint (Bölüm 5), visual hierarchy, gestalt (4.8), handoff, design review (2.10), a11y (Bölüm 6)

**Atlanırsa ne olur (veya eksik yapılırsa):** Geliştirici tahmin eder. Tahmin edilen her karar tasarımdan uzaklaşır ve Faz 8'de "design review" bir düzeltme listesine dönüşür.

**Senin cümlen:** *"Handoff'ta focus durumu ve boş ekran da var. Bunlar olmazsa uygulamada uydurulur."*

---

## 20.6 Faz 5 — Teknik kararlar ve proje kurulumu

**Amaç:** Geri dönüşü pahalı kararları bilinçli vermek ve altyapıyı kurmak.

**Girdi:** Spec'teki NFR'ler, tasarımın gereksinimleri, kısıtlar.

**Çıktı:**
- **Stack kararı** (1.6, 9.12) — UI katmanı, meta-framework, styling, bileşen kütüphanesi
- **Rendering stratejisi** (8.10) — sayfa bazında SSG / SSR / ISR
- **Veri modeli ve veritabanı** (Bölüm 11)
- **Auth yaklaşımı** (Bölüm 12)
- **Hosting ve ortamlar** (16.3, 16.6)
- **Repo, dallanma stratejisi, CI hattı** (15.7, 16.2)
- **ADR'ler** (14.12) — önemli kararların kaydı
- **Yapay zekâ talimat dosyası** (19.3) — kurallar, token'lar, yasaklar

**Kim ne yapar:**
| Rol | Ne yapar |
|---|---|
| Geliştirici / TL (2.1) | Teknik seçimleri yapar |
| **Sen** | Tasarım gereksinimlerinin teknik karşılığını savunursun: "bu sayfa SEO kritik, statik olmalı" (8.10, 8.13) |
| PM | Bütçe ve süre kısıtlarını verir |

**Kritik kararlar:** Bunların çoğu **tek yönlü kapı** (14.1) — yavaş ve bilinçli verilmeli. Her biri için "neyi feda ediyoruz?" sorusu sorulmalı (9.12).

**Konuşulan terimler:** stack (1.6), framework, meta-framework (9.1), CSR/SSR/SSG/ISR (8.10), headless vs styled (9.5), trade-off, vendor lock-in (9.12), ADR (14.12), monolith / modular monolith (14.2), environment (16.3), pipeline (16.2), branching strategy (15.7)

**Atlanırsa ne olur:** Kararlar "verilmez", kod yazılırken sessizce oluşur. Altı ay sonra kimse neden öyle olduğunu bilmez ve sorgulanamaz hâle gelir.

**Senin cümlen:** *"Bu bir ADR olsun. Altı ay sonra neden bunu seçtiğimizi hatırlamak isteyeceğiz."*

---

## 20.7 Faz 6 — Geliştirme döngüsü

**Amaç:** Tasarımı ve spec'i çalışan ürüne çevirmek — küçük ve denetlenebilir parçalar hâlinde.

**Girdi:** Handoff paketi, kabul kriterleri, teknik kurulum.

**Döngü:**
1. Sprint planning veya sıradaki iş seçilir (3.2)
2. Dal açılır (15.3)
3. Geliştirme yapılır (senin durumunda: yapay zekâya yazdırılır, Bölüm 19)
4. PR açılır (15.5); CI kontrolleri çalışır (16.2, 17.7)
5. Kod ve **tasarım** incelemesi yapılır — **senin dahil olduğun yer** (15.5, 2.10)
6. Preview ortamında kontrol edilir (16.3)
7. Merge, sonra staging (1.8)
8. Baştan

**Kim ne yapar:**
| Rol | Ne yapar |
|---|---|
| Geliştirici | Uygular, PR açar, inceler |
| **Sen** | Preview linkinde tasarımı kontrol edersin; PR'a yorum yazarsın; belirsizlikleri netleştirirsin |
| QA (2.1) | Test eder, hata raporlar (17.5) |

**Kritik kararlar:** PR boyutu küçük tutulacak mı (15.5)? Feature flag kullanılacak mı (16.8)? Yarım kalan iş ana dala girebilir mi (15.7)?

**Konuşulan terimler:** sprint, standup, blocker (3.2, 3.5), branch, PR, diff, code review, squash merge (Bölüm 15), CI, preview environment, feature flag (16.1, 16.3, 16.8), Definition of Done (2.10), N+1 (11.9), bundle size (8.12)

**Atlanırsa ne olur — bu fazda asıl risk atlama değil, denetimsizlik:** İnceleme yapılmazsa sapmalar birikir. Senin tarafında bu, "uygulama tasarımdan farklı ama artık düzeltmek büyük iş" durumudur.

**Senin cümlen:** *"Preview'e baktım: kart aralıkları ölçek dışı ve focus göstergesi yok. PR'a yorum bıraktım."*

---

## 20.8 Faz 7 — İçerik, medya ve SEO hattı

**Amaç:** Gerçek içeriği yerleştirmek ve bulunabilirliği kurmak. **En sık son dakikaya bırakılan faz.**

**Girdi:** Tasarım ve çalışan ekranlar.

**Çıktı:**
- **Gerçek metinler** (4.9) — lorem ipsum'un çıktığı yer
- **Arayüz metinleri** (4.9) — buton etiketleri, hata mesajları, boş durum metinleri
- **Görseller** optimize edilmiş hâlde (5.7, 8.12)
- **İkon seti tutarlılığı** (5.7)
- **SEO temelleri** (8.13) — başlıklar, meta açıklamalar, canonical, sitemap.xml, robots.txt
- **OG görselleri** (8.13) — paylaşım önizlemesi
- **Favicon** (8.13)
- **Yasal sayfalar** (13.11) — gizlilik, şartlar, çerez, aydınlatma metni
- **CMS alan yapısı** (9.10) — editör ne girecek

**Kim ne yapar:**
| Rol | Ne yapar |
|---|---|
| **Sen** | Arayüz metinleri, OG görseli şablonu, favicon, görsel optimizasyonu, art direction (5.7) |
| İçerik / pazarlama | Uzun metinler, SEO anahtar kelimeleri |
| Hukuk | Yasal metinler (13.11) |
| Geliştirici | Meta etiketler, structured data, sitemap |

**Kritik kararlar:** İçerik CMS'ten mi gelecek (9.10)? Editör beklenmedik uzunlukta metin girerse ne olacak (4.4)?

**Konuşulan terimler:** UX writing, microcopy, tone of voice (4.9), image optimization, WebP/AVIF, aspect ratio (5.7, 8.12), title, meta description, canonical, sitemap.xml, robots.txt, Open Graph, favicon (8.13), CMS, headless CMS (9.10), KVKK (13.10)

**Atlanırsa ne olur:** İki tipik sonuç. Birincisi: **gerçek içerik geldiğinde tasarım bozulur** — çünkü tasarım ideal uzunluktaki metinlerle yapılmıştır. İkincisi: site yayınlanır ama arama motorunda görünmez (8.13'teki robots.txt tuzağı) veya paylaşıldığında çıplak bir bağlantı olarak çıkar.

**Senin cümlen:** *"Gerçek metinlerle bir kez bakalım. Lorem ipsum'la yapılan tasarım, gerçek içerikte her zaman bozulur."*

---

## 20.9 Faz 8 — Test ve kalite kapıları

**Amaç:** Yayından önce bilinen sorunları yakalamak.

**Girdi:** Staging'de çalışan tam sürüm (1.8).

**Çıktı:**
- **Fonksiyonel test** — kabul kriterleri tek tek kontrol edilir (2.6)
- **Tasarım incelemesi** (2.10) — uygulamanın tasarıma uygunluğu
- **Erişilebilirlik denetimi** (6.9) — otomatik + manuel dört kontrol
- **Performans ölçümü** (8.12) — Core Web Vitals, bundle boyutu
- **Responsive kontrol** — en az üç boyut
- **Tarayıcı kontrolü** — NFR'de belirtilen tarayıcılar
- **Uç durum testi** (4.4) — uzun metin, boş liste, yavaş bağlantı
- **Hata raporları** (17.5) ve triyaj (17.5, severity vs priority)

**Kim ne yapar:**
| Rol | Ne yapar |
|---|---|
| QA / ekip | Senaryolu ve keşifsel test (17.5) |
| **Sen** | Tasarım incelemesi, erişilebilirlik manuel kontrolü, uç durum kurcalaması |
| Geliştirici | Bulguları düzeltir, regression testi ekler (17.2) |

**Kritik kararlar:** Hangi bulgular yayını bloke eder (17.5, severity vs priority)? Bilinen sorunlarla mı çıkıyoruz?

**Konuşulan terimler:** QA, test case, exploratory testing, bug report, reproduce steps, severity vs priority (17.5), regression (17.2), smoke test (17.2), design review (2.10), WCAG AA (6.2), Core Web Vitals (8.12), performance budget (17.6)

**Atlanırsa ne olur:** Kullanıcı QA rolünü üstlenir. Bulduğu her hata, güven kaybı olarak faturalanır.

**Senin cümlen:** *"Klavye turu yaptım, %200 zoom denedim, gri tonlamada baktım. Üç bulgu var, ikisi bloke edici."*

---

## 20.10 Faz 9 — Yayın

**Amaç:** Kontrollü biçimde canlıya çıkmak ve sorun çıkarsa hızlı geri dönebilmek.

**Girdi:** Kalite kapılarından geçmiş sürüm.

**Çıktı:**
- **Yayın öncesi kontrol listesi** tamamlanmış (Bölüm 21.9)
- **DNS ve SSL** hazır (16.7)
- **Ortam değişkenleri** doğru (16.3)
- **İzleme, hata takibi ve analitik** açık (16.10, 16.11)
- **Yedekleme** çalışıyor (11.11)
- **Geri dönüş planı** belli (16.9)
- **Sürüm etiketi ve changelog** (15.6, 15.8)

**Kim ne yapar:**
| Rol | Ne yapar |
|---|---|
| Geliştirici / DevOps | Deploy, DNS, izleme |
| **Sen** | Canlıda görsel kontrol; paylaşım önizlemesi testi; 404 ve hata sayfaları kontrolü |
| PM / pazarlama | Duyuru ve iletişim |

**Kritik kararlar:** Hangi strateji (16.8)? Feature flag arkasında mı çıkıyoruz? Cuma akşamı çıkmıyoruz, değil mi?

**Konuşulan terimler:** deploy, rollout (16.1), canary, blue-green, feature flag (16.8), rollback, hotfix (16.9), DNS propagation (16.7), release, tag, changelog (15.6, 15.8), soft launch, GA (2.11)

**Atlanırsa ne olur:** Yayın bir olaya dönüşür. En yaygın üç sürpriz: yanlış ortam değişkeni (16.3), taşınmamış e-posta DNS kaydı (16.7) ve staging'den gelen "botları engelle" ayarı (8.13).

**Senin cümlen:** *"Canlıda OG görselini bir test edelim; paylaşınca çıplak link görünmesin."*

---

## 20.11 Faz 10 — Yayın sonrası: ölçüm, bakım, iterasyon

**Amaç:** Döngüyü kapatmak — yaptığımız şey işe yaradı mı öğrenmek.

**Girdi:** Canlı ürün ve gerçek kullanıcılar.

**Çıktı:**
- **Metrik takibi** (3.7) — Faz 0'da belirlenen başarı ölçütü ölçülür
- **Funnel analizi** (4.10) — nerede kayıp var
- **Hata raporları** (16.11) — kullanıcının bildirmediği sorunlar
- **Core Web Vitals saha verisi** (8.12) — laboratuvar değil gerçek kullanıcı
- **Kullanıcı geri bildirimi**
- **Retrospective** (3.2) — süreç neyi öğretti
- **Bir sonraki iterasyonun girdileri** (2.2)

**Kim ne yapar:**
| Rol | Ne yapar |
|---|---|
| PM | Metrikleri yorumlar, sonraki önceliği belirler |
| **Sen** | Funnel'daki kopma noktalarını tasarım sorusuna çevirirsin; oturum kayıtlarına bakarsın (4.10) |
| Geliştirici | Hataları düzeltir, teknik borcu (17.9) toparlar |

**Kritik kararlar:** Hipotez doğrulandı mı (2.3)? Devam mı, düzelt mi, geri al mı?

**Konuşulan terimler:** success metric, KPI, north star (3.7), funnel, heatmap, session recording (4.10), A/B test (4.10), error tracking, product analytics (16.11), Core Web Vitals (8.12), retrospective (3.2), technical debt (17.9), feedback loop (2.2)

**Atlanırsa ne olur:** **En sinsi atlama budur.** Ölçülmeyen bir yayın, öğrenme üretmez. Ekip bir sonraki işe geçer ve aynı varsayımlarla aynı hataları yapar. Bölüm 2.2'deki döngü kapanmaz.

**Senin cümlen:** *"Faz 0'da başarı ölçütü şuydu. İki hafta veri toplandı — tuttu mu?"*

---

## 20.12 Özet tablo

Her fazın tek satırlık hâli. Bir projenin ortasında hızlı bakmak için.

| Faz | Amaç | Ana çıktı | Senin rolün | Anahtar terimler |
|---|---|---|---|---|
| **0 — Fikir** | Problemi tanımlamak | Problem statement, one-pager | Çözüm diline itiraz | 2.3, 2.5, 3.7 |
| **1 — Discovery** | Varsayımları azaltmak | İçgörüler, doğrulanmış varsayımlar | Kullanıcı araştırması, mevcut ürün incelemesi | 2.3, 2.4, 4.10 |
| **2 — Spec** | Kapsamı yazmak | PRD, kabul kriterleri, cut line | Durum ekranlarını ve a11y'yi kriterlere ekletmek | 2.5, 2.6, 2.7, 2.8 |
| **3 — IA & akış** | Yapıyı kurmak | Sitemap, user flow, URL yapısı | **Bu faz senin** | 4.3, 4.4, 1.2, 11.6 |
| **4 — Tasarım** | Görünür kılmak | Wireframe → sistem → hi-fi → prototip → handoff | **Bu faz senin** | Bölüm 4, 5, 6 |
| **5 — Teknik kurulum** | Pahalı kararları vermek | Stack, rendering, ADR, CI, ortamlar | Tasarım gereksinimlerinin teknik karşılığını savunmak | 1.6, 8.10, 9.12, 14.12, 16.3 |
| **6 — Geliştirme** | Üretmek | Çalışan özellikler, PR'lar | Preview kontrolü, PR yorumu, tasarım incelemesi | Bölüm 15, 16.1, 19 |
| **7 — İçerik & SEO** | Gerçek içeriği koymak | Metinler, görseller, meta, yasal sayfalar | Arayüz metinleri, görsel optimizasyonu, OG şablonu | 4.9, 5.7, 8.13, 13.11 |
| **8 — Test** | Bilineni yakalamak | Bulgu listesi, düzeltmeler | Tasarım incelemesi + a11y manuel kontrol | 2.10, 6.9, 17.5, 8.12 |
| **9 — Yayın** | Kontrollü çıkmak | Canlı sürüm, izleme açık | Canlı görsel kontrol, paylaşım testi | 16.7, 16.8, 16.9, 21.9 |
| **10 — Ölçüm** | Döngüyü kapatmak | Metrikler, retro, sonraki girdiler | Kopma noktalarını tasarım sorusuna çevirmek | 3.7, 4.10, 16.11, 2.2 |

---

### Üç ölçekte harita

Aynı harita farklı büyüklükteki işlerde nasıl uygulanır:

**Tek sayfalık tanıtım sitesi (1-2 hafta)**
Faz 0 yarım saat (kime, ne için, tek cümle) → Faz 1 atlanabilir ama rakip incelemesi yapılır → Faz 2 bir sayfa (kapsam + kabul kriterleri) → Faz 3 kısa (bölüm sırası, tek URL) → Faz 4 tam yapılır → Faz 5 hızlı (Astro veya Next.js, statik) → Faz 6-7 birlikte → Faz 8 tam yapılır → Faz 9-10 hafif.

**Küçük ürün / MVP (2-3 ay)**
Tüm fazlar yapılır ama kısa. Faz 1'de en az beş kullanıcı görüşmesi. Faz 5'te ADR'ler yazılır. Faz 6 sprint'lere bölünür. Faz 10 gerçekten yapılır — MVP'nin amacı zaten öğrenmektir (2.8).

**Kurumsal proje**
Her faz kendi onay adımına sahiptir (sign-off, 2.10). Faz 2'ye hukuk ve güvenlik dahil olur (Bölüm 13). Faz 5'te mimari inceleme (14.1) yapılır. Faz 8'e ayrı bir QA ekibi ve erişilebilirlik denetimi eklenir (6.2). Faz 9'da değişiklik yönetimi ve duyuru süreci vardır.

---

### En sık atlanan üç faz ve faturası

| Atlanan | Ne zaman fark edilir | Faturası |
|---|---|---|
| **Faz 1 — Discovery** | Faz 10'da | Yapılan özellik kullanılmıyor; harcanan tüm süre |
| **Faz 7 — İçerik & SEO** | Yayın günü veya sonrası | Gerçek içerikte bozulan tasarım; arama motorunda görünmeme |
| **Faz 10 — Ölçüm** | Hiç fark edilmez | Öğrenme olmaz; aynı hatalar tekrar eder |

Üçünün ortak özelliği: **atlandıkları anda hiçbir şey olmaz.** Bedelleri gecikmeli gelir ve o yüzden atlanmaları kolaydır.

---

**Biten bölüm:** Bölüm 20 — Sıfırdan tam sürüme akış haritası
**Sıradaki bölüm:** Bölüm 21 — "Bir sitede olması gerekenler" kontrol listesi
