---
title: "Form parçaları"
sectionNumber: "7.11"
category: "arayuz-anatomisi"
order: 11
cardCount: 10
sourceFile: "07b-site-anatomisi.md"
origin: "material"
flags: []
---
Formlar, dönüşümün ve erişilebilirliğin aynı anda kritik olduğu yerdir (6.7). Parçaların adlarını bilmek, hangi kontrolün hangi işe uygun olduğunu tartışabilmek demektir.

### Input

- **Terim (İngilizce):** Input, text field
- **Türkçesi:** Metin alanı
- **Tanım:** Tek satırlık metin girişi.
- **Ne işe yarar / neden var:** Formun temel yapı taşı. Türü (`email`, `tel`, `number`, `password`) belirtildiğinde mobilde doğru klavye açılır — bu, küçük ama gerçek bir kullanılabilirlik kazancıdır.
- **Nerede karşına çıkar:** Her formda.
- **Örnek kullanım:** "Telefon alanına doğru tip verelim; mobilde harf klavyesi açılıyor."
- **Karıştırılanlar:** Etiket, yardımcı metin ve placeholder ayrımı için 4.9'a bak — placeholder etiket yerine kullanılmaz.
- **İlgili terimler:** Textarea, Label (4.9), Autocomplete (6.7)

### Textarea

- **Terim (İngilizce):** Textarea
- **Türkçesi:** Çok satırlı metin alanı
- **Tanım:** Uzun metin girişi için çok satırlı alan.
- **Ne işe yarar / neden var:** Beklenen içeriğin uzunluğunu görsel olarak bildirir: küçük bir kutu kısa cevap, büyük bir kutu uzun cevap bekler. Karakter sınırı varsa sayaç gösterilmelidir.
- **Nerede karşına çıkar:** Mesaj, açıklama, yorum alanlarında.
- **Örnek kullanım:** "Textarea içeriğe göre büyüsün ve 500 karakter sınırını sayaçla gösterelim."
- **İlgili terimler:** Input, Helper text (4.9)

### Select vs Combobox

- **Terim (İngilizce):** Select (dropdown list), combobox
- **Türkçesi:** Seçim kutusu, aranabilir seçim kutusu
- **Tanım:** **Select** sabit bir listeden seçim yaptırır. **Combobox** aynı işi yapar ama kullanıcı yazarak arayabilir ve bazen kendi değerini ekleyebilir.
- **Ne işe yarar / neden var:** Kural pratik: **yaklaşık 7-10 seçeneğe kadar select, üstünde combobox.** 200 ülkelik bir listede kaydırmak yerine yazmak çok daha hızlıdır. Çok az seçenek varsa (2-4) radio daha iyidir çünkü hepsi görünür kalır.
- **Nerede karşına çıkar:** Her formda.
- **Örnek kullanım:** "Ülke seçimini combobox yapalım; select'te 200 öğe arasında kaydırıyorlar."
- **Karıştırılanlar:** *Select* (form alanı, değer seçer) ≠ *dropdown menu* (7.8, eylem listesi). Ayrıca özel yazılmış combobox'lar erişilebilirlik açısından risklidir; test edilmiş bir kütüphane tercih edilmelidir (9.5).
- **İlgili terimler:** Dropdown (7.8), Radio, Search

### Checkbox, Radio, Switch

- **Terim (İngilizce):** Checkbox, radio button, switch (toggle)
- **Türkçesi:** Onay kutusu, seçim düğmesi, anahtar
- **Tanım:** Üçü de seçim yaptırır ama farklı işler için:
  - **Checkbox** — birden fazlası seçilebilir, veya tek bir şeyin açık/kapalı olduğunu belirtir. Formun gönderilmesiyle etkili olur.
  - **Radio** — birbirini dışlayan seçeneklerden **tam olarak biri** seçilir.
  - **Switch** — bir ayarı **anında** açar veya kapatır; kaydet butonu gerektirmez.
- **Ne işe yarar / neden var:** Yanlış kontrol seçmek beklenti hatası üretir. Bir ayar ekranında checkbox kullanmak, kullanıcının kaydet butonu aramasına yol açar; formda switch kullanmak ise değişikliğin anında kaydedildiği izlenimini verir.
- **Nerede karşına çıkar:** Her formda ve ayar ekranında.
- **Örnek kullanım:** "Ayarlar sayfasında switch kullanalım — anında kaydediliyor. Kayıt formundaki 'şartları kabul ediyorum' checkbox kalsın."
- **Karıştırılanlar:** Switch'in hangi durumda olduğu **sadece renkle** anlaşılmamalıdır (6.6); konum ve tercihen bir etiket de gerekir. Radio grupları `fieldset`/`legend` ile gruplanmalıdır (6.7).
- **İlgili terimler:** Billing toggle (7.6), Form validation, Use of color (6.6)

### Slider

- **Terim (İngilizce):** Slider, range slider
- **Türkçesi:** Kaydırıcı
- **Tanım:** Bir aralıktan değer seçilen sürgü. Çift tutamaçlı olanı **range slider**'dır (fiyat aralığı gibi).
- **Ne işe yarar / neden var:** Kesin değerin önemli olmadığı, göreli ayarlarda iyi çalışır (ses, parlaklık). Kesin değer gerekiyorsa yanına bir sayı alanı da konmalıdır.
- **Nerede karşına çıkar:** Filtrelerde ve ayarlarda.
- **Örnek kullanım:** "Fiyat filtresine range slider koyalım ama yanına iki sayı alanı da ekleyelim."
- **Karıştırılanlar:** Sürükleme gerektirir; WCAG 2.2'nin **Dragging Movements** ölçütü (6.2) gereği ok tuşlarıyla veya butonlarla da ayarlanabilmelidir.
- **İlgili terimler:** Filter (7.10), Dragging Movements (6.2)

### Stepper

- **Terim (İngilizce):** Stepper (number input, quantity selector)
- **Türkçesi:** Artır/azalt kontrolü
- **Tanım:** Bir sayıyı artı/eksi butonlarıyla değiştiren kontrol.
- **Ne işe yarar / neden var:** Küçük sayısal ayarlarda (adet, kişi sayısı) hızlıdır. Butonlar dokunma hedefi boyutunu (6.6) karşılamalıdır — bu kontrolde en sık ihlal edilen kuraldır.
- **Nerede karşına çıkar:** Sepet, rezervasyon, sipariş ekranlarında.
- **Örnek kullanım:** "Adet stepper'ının butonları 24px'in altında; dolgu ekleyip 40×40 yapalım."
- **Karıştırılanlar:** *Stepper* (sayı kontrolü) ≠ *step indicator* (çok adımlı formdaki ilerleme göstergesi). Aynı kelime iki farklı şey için kullanılır; bağlamdan ayırt et.
- **İlgili terimler:** Target size (6.6), Multi-step form

### Date picker

- **Terim (İngilizce):** Date picker, date range picker, time picker
- **Türkçesi:** Tarih seçici
- **Tanım:** Takvim arayüzüyle tarih seçtiren bileşen.
- **Ne işe yarar / neden var:** Tarih formatı karmaşasını önler (GG/AA/YYYY mi AA/GG/YYYY mi). Ama takvim tek yol olmamalıdır: **elle yazma da mümkün olmalıdır** — bilinen bir tarihi yazmak, takvimde aylarca geri gitmekten çok hızlıdır.
- **Nerede karşına çıkar:** Rezervasyon, filtreleme, raporlama ekranlarında.
- **Örnek kullanım:** "Date picker'a yazarak giriş de ekleyelim; doğum tarihi için takvimde 30 yıl geri gitmek işkence."
- **Karıştırılanlar:** Erişilebilirlik açısından en zor bileşenlerden biridir; sıfırdan yazmak yerine test edilmiş bir kütüphane kullanmak neredeyse her zaman doğrudur.
- **İlgili terimler:** Booking widget (7.7), Input, Combobox

### File upload

- **Terim (İngilizce):** File upload, dropzone, file picker
- **Türkçesi:** Dosya yükleme
- **Tanım:** Dosya seçme veya sürükleyip bırakma bileşeni.
- **Ne işe yarar / neden var:** Tasarımda cevaplanması gereken sorular çoktur: hangi formatlar ve maksimum boyut kabul ediliyor (**önceden** yazılmalı, hata mesajında değil), yükleme ilerlemesi nasıl gösteriliyor, yüklenen dosya nasıl kaldırılıyor, birden fazla dosya destekleniyor mu.
- **Nerede karşına çıkar:** Profil, form ve içerik yükleme ekranlarında.
- **Örnek kullanım:** "Kabul edilen formatları ve 10MB sınırını alanın altına baştan yazalım."
- **Karıştırılanlar:** Sürükle-bırak tek yol olamaz; tıklayarak dosya seçme de olmalıdır (6.2, Dragging Movements).
- **İlgili terimler:** Progress indicator (7.9), Error message (4.9)

### Multi-step form

- **Terim (İngilizce):** Multi-step form, wizard, step indicator
- **Türkçesi:** Çok adımlı form, sihirbaz
- **Tanım:** Uzun bir formun adımlara bölünmesi ve ilerlemenin bir göstergeyle sunulması.
- **Ne işe yarar / neden var:** Bilişsel yükü azaltır (4.7) ve tamamlama oranını artırır: 20 alanlı tek bir sayfa korkutur, dört adımda beşerli alan yönetilebilir görünür. İlerleme göstergesi kaç adım kaldığını söyler.
- **Nerede karşına çıkar:** Kayıt, ödeme ve onboarding akışlarında.
- **Örnek kullanım:** "Kayıt formunu üç adıma bölelim ve üstte step indicator gösterelim."
- **Karıştırılanlar:** Girilen veri adımlar arasında **kaybolmamalıdır** ve geri dönülebilmelidir. Ayrıca aynı bilgi tekrar istenmemelidir (6.2, Redundant Entry). Adım değişiminde odak yönetimi gerekir (6.5).
- **İlgili terimler:** Progress indicator (7.9), Onboarding (7.12), Focus management (6.5)

### Form validation

- **Terim (İngilizce):** Form validation, client-side / server-side validation
- **Türkçesi:** Form doğrulama
- **Tanım:** Girilen verinin kurallara uygunluğunun kontrol edilmesi.
- **Ne işe yarar / neden var:** İkisi de gereklidir ve farklı işler görür: **client-side** hızlı geri bildirim için (deneyim), **server-side** güvenlik için (1.6). Client-side doğrulama atlanabileceği için ona güvenilemez.
- **Nerede karşına çıkar:** Her formda.
- **Örnek kullanım:** "Doğrulama hem client hem server tarafında olsun; client atlanabilir."
- **Karıştırılanlar:** Gönder butonunu doğrulama geçilene kadar **devre dışı bırakmak** yaygın ama tartışmalı bir kalıptır: kullanıcı neyin eksik olduğunu anlamaz. Daha iyi yaklaşım butonu aktif tutup, basıldığında eksikleri işaretlemek ve ilk hatalı alana odaklanmaktır.
- **İlgili terimler:** Inline validation (7.8), Input validation (13.7), Error message (4.9)
