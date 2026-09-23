---
title: "Hosting ve deploy platformları"
sectionNumber: "16.6"
category: "devops-ve-yayin"
order: 6
cardCount: 3
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: ["degisken", "emin-degil"]
---
> `[DEĞİŞKEN BİLGİ]` **Bu alt bölüm dosyadaki en hızlı eskiyen içeriklerden biri.** Aşağıdaki konumlandırmalar Eylül 2026 itibarıyla topladığım ikincil kaynaklara dayanıyor. **Fiyatları karar vermeden önce mutlaka platformun kendi sayfasından doğrula.**

### Platform manzarası

| Platform | Ne için güçlü | Dikkat edilecek |
|---|---|---|
| **Vercel** | Next.js için en iyi geliştirici deneyimi; ISR, görsel optimizasyonu ve önizleme ortamları kutudan çıkar | Kullanıma dayalı faturalama maliyet sürprizi yapabilir. Ücretsiz (Hobby) katmanının **ticari kullanıma kapalı** olduğu belirtiliyor |
| **Netlify** | Geniş framework desteği, form yönetimi, A/B bölme testi; Astro ve statik siteler için güçlü | Kredi tabanlı bir fiyatlandırmaya geçtiği raporlanıyor |
| **Cloudflare Pages / Workers** | Uç ağda çalışır, cömert ücretsiz katman, ölçekte en ucuz seçeneklerden | Öğrenme eğrisi en dik olanı; Next.js için bir uyarlama katmanı gerekebilir |
| **Railway** | Sürekli çalışan süreçler (API, worker, WebSocket) ve yanında veritabanı; koltuk başına ücret yok | Kullanıma dayalı fatura; kaynak boyutlandırması yanlışsa tahmin zorlaşır |
| **Render** | Kalıcı konteyner, soğuk başlangıç yok, tahmin edilebilir aylık ücret | Uç ağ avantajı yok |
| **Fly.io** | Docker şeklinde, bölge kontrolü, alt uçta en ucuz | En çok operasyon bilgisi isteyen seçenek; ücretsiz katmanını daralttığı raporlanıyor |
| **Kendi sunucun (VPS + Coolify vb.)** | En düşük maliyet; tam kontrol | Operasyon disiplini gerektirir: güncelleme, yedek, güvenlik, izleme senin sorumluluğunda |

### Karar çerçevesi

Platform seçiminde sorulacak sorular — fiyattan önce:

1. **Uygulama hangi şekilde?** İstek bazlı fonksiyonlar mı (Vercel, Netlify, Cloudflare), yoksa sürekli çalışan süreçler mi (Railway, Render, Fly)? WebSocket (10.5), arka plan worker'ı (10.12) veya uzun süren iş varsa serverless tek başına yetmez.
2. **Önizleme ortamı var mı?** Senin iş akışın için en değerli özellik bu (16.3).
3. **Fatura nasıl davranıyor?** Kullanıma dayalı mı, sabit mi? Ani trafik artışında ne olur?
4. **Harcama sınırı koyabiliyor muyum?** Bu, bir sonraki başlıktaki tuzağın tek gerçek savunması.
5. **Çıkış maliyeti ne?** Vendor lock-in (9.12) bilinçli bir karar olmalı.

### Maliyet tuzağı

`[EMİN DEĞİLİM]` Kullanıma dayalı faturalamanın bilinen bir riski var: **bot ve tarayıcı trafiği faturayı şişirebilir.** Yayınlanmamış bir projenin, yapay zekâ botlarının taraması yüzünden dört haneli bir fatura ürettiğine dair vaka anlatımları var; bu belirli vakayı doğrulamadım ama risk yapısal olarak gerçek. Savunma: **harcama sınırı ve uyarı kurmak**, bot trafiğini engellemek (13.9, WAF) ve hız sınırı (10.10) uygulamak. Bir projeyi yayına almadan önce bunları kurmak, sonradan faturayı tartışmaktan kolaydır.
