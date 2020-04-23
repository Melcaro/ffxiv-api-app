import React from 'react';
import { Link } from 'react-router-dom';

import {
  ResultsContainer,
  Result,
  ResultName,
  BoldCategory,
  AvatarPicContainer,
  AvatarImg,
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
      <div>
        {freeCompanyResults.map(({ id, name, server }) => (
          <Result to={`/freeCompany/${id}`} key={id} onClick={clearResults}>
            <ResultName>
              <BoldCategory>Company:</BoldCategory> {name}
            </ResultName>
            <ResultName>
              <BoldCategory>Server:</BoldCategory> {server}{' '}
            </ResultName>
          </Result>
        ))}
      </div>
    );

    const membersPrints = memberResults && (
      <div>
        {memberResults.map(({ id, avatar, name, server }) => (
          <Result to={`/character/${id}`} key={id} onClick={clearResults}>
            <AvatarPicContainer>
              <AvatarImg src={avatar} alt="character avatar" />
            </AvatarPicContainer>
            <ResultName>
              <BoldCategory>Name:</BoldCategory> {name}
            </ResultName>
            <ResultName>
              <BoldCategory>Server:</BoldCategory> {server}{' '}
            </ResultName>
          </Result>
        ))}
      </div>
    );
    return (
      <ResultsContainer>
        <div>{freeCompanyPrints}</div>
        <div>{membersPrints}</div>
      </ResultsContainer>
    );
  }
}
