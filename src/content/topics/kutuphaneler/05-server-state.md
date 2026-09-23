---
title: "Server state"
sectionNumber: "9.8"
category: "kutuphaneler"
order: 5
cardCount: 1
sourceFile: "09-framework-ve-kutuphane-haritasi.md"
origin: "material"
flags: []
---
Sunucudan gelen verinin yönetimi. **Bu ayrımı bilmek, teknik konuşmalarda seni ayırır.**

### TanStack Query / SWR

- **Terim (İngilizce):** TanStack Query (eski adıyla React Query), SWR
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Sunucudan veri çekme, önbelleğe alma, tazeleme ve senkronizasyonu yöneten kütüphaneler.
- **Ne işe yarar / neden var:** Sunucudan gelen veri **senin verin değildir** — sunucudaki verinin bir kopyasıdır ve her an eskiyebilir. Bu araçlar o gerçeği yönetir: veriyi önbelleğe alır, arka planda tazeler, aynı isteği iki kez atmaz, hata durumunda yeniden dener.
- **Ne işe yarar / neden var (tasarım tarafı):** Yükleme, hata, boş ve "eski veri gösterilirken tazeleniyor" durumlarını (7.9) hazır olarak yönetir — yani senin tasarlaman gereken durumları ortaya çıkarır. Ayrıca optimistic UI (7.9) desteği hazır gelir.
- **Nerede karşına çıkar:** Veri çeken her React uygulamasında.
- **Örnek kullanım:** "Server state'i TanStack Query yönetsin, Zustand'da sadece arayüz durumu kalsın."
- **Karıştırılanlar:** **En yaygın mimari hata, sunucu verisini Redux/Zustand gibi client state araçlarında tutmaktır.** O araçlar önbellek geçersizleştirme, tazeleme ve yeniden deneme gibi işleri bilmez; ekip bunları elle yazmak zorunda kalır.
- **İlgili terimler:** Zustand (9.7), Caching (10.11), Optimistic UI (7.9)
