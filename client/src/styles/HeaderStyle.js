import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled(Link)`
  margin: 1% auto;
  width: 50vw;
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  background-color: #1c1c1c;
`;

export const HeaderTitle = styled.h1`
  font-size: 2em;
  color: #bfa34b;
`;

export const HeaderDescription = styled.p`
  font-size: 1.5em;
  color: #ccc;
`;
