---
title: "Test türleri"
sectionNumber: "17.2"
category: "test-ve-kalite"
order: 2
cardCount: 4
sourceFile: "17-test-kalite-ve-kod-sagligi.md"
origin: "material"
flags: []
---
### Unit test

- **Terim (İngilizce):** Unit test
- **Türkçesi:** Birim testi
- **Tanım:** Tek bir fonksiyonun veya küçük bir parçanın, dış dünyadan yalıtılmış olarak test edilmesi.
- **Ne işe yarar / neden var:** Çok hızlıdır (milisaniyeler) ve hata olduğunda **tam olarak nerede olduğunu** söyler. İş kuralları için idealdir: indirim hesabı, tarih dönüşümü, doğrulama kuralı.
- **Nerede karşına çıkar:** Her projede, en kalabalık test grubu.
- **Örnek kullanım:** "İndirim hesabı için unit test yazalım; kurallar karmaşık ve elle test etmesi zor."
- **İlgili terimler:** Integration test, Mock (17.4)

### Integration test

- **Terim (İngilizce):** Integration test
- **Türkçesi:** Entegrasyon testi
- **Tanım:** Birden fazla parçanın birlikte doğru çalışıp çalışmadığının test edilmesi — örneğin bir API ucunun veritabanıyla birlikte.
- **Ne işe yarar / neden var:** Gerçek hataların çoğu parçaların **arasında** olur, içinde değil: yanlış alan adı, eksik kontrol, uyumsuz veri tipi. Unit testler bunları göremez.
- **Nerede karşına çıkar:** API ve veri erişimi katmanlarında.
- **Örnek kullanım:** "Unit testler geçiyor ama entegrasyonda patlıyor; API'nin dönüşü şemayla uyuşmuyor."
- **İlgili terimler:** Unit test, Contract (10.4)

### E2E test

- **Terim (İngilizce):** E2E — End-to-End test
- **Türkçesi:** Uçtan uca test
- **Tanım:** Gerçek bir tarayıcıda, gerçek bir kullanıcının yapacağı adımların baştan sona otomatik olarak yürütülmesi.
- **Ne işe yarar / neden var:** Kullanıcının deneyimine en yakın test. **Tasarımcıyı en çok ilgilendiren tür budur:** bir kullanıcı akışının (4.4) gerçekten çalıştığını doğrular. Ama yavaş ve kırılgandır; bu yüzden sadece **kritik akışlar** için yazılır: kayıt, giriş, ödeme, ana iş akışı.
- **Nerede karşına çıkar:** CI hattının son aşamalarında.
- **Örnek kullanım:** "E2E testleri para kazandıran akışlara ayıralım: kayıt, ödeme, arama. Her butonu test etmeyelim."
- **Karıştırılanlar:** E2E testlerin kırılganlığı gerçek bir sorundur; tasarım değişince testler kırılır. Bu yüzden testler görsel detaylara değil, **erişilebilir adlara ve rollere** (6.4) bağlanır — bu da semantic HTML'in (6.3) bir yan faydasıdır.
- **İlgili terimler:** Smoke test, User flow (4.4), Accessible name (6.4)

### Smoke / Regression test

- **Terim (İngilizce):** Smoke test, regression test
- **Türkçesi:** Duman testi, gerileme testi
- **Tanım:** **Smoke test**, yayından hemen sonra "en temel şeyler çalışıyor mu?" kontrolü. **Regression test**, daha önce düzeltilmiş bir hatanın geri gelmediğini doğrulayan test.
- **Ne işe yarar / neden var:** Smoke test, bozuk bir yayını dakikalar içinde yakalar (16.2). Regression test ise **her hata düzeltmesinin yanına bir test eklenmesi** disiplininden doğar: aynı hata bir daha sessizce dönemez.
- **Nerede karşına çıkar:** Yayın hattında ve hata düzeltme PR'larında.
- **Örnek kullanım:** "Bu hatayı düzelttik; yanına bir regression testi ekleyelim ki tekrar etmesin."
- **İlgili terimler:** E2E test, Pipeline (16.2), Bug report (17.5)
