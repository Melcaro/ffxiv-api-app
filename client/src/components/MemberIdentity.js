import React from 'react';
import { Link } from 'react-router-dom';

export const MemberIdentity = ({
  activeClassJob,
  classID,
  jobID,
  bio,
  dC,
  freeCompany,
  name,
  nameDay,
  race,
  server,
  title,
  town,
  tribe,
  gender,
  level,
  grandCompany,
  guardianDeity,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{title}</p>
      <p>
        {activeClassJob} / lvl {level}
      </p>
      <p>
        Class : {classID} / Job: {jobID}
      </p>
      <p>Birthday: {nameDay}</p>
      <p>Guardian Deity: {guardianDeity}</p>
      <p>{bio}</p>
      <p>
        Race: {race} / {tribe} {gender}
      </p>
      <p>
        Free Company <span>{freeCompany}</span>
      </p>
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
