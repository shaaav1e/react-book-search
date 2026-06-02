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
      <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full md:w-auto">
        <div className="flex items-center gap-2 px-1 py-2 w-full md:w-[360px] border-b border-slate-500/50">
          <Search className="h-4 w-4 text-slate-200" />
          <input
            type="text"
            value={searchterm}
            placeholder="Search by title, author, topic"
            className="w-full bg-transparent text-slate-100 placeholder:text-slate-400 focus:outline-none"
            onChange={(e) => setSearchterm(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-amber-300 text-slate-900 px-4 py-2 font-semibold hover:bg-amber-200 shadow-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
