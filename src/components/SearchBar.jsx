import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [searchterm, setSearchterm] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchterm);
    setSearchterm("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:w-auto">
        <div className="flex items-center gap-2 px-2 py-2 w-full sm:w-[320px] md:w-[360px] border-b border-slate-300/80 focus-within:border-slate-900 transition dark:border-white/20 dark:focus-within:border-amber-200/70">
          <Search className="h-4 w-4 text-slate-500 dark:text-slate-300" />
          <input
            type="text"
            value={searchterm}
            placeholder="Search by title, author, topic"
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-500 focus:outline-none dark:text-white dark:placeholder:text-slate-400"
            onChange={(e) => setSearchterm(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-sm w-full sm:w-auto"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
