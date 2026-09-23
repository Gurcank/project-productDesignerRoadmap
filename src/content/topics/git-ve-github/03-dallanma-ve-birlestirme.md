---
title: "Dallanma ve birleştirme"
sectionNumber: "15.3"
category: "git-ve-github"
order: 3
cardCount: 5
sourceFile: "15-git-ve-github.md"
origin: "material"
flags: []
---
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
