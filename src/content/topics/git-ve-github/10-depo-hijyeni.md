---
title: "Depo hijyeni"
sectionNumber: "15.10"
category: "git-ve-github"
order: 10
cardCount: 3
sourceFile: "15-git-ve-github.md"
origin: "material"
flags: []
---
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
