import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchBarContainer = styled.div`
  flex: 0 0 5%;
  width: 60%;
  background-color: #1c1c1c;
  opacity: 0.9;
  padding: 0.5% 1%;
`;

export const SearchBarText = styled.p`
  font-size: 1.1em;
`;
export const MyFreeCompanyName = styled(Link)`
  text-decoration: none;
  color: #bfa34b;
  font-weight: bold;
`;

export const SearchAreas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40%;
  margin: 0 auto;
`;

export const SearchByType = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2%;
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
`;

export const SearchBarInput = styled.input`
  font-size: 1em;
  flex: 0 0 70%;
  margin: 0 3%;
`;
