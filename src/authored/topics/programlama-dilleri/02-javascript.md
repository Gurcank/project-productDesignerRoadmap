---
title: "JavaScript"
sectionNumber: ""
category: "programlama-dilleri"
order: 2
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "MDN — JavaScript"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  - label: "ECMAScript standardı (TC39)"
    url: "https://tc39.es/ecma262/"
---

Tarayıcıda çalışan **tek** programlama dili. Bir web sayfasında tıklamaya tepki veren, veri çeken, ekranı güncelleyen her şey ya JavaScript'tir ya da JavaScript'e derlenmiştir.

Kavramsal tarafı materyalde 8.5'te; burada dil profili var.

## Nerede karşına çıkar

- **Tarayıcı.** Alternatifi yok. "Bunu istemcide yapalım" demek JS demektir.
- **Sunucu.** Node.js ile aynı dil arkada da çalışır — bir ekibin tek dille iki tarafı yazabilmesi, küçük ekiplerde büyük avantaj (10.13).
- **Mobil ve masaüstü.** React Native, Electron.

## Neyi iyi yapar

- **Her yerde çalışır.** Tek dille tarayıcı, sunucu, mobil.
- **Ekosistem devasa.** Hemen her iş için hazır paket var; bu, tasarımda istediğin çoğu bileşenin hazır geleceği anlamına gelir.
- **İşe alım kolay.** En çok bilinen dillerden biri.

## Neyi kötü yapar

- **Tip güvenliği yok.** Bir alanın adını yanlış yazmak çalışma anında patlar, yazarken değil. Büyük projelerde bu, TypeScript'i neredeyse zorunlu kılar.
- **Ekosistem hızlı eskir.** Bugün standart olan araç iki yıl sonra bakım modunda olabilir.
- **Paket bağımlılığı derinleşir.** Küçük bir özellik yüzlerce dolaylı bağımlılık getirebilir; bu hem güvenlik hem performans yüzeyidir (8.12).

## Alternatifler

- **TypeScript** — aynı dilin tipli hâli; yeni projelerde varsayılan sayılır.
- **WebAssembly** — tarayıcıda ağır hesap için; JS'in yerine değil, yanına.

## Bir Product Designer olarak

- **İstemcide olan her şey JS bütçesine yazılır.** Her etkileşimli bileşen indirilen kod demektir; "sadece küçük bir animasyon" bir paket getirebilir.
- **Tarayıcıda çalışan kod gizli değildir.** İstemciye gönderilen hiçbir şey sır sayılmaz (Bölüm 13) — "bunu sadece admin görsün" istemci tarafında çözülmez.
- **JS kapalıysa ya da geç yüklenirse ne olacak?** İçeriğin sunucudan gelmesi (SSR/SSG) bir tasarım kararıdır, teknik detay değil (8.10).
