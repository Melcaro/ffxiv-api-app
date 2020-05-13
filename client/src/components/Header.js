import React from 'react';

import {
  HeaderContainer,
  HeaderTitle,
  HeaderDescription,
  LinkToAbout,
} from '../styles/HeaderStyle';

export const Header = () => {
  return (
    <HeaderContainer to="/">
      <HeaderTitle>Final Fantasy XIV App</HeaderTitle>
      <HeaderDescription>
        Welcome on this page using Final Fantasy XIV REST API to find
        informations about Free Companies created by players and their members.
        More informations <LinkToAbout to="/about">here</LinkToAbout>.
      </HeaderDescription>
    </HeaderContainer>
  );
};
