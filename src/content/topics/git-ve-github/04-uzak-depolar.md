---
title: "Uzak depolar"
sectionNumber: "15.4"
category: "git-ve-github"
order: 4
cardCount: 3
sourceFile: "15-git-ve-github.md"
origin: "material"
flags: []
---
### Remote / Origin / Upstream

- **Terim (İngilizce):** Remote, `origin`, `upstream`
- **Türkçesi:** Uzak depo
- **Tanım:** Projenin, senin bilgisayarın dışındaki kopyası. `origin` senin kendi uzak deponun varsayılan adı; `upstream` ise fork yaptığın (15.4) asıl deponun yaygın adı.
- **Ne işe yarar / neden var:** Ekibin ortak buluşma noktası. Herkes kendi bilgisayarında çalışır, işini uzak depoya gönderir.
- **Nerede karşına çıkar:** Her gün.
- **Örnek kullanım:** "Upstream'den güncellemeleri çekip kendi fork'una aktar."
- **İlgili terimler:** Clone, Fork, Push/Pull

### Clone / Fork

- **Terim (İngilizce):** Clone, fork
- **Türkçesi:** Kopyalama, çatallama
- **Tanım:** **Clone**, uzak bir depoyu kendi bilgisayarına indirmek. **Fork**, o deponun kendi hesabın altında bağımsız bir kopyasını oluşturmak.
- **Ne işe yarar / neden var:** Clone günlük çalışmanın başlangıcıdır. Fork ise yazma yetkin olmayan bir projeye katkı vermenin yoludur: kendi kopyanda değişiklik yapar, sonra asıl projeye pull request açarsın — açık kaynağın çalışma biçimi budur.
- **Nerede karşına çıkar:** Projeye başlarken ve açık kaynak katkılarında.
- **Örnek kullanım:** "Yazma yetkin yok; fork'la, değiştir, PR aç."
- **İlgili terimler:** Pull request (15.5), Remote

### Push / Pull / Fetch

- **Terim (İngilizce):** Push, pull, fetch, force push
- **Türkçesi:** Gönderme, çekme, getirme
- **Tanım:** **Push** yerel değişiklikleri uzak depoya gönderir. **Fetch** uzaktaki değişiklikleri indirir ama birleştirmez. **Pull** ikisini birden yapar: indirir ve birleştirir.
- **Ne işe yarar / neden var:** Senkronizasyonun üç temel hareketi. Fetch'in ayrı olması, "önce ne değişmiş bir bakayım" imkânı verir.
- **Nerede karşına çıkar:** Her gün.
- **Örnek kullanım:** "Push'lamadan önce pull al, yoksa reddedilir."
- **Karıştırılanlar:** **Force push tehlikelidir:** uzaktaki geçmişi zorla üzerine yazar ve başkalarının işini silebilir. Paylaşılan dallarda kullanılmaz; ana dalda ise genelde tamamen yasaklanır (branch protection, 15.5).
- **İlgili terimler:** Rebase (15.3), Remote
