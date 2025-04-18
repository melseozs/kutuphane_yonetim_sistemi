import React from 'react';

export default function About() {
  return (
    <div className="bg-white min-h-screen p-10">
      {/* Başlık */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Hakkımızda
      </h1>

      {/* İçerik */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Kütüphane Yönetim Sistemi, bilgiye erişimi kolaylaştırmak, kitapları ve kaynakları
          düzenlemek, kullanıcılarımıza modern ve hızlı bir kütüphane deneyimi sunmak amacıyla
          geliştirilmiştir. Amacımız, herkesin bilgiye eşit erişimini sağlamak ve kitap okuma
          alışkanlıklarını desteklemektir.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Sistemimiz, kullanıcıların hızlıca kitap ödünç almasını, iade işlemlerini yapmasını ve
          kütüphanemizde bulunan kaynakları kolayca bulmasını sağlamaktadır. Aynı zamanda,
          yöneticilerimize, kütüphanedeki envanteri yönetme, raporlama ve analitik araçlarla
          verimliliği artırma imkânı sunar.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Teknolojinin gücünü kullanarak kütüphane hizmetlerini dijitalleştiriyor ve
          kullanıcılarımızın hayatlarını kolaylaştırıyoruz. Yenilikçi özelliklerimizle birlikte,
          kütüphanemiz, her yaştan bireye daha fazla okuma fırsatı sunmaktadır.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Misyonumuz</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Bilgiye erişimi kolaylaştırmak ve toplumun bilgiye olan bağlılığını artırmak. Amacımız,
          yalnızca kitapları yönetmek değil, aynı zamanda insanların öğrenme ve keşfetme
          alışkanlıklarını güçlendirmektir.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Vizyonumuz</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Geleceğin dijital kütüphanelerini inşa ederek herkesin bilgiye erişebildiği, yenilikçi
          ve sürdürülebilir bir platform sunmak.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Değerlerimiz</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li>Bilgiye erişimde eşitlik</li>
          <li>Teknolojiyle modernleşme</li>
          <li>Toplumsal fayda ve eğitim</li>
          <li>Yenilikçi ve sürdürülebilir çözümler</li>
          <li>Kullanıcı odaklı hizmet</li>
        </ul>
      </div>
    </div>
  );
}