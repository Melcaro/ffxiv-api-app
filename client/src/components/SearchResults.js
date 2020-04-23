import React from 'react';
import { Link } from 'react-router-dom';

import {
  ResultsContainer,
  Result,
  ResultName,
  BoldCategory,
} from '../styles/SearchResultsStyle';

export const SearchResults = ({ searchResults, clearResults }) => {
  return (
    <ResultsContainer>
      {searchResults.map(({ id, name, server }) => (
        <Result to={`/freeCompany/${id}`} key={id} onClick={clearResults}>
          <ResultName>
            <BoldCategory>Company:</BoldCategory> {name}
          </ResultName>
          <ResultName>
            <BoldCategory>Server:</BoldCategory> {server}{' '}
          </ResultName>
        </Result>
      ))}
    </ResultsContainer>
  );
};
