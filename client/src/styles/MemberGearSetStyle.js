import styled from 'styled-components';

export const GearSetContainer = styled.div`
  border: 1px solid #3c3c3c;
  background-color: #1c1c1c;
  flex: 0 0 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5%;
`;

export const PortraitContainer = styled.div`
  flex: 0 0 35%;
  margin-top: 5%;
`;

export const Portrait = styled.img`
  width: 100%;
`;

export const GearSetDetails = styled.div`
  flex: 0 0 55%;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CategoryTitle = styled.h2`
  flex: 0 0 10%;
  width: 100%;
  border-bottom: 1px solid #3c3c3c;
  color: #bfa34b;
  text-align: left;
`;

export const ItemsList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
