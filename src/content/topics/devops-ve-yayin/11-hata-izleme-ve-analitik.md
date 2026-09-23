---
title: "Hata izleme ve analitik"
sectionNumber: "16.11"
category: "devops-ve-yayin"
order: 11
cardCount: 3
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: ["degisken"]
---
### Error tracking

- **Terim (İngilizce):** Error tracking, error monitoring (Sentry vb.)
- **Türkçesi:** Hata izleme
- **Tanım:** Canlıda oluşan hataların otomatik olarak toplanması, gruplanması ve bağlamıyla birlikte raporlanması.
- **Ne işe yarar / neden var:** Kullanıcıların çoğu hata bildirmez; sadece terk eder. Hata izleme, bildirilmeyen sorunları görünür kılar. Hangi tarayıcıda, hangi sayfada, kaç kullanıcıda olduğunu gösterir. Source map (8.11) yüklenmezse raporlar okunamaz hâle gelir.
- **Nerede karşına çıkar:** Üretime çıkan her projede olmalı.
- **Örnek kullanım:** "Sentry'de bu hata günde 200 kez tetikleniyor ama tek bir destek talebi yok; kullanıcılar sessizce terk ediyor."
- **İlgili terimler:** Source map (8.11), Incident (16.9), Error state (7.9)

### Web analytics vs Product analytics

- **Terim (İngilizce):** Web analytics, product analytics
- **Türkçesi:** Web analitiği, ürün analitiği
- **Tanım:** **Web analitiği** trafik odaklıdır: kaç ziyaretçi, nereden geldi, hangi sayfaya baktı. **Ürün analitiği** davranış odaklıdır: kullanıcı hangi adımları tamamladı, nerede takıldı, hangi özelliği kullandı.
- **Ne işe yarar / neden var:** İkisi farklı sorulara cevap verir ve tasarımcı ikincisine ihtiyaç duyar: funnel (4.10), elde tutma ve özellik kullanım oranları ürün analitiğinden gelir.
- **Nerede karşına çıkar:** Ölçüm kurulumunda. `[DEĞİŞKEN BİLGİ]` Araç isimleri ve fiyatlandırmaları sık değişir.
- **Örnek kullanım:** "Web analitiği 'trafik var' diyor ama funnel'ın nerede koptuğunu göremiyoruz; ürün analitiği kuralım."
- **Karıştırılanlar:** Her iki tür de kişisel veri toplayabilir; KVKK/GDPR (13.10) uyumu ve çerez onayı (7.7) gerekir. Ayrıca reklam engelleyiciler bazı araçları bloke eder — ölçümler eksik olabilir.
- **İlgili terimler:** Funnel (4.10), KVKK (13.10), Heatmap (4.10)

### Event tasarımı

- **Terim (İngilizce):** Event taxonomy, tracking plan
- **Türkçesi:** Olay tasarımı, ölçüm planı
- **Tanım:** Hangi kullanıcı davranışlarının kaydedileceğinin ve nasıl adlandırılacağının önceden planlanması.
- **Ne işe yarar / neden var:** **Bu doğrudan senin işin ve çoğu ekipte sahipsiz kalır.** Olaylar plansız eklenirse üç ay sonra `button_click`, `btn_clicked` ve `ClickedButton` adlı üç ayrı olay olur ve hiçbiri analiz edilemez. İyi bir ölçüm planı: her olayın adı, ne zaman tetiklendiği, hangi ek bilgileri (özellik) taşıdığı ve **hangi soruyu cevaplamak için var olduğu**.
- **Nerede karşına çıkar:** Özellik tanımında (2.5). Başarı ölçütü (3.7) belirlenirken, onu ölçecek olay da tanımlanmalıdır.
- **Örnek kullanım:** "Bu özelliğin başarı ölçütü var ama onu ölçecek olay tanımlı değil; yayına çıkarsak ölçemeyiz."
- **Karıştırılanlar:** **Her şeyi ölçmek bir strateji değildir.** Cevaplanmayacak soru için toplanan veri, hem gürültü hem gereksiz bir gizlilik yükümlülüğüdür (11.11, veri minimizasyonu).
- **İlgili terimler:** Success metric (3.7), Funnel (4.10), Vanity metric (3.7)
