import styled from 'styled-components';

export const ReputationContainer = styled.div`
  flex: 0 0 20%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const ReputationTitle = styled.h2`
  border-bottom: 1px solid black;
  flex: 0 0 10%;
  margin: 0;
`;

export const ReputationInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const GCReputationContainer = styled.div`
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1%;
  border-bottom: 1px solid black;
`;

export const GCInfos = styled.p`
  flex: 0 0 10%;
  text-align: left;
  margin: 0;
`;

export const ReputationProgress = styled.div`
  text-align: left;
  flex: 0 0 10%;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const BoldedSubtitle = styled.span`
  font-weight: bold;
`;
