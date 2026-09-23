---
title: "Mimari nedir ve neden erken karar verilir"
sectionNumber: "14.1"
category: "sistem-mimarisi"
order: 1
cardCount: 3
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: []
---
### Architecture

- **Terim (İngilizce):** Software architecture
- **Türkçesi:** Yazılım mimarisi
- **Tanım:** Bir sistemin parçalarının nasıl bölündüğü, birbirleriyle nasıl konuştuğu ve nerede çalıştığına dair üst seviye kararların bütünü.
- **Ne işe yarar / neden var:** Mimari, **geri dönüşü en pahalı karar sınıfıdır.** Bir buton rengini bir günde değiştirirsin; bir ekranı bir haftada yeniden tasarlarsın; veri modelini (11.10) aylarca taşırsın; mimariyi ise çoğu zaman hiç değiştirmezsin — yeniden yazarsın.
- **Nerede karşına çıkar:** Proje kurulumunda ve büyük özellik kararlarında.
- **Örnek kullanım:** "Bu bir mimari karar; şimdi konuşalım, sonra değiştirmesi pahalı olacak."
- **İlgili terimler:** Trade-off, ADR (14.12), Tech stack (1.6)

### Tersine çevrilebilirlik

- **Terim (İngilizce):** One-way door vs two-way door decision, reversibility
- **Türkçesi:** Tek yönlü ve çift yönlü kapı kararları
- **Tanım:** Bir kararın geri alınabilir olup olmadığına göre sınıflandırılması. **Çift yönlü kapı**: yanlışsa geri dön. **Tek yönlü kapı**: geri dönüş yok veya çok pahalı.
- **Ne işe yarar / neden var:** Karar hızını ayarlar. Çift yönlü kapılarda uzun uzun tartışmak zaman kaybıdır — dene, olmazsa değiştir. Tek yönlü kapılarda ise yavaşlamak doğrudur. **Ekiplerin en yaygın hatası ikisini karıştırmaktır:** buton rengini saatlerce tartışıp veritabanı seçimini bir öğleden sonrada yapmak.
- **Nerede karşına çıkar:** Karar toplantılarında.
- **Örnek kullanım:** "Bu çift yönlü kapı; bir hafta deneyelim, olmazsa geri alırız. Uzun tartışmaya gerek yok."
- **İlgili terimler:** Trade-off, Spike (3.5), ADR (14.12)

### Trade-off düşünmek

- **Terim (İngilizce):** Trade-off
- **Türkçesi:** Takas
- **Tanım:** Bkz. 9.12. Mimaride özel bir ağırlığı var: **mimaride "iyi" ve "kötü" seçenek yoktur, farklı şeyleri optimize eden seçenekler vardır.**
- **Ne işe yarar / neden var:** Bir mimari önerisini değerlendirmenin tek dürüst yolu, neyi feda ettiğini sormaktır. Mikroservis ölçeklenebilirlik kazandırır, basitlik kaybettirir. Önbellek hız kazandırır, tazelik kaybettirir (10.11). Statik üretim hız kazandırır, dinamiklik kaybettirir (8.10).
- **Nerede karşına çıkar:** Her mimari tartışmasında.
- **Örnek kullanım:** "Bunun takası ne? Neyi kaybediyoruz karşılığında?"
- **İlgili terimler:** ADR (14.12), Constraint (18.4)
