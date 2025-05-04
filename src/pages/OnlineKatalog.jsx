import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Header from "../Components/Header";

const OnlineKatalog = () => {
  const [booksData, setBooksData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPublisher, setSelectedPublisher] = useState("all");
  const [selectedAuthor, setSelectedAuthor] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [expandedBook, setExpandedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/rest/api/Book/listAll");
        if (response.data && Array.isArray(response.data.data)) {
          setBooksData(response.data.data);
        } else {
          setBooksData([]);
        }
      } catch (err) {
        console.error("Kitaplar yüklenirken hata oluştu:", err);
        setError("Kitaplar yüklenirken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/rest/api/Category/listAllCategories");
        if (response.data && response.data.data) {
          setCategories(response.data.data);
        } else {
          setCategories([]);
        }
      } catch (err) {
        console.error("Kategoriler yüklenirken hata oluştu:", err);
        setError("Kategoriler yüklenirken bir hata oluştu.");
      }
    };

    const fetchPublishers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/rest/api/Publisher/listAllPublishers");
        if (response.data && response.data.data) {
          setPublishers(response.data.data);
        } else {
          setPublishers([]);
        }
      } catch (err) {
        console.error("Yayınevleri yüklenirken hata oluştu:", err);
        setError("Yayınevleri yüklenirken bir hata oluştu.");
      }
    };

    const fetchAuthors = async () => {
      try {
        const response = await axios.get("http://localhost:8080/rest/api/Author/listAllAuthors");
        if (response.data && response.data.data) {
          setAuthors(response.data.data);
        } else {
          setAuthors([]);
        }
      } catch (err) {
        console.error("Yazarlar yüklenirken hata oluştu:", err);
        setError("Yazarlar yüklenirken bir hata oluştu.");
      }
    };

    fetchBooks();
    fetchCategories();
    fetchPublishers();
    fetchAuthors();
  }, []);

  const filterBooks = () => {
    return booksData.filter((book) => {
      const matchesCategory =
        selectedCategory === "all" || book.categoryAd === selectedCategory;
      const matchesPublisher =
        selectedPublisher === "all" || book.publisherAd === selectedPublisher;
      const matchesAuthor =
        selectedAuthor === "all" || book.authorAd === selectedAuthor;
      const matchesLanguage =
        selectedLanguage === "all" || book.dil === selectedLanguage;
      const matchesSearch =
        book.ad.toLowerCase().includes(searchQuery.toLowerCase()) ||
        `${book.authorAd} ${book.authorSoyad}`.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesPublisher && matchesAuthor && matchesLanguage && matchesSearch;
    });
  };

  const toggleDetails = (bookId) => {
    if (expandedBook === bookId) {
      setExpandedBook(null);
    } else {
      setExpandedBook(bookId);
    }
  };

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Kategori</h3>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                >
                  <option value="all">Tüm Kategoriler</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.ad}>
                      {category.ad}
                    </option>
                  ))}
                </select>

                <h3 className="text-sm font-semibold text-gray-600 mb-2">Yayınevi</h3>
                <select
                  value={selectedPublisher}
                  onChange={(e) => setSelectedPublisher(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                >
                  <option value="all">Tüm Yayınevleri</option>
                  {publishers.map((publisher) => (
                    <option key={publisher.id} value={publisher.ad}>
                      {publisher.ad}
                    </option>
                  ))}
                </select>

                <h3 className="text-sm font-semibold text-gray-600 mb-2">Yazar</h3>
                <select
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                >
                  <option value="all">Tüm Yazarlar</option>
                  {authors.map((author) => (
                    <option key={author.id} value={author.ad}>
                      {author.ad}
                    </option>
                  ))}
                </select>

                <h3 className="text-sm font-semibold text-gray-600 mb-2">Dil</h3>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="all">Tüm Diller</option>
                  {booksData
                    .map((book) => book.dil)
                    .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
                    .map((language, index) => (
                      <option key={index} value={language}>
                        {language}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center mt-10">Yükleniyor...</div>
        ) : error ? (
          <div className="text-red-500 text-center mt-10">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filterBooks().length > 0 ? (
              filterBooks().map((book) => (
                <div
                  key={book.id}
                  className="flex flex-col shadow-lg rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm mx-auto w-60 h-[460px] 
                  border border-pink-200 hover:border-gray-300 transform hover:scale-105 hover:shadow-gray-500 transition duration-300"
                >
                  <div className="h-[60%] w-full">
                    <img
                      src={`http://localhost:8080${book.kitapKapakfotosuUrl}`}
                      alt={book.ad}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-center items-center text-center space-y-1 bg-gradient-to-t from-pink-50 to-white">
                    <h2 className="text-lg font-semibold text-indigo-900">{book.ad}</h2>
                    <p className="text-gray-700 text-sm">
                      Yazar: <span className="text-pink-600">{book.authorAd} {book.authorSoyad}</span>
                    </p>
                    <p className="text-xs text-gray-600">Kategori: {book.categoryAd}</p>
                    <p className={`text-xs font-medium mt-2 ${book.durum === "MUSAIT" ? "text-green-600" : "text-red-500"}`}>
                      {book.durum === "MUSAIT" ? "Müsait" : "Ödünçte"}
                    </p>

                    <button
                      onClick={() => toggleDetails(book.id)}
                      className="mt-3 text-sm text-gray-500 flex items-center justify-center"
                    >
                      {expandedBook === book.id ? <FaChevronUp /> : <FaChevronDown />}
                      Detaylar
                    </button>

                    {expandedBook === book.id && (
                      <div className="mt-4 text-sm text-gray-700">
                        <p><strong>ISBN:</strong> {book.isbn}</p>
                        <p><strong>Yayın Yılı:</strong> {book.baskiYili}</p>
                        <p><strong>Yayınevi:</strong> {book.publisherAd}</p>
                        <p><strong>Dil:</strong> {book.dil}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center mt-10">Kitaplar bulunamadı.</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default OnlineKatalog;
