import React, { Component } from 'react';

import {
  SearchBarContainer,
  SearchBarText,
  SearchBarButton,
  SearchAreas,
  SearchByType,
  InputContainer,
  SearchBarInput,
  MyFreeCompanyName,
} from '../styles/SearchBarStyle';
import {
  getFreeCompanyInformations,
  getMembersSearchResults,
} from '../services/fetchDataSrv';

import { SearchResults } from './SearchResults';

export class SearchBar extends Component {
  state = {
    query: '',
    freeCompanyResults: [],
    memberResults: [],
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
    this.setState({ freeCompanyResults: results });
  };

  searchMembersResults = async () => {
    const { data: results } = await getMembersSearchResults(this.state.query);
    console.log(results);
    this.setState({ memberResults: results });
  };

  clearResults = () => {
    this.setState({
      query: '',
      freeCompanyResults: [],
      memberResults: [],
      freeCompanyButtonClicked: false,
      memberButtonClicked: false,
    });
  };

  render() {
    const {
      freeCompanyResults,
      memberResults,
      freeCompanyButtonClicked,
      memberButtonClicked,
    } = this.state;
    return (
      <SearchBarContainer>
        <SearchAreas>
          <SearchBarText>
            You can see our free company's page,the most dirty guild in all
            Eorzea:{' '}
            <MyFreeCompanyName to="/freeCompany/9232660711086328552">
              The Dirty Kitten
            </MyFreeCompanyName>{' '}
            (aka "Les Chatons Sales" in Moliere's tongue) , or you can search
            for
          </SearchBarText>

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

        {(freeCompanyResults && (
          <SearchResults
            freeCompanyResults={freeCompanyResults}
            memberResults={memberResults}
            clearResults={this.clearResults}
          />
        )) ||
          (memberResults && (
            <SearchResults
              freeCompanyResults={freeCompanyResults}
              memberResults={memberResults}
              clearResults={this.clearResults}
            />
          )) }
      </SearchBarContainer>
    );
  }
}
