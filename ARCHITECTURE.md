# ARCHITECTURE — SeeYourNextStep

> **Ne** yapıldığı [SPEC.md](SPEC.md)'de. Bu belge **nasıl** yapıldığını ve **neden öyle** yapıldığını
> tutar. Her karar ADR biçiminde: bağlam → alternatifler → karar → ödünleşim.
> Bir kararı değiştirmeden önce ilgili ADR'yi oku; ödünleşim hâlâ geçerli mi?

## Sürümler

npm kayıt defterinden doğrulandı, 16 Eylül 2026:

| Paket | Sürüm | Not |
|---|---|---|
| `astro` | 7.3.2 | node ≥22.12 ister; yerel sürüm v24.16 ✔ |
| `tailwindcss` | 4.3.3 | CSS-first yapılandırma |
| `@astrojs/markdown-remark` | kurulu | Astro 7'de artık varsayılan değil, bkz. ADR-010 |
| `pagefind` | 1.5.2 | Türkçe kökleme + arayüz çevirisi destekli |
| `zod` | 4.6.5 | |
| `nanostores` | 1.5.3 | ~1 KB |

---

## ADR-001 — Site iskeleti: Astro 7, tamamen statik

**Bağlam.** ~250 içerik sayfası, sunucu ihtiyacı yok, ücretsiz statik hosting, yüksek okunabilirlik
ve düşük JS hedefi.

**Alternatifler.**
- *Next.js* — kullanıcının bildiği stack, ama içerik sitesi için App Router önbellek karmaşıklığı ve
  daha yüksek JS tabanı.
- *Starlight* — hazır dokümantasyon teması; hızlı, ama görünümü tanınır ve şablon hissi verir; ana
  sayfa şeması için zaten özel çalışma gerekir.
- *Vite + React SPA* — SEO ve ilk yük kötü, sayfa başına JS gereksiz.

**Karar.** Astro 7, `output: "static"`, `trailingSlash: "always"`. İçerik varsayılan olarak sıfır JS;
etkileşim yalnızca ada (island) olarak.

**Ödünleşim.** Next.js'e göre kullanıcıya daha az tanıdık; React ekosistemindeki hazır bileşenler
doğrudan düşmez (bkz. ADR-003).

---

## ADR-002 — İçerik hattı: tek yönlü içe aktarma + content collections

**Bağlam.** `ProductDesignerMaterials/` kullanıcının kaynağı. Site onu bozmadan kullanmalı, ama
sayfalara bölmeli, doğrulamalı ve zenginleştirmeli.

**Alternatifler.**
- Markdown'ı çalışma anında parse etmek — kırılgan, yavaş.
- Dosyaları elle bölmek — tekrarlanamaz, materyal güncellenince kaybolur.

**Karar.** [`scripts/import-materials.ts`](scripts/import-materials.ts) materyali okur, alt bölümlere
böler, her adım için frontmatter'lı bir içerik dosyası üretir (`src/content/topics/…`) ve gövde
metnini **birebir** taşır. Yeniden çalıştırılabilir. `--check` modu kaynakla çıktının ayrıştığını
yakalar. Şema Zod ile doğrulanır; kart alanları eksikse veya çapraz referans çözülemiyorsa **build
kırılır**.

**Ödünleşim.** Materyal değişirse içe aktarma tekrar çalıştırılmalı. **Üretilen dosyalar elle
düzenlenmez** — zenginleştirmeler ayrı bileşenlerde ve frontmatter'da durur.

---

## ADR-003 — Etkileşim: sade TypeScript adaları + nanostores

**Bağlam.** Etkileşimli yüzeyler az ve basit: tema, tik, ilerleme, arama, quiz. Sayfa başına JS
bütçesi 60 KB.

**Alternatifler.**
- *React adaları* — `react` + `react-dom` ~45 KB gzip; yan menü adası her sayfada olduğu için bu
  maliyet her zaman ödenir. Bütçenin çoğu tek bir liste bileşenine gider.
- *Preact/compat* — küçük ama uyum riski.

**Karar.** Adalar sade TS + `nanostores` ile yazılır. Yerleşik HTML öğeleri tercih edilir:
`<dialog>` (mobil menü), `<details>` (quiz cevabı), `<input type="checkbox">` (tik). Hazır bir React
bileşenine gerçekten ihtiyaç doğarsa `@astrojs/react` tek komutla eklenir ve **yalnız o ada** React
yükler.

**Ödünleşim.** shadcn/ui gibi React tabanlı hazır bileşenler doğrudan yapıştırılamaz; CSS/HTML
tabanlı hazır parçalar `.astro` bileşenine uyarlanır.

---

## ADR-004 — Arama: Pagefind 1.5

**Bağlam.** Tam metin, sunucusuz, Türkçe içerik.

**Doğrulama.** Pagefind'in çok dilli dokümanı Türkçe'yi hem arayüz çevirisi hem **kelime kökleme**
ile destekliyor; özel dil desteği `npx pagefind` ile gelen genişletilmiş sürümde.
Kaynak: <https://pagefind.app/docs/multilingual/>

**Alternatifler.** MiniSearch/Fuse ile elle indeks (Türkçe ek yapısı ve kökleme sorun olur);
Algolia (dış servis, hesap, kota).

**Karar.** Derleme sonrası `pagefind --site dist`. Arama arayüzü Pagefind'in hazır UI'ı **değil**,
kendi bileşenimiz (Pagefind JS API'siyle) — tasarım kontrolü ve erişilebilirlik için.
Kombobox/modal karmaşıklığından kaçınmak için: navbar alanı + `/ara` sayfası; sonuç listesi düz
bağlantılar, sayı `aria-live` ile duyurulur.

**Ödünleşim.** İndeks dosyaları `dist` boyutunu büyütür; ilk aramada küçük bir gecikme olur.

---

## ADR-005 — İlerleme: localStorage + Zod + adaptör arayüzü

**Karar.** Veri modeli ve arayüz SPEC §4'te. Tüm okuma/yazma
[`src/lib/progress.ts`](src/lib/progress.ts) üzerinden geçer; hiçbir bileşen `localStorage`'a
doğrudan dokunmaz.

**Ödünleşim.** Cihazlar arası senkron yok; yedek alınmazsa veri kaybı riski var. Karşılığında:
hesap yok, sunucu yok, gizlilik sorunu yok, maliyet sıfır.

---

## ADR-006 — i18n: Astro yerleşik yönlendirme, TR varsayılan

`defaultLocale: "tr"`, `prefixDefaultLocale: false` → TR `/`, EN `/en/`. Arayüz sözlükleri
`src/i18n/{tr,en}.json`.

**İçerik TR kalır.** EN sayfalarında içerik bloğu `lang="tr"` olarak işaretlenir — ekran okuyucu
doğru telaffuz etsin diye — ve üstte bilgi şeridi görünür.

Pagefind yalnız TR rotalarını indeksler (EN kopyaları `data-pagefind-ignore`); aksi hâlde aynı
içerik iki kez sonuçlanır.

---

## ADR-007 — Tema: `data-theme` + sistem varsayılanı, flaş yok

`<html data-theme="dark|light">`; seçim yoksa `prefers-color-scheme`, o da yoksa koyu.

`<head>` içinde satır içi küçük script ile **ilk boyamadan önce** uygulanır — tema flaşı olmaz. Bu
script `<head>`'de kalmalı; ertelenirse (`defer`, harici dosya, bundle) flaş geri gelir.

Token'lar `:root` ve `[data-theme="light"]` bloklarında; bileşenler yalnız semantik token kullanır.

---

## ADR-008 — Stil: Tailwind CSS 4.3, token'lar `@theme` içinde

**Bağlam.** Ölçek dışı değer yazılmasını **mekanik olarak** engellemek gerekiyor — disiplinle değil.
(Materyalin 5.5'teki tezi.)

**Alternatifler.** Sade CSS + custom property (disiplin gerektirir); CSS Modules (bileşen başına
dosya, ölçek zorlaması yok).

**Karar.** Tailwind 4 CSS-first yapılandırma. [`src/styles/global.css`](src/styles/global.css)
içindeki `@theme` bloğunda önce varsayılan paletler `initial` ile **silinir**, sonra yalnız bizim
ölçeğimiz tanımlanır → `p-[18px]` veya `#3B82F6` yazmak imkânsız hâle gelir.

**Ödünleşim.** Sınıf kalabalığı (`.astro` bileşenleriyle kapsanır); Tailwind'in sürüm geçişlerine
bağımlılık.

---

## ADR-009 — Depo ve yayın: Git + GitHub + Cloudflare Pages

Statik çıktı; her push'ta build. CI kapıları: `astro check`, lint, **içerik doğrulayıcı**, Pagefind
indeksi, axe taraması, performans bütçesi. Her PR'da önizleme dağıtımı.

**Ödünleşim.** Cloudflare hesabı ve depo gerekir; alternatif Netlify veya elle yükleme.

---

## ADR-010 — Markdown işleyici: unified (remark/rehype), Sätteri değil

**Bağlam.** Astro 7 varsayılan Markdown işleyicisini Rust tabanlı **Sätteri**
(`@astrojs/markdown-satteri`) ile değiştirdi. Sätteri'nin eklenti API'si ziyaretçi tarzı
(`hastPlugins` / `mdastPlugins`); klasik `rehypePlugins` yapılandırması artık kabul edilmiyor.

**Bağımlılık.** Üç özel eklentimiz var:
[`rehype-term-cards`](src/plugins/rehype-term-cards.ts) (materyaldeki `### Terim` + madde listesini
`<dl>` tabanlı terim kartına dönüştürür),
[`rehype-cross-refs`](src/plugins/rehype-cross-refs.ts) (`(15.2)` ve `(Bölüm 11)` metinlerini
bağlantıya çevirir) ve
[`rehype-table-scroll`](src/plugins/rehype-table-scroll.ts) (38 tabloyu kendi yatay kaydırma
kabına sarar).

Eşleştirme kuralının kendisi [`src/lib/section-refs.ts`](src/lib/section-refs.ts)'te durur: markdown
hattı, quiz render'ı ve `npm run validate` aynı çözücüyü çağırır. Kuralı kopyalamak Faz 1'de iki kez
hataya yol açtı — quiz sayfalarında referanslar hiç bağlanmadı, doğrulayıcı da siteyi yanlış
raporladı. Kuralın tek kopyası var.

**Karar.** `@astrojs/markdown-remark` kurulur ve `astro.config.ts` içinde
`markdown: { processor: unified({ rehypePlugins: [...] }) }` kullanılır.

**Ödünleşim.** Sätteri'nin hız kazancından vazgeçiyoruz. Build süresi bu ölçekte sorun değil;
eklentileri ziyaretçi API'sine taşımanın maliyeti daha yüksek. Build yavaşlarsa bu karar yeniden
değerlendirilir.

---

## ADR-011 — Render önbelleği elle temizlenir

**Bağlam ve neden bu bir ADR.** Astro'nun content-layer önbelleği **iki yerde** duruyor: `.astro/`
ve `node_modules/.astro/data-store.json`. İkincisi render edilmiş markdown HTML'ini tutar. Yalnız
`.astro/` silinirse eklentiler **yeniden çalışmaz** ve değişiklik sessizce görünmez — hata da
vermez. Bu tuzak bir kez saatler kaybettirdi.

**Karar.** [`scripts/clean.ts`](scripts/clean.ts) her iki konumu da siler.
`npm run build:fresh` = temizle + build. **Bir markdown eklentisine dokunduysan `build:fresh`
çalıştır**, yoksa doğrulaman yalancıdır.

---

## ADR-012 — Mobil birincil: alt gezinme ve çevrimdışı okuma

**Bağlam.** SPEC §1, PWA ve çevrimdışını "Yok — bilinçli" listesine koymuştu. Kullanıcı sonradan
siteyi ağırlıklı olarak telefondan kullanacağını söyledi; bu, o kararın dayandığı varsayımı
değiştirdi. Metroda okunan bir başvuru sitesinin ağ beklemesi, masaüstünde olmayan bir maliyettir.

**Karar.**

- **Alt gezinme çubuğu** (`src/components/MobileNav.astro`), yalnız <48rem. Üstteki menü o
  genişlikte gizlenir — iki menü aynı anda durursa hangisinin doğru olduğu belirsizleşir.
- **Service worker** (`public/sw.js`): sayfalarda stale-while-revalidate, **hash'li** varlıklarda
  cache-first, hash'siz her şeyde ağ-öncelikli. Bir kez açılan sayfa ağsız açılır; hiç açılmamış
  sayfa `/offline/` ile dürüstçe başarısız olur — sonsuz bekleme yok.
  Kalıcı önbelleğe yalnız adı içeriğiyle değişen dosya girer (`/_astro/`, Pagefind'in `.pf_index`
  parçaları). `pagefind-entry.json` hash'siz olduğu için bu kuralın dışında: bayat bir kopyası artık
  var olmayan indeks parçalarını işaret ediyor ve arama anlamsız sonuç döndürüyordu ("Social" →
  "sona"). Önbellek **şekli** değişince `VERSION` artırılır, her dağıtımda değil.
- **Kayıt yalnız üretimde** (`src/layouts/BaseLayout.astro`, `import.meta.env.PROD`). Geliştirmede
  worker kaydedilmez; üstelik önceki oturumlardan kalmış bir worker ve önbellekleri **etkin olarak
  sökülür** — kaydetmemek, zaten kurulu olanı kaldırmaz. Gerekçe aşağıda.
- **Web app manifest**: ana ekrana eklenince tam ekran açılır.
- **Okuma ilerleme çubuğu** ve **adımlar arası kaydırma**: telefonda kaydırma çubuğu ve klavye
  kısayolu olmadığı için ikisi de yalnız dokunmatikte anlamlı, ≥48rem'de kapalı.

**Neden yalnız üretim.** Geliştirmede worker, bir önceki derlemeyi stale-while-revalidate ile
sunuyordu: düzeltme yanıtın içinde geliyor, ekranda görünmüyordu. Bu, çalışmayan bir düzeltmeden
ayırt edilemez — bu oturumda aynı hatayı üç kez "düzelttim, olmadı" diye kovaladım. Ağ doğru CSS'i
veriyordu, DOM eskisini taşıyordu. Çevrimdışı okuma telefonda bir kazanç; geliştirme makinesinde
hiçbir şey kazandırmıyor, yalnız teşhisi bozuyor.

**Ödünleşim.** Service worker bir önbellek katmanıdır ve yanlış sürüm gösterme riski getirir. Bunu
`VERSION` anahtarıyla ve sayfalarda ağı her zaman arka planda deneyerek sınırlıyoruz, ama bir
kullanıcının bir sonraki ziyarete kadar eski bir sayfa görmesi mümkün. Statik bir öğrenme sitesinde
bu, ağsız kalmaktan küçük bir sorun.

Üretim-yalnız kaydın kendi bedeli: **çevrimdışı davranış artık `astro dev` ile denenemez.** Sınamak
için `npm run build && npm run preview` gerekiyor — yani çevrimdışı bir hata, ancak birinin üretim
derlemesine bakmayı akıl etmesiyle yakalanır. Ayrıca söküm kodu geliştirmede her sayfa yükünde
çalışır; bedeli iki API çağrısı, ama `public/sw.js` düzenlenirken bunun farkında olmak gerekir.

İkinci ödünleşim değişmedi: hâlâ iki ayrı önbellek var (Astro'nun derleme önbelleği ve tarayıcıdaki
service worker). Artık yalnız üretimde çakışıyorlar.

---

### ADR-012 eki — "Çevrimdışı için indir" (Faz D)

Önceden yalnız açılmış sayfalar çevrimdışı açılıyordu. Şimdi `npm run build` son adımda
[`scripts/offline-manifest.ts`](scripts/offline-manifest.ts) ile `dist/offline-manifest.json` yazar
(Pagefind'den **sonra**: indeks parçalarının adları ancak o zaman belli). Ayarlar'daki "Tüm siteyi indir" ve
kategori sayfasındaki "Bu bölümü çevrimdışı indir" düğmesi listeyi service worker'a yollar; worker 6'lı
paralellikle çeker, ilerlemeyi geri bildirir. `VERSION` → `pdr-v5`.

Canlı denemede (sunucu kapatılıp) yakalanan iki hata, ikisi de yalnız **toplu indirilmiş, elle açılmamış**
dosyalarda görünüyordu ve bu yüzden dev'de/elle gezerek asla çıkmazdı:

- Sunucu `Vary: Origin` döner; toplu `fetch(url)` Origin başlıksız kaydedilir, modül betiği ve yazı tipi ise
  Origin'li ister → önbellek ıska, sayfa betiksiz ve fontsuz açılırdı. Çözüm: `ignoreVary`.
- Pagefind dizin dosyalarını `?ts=…` sorgusuyla ister → ıska → arama "Aranıyor…"da takılırdı. Çözüm:
  `ignoreSearch`.

Düğme, hangi sürümün indirildiğini `localStorage`'da `build` karmasıyla tutar; yeni derlemede "Yeni sürüm var"
der. `navigator.storage.persist()` istenir (en iyi çaba). Okuma konumu (`pdr.scroll.v1`) ilerleme modelinden
ayrıdır: yedeğe/Zod şemasına/`updatedAt`'a girmez, çünkü ders düzenlenince eskir.

**Ödünleşim.** İndirme ~19 MB (sıkıştırılmamış üst sınır). Hepsini indirmek mobil veriyi harcar, bu yüzden
otomatik değil, kullanıcı tetikler. Yeni derlemede kullanıcı elle güncellemezse eski kopyayı görür; sayfalar yine
arka planda tazelenir.

---

## ADR-014 — Ana sayfa şeması: 64rem'de mobil rotadan farklı bir yerleşime geçer

**Bağlam.** `RoadmapRoute.astro` tek bir düzen kuralı kullanıyordu: kartlar dikey bantlarda,
genişlik arttıkça 2 sonra 4 sütuna bölünen bir ızgara. Masaüstünde bu, geniş ekranı doldurmuyordu —
aynı belge düzeni büyütülmüş hâliydi. Kullanıcı masaüstü için **ayrı bir şema** istedi: aynı rota ve
veri, ama gerçek bir haritaya benzeyen, dallanan/yatay akan bir görsel.

**Karar.** 64rem ve üzeri için `RoadmapPath.astro`: 23 kategoriyi dört sütunluk satırlara bölüp
satır yönünü sırayla ters çeviren (boustrophedon / "öküz sabanı" deseni) tek bir yılankavi çizgi.
Yön tersleme, art arda gelen iki satırın birleşme kenarının **hep aynı fiziksel tarafta** kalmasını
sağlıyor — bu yüzden dönüş bağlayıcısı eğri değil, dümdüz bir dikey çizgi (bkz. `RoadmapPath.astro`
frontmatter yorumu). Alan adları tam genişlik başlık satırı değil, o alanın ilk istasyonuna iliştirilmiş
bir `<h2>` — bir başlık satırı yolu yeniden segmentlere bölerdi.

İki bileşen de her yüklemede aynı anda DOM'da durur; hangisinin görünür olduğunu `index.astro`'daki
tek bir CSS medya sorgusu belirler. Yeniden render yok, yani pencere yeniden boyutlandırılırken
"hiçbiri görünmüyor" ânı da yok. İkisi de aynı `[data-topic-ids]` / `[data-area-ids]` öznitelik
adlarını taşıdığı için `RoadmapRoute.astro`'nun tek `<script>`'i ikisini de günceller —
`RoadmapPath.astro`'nun kendi script'i yok.

**Paylaşılan veri.** Rota sırası ve adım numarası artık `~/data/categories.ts`'te
(`ROUTE_ORDER`, `ROUTE_POSITION`) — önceden yalnız `RoadmapRoute.astro` içinde hesaplanıyordu. İki
görünüm aynı hesaba ihtiyaç duyunca kopyalamak yerine taşıdık; kopyalanmış bir kural, ikisinden
biri güncellenip diğeri unutulduğunda sessizce ayrışır (bu projede `SECTION_REF_PATTERN`'de bir kez
başa gelmişti).

**Bulunan bir hata, düzeltildi.** İki şema aynı anda DOM'da durunca, ana sayfanın üstündeki genel
sayaç (`index.astro`'nun kendi `<script>`'i) her `[data-topic-ids]` elemanını **iki kez** saydı —
tamamlanan konu sayısı gerçek değerin iki katı görünüyordu. `Set` ile tekilleştirildi.

**Ödünleşim.** Satır genişliği (4 sütun) derleme anında sabitleniyor; `repeat(auto-fill, …)` gibi
tarayıcının satır üyeliğine karar verdiği bir CSS ızgarası kullanılmadı, çünkü dönüş bağlayıcısının
"aynı kenarda buluşma" garantisi satır sınırlarının build-time'da bilinmesine dayanıyor. Sonuç:
64rem–80rem arası biraz sıkışık, 100rem üstü biraz seyrek — ama `.home`'un kendi `max-width: 82rem`
sınırı bunu zaten yumuşatıyor.

## ADR-015 — Ders katmanı: terim kartlarının yerine elle yazılmış dersler

**Bağlam.** Kartlar sözlük olarak değerli ama bir konuyu *öğretmiyor*. Kullanıcı her adımın ders gibi
anlatılmasını, terimlerin metin içinde hover/dokunma ile açıklanmasını istedi.

**Karar.** `src/lessons/<kategori>/<adim-slug>.mdx` (`@astrojs/mdx`). `src/content/` üretilmiş ve
korumalı olduğu için dersler dışarıda durur; dosya adı adımın slug'ıyla eşleşir, o adımın kart görünümünün
yerine geçer — slug, URL ve ilerleme anahtarı değişmez. Ders yoksa eski kart görünümü çalışmaya devam eder.
`rehype-term-refs` ders dosyalarında belge kapsamlı çalışır (terim başına ilk geçiş);
`src/data/term-aliases.json` Türkçe yüzeyleri ("istemci") ve yok sayılacak sıradan kelimeleri tutar;
`term-lookup.json` içe aktarıcıdan gelir ve kartların dışarıda bıraktığı kısa terimleri (URL, DNS) içerir —
akronimler yalnız tam yazımla eşleşir. Dokunmatikte tanım alttan açılan sayfa olarak görünür.
`validate` her dersin var olan bir adıma karşılık geldiğini ve kaynak taşıdığını denetler.

**Ödünleşim.** Aynı bilgi iki yerde: kart (sözlük) ve ders (anlatım). Materyal güncellenirse ders elle
gözden geçirilmeli. Sözlük bağlantıları kart çıpasına gider; derste çıpa yok, sayfa başına iner.

## ADR-016 — Ana menü: sol kenarda açılan çizgi sütunu (≥64rem)

**Bağlam.** Kullanıcı Framer "Table of Content" bileşenini ana menü olarak istedi: kapalıyken kısa dikey
çizgiler, üzerine gelince etiketler açılıyor, üzerinde durulan çizgi uzuyor, komşuları yarı uzuyor.

**Karar.** Bileşen React + framer-motion; projede React yok (ADR-003). Aynı davranış
[`SiteNav.astro`](src/components/SiteNav.astro) içinde saf HTML/CSS: `:hover` / `:focus-within` ile açılır,
komşu çizgiler `:has()` ile, yay hissi CSS `linear()` easing ile (~400 ms). Betik yok. Geist Mono
eklenmedi (üçüncü yazı tipi ailesi yok, SPEC §5): büyük harf Plex Sans, harf aralıklı. Açılınca etiketlerin
altına yarı saydam olmayan bir panel gelir; kapalı hâlde mevcut sayfanın çizgisi uzun ve eylem renginde.

≥64rem: sol sütun; üst bardaki bağlantılar kalkar, `main` sola 2rem boşluk alır. 48–64rem: üst bar
bağlantıları, <48rem: alt gezinme çubuğu (ADR-012) — dokunmatikte üzerine gelme yok, bu yüzden sütun
yalnız geniş ekranda.

**Doğrulama.** Kontrast hesapla: çizgi/arka plan koyu 4,78 açık 3,87 (UI ≥3); etiket/panel koyu 5,63
açık 9,36 (metin ≥4,5). İlk denemede etiket `--c-text-muted` idi ve koyu temada 4,34 çıktı → ikincil
metin rengine alındı.

**Ödünleşim.** Etiketler hover/odakta görünür; keşfedilebilirlik için kapalı hâlde yalnız çizgiler var.
Dört bağlantı olduğu için kabul edildi; menü büyürse etiketlerin sürekli görünmesi yeniden düşünülmeli.

## ADR-019 — Yazılmış adımlar `src/authored/` altında; kimlikler donmuş bir listede

**Bağlam.** Materyalde olmayan üç kategori (Programlama Dilleri, Veri Yapıları, Algoritmalar) adım
dosyalarını `src/content/topics/` içinde, `origin: "new"` ile tutuyordu. İçe aktarıcı yalnız kendi
kategorilerinin klasörlerini silerek onları koruyordu. Bu iki sorun yaratıyordu: CLAUDE.md'nin "
`src/content/` üretilmiştir" kuralı harfiyen doğru değildi, ve içe aktarıcıya bu adlardan biriyle bir
kural eklenirse elle yazılmış adımlar sessizce silinirdi. Çok rollü plan ~100 yeni adım getiriyor; bu
istisna onların hepsini aynı riske sokardı.

**Karar.**
- Elle yazılan adımlar `src/authored/topics/<kategori>/NN-slug.md` altında. `topics` collection iki
  klasörü birlikte yükler ([`src/data/topic-roots.ts`](src/data/topic-roots.ts), tek kaynak).
  Collection kimliği klasör önekini taşır, böylece iki klasör çakışamaz; URL ve ilerleme anahtarı
  kimlikten değil, kategori + dosya adından gelir ([`src/lib/topic-id.ts`](src/lib/topic-id.ts)).
- İçe aktarıcı `src/content/{topics,categories,quizzes}` klasörlerinin **tamamını** yeniden yazar.
  `import:check` hem ayrışmayı hem de içe aktarıcının üretmediği fazla dosyayı yakalar; satır
  sonlarını karşılaştırmaz (Windows'ta `core.autocrlf` her dosyayı "ayrışmış" gösteriyordu).
- `validate` her klasörde yalnız kendi `origin` değerine izin verir ve aynı kimliği iki dosyada
  bulursa kırılır.
- **Donmuş kimlikler:** [`src/data/frozen-topic-ids.json`](src/data/frozen-topic-ids.json) yalnız
  büyüyen bir liste. İçindeki bir kimlik sitede yoksa `validate` kırılır; listede olmayan yeni bir
  kimlik de kırar, ta ki `npm run validate -- --update-frozen` ile bilerek dondurulana kadar.
  Slug'ın donma anı böylece açık bir adım olur.
- Aynı turda eklenen iki sessiz hata kapısı: rezerve URL kökleri (`RESERVED_ROOTS`,
  `src/data/categories.ts`; hem kategori slug'ı hem `src/pages` kökleri denetlenir) ve harita
  görselleri (her kategorinin gezegeni, her gezegenin paleti ve deseni, her alanın `--hue-*` /
  `--c-area-*` token'ı ve alan tonları arasında en az 25°). İkisi de çalışma anında hata vermeden
  bozulurdu: bilinmeyen slug Ay'a, bilinmeyen alan boş bir `var()`'a düşüyordu.

**Taşımanın kanıtı.** `git mv` yalnız yeniden adlandırma gösterdi; 283 HTML dosyasının sha256 özeti
taşımadan önce ve sonra birebir aynı.

**Ödünleşim.** Collection kimlikleri artık `content/topics/…` ve `authored/topics/…` önekli; kimliği
doğrudan URL gibi kullanan bir kod yazılırsa yanlış olur — her zaman `topicId()` kullanılır.

---

## ADR-017 — Roller: tek bilgi tabanı üzerinde yollar

**Bağlam.** Site Product Designer için kurulmuştu. Kullanıcı Product Manager, Project Manager, Product
Owner, Scrum Master, Business Analyst ve UX Researcher için de yol istedi; konular ortak, öncelikler
farklı.

**Alternatifler.** Rol başına ayrı bölüm (`/urun-yoneticisi/...`): ortak konular kopyalanır, ilerleme
bölünür. Tek harita + yalnız etiket: rol kendi sırasını göremez.

**Karar.**
- Ders bir kez yazılır. Rol bir **yoldur**: [`src/data/roles.ts`](src/data/roles.ts) içinde sıralı
  kategori listesi, her durak için bir öncelik (temel / önerilen / isteğe bağlı) ve gerekirse konu
  bazlı istisna (`topics`, `"atla"` dahil). Yolda olmayan kategori "yol dışı"dır ama açıktır.
- Yollar build'de [`src/lib/role-path.ts`](src/lib/role-path.ts) ile gerçek adımlara karşı derlenir;
  aynı derleyici `validate` ve testlerde çalışır. Henüz adımı olmayan kategori durak olarak kalır
  ("hazırlanıyor" gezegeni) ama adım vermez.
- Tarayıcıya yalnız sıkıştırılmış biçim gider ([`role-payload.ts`](src/lib/role-payload.ts): id'ler
  bir kez, her yol indeks listesi + harf başına öncelik). Sekiz yolun tamamı ana sayfada ~16 KB ham, 3,8 KB gzip; bütçede "veri" sayılır.
- **Sıradaki adımın** ([`next-step.ts`](src/lib/next-step.ts)): son açılan ders bitmemişse o; değilse
  oradan ileri, sonra başa dönerek ilk bitmemiş temel/önerilen adım; onlar bitince isteğe bağlı. Rol
  yüzdesi temel + önerilen üzerinden; isteğe bağlı ayrı sayılır.
- İlerleme ortak ve **değişmedi**: kimlik `kategori/slug`, rol değişince `pdr.progress.v1` bayt bayt
  aynı kalır (tarayıcıda sınandı). Product Designer yolu eski 23 kategorinin sırasını korur; `validate`
  bunu denetler.
- Harita: gezegenler yerinden oynamaz. Rol yalnız çizginin sırasını, durak rozetini ("3 · Temel") ve
  yol dışı gezegenin görünüşünü (küçük, soluk disk, kesikli yörünge; ad kontrastı korunur) değiştirir.
  DOM'u yeniden sıralamak ya da CSS `order` odak sırasını görselden ayırırdı.

**Ödünleşim.** Rozetler her rol için statik render edilir (31 gezegende ~150 küçük span). Yol verisi
elle yazılmış bir öncelik yargısıdır; derslerin v2 yazımında konu bazlı istisnalar gözden geçirilir.

## ADR-018 — Rol ilk boyamadan önce: `html[data-role]` + üretilmiş CSS

**Karar.** Rol ayrı bir tercih anahtarında (`pdr.role.v1`), ilerleme şemasında değil: şema v1 kalır,
`updatedAt` yalnız ilerleme değişince oynar, head betiği JSON ayrıştırmadan okur. BaseLayout'taki
satır içi betik `?rol=` → `localStorage` sırasıyla rolü bulur ve `html[data-role]` yazar; ilerlemesi
olup rolü olmayan okur Product Designer'a geçirilir ve ana sayfada bir kez not görür
(`pdr.role.auto`). Role bağlı her parça statik render edilir ve `data-for-role="…"` taşır;
[`role-css.ts`](src/lib/role-css.ts) üretilen kısa bir `<style>` ile diğerlerini gizler. Rol yoksa —
JS kapalıyken de — durum `none`'dır: harita Keşif modunda tam listedir, seçici gizlenir.

**Mercekler** aynı mekanizmayı kullanır. `<Lenses>` slotunu iki kez basar: açıkta yalnız seçili rolün
`<Lens>`'i, "Diğer roller" `<details>`'ı içinde öbürleri görünür; hangisinin nerede görüneceğini yine
üretilmiş CSS söyler, HTML dizgisi işlenmez. İkinci kopya Pagefind'den hariçtir. Terim eklentisi
(`rehype-term-refs`) önce düzyazıyı işaretler, mercekler kalanı alır; yoksa bir terimin tek ipucu
katlanmış bir merceğe düşebilirdi. 232 "Tasarımcı olarak sen" kutusu
[`scripts/codemods/callout-to-lens.ts`](scripts/codemods/callout-to-lens.ts) ile mekanik olarak
Product Designer merceğine çevrildi; derlenmiş metin öncesiyle birebir aynı (span boşlukları hariç).

Yedek dosyası rolü `prefs.role` olarak taşır ([`backup.ts`](src/lib/backup.ts)). Zod bilinmeyen
anahtarı attığı için eski build yeni yedeği, yeni build eski yedeği okur (test edildi).

**Ödünleşim.** Betik satır içi ve senkron kalmak zorunda (ADR-007 ile aynı neden). Her rol durumu
HTML'de durduğu için sayfa biraz büyür; bütçe ve DOM boyutu izlenir.

## ADR-020 — Medya: veri güdümlü diyagram ilkelleri, demolar, tema içi illüstrasyonlar

**Bağlam.** 234 dersin 179'unda diyagram yoktu ve her şekil tek kullanımlık, elle çizilmiş bir
bileşendi. Yüzlerce derse görsel eklemek için her şekli baştan çizmek ölçeklenmez.

**Karar.**
- **11 ilkel** ([`src/components/diagrams/primitives/`](src/components/diagrams/primitives)):
  Matrix2x2, Cycle, Timeline, Network, Tree, Swimlane, Layers, Venn, Spectrum, Chart, Heatmap. Veri
  props ile verilir; hepsi `DiagramFigure` ve `dg-*` sözlüğünü kullanır. Telefon için üç yol: 360
  genişliğinde dar düzen (`dg-narrow`), ya da kendi genişliğinde kalıp yana kayma (`--dg-min`) ve
  görünür "yana kaydır" ipucu. Veri taşıyan ilkeller altlarında JS'siz bir "Tablo olarak göster"
  verir. Etiketler build'de sarılır; sığmayan etiket build'i kırar ve kendini adlandırır (Faz 3'te
  iki kez yakaladı).
- **Demolar** ([`src/components/demos/`](src/components/demos)): `DemoFrame` içinde, mantığı
  `src/lib/demos/*.ts` altında test edilen saf fonksiyonlarda. Sunucuda çözülmüş örnekle render
  edilir; JS'siz de öğretir. Kartlar yeniden dizilmez (görsel sıra = odak sırası). RICE demosu 574
  bayt gzip. Faz 4'te üç demo daha: belirsizlik konisi (737 B), kritik yol (1.093 B, `Network`
  ilkeliyle aynı `criticalPath` fonksiyonunu kullanır) ve kazanılmış değer (786 B). Duyurular
  (`aria-live`) yalnız sonuç değişince yapılır, her tuş vuruşunda değil. Faz 5'te Monte Carlo öngörüsü
  (1.008 B; tohumlu üreteç, sunucu ve betik aynı sayıları verir). Betiğin oluşturduğu öğeler Astro'nun
  kapsamlı CSS özniteliğini taşımaz; onların kuralları `:global()` ile kök sınıfın altına yazılır
  (`.mc :global(.mc__bar)`). Faz 5'te ilk etkileşimden sonra stilsiz kalan çubuklarla yakalandı.
- **İllüstrasyonlar** (`src/assets/illustrations/*.svg`): yalnız `il-*` sınıfları; renkler
  `--c-illu-*` token'larından. `<Illustration>` satır içi gömer (public/ değil: SW hash'siz
  dosyayı sonsuza dek tutar). `validate` ham renk, öznitelik rengi, betik/dış referans, viewBox ve 12
  KB sınırını denetler. Planlanan svgo hattı kurulmadı: elle yazılan SVG'ler zaten küçük ve yeni
  bağımlılık gerekmedi.
- Kontrast hesapla: ısı haritasının beş seviyesi 6,77–14,85:1 (seviye 3–4'te koyu mürekkep).

**Ödünleşim.** Şekiller kalıplara sığar; bir ders gerçekten özel bir şekil isterse tek kullanımlık
bileşen yazılır (eski yaklaşım). Genişlik tahmini bir ortalama glif genişliğine dayanır; çok geniş
harflerle dolu bir etiket marjı aşabilir.

## ADR-021 — Araçlar: şablonlar tek veriden sayfa, Markdown ve CSV üretir

**Karar.** `/araclar/` hub'ı ve `/araclar/<slug>/` sayfaları `templates` koleksiyonundan
(`src/tools/sablonlar/<slug>/index.mdx`) üretilir. "Belge" şablonunun yanında `ornek.md` ve
`bos.md`; "tablo" şablonunun sütunları ve örnek satırları frontmatter'da — sayfa tablosu, Markdown ve
CSV aynı veriden çıkar ([`src/lib/templates.ts`](src/lib/templates.ts)). İndirmeler statik dosya:
`[name].csv.ts` / `[name].md.ts` (uzantı dosya adında, yoksa `trailingSlash: "always"` sona `/`
ekliyor). CSV UTF-8 BOM + `;` + CRLF ([`src/lib/csv.ts`](src/lib/csv.ts)): Türkçe Excel ancak böyle
"ş"yi doğru okur. Dersler `<Tool slug>` ile bağlanır; bilinmeyen slug build'i kırar. Telefonda alt
çubukta Sözlük'ün yerini Araçlar aldı; Sözlük sol menüde ve Araçlar'dan erişilir.

Yazılmış quizler (`src/authored/quizzes`, `overrides` ile) ve yazılmış terimler
(`src/authored/terms`, sıradan kelimeler için `inline: false`) aynı fazda geldi
([`src/lib/quizzes.ts`](src/lib/quizzes.ts), [`src/lib/authored-terms.ts`](src/lib/authored-terms.ts)).

## ADR-022 — Ders standardı v2 ölçülür: `npm run lint:lessons`

**Karar.** Standart [`docs/icerik/ders-standardi.md`](docs/icerik/ders-standardi.md)'de, ortak vaka
[`docs/icerik/vaka.md`](docs/icerik/vaka.md)'de. Denetleyici satır tabanlıdır (yeni MDX bağımlılığı
yok): yapı, görsel, mercek kapsamı (rol yollarından hesaplanır), ≥3 soru, süre ve Türkçe okunabilirlik
(Ateşman 1997; hece = ünlü sayısı; [`src/lib/readability.ts`](src/lib/readability.ts), testli).
Yalnız `standard: 2` taşıyan dersler hata verir; diğerleri uyarı ve ortalama puanla görünür, CI
"v2: N/M" yazar. Süre, ders hızında (dakikada ~130 kelime) hesaplanır; 180 öğrenme içeriği için
fazla hızlıydı. Liste maddeleri ayrı cümle sayılır.

Pilot: üç ders v2'ye geçti (Ateşman 74,3 · 75,3 · 76,4; v1 ortalaması 64,3).

---

```
ProductDesignerRoadmap/
├─ ProductDesignerMaterials/     kaynak — SALT OKUNUR, dokunulmaz
├─ SPEC.md  ARCHITECTURE.md  CLAUDE.md
├─ scripts/
│  ├─ import-materials.ts        içe aktarıcı (+ --check, --only=NN)
│  ├─ validate-content.ts        içerik kapısı (+ --update-frozen)
│  └─ clean.ts                   iki önbellek konumunu da siler (ADR-011)
├─ tests/                        saklama sözleşmesi olan kurallar (slug, kimlik, referans)
├─ src/
│  ├─ content/                   topics | categories | quizzes — ÜRETİLMİŞ, elle düzenlenmez
│  ├─ authored/topics/           site için yazılan adımlar (ADR-019)
│  ├─ lessons/                   elle yazılmış dersler, MDX (ADR-015)
│  ├─ content.config.ts          Zod şemaları
│  ├─ data/
│  │  ├─ categories.ts           sıra, slug, alan, rezerve kökler — tek doğru kaynak
│  │  ├─ topic-roots.ts          adım klasörleri ve izin verilen origin
│  │  ├─ frozen-topic-ids.json   yayındaki adım kimlikleri, yalnız büyür
│  │  └─ generated/              section-map.json, stats.json
│  ├─ plugins/                   rehype-term-cards, rehype-cross-refs
│  ├─ lib/                       progress, theme, content, inline-markdown
│  ├─ components/                .astro bileşenler + adalar
│  ├─ styles/                    tokens.css · global.css · content.css
│  ├─ layouts/
│  └─ pages/
└─ public/
```

## Komutlar

| Komut | Ne yapar |
|---|---|
| `npm run dev` | Geliştirme sunucusu (:4321) |
| `npm run build` | Statik derleme |
| `npm run build:fresh` | Önbellekleri temizle + derle — **eklenti değişikliklerinde zorunlu** |
| `npm run check` | `astro check` (tip kontrolü) |
| `npm test` | Birim testleri (`tsx --test`, `tests/`) |
| `npm run clean` | Önbellekleri temizle |
| `npm run import` | Materyali içeri aktar |
| `npm run import:check` | Kaynak ile üretilmiş içerik ayrışmış mı, fazla dosya var mı |
| `npm run validate` | İçerik kapısı: sayımlar, kart alanları, çapraz referanslar, donmuş kimlikler, rezerve kökler, gezegen ve alan token'ları |
| `npm run validate -- --update-frozen` | Yeni yayınlanan adımların kimliklerini dondurur |
| `npm run budget` | Sayfa başına JS / CSS / HTML / veri bütçesi (derlemeden sonra) |
