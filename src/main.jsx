import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Anasayfa from './pages/Anasayfa.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
// import LoginPage from './Services/LoginPage.jsx';
import FAQ from './pages/FAQ.jsx';
import BooksList from './BooksList.jsx';
import Duyurular from './pages/duyurular/Duyurular.jsx';
import DuyuruDetay from './pages/duyurular/DuyuruDetay.jsx';

import AdminPage from './pages/admin/AdminPage.jsx';
import AdminPanel from './pages/admin/AdminPanel.jsx';
import KitapYonetimi from './pages/admin/KitapEkle.jsx';
import KullaniciYonetimi from './pages/admin/KullaniciYonetimi.jsx';
import Istatistikler from './pages/admin/İstatistikler.jsx';
import OduncYonetimi from './pages/admin/OduncYonetimi'; 
import UyeKayitlari from './pages/admin/UyeKayitlari.jsx';
import Hareketler from './pages/admin/Hareketler.jsx';
import KutuphaneKurallari from './pages/About/KutuphaneKurallari.jsx';
import CalismaSaatleri from './pages/About/CalismaSaatleri.jsx';
import KutuphaneFoto from './pages/About/KutuphaneFoto.jsx';
import SalonCalismalanlari from './pages/SalonCalismalanlari.jsx';
import OduncGeciktirme from './pages/OduncGeciktirme.jsx';
import BooksCatalog from './pages/OnlineKatalog.jsx';

import Kullaniciislemleri from './pages/kullanici/kullaniciislemleri.jsx';
import Profilim from './pages/kullanici/Profilim.jsx';
import Kitaplarim from './pages/kullanici/Kitaplarim.jsx';
import KullaniciLogin from './pages/Kullanici/KullaniciLogin.jsx';
import OnlineKatalog from './pages/OnlineKatalog.jsx';
import KullaniciKayit from './pages/Kullanici/KullaniciKayit.jsx';
import KullaniciVerify from './pages/Kullanici/KullaniciVerify.jsx';
import KullaniciResendCode from './pages/Kullanici/KullaniciResendCode.jsx';
import KitapYonet from './pages/admin/KitapYonet.jsx';
import KitapEkle from './pages/admin/KitapEkle.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Anasayfa /> },
      { path: 'about', element: <About /> },
      { path: 'about/kurallar', element: <KutuphaneKurallari /> },
      { path: 'about/saatler', element: <CalismaSaatleri /> },
      { path: 'about/foto', element: <KutuphaneFoto /> },
      { path: 'contact', element: <Contact /> },
      // { path: 'login', element: <LoginPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'nadide-eserler', element: <BooksList /> },
      { path: 'duyurular', element: <Duyurular /> },
      { path: 'duyurular/:id', element: <DuyuruDetay /> },
      { path: 'calisma-alanlari', element: <SalonCalismalanlari /> },
      { path: 'odunc-geciktirme', element: <OduncGeciktirme /> },
      { path: 'online-katalog', element: <OnlineKatalog /> },
      { path: 'kullanici-login', element: <KullaniciLogin /> },
      { path: 'kullanici-register', element: <KullaniciKayit/> },
      { path: 'kullanici-verify', element: <KullaniciVerify/> },
      { path: 'kullanici-resendcode', element: <KullaniciResendCode/> },

      // 🔥 KULLANICI PANELİ VE ALT SAYFALAR
      {
        path: 'kullanici-islemleri',
        element: <Kullaniciislemleri />,
        children: [
          { path: 'profilim', element: <Profilim /> },
          { path: 'kitaplarim', element: <Kitaplarim /> },
        ],
      },
    ],
  },
  
  {
    path: '/admin-panel',
    element: <AdminPanel />,
    children: [
      { path: 'kitap-ekle', element: <KitapEkle /> },
      { path: 'kitap-yonet', element: <KitapYonet /> },
      
      { path: 'kullanici-yonetimi', element: <KullaniciYonetimi /> },
      { path: 'istatistikler', element: <Istatistikler /> },
      { path: 'odunc-yonetimi', element: <OduncYonetimi /> },
      { path: 'uye-kayitlari', element: <UyeKayitlari /> },
      { path: 'hareketler', element: <Hareketler /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
