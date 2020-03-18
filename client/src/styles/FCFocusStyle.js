import styled from 'styled-components';

export const FocusContainer = styled.div`
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black;
`;

export const FocusTitle = styled.h2`
  border-bottom: 1px solid black;
  flex: 0 0 10%;
  margin: 0;
`;

export const FocusInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 26vh;
  margin-top: 1%;
`;

export const ActivityContainer = styled.div`
  flex: 0 0 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1%;
  margin-bottom: 1%;
  width: 48%;
`;

export const IconContainer = styled.div`
  flex: 0 0 25%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ActivityName = styled.p`
  flex: 0 0 75%;
  font-size: 0.9em;
  text-align: left;
  margin-left: 1%;
  margin: 0;
`;
