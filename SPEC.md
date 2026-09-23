# SPEC — Product Designer Yol Haritası

> Bu belge **ne** yapıldığını tanımlar. **Nasıl** yapıldığı [ARCHITECTURE.md](ARCHITECTURE.md)'de.
> Kararlar değiştiğinde bu dosya güncellenir; kod ile belge çelişirse belge yanlıştır, düzeltilir.

## Problem

`ProductDesignerMaterials/` klasöründe 26 dosyalık "Product Engineer Referans Dosyası" var:
~15.200 satır, **205 alt bölüm**, 19 bölüm quiz'i ve binden fazla `(10.8)` biçiminde çapraz referans.

Kart sayısı, Faz 1'de içe aktarma yapılınca ölçüldü ve ilk envanterdeki **902** tahminini düzeltti:

| Ölçü | Sayı | Ne demek |
|---|---|---|
| `###` başlığı (içerik bölümlerinde) | **849** | Kart + düzyazı alt blokları |
| Sekiz alanlı **terim kartı** | **803** | Asıl terim kartı kalıbına uyanlar |
| Kart olmayan `###` bloğu | 46 | "Contrast (detay)" gibi düzyazı notlar |
| `### Cevaplar` başlığı | 19 | Bölüm başına bir tane, quiz cevapları |

902 rakamı bu üçünü birlikte sayıyordu. 803 sayısı üç bağımsız yolla doğrulandı: ham materyal
taraması, `npm run validate` çıktısı ve derlenmiş HTML'deki `.term-card` sayısı.

Bu bilgi bugün düz markdown yığını hâlinde duruyor. Baştan sona okunabiliyor, ama:

- nerede kalındığı takip edilemiyor,
- aranamıyor,
- referanslar tıklanamıyor,
- tekrar edilemiyor.

Materyalin kendi önerdiği çalışma biçimi (günde 3–5 terim, 6 aylık takvim, bölüm başına
ilerleme tablosu, 1 gün / 1 hafta / 1 ay tekrar aralıkları) bir arayüz olmadan uygulanamıyor.

## Başarı ölçütü

Tek cümle: **Siteyi açtığımda nerede kaldığımı üç saniyede görüyorum, aklıma takılan bir terimi
iki saniyede buluyorum, bir konuyu bitirdiğimde tek tıkla işaretliyorum.**

Bitti tanımı (uçtan uca):

- `npm run build` temiz geçiyor, `astro check` 0 hata veriyor.
- `npm run validate` temiz geçiyor: her kartın Tanım alanı var, her çapraz referans çözülüyor.
- Ana sayfa → kategori → konu → işaretle → geri dön akışı **yalnız klavyeyle** tamamlanabiliyor.
- 375 / 768 / 1280'de ekran görüntüsü alınmış ve karşılaştırılmış.

## 1. Kapsam

**Var — kurulu ve gezilebilir.** Ana sayfa yol haritası şeması · 23 kategori · 234 konu sayfası ·
20 bölüm quizi · yan menüde tikle ilerleme · kategori ve genel ilerleme yüzdesi · kaldığın yerden
devam · tam metin arama (Pagefind) · terim sözlüğü · kart içi terim tanımı (hover) · tema
(koyu / açık / sistem, varsayılan koyu) · ilerleme yedekleme (JSON dışa/içe aktarma) · satır içi
diyagramlar.

**Var — mobil.** Alt gezinme çubuğu · okuma ilerleme çubuğu · adımlar arası kaydırma · ana ekrana
eklenebilir manifest · **çevrimdışı okuma** (ADR-012). Çevrimdışı katmanı yalnız üretim
derlemesinde etkindir; `astro dev` altında service worker kaydedilmez, kalmış olan sökülür —
gerekçesi ve bedeli ADR-012'de.

**Henüz yok — planlı, yapılmadı.** EN arayüz (`/en/`, `src/i18n`): kullanıcı ertelemeyi seçti,
şu an TR tek dil · Araçlar bölümü (`/araclar/` — kontrol listeleri, proje akış haritası, çalışma
takvimi, kaynaklar): rota yok, üst menüdeki bağlantı bu yüzden `ready: false` ile gizli ·
framework ve kütüphane profil sayfaları · Cloudflare Pages yayını.

**Yok — bilinçli olarak.** Hesap/giriş sistemi · sunucu tarafı veri · cihazlar arası senkron
(mimari hazır, uygulama sonraki faz) · içerik EN çevirisi · yorum/not alma · aralıklı tekrar
motoru · materyal metninin düzenlenmesi · mobil uygulama.

## 2. Bilgi mimarisi

Üç seviye: **Alan** (şemada görsel grup) → **Kategori** (sol menü sahibi) → **Adım** (tek sayfa).

Tek doğru kaynak: [`src/data/categories.ts`](src/data/categories.ts). Sıra, slug ve alan
eşlemesi orada; başka hiçbir yerde tekrarlanmaz.

| Alan | Kategoriler (sıra = materyal bölüm sırası) |
|---|---|
| Temel | 1 Web Temelleri |
| Ürün ve Ekip | 2 Ürün Geliştirme · 3 Çalışma Biçimi · 18 Şirket Ortamı Sözlüğü |
| Tasarım | 4 UX/UI Süreç ve İlkeler · 5 Tasarım Sistemi · 6 Erişilebilirlik · 7 Arayüz Anatomisi |
| Mühendislik | 8 Front-end · **Programlama Dilleri** · 9a Framework'ler · 9b Kütüphaneler · 10 Back-end ve API · 11 Veritabanı · **Veri Yapıları** · **Algoritmalar** |
| Sistem ve Operasyon | 14 Sistem Mimarisi · 12 Auth · 13 Güvenlik ve Hukuk · 15 Git ve GitHub · 16 DevOps ve Yayın · 17 Test ve Kalite |
| Yapay Zekâ | 19 AI ile Profesyonel Çalışma |
| Araçlar (şema dışı) | 22 Sözlük · **[henüz yok]** 20 Proje Akış Haritası · 21 Kontrol Listeleri · Ek A Takvim · Ek B Kaynaklar |

**Kalın** olanlar materyalde yoktu, yazıldı (bkz. §7): Programlama Dilleri 11 adım, Veri Yapıları 9,
Algoritmalar 9. Framework'ler (5) ve Kütüphaneler (9) materyalin 9. bölümünden yeniden yapılandırıldı.

**[henüz yok]** işareti, tasarımı burada duran ama **kurulmamış** yüzeyleri gösterir. Ne kurulduğunun
tam listesi §1'de.

**Yeni kategorilerin yeri — gerekçe.** Programlama Dilleri, Front-end'den (8) sonra: 8.5/8.6 JS ve
TS'yi kavramsal olarak kuruyor, dil profilleri onun üzerine biniyor. Veri Yapıları ve Algoritmalar,
Veritabanı'ndan (11) sonra: N+1, index ve sorgu maliyeti orada anlatılıyor.

### URL yapısı

```
/                                          ana sayfa (yol haritası)
/git-ve-github/                            kategori giriş sayfası
/git-ve-github/dallanma-ve-birlestirme/    adım
/git-ve-github/test/                       bölüm quizi
/sozluk/  /ara/  /ayarlar/
/araclar/                                  [henüz yok]
/en/...                                    [henüz yok] aynı yapı, arayüz İngilizce
```

Rezerve kökler: `ara`, `sozluk`, `araclar`, `ayarlar`, `en`. Son ikisi — `araclar` ve `en` — yalnız
rezerve; rota üretilmiyor. Üst menüdeki Araçlar bağlantısı bu yüzden `ready: false` ile gizli.
Slug'lar Türkçe ve **sabittir** — materyal güncellense bile değişmez, çünkü ilerleme kayıtları
onlara bağlı. Slug değişirse o adımın ilerlemesi kaybolur.

## 3. Sayfa tipleri

**Ana sayfa — yol haritası.** Ekranı kaplayan şema: alanlar şerit, kategoriler düğüm. Her düğümde
ad, adım sayısı ve ilerleme halkası. Üstte genel ilerleme ve **Devam et** kartı. Mobilde dikey
şeride dönüşür. Şema verisi ayrı bir dosyada değil, [`src/data/categories.ts`](src/data/categories.ts)
içinde — ilk tasarımdaki `roadmap.ts` yazılmadı, çünkü sıra, alan ve düğüm adı zaten orada duruyordu
ve ikinci dosya ikinci bir doğru kaynak olurdu.

**Kategori giriş sayfası.** Bölüm giriş metni + adım listesi (her birinde tik ve süre tahmini) +
ilerleme + **Başla / Devam et** + quiz bağlantısı + Ek B'den **dayanıklılık rozeti**
(🟢 eskimeyen / 🟡 yavaş / 🔴 hızlı eskiyen).

**Adım sayfası.** Sol: kategori adımları, her birinde tik, aktif adım işaretli. Orta: başlık +
giriş paragrafı + terim kartları. Sağ (≥1024px): sayfa içi içindekiler — yalnız üçten fazla terim
kartı varsa. Alt: önceki/sonraki + "Bu adımı tamamladım". `[DEĞİŞKEN BİLGİ]` ve `[EMİN DEĞİLİM]`
rozet olur; `(10.8)` referansları tıklanabilir; sözlükteki terimler kart içinde hover tanımı taşır.

**Quiz sayfası.** Bölümün "Kendini test et" soruları, cevaplar `<details>` içinde gizli.
**Puanlama yok** — materyalin ölçütü "kendi cümlenle anlatabilmek". *[henüz yok]* "Hepsini aç"
toplu açma seçeneği.

**Sözlük.** 803 terim kartının terim ve tanım özeti, harf navigasyonu, eşsesli terimler bağlamıyla
("Tag (git)" / "Tag (arayüz)"), her terim kendi adımına link.

**Arama.** `/ara?q=` sonuç sayfası (URL paylaşılabilir), üst menüden ve mobil alt gezinmeden
erişilir. *[henüz yok]* Navbar'ın içine gömülü arama alanı ve Cmd/Ctrl+K kısayolu — arama şu an
kendi sayfasında yaşıyor.

**Araçlar. [henüz yok]** İşaretlenebilir kontrol listeleri (21), faz faz akış haritası (20),
çalışma takvimi (Ek A), kaynaklar (Ek B). Rota üretilmiyor; ilerleme modelindeki `checklists`
alanı (§4) bu sayfalar için ayrılmış, henüz hiçbir şey yazmıyor.

## 4. İlerleme modeli

```ts
{
  version: 1,
  updatedAt: "2026-09-16T12:00:00.000Z",
  topics:     { "git-ve-github/dallanma-ve-birlestirme": { done: true, at: "..." } },
  checklists: { "21.1/madde-3": true },
  last:       { topic: "git-ve-github/dallanma-ve-birlestirme", at: "..." }
}
```

- Tek anahtar: `pdr.progress.v1`.
- **Okurken Zod ile doğrulanır.** Bozuksa sıfırlanır ve kullanıcıya bildirilir — dışarıdan gelen
  her girdi çalışma zamanında doğrulanır, `localStorage` dışarıdır.
- Tik → anında yerel kayıt → ilgili tüm görünümler (yan menü, kategori yüzdesi, ana sayfa halkası)
  **aynı store'dan** güncellenir. Tek yön, tek kaynak.
- `/ayarlar`: JSON dışa aktar, içe aktar, sıfırla.
- **Bilinen maliyet:** yedek alınmadan tarayıcı verisi silinirse ilerleme kaybolur. Bu, seçilen
  yaklaşımın bedeli; ayarlar sayfasında açıkça yazar.
- **Senkrona hazırlık:** tüm okuma/yazma tek arayüzden geçer, konu kimlikleri kalıcı slug'lardır,
  her kaydın `at` damgası vardır (uzak adaptörde konu bazlı son-yazan-kazanır birleştirme).

## 5. Tasarım yönü

**Akılda kalacak tek öğe: ana sayfadaki yol haritası.** Cesaret oraya harcanır; diğer her yüzey
sakin bir okuma zeminidir.

### Palet — gerekçesiyle

Konudan türetildi: bu bir **başvuru kitabı**, bir SaaS paneli değil.

| Karar | Gerekçe |
|---|---|
| Nötrler **sıcak** (hue 75) | Kâğıt hissi, uzun okuma. Soğuk gri panel görünümü verir. |
| Eylemler **soğuk petrol** (hue 215) | Sıcak zeminin karşı ağırlığı; sakin, teknik. |
| İlerleme **kehribar** (hue 72–80) | Sitenin kendine özgü işi tek doygun renkle işaretlenir. |

Elenen alternatifler: mavi-mor + soğuk gri (jenerik panel), siyah + tek asit rengi, krem + serif +
terakota — son ikisi kullanıcının açık yasak listesinde.

Token'lar iki katman: ham ölçek (`--n-*`, `--petrol-*`, `--amber-*`) → semantik
(`--c-text`, `--c-action`, `--c-progress`, …). **Bileşenler yalnız semantik token kullanır.**
Detay: [`src/styles/tokens.css`](src/styles/tokens.css).

- **Koyu tema varsayılan.** Zemin saf siyah değil, metin saf beyaz değil. Derinlik koyuda
  **yüzey açıklığıyla** (4 seviye), açıkta iki katmanlı yumuşak gölgeyle verilir.
- **Odak halkası kehribar**, 2px + 2px offset, link renginden ayrı. Hiçbir yerde `outline: none`.
- **Kontrast göz kararıyla değil hesapla doğrulanır** (gövde ≥4.5:1, UI ≥3:1). Faz 0 kapısı.

### Tipografi

| Rol | Aile | Gerekçe |
|---|---|---|
| Başlık | Literata Variable | Uzun okuma için tasarlanmış değişken serif; "kitap" karakteri |
| Gövde / arayüz | IBM Plex Sans Variable | Teknik dokümantasyon için tasarlanmış, geniş Latin desteği |

Üçüncü aile yok. `latin + latin-ext` altkümesi, self-host, `font-display: swap`.

**Türkçe zorunlu kapı:** `ı İ ğ Ğ ş Ş ç Ç ö Ö ü Ü` her iki fontta gerçek pangramla doğrulanır;
`<html lang="tr">` ayarlıdır (aksi hâlde `text-transform: uppercase` "i"yi "I" yapar, "İ" değil).
Font Türkçe karakterde fallback'e düşüyorsa aday değişir.

Ölçek: 16px taban, 1.25 oran. Satır yüksekliği boyutla ters orantılı (gövde 1.6, başlık 1.15–1.25).
Okuma sütunu **68ch** — Türkçe metin İngilizceden ~%15–25 uzun, 65ch dar kalıyor.

### Boşluk, yerleşim, hareket

4 tabanlı ölçek, ölçek dışı değer yok. Omurga asimetrik: adım menüsü (17rem) + içerik (68ch) +
içindekiler (14rem, ≥1400px). Hiçbir sayfa baştan sona ortalanmış değil.

Hareket: 120ms (tik, hover), 180ms (menü/panel), 260ms (sayfa geçişi). Giren `ease-out`, çıkan
`ease-in`. Yalnız `transform` / `opacity`. `prefers-reduced-motion` açıkken yer değiştirme kalkar,
opaklık kalır. İlerleme halkası **yalnız değer değişince** animasyonlanır — hareketin işi durum
bildirmek, süslemek değil.

### "AI çıktısı" imzalarına karşı alınan kararlar

- Eşit üç sütunlu ikon + kalın başlık + iki satır gri metin kartı **yok** (ana sayfa şema,
  kategori sayfası liste).
- Gradient başlık **yok**.
- Numaralandırma yalnız **gerçekten sıralı** yerlerde — adımlar sıralı, bu yüzden meşru.
- Her bölüm ortalanmış **değil**.
- Tek ikon seti, tek çizgi kalınlığı. Hover'da `scale` yok.

## 6. Erişilebilirlik ve performans

**WCAG 2.2 AA hedef.**

- Klavyeyle tam kullanım, görünür odak, skip link, tek `h1`, landmark'lar.
- Dokunma hedefi ≥24×24 (SC 2.5.8); birincil eylemlerde 44×44. Cümle içindeki bağlantılar
  standardın "inline" istisnasına girer.
- **Anlam yalnız renkle taşınmaz:** tamamlandı = tik + soluk metin, yalnız renk değil.
- `aria-live` ile "12 sonuç bulundu" duyurusu.

**Performans bütçesi:** ilk yükte ≤60 KB JS (gzip), LCP ≤2,5 sn, CLS ≤0,1, INP ≤200 ms.
Bütçe CI'da ölçülür; aşan yapı kırılır.

**Dogfooding:** materyalin kendi 6.9 (a11y test) ve 21.3 (kalite) listeleri bu projenin kabul
kriteri olarak kullanılır. Site, anlattığı kuralları uygular.

## 7. Yazılacak yeni içerik

Kural: her sayfa **"materyal dışı"** rozetiyle yayınlanır, en az bir birincil kaynak linki taşır,
**kod öğretmez**, Product Designer kararlarına bağlanır.

Şablon: *ne olduğu · nerede ve neden kullanılır · hangi problemi çözer · güçlü yanlar · zayıf
yanlar · alternatifler · bir Product Designer'ın bilmesi gerekenler.*

- **Programlama Dilleri (11 adım, yazıldı):** dil seçimi neden ürün kararıdır · JavaScript ·
  TypeScript · Python · Java · C# · Go · PHP · SQL · karşılaştırma tablosu, artı Ruby/Swift/Kotlin/
  Rust için tek bir "kulak aşinalığı" sayfası. Plandaki 14 maddelik liste bu dördünü ayrı sayfalara
  bölüyordu; bir Product Designer için dördü de karar konusu olmadığından tek sayfada toplandı.
- **Veri Yapıları (9 adım):** veri yapısı nedir ve tasarımı neden ilgilendirir · dizi/liste ·
  hash map · küme · yığın ve kuyruk · ağaç · graf · index · hangi yapı hangi arayüz problemini çözer.
- **Algoritmalar (9 adım):** algoritma nedir · karmaşıklık sezgisi · arama · sıralama · filtreleme
  ve sayfalama maliyeti · metin eşleştirme · öneri algoritmaları · önbellek ve tazelik · embedding.
- **Framework'ler (12) ve Kütüphaneler (19):** Bölüm 9'daki kartlardan türetilir, yukarıdaki
  şablona yeniden yapılandırılır. Bölüm 9 materyalin **en hızlı eskiyen** bölümü — her sayfada
  doğrulama damgası ve 🔴 rozeti görünür.

## 8. Bilinen riskler

1. **Materyal güncellenirse** içe aktarıcı yeniden çalıştırılmalı; üretilen dosyalar elle
   düzenlenmemeli. `--check` modu bu kuralı korur.
2. **Yerel ilerleme kaybı riski** — yedekleme `/ayarlar`'da görünür yerde.
3. **İçerik hacmi büyük** (~250 sayfa). Fazlar bu yüzden dikey dilimlenmiş.
4. **Materyaldeki üç bulgu** (siteyi etkilemez, kullanıcının kararına bırakıldı): terim dizininde
   içerikte olmayan **VERBİS** girişi; 4 yazım hatası (`çyıkar` 01, `tekil` 02/14/16, `mercie` 03,
   `göstereleim` 07b); **Base UI'ın "Aralık 2025'te kararlı 1.0" bilgisi güncel değil** — npm'de
   yayınlanmış son sürüm `1.0.0-rc.0` (15 Tem 2026).
