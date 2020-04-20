import styled from 'styled-components';

export const RankingContainer = styled.div`
  flex: 0 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #3c3c3c;
  margin-right: 3%;
  border-radius: 5%;
  background-color: #1c1c1c;
`;

export const RankingTitle = styled.h2`
  border-bottom: 1px solid #3c3c3c;
  flex: 0 0 10%;
  margin: 0;
  color: #bfa34b;
`;

export const RankInfosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-between;
  padding: 3% 3%;
  line-height: 150%;
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
