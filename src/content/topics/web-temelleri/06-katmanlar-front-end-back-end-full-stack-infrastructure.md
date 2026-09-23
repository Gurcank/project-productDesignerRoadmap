---
title: "Katmanlar: front-end, back-end, full-stack, infrastructure"
sectionNumber: "1.6"
category: "web-temelleri"
order: 6
cardCount: 6
sourceFile: "01-web-nasil-calisir.md"
origin: "material"
flags: []
---
Bir ekipteki iş bölümünün adları. Bunları bilmek, bir talebi kime iletmen gerektiğini bilmek demektir.

### Front-end

- **Terim (İngilizce):** Front-end (FE)
- **Türkçesi:** Ön yüz
- **Tanım:** Kullanıcının gördüğü ve etkileştiği her şeyin yazıldığı katman.
- **Ne işe yarar / neden var:** Tasarımı çalışan bir arayüze çevirir. Senin çıktın en doğrudan burada karşılık bulur.
- **Nerede karşına çıkar:** Tasarım handoff'unda muhatabın front-end geliştiricidir. Bir görsel hata ("buton mobilde taşıyor") FE tarafına gider.
- **Örnek kullanım:** "Bu bir FE bug'ı, API doğru veri dönüyor ama liste yanlış sıralanıyor."
- **Karıştırılanlar:** *Front-end* ≠ *tasarım*. Front-end kod yazar, tasarımcı ekranı kurgular. Kesişirler ama aynı iş değildir.
- **İlgili terimler:** Back-end, Client-side, Component (8.7)

### Back-end

- **Terim (İngilizce):** Back-end (BE)
- **Türkçesi:** Arka yüz
- **Tanım:** Sunucuda çalışan, veriyi ve iş kurallarını yöneten katman.
- **Ne işe yarar / neden var:** Veriyi saklar, doğrular, yetki kontrolü yapar, üçüncü parti servislerle konuşur. Kullanıcı görmez ama ürünün doğruluğu buradadır.
- **Nerede karşına çıkar:** Veri gerektiren her özellik talebinde. "Bunu yapabilir miyiz?" sorusunun cevabı çoğu zaman BE tarafındadır.
- **Örnek kullanım:** "İndirim kuralı BE'de olmalı; FE'de yaparsak kullanıcı devre dışı bırakabilir."
- **İlgili terimler:** Front-end, Server, API (10.4), Database (Bölüm 11)

### Full-stack

- **Terim (İngilizce):** Full-stack
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Hem ön hem arka yüzde çalışabilen geliştirici veya yaklaşım.
- **Ne işe yarar / neden var:** Küçük ekiplerde tek kişi tüm zinciri götürebilir; iki kişi arasında bekleme olmaz. Büyük ekiplerde ise uzmanlaşma daha verimli olabilir.
- **Nerede karşına çıkar:** İş ilanlarında en sık geçen başlıklardan biri. Ayrıca Next.js gibi framework'ler "full-stack framework" olarak anılır — hem sunucu hem istemci tarafını aynı projede yazabildikleri için.
- **Örnek kullanım:** "Ekip iki kişi; ikimiz de full-stack çalışıyoruz, ayrı FE/BE ayrımı yok."
- **İlgili terimler:** Front-end, Back-end, Meta-framework (9.1)

### Infrastructure

- **Terim (İngilizce):** Infrastructure (infra)
- **Türkçesi:** Altyapı
- **Tanım:** Kodun üzerinde çalıştığı sunucu, ağ, veritabanı ve yayın sisteminin bütünü.
- **Ne işe yarar / neden var:** Kod tek başına bir şey yapmaz; çalışacağı, yayınlanacağı ve izleneceği bir zemin gerekir. Bu zeminin kurulması ve bakımı ayrı bir uzmanlıktır.
- **Nerede karşına çıkar:** "Infra tarafında bir sorun var" = kodda değil, çalışma ortamında bir problem. Vercel gibi platformlar bu işin çoğunu üstlendiği için küçük projelerde ayrı bir infra rolü gerekmez.
- **Örnek kullanım:** "Site kod değişmeden çöktü; infra tarafına bakmak lazım."
- **İlgili terimler:** DevOps (Bölüm 16), Hosting, Server

### Tech stack

- **Terim (İngilizce):** Tech stack (stack)
- **Türkçesi:** Teknoloji yığını
- **Tanım:** Bir projede kullanılan teknolojilerin tamamı.
- **Ne işe yarar / neden var:** Tek kelimeyle projenin teknik kimliğini anlatır. Yeni birine "stack ne?" diye sorulduğunda beklenen cevap: dil, framework, veritabanı, hosting.
- **Nerede karşına çıkar:** Proje başlangıcında ve işe alımda. Yapay zekâya prompt yazarken stack'i belirtmek, çıktının doğruluğunu en çok artıran tek bilgidir.
- **Örnek kullanım:** "Stack: Next.js, TypeScript, Tailwind, PostgreSQL, Vercel."
- **İlgili terimler:** Framework (9.1), Teknoloji seçimi (9.12)

### Client-side / Server-side

- **Terim (İngilizce):** Client-side, Server-side
- **Türkçesi:** İstemci tarafı, sunucu tarafı
- **Tanım:** Bir işin kullanıcının cihazında mı yoksa sunucuda mı yapıldığını belirten sıfatlar.
- **Ne işe yarar / neden var:** Aynı işlev iki yerde de yapılabilir ve sonuçları farklıdır. Client-side hızlıdır ama kullanıcı tarafından görülebilir ve değiştirilebilir; server-side güvenlidir ama her seferinde gidiş-dönüş gerektirir. Bu ayrım hem güvenlik hem performans kararlarının temelidir.
- **Nerede karşına çıkar:** Sürekli. "Client-side validation", "server-side rendering", "client-side routing" — hepsi bu ayrımın türevi.
- **Örnek kullanım:** "Form doğrulaması hem client-side hem server-side olmalı: client-side kullanıcı deneyimi için, server-side güvenlik için."
- **İlgili terimler:** Front-end, Back-end, Rendering stratejileri (8.10), Input validation (13.7)
