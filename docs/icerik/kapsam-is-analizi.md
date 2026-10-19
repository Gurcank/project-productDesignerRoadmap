# Kapsam haritası: İş Analizi

> Ders üretim hattının 1. ve 2. adımı ([ders-standardi.md](ders-standardi.md)). Kaynakların hepsi
> tarayıcı panelinde açılıp okundu (2026-10-19). Bu bölüm, **Ürün Geliştirme** bölümünün üstüne kurulur:
> epic, user story ve kabul kriterleri orada herkese anlatılır; burada ihtiyacı bulmaktan çözümü
> değerlendirmeye kadar analistin işinin derinliği gelir.

## Birincil kaynaklar

| Kısaltma | Kaynak | Ne için |
|---|---|---|
| BABOK-G | IIBA, BABOK Guide Ek A: Sözlük (ücretsiz sayfa) | İş analizi, ihtiyaç, gereksinim türleri, doğrulama, izlenebilirlik, iş kuralı, UAT, teknik adları |
| BAS | IIBA, Business Analysis Standard 5.3 (açık sayfa) | Altı bilgi alanı ve 30 görev; görevlerin sıralı olmadığı |
| NASA-C | NASA Systems Engineering Handbook, Ek C | İyi gereksinim yazımı, "shall", doğrulanamayan kelimeler |
| NASA-D | NASA SE Handbook, Ek D | Doğrulama matrisi, tekil kimlik, kaynak |
| NASA-4.1 | NASA SE Handbook 4.1 | İhtiyaç → hedef → amaç izlenebilirliği |
| Cockburn | Alistair Cockburn, Basic Use Case Template (1998) | Use case alanları, seviyeler, uzantılar, şablonu birkaç turda doldurmak |
| OMG-BPMN / ISO | OMG BPMN 2.0.2; ISO/IEC 19510:2013 | BPMN'in sürümü ve amacı |
| Camunda | camunda.com/bpmn, BPMN başvurusu; DMN hit policy belgesi | Şekiller, kapılar, havuz ve kulvar; karar tablosu ilkeleri |
| OMG-DMN | OMG DMN sayfası | DMN'in tanımı ve sürümleri |
| ISTQB | ISTQB Sözlüğü V4.8.1 (CC BY 4.0) | Kabul testi, UAT, test senaryosu, doğrulama/geçerleme |
| NN/g | Jakob Nielsen, "Interviewing Users" (2010) | Görüşmenin sınırları |
| Atlassian | Team Playbook, 5 Whys | Beş neden |
| Wikipedia | System context diagram; Data dictionary | Bağlam diyagramı; veri sözlüğü |
| KVKK | 6698 sayılı Kanun (kvkk.gov.tr İngilizce çevirisi) | Kişisel veri, açık rıza, ilkeler |
| Gherkin | cucumber.io Gherkin başvurusu | Background, Scenario Outline, Examples |

**Kullanılmayanlar:** BABOK Guide'ın tam metni ve Business Analysis Standard'ın görev sayfaları üyelik
girişi istiyor; giriş yapılmadı. INCOSE'un gereksinim rehberi bir PDF indirmesi başlattı; kullanılmadı.
BPMN şartnamesinin kendisi PDF; onun yerine OMG ve ISO sayfaları okundu.

## Kavram → ders

| # | Ders (slug) | Kavramlar | Görsel | Araç |
|---|---|---|---|---|
| 1 | babok-haritasi | iş analizinin tanımı, "analist" bir unvan değil, altı alan, 30 görev, sıralı değil, uyarlanabilir yaklaşım | Tree (altı alan) | — |
| 2 | is-ihtiyaci-ve-kok-neden | ihtiyaç, hedef (nitel), amaç (ölçülebilir), çözüm ≠ ihtiyaç, kök neden, beş neden | Layers (ihtiyaç → hedef → amaç) | brd |
| 3 | gereksinim-cikarma-teknikleri | çıkarma, görüşme, gözlem, anket, atölye (tarafsız kolaylaştırıcı), beyin fırtınası, prototip, doküman analizi, "söylenen ≠ yapılan", sonuçları teyit | Spectrum | — |
| 4 | gereksinim-turleri | iş, paydaş, çözüm (işlevsel/işlevsel olmayan), geçiş; beyan edilmiş gereksinim; kısıt ve varsayım | Tree | brd |
| 5 | iyi-gereksinim-use-case-ve-user-story | "shall", ne değil nasıl değil, doğrulanamayan kelimeler, bir cümle bir fikir; use case alanları ve seviyeleri; ana senaryo ve uzantılar; use case ≠ user story | Swimlane | use-case |
| 6 | given-when-then | örnekle şartname, Background, Scenario Outline + Examples, gözlenebilir Then, bildirimsel yazım, kural başına örnek | Layers | — (gherkin-story'ye bağlanır) |
| 7 | bpmn-temelleri | olay, etkinlik, kapı (XOR/AND/OR), sıra akışı, mesaj akışı, havuz, kulvar; BPMN 2.0.2 / ISO 19510 | Swimlane | as-is-to-be |
| 8 | as-is-to-be-ve-bosluk-analizi | mevcut durum, gelecek durum, boşluk analizi, geçiş gereksinimi, değişim stratejisi | Matrix2x2 (etki × efor) | as-is-to-be |
| 9 | is-kurallari-ve-karar-tablolari | iş kuralı, karar tablosu (girdi, çıktı, kural), hit policy, eksiksizlik ve çakışma, DMN | Tree (karar bağımlılığı) + tablo | karar-tablosu |
| 10 | baglam-diyagrami-ve-kapsam | kapsam, sistem sınırı, dış varlıklar, etiketli ilişkiler, kapsam içi/dışı listesi | Hub (yeni) | brd |
| 11 | veri-gereksinimleri | varlık, öznitelik, ilişki, veri sözlüğü, kişisel veri, açık rıza, veri ilkeleri | Tree | — |
| 12 | izlenebilirlik | izlenebilirlik, ileri ve geri iz, tekil kimlik, etki analizi, değişiklik kontrolüne bağlantı | Heatmap (matris) | izlenebilirlik-matrisi |
| 13 | cozum-degerlendirme-ve-uat | doğrulama ≠ geçerleme, kabul kriterleri, kabul testi, UAT, çözüm performansını ölçmek, sınırlamalar | Cycle | uat |

## Rol öncelikleri (roles.ts istisnaları)

Kategori düzeyi: PD İ · PM Ö · PO T · PjM Ö · SM İ · BA T · UXR Ö. Konu düzeyinde:

| Ders | PM | PO | PjM | UXR |
|---|---|---|---|---|
| babok-haritasi | İ | İ | İ | İ |
| is-ihtiyaci-ve-kok-neden | Ö | T | Ö | Ö |
| gereksinim-cikarma-teknikleri | Ö | T | İ | Ö |
| gereksinim-turleri | İ | T | Ö | İ |
| iyi-gereksinim-use-case-ve-user-story | Ö | T | İ | İ |
| given-when-then | İ | T | İ | İ |
| bpmn-temelleri | İ | Ö | İ | İ |
| as-is-to-be-ve-bosluk-analizi | Ö | Ö | İ | Ö |
| is-kurallari-ve-karar-tablolari | İ | Ö | İ | İ |
| baglam-diyagrami-ve-kapsam | Ö | T | Ö | İ |
| veri-gereksinimleri | İ | Ö | İ | İ |
| izlenebilirlik | İ | İ | Ö | İ |
| cozum-degerlendirme-ve-uat | Ö | T | Ö | Ö |

BA'nın hepsi Temel; PD ve SM'nin hepsi İsteğe bağlı.

## Çakışma tablosu

| Kavram | Asıl yeri | Bu bölümde |
|---|---|---|
| Epic, user story, task | urun-gelistirme/gereksinimler… | Bağlantı; use case ile farkı ders 5'te |
| Kabul kriterleri ve Given/When/Then (temel) | urun-gelistirme/gereksinimler… | Ders 6 derinleşir: Background, Outline, kural başına örnek |
| Non-functional requirement (temel) | urun-gelistirme/gereksinimler… | Ders 4 onu dört türden biri olarak yerleştirir |
| PRD, spec, one-pager | urun-gelistirme/belgeler… | BRD şablonu "neden"i, PRD "ne"yi anlatır |
| INVEST, story bölme, Gherkin şablonu | cevik-pratikler/refinement… | Bağlantı |
| Kapsam ve kapsam kayması | urun-gelistirme/kapsam…; proje-yonetimi/kapsam-ve-wbs | Ders 10 bağlam diyagramını ekler |
| Değişiklik kontrolü | proje-yonetimi/degisiklik-kontrolu | Ders 12 etki analizini izlenebilirlikten yapar |
| Kalite ve kabul (proje) | proje-yonetimi/kalite-ve-kabul | Ders 13 UAT'yi ve çözüm değerlendirmeyi anlatır |
| Kullanıcı görüşmesi (araştırma) | ileride kullanici-arastirmasi | Ders 3 gereksinim için çıkarmayı anlatır |
| Kişisel veri (hukuk) | guvenlik-ve-hukuk | Ders 11 gereksinim tarafını anlatır |
| Kök neden (retro) | cevik-pratikler/retro-formatlari | Ders 2 iş ihtiyacı için kullanır |
