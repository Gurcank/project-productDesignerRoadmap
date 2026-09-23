---
title: "Dallanma stratejileri"
sectionNumber: "15.7"
category: "git-ve-github"
order: 7
cardCount: 3
sourceFile: "15-git-ve-github.md"
origin: "material"
flags: ["degisken"]
---
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
