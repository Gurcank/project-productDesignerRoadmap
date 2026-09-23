---
title: "Bağlam verme yolları"
sectionNumber: "19.3"
category: "yapay-zeka-ile-calisma"
order: 3
cardCount: 3
sourceFile: "19-yapay-zeka-ile-profesyonel-calisma.md"
origin: "material"
flags: ["degisken", "emin-degil"]
---
2026'da yaygın görüşe göre **asıl beceri prompt yazmak değil, bağlamı tasarlamak** — yani modelin ne göreceğine karar vermek. Sorunların çoğu kötü prompt'tan değil, eksik bağlamdan doğuyor.

### Context engineering

- **Terim (İngilizce):** Context engineering
- **Türkçesi:** Bağlam mühendisliği
- **Tanım:** Modele ne gösterileceğinin bilinçli olarak tasarlanması — sadece nasıl sorulacağının değil.
- **Ne işe yarar / neden var:** Aynı model, aynı soruya farklı bağlamla çok farklı cevap verir. Bir bileşen isterken tasarım token'larını (5.2) da verdiysen, çıktı ölçeğe uyar; vermediysen model kendi sayılarını uydurur ve sonuç sistemsiz görünür.
- **Nerede karşına çıkar:** Yapay zekâ destekli geliştirmenin merkezî becerisi olarak anılıyor.
- **Örnek kullanım:** "Sorun promptta değil; model tasarım sistemimizi görmüyor. Token dosyasını da verelim."
- `[EMİN DEĞİLİM]` Bu terimin ne kadar kalıcı olacağını bilmiyorum; ama altındaki fikir (bağlamın çıktıyı prompttan çok belirlediği) sağlam.
- **İlgili terimler:** Context window (19.1), Kalıcı talimat dosyası

### Bağlam kaynakları

| Kaynak | Ne sağlar | Ne zaman |
|---|---|---|
| **Referans site / ekran görüntüsü** | Görsel yön, düzen kalıbı | Tasarım isteklerinde |
| **Mevcut kod** | Proje kalıpları, adlandırma, yapı | Var olan projeye ekleme yaparken |
| **Tasarım token'ları** (5.2) | Renk, boşluk, tipografi ölçeği | Her arayüz isteğinde |
| **Veri şeması / tip tanımı** (11.4, 8.6) | Hangi alanlar var, hangileri boş olabilir | Veri gösteren ekranlarda |
| **Kullanıcı akışı** (4.4) | Adımlar, dallanmalar, uç durumlar | Çok ekranlı akışlarda |
| **Kabul kriterleri** (2.6) | "Bitti" tanımı | Her ciddi istekte |
| **Hata mesajı / konsol çıktısı** | Sorunun gerçek hâli | Hata ayıklamada |

**Kritik nokta — "bağlam boşluğu":** Projende yazılı olmayan her kural, model için **yok** demektir. Ekibin (veya senin) kafandaki "biz hep şöyle yaparız" bilgisi, yazılı değilse hiçbir prompt bunu telafi edemez. Bu boşluklar tanımı gereği görünmezdir: dosya, belgelemediği şeyi belgelemez.

### Kalıcı talimat dosyası

- **Terim (İngilizce):** Project instruction file (CLAUDE.md, AGENTS.md, rules file)
- **Türkçesi:** Proje talimat dosyası
- **Tanım:** Projeye özgü kuralların, her oturumda tekrar yazmak yerine kalıcı bir dosyada tutulması.
- **Ne işe yarar / neden var:** Proje kurallarını her promptta tekrarlamak hem zaman hem bağlam penceresi israfıdır. Kalıcı bir dosya bunu bir kez çözer. `[DEĞİŞKEN BİLGİ]` `AGENTS.md` adının bu iş için fiilî bir ortak standart hâline geldiği raporlanıyor; araçların kendi dosya adları ve konumları farklı olabilir, güncel dokümantasyona bak.
- **Nerede karşına çıkar:** Yapay zekâ destekli geliştirme ortamlarında.
- **Örnek kullanım:** "Tasarım kurallarını talimat dosyasına yazalım; her seferinde tekrar anlatmayalım."
- **İlgili terimler:** Context engineering, Design system (5.1)

**Kaynaklarda tutarlı olarak önerilen yapı** (sırasıyla):

1. **Proje özeti ve stack** (1.6) — bu ne, hangi teknolojilerle
2. **Mimari ilkeler** (Bölüm 14) — klasör yapısı, katmanlar, veri akışı
3. **Kurallar ve kalıplar** — adlandırma, bileşen yapısı, stil yaklaşımı (8.4)
4. **Tasarım sistemi** (Bölüm 5) — token'lar, ölçekler, bileşen kütüphanesi
5. **Test stratejisi** (Bölüm 17)
6. **Komutlar** — build, test, lint nasıl çalıştırılır
7. **Kaçınılacak kalıplar (anti-patterns)** — **en sona ve açıkça**

Yedinci madde senin için en önemlisi: **tasarım yasaklarını buraya yazarsan** (19.2, negatif kısıt), her promptta tekrar etmen gerekmez.
