import React from 'react';

import {
  ResultsContainer,
  ResultLink,
  ResultName,
  BoldCategory,
  AvatarPicContainer,
  AvatarImg,
  TypeResults,
  Results,
  MembersResultLink,
  MemberInfos,
} from '../styles/SearchResultsStyle';

export class SearchResults extends React.Component {
  state = {
    shouldRender: false,
  };
  componentDidUpdate(prevProps) {
    if (this.props.freeCompanyResults !== prevProps.freeCompanyResults) {
      this.setState({ shouldRender: !this.state.shouldRender });
    } else if (this.props.memberResults !== prevProps.memberResults) {
      this.setState({ shouldRender: !this.state.shouldRender });
    }
  }

  render() {
    const { freeCompanyResults, memberResults, clearResults } = this.props;

    const freeCompanyPrints = freeCompanyResults && (
      <Results>
        {freeCompanyResults.map(({ id, name, server }) => (
          <ResultLink to={`/freeCompany/${id}`} key={id} onClick={clearResults}>
            <ResultName>
              <BoldCategory>Company:</BoldCategory> {name}
            </ResultName>
            <ResultName>
              <BoldCategory>Server:</BoldCategory> {server}{' '}
            </ResultName>
          </ResultLink>
        ))}
      </Results>
    );

    const membersPrints = memberResults && (
      <Results>
        {memberResults.map(({ id, avatar, name, server }) => (
          <MembersResultLink
            to={`/character/${id}`}
            key={id}
            onClick={clearResults}
          >
            <AvatarPicContainer>
              <AvatarImg src={avatar} alt="character avatar" />
            </AvatarPicContainer>
            <MemberInfos>
              <ResultName>
                <BoldCategory>Name:</BoldCategory> {name}
              </ResultName>
              <ResultName>
                <BoldCategory>Server:</BoldCategory> {server}{' '}
              </ResultName>
            </MemberInfos>
          </MembersResultLink>
        ))}
      </Results>
    );
    return (
      <ResultsContainer>
        <TypeResults>{freeCompanyPrints}</TypeResults>
        <TypeResults>{membersPrints}</TypeResults>
      </ResultsContainer>
    );
  }
}
