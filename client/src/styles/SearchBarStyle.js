import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchBarContainer = styled.div`
  flex: 0 0 5%;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const SearchAreas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  background-color: #1c1c1c;
  opacity: 0.9;
`;

export const SearchBarText = styled.p`
  font-size: 1.1em;
  width: 100%;
  text-align: center;
`;
export const MyFreeCompanyName = styled(Link)`
  text-decoration: none;
  color: #bfa34b;
  font-weight: bold;
`;

export const SearchByType = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5%;
  padding-left: 3%;
  padding-bottom: 1%;
`;

export const SearchBarButton = styled.button`
  flex: 0 0 20%;
  background-color: #ccc;
  color: #1c1c1c;
  font-size: 1em;
  border-radius: 1%;
`;

export const InputContainer = styled.div`
  flex: 0 0 70%;
  display: flex;
  justify-content: space-between;
`;

export const SearchBarInput = styled.input`
  font-size: 1em;
  flex: 0 0 70%;
`;
