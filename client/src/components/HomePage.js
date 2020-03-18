import React from 'react';

import { useFreeCompanyInfos } from '../services/companyHook';

import { FCIdentity } from './FCIdentity';
import { MembersList } from './MembersList';
import { FCRanking } from './FCRanking';
import { FCReputation } from './FCReputation';
import { FCFocus } from './FCFocus';
import { FCSeeking } from './FCSeeking';

import {
  StyledLoader,
  LoaderTitle,
  HomePageContainer,
} from '../styles/HomePageStyle';

export const HomePage = () => {
  const { freeCompInfos, error, isLoading } = useFreeCompanyInfos(
    'Les Chatons Sales',
    'Odin'
  );

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
    <StyledLoader>
      <LoaderTitle>LOADING...</LoaderTitle>
      <iframe
        src="https://giphy.com/embed/gpl1p4PeUVpg4"
        width="480"
        height="427"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </StyledLoader>
  );
  return (
    loader || (
      <HomePageContainer>
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
        <FCRanking rank={rank} ranking={fCRanking} />
        <FCReputation reputation={reputation} />
        <FCFocus focus={focus} />
        <FCSeeking seeking={seeking} />
        <MembersList freeCompanyMembers={freeCompanyMembers} />
      </HomePageContainer>
    )
  );
};
