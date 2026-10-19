# Proje kuralları — SeeYourNextStep

> Global `~/.claude/CLAUDE.md` geçerli. Bu dosya onu **ezmez, üzerine ekler**; çelişki varsa bu
> dosya kazanır. Burada yalnız bu projeye özgü, koddan veya git geçmişinden okunamayan kurallar var.
>
> Ne yapıldığı: [SPEC.md](SPEC.md) · Nasıl ve neden: [ARCHITECTURE.md](ARCHITECTURE.md)

## Dokunulmazlar — IMPORTANT

**1. `ProductDesignerMaterials/` salt okunur.** Kullanıcının kaynağı. Yazım hatası, eksik bilgi veya
yanlış iddia görürsen **düzeltme** — tur raporunda bildir. Bugüne kadar bildirilenler SPEC §8'de.

**2. `src/content/` üretilmiştir, elle düzenlenmez.** `scripts/import-materials.ts` çıktısı. Bir
konu sayfasını değiştirmek istiyorsan içe aktarıcıyı değiştir ve yeniden çalıştır. Elle düzenleme
bir sonraki içe aktarmada sessizce kaybolur; `npm run import:check` bu ayrışmayı yakalar. Site için
yazılan adımlar `src/authored/topics/` altında durur (`origin: "new"`); içe aktarıcı oraya dokunmaz,
`src/content/` içinde kendi üretmediği her dosyayı da hata sayar (ADR-019).

**3. Slug'lar donmuştur.** İlerleme kayıtları `kategori/adim-slug` anahtarına bağlı. Slug değişirse
kullanıcının o adımdaki ilerlemesi kaybolur. Slug değiştirmen gerekiyorsa **önce sor**. Yayındaki her
kimlik `src/data/frozen-topic-ids.json` içinde; biri kaybolursa `npm run validate` kırılır. Yeni adım
yayına girerken `npm run validate -- --update-frozen` ile dondurulur — liste yalnız büyür. **Rol
kimlikleri de donmuştur** (`src/data/role-ids.ts`): `pdr.role.v1` ve paylaşılan `?rol=` linkleri
onlara bağlı. `pdr.*` saklama anahtarları yeni adla bile değişmez — tarihsel ad alanıdır.

**4. Materyalde olmayan hiçbir bilgi kaynaksız yayınlanmaz.** Yeni içerik "materyal dışı" rozeti ve
en az bir birincil kaynak linki taşır. Şablon SPEC §7'de.

## Faz protokolü — IMPORTANT

Plan yedi faza bölünmüş ve her faz bir **dikey dilim**: sonunda çalışan, gezilebilir bir şey olur.

- **Bir sonraki faza onaysız geçme.** Faz bitti demek için bitti kanıtını göstermen gerekir.
- Fazlar arası `/clear` önerilir.
- Faz kapıları:
  - **Kontrast hesapla doğrulanır**, göz kararıyla değil. Gövde ≥4.5:1, UI ≥3:1.
  - **Türkçe glif kontrolü**: `ı İ ğ Ğ ş Ş ç Ç ö Ö ü Ü` her iki fontta gerçek metinde.
  - 375 / 768 / 1280 ekran görüntüsü + klavye turu.

## Teknik tuzaklar — bir kez düşüldü

**Render önbelleği iki yerde.** `.astro/` **ve** `node_modules/.astro/data-store.json`. Markdown
eklentilerine (`src/plugins/`) dokunduysan `npm run build:fresh` çalıştır. Yalnız `.astro/` silmek
yetmez: eklenti yeniden çalışmaz, çıktı eski kalır, **hata da vermez**. (ADR-011)

**`build:fresh`'i dev sunucusu açıkken çalıştırma.** Temizlik, çalışan sunucunun içerik deposunu
altından siler; sunucu ayakta kalır ama **her rota 404 döner**. Belirti: `dist/` içinde sayfa var,
tarayıcıda yok. Çözüm: dev sunucusunu yeniden başlat. Sıra: sunucuyu durdur → `build:fresh` → başlat.

**Service worker yalnız hash'li dosyayı kalıcı önbelleğe alır.** `/_astro/` ve Pagefind'in
`.pf_index` / `.pf_fragment` parçaları adlarını içerikleriyle değiştirir; `pagefind-entry.json`
değiştirmez. Onu cache-first almak, artık var olmayan parçaları işaret eden bayat bir manifest
bırakır ve arama anlamsız sonuç döndürür (Social → sona). Hash'siz her dosya ağ-öncelikli.
Önbellek şekli değişince `public/sw.js` içindeki `VERSION` artırılır; eski anahtarlar süpürülür.

**Türkçe slugify sırası.** Önce `toLocaleLowerCase("tr")`, **sonra** NFD + birleşen işaretleri at,
**sonra** harf eşlemesi. Ters sırada "Issue" → "ssue" oluyor, çünkü `İ` → `I` eşlemesi küçültmeden
önce çalışırsa nokta ayrı bir işaret olarak silinir.

**`tsconfig` yol eşlemesi `./` ile başlamalı** (`"~/*": ["./src/*"]`). `baseUrl` yokken `tsx`
göreli olmayan yolu reddediyor.

**Yazılmış terimler config yüklenirken okunur.** `src/authored/terms/*.json` değiştiyse dev
sunucusunu yeniden başlat ve `build:fresh` çalıştır; terim eklentisi onları bir kez okur. Yeni bir
content koleksiyonu eklediysen de dev sunucusu yeniden başlatılmalı.

**Diyagram etiketi sığmazsa build kırılır** (`primitives/util.ts`). Dev'de belirti: ders sayfası
açılır ama gövde boştur; sebep sunucu günlüğündedir ("Diyagram etiketi sığmıyor").

**Betiğin oluşturduğu öğe kapsamlı CSS almaz.** Demo betiği `document.createElement` ile öğe
üretiyorsa, o öğenin kuralı `<style>` içinde `.kok :global(.oge)` olarak yazılır. Yoksa ilk çizim
doğru görünür, ilk etkileşimden sonra öğeler stilsiz kalır ve hata da vermez.

**Terim ipucu yanlış anlama bağlanabilir.** Eklenti kelimeyi eşler, anlamı bilmez: İş Analizi'nde
"doğrulama" (verification) Ürün Geliştirme'deki "Validation" terimine, "yalın" (sade) "Lean"e
bağlanmıştı. Yeni dersten sonra `dist/<kategori>/*/index.html` içindeki `data-term` eşleşmelerini oku;
yanlış olanı o dersin `skipTerms`'üne yaz ve `build:fresh` çalıştır.

**Dev açıkken eklenen ders bazen görünmez.** Yeni bir `.mdx` dev sunucusu çalışırken eklenince sayfa
bazen dersi değil adım metnini ("Ders anlatımı src/lessons/… dosyasındadır") gösterir; hata da vermez.
Dev sunucusunu yeniden başlat. Kontrol: sayfada `<figure>` var mı.

**Matrix2x2 noktası başlık alanına düşmesin.** Her çeyreğin üst kısmında başlık ve alt yazı durur; üst
çeyreklerde y ≈ 0,8–1, alt çeyreklerde y ≈ 0,3–0,5 bu alana denk gelir ve nokta yazının üstüne biner.
Noktaları üst çeyreklerde 0,55–0,75, alt çeyreklerde 0,05–0,25 arasına koy; 768'de ekranda bak.

**Paragrafı sıra sayısıyla başlatma.** "7. haftada…" Markdown'da numaralı liste olur; yazıyla yaz.

**Astro 7 markdown eklentileri.** `markdown.rehypePlugins` artık kabul edilmiyor; `processor:
unified({...})` kullanılıyor. Nedeni ve ödünleşimi ADR-010'da.

## Ders yazımı

Her yeni ya da yeniden yazılan ders **ders standardı v2**'ye uyar
([docs/icerik/ders-standardi.md](docs/icerik/ders-standardi.md)) ve frontmatter'da `standard: 2`
taşır; `npm run lint:lessons` temiz olmadan ders bitmiş sayılmaz. Örnekler ortak vakadan gelir
([docs/icerik/vaka.md](docs/icerik/vaka.md)); vakadaki sayı ve isimler değişmez, yeni bilgi oraya
eklenir. Dersin temel/önerilen olduğu her rolün `<Lens>`'i yazılır. Bir kaynağı açıp ne dediğini
okumadan alıntılama: 200 dönmesi yetmez, bazı sayfalar boş ya da yönlendirmeli gelir.

## Stil ve bileşen kuralları

- **Bileşenler yalnız semantik token kullanır** (`--c-text`, `--c-action`, `--c-progress`, …). Ham
  ölçek (`--space-*`, `--star-*`, `--nebula-*`, `--aurora-*`, `--gold-*`) **sadece** `tokens.css` içinde geçer.
- **Kontrol kenarlığı ayrı bir token.** Boş bir onay kutusu *yalnızca* kenarlığından ibarettir, bu
  yüzden 3:1 kuralına tabidir → `--c-control-border`. Dekoratif kenarlıklar (`--c-border`,
  `--c-border-strong`) bu kurala tabi değil; ikisini karıştırma.
- **Tek tema: gece gökyüzü.** Açık tema yok. Yıldızların üstündeki kartlar `--c-glass` (yarı saydam +
  blur), ders metni `--c-surface-reading` (neredeyse opak) üzerinde durur; arkasında yıldız kıpırdamaz.
- **Tamamlandı durumu asla yalnız renkle taşınmaz** — tik + soluk metin birlikte.
- Tek başına duran navigasyon bağlantıları ≥24px yüksekliğinde (SC 2.5.8). Cümle içindeki
  bağlantılar standardın "inline" istisnasına girer, onlara dokunma.

## Dil

Arayüz metinleri, belgeler ve kullanıcıyla iletişim **Türkçe**. Kod, dosya/değişken/fonksiyon
adları, commit mesajları ve kod yorumları **İngilizce**.

Türkçe metin İngilizceden ~%15–25 uzun — okuma sütunu bu yüzden 68ch, 65ch değil.
