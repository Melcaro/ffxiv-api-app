import styled from 'styled-components';

export const SeekingContainer = styled.div`
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  border: 1px solid #3c3c3c;
  border-radius: 5%;
  background-color: #1c1c1c;
`;

export const SeekingTitle = styled.h2`
  border-bottom: 1px solid #3c3c3c;
  flex: 0 0 10%;
  margin: 0;
  color: #bfa34b;
`;

export const SeekingInfosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3% 3%;
`;

export const ActivityContainer = styled.div`
  flex: 0 0 10%;
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  flex: 0 0 45%;
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const ActivityName = styled.p`
  flex: 0 0 30%;
  font-size: 0.7em;
  margin: 0;
`;
