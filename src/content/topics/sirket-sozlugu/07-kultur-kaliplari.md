---
title: "Kültür kalıpları"
sectionNumber: "18.7"
category: "sirket-sozlugu"
order: 7
cardCount: 6
sourceFile: "18-sirket-ortami-sozlugu.md"
origin: "material"
flags: []
---
Bir ekibin nasıl çalıştığını tarif eden ifadeler. Bunları bilmek, bir iş görüşmesinde ekibin kültürünü anlamana da yarar.

### Async-first

- **Terim (İngilizce):** Async-first, remote-first
- **Türkçesi:** Eş zamansız öncelikli
- **Tanım:** Varsayılan iletişimin yazılı ve eş zamansız olduğu, toplantının istisna olduğu çalışma biçimi (3.6).
- **Ne işe yarar / neden var:** Farklı saat dilimlerinde çalışmayı mümkün kılar ve kararların yazılı iz bırakmasını sağlar. Bedeli: karar süresi uzar ve yazma disiplini gerektirir.
- **Nerede karşına çıkar:** Uzaktan çalışan ekiplerin tanıtım metinlerinde.
- **Örnek kullanım:** "Async-first çalışıyoruz; toplantı yerine yazılı öneri bekliyoruz."
- **İlgili terimler:** Sync/Async (3.6), Documentation-first

### Documentation-first

- **Terim (İngilizce):** Documentation-first, writing culture
- **Türkçesi:** Belge öncelikli
- **Tanım:** Bir işe başlamadan önce niyetin ve kararın yazıya dökülmesi.
- **Ne işe yarar / neden var:** Yazmak, düşünmeyi zorlar. Bir fikri tek sayfaya sığdıramamak (2.5) çoğu zaman fikrin henüz netleşmediğinin işaretidir. Ayrıca yeni katılan biri, aylarca süren konuşmaları okuyarak yetişebilir.
- **Nerede karşına çıkar:** Async çalışan ekiplerde.
- **Örnek kullanım:** "Önce bir RFC yazalım; tartışmayı onun üstünden yürütelim."
- **İlgili terimler:** RFC (18.6), ADR (14.12), Async-first

### Disagree and commit

- **Terim (İngilizce):** Disagree and commit
- **Türkçesi:** Katılmıyorum ama destekliyorum
- **Tanım:** Bir karara katılmasan bile, karar alındıktan sonra ona tam destek verme ilkesi.
- **Ne işe yarar / neden var:** Ekipleri iki kötü uçtan korur: **sonsuz tartışma** (herkes ikna olana kadar ilerlememek) ve **sessiz sabotaj** (karara uymuş görünüp yarım çalışmak). İlkenin çalışması için ön koşul, **itirazın gerçekten dinlenmiş olmasıdır** — aksi hâlde "sus ve uy" anlamına gelir ve zararlıdır.
- **Nerede karşına çıkar:** Karar kültüründe.
- **Örnek kullanım:** "Ben hâlâ ikinci seçeneği tercih ederdim ama karar verildi; disagree and commit — tam destek veriyorum."
- **Karıştırılanlar:** İtirazın **kayıt altına alınması** önemlidir (ADR'deki alternatifler bölümü, 14.12): karar yanlış çıkarsa, o itiraz süreci hızlandırır.
- **İlgili terimler:** ADR (14.12), RFC (18.6), Blameless culture

### Blameless culture

- **Terim (İngilizce):** Blameless culture, psychological safety
- **Türkçesi:** Suçlamayan kültür, psikolojik güvenlik
- **Tanım:** Hataların kişilere değil sisteme atfedildiği, insanların sorun bildirmekten çekinmediği ortam.
- **Ne işe yarar / neden var:** Suçlama kültüründe insanlar hataları gizler; gizlenen hata büyür ve sistem öğrenemez. Postmortem'lerin (16.9) "blameless" olmasının sebebi budur. Aynı ilke retro (3.2) ve kod incelemesi (17.10) için de geçerlidir.
- **Nerede karşına çıkar:** Olay yönetimi ve ekip kültürü tartışmalarında.
- **Örnek kullanım:** "Soru 'kim yaptı' değil, 'bu nasıl canlıya kadar geldi ve hangi kontrol eksikti'."
- **İlgili terimler:** Postmortem (16.9), Retrospective (3.2), Code review (17.10)

### Bias for action

- **Terim (İngilizce):** Bias for action
- **Türkçesi:** Eyleme meyil
- **Tanım:** Belirsizlik varken beklemek yerine, geri alınabilir kararlarda hızlı hareket etmeyi tercih eden yaklaşım.
- **Ne işe yarar / neden var:** Çift yönlü kapı kararlarında (14.1) uzun tartışma israftır. Ama **tek yönlü kapılarda aynı refleks tehlikelidir** — bu yüzden ilke, karar türünü ayırt etmeyi gerektirir.
- **Nerede karşına çıkar:** Şirket değerleri listelerinde ve iş görüşmelerinde.
- **Örnek kullanım:** "Bu geri alınabilir; bias for action, deneyip ölçelim."
- **İlgili terimler:** Tersine çevrilebilirlik (14.1), Iteration (2.2)

### Ownership / DRI

- **Terim (İngilizce):** Ownership, DRI (Directly Responsible Individual)
- **Türkçesi:** Sahiplik, tek sorumlu
- **Tanım:** Her işin **tek bir** sahibi olması ilkesi.
- **Ne işe yarar / neden var:** "Herkesin sorumluluğu" pratikte "kimsenin sorumluluğu" demektir. Tek bir sahip, işin takip edilmesini garanti eder — sahip işi kendisi yapmak zorunda değildir, bitmesini sağlamakla yükümlüdür.
- **Nerede karşına çıkar:** Proje ve aksiyon maddesi atamalarında.
- **Örnek kullanım:** "Bu maddenin DRI'ı kim? Sahipsiz kalırsa yapılmaz."
- **İlgili terimler:** Action item (18.3), Stakeholder (2.1)
