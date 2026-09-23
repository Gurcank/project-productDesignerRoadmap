---
category: "veritabani"
sourceFiles: ["11-veritabani-ve-veri-modeli.md"]
---

Bu bölümün tasarımcı için değeri, ilk bakışta göründüğünden büyük. Sebebi şu: **veri modeli, arayüzün neyi gösterebileceğinin sınırını çizer.**

Bir örnek: "Kullanıcı birden fazla adres kaydedebilsin" ile "kullanıcının tek bir adresi olsun" arasındaki fark, bir tasarım tercihi gibi görünür. Aslında bir **veri modeli kararıdır** ve sonradan değiştirmek, ekranı değiştirmekten kat kat pahalıdır. Bu yüzden veri modeli, ekranlarla birlikte konuşulmalıdır — sonrasında değil.

İkinci değer: bir isteğin **neden zor** olduğunu tahmin edebilmek. "Listede her ürünün son yorumunu da gösterelim" masum görünür ama N+1 problemine (11.9) dönüşüp sayfayı yavaşlatabilir. Bunu bilmek, geliştiricinin "bu zor" cevabını anlamlandırmanı ve alternatif önermeni sağlar.

Bu bölümdeki kavramlar **eskimeyen** kategoride — ilişkisel model 50 yıllık. Değişken olanlar ürün ve servis isimleri (11.12).
