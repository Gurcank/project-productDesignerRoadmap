---
title: "Mimari diyagramı okumak"
sectionNumber: "14.13"
category: "sistem-mimarisi"
order: 13
cardCount: 0
sourceFile: "14-sistem-mimarisi.md"
origin: "material"
flags: ["emin-degil"]
---
Diyagramlar bir dildir. Standart bir gösterim yoktur ama yaygın kalıplar vardır.

**Kutular** bileşenleri temsil eder: servisler, veritabanları, dış sistemler, kullanıcı arayüzleri. Bir kutunun adı genelde sorumluluğunu söyler.

**Oklar** veri veya çağrı akışını gösterir. **Okun yönü kimin kimi çağırdığını söyler** ve bu önemli bir bilgidir: A → B ise A, B'ye bağımlıdır; B'nin çökmesi A'yı etkiler, tersi geçerli olmayabilir. Kesikli oklar genelde eş zamansız (async) iletişimi, düz oklar eş zamanlı çağrıyı gösterir.

**Kesikli kutular veya çerçeveler** sınırları temsil eder: bir ağ sınırı, bir güvenlik sınırı, bir ekip sorumluluğu veya bir bulut hesabı. **Bir sınırı geçen her ok, üzerinde durulması gereken bir noktadır** — orada kimlik doğrulama (Bölüm 12), gecikme (1.3) ve hata olasılığı vardır.

**Bir diyagrama bakarken sorulacak beş soru:**

1. **Kullanıcı isteği hangi kutulardan geçiyor?** Zincirdeki her halka gecikme ve arıza ihtimali ekler.
2. **Hangi kutu çökerse ne olur?** Tek arıza noktaları (14.8) burada görünür.
3. **Hangi oklar bir sınırı geçiyor?** Ağ sınırını geçen her çağrı yavaş ve güvenilmezdir.
4. **Veri nerede duruyor?** Kaç ayrı yerde veri var ve bunlar nasıl senkron kalıyor (14.10)?
5. **Ne eksik?** İzleme (16.10), önbellek (10.11), kuyruk (10.12) ve yedeklilik (14.8) diyagramlarda en sık atlanan parçalardır.

**C4 modeli** `[EMİN DEĞİLİM]` adıyla anılan ve diyagramları dört zoom seviyesine ayıran bir yaklaşım yaygın olarak kullanılıyor: sistem bağlamı, konteyner, bileşen, kod. Kesin detayını doğrulamadım ama "hangi seviyede konuşuyoruz?" sorusu diyagram tartışmalarında işe yarar — çoğu karışıklık, iki kişinin farklı zoom seviyelerinden konuşmasından çıkar.
