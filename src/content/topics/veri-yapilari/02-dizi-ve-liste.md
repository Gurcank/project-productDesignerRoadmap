---
title: "Dizi ve liste"
sectionNumber: ""
category: "veri-yapilari"
order: 2
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "MDN — Array"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
  - label: "MDN — Virtual scrolling ve content-visibility"
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility"
---

**Dizi (array)**, sıralı öğelerden oluşan en temel yapıdır: her öğenin bir sırası vardır ve o sıra numarasıyla doğrudan erişilir. Arayüzdeki karşılığı neredeyse her şeydir — ürün listesi, yorumlar, arama sonuçları, tablo satırları.

"Liste" kelimesi günlük konuşmada diziyle eş anlamlı kullanılır; teknik olarak **bağlı liste (linked list)** farklı bir yapıdır ve ürün arayüzlerinde nadiren doğrudan karşına çıkar. Pratikte "liste" dendiğinde dizi kastedilir.

## Ne iyi yapar

- **Sırayı korur.** Öğeler eklendikleri sırada durur. Sıra anlam taşıyorsa (mesajlar, adımlar, zaman çizelgesi) bu bedava gelir.
- **Sıra numarasıyla erişim anlıktır.** "3. öğeyi getir" işlemi, listenin uzunluğundan bağımsız olarak aynı sürede biter.
- **Baştan sona gezmek ucuzdur.** Ekranda liste çizmek tam olarak budur.

## Ne kötü yapar

- **Arama.** "Şu id'ye sahip öğe hangisi?" sorusu, dizide baştan başlayıp tek tek bakmayı gerektirir. 10 öğede önemsizdir, 100.000 öğede hissedilir. Çözümü sözlük yapısıdır (bir sonraki adım).
- **Ortadan ekleme ve silme.** Bir öğeyi listenin ortasına eklemek, ondan sonraki her şeyi kaydırmak demektir.
- **Tekilliği garanti etmez.** Aynı öğe iki kez eklenebilir; engellemek ayrı bir kontrol ister (bkz. Küme).

| İşlem | Maliyet | Arayüzdeki hâli |
|---|---|---|
| Sıra numarasıyla erişim | Anlık | "Listedeki 3. karta git" |
| Sona ekleme | Anlık | "Yorum ekle" |
| Arama | Liste uzunluğuyla orantılı | Filtre kutusu |
| Ortaya ekleme / silme | Liste uzunluğuyla orantılı | Sürükle-bırak ile sıralama |

## Arayüz tarafında asıl mesele: kaç tanesini çiziyoruz

Dizinin kendisi genellikle sorun değildir; **ekrana kaç öğe çizildiği** sorundur. Tarayıcı her satır için DOM düğümü oluşturur ve 10.000 satırlık bir tabloyu tek seferde çizmek sayfayı dondurur.

Bunun standart çözümü **sanallaştırma (virtualization / windowing)**: yalnızca görünen alandaki satırları çizmek, kaydırdıkça değiştirmek. Materyalin 9.12'sinde bu, Seviye 3 araçlar arasında geçiyor.

Sanallaştırmanın tasarıma üç somut bedeli vardır ve bunlar genellikle geç fark edilir:

- **Ctrl+F çalışmaz.** Tarayıcının sayfa içi araması yalnız çizilmiş satırları bulur. Kendi arama kutunu vermen gerekir.
- **Değişken yükseklikli satırlar zorlaşır.** Her satır aynı yükseklikteyse ucuz, değilse karmaşıktır. "Bazı satırlar iki satırlık metin olsun" masum bir istek değildir.
- **Yazdırma ve ekran okuyucu davranışı değişir.** Ekran okuyucuya listenin toplam uzunluğunu ayrıca bildirmek gerekir (6.4).

## Alternatifler

- **Sözlük / hash map** — arama baskınsa.
- **Küme (set)** — yalnızca "var mı yok mu" soruluyorsa.
- **Sayfalama (pagination)** — sanallaştırma yerine daha basit ve daha erişilebilir bir çözüm; maliyeti kullanıcının tıklaması.
- **Sonsuz kaydırma** — sayfalamanın alternatifi ama geri dönüşü ve paylaşılabilir konumu bozar (7.11).

## Bir Product Designer olarak

- **Sıralamanın anlamını söyle.** "Yeniden eskiye" mi, "alakaya göre" mi? Sıra belirtilmemişse geliştirici veritabanından ne gelirse onu çizer ve sıra zamanla değişir, kullanıcı bunu rastgelelik olarak görür.
- **Uzun liste tasarlıyorsan sayfalama mı sanallaştırma mı olduğunu netleştir.** İkisinin boş durumu, yükleniyor durumu ve klavye davranışı farklıdır.
- **Sürükle-bırak ile sıralama istiyorsan erken söyle.** Ortaya ekleme pahalı olduğu için, sıralanabilir liste genellikle farklı bir yapı ve ayrı bir "sıra" alanı ister.
- **"Toplam kaç sonuç var" sayısını isteyip istemediğine karar ver.** Bu sayı bedava değildir; bazı sistemlerde tüm listeyi saymak gerekir ve "10.000+" demek çok daha ucuzdur.
