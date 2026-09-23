---
title: "Dosya ve medya"
sectionNumber: "10.14"
category: "back-end-api"
order: 14
cardCount: 2
sourceFile: "10-backend-ve-api.md"
origin: "material"
flags: []
---
### Upload / Object storage / Signed URL

- **Terim (İngilizce):** File upload, object storage (S3 vb.), signed URL, presigned URL
- **Türkçesi:** Dosya yükleme, nesne depolama, imzalı adres
- **Tanım:** Kullanıcı dosyaları sunucunun diskinde değil, ayrı bir depolama servisinde tutulur. **Signed URL**, o dosyaya sınırlı süreyle erişim veren özel adrestir.
- **Ne işe yarar / neden var:** Dosyaları sunucuda tutmak ölçeklenmez ve yedeklemeyi zorlaştırır. Signed URL ise özel dosyaların (fatura, kimlik belgesi) herkese açık olmadan paylaşılmasını sağlar — adres belirli bir süre sonra geçersiz olur.
- **Nerede karşına çıkar:** Profil fotoğrafı, belge yükleme ve medya yönetiminde.
- **Örnek kullanım:** "Faturaları signed URL ile verelim; adres 15 dakika sonra geçersiz olsun."
- **Karıştırılanlar:** Tasarım tarafında yükleme akışının tüm durumları gerekir (7.11): boyut ve format sınırı **önceden** yazılmalı, ilerleme gösterilmeli, iptal edilebilmeli, hata anlaşılır olmalı.
- **İlgili terimler:** File upload (7.11), Progress indicator (7.9), Auth (Bölüm 12)

### Image CDN / Transcoding

- **Terim (İngilizce):** Image CDN, image transformation, transcoding
- **Türkçesi:** Görsel dağıtım servisi, dönüştürme
- **Tanım:** Yüklenen görsellerin otomatik olarak yeniden boyutlandırılması, formatının değiştirilmesi (WebP/AVIF) ve kırpılması. Transcoding video için aynı işlemin adıdır.
- **Ne işe yarar / neden var:** Editörün yüklediği 5MB'lık fotoğrafın kullanıcıya 5MB olarak gitmemesini sağlar. Tasarımdaki her farklı boyut (kart, liste, detay) için ayrı sürüm otomatik üretilir (8.12).
- **Nerede karşına çıkar:** İçerik yoğun sitelerde. Meta-framework'lerin görsel bileşenleri bunu genelde hazır sunar.
- **Örnek kullanım:** "Görselleri image CDN'den geçirelim; editörler ne yüklerse yüklesin optimize edilmiş gelsin."
- **İlgili terimler:** Image optimization (8.12), CDN (10.11), Aspect ratio (5.7)
