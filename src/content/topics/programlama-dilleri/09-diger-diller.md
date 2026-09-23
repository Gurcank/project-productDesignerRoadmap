---
title: "Ruby, Swift, Kotlin, Rust"
sectionNumber: ""
category: "programlama-dilleri"
order: 9
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "Swift — Apple geliştirici dokümantasyonu"
    url: "https://developer.apple.com/swift/"
  - label: "Kotlin — resmî dokümantasyon"
    url: "https://kotlinlang.org/docs/home.html"
  - label: "Rust — resmî kitap"
    url: "https://doc.rust-lang.org/book/"
---

Bu dördü bir Product Designer'ın günlük işinde nadiren karar konusu olur ama adı geçtiğinde ne anlama geldiğini bilmek gerekir. Seviye: **kulak aşinalığı**.

## Ruby

Geliştirici mutluluğunu öne alan, **Ruby on Rails** ile ünlenen dil. Bir fikri çok hızlı çalışır hâle getirmekte güçlü; birçok bilinen ürün Rails ile başladı.

- **Nerede:** Erken aşama ürünler, devralınan Rails sistemleri.
- **Zayıf yanı:** Yeni proje başlangıçlarında payı azaldı; işe alım havuzu daralıyor.
- **PD için:** Rails'li bir üründe prototipten yayına giden yol kısadır — hızlı denemeye açık bir zemin.

## Swift

Apple'ın dili. **iOS, iPadOS, macOS** uygulamaları burada yazılır.

- **Nerede:** Native iOS uygulaması varsa.
- **PD için:** iOS tasarımı web tasarımı değildir — Apple'ın kendi arayüz kuralları (Human Interface Guidelines) ve hazır bileşenleri vardır. "Web'deki gibi olsun" demek, platformun doğal davranışını bozmak anlamına gelebilir.

## Kotlin

**Android'in** birinci sınıf dili; Java'nın modern alternatifi ve onunla aynı ekosistemde çalışır.

- **Nerede:** Native Android uygulaması; ayrıca sunucu tarafında Java'nın yerine.
- **PD için:** Android ve iOS'un kendi tasarım dilleri ayrıdır (Material vs HIG). İki platforma tek tasarım vermek, ikisinde de yabancı hissettirebilir.

## Rust

Bellek güvenliğini derleme anında garanti eden, çok hızlı sistem dili.

- **Nerede:** Performansın kritik olduğu altyapı, tarayıcı motorları, WebAssembly.
- **Zayıf yanı:** Öğrenmesi zor, yazması yavaş — sıradan bir web servisi için fazla.
- **PD için:** Adı geçtiğinde konu genelde **performans ya da güvenlik**tir, özellik değil.

## Bir Product Designer olarak

- **Native mobil, webin bir ölçeklendirilmiş hâli değildir.** Ayrı platform kuralları, ayrı bileşenler, ayrı yayın süreci (mağaza onayı günler alabilir).
- **"Tek kod, iki platform" (React Native, Flutter) bir ödünleşimdir:** ortak kod ucuzlar, platforma özgü his zayıflar. Hangisinin daha önemli olduğu bir ürün kararıdır.
