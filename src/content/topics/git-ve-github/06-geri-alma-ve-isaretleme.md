---
title: "Geri alma ve işaretleme"
sectionNumber: "15.6"
category: "git-ve-github"
order: 6
cardCount: 3
sourceFile: "15-git-ve-github.md"
origin: "material"
flags: []
---
### Revert / Reset

- **Terim (İngilizce):** Revert, reset
- **Türkçesi:** Geri alma, sıfırlama
- **Tanım:** **Revert**, bir commit'in etkisini iptal eden **yeni bir commit** oluşturur — geçmiş korunur. **Reset**, geçmişi geriye alır ve commit'leri geçmişten çıkarabilir.
- **Ne işe yarar / neden var:** **Canlıda bir şey bozulduğunda doğru refleks revert'tir**, reset değil. Revert güvenlidir, paylaşılmış geçmişi bozmaz ve ne olduğunun kaydını bırakır.
- **Nerede karşına çıkar:** Olay müdahalesinde (16.9).
- **Örnek kullanım:** "Deploy sonrası site bozuldu; baskı altında düzeltmeye çalışmayalım, önce revert edip sonra sakin kafayla bakalım."
- **Karıştırılanlar:** "Fix forward" (ileri doğru düzeltme) yerine revert etmek, kriz anında neredeyse her zaman doğrudur. Panikle yazılan düzeltme, yeni hata üretir.
- **İlgili terimler:** Rollback (16.9), Incident (16.9), Hotfix (16.9)

### Tag / Release

- **Terim (İngilizce):** Tag, release
- **Türkçesi:** Etiket, sürüm
- **Tanım:** **Tag**, geçmişteki belirli bir noktanın kalıcı olarak işaretlenmesi (`v2.1.0` gibi). **Release**, GitHub'da o etiketin etrafına sürüm notları ve dosyalar eklenerek yayınlanması.
- **Ne işe yarar / neden var:** "Hangi kod canlıda?" sorusunun cevabı. Bir sorun çıktığında tam olarak hangi sürüme geri dönüleceğini belirler.
- **Nerede karşına çıkar:** Yayın süreçlerinde.
- **Örnek kullanım:** "v2.1.0 etiketine geri dönelim; sorun ondan sonra girmiş."
- **İlgili terimler:** Semantic versioning (15.8), Changelog (15.8), Rollback (16.9)

### Stash / Blame

- **Terim (İngilizce):** Stash, blame, log, bisect
- **Türkçesi:** Rafa kaldırma, suçlama
- **Tanım:** **Stash**, yarım kalmış işi geçici olarak kenara koyup temiz bir duruma dönmek. **Blame**, bir dosyadaki her satırın hangi commit ve kim tarafından yazıldığını göstermek. **Bisect**, bir hatanın hangi commit'te girdiğini ikili aramayla bulmak.
- **Ne işe yarar / neden var:** **Blame senin için faydalıdır:** "bu boşluk değeri neden 22px?" sorusunu, ilgili satırın hangi commit ve hangi PR ile geldiğine bakarak cevaplayabilirsin — ve o PR'daki tartışmayı okuyabilirsin.
- **Nerede karşına çıkar:** Hata ayıklamada ve "bu neden böyle?" sorularında.
- **Örnek kullanım:** "Blame'e baktım; bu değer altı ay önce bir hotfix'te elle girilmiş, token'dan gelmiyor."
- **Karıştırılanlar:** "Blame" adı talihsizdir; amaç suçlu bulmak değil, bağlamı bulmaktır.
- **İlgili terimler:** Commit (15.2), Pull request (15.5)
