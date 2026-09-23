---
title: "Kabul kriteriyle istemek"
sectionNumber: "19.5"
category: "yapay-zeka-ile-calisma"
order: 5
cardCount: 0
sourceFile: "19-yapay-zeka-ile-profesyonel-calisma.md"
origin: "material"
flags: []
---
Bölüm 2.6'daki kabul kriteri, prompt yazarken **"bitti" tanımını baştan koymak** anlamına gelir. Bu, iterasyonu en çok azaltan tek uygulamadır.

**Kötü:** "Bir fiyatlandırma bölümü yap."

**İyi — kabul kriterleriyle:**

> Fiyatlandırma bölümü. Bitmiş sayılması için:
> - Üç plan kartı, ortadaki "En çok tercih edilen" rozetiyle öne çıkarılmış
> - Aylık/yıllık geçiş anahtarı; yıllıkta tasarruf rozeti
> - Her kartta: plan adı, kime uygun olduğu, fiyat, tek CTA, dahil olanlar listesi
> - Mobilde tek sütun, 768px üstünde üç sütun
> - Anahtarın hangi durumda olduğu renkten bağımsız olarak anlaşılır
> - Tüm butonlar klavyeyle erişilebilir, focus göstergesi görünür
> - Boşluklar spacing ölçeğinden, renkler token'dan

Bu liste, tek tek "evet/hayır" ile kontrol edilebilir (2.6) — yani çıktıyı denetlemenin de listesi olur.

**Kural:** Bir kabul kriteri yazamıyorsan, isteğin henüz netleşmemiştir. Bu, modelin değil senin probleminin işaretidir.
