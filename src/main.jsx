import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Anasayfa from './pages/Anasayfa.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import LoginPage from './Services/LoginPage.jsx';
import AdminPage from './Services/AdminPage.jsx';
import FAQ from './Services/FAQ.jsx';
import BooksList from './BooksList';
import Duyurular from './pages/duyurular/Duyurular';
import DuyuruDetay from './pages/duyurular/DuyuruDetay';
import VizyonMisyon from './pages/About/VizyonMisyon.jsx';
import KutuphaneKural from './pages/About/KutuphaneKurallari.jsx';
import CalismaSaatleri from './pages/About/CalismaSaatleri.jsx';
import KutuphaneFoto from './pages/About/KutuphaneFoto.jsx';
import SalonCalismalanlari from './pages/SalonCalismalanlari.jsx';
import OduncGeciktirme from './pages/OduncGeciktirme.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { index: true, element: <Anasayfa /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'odunc-geciktirme', element: <OduncGeciktirme/> },
      { path:'nadide-eserler', element: <BooksList/>},
      { path: 'duyurular', element: <Duyurular /> },
      { path: 'duyurular/:id', element: <DuyuruDetay /> },
      { path: 'about/vizyon', element: <VizyonMisyon /> },
      { path: 'about/kurallar', element: <KutuphaneKural /> },
      { path: 'about/saatler', element: <CalismaSaatleri /> },
      { path: 'about/foto', element: <KutuphaneFoto /> },
      { path:'calisma-alanlari', element: <SalonCalismalanlari/>},
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
