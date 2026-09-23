---
title: "Yetkilendirme modelleri"
sectionNumber: "12.9"
category: "auth"
order: 9
cardCount: 3
sourceFile: "12-auth-kimlik-dogrulama-ve-yetkilendirme.md"
origin: "material"
flags: []
---
Kimin neyi yapabileceğini tanımlama biçimleri.

### RBAC

- **Terim (İngilizce):** RBAC — Role-Based Access Control
- **Türkçesi:** Rol tabanlı erişim kontrolü
- **Tanım:** Kullanıcılara roller atanır (admin, editör, görüntüleyici) ve izinler rollere bağlanır.
- **Ne işe yarar / neden var:** En yaygın ve en anlaşılır model. Kullanıcı sayısı arttıkça, herkese tek tek izin vermek yerine rol atamak yönetilebilir kalır.
- **Nerede karşına çıkar:** Ekip ürünlerinde ve yönetim panellerinde.
- **Örnek kullanım:** "Üç rol yeterli: Owner, Admin, Member. Daha fazlası karmaşıklık üretir."
- **Karıştırılanlar:** **Tasarım tarafı düşünülmesi gereken üç soru:** Rol matrisi kullanıcıya nasıl gösterilecek (hangi rol ne yapabilir)? Yetkisi olmayan bir eylem gizlenecek mi, pasif mi gösterilecek? Rol değiştiğinde kullanıcı bilgilendirilecek mi?
- **İlgili terimler:** Permission, ABAC, Many-to-many (11.6)

### ABAC / Permission / Scope

- **Terim (İngilizce):** ABAC (Attribute-Based Access Control), permission, scope
- **Türkçesi:** Öznitelik tabanlı erişim, izin, kapsam
- **Tanım:** **ABAC** kararı özniteliklere göre verir ("kendi departmanındaki belgeleri düzenleyebilir"). **Permission** tek bir yetkidir. **Scope** OAuth'ta bir uygulamaya verilen erişim sınırıdır.
- **Ne işe yarar / neden var:** RBAC'ın yetmediği durumlarda daha ince ayar sağlar. Bedeli: karmaşıklık — hem uygulanması hem kullanıcıya anlatılması zorlaşır.
- **Nerede karşına çıkar:** Kurumsal ve karmaşık izin gerektiren ürünlerde.
- **Örnek kullanım:** "RBAC yetmiyor; kullanıcı sadece kendi ekibinin projelerini görsün, bu ABAC'a giriyor."
- **İlgili terimler:** RBAC, OAuth (12.5), RLS (11.12)

### Multi-tenancy

- **Terim (İngilizce):** Multi-tenancy, tenant, organization, workspace
- **Türkçesi:** Çok kiracılı yapı
- **Tanım:** Aynı uygulamanın birden fazla müşteri kuruluşuna hizmet vermesi ve verilerinin birbirinden yalıtılması.
- **Ne işe yarar / neden var:** B2B SaaS'ın temel yapısı. **Tasarım karşılığı çok somuttur:** kullanıcı birden fazla kuruluşta olabilir mi? Öyleyse kuruluş değiştirici (workspace switcher) gerekir. Davet akışı, rol atama, kuruluş ayarları ve faturalandırma — hepsi ayrı ekranlar demektir.
- **Nerede karşına çıkar:** Her B2B üründe.
- **Örnek kullanım:** "Kullanıcı birden fazla workspace'te olabilecek; header'a workspace switcher koyalım."
- **Karıştırılanlar:** **En kritik güvenlik noktası veri yalıtımıdır:** bir kiracının verisinin başka bir kiracıya sızması, bir SaaS ürünü için en ciddi hata sınıfıdır. Her sorguda kiracı filtresinin uygulandığından emin olunmalıdır (bkz. IDOR, 13.3; RLS, 11.12).
- **İlgili terimler:** RBAC, RLS (11.12), SSO (12.5)
