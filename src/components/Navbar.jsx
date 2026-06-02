import React from "react";
import { BookOpen, Moon, Sun } from "lucide-react";
import SearchBar from "./SearchBar";
const Navbar = ({ onSearch, onHome, onToggleTheme, isDark }) => {
  return (
    <>
      <div className=" w-[90%] md:w-[80%] mx-auto mt-5 md:mt-6 rounded-3xl bg-slate-950/90 text-white backdrop-blur border border-white/10 shadow-xl md:rounded-2xl md:bg-white/80 md:text-slate-900 md:border-slate-200/70 dark:bg-slate-900/80 dark:text-white dark:border-white/10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4 py-4 md:px-5 md:py-5">
          <div className="flex w-full items-center justify-between md:w-auto">
            <button
              type="button"
              onClick={onHome}
              className="flex items-center gap-3 text-left group"
              aria-label="Go to homepage"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white group-hover:bg-white/20 transition md:bg-amber-300/20 md:text-amber-700 md:group-hover:bg-amber-300/30 dark:md:bg-amber-300/10 dark:md:text-amber-200 dark:md:group-hover:bg-amber-300/20">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <h1 className="text-xl font-semibold tracking-tight group-hover:text-white md:text-2xl md:group-hover:text-amber-700 dark:md:group-hover:text-amber-100">
                  BookSearch
                </h1>
              </div>
            </button>
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
          <div className="flex w-full flex-col gap-3 md:w-auto">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
