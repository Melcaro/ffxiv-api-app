import React from 'react';
import { Link } from 'react-router-dom';

export const MemberIdentity = ({
  activeClassJob,
  bio,
  dC,
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
          Job: {activeClassJob.Name} / lvl {activeClassJob.Level}
        </p>
      )}
      <p>Birthday: {nameDay}</p>
      <p>Guardian Deity: {guardianDeity}</p>
      <p>{bio}</p>
      <p>
        Race: {race} / {tribe} {gender}
      </p>
      {freeCompany && (
        <p>
          Free Company: <span>{freeCompany.Name}</span>
        </p>
      )}
      {grandCompany && (
        <p>
          Grand Company: {grandCompany.NameID} / {grandCompany.RankID}
        </p>
      )}
      <p>Start town: {town}</p>
      <p>
        Server: {server} / {dC}
      </p>
    </div>
  );
};
