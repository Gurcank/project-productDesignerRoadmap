---
title: "Yığın ve kuyruk — geri alma, iş kuyruğu"
sectionNumber: ""
category: "veri-yapilari"
order: 5
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "MDN — History API (tarayıcı geçmişi bir yığındır)"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/History_API"
  - label: "W3C WAI — Undo ve hata önleme (WCAG 3.3.4)"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html"
---

İkisi de sıralı yapılardır; farkları **hangi ucundan alındığıdır**.

- **Yığın (stack):** son giren ilk çıkar. Üst üste konmuş tabaklar.
- **Kuyruk (queue):** ilk giren ilk çıkar. Kasada sıra.

Bu tek cümlelik fark, arayüzdeki iki büyük özelliği belirler: **geri alma** ve **arka plan işleri**.

## Yığın: geri alma bunun üstüne kurulur

Geri alma (undo), yapılan işlemlerin bir yığında tutulmasıdır. Her işlem üste konur; "geri al" en üsttekini alır.

Bunun tasarıma yansıyan sonuçları var:

- **Geri alma sırayla çalışır.** "Üç adım önceki şeyi geri al ama aradakiler kalsın" doğal bir işlem değildir; ayrıca tasarlanması gerekir ve pahalıdır.
- **Yeni bir işlem yaparsan ileri alma (redo) silinir.** Kullanıcı geri alır, sonra başka bir şey yazar — ileri alma zinciri kopar. Bu tuhaf değil, yapının doğal sonucudur; ama kullanıcıya belli etmek gerekir.
- **Yığın sonsuz değildir.** "Kaç adım geri alınabilir?" bir tasarım kararıdır. Belirtmezsen geliştirici bir sayı seçer (genelde 50) ve kullanıcı sınıra çarptığında hiçbir açıklama görmez.

**Tarayıcı geçmişi de bir yığındır.** Geri tuşunun beklendiği gibi çalışması, arayüzün her anlamlı durumunu geçmişe yazmasına bağlıdır. Modal açıldığında geçmişe yazılmazsa, kullanıcı geri tuşuna basar ve modalı kapatmak yerine siteden çıkar — mobilde en sık şikâyet edilen davranışlardan biri (8.9).

## Kuyruk: "arka planda yapılıyor" demek

Kuyruk, hemen yapılmayacak işlerin sıraya konmasıdır: e-posta gönderimi, rapor üretimi, görsel işleme, dışa aktarma (10.12).

Tasarım açısından kritik olan şudur: **kuyruğa alınan iş, kullanıcı beklerken yapılmaz.** Yani arayüz "tamam" der ama iş henüz bitmemiştir. Bu, üç ekran gerektirir ve bunlar genellikle unutulur:

1. **Kabul ekranı** — "İsteğin alındı, hazır olunca haber vereceğiz."
2. **Durum görünürlüğü** — Kullanıcı nereden bakacak? Bir liste mi, bildirim mi?
3. **Başarısızlık** — İş kuyrukta başarısız olursa kullanıcı nasıl öğrenir? Tekrar deneyebilir mi?

Üçüncüsü en çok atlanandır. Kuyruktaki bir iş genellikle birkaç kez otomatik denenir, sonra "ölü mektup kutusuna" düşer (10.12). Kullanıcı hiçbir şey görmezse, işin yapıldığını sanır.

| | Yığın | Kuyruk |
|---|---|---|
| Kural | Son giren ilk çıkar | İlk giren ilk çıkar |
| Arayüzdeki yeri | Geri al / ileri al, tarayıcı geçmişi, iç içe modal | Arka plan işleri, bildirim sırası, dışa aktarma |
| Tasarım sorusu | Kaç adım geri alınabilir? | İş bitince kullanıcı nereden görecek? |

## Alternatifler

- **Öncelikli kuyruk** — bazı işler sıranın önüne geçer ("premium kullanıcının raporu önce").
- **Anlık (senkron) işlem** — iş yeterince hızlıysa kuyruğa hiç gerek yoktur; kuyruk her zaman doğru cevap değildir, karmaşıklık ekler.
- **Geri alma yerine onay** — yıkıcı işlemde "emin misin?" sormak, geri alma altyapısı kurmaktan ucuzdur ama kullanıcı deneyimi olarak daha kötüdür. Geri alınabilir bir işlem, onay soran bir işlemden neredeyse her zaman iyidir.

## Bir Product Designer olarak

- **Yıkıcı her işlem için "geri al mı, onay mı" sorusunu cevapla.** Geri alma istiyorsan bunu özellik açıklamasına yaz; sonradan eklenmesi mimari değişikliğidir.
- **Geri alma sınırını ve ileri alma davranışını tanımla.**
- **Arka plana atılan her iş için üç ekranı da tasarla:** kabul, durum, başarısızlık. Üçüncüsü yoksa özellik yarımdır.
- **Mobilde geri tuşunu test et.** Modal, çekmece ve filtre panelleri geri tuşuyla kapanmalı; bu bir geliştirme detayı değil, tasarım gereksinimidir.
