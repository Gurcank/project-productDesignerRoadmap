---
category: "guvenlik-ve-hukuk"
sourceFiles: ["13-guvenlik-ve-hukuki-yukumluluk.md"]
---

Güvenlik, "geliştiricinin işi" sanılan ama tasarımcının sürekli içine düştüğü bir alan. Sebep basit: **güvenlik açıklarının çoğu bir tasarım kararının sonucudur.**

Birkaç örnek, bu bölümün tamamını özetliyor:
- URL'de sıralı ID göstermek (11.5) → başkasının kaydına erişim denemesini kolaylaştırır (IDOR).
- "Bu e-posta kayıtlı değil" hata mesajı (12.8) → saldırgana hesap listesi verir.
- Kullanıcıdan gereksiz alan istemek (11.11) → her toplanan kişisel veri bir yükümlülüktür.
- Çerez banner'ında "Reddet"i küçültmek (7.7) → hukuki risk.
- Bir üçüncü parti bileşen gömmek (10.9) → o servisin erişimini de kabul etmek.

Bu bölümün amacı seni güvenlik uzmanı yapmak değil; **kendi kararlarının güvenlik sonucunu görebilmen** ve bir güvenlik denetimi raporunu okuyabilmen.

> **Hukuki uyarı:** 13.10 ve 13.11'deki bilgiler genel bilgilendirmedir, hukuki tavsiye değildir. Ben hukukçu değilim. Gerçek bir projede avukat görüşü almadan hareket etme.
