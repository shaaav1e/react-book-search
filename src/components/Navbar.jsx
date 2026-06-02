import React from "react";
import { BookOpen, Moon, Sun } from "lucide-react";
import SearchBar from "./SearchBar";
const Navbar = ({ onSearch, onHome, onToggleTheme, isDark }) => {
  return (
    <>
      <div className="container w-[92%] md:w-[80%] mx-auto mt-6 rounded-2xl bg-white/80 text-slate-900 backdrop-blur border border-slate-200/70 shadow-xl dark:bg-slate-900/80 dark:text-white dark:border-white/10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-5 py-5">
          <button
            type="button"
            onClick={onHome}
            className="flex items-center gap-3 text-left group"
            aria-label="Go to homepage"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/20 text-amber-700 group-hover:bg-amber-300/30 transition dark:bg-amber-300/10 dark:text-amber-200 dark:group-hover:bg-amber-300/20">
              <BookOpen className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-amber-700 transition dark:group-hover:text-amber-100">
                BookSearch
              </h1>
              {/* <p className="text-sm text-slate-300">
                Discover books and hidden gems.
              </p> */}
            </div>
          </button>
        {/* <ul className="flex justify-center items-center gap-6">
          <li>Home</li>
          <li>About</li>
        </ul> */}
          <div className="flex items-center gap-3">
            <SearchBar onSearch={onSearch} />
            <button
              type="button"
              onClick={onToggleTheme}
              className="btn-icon"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
