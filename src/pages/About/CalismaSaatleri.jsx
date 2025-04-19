import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/SidebarAbout';

function CalismaSaatleri() {
  return (
    <>
      <Header showSearch={false} />
      <div className="flex min-h-screen pt-24 bg-[#fffbe7]">
        <Sidebar />
        <main className="flex-1 p-10 bg-white rounded-lg shadow-sm m-4">
          <div className="max-w-4xl w-full space-y-10">
            <h2 className="text-3xl font-bold text-[#633914] mb-4 border-b border-amber-200 pb-2">Çalışma Saatleri</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse text-center">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-lg font-semibold text-amber-800 border-b border-amber-200">Dönem</th>
                    <th className="px-6 py-3 text-lg font-semibold text-amber-800 border-b border-amber-200">Hafta İçi</th>
                    <th className="px-6 py-3 text-lg font-semibold text-amber-800 border-b border-amber-200">Hafta Sonu</th>
                    <th className="px-6 py-3 text-lg font-semibold text-amber-800 border-b border-amber-200">Resmi Tatiller</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 text-lg text-gray-800 border-b border-amber-200">Eğitim Öğretim Dönemi</td>
                    <td className="px-6 py-4 text-lg text-gray-800 border-b border-amber-200">08.30 - 21.00</td>
                    <td className="px-6 py-4 text-lg text-gray-800 border-b border-amber-200">09.00 - 19.00</td>
                    <td className="px-6 py-4 text-lg text-gray-800 border-b border-amber-200">Kapalı</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-lg text-gray-800 border-b border-amber-200">Yaz Dönemi</td>
                    <td className="px-6 py-4 text-lg text-gray-800 border-b border-amber-200">08.30 - 17.30</td>
                    <td className="px-6 py-4 text-lg text-gray-800 border-b border-amber-200">Kapalı</td>
                    <td className="px-6 py-4 text-lg text-gray-800 border-b border-amber-200">Kapalı</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CalismaSaatleri;
