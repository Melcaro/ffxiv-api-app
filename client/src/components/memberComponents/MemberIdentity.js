import React from 'react';

import {
  IdentityContainer,
  CharacterName,
  SpanCategory,
  FCLink,
  FCName,
  IdentityDetail,
  MultiDetails,
  Detail,
} from '../styles/MemberIdentityStyle';

export const MemberIdentity = ({
  classIcon,
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
  grandCompanyName,
  grandCompanyRank,
  deityIcon,
  deityName,
  freeCompany,
}) => {
  return (
    <IdentityContainer>
      <CharacterName>{name}</CharacterName>
      <IdentityDetail>
        <SpanCategory>Title: </SpanCategory> {titleName}
      </IdentityDetail>
      {className && (
        <MultiDetails>
          <Detail>
            <SpanCategory>Class: </SpanCategory>
            {className}
          </Detail>
          <Detail>
            <SpanCategory> Job: </SpanCategory> {jobName}
          </Detail>
          <Detail>
            <SpanCategory> Level: </SpanCategory> {level}
          </Detail>
        </MultiDetails>
      )}
      <IdentityDetail>
        <SpanCategory>Birthday: </SpanCategory>
        {nameDay}
      </IdentityDetail>
      <IdentityDetail>
        <SpanCategory>Guardian Deity: </SpanCategory> {deityName}
      </IdentityDetail>
      <IdentityDetail>
        <SpanCategory>Bio: </SpanCategory>
        {bio}
      </IdentityDetail>
      <MultiDetails>
        <Detail>
          <SpanCategory>Race: </SpanCategory>
          {raceName}
        </Detail>
        <Detail>
          <SpanCategory>Tribe: </SpanCategory>
          {tribeName}
        </Detail>
      </MultiDetails>
      <IdentityDetail>
        <SpanCategory>Start town: </SpanCategory>
        {townName}
      </IdentityDetail>
      <IdentityDetail>
        <SpanCategory>Server: </SpanCategory>
        {server} / {dC}
      </IdentityDetail>
      {freeCompany && (
        <FCLink to={`/freeCompany/${freeCompanyId}`}>
          <SpanCategory>Free Company: </SpanCategory>
          <FCName>{freeCompany}</FCName>
        </FCLink>
      )}
      {grandCompanyName && (
        <IdentityDetail>
          <SpanCategory>Grand Company: </SpanCategory>
          {grandCompanyName} / <SpanCategory>Rank: </SpanCategory>
          {grandCompanyRank}
        </IdentityDetail>
      )}
    </IdentityContainer>
  );
};
