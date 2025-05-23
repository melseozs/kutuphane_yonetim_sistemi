import React from 'react';
import Header from '../Components/Header'; 

export default function Contact() {
  return (
    <>
      <Header showSearch={false} />
      <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center pt-36 px-4 pb-14">
        <h1 className="text-3xl font-bold text-[#473636] mb-6">İletişim</h1>
        <p className="text-lg text-[#413535] mb-12 text-center">
          Kütüphanemizle ilgili her türlü sorularınız, önerileriniz ve talepleriniz için bizimle iletişime geçebilirsiniz.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#473636] mb-4">İletişim Bilgilerimiz</h2>
            <p className="text-[#473636] mb-2">
              <strong>Adres:</strong> Halkalı Merkez, Halkalı, 34303 Küçükçekmece/İstanbul
            </p>
            <p className="text-[#473636] mb-2">
              <strong>Telefon:</strong> +90 212 123 45 67
            </p>
            <p className="text-[#473636] mb-2">
              <strong>E-posta:</strong> info@kutuphane.com
            </p>
          </div>
          <form>
            <h2 className="text-2xl font-semibold text-[#473636] mb-6">Bize Ulaşın</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#473636] mb-2">Ad Soyad</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Adınızı ve soyadınızı girin"
                />
              </div>
              <div>
                <label className="block text-[#473636] mb-2">E-posta</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="E-posta adresinizi girin"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-[#473636] mb-2">Mesajınız</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Mesajınızı buraya yazın"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 bg-[#473636] text-white py-3 px-6 rounded-lg hover:bg-[#886767] transition duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
