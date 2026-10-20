# Kapsam haritası: Ürün Analitiği ve Deney

> Ders üretim hattının 1. ve 2. adımı ([ders-standardi.md](ders-standardi.md)). Kaynakların hepsi
> tarayıcı panelinde açılıp okundu (2026-10-19). Bu bölüm, **Çalışma Biçimi**'ndeki hedef ve ölçüm
> dersinin (OKR, KPI, North Star, vanity metrik) ve DevOps'taki analitik dersinin üstüne kurulur.

## Birincil kaynaklar

| Kısaltma | Kaynak | Ne için |
|---|---|---|
| Rodden | Kerry Rodden, "How to choose the right UX metrics" (GV, 2015); HEART, CHI 2010 özeti | HEART, Goals-Signals-Metrics |
| NSP | Amplitude, North Star Playbook, Bölüm 1 | North Star, girdiler, metrik ağacı |
| a16z | Jordan ve diğerleri, "16 Startup Metrics" (2015) | "Aktif"in tanımı, churn, CAC, kümülatif grafik ve grafik hileleri |
| AARRR | Amplitude, "AARRR: pirate metrics framework" (2024) | Beş aşama ve örnek metrikler |
| Loops | Reforge, "Growth Loops are the New Funnels" (2018) | Hunilerin sınırları (Faz 7'de okundu) |
| Ret | Amplitude, "Retention analytics" rehberi | N-gün, sınırsız, aralık elde tutma; davranışsal kohort |
| Segment | Twilio Segment, "Data Collection Best Practices" | İzleme planı, olay adlandırma |
| Miller | Evan Miller, "How Not To Run an A/B Test" (2010) ve örneklem hesaplayıcısı | Erken bakma, örneklem büyüklüğü, MDE, güç |
| SRM | Microsoft Research ExP, "Diagnosing Sample Ratio Mismatch" (2020) | SRM, hayatta kalma yanlılığı |
| Wiki | Wikipedia: "Correlation does not imply causation", "Simpson's paradox" | Korelasyon, nedensellik, Simpson |

**Kullanılmayanlar:** HEART makalesinin PDF'i (indirme riski; yazarın GV yazısı kullanıldı). *Lean
Analytics*'in "iyi metrik" ölçütleri yalnız ikincil özetlerde bulundu; kullanılmadı.

## Kavram → ders

| # | Ders (slug) | Kavramlar | Görsel | Araç |
|---|---|---|---|---|
| 1 | iyi-metrik | metriğin tanımı, oran ve sayı, "aktif"in tanımı, HEART, Goals-Signals-Metrics | Layers (hedef → sinyal → metrik) | metrik-karti |
| 2 | metrik-agaci | North Star'ın üç özelliği, girdiler, oyun türleri, takım metrikleri | Tree | metrik-karti |
| 3 | aarrr | edinme, aktivasyon, elde tutma, tavsiye, gelir; "aha" anı; huninin sınırı | Layers (huni) | — |
| 4 | huni-analizi | adım dönüşümü, toplam dönüşüm, zaman penceresi, kırılım, huni ≠ neden | Chart (çubuk) | — |
| 5 | kohort-ve-elde-tutma | kohort, N-gün, sınırsız, aralık, churn, kohort tablosu | Heatmap | — |
| 6 | segmentasyon | davranışsal, kanal, değer segmenti; ortalamanın gizledikleri | Matrix2x2 | — |
| 7 | izleme-plani | iş hedefinden olaya, nesne + eylem, özellikler, adlandırma kuralları, kişisel veri | Tree | izleme-plani |
| 8 | ab-testi-tasarimi | hipotez, rastgele atama, MDE, güç, anlamlılık, örneklem, süre | Demo (örneklem hesaplayıcı) | ab-plani |
| 9 | deney-tuzaklari | erken bakma, SRM, hayatta kalma yanlılığı, yetersiz güç | Chart (çubuk) | ab-plani |
| 10 | dashboard | az ve tanımlı metrik, kümülatif grafik tuzağı, grafik hileleri, hedefe bağlama | Chart (çizgi) | — |
| 11 | korelasyon-ve-nedensellik | korelasyon, karıştırıcı değişken, Simpson paradoksu, "aha" bulgularının sınırı, deney | Heatmap | — |

## Rol öncelikleri

Kategori: PD Ö · PM T · PO Ö · PjM İ · SM İ · BA Ö · UXR Ö. Konu düzeyinde istisnalar `roles.ts`'te
(`ANALYTICS_FOR_*`).

## Çakışma tablosu

| Kavram | Asıl yeri | Bu bölümde |
|---|---|---|
| OKR, KPI, North Star, vanity metrik, öncü/ardıl gösterge | calisma-bicimi/hedef-ve-olcum… | Metrik ağacı ve iyi metrik derinleşir |
| Olay izleme, analitik araçları | devops-ve-yayin/hata-izleme-ve-analitik | İzleme planı iş hedefinden başlar |
| A/B testinin temeli | ux-ui-ilkeleri/degerlendirme-yontemleri | Tasarım, örneklem ve tuzaklar |
| Varsayım testi ≠ A/B | urun-yonetimi/varsayim-haritalama… | A/B'nin yeri inşa ettikten sonra |
| Büyüme döngüsü, huni sorunları | urun-yonetimi/buyume-donguleri-ve-plg | AARRR aşamaları ve ölçüm |
| Kişisel veri | guvenlik-ve-hukuk; is-analizi/veri-gereksinimleri | İzleme planında veri azaltma |
