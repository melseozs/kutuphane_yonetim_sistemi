import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/SidebarAbout';

function KutuphaneKural() {
  return (
    <>
      <Header showSearch={false} />
      <div className="flex min-h-screen pt-24 bg-[#fffbe7]">
        <Sidebar />
        <main className="flex-1 p-10 bg-white rounded-lg shadow-sm m-4">
          <div className="max-w-4xl w-full space-y-10">
            <h2 className="text-3xl font-bold text-[#633914] mb-4 border-b border-amber-200 pb-2">Kütüphane Kuralları</h2>
            
            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">1. Üyelik ve Kütüphane Kullanımı</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Üniversitemize mensup öğrenci, akademik ve idari personel kütüphanenin doğal üyesi olarak kabul edilir. Ancak, kütüphaneden ödünç kitap alabilmesi için kurum kimliğini ibraz edip, üye olmaları gerekmektedir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">2. Üniversitelerarası İşbirliği</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Kütüphanemiz, güncel belgelerini ibraz etmeleri halinde diğer üniversitelerin öğretim elemanları ile aktif doktora ve yüksek lisans öğrencilerinin yararlanmasına açıktır. Ancak, bu kişiler ödünç materyal alabilmesi, kendi üniversitelerinin kütüphanesinin aracılığı ile mümkündür.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">3. Ödünç Süreleri ve Kurallar</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Akademik personel 2 aylık süre ile 10 adet kitap ödünç alabilir. Öğrenci 15 gün, idari personel ise 30 gün süre ile 3 adet kitap ödünç alabilir. Ansiklopedi, sözlük, atlas vb. danışma kaynaklarından sadece 1 adet ve 7 gün süre ile ödünç alınabilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">4. Materyal Çıkarmak ve İzinsiz Hareketler</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Kütüphane materyalleri izinsiz dışarıya çıkarılamaz. İzinsiz olarak çıkarmaya teşebbüs edenler için yasal yollara başvurulur.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">5. Ödünç Verilmeyen Kitaplar</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Tezler, Nadir Eserler ve 1960 yılı öncesinde basılmış eserler ödünç verilmez. Öğretim elemanları tarafından tespit edilerek ödünç verilmemesi istenilen ders kitapları da ödünç verilmez.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">6. Mezuniyet ve İlişik Kesme</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Öğrenciler mezun olduklarında veya kayıtlarının silinmesi durumunda kütüphaneden ilişik kesme belgesi almak zorundadır. Kütüphaneye borçlu olan öğrencilere ilişik kesme belgesi verilmez.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">7. Personel İlişik Kesme</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Üniversiteden emekli, nakil, istifa, askerlik vs. sebeplerle ayrılan personel, ödünç aldığı kitapları iade ederek kütüphaneden ilişik kesme belgesi almak zorundadırlar. Kütüphaneye borçlu olan personele ilişik kesme belgesi verilmez.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">8. Ödünç Materyallerin İade Edilmemesi</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Ödünç aldığı materyalleri, ödünç verme süresi geçtiği halde iade etmeyen kullanıcıya başka materyal ödünç verilmez.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">9. Kurum Dışından Araştırmacılar</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Kurum dışından gelen, herhangi bir konuda araştırma yapmak isteyen kişiler izin verilen sürelerde kütüphanemizi kullanabilir. Bu kişilerin mail yoluyla (kutuphane@izu.edu.tr) başvurması gerekmektedir. Kütüphanemiz, özellikle final ve vize sınavları dönemlerinde, kurum dışından gelen kullanıcıların kullanım haklarında kısıtlama yapabilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">10. Materyal Talebi</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                İZÜ mensupları, Kütüphanede bulunması için kitap, dergi vs. materyal talebinde bulunabilirler. Bu taleplerini;
                <ul className="list-disc pl-5 mb-4">
                  <li>Kütüphane web sayfamızda bulunan satın alma formunu doldurarak iletebilirler,</li>
                  <li>Fakülte veya Bölüm Başkanlığı olarak resmi yazı ile talepte bulunabilirler.</li>
                </ul>
                Yapılan talepler işleme alınır ve söz konusu materyallerin kütüphaneye kazandırılması sağlanır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6e4a2a] mb-2">11. Kütüphaneye Giriş Kuralları</h2>
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Kütüphanelerimize yiyecek ve içecek (su hariç) ile girilmez. Kütüphanede bilgisayarlar eğitim amacı dışında kullanılamaz. Şahsi bilgisayarlar da buna dahildir. Bilgisayarlarda oyun oynanmaz, dizi film, çizgi film, film, maç vs. izlenilmez.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-amber-800 mb-2">12. Cezai Hükümler</h2>
              <ul className="list-disc pl-5">
                <li>Ödünç alınıp gününde iade edilmeyen her kitap veya dergi için günlük 1 lira ceza uygulanmaktadır. Para cezası 50.00 TL’yi aşan kişilere ödünç kitap verilmez.</li>
                <li>Tamiri mümkün olmayacak ölçüde yıpratılan veya kaybolan kütüphane materyali için, ödünç alandan materyalin aynısı ya da daha yeni baskısı talep edilir. Aynısı ya da daha yenisini bulmak mümkün olmaz ise, materyalin rayiç bedelinin %50 fazlası ödünç alandan tahsil edilir.</li>
                <li>Personel ödünç aldığı materyalleri 2. hatırlatma ihtarından sonra da iade etmez ise kaybolduğu varsayılır. Bu durumda, materyalin rayiç bedeli %50 fazlasıyla ilgilinin maaşından kesilmek üzere Bütçe Daire Başkanlığına bildirilir.</li>
                <li>Gerek geç getirilen, gerekse kaybolan materyaller için tahsil edilen paralar, Üniversiteye gelir kaydedilir. Bu gelirler öncelikle Kütüphanenin ihtiyaçları için kullanır.</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default KutuphaneKural;
