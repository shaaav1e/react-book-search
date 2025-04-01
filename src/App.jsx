import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookCard from "./components/BookCard";
import fetchBooks from "./services/api-client";
import useBooks from "./services/useBooks";
import BookDetail from "./components/BookDetail";
import Footer from "./components/Footer";
const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const { books, loading, setSearchTerm } = useBooks("Physics");

  function handleSearch(query) {
    setSearchTerm(query);
  }
  function handleSeeMore(book) {
    setSelectedBook(book.volumeInfo);
  }
  function handleCloseModal() {
    setSelectedBook(null);
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {loading ? (
        <p className="text-center font-bold text-2xl mt-5 text-white">
          Loading...
        </p>
      ) : (
        <BookList books={books} onSeeMore={handleSeeMore} />
      )}
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={handleCloseModal} />
      )}
      {/* if selected book is null or undefined, it is false - This is conditional rendering - instead of using ternary*/}
      <Footer />
    </div>
  );
};

export default App;
