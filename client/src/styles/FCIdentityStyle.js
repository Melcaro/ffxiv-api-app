import styled from 'styled-components';

export const FCIdentityContainer = styled.div`
  border: 1px solid #3c3c3c;
  height: 14vh;
  flex: 0 0 40%;
  display: flex;
  margin-bottom: 1%;
  background-color: #1c1c1c;
  align-self: center;
`;

export const CrestContainer = styled.div`
  flex: 0 0 10%;
`;

export const CrestImg = styled.img`
  width: 100%;
  border: 1px solid #3c3c3c;
  position: relative;
  top: ${(props) => props.index * -78}px;
`;

export const InfosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 5%;
`;

export const CompanyName = styled.h3`
  flex: 0 0 100%;
  text-align: left;
  font-size: 1.5em;
  margin: 0;
  color: #bfa34b;
`;

export const CompanySlogan = styled.p``;

export const CompanyInfos = styled.span`
  flex: 0 0 50%;
  text-align: left;
`;

export const BoldedSubtitle = styled.span`
  /* color: #bfa34b; */
  font-weight: bold;
`;
