/**
 * The roles' routes through the one shared knowledge base (plan §1.3).
 *
 * Every lesson is written once. A role does not own content; it picks an order
 * through the categories and a tier for each step:
 *
 * - temel         — the role cannot do the job without it
 * - onerilen      — makes the role clearly better at it
 * - istege-bagli  — useful context, read when it comes up
 *
 * A category missing from a path is "yol dışı": still open, just not on the
 * route. A topic override may move one step up or down, or drop it ("atla").
 *
 * Build-time only: browser scripts import role-ids.ts, never this file, so the
 * paths reach the client as the compact payload GalaxyMap emits.
 *
 * `npm run validate` compiles every path against the real steps, so an unknown
 * category or topic breaks the gate, not the page.
 */
import { ROLE_LABEL, type RoleId } from "./role-ids";

export type Tier = "temel" | "onerilen" | "istege-bagli";

export const TIERS: readonly Tier[] = ["temel", "onerilen", "istege-bagli"];

/** Text first, never colour alone (SPEC §6). `code` is the one-letter payload form. */
export const TIER_LABEL: Record<Tier, { label: string; code: "t" | "o" | "i"; help: string }> = {
  temel: { label: "Temel", code: "t", help: "Bu rol onsuz işini yapamaz." },
  onerilen: { label: "Önerilen", code: "o", help: "Bu rolü işinde belirgin biçimde iyileştirir." },
  "istege-bagli": { label: "İsteğe bağlı", code: "i", help: "Gerektiğinde dönülecek bağlam." },
};

export type TopicTiers = Record<string, Tier | "atla">;

export interface PathEntry {
  category: string;
  tier: Tier;
  /** Per-step exceptions, keyed by topic slug. */
  topics?: TopicTiers;
}

export interface RoleDefinition {
  id: RoleId;
  /** One sentence: what the role is accountable for. */
  summary: string;
  /** The question the role keeps asking — the shortest way to tell roles apart. */
  focus: string;
  /** Ordered: the route the map draws and "Sıradaki adımın" walks. */
  path: PathEntry[];
}

const T: Tier = "temel";
const O: Tier = "onerilen";
const I: Tier = "istege-bagli";

const entry = (category: string, tier: Tier, topics?: TopicTiers): PathEntry =>
  topics ? { category, tier, topics } : { category, tier };

/*
 * Shared exceptions. Non-engineering roles need what a technical area *means*
 * for the product, rather than how it is run; these move the mechanics down.
 */
const DEVOPS_MECHANICS: TopicTiers = {
  docker: I,
  kubernetes: I,
  "pipeline-anatomisi": I,
  "domain-ve-dns": I,
  "hosting-ve-deploy-platformlari": I,
};

const SECURITY_MECHANICS: TopicTiers = {
  "dogrulama-temizleme-kacirma": I,
  "tarayici-guvenlik-sinirlari": I,
  "secret-yonetimi": I,
  "https-ve-sertifikalar": I,
  "owasp-top-10": I,
  "yaygin-aciklar": I,
};

/** KVKK and the legal pages are where product decisions carry legal weight. */
const PRIVACY_CORE: TopicTiers = {
  "kvkk-ve-gdprin-urun-tarafina-yansimasi": T,
  "yasal-sayfalar": T,
};

const BACKEND_MECHANICS: TopicTiers = {
  "server-action-api-route-bff": I,
  "serverless-ve-edge": I,
  "back-end-ekosistemleri": I,
  katmanlar: I,
  caching: I,
  "arka-plan-isleri": I,
  "http-metodlari": I,
};

const ARCHITECTURE_MECHANICS: TopicTiers = {
  "dayaniklilik-kaliplari": I,
  "trafigi-yonetenler": I,
  tutarlilik: I,
  "event-driven-mimari": I,
  "stateless-stateful": I,
};

const AUTH_MECHANICS: TopicTiers = {
  "jwt-ve-token-turleri": I,
  "session-vs-token": I,
  cookie: I,
  "sifre-guvenligi": I,
};

const QUALITY_MECHANICS: TopicTiers = {
  "clean-code-ilkeleri": I,
  "kod-sagligi-araclari": I,
  araclar: I,
  "tasarim-kalitesinin-otomatiklestirilmesi": I,
  "code-review-kulturu": I,
};

/** The parts of Git a delivery role actually lives in: issues and the board. */
const GIT_FOR_DELIVERY: TopicTiers = {
  "version-control-neden-var": O,
  "issue-ve-proje-yonetimi": O,
};

const LANGUAGE_CHOICE: TopicTiers = { "dil-secimi-neden-urun-kararidir": O };

/** Algorithms a product decision is made about: ranking, search, recommendations. */
const PRODUCT_ALGORITHMS: TopicTiers = {
  "oneri-algoritmalari": O,
  "embedding-ve-anlamsal-arama": O,
  "filtreleme-ve-sayfalama": O,
};

/**
 * Proje Yönetimi is Önerilen for four roles as a whole, but not every step is:
 * a Scrum Master does not need earned value, a Product Owner does not sign
 * supplier contracts. These are the steps each of them can leave for later.
 */
const PM_FOR_PRODUCT_MANAGER: TopicTiers = {
  "standartlar-ve-sertifikalar": I,
  "raid-kaydi": I,
};

const PM_FOR_PRODUCT_OWNER: TopicTiers = {
  "standartlar-ve-sertifikalar": I,
  "butce-ve-kazanilmis-deger": I,
  "tedarikci-ve-sozlesme": I,
  "program-portfoy-ve-pmo": I,
};

const PM_FOR_SCRUM_MASTER: TopicTiers = {
  "standartlar-ve-sertifikalar": I,
  "is-gerekcesi-ve-proje-tuzugu": I,
  "kapsam-ve-wbs": I,
  "gantt-ve-kilometre-taslari": I,
  "butce-ve-kazanilmis-deger": I,
  "degisiklik-kontrolu": I,
  "kalite-ve-kabul": I,
  "tedarikci-ve-sozlesme": I,
  "program-portfoy-ve-pmo": I,
};

const PM_FOR_BUSINESS_ANALYST: TopicTiers = {
  "standartlar-ve-sertifikalar": I,
  "bagimliliklar-ve-kritik-yol": I,
  "gantt-ve-kilometre-taslari": I,
  "kaynak-ve-kapasite": I,
  "butce-ve-kazanilmis-deger": I,
  "durum-raporu": I,
  "kapanis-ve-ogrenilen-dersler": I,
  "program-portfoy-ve-pmo": I,
};

/**
 * Çevik Pratikler is Önerilen for four roles; the steps that are a Scrum Master's
 * or Product Owner's craft (flow metrics, the SM's job, scaling) are left for later
 * on their paths. Çalışma Biçimi is Önerilen for UX Researcher as a whole, but its
 * estimation and Kanban mechanics are not.
 */
const AGILE_FOR_PRODUCT_DESIGNER: TopicTiers = {
  "scrum-rehberi": I,
  "product-owner-isi": I,
  "scrum-master-isi": I,
  "akis-metrikleri-ve-cfd": I,
  "ongoru-velocity-ve-monte-carlo": I,
  "olcekleme-safe-less-spotify": I,
  "anti-paternler": I,
};

const AGILE_FOR_PRODUCT_MANAGER: TopicTiers = {
  "scrum-master-isi": I,
  "retro-formatlari": I,
  "akis-metrikleri-ve-cfd": I,
};

const AGILE_FOR_PROJECT_MANAGER: TopicTiers = {
  "product-owner-isi": I,
  "refinement-invest-ve-story-bolme": I,
  "story-mapping": I,
};

const AGILE_FOR_BUSINESS_ANALYST: TopicTiers = {
  "scrum-rehberi": I,
  "scrum-master-isi": I,
  "retro-formatlari": I,
  "akis-metrikleri-ve-cfd": I,
  "ongoru-velocity-ve-monte-carlo": I,
  "olcekleme-safe-less-spotify": I,
  "anti-paternler": I,
};

const WAYS_OF_WORKING_FOR_RESEARCHER: TopicTiers = {
  "tahmin-ve-olcum-story-point-velocity-capacity": I,
  kanban: I,
};

export const ROLES: RoleDefinition[] = [
  {
    id: "product-designer",
    summary: "Ürünün nasıl görüneceğini ve nasıl kullanılacağını tasarlar.",
    focus: "Kullanıcı bunu nasıl yaşayacak?",
    // The site's original route, unchanged in order; new categories slot in.
    path: [
      entry("web-temelleri", T),
      entry("urun-gelistirme", T),
      entry("calisma-bicimi", T),
      entry("sirket-sozlugu", T),
      entry("iletisim-ve-paydaslar", O),
      entry("ux-ui-ilkeleri", T),
      entry("kullanici-arastirmasi", T),
      entry("tasarim-sistemi", T),
      entry("erisilebilirlik", T),
      entry("arayuz-anatomisi", T),
      entry("urun-yonetimi", O),
      entry("urun-analitigi", O),
      entry("cevik-pratikler", O, AGILE_FOR_PRODUCT_DESIGNER),
      entry("front-end", O),
      entry("programlama-dilleri", I),
      entry("frameworkler", I),
      entry("kutuphaneler", I),
      entry("back-end-api", O),
      entry("veritabani", O),
      entry("veri-yapilari", I),
      entry("algoritmalar", I),
      entry("auth", O),
      entry("guvenlik-ve-hukuk", O),
      entry("sistem-mimarisi", O),
      entry("git-ve-github", O),
      entry("devops-ve-yayin", O, { docker: I, kubernetes: I }),
      entry("test-ve-kalite", O),
      entry("yapay-zeka-ile-calisma", T),
      entry("is-ve-strateji", I),
      entry("proje-yonetimi", I),
      entry("is-analizi", I),
    ],
  },
  {
    id: "product-manager",
    summary: "Neyin, kimin için ve neden yapılacağına karar verir; sonucun sahibidir.",
    focus: "Doğru şeyi mi yapıyoruz?",
    path: [
      entry("urun-gelistirme", T),
      entry("calisma-bicimi", T),
      entry("sirket-sozlugu", T),
      entry("iletisim-ve-paydaslar", T),
      entry("urun-yonetimi", T),
      entry("kullanici-arastirmasi", O),
      entry("urun-analitigi", T),
      entry("is-ve-strateji", T),
      entry("ux-ui-ilkeleri", O),
      entry("erisilebilirlik", O),
      entry("cevik-pratikler", O, AGILE_FOR_PRODUCT_MANAGER),
      entry("proje-yonetimi", O, PM_FOR_PRODUCT_MANAGER),
      entry("is-analizi", O),
      entry("web-temelleri", O),
      entry("back-end-api", O, BACKEND_MECHANICS),
      entry("sistem-mimarisi", O, ARCHITECTURE_MECHANICS),
      entry("auth", O, AUTH_MECHANICS),
      entry("guvenlik-ve-hukuk", T, { ...SECURITY_MECHANICS, "bot-ve-kotuye-kullanim": O, "savunma-ilkeleri": O }),
      entry("devops-ve-yayin", O, DEVOPS_MECHANICS),
      entry("test-ve-kalite", O, QUALITY_MECHANICS),
      entry("yapay-zeka-ile-calisma", T),
      entry("front-end", I),
      entry("veritabani", I),
      entry("git-ve-github", I),
      entry("tasarim-sistemi", I),
      entry("arayuz-anatomisi", I),
      entry("programlama-dilleri", I, LANGUAGE_CHOICE),
      entry("algoritmalar", I, PRODUCT_ALGORITHMS),
    ],
  },
  {
    id: "product-owner",
    summary: "Ürün backlog'unun sahibidir; takımın ürettiği değeri en yükseğe çıkarır.",
    focus: "Sıradaki en değerli iş hangisi?",
    path: [
      entry("urun-gelistirme", T),
      entry("calisma-bicimi", T),
      entry("cevik-pratikler", T),
      entry("sirket-sozlugu", T),
      entry("iletisim-ve-paydaslar", T),
      entry("urun-yonetimi", T),
      entry("is-analizi", T),
      entry("urun-analitigi", O),
      entry("is-ve-strateji", O),
      entry("kullanici-arastirmasi", O),
      entry("ux-ui-ilkeleri", O),
      entry("erisilebilirlik", O),
      entry("proje-yonetimi", O, PM_FOR_PRODUCT_OWNER),
      entry("test-ve-kalite", T, QUALITY_MECHANICS),
      entry("guvenlik-ve-hukuk", T, { ...SECURITY_MECHANICS, "bot-ve-kotuye-kullanim": O, "savunma-ilkeleri": O }),
      entry("web-temelleri", O),
      entry("back-end-api", O, BACKEND_MECHANICS),
      entry("auth", O, AUTH_MECHANICS),
      entry("devops-ve-yayin", O, DEVOPS_MECHANICS),
      entry("yapay-zeka-ile-calisma", T),
      entry("sistem-mimarisi", I),
      entry("front-end", I),
      entry("veritabani", I),
      entry("git-ve-github", I, GIT_FOR_DELIVERY),
      entry("tasarim-sistemi", I),
      entry("arayuz-anatomisi", I),
      entry("programlama-dilleri", I, LANGUAGE_CHOICE),
      entry("algoritmalar", I, PRODUCT_ALGORITHMS),
    ],
  },
  {
    id: "project-manager",
    summary: "İşin kapsam, zaman, maliyet ve risk sınırları içinde teslim edilmesini yönetir.",
    focus: "Söz verdiğimizi zamanında teslim edebilecek miyiz?",
    path: [
      entry("urun-gelistirme", T),
      entry("calisma-bicimi", T),
      entry("sirket-sozlugu", T),
      entry("iletisim-ve-paydaslar", T),
      entry("proje-yonetimi", T),
      entry("cevik-pratikler", O, AGILE_FOR_PROJECT_MANAGER),
      entry("is-analizi", O),
      entry("is-ve-strateji", O),
      entry("web-temelleri", O),
      entry("test-ve-kalite", O, QUALITY_MECHANICS),
      entry("devops-ve-yayin", O, DEVOPS_MECHANICS),
      entry("guvenlik-ve-hukuk", O, { ...SECURITY_MECHANICS, ...PRIVACY_CORE }),
      entry("yapay-zeka-ile-calisma", T),
      entry("urun-yonetimi", I),
      entry("urun-analitigi", I),
      entry("git-ve-github", I, GIT_FOR_DELIVERY),
      entry("sistem-mimarisi", I),
      entry("auth", I),
      entry("back-end-api", I),
      entry("front-end", I),
      entry("veritabani", I),
      entry("programlama-dilleri", I, LANGUAGE_CHOICE),
      entry("ux-ui-ilkeleri", I),
      entry("kullanici-arastirmasi", I),
      entry("erisilebilirlik", I),
    ],
  },
  {
    id: "scrum-master",
    summary: "Takımın Scrum'ı etkili kullanmasını sağlar; engelleri kaldırır, akışı iyileştirir.",
    focus: "Takımın önündeki engel ne?",
    path: [
      entry("calisma-bicimi", T),
      entry("cevik-pratikler", T),
      entry("urun-gelistirme", T),
      entry("sirket-sozlugu", T),
      entry("iletisim-ve-paydaslar", T),
      entry("urun-yonetimi", O),
      entry("proje-yonetimi", O, PM_FOR_SCRUM_MASTER),
      entry("test-ve-kalite", O, QUALITY_MECHANICS),
      entry("devops-ve-yayin", O, DEVOPS_MECHANICS),
      entry("web-temelleri", O),
      entry("yapay-zeka-ile-calisma", T),
      entry("git-ve-github", I, { ...GIT_FOR_DELIVERY, "pull-request-ve-kod-incelemesi": O }),
      entry("sistem-mimarisi", I),
      entry("is-analizi", I),
      entry("urun-analitigi", I),
      entry("is-ve-strateji", I),
      entry("ux-ui-ilkeleri", I),
      entry("kullanici-arastirmasi", I),
      entry("erisilebilirlik", I),
      entry("guvenlik-ve-hukuk", I),
      entry("front-end", I),
      entry("back-end-api", I),
    ],
  },
  {
    id: "business-analyst",
    summary: "İş ihtiyacını anlar; onu gereksinime ve kabul kriterine çevirir.",
    focus: "Gerçekte ne isteniyor, nasıl test edeceğiz?",
    path: [
      entry("urun-gelistirme", T),
      entry("is-analizi", T),
      entry("calisma-bicimi", T),
      entry("sirket-sozlugu", T),
      entry("iletisim-ve-paydaslar", T),
      entry("test-ve-kalite", T, QUALITY_MECHANICS),
      entry("urun-yonetimi", O),
      entry("kullanici-arastirmasi", O),
      entry("ux-ui-ilkeleri", O),
      entry("erisilebilirlik", O),
      entry("urun-analitigi", O),
      entry("is-ve-strateji", O),
      entry("proje-yonetimi", O, PM_FOR_BUSINESS_ANALYST),
      entry("cevik-pratikler", O, AGILE_FOR_BUSINESS_ANALYST),
      entry("web-temelleri", O),
      entry("back-end-api", O, { ...BACKEND_MECHANICS, "http-metodlari": O }),
      entry("veritabani", O, {
        "orm-ve-migration": I,
        "normalizasyon-ve-denormalizasyon": I,
        "baas-ve-yonetilen-veritabanlari": I,
        "yaygin-urunler": I,
      }),
      entry("auth", O, AUTH_MECHANICS),
      entry("guvenlik-ve-hukuk", O, { ...SECURITY_MECHANICS, ...PRIVACY_CORE }),
      entry("yapay-zeka-ile-calisma", T),
      entry("arayuz-anatomisi", I, { "veri-gosterimi": O, "form-parcalari": O, "durum-ekranlari": O }),
      entry("sistem-mimarisi", I),
      entry("devops-ve-yayin", I),
      entry("git-ve-github", I),
      entry("front-end", I),
      entry("tasarim-sistemi", I),
      entry("programlama-dilleri", I, { ...LANGUAGE_CHOICE, sql: O }),
      entry("veri-yapilari", I),
      entry("algoritmalar", I),
    ],
  },
  {
    id: "ux-researcher",
    summary: "Kullanıcıyı araştırır; ekibin kararlarını kanıta dayandırır.",
    focus: "Bunu bildiğimizi nereden biliyoruz?",
    path: [
      entry("kullanici-arastirmasi", T),
      entry("ux-ui-ilkeleri", T),
      entry("urun-gelistirme", T),
      entry("sirket-sozlugu", T),
      entry("erisilebilirlik", T),
      entry("calisma-bicimi", O, WAYS_OF_WORKING_FOR_RESEARCHER),
      entry("iletisim-ve-paydaslar", O),
      entry("urun-analitigi", O),
      entry("urun-yonetimi", O),
      entry("is-analizi", O),
      entry("guvenlik-ve-hukuk", O, { ...SECURITY_MECHANICS, ...PRIVACY_CORE }),
      entry("arayuz-anatomisi", O),
      entry("web-temelleri", O),
      entry("yapay-zeka-ile-calisma", T),
      entry("tasarim-sistemi", I),
      entry("cevik-pratikler", I),
      entry("proje-yonetimi", I),
      entry("is-ve-strateji", I),
      entry("test-ve-kalite", I),
      entry("front-end", I),
      entry("back-end-api", I),
      entry("auth", I),
    ],
  },
];

export const ROLE_BY_ID = new Map(ROLES.map((role) => [role.id, role]));

export function roleName(id: RoleId): string {
  return ROLE_LABEL[id].name;
}
