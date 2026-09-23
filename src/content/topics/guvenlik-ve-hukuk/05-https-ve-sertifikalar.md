---
title: "HTTPS ve sertifikalar"
sectionNumber: "13.5"
category: "guvenlik-ve-hukuk"
order: 5
cardCount: 2
sourceFile: "13-guvenlik-ve-hukuki-yukumluluk.md"
origin: "material"
flags: []
---
### TLS / SSL sertifikası

- **Terim (İngilizce):** TLS (Transport Layer Security), SSL certificate
- **Türkçesi:** Güvenli aktarım katmanı, güvenlik sertifikası
- **Tanım:** HTTPS'in (1.3) altındaki şifreleme teknolojisi ve sunucunun kimliğini kanıtlayan belge.
- **Ne işe yarar / neden var:** İki şey sağlar: trafiğin yolda okunamaması ve karşı tarafın gerçekten iddia ettiği site olması. Modern hosting platformları (16.6) sertifikayı otomatik alır ve yeniler.
- **Nerede karşına çıkar:** Yayın sürecinde ve alan adı yapılandırmasında (16.7).
- **Örnek kullanım:** "Sertifika otomatik yenileniyor mu? Süresi dolarsa tarayıcı büyük bir uyarı gösterir ve kullanıcı kaçar."
- **İlgili terimler:** HTTPS (1.3), DNS (16.7)

### Mixed content

- **Terim (İngilizce):** Mixed content
- **Türkçesi:** Karışık içerik
- **Tanım:** HTTPS bir sayfada, HTTP üzerinden yüklenen kaynaklar bulunması.
- **Ne işe yarar / neden var:** Sayfanın güvenlik garantisini bozar; tarayıcı bu kaynakları engelleyebilir veya uyarı gösterebilir. Sonuç: görseller yüklenmez, stiller bozulur.
- **Nerede karşına çıkar:** Eski siteler HTTPS'e geçirilirken.
- **Örnek kullanım:** "Bazı görseller yüklenmiyor; mixed content uyarısı var, adresleri HTTPS'e çevirelim."
- **İlgili terimler:** HTTPS (1.3), TLS
