import React from 'react';

const Profilim = () => {
  const kullanici = {
    ad: "Merve Aksak",
    email: "merve.aksak@example.com",
    
  
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 mt-10">
      <h2 className="text-3xl font-bold text-center text-[#463C74] mb-8">👤 Profilim</h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src={kullanici.profilFoto}
            alt="Profil"
            className="w-32 h-32 rounded-full border-4 border-[#fdd9a0] shadow-lg"
          />
        </div>
        <div className="space-y-4 w-full">
          <div>
            <label className="block text-gray-600 text-sm">Ad Soyad</label>
            <p className="font-semibold text-lg text-[#463C74]">{kullanici.ad}</p>
          </div>
          <div>
            <label className="block text-gray-600 text-sm">E-posta</label>
            <p className="font-semibold text-lg text-[#463C74]">{kullanici.email}</p>
          </div>
          <div>
           
            <p className="font-semibold text-lg text-[#463C74]">{kullanici.sinif}</p>
          </div>
          <div>
            
            <p className="font-semibold text-lg text-[#463C74]">{kullanici.dogumTarihi}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilim;
