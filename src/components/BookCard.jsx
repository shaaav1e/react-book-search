import React from "react";

const BookCard = ({ book, onSeeMore }) => {
  const {
    title = "No Title Available on the Web",
    authors = ["Unknown Authors"],
    imageLinks = {},
  } = book.volumeInfo;
  const thumbnail = imageLinks.thumbnail || "https://placehold.co/180x280";
  return (
    <div className="flex flex-col items-center justify-center px-4 py-4 bg-white/80 text-slate-900 rounded-xl text-center mt-3 space-y-3 border border-slate-200 shadow-lg dark:bg-slate-900/80 dark:text-gray-200 dark:border-white/10">
      <img
        className="object-cover h-48 w-32 rounded-md shadow-md"
        src={thumbnail}
        alt={title}
      />
      <p className="font-semibold text-lg min-h-[3rem]">
        {title}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        {authors.join(", ")}
      </p>
      <div className="flex items-center ">
        <button
          onClick={() => onSeeMore(book)}
          className="btn btn-sm"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BookCard;
// book.volumeInfo.imageLinks.thumbnail;
