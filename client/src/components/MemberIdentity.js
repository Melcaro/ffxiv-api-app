import React from 'react';
import { Link } from 'react-router-dom';

import {
  IdentityContainer,
  CharacterName,
  IdentityDetail,
  SpanCategory,
  FCLink,
  FCName,
} from '../styles/MemberIdentityStyle';

export const MemberIdentity = ({
  activeClassJob,
  bio,
  dC,
  freeCompanyId,
  name,
  nameDay,
  race,
  server,
  title,
  town,
  tribe,
  gender,
  grandCompany,
  guardianDeity,
  freeCompany,
}) => {
  return (
    <IdentityContainer>
      <CharacterName>{name}</CharacterName>
      {/* <p>{title}</p> */}
      {activeClassJob && (
        <IdentityDetail>
          <SpanCategory>Job:</SpanCategory> {activeClassJob.name}
          <br />
          <SpanCategory>Level:</SpanCategory> {activeClassJob.level}
        </IdentityDetail>
      )}
      <IdentityDetail>
        <SpanCategory>Birthday:</SpanCategory> {nameDay}
      </IdentityDetail>
      <IdentityDetail>
        <SpanCategory>Guardian Deity:</SpanCategory> {guardianDeity}
      </IdentityDetail>
      <IdentityDetail>{bio}</IdentityDetail>
      <IdentityDetail>
        <SpanCategory>Race:</SpanCategory> {race} / {tribe} {gender}
      </IdentityDetail>
      {freeCompany && (
        <FCLink to={`/freeCompany/${freeCompanyId}`}>
          <SpanCategory>Free Company:</SpanCategory>{' '}
          <FCName>{freeCompany}</FCName>
        </FCLink>
      )}
      {grandCompany && (
        <IdentityDetail>
          <SpanCategory>Grand Company:</SpanCategory> {grandCompany.nameid} /{' '}
          {grandCompany.rankid}
        </IdentityDetail>
      )}
      <IdentityDetail>
        <SpanCategory>Start town:</SpanCategory> {town}
      </IdentityDetail>
      <IdentityDetail>
        <SpanCategory>Server:</SpanCategory> {server} / {dC}
      </IdentityDetail>
    </IdentityContainer>
  );
};
