---
title: "Component mimarisi"
sectionNumber: "8.7"
category: "front-end"
order: 7
cardCount: 6
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: []
---
Modern front-end'in temel fikri: arayüzü yeniden kullanılabilir parçalara bölmek. Tasarım sistemiyle (Bölüm 5) birebir örtüşür.

### Component

- **Terim (İngilizce):** Component
- **Türkçesi:** Bileşen
- **Tanım:** Kendi görünümü ve davranışı olan, yeniden kullanılabilir arayüz parçası.
- **Ne işe yarar / neden var:** Tekrarı ortadan kaldırır ve tutarlılık üretir. **Figma'daki component ile kavramsal olarak aynıdır** (5.10); iyi ekiplerde ikisinin adları ve sınırları da eşleşir.
- **Nerede karşına çıkar:** Her modern front-end projesinde.
- **Örnek kullanım:** "Bu kart üç yerde tekrar ediyor; tek bir bileşene çıkaralım."
- **İlgili terimler:** Props, Component library (5.1), Design system (5.1)

### Props

- **Terim (İngilizce):** Props (properties)
- **Türkçesi:** Özellikler
- **Tanım:** Bir bileşene dışarıdan verilen, davranışını ve içeriğini belirleyen değerler.
- **Ne işe yarar / neden var:** Aynı bileşenin farklı hâllerde kullanılmasını sağlar: bir buton `variant="primary"` veya `variant="ghost"` alabilir. **Figma'daki component property'nin doğrudan karşılığıdır** (5.10) — bu eşleşme, handoff'ta ortak dil kurar.
- **Nerede karşına çıkar:** Bileşen tanımlarında ve handoff'ta.
- **Örnek kullanım:** "Butonun prop'ları: variant, size, icon, disabled, loading. Figma'daki property'lerle aynı isimlerde olsun."
- **İlgili terimler:** Component, Variant (5.10), Handoff (2.10)

### State

- **Terim (İngilizce):** State
- **Türkçesi:** Durum
- **Tanım:** Bileşenin zaman içinde değişen kendi verisi: menü açık mı, form gönderiliyor mu, hangi sekme seçili.
- **Ne işe yarar / neden var:** Props dışarıdan gelir ve değişmez; state içeride yaşar ve değişir. Arayüzün "canlı" olmasını sağlayan şey budur.
- **Nerede karşına çıkar:** Etkileşim tasarımında. Tasarımcı olarak her state'in görsel karşılığını tanımlaman gerekir.
- **Örnek kullanım:** "Butonun üç state'i var: normal, loading, disabled. Üçünü de teslimde verdim."
- **Karıştırılanlar:** *State* (bileşenin verisi) ≠ *durum ekranları* (7.9). İlişkilidirler: state değiştiğinde farklı bir ekran gösterilir.
- **İlgili terimler:** Props, State yönetimi (9.7), Durum ekranları (7.9)

### Children / Composition

- **Terim (İngilizce):** Children, composition
- **Türkçesi:** Çocuk öğeler, kompozisyon
- **Tanım:** Bir bileşenin içine başka bileşenlerin yerleştirilebilmesi.
- **Ne işe yarar / neden var:** Esneklik üretir. Bir kart bileşeni, içine ne konacağını bilmek zorunda kalmaz — dışarıdan verilir. Bu, her varyasyon için ayrı bileşen yazmayı önler.
- **Nerede karşına çıkar:** Bileşen kütüphanesi tasarımında.
- **Örnek kullanım:** "Modal bileşeni sadece çerçeveyi versin, içeriği children olarak gelsin."
- **İlgili terimler:** Component, Atomic Design (5.1)

### Prop drilling

- **Terim (İngilizce):** Prop drilling
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir verinin, ihtiyaç duyulan derin bileşene ulaşması için aradaki tüm bileşenlerden tek tek geçirilmesi.
- **Ne işe yarar / neden var:** Bir sorun işaretidir. Aradaki bileşenler o veriyle ilgilenmez ama taşımak zorunda kalır; kod kırılganlaşır. Çözümü genelde context veya bir state yönetimi kütüphanesidir (9.7).
- **Nerede karşına çıkar:** Kod incelemelerinde ve refactor tartışmalarında.
- **Örnek kullanım:** "Tema bilgisi beş seviye prop drilling ile gidiyor; context'e alalım."
- **İlgili terimler:** State yönetimi (9.7), Props

### Controlled / Uncontrolled

- **Terim (İngilizce):** Controlled component, uncontrolled component
- **Türkçesi:** Kontrollü / kontrolsüz bileşen
- **Tanım:** Bir form alanının değerini kimin tuttuğuyla ilgili ayrım: kod tutuyorsa kontrollü, tarayıcı kendisi tutuyorsa kontrolsüz.
- **Ne işe yarar / neden var:** Kontrollü bileşen, her tuşa basıldığında değeri kodda gördüğü için anlık doğrulama ve dinamik davranış sağlar; ama daha çok yeniden çizim üretir. Kontrolsüz olan daha basit ve hızlıdır.
- **Nerede karşına çıkar:** Form kütüphanesi tartışmalarında (9.9).
- **Örnek kullanım:** "Form uzun; kontrolsüz yaklaşımla yazalım, her tuşta tüm form yeniden çizilmesin."
- **İlgili terimler:** Form validation (7.11), React Hook Form (9.9)
