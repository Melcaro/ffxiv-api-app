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
} from '../styles/FreeCompanyPageStyle';

export const FreeCompanyPage = (props) => {
  const { freeCompanyId } = props.match.params;
  const { freeCompInfos, error, isLoading } = useFreeCompanyInfos(
    freeCompanyId
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
        src="http://i.imgur.com/dEhv7on.gif"
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
