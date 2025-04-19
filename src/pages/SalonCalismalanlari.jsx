import React from "react";
import Header from "../Components/Header";

const SalonCalismalanlari = () => {
  const areas = [
    {
      title: "Sessiz Çalışma Salonu",
      image:
        "https://muzegazhane.istanbul/wp-content/uploads/2021/12/sesli-calisma-alani-muze-gazhane-2-Large.jpg",
      description:
        "Bireysel çalışmaya uygun, sessiz ve dikkat dağıtıcı unsurlardan arındırılmış bir ortam sunar. Bu salon, öğrencilerin odaklanarak verimli çalışmaları için özel olarak tasarlanmıştır. Gürültü seviyesi minimumda tutulur."
    },
    {
      title: "Grup Çalışma Odaları",
      image:
        "https://www.lib.utk.edu/wp-content/uploads/sites/44/files/2020/01/hodges-commons-group-study-rooms-scaled.jpg",
      description:
        "Öğrencilerin birlikte proje ve sunum hazırlayabilecekleri, rezervasyonla kullanılabilen odalardır. Her oda beyaz tahta, projeksiyon gibi araçlarla donatılmıştır. İş birliğine dayalı çalışmalar için idealdir."
    },
    {
      title: "Dijital Kaynak Salonu",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1050&q=80",
      description:
        "Bilgisayar donanımlı bu alanda dijital veritabanlarına ve e-kitaplara erişim mümkündür. Öğrenciler, akademik araştırmalarını yaparken dijital kaynaklara kolayca ulaşabilir. Donanımlı cihazlarla desteklenmiştir."
    },
    {
      title: "Okuma Alanı",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1050&q=80",
      description:
        "Geniş ve aydınlık okuma alanları, rahat koltuklar ve doğal ışık ile donatılmıştır. Sessiz bir atmosferde kitap okumak veya not almak için idealdir. Öğrencilerin bireysel zaman geçirebileceği konforlu bir ortam sunar."
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <Header />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Kütüphane Salonları ve Çalışma Alanları</h1>
        <div className="space-y-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
            >
              <img
                src={area.image}
                alt={area.title}
                className="w-full md:w-60 h-48 object-cover md:object-cover"
              />
              <div className="p-4 flex flex-col justify-center">
                <h2 className="text-xl font-semibold mb-2">{area.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalonCalismalanlari;
