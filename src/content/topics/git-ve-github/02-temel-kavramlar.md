---
title: "Temel kavramlar"
sectionNumber: "15.2"
category: "git-ve-github"
order: 2
cardCount: 5
sourceFile: "15-git-ve-github.md"
origin: "material"
flags: []
---
### Repository

- **Terim (İngilizce):** Repository — repo
- **Türkçesi:** Depo
- **Tanım:** Bir projenin tüm dosyalarını ve değişiklik geçmişini içeren klasör.
- **Ne işe yarar / neden var:** Projenin sınırını tanımlar. Bir depo genelde bir proje demektir — ama monorepo yaklaşımında (15.10) birden fazla proje aynı depoda yaşayabilir.
- **Nerede karşına çıkar:** Her gün. "Repoya baktın mı?" cümlesi standart.
- **Örnek kullanım:** "Tasarım dosyalarını da repoya koyalım mı, yoksa ayrı mı dursun?"
- **İlgili terimler:** Clone (15.4), Monorepo (15.10)

### Commit

- **Terim (İngilizce):** Commit
- **Türkçesi:** İşleme / kayıt
- **Tanım:** Belirli bir andaki değişikliklerin, bir açıklamayla birlikte geçmişe kaydedilmesi.
- **Ne işe yarar / neden var:** Geçmişin birimi. Her commit'in benzersiz bir kimliği, bir yazarı, bir tarihi ve bir mesajı vardır. **İyi bir commit, tek bir mantıklı değişikliği içerir** — "her şeyi düzelttim" diyen dev bir commit, sonradan geri almayı imkânsızlaştırır.
- **Nerede karşına çıkar:** Her gün.
- **Örnek kullanım:** "Bu hatayı hangi commit getirdi bulalım; sonra sadece onu geri alırız."
- **İlgili terimler:** Staging area, Commit convention (15.8), Revert (15.6)

### Working directory / Staging area

- **Terim (İngilizce):** Working directory, staging area (index)
- **Türkçesi:** Çalışma dizini, hazırlık alanı
- **Tanım:** **Working directory** üzerinde çalıştığın dosyalar. **Staging area** ise bir sonraki commit'e girecek değişikliklerin seçilip bekletildiği ara alan.
- **Ne işe yarar / neden var:** Ara alan, **hangi değişikliklerin birlikte kaydedileceğini seçmeyi** sağlar. Aynı anda iki farklı iş yaptıysan, ikisini ayrı commit'lere bölebilirsin.
- **Nerede karşına çıkar:** Günlük Git kullanımında.
- **Örnek kullanım:** "Sadece stil değişikliklerini stage'leyip ayrı commit atalım."
- **İlgili terimler:** Commit, Diff

### HEAD

- **Terim (İngilizce):** HEAD
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Şu anda nerede durduğunu gösteren işaretçi — genelde bulunduğun dalın son commit'i.
- **Ne işe yarar / neden var:** Git komutlarının çoğu buna göre çalışır. "HEAD'den bir önceki commit" gibi ifadelerde geçer.
- **Nerede karşına çıkar:** Git konuşmalarında ve hata mesajlarında.
- **Örnek kullanım:** "Detached HEAD durumundasın; bir dalda değil, doğrudan bir commit'in üstündesin."
- **İlgili terimler:** Branch (15.3), Commit

### Diff

- **Terim (İngilizce):** Diff
- **Türkçesi:** Fark
- **Tanım:** İki sürüm arasındaki satır bazında değişiklikler.
- **Ne işe yarar / neden var:** **Senin için en işe yarayan Git kavramı bu.** Bir pull request'i (15.5) incelemek, aslında diff'e bakmaktır: hangi satırlar eklendi (yeşil), hangileri silindi (kırmızı). Bir tasarım değişikliğinin uygulanıp uygulanmadığını buradan görebilirsin.
- **Nerede karşına çıkar:** Her kod incelemesinde ve GitHub arayüzünde.
- **Örnek kullanım:** "Diff'e baktım; spacing değerleri token'dan değil, elle yazılmış."
- **İlgili terimler:** Pull request (15.5), Code review (15.5)
