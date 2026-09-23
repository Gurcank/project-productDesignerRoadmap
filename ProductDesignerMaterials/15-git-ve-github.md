# Bölüm 15 — Git ve GitHub

Git, kod yazmasan bile her gün karşına çıkacak. Sebep şu: **Git yalnızca kodun değil, işin de kaydıdır.** Bir özelliğin ne zaman girdiği, kimin neyi değiştirdiği, bir hatanın hangi değişiklikle geldiği — hepsi burada.

Senin açından üç somut fayda var:

1. **Pull request incelemesine katılabilmek.** Tasarımın uygulanmış hâlini incelemek, bir PR üzerinde yorum yapmak kod yazmayı gerektirmez.
2. **Değişikliği takip edebilmek.** "Bu ne zaman böyle oldu?" sorusunun cevabı Git geçmişindedir.
3. **Konuşmayı anlamak.** "Rebase ettim", "conflict çıktı", "main'e merge edildi" cümleleri her gün geçer.

Bu bölümdeki temel kavramlar **eskimeyen** kategoride — Git 20 yıldır aynı. Değişken olan kısım, hangi iş akışının moda olduğu (15.7) ve GitHub'ın ürün özellikleri (15.9, 15.11).

**Söz dizimi yok.** Komut adlarını yalnızca terimin kendisi oldukları için yazıyorum ("rebase ettim" diye konuşulur), nasıl kullanılacaklarını değil.

---

## 15.1 Version control neden var

### Version control

- **Terim (İngilizce):** Version control system — VCS
- **Türkçesi:** Sürüm kontrol sistemi
- **Tanım:** Dosyalardaki değişikliklerin zaman içinde kaydedilmesini, geri alınabilmesini ve birden fazla kişinin aynı anda çalışabilmesini sağlayan sistem.
- **Ne işe yarar / neden var:** Üç problemi birden çözer: **geri dönebilmek** (bir şey bozulduğunda eski hâle dönmek), **birlikte çalışabilmek** (iki kişinin aynı dosyayı ezmemesi) ve **neden sorusunu cevaplamak** (bu satır neden böyle yazılmış?).
- **Nerede karşına çıkar:** Her yazılım projesinde.
- **Örnek kullanım:** "Bu değişikliği geri alalım; geçmişte hangi commit'te girdiğine bakalım."
- **Karıştırılanlar:** *Git* bir sürüm kontrol sistemidir; *GitHub* ise Git depolarını barındıran bir platformdur. Git olmadan GitHub olmaz, ama GitHub olmadan Git gayet çalışır — GitLab, Bitbucket gibi alternatifleri de vardır.
- **İlgili terimler:** Git, Repository, Commit

### Git

- **Terim (İngilizce):** Git
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Dağıtık bir sürüm kontrol sistemi: her geliştiricinin bilgisayarında projenin tam geçmişiyle birlikte bir kopyası bulunur.
- **Ne işe yarar / neden var:** "Dağıtık" olması, internet olmadan da çalışabilmeyi ve merkezî sunucu çökse bile geçmişin kaybolmamasını sağlar.
- **Nerede karşına çıkar:** Fiilî standart; pratikte tek seçenek.
- **Örnek kullanım:** "Depo Git'te; GitHub'da barındırıyoruz."
- **İlgili terimler:** GitHub, Repository, Remote (15.4)

---

## 15.2 Temel kavramlar

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

---

## 15.3 Dallanma ve birleştirme

Git'in asıl gücü burada. Birden fazla kişinin birbirini engellemeden çalışabilmesini sağlayan mekanizma.

### Branch

- **Terim (İngilizce):** Branch
- **Türkçesi:** Dal
- **Tanım:** Ana koddan ayrılan, bağımsız olarak üzerinde çalışılabilen bir çizgi.
- **Ne işe yarar / neden var:** Yarım kalmış bir işin, çalışan koda karışmamasını sağlar. Herkes kendi dalında çalışır, işi bitince ana dala birleştirir. Ana dalın adı genelde `main`'dir.
- **Nerede karşına çıkar:** Her gün.
- **Örnek kullanım:** "Bu tasarım değişikliği için ayrı bir dal açalım; hazır olunca main'e alırız."
- **İlgili terimler:** Merge, Branching strategy (15.7)

### Merge

- **Terim (İngilizce):** Merge
- **Türkçesi:** Birleştirme
- **Tanım:** Bir daldaki değişikliklerin başka bir dala katılması.
- **Ne işe yarar / neden var:** Dalın amacına ulaşması. **Fast-forward merge**, ana dal hiç ilerlememişse yapılan basit birleştirmedir; aksi hâlde bir "birleştirme commit'i" oluşur.
- **Nerede karşına çıkar:** Her PR kapanışında.
- **Örnek kullanım:** "Dalı main'e merge ettim; deploy tetiklenecek."
- **İlgili terimler:** Rebase, Conflict, Squash merge (15.5)

### Rebase

- **Terim (İngilizce):** Rebase
- **Türkçesi:** Yeniden temellendirme
- **Tanım:** Bir daldaki commit'leri, sanki ana dalın güncel hâlinden başlamış gibi yeniden yazma.
- **Ne işe yarar / neden var:** Geçmişi düz ve okunabilir tutar: birleştirme commit'leri birikmez, tarih çizgisel görünür.
- **Nerede karşına çıkar:** "Rebase edip güncelledim" cümlesinde.
- **Örnek kullanım:** "Main'den rebase al, sonra PR'ı güncelle."
- **Karıştırılanlar:** **Rebase geçmişi yeniden yazar.** Başkalarının da kullandığı paylaşılan bir dalda rebase yapmak, herkesin geçmişini bozar. Altın kural: **paylaşılan dallarda rebase yapma, kendi dalında yap.** Merge vs rebase tartışması, ekiplerde bitmeyen bir tercih tartışmasıdır — ikisi de geçerlidir.
- **İlgili terimler:** Merge, Force push

### Conflict

- **Terim (İngilizce):** Merge conflict
- **Türkçesi:** Çakışma
- **Tanım:** İki kişinin aynı dosyanın aynı satırlarını farklı biçimde değiştirmesi ve Git'in hangisinin doğru olduğuna karar verememesi.
- **Ne işe yarar / neden var:** Git'in "bunu ben çözemem, sen karar ver" demesi. Kötü bir şey değildir, normaldir — ama **dallar ne kadar uzun yaşarsa çakışma o kadar büyür.** Kısa ömürlü dallar (15.7) bu yüzden önerilir.
- **Nerede karşına çıkar:** Uzun süren dallarda ve aynı dosyaya birden fazla kişinin dokunduğu durumlarda.
- **Örnek kullanım:** "Conflict çıktı; iki kişi de aynı bileşene dokunmuş, birlikte bakalım."
- **İlgili terimler:** Merge, Rebase, Trunk-based development (15.7)

### Cherry-pick

- **Terim (İngilizce):** Cherry-pick
- **Türkçesi:** Seçerek alma
- **Tanım:** Bir daldaki tek bir commit'i, dalın tamamını almadan başka bir dala kopyalama.
- **Ne işe yarar / neden var:** Acil düzeltmelerde işe yarar: bir dalda yapılan kritik bir düzeltmeyi, o dalın geri kalanı hazır değilken canlıya almak.
- **Nerede karşına çıkar:** Hotfix (16.9) durumlarında.
- **Örnek kullanım:** "Sadece o düzeltmeyi cherry-pick'leyip release dalına alalım."
- **İlgili terimler:** Hotfix (16.9), Merge

---

## 15.4 Uzak depolar

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

---

## 15.5 Pull request ve kod incelemesi

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

---

## 15.6 Geri alma ve işaretleme

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

---

## 15.7 Dallanma stratejileri

Ekibin dalları nasıl kullanacağına dair anlaşma. `[DEĞİŞKEN BİLGİ]` Bu alt bölümdeki tavsiyeler sektör eğilimidir ve zamanla değişir.

### Git Flow

- **Terim (İngilizce):** Git Flow
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** `main`, `develop`, `feature`, `release` ve `hotfix` olmak üzere beş dal türü kullanan, yapılandırılmış model.
- **Ne işe yarar / neden var:** Planlı sürümler, çoklu sürüm desteği ve katı denetim gereksinimleri olan ortamlarda düzen ve izlenebilirlik sağlar: sağlık, finans, kamu gibi düzenlemeye tabi sektörler.
- **Nerede karşına çıkar:** Kurumsal ve düzenlemeye tabi projelerde.
- **Örnek kullanım:** "Müşteri aynı anda iki sürümü destekliyor; Git Flow burada anlamlı."
- `[DEĞİŞKEN BİLGİ]` **Konumu değişti ve bunu bilmen gerekir:** Git Flow'u tanımlayan Vincent Driessen'in kendisi, orijinal yazısına sonradan bir not ekleyerek sürekli teslimat yapan ekiplere GitHub Flow gibi daha basit bir akış önerdiğini belirtti. Git Flow dokümantasyonunu yaygınlaştıran Atlassian ise onu artık "eski bir iş akışı" olarak niteliyor. **Yani Git Flow yanlış değil ama artık varsayılan değil** — dar bir bağlamda doğru kalan bir seçenek.
- **İlgili terimler:** GitHub Flow, Trunk-based development

### GitHub Flow

- **Terim (İngilizce):** GitHub Flow
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Tek uzun ömürlü dal (`main`) ve kısa ömürlü özellik dalları kullanan basit model. Dal aç → çalış → PR aç → incelet → merge et → deploy et.
- **Ne işe yarar / neden var:** Basit ve web projelerinin çoğuna uygun. Ön koşulu, **`main`'in her an yayınlanabilir durumda olmasıdır** — bu da otomatik testlerin ve CI kontrollerinin gerçekten çalışmasını gerektirir.
- **Nerede karşına çıkar:** Küçük ve orta ekiplerde, SaaS ve web ürünlerinde. **Senin projelerin için doğal seçim.**
- **Örnek kullanım:** "GitHub Flow yeterli; tek sürüm destekliyoruz ve günde birkaç kez deploy ediyoruz."
- **Ne zaman kullanılmaz:** Aynı anda birden fazla sürüm desteklenmesi gerekiyorsa yetmez.
- **İlgili terimler:** Git Flow, Trunk-based development, CI (16.1)

### Trunk-based development

- **Terim (İngilizce):** Trunk-based development — TBD
- **Türkçesi:** Ana dal odaklı geliştirme
- **Tanım:** Herkesin tek bir ana dala (trunk) **en az günde bir kez** katkı verdiği, dalların saatler veya bir gün ömürlü olduğu model.
- **Ne işe yarar / neden var:** Çakışmaları (15.3) küçük tutar ve erken yakalar — çünkü dallar uzun yaşamaz. Sürekli entegrasyonun (16.1) tam karşılığıdır. Yarım kalmış işler, **feature flag** (16.8) ile gizlenerek ana dala girebilir.
- **Nerede karşına çıkar:** Yüksek tempolu ekiplerde. Sektörde modern sürekli teslimat için en çok önerilen model olarak anılıyor.
- **Örnek kullanım:** "Trunk-based çalışalım ama feature flag altyapısı kurmadan olmaz."
- **Ne zaman kullanılmaz:** Güçlü otomatik test ve feature flag altyapısı yoksa risklidir: yarım iş doğrudan ana dala girer ve bir kişinin hatası herkesi durdurur.
- **İlgili terimler:** GitHub Flow, Feature flag (16.8), CI (16.1)

**Özet karar:** Tek sürüm destekleyen bir web projesinde **GitHub Flow** doğal başlangıçtır. Tempo artıp ekip büyüdükçe **trunk-based**'e evrilir. **Git Flow**, yalnızca çoklu sürüm veya katı denetim gereksinimi varsa tercih edilir.

---

## 15.8 Commit mesajları ve sürümleme

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

---

## 15.9 Issue ve proje yönetimi

### Issue

- **Terim (İngilizce):** Issue, label, milestone, assignee
- **Türkçesi:** İş kaydı, etiket, kilometre taşı
- **Tanım:** GitHub üzerinde bir iş, hata veya fikrin takip edildiği kayıt. **Label** kategorize eder, **milestone** gruplar (2.9), **assignee** sahibini belirler.
- **Ne işe yarar / neden var:** Ticket'ın (2.7) GitHub'daki karşılığı. Küçük ekiplerde ayrı bir proje yönetim aracına ihtiyaç bırakmayabilir: iş kaydı, tartışma ve kod aynı yerde durur.
- **Nerede karşına çıkar:** Açık kaynak projelerde ve küçük ekiplerde.
- **Örnek kullanım:** "Tasarım eksiklerini issue olarak açalım, `design` etiketiyle işaretleyelim."
- **İlgili terimler:** Ticket (2.7), Backlog (2.7), Milestone (2.9)

### Issue / PR template

- **Terim (İngilizce):** Issue template, pull request template
- **Türkçesi:** İş kaydı ve PR şablonu
- **Tanım:** Yeni bir issue veya PR açıldığında otomatik olarak gelen, doldurulması beklenen alanlar.
- **Ne işe yarar / neden var:** **Doğrudan senin işine yarayan bir araç.** Bir hata raporunun (17.5) hangi bilgileri içermesi gerektiğini şablona yazarsan, eksik raporlar azalır. Aynı şekilde bir PR şablonuna "tasarım kontrol edildi mi?", "responsive test edildi mi?", "erişilebilirlik kontrolü yapıldı mı?" maddelerini koymak, Definition of Done'ı (2.10) mekanikleştirir.
- **Nerede karşına çıkar:** Depo ayarlarında.
- **Örnek kullanım:** "PR şablonuna erişilebilirlik kontrol listesi ekleyelim; sona kalmasın."
- **İlgili terimler:** Definition of Done (2.10), Bug report (17.5)

### Project board

- **Terim (İngilizce):** Project board
- **Türkçesi:** Proje panosu
- **Tanım:** Issue ve PR'ların, sütunlar hâlinde takip edildiği pano (7.12, 3.4).
- **Ne işe yarar / neden var:** Kanban panosunun (3.4) GitHub'daki hâli. Avantajı, kod ile iş takibinin aynı yerde olması.
- **Nerede karşına çıkar:** Küçük ve orta ekiplerde.
- **Örnek kullanım:** "Jira yerine GitHub Projects kullanalım; iki araç arasında gidip gelmeyelim."
- **İlgili terimler:** Kanban (3.4), Backlog (2.7)

---

## 15.10 Depo hijyeni

### .gitignore

- **Terim (İngilizce):** `.gitignore`
- **Türkçesi:** Yok sayma dosyası
- **Tanım:** Git'in takip etmeyeceği dosya ve klasörleri listeleyen dosya.
- **Ne işe yarar / neden var:** İki iş görür: gereksiz dosyaları (bağımlılık klasörleri, derleme çıktıları, işletim sistemi dosyaları) depodan uzak tutar ve **sırların depoya girmesini engeller** (13.6).
- **Nerede karşına çıkar:** Her projede.
- **Örnek kullanım:** "`.env` `.gitignore`'da mı? Yoksa API anahtarları depoya girer."
- **Karıştırılanlar:** `.gitignore` yalnızca **henüz takip edilmeyen** dosyalar için çalışır. Bir dosya bir kez commit'lendiyse, sonradan `.gitignore`'a eklemek onu geçmişten çıkarmaz (13.6).
- **İlgili terimler:** Secret (13.6), Environment variable (10.1)

### Git LFS / Submodule

- **Terim (İngilizce):** Git LFS (Large File Storage), submodule
- **Türkçesi:** Büyük dosya depolama, alt modül
- **Tanım:** **LFS**, büyük ikili dosyaları (video, yüksek çözünürlüklü görsel, tasarım dosyaları) Git'in dışında saklayıp depoda yalnızca bir işaretçi tutmak. **Submodule**, bir deponun içine başka bir depoyu gömmek.
- **Ne işe yarar / neden var:** LFS seni doğrudan ilgilendirebilir: **büyük tasarım varlıklarını (5.7) doğrudan depoya koymak, deponun boyutunu kalıcı olarak şişirir** — çünkü Git her sürümü saklar. Bir kez girdiyse çıkarmak zordur.
- **Nerede karşına çıkar:** Medya ağırlıklı projelerde.
- **Örnek kullanım:** "Video dosyalarını doğrudan repoya koymayalım; LFS veya ayrı bir depolama kullanalım."
- **Karıştırılanlar:** Submodule güçlüdür ama yönetimi zordur; çoğu ekip ondan kaçınır. **Seviye 3.**
- **İlgili terimler:** Asset (5.7), Repository (15.2)

### Monorepo

- **Terim (İngilizce):** Monorepo, workspace, Turborepo, Nx
- **Türkçesi:** Tek depo
- **Tanım:** Birden fazla projenin (web sitesi, uygulama, tasarım sistemi paketi) tek bir depoda yaşaması.
- **Ne işe yarar / neden var:** **Tasarım sistemi olan ekipler için doğrudan anlamlıdır:** bileşen kütüphanesi (5.1) ile onu kullanan uygulamalar aynı depodaysa, bir bileşendeki değişikliğin hangi uygulamaları etkilediği tek PR'da görülür ve birlikte test edilir. Ayrı depolarda bu senkron çok daha zordur.
- **Nerede karşına çıkar:** Tasarım sistemi ve çok ürünlü projelerde.
- **Örnek kullanım:** "Tasarım sistemini monorepo'ya alalım; bileşen değişince tüketen uygulamaları da aynı PR'da güncelleyelim."
- **Ne zaman kullanılmaz:** Küçük ve tek ürünlü projelerde gereksiz karmaşıklık üretir; araç zinciri ve derleme yapılandırması ağırlaşır.
- **İlgili terimler:** Design system (5.1), Component library (5.1), Repository

---

## 15.11 GitHub Actions

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

---

## 15.12 Kendini test et

**1.** Git ile GitHub arasındaki fark nedir?

**2.** Staging area ne işe yarar?

**3.** Diff senin için neden en işe yarayan Git kavramı?

**4.** Merge conflict kötü bir şey mi? Neden uzun ömürlü dallarda daha sık ve daha büyük olur?

**5.** Rebase'in altın kuralı nedir ve neden?

**6.** Force push neden tehlikeli? Ana dalda nasıl engellenir?

**7.** Fork ne zaman kullanılır?

**8.** PR boyutu neden önemli? Yaygın başparmak kuralı nedir?

**9.** Branch protection neyi mekanikleştirir?

**10.** Merge queue hangi problemi çözer?

**11.** Canlıda bir şey bozulduğunda revert mi, "fix forward" mı? Neden?

**12.** Git blame senin için nasıl faydalı olabilir?

**13.** Git Flow'un sektördeki konumu nasıl değişti? Kim ne dedi?

**14.** GitHub Flow'un ön koşulu nedir?

**15.** Trunk-based development'ın ön koşulu nedir? Yarım kalmış iş ana dala nasıl girer?

**16.** İyi bir commit mesajı neyi açıklamalı?

**17.** SemVer'de major, minor ve patch farkı nedir? `0.x.y` sürümleri ne anlama gelir?

**18.** Changelog neden bir içerik tasarımı işidir?

**19.** PR şablonu tasarımcı için nasıl bir araç olabilir?

**20.** `.gitignore` bir dosyayı geçmişten çıkarır mı?

**21.** Büyük tasarım varlıklarını doğrudan depoya koymanın sakıncası nedir?

**22.** Monorepo tasarım sistemi olan bir ekip için neden anlamlı?

---

### Cevaplar

**1.** **Git** bir sürüm kontrol sistemidir (yazılımın kendisi). **GitHub** Git depolarını barındıran bir platformdur. Git olmadan GitHub olmaz, ama GitHub olmadan Git çalışır — GitLab, Bitbucket alternatifleridir.

**2.** **Hangi değişikliklerin birlikte kaydedileceğini seçmeyi** sağlar. Aynı anda iki farklı iş yaptıysan, ikisini ayrı commit'lere bölebilirsin.

**3.** Çünkü **bir pull request'i incelemek aslında diff'e bakmaktır**: hangi satırlar eklendi, hangileri silindi. Bir tasarım değişikliğinin uygulanıp uygulanmadığını, ölçülerin token'dan mı elle mi geldiğini buradan görebilirsin — kod yazmayı bilmeden.

**4.** Kötü değil, normaldir — Git'in "bunu ben çözemem, sen karar ver" demesidir. Uzun ömürlü dallarda daha büyük olur çünkü **iki taraf o süre boyunca birbirinden habersiz uzaklaşır**; ne kadar uzun ayrı kalırlarsa o kadar çok satır çakışır.

**5.** **Paylaşılan dallarda rebase yapma, kendi dalında yap.** Çünkü rebase geçmişi yeniden yazar; başkalarının kullandığı bir dalda yapılırsa herkesin geçmişi bozulur.

**6.** Uzaktaki geçmişi zorla üzerine yazar ve **başkalarının işini silebilir.** Ana dalda **branch protection** ile engellenir.

**7.** Yazma yetkin olmayan bir projeye katkı vermek istediğinde. Kendi hesabın altında bağımsız bir kopya oluşturur, orada değişiklik yapar, sonra asıl projeye PR açarsın. Açık kaynağın çalışma biçimi budur.

**8.** Çünkü **çok büyük PR'lar gerçekten incelenmez** — insanlar bakar ve onaylar. Yaygın başparmak kuralı, bir PR'ın birkaç yüz satırlık farkı geçmemesi; daha büyükse bölünmesi.

**9.** "Kimse test edilmemiş kodu ana dala itemesin" kuralını. Niyete ve disipline değil, **ayara** bağlar: PR zorunluluğu, minimum onay sayısı ve geçmesi zorunlu kontroller tanımlanır.

**10.** "Testler geçti ama ben incelerken başka bir PR araya girdi ve ana dal kırıldı" durumunu. PR'ları sıraya alıp değişiklikleri **birlikte** test ederek birleştirir.

**11.** **Revert.** Çünkü güvenlidir, paylaşılmış geçmişi bozmaz ve ne olduğunun kaydını bırakır. Baskı altında yazılan "ileri doğru düzeltme" genelde yeni hata üretir; önce revert edip sonra sakin kafayla bakmak doğrudur.

**12.** "Bu boşluk değeri neden 22px?" gibi sorularda: ilgili satırın hangi commit ve hangi PR ile geldiğini gösterir, sen de o PR'daki tartışmayı okuyup bağlamı öğrenirsin.

**13.** **Varsayılan olmaktan çıktı.** Git Flow'u tanımlayan Vincent Driessen, orijinal yazısına sonradan bir not ekleyerek sürekli teslimat yapan ekiplere GitHub Flow gibi daha basit bir akış önerdi. Git Flow dokümantasyonunu yaygınlaştıran Atlassian ise onu "eski bir iş akışı" olarak niteliyor. Yanlış değil ama dar bir bağlamda (çoklu sürüm, katı denetim) doğru kalan bir seçenek.

**14.** **`main`'in her an yayınlanabilir durumda olması.** Bu da otomatik testlerin ve CI kontrollerinin gerçekten çalışmasını gerektirir.

**15.** **Güçlü otomatik test ve feature flag altyapısı.** Yarım kalmış iş, **feature flag** ile gizlenerek ana dala girer: kod canlıda ama kullanıcıya kapalıdır.

**16.** **Ne yapıldığını değil, neden yapıldığını.** Ne yapıldığı zaten diff'te görünür. (Kod yorumları için de geçerli olan aynı ilke.)

**17.** **PATCH**: hata düzeltmesi, geriye uyumlu, güvenle güncellenir. **MINOR**: yeni özellik, geriye uyumlu, mevcut kullanım kırılmaz. **MAJOR**: kırıcı değişiklik, güncellemeden önce sürüm notları okunmalı. `0.x.y` sürümleri "kararlı değil" demektir — o aralıkta minor sürümler bile kırıcı olabilir.

**18.** Çünkü commit mesajlarını olduğu gibi dökmek işe yaramaz; `refactor(core)` satırını kullanıcı anlamaz. Changelog **kullanıcının anlayacağı dilde** yazılmalıdır ve ürün içinde gösterildiğinde bir özelliğin keşfedilmesini de sağlar.

**19.** **Definition of Done'ı mekanikleştirmenin aracıdır.** Şablona "tasarım kontrol edildi mi?", "responsive test edildi mi?", "erişilebilirlik kontrolü yapıldı mı?" maddelerini koyarsan, bu kontroller insan hafızasına değil sürece bağlanır.

**20.** **Hayır.** `.gitignore` yalnızca henüz takip edilmeyen dosyalar için çalışır. Bir dosya bir kez commit'lendiyse geçmişte kalır — bu yüzden depoya giren bir sır, silinse bile iptal edilip yenilenmelidir (13.6).

**21.** Git **her sürümü saklar**; büyük ikili dosyalar deponun boyutunu kalıcı olarak şişirir ve bir kez girdiyse çıkarmak zordur. Çözüm: Git LFS veya ayrı bir depolama servisi.

**22.** Çünkü bileşen kütüphanesi ile onu kullanan uygulamalar aynı depodaysa, **bir bileşendeki değişikliğin hangi uygulamaları etkilediği tek PR'da görülür ve birlikte test edilir.** Ayrı depolarda bu senkronu sağlamak çok daha zordur.

---

**Biten bölüm:** Bölüm 15 — Git ve GitHub
**Sıradaki bölüm:** Bölüm 16 — DevOps, yayın ve gözlemlenebilirlik
