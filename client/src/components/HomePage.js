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
  FCInfosContainer,
} from '../styles/HomePageStyle';

export const HomePage = () => {
  const { freeCompInfos, error, isLoading } = useFreeCompanyInfos(
    '9232660711086328552'
  );

  const {
    freecompany: {
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
    freecompanymembers,
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
        <FCInfosContainer>
          <FCReputation reputation={reputation} />
          <FCFocus focus={focus} />
          <FCRanking rank={rank} ranking={fCRanking} />
          <FCSeeking seeking={seeking} />
        </FCInfosContainer>
        <MembersList freeCompanyMembers={freecompanymembers} />
      </HomePageContainer>
    )
  );
};
