import React from 'react';

import {
  FCIdentityContainer,
  CrestContainer,
  ImgContainer,
  CrestImg,
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
  estate,
}) => {
  return (
    <FCIdentityContainer>
      <CrestContainer>
        {crest &&
          crest.map(image => (
            <ImgContainer>
              <CrestImg src={image} alt="Free Company Crest" />
            </ImgContainer>
          ))}
      </CrestContainer>
      <h2>IDENTITY</h2>
      <div>
        <h3>{name}</h3>
        <p>{slogan}</p>
        <span>Server:{server}</span>
        <span>DC:{dc}</span>
        <span>Formed:{formed}</span>
        <span>Active: {active}</span>
        <span>Active Members:{activeMembers}</span>
        <span>Grand Company:{grandCompany}</span>
        <span>Tag: {tag}</span>
        {estate && (
          <div>
            <span>Estate</span>
            <span>{estate.Greeting}</span>
            <span>{estate.Name}</span>
            <span>{estate.Plot}</span>
          </div>
        )}
      </div>
    </FCIdentityContainer>
  );
};
