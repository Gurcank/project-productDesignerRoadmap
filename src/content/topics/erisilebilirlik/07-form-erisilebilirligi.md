---
title: "Form erişilebilirliği"
sectionNumber: "6.7"
category: "erisilebilirlik"
order: 7
cardCount: 4
sourceFile: "06-erisilebilirlik-a11y.md"
origin: "material"
flags: []
---
Formlar, erişilebilirlik hatalarının en yoğunlaştığı yerdir — ve dönüşümün de en kritik olduğu yer. İkisi aynı yerde buluşur.

### Label association

- **Terim (İngilizce):** Label association
- **Türkçesi:** Etiket ilişkilendirmesi
- **Tanım:** Her form alanının, koda düzeyinde kendi etiketiyle bağlanmış olması.
- **Ne işe yarar / neden var:** Ekran okuyucu, alana odaklandığında etiketi okur — bağ kurulmamışsa "düzenleme alanı" der ve kullanıcı ne yazacağını bilemez. Ayrıca doğru bağlanmış etikete tıklamak alanı odaklar; bu, herkes için kullanılabilirlik kazancıdır (özellikle küçük onay kutularında).
- **Nerede karşına çıkar:** Her formda. Otomatik denetim araçlarının en sık bulgusu.
- **Örnek kullanım:** "Etiketler görsel olarak var ama alanla bağlı değil; ilişkilendirelim."
- **Karıştırılanlar:** Placeholder etiket değildir (4.9). Görsel olarak etiket gibi görünen serbest metin de yeterli değildir; bağ kurulmalıdır.
- **İlgili terimler:** Label/Placeholder (4.9), Form parçaları (7.11)

### Error identification / suggestion

- **Terim (İngilizce):** Error identification (SC 3.3.1), Error suggestion (SC 3.3.3)
- **Türkçesi:** Hata belirtme ve öneri
- **Tanım:** Hatanın hangi alanda olduğunun metinle bildirilmesi ve mümkünse düzeltme önerisi sunulması.
- **Ne işe yarar / neden var:** "Formda hata var" mesajı, 12 alanlı bir formda işe yaramaz. Hata **alanın yanında**, metinle ve alanla ilişkilendirilmiş olarak gösterilmelidir. Ayrıca hata özeti verilecekse, özetteki maddeler ilgili alana bağlantı olmalıdır.
- **Nerede karşına çıkar:** Form doğrulama tasarımında.
- **Örnek kullanım:** "Hata mesajını alanın altına koyalım, alanla ilişkilendirelim ve canlı bölge olarak duyuralım."
- **İlgili terimler:** Error message (4.9), aria-live (6.4), Inline validation (7.8)

### Autocomplete

- **Terim (İngilizce):** Autocomplete attribute (SC 1.3.5)
- **Türkçesi:** Otomatik doldurma niteliği
- **Tanım:** Alanın hangi tür kişisel bilgiyi beklediğini tarayıcıya bildiren nitelik (ad, e-posta, adres, kart numarası).
- **Ne işe yarar / neden var:** Tarayıcının doğru doldurmasını sağlar. Bilişsel yükü ve yazma çabasını azaltır — motor kısıtı olan kullanıcılar için ciddi fark yaratır, herkes için de formu hızlandırır.
- **Nerede karşına çıkar:** Kayıt, ödeme ve adres formlarında.
- **Örnek kullanım:** "Adres alanlarına autocomplete değerlerini verelim; tarayıcı doldursun."
- **İlgili terimler:** Form parçaları (7.11), Redundant Entry (6.2)

### Zorunlu alan işaretleme

- **Terim (İngilizce):** Required field indication
- **Türkçesi:** Zorunlu alan gösterimi
- **Tanım:** Hangi alanların doldurulmasının zorunlu olduğunun belirtilmesi.
- **Ne işe yarar / neden var:** Yıldız (*) yaygındır ama tek başına yetersizdir: anlamı açıklanmalı ve koda da bildirilmelidir. Daha iyi bir yaklaşım, zorunluları işaretlemek yerine **isteğe bağlı olanları "(isteğe bağlı)" diye yazmaktır** — çoğu formda zorunlu alanlar çoğunluktadır, bu yüzden daha az işaret gerekir ve belirsizlik kalmaz.
- **Nerede karşına çıkar:** Her form tasarımında.
- **Örnek kullanım:** "Zorunluları yıldızlamak yerine sadece isteğe bağlı olanı etiketleyelim; formda 8 alanın 7'si zorunlu."
- **İlgili terimler:** Label (4.9), Error identification
