import React from 'react';
import { Link } from 'react-router-dom';

export const SearchResults = ({ searchResults, clearResults }) => {
  return (
    <div>
      {searchResults.map(({ id, name, server }) => (
        <Link to={`/freeCompany/${id}`} key={id} onClick={clearResults}>
          <span>Company: </span>
          {name} / <span>Server: </span>
          {server}
        </Link>
      ))}
    </div>
  );
};
