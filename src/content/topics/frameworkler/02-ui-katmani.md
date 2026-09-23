---
title: "UI katmanı"
sectionNumber: "9.2"
category: "frameworkler"
order: 2
cardCount: 5
sourceFile: "09-framework-ve-kutuphane-haritasi.md"
origin: "material"
flags: ["degisken"]
---
Arayüzü çizen temel kütüphaneler. **Bu, doğru cevabı olmayan bir karardır** — hepsi çalışır, farklılıklar takas noktalarındadır.

### React

- **Terim (İngilizce):** React
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Arayüzü bileşenlere bölerek kuran, en yaygın kullanılan UI kütüphanesi.
- **Ne işe yarar / neden var:** Kendi başına en iyisi olduğu için değil, **ekosistemi en büyük olduğu için** varsayılan seçim. Her problem için hazır bir kütüphane, her soru için yazılmış bir cevap, her şehirde bulunabilir bir geliştirici var. Bu, teknik bir üstünlükten çok bir risk azaltma argümanıdır.
- **Nerede karşına çıkar:** İş ilanlarının çoğunda. Senin de kullandığın stack.
- **Örnek kullanım:** "React seçelim; ekip zaten biliyor ve ihtiyacımız olan her bileşen için hazır çözüm var."
- **Karıştırılanlar:** React tek başına yeterli değildir; yönlendirme, veri çekme ve sunucu tarafı için ya bir meta-framework ya da bir sürü ayrı kütüphane gerekir. "React öğrendim" demek, projeyi kurabilmek anlamına gelmez.
- **Ne zaman kullanılmaz:** Basit bir tanıtım sitesi için gereksiz ağırlıktır; statik bir site üreteci veya sade HTML/CSS daha uygundur.
- **İlgili terimler:** Next.js (9.3), Component (8.7), RSC (8.10)

### Vue

- **Terim (İngilizce):** Vue
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** React'e alternatif, öğrenme eğrisi daha yumuşak kabul edilen UI framework'ü.
- **Ne işe yarar / neden var:** HTML'e daha yakın bir yazım biçimi sunar ve resmî araçları (yönlendirme, state) tek elden gelir — yani React'teki "hangi kütüphaneyi seçeyim" kararlarının çoğunu ortadan kaldırır. Avrupa ve Asya'da güçlü bir topluluğu var.
- **Nerede karşına çıkar:** Nuxt ile birlikte (9.3), Laravel ekosisteminde yaygın.
- **Örnek kullanım:** "Ekip Vue biliyor; React'e geçmenin bize somut faydası yok."
- **Ne zaman kullanılmaz:** İş ilanı havuzu ve üçüncü parti bileşen çeşitliliği React kadar geniş değil; bunlar önemliyse React daha güvenli.
- **İlgili terimler:** Nuxt (9.3), React

### Svelte

- **Terim (İngilizce):** Svelte
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Kodun büyük kısmını **derleme anında** işleyip tarayıcıya çok az JavaScript gönderen framework.
- **Ne işe yarar / neden var:** Daha az kod yazdırır ve daha küçük paket üretir. Geliştirici memnuniyeti anketlerinde sürekli üst sıralarda çıkar. `[DEĞİŞKEN BİLGİ]` Svelte 5 ile "runes" adlı yeni bir reaktivite sistemi geldi; eski Svelte kaynakları bu konuda eskimiş olabilir.
- **Nerede karşına çıkar:** Performansın kritik olduğu ve ekibin küçük olduğu projelerde.
- **Örnek kullanım:** "Svelte küçük ve hızlı ama ekipte kimse bilmiyor; öğrenme maliyetini hesaba katalım."
- **Ne zaman kullanılmaz:** Ekosistem React'ten belirgin biçimde küçük; hazır bileşen ve entegrasyon aradığında daha az seçenek bulursun.
- **İlgili terimler:** SvelteKit (9.3), Bundle size (8.12)

### Angular

- **Terim (İngilizce):** Angular
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Google tarafından geliştirilen, her şeyi kutudan çıkaran kapsamlı framework.
- **Ne işe yarar / neden var:** Kurumsal ortamlarda güçlüdür çünkü **kararları senin yerine verir**: yönlendirme, form, HTTP, test — hepsi resmî ve tek biçimlidir. 50 kişilik bir ekipte bu tutarlılık değerlidir.
- **Nerede karşına çıkar:** Bankalar, sigorta şirketleri, büyük kurumsal projeler.
- **Örnek kullanım:** "Kurumsal müşteri Angular istiyor; standartları oturmuş, ekip devri kolay."
- **Ne zaman kullanılmaz:** Küçük projeler ve hızlı prototipler için ağır kalır; öğrenme eğrisi diğerlerinden dik.
- **İlgili terimler:** React, Vue

### Solid

- **Terim (İngilizce):** SolidJS
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** React'e benzer yazım biçimi olan ama farklı bir reaktivite modeliyle çalışan kütüphane.
- **Ne işe yarar / neden var:** İnce taneli reaktivite kullanır: bir değer değiştiğinde tüm bileşeni değil, yalnızca o değeri kullanan parçayı günceller. Bu, gereksiz yeniden çizimleri (8.8) ortadan kaldırır.
- **Nerede karşına çıkar:** Performansa çok duyarlı projelerde ve teknik tartışmalarda.
- **Örnek kullanım:** "Solid ilginç ama üretim için ekosistem riskini alamayız."
- **Ne zaman kullanılmaz:** Ekosistem küçük; ticari projelerde risk oluşturur. **Seviye 3** terim: adını bilmen yeterli.
- **İlgili terimler:** React, Re-render (8.8)
