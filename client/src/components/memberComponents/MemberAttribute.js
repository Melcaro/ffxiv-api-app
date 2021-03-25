import React from 'react';

import {
  AttributesContainer,
  ContainerName,
  ClassLists,
  ClassContainer,
  ClassName,
  IconContainer,
  JobIcon,
} from '../../styles/MemberAttributeStyle';

export const MemberAttribute = ({ classJobs = [] }) => {
  return (
    <AttributesContainer>
      <ContainerName>Jobs</ContainerName>
      <ClassLists>
        {classJobs &&
          classJobs.map(
            ({
              Job: { ID: jobID, Icon: jobIcon, Name: jobName },
              Level,
              Name,
            }) => (
              <ClassContainer key={jobID}>
                <IconContainer>
                  <JobIcon src={`https://xivapi.com/${jobIcon}`} alt="jobPic" />
                </IconContainer>
                <div>
                  <ClassName>{jobName}: </ClassName>
                  <span> level {Level}</span>
                </div>
              </ClassContainer>
            )
          )}
      </ClassLists>
    </AttributesContainer>
  );
};
