---
title: "Araçlar"
sectionNumber: "17.3"
category: "test-ve-kalite"
order: 3
cardCount: 0
sourceFile: "17-test-kalite-ve-kod-sagligi.md"
origin: "material"
flags: ["degisken", "emin-degil"]
---
> `[DEĞİŞKEN BİLGİ]` Araç manzarası hızlı değişir. Aşağıdakiler Eylül 2026 itibarıyla topladığım kaynaklara dayanıyor.

| Katman | Yaygın araçlar | Notlar |
|---|---|---|
| **Unit / integration** | Vitest, Jest | Vitest, modern projelerde varsayılan hâline geldiği raporlanıyor; Jest hâlâ çok yaygın ama yeni projelerde tercih oranı düşüyor |
| **Bileşen testi** | Testing Library | Bileşenleri, kullanıcının gördüğü gibi (rol ve erişilebilir ad üzerinden) test etmeyi teşvik eder |
| **E2E** | Playwright, Cypress | Playwright'ın öne geçtiği raporlanıyor: çapraz tarayıcı desteği ve ücretsiz paralel çalıştırma başlıca sebepler. Cypress geriliyor ama ölmüyor; mevcut test setleri geçerli kalıyor |

`[EMİN DEĞİLİM]` Bir sektör anketinin (State of JS 2025, Ocak 2026'da yayımlandığı belirtiliyor) Playwright ve Cypress arasında memnuniyet açısından belirgin bir fark raporladığı aktarılıyor. Anketin kendisini okumadım; rakamları yazmıyorum.

**Tasarımcı için asıl not:** Testing Library'nin yaklaşımı seni doğrudan ilgilendirir. Bu kütüphane, bileşenleri CSS sınıflarına göre değil **erişilebilir adlara ve rollere göre** bulmayı teşvik eder. Sonuç: erişilebilirlik için yaptığın işler (6.3, 6.4) testleri de sağlamlaştırır. İyi yazılmış bir arayüz, test edilmesi kolay bir arayüzdür.
