---
title: "Veri yapısı nedir, tasarımı neden ilgilendirir"
sectionNumber: ""
category: "veri-yapilari"
order: 1
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "MDN — JavaScript veri yapıları"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures"
  - label: "web.dev — Interaction to Next Paint (INP)"
    url: "https://web.dev/articles/inp/"
---

Veri yapısı, bir bilginin bellekte **nasıl dizildiğidir**. Aynı veri birden fazla şekilde dizilebilir ve her diziliş bazı işleri ucuzlatır, bazılarını pahalılaştırır. Kod tarafında bu bir tercih meselesi değildir: seçilen yapı, arayüzün neyi anında yapabileceğini belirler.

Bu bölüm kod öğretmiyor. Amaç şu: bir geliştirici "bunu yapmak pahalı" dediğinde **neden pahalı olduğunu** anlayabilmen ve tasarımını buna göre kurabilmen.

## Neden senin işin

Tasarladığın her ekran, arkada bir veri dizilişine bahis oynar. Birkaç örnek:

- "Listede arama kutusu olsun, yazarken filtrelensin" — bu, veriye **hangi sırayla** erişildiğine bağlı olarak anında ya da fark edilir derecede yavaş olur.
- "Seçilenleri en üstte toplayalım" — seçili öğeleri tutan yapı yanlışsa, her tıkta tüm liste yeniden taranır.
- "Kullanıcı geri alabilsin" — geri alma, sırayı hatırlayan bir yapı ister; sonradan eklenmesi zordur.

Bunların hiçbiri "kötü kod" değildir. Yanlış yapı seçimidir ve genellikle **tasarım kararı netleşmeden önce** yapılmıştır.

## Maliyet sezgisi: tek soru

Bir yapının iyi mi kötü mü olduğu soyut olarak sorulamaz. Sorulacak soru şudur:

> Bu ekranda en sık yapılan işlem ne? Ekleme mi, arama mı, sıralama mı, silme mi?

Bir yapı bu işlemlerin bazılarında hızlı, diğerlerinde yavaştır. "Her şeyde hızlı" bir yapı yoktur; bu, mühendislikteki **trade-off** kavramının (Bölüm 14) en somut hâlidir.

| İşlem | Anlamı | Arayüzdeki karşılığı |
|---|---|---|
| Erişim | Belirli bir öğeye gitmek | "Bu kartı aç" |
| Arama | Bir şeyi bulmak | Filtre kutusu, otomatik tamamlama |
| Ekleme / silme | Öğe eklemek, çıkarmak | "Sepete ekle", "kaldır" |
| Sıralama | Sırayı değiştirmek | Sütun başlığına tıklama |

Bir geliştirici "arama hızlı ama ekleme pahalı" dediğinde, seçtiği yapının bu tablodaki dengesini anlatıyordur.

## Ölçek her şeyi değiştirir

10 öğede hiçbir yapı seçimi hissedilmez; hepsi anında görünür. 1.000 öğede fark başlar. 1.000.000 öğede yanlış yapı, arayüzü kullanılamaz hâle getirir.

Bu yüzden "tasarımda 8 satır gösteriyoruz, sorun olmaz" demek yanıltıcıdır: kullanıcının ekranında 8 satır olabilir ama **arkadaki liste** on binlerce kayıt olabilir ve filtre o listenin tamamında çalışır.

Tarayıcı tarafında bunun görünür karşılığı **INP** (Interaction to Next Paint) eşiğidir: bir tıklamadan sonra ekranın güncellenmesi 200 ms'yi aşarsa kullanıcı gecikmeyi fark eder (8.12). Yanlış veri yapısı, bu bütçeyi tek başına tüketebilir.

## Güçlü ve zayıf yanlar — ama neyin?

Bu bölümdeki her sayfa tek bir yapıyı anlatıyor ve hepsinde aynı üç soruyu soruyoruz:

1. **Ne iyi yapar?** Hangi işlem bu yapıda ucuzdur.
2. **Ne kötü yapar?** Hangi işlem pahalıdır ve neden.
3. **Alternatifi ne?** Aynı problemi çözen başka hangi yapı var, farkı ne.

## Bir Product Designer olarak

- **"Bu liste kaç öğe olabilir?" sorusunu tasarım aşamasında sor.** Cevap "bilmiyoruz" ise, bu bir risktir ve boş durum / yükleniyor / sayfalama tasarımını değiştirir.
- **Bir etkileşimin "anında" olmasını istiyorsan bunu söyle.** Geliştirici, anında olması gerekeni farklı bir yapıyla kurar. Sonradan "biraz yavaş" demek, mimariyi değiştirmek demektir.
- **Sıralama ve filtreleme bedavaymış gibi tasarlama.** Her sütun başlığına sıralama koymak, arkada gerçek bir maliyet yaratır (bkz. Algoritmalar bölümü).
- **"Geri alma" bir veri yapısı kararıdır.** Özellik listesine sonradan eklenirse pahalıdır; baştan söylenirse ucuzdur.
