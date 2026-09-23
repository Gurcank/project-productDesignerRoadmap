---
title: "Pipeline anatomisi"
sectionNumber: "16.2"
category: "devops-ve-yayin"
order: 2
cardCount: 2
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: []
---
### Pipeline

- **Terim (İngilizce):** Pipeline, job, step, stage, artifact, runner
- **Türkçesi:** Yayın hattı
- **Tanım:** Kodun testten geçip yayına çıkana kadar izlediği otomatik adımlar dizisi.
- **Ne işe yarar / neden var:** Elle yapılan her adım unutulabilir veya yanlış yapılabilir. Hattın tamamı otomatikse, yayın bir karar olur, bir operasyon değil.
- **Nerede karşına çıkar:** Her PR ve her deploy'da. GitHub Actions (15.11) bunun bir uygulamasıdır.
- **Örnek kullanım:** "Pipeline dört aşamalı: kurulum, test, build, deploy."
- **İlgili terimler:** GitHub Actions (15.11), Build, CI gate (17.7)

**Tipik bir hattın aşamaları:**

| Aşama | Ne yapar |
|---|---|
| **Install** | Bağımlılıkları indirir (8.11) |
| **Lint & type check** | Kod standardını ve tipleri kontrol eder (17.7) |
| **Test** | Otomatik testleri çalıştırır (17.2) |
| **Build** | Üretim için optimize edilmiş çıktıyı üretir |
| **Deploy** | Çıktıyı hedef ortama gönderir |
| **Smoke test** | Yayından sonra temel akışların çalıştığını doğrular (17.2) |

### Build / Artifact

- **Terim (İngilizce):** Build, artifact
- **Türkçesi:** Derleme, çıktı
- **Tanım:** **Build**, kaynak kodun çalıştırılabilir/servis edilebilir hâle getirilmesi (8.11). **Artifact**, o işlemin ürettiği ve sonraki aşamalara taşınan çıktı.
- **Ne işe yarar / neden var:** **Aynı artifact'ın tüm ortamlarda kullanılması önemli bir ilkedir:** staging'de test edilen şey ile production'a çıkan şey birebir aynı olmalıdır. Her ortam için ayrı build almak, "staging'de çalışıyordu" sorununu üretir.
- **Nerede karşına çıkar:** Yayın süreçlerinde.
- **Örnek kullanım:** "Staging'de test ettiğimiz artifact'ı production'a alalım; yeniden build etmeyelim."
- **İlgili terimler:** Pipeline, Ortamlar (16.3), Docker image (16.4)
