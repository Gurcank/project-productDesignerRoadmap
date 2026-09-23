---
title: "OWASP Top 10"
sectionNumber: "13.2"
category: "guvenlik-ve-hukuk"
order: 2
cardCount: 1
sourceFile: "13-guvenlik-ve-hukuki-yukumluluk.md"
origin: "material"
flags: ["degisken"]
---
### OWASP Top 10

- **Terim (İngilizce):** OWASP Top 10
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Web uygulamalarındaki en kritik güvenlik risklerinin, gerçek veriye dayanarak derlenen listesi.
- **Ne işe yarar / neden var:** Güvenlik konuşmasının ortak dili. İhale şartnamelerinde, denetim raporlarında ve müşteri güvenlik sorularında referans olarak geçer. **Ezberlemen gerekmez; kategorilerin ne anlattığını bilmen yeter.**
- **Nerede karşına çıkar:** Güvenlik denetimlerinde ve kurumsal satış süreçlerinde.
- **Örnek kullanım:** "Denetim raporu A01 altında üç bulgu listelemiş; erişim kontrolü sorunumuz var."
- `[DEĞİŞKEN BİLGİ]` **Güncel sürüm OWASP Top 10:2025**; Kasım 2025'te yayımlandı ve 2021'den sonraki ilk büyük güncelleme. İki yeni kategori eklendi, SSRF ayrı bir madde olmaktan çıkıp erişim kontrolüne dahil edildi. **2021 listesine atıf yapan kaynaklar artık eskimiştir** ama uyum belgelerinde hâlâ 2021'e referans veriliyor olabilir.
- **Kaynak:** https://owasp.org/Top10/2025/0x00_2025-Introduction/

**OWASP Top 10:2025 kategorileri:**

| # | Kategori | Kısaca |
|---|---|---|
| **A01** | Broken Access Control | Yetkisi olmayanın erişebilmesi. Listenin en tepesinde kalmaya devam ediyor; SSRF de bu kategoriye dahil edildi |
| **A02** | Security Misconfiguration | Yanlış yapılandırma (2021'de 5. sıradaydı, 2.'ye yükseldi) |
| **A03** | Software Supply Chain Failures | **Yeni.** Bağımlılıklar, derleme ve dağıtım zincirinin bütünlüğü |
| **A04** | Cryptographic Failures | Şifreleme eksikliği veya yanlış kullanımı |
| **A05** | Injection | XSS ve SQL injection dahil enjeksiyon açıkları |
| **A06** | Insecure Design | Tasarımın kendisindeki güvenlik eksiği |
| **A07** | Authentication Failures | Kimlik doğrulama kusurları (Bölüm 12) |
| **A08** | Software or Data Integrity Failures | Güvenilmeyen kod veya verinin güvenilir sayılması |
| **A09** | Logging & Alerting Failures | Saldırıyı görememe ve zamanında tepki verememe |
| **A10** | Mishandling of Exceptional Conditions | **Yeni.** Beklenmedik durumların kötü yönetilmesi |

**Tasarımcı için iki not:** **A06 — Insecure Design** doğrudan seni ilgilendirir; kusur uygulamada değil, akışın kurgusundadır (zayıf hesap kurtarma akışı gibi). **A10 — Mishandling of Exceptional Conditions** ise Bölüm 7.9'daki durum ekranlarıyla akrabadır: bir sistemin beklenmedik durumu nasıl karşıladığı hem UX hem güvenlik meselesidir.
