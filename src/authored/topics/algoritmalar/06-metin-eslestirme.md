---
title: "Metin eşleştirme: kökleme ve yazım toleransı"
sectionNumber: ""
category: "algoritmalar"
order: 6
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "PostgreSQL — Tam metin arama"
    url: "https://www.postgresql.org/docs/current/textsearch-intro.html"
  - label: "Pagefind — Çok dilli destek ve kökleme"
    url: "https://pagefind.app/docs/multilingual/"
---

"Kullanıcı ne yazarsa yazsın bulsun" isteği, arkada birkaç ayrı mekanizmadır. Her biri ayrı maliyet ve ayrı yanlış-eşleşme riski taşır.

## Katmanlar

| Katman | Ne yapar | Riski |
|---|---|---|
| Tam eşleşme | Birebir aynısını bulur | Kullanıcı nadiren birebir yazar |
| Büyük/küçük ve aksan normalizasyonu | "İSTANBUL" = "istanbul" | Türkçede `I/ı/İ/i` tuzağı |
| **Kökleme (stemming)** | "bileşenlerin" → "bileşen" | Dile özgü; yanlış kök yanlış sonuç |
| Yazım toleransı (fuzzy) | "kulanıcı" → "kullanıcı" | Alakasız sonuçlar getirebilir |
| Eş anlamlı | "giriş" = "login" | Elle bakım ister |

## Türkçe neden ayrı bir mesele

Türkçe eklerle çalışır: *bileşen, bileşenler, bileşenlerin, bileşenlerimizden*. Kökleme desteklenmiyorsa kullanıcı doğal hâliyle yazdığında **hiçbir şey bulamaz** — ve bunu bir hata değil, "sitede yok" diye yorumlar.

İki ayrı tuzak daha:

- **`I/ı/İ/i`.** Türkçe küçültme kuralı İngilizceden farklıdır; yanlış yapılırsa "İstanbul" araması "istanbul"u bulmaz.
- **İngilizce terimler Türkçe köklenince bozulabilir.** Türkçe köklü bir indekste "Social" gibi bir kelime, Türkçe bir kökün altına düşüp alakasız sonuçlarla eşleşebilir.

Bu sitenin kendi araması Türkçe kökleme kullanıyor ve her iki durumu da yaşadı.

## Sıralama: hangi sonuç önce

Eşleşme bulmak yarısı; **hangisinin önce geleceği** diğer yarısı. Tipik ağırlıklar: başlıkta geçen > gövdede geçen, tam kelime > kısmi, yeni > eski. Bu bir ürün kararıdır — belirtilmezse aracın varsayılanı kullanılır ve kimse neden o sıralamanın çıktığını açıklayamaz.

## Bir Product Designer olarak

- **Türkçe kökleme desteğini açıkça sor.** Yoksa arama, kullanıcıların yazdığı gibi yazdığında çalışmaz.
- **Yazım toleransı isteyip istemediğine karar ver.** Yanlış eşleşmeyi kabul ediyor musun?
- **Sonuç sıralamasının kuralını yaz.** "Alakaya göre" tanımsız bir ifadedir.
- **Eşleşen kelimeyi vurgula.** Kullanıcı sonucun neden geldiğini görmeli — bu güveni doğrudan etkiler.
