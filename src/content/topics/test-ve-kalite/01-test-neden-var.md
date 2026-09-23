---
title: "Test neden var"
sectionNumber: "17.1"
category: "test-ve-kalite"
order: 1
cardCount: 2
sourceFile: "17-test-kalite-ve-kod-sagligi.md"
origin: "material"
flags: ["emin-degil"]
---
### Test

- **Terim (İngilizce):** Automated test
- **Türkçesi:** Otomatik test
- **Tanım:** Kodun beklendiği gibi çalıştığını, insan müdahalesi olmadan ve tekrar tekrar kontrol eden kod.
- **Ne işe yarar / neden var:** Asıl faydası hata bulmak değil, **değişiklik yapabilme cesareti vermektir.** Testi olmayan bir kod tabanında her değişiklik risklidir; bu yüzden ekip dokunmaktan çekinir ve kod çürür. Testi olan bir kodda "bu düzeltmeyi yapalım" kararı ucuzdur.
- **Nerede karşına çıkar:** Her PR'da (15.5) ve CI hattında (16.1).
- **Örnek kullanım:** "Bu bileşeni yeniden yazmaktan çekiniyoruz çünkü testi yok; önce test yazalım."
- **Karıştırılanlar:** **Tasarımcı için somut sonucu şu:** test altyapısı zayıf bir projede, küçük tasarım düzeltmelerin de "riskli" sayılıp ertelenir. Yani test, dolaylı olarak tasarım kalitesini belirler.
- **İlgili terimler:** Test pyramid, CI (16.1), Refactor (17.9)

### Test pyramid

- **Terim (İngilizce):** Test pyramid, testing trophy
- **Türkçesi:** Test piramidi
- **Tanım:** Testlerin dağılımını anlatan model: tabanda çok sayıda hızlı ve ucuz test (unit), ortada daha az entegrasyon testi, tepede az sayıda yavaş ama gerçekçi uçtan uca test (E2E).
- **Ne işe yarar / neden var:** Bir denge önerir. E2E testler en gerçekçi olanlardır ama yavaş, kırılgan ve pahalıdır; hepsini E2E yapmak CI süresini dakikalardan saate çıkarır. Unit testler hızlıdır ama "parçalar tek tek çalışıyor, birlikte çalışmıyor" durumunu yakalayamaz.
- **Nerede karşına çıkar:** Test stratejisi tartışmalarında.
- **Örnek kullanım:** "Her şeyi E2E ile test ediyoruz; CI 25 dakika sürüyor. Piramidi dengeleyelim."
- **Karıştırılanlar:** Piramidin kesin oranları dogma değildir. **Front-end tarafında "testing trophy" adlı bir alternatif model**, entegrasyon testlerine daha fazla ağırlık verilmesini savunur — çünkü kullanıcı tek tek fonksiyonları değil, birlikte çalışan parçaları deneyimler. `[EMİN DEĞİLİM]` İki model arasındaki tartışmanın güncel durumunu doğrulamadım.
- **İlgili terimler:** Unit test, E2E test, CI (16.1)
