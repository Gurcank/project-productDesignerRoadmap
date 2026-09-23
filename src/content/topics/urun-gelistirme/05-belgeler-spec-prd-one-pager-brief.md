---
title: "Belgeler: spec, PRD, one-pager, brief"
sectionNumber: "2.5"
category: "urun-gelistirme"
order: 5
cardCount: 4
sourceFile: "02-urun-gelistirme-yasam-dongusu.md"
origin: "material"
flags: []
---
Kararların yazıya döküldüğü formatlar. Yazılmamış karar, karar değildir — hatırlanma biçimi kişiden kişiye değişir ve sonra tartışma yeniden açılır.

### Spec

- **Terim (İngilizce):** Spec — specification
- **Türkçesi:** Şartname / teknik tanım
- **Tanım:** Yapılacak şeyin ne olduğunu, neyi kapsayıp neyi kapsamadığını yazan belge.
- **Ne işe yarar / neden var:** Herkesin aynı şeyi anlamasını sağlar. Sözlü anlatımda beş kişi beş farklı şey anlar ve fark, iş bittiğinde ortaya çıkar. Spec bu farkı en ucuz aşamada, yazarken yakalar.
- **Nerede karşına çıkar:** Geliştirme başlamadan önce. Yapay zekâya iş yaptırırken de aynı işlevi görür: iyi bir prompt aslında bir spec'tir (19.2).
- **Örnek kullanım:** "Spec'te bu durumun ne olacağı yazmıyor; şimdi karar vermemiz gerekiyor."
- **Karıştırılanlar:** *Spec* ≠ *tasarım dosyası*. Figma dosyası ekranı gösterir, spec kuralı yazar: hangi durumda ne olacağı, hangi verinin nereden geleceği, hangi hâlin kapsam dışı olduğu.
- **İlgili terimler:** PRD, Acceptance criteria (2.6), Scope (2.8)

### PRD

- **Terim (İngilizce):** PRD — Product Requirements Document
- **Türkçesi:** Ürün gereksinim belgesi
- **Tanım:** Bir ürün veya özelliğin neden yapıldığını, kimin için yapıldığını ve neyi kapsadığını anlatan ana belge.
- **Ne işe yarar / neden var:** Spec'ten daha geniştir: problemi, hedefi, başarı ölçütünü ve kapsam dışını da içerir. Ekibe tek bir referans noktası verir.
- **Nerede karşına çıkar:** Genelde PM yazar; tasarımcı ve geliştirici yorum ekler. Büyük şirketlerde PRD onaylanmadan iş başlamaz.
- **Örnek kullanım:** "PRD'de başarı ölçütü yazılmamış; bu iş bittiğinde başarılı olup olmadığını nasıl anlayacağız?"
- **Karıştırılanlar:** *PRD* ≠ *spec*. PRD **neden** ve **ne** sorularına, spec daha çok **ne tam olarak** sorusuna cevap verir. Bazı ekipler ikisini tek belgede birleştirir.
- **İlgili terimler:** Spec, One-pager, Success metric (3.7)

**Tipik PRD iskeleti** (ekipten ekibe değişir, ama bu başlıklar çoğunda vardır):
1. Problem ve bağlam
2. Hedef ve başarı ölçütü
3. Hedef kullanıcı
4. Kapsam (in scope) ve kapsam dışı (out of scope)
5. Kullanıcı akışları ve gereksinimler
6. Kabul kriterleri
7. Varsayımlar, riskler, bağımlılıklar
8. Açık sorular

### One-pager

- **Terim (İngilizce):** One-pager
- **Türkçesi:** Tek sayfalık özet
- **Tanım:** Bir fikri tek sayfada anlatan kısa belge.
- **Ne işe yarar / neden var:** Karar vericinin zamanı sınırlıdır. Fikri tek sayfaya sığdıramamak çoğu zaman fikrin henüz netleşmediğinin işaretidir; bu yüzden format aynı zamanda bir düşünme disiplini.
- **Nerede karşına çıkar:** Yeni bir fikri yönetime sunarken. PRD yazmadan önceki ilk adım.
- **Örnek kullanım:** "Tam PRD yazmadan önce bir one-pager çıkarıp yönetimden ön onay alalım."
- **İlgili terimler:** PRD, RFC (18.6), Stakeholder (2.1)

### Brief

- **Terim (İngilizce):** Brief (design brief, creative brief)
- **Türkçesi:** Brif / iş tanımı
- **Tanım:** Bir tasarım veya içerik işine başlamadan önce hedefi, hedef kitleyi, kısıtları ve teslim edilecekleri tanımlayan kısa metin.
- **Ne işe yarar / neden var:** Tasarımcının doğru sorunun peşine düşmesini sağlar. Brief'siz başlayan işlerde revizyon sayısı artar, çünkü hedef en baştan ortak değildir.
- **Nerede karşına çıkar:** Ajans işlerinde ve serbest çalışmada standart. Bir müşteriden iş alırken ilk isteyeceğin belge budur; yoksa sen yazıp onaylatırsın.
- **Örnek kullanım:** "Brief'te marka tonu yazmıyor; üç yön hazırlayıp müşteriye seçtirelim."
- **Karıştırılanlar:** *Brief* ≠ *spec*. Brief hedefi ve kısıtı verir, çözümü tarif etmez; spec çözümü tarif eder.
- **İlgili terimler:** Spec, Scope (2.8), Constraint (18.4)
