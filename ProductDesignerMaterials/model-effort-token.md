# Model, Effort ve Token Kullanımı

Web projesi geliştirirken hangi fazda hangi model ve effort seviyesiyle
çalışılacağı, ve oturum boyunca token'ı verimli kullanma kuralları.

Kaynak işaretleri: `[R]` resmî doküman · `[P]` pratik öneri, kanıt düzeyi zayıf

---

## Effort ne kontrol eder

`[R]` Effort "ne kadar düşündüğü" değil. Bir turda kaç dosya okuduğunu, ne kadar
doğrulama yaptığını ve sana dönmeden çok adımlı bir işte ne kadar ilerlediğini
belirler. Düşük effort'ta Claude kendi başına çözmeye çalışmak yerine senden
context istemeye daha meyillidir.

`[R]` Seviyeler (Opus 5, Sonnet 5, Fable 5): `low`, `medium`, `high`, `xhigh`,
`max`. Varsayılan `high`.

Nereden ayarlanır:

| Yöntem | Kapsam |
|---|---|
| `/effort <seviye>` | Oturum, ve interaktif oturumda varsayılan olarak kaydedilir |
| `/effort auto` | Model varsayılanına döner |
| `--effort <seviye>` | Tek başlatma |
| Skill / subagent frontmatter'ında `effort:` | Sadece o skill veya subagent çalışırken |
| `CLAUDE_CODE_EFFORT_LEVEL` | Hepsinin üstünde |

`[R]` Prompt'a `ultrathink` yazmak, oturum ayarını değiştirmeden o tur için daha
derin düşünme ister. "think hard", "think more" gibi ifadeler tanınmaz, düz metin
olarak geçer.

---

## Faz eşlemesi

`[P]` Aşağıdaki eşleme öneridir; resmî dokümanda iş tipine göre bir effort tablosu
yok. Dayandığı ilke `[R]`: çoğu iş için model varsayılanında kal, effort'u görev
görev değil iş tipine göre ayarla.

| Faz | Model | Effort | Oturum / mod |
|-----|-------|--------|--------------|
| 1 — Keşif → `SPEC.md` | Opus | `xhigh` | Plan modunda, temiz oturum |
| 2 — Mimari → `ARCHITECTURE.md` | Opus | `xhigh` | Plan modunda, temiz oturum |
| 3 — Hazırlık (CLAUDE.md, rules, token'lar, iskelet) | Sonnet | varsayılan | Normal, temiz oturum |
| 4 — Geliştirme döngüsü (dikey dilim) | Sonnet | varsayılan | Dilim başına bir oturum, dilim bitince `/clear` |
| 5 — Tasarım kalitesi | Sonnet | varsayılan | Aynı oturumda iterasyon, her turda ekran görüntüsü |
| 6 — Medya hattı | Sonnet veya Haiku | `low`–`medium` | Mekanik iş, tarif edilebilir |
| 7 — Kalite kapıları | Sonnet | varsayılan | Denetimleri subagent'a ver, rapor ana oturuma dönsün |
| 8 — Yayın ve bakım | Sonnet | varsayılan | — |

### Faz dışı istisnalar

- **Kök neden avı** (layout neden kayıyor, build neden patlıyor, state neden
  sıfırlanıyor): fazı ne olursa olsun Opus + `xhigh`. Ambiguity varsa oradasın.
- **Tek seferlik derinlik**: ayarı değiştirme, prompt'a `ultrathink` yaz.
- **`max` seviyesi** `[R]`: talepkâr işlerde faydası olabilir ama azalan getirisi
  var ve fazla düşünmeye yatkın. Yaygınlaştırmadan önce dene. UI işinde nadiren
  gerekir.

---

## Yanlış çıktı geldiğinde ne değişir

`[R]` Sıralama:

1. Önce verilen context'e bak. Prompt belirsiz miydi, doğru dosyalar ve skill'ler
   açık mıydı? Gerekmemesi gereken bir işte effort yükseltiyorsan sorun genelde
   yukarıda, context'te veya görevin kapsamındadır.
2. Context yerindeyse ayrım şu: **bilmediği için mi yanlış yaptı, denemediği için mi?**

| Belirti | Değiştirilecek |
|---|---|
| Dosya atladı, testi çalıştırmadı, refactor'ı yarıda bıraktı | Effort'u yükselt |
| Tüm context verildiği hâlde emin şekilde yanlış | Daha büyük model |
| Uzun süredir iş rutin | Daha küçük modele in, hız artar maliyet düşer |

`[P]` Faz 4'te iki başarısız düzeltmeden sonra effort yükseltme. `/clear` at ve
prompt'u yeniden yaz; sorun genelde bozulmuş context'tedir.

---

## Token kuralları — etki sırasına göre

1. **Faz değişince veya ilgisiz işe geçerken `/clear`** `[R]`
   Uzun oturumda her istek tüm konuşmayı taşır; sabah açılmış bir oturumda
   sorduğun tek satırlık soru bile bütün geçmişin maliyetini çeker.
   Bu süreçte ucuz olmasının sebebi: her fazın çıktısı bir dosya. `SPEC.md`
   yazıldıktan sonra o konuşmayı taşımanın anlamı yok, bilgi diskte duruyor.
   Faz 2'ye temiz oturumla girip `SPEC.md`'yi okutmak doğru hamle.

2. **Plan mode** `[R]`
   Yanlış yönde ilerleyip baştan yapmanın maliyetini önler. UI işinde bu kalem
   büyük, çünkü yanlış yön tüm bölümün çöpe gitmesi demek.

3. **Her isteğe doğrulama iliştir** `[R]`
   Ekran görüntüsü, test durumu, beklenen çıktı, hangi breakpoint'te bozulduğu.
   Claude kendi işini doğrulayabildiğinde düzeltme turu sana kalmaz.

4. **CLAUDE.md ince, detay skill'de** `[R]`
   CLAUDE.md oturum başında context'e girer ve alakasız iş yaparken bile orada
   durur; skill'ler sadece çağrıldığında yüklenir. Öneri: 200 satırın altı.
   CLAUDE.md'de sadece o projeye özel gerçekler kalsın.

5. **Modeli işe eşle** `[R]`
   Sonnet çoğu kodlama işini iyi götürür ve daha ucuzdur; Opus'u karmaşık
   mimari kararlara sakla.

6. **Context'i ölç, tahmin etme** `[R]`
   `/context` neyin yer kapladığını gösterir. `/mcp` ile aktif kullanmadığın
   server'ları kapat. `gh`, `aws` gibi CLI araçları MCP'den daha context-ucuzdur,
   çünkü araç listesi eklemezler.

7. **Gürültülü işleri subagent'a ver** `[R]`
   Test çalıştırma, log işleme, doküman çekme. Uzun çıktı subagent'ın
   context'inde kalır, ana konuşmaya sadece özet döner.

---

## Cache: neyi düşürür, neyi düşürmez

`[R]` Cache düştüğünde sonraki istek tüm context'i yeniden işler.

| Cache'i düşürür | Cache'i korur |
|---|---|
| Model değiştirmek | Repodaki dosyaları düzenlemek |
| Effort seviyesini değiştirmek | Oturum ortasında CLAUDE.md düzenlemek |
| Fast mode açmak | Output style değiştirmek |
| MCP server bağlamak veya kesmek | İzin modunu değiştirmek |
| Plugin açıp kapatmak | Skill ve komut çağırmak |
| `/compact` | `/recap` |
| Claude Code'u güncellemek | Konuşmayı geri sarmak |

Pratik sonuç `[P]`: model ve effort'u **faz başında** seç, faz boyunca sabit tut.
Ayarları oturum içinde zıplatmak kazandırdığından fazlasını götürebilir.

`[R]` İki ek not:

- `/compact` özetlediği konuşmayı okuduğu için kendisi de büyük bir istektir.
  Temiz başlangıç istiyorsan `/clear` bedava.
- Cache ömrü abonelikte bir saat, kullanım kredisine geçtiğinde beş dakika
  (API anahtarı veya cloud provider'da varsayılan beş dakika). Uzun bir aradan
  sonraki ilk mesaj cache miss olur ve tüm context yeniden işlenir. Molaya
  çıkacaksan oturumu bitirip dönüşte `/clear` ile başlamak daha ucuz olabilir.

---

## Kaynaklar

- [Manage costs effectively](https://code.claude.com/docs/en/costs)
- [Model configuration — Adjust effort level](https://code.claude.com/docs/en/model-config)
- [Prompt caching](https://code.claude.com/docs/en/prompt-caching)
- [Choosing a Claude model and effort level in Claude Code](https://claude.com/blog/claude-model-and-effort-level-in-claude-code)
