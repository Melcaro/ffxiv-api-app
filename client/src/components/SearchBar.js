import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  getFreeCompanyInformations,
  getMembersSearchResults,
} from '../services/fetchDataSrv';

import { SearchResults } from './SearchResults';

export class SearchBar extends Component {
  state = {
    query: '',
    results: [],
    freeCompanyButtonClicked: false,
    memberButtonClicked: false,
  };

  toggleSearch = ({ target: { name: buttonName } }) => {
    this.setState({ [buttonName]: !this.state[buttonName] });
  };
  onChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  searchFreeCompanyResults = async () => {
    const { data: results } = await getFreeCompanyInformations(
      this.state.query
    );
    this.setState({ results });
  };

  searchMembersResults = async () => {
    const { data: results } = await getMembersSearchResults(this.state.query);
    this.setState({ results });
  };

  clearResults = () => {
    this.setState({
      query: '',
      results: [],
      freeCompanyButtonClicked: false,
      memberButtonClicked: false,
    });
  };

  render() {
    const {
      results,
      freeCompanyButtonClicked,
      memberButtonClicked,
    } = this.state;
    return (
      <div>
        <p>
          You can see our free company's page,the most salted guild in all
          Eorzea:{' '}
          <Link to="/freeCompany/9232660711086328552">The Salted Kitten</Link>{' '}
          (aka "Les Chatons Salés" in Moliere's tongue) , or you can search for
          a
          <button name="freeCompanyButtonClicked" onClick={this.toggleSearch}>
            FreeCompany
          </button>
          or a
          <button name="memberButtonClicked" onClick={this.toggleSearch}>
            Member
          </button>
        </p>

        {freeCompanyButtonClicked && (
          <div>
            <input
              placeholder="Enter the name of a free company"
              onChange={this.onChange}
              value={this.state.query}
            />
            <button onClick={this.searchFreeCompanyResults}>Search</button>
          </div>
        )}

        {memberButtonClicked && (
          <div>
            <input
              placeholder="Enter the name of a player..."
              onChange={this.onChange}
              value={this.state.query}
            />
            <button onClick={this.searchMembersResults}>Search</button>
          </div>
        )}

        {results && (
          <SearchResults
            searchResults={results}
            clearResults={this.clearResults}
          />
        )}
      </div>
    );
  }
}
