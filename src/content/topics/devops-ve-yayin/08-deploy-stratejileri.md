---
title: "Deploy stratejileri"
sectionNumber: "16.8"
category: "devops-ve-yayin"
order: 8
cardCount: 4
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: []
---
Yeni sürümün kullanıcılara nasıl ulaştırılacağı. Hepsi aynı soruyu cevaplar: **bir şey ters giderse kaç kullanıcı etkilensin?**

### Rolling deployment

- **Terim (İngilizce):** Rolling deployment
- **Türkçesi:** Kademeli yayın
- **Tanım:** Sunucu kopyalarının tek tek yeni sürüme geçirilmesi.
- **Ne işe yarar / neden var:** Kesinti olmadan yayın yapmayı sağlar. Geçiş sırasında eski ve yeni sürüm bir süre birlikte çalışır.
- **Nerede karşına çıkar:** Çok kopyalı sistemlerde varsayılan strateji.
- **Örnek kullanım:** "Rolling deploy yapıyoruz; kesinti olmayacak ama iki sürüm kısa süre birlikte çalışacak."
- **Karıştırılanlar:** İki sürümün birlikte çalışması, **API ve veritabanı uyumluluğu** gerektirir: yeni sürümün eklediği bir alan, eski sürümü kırmamalıdır.
- **İlgili terimler:** Blue-green, Migration (11.10)

### Blue-green deployment

- **Terim (İngilizce):** Blue-green deployment
- **Türkçesi:** Mavi-yeşil yayın
- **Tanım:** İki tam ortam bulundurup, yeni sürümü boştaki ortama kurup trafiği bir anda oraya çevirmek.
- **Ne işe yarar / neden var:** **Geri dönüş anlıktır:** sorun çıkarsa trafik eski ortama geri çevrilir. Bedeli: iki kat altyapı maliyeti.
- **Nerede karşına çıkar:** Riskli sürümlerde ve kesintinin kabul edilemez olduğu sistemlerde.
- **Örnek kullanım:** "Blue-green yapalım; sorun çıkarsa saniyeler içinde geri dönebiliriz."
- **İlgili terimler:** Rollback (16.9), Canary

### Canary deployment

- **Terim (İngilizce):** Canary deployment, progressive rollout
- **Türkçesi:** Kanarya yayını, kademeli açılım
- **Tanım:** Yeni sürümün önce kullanıcıların küçük bir yüzdesine açılması, sorun görülmezse oranın kademeli artırılması.
- **Ne işe yarar / neden var:** Hatanın etki alanını sınırlar: bir sorun varsa kullanıcıların %1'i yaşar, %100'ü değil. Adı, madenlerde gaz tespiti için kullanılan kanaryadan gelir.
- **Nerede karşına çıkar:** Büyük ölçekli sistemlerde ve riskli değişikliklerde.
- **Örnek kullanım:** "Önce %5'e açalım, metrikleri bir saat izleyelim, sorun yoksa artıralım."
- **İlgili terimler:** Feature flag, Soft launch (2.11), Monitoring (16.10)

### Feature flag

- **Terim (İngilizce):** Feature flag, feature toggle, kill switch
- **Türkçesi:** Özellik anahtarı
- **Tanım:** Bir özelliğin, kod yayınlandıktan sonra ayrı bir ayarla açılıp kapatılabilmesi.
- **Ne işe yarar / neden var:** **Yayın (deploy) ile açılışı (release) birbirinden ayırır** — bu, bölümdeki en önemli fikirlerden biri. Kod canlıda durur ama kullanıcıya kapalıdır. Sonuçları:
  - Yarım kalmış iş, ana dala girebilir (trunk-based, 15.7).
  - Bir özellik, pazarlama takvimine göre açılabilir — yeni bir yayın gerekmeden.
  - Sorun çıkarsa özellik saniyeler içinde kapatılabilir (**kill switch**) — geri almaktan (16.9) çok daha hızlı.
  - A/B testi (4.10) ve kademeli açılım bunun üstüne kurulur.
- **Nerede karşına çıkar:** Modern ürün ekiplerinde standart.
- **Örnek kullanım:** "Yeni ödeme akışını flag arkasında yayınlayalım; önce biz kullanalım, sonra %10'a açalım."
- **Karıştırılanlar:** **Bayraklar birikir ve teknik borç (17.9) üretir.** Kullanılmayan bayraklar kodu dallandırır ve test edilmesi gereken durum sayısını katlar. Her bayrağın bir sahibi ve bir kaldırılma tarihi olmalıdır.
- **İlgili terimler:** Canary, A/B test (4.10), Trunk-based (15.7), Technical debt (17.9)
