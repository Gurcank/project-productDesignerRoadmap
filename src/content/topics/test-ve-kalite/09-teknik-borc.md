---
title: "Teknik borç"
sectionNumber: "17.9"
category: "test-ve-kalite"
order: 9
cardCount: 3
sourceFile: "17-test-kalite-ve-kod-sagligi.md"
origin: "material"
flags: []
---
### Technical debt

- **Terim (İngilizce):** Technical debt, tech debt
- **Türkçesi:** Teknik borç
- **Tanım:** Bugün hızlı gitmek için alınan kısa yolun, gelecekte faiziyle ödenecek maliyeti.
- **Ne işe yarar / neden var:** Metafor kasıtlıdır: **borç her zaman kötü değildir.** Bir tarihe yetişmek için bilinçli olarak borçlanmak meşru bir karardır. Sorun, **borcun kayıt altına alınmaması** ve faizinin görünmez birikmesidir.
- **Nerede karşına çıkar:** Planlama toplantılarında ve "bu neden bu kadar yavaş ilerliyor?" sorularında.
- **Örnek kullanım:** "Bunu şimdilik kopyalayalım ama teknik borç olarak kaydedelim ve bir sonraki sprint'te toparlayalım."
- **Karıştırılanlar:** **Tasarım borcu da vardır ve aynı biçimde birikir:** sisteme girmemiş tek kullanımlık bileşenler, ölçek dışı boşluk değerleri, tanımlanmamış durum ekranları (7.9), kopyalanmış ve ayrışmış Figma bileşenleri (5.10). Bunlar da kayıt altına alınmalı ve bütçelenmelidir.
- **İlgili terimler:** Refactor, Code smell, Backlog (2.7)

### Refactor

- **Terim (İngilizce):** Refactoring
- **Türkçesi:** Yeniden yapılandırma
- **Tanım:** Kodun **davranışını değiştirmeden** iç yapısını iyileştirmek.
- **Ne işe yarar / neden var:** Tanımın kritik kısmı "davranışı değiştirmeden"dir: refactor bir yeniden yazım değildir ve kullanıcı hiçbir fark görmemelidir. Testler (17.1) bu güvenceyi sağlayan şeydir — testsiz refactor bir kumar hâline gelir.
- **Nerede karşına çıkar:** Sprint planlamasında ve PR başlıklarında.
- **Örnek kullanım:** "Bu PR sadece refactor; davranış değişmedi, testler aynı kalmalı."
- **Karıştırılanlar:** **Refactor ile yeni özelliği aynı PR'a koymamak önemlidir** — ikisi karışınca inceleyen kişi neyin niyetli neyin kaza olduğunu ayırt edemez.
- **İlgili terimler:** Technical debt, Test (17.1), Pull request (15.5)

### Code smell / Boy scout rule

- **Terim (İngilizce):** Code smell, boy scout rule
- **Türkçesi:** Kod kokusu, izci kuralı
- **Tanım:** **Code smell**, kendisi hata olmayan ama daha derin bir sorunun işareti olan kalıp: aşırı uzun fonksiyon, tekrarlanan mantık, çok fazla parametre. **Boy scout rule**, "dokunduğun yeri bulduğundan biraz daha temiz bırak" ilkesi.
- **Ne işe yarar / neden var:** İzci kuralı, büyük temizlik projeleri beklemek yerine borcu sürekli ve küçük adımlarla azaltmayı önerir. Büyük temizlik projeleri genelde onaylanmaz; küçük iyileştirmeler ise her PR'da yapılabilir.
- **Nerede karşına çıkar:** Kod inceleme kültüründe (17.10).
- **Örnek kullanım:** "Bu dosyaya zaten dokunuyoruz; şu tekrarı da temizleyelim."
- **İlgili terimler:** Technical debt, Refactor
