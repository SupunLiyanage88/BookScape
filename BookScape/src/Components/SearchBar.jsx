import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    language: "",
    author: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query, filters);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Non-Fiction</option>
          <option value="science">Science</option>
          <option value="history">History</option>
        </select>
        <select
          name="language"
          value={filters.language}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Languages</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
        <input
          type="text"
          name="author"
          value={filters.author}
          onChange={handleFilterChange}
          placeholder="Author"
          className="border p-2 rounded"
        />
      </div>
    </form>
  );
};

export default SearchBar;
