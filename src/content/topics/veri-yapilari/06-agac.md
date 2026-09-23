---
title: "Ağaç — IA, DOM, kategori hiyerarşisi"
sectionNumber: ""
category: "veri-yapilari"
order: 6
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "MDN — DOM'a giriş (belge bir ağaçtır)"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
  - label: "Nielsen Norman Group — Bilgi mimarisi çalışma rehberi"
    url: "https://www.nngroup.com/articles/ia-study-guide/"
---

**Ağaç**, her öğenin bir üstü ve birden çok altı olduğu yapıdır. Tek bir kök vardır, dallanır, uçlarda yaprak düğümler bulunur. Döngü yoktur: bir düğüm kendi atası olamaz.

Bu yapı senin işinde diğerlerinden daha fazla karşına çıkar, çünkü **bilgi mimarisi bir ağaçtır** (4.3).

## Nerede karşına çıkar

- **Site haritası ve menü.** Ana kategoriler, alt kategoriler, sayfalar.
- **DOM.** Tarayıcının sayfayı tuttuğu yapı bir ağaçtır; `<body>` kök, her element bir düğüm. CSS seçicilerinin ve erişilebilirlik ağacının üstünde durduğu yapı budur.
- **Figma katman paneli.** Frame içinde frame içinde katman — ağaç.
- **Dosya sistemi, yorum dizileri, kuruluş şeması, ürün kategorileri.**

## Ağacın tasarımdaki iki sabit sorusu

**1. Derinlik mi, genişlik mi?**

Aynı sayıda sayfayı az seviyeli-çok seçenekli (sığ ve geniş) ya da çok seviyeli-az seçenekli (derin ve dar) düzenleyebilirsin. Bu klasik bir IA gerilimidir:

| | Sığ ve geniş | Derin ve dar |
|---|---|---|
| Her adımda seçenek | Çok | Az |
| Hedefe ulaşma adımı | Az | Çok |
| Riski | Karar yorgunluğu, tarama zorluğu | Kaybolma, "nerede kaldım" hissi |
| Uygun olduğu yer | Kullanıcı ne aradığını biliyor | Kategoriler net ve birbirinden ayrık |

Genel eğilim sığ yapıları tercih etmek yönündedir, çünkü her seviye bir karar ve bir tıklama demektir. Ama bu bir kural değil, bir denge — kategoriler gerçekten ayrıksa derinlik zarar vermez.

**2. Bir şey birden fazla yerde olabilir mi?**

Ağacın tanımı gereği her düğümün **tek** üstü vardır. Ama gerçek ürünlerde bir ürün hem "Hediyelik" hem "Elektronik" olabilir. Bu istendiği anda yapı ağaç olmaktan çıkar — grafa (bir sonraki adım) ya da etiket sistemine dönüşür.

Bu, masum görünen ama mimariyi değiştiren bir istektir. "Bu ürün iki kategoride de görünsün" dediğinde, arkada breadcrumb'ın ne göstereceği, URL'in ne olacağı ve aynı sayfanın iki adresten erişilip erişilemeyeceği soruları açılır — sonuncusu doğrudan SEO sorunudur (8.13'teki canonical konusu).

## Ağaçta gezinme: breadcrumb neden ağaca ait

Breadcrumb, kökten mevcut düğüme giden yolu gösterir. Ağaç yapısı net değilse breadcrumb da net olmaz — "iki kategoride birden" durumunda hangi yolu göstereceği belirsizleşir.

Aynı şekilde **"üst seviyeye çık" davranışı** ile **tarayıcının geri tuşu** farklı şeylerdir: biri ağaçta yukarı, diğeri geçmişte geriye gider. İkisini karıştıran arayüzler kullanıcıyı şaşırtır.

## Ne kötü yapar

- **Çok-kategorili ilişkileri temsil edemez.** Yukarıdaki sorun.
- **Yeniden düzenleme pahalıdır.** Bir dalı taşımak, altındaki her şeyin adresini değiştirir; eski linkler kırılır. IA değişikliği bu yüzden yönlendirme (redirect) planı ister.
- **Derin ağaçta arama zayıftır.** Kullanıcı kategorilerde gezmek yerine aramayı tercih ediyorsa, ağacın kendisi yanlış çözüm olabilir.

## Alternatifler

- **Etiket (tag) sistemi** — hiyerarşi yerine çok boyutlu sınıflandırma; "bir şey birden çok yerde" problemini doğal çözer.
- **Faceted search** — filtreleri birleştirerek gezinme; büyük kataloglarda ağaca üstündür.
- **Graf** — ilişkiler gerçekten çok yönlüyse.
- **Düz liste + güçlü arama** — kategori sayısı azsa hiyerarşi kurmaya değmez.

## Bir Product Designer olarak

- **IA'yı kart sıralama ve ağaç testiyle doğrula, varsayımla değil** (4.3). Ağaç, ekibin kafasındaki mantığı değil kullanıcınınkini yansıtmalı.
- **"Bir öğe birden fazla kategoride olabilir mi?" sorusunu erken sor.** Cevap "evet" ise yapı ağaç değildir ve breadcrumb, URL, canonical kararlarını baştan vermen gerekir.
- **IA değişikliği bir yönlendirme planıdır.** Eski adresler kırılacaksa bunu tasarım teslimatının parçası say.
- **Derinliği sayma alışkanlığı edin.** Kullanıcının hedefe kaç tıklamada ulaştığı, ağacın şeklinin doğrudan sonucudur.
