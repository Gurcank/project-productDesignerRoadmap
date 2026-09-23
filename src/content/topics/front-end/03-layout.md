---
title: "Layout"
sectionNumber: "8.3"
category: "front-end"
order: 3
cardCount: 4
sourceFile: "08-frontend-temelleri.md"
origin: "material"
flags: []
---
Öğelerin sayfada nasıl dizildiği. İkisini ayırt etmek, tasarım tesliminde niyetini net anlatmanı sağlar.

### Flexbox

- **Terim (İngilizce):** Flexbox (flexible box layout)
- **Türkçesi:** Esnek kutu yerleşimi
- **Tanım:** Öğeleri **tek bir eksende** (yatay veya dikey) dizen yerleşim sistemi.
- **Ne işe yarar / neden var:** Tek sıra veya tek sütun hâlindeki her şey için doğal seçim: buton grupları, navigasyon çubuğu, kart içi öğe dizilimi, form satırları. **Figma'daki auto layout ile kavramsal olarak aynı şeydir** (5.10) — bu yüzden auto layout ile çalışmak, geliştiricinin göreceği yapıya yakın tasarım üretir.
- **Nerede karşına çıkar:** Neredeyse her bileşende.
- **Örnek kullanım:** "Header'ı flex yapalım: logo solda, menü sağda, aralarında boşluk otomatik dağılsın."
- **Karıştırılanlar:** Flexbox tek eksenlidir. İki eksende (satır ve sütun) aynı anda hizalama gerekiyorsa Grid daha uygundur.
- **İlgili terimler:** Grid, Auto layout (5.10), Gap

### CSS Grid

- **Terim (İngilizce):** CSS Grid
- **Türkçesi:** CSS ızgara
- **Tanım:** Öğeleri **iki eksende** (satır ve sütun) aynı anda dizen yerleşim sistemi.
- **Ne işe yarar / neden var:** Sayfa düzeni, kart ızgaraları ve bento grid (7.5) gibi iki boyutlu yerleşimlerin doğru aracı. Bir öğenin kaç sütun ve kaç satır kaplayacağı doğrudan tanımlanabilir — bento grid tam olarak bununla kurulur.
- **Nerede karşına çıkar:** Sayfa ve bölüm düzenlerinde.
- **Örnek kullanım:** "Bento grid'i CSS Grid ile kuralım; ana kart iki sütun iki satır kaplasın."
- **Karıştırılanlar:** *CSS Grid* (kod tekniği) ≠ *layout grid* (5.5, tasarım ızgarası). İkincisi bir tasarım kararı, birincisi onu uygulama aracıdır.
- **İlgili terimler:** Flexbox, Grid (5.5), Bento grid (7.5)

### Gap

- **Terim (İngilizce):** `gap`
- **Türkçesi:** Aralık
- **Tanım:** Flex veya grid içindeki öğeler arasındaki boşluk.
- **Ne işe yarar / neden var:** Margin ile boşluk vermenin eski ve sorunlu yöntemini ortadan kaldırır: gap yalnızca **aralara** boşluk koyar, ilk ve son öğenin dışına koymaz. Tasarımdaki "kartlar arası 24px" ifadesinin doğrudan karşılığı budur.
- **Nerede karşına çıkar:** Her yerleşim tanımında.
- **Örnek kullanım:** "Kartlar arası gap 24, kart içi padding 20 olsun."
- **İlgili terimler:** Spacing scale (5.5), Box model (8.2)

### Aspect ratio

CSS tarafında `aspect-ratio` özelliğiyle bir kutunun en-boy oranı sabitlenir. Tasarım tarafındaki karşılığı 5.7'de. Önemi: görsel yüklenmeden önce yer ayrılmasını sağlar, böylece yerleşim kayması (CLS, 8.12) önlenir.
