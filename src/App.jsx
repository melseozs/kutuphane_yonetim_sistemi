import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const location = useLocation();
  const gizliFooterPathleri = ['/kullanici-islemleri', '/profilim', '/kitaplarim'];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header ister sabit ister scroll'la giden olabilir */}
      <Header />

      {/* Sayfa içeriği */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer yalnızca belirli sayfalarda görünmesin */}
      {!gizliFooterPathleri.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
