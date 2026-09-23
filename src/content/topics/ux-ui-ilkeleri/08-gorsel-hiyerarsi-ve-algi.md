---
title: "Görsel hiyerarşi ve algı"
sectionNumber: "4.8"
category: "ux-ui-ilkeleri"
order: 8
cardCount: 6
sourceFile: "04-ui-ux-surec-ve-ilkeler.md"
origin: "material"
flags: []
---
Gözün ekranda nereye gideceğini belirleyen kurallar. Bu bölüm, "bu tasarım karışık duruyor" izlenimini teknik bir gerekçeye çevirmeni sağlar.

### Visual hierarchy

- **Terim (İngilizce):** Visual hierarchy
- **Türkçesi:** Görsel hiyerarşi
- **Tanım:** Öğelerin önem sırasının, görsel ağırlıkla ifade edilmesi.
- **Ne işe yarar / neden var:** Kullanıcı ekranı okumaz, tarar. Hiyerarşi yoksa göz nereye bakacağını bilemez ve ekran "karışık" hissedilir. Ağırlık üretmenin araçları: boyut, ağırlık (font weight), renk kontrastı, boşluk, konum ve yüzey farkı.
- **Nerede karşına çıkar:** Neredeyse her tasarım geri bildiriminde. En sık rastlanan kusur: bir ekranda **birden fazla birincil eylem** olması.
- **Örnek kullanım:** "Bu ekranda üç buton da dolu renkli; birincil eylem hangisi belli değil, ikisini ikincil stile alalım."
- **İlgili terimler:** Contrast, Gestalt, Focal point

### Gestalt principles

- **Terim (İngilizce):** Gestalt principles
- **Türkçesi:** Gestalt ilkeleri
- **Tanım:** İnsan zihninin ayrı öğeleri nasıl gruplayarak algıladığını tanımlayan ilkeler.
- **Ne işe yarar / neden var:** Kullanıcı, gruplamayı senin niyetinden değil görsel ipuçlarından okur. Yanlış boşluk, ilgisiz iki şeyi bir grup gibi gösterir; bu, tasarım hatalarının en sessiz ve en yaygın kaynağıdır.
- **Nerede karşına çıkar:** Form, kart ve liste tasarımında.
- **Örnek kullanım:** "Etiket ile alan arasındaki boşluk, alan ile bir sonraki etiket arasındakinden büyük; proximity ilkesi gereği yanlış eşleşme okunuyor."
- **İlgili terimler:** Visual hierarchy, White space, Spacing (5.5)

| İlke | Ne der | Tasarımdaki karşılığı |
|---|---|---|
| Proximity | Yakın olanlar ilişkili algılanır | Etiket–alan mesafesi, kart içi boşluk |
| Similarity | Benzer görünenler aynı gruba ait algılanır | Aynı tür eylemler aynı buton stilinde |
| Common region | Aynı çerçeve içindekiler bir gruptur | Kart, panel, kenarlıklı bölüm |
| Closure | Zihin eksik şekli tamamlar | Kırpılmış görsel, kısmen görünen sonraki kart |
| Continuity | Aynı hat üzerindekiler ilişkili algılanır | Hizalama, grid |
| Figure–ground | Bir katman ön, diğeri arka algılanır | Modal ve arkasındaki karartma |

### Contrast

- **Terim (İngilizce):** Contrast
- **Türkçesi:** Kontrast
- **Tanım:** İki öğe arasındaki algılanabilir fark — renk, boyut, ağırlık veya biçim üzerinden.
- **Ne işe yarar / neden var:** Hem hiyerarşinin hem okunabilirliğin temeli. Erişilebilirlik tarafında ölçülebilir bir eşiği vardır (6.6), yani tercih meselesi değildir. Ayrıca kontrast tasarrufludur: her şey vurguluysa hiçbir şey vurgulu değildir.
- **Nerede karşına çıkar:** Renk seçimlerinde ve erişilebilirlik denetimlerinde.
- **Örnek kullanım:** "Açık gri metin arka planla 2,8:1 kontrast veriyor; AA için 4,5:1 gerekiyor, koyulaştıralım."
- **İlgili terimler:** Contrast ratio (5.4, 6.6), Visual hierarchy

### White space

- **Terim (İngilizce):** White space (negative space)
- **Türkçesi:** Boşluk / negatif alan
- **Tanım:** Öğeler arasında bilinçli olarak bırakılan boş alan.
- **Ne işe yarar / neden var:** Boşluk boş değildir; gruplama yapar, nefes verir ve önem işaretler. Bir öğenin etrafındaki boşluğu artırmak, onu büyütmeden vurgular. En sık gelen "buraya bir şey koyalım" isteği, çoğu zaman tasarımın en işlevli parçasını yok eder.
- **Nerede karşına çıkar:** Neredeyse her tasarım tartışmasında.
- **Örnek kullanım:** "Bu boşluk kasıtlı; kaldırırsak iki bölüm tek bölüm gibi okunur."
- **İlgili terimler:** Gestalt (proximity), Spacing scale (5.5), Visual hierarchy

### Alignment

- **Terim (İngilizce):** Alignment
- **Türkçesi:** Hizalama
- **Tanım:** Öğelerin ortak eksenlere göre yerleştirilmesi.
- **Ne işe yarar / neden var:** Görünmez düzen çizgileri yaratır ve "dağınık" hissini ortadan kaldırır. Amatör görünen tasarımların en yaygın sebebi hizasızlıktır — genelde renk veya font değil.
- **Nerede karşına çıkar:** Tasarım incelemesinde ve uygulama sonrası kontrolde.
- **Örnek kullanım:** "Kart içindeki ikon ve başlık farklı eksende; ikisini de sol kenara hizalayalım."
- **İlgili terimler:** Grid (5.5), Gestalt (continuity)

### Scanning patterns

- **Terim (İngilizce):** F-pattern, Z-pattern, layer-cake pattern
- **Türkçesi:** Tarama desenleri
- **Tanım:** Kullanıcıların sayfayı okurken izlediği tipik göz hareketi desenleri.
- **Ne işe yarar / neden var:** Önemli bilginin nereye konacağına dair kaba bir yön verir: metin yoğun sayfalarda göz sola ve üste yığılır.
- **Nerede karşına çıkar:** Landing page ve içerik sayfası tartışmalarında.
- **Örnek kullanım:** "Uzun metin bloğunda kullanıcı F deseniyle tarıyor; önemli bilgi ilk iki satırda ve alt başlıklarda olsun."
- **Karıştırılanlar:** Bu desenler bir kural değil, gözlemdir ve **iyi tasarlanmamış** sayfalarda ortaya çıkar. Net görsel hiyerarşi ve alt başlıklar konulduğunda kullanıcı F deseninden çıkar. Yani F-pattern bir hedef değil, bir uyarı işaretidir.
- **İlgili terimler:** Visual hierarchy, Above the fold (1.4)
