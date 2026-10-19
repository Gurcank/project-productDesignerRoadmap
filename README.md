# SeeYourNextStep

Ürün ekibindeki roller için Türkçe bir öğrenme haritası: **sıradaki adımını gör.** Product Designer, Product Manager, Product Owner, Project Manager, Scrum Master, Business Analyst ve UX Researcher için ayrı yollar, tek bir ortak bilgi tabanı üzerinde. Şu an **27 kategori, 290 ders ve 912 terim** yayında; dört yeni kategori hazırlanıyor. Ana sayfa bir gezegen haritası: her kategori bir gök cismi, rolünün yolu bir takımyıldızı.

## Özellikler

- **Rol yolları:** rolünü seç; harita kendi yolunu çizer, her durakta önceliği (temel / önerilen / isteğe bağlı) gösterir ve "Sıradaki adımın" kartı seni bir sonraki derse götürür. İlerleme bütün rollerde ortaktır.
- **Roller bölümü:** yedi rolün tanımı, neyden hesap verdiği, neye karar vermediği ve komşu rollerden farkı; yanlarında çalışan diğer roller.
- **Gezegen haritası:** gezegenleri basılı tutup kendi alanında sürükleyebilirsin; üzerine gelince tamamlanma halkası çıkar.
- **Dersler:** her adım bir ders anlatımı. Rolüne göre mercek kutuları ("Tasarımcı olarak sen", "Product Manager olarak sen" …), özet, kendini yoklama soruları ve kaynaklar içerir. Metindeki terimlerin üzerine gelince tanımı açılır.
- **Sözlük ve arama:** 912 terimlik sözlük, tüm derslerde tam metin arama (Pagefind).
- **Çevrimdışı:** siteyi cihazına indirip internetsiz okuyabilirsin (service worker).
- **İlerleme:** yalnızca tarayıcında saklanır (`localStorage`); Ayarlar'dan yedeklenir ve geri yüklenir.
- **Erişilebilirlik:** WCAG 2.2 AA hedefi, klavye ile gezinme, hareket azaltma desteği, yazı boyutu ayarı.
- **Tek tema:** koyu gece gökyüzü; arka plandaki yıldızlar Ayarlar'dan kapatılabilir.

## Teknoloji

[Astro](https://astro.build) 7 (statik çıktı), MDX, Tailwind CSS 4, [Pagefind](https://pagefind.app), nanostores. React yok; etkileşimler küçük, sayfaya özel betiklerle yapılır. Fontlar: Atkinson Hyperlegible Next ve Space Grotesk.

## Çalıştırma

```bash
npm install
npm run dev        # geliştirme sunucusu: http://localhost:4321
```

Derlenmiş siteyi görmek için:

```bash
npm run build:fresh
npm run preview    # http://localhost:4322
```

> **Not:** Arama dizini yalnızca `build` ile üretilir. `npm run dev` son derlemenin dizinini kullanır; güncel sonuç için yeniden derle. `build:fresh`'i dev sunucusu açıkken çalıştırma: önce sunucuyu durdur.

## Komutlar

| Komut | Ne yapar |
|---|---|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` / `build:fresh` | Siteyi + arama dizinini + çevrimdışı manifestini üretir (`fresh` önbellekleri de temizler) |
| `npm run preview` | Derlenmiş siteyi sunar |
| `npm run check` | TypeScript ve Astro denetimi |
| `npm test` | Birim testleri (slug, adım kimliği, çapraz referans kuralları) |
| `npm run lint:lessons` | Ders standardı v2: yapı, görsel, rol mercekleri, Türkçe okunabilirlik (Ateşman) |
| `npm run validate` | İçerik doğrulaması (kaynaklar, bağlantılar, donmuş slug'lar, rezerve kökler) |
| `npm run import` / `import:check` | `ProductDesignerMaterials/` içeriğini `src/content/` altına aktarır / farkı denetler |
| `npm run budget` | Sayfa başına JS/CSS/HTML bütçesini denetler (JS ≤ 60 KB) |

## Proje yapısı

```text
ProductDesignerMaterials/   Kaynak materyal (salt okunur)
src/content/                Materyalden üretilen ham içerik (elle düzenlenmez)
src/authored/topics/        Site için yazılan adımların kayıtları (materyal dışı kategoriler)
src/lessons/                Elle yazılmış dersler (MDX), kategori başına bir klasör
tests/                      Birim testleri (npm test)
src/data/                   Kategori sırası, gezegen eşlemesi, menü
src/components/             Harita, menüler, yıldız alanı, ders bileşenleri
src/styles/tokens.css       Renk ve ölçü token'ları (tek kaynak)
scripts/                    İçe aktarma, doğrulama, bütçe, çevrimdışı manifest
```

## Katkı kuralları

- **`ProductDesignerMaterials/` ve `src/content/` elle düzenlenmez.** Dersleri `src/lessons/` altında yaz; içeriği değiştirmek için içe aktarıcıyı (`scripts/import-materials.ts`) değiştir.
- **Slug'lar donmuştur:** ilerleme kayıtları `kategori/adim-slug` anahtarına bağlıdır.
- **Materyalde olmayan bilgi kaynaksız yayınlanmaz:** "materyal dışı" rozeti ve en az bir birincil kaynak gerekir.
- **Bileşenler yalnız semantik token kullanır** (`--c-text`, `--c-action` …); ham renk değeri yazılmaz.
- Arayüz metinleri ve belgeler Türkçe; kod, değişken adları ve commit mesajları İngilizce.

Ayrıntılar: [SPEC.md](SPEC.md) (ne yapıldığı), [ARCHITECTURE.md](ARCHITECTURE.md) (nasıl ve neden), [CLAUDE.md](CLAUDE.md) (proje kuralları).
