import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultsContainer = styled.div`
  width: 55%;
  margin: 1% auto;
  background-color: #1c1c1c;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Result = styled(Link)`
  flex: 0 0 40%;
  text-decoration: none;
  text-align: left;
  padding: 0.5%;
  color: #ccc;
  font-size: 1.1em;
`;

export const ResultName = styled.p`
  margin: 0;
`;

export const BoldCategory = styled.span`
  font-weight: bold;
`;

export const AvatarPicContainer = styled.div`
  width: 20%;
`;

export const AvatarImg = styled.img`
  width: 100%;
`;
