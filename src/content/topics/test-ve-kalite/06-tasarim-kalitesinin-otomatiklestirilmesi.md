---
title: "Tasarım kalitesinin otomatikleştirilmesi"
sectionNumber: "17.6"
category: "test-ve-kalite"
order: 6
cardCount: 3
sourceFile: "17-test-kalite-ve-kod-sagligi.md"
origin: "material"
flags: ["degisken"]
---
**Senin için ikinci en önemli alt bölüm.** Buradaki üç kontrol, tasarım kalitesini insan disiplininden çıkarıp sürece bağlar.

### Visual regression testing

- **Terim (İngilizce):** Visual regression testing, snapshot testing
- **Türkçesi:** Görsel gerileme testi
- **Tanım:** Arayüzün ekran görüntülerinin alınıp, her değişiklikte öncekiyle piksel bazında karşılaştırılması.
- **Ne işe yarar / neden var:** **Kod testleri görsel bozulmaları yakalayamaz.** Bir CSS değişikliği başka bir sayfadaki kartı bozabilir ve hiçbir test bunu fark etmez. Görsel regresyon testi, PR'da "bu 12 ekran değişti" diyerek fark listesi sunar — sen de bunun kasıtlı olup olmadığına karar verirsin.
- **Nerede karşına çıkar:** Tasarım sistemi olan ekiplerde. `[DEĞİŞKEN BİLGİ]` Araç isimleri ve fiyatlandırmaları değişir.
- **Örnek kullanım:** "Görsel regresyon kuralım; bileşen değişikliklerinin başka yerleri bozup bozmadığını PR'da görelim."
- **Karıştırılanlar:** Yanlış pozitifler sorun olur: font yüklenme farkı, animasyon zamanlaması ve dinamik içerik sahte farklar üretir. Kurulumun bir kısmı bunları sabitlemekle geçer.
- **İlgili terimler:** Design review (2.10), Design system (5.1), CI (16.1)

### Accessibility testing

- **Terim (İngilizce):** Automated accessibility testing
- **Türkçesi:** Otomatik erişilebilirlik testi
- **Tanım:** Erişilebilirlik ihlallerinin CI hattında otomatik taranması (6.9).
- **Ne işe yarar / neden var:** Eksik alt metin, düşük kontrast ve eksik etiket gibi sorunların birikmesini engeller. **Kritik uyarı Bölüm 6.9'da:** otomatik araçlar sorunların yalnızca bir kısmını yakalar — yaygın olarak raporlanan aralık %30–40. Yani CI'daki yeşil işaret "erişilebilir" demek değildir; "bilinen otomatik kontroller geçti" demektir.
- **Nerede karşına çıkar:** CI hattında ve tarayıcı eklentilerinde.
- **Örnek kullanım:** "axe'ı CI'a ekleyelim; yeni ihlal eklenirse PR kırılsın. Manuel kontrolü yine de yapacağız."
- **İlgili terimler:** a11y (Bölüm 6), CI gate, Definition of Done (2.10)

### Performance budget

- **Terim (İngilizce):** Performance budget, Lighthouse CI
- **Türkçesi:** Performans bütçesi
- **Tanım:** Sayfanın aşmaması gereken sınırların (paket boyutu, LCP, CLS) CI hattında kontrol edilmesi (8.12).
- **Ne işe yarar / neden var:** Performans zamanla bozulur çünkü her ekleme tek tek makul görünür. Bütçe, bu birikimi mekanik olarak durdurur: sınır aşılırsa yapı başarısız olur.
- **Nerede karşına çıkar:** CI hattında.
- **Örnek kullanım:** "İlk yükte 150KB JavaScript sınırı koyalım; aşan PR kırılsın."
- **Karıştırılanlar:** Laboratuvar ölçümü (Lighthouse) ile saha verisi (CrUX) farklıdır (8.12). CI'daki Lighthouse skoru bir **gerileme alarmıdır**, gerçek kullanıcı deneyiminin kanıtı değil.
- **İlgili terimler:** Core Web Vitals (8.12), NFR (2.6), CI gate
