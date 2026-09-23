---
title: "SQL"
sectionNumber: ""
category: "programlama-dilleri"
order: 10
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "PostgreSQL — SQL dili"
    url: "https://www.postgresql.org/docs/current/sql.html"
---

Diğerlerinden farklı bir dil: **ne yapılacağını** değil, **ne istendiğini** söylersin. "Şu koşula uyan kayıtları, şu sıraya göre getir" dersin; nasıl bulacağına veritabanı karar verir.

Materyalin 11. bölümü bu konunun tamamını kapsıyor; buradaki amaç dili bir dil olarak konumlandırmak.

## Nerede karşına çıkar

Her yerde. Arkada ilişkisel bir veritabanı varsa — ki çoğu üründe vardır — veri oradan SQL ile çıkar. Geliştirici doğrudan yazmasa bile (ORM kullanıyorsa) üretilen şey SQL'dir (11.10).

Senin açından en görünür olduğu yer: **analiz**. Ürün metriklerini kendin çıkarabilmek, "kaç kullanıcı şu adımda düşüyor" sorusunu birine sormadan cevaplayabilmek demektir.

## Neyi iyi yapar

- **Bildirimsel.** Ne istediğini yazarsın, nasıl alınacağını sistem çözer.
- **Taşınabilir.** Temel SQL her üründe benzer çalışır.
- **Analiz için güçlü.** Gruplama, toplama, birleştirme tek sorguda.

## Neyi kötü yapar

- **Yazması kolay, hızlı yazması zor.** Aynı sonucu veren iki sorgunun maliyeti bin kat farklı olabilir (11.8).
- **Ürünler arası farklar var.** "Standart SQL" teoride var, pratikte her veritabanının kendi eklentileri var.
- **Yanlışlıkla ağır sorgu yazmak kolaydır** — ve bu, canlı sistemi yavaşlatabilir.

## Alternatifler

- **ORM** — SQL'i dilin nesneleriyle yazma katmanı; kolaylaştırır, ama ne ürettiğini gizlediği için N+1 gibi tuzaklar doğurur (11.9).
- **GraphQL** — istemcinin ne istediğini söylediği API katmanı; SQL'in yerine değil, önüne geçer (10.5).

## Bir Product Designer olarak

- **Temel SQL öğrenmek, bir Product Designer için en yüksek getirili teknik yatırımlardan biri.** "Bu ekrana kaç kişi geliyor" sorusunu kendin cevaplayabilirsin.
- **Her filtre ve sıralama bir sorgudur.** Tabloya beşinci filtreyi eklemek bedava değil; hangilerinin gerçekten kullanıldığını sormak tasarımcının işi (11.5).
- **"Toplam sonuç sayısı" pahalı olabilir.** "10.000+" göstermek, tam sayı vermekten çok daha ucuza gelebilir.
