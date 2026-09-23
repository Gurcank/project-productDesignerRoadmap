---
category: "auth"
sourceFiles: ["12-auth-kimlik-dogrulama-ve-yetkilendirme.md"]
---

Auth, bir üründe **hem en çok kullanılan hem en az tasarlanan** akıştır. Herkes kayıt olur, herkes giriş yapar, herkes şifresini unutur — ama bu ekranlar genelde en sona bırakılır ve varsayılan hâlleriyle kalır.

Bu bölümün iki hedefi var:

1. **Teknik tarafı anlamak** — session, token, OAuth, JWT gibi terimler her auth konuşmasında geçer ve karıştırılmaları güvenlik açığına yol açar.
2. **Tasarım sorumluluğunu görmek** — auth akışındaki kararların çoğu senin işin: hangi yöntemler sunulacak, hata mesajı ne diyecek, oturum ne kadar sürecek, hesabını kaybeden kullanıcı ne yapacak.

Bölümdeki kavramlar eskimeyen kategoride. Değişken olanlar: hazır çözümler (12.10) ve şifre politikası tavsiyeleri (12.8) — ikincisi son yıllarda ciddi biçimde değişti ve muhtemelen bildiğinin tersi.
