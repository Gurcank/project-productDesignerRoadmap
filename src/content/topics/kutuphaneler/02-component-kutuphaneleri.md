---
title: "Component kütüphaneleri"
sectionNumber: "9.5"
category: "kutuphaneler"
order: 2
cardCount: 5
sourceFile: "09-framework-ve-kutuphane-haritasi.md"
origin: "material"
flags: ["degisken"]
---
Senin için en doğrudan işe yarayan bölüm bu — çünkü hazır bileşenlerle çalışıyorsun. **Ana ayrım tek bir soruda:** kütüphane sana görünüm mü veriyor, yoksa sadece davranış mı?

### Headless vs Styled

- **Terim (İngilizce):** Headless (unstyled) library, styled library
- **Türkçesi:** Görünümsüz kütüphane, hazır görünümlü kütüphane
- **Tanım:** **Headless** kütüphane bir bileşenin davranışını verir ama görünümünü vermez: klavye gezinmesi, odak yönetimi, ARIA nitelikleri, açılma-kapanma mantığı hazır gelir; renk, boşluk ve tipografi sana kalır. **Styled** kütüphane ise hem davranışı hem görünümü verir.
- **Ne işe yarar / neden var:** Bu **doğrudan bir tasarım kararıdır.** Kendi tasarım dilin varsa headless seçersin: erişilebilirlik gibi zor kısmı hazır alır, görünümü sıfırdan kurarsın. Görünümün önemli olmadığı bir iç panelde ise styled kütüphane haftalarca zaman kazandırır.
- **Nerede karşına çıkar:** Proje başlangıcında.
- **Örnek kullanım:** "Kendi tasarım sistemimiz var; headless gidelim, hazır görünümü sökmeye çalışmayalım."
- **Karıştırılanlar:** Styled bir kütüphaneyi kendi tasarımına benzetmeye çalışmak, en yaygın zaman kaybı biçimlerinden biridir. Kütüphanenin varsayılan görünümüne ne kadar uzaksan, o kadar çok savaşırsın.
- **İlgili terimler:** Radix, shadcn/ui, MUI, Design system (5.1)

### Radix UI / Base UI

- **Terim (İngilizce):** Radix UI, Base UI
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Erişilebilir, görünümsüz React bileşen primitifleri: dialog, dropdown, popover, tabs, combobox ve benzerleri.
- **Ne işe yarar / neden var:** Bölüm 6 ve 7'deki zor kısmı çözerler: odak hapsi (6.5), klavye gezinmesi, ARIA nitelikleri, Esc davranışı. **Bir modalı veya combobox'ı sıfırdan erişilebilir yazmak, sanılandan çok daha zordur** — bu yüzden kütüphane seçimi bir erişilebilirlik kararıdır.
- **Nerede karşına çıkar:** Kendi tasarım sistemini kuran her React projesinde.
- **Örnek kullanım:** "Dropdown'ı sıfırdan yazmayalım; Radix primitifi alıp kendi stilimizi giydirelim."
- `[DEĞİŞKEN BİLGİ]` **Bu alanda 2025-2026'da önemli bir değişim oldu:** Radix'in WorkOS tarafından satın alındığı ve geliştirme hızının düştüğü raporlanıyor. MUI ekibinin geliştirdiği **Base UI**, Radix'e doğrudan alternatif olarak Aralık 2025'te kararlı 1.0 sürümüne ulaştı. Daha da önemlisi: **shadcn/ui'nin Temmuz 2026 itibarıyla yeni projelerde varsayılan olarak Base UI kullandığı** raporlanıyor — Radix terk edilmiş değil ama varsayılan değişmiş görünüyor. Bu bilgiyi kullanmadan önce doğrula.
- **İlgili terimler:** shadcn/ui, a11y (Bölüm 6), Headless

### shadcn/ui

- **Terim (İngilizce):** shadcn/ui
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bileşenleri bir paket olarak **kurmak yerine kodunu doğrudan projene kopyalayan** bileşen koleksiyonu. Altta headless primitifler, üstte Tailwind stilleri kullanır.
- **Ne işe yarar / neden var:** Modeli farklıdır ve bu fark önemlidir: bileşen kodunu **sen sahiplenirsin.** Bir şeyi değiştirmek istediğinde kütüphanenin izin verip vermediğine bakmazsın, dosyayı açıp değiştirirsin. Bu, tasarım kontrolü isteyen ekipler için büyük bir avantajdır. Bedeli: güncellemeler otomatik gelmez, bileşenlerin bakımı senin sorumluluğundadır.
- **Nerede karşına çıkar:** Yeni React/Next.js + Tailwind projelerinin çoğunda. **Senin çalışma biçimine — hazır bileşen alıp uyarlamak — en uygun model bu.**
- **Örnek kullanım:** "shadcn/ui'den button ve dialog'u alalım, token'larımıza göre uyarlayalım."
- **Karıştırılanlar:** shadcn/ui bir **npm paketi değildir**; klasik anlamda bir kütüphane değil, bir kopyala-yapıştır kaynağıdır. "Sürümünü güncelleyelim" cümlesi burada işlemez.
- **Ne zaman kullanılmaz:** Tailwind kullanmıyorsan doğal uyum kaybolur. Ayrıca bileşen bakımını üstlenecek zamanın yoksa hazır bir kütüphane daha az yük getirir.
- **İlgili terimler:** Radix/Base UI, Tailwind (8.4), Component library (5.1)

### Styled kütüphaneler: MUI, Mantine, Chakra, Ant Design

- **Terim (İngilizce):** Material UI (MUI), Mantine, Chakra UI, Ant Design
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Hem davranışı hem görünümü hazır veren geniş bileşen kütüphaneleri.
- **Ne işe yarar / neden var:** Hız. Bir yönetim paneli için gereken tablo, tarih seçici, form kontrolü ve grafik bileşenlerini sıfırdan yazmak haftalar alır; bu kütüphaneler onları hazır verir.
  - **MUI** — en geniş bileşen seti ve en olgun dokümantasyon; kurumsal projelerde en güvenli seçim. Bedeli: büyük paket boyutu ve Material Design estetiğinden uzaklaşmanın zorluğu.
  - **Ant Design** — veri yoğun panellerde güçlü; gelişmiş tablo ve form bileşenleri.
  - **Mantine** — çok sayıda bileşen ve hook; geliştirici ergonomisi iyi kabul edilir.
  - **Chakra UI** — prop tabanlı stil yaklaşımı. `[DEĞİŞKEN BİLGİ]` v3'ün, stil katmanını Panda CSS'e ve bileşen mantığını Ark UI'a taşıyan **kapsamlı bir yeniden yazım** olduğu raporlanıyor; v2'den geçiş önemsiz değil.
- **Nerede karşına çıkar:** İç paneller, yönetim arayüzleri, kurumsal projeler.
- **Örnek kullanım:** "İç panel için MUI kullanalım; tasarım farklılaşması gerekmiyor, hız önemli."
- **Ne zaman kullanılmaz:** **Marka farklılaşmasının önemli olduğu tüketiciye dönük ürünlerde.** Kütüphanenin varsayılan görünümünü tamamen değiştirmek, headless bir temelden başlamaktan genelde daha pahalıdır.
- **İlgili terimler:** Headless vs Styled, Bundle size (8.12)

### React Aria / Headless UI

- **Terim (İngilizce):** React Aria (Adobe), Headless UI (Tailwind Labs)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Radix'e alternatif diğer headless çözümler. React Aria erişilebilirlik ve uluslararasılaştırma konusunda derin; Headless UI daha küçük kapsamlı ve Tailwind ile uyumlu.
- **Ne işe yarar / neden var:** Seçenek çeşitliliği. React Aria özellikle karmaşık erişilebilirlik gereksinimleri olan projelerde tercih edilir.
- **Nerede karşına çıkar:** Tasarım sistemi kuran ekiplerde.
- **Örnek kullanım:** "Erişilebilirlik gereksinimlerimiz katı; React Aria'yı değerlendirelim."
- **İlgili terimler:** Radix UI, a11y (Bölüm 6)
