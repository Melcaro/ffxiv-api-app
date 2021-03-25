import React from 'react';

import {
  FocusContainer,
  FocusTitle,
  FocusInfosContainer,
  ActivityContainer,
  IconContainer,
  Img,
  ActivityName,
} from '../../styles/FCFocusStyle';

export const FCFocus = ({ focus }) => {
  return (
    <FocusContainer>
      <FocusTitle>FOCUS</FocusTitle>
      <FocusInfosContainer>
        {focus &&
          focus.map(
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
      </FocusInfosContainer>
    </FocusContainer>
  );
};
