---
title: "Build zinciri"
sectionNumber: "8.11"
category: "front-end"
order: 11
cardCount: 4
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: ["degisken"]
---
Yazılan kodun, tarayıcının çalıştırabileceği dosyalara dönüşme süreci. Seviye 2 terimler — duyduğunda anlaman yeter.

### Package manager / Dependency

- **Terim (İngilizce):** Package manager (npm, pnpm, yarn, bun), dependency, `package.json`, lockfile
- **Türkçesi:** Paket yöneticisi, bağımlılık
- **Tanım:** Projenin kullandığı dış kütüphaneleri indiren ve sürümlerini yöneten araç. `package.json` hangi paketlerin kullanıldığını, lockfile ise tam olarak hangi sürümlerin kurulduğunu kaydeder.
- **Ne işe yarar / neden var:** Lockfile, "bende çalışıyor" probleminin (1.8) büyük kısmını çözer: herkesin bilgisayarında ve sunucuda birebir aynı sürümler kurulur.
- **Nerede karşına çıkar:** Her projede.
- **Örnek kullanım:** "Lockfile'ı da commit edelim; sürüm farkından kaynaklanan hataları önler."
- **Karıştırılanlar:** *Dependency* burada "dış kütüphane" anlamındadır; proje yönetimindeki *dependency* (3.5) farklı bir şeydir.
- **İlgili terimler:** Semantic versioning (15.8), Supply chain (13.x)

### Bundler / Transpiler

- **Terim (İngilizce):** Bundler (Vite, webpack, Turbopack, esbuild, Rollup), transpiler (Babel, SWC)
- **Türkçesi:** Paketleyici, dönüştürücü
- **Tanım:** Bundler onlarca kaynak dosyayı tarayıcının verimli yükleyebileceği birkaç dosyada birleştirir. Transpiler ise modern veya TypeScript kodunu tarayıcıların anlayacağı JavaScript'e çevirir.
- **Ne işe yarar / neden var:** Geliştiricinin düzenli dosyalarla çalışmasını ve tarayıcının optimize edilmiş dosyalar almasını aynı anda mümkün kılar. `[DEĞİŞKEN BİLGİ]` Bu alandaki araçlar hızla değişiyor; hangi aracın yaygın olduğu her yıl kayabiliyor.
- **Nerede karşına çıkar:** Proje kurulumu ve build süresi tartışmalarında.
- **Örnek kullanım:** "Build 4 dakika sürüyor; bundler'ı değiştirmeyi değerlendirelim."
- **İlgili terimler:** Build (16.2), TypeScript (8.6)

### Tree-shaking / Code splitting / Lazy loading

- **Terim (İngilizce):** Tree-shaking, code splitting, lazy loading, dynamic import
- **Türkçesi:** Ölü kod ayıklama, kod bölme, tembel yükleme
- **Tanım:** **Tree-shaking** kullanılmayan kodu çıkarır. **Code splitting** tüm kodu tek dosyada göndermek yerine sayfa bazında böler. **Lazy loading** bir parçayı ancak gerekli olduğunda yükler.
- **Ne işe yarar / neden var:** Üçü de aynı hedefe hizmet eder: **kullanıcıya o an gerekmeyen kodu göndermemek.** Ana sayfaya giren birinin, ayarlar ekranının kodunu indirmesi gereksizdir. Tasarım tarafındaki karşılığı: ağır bir bileşen (grafik kütüphanesi, harita, video oynatıcı) ancak görünür olduğunda yüklenebilir.
- **Nerede karşına çıkar:** Performans optimizasyonunda.
- **Örnek kullanım:** "Harita bileşenini lazy load edelim; sayfanın altında ve çoğu kullanıcı oraya inmiyor."
- **İlgili terimler:** Bundle size (8.12), LCP (8.12), Skeleton (7.9)

### Source map

- **Terim (İngilizce):** Source map
- **Türkçesi:** Kaynak haritası
- **Tanım:** Sıkıştırılmış üretim kodunu, okunabilir orijinal koda geri eşleyen dosya.
- **Ne işe yarar / neden var:** Canlıda bir hata oluştuğunda hangi satırdan geldiğini görmeyi sağlar. Hata izleme araçları (16.11) buna dayanır.
- **Nerede karşına çıkar:** Hata ayıklamada ve Sentry kurulumunda.
- **Örnek kullanım:** "Source map'leri Sentry'ye yükleyelim; yoksa hata raporları okunamaz oluyor."
- **İlgili terimler:** Error tracking (16.11), Minify
