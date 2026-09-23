---
title: "Session vs token"
sectionNumber: "12.2"
category: "auth"
order: 2
cardCount: 2
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: []
---
Kullanıcı giriş yaptıktan sonra, sonraki her istekte onu nasıl tanıdığımız. İki temel yaklaşım vardır.

### Session

- **Terim (İngilizce):** Session, session-based authentication
- **Türkçesi:** Oturum
- **Tanım:** Sunucunun, giriş yapan kullanıcı için bir kayıt tutması ve tarayıcıya yalnızca bu kaydın kimliğini vermesi.
- **Ne işe yarar / neden var:** Asıl bilgi sunucuda kaldığı için **oturum istenildiği an iptal edilebilir**: kullanıcı "tüm cihazlardan çıkış yap" dediğinde veya bir hesap tehlikeye girdiğinde sunucudaki kayıt silinir ve erişim anında biter. Bedeli: sunucunun bu kayıtları saklaması ve her istekte kontrol etmesi gerekir (genelde Redis'te tutulur, 11.3).
- **Nerede karşına çıkar:** Klasik web uygulamalarında ve modern auth kütüphanelerinin çoğunda.
- **Örnek kullanım:** "Session tabanlı gidelim; 'tüm oturumları sonlandır' özelliği istiyoruz."
- **İlgili terimler:** Cookie (12.3), Token, Redis (11.3)

### Token

- **Terim (İngilizce):** Token-based authentication
- **Türkçesi:** Jeton tabanlı doğrulama
- **Tanım:** Sunucunun, kullanıcı bilgilerini içeren imzalı bir belge verip artık kendi tarafında kayıt tutmaması.
- **Ne işe yarar / neden var:** Sunucu durum tutmaz (stateless, 14.7), bu yüzden yatay ölçeklenmesi kolaydır ve birden fazla servis aynı jetonu doğrulayabilir. Bedeli: **iptal etmek zordur** — jeton kendi kendini kanıtladığı için, süresi dolana kadar geçerli kalır.
- **Nerede karşına çıkar:** Mobil uygulamalarda, mikroservislerde, API entegrasyonlarında.
- **Örnek kullanım:** "Mobil uygulama da aynı API'yi kullanacak; token tabanlı yaklaşım daha uygun."
- **Karıştırılanlar:** **Yaygın bir yanılgı:** "modern uygulamalar JWT kullanır, session eskidir." Doğru değil. Session, tek bir web uygulaması için çoğu zaman **daha güvenli ve daha basittir**; token'ın avantajları dağıtık sistemlerde ortaya çıkar. Seçim bir takastır (9.12): iptal edilebilirlik mi, ölçeklenebilirlik mi.
- **İlgili terimler:** JWT (12.4), Session, Stateless (14.7)
