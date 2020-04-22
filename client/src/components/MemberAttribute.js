import React from 'react';

import {
  AttributesContainer,
  ContainerName,
  ClassLists,
  ClassContainer,
  ClassName,
} from '../styles/MemberAttributeStyle';

export const MemberAttribute = ({ classJobs = [] }) => {
  return (
    <AttributesContainer>
      <ContainerName>Class & Jobs</ContainerName>
      <ClassLists>
        {classJobs &&
          classJobs.map(({ ClassID, Level, Name }) => (
            <ClassContainer key={ClassID}>
              <ClassName>{Name}: </ClassName>
              <span> level {Level}</span>
            </ClassContainer>
          ))}
      </ClassLists>
    </AttributesContainer>
  );
};
