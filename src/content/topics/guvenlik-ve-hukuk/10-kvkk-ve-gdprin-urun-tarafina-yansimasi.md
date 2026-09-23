---
title: "KVKK ve GDPR'ın ürün tarafına yansıması"
sectionNumber: "13.10"
category: "guvenlik-ve-hukuk"
order: 10
cardCount: 6
sourceFile: "13-guvenlik-ve-hukuki-yukumluluk.md"
origin: "material"
flags: ["degisken"]
---
> Bu alt bölüm genel bilgilendirmedir, hukuki tavsiye değildir. Gerçek bir projede avukat görüşü al.

### KVKK ve GDPR

- **Terim (İngilizce):** KVKK (Kişisel Verilerin Korunması Kanunu), GDPR (General Data Protection Regulation)
- **Türkçesi:** Türkiye ve AB'nin kişisel veri koruma mevzuatları
- **Tanım:** Kişisel verinin nasıl toplanacağını, işleneceğini, saklanacağını ve silineceğini düzenleyen yasalar. KVKK (6698 sayılı Kanun) Türkiye'de, GDPR AB'de geçerlidir.
- **Ne işe yarar / neden var:** İkisi de benzer ilkelere dayanır: şeffaflık, amaçla sınırlılık, veri minimizasyonu, saklama süresi sınırı ve ilgili kişinin hakları.
- **Nerede karşına çıkar:** Kişisel veri toplayan her projede.
- **Örnek kullanım:** "AB'ye de hizmet veriyoruz; hem KVKK hem GDPR uyumunu düşünmemiz gerekiyor."
- **İlgili terimler:** Aydınlatma metni, Açık rıza, Data retention (11.11)

### Aydınlatma metni

- **Terim (İngilizce):** Privacy notice
- **Türkçesi:** Aydınlatma metni
- **Tanım:** Veri toplanmadan **önce** kullanıcıya sunulan, verisinin nasıl işleneceğini anlatan bilgilendirme.
- **Ne işe yarar / neden var:** KVKK m.10 kapsamında bir yükümlülüktür ve rıza gerektirip gerektirmediğinden bağımsız olarak sunulmalıdır. `[DEĞİŞKEN BİLGİ]` İlgili tebliğ uyarınca içeriğinde şunların bulunması bekleniyor: veri sorumlusunun kimliği, işleme amaçları, aktarılacak alıcı kategorileri, toplama yöntemi, hukuki sebep ve ilgili kişinin hakları.
- **Nerede karşına çıkar:** Form ve kayıt akışlarında; sitenin gizlilik sayfasında.
- **Örnek kullanım:** "Aydınlatma metnini form gönderilmeden önce erişilebilir kılalım; sadece footer'da olması yetmeyebilir."
- **Karıştırılanlar:** **Metnin dili bir tasarım meselesidir.** Kurum, aydınlatma metinlerinde açık, anlaşılır ve sade bir dil kullanılmamasını yaygın bir hata olarak niteliyor. Yani hukuk metnini olduğu gibi yapıştırmak, uyumsuzluk riski taşıyabilir.
- **İlgili terimler:** Açık rıza, Yasal sayfalar (13.11), UX writing (4.9)

### Açık rıza

- **Terim (İngilizce):** Explicit consent
- **Türkçesi:** Açık rıza
- **Tanım:** Belirli bir konuya ilişkin, bilgilendirmeye dayanan ve özgür iradeyle açıklanan onay.
- **Ne işe yarar / neden var:** Bazı veri işleme faaliyetleri için gereklidir. Ama **her şey için gerekli değildir** — sözleşmenin ifası, kanuni yükümlülük ve meşru menfaat gibi başka hukuki sebepler de vardır. Her şeyi rızaya dayandırmak yaygın bir hatadır ve riskli bir uygulamadır (rıza her an geri çekilebilir).
- **Nerede karşına çıkar:** Kayıt formlarında ve pazarlama izinlerinde.
- `[DEĞİŞKEN BİLGİ]` **Bu doğrudan bir arayüz kısıtı ve senin işin:** Kişisel Verileri Koruma Kurulu'nun 18.02.2026 tarihli ve 2026/347 sayılı ilke kararına ilişkin kamuoyu duyurusunda, **açık rıza metni ile aydınlatma metninin ayrı ayrı düzenlenmesi gerektiği** vurgulanıyor; ikisinin iç içe geçmiş tek bir metin hâlinde sunulması en sık karşılaşılan hukuka aykırılıklardan biri olarak niteleniyor. Aynı duyuruda, **aydınlatma yapıldığına dair kullanıcıdan onay/rıza istenmesinin** de hatalı olduğu belirtiliyor.
- **Örnek kullanım:** "Tek bir onay kutusuyla hem aydınlatmayı hem rızayı almayalım; ikisini ayıralım ve rıza gerçekten isteğe bağlı olsun."
- **Karıştırılanlar:** **Tasarım karşılığı çok somut:** yaygın "Aydınlatma metnini okudum ve kişisel verilerimin işlenmesine izin veriyorum" tek kutusu, bu yaklaşıma göre sorunludur. Aydınlatma bilgilendirmedir (onay istenmez); rıza ise ayrı, isteğe bağlı ve geri alınabilir olmalıdır.
- **İlgili terimler:** Aydınlatma metni, Cookie banner (7.7), Dark pattern (7.7)
- **Kaynak:** https://www.kvkk.gov.tr/Icerik/8710/veri-sorumlulari-tarafindan-acik-riza-ve-aydinlatma-metinlerinin-ayri-ayri-duzenlenmesi-gerektigi-hakkinda-kisisel-verileri-koruma-kurulunun-18-02-2026-tarihli-ve-2026-347-sayili-ilke-kararina-iliskin-kamuoyu-duyurusu

### Yurt dışına veri aktarımı

- **Terim (İngilizce):** Cross-border data transfer, adequacy decision, SCC (Standard Contractual Clauses)
- **Türkçesi:** Yurt dışına aktarım, yeterlilik kararı, standart sözleşme
- **Tanım:** Kişisel verinin Türkiye dışındaki bir sunucuya veya hizmet sağlayıcıya aktarılması.
- **Ne işe yarar / neden var:** **Bu, doğrudan teknoloji seçimini etkiler:** ABD'de barındırılan bir analitik servisi, e-posta servisi veya BaaS (11.12) kullanmak, yurt dışına veri aktarımı anlamına gelebilir.
- `[DEĞİŞKEN BİLGİ]` 7499 sayılı Kanun ile KVKK'nın 9. maddesinde köklü bir değişiklik yapıldığı ve **açık rızaya dayalı aktarımın genel kural olmaktan çıkıp istisna hâline geldiği** raporlanıyor. Yerine yeterlilik kararı ve standart sözleşme gibi güvence mekanizmaları getirildi; geçiş sürecinin 1 Eylül 2024'te tamamlandığı belirtiliyor. Standart sözleşmelerin Kuruma bildirilmesine dair süre koşulları da bulunuyor. **Bu bilgileri ikincil kaynaklardan aldım; kesin uygulama için mevzuata ve avukata bak.**
- **Nerede karşına çıkar:** Üçüncü parti servis seçiminde (10.15) ve hosting kararında (16.6).
- **Örnek kullanım:** "Bu analitik servisi verileri ABD'de tutuyor; yurt dışı aktarım rejimine göre değerlendirmemiz gerekiyor."
- **İlgili terimler:** Third-party (10.9), Hosting (16.6), BaaS (11.12)

### Ürün tarafına yansıyan ilkeler

Mevzuatın, doğrudan tasarım kararına dönüşen kısımları:

- **Veri minimizasyonu** — Toplamadığın veri, korumak zorunda olmadığın veridir. Formdaki her alan bir yükümlülüktür: "bu alanı gerçekten kullanıyor muyuz?" sorusu hem UX hem uyum sorusudur (11.11).
- **Amaçla sınırlılık** — Bir amaç için toplanan veri, başka bir amaçla kullanılamaz. "Kayıt için topladığımız e-postaya pazarlama gönderelim" bir uyum sorunu doğurabilir.
- **Saklama süresi** — Veri süresiz saklanamaz. Bir silme veya anonimleştirme politikası gerekir (11.11).
- **İlgili kişinin hakları** — Kullanıcı verisine erişme, düzeltme ve silinmesini isteme hakkına sahiptir. **Bunların bir arayüzü olmalıdır:** "verilerimi indir" ve "hesabımı sil" ekranları. Ayrıca başvuru yolu makul olmalıdır; yalnızca noter gibi maliyetli kanallar sunmak eleştirilen bir uygulamadır.
- **Şeffaflık** — Kullanıcı, ne toplandığını ve neden toplandığını anlayabilmelidir. Bu bir metin yazımı (4.9) işidir.

### Veri ihlali bildirimi

- **Terim (İngilizce):** Data breach notification
- **Türkçesi:** Veri ihlali bildirimi
- **Tanım:** Kişisel veri sızması durumunda, otoriteye ve etkilenen kişilere bildirim yapma yükümlülüğü.
- **Ne işe yarar / neden var:** Bir ihlal yaşandığında ne yapılacağının **önceden** planlanmış olması gerekir; olay anında öğrenilmez. Bildirimin metni ve kullanıcıya nasıl iletileceği de tasarlanması gereken bir şeydir.
- **Nerede karşına çıkar:** Olay müdahale planlarında (16.9).
- **Örnek kullanım:** "İhlal senaryosu için bir iletişim şablonumuz var mı? Olay anında yazmaya çalışmayalım."
- **İlgili terimler:** Incident (16.9), Postmortem (16.9)
