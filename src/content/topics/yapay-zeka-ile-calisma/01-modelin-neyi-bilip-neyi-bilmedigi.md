---
title: "Modelin neyi bilip neyi bilmediği"
sectionNumber: "19.1"
category: "yapay-zeka-ile-calisma"
order: 1
cardCount: 4
sourceFile: "19-yapay-zeka-ile-profesyonel-calisma.md"
origin: "material"
flags: ["degisken"]
---
Sınırları bilmek, prompt yazmanın ön koşulu.

### Context window

- **Terim (İngilizce):** Context window, context
- **Türkçesi:** Bağlam penceresi
- **Tanım:** Modelin bir seferde "görebildiği" metnin toplam miktarı: senin mesajların, onun cevapları, okuduğu dosyalar, araç çıktıları.
- **Ne işe yarar / neden var:** **Bu pencere sınırlı ve tükenen bir kaynaktır.** Uzun bir oturumda pencere dolduğunda model, başlangıçtaki talimatları unutmaya veya tutarsız kararlar vermeye başlayabilir. Bu, "başta söylediğimi neden yapmıyor?" sorusunun en yaygın teknik cevabıdır.
- **Nerede karşına çıkar:** Uzun sohbetlerde ve büyük kod tabanlarıyla çalışırken.
- **Örnek kullanım:** "Oturum çok uzadı ve kararlar tutarsızlaşmaya başladı; özetleyip yeni bir oturum açalım."
- **Karıştırılanlar:** Büyük bir bağlam penceresi, "her şeyi at içine" demek değildir. **Alakasız bağlam, alakalı bağlamı seyreltir.** Bu yüzden doğru yaklaşım pencereyi doldurmak değil, ne göstereceğini seçmektir (19.3).
- **İlgili terimler:** Context engineering (19.3), Session (19.8)

### Knowledge cutoff

- **Terim (İngilizce):** Knowledge cutoff, training data cutoff
- **Türkçesi:** Bilgi kesim tarihi
- **Tanım:** Modelin eğitim verisinin bittiği tarih; o tarihten sonrasını kendiliğinden bilmez.
- **Ne işe yarar / neden var:** **Senin alanında bu doğrudan bir risktir**, çünkü Bölüm 9'da gördüğün gibi kütüphane manzarası hızlı değişir. Model, bakım moduna geçmiş bir kütüphaneyi (8.4) veya adı değişmiş bir paketi (9.6) hâlâ eski hâliyle önerebilir.
- **Nerede karşına çıkar:** Kütüphane, sürüm ve API önerilerinde.
- **Örnek kullanım:** "Bu kütüphanenin güncel durumunu doğrula; bilgi kesim tarihinden sonra değişmiş olabilir."
- **Karıştırılanlar:** Model, bilmediği bir şeyin bilmediğini her zaman fark etmez — eski bilgiyi güvenle sunar. **Değişken bilgi türlerini (sürüm, fiyat, API davranışı) her zaman doğrulat.**
- **İlgili terimler:** Hallucination, `[DEĞİŞKEN BİLGİ]` (0.4)

### Hallucination

- **Terim (İngilizce):** Hallucination, confabulation
- **Türkçesi:** Uydurma
- **Tanım:** Modelin, doğru olmayan bir bilgiyi doğruymuş gibi, kendinden emin bir dille üretmesi.
- **Ne işe yarar / neden var:** Bilmen gereken en önemli sınır. Uydurma **rastgele** değil, **makul görünen** biçimde olur: var olmayan bir kütüphane fonksiyonu, var olmayan bir CSS özelliği, var olmayan bir kaynak, yanlış bir istatistik. Tam da makul göründüğü için fark etmesi zordur.
- **Nerede karşına çıkar:** Özellikle niş kütüphanelerde, sayısal iddialarda ve kaynak taleplerinde.
- **Örnek kullanım:** "Bu API'nin gerçekten böyle bir parametresi var mı? Dokümantasyondan doğrulayalım."
- **Karıştırılanlar:** **Savunması iki katmanlıdır:** (1) modelden emin olmadığında bunu söylemesini istemek, (2) doğrulanabilir her iddiayı kendin kontrol etmek. İkincisi vazgeçilmezdir; birincisi yardımcıdır ama garanti değildir.
- **İlgili terimler:** Knowledge cutoff, Çıktı denetimi (19.9)

### Drift

- **Terim (İngilizce):** Drift
- **Türkçesi:** Sapma
- **Tanım:** Üretilen çıktının, istenen şeyden yavaş yavaş uzaklaşması — ama bunu yaparken tutarlı ve inandırıcı görünmesi.
- **Ne işe yarar / neden var:** 2026 itibarıyla yapay zekâ destekli geliştirmenin ana sorunu olarak **üretim hızı değil, sapma** anılıyor: hızlı üretilmiş, kendinden emin ama **yanlış problemi çözen** çıktı. Panzehir, üretimden önce net bir tanım (spec) koymaktır.
- **Nerede karşına çıkar:** Uzun oturumlarda ve belirsiz taleplerde.
- **Örnek kullanım:** "Çıktı güzel ama biz bunu istememiştik; sapma var. Tanıma geri dönelim."
- **İlgili terimler:** Spec (2.5), Acceptance criteria (2.6), Context window
