import styled from 'styled-components';
import { background } from './background.jpg';

export const StyledLoader = styled.div`
  margin: 0 auto;
  background-color: #1c1c1c;
  width: 25vw;
`;

export const LoaderTitle = styled.h2`
  font-size: 2em;
  color: #bfa34b;
`;

export const HomePageContainer = styled.div`
  margin: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 3%;
  background: ${background};
`;

export const FCInfosContainer = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
