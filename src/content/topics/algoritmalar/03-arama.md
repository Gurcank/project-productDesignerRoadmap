---
title: "Arama: doğrusal, ikili ve index"
sectionNumber: ""
category: "algoritmalar"
order: 3
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "PostgreSQL — Index'ler"
    url: "https://www.postgresql.org/docs/current/indexes.html"
---

Bir şeyi bulmanın iki temel yolu var ve aralarındaki fark, index kavramının neden var olduğunu açıklar.

## İki yol

**Doğrusal arama:** baştan başla, bulana kadar bak. Sıralı olmayan her veride tek seçenek. Maliyeti öğe sayısıyla doğru orantılı.

**İkili arama:** veri **sıralıysa**, ortadan böl, hangi yarıda olduğuna bak, o yarıyı tekrar böl. Her adımda kalan veriyi yarıya indirir — bir milyon kayıtta yaklaşık yirmi adımda sonuç.

Şart şu: **veri sıralı olmalı.** Sıralamak da bedava değil (bir sonraki adım). Bu yüzden veritabanları veriyi sıralı tutan ayrı bir yapı kurar — buna **index** denir (11.5).

## Index neyi çözer, neyi çözmez

| Sorgu | Index yarar mı |
|---|---|
| "e-postası tam olarak şu olan" | Evet |
| "adı `Ah` ile başlayan" | Evet |
| "adının **içinde** `ah` geçen" | Genelde hayır |
| "fiyatı 100–200 arası" | Evet (sıralı index) |
| "şu kelimeyi içeren metin" | Ayrı bir tam metin index'i gerekir |

Üçüncü satır tasarımı doğrudan ilgilendirir: **"içinde geçsin" araması ile "ile başlasın" araması aynı maliyette değildir.** Otomatik tamamlama kutusu tasarlarken hangisini istediğini söylemen gerekir.

## Arayüzde görünen sonuçları

- **Otomatik tamamlama** genelde önek araması yapar; kullanıcı kelimenin ortasını yazarsa sonuç gelmez. Bu bir hata değil, bir karardır — ama kullanıcıya belli etmek gerekir.
- **Her tuşta sorgu atmak pahalıdır.** Bekleme süresi (debounce) bir tasarım kararıdır; belirtmezsen geliştirici bir değer seçer.
- **Sonuç yokken ne göreceği** tasarlanmalı: yazım önerisi mi, popüler aramalar mı, filtreyi gevşetme mi?

## Bir Product Designer olarak

- **Arama kutusunun neyi aradığını yaz:** başlık mı, gövde mi, etiket mi. "Her yerde" pahalı bir cevaptır.
- **Önek mi, içinde mi?** Tek cümlelik bu karar, arkadaki çözümü tamamen değiştirir.
- **Boş sonuç bir eylem davetidir**, gri bir satır değil.
