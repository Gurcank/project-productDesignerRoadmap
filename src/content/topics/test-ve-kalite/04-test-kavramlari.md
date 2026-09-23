---
title: "Test kavramları"
sectionNumber: "17.4"
category: "test-ve-kalite"
order: 4
cardCount: 3
sourceFile: "17-test-kalite-ve-kod-sagligi.md"
origin: "material"
flags: []
---
### Test coverage

- **Terim (İngilizce):** Test coverage, code coverage
- **Türkçesi:** Test kapsamı
- **Tanım:** Kodun ne kadarının testler tarafından çalıştırıldığını gösteren yüzde.
- **Ne işe yarar / neden var:** Test edilmemiş bölgeleri görünür kılar. Ama **ölçtüğü şey "kod çalıştırıldı mı", "doğru mu" değil:** %100 kapsama sahip bir kod tabanı yine de yanlış çalışabilir.
- **Nerede karşına çıkar:** CI raporlarında ve PR yorumlarında.
- **Örnek kullanım:** "Kapsam %85 ama kritik ödeme akışı test edilmemiş; sayı yanıltıyor."
- **Karıştırılanlar:** **Kapsam bir hedefe dönüştürüldüğünde bozulur** (Goodhart yasası): ekip, değer üretmeyen ama yüzdeyi yükselten testler yazmaya başlar. Kapsam bir **teşhis aracıdır**, bir hedef değil.
- **İlgili terimler:** Vanity metric (3.7), CI gate (17.7)

### Flaky test

- **Terim (İngilizce):** Flaky test
- **Türkçesi:** Kararsız test
- **Tanım:** Kod değişmediği hâlde bazen geçen, bazen kalan test.
- **Ne işe yarar / neden var:** **Test altyapısının en yıkıcı sorunu.** Bir test rastgele kaldığında ekip "yine takıldı, tekrar çalıştır" demeye başlar — ve bu alışkanlık oluştuğu anda **tüm test setine olan güven ölür.** Gerçek bir hata olduğunda da aynı refleksle geçilir.
- **Nerede karşına çıkar:** E2E testlerde çok yaygın; genelde zamanlama, paylaşılan durum veya ağ kaynaklıdır.
- **Örnek kullanım:** "Bu test kararsız; ya düzeltelim ya devre dışı bırakalım, ama 'tekrar çalıştır' demeyi bırakalım."
- **Karıştırılanlar:** Kararsız bir testi otomatik yeniden denemeye almak sorunu gizler, çözmez. Yaygın tavsiye: **düzelt veya karantinaya al, yeniden denemeyle örtme.**
- **İlgili terimler:** E2E test, CI (16.1)

### Mock / Stub / Fixture

- **Terim (İngilizce):** Mock, stub, fixture, test data
- **Türkçesi:** Taklit, sahte yanıt, hazır veri
- **Tanım:** **Mock/stub**, testte gerçek bir bağımlılığın (API, veritabanı, ödeme servisi) yerine konan sahte versiyon. **Fixture**, testin kullandığı hazır örnek veri.
- **Ne işe yarar / neden var:** Testi hızlı ve öngörülebilir kılar: gerçek bir ödeme servisine bağlanmadan ödeme akışı test edilebilir.
- **Nerede karşına çıkar:** Unit ve entegrasyon testlerinde.
- **Örnek kullanım:** "API'yi mock'layalım; test gerçek sunucuya bağlı olmasın."
- **Karıştırılanlar:** **Aşırı mock'lama tehlikelidir:** her şey taklit edilirse test, gerçek sistemi değil kendi kurgusunu doğrular. Ayrıca fixture verisi gerçekçi olmalıdır — seed verisi (11.10) için geçerli olan aynı kural burada da geçer: uzun isimler, boş alanlar ve uç değerler içermelidir.
- **İlgili terimler:** Seed (11.10), Edge case (4.4), Integration test
