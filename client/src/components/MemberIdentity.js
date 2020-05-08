import React from 'react';
import { Link } from 'react-router-dom';

import {
  IdentityContainer,
  CharacterName,
  SpanCategory,
  SpanValue,
  FCLink,
  FCName,
} from '../styles/MemberIdentityStyle';

export const MemberIdentity = ({
  classIcon, // Keep icons until API allows to use them whithout dowloading all of them on local
  className,
  jobIcon,
  jobName,
  level,
  bio,
  dC,
  freeCompanyId,
  name,
  nameDay,
  raceName,
  server,
  titleName,
  townIcon,
  townName,
  tribeName,
  grandCompany,
  deityIcon,
  deityName,
  freeCompany,
}) => {
  return (
    <IdentityContainer>
      <CharacterName>{name}</CharacterName>
      <div>
        <SpanCategory>Title: </SpanCategory> <SpanValue>{titleName}</SpanValue>
      </div>
      {className && (
        <div>
          <SpanCategory>Class: </SpanCategory>{' '}
          <SpanValue>{className} </SpanValue>
          <SpanCategory> Job: </SpanCategory> <SpanValue>{jobName} </SpanValue>
          <SpanCategory> Level: </SpanCategory> <SpanValue>{level}</SpanValue>
        </div>
      )}
      <div>
        <SpanCategory>Birthday: </SpanCategory>
        <SpanValue>{nameDay}</SpanValue>
      </div>
      <div>
        <SpanCategory>Guardian Deity: </SpanCategory>{' '}
        <SpanValue>{deityName}</SpanValue>
      </div>
      <div>
        <SpanCategory>Bio: </SpanCategory>
        <SpanValue>{bio}</SpanValue>
      </div>
      <div>
        <SpanCategory>Race: </SpanCategory>
        <SpanValue>{raceName}</SpanValue>
        <SpanCategory>Tribe: </SpanCategory>
        <SpanValue>{tribeName}</SpanValue>
      </div>
      <div>
        <SpanCategory>Start town: </SpanCategory>
        <SpanValue>{townName}</SpanValue>
      </div>
      <div>
        <SpanCategory>Server: </SpanCategory>
        <SpanValue>
          {server} / {dC}
        </SpanValue>
      </div>
      {freeCompany && (
        <FCLink to={`/freeCompany/${freeCompanyId}`}>
          <SpanCategory>Free Company: </SpanCategory>
          <FCName>{freeCompany}</FCName>
        </FCLink>
      )}
      {grandCompany && (
        <div>
          <SpanCategory>Grand Company: </SpanCategory>
          <SpanValue>
            {grandCompany.nameid} / {grandCompany.rankid}
          </SpanValue>
        </div>
      )}
    </IdentityContainer>
  );
};
