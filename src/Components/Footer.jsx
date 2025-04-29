import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f9e6c7] text-[#4b3928] px-4 pt-6 pb-4 border-t border-[#e0c4a4] mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Sol Bilgiler */}
        <div className="text-sm md:text-base space-y-1">
          <h3 className="text-xl font-semibold">📚 BOOKSY</h3>
          <p>Kütüphane Yönetim Sistemi</p>
          <div className="border-l-2 border-[#b68b50] pl-3 space-y-0.5">
            <p>© 2025 Tüm Hakları Saklıdır.</p>
            <p>İstanbul Sabahattin Zaim Üniversitesi</p>
            <p>Küçükçekmece, İstanbul</p>
          </div>
        </div>

        {/* Harita */}
        <div className="w-full md:w-1/2 h-36 rounded-xl overflow-hidden border border-[#cfa96e] shadow-md">
          <iframe
            title="Harita"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.631940819619!2d28.783978526041818!3d41.033307671346904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa438a39f52db%3A0xa4eb20ddc406fa96!2sIstanbul%20Sabahattin%20Zaim%20University!5e0!3m2!1sen!2str!4v1745017489372!5m2!1sen!2str"
          ></iframe>
        </div>
      </div>

      {/* Sosyal Medya */}
      <div className="flex justify-center mt-4 gap-6">
        {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, index) => (
          <a
            key={index}
            href="#"
            className="text-[#4b3928] text-xl hover:text-[#a8743f] transition duration-300"
          >
            <i className={`fab fa-${icon}`}></i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
