---
title: "Motion"
sectionNumber: "5.9"
category: "tasarim-sistemi"
order: 9
cardCount: 7
sourceFile: "05-tasarim-sistemi-ve-gorsel-dil.md"
origin: "material"
flags: ["emin-degil"]
---
Hareketin tasarımı. Kuralı basit: **hareketin bir işi olmalı.** İşi olmayan animasyon, kullanıcıyı yavaşlatan bir gösteriştir.

### Motion design

- **Terim (İngilizce):** Motion design
- **Türkçesi:** Hareket tasarımı
- **Tanım:** Arayüzdeki geçişlerin, animasyonların ve tepkilerin tasarımı.
- **Ne işe yarar / neden var:** İyi hareket üç işten birini yapar: **yön gösterir** (bu panel nereden geldi, nereye gitti), **durum bildirir** (yükleniyor, kaydedildi), **ilişki kurar** (tıklanan kart bu detaya dönüştü). Bu üçünden birini yapmıyorsa hareket gereksizdir.
- **Nerede karşına çıkar:** Prototip ve handoff'ta. Genelde en son düşünülür ve bu yüzden tutarsız olur.
- **Örnek kullanım:** "Bu animasyon hiçbir işe yaramıyor, sadece süslüyor; kaldıralım."
- **İlgili terimler:** Micro-interaction, Duration, Easing

### Duration

- **Terim (İngilizce):** Duration
- **Türkçesi:** Süre
- **Tanım:** Bir animasyonun ne kadar sürdüğü, milisaniye cinsinden.
- **Ne işe yarar / neden var:** Süre, algılanan hızı doğrudan etkiler. Genel yaklaşım: küçük ve yakın hareketler kısa (yaklaşık 100–200 ms), büyük ve uzak hareketler biraz daha uzun (yaklaşık 250–400 ms). Kullanıcının sık tekrarladığı bir etkileşim ne kadar hoş olursa olsun uzun sürerse rahatsız edici hâle gelir.
- **Nerede karşına çıkar:** Tasarım sistemi motion token'larında.
- **Örnek kullanım:** "Hover geçişi 300ms çok yavaş; 150'ye indirelim, tekrar eden bir etkileşim."
- **Karıştırılanlar:** `[EMİN DEĞİLİM]` Bu sayı aralıkları sektörde yaygın öneriler; kesin bir standart değil. Sistemine göre ayarla ve tekrar sıklığını ölçüt al.
- **İlgili terimler:** Easing, Motion token, Response time (4.7)

### Easing

- **Terim (İngilizce):** Easing (timing function)
- **Türkçesi:** Yumuşatma eğrisi
- **Tanım:** Animasyonun hızının süre boyunca nasıl değiştiği.
- **Ne işe yarar / neden var:** Doğrusal (linear) hareket mekanik hisseder çünkü gerçek dünyada hiçbir şey sabit hızda başlayıp durmaz. Genel yaklaşım: ekrana **giren** öğe hızlı başlayıp yavaşlar (ease-out), ekrandan **çıkan** öğe yavaş başlayıp hızlanır (ease-in), yer değiştiren öğe ikisini birden kullanır (ease-in-out).
- **Nerede karşına çıkar:** Motion token'larında ve prototip ayarlarında.
- **Örnek kullanım:** "Modal açılışı ease-out olsun, kapanışı ease-in; şu an ikisi de linear ve robotik duruyor."
- **İlgili terimler:** Duration, Transition

### Transition vs Animation

- **Terim (İngilizce):** Transition, Animation
- **Türkçesi:** Geçiş, animasyon
- **Tanım:** Transition = bir durumdan diğerine geçerken oluşan hareket (hover, açık/kapalı). Animation = kendi kendine çalışan, tekrarlanabilen hareket dizisi (yükleme dönen çemberi).
- **Ne işe yarar / neden var:** Farklı işler için farklı araçlar. Arayüzün büyük kısmı transition'dır; animation daha çok durum göstergelerinde kullanılır.
- **Nerede karşına çıkar:** CSS tanımlarında ve tasarım tesliminde.
- **Örnek kullanım:** "Buton hover'ı transition, skeleton parıltısı animation."
- **İlgili terimler:** Micro-interaction, Loading state (7.9)

### Micro-interaction

- **Terim (İngilizce):** Micro-interaction
- **Türkçesi:** Mikro etkileşim
- **Tanım:** Tek bir küçük eyleme verilen küçük görsel tepki: butonun basılma hissi, kalp ikonunun doldurulması, kopyalandı işareti.
- **Ne işe yarar / neden var:** Sistemin cevap verdiğini hissettirir (feedback, 4.6). En büyük kalite farkını yaratan detaylardan biridir — ve ölçülü kullanıldığında.
- **Nerede karşına çıkar:** Buton, form ve etkileşimli bileşen tasarımında.
- **Örnek kullanım:** "Kopyala butonuna mikro etkileşim ekleyelim: ikon 1 saniye tik işaretine dönsün."
- **İlgili terimler:** Feedback (4.6), Transition, Motion design

### Staggering / Orchestration

- **Terim (İngilizce):** Staggering, orchestration
- **Türkçesi:** Kademeli başlatma, koreografi
- **Tanım:** Staggering = birden çok öğenin küçük gecikmelerle sırayla animasyona girmesi. Orchestration = birden çok animasyonun birbirine göre zamanlanması.
- **Ne işe yarar / neden var:** Aynı anda hareket eden 20 öğe kaotik görünür; küçük gecikmelerle sıralanınca göz takip edebilir. Ama gecikmeler toplamı büyürse kullanıcı bekler — özellikle sık ziyaret edilen ekranlarda risklidir.
- **Nerede karşına çıkar:** Liste ve galeri girişlerinde, pazarlama sayfalarında.
- **Örnek kullanım:** "Kart listesine 40ms stagger verelim ama toplam 300ms'i geçmesin."
- **İlgili terimler:** Duration, Motion design

### prefers-reduced-motion

- **Terim (İngilizce):** `prefers-reduced-motion`
- **Türkçesi:** Azaltılmış hareket tercihi
- **Tanım:** Kullanıcının işletim sistemi düzeyinde "hareketi azalt" ayarını açtığını bildiren CSS medya sorgusu.
- **Ne işe yarar / neden var:** Vestibüler rahatsızlığı olan kullanıcılarda büyük hareketler baş dönmesi ve mide bulantısı yaratabilir. Bu bir tercih değil, erişilebilirlik gereğidir. Doğru uygulama animasyonları tamamen kapatmak değil, **büyük yer değiştirmeleri ve paralaks etkilerini** kaldırıp yerine kısa bir opaklık geçişi bırakmaktır.
- **Nerede karşına çıkar:** Erişilebilirlik denetimlerinde ve motion tanımlarında.
- **Örnek kullanım:** "Paralaks efekti `prefers-reduced-motion` açıkken devre dışı kalsın; sadece fade uygulayalım."
- **İlgili terimler:** a11y (6.8), Motion design
