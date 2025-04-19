import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/SidebarAbout';

function VizyonMisyon() {
  return (
    <>
      <Header showSearch={false} />
      <div className="flex min-h-screen pt-24 bg-[#fffbe7]">
        <Sidebar />
        <main className="flex-1 p-10 bg-white rounded-lg shadow-sm m-4">
          <div className="max-w-4xl w-full space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-4 border-b border-amber-200 pb-2">VİZYON</h2>
              <p className="text-gray-800 leading-relaxed text-lg">
                Gelişen teknolojiyi en iyi şekilde kullanan, yurt içinde ve uluslararasında itibar sahibi bir araştırma
                kütüphanesi oluşturmayı hedefliyoruz. Başta üniversitemizin eğitim verdiği bilim dalları olmak üzere her
                konuda iyi bir koleksiyona, deneyimli ve yeterli sayıda personele sahip olarak kısa bir süre içinde saygın,
                güçlü ve örnek gösterilebilecek nitelikte bir araştırma kütüphanesi oluşturup, devamlı gelişmesini
                sağlamaktır.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-4 border-b border-amber-200 pb-2">MİSYON</h2>
              <p className="text-gray-800 leading-relaxed text-lg">
                Üniversitemizdeki eğitim ve öğretime destek olmaktır. Her daim kendimizi geliştirerek bu amaç doğrultusunda,
                kitap, dergi, CD vs. tüm materyalleri tespit etmek, sağlamak ve üniversite mensuplarımız başta olmak üzere
                tüm kullanıcıların hizmetine sunmaktır.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default VizyonMisyon;
