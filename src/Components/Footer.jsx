import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[rgba(248,214,175,0.67)] backdrop-blur-md text-gray-800 px-4 py-4 pt-3 shadow-inner rounded-t-xl border border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">📚 Booksy Kütüphane Yönetim Sistemi</h3>
          <p className="text-sm mt-1">© 2025 Tüm Hakları Saklıdır.</p>
          <p className="text-sm mt-1">İstanbul Sabahattin Zaim Üniversitesi</p>
          <p className="text-sm mt-1">Küçükçekmece, İstanbul</p>
        </div>
        <div className="w-full md:w-1/2 h-48  pt-6">
          <iframe
            title="Kütüphane Harita"
            className="w-full h-full rounded-xl border border-gray-400"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.631940819619!2d28.783978526041818!3d41.033307671346904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa438a39f52db%3A0xa4eb20ddc406fa96!2sIstanbul%20Sabahattin%20Zaim%20University!5e0!3m2!1sen!2str!4v1745017489372!5m2!1sen!2str"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
