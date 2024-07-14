import { useState } from 'react';

const Search = ({ searchValue, setSearchValue }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-[400px] mb-4">
      <input
        type="text"
        value={searchValue}
        placeholder="Search Song, Artist"
        className="w-full p-2 pl-5 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {!isFocused && (
        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 transition-opacity duration-300">
          <i className="fas fa-search"></i>
        </div>
      )}
    </div>
  );
};

export default Search;
