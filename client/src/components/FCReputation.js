import React from 'react';

import {
  ReputationContainer,
  ReputationTitle,
  ReputationInfosContainer,
  GCReputationContainer,
  GCInfos,
  ProgressContainer,
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
              <ProgressContainer>
                <ReputationProgress progress={Progress}>
                  {Progress}
                </ReputationProgress>
              </ProgressContainer>
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
