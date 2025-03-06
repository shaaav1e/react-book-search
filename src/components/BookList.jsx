import React from "react";
import BookCard from "./BookCard";
const BookList = ({ books, onSeeMore }) => {
  return (
    <div className="container w-[80%] mx-auto grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        // <div className="container w-[80%] mx-auto" key={book.id}>
        // <p>{book.volumeInfo.title}</p>
        // </div>
        <BookCard key={book.id} book={book} onSeeMore={onSeeMore} />
      ))}
    </div>
  );
};

export default BookList;
// rounded-full mt-5 text-center border  py-6 shadow-lg shadow-zinc-700 text-black bg-white w-1/2 font-bold text-xl
