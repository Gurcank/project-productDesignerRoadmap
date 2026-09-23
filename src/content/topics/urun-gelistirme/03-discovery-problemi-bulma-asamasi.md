---
title: "Discovery: problemi bulma aşaması"
sectionNumber: "2.3"
category: "urun-gelistirme"
order: 3
cardCount: 6
sourceFile: "02-urun-gelistirme-yasam-dongusu.md"
origin: "material"
flags: ["emin-degil"]
---
Çözüme geçmeden önce doğru problemi bulma aşaması. En sık atlanan faz ve en pahalı hataların kaynağı: yanlış problemi mükemmel çözmek, doğru problemi kötü çözmekten daha maliyetlidir.

### Discovery

- **Terim (İngilizce):** Discovery (product discovery)
- **Türkçesi:** Keşif
- **Tanım:** Ne yapılacağına karar vermeden önce problemi, kullanıcıyı ve alternatifleri araştırma çalışması.
- **Ne işe yarar / neden var:** Yanlış şeyi üretmenin maliyetini düşürür. Bir hafta araştırma, üç aylık yanlış geliştirmeyi engelleyebilir.
- **Nerede karşına çıkar:** Yeni bir özellik veya ürün gündeme geldiğinde ilk faz. "Discovery yaptık mı?" sorusu bir kalite kapısıdır.
- **Örnek kullanım:** "Discovery'de altı kullanıcıyla konuştuk; hiçbiri bu problemi bizim varsaydığımız gibi tarif etmedi."
- **Karıştırılanlar:** *Discovery* ≠ *research*. Research bir yöntem, discovery ise o yöntemleri de içeren bir faz.
- **İlgili terimler:** User research (2.4), Problem statement, Hypothesis

### Problem statement

- **Terim (İngilizce):** Problem statement
- **Türkçesi:** Problem tanımı
- **Tanım:** Çözülmek istenen problemi, çözümden bahsetmeden yazan kısa metin.
- **Ne işe yarar / neden var:** İnsanlar problemi çözüm diliyle anlatma eğilimindedir ("bize bir filtre lazım"). Bu, alternatifleri daha başta öldürür. Problem tanımı çözümü askıya alır ve ekibin birden fazla yol düşünmesini sağlar.
- **Nerede karşına çıkar:** Her spec ve PRD'nin ilk bölümü. Kickoff'ta üzerinde uzlaşılması gereken ilk şey.
- **Örnek kullanım:** "Problem statement'ı yeniden yazalım: 'filtre yok' bir problem değil, 'kullanıcı aradığı ürünü listede bulamıyor' bir problem."
- **Karıştırılanlar:** İçinde çözüm geçen bir cümle problem tanımı değildir. Test: cümleyi okuyan biri en az iki farklı çözüm düşünebiliyorsa iyi yazılmıştır.
- **İlgili terimler:** Hypothesis, Spec (2.5), JTBD

### Hypothesis

- **Terim (İngilizce):** Hypothesis
- **Türkçesi:** Hipotez
- **Tanım:** "Şunu yaparsak şu olacak, çünkü şu" biçiminde yazılan, test edilebilir tahmin.
- **Ne işe yarar / neden var:** Bir kararı fikirden çıkarıp sınanabilir hâle getirir. Hipotez yazılmazsa, iş bittikten sonra herkes sonucu kendi lehine yorumlar.
- **Nerede karşına çıkar:** A/B test kurgusunda, deneysel özelliklerde, PRD'nin başında.
- **Örnek kullanım:** "Hipotez: kayıt formunu üç alandan bire indirirsek tamamlama oranı artar, çünkü terk edilme en çok ikinci alanda oluyor."
- **Karıştırılanlar:** *Hypothesis* ≠ *assumption*. Hipotez sınanmak üzere yazılır ve bir ölçütü vardır; varsayım çoğu zaman farkında bile olunmadan taşınır.
- **İlgili terimler:** Assumption (2.4), A/B test (4.10), Success metric (3.7)

### Jobs To Be Done

- **Terim (İngilizce):** Jobs To Be Done — JTBD
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "yapılması gereken iş" olarak açıklanır.
- **Tanım:** Kullanıcının bir ürünü satın almasını, ürünün özelliklerine değil, o kişinin hayatında halletmeye çalıştığı işe bağlayan bakış açısı.
- **Ne işe yarar / neden var:** Rekabeti yeniden tanımlar. Bir not uygulamasının rakibi başka bir not uygulaması değil, kâğıt ve kalem olabilir. Kullanıcıyı demografik özellikleriyle değil, içinde bulunduğu durumla tarif eder.
- **Nerede karşına çıkar:** Discovery ve konumlandırma tartışmalarında. Persona yaklaşımına alternatif veya tamamlayıcı olarak kullanılır.
- **Örnek kullanım:** "JTBD açısından bakalım: kullanıcı bu ekranı 'rapor almak' için değil, 'toplantıda haklı çıkmak' için açıyor."
- **Karıştırılanlar:** *JTBD* ≠ *use case*. Use case sistemle etkileşimi tarif eder; JTBD kullanıcının hayatındaki amacı tarif eder ve ürünü hiç anmayabilir.
- **İlgili terimler:** Persona (2.4), Problem statement
- **Not:** Yaklaşım Clayton Christensen ve Tony Ulwick'in çalışmalarıyla ilişkilendirilir. `[EMİN DEĞİLİM]` İki farklı JTBD okulu var ve aralarında yöntem farkı bulunuyor; tek bir kanonik tanım olduğunu varsayma.

### Validation

- **Terim (İngilizce):** Validation
- **Türkçesi:** Doğrulama
- **Tanım:** Bir varsayımın veya çözümün gerçekten işe yarayıp yaramadığını, üretime girmeden önce sınamak.
- **Ne işe yarar / neden var:** Ekibin kendine olan güvenini veriyle değiştirir. Kullanıcı testi, sahte buton denemesi, ön kayıt sayfası gibi düşük maliyetli yöntemlerle yapılır.
- **Nerede karşına çıkar:** Büyük yatırım gerektiren kararların öncesinde. "Bunu valide ettik mi?" sorusu bir kapı görevi görür.
- **Örnek kullanım:** "Özelliği yapmadan önce landing page ile talebi valide edelim; ilgi yoksa üç haftalık iş boşa gitmemiş olur."
- **İlgili terimler:** Hypothesis, POC (2.8), Usability test (4.10)

### Product-market fit

- **Terim (İngilizce):** Product-market fit — PMF
- **Türkçesi:** Ürün-pazar uyumu
- **Tanım:** Ürünün, gerçekten bir talebi karşıladığı ve kullanıcıların kendiliğinden geldiği/kaldığı nokta.
- **Ne işe yarar / neden var:** Bir startup'ın en kritik eşiği. PMF öncesinde ölçeklendirmeye, reklam harcamasına veya ekip büyütmeye yatırım yapmak, delik bir kovaya su doldurmaya benzer.
- **Nerede karşına çıkar:** Yatırım ve strateji konuşmalarında. Kesin bir ölçütü yoktur; elde tutma (retention) oranı en sık kullanılan göstergedir.
- **Örnek kullanım:** "PMF'e ulaşmadan pazarlama bütçesi artırmak riskli; önce elde tutmayı düzeltelim."
- **İlgili terimler:** MVP (2.8), North star metric (3.7)
