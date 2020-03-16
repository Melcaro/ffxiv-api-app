import React from 'react';

import { useFreeCompanyInfos } from '../services/companyHook';

import { FCIdentity } from './FCIdentity';
import { MembersList } from './MembersList';
import { FCRanking } from './FCRanking';
import { FCReputation } from './FCReputation';
import { FCFocus } from './FCFocus';
import { FCSeeking } from './FCSeeking';

export const HomePage = () => {
  const { freeCompInfos, error, isLoading } = useFreeCompanyInfos(
    'Les Chatons Sales',
    'Odin'
  );

  console.log('infos', freeCompInfos);
  const {
    freeCompany: {
      id: ID,
      estate,
      active,
      activemembers: activeMembers,
      server,
      dc,
      formed,
      grandcompany: grandCompany,
      name,
      recruitment,
      reputation,
      slogan,
      tag,
      rank,
      ranking: fCRanking,
      seeking,
      crest,
      focus,
    },
    freeCompanyMembers,
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
          active={active}
          activeMembers={activeMembers}
          crest={crest}
          server={server}
          dc={dc}
          formed={formed}
          grandCompany={grandCompany}
          name={name}
          slogan={slogan}
          tag={tag}
          estate={estate}
        />
        <MembersList freeCompanyMembers={freeCompanyMembers} />
        <FCRanking rank={rank} ranking={fCRanking} />
        <FCReputation reputation={reputation} />
        <FCFocus focus={focus} />
        <FCSeeking seeking={seeking} />
      </div>
    )
  );
};
