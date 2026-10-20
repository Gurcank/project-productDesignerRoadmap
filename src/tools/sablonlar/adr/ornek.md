# ADR-014: Öğrenci kartı haftalık listeyle doğrulanır

**Durum:** Kabul edildi
**Tarih:** Kampüs projesi, 3. hafta
**Karar veren:** Elif · **Danışılanlar:** Burak (gözden geçirdi), Leyla, Ayşe

## Bağlam

Proje tüzüğündeki varsayım "öğrenci kartı numaraları bir arayüzle doğrulanabilir" 3. haftada yanlış çıktı: üniversitenin böyle bir arayüzü yok. Öğrenci işleri her pazartesi geçerli kartların listesini gönderebiliyor.

## Seçenekler

1. **Üniversitenin kimlik sistemiyle giriş:** en kesin doğrulama · üniversite izin vermiyor, mümkün değil.
2. **Haftalık listeyle doğrulama:** hemen kurulabilir, kişisel veri az · hafta içinde kart alan öğrenci pazartesiye kadar listede yok.
3. **Kart fotoğrafı yükleme:** her an çalışır · saldırı yüzeyi büyük, gereksiz kişisel veri toplar, elle inceleme gerekir.

## Karar

Kart, öğrenci işlerinin her pazartesi gönderdiği listeyle doğrulanır.

## Gerekçe ve sonuçlar

- **Neden:** fotoğraf yükleme gereksiz kişisel veri topluyor ve saldırı yüzeyini büyütüyordu; liste ise yalnız kart numarası taşıyor.
- **İyi sonuçlar:** lansmana yetişiyor; kişisel veri en azda kalıyor.
- **Kötü sonuçlar / ödenen bedel:** hafta içinde kart alan öğrenci indirimi pazartesiye kadar kafede elle onaylatmak zorunda. Liste servisi yanıt vermezse indirim uygulanmaz.

## Yeniden bakma koşulu

Üniversite bir doğrulama arayüzü sunarsa yeniden değerlendirilir.
