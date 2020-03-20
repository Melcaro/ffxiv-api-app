import React from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>{name}</h1>
      <p>{title}</p>
      {activeClassJob && (
        <p>
          Job: {activeClassJob.name} / lvl {activeClassJob.level}
        </p>
      )}
      <p>Birthday: {nameDay}</p>
      <p>Guardian Deity: {guardianDeity}</p>
      <p>{bio}</p>
      <p>
        Race: {race} / {tribe} {gender}
      </p>
      {freeCompany && (
        <Link to={`/freeCompany/${freeCompanyId}`}>
          Free Company: <span>{freeCompany}</span>
        </Link>
      )}
      {grandCompany && (
        <p>
          Grand Company: {grandCompany.nameid} / {grandCompany.rankid}
        </p>
      )}
      <p>Start town: {town}</p>
      <p>
        Server: {server} / {dC}
      </p>
    </div>
  );
};
