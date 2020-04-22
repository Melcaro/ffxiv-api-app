import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IdentityContainer = styled.div`
  width: 90%;
  border: 1px solid #3c3c3c;
  background-color: #1c1c1c;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.5%;
  margin-bottom: 2%;
`;

export const CharacterName = styled.h2`
  flex: 0 0 100%;
  color: #bfa34b;
  text-align: left;
  border-bottom: 1px solid #3c3c3c;
`;

export const IdentityDetail = styled.p`
  flex: 0 0 100%;
  text-align: left;
  margin: 0;
  padding-bottom: 1%;
`;

export const SpanCategory = styled.span`
  font-weight: bold;
`;

export const FCLink = styled(Link)`
  text-decoration: none;
  padding-bottom: 1%;
  color: #ccc;
`;

export const FCName = styled.span`
  color: #bfa34b;
  font-weight: bold;
`;
