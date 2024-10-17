// src/SearchBar.js

import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
        setQuery(''); // Clear the input after search
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search here what you want to explore...."
            />
            <button className="search-button" onClick={handleSearch}>
                Explore
            </button>
        </div>
    );
};

export default SearchBar;
