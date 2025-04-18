import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Üst bileşenler (Navbar gibi) istersen buraya da ekleyebilirsin */}
      
      <div className="flex-grow">
        <Outlet /> {/* Sayfa içeriği buraya render edilir */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
