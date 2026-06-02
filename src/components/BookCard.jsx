import React from "react";

const BookCard = ({ book, onSeeMore }) => {
  const {
    title = "No Title Available on the Web",
    authors = ["Unknown Authors"],
    imageLinks = {},
  } = book.volumeInfo;
  const thumbnail = imageLinks.thumbnail || "https://placehold.co/180x280";
  return (
    <div className="flex flex-col items-center justify-center px-4 py-4 bg-slate-900/80 text-gray-200 rounded-xl text-center mt-3 space-y-3 border border-white/10 shadow-lg">
      <img
        className="object-cover h-48 w-32 rounded-md shadow-md"
        src={thumbnail}
        alt={title}
      />
      <p className="font-semibold text-lg min-h-[3rem]">
        {title}
      </p>
      <p className="text-xs text-slate-400">
        {authors.join(", ")}
      </p>
      <div className="flex items-center ">
        <button
          onClick={() => onSeeMore(book)}
          className="rounded-full px-4 py-2 bg-amber-300 text-slate-900 hover:bg-amber-200 flex gap-1 items-center font-semibold"
        >
          <span>Read More</span>
          <span>{/* <i className="ri-book-open-line"></i> */}</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
// book.volumeInfo.imageLinks.thumbnail;
