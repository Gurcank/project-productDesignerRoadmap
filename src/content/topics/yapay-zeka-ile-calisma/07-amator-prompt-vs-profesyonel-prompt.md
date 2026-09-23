---
title: "Amatör prompt vs profesyonel prompt"
sectionNumber: "19.7"
category: "yapay-zeka-ile-calisma"
order: 7
cardCount: 4
sourceFile: "19-yapay-zeka-ile-profesyonel-calisma.md"
origin: "material"
flags: []
---
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
