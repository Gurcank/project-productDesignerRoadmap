/**
 * Single source of truth for category order, slugs and area grouping (SPEC §2).
 * `order` is the Keşif route — areas in AREAS order, then categories within an
 * area — and only a sort key: each role walks its own route (src/data/roles.ts).
 * Slugs are frozen once shipped so links and progress never break.
 *
 * A category listed here without any steps yet is drawn as a pending planet
 * ("hazırlanıyor"), so a role's route can show where it is going before the
 * lessons exist.
 */

export type AreaId =
  | "temel"
  | "urun-ekip"
  | "strateji-urun"
  | "teslimat"
  | "tasarim"
  | "muhendislik"
  | "sistem-operasyon"
  | "yapay-zeka";

/** How fast the content ages — taken from the material's own durability map (Ek B.2). */
export type Durability = "stable" | "slow" | "fast";

export interface Category {
  slug: string;
  title: string;
  /** Short label for the roadmap node, where space is tight. */
  nodeTitle: string;
  area: AreaId;
  order: number;
  /** Material chapter number, or null for content written for this site. */
  chapter: number | null;
  durability: Durability;
  /** One line shown on the roadmap node and under the category title. */
  summary: string;
}

export const AREAS: { id: AreaId; title: string; description: string }[] = [
  { id: "temel", title: "Temel", description: "Webin nasıl çalıştığına dair zihin haritası" },
  { id: "urun-ekip", title: "Ürün ve Ekip", description: "Kararların kimlerle, hangi ritimle alındığı" },
  { id: "strateji-urun", title: "Strateji ve Ürün", description: "Neyin, kimin için ve neden yapılacağı" },
  { id: "teslimat", title: "Teslimat", description: "İşi planlamak, akışı yönetmek, ihtiyacı netleştirmek" },
  { id: "tasarim", title: "Tasarım", description: "Süreç, araştırma, sistem, erişilebilirlik, arayüz" },
  { id: "muhendislik", title: "Mühendislik", description: "Konuşmak için gereken teknik zemin" },
  { id: "sistem-operasyon", title: "Sistem ve Operasyon", description: "Mimari, güvenlik, yayın ve kalite" },
  { id: "yapay-zeka", title: "Yapay Zekâ", description: "Modelle profesyonel çalışma" },
];

export const CATEGORIES: Category[] = [
  {
    slug: "web-temelleri",
    title: "Web Temelleri",
    nodeTitle: "Web Temelleri",
    area: "temel",
    order: 1,
    chapter: 1,
    durability: "stable",
    summary: "Bir adresi yazdığın andan ekranda görüntü oluşana kadar arada ne oluyor.",
  },
  {
    slug: "urun-gelistirme",
    title: "Ürün Geliştirme Yaşam Döngüsü",
    nodeTitle: "Ürün Geliştirme",
    area: "urun-ekip",
    order: 2,
    chapter: 2,
    durability: "stable",
    summary: "Bir fikrin kimin elinden geçerek, hangi belgelere dönüşerek yayına gittiği.",
  },
  {
    slug: "calisma-bicimi",
    title: "Çalışma Biçimi: Agile, Scrum, Kanban",
    nodeTitle: "Çalışma Biçimi",
    area: "urun-ekip",
    order: 3,
    chapter: 3,
    durability: "slow",
    summary: "Ekip haftayı nasıl bölüyor, hangi toplantıda ne konuşuluyor, ilerleme neyle ölçülüyor.",
  },
  {
    slug: "iletisim-ve-paydaslar",
    title: "İletişim ve Paydaş Yönetimi",
    nodeTitle: "İletişim / Paydaşlar",
    area: "urun-ekip",
    order: 5,
    chapter: null,
    durability: "stable",
    summary: "Kiminle, ne zaman, nasıl konuşacağını bilmek: paydaş, karar hakkı, yazı, müzakere.",
  },
  {
    slug: "urun-yonetimi",
    title: "Ürün Yönetimi",
    nodeTitle: "Ürün Yönetimi",
    area: "strateji-urun",
    order: 6,
    chapter: null,
    durability: "slow",
    summary: "Neyin, kimin için ve neden yapılacağına karar vermek: strateji, keşif, yol haritası.",
  },
  {
    slug: "urun-analitigi",
    title: "Ürün Analitiği ve Deney",
    nodeTitle: "Ürün Analitiği",
    area: "strateji-urun",
    order: 7,
    chapter: null,
    durability: "slow",
    summary: "Ölçmeden öğrenemezsin: metrik, huni, kohort ve A/B testi.",
  },
  {
    slug: "is-ve-strateji",
    title: "İş Modeli ve Strateji",
    nodeTitle: "İş ve Strateji",
    area: "strateji-urun",
    order: 8,
    chapter: null,
    durability: "stable",
    summary: "Ürünün nasıl para kazandığı, neden kazanacağı ve rakiplerden nasıl ayrıldığı.",
  },
  {
    slug: "proje-yonetimi",
    title: "Proje Yönetimi",
    nodeTitle: "Proje Yönetimi",
    area: "teslimat",
    order: 9,
    chapter: null,
    durability: "stable",
    summary: "Kapsamı, zamanı, maliyeti ve riski birlikte yönetmek.",
  },
  {
    slug: "cevik-pratikler",
    title: "Çevik Pratikler",
    nodeTitle: "Çevik Pratikler",
    area: "teslimat",
    order: 10,
    chapter: null,
    durability: "slow",
    summary: "Scrum ve Kanban'ı kitaptan çıkarıp bir takımda çalıştırmak.",
  },
  {
    slug: "is-analizi",
    title: "İş Analizi",
    nodeTitle: "İş Analizi",
    area: "teslimat",
    order: 11,
    chapter: null,
    durability: "stable",
    summary: "İhtiyacı doğru anlamak, gereksinimi test edilebilir biçimde yazmak.",
  },
  {
    slug: "ux-ui-ilkeleri",
    title: "UI/UX: Süreç ve İlkeler",
    nodeTitle: "UX / UI İlkeleri",
    area: "tasarim",
    order: 12,
    chapter: 4,
    durability: "stable",
    summary: "Sezgiyle yaptığın şeylerin adı ve gerekçesi — izlenimi argümana çeviren dil.",
  },
  {
    slug: "kullanici-arastirmasi",
    title: "Kullanıcı Araştırması",
    nodeTitle: "Kullanıcı Araştırması",
    area: "tasarim",
    order: 13,
    chapter: null,
    durability: "stable",
    summary: "Kullanıcıyı varsaymak yerine ondan öğrenmek: plan, görüşme, test, sentez.",
  },
  {
    slug: "tasarim-sistemi",
    title: "Tasarım Sistemi ve Görsel Dil",
    nodeTitle: "Tasarım Sistemi",
    area: "tasarim",
    order: 14,
    chapter: 5,
    durability: "slow",
    summary: "Tasarım kararlarının sayıya ve isme dönüştüğü katman: token, tipografi, renk, ölçek.",
  },
  {
    slug: "erisilebilirlik",
    title: "Erişilebilirlik (a11y)",
    nodeTitle: "Erişilebilirlik",
    area: "tasarim",
    order: 15,
    chapter: 6,
    durability: "slow",
    summary: "Sonradan eklenemeyen tek sorumluluk: kontrast, odak, klavye, semantik yapı.",
  },
  {
    slug: "arayuz-anatomisi",
    title: "Arayüz Anatomisi",
    nodeTitle: "Arayüz Anatomisi",
    area: "tasarim",
    order: 16,
    chapter: 7,
    durability: "slow",
    summary: "Bir arayüz parçasını göstererek değil, adını söyleyerek isteyebilmek.",
  },
  {
    slug: "front-end",
    title: "Front-end Temelleri",
    nodeTitle: "Front-end",
    area: "muhendislik",
    order: 17,
    chapter: 8,
    durability: "slow",
    summary: "Yazmak için değil, konuşmak için: HTML, CSS, bileşen, rendering, performans.",
  },
  {
    slug: "programlama-dilleri",
    title: "Programlama Dilleri",
    nodeTitle: "Diller",
    area: "muhendislik",
    order: 18,
    chapter: null,
    durability: "slow",
    summary: "Hangi dil hangi problemi çözer, neyi feda eder — kod öğretmeden.",
  },
  {
    slug: "frameworkler",
    title: "Framework'ler",
    nodeTitle: "Framework'ler",
    area: "muhendislik",
    order: 19,
    chapter: 9,
    durability: "fast",
    summary: "React, Next.js, Astro ve kardeşleri: neyi kazandırır, neyi kaybettirir.",
  },
  {
    slug: "kutuphaneler",
    title: "Kütüphaneler",
    nodeTitle: "Kütüphaneler",
    area: "muhendislik",
    order: 20,
    chapter: 9,
    durability: "fast",
    summary: "Stil, bileşen, animasyon, state, form: hangi araç hangi işte.",
  },
  {
    slug: "back-end-api",
    title: "Back-end ve API",
    nodeTitle: "Back-end / API",
    area: "muhendislik",
    order: 21,
    chapter: 10,
    durability: "slow",
    summary: "Bir isteğin neden zor olduğunu tahmin edebilmek: HTTP, REST, önbellek, kuyruk.",
  },
  {
    slug: "veritabani",
    title: "Veritabanı ve Veri Modeli",
    nodeTitle: "Veritabanı",
    area: "muhendislik",
    order: 22,
    chapter: 11,
    durability: "stable",
    summary: "Veri modeli, arayüzün neyi gösterebileceğinin sınırını çizer.",
  },
  {
    slug: "veri-yapilari",
    title: "Veri Yapıları",
    nodeTitle: "Veri Yapıları",
    area: "muhendislik",
    order: 23,
    chapter: null,
    durability: "stable",
    summary: "Liste, sözlük, ağaç, graf: arayüzdeki hangi problem hangi yapıya dayanır.",
  },
  {
    slug: "algoritmalar",
    title: "Algoritmalar",
    nodeTitle: "Algoritmalar",
    area: "muhendislik",
    order: 24,
    chapter: null,
    durability: "stable",
    summary: "\"Bu neden yavaş?\" sorusunun cevabı: karmaşıklık, arama, sıralama, eşleştirme.",
  },
  {
    slug: "auth",
    title: "Auth: Kimlik Doğrulama ve Yetkilendirme",
    nodeTitle: "Auth",
    area: "sistem-operasyon",
    order: 25,
    chapter: 12,
    durability: "slow",
    summary: "En çok kullanılan, en az tasarlanan akış: giriş, oturum, kurtarma, yetki.",
  },
  {
    slug: "guvenlik-ve-hukuk",
    title: "Güvenlik ve Hukuki Yükümlülük",
    nodeTitle: "Güvenlik / Hukuk",
    area: "sistem-operasyon",
    order: 26,
    chapter: 13,
    durability: "slow",
    summary: "Güvenlik açıklarının çoğu bir tasarım kararının sonucudur.",
  },
  {
    slug: "sistem-mimarisi",
    title: "Sistem Mimarisi",
    nodeTitle: "Sistem Mimarisi",
    area: "sistem-operasyon",
    order: 27,
    chapter: 14,
    durability: "stable",
    summary: "Geri dönüşü en pahalı karar sınıfı ve onu tartışmanın dili: takas.",
  },
  {
    slug: "git-ve-github",
    title: "Git ve GitHub",
    nodeTitle: "Git / GitHub",
    area: "sistem-operasyon",
    order: 28,
    chapter: 15,
    durability: "stable",
    summary: "Yalnız kodun değil, işin de kaydı: diff, PR, dal, sürüm.",
  },
  {
    slug: "devops-ve-yayin",
    title: "DevOps, Yayın ve Gözlemlenebilirlik",
    nodeTitle: "DevOps / Yayın",
    area: "sistem-operasyon",
    order: 29,
    chapter: 16,
    durability: "slow",
    summary: "Kodun bilgisayardan çıkıp kullanıcıya ulaştığı ve orada yaşadığı süreç.",
  },
  {
    slug: "test-ve-kalite",
    title: "Test, Kalite ve Kod Sağlığı",
    nodeTitle: "Test / Kalite",
    area: "sistem-operasyon",
    order: 30,
    chapter: 17,
    durability: "slow",
    summary: "İyi hata raporu yazmak ve tasarım kalitesini otomatikleştirmek.",
  },
  {
    slug: "sirket-sozlugu",
    title: "Şirket Ortamı Sözlüğü",
    nodeTitle: "Şirket Sözlüğü",
    area: "urun-ekip",
    order: 4,
    chapter: 18,
    durability: "stable",
    summary: "Bir odaya girdiğinde kendini yabancı hissetmemeni sağlayan kelimeler.",
  },
  {
    slug: "yapay-zeka-ile-calisma",
    title: "Yapay Zekâ ile Profesyonel Çalışma",
    nodeTitle: "Yapay Zekâ",
    area: "yapay-zeka",
    order: 31,
    chapter: 19,
    durability: "fast",
    summary: "İyi bir prompt bir spec'tir: bağlam, kısıt, kabul kriteri, format.",
  },
];

export const CATEGORY_BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));

/**
 * First URL segments that are not categories (SPEC §2). A category is routed at
 * `/<slug>/`, so a slug from this list would shadow — or be shadowed by — a page
 * or a build folder. Some are reserved before their pages exist (`araclar`,
 * `roller`, `en`). `npm run validate` checks both directions: no category takes
 * one of these, and every top-level page in src/pages is listed here.
 */
export const RESERVED_ROOTS: readonly string[] = [
  "ara",
  "sozluk",
  "araclar",
  "ayarlar",
  "roller",
  "en",
  "offline",
  "404",
  "pagefind",
  "_astro",
];

export function categoriesOfArea(area: AreaId): Category[] {
  return CATEGORIES.filter((c) => c.area === area).sort((a, b) => a.order - b.order);
}

/*
 * The Keşif route: every category, areas in AREAS order. It is what the map
 * shows before a role is chosen, and the "all" path in src/lib/role-path.ts.
 * Each role's own route lives in src/data/roles.ts.
 */
export const ROUTE_ORDER: Category[] = AREAS.flatMap((area) => categoriesOfArea(area.id));

export const DURABILITY_LABEL: Record<Durability, { dot: string; label: string; help: string }> = {
  stable: { dot: "🟢", label: "Eskimeyen", help: "Kavramsal temel — yıllarca geçerli kalır." },
  slow: { dot: "🟡", label: "Yavaş eskiyen", help: "Sektör pratiği ve standartlar; 2-3 yılda bir gözden geçir." },
  fast: { dot: "🔴", label: "Hızlı eskiyen", help: "Ürün ve sürüm bilgisi; kullanmadan önce doğrula." },
};
