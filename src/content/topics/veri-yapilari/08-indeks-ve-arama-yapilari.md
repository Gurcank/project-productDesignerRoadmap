---
title: "İndeks ve arama yapıları"
sectionNumber: ""
category: "veri-yapilari"
order: 8
cardCount: 0
origin: "new"
flags: []
sources:
  - label: "PostgreSQL — Index'ler"
    url: "https://www.postgresql.org/docs/current/indexes.html"
  - label: "PostgreSQL — Tam metin arama"
    url: "https://www.postgresql.org/docs/current/textsearch-intro.html"
---

**İndeks**, veriyi bulmayı hızlandırmak için tutulan **ikinci bir yapıdır**. Kitabın arkasındaki dizin gibi: kitabın kendisini değiştirmez, ama bir kelimenin geçtiği sayfayı taramadan bulmanı sağlar.

Materyal bunu veritabanı tarafında anlatıyor (11.5). Buradaki amaç, arayüz tasarımına yansıyan sonuçlarını görmek.

## Neden var

İndekssiz arama, tüm kayıtları baştan sona taramak demektir. 500 kayıtta fark edilmez, 5 milyon kayıtta sorgu saniyelerce sürer. İndeks bu taramayı, doğrudan doğru yere gitmeye çevirir.

## Bedeli

İndeks bedava değildir ve bedeli tam olarak şudur:

- **Yazma yavaşlar.** Her yeni kayıtta indeksin de güncellenmesi gerekir. Çok indeksli bir tabloya yazmak, indekssize göre belirgin şekilde daha pahalıdır.
- **Yer kaplar.** İndeks ayrı bir yapıdır, diskte yer tutar.
- **Her sorguya yaramaz.** İndeks belirli alanlar ve belirli sorgu biçimleri için kurulur. "Adın ortasında geçen harfe göre ara" gibi bir sorgu, isim indeksinden faydalanamaz.

Son madde tasarımı doğrudan ilgilendirir: **"içinde geçsin" araması ile "ile başlasın" araması aynı maliyette değildir.** Otomatik tamamlama kutusu tasarlarken ikisinden hangisini istediğini söylemen gerekir.

## Tam metin arama farklı bir şeydir

"İçinde şu kelime geçen kayıtlar" sorusu, normal indeksin işi değildir. Bunun için **tam metin arama** (full-text search) yapısı kurulur: metin kelimelere ayrılır, her kelimenin hangi belgelerde geçtiği tutulur — buna **ters indeks** (inverted index) denir.

Tam metin aramanın tasarımı ilgilendiren üç özelliği var:

**1. Kökleme (stemming).** "Bileşenlerin" yazınca "bileşen" bulunur. Bu, dile özgüdür ve Türkçe için ayrıca desteklenmesi gerekir — desteklenmiyorsa kullanıcı eklerle yazdığında hiçbir şey bulamaz. Türkçe ek yapısı zengin olduğu için bu, İngilizceye göre çok daha görünür bir sorundur.

**2. Yazım toleransı.** "kulanıcı" yazan kullanıcı "kullanıcı" sonuçlarını görecek mi? Bu ayrı bir özelliktir (fuzzy matching), bedava gelmez ve yanlış eşleşme riski taşır.

**3. Sıralama (relevance).** Sonuçlar hangi sırayla gelecek? Başlıkta geçen, gövdede geçenden önce mi? Bu bir ürün kararıdır ve belirtilmezse aracın varsayılanı kullanılır.

| Arama türü | Ne bulur | Tasarım sorusu |
|---|---|---|
| Tam eşleşme | Birebir aynısı | Büyük/küçük harf, Türkçe karakter önemli mi? |
| Önek (prefix) | "gi" → "git", "github" | Otomatik tamamlama için genelde yeterli |
| İçinde geçen | Herhangi bir yerde | Pahalı; indeksten yararlanmayabilir |
| Tam metin | Kelime bazlı, köklenmiş | Türkçe desteği var mı? |
| Bulanık (fuzzy) | Yazım hatasına toleranslı | Yanlış eşleşmeyi kabul ediyor musun? |

## Arayüzde görünen sonuçları

- **Boş sonuç ekranı zorunludur** ve "sonuç yok" demekten fazlasını yapmalı: yazım önerisi, filtreyi gevşetme, popüler aramalar.
- **Arama kutusunun gecikmesi tasarım kararıdır.** Her tuşta sorgu atmak hem pahalıdır hem titrek hissettirir; bekleme süresi (debounce) belirtilmezse geliştirici bir değer seçer.
- **Sonuç sayısını göstermek her zaman ucuz değildir.** "Yaklaşık 12.000 sonuç" demek, tam sayı vermekten çok daha ucuz olabilir.
- **Vurgulama (highlight) beklentiyi yönetir.** Eşleşen kelimeyi göstermek, kullanıcının sonucun neden geldiğini anlamasını sağlar.

## Alternatifler

- **İndekssiz tarama** — veri küçükse tamamen meşrudur; erken optimizasyon yapmaya gerek yok.
- **İstemci tarafı arama** — liste zaten tarayıcıda ise, filtreyi orada yapmak anlıktır ve sunucuya hiç gitmez.
- **Ayrı arama motoru** — büyük ölçekte veritabanının tam metin araması yerine adanmış bir servis kullanılır.
- **Statik arama indeksi** — bu sitenin yaptığı gibi: içerik derleme anında indekslenir, sunucu hiç gerekmez.

## Bir Product Designer olarak

- **Arama kutusunun ne aradığını yaz.** Başlıkta mı, gövdede mi, etiketlerde mi? "Her yerde" pahalı bir cevaptır.
- **Türkçe kökleme desteğini sor.** Desteklenmiyorsa arama, kullanıcıların yazdığı gibi yazdığında çalışmaz — bu bir hata değil, eksik gereksinimdir.
- **Boş sonuç ekranını bir eylem davetine çevir** — gri bir "sonuç bulunamadı" satırı kaybedilmiş bir fırsattır.
- **"Sırala" ve "filtrele" isteklerini indeks bağlamında düşün.** Her sütuna sıralama koymak, arkada her sütun için maliyet demektir; hangilerinin gerçekten gerektiğini sen belirlersin.
