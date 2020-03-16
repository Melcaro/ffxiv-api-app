import React from 'react';

import { useMemberInfos } from '../services/memberHook';

import { MemberIdentity } from './MemberIdentity';
import { MemberGearSet } from './MemberGearSet';
import { MemberAttribute } from './MemberAttribute';
import { MemberAchievement } from './MemberAchievement';

export const MemberPage = props => {
  const { memberID } = props.match.params;
  const { memberInfos, error, isLoading } = useMemberInfos(memberID);

  const {
    memberAchievements,
    characterInfos: {
      activeClassJob,
      bio,
      classJobs,
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
    minions,
    mounts,
    freeCompanyName,
  } = memberInfos;

  const loader = isLoading && (
    <div>
      <h2>LOADING...</h2>
      <iframe
        src="https://giphy.com/embed/gpl1p4PeUVpg4"
        width="480"
        height="427"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );

  return (
    loader || (
      <div>
        <MemberGearSet gearSet={gearSet} portrait={portrait} />
        <MemberIdentity
          activeClassJob={activeClassJob}
          bio={bio}
          dC={dc}
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
        <MemberAchievement achievement={memberAchievements} />
        <MemberAttribute
          classJobs={classJobs}
          minions={minions}
          mounts={mounts}
        />
      </div>
    )
  );
};
