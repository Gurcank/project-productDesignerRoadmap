---
title: "Yayın türleri"
sectionNumber: "2.11"
category: "urun-gelistirme"
order: 11
cardCount: 6
sourceFile: "02-urun-gelistirme-yasam-dongusu.md"
origin: "material"
flags: []
---
Bir ürünün kullanıcıya açılma biçimleri. Hepsi aynı anda herkese açmanın riskini azaltmanın farklı yollarıdır.

### Alpha

- **Terim (İngilizce):** Alpha
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Ürünün, genelde şirket içinde veya çok küçük bir gruba açılan ilk, eksik ve kararsız sürümü.
- **Ne işe yarar / neden var:** Büyük hataları, gerçek kullanıcıya ulaşmadan yakalar. Bu aşamada hata beklenir, kusur normaldir.
- **Nerede karşına çıkar:** Büyük özellik lansmanlarının ilk adımı.
- **Örnek kullanım:** "Alpha'da sadece ekip kullanıyor; veri kaybı olabilir diye uyarı koyduk."
- **İlgili terimler:** Beta, Dogfooding

### Beta

- **Terim (İngilizce):** Beta (closed/private beta, open/public beta)
- **Türkçesi:** Deneme sürümü
- **Tanım:** Ürünün, sınırlı veya açık bir kullanıcı grubuna, henüz tam sürüm sayılmadan sunulması.
- **Ne işe yarar / neden var:** Gerçek kullanım koşullarında test sağlar. **Closed beta** davetle sınırlıdır ve odaklı geri bildirim verir; **open beta** herkese açıktır ve yük testi gibi çalışır. "Beta" etiketi ayrıca kullanıcının beklentisini ayarlar.
- **Nerede karşına çıkar:** Lansman planlarında. Waitlist ve davet kodu mekanizmaları genelde bu aşamada tasarlanır.
- **Örnek kullanım:** "Önce 200 kişilik closed beta, iki hafta sonra open beta."
- **İlgili terimler:** Alpha, GA, Waitlist (7.7), Feature flag (16.8)

### Soft launch

- **Terim (İngilizce):** Soft launch
- **Türkçesi:** Sessiz açılış
- **Tanım:** Ürünü duyuru yapmadan, sınırlı bir kitleye veya bölgeye açma.
- **Ne işe yarar / neden var:** Duyurunun getireceği yükü ve dikkati üstlenmeden gerçek koşulları test eder. Sorun çıkarsa itibar maliyeti düşük olur.
- **Nerede karşına çıkar:** Pazarlama planlarında. Genelde büyük duyurudan (hard launch) önce yapılır.
- **Örnek kullanım:** "Soft launch yapalım; iki hafta veriyi izleyip sorun yoksa duyuruya çıkarız."
- **İlgili terimler:** Beta, Canary deployment (16.8)

### GA

- **Terim (İngilizce):** GA — General Availability
- **Türkçesi:** Genel kullanıma açılma
- **Tanım:** Ürünün herkese açık, kararlı ve desteklenen tam sürümü.
- **Ne işe yarar / neden var:** Bir eşiktir: GA sonrası kararlılık, geri uyumluluk ve destek beklentisi başlar. Deneysel değişiklikler artık serbestçe yapılamaz.
- **Nerede karşına çıkar:** Sürüm duyurularında ve kurumsal satışta ("GA olmadan satın almıyoruz").
- **Örnek kullanım:** "GA'ya çıkınca API'de kırıcı değişiklik yapamayız; sözleşmemiz var."
- **İlgili terimler:** Beta, Semantic versioning (15.8), Deprecation

### Dogfooding

- **Terim (İngilizce):** Dogfooding — "eating your own dog food"
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Ekibin kendi ürününü günlük işinde gerçekten kullanması.
- **Ne işe yarar / neden var:** Sorunları en hızlı ortaya çıkaran yöntem. Bir akışı her gün kullanmak zorunda kalmak, o akıştaki rahatsızlığı raporlardan daha net gösterir.
- **Nerede karşına çıkar:** Ekip içi kullanım politikalarında.
- **Örnek kullanım:** "Dogfooding'e geçtik; iki gün içinde bildirim ayarlarının yerini değiştirdik."
- **Karıştırılanlar:** Ekip kullanıcıyı temsil etmez. Dogfooding gerçek kullanıcı araştırmasının yerini tutmaz; sadece bariz sorunları erken yakalar.
- **İlgili terimler:** Alpha, User research (2.4)

### Deprecation / Sunset

- **Terim (İngilizce):** Deprecation, Sunset, End of life (EOL)
- **Türkçesi:** Kullanımdan kaldırma
- **Tanım:** Bir özelliğin veya sürümün artık desteklenmeyeceğinin duyurulup, belirli bir tarihte kapatılması.
- **Ne işe yarar / neden var:** Ürünün büyümesi kadar küçülmesi de yönetilmelidir. Bir şeyi haber vermeden kapatmak güven kaybettirir; deprecation süreci kullanıcıya geçiş süresi tanır. Bu süreçte geçiş yolu, uyarı mesajı ve iletişim tasarımı senin işindir.
- **Nerede karşına çıkar:** API sürüm yönetiminde ve eski özelliklerin kaldırılmasında.
- **Örnek kullanım:** "Eski panel üç ay sonra kapanıyor; şimdiden banner koyup yeni panele yönlendirelim."
- **İlgili terimler:** GA, Semantic versioning (15.8), Migration (11.10)
