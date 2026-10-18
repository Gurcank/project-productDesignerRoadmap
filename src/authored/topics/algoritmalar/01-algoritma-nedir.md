---
title: "Algoritma nedir, \"bu neden zor\" sorusunun cevabı"
sectionNumber: ""
category: "algoritmalar"
order: 1
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "MDN — Performans ve ölçüm"
    url: "https://developer.mozilla.org/en-US/docs/Web/Performance"
---

Algoritma, bir işi bitirmek için izlenen adımların tarifidir. Veri yapısı verinin **nasıl dizildiği**, algoritma o diziliş üzerinde **ne yapıldığıdır**. İkisi birlikte, bir arayüzün neyi anında yapabileceğini belirler.

Bu bölüm kod öğretmiyor. Amaç şu: bir geliştirici "bu pahalı" dediğinde **neyin pahalı olduğunu** anlamak ve isteğini ona göre yeniden çerçevelemek.

## "Zor" ile "çok iş" farklı şeyler

Bir isteğin zor olmasının üç ayrı sebebi olabilir ve üçünün cevabı farklıdır:

| Sebep | Belirtisi | Ne yapmalı |
|---|---|---|
| **Çok iş** | "İki hafta sürer" | Kapsamı böl (2.8) |
| **Ölçek** | "10 kayıtta çalışır, 100.000'de çalışmaz" | Kaç öğe olacağını netleştir |
| **Belirsizlik** | "Neye göre sıralayacağız?" | Kararı sen ver |

Üçüncüsü en sık atlananı. "Alakaya göre sırala" bir algoritma değil, bir **istektir**; alakanın ne olduğunu tanımlamadan kimse yazamaz.

## Algoritmanın tasarımda göründüğü yer

Neredeyse her yerde, ama en çok dört yerde:

- **Arama kutusu** — ne eşleşecek, nasıl sıralanacak.
- **Liste ve tablo** — filtreleme, sıralama, sayfalama.
- **Öneriler** — "sana özel", "ilgili içerik".
- **Bildirimler** — ne zaman, hangi sırayla, kaç tane.

Dördünde de zor olan kısım genelde hesaplama değil, **kuralın tanımlanmamış olmasıdır**.

## Doğru cevap her zaman "daha hızlı algoritma" değil

Bir işlem yavaşsa üç yol vardır ve ilki çoğu zaman en iyisidir:

1. **İşi yapma.** Kullanıcı gerçekten tüm sonuçları istiyor mu, yoksa ilk 20 yeter mi?
2. **Daha sonra yap.** Arka plana at, hazır olunca haber ver (10.12).
3. **Daha hızlı yap.** Algoritmayı ya da veri yapısını değiştir.

Tasarımcı olarak en çok etkileyebildiğin yer birincisidir: **isteği küçültmek, kodu hızlandırmaktan ucuzdur.**

## Bir Product Designer olarak

- **Her sıralama ve filtre kuralını yazılı olarak tanımla.** "En alakalı" tanımsızsa, sistem bir şey seçer ve kullanıcı bunu rastgelelik olarak görür.
- **"Kaç öğe?" sorusunu her listede sor.** Cevap maliyeti belirler.
- **Bir etkileşimin anında olması gerekiyorsa söyle** — bu, farklı bir çözüm demektir, sonradan hızlandırma değil.
- **Gecikmeyi gizlemek de bir tasarım aracıdır** (4.7): iskelet ekran, iyimser güncelleme, ilerleme göstergesi.
