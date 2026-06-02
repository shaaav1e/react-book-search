import React, { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import useBooks from "./services/useBooks";
import BookDetail from "./components/BookDetail";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPreloader, setShowPreloader] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const defaultSearch = "Web Development";
  const { books, loading, setSearchTerm } = useBooks(defaultSearch);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  function handleSearch(query) {
    setSearchTerm(query);
  }
  function handleSeeMore(book) {
    setSelectedBook(book.volumeInfo);
  }
  function handleCloseModal() {
    setSelectedBook(null);
  }
  function handleHome() {
    setSelectedBook(null);
    setSearchTerm(defaultSearch);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleToggleTheme() {
    setIsDark((prev) => !prev);
  }

  return (
    <div className="min-h-screen">
      {showPreloader && (
        <Preloader onFinish={() => setShowPreloader(false)} />
      )}
      <Navbar
        onSearch={handleSearch}
        onHome={handleHome}
        onToggleTheme={handleToggleTheme}
        isDark={isDark}
      />
      {loading && (
        <div className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/90 px-6 py-5 shadow-2xl">
            <LoaderCircle className="h-12 w-12 animate-spin text-amber-500" />
            <p className="text-slate-700 font-semibold">Fetching books...</p>
          </div>
        </div>
      )}
      <main className="mt-6">
        <BookList books={books} onSeeMore={handleSeeMore} />
      </main>
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={handleCloseModal} />
      )}
      {/* if selected book is null or undefined, it is false - This is conditional rendering - instead of using ternary*/}
      <Footer />
    </div>
  );
};

export default App;
