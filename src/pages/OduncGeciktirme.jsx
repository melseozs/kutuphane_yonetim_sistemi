import React from "react";
import Header from "../Components/Header";

const OduncGeciktirme = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Header />
      <div className="p-6 max-w-4xl mx-auto pt-34">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#473636]">Gecikme Cezası Ödeme Bilgilendirmesi</h1>

        <p className="mb-4 text-gray-700">
          Kullanıcılarımız gecikme cezası ödemelerini aşağıda belirtilen adımları izleyerek banka hesap numarasına yapabileceklerdir.
        </p>

        <p className="mb-4 text-red-600 font-semibold">
          Not: İşlem yaptıracak kullanıcıların gecikme cezası ödemelerini sorun yaşamamaları için en geç 1 gün önceden yapmaları gerekmektedir.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>
            Gecikme cezasını ödemek isteyen kullanıcı, eğer üzerinde gecikmiş yayın varsa kütüphaneden ceza miktarını teyit etmelidir.
          </li>
          <li>
            Açıklama kısmına <strong>"Kütüphane Gecikme cezası / Öğrenci veya Sicil Numarası"</strong> notu mutlaka yazılmalıdır.
          </li>
          <li>
            Ödeme yapıldıktan sonra dekontun <a href="mailto:kutuphane@edu.tr" className="text-blue-600 underline">kutuphane@itu.edu.tr</a> adresine gönderilmesi gerekmektedir.
          </li>
        </ul>

        <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Hesap Bilgileri</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Banka:</strong> Vakıflar Bankası Maslak Şubesi</li>
            <li><strong>Şube Kodu:</strong> 401</li>
            <li><strong>Hesap Numarası:</strong> 00158007311540712</li>
            <li><strong>IBAN:</strong> TR81 0001 5001 5800 7311 5407 12</li>
            <li><strong>Hesap Adı:</strong> Kütüphane İşletme ve Mali İşler Birimi</li>
            <li><strong>Açıklama:</strong> Kütüphane Yayın Gecikme Ceza Bedelleri</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OduncGeciktirme;
