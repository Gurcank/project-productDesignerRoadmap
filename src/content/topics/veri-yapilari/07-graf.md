---
title: "Graf — ilişkiler ve öneri"
sectionNumber: ""
category: "veri-yapilari"
order: 7
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "PostgreSQL — Çoktan çoğa ilişkiler ve birleştirme tabloları"
    url: "https://www.postgresql.org/docs/current/tutorial-join.html"
  - label: "MDN — Erişilebilirlik ağacı (DOM'dan türetilen ikinci yapı)"
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree"
---

**Graf**, düğümler ve aralarındaki bağlantılardan oluşur. Ağaçtan farkı, **kısıt olmamasıdır**: bir düğümün birden çok üstü olabilir, döngü olabilir, her şey her şeye bağlanabilir.

Sosyal ağlar, "bunu alanlar şunu da aldı", yol tarifi, bağımlılık haritaları — hepsi graftır.

## Ağaç mı graf mı: tek ayırt edici soru

> Bir öğeye birden fazla yoldan ulaşılabiliyor mu?

Cevap "evet" ise elindeki şey ağaç değil graftır. Bu, önceki adımdaki "ürün iki kategoride birden" sorununun teknik adıdır.

Veritabanı tarafındaki karşılığı **çoktan çoğa ilişkidir** (11.6) ve pratikte bir **birleştirme tablosu** ile kurulur. Bir geliştirici "bunun için ara tablo gerekiyor" dediğinde, tasarımın bir grafa dönüştüğünü söylüyordur.

## Arayüzde nerede karşına çıkar

- **Etiket sistemleri.** Bir yazı birçok etikete, bir etiket birçok yazıya bağlıdır.
- **İzin ve rol yapıları.** Kullanıcı → rol → izin; bir kullanıcı birden çok rolde olabilir (Bölüm 12).
- **"İlgili içerik" ve öneriler.** "Bunu okuyanlar şunu da okudu" bir graf gezintisidir.
- **Bağımlılıklar.** Görev A, B bitmeden başlayamaz — proje araçlarındaki bağımlılık okları.
- **Sosyal bağlantılar.** Takip, arkadaşlık, bahsetme.

## Grafın tasarıma çıkardığı üç zorluk

**1. Döngü mümkündür ve genellikle bir hatadır.**

"Görev A, B'yi bekliyor; B de A'yı bekliyor" — kimse başlayamaz. Bağımlılık, kategori hiyerarşisi veya organizasyon şeması tasarlıyorsan, **döngü oluştuğunda ne olacağını** tanımlaman gerekir: engellenecek mi, uyarı mı verilecek, nasıl gösterilecek? Belirtilmezse sistem sessizce kilitlenir.

**2. "Kaç adım uzakta" sorusu pahalıdır.**

Ağaçta derinlik bellidir; grafta iki düğüm arası mesafeyi bulmak gezinme gerektirir. "2. dereceden bağlantıların" gibi özellikler ucuz görünür ama derinlik arttıkça maliyet hızla büyür. Bu yüzden çoğu ürün bunu 1–2 seviyeyle sınırlar.

**3. Gösterimi zordur.**

Graf, doğal olarak iki boyuta oturmaz. "Bağlantıları görselleştirelim" isteği çoğu zaman okunamayan bir "kıl yumağı" üretir. Pratikte işe yarayan gösterimler grafın kendisi değil, **ondan türetilmiş listelerdir**: "en çok bağlantılı 10 öğe", "seninle ortak 3 kişi".

| | Ağaç | Graf |
|---|---|---|
| Üst sayısı | Bir | Çok |
| Döngü | Yok | Mümkün — genelde istenmez |
| Tipik gösterim | Menü, breadcrumb, katman paneli | Liste, "ilgili", öneri; nadiren diyagram |
| Veritabanındaki hâli | Üst-alt sütunu | Ara (birleştirme) tablosu |

## Öneri sistemleri: "önerilen" belirsiz bir etikettir

Graf tabanlı öneriler ("bunu alanlar şunu da aldı") istatistiksel bir çıkarımdır, bir vaat değildir. Arayüzde "Senin için seçtik" yazmak, sistemin yapabileceğinden fazlasını iddia eder.

Daha dürüst etiketler kullanıcıya neye baktığını söyler: "Bu kategoride popüler", "Birlikte sık alınanlar", "Benzer etiketlere sahip". Bu, hem beklentiyi doğru kurar hem de öneri zayıf olduğunda güveni daha az zedeler.

## Alternatifler

- **Ağaç** — ilişki gerçekten tek yönlü hiyerarşiyse; daha basit, daha ucuz.
- **Etiket + filtre** — çok boyutlu sınıflandırma için grafın hafif hâli.
- **Elle seçim (küratörlük)** — "ilgili içerik"i editör seçer. Ölçeklenmez ama kalitesi öngörülebilirdir ve küçük kataloglarda otomatik öneriden iyidir.

## Bir Product Designer olarak

- **"Birden çok yoldan ulaşılabilir mi?" sorusunu sor.** Cevabı, arkadaki veri modelini ve senin breadcrumb/URL kararlarını belirler.
- **Döngü kuralını tanımla.** Bağımlılık veya hiyerarşi tasarlıyorsan, döngünün engellenip engellenmeyeceğini ve hata mesajını sen yazmalısın.
- **Graf görselleştirmesine atlamadan önce sor: kullanıcı bu diyagramla hangi kararı verecek?** Cevap yoksa liste daha iyidir.
- **Öneri etiketlerini dürüst yaz.** "Senin için seçildi" yerine mekanizmayı söyleyen bir etiket, hem beklentiyi hem güveni doğru yönetir (19.9'daki doğrulama mantığıyla aynı fikir).
