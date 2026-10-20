---
title: "Hangi yapı hangi arayüz problemini çözer"
sectionNumber: ""
category: "veri-yapilari"
order: 9
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "MDN — JavaScript veri yapıları (özet karşılaştırma)"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures"
---

Bu bölümün özeti. Amaç ezberlemek değil; bir tasarım kararı verirken **hangi soruyu sorman gerektiğini** bilmek.

## Karar tablosu

| İstediğin şey | Arkadaki yapı | Nelere dikkat |
|---|---|---|
| Sıralı bir liste göstermek | Dizi | Sıranın kuralını sen belirt; belirtmezsen değişir |
| "Şu kaydı aç" | Sözlük | Her öğenin kalıcı bir kimliği olmalı |
| Çoklu seçim, filtre işaretleri | Küme | "Tümünü seç" hangi "tüm"? |
| Geri alma / ileri alma | Yığın | Kaç adım? Yeni işlem ileri almayı siler |
| Arka planda iş ("raporun hazırlanıyor") | Kuyruk | Kabul + durum + başarısızlık, üç ekran |
| Menü, kategori, site haritası | Ağaç | Bir öğe iki yerde olabilir mi? |
| Etiketler, izinler, "ilgili içerik" | Graf | Döngü olursa ne olacak? |
| Arama kutusu | İndeks / ters indeks | Türkçe kökleme var mı? Boş sonuç ekranı ne diyor? |
| "Kaç tane var" sayacı | Duruma göre | Tam sayı pahalı olabilir; "1000+" ucuzdur |

## Tasarım aşamasında sorulacak beş soru

Bu beş soru, yukarıdaki tablonun tamamının yerine geçer. Bir ekran tasarlarken bunları sorarsan, doğru yapı zaten kendiliğinden belirlenir.

**1. Bu listede en fazla kaç öğe olabilir?**
Cevap "bilmiyoruz" ise bu bir risktir. Sayfalama, sanallaştırma, boş durum ve yükleniyor tasarımın buna bağlı.

**2. En sık yapılan işlem ne?**
Arama mı, ekleme mi, sıralama mı? Yapı, en sık işlemi ucuzlatacak şekilde seçilir; diğerleri pahalılaşır.

**3. Sıra anlam taşıyor mu?**
Taşıyorsa kuralını yaz. Taşımıyorsa, kullanıcı yine de bir sıra görecek — hangisi olduğunu sen söylemezsen sistem söyler.

**4. Bu öğeyi neyle ayırt ediyoruz?**
Kalıcı bir kimlik yoksa, filtreleme ve sıralama sonrası yanlış satır güncellenir. Bu, arayüzlerde en sık görülen sessiz hatadır.

**5. Bu işlem geri alınabilir mi?**
Geri alma bir veri yapısı kararıdır; sonradan eklenmesi pahalıdır, baştan istenmesi ucuzdur.

## "Bu pahalı" dendiğinde ne anlamalısın

Bir geliştirici bir isteğe "bu pahalı" dediğinde, genellikle üç şeyden biri kastedilir:

- **Yapı uygun değil.** İstenen işlem, seçilen yapının kötü yaptığı işlem. Çözüm ya yapıyı değiştirmek ya isteği değiştirmek.
- **Ölçek sorunu.** Küçük veride ucuz, büyük veride pahalı. Bu durumda "kaç öğe" sorusunun cevabı kararı belirler.
- **Yeni bir altyapı gerekiyor.** Arama motoru, kuyruk sistemi, geri alma altyapısı. Bu, özellik değil proje boyutunda bir iştir.

Üçünün cevabı farklıdır ve hangisi olduğunu sormak, tartışmayı "olur mu olmaz mı"dan çıkarıp "neyi feda ediyoruz"a taşır — yani bir **trade-off** konuşmasına (Bölüm 14).

## Bu bölümün sana bıraktığı tek cümle

> Arayüzde "anında" olan her şey, arkada birinin o işlemi ucuzlatan bir yapı seçmiş olmasıdır — ve o seçim, senin ne istediğini bilmesine bağlıdır.

Bu yüzden veri yapısı bilgisi bir Product Designer için kod bilgisi değil, **isteğini doğru tarif etme** becerisidir.
