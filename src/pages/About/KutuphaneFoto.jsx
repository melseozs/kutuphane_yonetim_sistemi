import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/SidebarAbout';
import kutuphaneFoto1 from '../../assets/kütüphanefoto.jpg';
import kutuphaneFoto2 from '../../assets/kutuphanefoto1.jpg';
import kutuphaneFoto3 from '../../assets/kutuphanefoto2.jpg';
import kutuphaneFoto4 from '../../assets/kutuphanefoto3.jpg';
import kutuphaneFoto5 from '../../assets/kutuphanefoto5.jpg';
import kutuphaneFoto6 from '../../assets/kutuphanefoto6.jpg';


function KutuphaneFoto() {
  return (
    <>
      <Header showSearch={false} />
      <div className="flex min-h-screen pt-24 bg-[#fffbe7]">
        <Sidebar />
        <main className="flex-1 p-10 bg-white rounded-lg shadow-sm m-4">
          <div className="max-w-7xl w-full space-y-10">
            <h2 className="text-3xl font-bold text-[#633914] mb-4 border-b border-amber-200 pb-2">Kütüphane Fotoğrafları</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={kutuphaneFoto1} 
                  alt="Kütüphane Fotoğrafı 1" 
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={kutuphaneFoto2} 
                  alt="Kütüphane Fotoğrafı 2" 
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={kutuphaneFoto3} 
                  alt="Kütüphane Fotoğrafı 3" 
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={kutuphaneFoto4} 
                  alt="Kütüphane Fotoğrafı 4" 
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={kutuphaneFoto5} 
                  alt="Kütüphane Fotoğrafı 5" 
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={kutuphaneFoto6} 
                  alt="Kütüphane Fotoğrafı 6" 
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default KutuphaneFoto;
