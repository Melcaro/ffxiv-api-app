import styled from 'styled-components';

export const AttributesContainer = styled.div`
  flex: 0 0 30%;
  border: 1px solid #3c3c3c;
  background-color: #1c1c1c;
  display: flex;
  flex-wrap: wrap;
  margin-left: 1%;
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
  align-items: center;
`;

export const ClassContainer = styled.div`
  flex: 0 0 45%;
  text-align: left;
  padding-bottom: 1%;
`;

export const ClassName = styled.span`
  font-weight: bold;
`;
