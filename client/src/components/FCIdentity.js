import React from 'react';

import {
  FCIdentityContainer,
  CrestContainer,
  ImgContainer,
  CrestImg,
  InfosContainer,
  CompanyName,
  CompanySlogan,
  CompanyInfos,
  BoldedSubtitle,
} from '../styles/FCIdentityStyle';

export const FCIdentity = ({
  active,
  activeMembers,
  crest,
  server,
  dc,
  formed,
  grandCompany,
  name,
  slogan,
  tag,
}) => {
  return (
    <FCIdentityContainer>
      <CrestContainer>
        {crest &&
          crest.map(image => (
              <CrestImg src={image} alt="Free Company Crest" />
          ))}
      </CrestContainer>
      <InfosContainer>
        <CompanyName>{name}</CompanyName>
        {slogan && <CompanySlogan>{slogan}</CompanySlogan>}
        <CompanyInfos>
          <BoldedSubtitle>Server:</BoldedSubtitle> {server} ({dc})
        </CompanyInfos>
        <CompanyInfos>
          <BoldedSubtitle>Formed: </BoldedSubtitle>
          {formed}
        </CompanyInfos>
        <CompanyInfos>
          <BoldedSubtitle>Active: </BoldedSubtitle> {active}
        </CompanyInfos>
        <CompanyInfos>
          <BoldedSubtitle>Active Members: </BoldedSubtitle>
          {activeMembers}
        </CompanyInfos>
        <CompanyInfos>
          <BoldedSubtitle>Grand Company: </BoldedSubtitle>
          {grandCompany}
        </CompanyInfos>
        <CompanyInfos>
          <BoldedSubtitle>Tag:</BoldedSubtitle> {tag}
        </CompanyInfos>
      </InfosContainer>
    </FCIdentityContainer>
  );
};
