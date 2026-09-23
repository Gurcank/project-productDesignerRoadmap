---
title: "Olay yönetimi"
sectionNumber: "16.9"
category: "devops-ve-yayin"
order: 9
cardCount: 4
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: []
---
Bir şeyler ters gittiğinde ne olacağı.

### Rollback

- **Terim (İngilizce):** Rollback
- **Türkçesi:** Geri alma
- **Tanım:** Yeni sürümün geri çekilip bir önceki çalışan sürüme dönülmesi.
- **Ne işe yarar / neden var:** Kriz anındaki ilk refleks. **Önce geri dön, sonra sebebi araştır** — baskı altında düzeltme yazmak yeni hata üretir (15.6).
- **Nerede karşına çıkar:** Olay müdahalesinde.
- **Örnek kullanım:** "Önce rollback yapalım, kullanıcı etkisini durduralım; kök nedene sonra bakarız."
- **Karıştırılanlar:** **Veritabanı değişiklikleri (11.10) rollback'i zorlaştırır:** kod geri alınabilir ama silinmiş bir sütun geri gelmez. Bu yüzden migration'lar geriye uyumlu planlanır: önce ekle, sonra kullan, en son eskisini kaldır.
- **İlgili terimler:** Revert (15.6), Blue-green (16.8), Migration (11.10)

### Hotfix

- **Terim (İngilizce):** Hotfix
- **Türkçesi:** Acil düzeltme
- **Tanım:** Normal süreci atlayarak doğrudan canlıya çıkarılan acil düzeltme.
- **Ne işe yarar / neden var:** Bazı sorunlar sıradaki sürümü bekleyemez. Ama süreç atlandığı için risklidir: hotfix'ler istatistiksel olarak yeni hata üretme eğilimindedir.
- **Nerede karşına çıkar:** Kritik hatalarda.
- **Örnek kullanım:** "Hotfix çıkacağız ama en azından bir kişi gözden geçirsin."
- **İlgili terimler:** Rollback, Cherry-pick (15.3), Incident

### Incident / Severity / On-call

- **Terim (İngilizce):** Incident, severity (sev1/sev2), on-call, escalation, runbook
- **Türkçesi:** Olay, önem seviyesi, nöbet
- **Tanım:** **Incident**, kullanıcıyı etkileyen beklenmedik bir sorun. **Severity**, etkisine göre seviyesi (sev1 en kritik). **On-call**, o an müdahaleden sorumlu kişi. **Runbook**, bilinen sorunlar için adım adım müdahale talimatı.
- **Ne işe yarar / neden var:** Kriz anında "kim ne yapacak" sorusunu önceden cevaplar. Panik anında karar vermek yerine, yazılı bir plan uygulanır.
- **Nerede karşına çıkar:** Üretimde çalışan her ekipte.
- **Örnek kullanım:** "Bu sev2; kullanıcılar etkileniyor ama akış tamamen durmuş değil."
- **Karıştırılanlar:** **Tasarımcının rolü var:** olay sırasında kullanıcıya ne gösterileceği (bakım ekranı, durum sayfası, hata mesajı) önceden tasarlanmış olmalıdır (7.9). Olay anında metin yazmaya çalışmak kötü sonuç verir.
- **İlgili terimler:** Postmortem, Escalation (3.5), Error state (7.9)

### Postmortem

- **Terim (İngilizce):** Postmortem, blameless postmortem, root cause analysis
- **Türkçesi:** Olay sonrası değerlendirme
- **Tanım:** Bir olaydan sonra ne olduğunu, neden olduğunu ve tekrarlamaması için ne yapılacağını yazan belge.
- **Ne işe yarar / neden var:** Aynı hatanın tekrar etmesini engeller. **"Blameless" olması kritiktir:** amaç suçlu bulmak değil, sistemdeki zayıflığı bulmaktır. Suçlama kültüründe insanlar hataları gizler ve sistem öğrenemez.
- **Nerede karşına çıkar:** Her ciddi olaydan sonra.
- **Örnek kullanım:** "Postmortem yazalım; asıl soru 'kim yaptı' değil, 'bu nasıl canlıya kadar geldi'."
- **Karıştırılanlar:** Retrospective (3.2) ile akrabadır ama farklıdır: retro düzenli ve süreç odaklı, postmortem olaya özel ve teknik odaklıdır.
- **İlgili terimler:** Incident, Retrospective (3.2), Blameless culture (18.7)
