---
title: "Sıralama: \"sırala\" neden bedava değil"
sectionNumber: ""
category: "algoritmalar"
order: 4
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "PostgreSQL — Sorgu planlama ve sıralama"
    url: "https://www.postgresql.org/docs/current/using-explain.html"
---

Sıralama, arayüzde tek bir tıklamadır; arkada listenin tamamına dokunan bir iştir.

## Maliyeti nereden gelir

Sıralamak, tüm veriyi görmeyi gerektirir. İlk 20 satırı göstereceksen bile, **hangi 20 olduğunu** bulmak için hepsine bakmak gerekir. Bu yüzden "sadece ilk sayfayı gösteriyoruz" sıralamayı ucuzlatmaz.

Kurtaran şey yine index: veritabanı o sütun için sıralı bir yapı tutuyorsa, sıralama zaten yapılmış demektir ve sorgu ucuzlar (11.5). Tutmuyorsa her istekte yeniden sıralanır.

Buradan çıkan pratik kural: **her sütuna sıralama koymak, her sütun için index istemek demektir** — ve her index yazmayı yavaşlatır, yer kaplar.

## Kararlı sıralama

İki kayıt aynı değere sahipse hangisi önce gelir? **Kararlı (stable)** sıralama önceki sırayı korur, kararsız olan korumaz.

Arayüzdeki karşılığı şu: aynı tarihe sahip iki satır, sayfa her yenilendiğinde yer değiştirebilir. Kullanıcı bunu hata sanar. Çözümü ikinci bir sıralama ölçütü belirlemektir ("tarihe göre, eşitse ada göre") — ve bunu **senin** söylemen gerekir.

## Sıralama + sayfalama tuzağı

Sayfalama sıralı bir liste üzerinde çalışır. Sıra belirsizse, 2. sayfada 1. sayfada gördüğün bir kaydı tekrar görebilir ya da bir kaydı hiç görmeyebilirsin.

Bu, offset tabanlı sayfalamanın bilinen sorunudur ve veri değişirken büyür. Cursor tabanlı sayfalama bunu çözer ama "3. sayfaya git" özelliğini kaybettirir (10.10).

| | Offset ("sayfa 3") | Cursor ("sonraki 20") |
|---|---|---|
| Sayfa numarası | Var | Yok |
| Veri değişirken | Kayabilir, tekrar edebilir | Tutarlı |
| Sonsuz kaydırmaya uygunluk | Zayıf | İyi |

## Bir Product Designer olarak

- **Varsayılan sıralamayı sen belirle** ve yaz. Belirtmezsen veritabanından ne gelirse o gelir ve zamanla değişir.
- **Eşitlik durumunda ikinci ölçüt ver.** Bu tek cümle, "satırlar zıplıyor" şikâyetini önler.
- **Hangi sütunların gerçekten sıralanması gerekiyor?** Hepsi demek, hepsine maliyet demek.
- **Sayfa numarası mı, sonsuz kaydırma mı?** Bu bir görsel tercih değil, veri tutarlılığı kararıdır.
