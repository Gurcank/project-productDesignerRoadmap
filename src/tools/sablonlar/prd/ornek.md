# PRD: Favori sipariş

## Künye

| | |
|---|---|
| Sahibi | Elif (Product Manager) |
| Ekip | Sipariş takımı: Deniz (PO), Selin (tasarım), Ece, Burak, Can (geliştirme), Zeynep (QA) |
| Durum | Tasarımda |
| Hedef yayın | 2. sprintin sonu, önce %10 kullanıcıya |

## Hedef ve iş amacı

Çeyrek hedefi tekrar eden siparişi artırmak. Bu özellik, **30 gün içinde ikinci sipariş verenlerin oranını %41'den %50'ye** taşımaya katkı vermek için yapılıyor. Kendi başarı ölçütü: favori kaydeden kullanıcıların %30'u, 30 gün içinde favoriden sipariş versin.

## Arka plan ve stratejik uyum

Müşteri görüşmelerinde sabah kahvesini her gün aynı şekilde içen kullanıcılar, siparişi her seferinde yeniden kurmaktan şikâyet etti. Sipariş verilerine göre aktif müşterilerin yarısından fazlası son beş siparişinde aynı ürünü aldı. Siparişi hızlandırmak, sabah kuyruğunda vazgeçmeyi azaltabilir.

## Varsayımlar

- Kullanıcılar bir siparişi "favori" olarak kaydetmeyi anlayacak.
- Favori sipariş, dükkânın o anki menüsünde yoksa kullanıcı bunu sorun etmeyecek, alternatif seçecek.
- Tek dokunuşla sipariş, yanlışlıkla sipariş riskini artırmayacak (onay ekranı korunuyor).

## Kullanıcı hikâyeleri

| Hikâye | Kabul kriteri |
|---|---|
| Sık sipariş veren biri olarak, bir siparişi favori kaydetmek istiyorum ki tekrar kurmak zorunda kalmayayım. | Sipariş özetinde "Favorilere ekle" var; eklenen sipariş ana ekranda görünüyor. |
| Favorisi olan biri olarak, favoriden tek dokunuşla sepete gitmek istiyorum. | Dokununca ürünler ve seçenekler sepete geliyor; onay ekranı açılıyor. |
| Favorisindeki ürün tükenmiş biri olarak, bunu sepetten önce görmek istiyorum. | Tükenen ürün işaretli; "benzerini seç" önerisi var. |

## Etkileşim ve tasarım

Akış ve prototip: Selin'in tasarım dosyasında "Favori sipariş" sayfası. Kullanılabilirlik testi 3 kullanıcıyla bu sprint yapılacak.

## Açık sorular

| Soru | Sahibi | Tarih |
|---|---|---|
| Bir kullanıcının en fazla kaç favorisi olsun? | Elif | Pazartesi |
| Favori, başka bir dükkândan da sipariş verilebilsin mi? | Deniz | Çarşamba |
| Tükenen ürün bilgisini Panel gerçek zamanlı veriyor mu? | Ece | Salı |

## Yapmayacaklarımız

- Favori siparişi bir zamana bağlamak ("her gün 8:30'da") bu sürümde yok.
- Favorileri başka kullanıcılarla paylaşmak yok.
- Favoriler web sitesinde bu sürümde yok; yalnız mobil uygulama.
