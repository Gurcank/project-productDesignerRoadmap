# Product Engineer Referans Dosyası

**Bölüm 0 — Bu dosya nasıl kullanılır** + **Tam içindekiler**

---

# Bölüm 0 — Bu dosya nasıl kullanılır

## 0.1 Terim kartı anatomisi

Bu dosyadaki her terim aynı sekiz alanla yazılır. Alanların hepsi bir işe yarar; hiçbiri süs değil.

| Alan | Neden var |
|---|---|
| **Terim (İngilizce)** | Toplantıda geçen hâli bu. Ezberlenecek şey bu satır. |
| **Türkçesi / karşılığı** | Kafanda oturması için. Konuşurken İngilizcesini kullanacaksın. |
| **Tanım** | Tek cümle, jargonsuz. Birine anlatman gerekirse bu cümleyi kullan. |
| **Ne işe yarar / neden var** | Terimi ezberlemek yetmez; hangi problemi çözdüğünü bilmezsen yanlış yerde kullanırsın. |
| **Nerede karşına çıkar** | Hangi toplantıda, hangi araçta, kimin ağzından duyacağın. Tanıma hızını artırır. |
| **Örnek kullanım** | Gerçekçi tek cümle. Terimi cümle içinde görmek, tanımdan daha kalıcıdır. |
| **Karıştırılanlar** | En çok hata buradan çıkar. Yoksa bu alan yazılmaz. |
| **İlgili terimler** | Dosya içi bağlantı. Bir terimi öğrenirken komşularını da görürsün. |

## 0.2 Okuma sırası ve günlük tempo

Sıralama alfabetik **değil**, öğrenme sırasına göre. Bölüm 1'i atlayıp Bölüm 10'a geçersen Bölüm 10 anlaşılmaz; çünkü Bölüm 10, Bölüm 1'de kurulan zihin haritasının üstüne bina ediliyor.

Önerilen tempo: **günde 3-5 terim**. Bir terimi "öğrendim" saymanın ölçütü şu: kartın tanım alanına bakmadan, kendi cümlenle birine anlatabiliyorsan öğrenmişsindir. Tekrar aralıkları ve gün gün dağılım **Ek A**'da.

Her ana bölümün sonunda "kendini test et" var. Cevaplara bakmadan yaz, sonra karşılaştır. Yanlış çıkan terimin kartına dön.

## 0.3 Neyin ezberlenmesi, neyin sadece tanınması gerekir

Üç seviye var. Hepsini aynı derinlikte çalışmak zaman kaybı.

**Seviye 1 — Ezber (aktif kullanım).** Sen üreteceksin. Bir toplantıda bu kelimeyi senin söylemen gerekecek.
Örnek: acceptance criteria, user flow, design token, responsive, breakpoint, hero, empty state, CTA, staging, pull request, MVP, scope creep.

**Seviye 2 — Tanıma (pasif kullanım).** Biri söylediğinde ne dendiğini anlaman yeter; senin ağzından çıkması gerekmez.
Örnek: hydration, tree-shaking, idempotency, N+1, circuit breaker, cold start.

**Seviye 3 — Kulak aşinalığı.** Adını duyduğunda "bu bir X kategorisinde bir şey" diyebilmen yeterli.
Örnek: Kubernetes, Kafka, gRPC, service mesh, Terraform.

Her kartın altında bu seviye ayrıca yazmıyor; ama şu kural işe yarar: **tasarım ve ürün kararını etkileyen her terim Seviye 1'dir.** Sadece kodun içinde yaşayan terimler Seviye 2 veya 3.

## 0.4 Bilgi eskime uyarıları

Bu dosyadaki bilgi üç hızda eskiyor:

**Eskimeyen (kavramlar).** HTTP'nin nasıl çalıştığı, client-server modeli, normalizasyon, RBAC mantığı, WCAG'ın POUR ilkeleri. Bunlar 10 yıl sonra da aynı.

**Yavaş eskiyen (sektör pratiği).** Hangi branching stratejisinin yaygın olduğu, hangi rendering yaklaşımının varsayılan kabul edildiği, tasarım sistemlerinde token adlandırma alışkanlıkları. 2-3 yılda bir değişir.

**Hızlı eskiyen (ürün ve sürüm bilgisi).** Bir framework'ün hangi sürümde ne yaptığı, hangi kütüphanenin bakımının sürdüğü, bir platformun fiyatlandırması, bir API'nin davranışı. Aylar içinde değişir.

Üçüncü kategorideki her yerde kartın içine `[DEĞİŞKEN BİLGİ]` etiketi konuyor. O etiketi gördüğün yerde bilgiyi bana veya kaynağa doğrulat; ezberleme. Hangi konuda hangi birincil kaynağa bakılacağı **Ek B**'de.

Bir şeyden emin olmadığım yerde kartın içinde `[EMİN DEĞİLİM]` yazıyor. Bu etiketi gördüğün bilgiyi kullanmadan önce doğrula.

---

# Tam içindekiler

## Bölüm 1 — Web nasıl çalışır: temel zihin haritası
- 1.1 İstemci–sunucu modeli: client, server, browser
- 1.2 URL anatomisi, domain, DNS, IP, hosting
- 1.3 Request/response döngüsü, header, body
- 1.4 DOM ve tarayıcının bir sayfayı çizme süreci
- 1.5 Static site, dynamic site, web app ayrımı
- 1.6 Front-end, back-end, full-stack, infrastructure katmanları
- 1.7 SPA, MPA, PWA
- 1.8 Ortam kavramına ilk bakış: local, staging, production
- 1.9 Kendini test et

## Bölüm 2 — Ürün geliştirme yaşam döngüsü
- 2.1 Ekipteki roller: PM, PO, Product Designer, FE/BE developer, QA, DevOps, stakeholder
- 2.2 Product development lifecycle: fikirden ölçüme kadar fazlar
- 2.3 Discovery, problem statement, hypothesis, Jobs To Be Done
- 2.4 Persona, user research, insight, assumption
- 2.5 Spec, PRD, one-pager, brief
- 2.6 User story, epic, task, acceptance criteria, Given/When/Then
- 2.7 Backlog, ticket, grooming/refinement, prioritization (RICE, MoSCoW, ICE)
- 2.8 MVP, POC, prototype, scope, scope creep, cut line
- 2.9 Roadmap, Now/Next/Later, quarter planlama
- 2.10 Definition of Ready, Definition of Done, handoff
- 2.11 Launch türleri: alpha, beta, soft launch, GA, dogfooding
- 2.12 Kendini test et

## Bölüm 3 — Çalışma biçimi: Agile, Scrum, Kanban ve ekip ritüelleri
- 3.1 Waterfall vs Agile: neyi neden değiştirdi
- 3.2 Scrum: sprint, sprint planning, daily standup, sprint review, retrospective
- 3.3 Story point, velocity, burndown, capacity, timebox
- 3.4 Kanban: board, column, WIP limit, lead time, cycle time
- 3.5 Blocker, dependency, escalation, spike
- 3.6 Sync vs async çalışma, toplantı türleri
- 3.7 OKR, KPI, north star metric, success metric
- 3.8 Kendini test et

## Bölüm 4 — UI/UX: süreç ve ilkeler
- 4.1 UX, UI, Product Design, Interaction Design, Service Design ayrımı
- 4.2 Tasarım süreci: double diamond, divergent/convergent düşünme
- 4.3 Information Architecture (IA), sitemap, navigation model, taxonomy
- 4.4 User flow, task flow, happy path, edge case, error path
- 4.5 Wireframe (lo-fi / hi-fi), mockup, prototype, clickable prototype farkı
- 4.6 Usability ilkeleri: Nielsen heuristics, affordance, signifier, feedback
- 4.7 Karar yasaları: Hick's law, Fitts's law, Jakob's law, Miller's law, cognitive load
- 4.8 Görsel hiyerarşi, gestalt ilkeleri, kontrast, yakınlık, hizalama, negatif alan
- 4.9 UX writing, microcopy, tone of voice, content design
- 4.10 Değerlendirme yöntemleri: usability test, A/B test, multivariate test, heatmap, session recording, funnel
- 4.11 Kendini test et

## Bölüm 5 — Tasarım sistemi ve görsel dil
- 5.1 Style guide, pattern library, component library, design system ayrımı
- 5.2 Design token: primitive / semantic / component token, theming, dark mode
- 5.3 Tipografi: typeface vs font, weight, type scale, line-height, letter-spacing, measure, optical size
- 5.4 Renk: palette yapısı, primary/secondary/accent, neutral ramp, semantic color, HEX/HSL/OKLCH, contrast ratio
- 5.5 Grid ve spacing: column, gutter, container, max-width, 8pt grid, spacing scale, vertical rhythm
- 5.6 Yüzey ve derinlik: elevation, shadow, radius, border, z-index, layering
- 5.7 Görsel varlıklar: icon set, illustration, imagery, aspect ratio, art direction, asset
- 5.8 Responsive ve mobile-first: breakpoint, fluid typography, container query, adaptive vs responsive
- 5.9 Motion: duration, easing, transition, micro-interaction, orchestration, staggering, prefers-reduced-motion
- 5.10 Figma dili: frame, auto layout, constraint, component, variant, instance, property, library, Dev Mode
- 5.11 Kendini test et

## Bölüm 6 — Erişilebilirlik (a11y)
- 6.1 a11y nedir, kimi ilgilendirir, neden hukuki bir yükümlülük
- 6.2 WCAG, uyum seviyeleri (A / AA / AAA), POUR ilkeleri
- 6.3 Semantic HTML, landmark, heading hiyerarşisi
- 6.4 Screen reader, alt text, ARIA, role, aria-label, aria-live
- 6.5 Klavye erişimi: focus, focus ring, focus trap, tab order, skip link
- 6.6 Renk kontrastı, sadece renge dayanmama, touch target boyutu
- 6.7 Form erişilebilirliği: label, hata mesajı, required, autocomplete
- 6.8 Hareket ve animasyon hassasiyeti
- 6.9 Denetleme araçları: Lighthouse, axe, manuel klavye/screen reader testi
- 6.10 Kendini test et

## Bölüm 7 — Site anatomisi: bölüm ve arayüz parçalarının adları
- 7.1 Sayfa iskeleti: header, nav, main, aside, sidebar, footer, layout, app shell
- 7.2 Navigasyon: nav link, hamburger menu, mega menu, breadcrumb, tab bar, sticky/fixed header, scroll-aware header, command palette
- 7.3 Hero ve üst bölge: hero, eyebrow, headline, subheadline, primary/secondary CTA, hero visual, product shot, mockup frame, background treatment
- 7.4 İkna bölümleri: social proof, logo cloud, testimonial, case study, stat block, avatar stack, rating, trust badge, comparison table
- 7.5 İçerik bölümleri: feature grid, bento grid, alternating section, split section, timeline, step/process section, accordion, tabs, carousel, gallery, masonry, sticky scroll, scrollytelling, marquee
- 7.6 Fiyatlandırma: pricing table, tier, plan card, billing toggle, "most popular" badge, feature matrix
- 7.7 Dönüşüm ve toplama: newsletter/lead capture, waitlist, contact form, booking widget, CTA banner, exit intent, cookie banner
- 7.8 Geri bildirim katmanı: toast, snackbar, alert banner, inline validation, tooltip, popover, dropdown, context menu, modal, dialog, drawer, sheet, confirm dialog, overlay
- 7.9 Durum ekranları: loading state, skeleton, spinner, progress indicator, empty state, error state, 404, 500, offline state, success state
- 7.10 Veri gösterimi: table, data grid, list, card, chip, tag, badge, pagination, infinite scroll, load more, filter, facet, sort, search
- 7.11 Form parçaları: input, textarea, select, combobox, checkbox, radio, switch, slider, stepper, date picker, file upload, multi-step form, helper text, placeholder
- 7.12 Uygulama içi ekranlar: dashboard, onboarding, product tour, coachmark, checklist, settings, profile, notification center, activity feed, kanban board
- 7.13 Küçük parçalar: avatar, divider, kbd, code block, blockquote, scroll indicator, back-to-top, FAB
- 7.14 Kendini test et

## Bölüm 8 — Front-end temelleri (yazmak için değil, konuşmak için)
- 8.1 HTML: element, tag, attribute, semantic HTML, document flow
- 8.2 CSS: selector, cascade, specificity, box model, display, position, overflow
- 8.3 Layout: flexbox, grid, gap, alignment, aspect-ratio
- 8.4 CSS yaklaşımları: vanilla CSS, BEM, utility-first, CSS Modules, CSS-in-JS
- 8.5 JavaScript kavramları: variable, function, event, event listener, promise, async/await, fetch, JSON
- 8.6 TypeScript: type, interface, type safety, ne zaman fark yaratır
- 8.7 Component mimarisi: component, props, state, children, composition, prop drilling, controlled/uncontrolled
- 8.8 Hook, side effect, re-render (kavramsal düzeyde)
- 8.9 Routing: route, dynamic route, nested route, layout, query param, redirect
- 8.10 Rendering stratejileri: CSR, SSR, SSG, ISR, streaming, hydration, partial hydration, islands, server component
- 8.11 Build zinciri: package manager, dependency, package.json, lockfile, bundler, transpiler, minify, tree-shaking, code splitting, lazy loading, source map
- 8.12 Performans: Core Web Vitals (LCP, INP, CLS), TTFB, FCP, bundle size, image optimization, font loading, preload/prefetch, performance budget
- 8.13 SEO temelleri: title, meta description, heading yapısı, canonical, robots.txt, sitemap.xml, structured data, Open Graph, Twitter card, favicon
- 8.14 Kendini test et

## Bölüm 9 — Framework ve kütüphane haritası
- 9.1 Framework, library, runtime, meta-framework ayrımı
- 9.2 UI katmanı: React, Vue, Svelte, Angular, Solid — ne zaman hangisi, ne zaman değil
- 9.3 Meta-framework: Next.js, Astro, Nuxt, SvelteKit, React Router/Remix
- 9.4 Styling: Tailwind, CSS Modules, styled-components, vanilla-extract, Panda
- 9.5 Component kütüphaneleri: headless vs styled — Radix, shadcn/ui, Headless UI, Material UI, Chakra, Mantine, Ant Design
- 9.6 Animasyon ve 3D: CSS transition, Motion (Framer Motion), GSAP, Lenis, Three.js / React Three Fiber, Lottie, Spline
- 9.7 State yönetimi: local state, context, Redux Toolkit, Zustand, Jotai
- 9.8 Server state: TanStack Query, SWR — client state'ten farkı
- 9.9 Form ve doğrulama: React Hook Form, Zod, Formik, Yup
- 9.10 İçerik yönetimi: CMS, headless CMS (Sanity, Contentful, Strapi, Payload), MDX
- 9.11 Sık duyulan diğerleri: i18n, tarih kütüphaneleri, charting, table, icon setleri
- 9.12 Teknoloji seçimi: trade-off tablosu, ekosistem, bakım maliyeti, ekip, vendor lock-in
- 9.13 Kendini test et

## Bölüm 10 — Back-end ve API
- 10.1 Server, runtime, process, port, environment
- 10.2 HTTP metodları: GET, POST, PUT, PATCH, DELETE
- 10.3 Status kodları: 2xx, 3xx, 4xx, 5xx — sık görülenler ve anlamları
- 10.4 API, endpoint, resource, request/response, payload, contract
- 10.5 REST, GraphQL, tRPC, WebSocket, SSE, polling — hangisi hangi problemde
- 10.6 Server action, API route, BFF (backend for frontend)
- 10.7 Katmanlar: middleware, controller, service, repository
- 10.8 Serverless, edge function, cold start, region
- 10.9 Webhook, third-party integration, SDK, API key
- 10.10 Rate limiting, throttling, quota, pagination (offset vs cursor)
- 10.11 Caching: browser cache, CDN, TTL, ETag, stale-while-revalidate, cache invalidation
- 10.12 Arka plan işleri: queue, worker, job, cron job, retry, dead letter queue
- 10.13 Back-end ekosistemleri: Node.js, Express, Fastify, NestJS, Python (Django, FastAPI), Go, Laravel, Rails
- 10.14 Dosya ve medya: upload, object storage, signed URL, image CDN, transcoding
- 10.15 Sık kullanılan üçüncü parti servisler: ödeme, e-posta, SMS, arama, analitik
- 10.16 Kendini test et

## Bölüm 11 — Veritabanı ve veri modeli
- 11.1 Veri neden ayrı bir katman
- 11.2 Relational, document, key-value, vector veritabanları
- 11.3 PostgreSQL, MySQL, SQLite, MongoDB, Redis — hangisi ne zaman
- 11.4 Şema, tablo, satır, sütun, veri tipi, nullable, default
- 11.5 Primary key, foreign key, unique, constraint, index
- 11.6 İlişki türleri: one-to-one, one-to-many, many-to-many, join table
- 11.7 Normalizasyon, denormalizasyon ve aradaki takas
- 11.8 Query, join, aggregate, transaction, ACID
- 11.9 Yaygın problemler: N+1, slow query, eksik index, lock
- 11.10 ORM: Prisma, Drizzle; migration, seed, schema drift
- 11.11 Backup, restore, soft delete, audit log, data retention
- 11.12 BaaS: Supabase, Firebase, Neon, PlanetScale — ne zaman uygun, ne zaman değil
- 11.13 Kendini test et

## Bölüm 12 — Auth: kimlik doğrulama ve yetkilendirme
- 12.1 Authentication vs authorization
- 12.2 Session vs token yaklaşımı
- 12.3 Cookie: httpOnly, secure, sameSite; localStorage'da token tutmanın riski
- 12.4 JWT, access token, refresh token, expiry, revocation
- 12.5 OAuth 2.0, OIDC, social login, SSO, SAML
- 12.6 Passwordless: magic link, OTP, passkey / WebAuthn
- 12.7 MFA / 2FA
- 12.8 Şifre güvenliği: hashing, salting, bcrypt/argon2, password reset akışı, email verification
- 12.9 Yetkilendirme modelleri: RBAC, ABAC, permission, scope, multi-tenancy
- 12.10 Hazır çözümler: Auth.js/NextAuth, Clerk, Auth0, Supabase Auth — trade-off
- 12.11 Auth'un UX tarafı: sign-up/sign-in akış tasarımı, hata mesajları, session süresi, account recovery
- 12.12 Kendini test et

## Bölüm 13 — Güvenlik ve hukuki yükümlülük
- 13.1 Threat model ve attack surface düşünmek
- 13.2 OWASP Top 10'un mantığı
- 13.3 XSS, CSRF, SQL injection, SSRF, IDOR, clickjacking
- 13.4 Same-origin policy, CORS, CSP
- 13.5 HTTPS/TLS, sertifika, mixed content
- 13.6 Secret yönetimi: environment variable, .env, secret manager, key rotation, sızıntı senaryosu
- 13.7 Input validation, sanitization, escaping — üçü aynı şey değil
- 13.8 Principle of least privilege, defense in depth
- 13.9 Bot ve kötüye kullanım: CAPTCHA, honeypot, WAF, DDoS koruması
- 13.10 KVKK ve GDPR'ın ürün tarafına yansıması: consent, veri minimizasyonu, silme hakkı
- 13.11 Yasal sayfalar: privacy policy, terms of service, cookie policy, aydınlatma metni, erişilebilirlik beyanı
- 13.12 Kendini test et

## Bölüm 14 — Sistem mimarisi ve sistem tasarımı
- 14.1 Mimari nedir, hangi anda karar verilir, geri dönüşü ne kadar zor
- 14.2 Monolith, modular monolith, microservice, serverless — trade-off tablosu
- 14.3 Client-server, three-tier, katmanlı mimari
- 14.4 Event-driven mimari, message queue, pub/sub
- 14.5 Load balancer, reverse proxy, API gateway
- 14.6 Horizontal vs vertical scaling, autoscaling
- 14.7 Stateless vs stateful
- 14.8 Single point of failure, redundancy, failover, graceful degradation
- 14.9 Latency, throughput, availability ("dokuzlar"), SLA / SLO / SLI
- 14.10 Consistency, eventual consistency, CAP teoremi (kavramsal)
- 14.11 Idempotency, retry, exponential backoff, circuit breaker
- 14.12 ADR (Architecture Decision Record) ve trade-off yazma biçimi
- 14.13 Bir mimari diyagramını okumak: kutular, oklar, sınırlar
- 14.14 Kendini test et

## Bölüm 15 — Git ve GitHub
- 15.1 Version control neden var
- 15.2 Repository, working directory, staging area, commit, HEAD, diff
- 15.3 Branch, checkout, merge, rebase, fast-forward, conflict, cherry-pick
- 15.4 Remote, origin, upstream, clone, fork, push, pull, fetch
- 15.5 Pull request, code review, approve, request changes, squash merge
- 15.6 Stash, tag, release, revert, reset, blame
- 15.7 Branching stratejileri: Git Flow, GitHub Flow, trunk-based development
- 15.8 Commit convention, semantic versioning, changelog
- 15.9 Issue, label, milestone, project board, template
- 15.10 .gitignore, Git LFS, submodule, monorepo (Turborepo, workspace)
- 15.11 GitHub Actions ve workflow dosyasının mantığı
- 15.12 Kendini test et

## Bölüm 16 — DevOps, yayın ve gözlemlenebilirlik
- 16.1 CI/CD tam olarak nedir: continuous integration, delivery, deployment
- 16.2 Pipeline anatomisi: job, step, artifact, build, test, deploy
- 16.3 Ortamlar: local, dev, preview, staging, production; environment variable yönetimi
- 16.4 Docker: image, container, Dockerfile, layer, volume, compose
- 16.5 Kubernetes nedir, ne zaman gerekir, ne zaman gereksiz karmaşıklıktır
- 16.6 Hosting ve deploy platformları: Vercel, Netlify, Cloudflare, Railway, Render, Fly.io, AWS/GCP/Azure
- 16.7 Domain ve DNS: A, CNAME, TXT kayıtları, nameserver, propagation, SSL sertifikası, CDN
- 16.8 Deploy stratejileri: rolling, blue-green, canary, feature flag, kill switch
- 16.9 Rollback, hotfix, incident, severity, on-call, runbook, postmortem
- 16.10 Monitoring, logging, tracing, observability, uptime monitor, alerting
- 16.11 Error tracking (Sentry), web analytics, product analytics ve event tasarımı
- 16.12 Maliyet tarafı: hosting, bandwidth, build minutes, vendor lock-in
- 16.13 Kendini test et

## Bölüm 17 — Test, kalite ve kod sağlığı
- 17.1 Test neden var, test piramidi
- 17.2 Unit, integration, E2E, smoke, regression test
- 17.3 Araçlar: Vitest/Jest, Testing Library, Playwright, Cypress
- 17.4 Test coverage, flaky test, fixture, mock, stub
- 17.5 QA süreci: test case, bug report yazma, reproduce steps, severity vs priority
- 17.6 Visual regression, accessibility test, performance budget
- 17.7 Linter, formatter, type check, pre-commit hook, CI gate
- 17.8 Clean code ilkeleri: anlamlı isimlendirme, tek sorumluluk, DRY, erken return, magic number
- 17.9 Teknik borç, refactor, code smell, boy scout rule
- 17.10 Code review kültürü: neye bakılır, yorum nasıl yazılır
- 17.11 Kendini test et

## Bölüm 18 — Şirket ortamı sözlüğü ve iletişim kalıpları
- 18.1 Kısaltmalar: EOD, EOW, ETA, ASAP, FYI, TL;DR, IMO, PTAL, LGTM, WIP, OOO, PTO, 1:1
- 18.2 Süreç kalıpları: ship it, punt, park, deprioritize, must-have, nice-to-have, quick win, bandwidth, bikeshedding, yak shaving
- 18.3 Risk ve olay dili: blocker, escalation, fire drill, war room, incident, sev1/sev2, action item
- 18.4 Karar dili: trade-off, constraint, assumption, dependency, risk, spike, timebox
- 18.5 Toplantı türleri: kickoff, sync, demo, design review, architecture review, grooming, all-hands
- 18.6 Yazılı formatlar: status update, RFC, ADR, one-pager, changelog, release note
- 18.7 Kültür kalıpları: async-first, documentation-first, disagree and commit, blameless culture
- 18.8 Kendini test et

## Bölüm 19 — Yapay zekâ ile profesyonel çalışma
- 19.1 Modelin neyi bilip neyi bilmediği: context window, knowledge cutoff, hallucination
- 19.2 İyi prompt anatomisi: rol, bağlam, görev, kısıt, format, kabul kriteri, örnek
- 19.3 Bağlam verme yolları: referans site, ekran görüntüsü, mevcut kod, design token, dosya
- 19.4 Kısıt tanımlama: stack, kütüphane, erişilebilirlik, performans, tasarım yasakları
- 19.5 Kabul kriteriyle istemek: "bitti" tanımını prompt'a koymak
- 19.6 Geri bildirim döngüsü: beğenmediğin şeyi teknik terimle söylemek
- 19.7 Amatör prompt vs profesyonel prompt — yan yana karşılaştırmalar
- 19.8 İşi bölme: tek mesajda ne kadar istenir, bölüm bölüm çalışma
- 19.9 Çıktıyı denetleme: hangi iddia doğrulanır, neye güvenilmez
- 19.10 Tekrar eden tuzaklar: jenerik tasarım, uydurma API, eskimiş sürüm bilgisi
- 19.11 Kendini test et

## Bölüm 20 — Sıfırdan tam sürüme akış haritası
- 20.1 Faz 0 — Fikir ve problem tanımı
- 20.2 Faz 1 — Discovery ve araştırma
- 20.3 Faz 2 — Spec, scope ve önceliklendirme
- 20.4 Faz 3 — Bilgi mimarisi ve akışlar
- 20.5 Faz 4 — Tasarım: wireframe → tasarım sistemi → hi-fi → prototype
- 20.6 Faz 5 — Teknik kararlar ve proje kurulumu
- 20.7 Faz 6 — Geliştirme döngüsü
- 20.8 Faz 7 — İçerik, medya ve SEO hattı
- 20.9 Faz 8 — Test ve kalite kapıları
- 20.10 Faz 9 — Yayın
- 20.11 Faz 10 — Yayın sonrası: ölçüm, bakım, iterasyon
- 20.12 Her fazda kim ne yapar, hangi çıktı üretilir, hangi terimler konuşulur (özet tablo)

## Bölüm 21 — "Bir sitede olması gerekenler" kontrol listesi
- 21.1 Teknik kontrol listesi
- 21.2 Tasarım ve UX kontrol listesi
- 21.3 Erişilebilirlik kontrol listesi
- 21.4 İçerik ve SEO kontrol listesi
- 21.5 Performans kontrol listesi
- 21.6 Güvenlik kontrol listesi
- 21.7 Hukuki kontrol listesi
- 21.8 Operasyonel kontrol listesi: monitoring, backup, sahiplik, dokümantasyon
- 21.9 Launch günü kontrol listesi

## Bölüm 22 — Alfabetik terim dizini
- Terim → bölüm ve alt başlık numarası

## Ek A — Günde 3-5 terim çalışma takvimi
## Ek B — Doğrulama kaynakları
