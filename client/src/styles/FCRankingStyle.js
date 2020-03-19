import styled from 'styled-components';

export const RankingContainer = styled.div`
  flex: 0 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black;
  margin-right: 3%;
  border-radius: 5%;
`;

export const RankingTitle = styled.h2`
  border-bottom: 1px solid black;
  flex: 0 0 10%;
  margin: 0;
`;

export const RankInfosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 3%;
`;

export const RankInfo = styled.p`
  flex: 0 0 100%;
  text-align: left;
  margin: 0;
`;

export const PeriodicRank = styled.span`
  flex: 0 0 100%;
  text-align: left;
`;

export const BoldedSubtitle = styled.span`
  font-weight: bold;
`;
