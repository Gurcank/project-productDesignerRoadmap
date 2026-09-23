---
title: "Güvenliği düşünme biçimi"
sectionNumber: "13.1"
category: "guvenlik-ve-hukuk"
order: 1
cardCount: 2
sourceFile: "13-guvenlik-ve-hukuki-yukumluluk.md"
origin: "material"
flags: []
---
### Threat model

- **Terim (İngilizce):** Threat model, threat modeling
- **Türkçesi:** Tehdit modeli
- **Tanım:** "Kim, neden ve nasıl bize saldırır?" sorusunu sistemli biçimde cevaplamak.
- **Ne işe yarar / neden var:** Güvenliği "her şeyi koru" gibi imkânsız bir hedeften, önceliklendirilebilir bir listeye çevirir. Bir blog ile bir ödeme sistemi aynı tehditlerle karşılaşmaz; korumaların da aynı olması gerekmez.
- **Nerede karşına çıkar:** Tasarım aşamasında yapılması gereken bir çalışmadır — sonradan yapılırsa mimari değiştirmek gerekir.
- **Örnek kullanım:** "Tehdit modelimizde en yüksek risk hesap ele geçirme; MFA'ya önce oradan başlayalım."
- **İlgili terimler:** Attack surface, Insecure design (13.2)

### Attack surface

- **Terim (İngilizce):** Attack surface
- **Türkçesi:** Saldırı yüzeyi
- **Tanım:** Bir sisteme dışarıdan dokunulabilecek tüm noktaların toplamı.
- **Ne işe yarar / neden var:** Her yeni özellik, her yeni form alanı, her yeni üçüncü parti entegrasyon (10.9) yüzeyi büyütür. **Tasarım karşılığı:** kaldırılan bir özellik, korunması gereken bir yüzeyin de kaldırılması demektir. Sadelik burada bir güvenlik faydası üretir.
- **Nerede karşına çıkar:** Güvenlik denetimlerinde ve mimari incelemelerde.
- **Örnek kullanım:** "Bu dosya yükleme özelliğini gerçekten istiyor muyuz? Saldırı yüzeyini belirgin biçimde büyütüyor."
- **İlgili terimler:** Threat model, Third-party (10.9)
