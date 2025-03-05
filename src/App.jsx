import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookCard from "./components/BookCard";
const App = () => {
  const [books, setBooks] = useState([]);
  const [searchterm, setSearchTerm] = useState("javascript");
  const [loading, setLoading] = useState(false);

  // ✅ Fetch data when searchterm changes
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      console.log(`Fetching books for: ${searchterm}`); // ✅ Check if this logs
      const output = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchterm}`
      );
      const data = await output.json();
      setBooks(data.items || []);
      console.log("Fetched Books:", data.items); // ✅ Should log the books
      setLoading(false);
    };

    fetchData();
  }, [searchterm]); // ✅ Runs when searchterm changes

  function handleSearch(query) {
    console.log("Search term updated to:", query); // ✅ Check if this logs
    setSearchTerm(query);
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {loading ? (
        <p className="text-center font-bold text-2xl mt-5 text-white">
          Loading...
        </p>
      ) : (
        <BookList books={books} />
      )}
      {/* <BookCard books={books} /> */}
    </div>
  );
};

export default App;
