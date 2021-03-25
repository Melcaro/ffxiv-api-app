import React from 'react';

import {
  SeekingContainer,
  SeekingTitle,
  SeekingInfosContainer,
  ActivityContainer,
  IconContainer,
  Img,
  ActivityName,
} from '../../styles/FCSeekingStyle';

export const FCSeeking = ({ seeking }) => {
  return (
    <SeekingContainer>
      <SeekingTitle>SEEKING</SeekingTitle>
      <SeekingInfosContainer>
        {seeking &&
          seeking.map(
            ({ Icon, Name, Status }) =>
              Status && (
                <ActivityContainer>
                  <IconContainer>
                    <Img src={Icon} alt="activity icon" />
                  </IconContainer>
                  <ActivityName>{Name}</ActivityName>
                </ActivityContainer>
              )
          )}
      </SeekingInfosContainer>
    </SeekingContainer>
  );
};
