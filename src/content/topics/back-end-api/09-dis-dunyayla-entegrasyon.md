---
title: "Dış dünyayla entegrasyon"
sectionNumber: "10.9"
category: "back-end-api"
order: 9
cardCount: 3
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
### Webhook

- **Terim (İngilizce):** Webhook
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir dış servisin, bir olay gerçekleştiğinde **senin** sunucunu çağırması.
- **Ne işe yarar / neden var:** Yönü terstir: normalde sen dış servise sorarsın; webhook'ta o sana haber verir. "Ödeme onaylandı", "e-posta açıldı", "kargo teslim edildi" bilgileri böyle gelir. Sürekli sorup durmaktan (polling) çok daha verimlidir.
- **Nerede karşına çıkar:** Ödeme, e-posta ve kargo entegrasyonlarında.
- **Örnek kullanım:** "Ödeme onayını webhook'la alalım; kullanıcı sayfayı kapatsa bile sipariş güncellensin."
- **Karıştırılanlar:** **Tasarım açısından kritik bir sonucu var:** webhook gecikmeli gelebilir. Kullanıcı ödemeyi tamamladıktan sonra sipariş durumu hemen güncellenmeyebilir. Bu ara durum ("işleniyor") tasarlanmalıdır — yoksa kullanıcı "param gitti ama sipariş yok" paniği yaşar.
- **İlgili terimler:** Polling (10.5), Loading state (7.9), Idempotency (14.11)

### Third-party integration / SDK

- **Terim (İngilizce):** Third-party integration, SDK (Software Development Kit)
- **Türkçesi:** Üçüncü parti entegrasyon, yazılım geliştirme kiti
- **Tanım:** Dış bir servisin özelliklerini kullanmak; SDK ise o servisin kendi sağladığı hazır kod paketidir.
- **Ne işe yarar / neden var:** Ödeme, harita, analiz ve e-posta gibi işleri sıfırdan yazmak yerine hazır servisle çözer. SDK entegrasyonu kolaylaştırır.
- **Nerede karşına çıkar:** Neredeyse her projede.
- **Örnek kullanım:** "Harita için SDK gömüyoruz ama 90KB ekliyor; lazy load edelim."
- **Karıştırılanlar:** Her üçüncü parti bir **bağımlılık ve risk**tir: paket boyutu (8.12), performans, gizlilik (13.10) ve o servisin çökmesi durumunda ne olacağı. Ayrıca ön yüze gömülen üçüncü parti kodlar kullanıcı verisine erişebilir.
- **İlgili terimler:** Vendor lock-in (9.12), Bundle size (8.12), KVKK (13.10)

### API key

- **Terim (İngilizce):** API key, secret key, publishable key
- **Türkçesi:** API anahtarı
- **Tanım:** Bir dış servise kimliğini kanıtlayan gizli dizi.
- **Ne işe yarar / neden var:** Servisin seni tanıması ve faturalandırması için. **Kritik ayrım:** bazı servisler iki tür anahtar verir — ön yüze gömülebilen "yayınlanabilir" anahtar ve yalnızca sunucuda kalması gereken "gizli" anahtar. İkincisini ön yüz koduna koymak ciddi bir güvenlik açığıdır ve otomatik tarayıcılar tarafından anında bulunur.
- **Nerede karşına çıkar:** Her entegrasyonda.
- **Örnek kullanım:** "Bu anahtar gizli; ön yüzde kullanamayız, isteği sunucudan geçirelim."
- **İlgili terimler:** Secret yönetimi (13.6), Environment variable (10.1)
