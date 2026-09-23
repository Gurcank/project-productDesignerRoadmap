---
title: "Animasyon ve 3D"
sectionNumber: "9.6"
category: "kutuphaneler"
order: 3
cardCount: 5
sourceFile: "09-framework-ve-kutuphane-haritasi.md"
origin: "material"
flags: ["degisken"]
---
Bu alanda 2024-2025'te iki büyük değişiklik oldu ve ikisini de bilmen gerekiyor.

### Motion (eski adıyla Framer Motion)

- **Terim (İngilizce):** Motion — eski adı Framer Motion
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** React'te bildirimsel animasyon kütüphanesi: bileşenin giriş, çıkış, hover ve sürükleme animasyonlarını durum olarak tanımlarsın.
- **Ne işe yarar / neden var:** Arayüz hareketi (5.9) için en doğal React aracı: yerleşim animasyonları, çıkış geçişleri (bir öğe kaldırıldığında animasyonla gitmesi) ve jest yönetimi hazır gelir. Ayrıca `useReducedMotion` ile erişilebilirlik tercihine (6.8) uyum sağlar.
- **Nerede karşına çıkar:** React projelerinde varsayılan animasyon aracı.
- **Örnek kullanım:** "Modal giriş-çıkış animasyonunu Motion ile yapalım; AnimatePresence çıkış geçişini hallediyor."
- `[DEĞİŞKEN BİLGİ]` **İsim değişti ve bunu bilmen gerekiyor:** Framer Motion bağımsız bir proje hâline gelip **Motion** adını aldı. Paket adı `framer-motion` yerine `motion`, içe aktarma yolu `motion/react` oldu; eski paket hâlâ çalışıyor. Ayrıca artık yalnızca React değil, vanilla JavaScript ve Vue de destekleniyor. Kaynaklar yeniden adlandırma tarihinde tutarsız (2024 sonu ile 2025 ortası arasında farklı tarihler veriliyor); **tarihe değil, mevcut duruma güven.**
- **İlgili terimler:** Motion design (5.9), prefers-reduced-motion (6.8), GSAP

### GSAP

- **Terim (İngilizce):** GSAP — GreenSock Animation Platform
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Framework'ten bağımsız, zaman çizelgesi ve kaydırma tabanlı animasyonlarda sektör standardı olan kütüphane.
- **Ne işe yarar / neden var:** Karmaşık sıralı animasyonlar, kaydırmaya bağlı anlatım (7.5, scrollytelling) ve sabitleme (pinning) gibi işlerde Motion'dan belirgin biçimde derindir. **ScrollTrigger** eklentisi bu alanın referans aracıdır.
- **Nerede karşına çıkar:** Ödüllü tanıtım siteleri ve kampanya sayfalarında.
- **Örnek kullanım:** "Kaydırmaya bağlı ürün turu için GSAP ScrollTrigger kullanalım; Motion'ın useScroll'u bu derinlikte değil."
- `[DEĞİŞKEN BİLGİ]` **Fiyatlandırma değişti:** GSAP daha önce bazı eklentileri (SplitText, MorphSVG, ScrollSmoother, DrawSVG) ücretli bir üyelikle sunuyordu. Webflow'un GreenSock'u satın almasının ardından, **30 Nisan 2025'te GSAP'ın tamamının ticari kullanım dahil ücretsiz hâle geldiği** raporlanıyor. Bu, "GSAP pahalı" diyen eski kaynakları geçersiz kılar.
- **Karıştırılanlar:** Motion ile GSAP rakip değil, farklı işler için araçlardır. Aynı projede ikisi birden kullanılabilir — ama her öğenin sahibi net olmalıdır.
- **İlgili terimler:** Motion, Scrollytelling (7.5), Lenis

### Lenis

- **Terim (İngilizce):** Lenis
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Sayfa kaydırmasını yumuşatan küçük kütüphane.
- **Ne işe yarar / neden var:** Tanıtım sitelerinde "premium" hissi veren yumuşak kaydırma etkisini üretir.
- **Nerede karşına çıkar:** Ajans ve portfolyo sitelerinde.
- **Örnek kullanım:** "Lenis ekleyelim ama `prefers-reduced-motion` açıkken devre dışı kalsın."
- **Karıştırılanlar:** Kaydırma davranışını değiştirmek bir **erişilebilirlik riskidir** (6.8): kullanıcının beklediği kaydırma hissini bozar ve bazı kullanıcılarda rahatsızlık yaratır. Kapatılabilir olmalıdır.
- **İlgili terimler:** GSAP, Scroll hijacking (7.5), prefers-reduced-motion (6.8)

### Three.js / React Three Fiber

- **Terim (İngilizce):** Three.js, React Three Fiber (R3F)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Tarayıcıda 3B grafik üretmeyi sağlayan kütüphane ve onun React karşılığı.
- **Ne işe yarar / neden var:** Ürün konfigüratörleri, 3B ürün görselleri ve etkileyici tanıtım sahneleri için kullanılır.
- **Nerede karşına çıkar:** Ürün tanıtım sitelerinde ve deneysel projelerde.
- **Örnek kullanım:** "3B sahne etkileyici olur ama paket boyutu ve mobil performans maliyetini önce ölçelim."
- **Ne zaman kullanılmaz:** Ağırdır: paket boyutu, GPU kullanımı ve pil tüketimi ciddi. Mobil cihazlarda deneyimi bozabilir. **Bir gerekçesi olmalıdır** — sadece etkileyici görünsün diye eklenen 3B, performans bütçesini (8.12) tek başına tüketebilir.
- **İlgili terimler:** Bundle size (8.12), Performance budget (8.12)

### Lottie / Spline

- **Terim (İngilizce):** Lottie, Spline
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Lottie, tasarım aracında hazırlanmış vektör animasyonlarını web'de oynatan format. Spline, kod yazmadan 3B sahne hazırlamayı sağlayan araç.
- **Ne işe yarar / neden var:** Tasarımcının, geliştiriciye bağımlı olmadan animasyon üretmesini sağlar — **bu senin için doğrudan bir imkândır.**
- **Nerede karşına çıkar:** Boş durum illüstrasyonlarında (7.9), onboarding animasyonlarında, hero sahnelerinde.
- **Örnek kullanım:** "Boş durum animasyonunu Lottie olarak verelim; geliştiriciye JSON dosyası yeterli."
- **Karıştırılanlar:** Lottie dosyaları beklenenden büyük olabilir; karmaşık animasyonlarda dosya boyutunu kontrol et. `[DEĞİŞKEN BİLGİ]` Bu araçların fiyatlandırma ve dışa aktarma seçenekleri değişir.
- **İlgili terimler:** Motion design (5.9), Asset (5.7)
