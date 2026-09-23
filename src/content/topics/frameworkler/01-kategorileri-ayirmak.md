---
title: "Kategorileri ayırmak"
sectionNumber: "9.1"
category: "frameworkler"
order: 1
cardCount: 4
sourceFile: "09-framework-ve-kutuphane-haritasi.md"
origin: "material"
flags: []
---
Bu dört terimi karıştırmak, teknoloji tartışmalarını anlaşılmaz hâle getirir.

### Library

- **Terim (İngilizce):** Library
- **Türkçesi:** Kütüphane
- **Tanım:** Belirli bir işi yapmak için çağırdığın hazır kod paketi.
- **Ne işe yarar / neden var:** Kontrol sende kalır: sen onu çağırırsın, o sana bir sonuç döner. Bir tarih biçimlendirme kütüphanesi, bir grafik kütüphanesi böyledir.
- **Nerede karşına çıkar:** Bağımlılık listelerinde (8.11).
- **Örnek kullanım:** "Bunun için ayrı bir kütüphane eklemeyelim; 20 satırla çözülüyor."
- **Karıştırılanlar:** React teknik olarak bir **kütüphanedir**, framework değil — ama günlük konuşmada herkes framework der ve bu bir sorun değildir.
- **İlgili terimler:** Framework, Dependency (8.11)

### Framework

- **Terim (İngilizce):** Framework
- **Türkçesi:** Çatı / çerçeve
- **Tanım:** Projenin yapısını ve akışını belirleyen, senin onun kurallarına uyduğun sistem.
- **Ne işe yarar / neden var:** Kontrol tersine döner: sen onu değil, o seni çağırır. Karşılığında dosya yapısı, yönlendirme, veri akışı gibi kararları hazır verir — böylece her projede aynı kararları yeniden vermezsin.
- **Nerede karşına çıkar:** Proje kurulumunda ve iş ilanlarında.
- **Örnek kullanım:** "Framework'ün kurallarına uyalım; kendi yapımızı kurarsak ekosistemden faydalanamayız."
- **İlgili terimler:** Library, Meta-framework

### Meta-framework

- **Terim (İngilizce):** Meta-framework
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir UI kütüphanesinin (React, Vue, Svelte) üzerine kurulan ve eksik parçalarını tamamlayan üst katman.
- **Ne işe yarar / neden var:** React tek başına sadece arayüz çizer; yönlendirme, sunucu tarafı işleme, veri çekme, build ve deploy kararlarını çözmez. Meta-framework bunların hepsini bir arada verir. Next.js, Nuxt, SvelteKit, Astro, React Router v7 bu kategoridedir.
- **Nerede karşına çıkar:** Proje başlangıcının en kritik kararı.
- **Örnek kullanım:** "React seçtik ama asıl karar meta-framework: Next.js mi React Router mı?"
- **İlgili terimler:** Framework, Rendering stratejileri (8.10)

### Runtime

- **Terim (İngilizce):** Runtime (Node.js, Deno, Bun, browser)
- **Türkçesi:** Çalışma ortamı
- **Tanım:** JavaScript kodunun fiilen çalıştığı ortam.
- **Ne işe yarar / neden var:** JavaScript tarayıcı için tasarlanmıştı; Node.js onu sunucuda da çalıştırılabilir hâle getirdi. Bu, ön yüz ve arka yüzün aynı dilde yazılabilmesini sağladı.
- **Nerede karşına çıkar:** Sunucu tarafı ve deploy konuşmalarında (10.1, 16.6).
- **Örnek kullanım:** "Edge runtime'da bazı Node API'leri çalışmıyor; o kodu ayrı bir yere alalım."
- **İlgili terimler:** Node.js (10.13), Edge function (10.8)
