import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled(Link)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: black;
`;

export const HeaderTitle = styled.h1`
  font-size: 2em;
`;

export const HeaderDescription = styled.p`
  font-size: 1.5em;
`;
