import React from 'react';

import { useFreeCompanyInfos } from '../services/companyHook';

import { FCIdentity } from './FCIdentity';
import { MembersList } from './MembersLxist';
import { FCRanking } from './FCRanking';
import { FCReputation } from './FCReputation';
import { FCFocus } from './FCFocus';
import { FCSeeking } from './FCSeeking';

export const HomePage = () => {
  const { freeCompInfos, error, isLoading } = useFreeCompanyInfos(
    'Les Chatons Sales',
    'Odin'
  );

  const {
    FreeCompany: {
      ID,
      Estate,
      Active,
      ActiveMembers,
      Server,
      DC,
      Formed,
      GrandCompany,
      Name,
      Recruitment,
      Reputation,
      Slogan,
      Tag,
      Rank,
      Ranking: fCRanking,
      Seeking,
      Crest,
      Focus,
    },
    FreeCompanyMembers,
  } = freeCompInfos;

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
        <FCIdentity
          active={Active}
          activeMembers={ActiveMembers}
          crest={Crest}
          server={Server}
          dc={DC}
          formed={Formed}
          grandCompany={GrandCompany}
          name={Name}
          slogan={Slogan}
          tag={Tag}
          estate={Estate}
        />
        <MembersList freeCompanyMembers={FreeCompanyMembers} />
        <FCRanking rank={Rank} ranking={fCRanking} />
        <FCReputation reputation={Reputation} />
        <FCFocus focus={Focus} />
        <FCSeeking seeking={Seeking} />
      </div>
    )
  );
};
