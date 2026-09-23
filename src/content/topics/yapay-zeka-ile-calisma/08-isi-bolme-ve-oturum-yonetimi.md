---
title: "İşi bölme ve oturum yönetimi"
sectionNumber: "19.8"
category: "yapay-zeka-ile-calisma"
order: 8
cardCount: 2
sourceFile: "19-yapay-zeka-ile-profesyonel-calisma.md"
origin: "material"
flags: []
---
### Görev boyutu

Büyük ve belirsiz bir talep, sapma (19.1) için en verimli zemindir. Yaygın tavsiye, işi **spec → plan → görevler → uygulama** biçiminde bölmek ve her aşamada bir insan kontrol noktası bırakmak.

Pratikte senin için bu şu demek:

1. **Önce tanım.** Ne yapılacak, kısıtlar ne, kabul kriteri ne — kod yok.
2. **Sonra plan.** Hangi dosyalar, hangi sırayla, hangi kararlar. Onayla.
3. **Sonra küçük parçalar.** Tek seferde bir bileşen veya bir bölüm.
4. **Her parçadan sonra kontrol.** Çıktıyı gör, sonra devam et.

Bu, "tek promptla tüm siteyi yap" yaklaşımından yavaş görünür ama **toplam süre genelde daha kısadır**, çünkü geri dönüş turları azalır.

### Oturum hijyeni

- **Yeni iş, yeni oturum.** Bağlam penceresi (19.1) tükenen bir kaynaktır; alakasız geçmiş, alakalı bağlamı seyreltir.
- **Uzayan oturumu özetleyip yenile.** "Şu ana kadar şunlara karar verdik" özetiyle temiz bir oturum açmak, dolmuş bir pencerede devam etmekten iyidir.
- **Kısa ve odaklı oturum, uzun ve dağınık oturumdan iyi sonuç verir.** Bu, kaynaklarda tekrar eden bir gözlem.
- **Kapsamı daralt.** "Yalnızca şu dosyaya dokun" cümlesi, beklenmedik değişikliklerin önüne geçer.
