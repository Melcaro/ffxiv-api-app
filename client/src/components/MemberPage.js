import React from 'react';

import { useMemberInfos } from '../services/memberHook';

import { MemberIdentity } from './MemberIdentity';
import { MemberGearSet } from './MemberGearSet';
import { MemberAttribute } from './MemberAttribute';

export const MemberPage = props => {
  const { memberID } = props.match.params;
  const { memberInfos, error, isLoading } = useMemberInfos(memberID);

  const {
    ActiveClassJob,
    Bio,
    ClassJobs,
    DC,
    FreeCompanyId,
    GearSet,
    ClassID,
    Gear,
    GearKey,
    JobID,
    Level,
    Gender,
    GrandCompany,
    GuardianDeity,
    Minions,
    Mounts,
    Name,
    Nameday,
    Portrait,
    Race,
    Server,
    Title,
    Town,
    Tribe,
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
          classID={ClassID}
          jobID={JobID}
          bio={Bio}
          dC={DC}
          freeCompany={FreeCompanyId}
          name={Name}
          nameDay={Nameday}
          race={Race}
          server={Server}
          title={Title}
          town={Town}
          tribe={Tribe}
          gender={Gender}
          level={Level}
          grandCompany={GrandCompany}
          guardianDeity={GuardianDeity}
        />
        <MemberAttribute
          classJobs={ClassJobs}
          minions={Minions}
          mounts={Mounts}
        />
      </div>
    )
  );
};
