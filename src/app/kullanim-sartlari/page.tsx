import type { Metadata } from "next";
import Link from "next/link";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "KVKK Aydınlatma Metni",
    description:
      "SEOROAS tarafından 6698 sayılı KVKK kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma metni.",
    path: "/kullanim-sartlari",
  });
}

export default function KvkkAydinlatmaPage() {
  return (
    <main className="pt-24">
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <Breadcrumb
          items={[
            { name: "KVKK Aydınlatma Metni", url: "/kullanim-sartlari" },
          ]}
        />
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-32">
        <article className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tight-tracking mb-6">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-4">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
            uyarınca, veri sorumlusu sıfatıyla SEOROAS olarak kişisel
            verilerinizin işlenmesi hakkında sizleri bilgilendiriyoruz. Son
            güncelleme: <time dateTime="2025-03-21">21 Mart 2025</time>.
          </p>
          <p className="text-sm text-on-surface-variant/80 leading-relaxed">
            Genel gizlilik uygulamalarımız için{" "}
            <Link
              href="/gizlilik-politikasi"
              className="text-primary font-semibold hover:underline underline-offset-4"
            >
              Gizlilik Politikası
            </Link>{" "}
            sayfamıza göz atabilirsiniz.
          </p>

          <div className="mt-14 space-y-10">
            <section className="rounded-[2rem] bg-surface-container-low p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Veri sorumlusu
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Kişisel verileriniz, veri sorumlusu olarak{" "}
                  <span className="text-on-surface font-medium">SEOROAS</span>{" "}
                  tarafından aşağıdaki iletişim kanalları üzerinden
                  yürütülen faaliyetler kapsamında işlenmektedir:
                </p>
                <ul className="space-y-2">
                  <li>
                    <span className="text-on-surface font-medium">Unvan:</span>{" "}
                    SEOROAS
                  </li>
                  <li>
                    <span className="text-on-surface font-medium">Adres:</span>{" "}
                    İstanbul, Türkiye
                  </li>
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
                </ul>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-lowest p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                İşlenen kişisel veriler
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Sunduğumuz SEO danışmanlığı, iletişim ve dijital hizmetler
                  çerçevesinde; iş ilişkisinin niteliğine göre aşağıdaki
                  veriler işlenebilir:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                  <li>
                    Kimlik ve iletişim verileri (ad, soyad, e-posta, telefon,
                    şirket bilgileri)
                  </li>
                  <li>
                    Müşteri işlem bilgileri (talep içeriği, teklif ve sözleşme
                    süreçlerine ilişkin kayıtlar)
                  </li>
                  <li>
                    İşlem güvenliği bilgileri (IP adresi, log kayıtları, cihaz
                    ve oturum tanımlayıcıları)
                  </li>
                  <li>
                    Pazarlama ve analitik verileri (çerezler, site kullanım
                    istatistikleri — açık rıza veya ilgili mevzuata uygun
                    diğer hukuki sebeplere dayanarak)
                  </li>
                </ul>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-low p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Kişisel verilerin işlenme amaçları
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>Kişisel verileriniz özetle şu amaçlarla işlenir:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                  <li>Hizmet sözleşmesinin kurulması ve ifası</li>
                  <li>İletişim taleplerinin alınması ve yanıtlanması</li>
                  <li>Faturalandırma, muhasebe ve hukuki yükümlülüklerin yerine getirilmesi</li>
                  <li>Operasyonel süreçlerin planlanması ve müşteri memnuniyetinin ölçülmesi</li>
                  <li>Web sitesi ve hizmet güvenliğinin sağlanması</li>
                  <li>İstatistiksel değerlendirme ve (varsa ve hukuka uygun şekilde) pazarlama faaliyetleri</li>
                </ul>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-lowest p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Kişisel verilerin aktarılması
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Verileriniz; hizmetin ifası için zorunlu olan ölçüde, yurt
                  içindeki iş ortaklarımıza (örneğin barındırma, e-posta,
                  CRM, analitik sağlayıcıları) ve kanunen yetkili kamu kurum
                  ve kuruluşlarına KVKK&apos;nın 8. ve 9. maddelerine uygun
                  olarak aktarılabilir.
                </p>
                <p>
                  Yurt dışına veri aktarımı (örneğin bulut veya analitik
                  hizmetleri) söz konusu olduğunda, KVKK ve ilgili düzenlemeler
                  çerçevesinde gerekli şartlar (açık rıza, yeterlilik kararı,
                  taahhütname vb.) sağlanır.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-low p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Kişisel veri toplamanın hukuki sebebi
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Kişisel verileriniz, KVKK&apos;nın 5. ve 6. maddelerinde
                  düzenlenen; açık rızanızın bulunması, sözleşmenin kurulması
                  veya ifasıyla doğrudan ilgili olması, veri sorumlusunun
                  hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması,
                  veri işlemenin meşru menfaatlerimiz için gerekli olması veya
                  kanunda açıkça öngörülmesi gibi hukuki sebeplere dayanarak
                  işlenir. Özel nitelikli kişisel veri işlenmesi söz konusuysa,
                  ilgili madde kapsamındaki şartlara uyulur.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-lowest p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                İlgili kişinin hakları (KVKK md. 11)
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  KVKK&apos;nın 11. maddesi uyarınca ilgili kişi olarak
                  aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                  <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                  <li>KVKK&apos;da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
                  <li>Düzeltme, silme ve yok etme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                  <li>
                    Münhasıran otomatik sistemler vasıtasıyla analiz edilmesi
                    suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
                  </li>
                  <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
                </ul>
              </div>
            </section>

            <section className="rounded-[2rem] bg-surface-container-low p-8 md:p-10">
              <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-5">
                Başvuru yöntemi
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Yukarıda sayılan haklarınızı kullanmak için taleplerinizi
                  yazılı olarak veya Kişisel Verileri Koruma Kurulu&apos;nun
                  belirlediği diğer yöntemlerle veri sorumlusuna iletebilirsiniz.
                  Başvurularınızda kimliğinizi teyit edecek bilgileri ve talep
                  konusunu açıkça belirtmeniz, sürecin hızlı işlemesi açısından
                  önemlidir.
                </p>
                <p>
                  Başvurularınızı{" "}
                  <a
                    href="mailto:info@seoroas.com"
                    className="text-primary font-semibold hover:underline underline-offset-4"
                  >
                    info@seoroas.com
                  </a>{" "}
                  adresine e-posta göndererek veya{" "}
                  <Link
                    href="/iletisim"
                    className="text-primary font-semibold hover:underline underline-offset-4"
                  >
                    iletişim formumuz
                  </Link>{" "}
                  aracılığıyla iletebilirsiniz. Talebiniz, niteliğine göre en
                  kısa sürede ve en geç KVKK&apos;da öngörülen süreler içinde
                  sonuçlandırılır. Haklarınızın ihlal edildiğini düşünüyorsanız
                  Kişisel Verileri Koruma Kurulu&apos;na şikayette bulunma
                  hakkınız saklıdır.
                </p>
              </div>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
