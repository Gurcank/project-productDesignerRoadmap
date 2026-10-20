# Kapsam haritası: İletişim ve Paydaş Yönetimi

> Ders üretim hattının 1. ve 2. adımı ([ders-standardi.md](ders-standardi.md)). Kaynakların hepsi
> tarayıcı panelinde açılıp okundu (2026-10-19). Bu bölüm, **Şirket Sözlüğü**'ndeki toplantı türleri,
> yazılı formatlar ve kültür kalıplarının üstüne kurulur; Proje Yönetimi'ndeki durum raporu dersini
> tekrar etmez, ona bağlanır.

## Birincil kaynaklar

| Kısaltma | Kaynak | Ne için |
|---|---|---|
| Stake | Wikipedia, "Stakeholder analysis" (güç-ilgi matrisi şekli dahil) | Paydaş türleri, haritalama, Mendelow matrisi |
| Watt5 | Watt, *Project Management* 2e, Bölüm 5 | Proje yöneticisi bir politikacı gibi; kültür; Mumbai örneği |
| Watt15 | Watt, *Project Management* 2e, Bölüm 15 | İletişim gereksinimi analizi, plan adımları, saat dilimleri |
| RACI | Wikipedia, "Responsibility assignment matrix" | RACI tanımları, alternatifler |
| DACI | Atlassian Team Playbook, "DACI" | Driver, Approver, Contributors, Informed |
| RAPID | Bain & Company, "RAPID Decision Making" (2023) | Recommend, Agree, Perform, Input, Decide |
| BLUF | Wikipedia, "BLUF (communication)" (yalnız giriş ve köken; makale uyarılı) | Sonuç önce; AR 25–50 |
| Minto | Wikipedia, "Barbara Minto" | Piramit ilkesi, MECE |
| 18F | Digital.gov / 18F, "How to Run an Efficient Meeting" (2016) | Amaç, roller, gündem, eylem maddesi |
| GovViz | UK Government Analysis Function, "Data visualisation: charts" | Mesaj, grafik seçimi, başlık, eksen |
| Cialdini | Wikipedia, "Influence: Science and Practice" (uyarılı; yalnız ilke tanımları) | Karşılıklılık, tutarlılık, ortak hedef |
| GtY | Wikipedia, "Getting to Yes" | İlkeli müzakere, BATNA'nın kökeni |
| PON | Program on Negotiation, "What is a BATNA?" | BATNA'nın kullanımı |
| TKI | Wikipedia, "Thomas–Kilmann Conflict Mode Instrument" (uyarılı; yalnız eksenler ve beş tarz) | Çatışma tarzları |
| CCL | Center for Creative Leadership, "SBI" (2025) | Durum, davranış, etki, niyet |
| SRE | Google SRE Book, "Managing Incidents" | Erken ilan, iletişim rolü, eşikler |
| GitLab | GitLab Handbook, "Guide to All-Remote" | Uzaktan çalışma manifestosu |

**Kullanılmayanlar:** Imperial College'ın paydaş PDF'i (indirme riski). GitLab'ın asenkron iletişim
alt sayfası bot doğrulaması istedi; açılmadı. TKI'nın yayıncı sitesindeki genel bakış sayfası 404
döndü. DACI sayfasındaki "McKinsey anketine göre %25" iddiası kaynaksız olduğu için alınmadı.

## Kavram → ders

| # | Ders (slug) | Kavramlar | Görsel | Araç |
|---|---|---|---|---|
| 1 | paydas-haritasi | paydaş analizi, birincil/ikincil, güç-ilgi matrisi, tutum, dört strateji | Matrix2x2 | paydas-kaydi |
| 2 | raci-daci-rapid | RACI, tek A, DACI, RAPID, hangisi ne zaman | RACI denetleyici demosu | raci, daci |
| 3 | iletisim-plani | gereksinim analizi, kime/neden/ne/ne zaman/nasıl/kim, eskalasyon eşiği | Timeline (iletişim ritmi) | iletisim-plani |
| 4 | piramit-ilkesi-ve-bluf | BLUF, piramit, MECE, yönetici özeti, tümdengelim | Tree | — |
| 5 | toplanti-yonetimi | amaç, roller, gündem, park alanı, eylem maddesi, karar notu | StepFlow | toplanti-notu |
| 6 | veriyle-hikaye | mesaj, ilişki → grafik, iki başlık, sadelik, eksen | Chart | — |
| 7 | yetkisiz-etki | güç haritası, hedefler, ortak çıkar, karşılıklılık, tutarlılık | Hub | — |
| 8 | muzakere-ve-batna | pozisyon ve çıkar, seçenek, nesnel ölçüt, BATNA | Tree | — |
| 9 | catisma | atılganlık × işbirliği, beş tarz, ne zaman hangisi | Matrix2x2 | — |
| 10 | sbi-geri-bildirimi | durum, davranış, etki, niyet; yargı ve gözlem | StepFlow | — |
| 11 | kotu-haber-ve-eskalasyon | erken haber, olumlu bilgi kültürü, eskalasyon eşiği, iletişim rolü | Timeline | — |
| 12 | dagitik-ekipler | yazılı bilgi, asenkron varsayılan, ortak saatler, saat dilimi | Spectrum | — |

## Çakışma tablosu

| Kavram | Başka nerede | Bu bölümdeki yaklaşım |
|---|---|---|
| Paydaş ≠ kullanıcı | urun-gelistirme/ekipteki-roller | Tanım orada; burada haritalama ve strateji |
| RACI | urun-gelistirme/ekipteki-roller, Araçlar/raci | Şablon orada; burada RACI'nin karar çerçeveleriyle farkı |
| Durum raporu, RAG | proje-yonetimi/durum-raporu | Rapor orada; burada BLUF genel yazı ilkesi ve kötü haberin konuşması |
| Toplantı türleri, toplantı hijyeni | sirket-sozlugu/toplanti-turleri | Türler ve üç soru orada; burada yürütme: roller, gündem, kapanış |
| Sync/async, odak zamanı | calisma-bicimi/sync-async-ve-toplanti-duzeni | Ritim orada; burada saat dilimi ve dağıtık ekip |
| Kolaylaştırma teknikleri | cevik-pratikler/kolaylastirma-teknikleri | Teknikler orada; burada çatışma tarzları |
| Grafik hileleri | urun-analitigi/dashboard | Hileler orada; burada mesajı grafikle anlatmak |
| Olay yönetimi, postmortem | devops-ve-yayin, sirket-sozlugu/risk-ve-olay-dili | Teknik süreç orada; burada eskalasyonun insan tarafı |

## Vaka

Örnekler [vaka.md](vaka.md) "İletişim ve paydaş işleri" bölümünden gelir: kampüs projesinin güç-ilgi
haritası, ikinci dalga DACI'si, iletişim planı ve eskalasyon eşiği, 6. haftadaki gecikmenin haberi ve
tedarikçiyle müzakere, Sprint 6 çatışması, Kaan'ın Burak'a SBI geri bildirimi, Berlin'den çalışan Can.
