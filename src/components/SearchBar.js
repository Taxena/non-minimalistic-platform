import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar-input"
          value={query}
          onChange={handleChange}
          placeholder="Search by transaction, block, or address..."
        />
        <button type="submit" className="search-bar-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
