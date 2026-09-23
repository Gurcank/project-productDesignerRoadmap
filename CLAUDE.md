# Proje kuralları — Product Designer Yol Haritası

> Global `~/.claude/CLAUDE.md` geçerli. Bu dosya onu **ezmez, üzerine ekler**; çelişki varsa bu
> dosya kazanır. Burada yalnız bu projeye özgü, koddan veya git geçmişinden okunamayan kurallar var.
>
> Ne yapıldığı: [SPEC.md](SPEC.md) · Nasıl ve neden: [ARCHITECTURE.md](ARCHITECTURE.md)

## Dokunulmazlar — IMPORTANT

**1. `ProductDesignerMaterials/` salt okunur.** Kullanıcının kaynağı. Yazım hatası, eksik bilgi veya
yanlış iddia görürsen **düzeltme** — tur raporunda bildir. Bugüne kadar bildirilenler SPEC §8'de.

**2. `src/content/` üretilmiştir, elle düzenlenmez.** `scripts/import-materials.ts` çıktısı. Bir
konu sayfasını değiştirmek istiyorsan içe aktarıcıyı değiştir ve yeniden çalıştır. Elle düzenleme
bir sonraki içe aktarmada sessizce kaybolur; `npm run import:check` bu ayrışmayı yakalar.

**3. Slug'lar donmuştur.** İlerleme kayıtları `kategori/adim-slug` anahtarına bağlı. Slug değişirse
kullanıcının o adımdaki ilerlemesi kaybolur. Slug değiştirmen gerekiyorsa **önce sor**.

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

**Astro 7 markdown eklentileri.** `markdown.rehypePlugins` artık kabul edilmiyor; `processor:
unified({...})` kullanılıyor. Nedeni ve ödünleşimi ADR-010'da.

## Stil ve bileşen kuralları

- **Bileşenler yalnız semantik token kullanır** (`--c-text`, `--c-action`, `--c-progress`, …). Ham
  ölçek (`--n-*`, `--petrol-*`, `--amber-*`) **sadece** `tokens.css` içinde geçer.
- **Kontrol kenarlığı ayrı bir token.** Boş bir onay kutusu *yalnızca* kenarlığından ibarettir, bu
  yüzden 3:1 kuralına tabidir → `--c-control-border`. Dekoratif kenarlıklar (`--c-border`,
  `--c-border-strong`) bu kurala tabi değil; ikisini karıştırma.
- **Dolu buton yüzeyi temaya göre ters yönde kayar.** Koyu temada etiket koyu olduğu için dolgu
  açılır (`petrol-500`), açık temada etiket açık olduğu için dolgu koyulaşır (`petrol-700`).
- **Tamamlandı durumu asla yalnız renkle taşınmaz** — tik + soluk metin birlikte.
- Tek başına duran navigasyon bağlantıları ≥24px yüksekliğinde (SC 2.5.8). Cümle içindeki
  bağlantılar standardın "inline" istisnasına girer, onlara dokunma.

## Dil

Arayüz metinleri, belgeler ve kullanıcıyla iletişim **Türkçe**. Kod, dosya/değişken/fonksiyon
adları, commit mesajları ve kod yorumları **İngilizce**.

Türkçe metin İngilizceden ~%15–25 uzun — okuma sütunu bu yüzden 68ch, 65ch değil.
