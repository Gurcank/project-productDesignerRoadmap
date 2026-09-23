---
title: "Hazır ve bitmiş tanımları, handoff"
sectionNumber: "2.10"
category: "urun-gelistirme"
order: 10
cardCount: 5
sourceFile: "02-urun-gelistirme-yasam-dongusu.md"
origin: "material"
flags: []
---
Bir işin başlamaya ve bitmeye hazır olduğunu nasıl anlarız. Bu iki tanım yazılı değilse ekip sürekli aynı tartışmayı yeniden yapar.

### Definition of Ready

- **Terim (İngilizce):** Definition of Ready — DoR
- **Türkçesi:** Hazır olma tanımı
- **Tanım:** Bir işin geliştirmeye alınabilmesi için önceden sağlanması gereken koşullar listesi.
- **Ne işe yarar / neden var:** Yarım tanımlanmış işin sprint'e girmesini engeller. Sprint ortasında "burada ne olacak?" diye takılmak, sprint'in en pahalı israfıdır.
- **Nerede karşına çıkar:** Sprint planning'in giriş kapısı. Tasarımcı için önemlidir: "tasarım hazır" maddesi genelde DoR'da yer alır.
- **Örnek kullanım:** "DoR'a göre tasarım onaylı ve AC yazılı olmadan story sprint'e alınmıyor."
- **İlgili terimler:** Definition of Done, Acceptance criteria (2.6), Grooming (2.7)

### Definition of Done

- **Terim (İngilizce):** Definition of Done — DoD
- **Türkçesi:** Bitmiş olma tanımı
- **Tanım:** Bir işin "bitti" sayılabilmesi için sağlanması gereken, tüm işler için ortak koşullar listesi.
- **Ne işe yarar / neden var:** "Bitti" kelimesini standartlaştırır. Aksi hâlde bir geliştirici için "bitti" kodun çalışması, tasarımcı için tasarıma uyması, QA için test edilmiş olması demektir — üçü aynı anda doğru olmadıkça iş bitmemiştir.
- **Nerede karşına çıkar:** Ekibin çalışma anlaşmasında. Sprint review'da bir işin sayılıp sayılmayacağını belirler.
- **Örnek kullanım:** "DoD'a 'mobilde kontrol edildi' ve 'klavyeyle gezilebiliyor' maddelerini ekleyelim."
- **Karıştırılanlar:** *DoD* tüm işler için geneldir; *acceptance criteria* (2.6) o işe özeldir. İkisi birden sağlanmalıdır.
- **İlgili terimler:** Definition of Ready, Acceptance criteria (2.6), QA (2.1)

**Tipik DoD maddeleri:** kod review'dan geçti · testler yeşil · tasarımla karşılaştırıldı · responsive kontrol edildi · erişilebilirlik temel kontrolü yapıldı · staging'e deploy edildi · dokümantasyon güncellendi.

### Handoff

- **Terim (İngilizce):** Handoff (design handoff)
- **Türkçesi:** Devir / teslim
- **Tanım:** Tasarımın, uygulanmak üzere geliştiriciye aktarılması.
- **Ne işe yarar / neden var:** Ekran görüntüsü yeterli değildir; ölçüler, renk değerleri, durumlar (hover, focus, disabled, error), responsive davranış ve boş/hata ekranları da aktarılmalıdır. Eksik handoff, uygulama sırasında geliştiricinin tahmin yürütmesine yol açar — ve tahmin edilen her karar tasarımdan uzaklaşır.
- **Nerede karşına çıkar:** Tasarım bitince. Figma Dev Mode gibi araçlar bu aktarımı kolaylaştırır (5.10).
- **Örnek kullanım:** "Handoff'ta tüm buton durumlarını ve boş liste ekranını da ekledim."
- **Karıştırılanlar:** Handoff bir "duvarın üstünden atma" anı olarak görülürse başarısız olur. İyi ekiplerde tasarımcı uygulama boyunca ulaşılabilir kalır ve sonucu staging'de kontrol eder.
- **İlgili terimler:** Design review, Staging (1.8), Design system (5.1)

### Design review

- **Terim (İngilizce):** Design review
- **Türkçesi:** Tasarım incelemesi
- **Tanım:** Uygulanmış arayüzün, tasarım kararlarına uygunluğunun kontrol edildiği inceleme.
- **Ne işe yarar / neden var:** Uygulama sırasında oluşan sapmaları yayından önce yakalar. Boşluklar, yazı tipi ağırlıkları, geçiş süreleri ve durumlar en sık kayan şeylerdir.
- **Nerede karşına çıkar:** Staging ortamında, yayından önce. Tasarımcının kalite kapısı budur.
- **Örnek kullanım:** "Design review'da üç sapma buldum: kart aralıkları, ikincil buton rengi ve boş durum metni."
- **İlgili terimler:** Handoff, QA (2.1), Visual regression (17.6)

### Sign-off

- **Terim (İngilizce):** Sign-off
- **Türkçesi:** Onay
- **Tanım:** Yetkili kişinin bir çıktıyı resmen kabul etmesi.
- **Ne işe yarar / neden var:** Sorumluluğu netleştirir ve sonradan gelen itirazın önüne geçer. Özellikle müşteriyle çalışırken yazılı onay, kapsam tartışmasının kanıtıdır.
- **Nerede karşına çıkar:** Tasarım teslimi, yayın öncesi, sözleşmeli işlerde faturalama öncesi.
- **Örnek kullanım:** "Müşteriden yazılı sign-off almadan geliştirmeye başlamayalım."
- **İlgili terimler:** Stakeholder (2.1), Scope (2.8), Milestone (2.9)
