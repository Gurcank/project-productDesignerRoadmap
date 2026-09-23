# Bölüm 9 — Framework ve kütüphane haritası

> ## ⚠️ BU BÖLÜM EN HIZLI ESKİYEN BÖLÜM
>
> Buradaki bilgilerin çoğu **ürün durumu**dur: hangi kütüphane bakımda, hangisi terk edildi, hangisi varsayılan hâle geldi. Bu bilgiler aylar içinde değişir.
>
> Bölümdeki her araç kartında **eskimeyen kısım** (bu araç hangi problemi çözer, ne zaman seçilir, alternatifi nedir) ile **eskiyen kısım** (güncel durumu) ayrıldı. Eskimeyen kısmı öğren; eskiyen kısmı her kullanımdan önce doğrula.
>
> **Doğrulama tarihi: Eylül 2026.** Sonrasındaki gelişmeleri bilmiyorum.

Bu bölümün amacı seni bir "araç uzmanı" yapmak değil. Amaç şu: bir toplantıda "Next.js mi Astro mu?" tartışması geçtiğinde, **neyin neye takas edildiğini** anlaman ve tasarım açısından hangi seçeneğin ne getirip ne götürdüğünü söyleyebilmen.

---

## 9.1 Kategorileri ayırmak

Bu dört terimi karıştırmak, teknoloji tartışmalarını anlaşılmaz hâle getirir.

### Library

- **Terim (İngilizce):** Library
- **Türkçesi:** Kütüphane
- **Tanım:** Belirli bir işi yapmak için çağırdığın hazır kod paketi.
- **Ne işe yarar / neden var:** Kontrol sende kalır: sen onu çağırırsın, o sana bir sonuç döner. Bir tarih biçimlendirme kütüphanesi, bir grafik kütüphanesi böyledir.
- **Nerede karşına çıkar:** Bağımlılık listelerinde (8.11).
- **Örnek kullanım:** "Bunun için ayrı bir kütüphane eklemeyelim; 20 satırla çözülüyor."
- **Karıştırılanlar:** React teknik olarak bir **kütüphanedir**, framework değil — ama günlük konuşmada herkes framework der ve bu bir sorun değildir.
- **İlgili terimler:** Framework, Dependency (8.11)

### Framework

- **Terim (İngilizce):** Framework
- **Türkçesi:** Çatı / çerçeve
- **Tanım:** Projenin yapısını ve akışını belirleyen, senin onun kurallarına uyduğun sistem.
- **Ne işe yarar / neden var:** Kontrol tersine döner: sen onu değil, o seni çağırır. Karşılığında dosya yapısı, yönlendirme, veri akışı gibi kararları hazır verir — böylece her projede aynı kararları yeniden vermezsin.
- **Nerede karşına çıkar:** Proje kurulumunda ve iş ilanlarında.
- **Örnek kullanım:** "Framework'ün kurallarına uyalım; kendi yapımızı kurarsak ekosistemden faydalanamayız."
- **İlgili terimler:** Library, Meta-framework

### Meta-framework

- **Terim (İngilizce):** Meta-framework
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Bir UI kütüphanesinin (React, Vue, Svelte) üzerine kurulan ve eksik parçalarını tamamlayan üst katman.
- **Ne işe yarar / neden var:** React tek başına sadece arayüz çizer; yönlendirme, sunucu tarafı işleme, veri çekme, build ve deploy kararlarını çözmez. Meta-framework bunların hepsini bir arada verir. Next.js, Nuxt, SvelteKit, Astro, React Router v7 bu kategoridedir.
- **Nerede karşına çıkar:** Proje başlangıcının en kritik kararı.
- **Örnek kullanım:** "React seçtik ama asıl karar meta-framework: Next.js mi React Router mı?"
- **İlgili terimler:** Framework, Rendering stratejileri (8.10)

### Runtime

- **Terim (İngilizce):** Runtime (Node.js, Deno, Bun, browser)
- **Türkçesi:** Çalışma ortamı
- **Tanım:** JavaScript kodunun fiilen çalıştığı ortam.
- **Ne işe yarar / neden var:** JavaScript tarayıcı için tasarlanmıştı; Node.js onu sunucuda da çalıştırılabilir hâle getirdi. Bu, ön yüz ve arka yüzün aynı dilde yazılabilmesini sağladı.
- **Nerede karşına çıkar:** Sunucu tarafı ve deploy konuşmalarında (10.1, 16.6).
- **Örnek kullanım:** "Edge runtime'da bazı Node API'leri çalışmıyor; o kodu ayrı bir yere alalım."
- **İlgili terimler:** Node.js (10.13), Edge function (10.8)

---

## 9.2 UI katmanı

Arayüzü çizen temel kütüphaneler. **Bu, doğru cevabı olmayan bir karardır** — hepsi çalışır, farklılıklar takas noktalarındadır.

### React

- **Terim (İngilizce):** React
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Arayüzü bileşenlere bölerek kuran, en yaygın kullanılan UI kütüphanesi.
- **Ne işe yarar / neden var:** Kendi başına en iyisi olduğu için değil, **ekosistemi en büyük olduğu için** varsayılan seçim. Her problem için hazır bir kütüphane, her soru için yazılmış bir cevap, her şehirde bulunabilir bir geliştirici var. Bu, teknik bir üstünlükten çok bir risk azaltma argümanıdır.
- **Nerede karşına çıkar:** İş ilanlarının çoğunda. Senin de kullandığın stack.
- **Örnek kullanım:** "React seçelim; ekip zaten biliyor ve ihtiyacımız olan her bileşen için hazır çözüm var."
- **Karıştırılanlar:** React tek başına yeterli değildir; yönlendirme, veri çekme ve sunucu tarafı için ya bir meta-framework ya da bir sürü ayrı kütüphane gerekir. "React öğrendim" demek, projeyi kurabilmek anlamına gelmez.
- **Ne zaman kullanılmaz:** Basit bir tanıtım sitesi için gereksiz ağırlıktır; statik bir site üreteci veya sade HTML/CSS daha uygundur.
- **İlgili terimler:** Next.js (9.3), Component (8.7), RSC (8.10)

### Vue

- **Terim (İngilizce):** Vue
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** React'e alternatif, öğrenme eğrisi daha yumuşak kabul edilen UI framework'ü.
- **Ne işe yarar / neden var:** HTML'e daha yakın bir yazım biçimi sunar ve resmî araçları (yönlendirme, state) tek elden gelir — yani React'teki "hangi kütüphaneyi seçeyim" kararlarının çoğunu ortadan kaldırır. Avrupa ve Asya'da güçlü bir topluluğu var.
- **Nerede karşına çıkar:** Nuxt ile birlikte (9.3), Laravel ekosisteminde yaygın.
- **Örnek kullanım:** "Ekip Vue biliyor; React'e geçmenin bize somut faydası yok."
- **Ne zaman kullanılmaz:** İş ilanı havuzu ve üçüncü parti bileşen çeşitliliği React kadar geniş değil; bunlar önemliyse React daha güvenli.
- **İlgili terimler:** Nuxt (9.3), React

### Svelte

- **Terim (İngilizce):** Svelte
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Kodun büyük kısmını **derleme anında** işleyip tarayıcıya çok az JavaScript gönderen framework.
- **Ne işe yarar / neden var:** Daha az kod yazdırır ve daha küçük paket üretir. Geliştirici memnuniyeti anketlerinde sürekli üst sıralarda çıkar. `[DEĞİŞKEN BİLGİ]` Svelte 5 ile "runes" adlı yeni bir reaktivite sistemi geldi; eski Svelte kaynakları bu konuda eskimiş olabilir.
- **Nerede karşına çıkar:** Performansın kritik olduğu ve ekibin küçük olduğu projelerde.
- **Örnek kullanım:** "Svelte küçük ve hızlı ama ekipte kimse bilmiyor; öğrenme maliyetini hesaba katalım."
- **Ne zaman kullanılmaz:** Ekosistem React'ten belirgin biçimde küçük; hazır bileşen ve entegrasyon aradığında daha az seçenek bulursun.
- **İlgili terimler:** SvelteKit (9.3), Bundle size (8.12)

### Angular

- **Terim (İngilizce):** Angular
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Google tarafından geliştirilen, her şeyi kutudan çıkaran kapsamlı framework.
- **Ne işe yarar / neden var:** Kurumsal ortamlarda güçlüdür çünkü **kararları senin yerine verir**: yönlendirme, form, HTTP, test — hepsi resmî ve tek biçimlidir. 50 kişilik bir ekipte bu tutarlılık değerlidir.
- **Nerede karşına çıkar:** Bankalar, sigorta şirketleri, büyük kurumsal projeler.
- **Örnek kullanım:** "Kurumsal müşteri Angular istiyor; standartları oturmuş, ekip devri kolay."
- **Ne zaman kullanılmaz:** Küçük projeler ve hızlı prototipler için ağır kalır; öğrenme eğrisi diğerlerinden dik.
- **İlgili terimler:** React, Vue

### Solid

- **Terim (İngilizce):** SolidJS
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** React'e benzer yazım biçimi olan ama farklı bir reaktivite modeliyle çalışan kütüphane.
- **Ne işe yarar / neden var:** İnce taneli reaktivite kullanır: bir değer değiştiğinde tüm bileşeni değil, yalnızca o değeri kullanan parçayı günceller. Bu, gereksiz yeniden çizimleri (8.8) ortadan kaldırır.
- **Nerede karşına çıkar:** Performansa çok duyarlı projelerde ve teknik tartışmalarda.
- **Örnek kullanım:** "Solid ilginç ama üretim için ekosistem riskini alamayız."
- **Ne zaman kullanılmaz:** Ekosistem küçük; ticari projelerde risk oluşturur. **Seviye 3** terim: adını bilmen yeterli.
- **İlgili terimler:** React, Re-render (8.8)

---

## 9.3 Meta-framework

Projenin iskeletini kuran katman. **Bu kararın tasarım tarafında doğrudan karşılığı vardır:** hangi rendering stratejisinin (8.10) mümkün olduğunu, sayfaların ne kadar hızlı açılacağını ve SEO'nun ne kadar kolay olacağını burası belirler.

### Next.js

- **Terim (İngilizce):** Next.js
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** React üzerine kurulu, en yaygın kullanılan meta-framework.
- **Ne işe yarar / neden var:** Rendering stratejilerinin hepsini (SSG, SSR, ISR, RSC, streaming) tek çatı altında sunar ve sayfa bazında seçmene izin verir. Görsel optimizasyonu, yönlendirme ve metadata yönetimi hazır gelir.
- **Nerede karşına çıkar:** SaaS ürünlerinde, pazarlama sitelerinde, e-ticarette. Senin de kullandığın stack.
- **Örnek kullanım:** "Next.js kullanalım; pazarlama sayfaları statik, panel dinamik olsun, ikisi aynı projede yaşasın."
- **Ne zaman kullanılmaz:** Sadece içerik yayınlayan bir site için gereğinden karmaşık kalabilir — orada Astro daha uygun. Ayrıca App Router'ın **önbellek modeli** ekiplerin en sık şikâyet ettiği karmaşıklık kaynağı olarak anılıyor.
- `[DEĞİŞKEN BİLGİ]` Next.js 16 hattında Turbopack üretim yapıları için kararlı hâle geldi ve PPR (8.10) genel kullanıma doğru ilerliyor olarak anılıyor. Ayrıca Vercel'e bağımlılık (vendor lock-in) endişesi düzenli olarak tartışılıyor — teknik olarak başka yerde de barındırılabilir ama bazı özellikler Vercel'de daha sorunsuz çalışır.
- **İlgili terimler:** RSC (8.10), Vercel (16.6), Astro

### Astro

- **Terim (İngilizce):** Astro
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Varsayılan olarak **sıfır JavaScript** gönderen, içerik odaklı meta-framework.
- **Ne işe yarar / neden var:** Islands mimarisini (8.10) merkeze alır: sayfa statik HTML olarak gider, sadece gerçekten etkileşimli parçalar JavaScript alır. Ayrıca framework-agnostiktir — aynı projede React, Vue ve Svelte bileşenleri kullanabilirsin.
- **Nerede karşına çıkar:** Blog, dokümantasyon, pazarlama sitesi, portfolyo.
- **Örnek kullanım:** "İçerik sitesi için Astro; Next.js'in getirdiği karmaşıklığa gerek yok, LCP de daha iyi çıkar."
- **Ne zaman kullanılmaz:** Yoğun etkileşimli uygulamalar (panel, editör, gerçek zamanlı arayüz) için tasarlanmamıştır.
- `[DEĞİŞKEN BİLGİ]` **Cloudflare, Astro'yu Ocak 2026'da satın aldı** olarak raporlanıyor; bu, projenin yönünü etkileyebilir. Güncel durumu kontrol et.
- **İlgili terimler:** Islands (8.10), SSG (8.10), Static site (1.5)

### React Router v7

- **Terim (İngilizce):** React Router v7 (eski adıyla Remix)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Web standartlarına yakın durmayı ve JavaScript olmadan da çalışan sayfalar üretmeyi hedefleyen React meta-framework'ü.
- **Ne işe yarar / neden var:** Next.js App Router'ın önbellek karmaşıklığından kaçınmak isteyen React ekipleri için en düşük sürtünmeli alternatif olarak anılıyor. Form ve veri akışı tarayıcının doğal davranışına yakın kurulur.
- **Nerede karşına çıkar:** Next.js'ten geçiş arayan ekiplerde. Shopify'ın yeniden yazılmış yönetim panelini bu altyapıda çalıştırdığı raporlanıyor.
- **Örnek kullanım:** "App Router'ın cache modeliyle boğuşmak istemiyoruz; React Router v7'yi değerlendirelim."
- `[DEĞİŞKEN BİLGİ]` **İsim karmaşası gerçek ve bilmen gerekir:** Remix, Kasım 2024'te React Router v7'ye birleşti — yani "Remix v3 olacak şey" React Router v7 oldu. Ayrı bir proje olarak **Remix 3** ise sıfırdan bir yeniden yazım olarak beta aşamasında ve üretime hazır değil. Remix v2'nin Haziran 2026'da destek dışı kaldığı raporlanıyor. Bu yüzden "Remix" kelimesini duyduğunda **hangisinden bahsedildiğini sor.**
- **İlgili terimler:** Next.js, Remix, TanStack Start

### SvelteKit / Nuxt

- **Terim (İngilizce):** SvelteKit, Nuxt
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Svelte ve Vue'nun resmî meta-framework'leri.
- **Ne işe yarar / neden var:** Next.js'in React için yaptığını kendi ekosistemlerinde yaparlar. Ekip zaten Svelte veya Vue biliyorsa doğal seçimdir.
- **Nerede karşına çıkar:** Svelte ve Vue ekiplerinde.
- **Örnek kullanım:** "Vue ekibiyiz; Nuxt doğal seçim, React'e geçmek için sebep yok."
- **İlgili terimler:** Svelte (9.2), Vue (9.2)

### TanStack Start

- **Terim (İngilizce):** TanStack Start
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** TanStack Router üzerine kurulu, tip güvenliğini merkeze alan yeni React meta-framework'ü.
- **Ne işe yarar / neden var:** İstemci öncelikli bir varsayılan ve güçlü tip güvenliği sunar. React Router/Remix birleşmesinden memnun olmayan ekiplerin yöneldiği alternatif olarak anılıyor.
- **Nerede karşına çıkar:** Yeni proje tartışmalarında.
- **Örnek kullanım:** "TanStack Start ilginç ama henüz 1.0 değil; üretim için erken."
- `[DEĞİŞKEN BİLGİ]` 2026 ortası itibarıyla release candidate aşamasında olduğu, API'nin kararlı ama sürümün 1.0 olmadığı raporlanıyor. **Ticari bir proje için bu bir risktir.**
- **İlgili terimler:** React Router v7, TanStack Query (9.8)

---

## 9.4 Styling

Bu konunun tamamı **Bölüm 8.4'te**. Özet karar tablosu:

| Yaklaşım | Ne zaman |
|---|---|
| **Tailwind** | Modern React/Next.js projelerinde varsayılan; shadcn/ui ile birlikte çalışır; tasarım ölçeğini config'te zorunlu kılar |
| **CSS Modules** | Sade CSS yazmak isteyen ekipler; sıfır çalışma zamanı maliyeti; güvenli varsayılan |
| **vanilla-extract / Panda CSS** | CSS-in-JS ergonomisi isteyip çalışma zamanı maliyeti istemeyenler |
| **styled-components / Emotion** | Yeni projede önerilmiyor (8.4); mevcut projeleri sürdürmek için hâlâ geçerli |

---

## 9.5 Component kütüphaneleri

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

---

## 9.6 Animasyon ve 3D

Bu alanda 2024-2025'te iki büyük değişiklik oldu ve ikisini de bilmen gerekiyor.

### Motion (eski adıyla Framer Motion)

- **Terim (İngilizce):** Motion — eski adı Framer Motion
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** React'te bildirimsel animasyon kütüphanesi: bileşenin giriş, çıkış, hover ve sürükleme animasyonlarını durum olarak tanımlarsın.
- **Ne işe yarar / neden var:** Arayüz hareketi (5.9) için en doğal React aracı: yerleşim animasyonları, çıkış geçişleri (bir öğe kaldırıldığında animasyonla gitmesi) ve jest yönetimi hazır gelir. Ayrıca `useReducedMotion` ile erişilebilirlik tercihine (6.8) uyum sağlar.
- **Nerede karşına çıkar:** React projelerinde varsayılan animasyon aracı.
- **Örnek kullanım:** "Modal giriş-çıkış animasyonunu Motion ile yapalım; AnimatePresence çıkış geçişini hallediyor."
- `[DEĞİŞKEN BİLGİ]` **İsim değişti ve bunu bilmen gerekiyor:** Framer Motion bağımsız bir proje hâline gelip **Motion** adını aldı. Paket adı `framer-motion` yerine `motion`, içe aktarma yolu `motion/react` oldu; eski paket hâlâ çalışıyor. Ayrıca artık yalnızca React değil, vanilla JavaScript ve Vue de destekleniyor. Kaynaklar yeniden adlandırma tarihinde tutarsız (2024 sonu ile 2025 ortası arasında farklı tarihler veriliyor); **tarihe değil, mevcut duruma güven.**
- **İlgili terimler:** Motion design (5.9), prefers-reduced-motion (6.8), GSAP

### GSAP

- **Terim (İngilizce):** GSAP — GreenSock Animation Platform
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Framework'ten bağımsız, zaman çizelgesi ve kaydırma tabanlı animasyonlarda sektör standardı olan kütüphane.
- **Ne işe yarar / neden var:** Karmaşık sıralı animasyonlar, kaydırmaya bağlı anlatım (7.5, scrollytelling) ve sabitleme (pinning) gibi işlerde Motion'dan belirgin biçimde derindir. **ScrollTrigger** eklentisi bu alanın referans aracıdır.
- **Nerede karşına çıkar:** Ödüllü tanıtım siteleri ve kampanya sayfalarında.
- **Örnek kullanım:** "Kaydırmaya bağlı ürün turu için GSAP ScrollTrigger kullanalım; Motion'ın useScroll'u bu derinlikte değil."
- `[DEĞİŞKEN BİLGİ]` **Fiyatlandırma değişti:** GSAP daha önce bazı eklentileri (SplitText, MorphSVG, ScrollSmoother, DrawSVG) ücretli bir üyelikle sunuyordu. Webflow'un GreenSock'u satın almasının ardından, **30 Nisan 2025'te GSAP'ın tamamının ticari kullanım dahil ücretsiz hâle geldiği** raporlanıyor. Bu, "GSAP pahalı" diyen eski kaynakları geçersiz kılar.
- **Karıştırılanlar:** Motion ile GSAP rakip değil, farklı işler için araçlardır. Aynı projede ikisi birden kullanılabilir — ama her öğenin sahibi net olmalıdır.
- **İlgili terimler:** Motion, Scrollytelling (7.5), Lenis

### Lenis

- **Terim (İngilizce):** Lenis
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Sayfa kaydırmasını yumuşatan küçük kütüphane.
- **Ne işe yarar / neden var:** Tanıtım sitelerinde "premium" hissi veren yumuşak kaydırma etkisini üretir.
- **Nerede karşına çıkar:** Ajans ve portfolyo sitelerinde.
- **Örnek kullanım:** "Lenis ekleyelim ama `prefers-reduced-motion` açıkken devre dışı kalsın."
- **Karıştırılanlar:** Kaydırma davranışını değiştirmek bir **erişilebilirlik riskidir** (6.8): kullanıcının beklediği kaydırma hissini bozar ve bazı kullanıcılarda rahatsızlık yaratır. Kapatılabilir olmalıdır.
- **İlgili terimler:** GSAP, Scroll hijacking (7.5), prefers-reduced-motion (6.8)

### Three.js / React Three Fiber

- **Terim (İngilizce):** Three.js, React Three Fiber (R3F)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Tarayıcıda 3B grafik üretmeyi sağlayan kütüphane ve onun React karşılığı.
- **Ne işe yarar / neden var:** Ürün konfigüratörleri, 3B ürün görselleri ve etkileyici tanıtım sahneleri için kullanılır.
- **Nerede karşına çıkar:** Ürün tanıtım sitelerinde ve deneysel projelerde.
- **Örnek kullanım:** "3B sahne etkileyici olur ama paket boyutu ve mobil performans maliyetini önce ölçelim."
- **Ne zaman kullanılmaz:** Ağırdır: paket boyutu, GPU kullanımı ve pil tüketimi ciddi. Mobil cihazlarda deneyimi bozabilir. **Bir gerekçesi olmalıdır** — sadece etkileyici görünsün diye eklenen 3B, performans bütçesini (8.12) tek başına tüketebilir.
- **İlgili terimler:** Bundle size (8.12), Performance budget (8.12)

### Lottie / Spline

- **Terim (İngilizce):** Lottie, Spline
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Lottie, tasarım aracında hazırlanmış vektör animasyonlarını web'de oynatan format. Spline, kod yazmadan 3B sahne hazırlamayı sağlayan araç.
- **Ne işe yarar / neden var:** Tasarımcının, geliştiriciye bağımlı olmadan animasyon üretmesini sağlar — **bu senin için doğrudan bir imkândır.**
- **Nerede karşına çıkar:** Boş durum illüstrasyonlarında (7.9), onboarding animasyonlarında, hero sahnelerinde.
- **Örnek kullanım:** "Boş durum animasyonunu Lottie olarak verelim; geliştiriciye JSON dosyası yeterli."
- **Karıştırılanlar:** Lottie dosyaları beklenenden büyük olabilir; karmaşık animasyonlarda dosya boyutunu kontrol et. `[DEĞİŞKEN BİLGİ]` Bu araçların fiyatlandırma ve dışa aktarma seçenekleri değişir.
- **İlgili terimler:** Motion design (5.9), Asset (5.7)

---

## 9.7 State yönetimi (client state)

Uygulamanın kendi verisini nerede tuttuğu. **Önemli bir çerçeve:** state ikiye ayrılır — sunucudan gelen veri (server state, 9.8) ve arayüzün kendi verisi (client state). İkisi farklı araçlar ister ve karıştırmak yaygın bir hatadır.

### Local state / Context

- **Terim (İngilizce):** Local state, React Context
- **Türkçesi:** Yerel durum, bağlam
- **Tanım:** Local state bileşenin kendi içinde tuttuğu veridir (8.7). Context, bir veriyi ağacın tamamına prop drilling (8.7) olmadan yaymanın React'e gömülü yoludur.
- **Ne işe yarar / neden var:** **Çoğu proje için bunlar yeterlidir.** Bir state yönetimi kütüphanesi eklemeden önce sorulacak soru: bu veri gerçekten global mi, yoksa iki bileşen arasında mı paylaşılıyor?
- **Nerede karşına çıkar:** Her React projesinde.
- **Örnek kullanım:** "Tema bilgisi için context yeter; ayrı bir kütüphaneye gerek yok."
- **Karıştırılanlar:** Context sık değişen veriler için verimsizdir; her değişimde tüketen tüm bileşenler yeniden çizilir (8.8).
- **İlgili terimler:** Prop drilling (8.7), Zustand

### Zustand / Jotai

- **Terim (İngilizce):** Zustand, Jotai
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Hafif, az yapılandırma gerektiren state yönetimi kütüphaneleri.
- **Ne işe yarar / neden var:** Redux'un kalıp kodunu istemeyen ama context'ten fazlasına ihtiyaç duyan projeler için. Zustand tek bir merkezi depo mantığıyla, Jotai küçük bağımsız parçalar (atom) mantığıyla çalışır.
- **Nerede karşına çıkar:** Modern React projelerinde yaygın.
- **Örnek kullanım:** "Sepet durumu için Zustand kullanalım; birkaç satırla kurulur."
- **İlgili terimler:** Redux Toolkit, Context

### Redux Toolkit

- **Terim (İngilizce):** Redux, Redux Toolkit (RTK)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** En eski ve en yaygın state yönetimi kütüphanesi; Redux Toolkit onun resmî ve sadeleştirilmiş kullanım biçimi.
- **Ne işe yarar / neden var:** Karmaşık ve çok kişili projelerde katı bir yapı dayatır: veri nasıl değişir, kim değiştirir, ne zaman değişir — hepsi izlenebilir. Geliştirici araçları (zaman yolculuğu ile hata ayıklama) güçlüdür.
- **Nerede karşına çıkar:** Büyük ve eski React projelerinde çok yaygın.
- **Örnek kullanım:** "Proje zaten Redux kullanıyor; yeni bir kütüphane eklemeyelim."
- **Ne zaman kullanılmaz:** Küçük projeler için ağırdır. Ayrıca sunucudan gelen veriyi Redux'ta tutmak, TanStack Query gibi araçların ortaya çıkmasıyla büyük ölçüde gereksizleşti (9.8).
- **İlgili terimler:** Zustand, TanStack Query (9.8)

---

## 9.8 Server state

Sunucudan gelen verinin yönetimi. **Bu ayrımı bilmek, teknik konuşmalarda seni ayırır.**

### TanStack Query / SWR

- **Terim (İngilizce):** TanStack Query (eski adıyla React Query), SWR
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Sunucudan veri çekme, önbelleğe alma, tazeleme ve senkronizasyonu yöneten kütüphaneler.
- **Ne işe yarar / neden var:** Sunucudan gelen veri **senin verin değildir** — sunucudaki verinin bir kopyasıdır ve her an eskiyebilir. Bu araçlar o gerçeği yönetir: veriyi önbelleğe alır, arka planda tazeler, aynı isteği iki kez atmaz, hata durumunda yeniden dener.
- **Ne işe yarar / neden var (tasarım tarafı):** Yükleme, hata, boş ve "eski veri gösterilirken tazeleniyor" durumlarını (7.9) hazır olarak yönetir — yani senin tasarlaman gereken durumları ortaya çıkarır. Ayrıca optimistic UI (7.9) desteği hazır gelir.
- **Nerede karşına çıkar:** Veri çeken her React uygulamasında.
- **Örnek kullanım:** "Server state'i TanStack Query yönetsin, Zustand'da sadece arayüz durumu kalsın."
- **Karıştırılanlar:** **En yaygın mimari hata, sunucu verisini Redux/Zustand gibi client state araçlarında tutmaktır.** O araçlar önbellek geçersizleştirme, tazeleme ve yeniden deneme gibi işleri bilmez; ekip bunları elle yazmak zorunda kalır.
- **İlgili terimler:** Zustand (9.7), Caching (10.11), Optimistic UI (7.9)

---

## 9.9 Form ve doğrulama

### React Hook Form

- **Terim (İngilizce):** React Hook Form (RHF)
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** React'te form durumunu ve doğrulamasını yöneten kütüphane.
- **Ne işe yarar / neden var:** Kontrolsüz bileşen yaklaşımını (8.7) kullandığı için her tuş vuruşunda tüm formu yeniden çizmez; uzun formlarda performans farkı belirgindir. Doğrulama, hata mesajları ve gönderim akışı hazır gelir.
- **Nerede karşına çıkar:** React projelerinde form yönetiminin yaygın seçimi.
- **Örnek kullanım:** "20 alanlı form için RHF kullanalım; her tuşta yeniden çizim olmasın."
- **İlgili terimler:** Zod, Form validation (7.11), Controlled/uncontrolled (8.7)

### Zod

- **Terim (İngilizce):** Zod
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Verinin beklenen yapıya uyup uymadığını **çalışma zamanında** kontrol eden şema doğrulama kütüphanesi.
- **Ne işe yarar / neden var:** TypeScript tipleri yalnızca yazarken korur (8.6); sunucudan beklenmedik veri gelirse bir şey yapmaz. Zod bu boşluğu doldurur: aynı şemayı hem form doğrulaması hem API yanıtı kontrolü için kullanabilirsin. **Tasarımcı için anlamı:** doğrulama kuralları (minimum uzunluk, format, zorunluluk) tek yerde tanımlanır ve hata mesajları buradan gelir — yani mesaj metinlerini bir yerde toplu olarak yazabilirsin.
- **Nerede karşına çıkar:** Form ve API sınırlarında; server action doğrulamalarında (10.6).
- **Örnek kullanım:** "Zod şemasındaki hata mesajlarını gözden geçirelim; kullanıcıya teknik dille konuşuyoruz."
- **Karıştırılanlar:** *Zod* (çalışma zamanı doğrulama) ≠ *TypeScript* (derleme zamanı tip kontrolü). İkisi farklı anlarda korur ve birbirinin yerine geçmez.
- **İlgili terimler:** TypeScript (8.6), Input validation (13.7), Error message (4.9)

### Formik / Yup

- **Terim (İngilizce):** Formik, Yup
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** RHF ve Zod'dan önceki nesil form ve doğrulama kütüphaneleri.
- **Ne işe yarar / neden var:** Hâlâ çok sayıda projede kullanılıyor; adlarını duyduğunda tanıman yeterli. `[DEĞİŞKEN BİLGİ]` Yeni projelerde tercih edilme oranları düştü; güncel durumlarını kontrol et.
- **Nerede karşına çıkar:** Eski React projelerinde.
- **Örnek kullanım:** "Proje Formik kullanıyor; yeni formları RHF'ye geçirmeden önce tutarlılığı düşünelim."
- **İlgili terimler:** React Hook Form, Zod

---

## 9.10 İçerik yönetimi

### CMS / Headless CMS

- **Terim (İngilizce):** CMS (Content Management System), headless CMS
- **Türkçesi:** İçerik yönetim sistemi
- **Tanım:** İçerik editörlerinin, geliştiriciye ihtiyaç duymadan içerik girmesini sağlayan sistem. **Headless** olanı içeriği yalnızca veri olarak sunar; görünümü senin ön yüzün belirler.
- **Ne işe yarar / neden var:** İçeriğin sahipliğini pazarlama ekibine devreder. Klasik CMS (WordPress gibi) içerik ve görünümü birlikte yönetir; headless CMS ikisini ayırır — böylece aynı içerik web, mobil ve başka kanallarda kullanılabilir.
- **Nerede karşına çıkar:** Blog, ürün kataloğu ve pazarlama sitelerinde. Sanity, Contentful, Strapi, Payload yaygın adlar. `[DEĞİŞKEN BİLGİ]` Ürün isimleri, fiyatlandırma ve özellikler sık değişir.
- **Örnek kullanım:** "Blog içeriğini headless CMS'e alalım; her yazı için deploy beklemesinler."
- **Karıştırılanlar:** **Tasarımcı için önemli:** CMS'te tanımlanan alan yapısı, tasarımın esnekliğini belirler. Alanları önceden düşünmezsen editör beklenmedik içerik girer ve tasarım bozulur. Bu yüzden içerik modeli, tasarımla birlikte kurulmalıdır (4.3).
- **İlgili terimler:** IA (4.3), Edge case (4.4), SSG/ISR (8.10)

### MDX

- **Terim (İngilizce):** MDX
- **Türkçesi:** Yaygın Türkçe karşılığı yok
- **Tanım:** Markdown içeriğin içine etkileşimli bileşen gömülebilmesini sağlayan format.
- **Ne işe yarar / neden var:** Dokümantasyon ve teknik blog için ideal: metin akışının içine canlı bir demo, bir uyarı kutusu (7.5) veya bir grafik konabilir.
- **Nerede karşına çıkar:** Dokümantasyon sitelerinde ve geliştirici bloglarında.
- **Örnek kullanım:** "Dokümantasyonu MDX ile yazalım; kod örneklerinin yanına çalışan demo koyabilelim."
- **İlgili terimler:** CMS, Code block (7.13)

---

## 9.11 Sık duyulan diğerleri

Bunlar **Seviye 3** — adını duyduğunda kategorisini bilmen yeterli.

| Kategori | Yaygın adlar | Ne işe yarar |
|---|---|---|
| **i18n** (uluslararasılaştırma) | next-intl, react-i18next, FormatJS | Çok dilli içerik, tarih/sayı/para biçimlendirme, sağdan sola diller |
| **Tarih** | date-fns, Day.js, Luxon, Temporal API | Tarih hesabı, biçimlendirme, saat dilimi yönetimi |
| **Grafik** | Recharts, Chart.js, Visx, Tremor, D3 | Veri görselleştirme; D3 en esnek ama en düşük seviyeli |
| **Tablo** | TanStack Table, AG Grid | Sıralama, filtreleme, sanallaştırma, satır içi düzenleme (7.10) |
| **İkon** | Lucide, Phosphor, Heroicons, Material Symbols | İkon setleri (5.7) |
| **Bildirim** | Sonner, react-hot-toast | Toast bileşenleri (7.8) |
| **Sanallaştırma** | TanStack Virtual | Uzun listelerde sadece görünen satırları çizme; INP'yi (8.12) korur |

`[DEĞİŞKEN BİLGİ]` Bu tablodaki isimlerin hepsi ürün adıdır ve değişir. Kategoriyi öğren, ismi doğrula.

---

## 9.12 Teknoloji seçimi

Bu alt bölüm bir terim listesi değil, bir **karar çerçevesi**. Bu bölümdeki tek eskimeyen içerik burası.

### Trade-off

- **Terim (İngilizce):** Trade-off
- **Türkçesi:** Takas / ödünleşim
- **Tanım:** Bir şeyi kazanmak için başka bir şeyden vazgeçme durumu.
- **Ne işe yarar / neden var:** **Teknoloji seçiminde "en iyi" diye bir cevap yoktur; sadece takaslar vardır.** Bir kütüphane hız kazandırır, esneklik kaybettirir. Bir framework kararı azaltır, kilitlenme yaratır. Bir seçeneği savunurken neyi feda ettiğini söyleyemiyorsan, seçeneği yeterince anlamamışsındır.
- **Nerede karşına çıkar:** Her teknik karar toplantısında. **Bu terimi kullanabilmek, teknik masada ciddiye alınmanın en hızlı yoludur.**
- **Örnek kullanım:** "MUI hızlandırır ama tasarım özgünlüğünden ödün veririz; takas bu. Bizim için özgünlük mü hız mı öncelikli?"
- **İlgili terimler:** ADR (14.12), Constraint (18.4)

### Seçim yaparken sorulacak sorular

Bir kütüphane veya framework önerildiğinde sorulacak sorular. Kod bilmeden de sorabilirsin ve hepsi meşru sorulardır:

1. **Hangi problemi çözüyor?** — Cevap "modern olduğu için" ise problem yok demektir.
2. **Bunu eklemesek ne olur?** — Alternatif maliyet. Bazen 30 satır kod, 40KB'lık bir bağımlılıktan ucuzdur.
3. **Bakımı sürüyor mu?** — Son sürüm ne zaman çıktı, kaç kişi bakıyor, açık sorunlar birikmiş mi. (styled-components örneği, 8.4.)
4. **Paket boyutu ne?** — Kullanıcıya ne kadar ek JavaScript gidiyor (8.12).
5. **Erişilebilirliği nasıl?** — Özellikle etkileşimli bileşenlerde bu, sonradan düzeltilemeyecek bir karardır (9.5).
6. **Ekip biliyor mu?** — Öğrenme süresi gerçek bir maliyettir.
7. **Vazgeçmek ne kadar zor?** — Yarın değiştirmek istesek kaç dosyaya dokunmamız gerekir?
8. **Kim sahibi?** — Tek kişilik bir proje mi, şirket destekli mi? Satın alınırsa ne olur? (Radix örneği, 9.5.)

### Vendor lock-in

- **Terim (İngilizce):** Vendor lock-in
- **Türkçesi:** Sağlayıcıya bağımlılık
- **Tanım:** Bir sağlayıcının araçlarına o kadar bağlanmak ki çıkmak pratikte imkânsız hâle gelmek.
- **Ne işe yarar / neden var:** Her bağımlılık kötü değildir — bağımlılık karşılığında hız ve kolaylık alırsın. Sorun, bunun **bilinçsiz** olmasıdır. Doğru soru "bağımlı olalım mı?" değil, "çıkmak isteseydik maliyeti ne olurdu ve bunu kabul ediyor muyuz?"
- **Nerede karşına çıkar:** Hosting, veritabanı, kimlik doğrulama ve CMS seçimlerinde.
- **Örnek kullanım:** "Vercel'e bağımlılığı kabul ediyoruz ama veritabanını taşınabilir tutalım; ikisi birden kilitlenmesin."
- **İlgili terimler:** Trade-off, BaaS (11.12), Hosting (16.6)

### Boring technology

- **Terim (İngilizce):** "Choose boring technology"
- **Türkçesi:** Sıkıcı teknoloji seçmek
- **Tanım:** Yeni ve heyecan verici olan yerine, olgun ve öngörülebilir olanı seçme ilkesi.
- **Ne işe yarar / neden var:** Her yeni teknoloji, bilinmeyen sorunlar getirir. Bir projede kaç tane bilinmeyen taşıyabileceğin sınırlıdır; o bütçeyi asıl probleme harcamak, araç seçimine harcamaktan iyidir. **Bu, "yeniliğe kapalı olmak" değil, yenilik bütçesini bilinçli harcamaktır.**
- **Nerede karşına çıkar:** Teknoloji seçimi tartışmalarında.
- **Örnek kullanım:** "Bu projede yeni bir framework denemeyelim; asıl risk zaten teslim tarihinde."
- **İlgili terimler:** Trade-off, Spike (3.5)

---

## 9.13 Kendini test et

**1.** Library ile framework arasındaki fark nedir? React hangisidir?

**2.** Meta-framework neyi çözer? React tek başına neden yetmez?

**3.** React'in "en iyi" olduğu için değil, hangi sebeple varsayılan seçim olduğu söylenir?

**4.** Astro'nun temel farkı nedir? Ne zaman Next.js yerine tercih edilir, ne zaman edilmez?

**5.** "Remix" kelimesini duyduğunda neden hangisinden bahsedildiğini sorman gerekir?

**6.** Headless ile styled component kütüphanesi arasındaki fark nedir? Kendi tasarım sistemin varsa hangisi?

**7.** shadcn/ui'nin diğer kütüphanelerden yapısal farkı nedir? Bu farkın avantajı ve bedeli nedir?

**8.** Bir modalı sıfırdan yazmak yerine headless bir primitif kullanmanın erişilebilirlik gerekçesi nedir?

**9.** Styled bir kütüphaneyi kendi tasarımına benzetmeye çalışmak neden riskli?

**10.** Framer Motion'a ne oldu? Paket adı ve içe aktarma yolu ne oldu?

**11.** GSAP'ın fiyatlandırmasında ne değişti ve bu neden önemli?

**12.** Motion ile GSAP rakip mi? Hangisi hangi iş için?

**13.** Lenis gibi yumuşak kaydırma kütüphaneleri hangi erişilebilirlik riskini taşır?

**14.** Client state ile server state arasındaki fark nedir? Sunucu verisini Zustand'da tutmak neden yaygın bir hata?

**15.** TanStack Query'nin tasarımcıyı ilgilendiren yanı nedir?

**16.** TypeScript ile Zod arasındaki fark nedir? Neden ikisi birden gerekir?

**17.** Headless CMS'te tasarımcının sorumluluğu nedir? Neden içerik modeli tasarımla birlikte kurulmalı?

**18.** Bir kütüphane önerildiğinde soracağın en az beş soru say.

**19.** "Vendor lock-in'den kaçınalım" doğru bir hedef mi? Daha iyi soru nedir?

**20.** "Choose boring technology" ilkesi yeniliğe kapalı olmak mıdır? Değilse ne demektir?

---

### Cevaplar

**1.** Library'de kontrol sende: sen onu çağırırsın. Framework'te kontrol tersine döner: o seni çağırır ve yapıyı o belirler. React teknik olarak bir **kütüphanedir**, ama günlük konuşmada herkes framework der.

**2.** React tek başına yalnızca arayüz çizer; yönlendirme, sunucu tarafı işleme, veri çekme, build ve deploy kararlarını çözmez. Meta-framework bunların hepsini bir arada verir.

**3.** **Ekosistemi en büyük olduğu için.** Her problem için hazır çözüm, her soru için yazılmış cevap ve geniş bir geliştirici havuzu var. Bu teknik bir üstünlük değil, bir risk azaltma argümanıdır.

**4.** Astro varsayılan olarak **sıfır JavaScript** gönderir ve islands mimarisini merkeze alır. Blog, dokümantasyon, pazarlama sitesi gibi içerik odaklı işlerde Next.js'ten daha uygundur. Yoğun etkileşimli uygulamalar (panel, editör) için tasarlanmamıştır.

**5.** Çünkü üç farklı şeye işaret edebilir: (1) eski Remix v2 (destek dışı kaldığı raporlanıyor), (2) Remix'in devamı olan **React Router v7**, (3) sıfırdan yeniden yazılan ve beta aşamasındaki **Remix 3**. Üçü farklı şeyler.

**6.** Headless kütüphane **davranışı** verir (klavye, odak, ARIA, açılma mantığı), görünümü vermez. Styled kütüphane ikisini birden verir. Kendi tasarım sistemin varsa **headless** seçilir: zor kısmı hazır alır, görünümü kendin kurarsın.

**7.** shadcn/ui bir npm paketi değildir; bileşen **kodunu doğrudan projene kopyalar**. Avantajı: kodu sahiplenirsin, değiştirmek için kütüphanenin iznine ihtiyacın olmaz. Bedeli: güncellemeler otomatik gelmez, bakım senin sorumluluğundadır.

**8.** Çünkü odak hapsi, klavye gezinmesi, ARIA nitelikleri ve Esc davranışı sıfırdan doğru yazmak sanılandan çok zordur ve genelde eksik yazılır. Test edilmiş bir primitif bunları hazır getirir — **yani kütüphane seçimi bir erişilebilirlik kararıdır.**

**9.** Çünkü kütüphanenin varsayılan görünümüne ne kadar uzaksan o kadar çok savaşırsın. Görünümü tamamen değiştirmek, headless bir temelden başlamaktan genelde daha pahalıdır.

**10.** Bağımsız bir proje hâline gelip **Motion** adını aldı. Paket `framer-motion` yerine **`motion`**, içe aktarma yolu **`motion/react`** oldu. Eski paket hâlâ çalışıyor. Ayrıca artık vanilla JavaScript ve Vue de destekliyor.

**11.** Webflow'un GreenSock'u satın almasının ardından, önceden ücretli olan tüm eklentiler dahil **GSAP'ın tamamı ticari kullanım için ücretsiz** hâle geldi (30 Nisan 2025 olarak raporlanıyor). Önemli çünkü "GSAP pahalı" diyen tüm eski kaynaklar geçersiz.

**12.** Rakip değiller, farklı işler için araçlar. **Motion**: React arayüz hareketi — giriş/çıkış geçişleri, yerleşim animasyonları, jestler. **GSAP**: karmaşık zaman çizelgeleri, kaydırmaya bağlı anlatım, sabitleme. Aynı projede ikisi de kullanılabilir; yeter ki her öğenin sahibi net olsun.

**13.** Kullanıcının beklediği kaydırma hissini değiştirir; bazı kullanıcılarda rahatsızlık ve yön kaybı yaratabilir. `prefers-reduced-motion` açıkken devre dışı kalmalıdır.

**14.** Client state arayüzün kendi verisidir (menü açık mı, hangi sekme seçili). Server state sunucudaki verinin bir **kopyasıdır** ve her an eskiyebilir. Sunucu verisini Zustand/Redux'ta tutmak hatadır çünkü o araçlar önbellek geçersizleştirme, arka planda tazeleme ve yeniden deneme gibi işleri bilmez; ekip hepsini elle yazmak zorunda kalır.

**15.** Yükleme, hata, boş ve "eski veri gösterilirken tazeleniyor" durumlarını hazır yönetir — **yani senin tasarlaman gereken durumları ortaya çıkarır** (7.9). Ayrıca optimistic UI desteği hazır gelir.

**16.** TypeScript **yazarken** korur (derleme zamanı); sunucudan beklenmedik veri gelirse hiçbir şey yapmaz. Zod **çalışma zamanında** verinin şemaya uyup uymadığını kontrol eder. İkisi farklı anlarda korur ve birbirinin yerine geçmez.

**17.** CMS'te tanımlanan **alan yapısı**, tasarımın esnekliğini belirler. Alanlar önceden düşünülmezse editör beklenmedik uzunlukta veya biçimde içerik girer ve tasarım bozulur. Bu yüzden içerik modeli tasarımla birlikte kurulmalıdır.

**18.** En az beşi: Hangi problemi çözüyor? · Eklemesek ne olur? · Bakımı sürüyor mu? · Paket boyutu ne? · Erişilebilirliği nasıl? · Ekip biliyor mu? · Vazgeçmek ne kadar zor? · Kim sahibi, satın alınırsa ne olur?

**19.** Tam olarak doğru bir hedef değil — her bağımlılık karşılığında hız ve kolaylık alırsın. Daha iyi soru: **"Çıkmak isteseydik maliyeti ne olurdu ve bu maliyeti kabul ediyor muyuz?"** Sorun bağımlılık değil, bağımlılığın bilinçsiz olmasıdır.

**20.** Hayır. Her yeni teknoloji bilinmeyen sorunlar getirir ve bir projede taşıyabileceğin bilinmeyen sayısı sınırlıdır. İlke, o **yenilik bütçesini asıl probleme harcamayı** söyler — araç seçimine değil.

---

**Biten bölüm:** Bölüm 9 — Framework ve kütüphane haritası
**Sıradaki bölüm:** Bölüm 10 — Back-end ve API
