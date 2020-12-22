import React from 'react';

const Search = ({ queryString = '', handleChange }) => (
    <input
        type="text"
        placeholder="Search Restaurant..."
        value={queryString || ''}
        onChange={(e) => handleChange(e.target.value)}
    />
);

export default Search;
