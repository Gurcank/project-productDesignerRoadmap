/**
 * Roles the Roller page describes without a route of their own. Each points at
 * the route that shares most of its knowledge, and each definition rests on the
 * UK government's Digital and Data capability framework, the most complete
 * public description of these jobs (checked 2026-10-18).
 */
import type { RoleState } from "./role-ids";

export interface OtherRole {
  name: string;
  tr: string;
  summary: string;
  /** The route to follow; "all" when no route fits better than the whole map. */
  nearest: RoleState;
  source: { label: string; url: string };
}

const ddat = (slug: string, label: string) => ({
  label: `UK DDaT — ${label}`,
  url: `https://understand-digital-data-roles-skills.service.gov.uk/role/${slug}/`,
});

export const OTHER_ROLES: OtherRole[] = [
  {
    name: "Delivery Manager",
    tr: "Teslimat Yöneticisi",
    summary: "Ürün ve hizmetlerin teslimatından hesap verir; çevik ekiplerde Project Manager ile Scrum Master arasında bir yerde durur.",
    nearest: "project-manager",
    source: ddat("delivery-manager", "Delivery manager"),
  },
  {
    name: "Program Manager",
    tr: "Program Yöneticisi",
    summary: "Birden çok ekiple yürüyen ya da teknik veya politik riski yüksek karmaşık işlerin teslimatından hesap verir.",
    nearest: "project-manager",
    source: ddat("programme-delivery-manager", "Programme delivery manager"),
  },
  {
    name: "Portfolio Manager",
    tr: "Portföy Yöneticisi",
    summary: "Bir grup dijital projeyi, yani portföyü, koordine eder ve yönetişim süreçlerini tanımlar.",
    nearest: "project-manager",
    source: ddat("digital-portfolio-manager", "Digital portfolio manager"),
  },
  {
    name: "Agile Coach",
    tr: "Çevik Koç",
    summary: "Kurumun çevik kültürünü ve çalışma biçimini geliştirir; farklı ekip ve seviyelerde koçluk yapar.",
    nearest: "scrum-master",
    source: ddat("agile-coach", "Agile coach"),
  },
  {
    name: "Product Analyst",
    tr: "Ürün / Performans Analisti",
    summary: "KPI, hedef ve fayda çerçevesini kurar; ürünün bu ölçütlere göre nasıl performans gösterdiğini analiz eder.",
    nearest: "product-manager",
    source: ddat("performance-analyst", "Performance analyst"),
  },
  {
    name: "Data Analyst",
    tr: "Veri Analisti",
    summary: "Veriyi toplar, yönetir, inceler ve paylaşır; kurumun hedeflerine ve iş etkisine hizmet eder.",
    nearest: "product-manager",
    source: ddat("data-analyst", "Data analyst"),
  },
  {
    name: "Service Designer",
    tr: "Hizmet Tasarımcısı",
    summary: "Bir hizmetin uçtan uca yolculuğunu tasarlar: dijital ekranlar kadar dijital olmayan adımları da.",
    nearest: "product-designer",
    source: ddat("service-designer", "Service designer"),
  },
  {
    name: "Content Designer / UX Writer",
    tr: "İçerik Tasarımcısı",
    summary: "Ürünü insanların anlayıp kullanmasını kolaylaştıran içeriği tasarlar; tek bir metinden tüm yolculuğa kadar.",
    nearest: "product-designer",
    source: ddat("content-designer", "Content designer"),
  },
  {
    name: "QA / Test Engineer",
    tr: "Kalite ve Test Mühendisi",
    summary: "Test ihtiyacını yorumlar; testleri tasarlar, otomatikleştirir ve yürütür; riskleri erkenden görünür kılar.",
    nearest: "business-analyst",
    source: ddat("test-engineer", "Test engineer"),
  },
  {
    name: "Software Developer",
    tr: "Yazılım Geliştirici",
    summary: "Kullanıcı ihtiyacını karşılayan yazılımı tasarlar, çalıştırır ve iyileştirir. Bu site onun dilini öğretir, işini değil.",
    nearest: "all",
    source: ddat("software-developer", "Software developer"),
  },
  {
    name: "DevOps Engineer",
    tr: "DevOps Mühendisi",
    summary: "Yazılımın geliştirilmesini ve çalıştırılmasını araçlar, ortamlar ve pratiklerle destekler.",
    nearest: "all",
    source: ddat("development-operations-devops-engineer", "DevOps engineer"),
  },
];
