# Ders standardı v2

> Her ders bu belgeye göre yazılır ve `npm run lint:lessons` ile ölçülür. Ölçülebilen kural araca,
> ölçülemeyen kural "acemi okur" öz denetimine bırakılır. Bir dersi v2'ye geçirmek, frontmatter'a
> `standard: 2` yazmak demektir; tam kurallar yalnız o derslere uygulanır.

## Amaç

Bir ders, konuyu ilk kez gören birine **tek oturumda** anlatır ve onun rolüne neyin yarayacağını
söyler. Üç ölçütü aynı anda tutar:

- **Sade:** kısa cümle, bir paragrafta bir fikir, terim kullanılmadan önce tanımlanır.
- **Net:** her bölümün tek bir işi vardır; okur "bu ne demek?" diye geri dönmez.
- **Eksiksiz:** konunun birincil kaynaktaki kavramları kapsanır; ileri ayrıntı `<Deeper>` içinde
  durur, ana metni ağırlaştırmaz.

## İskelet

Sıra sabittir. Lint bu sırayı denetler.

1. **Frontmatter.** `summary` (tek cümle, en çok 220 karakter, başlığın altında görünür), `outcomes`
   (2–5 madde), `minutes`, `sources` (blok liste, her biri birincil kaynak, tarayıcıda açıldığı
   doğrulanmış), materyal dışı bilgi varsa `additions`, `standard: 2`.
2. **Kanca.** İlk `##` başlığından önce, en çok 120 kelimelik bir iş sahnesi. Mümkünse ortak vakadan
   ([vaka.md](vaka.md)).
3. **Kavram bölümleri.** En az iki `##`. Her biri şu sırayı izler: tanım (terimin İngilizcesi ilk
   geçişte parantez içinde) → somut örnek → görsel → gerekiyorsa "X ≠ Y" karışıklık notu.
4. **En az bir görsel.** Diyagram ilkeli, demo, şekil ya da illüstrasyon (`@visual` etiketli
   bileşenler). Karşılaştırma kutusu (`Compare`) ve tablo görsel sayılmaz; yardımcıdır.
5. **Uygulamada** (`<Case>`, önerilir). Vakadan adım adım çözülmüş bir örnek; varsa ilgili şablona
   bağlantı.
6. **Rol mercekleri** (`<Lenses>`). Dersin **temel** ya da **önerilen** olduğu her rol için bir
   `<Lens>`; isteğe bağlı olduğu roller için yazılmaz. Her mercek 2–5 madde, en çok 120 kelime ve şu
   dört sorudan en az ikisini cevaplar: bu konuda senin işin ne, hangi soruyu sorarsın, hangi çıktıyı
   üretirsin, hangi hatadan kaçınırsın.
7. **Özet** (`<Summary>`). 3–6 madde; her madde dersin bir bölümünü tek cümlede taşır.
8. **Kendini yokla.** `## Kendini yokla` başlığı ve en az 3 `<SelfCheck>`: biri hatırlama, biri
   kavrama, biri senaryo ("Ekipte şu oldu; ne yaparsın?").
9. **Derine in** (`<Deeper>`, isteğe bağlı). İleri ayrıntı, istisnalar, tarihçe.

## Yazım kuralları

- "Sen" diliyle, sade Türkçe. Önce somut, sonra soyut.
- Cümle ortalaması 20 kelimenin altında. 25 kelimeyi geçen cümle uyarı, 35'i geçen hata.
- Paragraf en çok 120 kelime.
- Terim ilk geçişte tanımlanır; İngilizcesi parantez içinde bir kez yazılır. Türkçesi yerleşmemiş
  terim (backlog, sprint) Türkçeleştirilmez, açıklanır.
- İleri referans yok: önce anlatılması gereken bir ders varsa `requires` alanına yazılır.
- Sayılar, isimler ve tarihler vaka kitabıyla tutarlı.
- Ana metin rol-nötrdür. "Tasarımcı olarak sen" gibi role özgü cümleler yalnız o rolün merceğinde.
- Hızla eskiyen bilgi (sürüm, ücret, sertifika koşulu, yasa maddesi) `flags: ["degisken"]` taşır ve
  "kullanmadan önce doğrula" der.
- Materyalde olmayan bilgi `<Outside>` ile işaretlenir ve `additions` alanında listelenir.

## Ölçülen kapılar (`npm run lint:lessons`)

| Kapı | Uyarı | Hata (yalnız v2) |
|---|---|---|
| Okunabilirlik (Ateşman) | 50'nin altı | 35'in altı |
| Cümle uzunluğu | 25 kelimenin üstü | 35 kelimenin üstü |
| Uzun cümle oranı | — | cümlelerin %25'inden fazlası 20 kelimenin üstünde |
| Paragraf | — | 120 kelimenin üstü |
| Kanca | — | 120 kelimenin üstü ya da yok |
| Kavram bölümü | — | 2'den az `##` |
| Görsel | — | yok |
| Kendini yokla | — | başlık yok ya da 3'ten az soru |
| Özet | — | yok ya da 3–6 madde dışında |
| Mercek | — | temel/önerilen bir rolün merceği yok; bilinmeyen rol; 120 kelimeyi aşan mercek |
| Frontmatter | — | `summary` > 220 karakter, `outcomes` 2–5 dışında, `minutes` kelime/180'in ±%50'si dışında, `includeTerms`/`skipTerms` tek satır JSON değil |

**Ateşman okunabilirlik formülü** (Ateşman, 1997, *Türkçede okunabilirliğin ölçülmesi*, Dil Dergisi
58): `198,825 − 40,175 × (hece / kelime) − 2,610 × (kelime / cümle)`. Türkçede hece sayısı ünlü
sayısına eşittir. Aralıklar: 90–100 çok kolay, 70–89 kolay, 50–69 orta güçlükte, 30–49 zor, 1–29 çok
zor. Ölçüm yalnız düzyazıda yapılır: başlık, tablo, kod, bileşen öznitelikleri ve bağlantı adresi
sayılmaz; liste maddeleri cümle sayılır. İngilizce terimler hece sayısını biraz şaşırtır; eşikler
pilot derslerde buna göre ayarlandı.

## "Acemi okur" öz denetimi

Lint'in ölçemediği şeyler. Dersi yayınlamadan önce dersi hiç bilmeyen birinin gözüyle oku:

- Her terim kullanılmadan önce tanımlandı mı?
- Görsel tek başına bir şey anlatıyor mu? Altyazısı aynı bilgiyi düzyazıyla da veriyor mu?
- Kancadaki sahne dersin sonunda çözüldü mü?
- Kendini yokla soruları dersin metniyle cevaplanabiliyor mu?
- Mercekteki maddeler o role gerçekten yeni bir şey söylüyor mu, yoksa ana metni mi tekrar ediyor?
- Her kaynak açılıyor mu ve söylediğimiz şeyi gerçekten söylüyor mu?

## Ders üretim hattı

1. Kapsam haritası: kategorinin birincil kaynağındaki kavramlar ders ders işaretlenir
   (`docs/icerik/kapsam-<kategori>.md`).
2. Çakışma tablosu: aynı kavram başka bir derste anlatılıyor mu?
3. Taslak, görsel, vaka örneği, mercekler.
4. Olgu ve kaynak kontrolü.
5. `npm run lint:lessons` ve acemi okur denetimi.
6. Kategori quizi (en az 8 soru, senaryo ağırlıklı) ve yeni sözlük terimleri.
7. 375 / 768 / 1280 ekran görüntüsü, klavye turu, onay.
