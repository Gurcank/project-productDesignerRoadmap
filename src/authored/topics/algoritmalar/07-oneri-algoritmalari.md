---
title: "Öneri: \"önerilen\" neden belirsiz bir etikettir"
sectionNumber: ""
category: "algoritmalar"
order: 7
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "Nielsen Norman Group — Kişiselleştirme ve öneriler"
    url: "https://www.nngroup.com/articles/recommendation-guidelines/"
---

"Sana özel", "önerilen", "senin için seçtik" — üçü de aynı şeyi söylemez ama arayüzde aynı yere konur. Arkadaki mekanizmayı bilmek, hangisini yazacağına karar vermeni sağlar.

## Üç temel yaklaşım

| Yaklaşım | Mantığı | Zayıf yanı |
|---|---|---|
| **Popülerlik** | En çok bakılan/alınan | Kişisel değil; zengin daha zengin olur |
| **İçerik benzerliği** | Etiketleri/özellikleri benzeyen | Sürpriz üretmez, dar bir kutuya sıkıştırır |
| **Ortak davranış** | "Bunu alanlar şunu da aldı" | Yeni kullanıcı ve yeni ürün için veri yok |

Üçüncüsünün bilinen açığı **soğuk başlangıç**: yeni kullanıcının geçmişi, yeni ürünün alıcısı yoktur. Çoğu sistem o boşluğu popülerlikle doldurur — yani "sana özel" dediğin şey, yeni kullanıcı için aslında "herkese aynı"dır.

## Dürüst etiket bir tasarım kararıdır

Sistem ne yapıyorsa etiket onu söylemeli:

| Yazmak yerine | Bunu yaz |
|---|---|
| "Senin için seçtik" | "Bu kategoride popüler" |
| "Sana özel" | "Birlikte sık alınanlar" |
| "Önerilen" | "Benzer etiketlere sahip" |

Bu yalnız dürüstlük meselesi değil: doğru etiket, öneri zayıf olduğunda güveni daha az zedeler. "Sana özel" deyip alakasız bir şey göstermek, sistemin seni tanımadığını ilan eder.

## Ölçme tuzağı

Öneri bölümünün tıklanma oranı yüksek çıkabilir — çünkü ekranın iyi bir yerindedir, öneri iyi olduğu için değil. Gerçek soru şudur: *bu bölüm olmasaydı kullanıcı o şeyi zaten bulur muydu?* Bunu ancak karşılaştırmalı bir deneyle (A/B) anlarsın (4.10).

## Bir Product Designer olarak

- **Mekanizmayı sor, sonra etiketi yaz.** Etiket, sistemin yapabildiğinden fazlasını vaat etmemeli.
- **Soğuk başlangıç ekranını tasarla.** Yeni kullanıcı ne görecek? Bu, tasarımın en çok atlanan durumudur.
- **Kaç öneri?** Beş iyi öneri, yirmi orta öneriden iyidir; seçenek artışı karar yorgunluğu üretir (4.7).
- **"Neden bunu görüyorum?" sorusuna cevap verebiliyor musun?** Veremiyorsan etiketi zayıflat.
