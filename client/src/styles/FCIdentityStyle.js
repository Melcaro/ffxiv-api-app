import styled from 'styled-components';

export const FCIdentityContainer = styled.div`
  border: 1px solid brown;
  height: 14vh;
  flex: 0 0 42%;
  display: flex;
`;

export const CrestContainer = styled.div`
  flex: 0 0 15%;
`;

export const CrestImg = styled.img`
  width: 100%;
  position: relative;
  top: ${props => props.index * -123}px;
`;

export const InfosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: 1%;
`;

export const CompanyName = styled.h3`
  flex: 0 0 100%;
  text-align: left;
  font-size: 1.2em;
`;

export const CompanySlogan = styled.p``;

export const CompanyInfos = styled.span`
  flex: 0 0 40%;
  text-align: left;
`;

export const BoldedSubtitle = styled.span`
  font-weight: bold;
`;
