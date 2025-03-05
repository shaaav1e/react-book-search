import React from "react";
import SearchBar from "./SearchBar";
const Navbar = ({ onSearch }) => {
  return (
    <>
      <div className="flex justify-between container w-[80%] mx-auto items-center px-4 py-6  text-white mt-6  bg-gray-800 shadow-lg shadow-black/30font-bold text-xl  rounded-full">
        <h1 className="text-3xl text-emerald-50 font-bold">ReadaR.</h1>
        <ul className="flex justify-center items-center gap-6">
          <li>Home</li>
          <li>About</li>
        </ul>
        <SearchBar onSearch={onSearch} />
      </div>
    </>
  );
};

export default Navbar;
