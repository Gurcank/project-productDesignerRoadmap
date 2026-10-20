---
title: "Gömme (embedding) ve anlamsal arama"
sectionNumber: ""
category: "algoritmalar"
order: 9
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "PostgreSQL — pgvector eklentisi"
    url: "https://github.com/pgvector/pgvector"
---

Kelime eşleştirmeyen arama. "Şifremi unuttum" yazan bir kullanıcının, içinde o kelimeler geçmeyen "hesap kurtarma" sayfasını bulmasını sağlayan mekanizma.

## Nasıl çalışır — kabaca

Bir metin, sayılardan oluşan uzun bir listeye (**vektör**) çevrilir. Anlamca yakın metinlerin vektörleri birbirine yakın düşer. Arama, kelime karşılaştırmak yerine **yakınlık** ölçer.

Bu vektörler bir **vektör veritabanında** tutulur (11.4); ilişkisel bir veritabanına eklenti olarak da eklenebilir.

## Ne kazandırır

- **Eş anlamlıyı bedavaya çözer.** "Giriş" ve "login" için ayrı liste tutmaya gerek kalmaz.
- **Soruyla arama.** Kullanıcı tam cümle yazabilir.
- **Diller arası çalışabilir.** Türkçe soru, İngilizce içeriği bulabilir.

## Ne kaybettirir

- **Tam eşleşme garantisi gider.** Ürün kodu, fatura numarası, kişi adı arıyorsan anlamsal arama yanlış araçtır — birebir eşleşme ister.
- **"Neden bu sonuç geldi" açıklanamaz.** Kelime eşleşmesinde vurgulayabilirsin; yakınlıkta gösterecek bir şey yoktur. Bu, kullanıcı güveni açısından gerçek bir kayıp.
- **Maliyet ve gecikme.** Her metnin vektörü üretilmeli, içerik değişince yeniden üretilmeli.
- **Sessizce alakasız sonuç verir.** Hiç sonuç vermemek yerine, "en yakın" bir şey döner — yanlış olsa bile.

## Pratikte: ikisi birden

Çoğu iyi arama **hibrittir**: kelime eşleşmesi kesinliği, anlamsal arama kapsamı verir; sonuçlar birleştirilip sıralanır. Bu sitenin araması kelime tabanlıdır (Pagefind) — statik bir sitede vektör altyapısı taşımaya değmez.

## Bir Product Designer olarak

- **Kullanıcı ne arıyor?** Kod/numara arıyorsa birebir eşleşme şart; kavram arıyorsa anlamsal değerli.
- **Açıklanabilirliği kaybetmeyi göze alıyor musun?** Vurgulama yapılamayan bir sonuç listesi daha az güven verir.
- **Boş sonuç yerine yanlış sonuç gelmesi daha mı iyi?** Anlamsal aramada varsayılan budur ve bu bir üründe kabul edilebilir olmayabilir.
- **Bir "yapay zekâ araması" isteği genelde budur** — ve ayrı bir servis, ayrı gecikme, ayrı hata durumu demektir (19.9).
