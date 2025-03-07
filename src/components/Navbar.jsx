import React from "react";
import SearchBar from "./SearchBar";
const Navbar = ({ onSearch }) => {
  return (
    <>
      <div className="sm:flex sm:justify-between sm:container sm:w-[80%] sm:mx-auto sm:items-center sm:px-4 sm:py-6 sm:text-white sm:mt-6 sm:bg-gray-800 sm:shadow-lg sm:shadow-black/30 sm:font-bold sm:text-xl sm:rounded-full">
        {" "}
        <h1 className="sm:text-3xl sm:text-emerald-50 sm:font-bold hidden sm:block">
          Books.
        </h1>
        {/* <ul className="flex justify-center items-center gap-6">
          <li>Home</li>
          <li>About</li>
        </ul> */}
        <SearchBar onSearch={onSearch} />
      </div>
    </>
  );
};

export default Navbar;
