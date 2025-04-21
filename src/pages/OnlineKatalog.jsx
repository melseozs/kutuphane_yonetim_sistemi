import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Header from "../Components/Header";


const BooksList = () => {
  const [showFilters, setShowFilters] = useState(false);

  const booksData = [
    {
      id: 1,
      title: "Kürk Mantolu Madonna",
      author: "Sabahattin Ali",
      image: "https://img.kitapyurdu.com/v1/getImage/fn:1207631/wh:true/wi:220",
      available: true,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      image: "https://i.dr.com.tr/cache/500x400-0/originals/0000000064038-1.jpg",
      available: false,
    },
    {
      id: 3,
      title: "Simyacı",
      author: "Paulo Coelho",
      image: "https://m.media-amazon.com/images/S/aplus-media/sota/dfee7b91-56e5-448b-9b5c-d1f5a471ffe5.__CR13,60,973,602_PT0_SX970_V1___.png",
      available: true,
    },
    {
      id: 4,
      title: "Bilinmeyen Bir Kadının Mektubu",
      author: "Stefan Zweig",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMiHjUkVkW054nbefjmFIXVs9WmJrLCuJSw&s",
      available: true,
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-neutral-50 p-8">
        <div className="flex flex-col items-center gap-4 mt-10 mb-8">
          <div className="flex justify-center w-full pt-12">
            <div className="flex w-[600px]">
              <input
                type="text"
                placeholder="Kitap ara..."
                className="flex-1 px-4 py-2 border border-orange-50 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
              />
              <button
                className="px-5 py-2 bg-orange-200 text-black font-semibold rounded-r-lg hover:bg-orange-300 transition ml-6"
              >
                Ara
              </button>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-orange-200 border border-orange-300 rounded-md shadow hover:bg-orange-300 transition"
            >
              <span className="mr-2">Filtrele</span>
              <FaFilter />
            </button>

            {showFilters && (
              <div className="absolute z-10 mt-2 p-4 bg-white border border-gray-300 rounded-md shadow-lg w-72">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Dil</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-100 text-sm rounded-full">Türkçe</span>
                  <span className="px-3 py-1 bg-pink-100 text-sm rounded-full">İngilizce</span>
                </div>

                <h3 className="text-sm font-semibold text-gray-600 mb-2">Konu</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-sm rounded-full">Bilim</span>
                  <span className="px-3 py-1 bg-purple-100 text-sm rounded-full">Tarih</span>
                </div>

                <h3 className="text-sm font-semibold text-gray-600 mb-2">Tür</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-sm rounded-full">Roman</span>
                  <span className="px-3 py-1 bg-indigo-100 text-sm rounded-full">Deneme</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {booksData.map((book) => (
            <div
              key={book.id}
              className="flex flex-col shadow-lg rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm mx-auto w-60 h-[420px] 
              border border-pink-200 hover:border-gray-300 transform hover:scale-105 hover:shadow-gray-500 transition duration-300"
            >
              <div className="h-[65%] w-full">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex-1 flex flex-col justify-center items-center text-center space-y-1 bg-gradient-to-t from-pink-50 to-white">
                <h2 className="text-lg font-semibold text-indigo-900">{book.title}</h2>
                <p className="text-gray-700 text-sm">
                  Yazar: <span className="text-pink-600">{book.author}</span>
                </p>
                <p className={`text-xs font-medium mt-2 ${book.available ? "text-green-600" : "text-red-500"}`}>
                  {book.available ? "Müsait" : "Ödünçte"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksList;
