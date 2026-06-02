import React from "react";
import { BookOpen } from "lucide-react";
import SearchBar from "./SearchBar";
const Navbar = ({ onSearch }) => {
  return (
    <>
      <div className="container w-[92%] md:w-[80%] mx-auto mt-6 rounded-2xl bg-slate-900/80 backdrop-blur border border-white/10 shadow-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-5 py-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/10 text-amber-200">
              <BookOpen className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-2xl md:text-3xl text-white font-semibold tracking-tight">
                BookSearch
              </h1>
              <p className="text-sm text-slate-300">
                Discover books and hidden gems.
              </p>
            </div>
          </div>
        {/* <ul className="flex justify-center items-center gap-6">
          <li>Home</li>
          <li>About</li>
        </ul> */}
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
