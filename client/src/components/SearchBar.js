import React, { Component } from 'react';

import { getFreeCompanyInformations } from '../services/fetchDataSrv';

import { SearchResults } from './SearchResults';

export class SearchBar extends Component {
  state = {
    query: '',
    results: [],
  };

  onChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  searchResults = async () => {
    const { data: results } = await getFreeCompanyInformations(
      this.state.query
    );
    this.setState({ results, query: '' });
  };
  render() {
    const { results } = this.state;
    return (
      <div>
        <input
          placeholder="Enter the name of free company,player..."
          onChange={this.onChange}
        />
        <button onClick={this.searchResults}>Search</button>
        {results && <SearchResults searchResults={results} />}
      </div>
    );
  }
}
