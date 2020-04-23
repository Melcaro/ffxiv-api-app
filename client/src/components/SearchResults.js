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

  componentWillReceiveProps() {
    this.setState((prevState, prevProps) => {
      if (this.props.freeCompanyResults !== prevProps.freeCompanyResults) {
        return {
          shouldRender: true,
        };
      } else if (this.props.memberResults !== prevProps.memberResults) {
        return {
          shouldRender: true,
        };
      }
    });
  }
  render() {
    const { freeCompanyResults, memberResults, clearResults } = this.props;
    console.log(memberResults);
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
    return <ResultsContainer>{membersPrints}</ResultsContainer>;
  }
}
