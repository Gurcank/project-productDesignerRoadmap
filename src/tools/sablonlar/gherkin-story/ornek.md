# Story: Son siparişi tekrarlamak

**Müşteri olarak**, son siparişimi tek dokunuşla tekrarlamak istiyorum, **çünkü** her sabah aynı kahveyi alıyorum ve her seferinde menüde aramak zaman alıyor.

```gherkin
# language: tr
Özellik: Son siparişi tekrarlamak

  Kural: Tekrar sipariş, son siparişin ürünlerini ve dükkânını kullanır

    Örnek: Kayıtlı kartla tekrar sipariş
      Diyelim ki Ada'nın son siparişi Moda şubesinden bir orta boy filtre kahve
      Ve Ada'nın kayıtlı bir kartı var
      Eğer ki Ada son siparişini tekrarlarsa
      O zaman sipariş Moda şubesine gönderilir
      Ve Ada ödeme onayını görür

  Kural: Kayıtlı kart yoksa kart seçimine yönlendirilir

    Örnek: Kart silinmiş
      Diyelim ki Ada'nın son siparişi Moda şubesinden bir orta boy filtre kahve
      Ve Ada'nın kayıtlı kartı yok
      Eğer ki Ada son siparişini tekrarlarsa
      O zaman Ada kart seçme ekranını görür
      Ve sepetinde orta boy filtre kahve vardır

  Kural: Stokta olmayan ürün tekrar siparişe girmez

    Örnek: Ürünlerden biri bitmiş
      Diyelim ki Ada'nın son siparişi bir filtre kahve ve bir kurabiye
      Ve Moda şubesinde kurabiye kalmadı
      Eğer ki Ada son siparişini tekrarlarsa
      O zaman Ada "Kurabiye şu an yok" uyarısını görür
      Ve sepetinde yalnız filtre kahve vardır
```
