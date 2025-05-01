import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const location = useLocation();
  const path = location.pathname;

  // Sadece kullanıcı panelinde Header gizli
  const gizliHeaderYollar = ['/kullanici-islemleri'];
  const headerGizliMi = gizliHeaderYollar.some(base => path.startsWith(base));

  return (
    <div className="flex flex-col min-h-screen">
      {!headerGizliMi && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
