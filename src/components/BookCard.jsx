import React from "react";

const BookCard = ({ book, onSeeMore }) => {
  const {
    title = "No Title Available on the Web",
    authors = ["Unknown Authors"],
    imageLinks = {},
  } = book.volumeInfo;
  const thumbnail = imageLinks.thumbnail || "https://placehold.co/180x280";
  return (
    <div className="flex flex-col items-center justify-center px-4 py-2 bg-gray-900 text-gray-200 rounded-sm text-center mt-3 space-y-3">
      <img className="object-cover h-48" src={thumbnail} alt={title} />
      <p className="font-bold text-xl">{title}</p>
      <div className="flex items-center ">
        <button
          onClick={() => onSeeMore(book)}
          className=" rounded-sm px-4 py-2 bg-slate-800 text-white hover:bg-white hover:text-slate-800 flex gap-1 items-center"
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
