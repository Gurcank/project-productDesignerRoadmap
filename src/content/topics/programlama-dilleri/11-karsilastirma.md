---
title: "Karşılaştırma: hangi dil nerede"
sectionNumber: ""
category: "programlama-dilleri"
order: 11
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "Stack Overflow — Developer Survey"
    url: "https://survey.stackoverflow.co/"
---

Bu bölümün özeti. Amaç hangisinin "iyi" olduğuna karar vermek değil; bir dilin adı geçtiğinde **konunun ne olduğunu** anlamak.

## Nerede ne çalışır

| Ortam | Dil | Seçenek var mı |
|---|---|---|
| Tarayıcı | JavaScript / TypeScript | Yok — zorunlu |
| iOS | Swift | Pratikte hayır (ya da çapraz platform) |
| Android | Kotlin | Pratikte hayır (ya da çapraz platform) |
| Sunucu | JS, Python, Java, C#, Go, PHP, Ruby | Çok — ekip ve geçmiş belirler |
| Veri / yapay zekâ | Python | Pratikte hayır |
| Veritabanı | SQL | Yok |

**Okunacak tek satır:** İstemci tarafında dil bir seçim değil, kısıttır. Sunucuda ise seçim neredeyse tamamen ekip ve devralınan koda bağlıdır.

## Hangi işte hangisi

| İhtiyaç | Tipik cevap | Neden |
|---|---|---|
| İçerik sitesi, blog, e-ticaret | PHP (WordPress) | Hazır ekosistem, ucuz hosting |
| Hızlı ürün prototipi | Ruby, Python, Node.js | Fikirden çalışan şeye en kısa yol |
| Yüksek trafikli API | Go, Java, C# | Öngörülebilir performans |
| Kurumsal sistem | Java, C# | Uzun ömür, büyük ekip, olgun araçlar |
| Yapay zekâ / veri | Python | Ekosistem burada |
| Tek ekiple tüm yığın | TypeScript | Aynı dil iki tarafta |

## Tipli mi, tipsiz mi

Tek başına en çok konuşulan ayrım bu:

| | Tipli (TS, Java, C#, Go, Rust) | Tipsiz (JS, Python, Ruby, PHP) |
|---|---|---|
| Hata ne zaman çıkar | Yazarken | Çalışırken |
| Küçük projede | Fazladan iş | Daha hızlı |
| Büyük/uzun ömürlü projede | Kazanç | Borç |
| Senin açından | Hata durumları daha az kullanıcıya ulaşır | Boş/hatalı veri tasarımı daha kritik |

## Bir Product Designer olarak

- **Ekosistem sorusunu sor, dil sorusunu değil:** "Bu işin hazır çözümü var mı?" Cevap tasarım kapsamını doğrudan belirler.
- **Dil değiştirmek özellik değil, mimari iştir.** Takvimi aylarla ölçülür, kullanıcı tarafında görünmez.
- **Tarayıcıda çalışan hiçbir şey gizli değildir** — dil ne olursa olsun.
- **"Hangi dil daha iyi" tartışmasına girme.** Sorulacak soru şu: *bu ekip bunu bakabilir mi, ve bu iş için hazır parça var mı?*
