---
title: "UX writing ve içerik"
sectionNumber: "4.9"
category: "ux-ui-ilkeleri"
order: 9
cardCount: 5
sourceFile: "04-ui-ux-surec-ve-ilkeler.md"
origin: "material"
flags: []
---
Arayüzdeki kelimeler. Tasarımın en çok gözden kaçan ve en hızlı etki eden katmanı: bir buton etiketini değiştirmek, ekranı yeniden tasarlamaktan çok daha ucuzdur ve bazen aynı etkiyi yapar.

### UX writing / Microcopy

- **Terim (İngilizce):** UX writing, microcopy
- **Türkçesi:** Arayüz metni
- **Tanım:** Arayüzdeki küçük metin parçaları: buton etiketleri, hata mesajları, boş ekran metinleri, ipuçları, onay mesajları.
- **Ne işe yarar / neden var:** Kullanıcının ne yapacağını bu kelimeler söyler. "Gönder" ile "Rezervasyonu tamamla" aynı butondur ama farklı güven üretir. Belirsiz etiket, kullanıcıyı duraklatır.
- **Nerede karşına çıkar:** Her ekranda. Çoğu ekipte ayrı bir UX writer yoktur; iş tasarımcıya düşer.
- **Örnek kullanım:** "Buton 'Tamam' değil 'Aboneliği iptal et' desin; kullanıcı neyi onayladığını bilsin."
- **Karıştırılanlar:** *UX writing* ≠ *copywriting*. Copywriting ikna eder ve satar; UX writing yönlendirir ve netleştirir. İkisi farklı beceridir.
- **İlgili terimler:** Content design, Error message, Tone of voice

### Content design

- **Terim (İngilizce):** Content design
- **Türkçesi:** İçerik tasarımı
- **Tanım:** Kullanıcının ihtiyaç duyduğu bilginin ne olduğuna, nasıl yapılandırılacağına ve nerede sunulacağına karar verme disiplini.
- **Ne işe yarar / neden var:** UX writing kelimeleri yazar; content design **hangi bilginin gerektiğine** karar verir ve bazen cevabı "bu ekran hiç olmasın" olur.
- **Nerede karşına çıkar:** Büyük kurumlarda ayrı bir rol, küçük ekiplerde tasarımcının işi.
- **Örnek kullanım:** "Content design açısından bu SSS bölümü gereksiz; sorular akışın içinde cevaplanmalı."
- **İlgili terimler:** UX writing, IA (4.3)

### Tone of voice

- **Terim (İngilizce):** Tone of voice
- **Türkçesi:** Ses tonu
- **Tanım:** Ürünün kullanıcıyla konuşurken kullandığı üslup.
- **Ne işe yarar / neden var:** Tutarlılık güven üretir. Ayrıca ton **duruma göre** değişmelidir: hata anında esprili olmak sinir bozar, kutlama anında kuru olmak soğuk durur. İyi bir ton rehberi bu bağlam farkını tanımlar.
- **Nerede karşına çıkar:** Marka rehberlerinde ve tasarım sistemlerinde.
- **Örnek kullanım:** "Ödeme başarısız ekranında şaka yapmayalım; ton rehberimiz hata durumunda sade ve yardımcı diyor."
- **İlgili terimler:** UX writing, Design system (5.1)

### Label / Helper text / Placeholder

- **Terim (İngilizce):** Label, helper text, placeholder
- **Türkçesi:** Etiket, yardımcı metin, yer tutucu
- **Tanım:** Label = alanın kalıcı adı. Helper text = alanın altındaki açıklama. Placeholder = alan boşken içinde görünen soluk metin.
- **Ne işe yarar / neden var:** Üçü farklı işlere yarar ve karıştırılırsa sorun çıkar. **Placeholder label yerine kullanılamaz:** kullanıcı yazmaya başlayınca kaybolur, o alanın ne olduğu unutulur, kontrastı düşük olduğu için okunabilirliği zayıftır ve ekran okuyucularda güvenilir biçimde okunmaz.
- **Nerede karşına çıkar:** Her form tasarımında. En sık yapılan form hatası budur.
- **Örnek kullanım:** "Placeholder'ı label'a çevirelim; kullanıcı yazarken alanın ne olduğunu göremiyor."
- **İlgili terimler:** Form parçaları (7.11), Form erişilebilirliği (6.7)

### Error message

- **Terim (İngilizce):** Error message
- **Türkçesi:** Hata mesajı
- **Tanım:** Bir şey ters gittiğinde kullanıcıya gösterilen metin.
- **Ne işe yarar / neden var:** Üç şeyi yapmalı: ne olduğunu söyle, sebebini açıkla, çözümü göster. Ayrıca kullanıcıyı suçlamamalı ("hatalı giriş yaptınız" yerine "bu e-posta adresi kayıtlı görünmüyor") ve teknik kod göstermemeli.
- **Nerede karşına çıkar:** Form doğrulamalarında, ödeme akışlarında, bağlantı hatalarında.
- **Örnek kullanım:** "'Error 422' yerine 'Şifre en az 8 karakter olmalı' yazalım ve kuralı alanın altında baştan gösterelim."
- **Karıştırılanlar:** Güvenlik gerektiren yerlerde mesaj bilinçli olarak belirsiz tutulur: giriş ekranında "e-posta bulunamadı" demek, saldırgana hangi hesapların var olduğunu söyler (Bölüm 12.11).
- **İlgili terimler:** Error state (7.9), Error path (4.4), Inline validation (7.8)
