import React from 'react';

import { useMemberInfos } from '../services/memberHook';

import { MemberIdentity } from './MemberIdentity';
import { MemberGearSet } from './MemberGearSet';
import { MemberAttribute } from './MemberAttribute';
import { MemberAchievement } from './MemberAchievement';

export const MemberPage = props => {
  const { memberID } = props.match.params;
  const { memberInfos, error, isLoading } = useMemberInfos(memberID);
  console.log(memberInfos);

  const {
    Achievement,
    Character: {
      ActiveClassJob,
      Bio,
      ClassJobs,
      DC,
      GearSet,
      Gear,
      GearKey,
      Gender,
      GrandCompany,
      GuardianDeity,
      Name,
      Nameday,
      Portrait,
      Race,
      Server,
      Title,
      Town,
      Tribe,
    },
    Minions,
    Mounts,
    FreeCompany,
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

  console.log(memberInfos);
  return (
    loader || (
      <div>
        <MemberGearSet
          gearSet={GearSet}
          gear={Gear}
          gearKey={GearKey}
          portrait={Portrait}
        />
        <MemberIdentity
          activeClassJob={ActiveClassJob}
          bio={Bio}
          dC={DC}
          name={Name}
          nameDay={Nameday}
          race={Race}
          server={Server}
          title={Title}
          town={Town}
          tribe={Tribe}
          gender={Gender}
          grandCompany={GrandCompany}
          guardianDeity={GuardianDeity}
          freeCompany={FreeCompany}
        />
        <MemberAchievement achievement={Achievement} />
        <MemberAttribute
          classJobs={ClassJobs}
          minions={Minions}
          mounts={Mounts}
        />
      </div>
    )
  );
};
