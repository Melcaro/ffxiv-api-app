import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  SearchBarContainer,
  SearchBarText,
  SearchBarButton,
  SearchAreas,
  SearchByType,
  InputContainer,
  SearchBarInput,
} from '../styles/SearchBarStyle';
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
      <SearchBarContainer>
        <SearchBarText>
          You can see our free company's page,the most dirty guild in all
          Eorzea:{' '}
          <Link to="/freeCompany/9232660711086328552">The Dirty Kitten</Link>{' '}
          (aka "Les Chatons Sales" in Moliere's tongue) , or you can search for
        </SearchBarText>

        <SearchAreas>
          <SearchByType>
            <SearchBarButton
              name="freeCompanyButtonClicked"
              onClick={this.toggleSearch}
            >
              FreeCompany
            </SearchBarButton>
            {freeCompanyButtonClicked && (
              <InputContainer>
                <SearchBarInput
                  placeholder="Enter the name of a free company"
                  onChange={this.onChange}
                  value={this.state.query}
                />
                <SearchBarButton onClick={this.searchFreeCompanyResults}>
                  Search
                </SearchBarButton>
              </InputContainer>
            )}
          </SearchByType>

          <SearchByType>
            <SearchBarButton
              name="memberButtonClicked"
              onClick={this.toggleSearch}
            >
              Member
            </SearchBarButton>

            {memberButtonClicked && (
              <InputContainer>
                <SearchBarInput
                  placeholder="Enter the name of a character"
                  onChange={this.onChange}
                  value={this.state.query}
                />
                <SearchBarButton onClick={this.searchMembersResults}>
                  Search
                </SearchBarButton>
              </InputContainer>
            )}
          </SearchByType>
        </SearchAreas>

        {results && (
          <SearchResults
            searchResults={results}
            clearResults={this.clearResults}
          />
        )}
      </SearchBarContainer>
    );
  }
}
