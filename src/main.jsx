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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // 
    children: [
      { index: true, element: <Anasayfa /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'faq', element: <FAQ /> },
      { path:'nadide-eserler', element: <BooksList/>}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
