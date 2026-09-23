---
title: "Yazılı formatlar"
sectionNumber: "18.6"
category: "sirket-sozlugu"
order: 6
cardCount: 2
sourceFile: "18-sirket-ortami-sozlugu.md"
origin: "material"
flags: []
---
Kurumsal ortamda hangi belgenin ne işe yaradığı.

| Format | Ne için | Detay |
|---|---|---|
| **One-pager** | Bir fikri tek sayfada sunmak, ön onay almak | 2.5 |
| **PRD / Spec** | Ne yapılacağını ve neden yapılacağını tanımlamak | 2.5 |
| **RFC** | Bir öneriyi yorum ve itiraz için açmak | Aşağıda |
| **ADR** | Alınan mimari kararı gerekçesiyle kaydetmek | 14.12 |
| **Status update** | İlerlemeyi paydaşlara düzenli bildirmek | Aşağıda |
| **Changelog / Release note** | Ne değiştiğini kullanıcıya anlatmak | 15.8 |
| **Runbook** | Bilinen bir soruna adım adım müdahale talimatı | 16.9 |
| **Postmortem** | Olay sonrası analiz ve önlemler | 16.9 |
| **Brief** | Bir tasarım/içerik işine hedef ve kısıt vermek | 2.5 |

### RFC

- **Terim (İngilizce):** RFC — Request For Comments
- **Türkçesi:** Görüş talebi belgesi
- **Tanım:** Bir öneriyi, karar alınmadan önce yazıya döküp ilgililerin yorum ve itirazına açmak.
- **Ne işe yarar / neden var:** Kararı toplantıdan yazıya taşır. Faydaları: yazan kişi fikrini netleştirmek zorunda kalır, katılamayanlar da yorum yapabilir, itirazlar kayıt altına alınır ve karar alındığında herkes gerekçeyi görmüş olur.
- **Nerede karşına çıkar:** Orta ve büyük ekiplerde, önemli değişikliklerden önce.
- **Örnek kullanım:** "Bu değişiklik üç ekibi etkiliyor; RFC yazıp bir hafta yorum alalım."
- **Karıştırılanlar:** *RFC* karar **öncesi** tartışmadır; *ADR* (14.12) karar **sonrası** kayıttır. Biri girdi, diğeri çıktıdır.
- **İlgili terimler:** ADR (14.12), One-pager (2.5), Disagree and commit (18.7)

### Status update

- **Terim (İngilizce):** Status update, weekly update
- **Türkçesi:** Durum güncellemesi
- **Tanım:** Bir işin ilerleyişini paydaşlara (2.1) düzenli olarak bildiren kısa yazı.
- **Ne işe yarar / neden var:** Yöneticilerin ve paydaşların sormasına gerek kalmadan bilgi akmasını sağlar — bu da kesintileri azaltır. İyi bir güncelleme genelde dört parçadan oluşur: **durum** (yolunda / risk altında / gecikiyor), **bu hafta ne oldu**, **sırada ne var**, **neye ihtiyacım var**.
- **Nerede karşına çıkar:** Haftalık olarak Slack veya e-postada.
- **Örnek kullanım:** "Durum: risk altında. Üçüncü parti entegrasyonu gecikti; ETA'yı bir hafta kaydırmamız gerekebilir."
- **Karıştırılanlar:** **Kötü haberi geciktirmek en yaygın hatadır.** Erken bildirilen gecikme yönetilebilir bir bilgidir; son anda bildirilen gecikme bir güven sorunudur.
- **İlgili terimler:** Escalation (3.5), Stakeholder (2.1), Risk (18.4)
