---
title: "Java"
sectionNumber: ""
category: "programlama-dilleri"
order: 5
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "Oracle — Java dokümantasyonu"
    url: "https://docs.oracle.com/en/java/"
---

Büyük kurumsal sistemlerin dili. Bankalar, sigorta, telekom, kamu — uzun ömürlü ve çok kişiyle yazılan sistemlerde baskın.

## Nerede karşına çıkar

- **Kurumsal back-end.** Türkiye'de bankacılık ve büyük kurumlarda çok yaygın.
- **Android.** Tarihsel olarak Android'in dili; yeni işler Kotlin'e kaydı ama devralınan kodun çoğu Java.
- **Büyük veri altyapıları.** Kafka, Elasticsearch gibi araçların kendisi Java ile yazılı.

## Neyi iyi yapar

- **Uzun ömürlü ve öngörülebilir.** Yıllar boyunca bakılabilen, geriye uyumluluğu ciddiye alan bir ekosistem.
- **Büyük ekiplerde ölçeklenir.** Katı tip sistemi ve olgun araçlar, çok kişinin aynı koda dokunmasını kolaylaştırır.
- **Olgun kütüphane ekosistemi.** Kurumsal ihtiyaçların çoğunun hazır çözümü var.

## Neyi kötü yapar

- **Ayrıntılı (verbose).** Aynı iş daha çok satırla yazılır; küçük bir değişiklik çok dosyaya dokunabilir.
- **Başlangıç maliyeti yüksek.** Küçük bir servis için ağır gelir.
- **Değişim yavaş.** Bu bir güvenlik özelliği ama modern bir arayüz ihtiyacını karşılamak zaman alabilir.

## Alternatifler

- **Kotlin** — aynı ekosistem, çok daha az ayrıntı; yeni Java projelerinin gittiği yer.
- **C#** — Microsoft dünyasındaki dengi.
- **Go** — basit ve yüksek trafikli servisler için.

## Bir Product Designer olarak

- **Java'lı bir kurumda takvim beklentini ayarla.** Küçük görünen bir değişiklik, katmanlı bir mimaride birçok noktaya dokunabilir (14.1).
- **Devralınan sistem tasarımı kısıtlar.** "Bu alanı kaldıralım" isteği, o alana bağlı yıllanmış entegrasyonlar yüzünden reddedilebilir; erken sor.
