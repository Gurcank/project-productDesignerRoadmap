---
title: "GitHub Actions"
sectionNumber: "15.11"
category: "git-ve-github"
order: 11
cardCount: 1
sourceFile: "15-git-ve-github.md"
origin: "material"
flags: ["degisken"]
---
### GitHub Actions / Workflow

- **Terim (İngilizce):** GitHub Actions, workflow, job, step, runner
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Depoda bir olay gerçekleştiğinde (push, PR açılması, etiket oluşturulması) otomatik olarak çalışan iş tanımları.
- **Ne işe yarar / neden var:** CI/CD'nin (16.1) GitHub içindeki hâli. Her PR'da testlerin, linter'ın, tip kontrolünün ve erişilebilirlik taramasının otomatik çalışmasını sağlar — yani kalite kontrolünü insan disiplinine değil mekanizmaya bağlar.
- **Nerede karşına çıkar:** Modern GitHub projelerinin çoğunda, `.github/workflows/` klasöründe.
- **Örnek kullanım:** "Her PR'da Lighthouse çalıştıralım; performans bütçesi aşılırsa uyarsın."
- `[DEĞİŞKEN BİLGİ]` Ücretlendirme ve dakika limitleri değişir; ayrıca GitLab CI, CircleCI gibi alternatifleri vardır.
- **İlgili terimler:** CI/CD (16.1), Pipeline (16.2), CI gate (17.7)

**Bir workflow dosyasının mantığı** (söz dizimi değil, yapısı):

1. **Tetikleyici (trigger)** — ne olduğunda çalışsın? (PR açıldığında, `main`'e push yapıldığında, her gece)
2. **İş (job)** — bağımsız çalışan bir görev grubu. Birden fazla iş paralel çalışabilir.
3. **Adım (step)** — işin içindeki tek tek komutlar.
4. **Runner** — bunların çalıştığı sanal makine.

Bu yapıyı bilmek, bir PR'da "CI kırıldı" uyarısını gördüğünde **hangi işin hangi adımında** kırıldığını okuyabilmeni sağlar — genelde hata mesajı doğrudan orada durur.
