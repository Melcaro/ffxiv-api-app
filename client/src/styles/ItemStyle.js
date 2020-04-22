import styled from 'styled-components';

export const ItemContainer = styled.div`
  flex: 0 0 35%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1%;
`;

export const ImgContainer = styled.div`
  flex: 0 0 15%;
`;

export const ItemImg = styled.img`
  width: 100%;
`;
export const ItemDetails = styled.div`
  flex: 0 0 80%;
  padding-left: 1%;
`;

export const CategoryName = styled.p`
  text-align: left;
  font-weight: bold;
  margin: 0;
`;

export const ItemName = styled.p`
  text-align: left;
  font-size: 0.9em;
  margin: 0;
`;
