import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookCard from "./components/BookCard";
import fetchBooks from "./services/api-client";
import useBooks from "./services/useBooks";
const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const { books, loading, setSearchTerm } = useBooks("Python");

  function handleSearch(query) {
    setSearchTerm(query);
  }
  function handleSeeMore(book) {
    setSelectedBook(book);
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
      {selectedBook && <p>{selectedBook.volumeInfo.description}</p>}
      {/* <BookCard books={books} /> */}
    </div>
  );
};

export default App;
