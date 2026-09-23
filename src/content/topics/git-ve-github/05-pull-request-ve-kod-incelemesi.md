---
title: "Pull request ve kod incelemesi"
sectionNumber: "15.5"
category: "git-ve-github"
order: 5
cardCount: 4
sourceFile: "15-git-ve-github.md"
origin: "material"
flags: ["degisken"]
---
**Senin en çok temas edeceğin kısım.** Bir PR'a yorum yapmak için kod yazmayı bilmene gerek yok.

### Pull request

- **Terim (İngilizce):** Pull request — PR (GitLab'da: merge request, MR)
- **Türkçesi:** Birleştirme talebi
- **Tanım:** Bir daldaki değişikliklerin ana dala alınması için açılan, inceleme ve tartışma alanı.
- **Ne işe yarar / neden var:** Değişikliğin birleştirilmeden önce görülmesini sağlar. Aynı zamanda bir **kayıttır**: bir özelliğin neden böyle yapıldığı tartışması burada durur. Ayrıca otomatik kontrollerin (testler, linter, performans bütçesi) çalıştığı yerdir (17.7).
- **Nerede karşına çıkar:** Her değişiklikte.
- **Örnek kullanım:** "PR'a tasarım karşılaştırma ekran görüntüsü ekleyelim; incelemesi kolaylaşsın."
- **İlgili terimler:** Code review, Diff (15.2), CI (16.1)

### Code review

- **Terim (İngilizce):** Code review, approve, request changes, comment
- **Türkçesi:** Kod incelemesi
- **Tanım:** Bir PR'daki değişikliklerin başkaları tarafından incelenmesi ve onaylanması veya değişiklik istenmesi.
- **Ne işe yarar / neden var:** Hataları erken yakalar, bilgi paylaşır ve standartları korur. **Tasarımcı olarak senin buradaki rolün net:** uygulamanın tasarıma uygunluğunu kontrol etmek (2.10, design review). Ölçüler, durumlar, responsive davranış ve erişilebilirlik notları PR üzerinden yorumlanabilir.
- **Nerede karşına çıkar:** Her PR'da.
- **Örnek kullanım:** "PR'a yorum bıraktım: focus durumu eksik ve boşluklar ölçek dışı."
- **Karıştırılanlar:** **PR boyutu kritiktir.** Çok büyük PR'lar gerçekten incelenmez — insanlar bakar ve onaylar. Yaygın bir başparmak kuralı, bir PR'ın birkaç yüz satırlık farkı geçmemesi yönündedir; daha büyükse bölünmelidir.
- **İlgili terimler:** Design review (2.10), Pull request, Code review kültürü (17.10)

### Squash merge / Branch protection

- **Terim (İngilizce):** Squash merge, rebase merge, branch protection, required checks
- **Türkçesi:** Sıkıştırarak birleştirme, dal koruması
- **Tanım:** **Squash merge**, bir daldaki tüm commit'leri tek bir commit hâline getirip ana dala eklemek. **Branch protection**, ana dala doğrudan yazmayı engelleyen ve PR ile belirli kontrolleri zorunlu kılan ayar.
- **Ne işe yarar / neden var:** Squash, ana dalın geçmişini temiz tutar: bir özellik = bir commit. Branch protection ise "kimse test edilmemiş kodu main'e itemesin" kuralını mekanikleştirir — niyete değil, ayara bağlar.
- **Nerede karşına çıkar:** Depo ayarlarında.
- **Örnek kullanım:** "Main'e branch protection koyalım: en az bir onay ve testlerin geçmesi zorunlu olsun."
- **İlgili terimler:** CI gate (17.7), Definition of Done (2.10)

### Draft PR / Merge queue / Stacked PR

- **Terim (İngilizce):** Draft pull request, merge queue, stacked pull requests
- **Türkçesi:** Taslak PR, birleştirme kuyruğu, yığılmış PR'lar
- **Tanım:** **Draft PR**, "henüz hazır değil ama bakabilirsiniz" sinyali. **Merge queue**, birleştirme bekleyen PR'ları sıraya alıp testleri birlikte çalıştırarak birleştiren mekanizma. **Stacked PR**, birbirine bağımlı küçük PR'lar zinciri.
- **Ne işe yarar / neden var:** Üçü de aynı problemi çözer: PR'ları küçük tutmak ve ana dalı kırmadan hızlı ilerlemek. Merge queue özellikle yoğun ekiplerde, "testler geçti ama başka bir PR araya girdi ve ana dal kırıldı" durumunu engeller.
- **Nerede karşına çıkar:** Yoğun tempolu ekiplerde. `[DEĞİŞKEN BİLGİ]` Bunlar platform özellikleridir; GitHub ve üçüncü parti araçlarda farklı biçimlerde sunulur.
- **Örnek kullanım:** "Taslak PR açıp yönü erkenden gösterelim; hazır olunca incelemeye alırız."
- **İlgili terimler:** Pull request, Trunk-based development (15.7)
