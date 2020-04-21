import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled(Link)`
  flex: 0 0 10%;
  width: 60%;
  padding: 0 1%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  background-color: #1c1c1c;
  opacity: 0.9;
`;

export const HeaderTitle = styled.h1`
  font-size: 3em;
  width: 30vw;
  margin: 0 auto;
  color: #bfa34b;
  text-align: center;
`;

export const HeaderDescription = styled.p`
  font-size: 1.1em;
  color: #ccc;
  text-align: center;
`;
