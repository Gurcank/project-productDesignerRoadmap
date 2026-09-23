---
title: "Denetleme"
sectionNumber: "6.9"
category: "erisilebilirlik"
order: 9
cardCount: 4
sourceFile: "06-erisilebilirlik-a11y.md"
origin: "material"
flags: ["emin-degil"]
---
### Automated testing

- **Terim (İngilizce):** Automated accessibility testing
- **Türkçesi:** Otomatik erişilebilirlik testi
- **Tanım:** Lighthouse, axe, WAVE gibi araçlarla yapılan otomatik tarama.
- **Ne işe yarar / neden var:** Ucuz ve hızlıdır; eksik alt metin, düşük kontrast, eksik etiket gibi sorunları anında bulur. CI hattına eklenebilir (16.2), böylece yeni hatalar birikmez.
- **Nerede karşına çıkar:** Geliştirme sürecinde ve denetimlerin ilk adımında.
- **Örnek kullanım:** "axe'ı CI'a ekleyelim; her PR'da yeni ihlal varsa uyarsın."
- **Karıştırılanlar:** **Bu bölümün en önemli uyarısı:** otomatik araçlar sorunların yalnızca bir kısmını yakalar — yaygın olarak raporlanan aralık **%30–40** civarındadır. "Lighthouse 100 verdi" cümlesi erişilebilir olduğun anlamına gelmez. Odak sırasının mantıklı olması, alt metnin **doğru** olması, hata mesajının anlaşılır olması — hiçbiri otomatik ölçülemez.
- **İlgili terimler:** Manuel test, CI gate (17.7)

### Manuel test

- **Terim (İngilizce):** Manual accessibility testing
- **Türkçesi:** Manuel erişilebilirlik testi
- **Tanım:** Klavye, ekran okuyucu, zoom ve renk simülasyonu ile elle yapılan kontrol.
- **Ne işe yarar / neden var:** Otomatik aracın göremediği şeyleri yakalar. Tasarımcının yapabileceği en verimli dört kontrol:
  1. **Fareyi bırak**, sadece Tab/Enter/Space/ok tuşlarıyla ana akışı bitirmeye çalış.
  2. **%200 zoom** yap, içerik kırpılıyor mu bak.
  3. **Ekran okuyucuyu aç** (macOS'ta VoiceOver, Windows'ta NVDA), ilk ekranı dinle.
  4. **Gri tonlama** filtresi uygula; renkten bağımsız olarak her şey anlaşılıyor mu bak.
- **Nerede karşına çıkar:** Design review'da (2.10) ve yayın öncesi kontrolde.
- **Örnek kullanım:** "Design review'a klavye turunu da ekledim; üç bileşende odak göstergesi yok."
- **İlgili terimler:** Automated testing, Design review (2.10)

### Accessibility overlay

- **Terim (İngilizce):** Accessibility overlay / widget
- **Türkçesi:** Erişilebilirlik eklentisi
- **Tanım:** Siteye eklenen ve "tek satır kodla erişilebilirlik sağladığını" iddia eden üçüncü parti araçlar.
- **Ne işe yarar / neden var:** **Erişilebilirlik topluluğu tarafından geniş ölçüde eleştirilir.** Temel gerekçeler: altta yatan sorunları düzeltmezler, bazı durumlarda yardımcı teknolojilerin kendi ayarlarıyla çakışırlar ve yasal koruma sağladıkları iddiası tartışmalıdır. Kalıcı çözüm, sorunun kodda ve tasarımda düzeltilmesidir.
- **Nerede karşına çıkar:** "Hızlı çözüm" arayan müşteri taleplerinde.
- **Örnek kullanım:** "Overlay yerine gerçek düzeltmeleri planlayalım; bütçeyi oraya harcamak daha kalıcı."
- `[EMİN DEĞİLİM]` Bu eleştirilerin hukuki sonuçları ülkeye göre değişir; kesin bir hukuki iddiada bulunmuyorum.
- **İlgili terimler:** Automated testing, Accessibility statement (6.2)

### Engelli kullanıcılarla test

- **Terim (İngilizce):** Testing with users with disabilities
- **Türkçesi:** Engelli kullanıcılarla test
- **Tanım:** Gerçek yardımcı teknoloji kullanıcılarıyla yapılan kullanılabilirlik testi.
- **Ne işe yarar / neden var:** Tüm ölçütleri geçen ama kullanılamayan arayüzler mümkündür. Deneyimli bir ekran okuyucu kullanıcısı, hiçbir aracın bulamayacağı sorunları on dakikada bulur.
- **Nerede karşına çıkar:** Olgun erişilebilirlik programlarında.
- **Örnek kullanım:** "Standartları geçtik ama bir NVDA kullanıcısıyla da test edelim; akış gerçekten bitiyor mu görelim."
- **İlgili terimler:** Usability test (4.10), Inclusive design (6.1)
