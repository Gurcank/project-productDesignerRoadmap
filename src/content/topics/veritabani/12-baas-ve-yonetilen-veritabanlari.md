---
title: "BaaS ve yönetilen veritabanları"
sectionNumber: "11.12"
category: "veritabani"
order: 12
cardCount: 3
sourceFile: "11-veritabani-ve-veri-modeli.md"
origin: "material"
flags: ["degisken"]
---
Veritabanını (ve bazen tüm arka yüzü) hazır servis olarak almak.

### BaaS

- **Terim (İngilizce):** BaaS — Backend as a Service
- **Türkçesi:** Servis olarak arka yüz
- **Tanım:** Veritabanı, kimlik doğrulama, dosya depolama ve gerçek zamanlı özellikleri hazır sunan platform.
- **Ne işe yarar / neden var:** Küçük ekiplerin arka yüz kurmadan ürün çıkarmasını sağlar. Senin gibi tek başına çalışan biri için, aylar kazandıran bir tercih olabilir.
- **Nerede karşına çıkar:** MVP ve küçük ekip projelerinde.
- **Örnek kullanım:** "Tek başımayız; BaaS ile başlayalım, arka yüz kurmakla uğraşmayalım."
- **Ne zaman kullanılmaz:** Karmaşık iş kuralları, özel performans ihtiyaçları veya katı veri yerleşimi (data residency) gereksinimleri olan projelerde sınırlarına çarpılır. Ayrıca bir **vendor lock-in** (9.12) kararıdır.
- **İlgili terimler:** Supabase, Firebase, Vendor lock-in (9.12)

### Manzara

`[DEĞİŞKEN BİLGİ]` **Bu tablo Eylül 2026 itibarıyla topladığım bilgilere dayanıyor ve hızla eskir. Kullanmadan önce doğrula.**

| Ürün | Ne | Öne çıkan |
|---|---|---|
| **Supabase** | Postgres + kimlik doğrulama + depolama + gerçek zamanlı + edge işlevleri | "Açık kaynak Firebase alternatifi" olarak konumlanır. Tek platformda tüm arka yüz. Ücretsiz katmanda proje bir süre kullanılmazsa duraklatılıyor |
| **Neon** | Serverless Postgres | Sıfıra ölçeklenme ve **branching** (her PR için ayrı veritabanı kopyası). Databricks tarafından satın alındığı (Mayıs 2025, ~1 milyar dolar) raporlanıyor; bağımsız işletildiği belirtiliyor. Temmuz 2026'da kendi auth/depolama/işlev paketini beta olarak çıkardığı raporlanıyor |
| **Firebase** | Google'ın BaaS'ı | Gerçek zamanlı senkronizasyon ve çevrimdışı destek güçlü; mobil uygulamalarda yaygın. Google ekosistemine bağlar |
| **PlanetScale** | Yönetilen MySQL/Vitess ve Postgres | **Ücretsiz katmanını Nisan 2024'te kaldırdı**; bu, sektörde çokça konuşulan bir dönüm noktası oldu. Şu an ödemeli ve daha kurumsal konumda |
| **Turso / Cloudflare D1** | Edge SQLite | Kullanıcıya yakın, düşük gecikmeli okumalar |

**Bu tablodan çıkarılacak asıl ders şu:** ücretsiz katmanlar kalıcı değildir. PlanetScale örneği, üzerine ürün kurulan bir ücretsiz katmanın bir gecede kalkabileceğini gösterdi. Bir platform seçerken "bugün bedava" değil, "ödemeli plana geçersek maliyeti ne olur ve çıkmak ne kadar zor" sorusu sorulmalıdır.

### Row Level Security

- **Terim (İngilizce):** RLS — Row Level Security
- **Türkçesi:** Satır seviyesinde güvenlik
- **Tanım:** Hangi kullanıcının hangi satırları görebileceğinin, uygulama kodunda değil **veritabanı seviyesinde** tanımlanması.
- **Ne işe yarar / neden var:** BaaS mimarilerinde kritiktir: istemci doğrudan veritabanıyla konuştuğu için, yetki kontrolü arada bir sunucu katmanı olmadan yapılmalıdır. RLS bu kontrolü en derin katmana koyar.
- **Nerede karşına çıkar:** Supabase ve benzeri platformlarda.
- **Örnek kullanım:** "RLS politikalarını yazmadan yayına çıkmayalım; şu an herkes her satırı okuyabilir."
- **Karıştırılanlar:** **Ciddi bir risk kaynağıdır:** RLS yapılandırılmadığında veya yanlış yazıldığında, veritabanı internete açık hâle gelebilir. BaaS ile hızlı ilerleyen projelerde en sık görülen güvenlik açığı budur.
- **İlgili terimler:** Authorization (12.9), IDOR (13.3), BaaS
