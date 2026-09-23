---
title: "Ortamlar: local, staging, production"
sectionNumber: "1.8"
category: "web-temelleri"
order: 8
cardCount: 4
sourceFile: "01-web-nasil-calisir.md"
origin: "material"
flags: []
---
Aynı kodun farklı yerlerde çalışan kopyaları. Bu ayrım olmasa her deneme canlı sitede yapılırdı. Detaylı yönetimi Bölüm 16.3'te; burada sadece kavram.

### Local (localhost)

- **Terim (İngilizce):** Local / localhost
- **Türkçesi:** Yerel ortam
- **Tanım:** Projenin geliştiricinin kendi bilgisayarında çalışan hâli.
- **Ne işe yarar / neden var:** Denemenin bedava ve risksiz olduğu yer. Sadece o bilgisayardan erişilir; internetten kimse göremez.
- **Nerede karşına çıkar:** "Bende çalışıyor" cümlesinin geçtiği her yer. `localhost:3000` gibi adresler bu ortamı gösterir.
- **Örnek kullanım:** "Local'de sorun yok ama deploy edince patlıyor — ortam değişkenlerinden biri eksik olabilir."
- **Karıştırılanlar:** Local'de çalışması, canlıda çalışacağı anlamına gelmez. Bu, yazılımın en eski şakalarından biri ve gerçek bir risk kaynağı.
- **İlgili terimler:** Development, Staging, Production

### Development environment

- **Terim (İngilizce):** Development environment (dev)
- **Türkçesi:** Geliştirme ortamı
- **Tanım:** Geliştirme sırasında kullanılan, hata ayıklamayı kolaylaştıracak şekilde ayarlanmış ortam.
- **Ne işe yarar / neden var:** Ayrıntılı hata mesajları, otomatik yenileme ve sıkıştırılmamış kod içerir. Bu yüzden canlıdan yavaştır — dev ortamındaki hız ölçümü gerçeği yansıtmaz.
- **Nerede karşına çıkar:** "Dev build" ile "production build" ayrımında.
- **Örnek kullanım:** "Dev modunda ölçme; production build al, öyle bak."
- **İlgili terimler:** Local, Production, Build (8.11)

### Staging environment

- **Terim (İngilizce):** Staging environment
- **Türkçesi:** Prova / hazırlık ortamı
- **Tanım:** Canlının birebir kopyası olan, ama gerçek kullanıcıya açık olmayan ortam.
- **Ne işe yarar / neden var:** Son kontrolün yapıldığı yer. Bir tasarım incelemesi veya müşteri onayı burada alınır; hata bulunursa gerçek kullanıcı etkilenmemiş olur.
- **Nerede karşına çıkar:** "Staging'e attım, bakabilir misin?" cümlesi tasarımcının en sık duyacağı cümlelerden biridir. Tasarım kalite kontrolünü burada yaparsın.
- **Örnek kullanım:** "Staging'de boşluklar Figma ile uyuşmuyor; canlıya çıkmadan düzeltelim."
- **Karıştırılanlar:** *Staging* ≠ *preview*. Preview genelde her değişiklik için otomatik üretilen geçici bir adrestir; staging kalıcı ve tek bir ortamdır.
- **İlgili terimler:** Production, Preview environment (16.3), QA (17.5)

### Production environment

- **Terim (İngilizce):** Production (prod), canlı ortam
- **Türkçesi:** Canlı ortam
- **Tanım:** Gerçek kullanıcıların kullandığı, gerçek verinin bulunduğu ortam.
- **Ne işe yarar / neden var:** Ürünün gerçekten yaşadığı yer. Buradaki her hata gerçek bir kullanıcıyı etkiler; bu yüzden buraya çıkış ayrı bir disiplinle yönetilir.
- **Nerede karşına çıkar:** "Prod'a çıktı", "prod'da bug var", "prod'a dokunma" — hepsi aynı ortamdan bahseder. Terimin tonu ciddidir; şaka yapılmaz.
- **Örnek kullanım:** "Cuma akşamı prod'a çıkmayalım; sorun çıkarsa hafta sonu kimse müdahale edemez."
- **İlgili terimler:** Staging, Deploy (16.1), Rollback (16.9), Hotfix (16.9)
