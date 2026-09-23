---
title: "State yönetimi (client state)"
sectionNumber: "9.7"
category: "kutuphaneler"
order: 4
cardCount: 3
sourceFile: "09-framework-ve-kutuphane-haritasi.md"
origin: "material"
flags: []
---
Uygulamanın kendi verisini nerede tuttuğu. **Önemli bir çerçeve:** state ikiye ayrılır — sunucudan gelen veri (server state, 9.8) ve arayüzün kendi verisi (client state). İkisi farklı araçlar ister ve karıştırmak yaygın bir hatadır.

### Local state / Context

- **Terim (İngilizce):** Local state, React Context
- **Türkçesi:** Yerel durum, bağlam
- **Tanım:** Local state bileşenin kendi içinde tuttuğu veridir (8.7). Context, bir veriyi ağacın tamamına prop drilling (8.7) olmadan yaymanın React'e gömülü yoludur.
- **Ne işe yarar / neden var:** **Çoğu proje için bunlar yeterlidir.** Bir state yönetimi kütüphanesi eklemeden önce sorulacak soru: bu veri gerçekten global mi, yoksa iki bileşen arasında mı paylaşılıyor?
- **Nerede karşına çıkar:** Her React projesinde.
- **Örnek kullanım:** "Tema bilgisi için context yeter; ayrı bir kütüphaneye gerek yok."
- **Karıştırılanlar:** Context sık değişen veriler için verimsizdir; her değişimde tüketen tüm bileşenler yeniden çizilir (8.8).
- **İlgili terimler:** Prop drilling (8.7), Zustand

### Zustand / Jotai

- **Terim (İngilizce):** Zustand, Jotai
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Hafif, az yapılandırma gerektiren state yönetimi kütüphaneleri.
- **Ne işe yarar / neden var:** Redux'un kalıp kodunu istemeyen ama context'ten fazlasına ihtiyaç duyan projeler için. Zustand tek bir merkezi depo mantığıyla, Jotai küçük bağımsız parçalar (atom) mantığıyla çalışır.
- **Nerede karşına çıkar:** Modern React projelerinde yaygın.
- **Örnek kullanım:** "Sepet durumu için Zustand kullanalım; birkaç satırla kurulur."
- **İlgili terimler:** Redux Toolkit, Context

### Redux Toolkit

- **Terim (İngilizce):** Redux, Redux Toolkit (RTK)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** En eski ve en yaygın state yönetimi kütüphanesi; Redux Toolkit onun resmî ve sadeleştirilmiş kullanım biçimi.
- **Ne işe yarar / neden var:** Karmaşık ve çok kişili projelerde katı bir yapı dayatır: veri nasıl değişir, kim değiştirir, ne zaman değişir — hepsi izlenebilir. Geliştirici araçları (zaman yolculuğu ile hata ayıklama) güçlüdür.
- **Nerede karşına çıkar:** Büyük ve eski React projelerinde çok yaygın.
- **Örnek kullanım:** "Proje zaten Redux kullanıyor; yeni bir kütüphane eklemeyelim."
- **Ne zaman kullanılmaz:** Küçük projeler için ağırdır. Ayrıca sunucudan gelen veriyi Redux'ta tutmak, TanStack Query gibi araçların ortaya çıkmasıyla büyük ölçüde gereksizleşti (9.8).
- **İlgili terimler:** Zustand, TanStack Query (9.8)
