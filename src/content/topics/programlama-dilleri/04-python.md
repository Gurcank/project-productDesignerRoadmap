---
title: "Python"
sectionNumber: ""
category: "programlama-dilleri"
order: 4
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "Python — resmî dokümantasyon"
    url: "https://docs.python.org/3/"
---

Okunaklılığı öne alan, genel amaçlı bir dil. Veri işleme, otomasyon ve yapay zekâda fiilî standart.

## Nerede karşına çıkar

- **Veri ve yapay zekâ.** Model eğitimi, veri temizliği, analiz — bu alanın kütüphaneleri Python'da yaşıyor. Bir ürüne yapay zekâ girecekse arkada büyük ihtimalle Python vardır.
- **Otomasyon ve betikler.** Tek seferlik işler, veri taşıma, rapor üretimi.
- **Back-end.** Django ve FastAPI ile web servisleri (10.13).

## Neyi iyi yapar

- **Okunması kolay.** Teknik olmayan biri bile kabaca ne yaptığını takip edebilir.
- **Rakipsiz veri/AI ekosistemi.** Bu alanda alternatifi pratikte yok.
- **Hızlı prototip.** Bir fikri denemek için en kısa yol.

## Neyi kötü yapar

- **Hız.** Aynı işi Go veya Java'dan yavaş yapar; çoğu web işinde fark etmez, ağır hesapta eder.
- **Tarayıcıda çalışmaz.** İstemci tarafında yeri yok.
- **Paket/sürüm yönetimi tarihsel olarak zahmetli.** Ekip kurulumunda sürtünme yaratabilir.

## Alternatifler

- **Node.js** — ekip zaten JS biliyorsa back-end için.
- **Go** — yüksek trafikli, basit servisler için.
- **R** — yalnız istatistik ağırlıklı analizde.

## Bir Product Designer olarak

- **"Yapay zekâ ekleyelim" dediğinde arkada muhtemelen Python var** ve bu genelde **ayrı bir servis** demektir: ana uygulamayla ağ üstünden konuşur, yani gecikme ve hata durumu tasarlanmalıdır (19.2).
- **Model çalıştırmak yavaştır.** Saniyeler sürebilir; "yükleniyor" değil, ilerlemeli ya da arka plana atılmış bir akış tasarlaman gerekebilir.
