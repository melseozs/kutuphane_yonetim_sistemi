import React from "react";
import booksData from "./books.json";

const BooksList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {booksData.map((book) => (
          <div 
            key={book.id}
            className="flex flex-col shadow-lg rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm mx-auto w-60 h-[420px] 
            border border-pink-200 hover:border-indigo-400 transform hover:scale-105 hover:shadow-indigo-300 transition duration-300"
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
              <p className="text-gray-700 text-sm">Yazar: <span className="text-pink-600">{book.author}</span></p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
