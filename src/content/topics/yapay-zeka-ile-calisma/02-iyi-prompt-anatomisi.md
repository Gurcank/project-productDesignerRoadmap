---
title: "İyi prompt anatomisi"
sectionNumber: "19.2"
category: "yapay-zeka-ile-calisma"
order: 2
cardCount: 1
sourceFile: "19-yapay-zeka-ile-profesyonel-calisma.md"
origin: "material"
flags: []
---
Bir talimatın yedi bileşeni. Hepsi her seferinde gerekmez ama **eksik olan her bileşen, modelin senin yerine karar verdiği bir yer** demektir.

| # | Bileşen | Neyi cevaplar | Bu dosyadaki karşılığı |
|---|---|---|---|
| 1 | **Rol** | Hangi bakış açısından yaklaşsın | — |
| 2 | **Bağlam** | Bu iş neyin parçası, kim için | Brief (2.5) |
| 3 | **Görev** | Tam olarak ne yapılacak | User story (2.6) |
| 4 | **Kısıt** | Neyi yapamaz, neye uymalı | Constraint (18.4) |
| 5 | **Format** | Çıktı hangi biçimde gelsin | — |
| 6 | **Kabul kriteri** | "Bitti" ne demek | Acceptance criteria (2.6) |
| 7 | **Örnek / referans** | Neye benzesin, neye benzemesin | Moodboard (4.5) |

**En çok atlanan üçü: kısıt, kabul kriteri ve "neye benzemesin".** Üçü de "istemediğim şeyi baştan eleme" işlevi görür ve bu, iterasyon sayısını en çok düşüren şeydir.

### Negatif kısıt

- **Terim (İngilizce):** Negative constraint, anti-pattern
- **Türkçesi:** Olumsuz kısıt, kaçınılacak kalıp
- **Tanım:** Ne istediğini değil, **ne istemediğini** açıkça yazmak.
- **Ne işe yarar / neden var:** Bir model, belirtilmeyen her yerde **en yaygın kalıba** yönelir — çünkü eğitim verisinde en çok o vardır. "Jenerik" çıktının sebebi budur. Yasaklamadığın varsayılan, gelecektir.
- **Nerede karşına çıkar:** Tasarım taleplerinde en kritik bileşen.
- **Örnek kullanım:** "Eşit üç sütunlu ikon + başlık + iki satır gri metin kartı kullanma. Sebepsiz gradient başlık kullanma. Sıralı olmayan içeriğe 01/02/03 numarası verme."
- **İlgili terimler:** Feature grid (7.5), Design system (5.1)
