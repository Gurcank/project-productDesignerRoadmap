---
title: "Stateless / Stateful"
sectionNumber: "14.7"
category: "sistem-mimarisi"
order: 7
cardCount: 1
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: []
---
### Stateless

- **Terim (İngilizce):** Stateless, stateful
- **Türkçesi:** Durumsuz, durumlu
- **Tanım:** **Stateless** bir servis, istekler arasında kendi belleğinde bilgi tutmaz; her istek kendi içinde bütündür. **Stateful** olan tutar.
- **Ne işe yarar / neden var:** **Yatay ölçeklemenin ön koşuludur.** Kullanıcının oturum bilgisi tek bir sunucunun belleğinde durursa, ikinci bir sunucu eklendiğinde o kullanıcı oraya düştüğünde çıkış yapmış olur. Çözüm: durumu paylaşılan bir yere taşımak (Redis, veritabanı) veya jetonda taşımak (12.2).
- **Nerede karşına çıkar:** Ölçekleme ve oturum yönetimi tartışmalarında.
- **Örnek kullanım:** "Oturumları sunucu belleğinde tutuyoruz; ikinci kopya ekleyince kullanıcılar rastgele çıkış yapacak. Redis'e taşıyalım."
- **İlgili terimler:** Session (12.2), Horizontal scaling (14.6), Redis (11.3)
