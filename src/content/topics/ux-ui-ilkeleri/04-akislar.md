---
title: "Akışlar"
sectionNumber: "4.4"
category: "ux-ui-ilkeleri"
order: 4
cardCount: 6
sourceFile: "04-ui-ux-surec-ve-ilkeler.md"
origin: "material"
flags: []
---
Kullanıcının bir hedefe ulaşmak için attığı adımların haritası. Ekran çizmeden önce yapılan iş budur; ekranlar akışın çıktısıdır, girdisi değil.

### User flow

- **Terim (İngilizce):** User flow
- **Türkçesi:** Kullanıcı akışı
- **Tanım:** Kullanıcının bir hedefe ulaşırken geçtiği ekranların, kararların ve dallanmaların şeması.
- **Ne işe yarar / neden var:** Eksik ekranları ve düşünülmemiş durumları önceden ortaya çıkarır. Ekran ekran tasarlarsan aradaki geçişleri ve istisnaları kaçırırsın; akış çizersen kaçıramazsın çünkü her dallanma bir kutu ister.
- **Nerede karşına çıkar:** Tasarımın ilk çıktısı. Figma, FigJam, Whimsical gibi araçlarda çizilir.
- **Örnek kullanım:** "Akışı çizince fark ettik: kullanıcı e-postasını doğrulamadan ödeme adımına geçebiliyor."
- **Karıştırılanlar:** *User flow* ürün içindeki adımları gösterir; *user journey* (2.4) ürün dışını ve duyguyu da kapsar.
- **İlgili terimler:** Task flow, Happy path, Edge case

### Task flow

- **Terim (İngilizce):** Task flow
- **Türkçesi:** Görev akışı
- **Tanım:** Tek bir görevin, dallanma olmadan, doğrusal adımları.
- **Ne işe yarar / neden var:** User flow dallanmaları içerir ve karmaşıktır; task flow bir görevin en kısa hâlini gösterir. Adım sayısını azaltma çalışmalarında bu basit hâl kullanılır.
- **Nerede karşına çıkar:** Akış sadeleştirme çalışmalarında.
- **Örnek kullanım:** "Task flow şu an 6 adım; 4'e indirebilir miyiz?"
- **İlgili terimler:** User flow, Happy path

### Happy path

- **Terim (İngilizce):** Happy path
- **Türkçesi:** Yaygın Türkçe karşılığı yok; "ideal akış" denir.
- **Tanım:** Her şeyin yolunda gittiği, hata olmayan, veri eksiksiz olan senaryo.
- **Ne işe yarar / neden var:** Tasarımın ve demoların başlangıç noktası. Tehlikesi de budur: çoğu ekip sadece happy path'i tasarlar ve gerçek kullanımda ortaya çıkan durumların tasarımı yapılmadan kalır. Bu, tasarımcının en sık yaptığı eksiklik.
- **Nerede karşına çıkar:** Demo ve sunumlarda. "Bu sadece happy path" bir uyarı cümlesidir.
- **Örnek kullanım:** "Happy path hazır; şimdi boş, hata ve yükleme durumlarını da tasarlamamız lazım."
- **İlgili terimler:** Edge case, Error path, Durum ekranları (7.9)

### Edge case

- **Terim (İngilizce):** Edge case
- **Türkçesi:** Uç durum
- **Tanım:** Nadiren oluşan ama oluştuğunda tasarımı bozan durum.
- **Ne işe yarar / neden var:** Nadir olması önemsiz olduğu anlamına gelmez; o duruma düşen kullanıcı için tek gerçek odur. Tipik uç durumlar: çok uzun isim, tek karakterlik metin, 999 bildirim, sıfır sonuç, çok yavaş bağlantı, hiç görsel yüklenmemiş, çok küçük ekran, çok büyük ekran.
- **Nerede karşına çıkar:** Tasarım incelemelerinde ve QA'in bulduğu hatalarda.
- **Örnek kullanım:** "Edge case: kullanıcı adı 40 karakter olursa kart taşıyor. Kırpma kuralı belirleyelim."
- **Karıştırılanlar:** *Edge case* ≠ *bug*. Edge case tasarlanmamış bir durumdur; bug yanlış çalışan bir şeydir. Tasarlanmamış uç durum genelde bug'a dönüşür.
- **İlgili terimler:** Happy path, Error state (7.9), Acceptance criteria (2.6)

### Error path

- **Terim (İngilizce):** Error path
- **Türkçesi:** Hata akışı
- **Tanım:** Bir şey ters gittiğinde kullanıcının izleyeceği yol.
- **Ne işe yarar / neden var:** Kullanıcıyı çıkmazda bırakmamayı sağlar. Her hata ekranının cevaplaması gereken üç soru vardır: **ne oldu, neden oldu, şimdi ne yapmalıyım.** Üçüncüsü en sık atlanandır ve en önemlisidir.
- **Nerede karşına çıkar:** Form tasarımında, ödeme akışlarında, bağlantı kopmalarında.
- **Örnek kullanım:** "Error path'te sadece 'bir hata oluştu' yazıyor; kullanıcıya ne yapacağını söylemiyoruz."
- **İlgili terimler:** Error state (7.9), UX writing (4.9), Nielsen heuristics (4.6)

### Dead end

- **Terim (İngilizce):** Dead end
- **Türkçesi:** Çıkmaz
- **Tanım:** Kullanıcının devam edecek hiçbir eylem bulamadığı ekran.
- **Ne işe yarar / neden var:** 404 sayfaları, boş sonuç ekranları ve hata ekranları en sık çıkmaza dönüşen yerlerdir. Kural basit: **her ekranda ileri götüren en az bir yol olmalı.**
- **Nerede karşına çıkar:** Tasarım denetimlerinde.
- **Örnek kullanım:** "Arama sonucu boşsa ekran çıkmaz oluyor; öneri listesi veya filtre temizleme butonu koyalım."
- **İlgili terimler:** Empty state (7.9), 404 (7.9), Error path
