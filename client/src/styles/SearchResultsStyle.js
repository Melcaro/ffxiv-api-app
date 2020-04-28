import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultsContainer = styled.div`
  width: 50%;
  margin: 1% auto;
  background-color: #1c1c1c;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TypeResults = styled.div`
  /* flex: 0 0 100%; */
`;

export const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1%;
`;

export const ResultLink = styled(Link)`
  flex: 0 0 45%;
  text-decoration: none;
  text-align: left;
  padding: 1%;
  color: #ccc;
  font-size: 1em;
`;

export const MembersResultLink = styled(Link)`
  flex: 0 0 30%;
  text-decoration: none;
  text-align: left;
  color: #ccc;
  display: flex;
  font-size: 1em;
  margin-bottom: 3%;
`;

export const ResultName = styled.p`
  margin: 0;
`;

export const BoldCategory = styled.span`
  font-weight: bold;
`;

export const AvatarPicContainer = styled.div`
  flex: 0 0 20%;
`;
export const MemberInfos = styled.div`
  flex: 0 0 75%;
  padding-left: 2%;
`;

export const AvatarImg = styled.img`
  width: 100%;
`;
