---
title: "Karmaşıklık sezgisi: 10, 1.000, 1.000.000"
sectionNumber: ""
category: "algoritmalar"
order: 2
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "web.dev — Interaction to Next Paint (INP)"
    url: "https://web.dev/articles/inp/"
---

Bir işlemin maliyeti öğe sayısıyla nasıl büyüyor? Tek soru bu. Cevabı bilmek, "10 kayıtta çalışıyordu, canlıda dondu" sürprizini önler.

Teknik adı **Big-O** ama notasyonu bilmene gerek yok; gereken şey büyüme hissi.

## Üç büyüme tipi

| Tip | Anlamı | Örnek | 1.000 öğede | 1.000.000 öğede |
|---|---|---|---|---|
| **Sabit** | Sayı fark etmez | Sözlükten anahtarla getir | Anında | Anında |
| **Doğrusal** | İki katı veri, iki katı süre | Listeyi baştan sona tara | Hızlı | Fark edilir |
| **Kare** | İki katı veri, dört katı süre | Her öğeyi her öğeyle karşılaştır | Yavaşlar | Pratikte imkânsız |

Aradaki **logaritmik** tip (ikili arama, index) doğrusala çok yakın ama ondan hızlıdır: milyon kayıtta yirmi adımda sonuç bulur.

## Asıl tuzak: kare büyüme

En sık karşılaşılan performans felaketi "her öğe için, tüm öğeleri tekrar gez" kalıbıdır. 100 öğede 10.000 işlem — fark edilmez. 3.000 öğede 9 milyon işlem — arayüz donar.

Veritabanı tarafındaki adı **N+1 problemi**: listedeki her satır için ayrı bir sorgu atmak (11.9). Bir liste ekranı yavaşsa ilk şüpheli budur.

## Ekrandaki karşılığı

Tarayıcı tarafında bunun görünür eşiği **INP**: bir tıklamadan sonra ekranın güncellenmesi ~200 ms'yi aşarsa kullanıcı gecikmeyi hisseder (8.12). Kare büyüyen bir işlem bu bütçeyi tek başına tüketir.

Somut sezgi:

- **10 öğe** — hiçbir şey fark etmez, her çözüm çalışır.
- **1.000 öğe** — yapı seçimi hissedilmeye başlar.
- **100.000+** — yanlış yapı arayüzü kullanılamaz hâle getirir.

## Bir Product Designer olarak

- **Tasarımda 8 satır göstermen, arkadaki listenin 8 olduğu anlamına gelmez.** Filtre tüm veri üzerinde çalışır.
- **"Hepsini seç" ve "hepsini dışa aktar" gibi istekler ölçekle patlar.** Bunları tasarlarken üst sınır sor.
- **Gerçekçi veriyle prototiple.** Üç satırlık sahte veriyle test edilen tablo, canlıda bambaşka davranır.
- **Bir ekran yavaşsa suçu tasarıma atma, ama sormayı da bırakma:** "bu, veri miktarıyla mı büyüyor?"
