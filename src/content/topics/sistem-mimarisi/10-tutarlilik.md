---
title: "Tutarlılık"
sectionNumber: "14.10"
category: "sistem-mimarisi"
order: 10
cardCount: 2
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: ["emin-degil"]
---
### Consistency / Eventual consistency

- **Terim (İngilizce):** Strong consistency, eventual consistency
- **Türkçesi:** Güçlü tutarlılık, nihai tutarlılık
- **Tanım:** **Güçlü tutarlılık**: bir yazma işleminden sonra herkes anında yeni değeri görür. **Nihai tutarlılık**: herkes eninde sonunda yeni değeri görür ama kısa bir süre eski değeri görebilir.
- **Ne işe yarar / neden var:** **Bu ayrımın doğrudan bir arayüz sonucu vardır.** Nihai tutarlı bir sistemde kullanıcı bir şeyi kaydeder, sayfayı yeniler ve eski hâli görür — sistem bozuk değildir ama kullanıcı öyle sanır. Tasarım çözümü: kullanıcının kendi değişikliğini anında göstermek (optimistic UI, 7.9) ve "güncelleniyor" durumunu belirtmek.
- **Nerede karşına çıkar:** Dağıtık sistemlerde, önbellekli yapılarda (10.11), çoğaltılmış veritabanlarında.
- **Örnek kullanım:** "Beğeni sayısı nihai tutarlı; kullanıcı kendi beğenisini anında görsün, toplam sayı biraz gecikebilir."
- **İlgili terimler:** Optimistic UI (7.9), Cache invalidation (10.11), CAP

### CAP teoremi

- **Terim (İngilizce):** CAP theorem — Consistency, Availability, Partition tolerance
- **Türkçesi:** CAP teoremi
- **Tanım:** Dağıtık bir sistemde, ağ bölünmesi yaşandığında tutarlılık ile erişilebilirlik arasında seçim yapmak zorunda kalınacağını söyleyen ilke.
- **Ne işe yarar / neden var:** Kavramsal olarak bilmen yeterli. Pratik anlamı: **ağ koptuğunda ya yanlış olabilecek bir cevap verirsin ya hiç cevap vermezsin.** Bir banka birinciyi seçemez; bir sosyal medya akışı seçebilir.
- **Nerede karşına çıkar:** Dağıtık sistem tartışmalarında. **Seviye 3** terim.
- **Örnek kullanım:** "Bu veri için tutarlılık kritik; erişilebilirlikten ödün verip hata döneriz."
- **Karıştırılanlar:** Sık yanlış anlaşılır — "üçünden ikisini seç" biçiminde özetlenir ama teoremin söylediği daha dar: seçim yalnızca **bölünme anında** ortaya çıkar. `[EMİN DEĞİLİM]` Teoremin kesin formülasyonu akademik bir tartışma konusudur; günlük kullanımda kaba bir çerçeve olarak geçer.
- **İlgili terimler:** Consistency, Availability (14.9)
