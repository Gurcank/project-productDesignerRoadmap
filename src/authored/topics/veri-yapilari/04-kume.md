---
title: "Küme (set)"
sectionNumber: ""
category: "veri-yapilari"
order: 4
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "MDN — Set"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"
---

**Küme**, aynı öğeyi iki kez tutamayan bir topluluktur. Sırası yoktur, tekrarı yoktur; tek cevapladığı soru şudur: **"bu öğe içinde var mı?"**

Sözlüğün değer tutmayan hâli gibi düşünebilirsin: anahtarlar var, değerler yok.

## Ne iyi yapar

- **"Var mı?" sorusu anlıktır** ve topluluk büyüdükçe yavaşlamaz.
- **Tekilliği yapısı gereği garanti eder.** Aynı öğeyi iki kez eklemek için ayrı kontrol yazmaya gerek kalmaz.
- **Kümeler arası işlemler ucuzdur:** kesişim ("ikisinde de olanlar"), birleşim, fark.

## Ne kötü yapar

- **Sıra yoktur.** "Kullanıcının seçtiği sırayla göster" istiyorsan küme tek başına yetmez.
- **Sayı tutmaz.** "Bu öğe kaç kez seçildi" sorusunu cevaplayamaz.
- **Ek bilgi taşıyamaz.** Sadece üyelik bilgisi vardır.

## Arayüzde nerede karşına çıkar

**Çoklu seçim.** Bir tablodaki seçili satırlar, filtre panelindeki işaretli kutular, etiket seçici — hepsi kümedir. Bir satıra tıklamak "kümede varsa çıkar, yoksa ekle" işlemidir ve bu yüzden anlıktır.

**Filtreleme kesişimi.** "Kırmızı **ve** bedeni M olanlar" sorusu, iki kümenin kesişimidir. Filtre panellerinin hızlı hissettirmesinin sebebi budur.

**Yetki kontrolü.** "Bu kullanıcının rolleri arasında `admin` var mı?" — küme sorusu (Bölüm 12).

**Tekrarı engelleme.** "Aynı etiketi iki kez ekleme", "aynı e-postayı listeye iki kez alma".

| Soru | Doğru yapı |
|---|---|
| "Bu seçili mi?" | Küme |
| "Kaç tane seçili?" | Küme (boyutu) |
| "Hangi sırayla seçildi?" | Dizi + küme birlikte |
| "Bu etiket kaç kez kullanıldı?" | Sözlük (etiket → sayı) |

## Tasarımı ilgilendiren asıl nokta: "tümünü seç" ne demek

Çoklu seçim tasarlarken kolayca atlanan bir soru var: **"tümünü seç" hangi "tüm"?**

- Ekranda görünen sayfa mı?
- Filtreye uyan tüm kayıtlar mı?
- Veritabanındaki her şey mi?

Üçü farklı davranışlardır ve üçü farklı maliyettedir. Görünen sayfayı seçmek ucuzdur; "filtreye uyan 40.000 kaydı seç" ise seçim kümesini istemciye taşımak yerine sunucuya "şu filtreye uyan her şey" diye tarif etmeyi gerektirir.

Bu, tasarımda tek bir onay kutusu gibi görünür ama arkada tamamen farklı iki mekanizmadır. Netleştirmezsen geliştirici birini seçer ve kullanıcı diğerini bekler.

Aynı şekilde: **seçim filtre değişince ne olacak?** Korunacak mı, sıfırlanacak mı? İkisi de savunulabilir; belirtilmemişse rastgele olur.

## Alternatifler

- **Sözlük** — üyelikle birlikte bir bilgi de tutman gerekiyorsa (ne zaman seçildi, kim seçti).
- **Dizi** — sıra önemliyse; tekilliği ayrıca kontrol etmen gerekir.
- **Veritabanında `UNIQUE` kısıtı** — aynı fikrin kalıcı veri tarafındaki karşılığı (11.5).

## Bir Product Designer olarak

- **"Tümünü seç"in kapsamını yaz.** Sayfa mı, filtre sonucu mu? Ve seçili sayısını kullanıcıya göster ("40.812 kayıt seçildi") — bu, yıkıcı toplu işlemlerde tek güvenlik ağıdır.
- **Filtre değişince seçime ne olacağına karar ver.** Ve kullanıcıya söyle.
- **Tekillik kuralını arayüzde görünür kıl.** "Bu etiket zaten ekli" mesajı, sessizce yok saymaktan iyidir.
- **Sırası olan seçim istiyorsan bunu ayrıca belirt.** Küme sırasızdır; "seçtiğin sırayla dizilsin" ayrı bir gereksinimdir.
