# Postmortem: SMS sağlayıcısı kesintisi · bir pazartesi sabahı

**Severity:** sev2 · **Süre:** 40 dakika · **Nöbetçi:** Can · **Yazan:** Can, Burak

## Özet

Tek SMS sağlayıcımız 40 dakika yanıt vermedi. Bu sürede yeni giriş yapmak isteyen müşterilere giriş kodu gitmedi. Açık oturumlar sipariş vermeye devam etti.

## Etki

- **Kullanıcılar:** oturumu kapalı olup giriş yapmaya çalışan müşteriler; sabah trafiğinin başı.
- **Akış:** giriş. Sipariş ve ödeme etkilenmedi.
- **Kullanıcıya gösterilen:** Selin'in önceden yazdığı şerit: "Giriş kodları gecikiyor. Açık oturumun çalışmaya devam ediyor."

## Zaman çizelgesi

| Saat | Ne oldu |
|---|---|
| 07.42 | Synthetic izleme giriş kodu adımında kırmızıya döndü |
| 07.46 | Can olayı sev2 olarak açtı; runbook'ta SMS adımı yoktu |
| 07.50 | Uygulama içi şerit açıldı |
| 08.22 | Sağlayıcı yanıt vermeye başladı |
| 08.30 | Olay kapandı |

## Kök neden

Girişin tamamı tek bir SMS sağlayıcısına bağlıydı ve bu bağımlılık risk kaydında yoktu. Sağlayıcı kesilince geçiş yapılacak bir yol yoktu.

## İyi giden

- Synthetic izleme sorunu ilk müşteri şikâyetinden önce gösterdi.
- Kullanıcıya gösterilecek metin hazırdı; olay anında yazılmadı.

## Kötü giden

- Runbook'ta SMS kesintisi için adım yoktu.
- Etkiyi durdurmanın bir yolu yoktu; sağlayıcının dönmesi beklendi.

## Eylem maddeleri

| Ne | Kim | Ne zamana kadar |
|---|---|---|
| İkinci SMS sağlayıcısını eklemek | Burak | İki sprint |
| Runbook'a sağlayıcı geçiş adımını yazmak | Can | Bu hafta |
| SMS bağımlılığını ürün risklerine eklemek | Elif | Bu hafta |
