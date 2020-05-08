import styled from 'styled-components';

export const AttributesContainer = styled.div`
  width: 90%;
  border: 1px solid #3c3c3c;
  background-color: #1c1c1c;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.5%;
`;

export const ContainerName = styled.h2`
  flex: 0 0 100%;
  color: #bfa34b;
  text-align: left;
  border-bottom: 1px solid #3c3c3c;
`;

export const ClassLists = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ClassContainer = styled.div`
  flex: 0 0 10%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
`;

export const IconContainer = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
`;

export const JobIcon = styled.img`
  width: 100%;
`;

export const ClassName = styled.span`
  font-weight: bold;
`;
