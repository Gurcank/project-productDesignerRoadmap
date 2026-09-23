---
title: "Ekran okuyucu ve ARIA"
sectionNumber: "6.4"
category: "erisilebilirlik"
order: 4
cardCount: 5
sourceFile: "06-erisilebilirlik-a11y.md"
origin: "material"
flags: []
---
Görme engelli kullanıcıların arayüzü nasıl deneyimlediği ve arayüzün onlara nasıl anlatıldığı.

### Screen reader

- **Terim (İngilizce):** Screen reader
- **Türkçesi:** Ekran okuyucu
- **Tanım:** Ekrandaki içeriği sesli okuyan veya braille ekrana aktaran yazılım.
- **Ne işe yarar / neden var:** Kullanıcı sayfayı **doğrusal olarak** dinler ya da başlık, link, landmark listeleri üzerinden atlayarak gezer. Bu yüzden görsel düzenin anlamlı olması yetmez; kodun sırası da anlamlı olmalıdır. Yaygın olanlar: NVDA ve JAWS (Windows), VoiceOver (macOS/iOS), TalkBack (Android).
- **Nerede karşına çıkar:** a11y testlerinde. En az bir kez kendi sitende deneyimlemen, bu bölümün tamamından daha öğreticidir.
- **Örnek kullanım:** "VoiceOver'la denedim: buton 'düğme' diye okunuyor ama ne yaptığı söylenmiyor, erişilebilir adı yok."
- **İlgili terimler:** Accessible name, Alt text, ARIA, Semantic HTML (6.3)

### Alt text

- **Terim (İngilizce):** Alt text (alternative text)
- **Türkçesi:** Alternatif metin
- **Tanım:** Bir görselin, göremeyen kullanıcıya ne anlattığını aktaran metin.
- **Ne işe yarar / neden var:** Amaç görseli **tarif etmek değil, işlevini aktarmaktır.** Aynı fotoğraf farklı bağlamlarda farklı alt metin gerektirir: bir haber sayfasında olayı anlatır, bir ürün sayfasında ürünün rengini ve açısını anlatır.
- **Nerede karşına çıkar:** İçerik girişinde ve CMS alanlarında. Alt metin yazmak genelde tasarımcı veya içerik editörünün işidir.
- **Örnek kullanım:** "Bu grafiğin alt metni 'grafik' olamaz; asıl bulguyu bir cümleyle yazalım."
- **Karıştırılanlar:** **Dekoratif görsellerin alt metni boş bırakılmalıdır** (`alt=""`). Boş bırakmak "unutmak" değildir; ekran okuyucuya "bunu atla" demektir. Her görsele metin yazmak, dinleyen kullanıcıyı gereksiz gürültüye boğar. Ayrıca alt metne "resim" veya "görsel" yazmak gereksizdir; ekran okuyucu zaten öyle olduğunu söyler.
- **İlgili terimler:** Screen reader, Decorative image, SEO (8.13)

### Accessible name

- **Terim (İngilizce):** Accessible name
- **Türkçesi:** Erişilebilir ad
- **Tanım:** Bir öğenin yardımcı teknolojiye tanıtılan adı.
- **Ne işe yarar / neden var:** Yalnızca ikon içeren bir butonun görünen metni yoktur; erişilebilir adı verilmezse ekran okuyucu "düğme" der ve kullanıcı ne yaptığını bilemez. Ad, görünen etiketten, `aria-label`'dan veya ilişkilendirilmiş bir etiketten gelir.
- **Nerede karşına çıkar:** İkon butonlarında, arama alanlarında, kapatma (×) düğmelerinde — a11y denetimlerinin en sık bulgusu.
- **Örnek kullanım:** "Kapatma butonuna erişilebilir ad verelim: 'Diyaloğu kapat'."
- **İlgili terimler:** ARIA, aria-label, Icon set (5.7)

### ARIA

- **Terim (İngilizce):** ARIA — Accessible Rich Internet Applications
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** HTML'in tek başına ifade edemediği rol, durum ve ilişkileri yardımcı teknolojilere bildiren ek nitelikler kümesi.
- **Ne işe yarar / neden var:** Sekmeler, açılır menüler ve karmaşık bileşenler için HTML'de hazır eleman yoktur; ARIA bu boşluğu doldurur.
- **Nerede karşına çıkar:** Özel bileşen geliştirmede. Hazır ve erişilebilirliği test edilmiş kütüphaneler (Radix gibi, 9.5) bunun büyük kısmını halleder — bu, kütüphane seçiminin bir erişilebilirlik kararı olduğunu gösterir.
- **Örnek kullanım:** "Bu açılır menüyü sıfırdan yazmayalım; erişilebilir bir headless bileşen kullanalım."
- **Karıştırılanlar:** **ARIA'nın birinci kuralı: mümkünse ARIA kullanma.** Doğru HTML elemanı varsa onu kullan. Yanlış kullanılan ARIA, hiç ARIA kullanmamaktan daha zararlıdır; çünkü yardımcı teknolojiye **yanlış bilgi** verir. `role="button"` yazılmış bir `div`, klavye desteği eklenmediyse hâlâ çalışmaz ama artık kendini buton olarak tanıtır.
- **İlgili terimler:** Semantic HTML (6.3), role, aria-label

### role / aria-label / aria-live

- **Terim (İngilizce):** `role`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-live`
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** `role` öğenin ne olduğunu söyler. `aria-label` görünmeyen bir ad verir. `aria-labelledby` sayfadaki başka bir metni ad olarak kullanır. `aria-describedby` ek açıklama bağlar. `aria-live` bir alanın içeriği değiştiğinde ekran okuyucunun bunu duyurmasını sağlar.
- **Ne işe yarar / neden var:** `aria-live` tasarımcıyı doğrudan ilgilendirir: **görsel bir bildirim (toast, hata mesajı, "3 sonuç bulundu") ekranda belirdiğinde, ekran okuyucu kullanıcısının bundan haberi olmaz** — canlı bölge tanımlanmadıkça. Bu, en sık atlanan erişilebilirlik detaylarından biridir.
- **Nerede karşına çıkar:** Toast, form doğrulama, canlı arama sonuçlarında.
- **Örnek kullanım:** "Filtre uygulanınca 'X sonuç bulundu' metnini canlı bölge yapalım; sessiz değişim olmasın."
- **İlgili terimler:** ARIA, Toast (7.8), Inline validation (6.7)
