---
title: "Domain ve DNS"
sectionNumber: "16.7"
category: "devops-ve-yayin"
order: 7
cardCount: 2
sourceFile: "16-devops-yayin-ve-gozlemlenebilirlik.md"
origin: "material"
flags: []
---
Kavramlar Bölüm 1.2'de. Burada pratik tarafı.

### DNS kayıt türleri

- **Terim (İngilizce):** A record, AAAA, CNAME, TXT, MX, nameserver
- **Türkçesi:** DNS kayıtları
- **Tanım:** Alan adının nereye işaret ettiğini tanımlayan kayıtlar:
  - **A** — bir IPv4 adresine işaret eder (**AAAA**, IPv6 karşılığı)
  - **CNAME** — başka bir alan adına işaret eder; hosting platformları genelde bunu ister
  - **TXT** — serbest metin; alan adı sahipliği doğrulaması ve e-posta güvenliği (SPF, DKIM, DMARC) için kullanılır
  - **MX** — e-postanın hangi sunucuya gideceğini belirler
  - **Nameserver** — alan adının DNS kayıtlarını kimin yönettiğini belirler
- **Ne işe yarar / neden var:** Yayın gününün en sık takıldığı yer burasıdır. Kayıtları eklemek, senin de yapabileceğin bir iştir.
- **Nerede karşına çıkar:** Alan adı panelinde ve hosting platformunun kurulum adımlarında.
- **Örnek kullanım:** "Platform bir CNAME istiyor; alan adı panelinden ekleyelim."
- **Karıştırılanlar:** **E-posta kayıtlarına (MX, TXT) dikkat:** nameserver'ı değiştirirsen ve eski kayıtları taşımazsan **şirketin e-postası çalışmayı bırakır.** Yayın günü yaşanan en kötü sürprizlerden biridir.
- **İlgili terimler:** DNS (1.2), Domain (1.2), SSL (13.5)

### Propagation

- **Terim (İngilizce):** DNS propagation, TTL
- **Türkçesi:** Yayılma süresi
- **Tanım:** Bir DNS değişikliğinin dünya genelinde geçerli hâle gelmesi için geçen süre.
- **Ne işe yarar / neden var:** Değişiklik anında olmaz; bazı kullanıcılar bir süre eski adresi görür. Bu, **yayın gününde "bende açılmıyor" şikâyetlerinin en yaygın sebebidir** ve genelde bir hata değildir.
- **Nerede karşına çıkar:** Alan adı taşımalarında.
- **Örnek kullanım:** "Geçiş öncesi TTL'i düşürelim; değişiklik daha hızlı yayılsın."
- **İlgili terimler:** DNS kayıtları, TTL (10.11)
