---
title: "Şema temelleri"
sectionNumber: "11.4"
category: "veritabani"
order: 4
cardCount: 3
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: []
---
### Schema

- **Terim (İngilizce):** Schema
- **Türkçesi:** Şema
- **Tanım:** Veritabanındaki tabloların, sütunların, tiplerin ve aralarındaki ilişkilerin tanımı.
- **Ne işe yarar / neden var:** Verinin yapısının sözleşmesidir. **Tasarımcı için okunabilir bir belgedir:** hangi alanların var olduğunu, hangilerinin zorunlu, hangilerinin boş olabileceğini gösterir. Bir ekranı tasarlamadan önce şemaya bakmak, hangi uç durumları (4.4) düşünmen gerektiğini söyler.
- **Nerede karşına çıkar:** Proje kurulumunda ve her veri modeli tartışmasında.
- **Örnek kullanım:** "Şemaya baktım: `phone` alanı boş olabiliyor. Telefonu olmayan kullanıcı için kart nasıl görünecek?"
- **İlgili terimler:** Table, Nullable, Migration (11.10)

### Table / Row / Column

- **Terim (İngilizce):** Table, row (record), column (field)
- **Türkçesi:** Tablo, satır (kayıt), sütun (alan)
- **Tanım:** Tablo bir tür nesneyi tutar (kullanıcılar), her satır o türden bir kayıttır (bir kullanıcı), her sütun o kaydın bir özelliğidir (e-posta).
- **Ne işe yarar / neden var:** Konuşma birimi bunlar. Bir Excel tablosu düşün: sayfa = tablo, satır = kayıt, sütun = alan.
- **Nerede karşına çıkar:** Her veri konuşmasında.
- **Örnek kullanım:** "Kullanıcılar tablosuna `timezone` sütunu ekleyelim mi? Bildirimleri doğru saatte göndermek için lazım."
- **İlgili terimler:** Schema, Data type

### Data type / Nullable / Default

- **Terim (İngilizce):** Data type, nullable, `NULL`, default value
- **Türkçesi:** Veri tipi, boş olabilir, varsayılan değer
- **Tanım:** Her sütunun ne tür veri tutacağı (metin, sayı, tarih, doğru/yanlış), boş bırakılıp bırakılamayacağı ve boş bırakılırsa hangi değeri alacağı.
- **Ne işe yarar / neden var:** **Bu, tasarımcının en çok işine yarayan üç bilgidir.** "Nullable" olan her alan, arayüzde bir boş durum demektir: profil fotoğrafı yoksa ne görünecek (avatar fallback, 7.13), açıklama yoksa kart nasıl duracak, tarih yoksa ne yazacak.
- **Nerede karşına çıkar:** Şema incelemesinde ve handoff'ta.
- **Örnek kullanım:** "Üç alan nullable; üçünün de boş hâlini tasarladım, teslimde var."
- **Karıştırılanlar:** `NULL` (değer yok) ile boş metin (`""`) ve sıfır farklı şeylerdir. "Değer girilmemiş" ile "bilerek boş bırakılmış" ayrımı bazen ürün açısından anlamlıdır.
- **İlgili terimler:** Edge case (4.4), Empty state (7.9), Contract (10.4)
