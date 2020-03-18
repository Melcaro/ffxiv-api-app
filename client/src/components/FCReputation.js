import React from 'react';

import {
  ReputationContainer,
  ReputationTitle,
  ReputationInfosContainer,
  GCReputationContainer,
  GCInfos,
  ReputationProgress,
  BoldedSubtitle,
} from '../styles/FCReputationStyle';

export const FCReputation = ({ reputation }) => {
  return (
    <ReputationContainer>
      <ReputationTitle>REPUTATION</ReputationTitle>
      <ReputationInfosContainer>
        {reputation &&
          reputation.map(({ Name, Progress, Rank }) => (
            <GCReputationContainer>
              <GCInfos>{Name}</GCInfos>
              <ReputationProgress>{Progress}</ReputationProgress>
              <GCInfos>
                <BoldedSubtitle>Rank: </BoldedSubtitle>
                {Rank}
              </GCInfos>
            </GCReputationContainer>
          ))}
      </ReputationInfosContainer>
    </ReputationContainer>
  );
};
