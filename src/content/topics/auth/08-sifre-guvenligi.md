---
title: "Şifre güvenliği"
sectionNumber: "12.8"
category: "auth"
order: 8
cardCount: 4
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: ["degisken"]
---
Bu alt bölümde **muhtemelen bildiğinin tersi olan** bilgiler var. Şifre politikası tavsiyeleri son yıllarda köklü biçimde değişti.

### Hashing / Salting

- **Terim (İngilizce):** Hashing, salt, bcrypt, Argon2
- **Türkçesi:** Özetleme, tuzlama
- **Tanım:** Şifrenin, geri çevrilemez bir işlemle özetlenip saklanması. **Salt**, her şifreye eklenen rastgele değerdir.
- **Ne işe yarar / neden var:** Veritabanı sızsa bile şifreler okunamaz. Salt olmasa, aynı şifreyi kullanan kullanıcılar aynı özeti üretir ve saldırgan hazır tablolarla toplu çözüm yapabilir. bcrypt ve Argon2 gibi algoritmalar bilerek **yavaş** tasarlanmıştır; bu, deneme saldırılarını pahalı hâle getirir.
- **Nerede karşına çıkar:** Güvenlik denetimlerinde.
- **Örnek kullanım:** "Şifreler bcrypt ile saklanıyor mu, yoksa düz metin mi? Bunu doğrulayalım."
- **Karıştırılanlar:** **Şifreler asla şifrelenmez, özetlenir.** Fark kritik: şifreleme geri çevrilebilir, özetleme çevrilemez. Bir servis "şifrenizi size e-posta ile gönderelim" diyorsa, şifreleri geri çevrilebilir biçimde saklıyordur — bu ciddi bir kusurdur.
- **İlgili terimler:** Password reset, Security (Bölüm 13)

### Şifre politikası

- **Terim (İngilizce):** Password policy, composition rules, password rotation, blocklist screening
- **Türkçesi:** Şifre politikası, karmaşıklık kuralları, periyodik değiştirme
- **Tanım:** Kullanıcıdan hangi şifrenin isteneceğine dair kurallar.
- **Ne işe yarar / neden var:** **Bu, doğrudan senin tasarım kararın** — şifre alanının altındaki kurallar metnini sen yazıyorsun. Ve yaygın uygulamaların çoğu artık güncel rehberliğe aykırı.
- `[DEĞİŞKEN BİLGİ]` **Güncel yaklaşım (NIST SP 800-63B Revision 4, 2025'te tamamlandığı raporlanıyor):**
  - **Karmaşıklık kuralları dayatılmamalı.** "En az bir büyük harf, bir rakam ve bir sembol" gerekliliği artık **önerilmiyor** — kılavuz bunu açıkça yasaklayan bir dil kullanıyor. Bu kurallar kullanıcıları tahmin edilebilir kalıplara itiyor (`Sifre1!`).
  - **Periyodik zorunlu değiştirme kaldırıldı.** 90 günde bir şifre değiştirtmek artık önerilmiyor; yalnızca ihlal şüphesi varsa değiştirilmeli.
  - **Uzunluk, karmaşıklıktan önemli.** Asgari 8 karakter; şifre tek doğrulayıcıysa 15 karakter öneriliyor. Sistem en az 64 karakteri kabul edebilmeli.
  - **Boşluk ve tüm Unicode karakterler kabul edilmeli** — yani parola cümleleri (passphrase) desteklenmeli.
  - **Sızmış şifre listesine karşı kontrol zorunlu.** Kullanıcının seçtiği şifre bilinen ihlallerde geçiyorsa reddedilmeli.
- **Nerede karşına çıkar:** Kayıt ve şifre değiştirme ekranlarında.
- **Örnek kullanım:** "Karmaşıklık kuralını kaldıralım, minimum uzunluğu artıralım ve sızmış şifre kontrolü ekleyelim. Yardımcı metin de buna göre değişsin."
- **Karıştırılanlar:** Bu değişikliklerin sebebi güvenliği gevşetmek değil, **tersine sıkılaştırmak**: karmaşıklık kuralları ve zorunlu rotasyon, kullanıcıları zayıf ve tahmin edilebilir davranışlara ittiği için kaldırıldı. Ayrıca **yapıştırmayı engellememek** gerekir — şifre yöneticisi kullanımını engellemek güvenliği düşürür.
- **İlgili terimler:** Passkey (12.6), MFA (12.7), Accessible Authentication (6.2)
- **Kaynak:** https://pages.nist.gov/800-63-4/sp800-63b.html

### Password reset

- **Terim (İngilizce):** Password reset flow, forgot password
- **Türkçesi:** Şifre sıfırlama akışı
- **Tanım:** Şifresini unutan kullanıcının, kimliğini e-posta üzerinden kanıtlayıp yeni şifre belirlemesi.
- **Ne işe yarar / neden var:** En çok kullanılan destek akışıdır ve genelde en az tasarlanan akıştır. Doğru kurgusu: e-posta gir → tek kullanımlık, kısa ömürlü bağlantı gönder → yeni şifre belirlet → **mevcut tüm oturumları sonlandır** → kullanıcıya "şifreniz değişti" bildirimi gönder.
- **Nerede karşına çıkar:** Her üründe.
- **Örnek kullanım:** "Şifre sıfırlandıktan sonra diğer cihazlardaki oturumlar da kapansın; hesap ele geçirilmişse erişim kesilsin."
- **Karıştırılanlar:** **Güvenlik ile UX'in çeliştiği klasik nokta:** "bu e-posta kayıtlı değil" demek kullanıcıya yardımcı olur ama saldırgana hangi e-postaların sistemde olduğunu söyler (**user enumeration**). Yaygın çözüm: e-posta kayıtlı olsun olmasın aynı mesajı göstermek ("Bu adres kayıtlıysa bir bağlantı gönderdik").
- **İlgili terimler:** Email verification, Session (12.2), Auth UX (12.11)

### Email verification

- **Terim (İngilizce):** Email verification, double opt-in
- **Türkçesi:** E-posta doğrulama
- **Tanım:** Kullanıcının girdiği e-posta adresine gerçekten sahip olduğunun kontrol edilmesi.
- **Ne işe yarar / neden var:** Sahte kayıtları azaltır ve şifre sıfırlamanın güvenli çalışmasını sağlar — doğrulanmamış bir e-posta üzerinden hesap kurtarma, hesap ele geçirmeye açık kapı bırakır.
- **Nerede karşına çıkar:** Kayıt akışında.
- **Örnek kullanım:** "Doğrulamayı zorunlu tutalım ama kullanıcıyı hemen içeri alalım; doğrulanana kadar sadece bir uyarı şeridi gösterelim."
- **Karıştırılanlar:** **Tasarım kararı:** doğrulama, kayıt akışını kesmeli mi yoksa arka planda mı ilerlemeli? Kesmek, tamamlama oranını düşürür. Yaygın orta yol: kullanıcıyı içeri al, ama doğrulanmamış hesabın bazı işlemlerini kısıtla ve kalıcı bir uyarı şeridi (7.8) göster.
- **İlgili terimler:** Alert banner (7.8), Onboarding (7.12), Account linking (12.5)
