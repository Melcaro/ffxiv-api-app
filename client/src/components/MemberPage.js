import React from 'react';

import { useMemberInfos } from '../services/memberHook';

import { MemberIdentity } from './MemberIdentity';
import { MemberGearSet } from './MemberGearSet';
import { MemberAttribute } from './MemberAttribute';

import {
  StyledLoader,
  LoaderTitle,
  ImgContainer,
  LoaderImg,
} from '../styles/FreeCompanyPageStyle';

import {
  MemberPageContainer,
  MemberDetailsContainer,
} from '../styles/MemberPageStyle';

export const MemberPage = (props) => {
  const { memberID } = props.match.params;
  const { memberInfos, error, isLoading } = useMemberInfos(memberID);

  const {
    characterInfos: {
      classIcon,
      className,
      jobIcon,
      jobName,
      memberLevel,
      bio,
      dc,
      freeCompanyId,
      characterName,
      classJobs,
      nameday,
      raceName,
      server,
      titleIcon,
      titleName,
      townIcon,
      townName,
      tribeName,
      grandCompany,
      deityIcon,
      deityName,
      portrait,
      gearSet,
    },
    freeCompanyName,
  } = memberInfos;

  const loader = isLoading && (
    <StyledLoader>
      <LoaderTitle>LOADING...</LoaderTitle>
      <ImgContainer>
        <LoaderImg src="http://i.imgur.com/dEhv7on.gif" alt="loader img" />
      </ImgContainer>
    </StyledLoader>
  );

  return (
    loader || (
      <MemberPageContainer>
        <MemberDetailsContainer>
          <MemberIdentity
            classIcon={classIcon}
            className={className}
            jobIcon={jobIcon}
            jobName={jobName}
            level={memberLevel}
            bio={bio}
            dC={dc}
            freeCompanyId={freeCompanyId}
            name={characterName}
            nameDay={nameday}
            raceName={raceName}
            server={server}
            titleIcon={titleIcon}
            titleName={titleName}
            townIcon={townIcon}
            townName={townName}
            tribeName={tribeName}
            grandCompany={grandCompany}
            deityIcon={deityIcon}
            deityName={deityName}
            freeCompany={freeCompanyName}
          />
          <MemberAttribute classJobs={classJobs} />
        </MemberDetailsContainer>
        <MemberGearSet gearSet={gearSet} portrait={portrait} />
      </MemberPageContainer>
    )
  );
};
