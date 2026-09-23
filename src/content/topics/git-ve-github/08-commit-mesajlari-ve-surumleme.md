---
title: "Commit mesajları ve sürümleme"
sectionNumber: "15.8"
category: "git-ve-github"
order: 8
cardCount: 3
sourceFile: "15-git-ve-github.md"
origin: "material"
flags: []
---
### Commit convention

- **Terim (İngilizce):** Commit convention, Conventional Commits
- **Türkçesi:** Commit yazım sözleşmesi
- **Tanım:** Commit mesajlarının belirli bir kalıpta yazılması: `tür(kapsam): açıklama` — örneğin `fix(auth): şifre sıfırlama bağlantısı süresi düzeltildi`.
- **Ne işe yarar / neden var:** İki fayda: geçmiş okunabilir hâle gelir ve **otomatikleştirilebilir** — sürüm numarası ve değişiklik günlüğü mesajlardan üretilebilir. Yaygın türler: `feat` (yeni özellik), `fix` (hata düzeltme), `docs`, `refactor`, `test`, `chore`.
- **Nerede karşına çıkar:** Modern projelerin çoğunda.
- **Örnek kullanım:** "Conventional Commits kullanalım; changelog'u otomatik üretebiliriz."
- **Karıştırılanlar:** İyi bir commit mesajı **ne yapıldığını değil, neden yapıldığını** açıklamalıdır — ne yapıldığı zaten diff'te görünür. Bu, kod yorumları için de geçerli olan aynı ilkedir (17.8).
- **İlgili terimler:** Semantic versioning, Changelog

### Semantic versioning

- **Terim (İngilizce):** Semantic versioning — SemVer
- **Türkçesi:** Anlamsal sürümleme
- **Tanım:** Sürüm numaralarının `MAJOR.MINOR.PATCH` biçiminde ve anlamlı bir kurala göre artırılması.
- **Ne işe yarar / neden var:** Numaraya bakarak güncellemenin riskini anlamayı sağlar:
  - **PATCH** (2.1.0 → 2.1.1) — hata düzeltmesi, geriye uyumlu. Güvenle güncellenir.
  - **MINOR** (2.1.0 → 2.2.0) — yeni özellik, geriye uyumlu. Mevcut kullanım kırılmaz.
  - **MAJOR** (2.1.0 → 3.0.0) — **kırıcı değişiklik.** Güncellemeden önce dokümantasyona bakılmalı.
- **Nerede karşına çıkar:** Her bağımlılık güncellemesinde (8.11) ve API sürümlemesinde (10.4).
- **Örnek kullanım:** "Major sürüm çıkmış; kırıcı değişiklik var, güncellemeden önce sürüm notlarını okuyalım."
- **Karıştırılanlar:** Sıfırla başlayan sürümler (`0.x.y`) SemVer'de "kararlı değil" anlamına gelir; o aralıkta minor sürümler bile kırıcı olabilir. Ayrıca kütüphanelerin hepsi bu kurala uymaz — uyduğunu varsaymak risklidir.
- **İlgili terimler:** Breaking change (10.4), Dependency (8.11), Deprecation (2.11)

### Changelog

- **Terim (İngilizce):** Changelog, release notes
- **Türkçesi:** Değişiklik günlüğü, sürüm notları
- **Tanım:** Her sürümde neyin değiştiğini insan diliyle anlatan liste.
- **Ne işe yarar / neden var:** Kullanıcıya ve ekibe "ne değişti?" sorusunu cevaplar. **Bu aslında bir içerik tasarımı işidir** (4.9): commit mesajlarını olduğu gibi dökmek değil, kullanıcının anlayacağı dilde yazmak gerekir. Ürün içi changelog (7.12) bir özelliğin keşfedilmesini de sağlar.
- **Nerede karşına çıkar:** Sürüm duyurularında ve ürün içi "Yenilikler" bölümünde.
- **Örnek kullanım:** "Changelog'u kullanıcı diliyle yazalım; `refactor(core)` satırlarını kimse anlamıyor."
- **İlgili terimler:** Semantic versioning, UX writing (4.9), Release (15.6)
