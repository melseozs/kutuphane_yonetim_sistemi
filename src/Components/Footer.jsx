import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 text-gray-800 px-2 py-5 shadow-xl rounded-t-xl mt-22">
      <div className="max-w-7xl h-60 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Sol Kısım */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-3xl font-bold text-gray-800">📚 Booksy Kütüphane Yönetim Sistemi</h3>
          <p className="text-sm text-gray-700">© 2025 Tüm Hakları Saklıdır.</p>
          <p className="text-sm text-gray-700">İstanbul Sabahattin Zaim Üniversitesi</p>
          <p className="text-sm text-gray-700">Küçükçekmece, İstanbul</p>
        </div>

        {/* Sağ Kısım - Harita */}
        <div className="w-full md:w-1/2 h-56 mt-8 md:mt-0">
          <iframe
            title="Kütüphane Harita"
            className="w-full h-full rounded-xl border-2 border-yellow-400 shadow-md"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.631940819619!2d28.783978526041818!3d41.033307671346904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa438a39f52db%3A0xa4eb20ddc406fa96!2sIstanbul%20Sabahattin%20Zaim%20University!5e0!3m2!1sen!2str!4v1745017489372!5m2!1sen!2str"
          ></iframe>
        </div>
      </div>

      {/* Alt Kısım - Sosyal Medya Bağlantıları */}
      <div className="flex justify-center gap-6 mt-8">
        <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

