---
title: "Teknoloji seçimi"
sectionNumber: "9.12"
category: "frameworkler"
order: 4
cardCount: 4
sourceFile: "09-framework-ve-kutuphane-haritasi.md"
origin: "material"
flags: []
---
Bu alt bölüm bir terim listesi değil, bir **karar çerçevesi**. Bu bölümdeki tek eskimeyen içerik burası.

### Trade-off

- **Terim (İngilizce):** Trade-off
- **Türkçesi:** Takas / ödünleşim
- **Tanım:** Bir şeyi kazanmak için başka bir şeyden vazgeçme durumu.
- **Ne işe yarar / neden var:** **Teknoloji seçiminde "en iyi" diye bir cevap yoktur; sadece takaslar vardır.** Bir kütüphane hız kazandırır, esneklik kaybettirir. Bir framework kararı azaltır, kilitlenme yaratır. Bir seçeneği savunurken neyi feda ettiğini söyleyemiyorsan, seçeneği yeterince anlamamışsındır.
- **Nerede karşına çıkar:** Her teknik karar toplantısında. **Bu terimi kullanabilmek, teknik masada ciddiye alınmanın en hızlı yoludur.**
- **Örnek kullanım:** "MUI hızlandırır ama tasarım özgünlüğünden ödün veririz; takas bu. Bizim için özgünlük mü hız mı öncelikli?"
- **İlgili terimler:** ADR (14.12), Constraint (18.4)

### Seçim yaparken sorulacak sorular

Bir kütüphane veya framework önerildiğinde sorulacak sorular. Kod bilmeden de sorabilirsin ve hepsi meşru sorulardır:

1. **Hangi problemi çözüyor?** — Cevap "modern olduğu için" ise problem yok demektir.
2. **Bunu eklemesek ne olur?** — Alternatif maliyet. Bazen 30 satır kod, 40KB'lık bir bağımlılıktan ucuzdur.
3. **Bakımı sürüyor mu?** — Son sürüm ne zaman çıktı, kaç kişi bakıyor, açık sorunlar birikmiş mi. (styled-components örneği, 8.4.)
4. **Paket boyutu ne?** — Kullanıcıya ne kadar ek JavaScript gidiyor (8.12).
5. **Erişilebilirliği nasıl?** — Özellikle etkileşimli bileşenlerde bu, sonradan düzeltilemeyecek bir karardır (9.5).
6. **Ekip biliyor mu?** — Öğrenme süresi gerçek bir maliyettir.
7. **Vazgeçmek ne kadar zor?** — Yarın değiştirmek istesek kaç dosyaya dokunmamız gerekir?
8. **Kim sahibi?** — Tek kişilik bir proje mi, şirket destekli mi? Satın alınırsa ne olur? (Radix örneği, 9.5.)

### Vendor lock-in

- **Terim (İngilizce):** Vendor lock-in
- **Türkçesi:** Sağlayıcıya bağımlılık
- **Tanım:** Bir sağlayıcının araçlarına o kadar bağlanmak ki çıkmak pratikte imkânsız hâle gelmek.
- **Ne işe yarar / neden var:** Her bağımlılık kötü değildir — bağımlılık karşılığında hız ve kolaylık alırsın. Sorun, bunun **bilinçsiz** olmasıdır. Doğru soru "bağımlı olalım mı?" değil, "çıkmak isteseydik maliyeti ne olurdu ve bunu kabul ediyor muyuz?"
- **Nerede karşına çıkar:** Hosting, veritabanı, kimlik doğrulama ve CMS seçimlerinde.
- **Örnek kullanım:** "Vercel'e bağımlılığı kabul ediyoruz ama veritabanını taşınabilir tutalım; ikisi birden kilitlenmesin."
- **İlgili terimler:** Trade-off, BaaS (11.12), Hosting (16.6)

### Boring technology

- **Terim (İngilizce):** "Choose boring technology"
- **Türkçesi:** Sıkıcı teknoloji seçmek
- **Tanım:** Yeni ve heyecan verici olan yerine, olgun ve öngörülebilir olanı seçme ilkesi.
- **Ne işe yarar / neden var:** Her yeni teknoloji, bilinmeyen sorunlar getirir. Bir projede kaç tane bilinmeyen taşıyabileceğin sınırlıdır; o bütçeyi asıl probleme harcamak, araç seçimine harcamaktan iyidir. **Bu, "yeniliğe kapalı olmak" değil, yenilik bütçesini bilinçli harcamaktır.**
- **Nerede karşına çıkar:** Teknoloji seçimi tartışmalarında.
- **Örnek kullanım:** "Bu projede yeni bir framework denemeyelim; asıl risk zaten teslim tarihinde."
- **İlgili terimler:** Trade-off, Spike (3.5)
