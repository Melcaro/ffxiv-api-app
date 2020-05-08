import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IdentityContainer = styled.div`
  width: 90%;
  border: 1px solid #3c3c3c;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 1%;
  margin-bottom: 2%;
  padding-bottom: 2%;
  text-align: left;
`;

export const CharacterName = styled.h2`
  flex: 0 0 100%;
  color: #bfa34b;
  border-bottom: 1px solid #3c3c3c;
`;

export const IdentityDetail = styled.div`
  width: 100%;
  margin-bottom: 1%;
`;
export const MultiDetails = styled.div`
  width: 100%;
  margin-bottom: 1%;
  display: flex;
  justify-content: flex-start;
`;

export const Detail = styled.div`
  flex: 0 0 30%;
`;

export const SpanCategory = styled.span`
  font-weight: bold;
  width: 25%;
`;

export const SpanValue = styled.span`
  width: 50%;
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
