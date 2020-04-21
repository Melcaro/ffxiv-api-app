import styled from 'styled-components';

export const FocusContainer = styled.div`
  flex: 0 0 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #3c3c3c;
  margin-right: 3%;
  border-radius: 5%;
  background-color: #1c1c1c;
`;

export const FocusTitle = styled.h2`
  border-bottom: 1px solid #3c3c3c;
  flex: 0 0 10%;
  margin: 0;
  color: #bfa34b;
`;

export const FocusInfosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 1%;
  margin-left: 2%;
`;

export const ActivityContainer = styled.div`
  flex: 0 0 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1%;
  width: 48%;
  margin-left: 5%;
`;

export const IconContainer = styled.div`
  flex: 0 0 20%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ActivityName = styled.p`
  flex: 0 0 75%;
  font-size: 0.9em;
  text-align: left;
  margin-left: 3%;
`;
