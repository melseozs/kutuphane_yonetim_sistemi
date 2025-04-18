import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Ortak bileşenler (örn. header, footer) burada yer alabilir */}
      <Outlet /> {/* Seçilen rotanın bileşeni burada render edilir */}
    </div>
  );
}

export default App;
