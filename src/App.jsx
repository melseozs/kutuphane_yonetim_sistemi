import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const location = useLocation();

  // Footer'ın görünmesini istemediğin pathleri buraya yaz
  const gizliFooterPathleri = ['/kullanici-islemleri', '/profilim','/kitaplarim'];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Sadece belirli sayfalarda footer'ı gösterme */}
      {!gizliFooterPathleri.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
