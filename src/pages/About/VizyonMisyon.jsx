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
              Gelişen teknolojiyi en iyi şekilde kullanan, ulusal ve uluslararası düzeyde itibarlı bir araştırma kütüphanesi oluşturmak hedeflenmektedir. Her alanda zengin bir koleksiyona, deneyimli ve yeterli sayıda personele sahip olarak, kısa sürede güçlü, saygın ve örnek gösterilebilecek bir araştırma kütüphanesi yapısına ulaşılması ve bu yapının sürekli geliştirilmesi amaçlanmaktadır.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-4 border-b border-amber-200 pb-2">MİSYON</h2>
              <p className="text-gray-800 leading-relaxed text-lg">
              Eğitim ve öğretime etkin biçimde destek sağlamak; kitap, dergi, CD gibi tüm bilgi kaynaklarını belirleyip temin ederek kullanıcıların hizmetine sunmak ve sürekli gelişimi esas alan bir bilgi hizmeti sunmaktır.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default VizyonMisyon;
