import styled from 'styled-components';

export const ReputationContainer = styled.div`
  flex: 0 0 20%;
  border: 1px solid #3c3c3c;
  display: flex;
  flex-direction: column;
  margin-right: 3%;
  border-radius: 5%;
  background-color: #1c1c1c;
`;

export const ReputationTitle = styled.h2`
  border-bottom: 1px solid #3c3c3c;
  color: #bfa34b;
  flex: 0 0 10%;
  margin: 0;
`;

export const ReputationInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const GCReputationContainer = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3% 3%;
  border-bottom: 1px solid #3c3c3c;
`;

export const GCInfos = styled.p`
  flex: 0 0 10%;
  text-align: left;
  margin: 0;
`;

export const ProgressContainer = styled.div`
  flex: 0 0 5%;
  min-height: 5%;
  border: 1px solid green;
  width: 70%;
  margin: 3% 0;
`;
export const ReputationProgress = styled.div`
  background-color: green;
  color: white;
  font-size: 0.6em;
  border-radius: 5%;
  width: ${(props) => props.progress}%;
  height: 100%;
`;

export const BoldedSubtitle = styled.span`
  font-weight: bold;
`;
