---
title: "Maliyet"
sectionNumber: "16.12"
category: "devops-ve-yayin"
order: 12
cardCount: 2
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: ["degisken"]
---
### Bulut maliyeti

- **Terim (İngilizce):** Cloud cost, egress, build minutes, usage-based billing
- **Türkçesi:** Bulut maliyeti, veri çıkışı, derleme dakikası
- **Tanım:** Hosting faturasının bileşenleri: hesaplama süresi, veri transferi (özellikle **egress** — dışarı çıkan veri), depolama, derleme dakikaları ve koltuk başına ücretler.
- **Ne işe yarar / neden var:** **Tasarım kararlarının doğrudan maliyet karşılığı var.** Optimize edilmemiş görseller (8.12) egress faturasını büyütür. Her sayfada çalışan ağır bir sunucu işlevi, hesaplama maliyeti üretir. Statik üretim (8.10) ise neredeyse bedavadır.
- **Nerede karşına çıkar:** Aylık faturada ve mimari kararlarda.
- **Örnek kullanım:** "Görselleri optimize edip CDN'e alalım; hem hızlanır hem egress maliyeti düşer."
- **İlgili terimler:** CDN (10.11), Image optimization (8.12), SSG (8.10)

### Ücretsiz katman uyarısı

`[DEĞİŞKEN BİLGİ]` Bölüm 11.12'deki PlanetScale dersi burada da geçerli: **ücretsiz katmanlar kalıcı değildir.** Eylül 2026 itibarıyla topladığım kaynaklar, birden fazla platformun ücretsiz katmanını daralttığını veya fiyatlandırma modelini değiştirdiğini raporluyor. Ayrıca bazı ücretsiz katmanların **ticari kullanıma kapalı** olduğu belirtiliyor — yani müşteri projesini oraya koymak sözleşme ihlali olabilir.

**Bir platform seçerken sorulacak doğru soru:** "bugün bedava mı?" değil, **"ödemeli plana geçtiğimizde maliyeti ne olur ve çıkmak ne kadar zor?"**
