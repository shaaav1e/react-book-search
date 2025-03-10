import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchterm, setSearchterm] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchterm);
    setSearchterm("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchterm}
          placeholder="Search..."
          className="rounded-full px-4 py-2 bg-white text-gray-600 focus:outline-none mt-5 sm:mt-0 mx-20 sm:mx-0"
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
