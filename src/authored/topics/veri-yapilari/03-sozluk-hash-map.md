---
title: "Sözlük / hash map — anahtarla erişim neden anlık"
sectionNumber: ""
category: "veri-yapilari"
order: 3
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "MDN — Map"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
  - label: "MDN — Object ve anahtar-değer erişimi"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
---

**Sözlük** (hash map, dictionary, JavaScript'te `Map` ve nesne), veriyi sırayla değil **anahtarla** tutar. "3. öğe" diye değil, "`kullanici_42` diye kaydı getir" diye erişirsin.

Gerçek sözlükle benzerliği isabetlidir: kelimeyi baştan aramazsın, harfinden doğrudan sayfaya gidersin.

## Neden anlık

Sözlük, anahtarı bir hesaba sokup **verinin nerede durduğunu doğrudan bulur**. Listenin uzunluğu bu hesabı değiştirmez: 10 kayıtta da 10 milyon kayıtta da aynı iş yapılır.

Dizideki aramanın liste büyüdükçe yavaşlamasının, sözlükte olmamasının sebebi budur. Arayüz tarafında bunun anlamı şudur: **"bu id'ye ait kaydı göster" hiçbir zaman yavaşlamaz.**

| | Dizi | Sözlük |
|---|---|---|
| "3. öğe" | Anlık | Yok — sıra kavramı zayıf |
| "Şu id'li öğe" | Liste uzunluğuyla orantılı | **Anlık** |
| Sırayı korur mu | Evet | Modern dillerde ekleme sırasını korur, ama sıra ana fikri değildir |
| Aynı anahtar iki kez | — | Mümkün değil; ikincisi birincinin üstüne yazar |

## Ne kötü yapar

- **Sıralama ve aralık sorgusu.** "Fiyatı 100–200 arasındakiler" sorusu sözlüğün cevaplayabileceği bir soru değildir; bunun için sıralı bir yapı ya da index gerekir (8. adım).
- **"Hepsini göster" işlemi sıralı gelmeyebilir.** Sırayı garanti etmek istiyorsan ayrıca sıralamak zorundasın.
- **Anahtar seçimi kalıcı bir karardır.** Anahtar değişirse kayıt "kaybolur".

## Arayüzde nerede karşına çıkar

Çoğu zaman görünmez ama üç yerde doğrudan tasarımı etkiler:

**1. Seçim durumu.** "Hangi satırlar seçili?" sorusu sözlükle tutulursa, bir satıra tıklamak anlık olur. Dizi ile tutulursa her tıkta tüm seçim listesi taranır ve 500 satırlık bir tabloda "tümünü seç" fark edilir derecede yavaşlar.

**2. Form durumu ve doğrulama.** Hangi alanın hangi hatası var — alan adı anahtar, hata mesajı değerdir. Bu yüzden bir alanın hatasını göstermek/gizlemek anlıktır (7.11).

**3. Çeviri ve içerik sözlükleri.** Arayüz metinleri anahtar-değer olarak tutulur. "Bu metni değiştir" isteğinin ucuz olmasının sebebi budur (4.9).

## Tasarıma yansıyan bir tuzak: anahtar çakışması

Sözlükte aynı anahtar iki kez olamaz. İkinci yazma birincinin üstüne yazar — hata vermez, **sessizce**.

Bunun arayüzdeki karşılığı şudur: bir listede öğeleri ayırt etmek için kullanılan anahtar gerçekten tekil değilse, öğeler kaybolur veya birbirine karışır. En sık görülen hâli, liste öğelerine anahtar olarak sıra numarası verilmesidir; liste sıralanınca ya da filtrelenince yanlış satır güncellenir.

Bunu tasarımda fark edebilirsin: **filtreledikten sonra yanlış satırın seçili görünmesi** neredeyse her zaman bu hatadır.

## Alternatifler

- **Küme (set)** — yalnızca "bu var mı" soruluyorsa, değer tutmaya gerek yoksa.
- **Dizi** — sıra ana fikirse ve liste küçükse.
- **Veritabanı index'i** — aynı fikrin kalıcı veri tarafındaki karşılığı (11.5).
- **Ağaç tabanlı yapılar** — aralık sorgusu ve sıralı gezinme gerekiyorsa.

## Bir Product Designer olarak

- **Her liste öğesinin kalıcı bir kimliği olduğundan emin ol.** "Bu satırı neyle ayırt ediyoruz?" sorusunu sor; cevap "sırası" ise yukarıdaki hata kapıda demektir.
- **"Şu kaydı aç" hiçbir zaman yavaş olmamalı.** Yavaşsa sebep veri yapısı değil, ağ veya sorgu tarafındadır — doğru yere bakmış olursun.
- **Aralık ve sıralama isteklerini ayrı bir istek olarak gör.** "Fiyata göre sırala" ve "şu ürünü aç" iki farklı yapı ister; ikisini aynı anda ucuza isteyemezsin.
- **Çok dilli arayüz planlıyorsan metinleri baştan anahtarla.** Sonradan çıkarmak, her ekranı tek tek gezmek demektir.
