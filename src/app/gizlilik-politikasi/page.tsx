import type { Metadata } from "next";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "Gizlilik Politikası",
  description:
    "SEOROAS olarak kişisel verilerinizi nasıl topladığımızı, işlediğimizi ve koruduğumuzu açıklayan gizlilik politikamız.",
  path: "/gizlilik-politikasi",
});

export default function GizlilikPolitikasiPage() {
  return (
    <main className="pt-24">
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <Breadcrumb
          items={[{ name: "Gizlilik Politikası", url: "/gizlilik-politikasi" }]}
        />
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-32">
        <article className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tight-tracking mb-6">
            Gizlilik Politikası
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-4">
            Bu metin, SEOROAS (&quot;biz&quot;, &quot;ajans&quot;) olarak web sitemizi
            ziyaret ettiğinizde veya hizmetlerimizden yararlandığınızda kişisel
            verilerinizin nasıl işlendiğini özetler. Son güncelleme tarihi:{" "}
            <time dateTime="2025-03-21">21 Mart 2025</time>.
          </p>
          <p className="text-sm text-on-surface-variant/80 leading-relaxed">
            Ayrıntılı KVKK aydınlatma metnimiz için{" "}
            <Link
              href="/kullanim-sartlari"
              className="text-primary font-semibold hover:underline underline-offset-4"
            >
              KVKK Aydınlatma Metni
            </Link>{" "}
            sayfasını inceleyebilirsiniz.
          </p>

          <div className="mt-14 space-y-10">
            <section className="rounded-[2rem] bg-surface-container-low p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Veri toplama
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Hizmet taleplerinizi karşılamak, iletişim kurmak ve web sitemizi
                  iyileştirmek amacıyla aşağıdaki kişisel veriler toplanabilir:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                  <li>
                    <span className="text-on-surface font-medium">Kimlik ve iletişim:</span>{" "}
                    ad, soyad, şirket unvanı, e-posta adresi, telefon numarası
                  </li>
                  <li>
                    <span className="text-on-surface font-medium">Teknik veriler:</span>{" "}
                    IP adresi, tarayıcı türü, işletim sistemi, cihaz bilgisi,
                    yaklaşık konum (ülke/şehir düzeyinde), oturum ve çerez
                    tanımlayıcıları
                  </li>
                  <li>
                    <span className="text-on-surface font-medium">Kullanım verileri:</span>{" "}
                    ziyaret edilen sayfalar, yönlendiren adres, tıklama ve
                    etkileşim özetleri
                  </li>
                </ul>
                <p>
                  Bu verilerin çoğu, formları doldurmanız veya bize doğrudan
                  iletişim kurmanız halinde sizin tarafınızdan; teknik veriler ise
                  sunucu ve analitik araçlarımız aracılığıyla otomatik olarak
                  elde edilebilir.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-lowest p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Çerez kullanımı ve Google Analytics
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Web sitemizde tercihlerinizi hatırlamak, güvenliği sağlamak ve
                  trafiği ölçmek için çerezler ve benzeri teknolojiler
                  kullanılabilir. Ölçümleme için{" "}
                  <span className="text-on-surface font-medium">
                    Google Analytics
                  </span>{" "}
                  gibi üçüncü taraf hizmetlerinden yararlanılabilir; bu araçlar
                  anonimleştirilmiş veya toplu istatistikler üretmek üzere
                  çerezler ve cihaz tanımlayıcıları kullanabilir.
                </p>
                <p>
                  Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilir veya
                  sitemizde sunulan çerez bildirimi üzerinden (varsa) onayınızı
                  güncelleyebilirsiniz. Analitik çerezleri reddetmeniz, sitenin
                  temel işlevlerini etkilemez; ancak kullanım istatistiklerinin
                  toplanmasını sınırlayabilir.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-low p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Verilerin kullanım amacı
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>Toplanan kişisel veriler özetle şu amaçlarla işlenir:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                  <li>Teklif, danışmanlık ve sözleşme süreçlerinin yürütülmesi</li>
                  <li>İletişim taleplerinize yanıt verilmesi</li>
                  <li>Web sitesi performansının ve kullanıcı deneyiminin iyileştirilmesi</li>
                  <li>Güvenlik, dolandırıcılık önleme ve yasal yükümlülüklerin yerine getirilmesi</li>
                  <li>İstatistiksel analiz ve (izin verildiği ölçüde) pazarlama ölçümü</li>
                </ul>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-lowest p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Üçüncü taraf paylaşımı
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Verileriniz, yalnızca hizmetin ifası veya yasal zorunluluklar
                  çerçevesinde; barındırma, e-posta, analitik, CRM veya ödeme
                  altyapısı gibi güvenilir iş ortaklarımızla ve{" "}
                  <span className="text-on-surface font-medium">
                    KVKK ve ilgili mevzuata uygun
                  </span>{" "}
                  sözleşmeler kapsamında paylaşılabilir. Google Analytics gibi
                  yurt dışı hizmet sağlayıcılarına aktarım söz konusuysa, yasal
                  dayanak ve gerekli güvenceler (örneğin açık rıza veya
                  yeterlilik kararı / standart sözleşme maddeleri) dikkate alınır.
                </p>
                <p>
                  Kişisel verilerinizi üçüncü taraflara satmıyoruz veya ticari
                  amaçla kiraya vermiyoruz.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-low p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Veri güvenliği
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Yetkisiz erişim, kayıp veya kötüye kullanım risklerini azaltmak
                  için teknik ve idari tedbirler (erişim kontrolleri, güvenli
                  bağlantı, güncel yazılım, personel bilgilendirmesi vb.)
                  uygularız. İnternet üzerinden veri iletiminin %100 güvenli
                  olmadığını; bu nedenle paylaştığınız bilgileri de dikkatle
                  seçmenizi öneririz.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-lowest p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Haklarınız (KVKK kapsamında)
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca
                  ilgili kişi olarak; verilerinizin işlenip işlenmediğini
                  öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amaca
                  uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya
                  yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya
                  yanlış işlenmişse düzeltilmesini isteme, KVKK&apos;da öngörülen
                  şartlar çerçevesinde silinmesini veya yok edilmesini isteme,
                  düzeltme/silme işlemlerinin verilerin aktarıldığı üçüncü
                  kişilere bildirilmesini isteme, münhasıran otomatik sistemler
                  ile analiz edilmesi suretiyle aleyhinize bir sonucun ortaya
                  çıkmasına itiraz etme ve kanuna aykırı işlenmesi sebebiyle
                  zarara uğramanız hâlinde zararın giderilmesini talep etme
                  haklarına sahipsiniz.
                </p>
                <p>
                  Ayrıntılı başvuru usulü için{" "}
                  <Link
                    href="/kullanim-sartlari"
                    className="text-primary font-semibold hover:underline underline-offset-4"
                  >
                    KVKK Aydınlatma Metni
                  </Link>{" "}
                  bölümümüze bakabilirsiniz.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-low p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                İletişim
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Gizlilik ve kişisel verilerinizle ilgili sorularınız için bize
                  ulaşabilirsiniz:
                </p>
                <ul className="space-y-2">
                  <li>
                    <span className="text-on-surface font-medium">E-posta:</span>{" "}
                    <a
                      href="mailto:info@seoroas.com"
                      className="text-primary font-semibold hover:underline underline-offset-4"
                    >
                      info@seoroas.com
                    </a>
                  </li>
                  <li>
                    <span className="text-on-surface font-medium">Telefon:</span>{" "}
                    <a
                      href="tel:+902125550736"
                      className="text-primary font-semibold hover:underline underline-offset-4"
                    >
                      +90 (212) 555 0 SEO
                    </a>
                  </li>
                  <li>
                    <span className="text-on-surface font-medium">Adres:</span>{" "}
                    İstanbul, Türkiye
                  </li>
                  <li>
                    <Link
                      href="/iletisim"
                      className="text-primary font-semibold hover:underline underline-offset-4"
                    >
                      İletişim formu
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
