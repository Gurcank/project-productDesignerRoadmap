---
title: "TypeScript"
sectionNumber: ""
category: "programlama-dilleri"
order: 3
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "TypeScript — resmî dokümantasyon"
    url: "https://www.typescriptlang.org/docs/"
---

JavaScript'in tip bilgisi eklenmiş hâli. Ayrı bir dil değil, JavaScript'in üstüne yazılan bir katman: derlenince geriye sade JavaScript kalır.

Kavramsal tarafı 8.6'da.

## Ne işe yarar

Bir değerin ne olduğunu **önceden** söyler. "Bu alan metin", "bu alan boş olabilir", "bu fonksiyon şu şekli bekliyor". Sonuç: bir alanın adını yanlış yazmak ya da olmayan bir veriyi kullanmak, kod yazılırken hata verir — kullanıcı görmeden.

## Nerede karşına çıkar

Yeni web projelerinin çoğunda varsayılan. Ekip büyüdükçe ve kod yaşlandıkça faydası artar; iki günlük bir prototipte gereksiz yük olabilir.

## Neyi iyi yapar

- **Hataları erken yakalar.** Özellikle veri şekli değiştiğinde: bir API alanı yeniden adlandırıldığında onu kullanan her yer anında belli olur.
- **Kodu kendi kendini belgeler.** "Bu fonksiyon ne bekliyor" sorusunun cevabı koddadır.
- **Refactor güvenliğini artırır.** Büyük bir değişikliği yapmak, neyin kırıldığını görebildiğin için daha ucuzdur.

## Neyi kötü yapar

- **Yazma maliyeti ekler.** Küçük işlerde tip yazmak ek iş.
- **Çalışma zamanında yoktur.** Tipler derlemede silinir; dışarıdan gelen veri yine de çalışma anında doğrulanmalıdır. Bu, bu sitenin kendi kuralı — `localStorage` dışarıdır.
- **Yanlış güven verebilir.** "Tipli" olmak, verinin gerçekten o şekilde geldiğini garanti etmez.

## Alternatifler

- **Sade JavaScript** — küçük, kısa ömürlü işlerde meşru.
- **JSDoc ile tip** — ayrı derleme adımı istemeyen hafif yol.

## Bir Product Designer olarak

- **"Bu alan boş olabilir mi?" sorusunu netleştirmen doğrudan koda yansır.** Tipli bir projede boş olabilen her alan açıkça işaretlenir; belirtmezsen geliştirici bir varsayım yapar ve boş durum tasarımın eksik kalır.
- **API alanı yeniden adlandırmak ucuz değildir** ama TypeScript'li bir projede en azından **görünürdür**; hangi ekranların etkilendiği listelenebilir.
