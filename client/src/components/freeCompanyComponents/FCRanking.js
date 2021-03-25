import React from 'react';

import {
  RankingContainer,
  RankingTitle,
  RankInfosContainer,
  RankInfo,
  PeriodicRank,
  BoldedSubtitle,
} from '../../styles/FCRankingStyle';

export const FCRanking = ({ rank, ranking }) => {
  return (
    <RankingContainer>
      <RankingTitle>RANKING</RankingTitle>
      {ranking && (
        <RankInfosContainer>
          <RankInfo>
            <BoldedSubtitle>Rank:</BoldedSubtitle> {rank}
          </RankInfo>
          <PeriodicRank>
            <BoldedSubtitle>Monthly:</BoldedSubtitle>
            {ranking.Monthly}
          </PeriodicRank>
          <PeriodicRank>
            <BoldedSubtitle>Weekly:</BoldedSubtitle>
            {ranking.Weekly}
          </PeriodicRank>
        </RankInfosContainer>
      )}
    </RankingContainer>
  );
};
