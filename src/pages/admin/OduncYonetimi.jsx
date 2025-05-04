import React, { useEffect, useState } from "react";
import axios from "axios";

const LoanManagement = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchUsername, setSearchUsername] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const [borrowDate, setBorrowDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    // Kullanıcıları almak için token olmadan API'ye istek atıyoruz
    axios.get("http://localhost:8080/users/")
      .then(res => {
        setUsers(res.data);
        setFilteredUsers(res.data);
      })
      .catch(err => console.error("Kullanıcılar alınamadı", err));
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchUsername(value);
    const filtered = users.filter(user =>
      user.username.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // Kitapları almak için token olmadan API'ye istek atıyoruz
    axios.get("http://localhost:8080/rest/api/Book/listAll")
      .then(res => {
        const musaitBooks = res.data.data.filter(book => book.durum === "MUSAIT");
        setBooks(musaitBooks);
      })
      .catch(err => console.error("Kitaplar alınamadı", err));
  };

  const handleLoanSubmit = () => {
    if (!selectedUser || !selectedBookId || !borrowDate || !returnDate) {
      alert("Tüm alanları doldurun.");
      return;
    }

    const selectedBook = books.find(book => book.id === selectedBookId);

    const payload = {
      userId: selectedUser.id,
      bookId: selectedBookId,
      borrowDate,
      returnDate,
      returned: false
    };

    // Ödünç verme işlemini JWT olmadan doğrudan API'ye gönderiyoruz
    axios.post("http://localhost:8080/api/loans/save", payload)
      .then(res => {
        alert("Kitap başarıyla ödünç verildi!");
        // Seçimleri temizle
        setSelectedBookId(null);
        setBorrowDate("");
        setReturnDate("");
      })
      .catch(err => {
        console.error("Ödünç verme hatası:", err);
        alert("Ödünç verme işlemi başarısız oldu.");
      });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Ödünç Yönetimi</h2>

      <input
        type="text"
        placeholder="Kullanıcı adında ara..."
        value={searchUsername}
        onChange={handleSearchChange}
        className="border p-2 w-full"
      />

      <ul className="border rounded p-2 max-h-40 overflow-auto">
        {filteredUsers.map(user => (
          <li
            key={user.id}
            className="cursor-pointer hover:bg-gray-100 p-1"
            onClick={() => handleUserClick(user)}
          >
            {user.username}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Seçilen kullanıcı: {selectedUser.username}</h3>

          <select
            value={selectedBookId || ""}
            onChange={e => setSelectedBookId(Number(e.target.value))}
            className="border p-2 w-full"
          >
            <option value="" disabled>Kitap seçin</option>
            {books.map(book => (
              <option key={book.id} value={book.id}>
                {book.ad}
              </option>
            ))}
          </select>

          <div className="flex gap-4">
            <input
              type="date"
              value={borrowDate}
              onChange={e => setBorrowDate(e.target.value)}
              className="border p-2 flex-1"
              placeholder="Alım Tarihi"
            />
            <input
              type="date"
              value={returnDate}
              onChange={e => setReturnDate(e.target.value)}
              className="border p-2 flex-1"
              placeholder="İade Tarihi"
            />
          </div>

          <button
            onClick={handleLoanSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Ödünç Ver
          </button>
        </div>
      )}
    </div>
  );
};

export default LoanManagement;
