---
title: "Tekrar eden tuzaklar"
sectionNumber: "19.10"
category: "yapay-zeka-ile-calisma"
order: 10
cardCount: 6
sourceFile: "19-yapay-zeka-ile-profesyonel-calisma.md"
origin: "material"
flags: []
---
### Jenerik tasarım

**Belirti:** Çıktı "AI ile üretilmiş" hissi veriyor ama neden olduğunu söyleyemiyorsun.

**Sebep:** Belirtilmeyen her yerde model **en yaygın kalıba** yönelir. Sistemsizlik (Bölüm 5 girişi) bunun görünen hâlidir: her bölümde farklı boşluk, gerekçesiz gradient, birbiriyle ilişkisiz griler, eşit üç sütunlu kartlar.

**Çözüm:** Ölçekleri ver (5.3, 5.5), token'ları ver (5.2), yasakları yaz (19.2), referans ver.

### Uydurma bağımlılık

**Belirti:** Kod var olmayan bir fonksiyonu veya paketi çağırıyor.

**Sebep:** Uydurma (19.1), en çok niş kütüphanelerde görülür.

**Çözüm:** "Yeni bağımlılık ekleme" kısıtı koy; eklenmesi gerekiyorsa gerekçesini ve paketin adını doğrulat.

### Eskimiş sürüm bilgisi

**Belirti:** Önerilen yaklaşım, kütüphanenin eski sürümüne ait.

**Sebep:** Bilgi kesim tarihi (19.1).

**Çözüm:** Kullandığın sürümü prompt'ta belirt; değişken bilgiyi doğrulat.

### Sessiz kapsam büyümesi

**Belirti:** Bir bileşen istedin, beş dosya değişti.

**Sebep:** Kapsam sınırı belirtilmedi (2.8, scope creep'in yapay zekâ hâli).

**Çözüm:** "Yalnızca şu dosyayı değiştir", "mevcut davranışı koruyarak" gibi kapsam kısıtları.

### Kabul edilen ilk cevap

**Belirti:** İlk çıktı makul göründüğü için sorgulanmadan kullanıldı.

**Sebep:** Kendinden emin bir dille sunulan çıktı, doğruluk izlenimi verir.

**Çözüm:** Alternatif iste ("üç yaklaşım ver ve takaslarını yaz"), kendi kabul kriterlerinle (19.5) kontrol et.

### Yanlış problemi çözmek

**Belirti:** Çıktı teknik olarak iyi ama işe yaramıyor.

**Sebep:** Sapma (19.1) — ve genelde kökü, isteğin çözüm dilinde yazılmış olmasıdır ("bize filtre lazım") problem dilinde değil ("kullanıcı aradığını bulamıyor", 2.3).

**Çözüm:** Problem tanımıyla başla, çözümle değil. Bu, Bölüm 2.3'teki ilkenin aynısıdır.
