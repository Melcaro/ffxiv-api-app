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

import { MemberPageContainer } from '../styles/MemberPageStyle';

export const MemberPage = (props) => {
  const { memberID } = props.match.params;
  const { memberInfos, error, isLoading } = useMemberInfos(memberID);

  const {
    memberAchievements,
    characterInfos: {
      activeClassJob,
      bio,
      classJobs,
      freeCompanyId,
      dc,
      gearSet,
      gender,
      grandCompany,
      guardianDeity,
      characterName,
      nameday,
      portrait,
      race,
      server,
      title,
      town,
      tribe,
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
        <MemberGearSet gearSet={gearSet} portrait={portrait} />
        <MemberIdentity
          activeClassJob={activeClassJob}
          bio={bio}
          dC={dc}
          freeCompanyId={freeCompanyId}
          name={characterName}
          nameDay={nameday}
          race={race}
          server={server}
          title={title}
          town={town}
          tribe={tribe}
          gender={gender}
          grandCompany={grandCompany}
          guardianDeity={guardianDeity}
          freeCompany={freeCompanyName}
        />
        <MemberAttribute classJobs={classJobs} />
      </MemberPageContainer>
    )
  );
};
