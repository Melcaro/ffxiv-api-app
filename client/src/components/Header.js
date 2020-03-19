import React from 'react';

import {
  HeaderContainer,
  HeaderTitle,
  HeaderDescription,
} from '../styles/HeaderStyle';

export const Header = () => {
  return (
    <HeaderContainer to="/">
      <HeaderTitle>The Salted Kitten Club</HeaderTitle>
      <HeaderDescription>
        Welcome on the official page of the most salted guild in all Eorzea: The
        Salted Kitten (aka "Les Chatons Salés" in Moliere's tongue)
      </HeaderDescription>
    </HeaderContainer>
  );
};
